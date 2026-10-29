import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {TestDocument, fire} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {createProgressStore, visitSlide, completeReading} from '../js/core/learning-progress.js';
import {renderGrcFoundationsPresentation, hasGrcFoundationsPresentation} from '../js/ui/learning/grc-foundations-presentations.js';

const base=new URL('../content/isc2-cc-2026/learning/published/lessons/',import.meta.url);
const lesson=JSON.parse(fs.readFileSync(new URL('lesson-d2-01-grc-foundations.json',base)));
const text=n=>[n.textContent||'',...(n.children||[]).map(text)].join(' ');
const render=(slide,language='en',extra={})=>{
 const doc=new TestDocument(),host=doc.createElement('article');doc.body.append(host);
 const handle=renderGrcFoundationsPresentation(host,{lesson,slide,language,interactionState:{},...extra});
 return {host,handle};
};

test('Lesson1 presentation selects a concise teaching message and omits artificial groups/source microcopy in both languages',()=>{
 const messages=[/business purpose/i,/coordinated work/i,/gaps.*actionable/i,/reference.*task/i,/decides.*evidence/i,/NovaPay.*first/i];
 for(const language of ['en','th'])for(const [i,slide] of lesson.slides.entries()){
  const {host,handle}=render(slide,language);
  const root=host.querySelector('[data-grc-foundations-composition]');
  assert.ok(root,slide.id);assert.equal(root.getAttribute('lang'),language);
  const title=host.querySelector('h3');
  assert.ok(title);if(language==='en')assert.match(text(title),messages[i]);
  assert.ok(text(title).length<110,`${slide.id} needs an authored message, not the long source heading`);
  assert.doesNotMatch(text(host),/#\d|3 lenses|3 แกน|Strategy & Decisions|Risk & Control Unity|Obligations & Efficiency|DOMAIN 2|OBJECTIVE 2\.1|\bS0[1-9]\b|Boundary 0|7 Benefits|4 Breakdowns/i);
  assert.ok(text(host).length<1900,`${slide.id}/${language} should not dump the source tables`);
  assert.equal(text(host).includes(slide.blocks[2].text[language]),false);
  handle.destroy();
 }
});

test('Lesson1 concise canvases retain distinct GRC roles, framework functions and directional/evidence boundaries',()=>{
 const first=render(lesson.slides[0]);
 for(const rx of [/Governance/,/Risk Management/,/Compliance/,/MFA/,/accountab|owner/i,/applicable/i])assert.match(text(first.host),rx);
 first.handle.destroy();
 const purposes=render(lesson.slides[1]);assert.match(text(purposes.host),/access review/i);assert.match(text(purposes.host),/shared|reuse/i);purposes.handle.destroy();
 const benefits=render(lesson.slides[2]);assert.equal(benefits.host.querySelectorAll('[data-grc-breakdown]').length,4);benefits.handle.destroy();
 const frameworks=render(lesson.slides[3]);for(const rx of [/NIST CSF/,/ISO\/IEC 27001/,/COBIT/,/ISMS/,/enterprise IT/i,/not.*universal.*law|not.*universal.*legal/i])assert.match(text(frameworks.host),rx);frameworks.handle.destroy();
 const boundaries=render(lesson.slides[4]);for(const rx of [/Governance/,/Management/,/Risk Management/,/Compliance/,/evidence/i,/VPN/])assert.match(text(boundaries.host),rx);boundaries.handle.destroy();
 // Unknown/altered lessons still fall back through the existing semantic renderer.
 assert.equal(hasGrcFoundationsPresentation({lesson:{...lesson,id:'other'},slide:lesson.slides[0]}),false);
 const changed=structuredClone(lesson.slides[0]);changed.blocks[1].rows.pop();assert.equal(hasGrcFoundationsPresentation({lesson,slide:changed}),false);
});

test('All original semantic pairs remain in Reading and Info, including all seven purposes and eleven benefit/failure rows',()=>{
 for(const language of ['en','th']){
  const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);
  const info=renderLessonInfo(host,{lesson,language});
  const allInfo=text(host);info.destroy();
  for(const slide of lesson.slides){
   const read=renderSlide(host,{lesson,slide,language,mode:'reading'});const reading=text(host);
   for(const block of slide.blocks){
    const pairs=block.kind==='table'?block.rows.flat():block.kind==='list'?block.items:[block.text];
    for(const pair of pairs){assert.ok(reading.includes(pair[language]),`${slide.id} Reading missing original pair`);assert.ok(allInfo.includes(pair[language]),`${slide.id} Info missing original pair`);}
   }
   read.destroy();
  }
 }
 assert.equal(lesson.slides[1].blocks[1].rows.length,7);assert.equal(lesson.slides[2].blocks[1].rows.length,11);
});

