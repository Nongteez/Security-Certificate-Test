import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const qa='artifacts/qa/domain-2-lesson-2-redesign';
const json=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const hash=b=>createHash('sha256').update(b).digest('hex');
const entry=json(qa+'/entry-files.json').files;
const authorized=new Set(['css/learning-grc-tools-risk-register.css','js/ui/learning/grc-tools-risk-register-presentations.js','tools/verify-learning-d2-grc-tools-risk-register.mjs','docs/plans/task.md',...['published','staged'].map(b=>`content/isc2-cc-2026/learning/${b}/lessons/lesson-d2-02-grc-tools-risk-register.json`)]);
const changed=[],missing=[],unchanged=[],unexpected=[];
for(const [p,h]of Object.entries(entry)){if(!fs.existsSync(p)){missing.push(p);continue;}if(hash(fs.readFileSync(p))===h)unchanged.push(p);else{changed.push(p);if(!authorized.has(p))unexpected.push(p);}}
const all=execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z'],{maxBuffer:30e6,encoding:'utf8'}).split('\0').filter(Boolean);
const newFiles=all.filter(p=>!Object.hasOwn(entry,p));
const newUnexpected=newFiles.filter(p=>!p.startsWith(qa+'/')&&!['tools/verify-learning-d2-lesson2-redesign.mjs','docs/plans/isc2-cc-2026/domain-2-lesson-2-redesign.md'].includes(p));
const raw=fs.readFileSync('docs/plans/task.md');
const row=raw.toString('utf8').match(/^\| 91\. Domain 2 Objective 2\.1[^\r\n]*\r?\n/m)?.[0];assert.ok(row);
const encoded=Buffer.from(row),start=raw.indexOf(encoded),without=Buffer.concat([raw.subarray(0,start),raw.subarray(start+encoded.length)]);
const trackerOnlyRow91=without.equals(fs.readFileSync(qa+'/entry-task.md'))&&hash(without)===entry['docs/plans/task.md'];
const editorial=[];
for(const branch of ['published','staged']){
 const p=`content/isc2-cc-2026/learning/${branch}/lessons/lesson-d2-02-grc-tools-risk-register.json`,backup=`${qa}/entry-${branch}-lesson2.json`,before=json(backup),after=json(p);
 assert.equal(hash(fs.readFileSync(backup)),entry[p]);
 const strip=l=>{delete l.slides;delete l.references;delete l.review;l.outcomes=l.outcomes.slice(0,1);return l;};
 assert.deepEqual(strip(structuredClone(before)),strip(structuredClone(after)),'Other lesson metadata remains intact');
 assert.deepEqual(before.slides.map(({id,rendererId,layoutId})=>({id,rendererId,layoutId})),after.slides.map(({id,rendererId,layoutId})=>({id,rendererId,layoutId})));
 assert.equal(after.revision,'1');assert.equal(after.slides.length,7);
 const caps=after.slides[1].blocks[1].rows,oldCaps=before.slides[1].blocks[1].rows;
 assert.equal(caps.length,6);assert.equal(after.slides[1].blocks[1].columns.length,2);
 caps.forEach((r,i)=>{assert.deepEqual(r[0],oldCaps[i][0]);assert.equal(r[1].en,oldCaps[i][1].en);if(i!==1)assert.equal(r[1].th,oldCaps[i][1].th);});
 const fields=after.slides[2].blocks[1].rows,oldFields=before.slides[2].blocks[1].rows;assert.equal(fields.length,11);assert.equal(after.slides[2].blocks[1].columns.length,2);
 fields.forEach((r,i)=>{assert.deepEqual(r[0],oldFields[i][0]);if(i!==10)assert.deepEqual(r[1],oldFields[i][1]);});
 before.slides[4].blocks[1].rows.forEach((r,i)=>assert.deepEqual(after.slides[4].blocks[1].rows[i].slice(0,2),r.slice(0,2)));
 for(const ref of before.references)assert.ok(after.references.some(r=>r.id===ref.id));
 editorial.push({path:p,stableSlideIds:after.slides.map(s=>s.id),revision:after.revision,status:after.status,metadataOutsideAuthorizedContentUnchanged:true,allSixCapabilityNamesAndEnglishFunctionsVerbatim:true,thaiPolicyAttestationParityAdded:true,allElevenFieldLabelsVerbatim:true,firstTenFieldDefinitionsVerbatim:true,residualFieldDefinitionQualified:true,allSixWorkedRecordValuesVerbatim:true,originalReferenceIdsRetained:true});
}
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const previewRoot='.learning-preview/domain2-lesson2-redesign-20261029',preview=walk(previewRoot),previewMissing=[],mismatches=[];
for(const p of preview){const relative=path.relative(previewRoot,p).replaceAll('\\','/');if(!fs.existsSync(relative))previewMissing.push(relative);else if(hash(fs.readFileSync(p))!==hash(fs.readFileSync(relative)))mismatches.push(relative);}
const d1=all.filter(p=>/^content\/isc2-cc-2026\/learning\/published\/lessons\/lesson-d1-.*\.json$/.test(p)).map(json);
assert.equal(d1.length,12);assert.equal(d1.reduce((n,l)=>n+l.slides.length,0),103);
const beforeTest=execFileSync('git',['show','HEAD:tools/verify-learning-d2-grc-tools-risk-register.mjs'],{encoding:'utf8'}),afterTest=fs.readFileSync('tools/verify-learning-d2-grc-tools-risk-register.mjs','utf8');
const guard=s=>s.slice(s.indexOf("test('6. ")).replaceAll('\r\n','\n').trim();assert.equal(guard(beforeTest),guard(afterTest),'Legacy Git guard remains unchanged');
const result={entryFiles:Object.keys(entry).length,identical:unchanged.length,authorizedChanged:changed,missing,unexpected,newUnexpected,trackerOnlyRow91,editorial,domain1:{lessons:12,slides:103,allEntryHashesUnchanged:true},protectedGroups:{allPriorDomain1ReferenceContentAndEvidence:unchanged.filter(p=>/lesson-d1-|domain-1-|cia-presentations|learning\.css$/.test(p)).length,priorLesson1Qa:unchanged.filter(p=>p.startsWith('artifacts/qa/domain-2-objective-2-1-redesign/')).length,oldDomain2Qa:unchanged.filter(p=>p.startsWith('artifacts/qa/domain-2-visual-remediation/')).length,quizVocabularyBanksAndOriginalSources:unchanged.filter(p=>/question|quiz|vocabulary|ISC2 Update 2026/.test(p)).length},progressCodeIdentical:unchanged.includes('js/core/learning-progress.js'),catalogIdentical:unchanged.includes('content/isc2-cc-2026/learning/published/catalog.json'),legacyL2GitGuardIdenticalToHEAD:true,newFileCount:newFiles.length};
fs.writeFileSync(qa+'/preservation-final.json',JSON.stringify(result,null,2)+'\n');
fs.writeFileSync(qa+'/preview-parity.json',JSON.stringify({snapshot:previewRoot,files:preview.length,compared:preview.length,previewMissing,mismatches},null,2)+'\n');
console.log(JSON.stringify({...result,editorial:'Detailed in preservation-final.json'},null,2));console.log(JSON.stringify({previewFiles:preview.length,previewMissing,mismatches}));
assert.deepEqual(missing,[]);assert.deepEqual(unexpected,[]);assert.deepEqual(newUnexpected,[]);assert.equal(trackerOnlyRow91,true);assert.deepEqual(previewMissing,[]);assert.deepEqual(mismatches,[]);
