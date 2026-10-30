import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
const id='lesson-d3-03-iam-frameworks-tools',l1id='lesson-d3-01-roles-provisioning';
const suffixes=['guidance-is-not-software','directory-records','idp-to-application','governance-and-enforcement','sso-with-access-boundaries','tool-responsibility-decision'];
const ids=suffixes.map((s,i)=>`slide-d3-03-0${i+1}-${s}`);
const location=`content/isc2-cc-2026/learning/published/lessons/${id}.json`;
const read=()=>{assert.ok(fs.existsSync(location),'Approved Lesson 3 must be authored');return JSON.parse(fs.readFileSync(location,'utf8'));};
const catalog=()=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/catalog.json','utf8'));
const text=n=>[n?.textContent||'',...(n?.children||[]).map(text)].join(' ');
const host=()=>{const d=new TestDocument(),h=d.createElement('article');d.body.append(h);return h;};
const pairs=s=>s.blocks.flatMap(b=>b.kind==='table'?[b.caption,...b.columns,...b.rows.flat()]:b.kind==='list'?b.items:[b.text]);

test('D3 L3: reviewed schema, exact storyboard IDs and staged/published parity',()=>{
 const l=read(),v=validateLesson(l);assert.equal(v.valid,true,v.errors.join('; '));assert.deepEqual(v.warnings,[]);
 assert.equal(l.domainId,3);assert.equal(l.primaryObjectiveId,'3.1');assert.deepEqual(l.objectiveIds,['3.1']);assert.equal(l.status,'published');assert.deepEqual(l.slides.map(s=>s.id),ids);
 assert.deepEqual(JSON.parse(fs.readFileSync(`content/isc2-cc-2026/learning/staged/lessons/${id}.json`)),{...l,status:'in-preparation'});
 for(const r of l.references)if(r.repositoryPath)assert.ok(fs.existsSync(r.repositoryPath));
 for(const s of l.slides)for(const r of s.referenceIds)assert.ok(l.references.some(x=>x.id===r));
});
test('D3 L3: Lessons 1–2 precede Lesson 3 in the correct available objective',()=>{
 const c=catalog();assert.equal(validateCatalog(c).valid,true);const d=c.domains.find(d=>d.id===3),o=d.objectives.find(o=>o.id==='3.1');
 assert.equal(d.status,'published');assert.equal(o.status,'published');assert.deepEqual(o.lessons.map(l=>l.id),[l1id,'lesson-d3-02-review-deprovisioning',id]);
 const s=o.lessons.find(l=>l.id===id),l=read();assert.ok(s);assert.equal(s.primaryObjectiveId,'3.1');assert.equal(s.revision,l.revision);assert.deepEqual(s.title,l.title);
});
for(const language of ['en','th','both'])for(let i=0;i<6;i++)test(`D3 L3 S${i+1}: ${language} native, full Reading and full Info`,()=>{
 const l=read(),s=l.slides[i],h=host();let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:{}});
 assert.ok(h.querySelector('[data-iam-frameworks-composition]'));assert.equal(text(h).includes(s.blocks[2].text.en),false);hd.destroy();
 hd=renderSlide(h,{lesson:l,slide:s,language,mode:'reading'});assert.equal(h.querySelector('[data-iam-frameworks-composition]'),null);
 const ih=host(),info=renderLessonInfo(ih,{lesson:l,language}),explanation=ih.querySelector(`[data-explanation-slide="${s.id}"]`);assert.ok(explanation);
 for(const p of pairs(s)){assert.ok(p.en?.trim()&&p.th?.trim());assert.match(p.th,/[ก-๙]/);for(const lang of language==='both'?['en','th']:[language]){assert.ok(text(h).includes(p[lang]));assert.ok(text(explanation).includes(p[lang]));}}
 assert.ok(s.blocks[2].text.en.length>250);assert.ok(s.blocks[2].text.th.length>250);info.destroy();hd.destroy();
});
test('D3 L3: original seven capabilities and three technology categories are explained',()=>{
 const l=read(),copy=JSON.stringify(l.slides[1]);for(const p of ['User Account Management','Authentication','Authorization','Role Management','Access Provisioning','Access Reviews','Deprovisioning','Directory Services','Identity Providers (IdPs)','Access Management Platforms'])assert.ok(copy.includes(p),p);
 assert.equal(l.slides[1].blocks[1].rows.length,10);for(const row of l.slides[1].blocks[1].rows)for(const p of row)assert.ok(p.en&&p.th);
});
test('D3 L3: guidance, directory, IdP and application boundaries are qualified in EN and TH',()=>{
 const l=read();assert.match(l.slides[0].blocks[2].text.en,/proofing.*authentication.*federation/i);assert.match(l.slides[0].blocks[2].text.th,/Proofing.*Authentication.*Federation/);
 assert.match(l.slides[1].blocks[2].text.en,/LDAP.*protocol/);assert.match(l.slides[1].blocks[2].text.th,/LDAP.*Protocol/);
 assert.match(l.slides[2].blocks[2].text.en,/verif.*assertion/i);assert.match(l.slides[2].blocks[2].text.th,/ตรวจ.*Assertion/);
 assert.match(l.slides[3].blocks[2].text.en,/automation.*not.*guarantee/i);assert.match(l.slides[3].blocks[2].text.th,/อัตโนมัติ.*ไม่.*รับประกัน/);
 assert.match(l.slides[4].blocks[2].text.en,/independent.*session|sessions.*independent/i);assert.match(l.slides[4].blocks[2].text.th,/Session.*แยก/);
 assert.doesNotMatch(JSON.stringify(l),/guarantees complete deprovisioning|automatically terminates every|must review every 90 days|ออกสอบบ่อย|heavily tested|TODO|TBD/i);
});
for(const language of ['en','th'])for(let choice=0;choice<4;choice++)test(`D3 L3 scenario ${language} choice${choice}: reason, retained selection, reset, disposal`,()=>{
 const l=read(),s=l.slides[5],state={},h=host();let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:state});const button=h.querySelector(`[data-iam-frameworks-choice="${choice}"]`);assert.ok(button);fire(button,'click');assert.equal(state.choice,choice);
 assert.equal(button.getAttribute('aria-pressed'),'true');assert.equal(h.querySelector('[data-iam-frameworks-feedback]').getAttribute('data-outcome'),choice===2?'recommended':'reconsider');assert.ok(text(h).includes(s.blocks[1].rows[choice][2][language]));hd.destroy();
 hd=renderSlide(h,{lesson:l,slide:s,language:language==='en'?'th':'en',mode:'presentation',interactionState:state});assert.equal(h.querySelector(`[data-iam-frameworks-choice="${choice}"]`).getAttribute('aria-pressed'),'true');const reset=h.querySelector('[data-iam-frameworks-reset]');fire(reset,'click');assert.equal(state.choice,undefined);assert.equal(h.querySelector('[data-iam-frameworks-feedback]').getAttribute('data-outcome'),'idle');hd.destroy();fire(button,'click');fire(reset,'click');assert.equal(state.choice,undefined);
});
test('D3 L3: malformed shapes and Lesson 1 never dispatch into Lesson 2',async()=>{
 const m=await import('../js/ui/learning/iam-frameworks-tools-presentations.js').catch(()=>({}));assert.equal(typeof m.hasIamFrameworksToolsPresentation,'function');const l=read(),s=l.slides[0];assert.equal(m.hasIamFrameworksToolsPresentation({lesson:l,slide:s}),true);assert.equal(m.hasIamFrameworksToolsPresentation({lesson:{...l,id:l1id},slide:s}),false);
 for(const mutate of [s=>s.blocks=[],s=>s.blocks[1].rows={length:2},s=>s.blocks[1].columns={length:3},s=>s.blocks[1].rows[0].pop()]){const bad=structuredClone(s);mutate(bad);assert.equal(m.hasIamFrameworksToolsPresentation({lesson:l,slide:bad}),false);}
});
test('D3 L3: all saved positions survive reload while Lesson 1 and every other lesson retain their records',()=>{
 const l=read();let raw;const storage={getItem:k=>k===LEARNING_PROGRESS_KEY?raw:null,setItem:(k,v)=>{assert.equal(k,LEARNING_PROGRESS_KEY);raw=v;}};let store=createProgressStore(storage);
 const others=publishedLessons(catalog()).filter(s=>s.id!==id).map(s=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+s.lessonPath)));
 for(const x of others)store.save(x,visitSlide(x,store.read(x),x.slides.at(-1).id,'th'));const before=JSON.parse(raw).lessons;
 for(const s of l.slides){store.save(l,visitSlide(l,store.read(l),s.id,'en'));store=createProgressStore(storage);assert.equal(store.read(l).lastSlideId,s.id);}
 assert.equal(JSON.parse(raw).schemaVersion,1);for(const x of others)assert.deepEqual(JSON.parse(raw).lessons[x.id],before[x.id]);
});
test('D3 L3: Info integration preserves Lesson 1 and every D1/D2 explanation',()=>{
 for(const summary of publishedLessons(catalog()).filter(s=>s.id!==id)){const l=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+summary.lessonPath)),h=host(),handle=renderLessonInfo(h,{lesson:l,language:'th'});
  for(const s of l.slides){if(l.id==='lesson-d1-01-cia-triad'&&s.layoutId==='hero-intro')assert.ok(h.querySelector('.learning-info-intro-explanation'));else assert.ok(h.querySelector(`[data-explanation-slide="${s.id}"]`),`${l.id} ${s.id}`);}handle.destroy();
 }
});
