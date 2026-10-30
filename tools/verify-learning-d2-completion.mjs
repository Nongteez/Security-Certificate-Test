import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createHash} from 'node:crypto';
import {publishedLessons,validateCatalog,validateLesson} from '../js/core/learning-schema.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLearningRoute,disposeLearningRoute} from '../js/ui/learning/routes.js';
import {selectLearningScreen,updateSetup,state} from '../js/core/state.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
const root='content/isc2-cc-2026/learning/published/',qa='artifacts/qa/domain-2-completion-20261030/';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),catalog=read(root+'catalog.json'),summaries=publishedLessons(catalog),d2=catalog.domains.find(d=>d.id===2);
const lesson=id=>read(root+summaries.find(s=>s.id===id).lessonPath),all=d2.objectives.flatMap(o=>o.lessons).map(s=>lesson(s.id));
const hash=b=>createHash('sha256').update(b).digest('hex');

test('complete Domain2 publishes eight unique reviewed lessons, 55 slides and every official objective',()=>{
 assert.equal(validateCatalog(catalog).valid,true);assert.equal(d2.status,'published');
 assert.deepEqual(d2.objectives.map(o=>[o.id,o.status,o.lessons.length]),['2.1','2.2','2.3','2.4'].map(id=>[id,'published',2]));
 assert.deepEqual(all.map(l=>l.slides.length),[6,7,6,9,6,8,7,6]);assert.equal(all.reduce((n,l)=>n+l.slides.length,0),55);
 assert.equal(new Set(all.map(l=>l.id)).size,8);
 for(const l of all){assert.equal(validateLesson(l).valid,true,l.id);assert.equal(l.status,'published');assert.deepEqual(l.objectiveIds,[l.primaryObjectiveId]);}
 const expected=catalog.domains.flatMap(d=>d.objectives.flatMap(o=>o.lessons.filter(s=>s.status==='published').map(s=>[d.id,o.id,s.id])));
 assert.deepEqual(summaries.map(s=>[s.domainId,s.primaryObjectiveId,s.id]),expected);
});

test('all four objective selectors launch both actual lessons directly at their independent saved slide',async()=>{
 let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v},store=createProgressStore(storage);
 for(const l of all)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));
 const loadLesson=async(c,id)=>lesson(id),loadCatalog=async()=>catalog;
 updateSetup({language:'en'});
 for(const objective of d2.objectives)for(const summary of objective.lessons){
  const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);
  selectLearningScreen('learning-domain',{domainId:2,objectiveId:objective.id});
  const route=renderLearningRoute(host,()=>{},{loadCatalog,loadLesson,progressStore:createProgressStore(storage),lessonCache:new Map()});
  try{await route.ready;for(const o of d2.objectives)assert.equal(host.querySelector('#learning-objective-'+o.id.replace('.', '-')).classList.contains('is-available'),true);
   const select=host.querySelector('#learning-objective-lesson');assert.ok(select);assert.deepEqual(select.children.map(n=>n.getAttribute('value')),objective.lessons.map(l=>l.id));
   select.value=summary.id;fire(select,'change');const start=host.querySelector('#btn-start-learning');assert.equal(start.disabled,false);fire(start,'click');
   assert.equal(state.screen,'learning-viewer');assert.equal(state.learning.lessonId,summary.id);assert.equal(state.learning.slideId,lesson(summary.id).slides[1].id);
  }finally{disposeLearningRoute();}
 }
 assert.equal(LEARNING_PROGRESS_KEY,'sec_cert_learning_progress_v1');assert.equal(JSON.parse(raw).schemaVersion,1);
});

test('new custom host classes clear on Reading, another lesson and malformed data; stale scenario controls cannot mutate state',()=>{
 const doc=new TestDocument(),host=doc.createElement('article');doc.body.append(host);
 const prefixes=['awareness','social','metrics','reporting'];
 for(const [i,l]of all.slice(4).entries()){
  const s=l.slides.at(-1),interactionState={};let h=renderSlide(host,{lesson:l,slide:s,mode:'presentation',language:'en',interactionState});
  assert.ok(host.querySelector(`[data-${prefixes[i]}-composition]`));const old=host.querySelector(`[data-${prefixes[i]}-scenario-choice="0"]`);h.destroy();
  h=renderSlide(host,{lesson:l,slide:s,mode:'reading',language:'th',interactionState});assert.equal(host.querySelector('.d2s-scene'),null);fire(old,'click');assert.deepEqual(interactionState,{});h.destroy();
  h=renderSlide(host,{lesson:all[0],slide:all[0].slides[0],mode:'presentation',language:'en'});assert.equal(host.querySelector('.d2s-scene'),null);h.destroy();
  const malformed=structuredClone(s);malformed.blocks[1].rows.pop();h=renderSlide(host,{lesson:l,slide:malformed,mode:'presentation',language:'en'});assert.equal(host.querySelector(`[data-${prefixes[i]}-composition]`),null);h.destroy();
 }
});

test('original lesson IDs/order/revisions, protected catalog branches and Lesson1–2 summaries match the task-entry snapshot',()=>{
 const before=read(qa+'entry-catalog.json');assert.deepEqual(catalog.domains.filter(d=>d.id!==2),before.domains.filter(d=>d.id!==2));
 assert.deepEqual(d2.objectives[0].lessons,before.domains[1].objectives[0].lessons);
 for(const no of [3,4]){const old=read(qa+`entry-L${no}-published.json`),now=all[no-1];assert.equal(now.id,old.id);assert.equal(now.revision,old.revision);assert.deepEqual(now.slides.map(s=>s.id),old.slides.map(s=>s.id));}
});

test('protected entry file hashes preserve Domain1, Lessons1–2, Quiz, Vocabulary, banks, progress/schema and original sources',()=>{
 const manifest=read(qa+'protected-files.json');assert.ok(Object.keys(manifest).length>700);
 for(const [path,expected]of Object.entries(manifest)){assert.ok(fs.existsSync(path),path);assert.equal(hash(fs.readFileSync(path)),expected,path);}
});

test('source scorecard discrepancy remains explicit, unscored and equivalent in TH/EN, with no inferred count or hidden percentage',()=>{
 const l=all[7],s=l.slides[2];assert.match(s.blocks[2].text.en,/target\s*<10, actual\s*12.*image/);assert.match(s.blocks[2].text.en,/narration.*10%/);assert.match(s.blocks[2].text.en,/unscored/);assert.match(s.blocks[2].text.th,/ไม่ใช้ให้คะแนน/);
 for(const language of ['en','th']){const d=new TestDocument(),h=d.createElement('article');d.body.append(h);const handle=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation'});const walk=n=>[n.textContent||'',...n.children.map(walk)].join(' '),text=walk(h);assert.match(text,/<10/);assert.match(text,/12/);assert.match(text,/10%/);assert.match(text,language==='en'?/Unscored/:/ไม่ให้คะแนน/);handle.destroy();}
});
