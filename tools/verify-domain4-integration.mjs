/** Node-only Domain 4 checks. --staging checks the editorial source before activation.
 * Schema, similarity and rendering checks do not establish academic correctness.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadDomainQuestions, loadExamConfig, loadQuestionsForDomains, loadQuestionsForSession, questionsMatchVersion } from '../js/core/question-loader.js';
import * as engine from '../js/core/quiz-engine.js';
import * as state from '../js/core/state.js';
import * as storage from '../js/core/storage.js';
import { renderExplanation2026Content, escapeHtml } from '../js/ui/components/explanation-2026.js';
import { getExamVersions } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { renderCertStartScreen } from '../js/ui/screen-start.js';

const staging = process.argv.includes('--staging');
if (!staging) {
  const loaded = await loadDomainQuestions({vendorId:'isc2', certId:'cc', version:'next-bank', domainId:4});
  assert.ok(loaded.length > 0, 'Domain 4 must be available through the real versioned loader');
}
const { drafts, stagedQuestions, acceptedQuestions, reviewStatus, buildProductionQuestion } = await import('../content/isc2-cc-2026/questions/domain-4-draft.mjs');
const letters = ['A','B','C','D'];
const normalize = s => s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const filled = s => typeof s === 'string' && s.trim().length > 0 && !s.includes('\uFFFD');
const thai = s => filled(s) && /[\u0e00-\u0e7f]/u.test(s);
const read = relative => fs.readFileSync(new URL(`../${relative}`,import.meta.url),'utf8');
const knowledge = new Set([...read('content/isc2-cc-2026/knowledge/domain-4.md').matchAll(/^### KNOW-D4-(\d+)/gm)].map(m=>Number(m[1])));
const references = new Set([...read('docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md').matchAll(/^\[(R\d+)\]:/gm)].map(m=>m[1]));
const keys = ['id','dom','question','options','correct_idx','explanation','short_explanation_en','question_th','options_th','explanation_th','explanation_detail'].sort();
function validate(q,d) {
  assert.deepEqual(Object.keys(q).sort(),keys,`Q${q.id}: runtime schema`);
  assert.ok(Number.isInteger(q.id) && q.dom === 4);
  assert.ok(Number.isInteger(q.correct_idx) && q.correct_idx >= 0 && q.correct_idx < 4);
  assert.equal(q.options.length,4); assert.equal(q.options_th.length,4);
  assert.equal(new Set(q.options.map(normalize)).size,4);
  assert.equal(new Set(q.options_th.map(normalize)).size,4);
  assert.ok([q.question,q.explanation,q.short_explanation_en,...q.options].every(filled));
  assert.ok([q.question_th,q.explanation_th,...q.options_th].every(thai));
  assert.ok(d.choices.every(c=>c.length===4 && filled(c[2]) && thai(c[3])));
  assert.ok(['4.1','4.2','4.3'].includes(d.objective));
  assert.ok((d.secondaryObjectives||[]).every(o=>['4.1','4.2','4.3'].includes(o)&&o!==d.objective));
  assert.ok(['conceptual','scenario'].includes(d.type));
  assert.ok(d.knowledge.length && d.knowledge.every(k=>knowledge.has(k)));
  assert.ok(d.sources.length && d.sources.every(r=>references.has(r)));
  assert.ok(d.targets.length && d.targets.every(t=>Number.isInteger(t) && t>=1 && t<=21));
  for(const target of d.targets) {
    const permitted=target<=10||target===20?['4.1']:target<=15?['4.2']:target<=19?['4.3']:['4.2','4.3'];
    assert.ok(permitted.includes(d.objective),`Q${q.id}: target/primary objective mismatch`);
  }
  assert.ok(filled(d.concept) && filled(d.decision) && filled(d.bullet));
  assert.equal(q.explanation_detail.correct.en,d.choices[q.correct_idx][2]);
  assert.equal(q.explanation_detail.correct.th,d.choices[q.correct_idx][3]);
  assert.deepEqual(q.explanation_detail.incorrect.map(x=>x.letter).sort(),letters.filter((_,i)=>i!==q.correct_idx));
  assert.ok(q.explanation.startsWith(`Option ${letters[q.correct_idx]} is correct.`));
  assert.ok(q.explanation_th.startsWith(`ข้อ ${letters[q.correct_idx]} ถูกต้อง:`));
  for (const wrong of q.explanation_detail.incorrect) {
    const idx=letters.indexOf(wrong.letter);
    assert.ok(filled(wrong.text_en) && thai(wrong.text_th));
    assert.equal(wrong.text_en,d.choices[idx][2]); assert.equal(wrong.text_th,d.choices[idx][3]);
    assert.ok(q.explanation.includes(wrong.text_en) && q.explanation_th.includes(wrong.text_th));
  }
  for (const language of ['en','th','both']) {
    const html=renderExplanation2026Content(q,language);
    assert.ok(html.includes(`Correct Answer: Option ${letters[q.correct_idx]}`));
    assert.ok(html.includes('exp-correct-section') && html.includes('exp-incorrect-section'));
    for(const rationale of [q.explanation_detail.correct,...q.explanation_detail.incorrect.map(w=>({en:w.text_en,th:w.text_th}))]) {
      if(language!=='th') assert.ok(html.includes(escapeHtml(rationale.en)));
      if(language!=='en') assert.ok(html.includes(escapeHtml(rationale.th)));
    }
  }
}
assert.ok(stagedQuestions.length>0,'Staging must contain real questions');
assert.equal(stagedQuestions.length,drafts.filter(d=>d.status!=='REJECTED').length);
const eligible=drafts.filter(d=>d.status!=='REJECTED');
stagedQuestions.forEach((q,i)=>validate(q,eligible[i]));
assert.equal(new Set(drafts.map(d=>d.id)).size,drafts.length);
assert.equal(stagedQuestions[0].id,670,'Continue after protected Q669');
for(let i=1;i<stagedQuestions.length;i++) assert.equal(stagedQuestions[i].id,stagedQuestions[i-1].id+1);
for(let t=1;t<=21;t++) assert.ok(eligible.some(d=>d.targets.includes(t)),`Missing assessment target ${t}`);
for(const [objective,bullets] of Object.entries({'4.1':['models','transport','addressing','vpn','firewalls','ports','wifi','bluetooth','ics','iot','ai-monitoring'],'4.2':['zones','vlan','micro-segmentation','defense-in-depth','zero-trust','ai-isolation'],'4.3':['characteristics','service-models','deployment-models','shared-security','supporting-context','ai-cloud']})) {
  for(const bullet of bullets) assert.ok(eligible.some(d=>(d.objective===objective||(d.secondaryObjectives||[]).includes(objective)) && (d.bullet===bullet||(d.supportingBullets||[]).includes(bullet))),`${objective}/${bullet}`);
}
const badKey=structuredClone(stagedQuestions[0]); badKey.explanation_detail.incorrect[0].letter=letters[badKey.correct_idx];
assert.throws(()=>validate(badKey,eligible[0]));
const badThai=structuredClone(stagedQuestions[0]); badThai.options_th[0]=''; assert.throws(()=>validate(badThai,eligible[0]));
// Hand-derived fixture protects the authoring-to-runtime key and rationale mapping.
const fixture=buildProductionQuestion({id:9000,stem:['Test stem','โจทย์ทดสอบ'],choices:[['Alpha','ก','Wrong alpha','เหตุผล ก'],['Beta','ข','Right beta','เหตุผล ข'],['Gamma','ค','Wrong gamma','เหตุผล ค'],['Delta','ง','Wrong delta','เหตุผล ง']],correct:1,takeaway:'Takeaway'});
assert.equal(fixture.correct_idx,1); assert.equal(fixture.dom,4); assert.equal(fixture.options[1],'Beta');
assert.deepEqual(fixture.explanation_detail.correct,{en:'Right beta',th:'เหตุผล ข'});
assert.deepEqual(fixture.explanation_detail.incorrect.map(x=>x.letter),['A','C','D']);

const legacy=await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1,2,3,4,5]});
assert.deepEqual(Object.values(legacy).map(q=>q.length),[142,65,93,156,127]);
const existing=[];
for(const id of [1,2,3,5]) existing.push(...(await import(`../data/certs/isc2/cc/versions/next-bank/questions/domain-${id}.js`)).default);
const protectedQuestions=[...Object.values(legacy).flat(),...existing];
const all=[...protectedQuestions,...stagedQuestions];
assert.equal(new Set(all.map(q=>q.id)).size,all.length,'No ID collisions with either existing bank');
for(const field of ['question','question_th']) assert.equal(new Set(all.map(q=>normalize(q[field]))).size,new Set(protectedQuestions.map(q=>normalize(q[field]))).size+stagedQuestions.length,`${field}: no new exact duplicates`);
console.log(`PASS staging: ${stagedQuestions.length} questions; schema/keys, bilingual rationale mapping, 21 targets, source links, EN/TH/both rendering, negative corruption guards and 669-item collision/duplicate comparison.`);
if(process.argv.includes('--duplicates')) {
  const stop=new Set('a an the and or to of in on for with from by is are was were be been as at that this these those which what who how should most best first its their they it has have had can may must will would does do not only each all'.split(' '));
  const tokens=q=>normalize(`${q.question} ${q.options[q.correct_idx]}`).split(' ').filter(w=>w.length>2&&!stop.has(w));
  const df=new Map(); all.forEach(q=>new Set(tokens(q)).forEach(t=>df.set(t,(df.get(t)||0)+1)));
  const vector=q=>{const c=new Map();tokens(q).forEach(t=>c.set(t,(c.get(t)||0)+1)); const pairs=[...c].map(([t,n])=>[t,(1+Math.log(n))*(1+Math.log(all.length/df.get(t)))]);const len=Math.hypot(...pairs.map(x=>x[1]));return new Map(pairs.map(([t,n])=>[t,n/len]));};
  const vectors=new Map(all.map(q=>[q,vector(q)]));
  const cosine=(a,b)=>[...vectors.get(a)].reduce((n,[t,v])=>n+v*(vectors.get(b).get(t)||0),0);
  const pairs=(targets,within=false)=>stagedQuestions.flatMap(a=>targets.filter(b=>within?b.id>a.id:true).map(b=>({a:a.id,b:b.id,score:Number(cosine(a,b).toFixed(3))}))).sort((a,b)=>b.score-a.score);
  console.log(JSON.stringify({method:'TF-IDF candidate ranking, not semantic proof',existing:pairs(protectedQuestions).slice(0,24),within:pairs(stagedQuestions,true).slice(0,15)},null,2));
}
if(staging) process.exit(0);
assert.equal(reviewStatus,'ACCEPTED'); assert.deepEqual(acceptedQuestions,stagedQuestions);
const config=await loadExamConfig('isc2','cc','next-bank'); assert.ok(config);
const bank=await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
assert.deepEqual(bank[4],acceptedQuestions,'Published module matches accepted source');
assert.deepEqual(Object.values(bank).map(q=>q.length),[24,39,23,stagedQuestions.length,0]);
const flat=Object.values(bank).flat();
assert.equal(config.totalQuestions,flat.length); assert.equal(config.defaultQuestionCount,flat.length);
assert.equal(getExamVersions('isc2-cc').find(v=>v.id==='next-bank').questionCount,flat.length);
for(const d of config.domains){assert.equal(d.questionCount,bank[d.id].length);assert.equal(d.questionThCount,bank[d.id].length);assert.equal(d.available,bank[d.id].length>0);}
assert.deepEqual(config.domains.map(d=>d.weightPercentage),[24,17.3,20,21.3,17.3]);
assert.deepEqual(config.supportedLanguages,['en','th','both']); assert.equal(config.passingPercentage,70);assert.equal(config.secondsPerQuestion,90);
assert.ok(questionsMatchVersion(bank[4],'isc2-cc','next-bank'));
assert.ok(!questionsMatchVersion(bank[4],'isc2-cc','2026'));
const before=JSON.stringify(bank);
for(const order of ['all','random']) {
  const practice=engine.createPracticeSession({questionsByDomain:bank,selectedDomainIds:[4],order,questionCount:bank[4].length+10});
  assert.equal(practice.length,bank[4].length);assert.ok(practice.every(q=>q.dom===4));assert.equal(new Set(practice.map(q=>q.id)).size,practice.length);
}
const mixed=engine.createPracticeSession({questionsByDomain:bank,selectedDomainIds:[1,2,3,4],order:'all',questionCount:flat.length});
assert.equal(mixed.length,flat.length);assert.equal(new Set(mixed.map(q=>q.id)).size,flat.length);
const allocations=engine.calculateDomainAllocations(config.domains,125);
const exam=engine.createExamSession({questionsByDomain:bank,examConfig:config,totalQuestions:125});
assert.equal(exam.filter(q=>q.dom===4).length,Math.min(allocations[4],bank[4].length));
assert.equal(exam.length,config.domains.reduce((n,d)=>n+Math.min(allocations[d.id],bank[d.id].length),0));
assert.equal(JSON.stringify(bank),before);
state.selectCertification(certifications.find(c=>c.id==='isc2-cc'));assert.equal(state.selectExamVersion('next-bank',config),true);
assert.ok(state.state.setup.practice.selectedDomains.has(4));
for(const language of ['en','th','both']) {
  state.state.setup.language=language;state.state.setup.studyMode='practice';state.state.setup.practice.selectedDomains=new Set([4]);
  const element=()=>({addEventListener(){},querySelector:()=>element(),querySelectorAll:()=>[],setAttribute(){},classList:{add(){},remove(){}}});
  const container={innerHTML:'',querySelector:()=>element(),querySelectorAll:()=>[]};
  renderCertStartScreen(container,certifications.find(c=>c.id==='isc2-cc'),'next-bank',()=>{},config,()=>{});
  const row=container.innerHTML.match(/<div\s+class="domain-row[^>]*data-domain-id="4"[^>]*>/)?.[0];
  assert.ok(row && row.includes('role="checkbox"') && !row.includes('aria-disabled="true"'),'Domain 4 has an enabled setup row');
  const pendingRow=container.innerHTML.match(/<div\s+class="domain-row[^>]*data-domain-id="5"[^>]*>/)?.[0];
  assert.ok(pendingRow && pendingRow.includes('aria-disabled="true"') && pendingRow.includes('aria-checked="false"'),'Domain 5 remains disabled and unchecked');
}
engine.startQuizSession({mode:'practice',questions:bank[4].slice(0,2)});
engine.recordAnswer({questionIndex:0,selectedIndex:bank[4][0].correct_idx});
engine.recordAnswer({questionIndex:1,selectedIndex:(bank[4][1].correct_idx+1)%4});
const snapshot=storage.buildSessionSnapshot(state.state);assert.equal(snapshot.versionId,'next-bank');assert.equal(snapshot.correct,1);assert.equal(snapshot.wrong,1);
const restored=await loadQuestionsForSession(snapshot);assert.deepEqual(restored[4],bank[4]);
console.log(`PASS integration: ${flat.length} updated items, Domain 4 selectable; D4/mixed practice, weighted selection (${exam.length}/125 available), scoring, saved-session reload and version isolation. Domain 5 remains empty.`);
