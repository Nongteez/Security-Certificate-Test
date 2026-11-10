import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {loadQuestionsForDomains,loadExamConfig} from '../../../js/core/question-loader.js';
import {renderExplanation2026Content} from '../../../js/ui/components/explanation-2026.js';
import {createStudySelection} from '../../../js/core/study-answers.js';
import * as engine from '../../../js/core/quiz-engine.js';
import {state} from '../../../js/core/state.js';
import * as storage from '../../../js/core/storage.js';
import certifications from '../../../data/certifications.js';
const out='artifacts/qa/question-bank-200-finalization/';
const read=n=>JSON.parse(fs.readFileSync(out+n,'utf8'));
const before=JSON.parse(fs.readFileSync('artifacts/qa/question-bank-200-academic-acceptance/questions.entry.json','utf8')),candidates=read('candidates.json');
const acceptance='artifacts/qa/question-bank-200-academic-acceptance/';
const expected=JSON.parse(fs.readFileSync(acceptance+'questions.expected.json','utf8'));
const approved=()=>assert.deepEqual(bank,expected,'Only the reviewed expected field values may differ from entry');
const bankByDomain=await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
const bank=Object.values(bankByDomain).flat(),config=await loadExamConfig('isc2','cc','next-bank');
const cert=certifications.find(c=>c.id==='isc2-cc');
const normalize=s=>s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
function validate(q,requireFlat=true){
 assert.deepEqual(Object.keys(q).sort(),Object.keys(before[0]).sort());
 assert.ok(Number.isInteger(q.id)&&Number.isInteger(q.dom)&&q.dom>=1&&q.dom<=5);
 assert.ok(Number.isInteger(q.correct_idx)&&q.correct_idx>=0&&q.correct_idx<4);
 for(const k of ['options','options_th']){assert.equal(q[k].length,4);assert.equal(new Set(q[k].map(normalize)).size,4);}
 for(const k of ['question','question_th','explanation','explanation_th','short_explanation_en'])assert.ok(q[k].trim()&&!q[k].includes('\ufffd'));
 assert.match(q.question_th,/[ก-๙]/);
 const d=q.explanation_detail;assert.deepEqual(d.incorrect.map(x=>x.letter).sort(),[...'ABCD'].filter((_,i)=>i!==q.correct_idx));
 for(const l of ['en','th']){
  assert.ok(d.correct[l].trim());
  for(const r of d.incorrect){assert.ok(r['text_'+l].trim());if(requireFlat)assert.ok((l==='en'?q.explanation:q.explanation_th).includes(r['text_'+l]));}
 }
}

