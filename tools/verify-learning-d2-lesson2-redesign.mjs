import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {createProgressStore,visitSlide,completeReading} from '../js/core/learning-progress.js';
import {hasGrcToolsRiskRegisterPresentation,renderGrcToolsRiskRegisterPresentation} from '../js/ui/learning/grc-tools-risk-register-presentations.js';
const base=new URL('../content/isc2-cc-2026/learning/published/',import.meta.url);
const lesson=JSON.parse(fs.readFileSync(new URL('lessons/lesson-d2-02-grc-tools-risk-register.json',base)));
const text=n=>[n.textContent||'',...(n.children||[]).map(text)].join(' ');
const render=(slide,language='en',extra={})=>{const doc=new TestDocument(),host=doc.createElement('article');doc.body.append(host);const handle=renderGrcToolsRiskRegisterPresentation(host,{lesson,slide,language,interactionState:{},...extra});return {host,handle};};

test('L2 redesign: seven concise bilingual messages replace source labels, invented stages and field-count grids',()=>{
 for(const language of ['en','th']){
  const seen=[];
  for(const [i,slide]of lesson.slides.entries()){
   const {host,handle}=render(slide,language);const root=host.querySelector('[data-grc-tools-composition]');assert.ok(root);seen.push(root.getAttribute('data-grc-tools-composition'));
   assert.ok(text(host.querySelector('h3')).length<110,'Use a short authored learning message');
   assert.ok(text(host).length<1700,'Do not dump semantic source tables into presentation');
   assert.doesNotMatch(text(host),/\bS0[89]\b|\bS10\b|D2-Q\d|STAGE 0\d|#\d|Schema Stage|Academic Guardrail|AUTHORITATIVE|11 FIELDS|EXAM & PRACTICE CUE/i);
   assert.equal(text(host).includes(slide.blocks[2].text[language]),false);
   if(i===2)assert.equal(host.querySelectorAll('[data-grt-field]').length,0,'Register teaches a readable record, not eleven equal mini-fields');
   handle.destroy();
  }
  assert.equal(new Set(seen).size,7);
 }
});

test('L2 redesign: complete semantic Reading and Info retain six capabilities and eleven fields without invented taxonomies',()=>{
 assert.equal(lesson.slides[1].blocks[1].rows.length,6);assert.equal(lesson.slides[2].blocks[1].rows.length,11);
 assert.equal(lesson.slides[1].blocks[1].columns.length,2);assert.equal(lesson.slides[2].blocks[1].columns.length,2);
 for(const i of [1,2])assert.doesNotMatch(JSON.stringify(lesson.slides[i]),/Workflow Stage|Schema Stage|Stage [123]|#\d|four logical lifecycle|three.*stages|หมวด [1-4]|ช่วงที่ [1-3]/i);
 const caps=['Risk registers','Policy management','Compliance tracking','Control management','Audit management','Risk assessments'];
 const fields=['Risk description','Affected asset or process','Threat','Vulnerability','Likelihood','Impact','Risk rating','Risk owner','Treatment strategy','Current status','Residual risk'];
 for(const [i,names]of [[1,caps],[2,fields]])for(const name of names)assert.ok(lesson.slides[i].blocks[1].rows.some(r=>r[0].en===name));
 for(const language of ['en','th']){
  const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const info=renderLessonInfo(host,{lesson,language}),infoText=text(host);info.destroy();
  for(const slide of lesson.slides){const h=renderSlide(host,{lesson,slide,language,mode:'reading'}),readText=text(host);for(const b of slide.blocks){const pairs=b.kind==='table'?[b.caption,...b.columns,...b.rows.flat()]:b.kind==='list'?b.items:[b.text];for(const p of pairs){assert.ok(readText.includes(p[language]),`${slide.id}/${language} Reading`);assert.ok(infoText.includes(p[language]),`${slide.id}/${language} Info`);}}h.destroy();}
 }
});

test('L2 redesign: an explicitly illustrative ordinal product supports decisions without monetary or universal-formula claims',()=>{
 const {host,handle}=render(lesson.slides[3]);const t=text(host);assert.match(t,/3/);assert.match(t,/4/);assert.match(t,/12/);assert.match(t,/illustrative|example/i);assert.match(t,/priority/i);assert.match(t,/ordinal|rank|points/i);assert.match(t,/Mitigate/);assert.match(t,/Avoid/);assert.match(t,/Transfer|Share/);assert.match(t,/Accept/);handle.destroy();
 const s=JSON.stringify(lesson.slides[3]);assert.match(s,/organization.*(criteria|scale|bands)|agreed criteria/i);assert.match(s,/probabilit|frequen|hours/i);assert.match(s,/responsibilit|duties/i);assert.doesNotMatch(s,/True quantitative risk analysis uses objective monetary/);
 assert.doesNotMatch(lesson.slides[3].blocks[1].rows[1][1].th,/(?:Quantitative|เชิงปริมาณ).*(?:ต้อง|จำเป็นต้อง).*(?:ตัวเงิน|เงิน)/,'Check the quantitative definition itself, not unrelated qualifications later in the JSON');
});

test('L2 redesign: remaining risk is reassessed with explicit baselines, control evidence and authorized follow-through',()=>{
 const s=JSON.stringify(lesson.slides[5]);assert.doesNotMatch(s,/>\s*0|above zero|greater than zero|always leaves|never reduces risk to zero|มากกว่าศูนย์|มีเพียง.*Avoidance|Inherent Risk.*−.*Controls/i);
 for(const rx of [/Inherent Risk/,/Residual Risk/,/Risk Owner/,/baseline/i,/reassess/i,/planned/i,/verif/i,/Avoid/])assert.match(s,rx);
 const worked=JSON.stringify(lesson.slides[4]);assert.doesNotMatch(worked,/making passive acceptance unacceptable|องค์กรย่อมไม่สามารถ|MFA blocks credential abuse/);for(const name of ['Ransomware affecting critical servers','High','IT Manager','Mitigation','EDR','backups','network segmentation','MFA'])assert.ok(worked.toLowerCase().includes(name.toLowerCase()));
 const {host,handle}=render(lesson.slides[5]);assert.doesNotMatch(text(host),/>\s*0|−|=/);assert.match(text(host),/reassess|review/i);handle.destroy();
});

test('L2 redesign: all four scenario feedback states retain meaning, bilingual selection and abort/disposal ownership',()=>{
 const state={},slide=lesson.slides[6];let current=render(slide,'en',{interactionState:state});assert.equal(current.host.querySelector('[data-grt-scenario-feedback]').getAttribute('data-grt-outcome'),'idle');
 for(let i=0;i<4;i++){
  fire(current.host.querySelector(`[data-grt-scenario-choice="${i}"]`),'click');assert.equal(state.choice,i);let feedback=current.host.querySelector('[data-grt-scenario-feedback]');assert.equal(feedback.getAttribute('data-grt-outcome'),i===2?'recommended':'distractor');assert.equal(feedback.getAttribute('aria-live'),'polite');assert.doesNotMatch(text(feedback),/>\s*0|S08|S09|S10|D2-Q|never.*zero|always.*zero/);
  const reasons=[/assessment|accountab|owner/i,/install|verif|zero/i,/Risk Register|IT Manager|remaining/i,/ordinal|currency|financial|rank/i];assert.match(text(feedback),reasons[i]);
  current.handle.destroy();current=render(slide,'th',{interactionState:state});assert.equal(current.host.querySelector(`[data-grt-scenario-choice="${i}"]`).getAttribute('aria-pressed'),'true');assert.match(text(current.host.querySelector('[data-grt-scenario-feedback]')),/[ก-๙]/);current.handle.destroy();current=render(slide,'en',{interactionState:state});
 }
 const stale=current.host.querySelector('[data-grt-scenario-choice="0"]');current.handle.destroy();fire(stale,'click');assert.equal(state.choice,3);
 const abort=new AbortController();current=render(slide,'en',{interactionState:state,signal:abort.signal});abort.abort();fire(current.host.querySelector('[data-grt-scenario-choice="0"]'),'click');assert.equal(state.choice,3);current.handle.destroy();
});

test('L2 redesign: all seven positions and completed progress survive reload independently of every other published lesson',()=>{
 const cat=JSON.parse(fs.readFileSync(new URL('catalog.json',base)));const lessons=cat.domains.flatMap(d=>d.objectives.flatMap(o=>o.lessons)).filter(l=>l.status==='published').map(l=>JSON.parse(fs.readFileSync(new URL('lessons/'+l.id+'.json',base))));let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v};let store=createProgressStore(storage);
 for(const l of lessons)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));const before=Object.fromEntries(lessons.map(l=>[l.id,JSON.stringify(store.read(l))]));
 for(const slide of lesson.slides){store.save(lesson,visitSlide(lesson,store.read(lesson),slide.id,'en'));store=createProgressStore(storage);assert.equal(store.read(lesson).lastSlideId,slide.id);}
 store.save(lesson,completeReading(lesson,store.read(lesson)));store=createProgressStore(storage);assert.equal(store.read(lesson).status,'completed');assert.equal(lesson.revision,'1');for(const l of lessons.filter(l=>l.id!==lesson.id))assert.equal(JSON.stringify(store.read(l)),before[l.id]);
});

test('L2 redesign: scoped two-column shape guards preserve semantic fallback, staged parity and stable identity',()=>{
 for(const slide of lesson.slides)assert.equal(hasGrcToolsRiskRegisterPresentation({lesson,slide}),true);
 const slide=structuredClone(lesson.slides[1]);slide.blocks[1].rows[0].push({en:'unexpected',th:'ไม่คาดหมาย'});assert.equal(hasGrcToolsRiskRegisterPresentation({lesson,slide}),false);assert.equal(hasGrcToolsRiskRegisterPresentation({lesson:{...lesson,id:'other'},slide:lesson.slides[0]}),false);
 const staged=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-02-grc-tools-risk-register.json',import.meta.url)));assert.deepEqual({...lesson,status:'in-preparation'},staged);assert.equal(lesson.primaryObjectiveId,'2.1');assert.equal(lesson.slides.length,7);assert.deepEqual(lesson.slides.map(s=>s.id),['slide-01-grc-tools-platform','slide-02-six-grc-tool-capabilities','slide-03-risk-register-anatomy','slide-04-scoring-and-treatment','slide-05-ransomware-worked-example','slide-06-residual-risk-and-ownership','slide-07-risk-register-scenario']);
});
