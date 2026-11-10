import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {loadQuestionsForDomains} from '../../../js/core/question-loader.js';
import {renderExplanation2026Content} from '../../../js/ui/components/explanation-2026.js';
const out='artifacts/qa/question-bank-academic-repair/';
const read=p=>JSON.parse(fs.readFileSync(out+p,'utf8'));
const before=read('questions.before.json'),proposals=read('change-proposals.json');
const bank=Object.values(await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]})).flat();
const byId=new Map(bank.map(q=>[q.id,q]));
const hash=x=>crypto.createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
test('157 records retain order, IDs, domain and every answer key and option',()=>{
 assert.equal(bank.length,157);assert.deepEqual(bank.map(q=>q.id),before.map(q=>q.id));
 for(let i=0;i<bank.length;i++)for(const k of ['id','dom','correct_idx','options','options_th'])assert.deepEqual(bank[i][k],before[i][k],`${bank[i].id} ${k}`);
 assert.deepEqual([1,2,3,4,5].map(d=>bank.filter(q=>q.dom===d).length),[24,39,23,33,38]);
});
test('critical explanations and each option rationale address the actual concepts in EN and TH',()=>{
 const expected={588:[/knowledge/i,/สิ่งที่คุณรู้/],589:[/Data Processor/,/ผู้ประมวลผล/],590:[/inventory/i,/ประเภทข้อมูล/],591:[/Vulnerability/,/ช่องโหว่/]};
 for(const [id,p] of Object.entries(expected)){
  const q=byId.get(+id);assert.match(q.explanation_detail.correct.en,p[0],`Q${id} EN topic`);assert.match(q.explanation_detail.correct.th,p[1],`Q${id} TH topic`);
 }
 const wrong=(id,l)=>byId.get(id).explanation_detail.incorrect.find(r=>r.letter===l);
 assert.match(wrong(588,'A').text_en,/PIN/);assert.match(wrong(588,'C').text_en,/two/i);assert.match(wrong(588,'D').text_en,/software/i);
 assert.match(wrong(589,'A').text_en,/individuals/);assert.match(wrong(589,'B').text_en,/Controller/);assert.match(wrong(589,'D').text_en,/Authority/);
 assert.match(wrong(590,'A').text_en,/retention/i);assert.match(wrong(590,'C').text_en,/schedule/i);assert.match(wrong(590,'D').text_en,/masking/i);
 assert.match(wrong(591,'A').text_en,/assets/);assert.match(wrong(591,'B').text_en,/threat/i);assert.match(wrong(591,'D').text_en,/Impact/);
});
test('six reported stale distractor sets match the final displayed options',()=>{
 const pairs=[[596,'C',/versions|inventory/i],[596,'D',/zero/],[597,'C',/guarantee/],[597,'D',/firewalls/],[599,'B',/guideline/i],[599,'D',/policy/i],[601,'C',/firewall physical/],[601,'D',/correctly identifies/],[603,'B',/Detective/],[603,'C',/Preventive/],[611,'D',/NIST SP 800-30/]];
 for(const [id,l,re] of pairs)assert.match(byId.get(id).explanation_detail.incorrect.find(r=>r.letter===l).text_en,re,`Q${id} ${l}`);
 assert.doesNotMatch(JSON.stringify(byId.get(611)),/PCI DSS|ต่ออายุใบรับรอง.*ทุกปี/);
});
test('each approved field proposal applied exactly; 129 other records retain their hashes',()=>{
 assert.equal(proposals.length,28);
 for(const q of bank){
  const b=before.find(r=>r.id===q.id),p=proposals.find(r=>r.id===q.id);
  if(!p){assert.equal(hash(q),hash(b),`Unmodified Q${q.id}`);continue;}
  const changed=Object.keys(q).filter(k=>JSON.stringify(q[k])!==JSON.stringify(b[k]));
  assert.deepEqual(changed.sort(),Object.keys(p.fields).sort(),`Q${q.id} field scope`);
  for(const [k,v] of Object.entries(p.fields))assert.ok(JSON.stringify(q[k])===JSON.stringify(v.after),`Q${q.id} ${k} proposal`);
 }
});
test('all 157 records retain schema, bilingual option structure and three non-key rationale letters',()=>{
 for(const q of bank){
  assert.deepEqual(Object.keys(q).sort(),Object.keys(before[0]).sort());
  assert.equal(q.options.length,4);assert.equal(q.options_th.length,4);assert.ok(Number.isInteger(q.correct_idx));
  assert.ok(q.correct_idx>=0&&q.correct_idx<4);
  const d=q.explanation_detail;assert.deepEqual(d.incorrect.map(r=>r.letter).sort(),[...'ABCD'].filter((_,i)=>i!==q.correct_idx));
  for(const value of [q.question,q.question_th,q.explanation,q.explanation_th,q.short_explanation_en,d.correct.en,d.correct.th,...d.incorrect.flatMap(r=>[r.text_en,r.text_th])])assert.ok(value.trim()&&!value.includes('\ufffd'),`Q${q.id} filled content`);
 }
});
test('all repaired explanations render their complete bilingual reasoning through the real renderer',()=>{
 for(const p of proposals){const q=byId.get(p.id),d=q.explanation_detail;
  for(const lang of ['en','th','both']){
   const html=renderExplanation2026Content(q,lang);assert.ok(html.length>0);
   const texts=lang==='en'?[d.correct.en,...d.incorrect.map(r=>r.text_en)]:lang==='th'?[d.correct.th,...d.incorrect.map(r=>r.text_th)]:[d.correct.en,d.correct.th,...d.incorrect.flatMap(r=>[r.text_en,r.text_th])];
   // Rendering can escape punctuation; compare a normalized text projection.
   const normalize=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&#0?39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
   for(const t of texts)assert.ok(normalize(html).includes(normalize(t)),`Q${q.id} ${lang} complete rationale`);
  }
 }
});
test('held records and existing audit/expansion/source/UI/engine/legacy files retain entry hashes',()=>{
 for(const id of [619,629,630,637])assert.deepEqual(byId.get(id),before.find(q=>q.id===id));
 const allowed=new Set([1,2,5].map(d=>`data/certs/isc2/cc/versions/next-bank/questions/domain-${d}.js`));
 for(const [p,h] of Object.entries(read('entry-hashes.json'))){if(allowed.has(p))continue;assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),h,`Preserve ${p}`);}
});
test('only demonstrated minimal wording corrections affect stems; no new assessment material',()=>{
 const ids=bank.filter((q,i)=>q.question!==before[i].question||q.question_th!==before[i].question_th).map(q=>q.id);
 assert.deepEqual(ids,[603,611,1018]);
 assert.match(byId.get(603).question_th,/Write-once/);assert.match(byId.get(611).question,/internationally recognized/);assert.match(byId.get(1018).question_th,/เหมาะสมที่สุด/);
});
