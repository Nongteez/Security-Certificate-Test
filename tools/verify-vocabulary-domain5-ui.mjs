import assert from 'node:assert/strict';
import {loadVocabularyData} from '../js/core/vocabulary-loader.js';
import {renderVocabularyScreen} from '../js/ui/screen-vocabulary.js';
import {createVocabularyDOM,change,input,check} from './fixtures/vocabulary-dom.mjs';
const all=await loadVocabularyData('all');const data=await loadVocabularyData(5);
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
  const option=find('#vocab-domain-select').children.find(c=>c.value==='5');assert.ok(option&&!option.disabled&&option.textContent.includes(`(${data.total_entries})`));
  
  change(find('#vocab-domain-select'),'5');assert.deepEqual(cardIds(),data.entries.map(e=>e.id));assert.equal(count(),data.total_entries);
  for(const objective of ['5.1','5.2','5.3','5.4','5.5']) assert.ok(find(`[data-obj-check="${objective}"]`));
  assert.equal(root.querySelector('[data-obj-check="3.1"]'),null);
  check(find('[data-obj-check="5.5"]'),true);
  assert.deepEqual(cardIds(),data.entries.filter(e=>e.objective==='5.5').map(e=>e.id));
  check(find('[data-cat-check="acronym"]'),true);
  assert.deepEqual(cardIds(),data.entries.filter(e=>e.objective==='5.5'&&e.category==='acronym').map(e=>e.id));
  find('#btn-clear-categories').click();find('#btn-clear-objectives').click();
  for(const field of ['term','acronym','full_form','thai_meaning']) {
    const sample=data.entries.find(e=>e.term==='Static Application Security Testing');const query=sample[field];
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
  find('#tab-cards').click();check(find('[data-obj-check="5.5"]'),true);change(find('#vocab-domain-select'),'3');assert.equal(count(),102);assert.equal(root.querySelector('[data-obj-check="5.5"]'),null);
  find('#btn-reset-filters').click();assert.equal(count(),all.total_entries);
  find('#btn-vocab-back').click();assert.ok(back);
  console.log('PASS real-screen Node behavior: D5 filter/count, categories/objectives, EN/acronym/full-form/Thai search, zero results, all new detail modals with bilingual guidance, flashcard flip/navigation/shuffle/reset, domain switching and back navigation.');
} finally {dom.restore();}
