import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import versions from '../data/exam-versions.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';
import certifications from '../data/certifications.js';

const cc = certifications[0];
function element(attributes = {}) {
  return { innerHTML: '', textContent: '', hidden: true, inert: false, handlers: {}, focusCount: 0,
    getAttribute: key => attributes[key],
    addEventListener(type, handler) { this.handlers[type] = handler; },
    focus() { this.focusCount++; } };
}
function fixture() {
  const icons = ['2026', 'next-bank', 'isc2-cc-vocabulary'].map(id => element({ 'data-info-version-id': id }));
  const close = element();
  const overlay = element();
  const title = element();
  const content = element();
  const background = element();
  const langButtons = ['en', 'th', 'both'].map(lang => element({ 'data-lang': lang }));
  const select = element({ 'data-version-id': '2026' });
  const selectors = { '#version-info-modal': overlay, '#version-info-title': title, '#version-info-content': content,
    '#btn-version-info-close': close, '#version-selection-content': background };
  const root = { innerHTML: '', querySelector: key => selectors[key] || null,
    querySelectorAll: key => ({ '.btn-version-info': icons, '.lang-btn': langButtons, '.btn-select-version': [select] }[key] || []) };
  return { root, icons, close, overlay, title, content, background, langButtons, select };
}
function click(target) {
  return target.handlers.click({ target, stopPropagation() {} });
}