test('All four NovaPay decisions retain source-specific reasons, bilingual choice state and listener disposal',()=>{
 const slide=lesson.slides[5],state={};
 let current=render(slide,'en',{interactionState:state});
 assert.equal(current.host.querySelector('[data-grc-scenario-feedback]').getAttribute('data-grc-outcome'),'pending');
 for(let choice=0;choice<4;choice++){
  fire(current.host.querySelector(`[data-grc-scenario-choice="${choice}"]`),'click');
  assert.equal(state.choice,choice);
  const feedback=current.host.querySelector('[data-grc-scenario-feedback]');
  assert.equal(feedback.getAttribute('data-grc-outcome'),choice===2?'recommended':'distractor');
  assert.doesNotMatch(text(feedback), /\bS06\b/, 'Feedback should explain the decision, not expose source-capture codes');
  if(choice===0)for(const rx of [/tools/i,/direction/i,/accountab/i,/duplicat/i])assert.match(text(feedback),rx);
  else assert.ok(text(feedback).includes(slide.blocks[1].rows[choice][2].en));
  current.handle.destroy();current=render(slide,'th',{interactionState:state});
  assert.equal(current.host.querySelector(`[data-grc-scenario-choice="${choice}"]`).getAttribute('aria-pressed'),'true');
  const thFeedback=text(current.host.querySelector('[data-grc-scenario-feedback]'));
  if(choice===0)for(const rx of [/เครื่องมือ/,/ทิศทาง/,/รับผิดชอบ/,/ซ้ำ/])assert.match(thFeedback,rx);
  else assert.ok(thFeedback.includes(slide.blocks[1].rows[choice][2].th));
  current.handle.destroy();current=render(slide,'en',{interactionState:state});
 }
 const stale=current.host.querySelector('[data-grc-scenario-choice="0"]');current.handle.destroy();fire(stale,'click');assert.equal(state.choice,3);
 const abort=new AbortController();current=render(slide,'en',{interactionState:state,signal:abort.signal});abort.abort();fire(current.host.querySelector('[data-grc-scenario-choice="0"]'),'click');assert.equal(state.choice,3);current.handle.destroy();
});

test('Unchanged IDs/revision reconcile saved Lesson1 positions independently of every other published lesson',()=>{
 const catalog=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json',import.meta.url)));
 const lessons=catalog.domains.flatMap(d=>d.objectives.flatMap(o=>o.lessons)).filter(l=>l.status==='published').map(l=>JSON.parse(fs.readFileSync(new URL(l.id+'.json',base))));
 let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v};let store=createProgressStore(storage);
 for(const l of lessons)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));
 const before=Object.fromEntries(lessons.map(l=>[l.id,JSON.stringify(store.read(l))]));
 for(const slide of lesson.slides){store.save(lesson,visitSlide(lesson,store.read(lesson),slide.id,'en'));store=createProgressStore(storage);assert.equal(store.read(lesson).lastSlideId,slide.id);}
 store.save(lesson,completeReading(lesson,store.read(lesson)));store=createProgressStore(storage);
 assert.equal(store.read(lesson).status,'completed','Editorial changes retain revision-compatible completion');
 for(const l of lessons.filter(l=>l.id!==lesson.id))assert.equal(JSON.stringify(store.read(l)),before[l.id]);
 assert.equal(store.read(lesson).contentRevision,lesson.revision);
});

test('Reading editorial clarity removes invented clusters and numeric cross-references while retaining seven source purposes',()=>{
 const staged=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-01-grc-foundations.json',import.meta.url)));
 const purposes=[/align cybersecurity with business objectives/i,/identify and manage risks/i,/meet legal and regulatory obligations/i,/establish consistent policies and controls/i,/improve accountability/i,/support informed decision-making/i,/reduce duplication of security and compliance efforts/i];
 for(const data of [lesson,staged]){
  const slide=data.slides[1],table=slide.blocks[1];
  assert.equal(table.columns.length,2,'Purpose and practical explanation need no invented cluster column');
  assert.equal(table.rows.length,7);
  for(const [i,row] of table.rows.entries()){
   assert.equal(row.length,2);assert.match(row[0].en,purposes[i]);
   assert.doesNotMatch(row[0].en,/^\d+[.)]/);
   assert.ok(row[1].en.length>30&&row[1].th.length>30,'Retain a substantial practical explanation for every purpose');
  }
  const copy=JSON.stringify(slide);
  assert.doesNotMatch(copy,/#\d|3 lenses|3 แกน|three operational lenses|3 มุมมอง|Strategy & Decisions|Risk & Control Unity|Obligations & Efficiency|Functional Cluster|กลุ่มหน้าที่หลัก/);
  for(const lang of ['en','th']){
   const {host,handle}=render(slide,lang);assert.ok(host.querySelector('[data-grc-foundations-composition]'));handle.destroy();
   assert.doesNotMatch(data.slides[0].blocks[4].text[lang],/→/,'Complementary GRC roles are not sequential stages');
  }
 }
 const unpublished=structuredClone(staged);unpublished.status=lesson.status;
 assert.deepEqual(unpublished,lesson,'Staged/published Lesson1 content stays synchronized apart from publication status');
});
