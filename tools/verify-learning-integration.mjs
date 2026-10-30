import assert from 'node:assert/strict'; import { test } from 'node:test';
import fs from 'node:fs'; import versions, { resolveExamVersion } from '../data/exam-versions.js';
import { state } from '../js/core/state.js'; import { renderExamVersionsScreen } from '../js/ui/screen-versions.js'; import certs from '../data/certifications.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';
import { renderLearningDomain } from '../js/ui/screen-learning-domain.js';
import { buildLearningCourseModel } from '../js/core/learning-course.js';
const screens = await import('../js/ui/screen-learning-center.js').catch(() => ({}));
test('fourth card preserves original order, is English-only and cannot route as an exam or bypass Coming Soon', async () => {
  assert.deepEqual(versions.map(v => v.id), ['2026', 'next-bank', 'isc2-cc-vocabulary', 'isc2-cc-learning-slides', 'isc2-cc-reading-notes']); assert.equal(resolveExamVersion('isc2-cc', 'isc2-cc-learning-slides'), null);
  const handlers = {}, forged = { getAttribute: () => 'isc2-cc-learning-slides', addEventListener: (type, fn) => { handlers[type] = fn; } };
  const root = { innerHTML: '', querySelector: () => null, querySelectorAll: selector => selector === '.btn-select-version' ? [forged] : [] };
  state.setup.language = 'both'; let called = false; renderExamVersionsScreen(root, certs[0], () => { called = true; }, () => {}); await handlers.click(); assert.equal(called, false);
  assert.match(root.innerHTML, /Explore cybersecurity concepts/); assert.doesNotMatch(root.innerHTML, /สำรวจแนวคิด/); assert.match(root.innerHTML, /Coming Soon/); assert.equal((root.innerHTML.match(/<article /g) || []).length, 5);
});
test('Learning Center shows five navigable Domain cards without embedded objectives or fake lesson actions', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root); const catalog = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url)));
  assert.equal(typeof screens.renderLearningCenter, 'function', 'Learning Center must be implemented');
  let selectedDomain;
  const dispose = screens.renderLearningCenter(root, { catalog, language: 'both', onDomain: id => { selectedDomain = id; } });
  assert.equal(root.querySelectorAll('.learning-domain-card').length, 5); assert.equal(root.querySelectorAll('.learning-objective').length, 0); assert.equal(root.querySelectorAll('[data-lesson-id]').length, 0);
  fire(root.querySelector('[data-domain-id="5"]'), 'click'); assert.equal(selectedDomain, 5); dispose();
});
test('renderer has protected learning transitions without altering the current quiz', async () => {
  const { selectLearningScreen } = await import('../js/core/state.js'); assert.equal(typeof selectLearningScreen, 'function'); const quiz = state.quiz;
  assert.equal(selectLearningScreen('learning-center'), true); assert.equal(state.screen, 'learning-center'); assert.equal(state.quiz, quiz); assert.equal(selectLearningScreen('quiz'), false);
});
test('original cards render immediately while the independent learning availability check is pending', async () => {
  const { renderApp } = await import('../js/ui/renderer.js');
  const oldDocument = globalThis.document, oldFetch = globalThis.fetch, oldScreen = state.screen, oldCert = state.selectedCertification;
  const root = { innerHTML: '', querySelector: () => null, querySelectorAll: () => [] };
  let release, firstRequest = true;
  globalThis.fetch = url => {
    const response = { ok: true, json: async () => JSON.parse(fs.readFileSync(url, 'utf8')) };
    if (!firstRequest) return Promise.resolve(response);
    firstRequest = false; return new Promise(resolve => { release = () => resolve(response); });
  };
  globalThis.document = { getElementById: () => root }; state.selectedCertification = certs[0]; state.screen = 'exam-versions';
  const pending = renderApp();
  try { await Promise.resolve(); assert.match(root.innerHTML, /ISC2 CC — Pre-2026 Exam Outline/); assert.match(root.innerHTML, /ISC2 CC — Exam Vocabulary/); }
  finally { release?.(); await pending; globalThis.document = oldDocument; globalThis.fetch = oldFetch; state.screen = oldScreen; state.selectedCertification = oldCert; }
});
test('when published learning is available, fourth card activates and routes to Learning Center', async () => {
  let selectedId = null;
  const handlers = {};
  const fakeButton = {
    getAttribute: (attr) => attr === 'data-version-id' ? 'isc2-cc-learning-slides' : null,
    addEventListener: (type, fn) => { handlers[type] = fn; }
  };
  const root = {
    innerHTML: '',
    querySelector: () => null,
    querySelectorAll: (selector) => selector === '.btn-select-version' ? [fakeButton] : []
  };
  state.setup.language = 'both';
  renderExamVersionsScreen(root, certs[0], (id) => { selectedId = id; }, () => {}, '', null, true);
  assert.match(root.innerHTML, /Available/);
  assert.doesNotMatch(root.innerHTML, /พร้อมเรียน/);
  assert.match(root.innerHTML, /Learning →/);
  assert.doesNotMatch(root.innerHTML, /เปิดศูนย์การเรียนรู้ →/);
  assert.equal(root.innerHTML.includes('disabled'), false);
  await handlers.click();
  assert.equal(selectedId, 'isc2-cc-learning-slides');
});
test('dedicated Domain Overview exposes the validated CIA lesson with a direct Start action', () => {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root);
  const catalog = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url)));
  const lesson = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json', import.meta.url)));
  let launchedLesson = null;
  const course = buildLearningCourseModel({ catalog, lessonsById: new Map([[lesson.id, lesson]]), availabilityById: new Map([[lesson.id, 'available']]) });
  const dispose = renderLearningDomain(root, {
    domain: course.domains[0],
    language: 'both',
    onLaunch: (id, intent) => { launchedLesson = { id, intent }; }
  });
  const buttons = root.querySelectorAll('[data-lesson-id="lesson-d1-01-cia-triad"]');
  assert.equal(buttons.length, 1);
  fire(buttons[0], 'click');
  assert.deepEqual(launchedLesson, { id: 'lesson-d1-01-cia-triad', intent: 'start' });
  dispose();
});
