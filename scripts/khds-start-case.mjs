import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {read,safe,git,changed,identity,hash,atomic,statePath,historyPath,validate,files} from './khds-validate.mjs';
export function start(root,options){
 const s=read(root,statePath),h=read(root,historyPath);
 if(options.resume){
  if(!s.activeCase||!['staging','publishable'].includes(s.workflowStatus))throw Error('No resumable staged case');
  const result=validate(root,{resumeOnly:true});if(!result.ok)throw Error(result.errors.join('\n'));
  for(const [option,key] of Object.entries({case:'caseNumber',name:'institutionName',slug:'slug',type:'institutionType',sector:'sector',destination:'canonicalPath'}))if(options[option]!==undefined&&String(options[option])!==String(s.activeCase[key]))throw Error(`Resume identity mismatch: ${key}`);
  return {resumed:true,activeCase:s.activeCase,existingFiles:files(root,s.activeCase.stagingPath+'/dossier')};
 }
 if(changed(root).length)throw Error('Dirty working tree: start refused');
 if(s.activeCase||!['idle','research-authorized'].includes(s.workflowStatus))throw Error('Active or unfinished workflow: start refused');
 if(s.workflowStatus!=='research-authorized'||!s.researchAuthorized||!s.authorization?.approvedBy||!s.authorization?.approvedAt)throw Error('Research unauthorized');
 const preflight=validate(root,{controlOnly:true});if(!preflight.ok)throw Error(preflight.errors.join('\n'));
 const a={caseNumber:Number(options.case),institutionName:options.name,slug:options.slug,institutionType:options.type,sector:options.sector,canonicalPath:options.destination};identity(a);
 if(a.caseNumber!==s.expectedNextCase)throw Error('Wrong case number');
 if(h.cases.some(c=>c.caseNumber===a.caseNumber||c.slug===a.slug)||h.priorIdentities.some(c=>c.slug===a.slug))throw Error('Duplicate case number or slug');
 if(Object.keys(a).some(k=>s.authorization.identity?.[k]!==a[k]))throw Error('Identity does not match explicit research authorization');
 if(fs.existsSync(safe(root,a.canonicalPath)))throw Error('Canonical destination already exists');
 a.stagingPath=`khds/staging/case-${a.caseNumber}-${a.slug}`;a.trackingChanges=options.tracking?JSON.parse(options.tracking):[];
 if(!Array.isArray(a.trackingChanges))throw Error("tracking must be a JSON array");
 for(const t of a.trackingChanges){if(hash(fs.readFileSync(safe(root,t.path)))!==t.beforeSha256)throw Error("Tracking baseline hash mismatch");}
 a.lockedAt=new Date().toISOString();a.baseCommit=git(root,'rev-parse','HEAD');
 if(fs.existsSync(safe(root,a.stagingPath)))throw Error('Existing staging must be recovered, never replaced');
 if(options['dry-run'])return a;
 // Persist the lock first: interruption before manifest update leaves recoverable evidence.
 fs.mkdirSync(safe(root,a.stagingPath),{recursive:true});fs.mkdirSync(safe(root,a.stagingPath+'/dossier'));
 fs.writeFileSync(safe(root,a.stagingPath+'/lock.json'),JSON.stringify(a,null,2)+'\n',{flag:'wx'});
 atomic(root,statePath,{...s,activeCase:a,workflowStatus:'staging'});return a;
}
export function args(argv){const out={};for(let i=0;i<argv.length;i++){const k=argv[i];if(!k.startsWith('--'))throw Error(`Unexpected argument ${k}`);if(['--dry-run','--confirm','--resume'].includes(k))out[k.slice(2)]=true;else {if(!argv[i+1]||argv[i+1].startsWith('--'))throw Error(`Missing ${k}`);out[k.slice(2)]=argv[++i];}}return out;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){try{console.log(JSON.stringify(start(process.cwd(),args(process.argv.slice(2))),null,2));}catch(e){console.error('FAIL '+e.message);process.exitCode=1;}}
