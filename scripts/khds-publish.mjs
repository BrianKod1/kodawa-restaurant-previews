import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {validate,report,read,safe,files,hash,atomic,statePath,historyPath,trackingData,trackingPlan} from './khds-validate.mjs';
import {args} from './khds-start-case.mjs';
export function publish(root,options){
 const result=validate(root);report(result);if(!result.ok)throw Error('Validation failed; publication blocked');
 const s=result.state,a={...s.activeCase,trackingChanges:trackingPlan(root,s.activeCase).trackingChanges};
 if(!options['dry-run']&&s.workflowStatus!=='publishable')throw Error('Manifest is not publishable');
 if(!options['dry-run']&&!options.confirm)throw Error('Explicit --confirm requires user approval after the validation report');
 if(options.report!==result.digest)throw Error('Approval report digest missing or stale');
 const journalPath=a.stagingPath+'/publication.json';if(fs.existsSync(safe(root,journalPath)))throw Error('Publication journal exists; recover before retrying');
 const destination=safe(root,a.canonicalPath),source=safe(root,a.stagingPath+'/dossier');
 const promoted=files(root,a.stagingPath+'/dossier').map(p=>({from:p,to:a.canonicalPath+p.split('/').at(-1),sha256:hash(fs.readFileSync(safe(root,p)))}));
 const history=read(root,historyPath);
 const tracking=(a.trackingChanges||[]).map((t,i)=>{const from=a.stagingPath+`/tracking/${i}.md`;const data=trackingData(root,a,i);const old=fs.readFileSync(safe(root,t.path));return {...t,from,data,old};});
 if(new Set(tracking.map(t=>t.path)).size!==tracking.length)throw Error('Duplicate tracking destination');
 // All inputs, paths, hashes and operations are checked before the first write.
 if(fs.existsSync(destination))throw Error('Destination exists');
 for(const t of tracking)if(fs.existsSync(safe(root,t.path+'.khds-pending')))throw Error('Pending tracking operation requires recovery');
 if(options['dry-run'])return {dryRun:true,publicationApproved:false,workflowStatus:s.workflowStatus,promoted,tracking:tracking.map(t=>t.path)};
 const record={status:'prepared',approvedReport:result.digest,approvedAt:new Date().toISOString(),case:a,promoted,tracking:tracking.map(t=>({path:t.path,beforeSha256:t.beforeSha256,afterSha256:hash(t.data),originalBase64:t.old.toString('base64')})),previousState:s,previousHistory:history};
 fs.writeFileSync(safe(root,journalPath),JSON.stringify(record,null,2)+'\n',{flag:'wx'});
 atomic(root,statePath,{...s,workflowStatus:'publishing',publication:{journalPath,status:'prepared'}});
 try{
  fs.mkdirSync(path.dirname(destination),{recursive:true});fs.renameSync(source,destination);
  for(const t of tracking){fs.writeFileSync(safe(root,t.path+'.khds-pending'),t.data,{flag:'wx'});fs.renameSync(safe(root,t.path+'.khds-pending'),safe(root,t.path));}
  const completed=Object.fromEntries(['caseNumber','institutionName','slug','institutionType','sector','canonicalPath'].map(k=>[k,a[k]]));completed.dossierComplete=true;completed.administrativeReconciliation=true;
  atomic(root,historyPath,{...history,cases:[...history.cases,{...completed,publicationJournal:journalPath}]});
  atomic(root,journalPath,{...record,status:'promoted'});
  atomic(root,statePath,{...s,workflowStatus:'idle',latestCompletedCase:completed,expectedNextCase:a.caseNumber+1,researchAuthorized:false,authorization:null,activeCase:null,publication:{journalPath,status:'promoted'}});
  return {promoted};
 }catch(e){throw Error(`Publication interrupted: ${e.message}. STOP; recover using ${journalPath}; do not restart or regenerate.`);}
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{console.log(JSON.stringify(publish(process.cwd(),args(process.argv.slice(2))),null,2));}catch(e){console.error('FAIL '+e.message);process.exitCode=1;}}
