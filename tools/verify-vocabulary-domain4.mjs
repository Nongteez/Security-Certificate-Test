/** Node-only Domain 4 vocabulary checks. No browser or layout engine is used. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { loadVocabularyData, clearVocabularyCache } from '../js/core/vocabulary-loader.js';
import versions from '../data/exam-versions.js';
import { renderVocabularyScreen } from '../js/ui/screen-vocabulary.js';
import { createVocabularyDOM, change, input, check } from './fixtures/vocabulary-dom.mjs';

const read = relative => fs.readFileSync(new URL(`../${relative}`, import.meta.url), 'utf8');
const stagingIndex = process.argv.indexOf('--staging');
const staging = stagingIndex !== -1;
clearVocabularyCache();
const all = await loadVocabularyData('all');
if (!staging) assert.ok(all.entries.some(e => e.domain === 4), 'All-domain vocabulary loader must include Domain 4');
const data = staging ? JSON.parse(fs.readFileSync(process.argv[stagingIndex+1], 'utf8')) : await loadVocabularyData(4);
const old = [1,2,3].flatMap(i => JSON.parse(read(`content/isc2-cc-2026/vocabulary/domain-${i}.json`)).entries);
assert.equal(old.length,313);
const categories = ['core_term','acronym','confusing_term','scenario_vocabulary','exam_language'];
const required = ['id','term','acronym','full_form','thai_meaning','definition_en','explanation_th','category','domain','objective','exam_relevance','exam_relevance_th','example_en','example_th','confused_with','keywords','sources','source_status','review_status'].sort();
const text = s => typeof s === 'string' && s.trim().length > 0 && !/[\uFFFD\u4e00-\u9fff]/u.test(s);
const thai = s => text(s) && /[\u0e00-\u0e7f]/u.test(s);
const normalize = s => s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'');
const knowledge = new Set([...read('content/isc2-cc-2026/knowledge/domain-4.md').matchAll(/^### (KNOW-D4-\d{3})/gm)].map(m=>m[1]));
const references = new Set([...read('docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md').matchAll(/^\[(R\d+)\]:/gm)].map(m=>m[1]));
const extraRefs = new Set(['RFC4251','RFC1034','SFTP-NAME','MS-RDS']);

function validate(e) {
  assert.deepEqual(Object.keys(e).sort(),required,`${e.id}: established schema`);
  assert.match(e.id,/^VOC-CC26-D4-\d{3}$/); assert.equal(e.domain,4);
  assert.ok(['4.1','4.2','4.3'].includes(e.objective));assert.ok(categories.includes(e.category));
  assert.ok(['source_supported','supplemental','editorial_synthesis'].includes(e.source_status));
  assert.equal(e.review_status,'needs_human_review','No formal human approval is claimed');
  for (const f of ['term','definition_en','example_en','exam_relevance']) assert.ok(text(e[f]),`${e.id}: ${f}`);
  for (const f of ['thai_meaning','explanation_th','example_th','exam_relevance_th']) assert.ok(thai(e[f]),`${e.id}: ${f}`);
  assert.ok((e.acronym === null && e.full_form === null) || (text(e.acronym) && text(e.full_form)));
  if(e.category === 'acronym') assert.ok(text(e.acronym) && text(e.full_form));
  for(const f of ['confused_with','keywords']) assert.ok(Array.isArray(e[f]) && e[f].every(text));
  assert.ok(e.keywords.length > 0 && e.sources.length > 0);
  for(const source of e.sources) {
    assert.ok(text(source.source_id) && text(source.locator) && knowledge.has(source.concept_id),`${e.id}: authentic concept locator`);
    if(source.source_id.startsWith('ISC2-CC-2026-D4-KNOW-')) assert.equal(source.locator,source.concept_id);
    else if(references.has(source.source_id)) {
      assert.equal(source.locator,`docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#${source.source_id.toLowerCase()}`);
    } else assert.ok(extraRefs.has(source.source_id) && source.locator.startsWith('https://'),`${e.id}: registered extra reference`);
  }
}
assert.equal(data.domain_id,4);assert.equal(data.domain_name,'Networking and Cloud Security Concepts');assert.equal(data.version,'2026');
assert.ok(data.entries.length > 0);assert.equal(data.total_entries,data.entries.length);
data.entries.forEach((e,i)=>{validate(e);assert.equal(e.id,`VOC-CC26-D4-${String(i+1).padStart(3,'0')}`);});
for(const c of categories) assert.equal(data.categories_summary[c],data.entries.filter(e=>e.category===c).length);
for(const o of ['4.1','4.2','4.3']) assert.ok(data.entries.some(e=>e.objective===o));
for(const k of knowledge) assert.ok(data.entries.some(e=>e.sources.some(s=>s.concept_id===k)),`Knowledge coverage ${k}`);
assert.equal(new Set([...old,...data.entries].map(e=>e.id)).size,old.length+data.entries.length);

const identities = e => new Set([e.term,e.acronym,e.full_form].filter(Boolean).map(normalize));
const priorEntries = [...old];let homonyms = 0;
for(const entry of data.entries) {
  for(const earlier of priorEntries) {
    const overlap=[...identities(entry)].filter(key=>identities(earlier).has(key));
    for(const alias of overlap) {
      assert.ok(alias==='mac' && entry.term==='MAC Address' && earlier.full_form==='Mandatory Access Control',`${entry.id}: duplicate/equivalent alias with ${earlier.id}`);
      homonyms++;
    }
  }
  priorEntries.push(entry);
}
const noGuidance=structuredClone(data.entries[0]);noGuidance.exam_relevance_th='';assert.throws(()=>validate(noGuidance));
const wrongObjective=structuredClone(data.entries[0]);wrongObjective.objective='4.4';assert.throws(()=>validate(wrongObjective));
const inventedSource=structuredClone(data.entries[0]);inventedSource.sources[0].concept_id='KNOW-D4-999';assert.throws(()=>validate(inventedSource));
console.log(`PASS content: ${data.entries.length} entries; required fields, EN/TH guidance, IDs, all objectives, all 24 knowledge records, categories and sources. New aliases distinct; ${homonyms} documented MAC homonym matches.`);

if(process.argv.includes('--duplicates')) {
  const docs=[...old,...data.entries];const stop=new Set('a an the of to or and in on for with by from is are as that this which not its can may under each all rather than'.split(' '));
  const tokens=e=>`${e.term} ${e.definition_en} ${e.exam_relevance}`.toLowerCase().replace(/[^a-z0-9]+/g,' ').split(' ').filter(t=>t.length>2&&!stop.has(t));
  const df=new Map();docs.forEach(e=>new Set(tokens(e)).forEach(t=>df.set(t,(df.get(t)||0)+1)));
  const vector=e=>{const counts=new Map();tokens(e).forEach(t=>counts.set(t,(counts.get(t)||0)+1));const pairs=[...counts].map(([t,n])=>[t,(1+Math.log(n))*(1+Math.log(docs.length/df.get(t)))]);const length=Math.hypot(...pairs.map(x=>x[1]));return new Map(pairs.map(([t,n])=>[t,n/length]));};
  const vectors=new Map(docs.map(e=>[e,vector(e)]));const score=(a,b)=>[...vectors.get(a)].reduce((sum,[t,n])=>sum+n*(vectors.get(b).get(t)||0),0);
  const pairs=(others,within=false)=>data.entries.flatMap(a=>others.filter(b=>within?b.id>a.id:true).map(b=>({new:a.id,other:b.id,score:Number(score(a,b).toFixed(3))}))).sort((a,b)=>b.score-a.score);
  console.log(JSON.stringify({method:'TF-IDF candidate ranking; semantic judgment required',existing:pairs(old).slice(0,18),within:pairs(data.entries,true).slice(0,12)},null,2));
}
if(staging) {console.log('PASS staging only; registration/UI integration not asserted.');process.exit(0);}

assert.equal(all.total_entries, 313 + data.entries.length);
assert.equal(versions.find(v => v.id === 'isc2-cc-vocabulary').vocabularyCount, all.total_entries);
assert.deepEqual(all.entries.slice(0,313),old);
assert.deepEqual(all.entries.filter(e=>e.domain===4),data.entries);
for(const c of categories) assert.equal(all.categories_summary[c],all.entries.filter(e=>e.category===c).length);
assert.equal(await loadVocabularyData(4),data,'Domain cache is reused');
assert.equal(await loadVocabularyData('all'),all,'Combined cache is reused');
console.log(`PASS loader: ${data.entries.length} Domain 4 entries; ${all.total_entries} combined entries.`);

// Execute the actual screen and its event handlers against a small Node DOM double.
// The loader cache is populated before installing window, so no network fetch occurs.
const dom=createVocabularyDOM();const root=dom.container;
const find=selector=>{const node=root.querySelector(selector);assert.ok(node,`Missing rendered ${selector}`);return node;};
const count=()=>Number(find('.vocab-count-indicator').querySelectorAll('strong')[0].textContent);
const cardIds=()=>root.querySelectorAll('.vocab-dict-card').map(c=>c.getAttribute('data-card-id'));
let back=false;
try {
  await renderVocabularyScreen(root,()=>{back=true;});
  assert.equal(cardIds().length,all.total_entries);assert.equal(count(),all.total_entries);
  const option=find('#vocab-domain-select').children.find(c=>c.value==='4');assert.ok(option&&!option.disabled&&option.textContent.includes(`(${data.total_entries})`));
  const domain5=find('#vocab-domain-select').children.find(c=>c.value==='5');assert.ok(domain5.disabled);
  change(find('#vocab-domain-select'),'4');assert.deepEqual(cardIds(),data.entries.map(e=>e.id));assert.equal(count(),data.total_entries);
  for(const objective of ['4.1','4.2','4.3']) assert.ok(find(`[data-obj-check="${objective}"]`));
  assert.equal(root.querySelector('[data-obj-check="3.1"]'),null);
  check(find('[data-obj-check="4.3"]'),true);
  assert.deepEqual(cardIds(),data.entries.filter(e=>e.objective==='4.3').map(e=>e.id));
  check(find('[data-cat-check="acronym"]'),true);
  assert.deepEqual(cardIds(),data.entries.filter(e=>e.objective==='4.3'&&e.category==='acronym').map(e=>e.id));
  find('#btn-clear-categories').click();find('#btn-clear-objectives').click();
  for(const field of ['term','acronym','full_form','thai_meaning']) {
    const sample=data.entries.find(e=>e.term==='Virtual Local Area Network');const query=sample[field];
    input(find('#vocab-search-input'),query);assert.ok(cardIds().includes(sample.id),`${field} search`);assert.ok(count()>0);
    find('#btn-clear-search').click();
  }
  input(find('#vocab-search-input'),'unmatched-vocabulary-sentinel');assert.equal(count(),0);assert.equal(cardIds().length,0);find('#btn-clear-search').click();
  // Every new entry is consumed by the real detail modal, including both guidance fields.
  for(const entry of data.entries) {
    find(`[data-card-id="${entry.id}"]`).click();const modal=find('#vocab-detail-modal');assert.equal(modal.hidden,false);
    assert.ok(find('#vocab-modal-title').textContent.includes(entry.term));
    const body=find('#vocab-modal-body').textContent;
    for(const field of ['thai_meaning','definition_en','explanation_th','example_en','example_th','exam_relevance','exam_relevance_th']) assert.ok(body.includes(entry[field]),`${entry.id}: modal ${field}`);
    if(entry.full_form) assert.ok(body.includes(entry.full_form));
    find('#btn-vocab-modal-close').click();assert.equal(modal.hidden,true);
  }
  find(`[data-card-id="${data.entries[0].id}"]`).click();find('#btn-modal-next').click();assert.ok(find('#vocab-modal-title').textContent.includes(data.entries[1].term));find('#btn-modal-prev').click();assert.ok(find('#vocab-modal-title').textContent.includes(data.entries[0].term));find('#btn-vocab-modal-close').click();
  find('#tab-flashcards').click();const seen=[];
  for(let i=0;i<data.entries.length;i++) {
    const card=find('#flashcard-card');seen.push(card.querySelector('[data-open-detail]').getAttribute('data-open-detail'));
    assert.ok(card.textContent.includes(data.entries[i].term)&&card.textContent.includes(data.entries[i].thai_meaning));
    find('#btn-card-flip').click();assert.ok(card.classList.contains('is-flipped'));
    if(i<data.entries.length-1)find('#btn-card-next').click();
  }
  assert.equal(new Set(seen).size,data.entries.length);
  find('#btn-card-shuffle').click();const shuffled=[];
  for(let i=0;i<data.entries.length;i++){shuffled.push(find('#flashcard-card').querySelector('[data-open-detail]').getAttribute('data-open-detail'));if(i<data.entries.length-1)find('#btn-card-next').click();}
  assert.deepEqual(shuffled.slice().sort(),data.entries.map(e=>e.id).sort(),'Shuffle preserves exactly the filtered deck');
  find('#btn-card-reset-order').click();assert.ok(find('#flashcard-card').textContent.includes(data.entries[0].term));
  find('#tab-cards').click();check(find('[data-obj-check="4.3"]'),true);change(find('#vocab-domain-select'),'3');assert.equal(count(),102);assert.equal(root.querySelector('[data-obj-check="4.3"]'),null);
  find('#btn-reset-filters').click();assert.equal(count(),all.total_entries);
  find('#btn-vocab-back').click();assert.ok(back);
  console.log('PASS real-screen Node behavior: D4 filter/count, categories/objectives, EN/acronym/full-form/Thai search, zero results, all new detail modals with bilingual guidance, flashcard flip/navigation/shuffle/reset, domain switching and back navigation.');
} finally {dom.restore();}
