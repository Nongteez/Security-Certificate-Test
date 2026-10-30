import fs from 'node:fs';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createHash} from 'node:crypto';
import {validateCatalog,validateLesson,publishedLessons} from '../js/core/learning-schema.js';
import {createProgressStore,visitSlide,LEARNING_PROGRESS_KEY} from '../js/core/learning-progress.js';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const root='content/isc2-cc-2026/learning/published/';
const catalog=read(root+'catalog.json'),domain=catalog.domains.find(d=>d.id===3);
const ids=['lesson-d3-01-roles-provisioning','lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools','lesson-d3-04-least-privilege-sod','lesson-d3-05-access-control-models','lesson-d3-06-mfa-authentication-signals'];
const lessons=ids.map(id=>read(root+'lessons/'+id+'.json'));
const baseline=read('artifacts/qa/domain-3-completion/entry-baseline.json');
const approved=read('artifacts/qa/domain-3-completion/approved-slide-ids.json');
const entryCatalog=read('artifacts/qa/domain-3-completion/entry-shared/'+root+'catalog.json');
const pairs=value=>!value||typeof value!=='object'?[]:typeof value.en==='string'&&typeof value.th==='string'?[value]:Object.values(value).flatMap(pairs);

test('Domain 3 completion: six validated, available lessons in approved objective order; all 42 stable IDs',()=>{
 assert.ok(validateCatalog(catalog).valid);assert.equal(domain.status,'published');
 assert.deepEqual(domain.objectives.map(o=>o.id),['3.1','3.2']);
 assert.deepEqual(domain.objectives.map(o=>o.status),['published','published']);
 assert.deepEqual(domain.objectives.flatMap(o=>o.lessons.map(l=>l.id)),ids);
 assert.deepEqual(lessons.map(l=>l.slides.length),[7,8,6,7,8,6]);
 assert.equal(new Set(lessons.flatMap(l=>l.slides.map(s=>s.id))).size,42);
 for(const [i,l] of lessons.entries()){
  assert.ok(validateLesson(l).valid,l.id);assert.ok(publishedLessons(catalog).some(s=>s.id===l.id));
  assert.deepEqual(l.slides.map(s=>s.id),approved[String(i+1).padStart(2,'0')]);
  assert.deepEqual(l.objectiveIds,[i<3?'3.1':'3.2']);assert.equal(l.status,'published');
 }
});
test('Domain 3 completion: every slide has substantive paired educational blocks and resolvable references',()=>{
 for(const l of lessons)for(const s of l.slides){
  assert.ok(s.blocks.length>=4,s.id);assert.ok(s.referenceIds.length,s.id);
  for(const r of s.referenceIds)assert.ok(l.references.some(ref=>ref.id===r),s.id+': '+r);
  for(const p of pairs(s)){assert.ok(p.en.trim()&&p.th.trim(),s.id);assert.match(p.th,/[ก-๙]/,s.id);assert.doesNotMatch(p.en,/TODO|TBD|```|^#{1,6} /m,s.id);}
  assert.ok(s.blocks.some(b=>b.kind==='text'&&b.text.en.length>250&&b.text.th.length>250),s.id);
 }
});
test('Domain 3 completion: all scenario decisions have four distinct bilingual reasons; quarantine retained',()=>{
 const stems=[];for(const l of lessons){const s=l.slides.at(-1);assert.equal(s.blocks[1].rows.length,4);for(const row of s.blocks[1].rows){assert.ok(row[2].en.length>30&&row[2].th.length>30);}stems.push(s.blocks[2].text.en);}
 assert.equal(new Set(stems).size,6);
 const sod=lessons[3].slides[3].blocks[2].text;assert.match(sod.en,/Ana.*Ben/);assert.match(sod.th,/Ana.*Ben/);
 assert.match(fs.readFileSync('docs/plans/isc2-cc-2026/domain-3-final-coverage-matrix.md','utf8'),/D3-A10.*\|Source allocation unresolved, not falsely closed/);
});
test('Domain 3 completion: learner explanations avoid internal source-label puzzles and editing disputes',()=>{
 for(const l of lessons.slice(3))for(const s of l.slides)assert.doesNotMatch(JSON.stringify(s.blocks),/N\/U|S08|fabricated ABAC lecture screenshot|disputed original allocation|original financial text and picture/);
});
test('Domain 3 completion: official automation applications span provisioning, review, retirement and policy enforcement',()=>{
 for(const [li,si] of [[0,5],[1,6],[3,5]]){const s=lessons[li].slides[si];assert.match(s.blocks[2].text.en,/owner|accountable/i);assert.match(s.blocks[2].text.th,/รับผิดชอบ/);}
 const model=lessons[4].slides[0].blocks[2].text;assert.match(model.en,/service or bot identity/);assert.match(model.en,/RBAC.*ABAC/);assert.match(model.th,/service identity.*bot/);
});
test('Domain 3 completion: MFA and risk signals remain distinct with uncertainty, evidence and authorized urgent response',()=>{
 const l=lessons[5];assert.match(l.slides[1].blocks[2].text.en,/knowledge|know/);assert.match(l.slides[1].blocks[2].text.en,/possession|have/);assert.match(l.slides[1].blocks[2].text.en,/biometric|inherence/);
 for(const lang of ['en','th']){assert.ok(l.slides[3].blocks[2].text[lang].includes('UTC'));assert.ok(l.slides[3].blocks[2].text[lang].includes('VPN'));}
 assert.match(l.slides[4].blocks[2].text.en,/Urgent policy-authorized containment may occur before a full investigation; do not delay action when the stated conditions require it/);
});
test('Domain 3 completion: every saved position survives a new store; all other published records stay independent',()=>{
 let raw;const storage={getItem:k=>k===LEARNING_PROGRESS_KEY?raw:null,setItem:(k,v)=>{assert.equal(k,LEARNING_PROGRESS_KEY);raw=v;}};let store=createProgressStore(storage);
 const all=publishedLessons(catalog).map(s=>read(root+s.lessonPath));
 for(const l of all)store.save(l,visitSlide(l,store.read(l),l.slides[0].id,'th'));
 for(const l of lessons)for(const s of l.slides){const before=JSON.parse(raw).lessons;store.save(l,visitSlide(l,store.read(l),s.id,'en'));store=createProgressStore(storage);assert.equal(store.read(l).lastSlideId,s.id);for(const x of all)if(x.id!==l.id)assert.deepEqual(JSON.parse(raw).lessons[x.id],before[x.id]);}
 assert.equal(JSON.parse(raw).schemaVersion,1);
});
test('Domain 3 completion: original L1–3 files and protected lesson/progress/Quiz/Vocabulary/bank content match entry hashes',()=>{
 const selected=Object.entries(baseline.hashes).filter(([p])=>/lesson-d[12]-|lesson-d3-0[123]-|iam-(roles-provisioning|review-deprovisioning|frameworks-tools)|learning-progress\.js$|(?:question|vocab|quiz)/i.test(p));
 assert.ok(selected.length>50);for(const [p,hash] of selected)assert.equal(createHash('sha256').update(fs.readFileSync(p)).digest('hex'),hash,p);
});
test('Domain 3 completion: existing objective 3.1 and all other catalog domains remain semantically unchanged',()=>{
 assert.deepEqual(domain.objectives[0],entryCatalog.domains.find(d=>d.id===3).objectives[0]);
 assert.deepEqual(catalog.domains.filter(d=>d.id!==3),entryCatalog.domains.filter(d=>d.id!==3));
});
