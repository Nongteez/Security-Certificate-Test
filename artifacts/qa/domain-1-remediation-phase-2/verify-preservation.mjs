import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {validateLesson,publishedLessons} from '../../../js/core/learning-schema.js';
const dir='artifacts/qa/domain-1-remediation-phase-2/',base='content/isc2-cc-2026/learning/published/';
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(fs.readFileSync(p));
const entry=read(dir+'entry-integrity.json'),before=read(dir+'entry-catalog.json'),after=read(base+'catalog.json');
assert.deepEqual(after.domains.filter(d=>d.id!==1),before.domains.filter(d=>d.id!==1));
const differences=[];
function diff(a,b,path=''){if(JSON.stringify(a)===JSON.stringify(b))return;if(a&&b&&typeof a==='object'&&typeof b==='object'){assert.deepEqual(Object.keys(a),Object.keys(b));for(const k of Object.keys(a))diff(a[k],b[k],path+'/'+k);}else differences.push({path,before:a,after:b});}
diff(before,after);assert.equal(differences.length,5);assert.ok(differences.every(d=>d.path.endsWith('/revision')));
const affected=['lesson-d1-01-cia-triad','lesson-d1-03-non-repudiation','lesson-d1-10-control-categories','lesson-d1-12-professional-conduct'];
assert.deepEqual(publishedLessons(after).filter(s=>s.revision!==publishedLessons(before).find(o=>o.id===s.id).revision).map(s=>s.id),affected);
const validated=[];
for(const s of publishedLessons(after)){const l=read(base+s.lessonPath),result=validateLesson(l);assert.equal(result.valid,true,l.id+JSON.stringify(result.errors));for(const slide of l.slides)for(const id of slide.referenceIds)assert.ok(l.references.some(r=>r.id===id));validated.push({id:l.id,slides:l.slides.length,revision:l.revision});}
for(const [part,index]of [['10-control-categories',5],['12-professional-conduct',9]]){const old=read(dir+'entry-'+part+'.json'),now=read(base+'lessons/lesson-d1-'+part+'.json');for(const lang of ['en','th'])assert.ok(now.slides[index].blocks[2].text[lang].startsWith(old.slides[index].blocks[2].text[lang]+'\n\n'));}
const info='js/ui/learning/lesson-info.js';
const oldInfo=fs.readFileSync(info,'utf8').replace('isNr ? `Slides 1–${lesson.slides.length} — Full explanations`',"isNr ? 'Slides 1–6 — Full explanations'").replace('isAaa ? \'Slides 1–7 — Full explanations\' : `Slides 2–${lesson.slides.length} — Full explanations`',"isAaa ? 'Slides 1–7 — Full explanations' : 'Slides 2–8 — Full explanations'");
assert.equal(sha(oldInfo),entry.files[info],'Shared Info differs only in two count expressions');
const runtime=affected.map(id=>base+'lessons/'+id+'.json').concat([base+'catalog.json','js/ui/learning/cia-presentations/incident.js','js/ui/learning/cia-presentations/index.js','js/ui/learning/control-categories-presentations.js','js/ui/learning/lesson-info.js','js/ui/learning/non-repudiation-presentations.js']);
for(const p of runtime)assert.equal(sha(fs.readFileSync(p)),sha(fs.readFileSync('.learning-preview/domain1-remediation-phase2-20261028/'+p)),p+' stage parity');
const failures=p=>[...new Set(fs.readFileSync(dir+p,'utf8').split(/\r?\n/).filter(l=>l.startsWith('✖ ')&&!l.includes('failing tests:')).map(l=>l.replace(/ \([\d.]+ms\)\s*$/,'')))].sort();
assert.deepEqual(failures('final-node.txt'),failures('entry-node.txt'),'Same 14 entry failures');
const register=read('artifacts/qa/domain-1-remediation-phase-1/resume-failure-classification.json').map(r=>({...r,classification:'Outdated global-catalog expectation already present at Phase 2 entry; not a D1-F01 regression',phase2Entry:'entry-node.txt',phase2Final:'final-node.txt'}));
assert.equal(register.length,14);fs.writeFileSync(dir+'failure-classification.json',JSON.stringify(register,null,2));
const changed=[],missing=[];for(const [p,h]of Object.entries(entry.files)){if(!fs.existsSync(p))missing.push(p);else if(sha(fs.readFileSync(p))!==h)changed.push(p);}
assert.deepEqual(missing,[]);assert.ok(changed.every(p=>affected.some(id=>p===base+'lessons/'+id+'.json')||[base+'catalog.json','docs/plans/task.md','docs/plans/isc2-cc-2026/domain-1-remediation-plan.md','docs/plans/isc2-cc-2026/domain-1-learning-roadmap.md',...runtime.filter(p=>p.startsWith('js/')),'tools/verify-learning-aaa-mfa.mjs','tools/verify-learning-academic-remediation.mjs','tools/verify-learning-cia-presentations.mjs','tools/verify-learning-editorial-intro.mjs','tools/verify-learning-non-repudiation.mjs','tools/verify-learning-v3-viewer.mjs'].includes(p)));
const output={entryCount:Object.keys(entry.files).length,unchanged:Object.keys(entry.files).length-changed.length,changed,missing,catalogRevisionOnlyDifferences:differences,catalogOutsideDomain1Unchanged:true,sharedInfoOnlyTwoCountsChanged:true,retainedOriginalL10L12Explanations:true,all16PublishedLessonsValid:validated,stageParity:runtime,same14EntryFailures:true,reviewedCiaSha256:sha(fs.readFileSync(base+'lessons/lesson-d1-01-cia-triad.json'))};
fs.writeFileSync(dir+'final-integrity.json',JSON.stringify(output,null,2));console.log(JSON.stringify({entry:output.entryCount,unchanged:output.unchanged,modified:changed.length,missing:missing.length,validLessons:validated.length,same14EntryFailures:true}));
