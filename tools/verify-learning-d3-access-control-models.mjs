import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
const id='lesson-d3-05-access-control-models',l1id='lesson-d3-01-roles-provisioning';
const suffixes=['request-policy-enforcement','dac-authorized-owner','mac-central-policy','rbac-role-permission-reuse','abac-evaluate-the-request','effective-role-combinations','choose-by-policy-requirement','mandatory-policy-decision'];
const ids=suffixes.map((s,i)=>`slide-d3-05-0${i+1}-${s}`);
const location=`content/isc2-cc-2026/learning/published/lessons/${id}.json`;
const read=()=>{assert.ok(fs.existsSync(location),'Approved Lesson 5 must be authored');return JSON.parse(fs.readFileSync(location,'utf8'));};
const catalog=()=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/catalog.json','utf8'));
const text=n=>[n?.textContent||'',...(n?.children||[]).map(text)].join(' ');
const host=()=>{const d=new TestDocument(),h=d.createElement('article');d.body.append(h);return h;};
const pairs=s=>s.blocks.flatMap(b=>b.kind==='table'?[b.caption,...b.columns,...b.rows.flat()]:b.kind==='list'?b.items:[b.text]);

test('D3 L05: reviewed schema, exact storyboard IDs and staged/published parity',()=>{
 const l=read(),v=validateLesson(l);assert.equal(v.valid,true,v.errors.join('; '));assert.deepEqual(v.warnings,[]);
 assert.equal(l.domainId,3);assert.equal(l.primaryObjectiveId,'3.2');assert.deepEqual(l.objectiveIds,['3.2']);assert.equal(l.status,'published');assert.deepEqual(l.slides.map(s=>s.id),ids);
 assert.deepEqual(JSON.parse(fs.readFileSync(`content/isc2-cc-2026/learning/staged/lessons/${id}.json`)),{...l,status:'in-preparation'});
 for(const r of l.references)if(r.repositoryPath)assert.ok(fs.existsSync(r.repositoryPath));
 for(const s of l.slides)for(const r of s.referenceIds)assert.ok(l.references.some(x=>x.id===r));
});
test('D3 L05: published lesson is registered in the approved available objective',()=>{
 const c=catalog();assert.equal(validateCatalog(c).valid,true);const d=c.domains.find(d=>d.id===3),o=d.objectives.find(o=>o.id==='3.2');
 assert.equal(d.status,'published');assert.equal(o.status,'published');assert.ok(o.lessons.some(l=>l.id===id));assert.ok(o.lessons.findIndex(l=>l.id===id)>=0);
 const s=o.lessons.find(l=>l.id===id),l=read();assert.ok(s);assert.equal(s.primaryObjectiveId,'3.2');assert.equal(s.revision,l.revision);assert.deepEqual(s.title,l.title);
});
for(const language of ['en','th','both'])for(let i=0;i<8;i++)test(`D3 L05 S${i+1}: ${language} native, full Reading and full Info`,()=>{
 const l=read(),s=l.slides[i],h=host();let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:{}});
 assert.ok(h.querySelector('[data-d3-logical-composition]'));assert.equal(text(h).includes(s.blocks[2].text.en),false);hd.destroy();
 hd=renderSlide(h,{lesson:l,slide:s,language,mode:'reading'});assert.equal(h.querySelector('[data-d3-logical-composition]'),null);
 const ih=host(),info=renderLessonInfo(ih,{lesson:l,language}),explanation=ih.querySelector(`[data-explanation-slide="${s.id}"]`);assert.ok(explanation);
 for(const p of pairs(s)){assert.ok(p.en?.trim()&&p.th?.trim());assert.match(p.th,/[ก-๙]/);for(const lang of language==='both'?['en','th']:[language]){assert.ok(text(h).includes(p[lang]));assert.ok(text(explanation).includes(p[lang]));}}
 assert.ok(s.blocks[2].text.en.length>250);assert.ok(s.blocks[2].text.th.length>250);info.destroy();hd.destroy();
});
test('D3 L05: assigned academic corrections and source details remain qualified',()=>{const l=read();assert.match(l.slides[2].blocks[2].text.en,/nondisclosure/);assert.match(l.slides[2].blocks[2].text.th,/จำเป็นต้องรู้/);assert.match(l.slides[4].blocks[2].text.en,/missing/);assert.match(l.slides[5].blocks[2].text.en,/activation|active/);assert.match(l.slides[6].blocks[2].text.en,/coexist/);for(const p of ['DAC','MAC','RBAC','ABAC'])assert.ok(JSON.stringify(l.slides[6]).includes(p));assert.doesNotMatch(JSON.stringify(l),/heavily tested|guarantees complete security|always strongest|TODO|TBD/i);});
for(const language of ['en','th'])for(let choice=0;choice<4;choice++)test(`D3 L05 scenario ${language} choice${choice}: reason, retained selection, reset, disposal`,()=>{
 const l=read(),s=l.slides[7],state={},h=host();let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:state});const button=h.querySelector(`[data-d3-logical-choice="${choice}"]`);assert.ok(button);fire(button,'click');assert.equal(state.choice,choice);
 assert.equal(button.getAttribute('aria-pressed'),'true');assert.equal(h.querySelector('[data-d3-logical-feedback]').getAttribute('data-outcome'),choice===2?'recommended':'reconsider');assert.ok(text(h).includes(s.blocks[1].rows[choice][2][language]));hd.destroy();
 hd=renderSlide(h,{lesson:l,slide:s,language:language==='en'?'th':'en',mode:'presentation',interactionState:state});assert.equal(h.querySelector(`[data-d3-logical-choice="${choice}"]`).getAttribute('aria-pressed'),'true');const reset=h.querySelector('[data-d3-logical-reset]');fire(reset,'click');assert.equal(state.choice,undefined);assert.equal(h.querySelector('[data-d3-logical-feedback]').getAttribute('data-outcome'),'idle');hd.destroy();fire(button,'click');fire(reset,'click');assert.equal(state.choice,undefined);
});
test('D3 L05: malformed shapes and other lessons never dispatch into this composition',async()=>{
 const m=await import('../js/ui/learning/iam-access-control-models-presentations.js').catch(()=>({}));assert.equal(typeof m.hasIamAccessControlModelsPresentation,'function');const l=read(),s=l.slides[0];assert.equal(m.hasIamAccessControlModelsPresentation({lesson:l,slide:s}),true);assert.equal(m.hasIamAccessControlModelsPresentation({lesson:{...l,id:l1id},slide:s}),false);
 for(const mutate of [s=>s.blocks=[],s=>s.blocks[1].rows={length:2},s=>s.blocks[1].columns={length:3},s=>s.blocks[1].rows[0].pop()]){const bad=structuredClone(s);mutate(bad);assert.equal(m.hasIamAccessControlModelsPresentation({lesson:l,slide:bad}),false);}
});
test('D3 L05: all saved positions survive reload while Lesson 1 and every other lesson retain their records',()=>{
 const l=read();let raw;const storage={getItem:k=>k===LEARNING_PROGRESS_KEY?raw:null,setItem:(k,v)=>{assert.equal(k,LEARNING_PROGRESS_KEY);raw=v;}};let store=createProgressStore(storage);
 const others=publishedLessons(catalog()).filter(s=>s.id!==id).map(s=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+s.lessonPath)));
 for(const x of others)store.save(x,visitSlide(x,store.read(x),x.slides.at(-1).id,'th'));const before=JSON.parse(raw).lessons;
 for(const s of l.slides){store.save(l,visitSlide(l,store.read(l),s.id,'en'));store=createProgressStore(storage);assert.equal(store.read(l).lastSlideId,s.id);}
 assert.equal(JSON.parse(raw).schemaVersion,1);for(const x of others)assert.deepEqual(JSON.parse(raw).lessons[x.id],before[x.id]);
});
test('D3 L05: Info integration preserves Lesson 1 and every D1/D2 explanation',()=>{
 for(const summary of publishedLessons(catalog()).filter(s=>s.id!==id)){const l=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+summary.lessonPath)),h=host(),handle=renderLessonInfo(h,{lesson:l,language:'th'});
  for(const s of l.slides){if(l.id==='lesson-d1-01-cia-triad'&&s.layoutId==='hero-intro')assert.ok(h.querySelector('.learning-info-intro-explanation'));else assert.ok(h.querySelector(`[data-explanation-slide="${s.id}"]`),`${l.id} ${s.id}`);}handle.destroy();
 }
});