test('all200 match exactly the reviewed SAFE field values; no unapproved data drift',()=>{approved();assert.equal(bank.length,200);});
test('all IDs keys domains and per-domain ordering remain unchanged; all six deferred records stay intact',()=>{
 assert.deepEqual(bank.map(q=>[q.id,q.dom,q.correct_idx]),before.map(q=>[q.id,q.dom,q.correct_idx]));
 for(const id of [614,627,619,629,630,637])assert.deepEqual(bank.find(q=>q.id===id),before.find(q=>q.id===id));
 for(const q of bank){const old=before.find(v=>v.id===q.id);assert.deepEqual(q.options_th,old.options_th);if(q.id!==679)assert.deepEqual(q.options,old.options);}
});
test('156 unaffected records are byte-identical; only D1 D2 D4 contain bounded edits',()=>{
 const ids=new Set(expected.filter(q=>JSON.stringify(q)!==JSON.stringify(before.find(v=>v.id===q.id))).map(q=>q.id));assert.equal(ids.size,44);
 let preserved=0;
 const slices=s=>new Map([...s.matchAll(/^  \{\r?\n    "id": (\d+),[\s\S]*?^  \}(?=,?\r?$)/gm)].map(m=>[Number(m[1]),m[0]]));
 for(let d=1;d<=5;d++){const old=slices(fs.readFileSync(acceptance+`domain-${d}.before.js`,'utf8')),now=slices(fs.readFileSync(`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`,'utf8'));for(const[id,raw]of old)if(!ids.has(id)){assert.equal(now.get(id),raw,`Q${id}`);preserved++;}}
 assert.equal(preserved,156);assert.equal(bank.filter(q=>q.id>=1041).length,43);assert.deepEqual(bank.filter(q=>q.id>=1041),candidates);
});
test('negative guards reject key content and field drift, and all200 pass current schema',()=>{
 for(const f of [q=>q.correct_idx=(q.correct_idx+1)%4,q=>q.question+=' extra',q=>q.options.reverse(),q=>q.extra=true]){const clone=structuredClone(bank);f(clone[0]);assert.throws(()=>assert.deepEqual(clone,expected));}
 bank.forEach(q=>validate(q,q.id>=1041));
});
test('configured totals remain48/40/31/41/40 and exactly200',()=>{assert.equal(config.totalQuestions,200);assert.equal(config.defaultQuestionCount,200);assert.deepEqual(config.domains.map(d=>d.questionCount),[48,40,31,41,40]);assert.deepEqual(config.domains.map(d=>d.questionThCount),[48,40,31,41,40]);assert.deepEqual(Object.values(bankByDomain).map(q=>q.length),[48,40,31,41,40]);});
test('all200 objectives retain original mappings and every new item has hashed source traceability',()=>{
 const metadata=JSON.parse(fs.readFileSync('data/certs/isc2/cc/versions/next-bank/question-metadata.json','utf8'));
 assert.equal(metadata.length,200);assert.equal(new Set(metadata.map(q=>q.id)).size,200);
 const original=JSON.parse(fs.readFileSync('docs/plans/isc2-cc-2026/question-bank-audit-support/question-review-register.json','utf8'));
 for(const q of bank){const m=metadata.find(m=>m.id===q.id);assert.equal(m.domain,q.dom);assert.match(m.objective,new RegExp(`^${q.dom}\\.[1-5]$`));}
 for(const m of original)assert.equal(metadata.find(q=>q.id===m.id).objective,m.objective);
 for(const m of metadata.filter(m=>m.id>=1041)){
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(m.source.path)).digest('hex'),m.source_sha256);
  assert.ok(m.source.heading&&m.source_start>0&&m.source_end>=m.source_start&&m.target&&m.supporting_claim);
 }
});
test('all200 EN TH bilingual render cases contain complete correct and per-option reasoning',()=>{
 const text=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#0?39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
 let cases=0;
 for(const q of bank)for(const lang of ['en','th','both']){
  const html=text(renderExplanation2026Content(q,lang)),d=q.explanation_detail;
  for(const l of lang==='both'?['en','th']:[lang])for(const s of [d.correct[l],...d.incorrect.map(r=>r['text_'+l])])assert.ok(html.includes(text(s)),`Q${q.id} ${lang}`);
  cases++;
 }
 assert.equal(cases,600);
});
test('no exact EN/TH stem duplicates, repeated options or source-language numeric translation drift in new items',()=>{
 for(const k of ['question','question_th'])assert.equal(new Set(bank.map(q=>normalize(q[k]))).size,bank.length);
 const numbers=s=>(s.match(/\d+(?:[,.]\d+)*/g)||[]).map(x=>x.replace(/,/g,'')).sort();
 for(const q of candidates){assert.deepEqual(numbers(q.question),numbers(q.question_th),`Q${q.id} numbers`);for(let i=0;i<4;i++)assert.deepEqual(numbers(q.options[i]),numbers(q.options_th[i]),`Q${q.id} option${i}`);}
});
test('Study Answers and Practice can select the full200 and each domain within configuration rules',async()=>{
 const selection=await createStudySelection(cert,'next-bank',{selectedDomains:new Set([1,2,3,4,5]),questionCount:200,order:'all'});
 assert.equal(selection.length,200);assert.deepEqual(selection,bank);
 assert.deepEqual(engine.createPracticeSession({questionsByDomain:bankByDomain,selectedDomainIds:[1,2,3,4,5],order:'all',questionCount:200}),bank);
 for(const d of config.domains)assert.equal((await createStudySelection(cert,'next-bank',{selectedDomains:new Set([d.id]),questionCount:9999,order:'all'})).length,d.questionCount);
});
test('next-bank Exam creates125 unique questions and keeps120min timer and reload deadline',()=>{
 const exam=engine.createExamSession({questionsByDomain:bankByDomain,examConfig:config});assert.equal(exam.length,125);assert.equal(new Set(exam.map(q=>q.id)).size,125);
 state.selectedCertification=cert;state.selectedExamVersion='next-bank';engine.startQuizSession({mode:'exam',questions:exam});
 assert.equal(state.quiz.examDurationSeconds,7200);const deadline=state.quiz.expiresAt;
 engine.recordAnswer({questionIndex:0,selectedIndex:exam[0].correct_idx});engine.nextQuestion();engine.persistCurrentQuizSession();
 const saved=storage.loadActiveQuizSession();assert.equal(saved.questionIds.length,125);assert.equal(saved.expiresAt,deadline);
 assert.ok(engine.resumeQuizSession({storedSession:saved,questionsByDomain:bankByDomain,certifications}).success);
 assert.equal(state.quiz.currentIndex,1);assert.equal(state.quiz.expiresAt,deadline);assert.deepEqual(state.quiz.answers[0],{questionId:exam[0].id,selected:exam[0].correct_idx,correct:exam[0].correct_idx,isCorrect:true});
 engine.stopExamCountdown();engine.exitQuizSession();
});
test('Practice scores new keys, preserves answer/navigation on resume and supports completion',()=>{
 const qs=bank.filter(q=>q.id>=1041);assert.equal(qs.length,43);
 state.selectedCertification=cert;state.selectedExamVersion='next-bank';engine.startQuizSession({mode:'practice',questions:qs});
 engine.recordAnswer({questionIndex:0,selectedIndex:qs[0].correct_idx});engine.nextQuestion();
 engine.recordAnswer({questionIndex:1,selectedIndex:(qs[1].correct_idx+1)%4});engine.previousQuestion();
 assert.equal(state.quiz.correct,1);assert.equal(state.quiz.wrong,1);assert.equal(state.quiz.currentIndex,0);
 const saved=storage.loadActiveQuizSession();assert.ok(engine.resumeQuizSession({storedSession:saved,questionsByDomain:bankByDomain,certifications}).success);
 assert.deepEqual(state.quiz.answers[1],{questionId:qs[1].id,selected:(qs[1].correct_idx+1)%4,correct:qs[1].correct_idx,isCorrect:false});engine.finishQuizSession();assert.ok(state.quiz.finished);engine.exitQuizSession();
});

test('all academic sources UI engine legacy vocabulary slides metadata config tests and prior evidence remain byte-identical',()=>{
 const allowed=new Set(['docs/plans/task.md',...[1,2,4].map(d=>`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`)]);
 const hashes=JSON.parse(fs.readFileSync(acceptance+'entry-hashes.json','utf8'));
 for(const[p,h]of Object.entries(hashes))if(!allowed.has(p))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h,p);
});
