import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
export const statePath = 'khds/state/current-case.json';
export const historyPath = 'khds/state/case-history.json';
export const startPendingPath = 'khds/state/start-pending.json';
export const trackingPaths = ['khds/research/README.md','khds/research/validation/README.md','khds/research/validation/dashboard.md','khds/research/validation/candidate-patterns.md','khds/patterns/registry.md','khds/research/institutions-comparison/README.md','khds/research/institutions/README.md','khds/research/institutions/wellness/README.md'];
export const controls = ['khds/AGENTS.md','.codex/skills/khds-research/SKILL.md','.codex/skills/khds-research/references/case-schema.md',statePath,historyPath,'scripts/khds-start-case.mjs','scripts/khds-validate.mjs','scripts/khds-publish.mjs','scripts/khds-review.mjs','scripts/tests/khds-control.test.mjs'];
export const required = ['README.md','discovery.md','reservation.md','pre-arrival.md','arrival.md','stay.md','dining.md','departure.md','atmosphere.md','photography.md','story.md','knowledge-extraction.md'];
export const hash = data => crypto.createHash('sha256').update(data).digest('hex');
export function trackingPlan(root,a,reviewedControls){
 const p=a.stagingPath+'/tracking-plan.json';
 if(!fs.existsSync(safe(root,p)))return {trackingChanges:a.trackingChanges||[],controlChanges:reviewedControls || read(root,statePath).reconciliationReview?.controlChanges || []};
 const plan=read(root,p);
 if(plan.schemaVersion!==1||plan.baseLockSha256!==hash(JSON.stringify(a))||!plan.approvedBy?.trim()||!plan.approvedAt||!Array.isArray(plan.additions)||!Array.isArray(plan.controlChanges))throw Error('Invalid tracking-plan amendment');
 const trackingChanges=[...(a.trackingChanges||[]),...plan.additions];
 if(new Set(trackingChanges.map(t=>t.path)).size!==trackingChanges.length)throw Error('Duplicate tracking destination');
 for(const t of trackingChanges){if(!trackingPaths.includes(t.path))throw Error('Tracking destination not permitted');const old=fs.readFileSync(safe(root,t.path));if(hash(old)!==t.beforeSha256)throw Error('Tracking source changed since lock');if(t.anchors)trackingAnchors(old.toString('utf8'),t.anchors);}
 for(const c of (reviewedControls || read(root,statePath).reconciliationReview?.controlChanges || plan.controlChanges)){if(!controls.includes(c.path)||[statePath,historyPath].includes(c.path))throw Error('Invalid reviewed control path');if((c.baseBlob===null ? git(root,'ls-tree','HEAD','--',c.path)!=='' : git(root,'rev-parse','HEAD:'+c.path)!==c.baseBlob)||hash(fs.readFileSync(safe(root,c.path)))!==c.sha256)throw Error('Reviewed control changed: '+c.path);}
 return {...plan,controlChanges:reviewedControls || read(root,statePath).reconciliationReview?.controlChanges || plan.controlChanges,trackingChanges};
}
export function publicationSummaryErrors(content,a,h){
 const active=content.replace(/<!-- KHDS-HISTORY-START -->[\s\S]*?<!-- KHDS-HISTORY-END -->/g,'');
 const blocks=[...active.matchAll(/<!-- KHDS-CURRENT-START -->\s*([\s\S]*?)<!-- KHDS-CURRENT-END -->/g)];
 const errors=[];
 if(blocks.length!==1)return ['exactly one post-publication current summary required'];
 const summary=blocks[0][1],count=h.cases.filter(c=>c.dossierComplete&&c.canonicalPath?.startsWith('khds/research/institutions/')).length+1;
 const latest=summary.match(/^Latest completed case:\s*#(\d+)\s*[—-]\s*(.+)$/m);
 if(!latest||+latest[1]!==a.caseNumber||latest[2].trim()!==a.institutionName)errors.push('incorrect latest completed case in proposed publication');
 if(!new RegExp('^Completed institution dossiers: '+count+'\\s*$','m').test(summary))errors.push('incorrect completed institution count in proposed publication');
 if(!new RegExp('^Next case: #'+(a.caseNumber+1)+' — unselected and unstarted; research not authorized\\.\\s*$','m').test(summary))errors.push('incorrect next case status in proposed publication');
 if(/awaiting publication|active pilot|pilot (?:staged|awaiting)|not (?:a )?completed canonical case|workflow(?: status)?:\s*staging/i.test(active))errors.push('active staging-only status in proposed publication');
 for(const m of active.matchAll(/(?:latest completed case:\s*#|case #)(\d+)([^\n]*)/gi)){if((/latest completed case:/i.test(m[0])||/remains the latest completed/i.test(m[2]))&&+m[1]!==a.caseNumber)errors.push('previous latest case retained in active publication text');}
 for(const m of active.matchAll(/(?:completed institution (?:dossiers|cases)|canonical (?:completed )?institution count)\s*(?::|stays|remains)\s*(\d+)/gi))if(+m[1]!==count)errors.push('stale active completion count');
 return errors;
}
export function trackingAnchors(text,anchors){
 if(!Array.isArray(anchors)||!anchors.length||anchors.some(x=>typeof x!=='string'||!x.length))throw Error('Tracking anchors must be nonempty strings');
 let end=0;return anchors.map(anchor=>{const at=text.indexOf(anchor);if(at<end||at<0||text.indexOf(anchor,at+1)!==-1)throw Error('Tracking anchor missing, ambiguous or out of order');end=at+anchor.length;return {at,end};});
}
export function trackingData(root,a,i){
 const t=a.trackingChanges[i],old=fs.readFileSync(safe(root,t.path)),data=fs.readFileSync(safe(root,a.stagingPath+`/tracking/${i}.md`));
 if(hash(old)!==t.beforeSha256)throw Error('Tracking source changed since lock');
 let result=data;
 if(t.anchors){const original=old.toString('utf8'),ranges=trackingAnchors(original,t.anchors);const chunks=data.toString('utf8').replace(/^<!-- KHDS \{[^\n]+\} -->\r?\n/,'').split('\n<!-- KHDS-EDIT -->\n');if(chunks.length!==ranges.length)throw Error('Tracking replacement count differs from locked anchors');let text=original;for(let n=ranges.length-1;n>=0;n--)text=text.slice(0,ranges[n].at)+chunks[n]+text.slice(ranges[n].end);result=Buffer.from(text);}
 if(result.length-old.length>20000||result.length>Math.max(old.length*1.5,10000))throw Error('unusually large tracking growth');
 return result;
}
export function git(root,...args) {return execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();}
export function read(root,p) {return JSON.parse(fs.readFileSync(safe(root,p),'utf8'));}
export function safe(root,p) {
 if(typeof p!=='string'||!p||p.includes('\\')||path.isAbsolute(p)||p.split('/').some(x=>x==='..'||x==='.')||p.includes(':')) throw Error(`Unsafe path: ${p}`);
 const full=path.resolve(root,p); if(!full.startsWith(path.resolve(root)+path.sep)) throw Error(`Outside root: ${p}`);
 let cur=path.resolve(root); for(const part of p.split('/').filter(Boolean)){cur=path.join(cur,part);if(fs.existsSync(cur)&&fs.lstatSync(cur).isSymbolicLink())throw Error(`Symlink forbidden: ${p}`);}return full;
}
export function files(root,p) {const full=safe(root,p);if(!fs.existsSync(full))return [];return fs.readdirSync(full,{withFileTypes:true}).flatMap(d=>{const q=p.replace(/\/$/,'')+'/'+d.name;safe(root,q);return d.isDirectory()?files(root,q):[q];}).sort();}
export function changed(root) {
 const raw=execFileSync('git',['status','--porcelain=v1','-z','--untracked-files=all'],{cwd:root,encoding:'utf8'}).split('\0');const out=[];
 for(let i=0;i<raw.length;i++){if(!raw[i])continue;const code=raw[i].slice(0,2);out.push(raw[i].slice(3));if(/[RC]/.test(code)&&raw[i+1])out.push(raw[++i]);}return [...new Set(out)].sort();
}
export function identity(c) {
 for(const k of ['caseNumber','institutionName','slug','institutionType','sector','canonicalPath'])if(!c?.[k])throw Error(`Missing identity field: ${k}`);
 if(!Number.isSafeInteger(c.caseNumber)||c.caseNumber<1||! /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(c.slug)||! /^[a-z0-9-]+$/.test(c.sector))throw Error('Invalid case number, slug or sector');
 const expected=`khds/research/institutions/${c.sector}/${c.slug}/`;if(c.canonicalPath!==expected)throw Error(`Canonical path must be ${expected}`);
}
export function atomic(root,p,obj) {const dest=safe(root,p),tmp=dest+'.tmp';fs.writeFileSync(tmp,JSON.stringify(obj,null,2)+'\n',{flag:'wx'});fs.renameSync(tmp,dest);}
export function controlSnapshot(root){return changed(root).filter(p=>controls.includes(p)&&![statePath,historyPath].includes(p)).map(p=>({path:p,baseBlob:git(root,'ls-tree','HEAD','--',p)?git(root,'rev-parse','HEAD:'+p):null,sha256:hash(fs.readFileSync(safe(root,p)))}));}
export function reviewContent(root,s){
 const normalized={...s,workflowStatus:'staging'};delete normalized.reconciliationReview;
 const a=s.activeCase;
 const paths=[historyPath,...controls.filter(p=>p!==statePath&&p!==historyPath&&fs.existsSync(safe(root,p))),...files(root,a.stagingPath).filter(p=>!p.endsWith('/review.json')&&!p.endsWith('/review.json.tmp')), ...(a.trackingChanges||[]).map(t=>t.path)];
 const planPath=a.stagingPath+'/tracking-plan.json';if(fs.existsSync(safe(root,planPath)))paths.push(...read(root,planPath).additions.map(t=>t.path));
 return hash(JSON.stringify([normalized,[...new Set(paths)].sort().map(p=>[p,hash(fs.readFileSync(safe(root,p)))]) ]));
}
export function validate(root,{controlOnly=false,resumeOnly=false,allowedChanges=[],reviewedControls,reviewTransition=false}={}) {
 const mode=controlOnly?"control":resumeOnly?"resume":"publication";
 const errors=[],warnings=[],add=(p,r)=>errors.push(`${p}: ${r}`);let s,h;const digest=[];
 try {
  root=path.resolve(root);if(path.resolve(git(root,'rev-parse','--show-toplevel'))!==root)throw Error('Run at repository root');
  s=read(root,statePath);h=read(root,historyPath);
  for(const p of [startPendingPath,startPendingPath+'.tmp',...(!reviewTransition?[statePath+'.tmp']:[])])if(fs.existsSync(safe(root,p)))add(p,'interrupted operation requires recovery');
  if(s.schemaVersion!==1||h.schemaVersion!==1)throw Error('Unsupported schema');
  if(git(root,'branch','--show-current')!==s.expectedBranch)add(statePath,'branch mismatch');
  identity(s.latestCompletedCase);if(!fs.existsSync(safe(root,s.latestCompletedCase.canonicalPath)))add(statePath,'canonical dossier does not exist');
  if(typeof s.latestCompletedCase.dossierComplete!=='boolean'||typeof s.latestCompletedCase.administrativeReconciliation!=='boolean'||typeof s.researchAuthorized!=='boolean')add(statePath,'completion/authorization fields must be booleans');
  if(!Array.isArray(s.disagreements)||!Array.isArray(h.cases)||!Array.isArray(h.priorIdentities))throw Error('Invalid state/history arrays');
  if(s.expectedNextCase!==s.latestCompletedCase.caseNumber+1)add(statePath,'incorrect expected next case');
  if(!h.cases.some(c=>JSON.stringify(Object.fromEntries(Object.keys(s.latestCompletedCase).map(k=>[k,c[k]])))===JSON.stringify(s.latestCompletedCase)))add(historyPath,'latest completed identity/status differs from manifest');
  if(new Set(h.cases.map(c=>c.caseNumber)).size!==h.cases.length||new Set(h.cases.map(c=>c.slug)).size!==h.cases.length)add(historyPath,'duplicate case number or slug');
  const statuses=['reconciliation-required','idle','research-authorized','staging','publishable','publishing'];if(!statuses.includes(s.workflowStatus))add(statePath,'unknown workflow status');
  if(s.workflowStatus==='reconciliation-required'&&(s.researchAuthorized||s.activeCase||s.latestCompletedCase.administrativeReconciliation||!s.disagreements?.length))add(statePath,'inconsistent reconciliation block');
  if(s.workflowStatus==='reconciliation-required')warnings.push('Case #21 administrative reconciliation remains unresolved; research and publication blocked.');
  if(['research-authorized','staging','publishable'].includes(s.workflowStatus)&&(!s.researchAuthorized||!s.authorization?.approvedBy||!s.authorization?.approvedAt||!s.latestCompletedCase.administrativeReconciliation||s.disagreements.length))add(statePath,'research lacks authorization or reconciliation');
  if(allowedChanges.length&&!controlOnly)throw Error("Extra change allowlist is only supported for control checks");
  for(const p of allowedChanges)safe(root,p);
  const a=s.activeCase, allowed=new Set(controlOnly?[...controls,...allowedChanges]:[statePath,historyPath]);
  if(reviewTransition)allowed.add(statePath+'.tmp');
  if(a){
   const plan=trackingPlan(root,a,reviewedControls),effective={...a,trackingChanges:plan.trackingChanges};
   for(const c of plan.controlChanges)allowed.add(c.path);
   if(fs.existsSync(safe(root,a.stagingPath+'/tracking-plan.json')))digest.push([a.stagingPath+'/tracking-plan.json',hash(fs.readFileSync(safe(root,a.stagingPath+'/tracking-plan.json')))]);
   identity(a);if(a.caseNumber!==s.expectedNextCase)add(statePath,'active case number differs from expected next');
   if(h.cases.some(c=>c.caseNumber===a.caseNumber||c.slug===a.slug))add(statePath,'active identity duplicates history');
   if(a.stagingPath!==`khds/staging/case-${a.caseNumber}-${a.slug}`)add(statePath,'incorrect staging path');
   const lock=read(root,a.stagingPath+'/lock.json');if(JSON.stringify(lock)!==JSON.stringify(a))add(a.stagingPath+'/lock.json','locked identity/state mismatch');
   for(const k of ['caseNumber','institutionName','slug','institutionType','sector','canonicalPath'])if(s.authorization?.identity?.[k]!==a[k])add(statePath,`authorization identity mismatch: ${k}`);
   if(a.requiredFiles&&JSON.stringify(a.requiredFiles)!==JSON.stringify(required))add(statePath,'locked required files mismatch');
   if(a.requiredFiles){const journal=read(root,a.stagingPath+'/start.json');if(JSON.stringify(journal.nextState.activeCase)!==JSON.stringify(a)||JSON.stringify(journal.nextState.authorization)!==JSON.stringify(s.authorization))add(statePath,'start journal differs from active lock/authorization');digest.push([a.stagingPath+'/start.json',hash(JSON.stringify(journal))]);}
   if(fs.existsSync(safe(root,a.canonicalPath)))add(a.canonicalPath,'destination already exists');
   const staged=files(root,a.stagingPath);for(const p of staged)allowed.add(p);
   const expected=new Set(['lock.json','tracking-plan.json','review.json',...(reviewTransition?['review.json.tmp']:[]),...(a.requiredFiles?['start.json']:[]),...required.map(f=>'dossier/'+f),...plan.trackingChanges.map((_,i)=>`tracking/${i}.md`)]);
   for(const p of staged)if(!expected.has(p.slice(a.stagingPath.length+1)))add(p,'unexpected staging file');
   if(!controlOnly&&!resumeOnly)for(const f of required)if(!fs.existsSync(safe(root,a.stagingPath+'/dossier/'+f)))add(a.stagingPath+'/dossier/'+f,'missing required dossier file');
   const prior=[...h.cases,...h.priorIdentities].filter(x=>x.slug!==a.slug);
   for(const p of staged.filter(x=>!controlOnly&&x.endsWith('.md'))){
    const content=fs.readFileSync(safe(root,p),'utf8');digest.push([p,hash(content)]);
    const metadata=/^<!-- KHDS (\{[^\n]+\}) -->\r?\n/.exec(content);let meta;try{meta=JSON.parse(metadata?.[1]||'null');}catch{}
    for(const k of ['caseNumber','institutionName','slug','institutionType','sector','canonicalPath'])if(meta?.[k]!==a[k])add(p,`identity mismatch: ${k}`);
    // Historical comparisons are explicitly bounded; metadata and current statements remain authoritative.
    const active=content.replace(/<!-- KHDS-HISTORY-START -->[\s\S]*?<!-- KHDS-HISTORY-END -->/g,'');
    if((content.match(/KHDS-HISTORY-START/g)||[]).length!==(content.match(/KHDS-HISTORY-END/g)||[]).length)add(p,'unbalanced historical markers');
    for(const [label,key] of [['institution','institutionName'],['institution name','institutionName'],['slug','slug'],['institution type','institutionType'],['sector','sector'],['canonical path','canonicalPath']]){const re=new RegExp('^'+label+':\\s*(.+)$','gim');for(const m of active.matchAll(re))if(m[1].trim()!==String(a[key]))add(p,`identity mismatch in prose: ${label}`);}
    const norm=x=>x.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
    // Mentions and comparative evidence are legitimate. Reject older identities only
    // when presented as the document title or an explicitly active identity/status.
    const identityLines=active.split(/\r?\n/).filter(line=>/^(?:#{1,6}\s+|(?:current|latest|active)\s+(?:institution|case|research)|institution(?: name)?\s*:|slug\s*:)/i.test(line.trim())&&!/\b(?:comparison|compared|versus|historical)\b/i.test(line));
    for(const line of identityLines)for(const old of prior)for(const value of [old.slug,old.institutionName])if(value&&(' '+norm(line)+' ').includes(' '+norm(value)+' '))add(p,`prior institution in active identity: ${value}`);
    for(const m of active.matchAll(/^(?:#{1,6}\s*)?(?:KHDS\s+)?(?:case|restaurant)\s*#\s*(\d+)(?:\s*[-\u2013\u2014:].*)?\s*$/gim))if(+m[1]!==a.caseNumber)add(p,`wrong active case number: ${m[1]}`);
    for(const m of active.matchAll(/(?:current|next)\s+(?:research\s+)?case\s*[:#-]?\s*(\d+)/gi))if(+m[1]!==a.caseNumber+(m[0].toLowerCase().startsWith('next')?1:0))add(p,`conflicting active statement: ${m[0]}`);
    const lines=content.split(/\r?\n/).map(x=>x.trim()).filter(Boolean),seen=new Set();for(let i=0;i<=lines.length-12;i++){const block=lines.slice(i,i+12).join('\n');if(block.length<400)continue;if(seen.has(block)){add(p,'duplicate substantial section (12 nonblank lines)');break;}seen.add(block);}
    if(Buffer.byteLength(content)>100000)add(p,'file exceeds 100000-byte growth limit');
    const refs=[...content.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]);refs.push(...[...content.matchAll(/\bkhds\/[a-zA-Z0-9_./-]+/g)].map(m=>m[0]));
    for(let ref of refs){ref=ref.replace(/^<|>$/g,'').split('#')[0];if(!ref||/^(https?:|mailto:)/.test(ref))continue;
     try{let target=ref.startsWith('khds/')?ref:path.posix.normalize(path.posix.join(a.canonicalPath,decodeURIComponent(ref)));if(target.startsWith(a.canonicalPath))target=a.stagingPath+'/dossier/'+target.slice(a.canonicalPath.length);if(!fs.existsSync(safe(root,target)))add(p,`missing internal path: ${ref}`);}catch(e){add(p,e.message);}
    }
   }
   for(const [i,t] of plan.trackingChanges.entries()){safe(root,t.path);if(!trackingPaths.includes(t.path))add(t.path,'tracking destination not permitted');const old=fs.readFileSync(safe(root,t.path));const replacement=a.stagingPath+`/tracking/${i}.md`;if(!fs.existsSync(safe(root,replacement))){if(!controlOnly&&!resumeOnly)add(replacement,'missing tracking replacement');}else {try{const assembled=trackingData(root,effective,i);if(!controlOnly&&!resumeOnly){const newText=fs.readFileSync(safe(root,replacement),'utf8');for(const error of publicationSummaryErrors(newText,a,h))add(replacement,error);const summary=assembled.toString('utf8').match(/<!-- KHDS-CURRENT-START -->[\s\S]*?<!-- KHDS-CURRENT-END -->/g)||[];if(summary.length!==1)add(t.path,'assembled canonical current summary missing or duplicated');}}catch(e){add(replacement,e.message);}}if(hash(old)!==t.beforeSha256)add(t.path,'tracking source changed since lock');}
  }else if(!controlOnly)add(statePath,'no active staged case');
  if(['staging','publishable','publishing'].includes(s.workflowStatus)&&!a)add(statePath,'workflow requires an active case');
  if(a&&!['staging','publishable','publishing'].includes(s.workflowStatus))add(statePath,'active case incompatible with workflow');
  if(s.workflowStatus==='publishing')add(statePath,'interrupted publication requires recovery');
  if(s.workflowStatus==='publishable'&&(!s.reconciliationReview?.approvedBy||!s.reconciliationReview?.approvedAt))add(statePath,'publishable state requires explicit administrative reconciliation review');
  if(a&&!reviewTransition){
   const rp=a.stagingPath+'/review.json';
   if(s.workflowStatus==='publishable'){
    const r=read(root,rp);
    if(JSON.stringify(r.nextState)!==JSON.stringify(s)||r.contentDigest!==reviewContent(root,s))add(rp,'reviewed content changed; review required');
    digest.push([rp,hash(fs.readFileSync(safe(root,rp)))]);
   }else if(fs.existsSync(safe(root,rp)))add(rp,'interrupted review requires recovery');
  }
  if(controlOnly)warnings.push('Control consistency only: not a research-publication approval.');
  if(resumeOnly)warnings.push('Resume checks existing content only; missing required files still block publication.');
  for(const p of changed(root))if(!allowed.has(p))add(p,'outside explicit change allowlist');
  for(const p of [statePath,historyPath,...controls.filter(x=>fs.existsSync(safe(root,x)))])digest.push([p,hash(fs.readFileSync(safe(root,p)))]);
 }catch(e){add(statePath,e.message);}
 return {ok:errors.length===0,mode,errors,warnings,digest:hash(JSON.stringify([mode,digest])),state:s};
}
export function report(result){console.log(`${result.ok?'PASS':'FAIL'} KHDS ${result.mode} validation ${result.digest}`);for(const x of result.errors)console.log('ERROR '+x);for(const x of result.warnings)console.log('NOTE '+x);}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){const result=validate(process.cwd(),{reviewTransition:process.argv.includes('--for-review'),reviewedControls:process.argv.includes('--review-controls')?controlSnapshot(process.cwd()):undefined,controlOnly:process.argv.includes('--control-only'),resumeOnly:process.argv.includes('--resume'),allowedChanges:process.argv.flatMap((arg,i)=>arg==='--allow-path'?[process.argv[i+1]]:[])});report(result);process.exitCode=result.ok?0:1;}