test('display titles change while IDs, status, counts and loader references remain stable', () => {
  assert.equal(versions[0].title, 'ISC2 CC — Pre-2026 Exam Outline');
  assert.equal(versions[1].title, 'ISC2 CC — 2026 Exam Outline');
  assert.equal(versions[0].description, '583 practice questions based on the previous ISC2 CC exam domain structure.');
  assert.equal(versions[1].description, 'Updated exam domains effective September 1, 2026, including AI security concepts.');
  assert.deepEqual(versions.map(v => v.id), ['2026', 'next-bank', 'isc2-cc-vocabulary']);
  assert.deepEqual(versions.map(v => v.status), ['available', 'coming-soon', 'coming-soon']);
  assert.equal(versions[0].questionCount, 583);
  assert.equal(versions[1].questionCount, undefined);
  assert.equal(versions[0].examConfigReference, './certs/isc2/cc/versions/2026/exam.config.js');
  assert.equal(versions[0].domainMetadataReference, './certs/isc2/cc/versions/2026/exam.config.js');
  assert.equal(versions[0].questionBankReference, './certs/isc2/cc/versions/2026/questions/');
  assert.equal(versions[1].questionBankReference, null);
  const f = fixture();
  renderExamVersionsScreen(f.root, cc, () => {}, () => {});
  assert.equal((f.root.innerHTML.match(/class="btn-version-info"/g) || []).length, 3);
  assert.match(f.root.innerHTML, /aria-label="View exam version information/);
  assert.match(f.root.innerHTML, /<button[^>]+disabled>Coming Soon<\/button>/);
});

test('existing dialog lists bank counts and distinguishes previous outline from official weights', () => {
  state.setup.language = 'en';
  const f = fixture();
  let selected = false;
  globalThis.document = { body: { style: { overflow: 'auto' } } };
  renderExamVersionsScreen(f.root, cc, () => { selected = true; }, () => {});
  click(f.icons[0]);
  assert.equal(f.overlay.hidden, false);
  assert.equal(f.background.inert, true);
  assert.match(f.title.innerHTML, /Pre-2026 Exam Outline/);
  for (const count of [142, 65, 93, 156, 127]) assert.match(f.content.innerHTML, new RegExp(`>${count}<`));
  assert.match(f.content.innerHTML, /previous exam outline/);
  assert.match(f.content.innerHTML, /not official ISC2 exam domain weights/);
  assert.equal(selected, false);
  assert.equal(f.title.focusCount, 1);
  click(f.close);
  assert.equal(f.overlay.hidden, true);
  assert.equal(f.background.inert, false);
  assert.equal(f.icons[0].focusCount, 1);
  assert.equal(document.body.style.overflow, 'auto');
  delete globalThis.document;
});

test('future dialog lists supplied effective date, exact weights and AI topics without a bank count', () => {
  state.setup.language = 'en';
  const f = fixture();
  renderExamVersionsScreen(f.root, cc, () => assert.fail('Info must never select a version'), () => {});
  click(f.icons[1]);
  assert.match(f.title.innerHTML, /ISC2 CC — 2026 Exam Outline/);
  assert.match(f.content.innerHTML, /September 1, 2026/);
  for (const weight of ['24%', '17.3%', '20%', '21.3%', '17.3%']) assert.ok(f.content.innerHTML.includes(weight));
  for (const topic of ['Security Governance', 'Identity and Access Management', 'Networking and Cloud Security', 'AI service accounts', 'AI-assisted threat detection', 'AI data protection']) assert.ok(f.content.innerHTML.includes(topic));
  assert.match(f.content.innerHTML, /Question Bank Status: Coming Soon/);
  assert.doesNotMatch(f.content.innerHTML, /\d+ questions/);
  click(f.close);
});

test('Escape/backdrop close, Tab stays in dialog, and inner clicks do not close or select', () => {
  const f = fixture();
  renderExamVersionsScreen(f.root, cc, () => assert.fail('Info must never select a version'), () => {});
  click(f.icons[0]);
  f.overlay.handlers.click({ target: f.content });
  assert.equal(f.overlay.hidden, false);
  let prevented = false;
  f.overlay.handlers.keydown({ key: 'Tab', shiftKey: true, preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(f.close.focusCount, 1);
  f.overlay.handlers.keydown({ key: 'Escape', preventDefault() {} });
  assert.equal(f.overlay.hidden, true);
  assert.equal(f.icons[0].focusCount, 1);
  click(f.icons[1]);
  f.overlay.handlers.click({ target: f.overlay });
  assert.equal(f.overlay.hidden, true);
  assert.equal(f.icons[1].focusCount, 1);
});

test('existing language buttons update an open dialog for TH and EN+TH without another selector', () => {
  state.setup.language = 'en';
  const f = fixture();
  renderExamVersionsScreen(f.root, cc, () => {}, () => {});
  click(f.icons[1]);
  click(f.langButtons[1]);
  assert.equal(state.setup.language, 'th');
  assert.equal(f.overlay.hidden, false);
  assert.match(f.content.innerHTML, /lang="th"/);
  assert.match(f.content.innerHTML, /1 กันยายน 2026/);
  assert.doesNotMatch(f.content.innerHTML, /lang="en"/);
  click(f.langButtons[2]);
  assert.equal(state.setup.language, 'both');
  assert.match(f.content.innerHTML, /lang="en"/);
  assert.match(f.content.innerHTML, /lang="th"/);
  assert.match(f.content.innerHTML, /Question Bank Status: Coming Soon/);
  assert.match(f.content.innerHTML, /สถานะคลังคำถาม: เร็ว ๆ นี้/);
  assert.doesNotMatch(f.content.innerHTML, /class="lang-btn/);
  click(f.close);
});

test('question banks, core logic, other screens, shared CSS and earlier user changes keep their hashes', () => {
  const baseline = JSON.parse(fs.readFileSync(new URL('../docs/verification/exam-version-info-before.json', import.meta.url), 'utf8').replace(/^\uFEFF/, ''));
  for (const [path, hash] of Object.entries(baseline.files)) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../' + path, import.meta.url))).digest('hex').toUpperCase(), hash, path);
  }
});

test('an info dialog cannot lock page scrolling while an earlier version selection is navigating', async () => {
  state.setup.language = 'en';
  const f = fixture();
  let finishSelection;
  globalThis.document = { body: { style: { overflow: 'auto' } } };
  renderExamVersionsScreen(f.root, cc, () => new Promise(resolve => { finishSelection = resolve; }), () => {});
  try {
    const pending = click(f.select);
    click(f.icons[0]);
    assert.equal(f.overlay.hidden, true);
    assert.equal(document.body.style.overflow, 'auto');
    finishSelection();
    await pending;
    click(f.icons[0]);
    assert.equal(f.overlay.hidden, false);
    click(f.close);
  } finally {
    finishSelection?.();
    delete globalThis.document;
  }
});

test('both outlines render all three content-language modes with their correct information', () => {
  for (const language of ['en', 'th', 'both']) {
    for (const [index, expectedEnglish, expectedThai] of [
      [0, 'previous exam outline', 'โครงร่างข้อสอบฉบับก่อนหน้า'],
      [1, 'AI service accounts', 'บัญชีบริการ AI']
    ]) {
      state.setup.language = language;
      const f = fixture();
      renderExamVersionsScreen(f.root, cc, () => {}, () => {});
      click(f.icons[index]);
      if (language !== 'th') assert.ok(f.content.innerHTML.includes(expectedEnglish));
      if (language !== 'en') assert.ok(f.content.innerHTML.includes(expectedThai));
      if (language === 'th') assert.doesNotMatch(f.content.innerHTML, /lang="en"/);
      if (language === 'en') assert.doesNotMatch(f.content.innerHTML, /lang="th"/);
      click(f.close);
    }
  }
});
