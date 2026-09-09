import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {args} from './khds-start-case.mjs';
import {read,safe,files,hash,atomic,git,changed,identity,required,controls,statePath,historyPath,trackingPaths} from './khds-validate.mjs';
import {coverageErrors,markdownLinkErrors,researchTextErrors,dimensions} from './khds-evidence.mjs';
export const revisionPath='khds/state/revision.json';
const revisionHistory='khds/state/revision-history.json';
const sha=(root,p)=>hash(fs.readFileSync(safe(root,p)));
const snapshot=(root,paths)=>Object.fromEntries(paths.map(p=>[p,sha(root,p)]));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
function assertSame(root,values){for(const [p,h] of Object.entries(values))if(sha(root,p)!==h)throw Error('Baseline changed: '+p);}
function dossierHashes(root,p){return Object.fromEntries(files(root,p).map(f=>[f.slice(p.replace(/\/$/,'').length+1),sha(root,f)]));}
const amendmentName='workflow/preserved-input-amendment.json';
const amendmentControls=['scripts/khds-revise.mjs','scripts/tests/khds-revision.test.mjs'];
const lockInputs=r=>hash(JSON.stringify([r.identity,r.revision,r.original,r.baselines,r.preserved]));
function amendment(root,r){const p=r.stagingPath+'/'+amendmentName;if(fs.existsSync(safe(root,p+'.tmp')))throw Error('Interrupted amendment; rerun amend-preserved with the same authorization');return fs.existsSync(safe(root,p))?read(root,p):null;}
function verifyAmendment(root,r,a){
 if(!a)return;
 const exportPath=r.identity.canonicalPath.replace(/\/$/,'')+'.zip';
 if(a.schemaVersion!==1||a.lockInputs!==lockInputs(r)||a.path!==exportPath||a.expectedHash!==r.preserved[a.path]||!a.expectedHash||!a.authorizedBy?.trim()||!a.reason?.trim()||!a.date||a.authorizationPath!==a.path||a.authorizationHash!==a.expectedHash)throw Error('Invalid preserved-input authorization');
 if(fs.existsSync(safe(root,a.path)))throw Error('Intentionally removed export exists again');
 if(!same(Object.keys(a.controls),amendmentControls))throw Error('Unexpected amendment controls');
 assertSame(root,a.controls);
}
function checkRecord(root,r,exception=amendment(root,r)){
 if(r.schemaVersion!==1||!r.approvedBy?.trim()||!r.approvedAt||!['staging','reviewed','publishing','published'].includes(r.status))throw Error('Invalid revision record');
 identity(r.identity);
 if(r.stagingPath!==`khds/revisions/case-${r.identity.caseNumber}-${r.identity.slug}-r${r.revision}`||!Number.isSafeInteger(r.revision)||r.revision<1)throw Error('Invalid revision path');
 const s=read(root,statePath),h=read(root,historyPath);
 if(s.workflowStatus!=='idle'||s.activeCase||s.researchAuthorized||s.expectedNextCase!==s.latestCompletedCase.caseNumber+1)throw Error('Unexpected case state');
 for(const k of Object.keys(r.identity))if(s.latestCompletedCase[k]!==r.identity[k])throw Error('Revision identity differs from latest completed case');
 if(!h.cases.some(c=>Object.keys(r.identity).every(k=>c[k]===r.identity[k])&&c.dossierComplete))throw Error('Revision identity absent from completed history');
 if(git(root,'branch','--show-current')!==s.expectedBranch||path.resolve(git(root,'rev-parse','--show-toplevel'))!==path.resolve(root))throw Error('Repository/branch mismatch');
 verifyAmendment(root,r,exception);
 assertSame(root,Object.fromEntries(Object.entries(r.baselines).filter(([p])=>!exception||!amendmentControls.includes(p))));assertSame(root,Object.fromEntries(Object.entries(r.preserved).filter(([p])=>p!==exception?.path)));
 const allowed=new Set([revisionPath,...Object.keys(r.preserved),...(exception?amendmentControls:[])]);
 for(const p of changed(root))if(!allowed.has(p)&&!p.startsWith(r.stagingPath+'/')&&!(r.status==='publishing'&&(p.startsWith(r.identity.canonicalPath)||[revisionHistory,revisionHistory+'.tmp'].includes(p))))throw Error('Unrelated change: '+p);
}
function content(root,r){return hash(JSON.stringify([r.identity,r.revision,r.baselines,r.preserved,files(root,r.stagingPath).map(p=>[p,sha(root,p)])]));}
export function validateRevision(root,{forReview=false,resume=false}={}){
 const errors=[];let r,digest;
 try{
  if(fs.existsSync(safe(root,revisionPath+'.tmp')))throw Error('Interrupted revision metadata; use recover');
  r=read(root,revisionPath);checkRecord(root,r);
  if(!['staging','reviewed'].includes(r.status))throw Error('Revision not staged; use recover for interrupted publication');
  if(!same(dossierHashes(root,r.identity.canonicalPath),r.original))throw Error('Published dossier changed');
  for(const n of Object.keys(r.original)){const p=r.stagingPath+'/workflow/original-dossier/'+n;if(fs.existsSync(safe(root,p))&&sha(root,p)!==r.original[n])errors.push('Original audit history changed: '+n);}
  const base=r.stagingPath+'/dossier/',inventory=files(root,base).map(p=>p.slice(base.length));
  const expected=[...required,'coverage.json','sources.json'];
  for(const p of inventory)if(!expected.includes(p))errors.push('Unexpected dossier file '+p);
  for(const f of expected)if(!inventory.includes(f)&&!resume)errors.push('Missing dossier file '+f);
  for(const f of inventory.filter(p=>p.endsWith('.md'))){const text=fs.readFileSync(safe(root,base+f),'utf8'),m=/^<!-- KHDS (\{[^\n]+\}) -->\r?\n/.exec(text);let meta;try{meta=JSON.parse(m?.[1]||'null');}catch{}if(!same(meta,r.identity))errors.push(f+': identity mismatch');
   if(Buffer.byteLength(text)>100000)errors.push(f+': excessive growth');
   const body=text.replace(/<!-- KHDS-HISTORY-START -->[\s\S]*?<!-- KHDS-HISTORY-END -->/g,'');
   for(const match of body.matchAll(/^(?:#{1,6}\s*)?(?:KHDS\s+)?Case\s*#(\d+)/gim))if(+match[1]!==r.identity.caseNumber)errors.push(f+': wrong case number');
   for(const match of body.matchAll(/^Current institution:\s*(.+)$/gim))if(match[1].trim()!==r.identity.institutionName)errors.push(f+': wrong institution');
   errors.push(...researchTextErrors(text,r.identity,read(root,historyPath)));
   errors.push(...markdownLinkErrors(root,text,r.identity.canonicalPath+f,t=>t.startsWith(r.identity.canonicalPath)?base+t.slice(r.identity.canonicalPath.length):t));
  }
  if(!resume){
   const c=read(root,base+'coverage.json'),s=read(root,base+'sources.json');errors.push(...coverageErrors(c,s));
   const readme=fs.readFileSync(safe(root,base+'README.md'),'utf8');
   for(const d of c.dimensions||[]){const expectedRow=`| [${d.dimension}](${d.dimension}.md) | ${d.rating} |`;if(!readme.includes(expectedRow))errors.push('README coverage disagrees: '+d.dimension);const text=fs.readFileSync(safe(root,base+d.dimension+'.md'),'utf8');if(!text.includes('Public-evidence coverage: '+d.rating))errors.push('Dimension coverage disagrees: '+d.dimension);}
  }
  const expectedWorkflow=new Set(['REVIEW.md','source-access.json','deferred-agents.patch','preserved-input-amendment.json',...Object.keys(r.original).map(n=>'original-dossier/'+n)]);
  for(const p of files(root,r.stagingPath+'/workflow'))if(!expectedWorkflow.has(p.slice((r.stagingPath+'/workflow/').length)))errors.push('Unexpected workflow artifact '+p);
  for(const p of files(root,r.stagingPath))if(!p.startsWith(base)&&!p.startsWith(r.stagingPath+'/workflow/'))errors.push('Unexpected revision artifact '+p);
  const bound=content(root,r);if(r.status==='reviewed'&&!forReview&&r.review?.contentDigest!==bound)errors.push('Unreviewed content changed; renewed review required');
  digest=hash(JSON.stringify([r,bound]));
 }catch(e){errors.push(e.message);}
 return {ok:!errors.length,digest,errors,status:r?.status,caseNumber:r?.identity.caseNumber,coverageTruth:'Human review required; structural consistency only'};
}
function initialize(root,r){
 checkRecord(root,r);if(!same(dossierHashes(root,r.identity.canonicalPath),r.original))throw Error('Published dossier changed');
 for(const n of Object.keys(r.original)){const from=safe(root,r.identity.canonicalPath+n);for(const folder of ['dossier','workflow/original-dossier']){const dest=safe(root,r.stagingPath+'/'+folder+'/'+n);fs.mkdirSync(path.dirname(dest),{recursive:true});if(!fs.existsSync(dest))fs.copyFileSync(from,dest,fs.constants.COPYFILE_EXCL);else if(folder!=='dossier'&&hash(fs.readFileSync(dest))!==r.original[n])throw Error('Conflicting audit history '+n);}}
 return {staged:true,stagingPath:r.stagingPath,caseNumber:r.identity.caseNumber,revision:r.revision};
}
function recoverPublication(root,r,dryRun){
 checkRecord(root,r);const old=r.stagingPath+'/previous',stage=r.stagingPath+'/dossier',dest=r.identity.canonicalPath.replace(/\/$/,'');
 const current=fs.existsSync(safe(root,dest))?dossierHashes(root,dest):null,previous=fs.existsSync(safe(root,old))?dossierHashes(root,old):null,proposed=fs.existsSync(safe(root,stage))?dossierHashes(root,stage):null;
 if(previous&&!same(previous,r.original))throw Error('Conflicting publication backup');
 if(current&&!same(current,r.original)&&!same(current,r.publication.files))throw Error('Conflicting canonical content');
 if(proposed&&!same(proposed,r.publication.files))throw Error('Unreviewed staged content');
 if(!previous&&(!same(current,r.original)||!proposed))throw Error('Missing recovery originals');
 if(previous&&same(current,r.original))throw Error('Ambiguous duplicate original');
 if(!proposed&&!same(current,r.publication.files))throw Error('Missing reviewed publication');
 const nextHistory={schemaVersion:1,revisions:[...r.previousRevisionHistory.revisions,{caseNumber:r.identity.caseNumber,revision:r.revision,review:r.review,publication:r.publication,record:r.stagingPath+'/workflow/REVIEW.md'}]};
 if(fs.existsSync(safe(root,revisionHistory))&&!same(read(root,revisionHistory),r.previousRevisionHistory)&&!same(read(root,revisionHistory),nextHistory))throw Error('Conflicting revision history');
 if(fs.existsSync(safe(root,revisionHistory+'.tmp'))&&!same(read(root,revisionHistory+'.tmp'),nextHistory))throw Error('Conflicting revision history temporary file');
 if(dryRun)return {recoverable:true};
 if(!previous)fs.renameSync(safe(root,dest),safe(root,old));
 if(proposed)fs.renameSync(safe(root,stage),safe(root,dest));
 if(fs.existsSync(safe(root,revisionHistory+'.tmp')))fs.renameSync(safe(root,revisionHistory+'.tmp'),safe(root,revisionHistory));
 if(!fs.existsSync(safe(root,revisionHistory))||!same(read(root,revisionHistory),nextHistory))atomic(root,revisionHistory,nextHistory);
 atomic(root,revisionPath,{...r,status:'published'});return {published:true,canonicalPath:r.identity.canonicalPath,caseNumber:r.identity.caseNumber,completionCountsChanged:false};
}
export function revise(root,action,o={}){
 if(action==='amend-preserved'){
  const r=read(root,revisionPath),p=r.stagingPath+'/'+amendmentName;
  if(r.status!=='staging'||fs.existsSync(safe(root,revisionPath+'.tmp')))throw Error('Amendment requires uninterrupted staging');
  if(!o['authorize-by']?.trim()||!o.reason?.trim()||+o.case!==r.identity.caseNumber||o.slug!==r.identity.slug||o.path!==o['authorize-path']||o['expected-hash']!==o['authorize-hash']||o['review-controls']!=='yes')throw Error('Matching explicit identity, path/hash authorization and reviewed controls required');
  const a={schemaVersion:1,lockInputs:lockInputs(r),path:o.path,expectedHash:o['expected-hash'],authorizationPath:o['authorize-path'],authorizationHash:o['authorize-hash'],authorizedBy:o['authorize-by'].trim(),reason:o.reason.trim(),date:new Date().toISOString(),controls:snapshot(root,amendmentControls)};
  checkRecord(root,r,a);
  if(fs.existsSync(safe(root,p)))throw Error('Amendment already recorded');
  if(fs.existsSync(safe(root,p+'.tmp'))){const pending=read(root,p+'.tmp');if(!same({...pending,date:a.date},a))throw Error('Conflicting interrupted amendment');if(o['dry-run'])return {recoverable:true};fs.renameSync(safe(root,p+'.tmp'),safe(root,p));return {amended:true,record:p,recovered:true};}
  if(o['dry-run'])return {dryRun:true,record:p};
  atomic(root,p,a);return {amended:true,record:p};
 }
 if(action==='begin'){
  if(!o['authorize-by']?.trim())throw Error('Explicit revision authorization required');
  if(fs.existsSync(safe(root,revisionPath+'.tmp')))throw Error('Interrupted revision; recover first');
  if(fs.existsSync(safe(root,revisionPath))&&read(root,revisionPath).status!=='published')throw Error('Unfinished revision');
  const s=read(root,statePath),h=read(root,historyPath);if(s.activeCase||s.workflowStatus!=='idle'||s.researchAuthorized)throw Error('Active case blocks revision');
  const id=Object.fromEntries(['caseNumber','institutionName','slug','institutionType','sector','canonicalPath'].map(k=>[k,s.latestCompletedCase[k]]));identity(id);
  if(+o.case!==id.caseNumber||o.slug!==id.slug)throw Error('Revision identity mismatch');
  const preserved=o['preserve-path']?snapshot(root,[o['preserve-path']]):{};
  if(o['preserve-path']&&(controls.includes(o['preserve-path'])||trackingPaths.includes(o['preserve-path'])||o['preserve-path'].startsWith(id.canonicalPath)||o['preserve-path'].startsWith('khds/state/')))throw Error('Cannot preserve a controlled input as unrelated');
  for(const p of changed(root))if(!(p in preserved))throw Error('Dirty working tree: '+p);
  const previousRevisionHistory=fs.existsSync(safe(root,revisionHistory))?read(root,revisionHistory):{schemaVersion:1,revisions:[]};
  const revision=previousRevisionHistory.revisions.filter(r=>r.caseNumber===id.caseNumber).length+1,stagingPath=`khds/revisions/case-${id.caseNumber}-${id.slug}-r${revision}`;
  if(fs.existsSync(safe(root,stagingPath)))throw Error('Existing revision path');
  const r={schemaVersion:1,status:'staging',identity:id,revision,stagingPath,approvedBy:o['authorize-by'].trim(),approvedAt:new Date().toISOString(),baseCommit:git(root,'rev-parse','HEAD'),original:dossierHashes(root,id.canonicalPath),baselines:snapshot(root,[...new Set([...controls,...trackingPaths, ...files(root,'khds/research/institutions/hotels')])].filter(p=>fs.existsSync(safe(root,p)))),preserved,previousRevisionHistory};
  if(!required.every(n=>n in r.original)||Object.keys(r.original).some(n=>![...required,'coverage.json','sources.json'].includes(n)))throw Error('Unexpected original inventory');
  checkRecord(root,r);if(o['dry-run'])return {dryRun:true,stagingPath};
  atomic(root,revisionPath,r);return initialize(root,r);
 }
 if(action==='recover'&&fs.existsSync(safe(root,revisionPath+'.tmp'))){
  const pending=read(root,revisionPath+'.tmp');identity(pending.identity);
  if(fs.existsSync(safe(root,revisionPath))){const old=read(root,revisionPath);if(!same(old.identity,pending.identity)||old.stagingPath!==pending.stagingPath||!same(old.baselines,pending.baselines)||!same(old.original,pending.original))throw Error('Conflicting interrupted metadata');}
  assertSame(root,pending.baselines);assertSame(root,pending.preserved);
  if(o['dry-run'])return {recoverable:true,pendingMetadata:true};
  fs.renameSync(safe(root,revisionPath+'.tmp'),safe(root,revisionPath));
 }
 const r=read(root,revisionPath);
 if(action==='recover'&&r.status==='publishing')return recoverPublication(root,r,!!o['dry-run']);
 if(action==='resume'||action==='recover') {if(r.status!=='staging')throw Error('Not a staging revision');if(o['dry-run']){checkRecord(root,r);return {recoverable:true};}return initialize(root,r);}
 if(action==='validate')return validateRevision(root,{forReview:!!o['for-review']});
 const v=validateRevision(root,{forReview:action==='review'});if(!v.ok)throw Error('Validation failed: '+v.errors.join('\n'));
 if(action==='review'){
  if(!o['approve-by']?.trim()||+o.case!==r.identity.caseNumber||o.slug!==r.identity.slug||o.report!==v.digest)throw Error('Exact identity, approval and fresh report required');
  if(o['dry-run'])return {dryRun:true};
  atomic(root,revisionPath,{...r,status:'reviewed',review:{approvedBy:o['approve-by'].trim(),approvedAt:new Date().toISOString(),contentDigest:content(root,r)}});
  return validateRevision(root);
 }
 if(action==='publish'){
  if(o.report!==v.digest)throw Error('Missing or stale publication report');
  if(o['dry-run'])return {dryRun:true,approved:r.status==='reviewed',canonicalPath:r.identity.canonicalPath};
  if(r.status!=='reviewed'||!o.confirm)throw Error('Reviewed revision and explicit publication confirmation required');
  const next={...r,status:'publishing',publication:{approvedDigest:v.digest,approvedAt:new Date().toISOString(),files:dossierHashes(root,r.stagingPath+'/dossier')}};
  atomic(root,revisionPath,next);return recoverPublication(root,next,false);
 }
 throw Error('Unknown revision action');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{const result=revise(process.cwd(),process.argv[2],args(process.argv.slice(3)));console.log(JSON.stringify(result,null,2));if(result.ok===false)process.exitCode=1;}catch(e){console.error('FAIL '+e.message);process.exitCode=1;}}
