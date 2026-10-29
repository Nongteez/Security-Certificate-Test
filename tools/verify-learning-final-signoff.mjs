import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createHash} from 'node:crypto';
import {publishedLessons,validateLesson,validateCatalog} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,reconcileProgress,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {TestDocument} from './fixtures/learning/dom.mjs';
import {finalRemediationFields,withOriginalFinalFields} from './fixtures/learning/final-remediation.mjs';
const base='content/isc2-cc-2026/learning/published/',read=p=>JSON.parse(fs.readFileSync(base+p));
const catalog=read('catalog.json'),summaries=publishedLessons(catalog),all=summaries.map(s=>read(s.lessonPath)),d1=all.filter(l=>l.domainId===1);
const hash=o=>createHash('sha256').update(JSON.stringify(o)).digest('hex'),text=n=>[n.textContent||'',...(n.children||[]).map(text)].join(' '),at=(o,path)=>path.reduce((v,k)=>v[k],o);

test('F07–F09 match the eight reviewed bilingual/reference replacements exactly',()=>{
 assert.equal(finalRemediationFields.length,8);
 for(const c of finalRemediationFields)assert.deepEqual(at(all.find(l=>l.id===c.lessonId),c.path),c.after,c.lessonId+' '+c.path.join('.'));
});
test('backup restoration, factual lesson pointers and historical incident-reference limits remain explicit',()=>{
 const cia=d1.find(l=>l.id==='lesson-d1-01-cia-triad'),p=cia.slides[4].blocks[1].items[2];assert.match(p.en,/Tested off-site backups/);assert.match(p.th,/นอกสถานที่.*ทดสอบการกู้คืนแล้ว/);assert.match(p.th,/Hot\/Warm/);
 const r=cia.references.find(r=>r.id==='nist-sp-800-61r2');assert.match(r.title,/Historical.*withdrawn 2025-04-03.*superseded by Rev\. 3/);assert.match(r.locator,/3\.2\.6.*32–33/);assert.equal(r.url,'https://csrc.nist.gov/pubs/sp/800/61/r2/final');
 const recap=cia.slides[7].blocks[2].items[2];assert.match(recap.en,/authored illustration/);assert.match(recap.th,/ตัวอย่างแต่งขึ้น/);assert.match(recap.th,/Rev\. 3/);
 for(const l of d1)for(const s of l.slides)assert.doesNotMatch(JSON.stringify(s),/separate unfinished lessons|remain planned for|ยังเป็นแผน|บทแยกที่ไม่เสร็จ/i,s.id);
 const functions=summaries.find(s=>s.id==='lesson-d1-11-control-functions'),conduct=summaries.find(s=>s.id==='lesson-d1-12-professional-conduct');assert.ok(functions&&conduct);
});
test('corrected explanations are fully exposed through Reading and Info in TH and EN',()=>{
 for(const lang of ['en','th'])for(const c of finalRemediationFields.filter(c=>c.path[0]==='slides')){
  const lesson=all.find(l=>l.id===c.lessonId),slide=lesson.slides[c.path[1]],doc=new TestDocument(),host=doc.createElement('article'),info=doc.createElement('div');doc.body.append(host,info);
  const h=renderSlide(host,{lesson,slide,language:lang,mode:'reading'}),ih=renderLessonInfo(info,{lesson,language:lang});
  assert.ok(text(host).includes(c.after[lang]),slide.id);assert.ok(text(info.querySelector(`[data-explanation-slide="${slide.id}"]`)).includes(c.after[lang]),slide.id);h.destroy();ih.destroy();
 }
});
test('pale Info definition/scenario boxes declare a scoped readable foreground',()=>{
 const css=fs.readFileSync('css/learning.css','utf8');
 const rule=css.match(/\/\* Info explanation contrast:[\s\S]*?\*\/\s*([^{}]+)\{([^}]+)\}/);assert.ok(rule,'Missing targeted contrast rule');
 assert.match(rule[1],/\.learning-screen \.learning-info-panel \[data-layout="concept-split"\]/);assert.match(rule[1],/\.learning-screen \.learning-info-panel \[data-layout="scenario-reveal"\]/);assert.match(rule[2],/color:\s*#0f172a\s*;/);
 const luminance=hex=>{const rgb=hex.match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
 for(const bg of ['f8fafc','fffbeb'])assert.ok((luminance(bg)+.05)/(luminance('0f172a')+.05)>=4.5);
});
test('the entire current multi-domain catalog loads unique, reviewed, correctly mapped lesson files',()=>{
 assert.equal(validateCatalog(catalog).valid,true);assert.equal(d1.length,12);assert.equal(d1.reduce((n,l)=>n+l.slides.length,0),103);assert.ok(all.some(l=>l.domainId===2));assert.equal(new Set(all.map(l=>l.id)).size,all.length);
 const expected=catalog.domains.flatMap(d=>d.objectives.flatMap(o=>o.lessons.filter(s=>s.status==='published').map(s=>[d.id,o.id,s.id])));assert.deepEqual(summaries.map(s=>[s.domainId,s.primaryObjectiveId,s.id]),expected);
 for(const [i,l]of all.entries()){const s=summaries[i];assert.equal(validateLesson(l).valid,true,l.id);assert.equal(l.id,s.id);assert.equal(l.revision,s.revision);assert.equal(l.domainId,s.domainId);assert.equal(l.primaryObjectiveId,s.primaryObjectiveId);for(const slide of l.slides){assert.equal(slide.review.reviewedRevision,l.revision);for(const id of slide.referenceIds)assert.ok(l.references.some(r=>r.id===id));}}
});
test('all existing slide IDs/order and independent V1 saved positions survive revised content',()=>{
 assert.equal(LEARNING_PROGRESS_KEY,'sec_cert_learning_progress_v1');assert.equal(hash(d1.flatMap(l=>l.slides.map(s=>[l.id,s.id]))),'070e8053d14e08537b2f0fd22ceda8a93af52fc2f9b8e0d4ad68a12dd456dbd7');
 let raw;const storage={getItem:()=>raw,setItem:(_,v)=>raw=v},store=createProgressStore(storage);for(const l of all)store.save(l,visitSlide(l,store.read(l),l.slides[1].id,'th'));const before=JSON.parse(raw).lessons;
 for(const id of new Set(finalRemediationFields.map(c=>c.lessonId))){const l=all.find(l=>l.id===id),old={...store.read(l),contentRevision:String(Number(l.revision)-1),status:'completed',completedAt:'2026-10-27T00:00:00.000Z'};const next=reconcileProgress(l,old);assert.equal(next.lastSlideId,old.lastSlideId);assert.deepEqual(next.visitedSlideIds,old.visitedSlideIds);assert.equal(next.status,'in-progress');store.save(l,next);}
 const reload=createProgressStore(storage);for(const l of all.filter(l=>!finalRemediationFields.some(c=>c.lessonId===l.id)))assert.deepEqual(reload.summary(l.id),before[l.id]);
});
test('every educational field outside the exact authorized replacements preserves the pre-edit 103-slide baseline',()=>{
 const projected=d1.flatMap(l=>withOriginalFinalFields(l).slides.map(s=>{const copy=structuredClone(s);delete copy.review;return copy;}));assert.equal(projected.length,103);assert.equal(hash(projected),'1e5cc1a88ffa3174219188c3a372fbe9bbab3b7af6001694fca50c1f767d03c5');
});
