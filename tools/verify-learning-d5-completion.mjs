import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createHash} from 'node:crypto';
import {validateLesson,validateCatalog,publishedLessons} from '../js/core/learning-schema.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {hasDomain5Presentation} from '../js/ui/learning/domain5-presentations.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {createProgressStore,visitSlide,completeReading} from '../js/core/learning-progress.js';
const base='content/isc2-cc-2026/learning/published/',qa='artifacts/qa/domain-5-completion/';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
const text=n=>[n?.textContent||'',...(n?.children||[]).map(text)].join(' ');
const catalog=read(base+'catalog.json'),d5=catalog.domains.find(d=>d.id===5),entries=d5.objectives.flatMap(o=>o.lessons).filter(l=>l.status==='published');
test('D5 publishes coherent lessons for every official objective',()=>{
 assert.ok(validateCatalog(catalog).valid);assert.equal(entries.length,11);
 assert.deepEqual(d5.objectives.map(o=>o.status),Array(5).fill('published'));
 assert.deepEqual(d5.objectives.map(o=>o.lessons.length),[2,3,2,2,2]);
});
for(const entry of entries){
 const l=read(base+entry.lessonPath);
 test(l.id+' schema, bilingual completeness, sources and separate self-study explanations',()=>{
  assert.ok(validateLesson(l).valid,JSON.stringify(validateLesson(l)));assert.equal(l.primaryObjectiveId,entry.primaryObjectiveId);
  assert.deepEqual(l.slideOrder,l.slides.map(s=>s.id));
  for(const s of l.slides){assert.ok(s.referenceIds.includes('isc2-outline'));assert.ok(s.referenceIds.some(r=>r.startsWith('d5-')));
   for(const lang of ['en','th']){assert.ok(s.blocks[2].text[lang].length>180,s.id+' detailed reading');assert.ok(s.info[lang].length>65,s.id+' separate Info');assert.notEqual(s.info[lang],s.blocks[0].text[lang]);}
   assert.match(s.blocks[2].text.th,/[ก-๙]/);assert.doesNotMatch(JSON.stringify(s),/\\\(|\\\)|\$\\|\[music\]/);
  }
 });
 test(l.id+' renders every slide in all three languages, semantic Reading and interactive feedback',()=>{
  for(const language of ['en','th','both'])for(const s of l.slides){
   const doc=new TestDocument(),host=doc.createElement('article'),state={};
   const handle=renderSlide(host,{lesson:l,slide:s,language,mode:'presentation',interactionState:state});
   assert.equal(host.querySelector('[data-d5-composition]')?.getAttribute('data-d5-composition'),s.id);
   if(s.id===l.slides.at(-1).id){
    for(let i=0;i<4;i++){fire(host.querySelector(`[data-d5-choice="${i}"]`),'click');assert.equal(state.choice,i);assert.equal(host.querySelector('[data-d5-feedback]').getAttribute('data-outcome'),i===l.scenarioAnswer?'recommended':'reconsider');}
    fire(host.querySelector('[data-d5-reset]'),'click');assert.equal(state.choice,undefined);
   }
   handle.destroy();handle.destroy();const h=doc.createElement('article');renderSlide(h,{lesson:l,slide:s,language,mode:'reading'});assert.ok(!h.querySelector('[data-d5-composition]'));for(const lang of language==='both'?['en','th']:[language])assert.ok(text(h).includes(s.blocks[2].text[lang]));
  }
 });
 test(l.id+' malformed data and spoofed identities fail closed; abort stops handlers',()=>{
  const doc=new TestDocument(),h=doc.createElement('article'),s=l.slides.at(-1),abort=new AbortController(),state={};
  const handle=renderSlide(h,{lesson:l,slide:s,language:'en',mode:'presentation',interactionState:state,signal:abort.signal});abort.abort();fire(h.querySelector('[data-d5-choice="0"]'),'click');assert.equal(state.choice,undefined);handle.destroy();
  for(const bad of [{...l,id:'lesson-d5-unreviewed'},{...l,domainId:4}]){const h=doc.createElement('article');renderSlide(h,{lesson:bad,slide:s,language:'en',mode:'presentation'});assert.ok(!h.querySelector('[data-d5-composition]'));}
  const malformed=structuredClone(s);malformed.blocks[1].rows[0].pop();assert.equal(hasDomain5Presentation({lesson:l,slide:malformed}),false);
 });
 test(l.id+' independent persisted progress, completion and direct Resume',()=>{
  let raw=null;const storage={getItem:()=>raw,setItem:(k,v)=>{raw=v}},store=createProgressStore(storage),sentinel=read(base+publishedLessons(catalog).find(x=>x.domainId===1).lessonPath);
  const other=visitSlide(sentinel,null,sentinel.slides[1].id,'th');store.save(sentinel,other);
  let p=visitSlide(l,null,l.slides[0].id,'en');assert.notEqual(completeReading(l,p).status,'completed');
  for(const s of l.slides)p=visitSlide(l,p,s.id,'th');p=completeReading(l,p);store.save(l,p);
  const reloaded=createProgressStore(storage);assert.equal(reloaded.read(l).lastSlideId,l.slides.at(-1).id);assert.equal(reloaded.read(l).status,'completed');assert.equal(reloaded.read(l).language,'th');assert.deepEqual(reloaded.read(sentinel),other);assert.equal(JSON.parse(raw).schemaVersion,1);
 });
 test(l.id+' Info exposes every full explanation and additional bilingual context',()=>{
  for(const language of ['en','th']){const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const handle=renderLessonInfo(host,{lesson:l,language});for(const s of l.slides){assert.ok(text(host).includes(s.blocks[2].text[language]));assert.ok(text(host).includes(s.info[language]));}handle.destroy();}
 });
}
test('D5 preserves all other domains and protected existing files',()=>{
 const original=read(qa+'entry-shared/'+base+'catalog.json');assert.deepEqual(catalog.domains.filter(d=>d.id!==5),original.domains.filter(d=>d.id!==5));
 const allowed=new Set([base+'catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md','docs/plans/isc2-cc-2026/domain-5-academic-audit.md','docs/plans/isc2-cc-2026/domain-5-2026-coverage-matrix.md']);
 const concurrent=read(qa+'concurrent-deltas.json').filter(d=>d.observedHash);
 for(const [p,hash] of Object.entries(read(qa+'entry-baseline.json').hashes)){if(allowed.has(p))continue;const delta=concurrent.find(d=>d.path===p);assert.equal(createHash('sha256').update(fs.readFileSync(p)).digest('hex'),delta?.observedHash||hash,p);}
 for(const p of ['docs/plans/isc2-cc-2026/domain-5-academic-audit.md','docs/plans/isc2-cc-2026/domain-5-2026-coverage-matrix.md'])assert.ok(fs.readFileSync(p).subarray(0,fs.statSync(qa+'entry-shared/'+p).size).equals(fs.readFileSync(qa+'entry-shared/'+p)));
 // Preserve tracker text while tolerating the observed single CRLF/LF boundary difference.
 assert.equal(fs.readFileSync('docs/plans/task.md','utf8').replace(/^\| D5 Learning Slides end-to-end.*(?:\r?\n|$)/m,'').replace(/\r\n/g,'\n'),fs.readFileSync(qa+'concurrent-tracker-prefix.md','utf8').replace(/\r\n/g,'\n'));
});
test('D5 full-course inventory and unique slide identities',()=>{
 const lessons=publishedLessons(catalog).map(e=>read(base+e.lessonPath));assert.equal(lessons.length,46);assert.equal(lessons.reduce((n,l)=>n+l.slides.length,0),316);assert.equal(new Set(lessons.flatMap(l=>l.slides.map(s=>s.id))).size,316);
});
