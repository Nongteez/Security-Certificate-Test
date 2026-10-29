import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const qa='artifacts/qa/domain-2-objective-2-1-redesign';
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p));
const hash=v=>createHash('sha256').update(v).digest('hex');
const entry=json(qa+'/entry-files.json').files;
const authorized=new Set(['css/learning-grc-foundations.css','js/ui/learning/grc-foundations-presentations.js','tools/verify-learning-d2-grc-foundations.mjs','docs/plans/task.md',...['published','staged'].map(b=>`content/isc2-cc-2026/learning/${b}/lessons/lesson-d2-01-grc-foundations.json`)]);
const changed=[],missing=[],unchanged=[],unexpected=[];
for(const [p,h]of Object.entries(entry)){if(!fs.existsSync(p)){missing.push(p);continue;}if(hash(fs.readFileSync(p))===h)unchanged.push(p);else {changed.push(p);if(!authorized.has(p))unexpected.push(p);}}
const tracked=execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z'],{maxBuffer:30e6,encoding:'utf8'}).split('\0').filter(Boolean);
const newFiles=tracked.filter(p=>!Object.hasOwn(entry,p));
const newUnexpected=newFiles.filter(p=>!p.startsWith(qa+'/')&&!['tools/verify-learning-d2-objective21-redesign.mjs','docs/plans/isc2-cc-2026/domain-2-objective-2-1-redesign.md'].includes(p));
const editorial=[];
for(const branch of ['published','staged']){
 const p=`content/isc2-cc-2026/learning/${branch}/lessons/lesson-d2-01-grc-foundations.json`,backup=`${qa}/lesson1-${branch}-before-editorial.json`,before=json(backup),after=json(p);
 assert.equal(hash(fs.readFileSync(backup)),entry[p],'Editorial backup must match the entry data bytes');
 const oldTable=before.slides[1].blocks[1],table=after.slides[1].blocks[1];
 assert.equal(table.rows.length,7);assert.equal(table.columns.length,2);assert.deepEqual(oldTable.columns[2],table.columns[1]);
 oldTable.rows.forEach((row,i)=>{assert.deepEqual(table.rows[i][1],row[2],'Every practical academic explanation retained verbatim');for(const lang of ['en','th'])assert.equal(table.rows[i][0][lang],row[1][lang].replace(/^\d+\. /,''),'Only ordinal prefix removed from source purpose');});
 // Remove only the explicitly authorized fields; everything else must remain equal.
 const strip=l=>{delete l.slides[0].blocks[4].text;delete l.slides[1].blocks[1];delete l.slides[1].blocks[2].text;delete l.slides[1].blocks[3].items[0];delete l.slides[1].blocks[3].items[1];delete l.slides[1].blocks[4].text;return l;};
 assert.deepEqual(strip(structuredClone(before)),strip(structuredClone(after)),'No other lesson fields may change');
 editorial.push({path:p,ids:after.slides.map(s=>s.id),revision:after.revision,status:after.status,unchangedOutsideAuthorizedFields:true,allSevenPurposesRetained:true,allSevenPracticalExplanationsVerbatim:true});
}
const tracker=read('docs/plans/task.md'),without=tracker.replace(/^\| 90\. Domain 2 Objective 2\.1.*\r?\n/m,'');
const trackerOriginalHashMatches=hash(without)===entry['docs/plans/task.md'];
const snapshot='.learning-preview/domain2-objective21-redesign-20261029';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const preview=walk(snapshot),mismatches=[],previewCompared=[];
for(const p of preview){const relative=path.relative(snapshot,p).replaceAll('\\','/');if(fs.existsSync(relative)&&fs.statSync(relative).isFile()){previewCompared.push(relative);if(hash(fs.readFileSync(p))!==hash(fs.readFileSync(relative)))mismatches.push(relative);}}
const result={entryFiles:Object.keys(entry).length,identical:unchanged.length,authorizedChanged:changed,missing,unexpected,newUnexpected,trackerOnlyRow90:trackerOriginalHashMatches,editorial,protectedGroups:{allDomain1LessonsAndEvidenceIdentical:unchanged.filter(p=>/lesson-d1-|domain-1-|cia-presentations|learning\.css$/.test(p)).length,allOtherD2LessonsAndTestsIdentical:unchanged.filter(p=>/lesson-d2-0[234]|grc-tools-risk-register|business-continuity-bcp|disaster-recovery-drp/.test(p)).length,oldDomain2QaIdentical:unchanged.filter(p=>p.startsWith('artifacts/qa/domain-2-visual-remediation/')).length,quizVocabularyBanksAndOriginalSourcesIdentical:unchanged.filter(p=>/question|quiz|vocabulary|ISC2 Update 2026/.test(p)).length},progressCodeIdentical:unchanged.includes('js/core/learning-progress.js'),catalogIdentical:unchanged.includes('content/isc2-cc-2026/learning/published/catalog.json'),newFileCount:newFiles.length};
fs.writeFileSync(qa+'/preservation-final.json',JSON.stringify(result,null,2)+'\n');
fs.writeFileSync(qa+'/preview-parity.json',JSON.stringify({snapshot,files:preview.length,comparedToCurrentRoot:previewCompared.length,mismatches},null,2)+'\n');
console.log(JSON.stringify(result,null,2));console.log(JSON.stringify({previewFiles:preview.length,compared:previewCompared.length,mismatches},null,2));
assert.deepEqual(missing,[]);assert.deepEqual(unexpected,[]);assert.deepEqual(newUnexpected,[]);assert.equal(trackerOriginalHashMatches,true);assert.deepEqual(mismatches,[]);
