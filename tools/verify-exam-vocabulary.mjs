import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import entries, { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';
import information from '../data/exam-version-info.js';
import { state, selectExamVersion } from '../js/core/state.js';
import { loadExamConfig, loadQuestionsForDomains } from '../js/core/question-loader.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';
import certifications from '../data/certifications.js';

const id = 'isc2-cc-vocabulary';
const cc = certifications[0];
function element(attributes = {}) {
  return { innerHTML: '', hidden: true, handlers: {}, focusCount: 0,
    getAttribute: key => attributes[key], addEventListener(type, fn) { this.handlers[type] = fn; }, focus() { this.focusCount++; } };
}
function fixture(language) {
  state.setup.language = language;
  const icon = element({ 'data-info-version-id': id });
  const select = element({ 'data-version-id': id });
  const overlay = element();
  const content = element();
  const title = element();
  const close = element();
  const background = element();
  const selectors = { '#version-info-modal': overlay, '#version-info-title': title, '#version-info-content': content,
    '#btn-version-info-close': close, '#version-selection-content': background };
  const root = { innerHTML: '', querySelector: key => selectors[key] || null,
    querySelectorAll: key => ({ '.btn-version-info': [icon], '.btn-select-version': [select] }[key] || []) };
  renderExamVersionsScreen(root, cc, () => assert.fail('Vocabulary must not select an exam'), () => {});
  return { root, icon, select, overlay, content, title, close, background };
}
function click(target) { return target.handlers.click({ target, stopPropagation() {} }); }
function plain(html) { return html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim(); }

test('registry has exactly three ordered entries and a typed, unavailable CC vocabulary without counts or loaders', () => {
  assert.deepEqual(getExamVersions('isc2-cc').map(v => v.id), ['2026', 'next-bank', id]);
  assert.equal(new Set(entries.map(v => v.id)).size, entries.length);
  const vocabulary = entries.find(v => v.id === id);
  assert.equal(vocabulary.certificationId, 'isc2-cc');
  assert.equal(vocabulary.type, 'vocabulary');
  assert.equal(vocabulary.status, 'coming-soon');
  for (const key of ['questionCount', 'vocabularyCount', 'examConfigReference', 'domainMetadataReference', 'questionBankReference', 'loader']) assert.equal(vocabulary[key], undefined, key);
  assert.equal(resolveExamVersion('isc2-cc', id), null);
  // Even a mistaken status/reference edit must not route learning content into the exam engine.
  assert.equal(resolveExamVersion('isc2-cc', id, [{ ...entries[0], ...vocabulary, status: 'available' }]), null);
});

test('vocabulary cannot load exam config/questions or change selected exam through direct calls', async () => {
  assert.equal(await loadExamConfig('isc2', 'cc', id), null);
  await assert.rejects(loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: id, domainIds: [1] }));
  state.selectedCertification = cc;
  state.selectedExamVersion = '2026';
  assert.equal(selectExamVersion(id, { version: id, domains: [{ id: 1 }] }), false);
  assert.equal(state.selectedExamVersion, '2026');
  const f = fixture('en');
  await click(f.select); // A forged selectable control still cannot invoke the callback.
});

test('screen uses the existing three-card grid, all three info buttons and two disabled actions', () => {
  const html = fixture('en').root.innerHTML;
  assert.equal((html.match(/<article /g) || []).length, 3);
  assert.equal((html.match(/class="btn-version-info"/g) || []).length, 3);
  assert.equal((html.match(/<button[^>]* disabled>/g) || []).length, 2);
  assert.equal((html.match(/class="btn btn-primary btn-select-version"/g) || []).length, 1);
  assert.ok(html.indexOf('Pre-2026 Exam Outline') < html.indexOf('ISC2 CC — 2026 Exam Outline'));
  assert.ok(html.indexOf('ISC2 CC — 2026 Exam Outline') < html.indexOf('ISC2 CC — Exam Vocabulary'));
  const thirdCard = html.slice(html.lastIndexOf('<article '));
  assert.doesNotMatch(thirdCard, /meta-badge-count|\d+ Questions/);
});

