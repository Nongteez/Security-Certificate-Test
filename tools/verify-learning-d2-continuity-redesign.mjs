import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {createProgressStore,visitSlide} from '../js/core/learning-progress.js';
const lesson=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-03-business-continuity-bcp.json',import.meta.url)));
const text=n=>[n.textContent||'',...(n.children||[]).map(text)].join(' ');
const mount=(slide,language='en',extra={})=>{const doc=new TestDocument(),host=doc.createElement('article');host.classList.add('learning-slide');doc.body.append(host);const h=renderSlide(host,{lesson,slide,mode:'presentation',language,interactionState:{},...extra});return {host,h};};
test('Continuity redesign: six concise bilingual compositions teach operational relationships without invented source clusters',()=>{
 const expected=['service-alternate-path','disruption-service-response','continuity-operating-plan','independent-alternate-dependencies','business-impact-dependencies','continuity-response-scenario'];
 for(const language of ['en','th'])for(const [i,s]of lesson.slides.entries()){
  const {host,h}=mount(s,language),root=host.querySelector('[data-bc-bcp-composition]');assert.equal(root?.getAttribute('data-bc-bcp-composition'),expected[i]);
  assert.ok(s.title[language].length<110);assert.ok(text(root).length<1700);assert.equal(text(root).includes(s.blocks[2].text[language]),false);
  assert.doesNotMatch(text(root),/S1[1249]|#\d|Tier [123]|8 (?:ELEMENTS|DISRUPTIONS)|Environmental\/Facility|Command.*Coordination/i);h.destroy();
 }
});
test('Continuity redesign: redundancy has explicit common-cause, capacity and testing limits rather than universal elimination guarantees',()=>{
 const corpus=JSON.stringify(lesson);assert.doesNotMatch(corpus,/redundancy eliminates|no single building.*can stop|never left unstaffed|ขจัดจุดล้มเหลว|ต่อทันทีเมื่อ/i);
 assert.match(corpus,/common.cause|shared.*(flood|power|provider)|same.*incident/i);assert.match(corpus,/capacity|capacities/i);assert.match(corpus,/test|exercise/i);
 const s5=JSON.stringify(lesson.slides[4]);assert.match(s5,/dependenc/i);assert.match(s5,/impact.*time|impact over time/i);assert.match(s5,/model drift/i);assert.doesNotMatch(corpus,/frequent ISC2 CC exam|ข้อสอบ ISC2 CC มัก/);
});
test('Continuity redesign: all source disruptions/elements and complete TH/EN Reading/Info remain available',()=>{
 assert.equal(lesson.slides[1].blocks[1].rows.length,8);assert.equal(lesson.slides[2].blocks[1].rows.length,8);
 for(const name of ['Natural disasters','Cyberattacks','Power outages','Equipment failures','Network outages','Pandemics','Loss of facilities','Supply-chain disruptions'])assert.ok(lesson.slides[1].blocks[1].rows.some(r=>r[0].en.includes(name)));
 for(const language of ['en','th']){
  const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const info=renderLessonInfo(host,{lesson,language}),it=text(host);info.destroy();
  for(const s of lesson.slides){const h=renderSlide(host,{lesson,slide:s,language,mode:'reading'}),rt=text(host);for(const b of s.blocks){const pairs=b.kind==='table'?[b.caption,...b.columns,...b.rows.flat()]:b.kind==='list'?b.items:[b.text];for(const p of pairs){assert.ok(rt.includes(p[language]));assert.ok(it.includes(p[language]));}}h.destroy();}
 }
});
test('Continuity redesign: original four flood decisions keep B recommended, bilingual state and listener cleanup',()=>{
 const state={};for(let i=0;i<4;i++){
  let r=mount(lesson.slides[5],'en',{interactionState:state});fire(r.host.querySelector(`[data-bcb-scenario-choice="${i}"]`),'click');assert.equal(state.choice,i);assert.equal(r.host.querySelector('[data-bcb-scenario-feedback]').getAttribute('data-bcb-outcome'),i===1?'recommended':'distractor');r.h.destroy();
  r=mount(lesson.slides[5],'th',{interactionState:state});assert.equal(r.host.querySelector(`[data-bcb-scenario-choice="${i}"]`).getAttribute('aria-pressed'),'true');assert.match(text(r.host.querySelector('[data-bcb-scenario-feedback]')),/[ก-๙]/);const stale=r.host.querySelector('[data-bcb-scenario-choice="0"]');r.h.destroy();fire(stale,'click');assert.equal(state.choice,i);
 }
});
test('Continuity redesign: stable IDs/revision and every position reload independently of protected Lesson1/Lesson2',()=>{
 const before=JSON.parse(fs.readFileSync(new URL('../artifacts/qa/domain-2-completion-20261030/entry-L3-published.json',import.meta.url)));assert.equal(lesson.revision,before.revision);assert.deepEqual(lesson.slides.map(s=>s.id),before.slides.map(s=>s.id));
 let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v};let store=createProgressStore(storage);const protectedLessons=['01-grc-foundations','02-grc-tools-risk-register'].map(n=>JSON.parse(fs.readFileSync(new URL(`../content/isc2-cc-2026/learning/published/lessons/lesson-d2-${n}.json`,import.meta.url))));
 for(const l of protectedLessons)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));const saved=protectedLessons.map(l=>JSON.stringify(store.read(l)));
 for(const s of lesson.slides){store.save(lesson,visitSlide(lesson,store.read(lesson),s.id,'en'));store=createProgressStore(storage);assert.equal(store.read(lesson).lastSlideId,s.id);}
 protectedLessons.forEach((l,i)=>assert.equal(JSON.stringify(store.read(l)),saved[i]));
 const staged=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-03-business-continuity-bcp.json',import.meta.url)));assert.deepEqual({...lesson,status:'in-preparation'},staged);
});
