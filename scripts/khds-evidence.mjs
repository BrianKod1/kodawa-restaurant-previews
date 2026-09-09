import fs from 'node:fs';
import path from 'node:path';
export const dimensions=['discovery','reservation','pre-arrival','arrival','stay','dining','departure','atmosphere','photography','story'];
const nonempty=x=>typeof x==='string'&&x.trim().length>0;
export function coverageErrors(coverage,sources){
 const errors=[];
 if(coverage?.schemaVersion!==1||!Array.isArray(coverage.dimensions)||sources?.schemaVersion!==1||!Array.isArray(sources.sources))return ['coverage and source ledger schema required'];
 const ledger=new Map(sources.sources.map(s=>[s.id,s]));
 if(ledger.size!==sources.sources.length)errors.push('duplicate source IDs');
 for(const s of sources.sources){
  if(!nonempty(s.id)||!/^https:\/\//.test(s.url)||!/^\d{4}-\d{2}-\d{2}$/.test(s.accessDate)||!nonempty(s.sourceDate)||!nonempty(s.method)||!nonempty(s.sections)||!['inspected','partial','blocked','discovery-only'].includes(s.access))errors.push('incomplete source ledger entry '+s.id);
  if(s.access==='inspected'&&/snippet|search extract|loading shell/i.test(s.method))errors.push('discovery cannot count as inspected '+s.id);
 }
 if(coverage.dimensions.length!==10||new Set(coverage.dimensions.map(d=>d.dimension)).size!==10)errors.push('exactly ten unique dimension coverage records required');
 for(const name of dimensions){
  const d=coverage.dimensions.find(d=>d.dimension===name);if(!d){errors.push('missing coverage '+name);continue;}
  for(const k of ['question','scopeChange','reason','nextEvidence'])if(!nonempty(d[k]))errors.push(name+': missing '+k);
  if(!['sufficient','partial','blocked'].includes(d.rating))errors.push(name+': invalid coverage rating');
  if(!Array.isArray(d.sources)||!Array.isArray(d.observations)||!Array.isArray(d.unanswered)) {errors.push(name+': coverage arrays required');continue;}
  for(const id of d.sources)if(!ledger.has(id)||!['inspected','partial'].includes(ledger.get(id).access))errors.push(name+': source is not directly inspected '+id);
  for(const o of d.observations)if(!nonempty(o.text)||!Array.isArray(o.sources)||!o.sources.length||o.sources.some(id=>!d.sources.includes(id)))errors.push(name+': observation lacks inspected supporting source');
  if(d.rating==='sufficient'&&(!d.sources.length||!d.observations.length||d.unanswered.length))errors.push(name+': partial evidence cannot be sufficient');
  if(d.rating!=='sufficient'&&!d.unanswered.length)errors.push(name+': unanswered questions required');
  if(d.rating==='blocked'&&d.observations.length)errors.push(name+': use partial when relevant evidence exists');
 }
 return errors;
}
// Resolve clickable Markdown links from their actual publication location. Code/path examples are not hyperlinks.
export function markdownLinkErrors(root,text,location,mapTarget=x=>x){
 const errors=[],body=text.replace(/```[\s\S]*?```/g,'').replace(/`[^`\n]+`/g,'');
 const refs=[...body.matchAll(/\]\(<?([^\s)>]+)>?(?:\s+"[^"]*")?\)/g)].map(m=>m[1]);
 for(const href of refs){if(/^(https?:|mailto:)/i.test(href))continue;let target;try{const [p,anchor]=decodeURIComponent(href).split('#');target=p?path.posix.normalize(path.posix.join(path.posix.dirname(location),p)):location;if(target.startsWith('../')||path.posix.isAbsolute(target))throw Error('outside repository');target=mapTarget(target);const full=path.resolve(root,target);if(!full.startsWith(path.resolve(root)+path.sep)||!fs.existsSync(full))throw Error('missing target');if(anchor&&target.endsWith('.md')){const contents=fs.readFileSync(full,'utf8');const anchors=[...contents.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m=>m[1].toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu,'').replace(/ /g,'-'));if(!anchors.includes(anchor)&&!contents.includes('id="'+anchor+'"'))throw Error('missing heading');}}catch(e){errors.push(location+': broken relative link / missing internal path '+href+' ('+e.message+')');}}
 return errors;
}

export function researchTextErrors(text,id,history){
 const errors=[],active=text.replace(/<!-- KHDS-HISTORY-START -->[\s\S]*?<!-- KHDS-HISTORY-END -->/g,'');
 if((text.match(/KHDS-HISTORY-START/g)||[]).length!==(text.match(/KHDS-HISTORY-END/g)||[]).length)errors.push('unbalanced historical markers');
 for(const [label,key] of [['institution','institutionName'],['institution name','institutionName'],['slug','slug'],['institution type','institutionType'],['sector','sector'],['canonical path','canonicalPath']])for(const m of active.matchAll(new RegExp('^'+label+':\\s*(.+)$','gim')))if(m[1].trim()!==String(id[key]))errors.push('identity mismatch: '+label);
 const norm=x=>x.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 for(const line of active.split(/\r?\n/).filter(l=>/^(?:#{1,6}\s+|(?:current|latest|active)\s+(?:institution|case|research))/i.test(l)&&!/\b(?:comparison|compared|versus|historical)\b/i.test(l)))for(const old of [...history.cases,...(history.priorIdentities||[])].filter(c=>c.slug!==id.slug))for(const value of [old.slug,old.institutionName])if(value&&(' '+norm(line)+' ').includes(' '+norm(value)+' '))errors.push('prior institution in active identity');
 const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean),seen=new Set();for(let i=0;i<=lines.length-12;i++){const b=lines.slice(i,i+12).join('\n');if(b.length<400)continue;if(seen.has(b)){errors.push('duplicate substantial section');break;}seen.add(b);}
 return errors;
}
