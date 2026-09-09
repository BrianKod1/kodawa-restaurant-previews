import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {args} from './khds-start-case.mjs';
import {validate,read,safe,atomic,statePath,historyPath,controls,changed,git,hash,reviewContent} from './khds-validate.mjs';
export function review(root,o){
 const s=read(root,statePath),a=s.activeCase;
 if(!a||!['staging','publishable'].includes(s.workflowStatus))throw Error('Review requires active staging or publishable state');
 const p=a.stagingPath+'/review.json';
 if(o.recover){
  const source=fs.existsSync(safe(root,p))?p:p+'.tmp';
  const r=read(root,source);
  if(r.schemaVersion!==1||!r.nextState.reconciliationReview?.approvedBy||r.nextState.workflowStatus!=='publishable'||JSON.stringify(r.nextState.activeCase)!==JSON.stringify(a))throw Error('Invalid review recovery record');
  if(JSON.stringify(s)!==JSON.stringify(r.previousState)&&JSON.stringify(s)!==JSON.stringify(r.nextState))throw Error('Conflicting review state');
  if(r.contentDigest!==reviewContent(root,s))throw Error('Review content changed; recovery refused');
  const v=validate(root,{reviewedControls:r.nextState.reconciliationReview.controlChanges,reviewTransition:true});if(!v.ok)throw Error(v.errors.join('\n'));
  const tmp=safe(root,statePath+'.tmp');if(fs.existsSync(tmp)&&fs.readFileSync(tmp,'utf8')!==JSON.stringify(r.nextState,null,2)+'\n')throw Error('Conflicting state temporary file');
  if(o['dry-run'])return {recoverable:true};
  if(source!==p)fs.renameSync(safe(root,source),safe(root,p));
  if(fs.existsSync(tmp))fs.renameSync(tmp,safe(root,statePath));else if(JSON.stringify(s)!==JSON.stringify(r.nextState))atomic(root,statePath,r.nextState);
 }else{
  if(!o['approve-by']?.trim()||!o.report)throw Error('Explicit approval and report required');
  if(Number(o.case)!==a.caseNumber||o.slug!==a.slug||o.destination!==a.canonicalPath)throw Error('Review identity mismatch');
  if(fs.existsSync(safe(root,p+'.tmp'))||fs.existsSync(safe(root,statePath+'.tmp')))throw Error('Interrupted review requires recovery');
  const controlChanges=o['review-controls']==='yes'?changed(root).filter(p=>controls.includes(p)&&![statePath,historyPath].includes(p)).map(p=>({path:p,baseBlob:git(root,'ls-tree','HEAD','--',p)?git(root,'rev-parse','HEAD:'+p):null,sha256:hash(fs.readFileSync(safe(root,p)))})):s.reconciliationReview?.controlChanges;
  const v=validate(root,{reviewedControls:controlChanges,reviewTransition:true});if(!v.ok)throw Error('Validation failed: '+v.errors.join('\n'));
  if(v.digest!==o.report)throw Error('Stale review report');
  const contentDigest=reviewContent(root,s),nextState={...s,workflowStatus:'publishable',reconciliationReview:{approvedBy:o['approve-by'].trim(),approvedAt:new Date().toISOString(),contentDigest,controlChanges}};
  const record={schemaVersion:1,contentDigest,previousState:s,nextState};
  if(o['dry-run'])return {dryRun:true,contentDigest};
  atomic(root,p,record);atomic(root,statePath,nextState);
 }
 const final=validate(root);if(!final.ok)throw Error('Review recovery required: '+final.errors.join('\n'));return {publishable:true,digest:final.digest};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{console.log(JSON.stringify(review(process.cwd(),args(process.argv.slice(2))),null,2));}catch(e){console.error('FAIL '+e.message);process.exitCode=1;}}
