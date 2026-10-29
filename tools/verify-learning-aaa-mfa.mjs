// CIA revision 4: authorized final F07/F09 corrections; exact fields are tested in verify-learning-final-signoff.mjs. Phase1 and original-slide locks remain in verify-learning-academic-remediation.mjs and verify-learning-ai-applications.mjs.
import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,completeReading} from '../js/core/learning-progress.js';
import {buildLearningCourseModel,resolveObjectiveLearningState} from '../js/core/learning-course.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {renderLearningDomain} from '../js/ui/screen-learning-domain.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
const base='content/isc2-cc-2026/learning/published/';
const read=p=>JSON.parse(fs.readFileSync(base+p,'utf8'));
const aaa=()=>read('lessons/lesson-d1-02-aaa-mfa.json');
const cia=()=>read('lessons/lesson-d1-01-cia-triad.json');
const text=n=>[n.textContent,...(n.children||[]).map(text)].join(' ');
test('next reviewed lesson publishes under 1.1 after CIA, with seven stable source-grounded bilingual slides',()=>{
 const c=read('catalog.json'),l=aaa();assert.equal(validateCatalog(c).valid,true);assert.deepEqual(publishedLessons(c).slice(0,2).map(l=>l.id),[cia().id,l.id]);
 const v=validateLesson(l);assert.equal(v.valid,true,v.errors.join('; '));assert.deepEqual(l.objectiveIds,['1.1']);assert.equal(l.slides.length,7);assert.equal(new Set(l.slides.map(s=>s.id)).size,7);
 for(const s of l.slides){assert.ok(s.blocks.length>=3);assert.ok(s.referenceIds.length);assert.ok(s.blocks.some(b=>b.kind==='text'&&b.text.en.length>130&&b.text.th.length>100));}
 for(const r of l.references)if(r.repositoryPath)assert.ok(fs.existsSync(r.repositoryPath));assert.ok(fs.existsSync(l.review.evidencePath));
});
test('seven distinct TH/EN presentations retain every detailed explanation in reading mode and Info',()=>{
 const lesson=aaa();for(const language of ['th','en']){const doc=new TestDocument(),host=doc.createElement('article');doc.body.append(host);let kinds=[];
 for(const slide of lesson.slides){let h=renderSlide(host,{lesson,slide,language,mode:'presentation',interactionState:{}});const scene=host.querySelector('[data-aaa-composition]');assert.ok(scene,slide.id);kinds.push(scene.getAttribute('data-aaa-composition'));assert.equal(scene.getAttribute('lang'),language);assert.ok(host.querySelector('svg'));h.destroy();h=renderSlide(host,{lesson,slide,language,mode:'reading'});for(const b of slide.blocks)if(b.kind==='text')assert.ok(text(host).includes(b.text[language]));h.destroy();}
 assert.equal(new Set(kinds).size,7);const h=renderLessonInfo(host,{lesson,language});for(const slide of lesson.slides){const body=host.querySelector(`[data-explanation-slide="${slide.id}"]`);assert.ok(body);for(const b of slide.blocks)if(b.kind==='text')assert.ok(text(body).includes(b.text[language]));}h.destroy();}
});
test('case reasoning survives language repaint but owns no persistent progress fields and disposes events',()=>{
 const doc=new TestDocument(),host=doc.createElement('article'),lesson=aaa(),slide=lesson.slides.at(-1),state={};let h=renderSlide(host,{lesson,slide,language:'th',mode:'presentation',interactionState:state});const b=host.querySelector('[data-action="aaa-reasoning"]');assert.equal(b.getAttribute('aria-expanded'),'false');fire(b,'click');assert.equal(state.revealed,true);h.destroy();h=renderSlide(host,{lesson,slide,language:'en',mode:'presentation',interactionState:state});const next=host.querySelector('[data-action="aaa-reasoning"]');assert.equal(next.getAttribute('aria-expanded'),'true');h.destroy();fire(next,'click');assert.equal(state.revealed,true);assert.deepEqual(Object.keys(state),['revealed']);
});
function modelWithProgress(){const catalog=read('catalog.json'),old=cia(),lesson=aaa();let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v};const store=createProgressStore(storage);store.save(old,visitSlide(old,store.read(old),old.slides[2].id,'th'));const prior=JSON.stringify(store.summary(old.id));store.save(lesson,visitSlide(lesson,store.read(lesson),lesson.slides[1].id,'en'));assert.equal(JSON.stringify(store.summary(old.id)),prior);return{lesson,old,store,storage,prior,catalog,model:buildLearningCourseModel({catalog,lessonsById:new Map([[old.id,old],[lesson.id,lesson]]),availabilityById:new Map([[old.id,'available'],[lesson.id,'available']]),progressStore:store})};}
test('V1 independent progress persists through reload and completion without altering CIA',()=>{
 const {lesson,old,store,storage,prior}=modelWithProgress();const reload=createProgressStore(storage);assert.equal(reload.read(old).lastSlideId,old.slides[2].id);assert.equal(reload.read(lesson).lastSlideId,lesson.slides[1].id);let p=reload.read(lesson);for(const s of lesson.slides)p=visitSlide(lesson,p,s.id,'th');reload.save(lesson,completeReading(lesson,p));assert.equal(reload.read(lesson).status,'completed');assert.equal(JSON.stringify(reload.summary(old.id)),prior);assert.equal(store.read(old).status,'in-progress');
});
test('multiple-lesson chooser launches selected lesson directly and Info follows selection; cleanup prevents stale launches',()=>{
 const {model,lesson,old}=modelWithProgress(),doc=new TestDocument(),root=doc.createElement('div');doc.body.append(root);let calls=[],info;
 const dispose=renderLearningDomain(root,{domain:model.domains[0],language:'th',onLaunch:(...args)=>calls.push(args),onInfo:l=>info=l});const picker=root.querySelector('#learning-objective-lesson');assert.ok(picker);assert.equal(picker.querySelectorAll('option').length,2);picker.value=lesson.id;fire(picker,'change');fire(root.querySelector('#btn-domain-lesson-info'),'click');assert.equal(info.id,lesson.id);fire(root.querySelector('#btn-start-learning'),'click');assert.deepEqual(calls.at(-1),[lesson.id,'resume','1.1']);picker.value=old.id;fire(picker,'change');fire(root.querySelector('#btn-start-learning'),'click');assert.equal(calls.at(-1)[0],old.id);const start=root.querySelector('#btn-start-learning');dispose();fire(start,'click');assert.equal(calls.length,2);
});
test('first not-started lesson after a completed CIA lesson is AAA; failing publication cannot be selected',()=>{
 const {lesson,old,store,catalog}=modelWithProgress();let p=store.read(old);for(const s of old.slides)p=visitSlide(old,p,s.id);store.save(old,completeReading(old,p));const fresh=createProgressStore({getItem:()=>JSON.stringify({schemaVersion:1,lessons:{[old.id]:store.summary(old.id)}})});const args={catalog,lessonsById:new Map([[old.id,old],[lesson.id,lesson]]),availabilityById:new Map([[old.id,'available'],[lesson.id,'available']]),progressStore:fresh};let model=buildLearningCourseModel(args);assert.equal(resolveObjectiveLearningState(model.domains[0].objectives[0]).lesson.id,lesson.id);args.availabilityById.set(lesson.id,'failed');model=buildLearningCourseModel(args);const doc=new TestDocument(),root=doc.createElement('div');doc.body.append(root);const dispose=renderLearningDomain(root,{domain:model.domains[0]});assert.equal(root.querySelector('.learning-objective-lesson-choice').hidden,true);assert.equal(root.querySelector('#learning-objective-lesson').querySelectorAll('option').length,1);assert.equal(root.querySelector('#learning-objective-lesson').querySelector('option').getAttribute('value'),old.id);assert.equal(root.querySelector('#btn-start-learning').getAttribute('data-lesson-id'),old.id);dispose();
});
test('CIA reviewed revision 4 remains byte-identical',()=>assert.equal(createHash('sha256').update(fs.readFileSync(base+'lessons/lesson-d1-01-cia-triad.json')).digest('hex'),'87ded3584b7e5d0b6cd99cd299dff102b9d32feffdc5519d7c36fec8a17200bf'));