test('vocabulary dialog has the six specified sections, seven facts and five intended domains', () => {
  const f = fixture('en');
  click(f.icon);
  assert.match(plain(f.title.innerHTML), /ISC2 CC — Exam Vocabulary/);
  const text = plain(f.content.innerHTML);
  let previous = -1;
  for (const heading of ['Overview', 'Vocabulary Information', 'Domain Coverage', 'Learning Objectives', 'Future Practice Features', 'Important Notice']) {
    const at = text.indexOf(heading);
    assert.ok(at > previous, heading);
    previous = at;
  }
  for (const phrase of ['ISC2 Certified in Cybersecurity Vocabulary Practice', 'Terms, Definitions, Thai Meanings', 'English / Thai', 'intended vocabulary categories', 'not claims that vocabulary entries have already been imported', 'learning goals', 'planned capabilities only', 'not a separate official ISC2 examination or exam-outline version', 'Vocabulary content is coming soon.', 'English-to-Thai terminology practice', 'Definition recognition', 'Domain-based vocabulary filtering', 'Vocabulary-focused quizzes', 'Learning progress tracking']) assert.ok(text.includes(phrase), phrase);
  for (const goal of ['Recognize important English cybersecurity terminology.', 'Understand technical definitions.', 'Learn Thai meanings of ISC2 CC-related terminology.', 'Become familiar with terms appearing in ISC2 CC study materials.', 'Improve comprehension of English-language certification questions.']) assert.ok(text.includes(goal), goal);
  assert.equal(information[id].facts.length, 7);
  assert.equal(information[id].goals.length, 5);
  assert.equal(information[id].plans.length, 6);
  assert.deepEqual(information[id].domains.map(domain => domain.id), [1, 2, 3, 4, 5]);
  for (const domain of information['next-bank'].domains) assert.ok(text.includes(domain.name.en));
  assert.equal((f.content.innerHTML.match(/<table/g) || []).length, 2);
  assert.doesNotMatch(f.content.innerHTML, /\d+%|\d+ questions|\d+ terms/);
  click(f.close);
});

test('new card and full dialog content support EN, TH and EN+TH', () => {
  for (const language of ['en', 'th', 'both']) {
    const f = fixture(language);
    click(f.icon);
    const expected = language === 'th' ? 'เรียนรู้และฝึกคำศัพท์สำคัญสำหรับเตรียมสอบ' : 'Learn and practice essential terminology';
    assert.ok(f.root.innerHTML.includes(expected));
    for (const html of [f.title.innerHTML, f.content.innerHTML]) {
      if (language !== 'th') assert.match(html, /lang="en"/);
      if (language !== 'en') assert.match(html, /lang="th"/);
      if (language === 'en') assert.doesNotMatch(html, /lang="th"/);
      if (language === 'th') assert.doesNotMatch(html, /lang="en"/);
    }
    if (language !== 'en') assert.match(f.content.innerHTML, /ไม่ใช่การสอบหรือ Exam Outline Version อย่างเป็นทางการ/);
    assert.doesNotMatch(f.content.innerHTML, /class="lang-btn/);
    click(f.close);
  }
});

test('vocabulary reuses focus, Tab, Escape, backdrop and scroll-restoration behavior', () => {
  globalThis.document = { body: { style: { overflow: 'auto' } } };
  try {
    const f = fixture('en');
    f.content.scrollTop = 240;
    click(f.icon);
    assert.equal(f.overlay.hidden, false);
    assert.equal(f.content.scrollTop, 0, 'Opening information starts its independent content scroller at the top');
    assert.equal(f.title.focusCount, 1);
    assert.equal(f.background.inert, true);
    f.overlay.handlers.keydown({ key: 'Tab', preventDefault() {} });
    assert.equal(f.close.focusCount, 1);
    f.overlay.handlers.keydown({ key: 'Escape', preventDefault() {} });
    assert.equal(f.icon.focusCount, 1);
    assert.equal(document.body.style.overflow, 'auto');
    click(f.icon);
    f.overlay.handlers.click({ target: f.overlay });
    assert.equal(f.overlay.hidden, true);
    assert.equal(f.icon.focusCount, 2);
  } finally { delete globalThis.document; }
});

test('existing registry entries, exam dialogs, protected core/screens/styles and question banks remain unchanged', () => {
  const before = JSON.parse(fs.readFileSync(new URL('../docs/verification/exam-vocabulary-before.json', import.meta.url), 'utf8'));
  assert.deepEqual(entries.slice(0, 2), before.existingEntries);
  for (const existingId of ['2026', 'next-bank']) assert.deepEqual(information[existingId], before.existingInformation[existingId]);
  for (const [path, hash] of Object.entries(before.files)) {
    // Scoped modal styles are intentionally changed by the desktop responsiveness fix.
    if (path === 'css/versions.css') continue;
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../' + path, import.meta.url))).digest('hex').toUpperCase(), hash, path);
  }
});
