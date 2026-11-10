import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {loadQuestionsForDomains} from '../../../js/core/question-loader.js';
import {renderExplanation2026Content} from '../../../js/ui/components/explanation-2026.js';
const dir='artifacts/qa/question-bank-academic-remediation/';
const read=n=>JSON.parse(fs.readFileSync(dir+n,'utf8'));
const before=read('questions.before.json'), proposals=read('safe-change-proposals.json');
const bank=Object.values(await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]})).flat();
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
test('all 157 IDs, keys, ordering, domains and schema preserved',()=>{
 assert.equal(bank.length,157);assert.equal(new Set(bank.map(q=>q.id)).size,157);
 for(let i=0;i<157;i++){
  for(const k of ['id','dom','correct_idx'])assert.deepEqual(bank[i][k],before[i][k]);
  assert.deepEqual(Object.keys(bank[i]),Object.keys(before[i]));
 }
 assert.deepEqual([1,2,3,4,5].map(d=>bank.filter(q=>q.dom===d).length),[24,39,23,33,38]);
});
test('four SAFE records match exact proposals, all 153 others unchanged',()=>{
 assert.equal(proposals.length,4);
 for(const [i,q] of bank.entries()){
  const p=proposals.find(p=>p.id===q.id), expected=structuredClone(before[i]);
  if(p)for(const [k,v]of Object.entries(p.fields)){assert.deepEqual(expected[k],v.before);expected[k]=v.after;}
  assert.deepEqual(q,expected,`Q${q.id} scoped content`);
 }
});
test('only authorized option text parity changes, no permutation or changed key',()=>{
 for(const [i,q]of bank.entries())for(const k of ['options','options_th'])for(let j=0;j<4;j++){
  const allow=(q.id===612&&k==='options_th'&&j===2)||(q.id===628&&j===2);
  if(!allow)assert.equal(q[k][j],before[i][k][j]);
 }
 const q=bank.find(q=>q.id===612);assert.match(q.options_th[2],/ได้รับมอบหมาย/);
 assert.match(bank.find(q=>q.id===628).options[2],/completion of initial alert triage/);
});
test('six SUBSTANTIVE records are entirely unapplied',()=>{
 for(const id of [614,627,619,629,630,637])assert.deepEqual(bank.find(q=>q.id===id),before.find(q=>q.id===id));
 for(const r of read('ten-question-review.json').filter(r=>r.proposed_after_record_not_applied)){
  const q=r.proposed_after_record_not_applied,b=before.find(q=>q.id===r.id);
  for(const k of ['id','dom','correct_idx','question','question_th'])assert.deepEqual(q[k],b[k]);
  assert.equal(q.options[q.correct_idx],b.options[b.correct_idx]);assert.equal(q.options_th[q.correct_idx],b.options_th[b.correct_idx]);
  assert.deepEqual(q.explanation_detail.correct,b.explanation_detail.correct);
  for(const [k,v]of Object.entries(r.proposed_fields_not_applied)){assert.deepEqual(v.before,b[k]);assert.deepEqual(v.after,q[k]);}
  assert.deepEqual(q.explanation_detail.incorrect.map(x=>x.letter).sort(),[...'ABCD'].filter((_,i)=>i!==q.correct_idx));
  for(const l of ['en','th','both'])assert.ok(renderExplanation2026Content(q,l).length>0);
 }
});
test('EN TH and bilingual renderers retain all correct and per-option reasoning',()=>{
 const normalize=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#0?39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
 for(const q of bank){
  const d=q.explanation_detail;
  assert.deepEqual(d.incorrect.map(r=>r.letter).sort(),[...'ABCD'].filter((_,i)=>i!==q.correct_idx));
  for(const lang of ['en','th','both']){
   const html=normalize(renderExplanation2026Content(q,lang));
   for(const l of lang==='both'?['en','th']:[lang])for(const t of [d.correct[l],...d.incorrect.map(r=>r['text_'+l])])assert.ok(html.includes(normalize(t)),`Q${q.id} ${lang} complete`);
  }
 }
});
test('153 unaffected raw record byte slices and domains 3–5 remain identical',()=>{
 const records=s=>[...s.matchAll(/^  \{\r?\n    "id": (\d+),[\s\S]*?^  \}(?=,?\r?$)/gm)].map(m=>[Number(m[1]),m[0]]);
 let count=0;
 for(let d=1;d<=5;d++){
  const old=fs.readFileSync(`${dir}domain-${d}.before.js`,'utf8'),now=fs.readFileSync(`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`,'utf8');
  const a=records(old),b=records(now);assert.equal(a.length,b.length);assert.ok(a.length>0);
  for(let i=0;i<a.length;i++)if(!proposals.some(p=>p.id===a[i][0])){assert.deepEqual(b[i],a[i]);count++;}
  if(d>=3)assert.equal(now,old);
 }
 assert.equal(count,153);
});
test('entry source, legacy, UI, engine, previous evidence and mapping hashes preserved',()=>{
 const allowed=new Set(['docs/plans/isc2-cc-2026/question-bank-200-expansion-plan.md',...[1,2].map(d=>`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`)]);
 for(const [p,h]of Object.entries(read('entry-hashes.json')))if(!allowed.has(p))assert.equal(hash(fs.readFileSync(p)),h,p);
});
test('43 specifications retain IDs/objectives/allocation; exactly eight design revisions and two historical notes',()=>{
 const slots=read('expansion-slots.revised.json'),old=read('expansion-slots.before.json'),diff=read('specification-revisions.json');
 assert.equal(slots.length,43);assert.deepEqual(slots.map(s=>s.proposed_id),old.map(s=>s.proposed_id));
 assert.deepEqual([1,2,3,4,5].map(d=>slots.filter(s=>s.domain===d).length),[24,1,8,8,2]);
 for(let i=0;i<43;i++){assert.equal(slots[i].objective,old[i].objective);assert.equal(slots[i].domain,old[i].domain);assert.ok(fs.existsSync(slots[i].source.path));}
 assert.deepEqual(diff.filter(x=>x.type==='design').map(x=>x.id),[1044,1045,1046,1051,1071,1078,1080,1082]);
 assert.deepEqual(diff.filter(x=>x.type==='historical-reference-only').map(x=>x.id),[1041,1042]);
});
