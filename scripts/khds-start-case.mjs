import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {read,safe,git,changed,identity,hash,atomic,statePath,historyPath,validate,files,required,controls,trackingPaths,trackingAnchors,startPendingPath} from './khds-validate.mjs';
const json=value=>JSON.stringify(value,null,2)+'\n';
function finishStart(root,j,{dryRun=false}={}){
 const a=j.nextState.activeCase;
 identity(a);
 if(j.schemaVersion!==1||j.baseCommit!==git(root,'rev-parse','HEAD')||git(root,'branch','--show-current')!==j.nextState.expectedBranch)throw Error('Start recovery baseline mismatch');
 if(a.stagingPath!==`khds/staging/case-${a.caseNumber}-${a.slug}`||JSON.stringify(a.requiredFiles)!==JSON.stringify(required))throw Error('Invalid recovery lock');
 const before=JSON.parse(j.previousState);
 if(before.activeCase||!['idle','research-authorized'].includes(before.workflowStatus)||!before.latestCompletedCase.administrativeReconciliation||before.disagreements.length||a.caseNumber!==before.expectedNextCase)throw Error('Invalid recovery baseline state');
 const auth=j.nextState.authorization;
 if(!auth?.approvedBy||!auth.approvedAt||Object.keys(auth.identity).some(k=>auth.identity[k]!==a[k])||!j.nextState.researchAuthorized||j.nextState.workflowStatus!=='staging')throw Error('Invalid recovery authorization');
 const expectedState={...before,researchAuthorized:true,authorization:auth,activeCase:a,workflowStatus:'staging'};
 if(json(expectedState)!==json(j.nextState))throw Error('Recovery state contains unrelated changes');
 for(const [p,digest] of j.baselines)if(hash(fs.readFileSync(safe(root,p)))!==digest)throw Error(`Start recovery source changed: ${p}`);
 if(fs.existsSync(safe(root,a.canonicalPath)))throw Error('Canonical destination already exists');
 const lockPath=a.stagingPath+'/lock.json',donePath=a.stagingPath+'/start.json';
 const allowed=new Set([startPendingPath,startPendingPath+'.tmp',statePath,statePath+'.tmp',lockPath,lockPath+'.tmp']);
 for(const p of changed(root))if(!allowed.has(p))throw Error(`Unrelated changes block start recovery: ${p}`);
 for(const p of files(root,a.stagingPath))if(![lockPath,lockPath+'.tmp'].includes(p))throw Error(`Unexpected recovery staging file: ${p}`);
 const current=fs.readFileSync(safe(root,statePath),'utf8');
 if(current!==j.previousState&&current!==json(j.nextState))throw Error('Manifest differs from both start journal states');
 // Check every existing transaction artifact before the first recovery mutation.
 for(const [p,expected] of [[lockPath,json(a)],[lockPath+'.tmp',json(a)],[statePath+'.tmp',json(j.nextState)],[startPendingPath,json(j)],[startPendingPath+'.tmp',json(j)]])if(fs.existsSync(safe(root,p))&&fs.readFileSync(safe(root,p),'utf8')!==expected)throw Error(`Conflicting or incomplete start artifact: ${p}; preserve for review`);
 if(dryRun)return {dryRun:true,recoverable:true,activeCase:a};
 if(!fs.existsSync(safe(root,startPendingPath)))fs.renameSync(safe(root,startPendingPath+'.tmp'),safe(root,startPendingPath));
 fs.mkdirSync(safe(root,a.stagingPath+'/dossier'),{recursive:true});
 if(!fs.existsSync(safe(root,lockPath))){if(fs.existsSync(safe(root,lockPath+'.tmp')))fs.renameSync(safe(root,lockPath+'.tmp'),safe(root,lockPath));else atomic(root,lockPath,a);}
 if(current!==json(j.nextState)){if(fs.existsSync(safe(root,statePath+'.tmp')))fs.renameSync(safe(root,statePath+'.tmp'),safe(root,statePath));else atomic(root,statePath,j.nextState);}
 fs.renameSync(safe(root,startPendingPath),safe(root,donePath));
 const checked=validate(root,{resumeOnly:true});if(!checked.ok)throw Error('Start requires review: '+checked.errors.join('\n'));
 return a;
}
export function start(root,options){
 const s=read(root,statePath),h=read(root,historyPath);
 if(options['append-tracking-file']){
  if(!s.activeCase||s.workflowStatus!=='staging')throw Error('Tracking amendment requires an active staging case');
  if(!options['authorize-by']?.trim())throw Error('Tracking amendment requires explicit authorization');
  const a=s.activeCase,p=a.stagingPath+'/tracking-plan.json';
  if(fs.existsSync(safe(root,p))||fs.existsSync(safe(root,p+'.tmp')))throw Error('Existing or interrupted amendment requires review; never overwrite');
  const preflight=validate(root,{controlOnly:true});if(!preflight.ok)throw Error(preflight.errors.join('\n'));
  const additions=JSON.parse(fs.readFileSync(options['append-tracking-file'],'utf8').replace(/^\uFEFF/,''));
  if(!Array.isArray(additions)||!additions.length)throw Error('Expected nonempty tracking additions');
  const combined=[...(a.trackingChanges||[]),...additions];
  if(new Set(combined.map(t=>t.path)).size!==combined.length)throw Error('Duplicate tracking destination');
  for(const t of combined){if(!trackingPaths.includes(t.path))throw Error('Tracking destination not permitted');const old=fs.readFileSync(safe(root,t.path));if(hash(old)!==t.beforeSha256)throw Error('Tracking baseline hash mismatch');if(t.anchors)trackingAnchors(old.toString('utf8'),t.anchors);}
  const controlChanges=changed(root).filter(p=>controls.includes(p)&&![statePath,historyPath].includes(p)).map(p=>({path:p,baseBlob:git(root,'rev-parse','HEAD:'+p),sha256:hash(fs.readFileSync(safe(root,p)))}));
  const plan={schemaVersion:1,baseLockSha256:hash(JSON.stringify(a)),approvedBy:options['authorize-by'].trim(),approvedAt:new Date().toISOString(),additions,controlChanges};
  if(!options['dry-run'])atomic(root,p,plan);
  return {dryRun:!!options['dry-run'],trackingPlan:plan};
 }
 if(options['recover-start']){
  if(Object.keys(options).some(k=>!['recover-start','dry-run'].includes(k)))throw Error('Recovery uses the journal identity; do not supply start options');
  const p=fs.existsSync(safe(root,startPendingPath))?startPendingPath:startPendingPath+'.tmp';
  if(!fs.existsSync(safe(root,p)))throw Error('No interrupted start journal');
  return finishStart(root,read(root,p),{dryRun:!!options['dry-run']});
 }
 if(options.resume){
  if(!s.activeCase||!['staging','publishable'].includes(s.workflowStatus))throw Error('No resumable staged case');
  const result=validate(root,{resumeOnly:true});if(!result.ok)throw Error(result.errors.join('\n'));
  for(const [option,key] of Object.entries({case:'caseNumber',name:'institutionName',slug:'slug',type:'institutionType',sector:'sector',destination:'canonicalPath'}))if(options[option]!==undefined&&String(options[option])!==String(s.activeCase[key]))throw Error(`Resume identity mismatch: ${key}`);
  return {resumed:true,activeCase:s.activeCase,existingFiles:files(root,s.activeCase.stagingPath+'/dossier')};
 }
 if(changed(root).length)throw Error('Dirty working tree: start refused');
 if(s.activeCase||!['idle','research-authorized'].includes(s.workflowStatus))throw Error('Active or unfinished workflow: start refused');
 if(!options['authorize-by']&&(s.workflowStatus!=='research-authorized'||!s.researchAuthorized||!s.authorization?.approvedBy||!s.authorization?.approvedAt))throw Error('Research unauthorized');
 if(options['authorize-by']!==undefined&&(typeof options['authorize-by']!=='string'||!options['authorize-by'].trim()))throw Error('Authorization requires an approver');
 const preflight=validate(root,{controlOnly:true});if(!preflight.ok)throw Error(preflight.errors.join('\n'));
 const a={caseNumber:Number(options.case),institutionName:options.name,slug:options.slug,institutionType:options.type,sector:options.sector,canonicalPath:options.destination};identity(a);
 if(a.caseNumber!==s.expectedNextCase)throw Error('Wrong case number');
 const norm=x=>x.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
 if([...h.cases,...h.priorIdentities].some(c=>c.caseNumber===a.caseNumber||c.slug===a.slug||norm(c.institutionName)===norm(a.institutionName)))throw Error('Duplicate case number or institution identity');
 if(!s.latestCompletedCase.administrativeReconciliation||s.disagreements.length)throw Error('Administrative reconciliation required');
 const authorization=options['authorize-by']?{approvedBy:options['authorize-by'].trim(),approvedAt:new Date().toISOString(),identity:{...a}}:s.authorization;
 if(Object.keys(a).some(k=>authorization.identity?.[k]!==a[k]))throw Error('Identity does not match explicit research authorization');
 if(fs.existsSync(safe(root,a.canonicalPath)))throw Error('Canonical destination already exists');
 a.stagingPath=`khds/staging/case-${a.caseNumber}-${a.slug}`;a.trackingChanges=options.tracking?JSON.parse(options.tracking):[];
 if(!Array.isArray(a.trackingChanges))throw Error("tracking must be a JSON array");
 if(new Set(a.trackingChanges.map(t=>t.path)).size!==a.trackingChanges.length)throw Error('Duplicate tracking destination');
 for(const t of a.trackingChanges){if(!trackingPaths.includes(t.path))throw Error('Tracking destination not permitted');const old=fs.readFileSync(safe(root,t.path));if(hash(old)!==t.beforeSha256)throw Error("Tracking baseline hash mismatch");if(t.anchors)trackingAnchors(old.toString('utf8'),t.anchors);}
 a.requiredFiles=[...required];
 a.lockedAt=new Date().toISOString();a.baseCommit=git(root,'rev-parse','HEAD');
 if(fs.existsSync(safe(root,a.stagingPath)))throw Error('Existing staging must be recovered, never replaced');
 if(options['dry-run'])return a;
 const j={schemaVersion:1,baseCommit:a.baseCommit,previousState:fs.readFileSync(safe(root,statePath),'utf8'),nextState:{...s,researchAuthorized:true,authorization,activeCase:a,workflowStatus:'staging'},baselines:[...new Set([...controls.filter(p=>p!==statePath&&fs.existsSync(safe(root,p))),...a.trackingChanges.map(t=>t.path)])].map(p=>[p,hash(fs.readFileSync(safe(root,p)))])};
 // The initial clean-tree check precedes every write. Recovery permits only this transaction's exact artifacts.
 atomic(root,startPendingPath,j);
 return finishStart(root,j);
}
export function args(argv){const out={};for(let i=0;i<argv.length;i++){const k=argv[i];if(!k.startsWith('--'))throw Error(`Unexpected argument ${k}`);if(['--dry-run','--confirm','--resume','--recover-start'].includes(k))out[k.slice(2)]=true;else {if(!argv[i+1]||argv[i+1].startsWith('--'))throw Error(`Missing ${k}`);out[k.slice(2)]=argv[++i];}}return out;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{console.log(JSON.stringify(start(process.cwd(),args(process.argv.slice(2))),null,2));}catch(e){console.error('FAIL '+e.message);process.exitCode=1;}}
