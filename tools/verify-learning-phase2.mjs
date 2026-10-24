import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';
import { state, selectLearningScreen } from '../js/core/state.js';
import { createProgressStore, visitSlide } from '../js/core/learning-progress.js';
import { renderLearningRoute, disposeLearningRoute } from '../js/ui/learning/routes.js';
const infoAPI = await import('../js/ui/learning/lesson-info.js').catch(() => ({}));
const catalog = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url)));
const lesson = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json', import.meta.url)));
const text = node => [node.textContent || '', ...node.children.map(text)].join(' ');
function harness({ language = 'both', records = {}, loadLesson = async () => lesson } = {}) {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root);
  const map = new Map([['sec_cert_learning_progress_v1', JSON.stringify({ schemaVersion: 1, lessons: records })], ['sec_cert_active_session_v1', 'protected-quiz']]);
  const store = createProgressStore({ getItem: k => map.get(k), setItem: (k, v) => map.set(k, v) });
  let active;
  state.setup.language = language; state.learning = { domainId: null, objectiveId: null, lessonId: null, slideId: null };
  const render = () => { disposeLearningRoute(); active = renderLearningRoute(root, render, { loadCatalog: async () => catalog, loadLesson, progressStore: store, lessonCache: new Map() }); };
  return { doc, root, map, store, async open(screen, selection = {}) { selectLearningScreen(screen, selection); render(); assert.ok(active.ready, 'route exposes completion of its asynchronous mount'); await active.ready; }, async settle() { await active.ready; }, destroy() { disposeLearningRoute(); }, text: () => text(root) };
}
test('domain route is learning-only and leaves active quiz identity untouched', () => {
  const quiz = state.quiz; assert.equal(selectLearningScreen('learning-domain', { domainId: 1 }), true); assert.equal(state.screen, 'learning-domain'); assert.equal(state.quiz, quiz);
  assert.equal(selectLearningScreen('quiz'), false);
});
test('Center cards open a dedicated Domain and Start opens first slide directly, then Back restores lesson focus', async () => {
  const h = harness(); try {
    await h.open('learning-center'); assert.equal(h.root.querySelectorAll('.learning-domain-card').length, 5); assert.equal(h.root.querySelectorAll('details').length, 0);
    assert.equal(/[\u0e00-\u0e7f]/.test(h.text()), false);
    fire(h.root.querySelector('[data-domain-id="1"]'), 'click'); await h.settle(); assert.equal(state.screen, 'learning-domain');
    assert.equal(h.root.querySelectorAll('.learning-objective').length, 5);
    const start = h.root.querySelector('[data-lesson-id="lesson-d1-01-cia-triad"]'); assert.ok(start); fire(start, 'click'); await h.settle();
    assert.equal(state.screen, 'learning-viewer'); assert.equal(state.learning.slideId, 'slide-01-orientation');
    fire(h.root.querySelector('[data-action="back-domain"]'), 'click'); await h.settle(); assert.equal(state.screen, 'learning-domain');
    assert.equal(h.doc.activeElement.getAttribute('data-lesson-id'), lesson.id); assert.equal(h.map.get('sec_cert_active_session_v1'), 'protected-quiz');
  } finally { h.destroy(); }
});
test('Continue Learning and legacy Lesson Contents route resume the saved slide without a second launch', async () => {
  const p = visitSlide(lesson, null, 'slide-06-compound-impact', 'th');
  const h = harness({ records: { [lesson.id]: p } }); try {
    await h.open('learning-center'); const resume = h.root.querySelector('[data-action="continue-learning"]'); assert.ok(resume);
    fire(resume, 'click'); await h.settle(); assert.equal(state.screen, 'learning-viewer'); assert.equal(state.learning.slideId, 'slide-06-compound-impact');
    await h.open('learning-lesson', { lessonId: lesson.id }); assert.equal(state.screen, 'learning-viewer'); assert.equal(state.learning.slideId, 'slide-06-compound-impact');
    assert.equal(h.store.read(lesson).visitedSlideIds.length, 1);
  } finally { h.destroy(); }
});
test('empty Domain has official objectives and no invented Start actions; failed lesson offers no resume', async () => {
  const h = harness({ loadLesson: async () => { throw Error('offline'); } }); try {
    await h.open('learning-domain', { domainId: 2 }); assert.equal(h.root.querySelectorAll('.learning-objective').length, 4); assert.equal(h.root.querySelectorAll('[data-lesson-id]').length, 0);
    assert.match(h.text(), /Coming Soon/);
    await h.open('learning-domain', { domainId: 1 }); assert.equal(h.root.querySelectorAll('[data-lesson-id]').length, 0); assert.match(h.text(), /could not be checked/i);
  } finally { h.destroy(); }
});
test('Lesson Info preserves outcomes and sources, closes with Escape and restores focus without progress writes', () => {
  assert.equal(typeof infoAPI.renderLessonInfo, 'function', 'optional metadata panel replaces mandatory launch screen');
  const doc = new TestDocument(), root = doc.createElement('div'), opener = doc.createElement('button'); doc.body.append(root); root.append(opener); opener.focus();
  const panel = infoAPI.renderLessonInfo(root, { lesson, language: 'both' }); const dialog = root.querySelector('[role="dialog"]');
  assert.ok(dialog); assert.match(text(dialog), /Learning outcomes/); assert.match(text(dialog), /Sources/); assert.match(text(dialog), /NIST/);
  assert.ok(dialog.querySelector('[lang="th"]')); assert.equal(opener.inert, true);
  fire(dialog, 'keydown', { key: 'Escape' }); assert.equal(root.querySelector('[role="dialog"]'), null); assert.equal(doc.activeElement, opener); assert.equal(opener.inert, false); panel.destroy();
});
test('viewer chrome stays English in all modes and Info opens without visiting another slide', async () => {
  for (const language of ['en', 'th', 'both']) {
    const p = visitSlide(lesson, null, 'slide-04-integrity', language), h = harness({ language, records: { [lesson.id]: p } });
    try {
      await h.open('learning-viewer', { lessonId: lesson.id }); const before = h.store.read(lesson);
      assert.equal(/[\u0e00-\u0e7f]/.test(text(h.root.querySelector('.learning-toolbar'))), false);
      assert.equal(/[\u0e00-\u0e7f]/.test(text(h.root.querySelector('.learning-controls'))), false);
      fire(h.root.querySelector('[data-action="lesson-info"]'), 'click'); assert.ok(h.root.querySelector('[role="dialog"]'));
      assert.equal(h.store.read(lesson).lastSlideId, 'slide-04-integrity'); assert.deepEqual(h.store.read(lesson).visitedSlideIds, before.visitedSlideIds);
      fire(h.root.querySelector('[data-action="close-info"]'), 'click'); assert.equal(state.screen, 'learning-viewer');
    } finally { h.destroy(); }
  }
});
test('scenario control labels stay English and opening Info preserves a live selection', async () => {
  const h = harness({ language: 'th', records: { [lesson.id]: visitSlide(lesson, null, 'slide-07-scenario-reflection', 'th') } });
  try {
    await h.open('learning-viewer', { lessonId: lesson.id });
    const analysis = h.root.querySelector('.scenario-reveal-btn'); assert.equal(/[\u0e00-\u0e7f]/.test(text(analysis)), false);
    const choice = h.root.querySelector('[role="button"]'); fire(choice, 'click'); assert.equal(choice.getAttribute('aria-pressed'), 'true');
    fire(h.root.querySelector('[data-action="lesson-info"]'), 'click'); fire(h.root.querySelector('[data-action="close-info"]'), 'click');
    assert.equal(h.root.querySelector('[role="button"]'), choice); assert.equal(choice.getAttribute('aria-pressed'), 'true');
  } finally { h.destroy(); }
});
