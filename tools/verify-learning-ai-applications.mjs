import {withOriginalFinalFields} from './fixtures/learning/final-remediation.mjs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {semanticBlocks} from '../js/core/learning-visuals.js';
import {createProgressStore,visitSlide,reconcileProgress,completeReading} from '../js/core/learning-progress.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {TestDocument} from './fixtures/learning/dom.mjs';
const base='content/isc2-cc-2026/learning/published/',read=p=>JSON.parse(fs.readFileSync(base+p));
const catalog=read('catalog.json'),all=publishedLessons(catalog).map(s=>read(s.lessonPath));
const get=id=>all.find(l=>l.id===id),cia=get('lesson-d1-01-cia-triad'),nr=get('lesson-d1-03-non-repudiation'),controls=get('lesson-d1-10-control-categories'),conduct=get('lesson-d1-12-professional-conduct');
const ai=cia.slides.find(s=>s.id==='slide-09-ai-training-integrity'),trace=nr.slides.find(s=>s.id==='slide-07-ai-action-evidence');
const text=n=>[n.textContent||'',...(n.children||[]).map(text)].join(' '),hash=o=>createHash('sha256').update(JSON.stringify(o)).digest('hex');
test('F01 poisoning teaches a causal chain, protected reference limits and actionable safeguards',()=>{
 assert.ok(ai,'Missing visible poisoning application');assert.equal(ai.rendererId,'incident-flow');assert.equal(ai.visual.stages.length,3);assert.deepEqual(ai.blocks.slice(0,5),semanticBlocks({...ai,blocks:[]}).slice(0,5),'Flow and reading semantics must agree');
 const en=JSON.stringify(semanticBlocks(ai).map(b=>b.text?.en||b.items?.map(i=>i.en))),th=JSON.stringify(semanticBlocks(ai).map(b=>b.text?.th||b.items?.map(i=>i.th)));
 assert.match(en,/attacker/i);assert.match(en,/labels/i);assert.match(en,/model/i);assert.match(en,/provenance/i);assert.match(en,/hash.*does not.*quality/i);assert.match(th,/poisoning/i);assert.match(th,/Hash/);assert.match(th,/คุณภาพ/);
 assert.ok(ai.referenceIds.includes('ref-ai-poisoning'));assert.equal(validateLesson(cia).valid,true);
});
test('F01 automated action distinguishes credential, permission, protected event and evidence limits',()=>{
 assert.ok(trace,'Missing automated-action case');const source=JSON.stringify(trace.blocks);
 for(const term of ['Authentication','Authorization','Accounting','triage-bot','T-104','evt-204','09:42Z'])assert.ok(source.includes(term),term);
 assert.match(trace.blocks[2].text.en,/identity.*key|key.*identity/i);assert.match(trace.blocks[2].text.en,/human intent/i);assert.match(trace.blocks[2].text.en,/compromised/i);assert.match(trace.blocks[2].text.th,/เจตนา/);assert.equal(validateLesson(nr).valid,true);
});
test('F01 control mix applies three mechanisms to AI and keeps the provider boundary explicit',()=>{
 const s=controls.slides[5],v=JSON.stringify(s.blocks);assert.match(s.blocks[0].text.en,/AI/);
 for(const term of ['Administrative','Technical','Physical'])assert.ok(v.includes(term));assert.match(v,/provider/i);assert.match(v,/training/i);assert.match(v,/AI/);assert.match(v,/guarantee/i);
 assert.match(s.blocks[2].text.th,/ผู้ให้บริการ/);assert.equal(validateLesson(controls).valid,true);
});
test('F01 adoption links authority, organizational limits, transparency, bias and ongoing review',()=>{
 const s=conduct.slides[9],p=s.blocks[2].text;for(const re of [/risk appetite/i,/transparency/i,/unfair/i,/review/i,/approved|authoriz/i,/guarantee/i])assert.match(p.en,re);
 for(const re of [/Risk appetite/i,/ความโปร่งใส/,/ไม่เป็นธรรม/,/ทบทวน/])assert.match(p.th,re);assert.match(p.en,/AI-generated security report/);assert.equal(validateLesson(conduct).valid,true);
});
test('all four AI cases have white compositions and complete paired reading/Info explanations',()=>{
 for(const language of ['en','th'])for(const [lesson,slide]of [[cia,ai],[nr,trace],[controls,controls.slides[5]],[conduct,conduct.slides[9]]]){
  assert.ok(slide);const doc=new TestDocument(),host=doc.createElement('article'),info=doc.createElement('div');doc.body.append(info);
  let h=renderSlide(host,{lesson,slide,language,mode:'presentation'});assert.ok(host.querySelector(lesson===cia?'[data-cia-composition="incident"]':lesson===nr?'[data-nr-composition="case"]':lesson===controls?'[data-control-categories-composition="together"]':'[data-professional-conduct-composition="record"]'),slide.id);h.destroy();
  h=renderSlide(host,{lesson,slide,language,mode:'reading'});const ih=renderLessonInfo(info,{lesson,language});const body=info.querySelector(`[data-explanation-slide="${slide.id}"]`);assert.ok(body);
  for(const b of semanticBlocks(slide)){const pairs=b.kind==='text'?[b.text]:b.kind==='list'?b.items:b.kind==='table'?[...b.columns,...b.rows.flat()]:[];for(const p of pairs){assert.ok(text(host).includes(p[language]),slide.id);assert.ok(text(body).includes(p[language]),slide.id);}}
  h.destroy();ih.destroy();
 }
});
test('legacy saved positions survive added slides and each independent lesson entry survives store reload',()=>{
 let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v},store=createProgressStore(storage);
 for(const l of all)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));
 const others=JSON.parse(raw).lessons;
 for(const [l,oldCount]of [[cia,8],[nr,6],[controls,8],[conduct,10]]){
  const saved={lessonId:l.id,contentRevision:l===cia?'2':'1',lastSlideId:l.slides[oldCount-1].id,visitedSlideIds:l.slides.slice(0,oldCount).map(s=>s.id),status:'completed',completedAt:'2026-10-27T00:00:00.000Z',language:'th'};
  const next=reconcileProgress(l,saved);assert.equal(next.lastSlideId,saved.lastSlideId);assert.deepEqual(next.visitedSlideIds,saved.visitedSlideIds);assert.equal(next.status,'in-progress');store.save(l,next);
  if(l===cia||l===nr)assert.equal(completeReading(l,next).status,'in-progress');
 }
 const reload=createProgressStore(storage);for(const l of all.filter(l=>![cia,nr,controls,conduct].includes(l)))assert.deepEqual(reload.summary(l.id),others[l.id]);
 assert.equal(reload.read(cia).lastSlideId,'slide-08-takeaways');assert.equal(reload.read(nr).lastSlideId,'slide-06-evaluate-the-claim');
});
test('publication keeps Domain2 intact and all 101 original Domain1 IDs in their original relative order',()=>{
 assert.equal(validateCatalog(catalog).valid,true);const d1=all.filter(l=>l.domainId===1);assert.equal(d1.length,12);assert.equal(d1.reduce((n,l)=>n+l.slides.length,0),103);
 for(const l of d1){const old=l.slides.filter(s=>!['slide-09-ai-training-integrity','slide-07-ai-action-evidence'].includes(s.id));assert.equal(new Set(old.map(s=>s.id)).size,old.length);assert.ok(validateLesson(l).valid,l.id);}
 const outside=catalog.domains.filter(d=>d.id!==1);assert.equal(hash(outside),'c48e5ce311b59fb4c30fa52ea5125c6d1343e8b01703cc35b8898ee9de01b6e7');
 const originalIds=d1.flatMap(l=>l.slides.filter(s=>!['slide-09-ai-training-integrity','slide-07-ai-action-evidence'].includes(s.id)).map(s=>[l.id,s.id]));assert.equal(hash(originalIds),'d2a24f7bda015e1b58edd37c18b708d73c4a6440142a49dbb673ba5f9c9bdc02');
});
test('all 99 pre-existing slides outside the two targeted extensions retain their educational fields',()=>{
 const retained=all.filter(l=>l.domainId===1).flatMap(l=>withOriginalFinalFields(l).slides.filter(s=>!['slide-09-ai-training-integrity','slide-07-ai-action-evidence'].includes(s.id)&&!(l===controls&&s.id==='slide-06-one-goal-three-controls')&&!(l===conduct&&s.id==='slide-10-defensible-decisions')).map(s=>{const copy=structuredClone(s);delete copy.review;return copy;}));
 assert.equal(retained.length,99);assert.equal(hash(retained),'6ab0a6b64f838c5d480ea55bc59a949215281c3916950b204045ba09872a6965');
});
