/** D5 contract checks: detects unavailable publication, malformed mapping, metadata leakage,
 * corrupt answer feedback, unsafe version mixing and protected-file changes. Not academic proof. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as loader from '../js/core/question-loader.js';
import * as engine from '../js/core/quiz-engine.js';
import * as appState from '../js/core/state.js';
import * as storage from '../js/core/storage.js';
import certifications from '../data/certifications.js';
import versions from '../data/exam-versions.js';
import {renderExplanation2026Content,escapeHtml} from '../js/ui/components/explanation-2026.js';

const staging=process.argv.includes('--staging');
if(!staging) assert.ok((await loader.loadDomainQuestions({vendorId:'isc2',certId:'cc',version:'next-bank',domainId:5})).length>0,'Domain 5 must be published through the real loader');
const {drafts,stagedQuestions,buildProductionQuestion}=await import('../content/isc2-cc-2026/questions/domain-5-draft.mjs');
const knowledge=JSON.parse(fs.readFileSync('content/isc2-cc-2026/sources/domain-5/production/knowledge.json','utf8'));
const blueprint=JSON.parse(fs.readFileSync('content/isc2-cc-2026/sources/domain-5/production/blueprint.json','utf8'));
const filled=s=>typeof s==='string'&&s.trim().length>0&&!s.includes('\uFFFD');
const thai=s=>filled(s)&&/[\u0e00-\u0e7f]/u.test(s);
const normalize=s=>s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const keys=['id','dom','question','options','correct_idx','explanation','short_explanation_en','question_th','options_th','explanation_th','explanation_detail'].sort();
const letters=['A','B','C','D'];
function validate(q,d){
 assert.deepEqual(Object.keys(q).sort(),keys);
 assert.ok(Number.isInteger(q.id)&&q.id>=1001&&q.dom===5);
 assert.ok(Number.isInteger(q.correct_idx)&&q.correct_idx>=0&&q.correct_idx<4);
 assert.equal(q.options.length,4);assert.equal(q.options_th.length,4);
 assert.equal(new Set(q.options.map(normalize)).size,4);assert.equal(new Set(q.options_th.map(normalize)).size,4);
 assert.ok([q.question,q.explanation,q.short_explanation_en,...q.options].every(filled));
 assert.ok([q.question_th,q.explanation_th,...q.options_th].every(thai));
 assert.ok(['5.1','5.2','5.3','5.4','5.5'].includes(d.objective));
 assert.ok(['A','B','C','D','E'].includes(d.cognitive));
 assert.ok(['foundational','applied','intermediate'].includes(d.difficulty));
 const k=knowledge.concepts.find(k=>k.id===d.knowledge);assert.ok(k&&k.objective===d.objective&&k.family===d.family);
 assert.ok(d.references.length&&d.references.every(r=>knowledge.references[r]));
 assert.ok(filled(d.assessedDecision)&&filled(d.ambiguityControl)&&filled(d.misconceptionTarget));
 assert.equal(q.explanation_detail.correct.en,d.choices[q.correct_idx][2]);
 assert.equal(q.explanation_detail.correct.th,d.choices[q.correct_idx][3]);
 assert.deepEqual(q.explanation_detail.incorrect.map(r=>r.letter).sort(),letters.filter((_,i)=>i!==q.correct_idx));
 for(const r of q.explanation_detail.incorrect){let i=letters.indexOf(r.letter);assert.equal(r.text_en,d.choices[i][2]);assert.equal(r.text_th,d.choices[i][3]);assert.ok(q.explanation.includes(r.text_en)&&q.explanation_th.includes(r.text_th));}
 for(const lang of ['en','th','both']){const html=renderExplanation2026Content(q,lang);assert.ok(html.includes(`Correct Answer: Option ${letters[q.correct_idx]}`));for(const c of d.choices){if(lang!=='th')assert.ok(html.includes(escapeHtml(c[2])));if(lang!=='en')assert.ok(html.includes(escapeHtml(c[3])));}}
}
assert.ok(stagedQuestions.length>0);assert.equal(stagedQuestions.length,drafts.length);
assert.equal(new Set(drafts.map(d=>d.id)).size,drafts.length);
for(const [i,q] of stagedQuestions.entries())validate(q,drafts[i]);
for(const s of blueprint.filter(s=>s.status!=='REJECTED'))assert.ok(drafts.some(d=>d.id===s.id&&d.family===s.family&&d.cognitive===s.cognitive));
assert.equal(new Set(drafts.map(d=>d.family)).size,26);
// Literal mapping fixture: the key is C; A/B/D must keep their own rationale after export.
const fixture=buildProductionQuestion({id:9999,stem:['A fixture task','โจทย์ตรวจสอบ'],choices:[['Alpha','ก','Wrong alpha','เหตุผล ก'],['Beta','ข','Wrong beta','เหตุผล ข'],['Gamma','ค','Correct gamma','เหตุผล ค'],['Delta','ง','Wrong delta','เหตุผล ง']],correct:2,takeaway:'A takeaway'});
assert.equal(fixture.correct_idx,2);assert.equal(fixture.options[2],'Gamma');assert.deepEqual(fixture.explanation_detail.correct,{en:'Correct gamma',th:'เหตุผล ค'});assert.deepEqual(fixture.explanation_detail.incorrect.map(r=>r.letter),['A','B','D']);
for(const mutate of [q=>q.correct_idx=0.5,q=>q.id=1001.5,q=>q.options[1]=q.options[0],q=>q.options_th[0]='English only',q=>q.explanation_detail.incorrect[0].letter=letters[q.correct_idx],q=>q.objective='5.1']){const bad=structuredClone(stagedQuestions[0]);mutate(bad);assert.throws(()=>validate(bad,drafts[0]));}
const badMeta=structuredClone(drafts[0]);badMeta.knowledge='missing';assert.throws(()=>validate(stagedQuestions[0],badMeta));
const existing=[];for(const version of ['2026','next-bank'])for(let dom=1;dom<=5;dom++){if(version==='next-bank'&&dom===5)continue;existing.push(...(await import(`../data/certs/isc2/cc/versions/${version}/questions/domain-${dom}.js`)).default);}
const all=[...existing,...stagedQuestions];assert.equal(new Set(all.map(q=>q.id)).size,all.length);
for(const field of ['question','question_th'])assert.equal(new Set(all.map(q=>normalize(q[field]))).size,new Set(existing.map(q=>normalize(q[field]))).size+stagedQuestions.length);
const baseline=JSON.parse(fs.readFileSync('artifacts/qa/domain5-production/baseline.json','utf8'));
// Preserve concurrent Reading Notes edits as observed; do not claim baseline equality for them.
// The original baseline is immutable. Every exception is explicit and hash-bound in the report.
const concurrent=JSON.parse(fs.readFileSync('artifacts/qa/domain5-production/concurrent-observation.json','utf8'));
const observed=new Map(concurrent.map(r=>[r.path,r.observed]));
const externalReadingPaths=new Set(['content/isc2-cc-2026/reading/domain-5-scenarios.js','content/isc2-cc-2026/reading/domain-5.js','content/isc2-cc-2026/reading/domain-5.md','js/core/diagram-generator.js','tools/audit-domain5-browser.mjs','tools/verify-reading-notes-domain5.mjs']);
assert.ok(concurrent.every(r=>externalReadingPaths.has(r.path)),'No bank/source/audit hash exception may be introduced');
const protectedPaths=Object.keys(baseline.files).filter(p=>p.startsWith('ISC2 Update 2026/Domain 5/')||p.startsWith('content/')||p.startsWith('assets/')||p.startsWith('docs/plans/isc2-cc-2026/domain-5-audit-')||p.startsWith('data/certs/isc2/cc/versions/2026/')||/next-bank\/questions\/domain-[1-4]\.js$/.test(p));
for(const p of protectedPaths)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),observed.get(p)||baseline.files[p],`Protected ${p}`);
console.log(`PASS staging: ${stagedQuestions.length} items; 26 foundations/families; exact schema, option feedback, EN/TH/both rendering, negative corruption checks; ${existing.length}-item collision/exact comparison; ${protectedPaths.length} preservation checks (${concurrent.length} disclosed concurrent deltas).`);
if(!staging){
 const independent=JSON.parse(fs.readFileSync('artifacts/qa/domain5-production/independent-review.json','utf8'));
 for(const [path,hash] of Object.entries(independent.currentInputHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex'),hash,'Reviewed input changed: '+path);
 const review=JSON.parse(fs.readFileSync('content/isc2-cc-2026/sources/domain-5/production/qa-ledger.json','utf8'));
 for(const d of drafts){const r=review.find(r=>r.id===d.id);assert.ok(r&&r.status==='ACCEPTED'&&r.scores.length===10&&r.scores.every(n=>n>=4&&n<=5)&&r.scores.reduce((a,b)=>a+b,0)>=45);assert.ok(r.hardGates.length===0&&r.keyAgreement&&r.uniqueBestAnswer);assert.equal(Object.keys(r.originalRubric0to3.scores).length,8);assert.ok(Object.values(r.originalRubric0to3.scores).every(n=>n>=2&&n<=3));assert.equal(r.itemHash,crypto.createHash('sha256').update(JSON.stringify(stagedQuestions.find(q=>q.id===d.id))).digest('hex'));}
 const config=await loader.loadExamConfig('isc2','cc','next-bank');assert.ok(config);
 const bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
 assert.deepEqual(bank[5],stagedQuestions);assert.deepEqual(Object.values(bank).slice(0,4).map(q=>q.length),[24,39,23,33]);
 const total=Object.values(bank).flat().length;assert.equal(config.totalQuestions,total);assert.equal(config.defaultQuestionCount,total);assert.equal(versions.find(v=>v.id==='next-bank').questionCount,total);
 assert.equal(config.domains[4].questionCount,bank[5].length);assert.equal(config.domains[4].questionThCount,bank[5].length);assert.equal(config.domains[4].available,true);
 assert.ok(loader.questionsMatchVersion(bank[5],'isc2-cc','next-bank'));assert.ok(!loader.questionsMatchVersion(bank[5],'isc2-cc','2026'));
 const before=JSON.stringify(bank);for(const order of ['all','random']){const p=engine.createPracticeSession({questionsByDomain:bank,selectedDomainIds:[5],questionCount:999,order});assert.equal(p.length,bank[5].length);assert.ok(p.every(q=>q.dom===5));}
 const exam=engine.createExamSession({questionsByDomain:bank,examConfig:config,totalQuestions:125});assert.equal(exam.length,117);assert.equal(exam.filter(q=>q.dom===5).length,21);assert.equal(new Set(exam.map(q=>q.id)).size,exam.length);assert.equal(JSON.stringify(bank),before);
 appState.selectCertification(certifications.find(c=>c.id==='isc2-cc'));assert.ok(appState.selectExamVersion('next-bank',config));engine.startQuizSession({mode:'practice',questions:bank[5].slice(0,2)});
 engine.recordAnswer({questionIndex:0,selectedIndex:bank[5][0].correct_idx});engine.recordAnswer({questionIndex:1,selectedIndex:(bank[5][1].correct_idx+1)%4});const saved=storage.buildSessionSnapshot(appState.state);assert.equal(saved.correct,1);assert.equal(saved.wrong,1);assert.equal(saved.versionId,'next-bank');assert.deepEqual((await loader.loadQuestionsForSession(saved))[5],bank[5]);
 console.log(`PASS integration: ${total} updated items; D5 practice,117/125 weighted Exam with21 D5, scoring, version isolation and saved-session reload.`);
}
