import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {validateLesson} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
const base=new URL('../content/isc2-cc-2026/learning/published/',import.meta.url);
const lesson=JSON.parse(fs.readFileSync(new URL('lessons/lesson-d1-01-cia-triad.json',base)));
const integrity=lesson.slides[3],recap=lesson.slides[7],scenario=lesson.slides[6];
const text=n=>[n.textContent||'',...n.children.map(text)].join(' ');
test('F02: hash evidence requires a trusted reference and does not identify an author',()=>{
 const p=integrity.blocks[2].items[0];
 assert.match(p.en,/trusted reference/);assert.match(p.en,/both the file and its digest/);assert.match(p.en,/does not establish authenticity, authorship or non-repudiation/);assert.match(p.en,/provenance.*custody.*procedures/);
 assert.match(p.th,/Hash/);assert.match(p.th,/อ้างอิงที่เชื่อถือได้/);assert.match(p.th,/ทั้งไฟล์และค่า Hash/);assert.match(p.th,/Authenticity.*Authorship.*Non-repudiation/);assert.doesNotMatch(p.en,/unique mathematical|proves.*unchanged/);
});
test('F03/F04: CIA consequences are contextual and authenticated encryption is acknowledged',()=>{
 assert.match(recap.blocks[1].rows[0][3].en,/authenticated encryption/i);assert.match(recap.blocks[1].rows[0][3].th,/Authenticated encryption/);
 assert.match(integrity.blocks[1].text.en,/also.*availability/i);assert.match(integrity.blocks[1].text.th,/Availability/);assert.doesNotMatch(JSON.stringify([integrity.blocks[1],recap.blocks[1].rows]),/strictly Integrity|strictly an Integrity|secrecy only|Integrity เสมอ/);
});
test('F05: every scenario branch exposes the insider qualification without changing the supported answer',()=>{
 assert.deepEqual(scenario.visual.options.map(o=>o.correct),[false,true,false]);
 for(const language of ['en','th'])for(let choice=0;choice<3;choice++){
  const doc=new TestDocument(),host=doc.createElement('article'),state={};
  const h=renderSlide(host,{lesson,slide:scenario,language,mode:'presentation',interactionState:state});fire(host.querySelectorAll('[data-option-key]')[choice],'click');
  const reason=scenario.visual.options[0].reason[language];assert.match(reason,language==='en'?/Insiders can also/:/คนภายใน/);assert.ok(text(host).includes(reason));h.destroy();
 }
});
test('F06: signature qualifications agree in TH/EN, including compromised keys and certificate trust',()=>{
 const p=integrity.blocks[2].items[1];assert.match(p.en,/identity.*key/i);assert.match(p.en,/certificate trust/i);assert.match(p.en,/compromised/i);assert.match(p.en,/legal liability/);
 assert.match(p.th,/Digital signature/);assert.match(p.th,/Certificate/);assert.match(p.th,/ถูกยึด/);assert.match(p.th,/กฎหมาย/);assert.doesNotMatch(p.th,/ไม่สามารถปฏิเสธความรับผิดชอบ/);
});
test('all corrected full explanations survive both reading and Info routes without dropped qualifiers',()=>{
 for(const language of ['en','th']){
  const doc=new TestDocument(),info=doc.createElement('div');doc.body.append(info);const ih=renderLessonInfo(info,{lesson,language});
  for(const slide of [integrity,scenario,recap]){
   const host=doc.createElement('article'),h=renderSlide(host,{lesson,slide,language,mode:'reading'});
   const expected=slide===integrity?[slide.blocks[1].text,...slide.blocks[2].items.slice(0,2)]:slide===recap?[slide.blocks[1].rows[0][3],slide.blocks[1].rows[1][3]]:[slide.visual.options[0].reason];
   for(const p of expected){assert.ok(text(host).includes(p[language]),slide.id);assert.ok(text(info).includes(p[language]),slide.id);}h.destroy();
  }ih.destroy();
 }
 assert.equal(validateLesson(lesson).valid,true);
});
test('CIA revision preserves saved IDs and independent entries through store reload',()=>{
 const lessons=fs.readdirSync(new URL('lessons/',base)).map(f=>JSON.parse(fs.readFileSync(new URL('lessons/'+f,base))));
 let raw=JSON.stringify({schemaVersion:1,lessons:Object.fromEntries(lessons.map(l=>[l.id,{lessonId:l.id,contentRevision:'1',lastSlideId:l.slides.at(-2).id,visitedSlideIds:l.slides.slice(0,-1).map(s=>s.id),status:'in-progress',completedAt:null,updatedAt:'2026-10-27T00:00:00.000Z',language:'th'}]))});
 const storage={getItem:k=>{assert.equal(k,LEARNING_PROGRESS_KEY);return raw;},setItem:(k,v)=>{assert.equal(k,LEARNING_PROGRESS_KEY);raw=v;}};
 const before=JSON.parse(raw),store=createProgressStore(storage),saved=store.read(lesson);assert.equal(saved.lastSlideId,scenario.id);assert.deepEqual(saved.visitedSlideIds,before.lessons[lesson.id].visitedSlideIds);
 store.save(lesson,visitSlide(lesson,saved,scenario.id,'en'));const reloaded=createProgressStore(storage);assert.equal(reloaded.read(lesson).lastSlideId,scenario.id);
 for(const l of lessons.filter(l=>l.id!==lesson.id))assert.deepEqual(reloaded.summary(l.id),before.lessons[l.id]);
});
test('all CIA fields outside the six authorized pairs and publication bookkeeping remain unchanged',()=>{
 const l=structuredClone(lesson);delete l.revision;
 for(const k of ['reviewedRevision','evidencePath','technical','bilingual'])delete l.review[k];
 const added=['nist-fips-180-4','nist-fips-186-5','nist-sp-800-57p1r5','nist-sp-800-38d'];
 l.references=l.references.filter(r=>!added.includes(r.id));
 for(const s of l.slides){delete s.review.reviewedRevision;s.referenceIds=s.referenceIds.filter(id=>!added.includes(id));}
 l.slides[3].blocks[1].text=null;l.slides[3].blocks[2].items[0]=null;l.slides[3].blocks[2].items[1]=null;
 l.slides[6].visual.options[0].reason=null;l.slides[7].blocks[1].rows[0][3]=null;l.slides[7].blocks[1].rows[1][3]=null;
 // Computed from revision 1 before production edits, not regenerated from changed content.
 assert.equal(createHash('sha256').update(JSON.stringify(l)).digest('hex'),'2279f413502e728dc3a97f33a6d1346c4fe9084fe1d13a9c69ffa7dae55e8e0e');
});
