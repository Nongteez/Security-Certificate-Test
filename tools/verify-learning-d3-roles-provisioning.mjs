import assert from 'node:assert/strict';
import fs from 'node:fs';
import {test} from 'node:test';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';

const id='lesson-d3-01-roles-provisioning';
const path=`content/isc2-cc-2026/learning/published/lessons/${id}.json`;
const suffixes=['role-to-task','identity-account-identifier','authorize-before-assignment','provision-approved-access','verify-the-grant','own-the-reporting-bot','urgent-access-decision'];
const ids=suffixes.map((s,i)=>`slide-d3-01-0${i+1}-${s}`);
const read=()=>{assert.ok(fs.existsSync(path),'Lesson 1 must exist before publication');return JSON.parse(fs.readFileSync(path,'utf8'));};
const catalog=()=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/catalog.json','utf8'));
const txt=n=>[n?.textContent||'',...(n?.children||[]).map(txt)].join(' ');
const pairs=s=>s.blocks.flatMap(b=>b.kind==='table'?[b.caption,...b.columns,...b.rows.flat()]:b.kind==='list'?b.items:[b.text]);
const host=()=>{const d=new TestDocument(),h=d.createElement('article');d.body.append(h);return h;};

test('D3 L1: reviewed publication matches schema, approved IDs and staged copy',()=>{
 const l=read(),v=validateLesson(l);assert.equal(v.valid,true,v.errors.join('; '));assert.deepEqual(v.warnings,[]);
 assert.equal(l.domainId,3);assert.equal(l.primaryObjectiveId,'3.1');assert.deepEqual(l.objectiveIds,['3.1']);
 assert.equal(l.status,'published');assert.deepEqual(l.slides.map(s=>s.id),ids);
 assert.deepEqual(JSON.parse(fs.readFileSync(`content/isc2-cc-2026/learning/staged/lessons/${id}.json`)),{...l,status:'in-preparation'});
 for(const r of l.references)if(r.repositoryPath)assert.ok(fs.existsSync(r.repositoryPath),r.repositoryPath);
 for(const s of l.slides)for(const r of s.referenceIds)assert.ok(l.references.some(x=>x.id===r));
});
test('D3 L1: reviewed Lesson 1 is uniquely registered under its correct available objective',()=>{
 const c=catalog();assert.equal(validateCatalog(c).valid,true);const d=c.domains.find(x=>x.id===3);
 assert.equal(publishedLessons(c).filter(l=>l.id===id).length,1);
 assert.equal(d.status,'published');assert.equal(d.objectives[0].status,'published');
 assert.equal(d.objectives[0].lessons.find(l=>l.id===id)?.primaryObjectiveId,'3.1');
 const l=read(),summary=publishedLessons(c).find(s=>s.id===id);assert.equal(summary.revision,l.revision);assert.deepEqual(summary.title,l.title);
});
for(const language of ['en','th','both'])for(let i=0;i<7;i++)test(`D3 L1 S${i+1}: ${language} native composition, full Reading and Info`,()=>{
 const l=read(),s=l.slides[i],h=host(),state={};
 let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:state});
 assert.ok(h.querySelector('[data-iam-provisioning-composition]'),'dedicated native composition required');
 assert.equal(txt(h).includes(s.blocks[2].text.en),false,'full explanation stays off canvas');hd.destroy();
 hd=renderSlide(h,{lesson:l,slide:s,language,mode:'reading'});const reading=txt(h);
 assert.equal(h.querySelector('[data-iam-provisioning-composition]'),null);
 const infoHost=host(),info=renderLessonInfo(infoHost,{lesson:l,language});
 const explanation=infoHost.querySelector(`[data-explanation-slide="${s.id}"]`);assert.ok(explanation,'Info must expose full slide explanation');
 for(const p of pairs(s)){assert.ok(p.en?.trim()&&p.th?.trim());assert.match(p.th,/[ก-๙]/);for(const lang of language==='both'?['en','th']:[language]){assert.ok(reading.includes(p[lang]));assert.ok(txt(explanation).includes(p[lang]));}}
 assert.ok(s.blocks[2].text.en.length>250);assert.ok(s.blocks[2].text.th.length>250);info.destroy();hd.destroy();
});
test('D3 L1: original role examples and six provisioning activities remain available',()=>{
 const l=read(),roleText=JSON.stringify(l.slides[0]),provision=JSON.stringify(l.slides[3]);
 for(const t of ['Human Resources Manager','Network Administrator','Database Administrator','Security Analyst','Finance Employee'])assert.ok(roleText.includes(t),t);
 for(const t of ['Creating a User Account','Assigning a Unique Identity','Assigning Roles','Granting Permissions','Providing Access to Applications','Issuing Authentication Credentials'])assert.ok(provision.includes(t),t);
});
test('D3 L1: relevant academic corrections and explicit supplement boundaries are taught',()=>{
 const l=read(),all=JSON.stringify(l);assert.match(l.slides[1].blocks[2].text.en,/one person.*multiple accounts/i);
 assert.match(l.slides[1].blocks[2].text.th,/คนเดียว.*หลายบัญชี/);
 assert.match(l.slides[2].blocks[2].text.en,/policy.*automated/i);assert.match(l.slides[2].blocks[2].text.th,/นโยบาย.*อัตโนมัติ/);
 assert.match(l.slides[4].blocks[2].text.en,/effective access/i);
 assert.match(l.slides[5].blocks[2].text.en,/owner.*purpose/i);assert.match(l.slides[5].blocks[2].text.th,/ผู้รับผิดชอบ.*วัตถุประสงค์/);
 assert.ok(l.slides[5].referenceIds.includes('isc2-ai-application'));assert.ok(l.slides[5].referenceIds.includes('service-account-governance'));
 assert.doesNotMatch(all,/provisioning automatically guarantees|always maps one.to.one|always the first|heavily tested|ออกสอบบ่อย|Lorem|TODO|TBD/i);
});
for(const language of ['en','th'])for(let choice=0;choice<4;choice++)test(`D3 L1 scenario: ${language} choice ${choice}, reset, retained state and disposal`,()=>{
 const l=read(),s=l.slides[6],h=host(),state={};let hd=renderSlide(h,{lesson:l,slide:s,language,mode:'presentation',interactionState:state});
 const button=h.querySelector(`[data-iam-choice="${choice}"]`);assert.ok(button);fire(button,'click');assert.equal(state.choice,choice);
 assert.equal(button.getAttribute('aria-pressed'),'true');assert.ok(txt(h).includes(s.blocks[1].rows[choice][2][language]));
 assert.equal(h.querySelector('[data-iam-feedback]').getAttribute('data-outcome'),choice===2?'recommended':'reconsider');
 hd.destroy();hd=renderSlide(h,{lesson:l,slide:s,language:language==='en'?'th':'en',mode:'presentation',interactionState:state});
 assert.equal(h.querySelector(`[data-iam-choice="${choice}"]`).getAttribute('aria-pressed'),'true');
 const reset=h.querySelector('[data-iam-reset]');fire(reset,'click');assert.equal(state.choice,undefined);
 assert.equal(h.querySelector('[data-iam-feedback]').getAttribute('data-outcome'),'idle');
 hd.destroy();fire(button,'click');fire(reset,'click');assert.equal(state.choice,undefined,'disposed controls cannot mutate state');
});
test('D3 L1: native dispatch rejects another lesson or malformed blocks',async()=>{
 const module=await import('../js/ui/learning/iam-roles-provisioning-presentations.js').catch(()=>({}));assert.equal(typeof module.hasIamRolesProvisioningPresentation,'function');
 const l=read(),s=l.slides[0];assert.equal(module.hasIamRolesProvisioningPresentation({lesson:l,slide:s}),true);
 assert.equal(module.hasIamRolesProvisioningPresentation({lesson:{...l,id:'unrelated'},slide:s}),false);
 assert.equal(module.hasIamRolesProvisioningPresentation({lesson:l,slide:{...s,blocks:[]}}),false);
 const bad=structuredClone(s);bad.blocks[1].rows[0].pop();assert.equal(module.hasIamRolesProvisioningPresentation({lesson:l,slide:bad}),false);
 const malformedColumns=structuredClone(s);malformedColumns.blocks[1].columns={length:3};assert.equal(module.hasIamRolesProvisioningPresentation({lesson:l,slide:malformedColumns}),false);
 const malformedRows=structuredClone(s);malformedRows.blocks[1].rows={length:5};assert.equal(module.hasIamRolesProvisioningPresentation({lesson:l,slide:malformedRows}),false);
});
test('D3 L1: every position survives reload independently of every other published lesson',()=>{
 const l=read();let raw;const storage={getItem:k=>k===LEARNING_PROGRESS_KEY?raw:null,setItem:(k,v)=>{assert.equal(k,LEARNING_PROGRESS_KEY);raw=v;}};
 let store=createProgressStore(storage);const others=publishedLessons(catalog()).filter(s=>s.id!==id).map(s=>JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+s.lessonPath)));
 for(const other of others)store.save(other,visitSlide(other,store.read(other),other.slides.at(-1).id,'th'));
 const before=JSON.parse(raw).lessons;
 for(const s of l.slides){store.save(l,visitSlide(l,store.read(l),s.id,'th'));store=createProgressStore(storage);assert.equal(store.read(l).lastSlideId,s.id);}
 assert.equal(JSON.parse(raw).schemaVersion,1);for(const other of others)assert.deepEqual(JSON.parse(raw).lessons[other.id],before[other.id]);
});
test('D3 L1: Info extension preserves all existing D1/D2 explanations',()=>{
 for(const summary of publishedLessons(catalog()).filter(x=>[1,2].includes(x.domainId))){
  const l=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/'+summary.lessonPath)),h=host(),handle=renderLessonInfo(h,{lesson:l,language:'th'});
  for(const s of l.slides){
   if(l.id==='lesson-d1-01-cia-triad'&&s.layoutId==='hero-intro')assert.ok(h.querySelector('.learning-info-intro-explanation'),'CIA retains separate introduction explanation');
   else assert.ok(h.querySelector(`[data-explanation-slide="${s.id}"]`),`${l.id} ${s.id}`);
  }handle.destroy();
 }
});
