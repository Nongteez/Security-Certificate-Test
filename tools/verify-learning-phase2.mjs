import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';
import { state, selectLearningScreen } from '../js/core/state.js';
import { createProgressStore, visitSlide, completeReading } from '../js/core/learning-progress.js';
import { resolveObjectiveLearningState } from '../js/core/learning-course.js';
import { renderLearningRoute, disposeLearningRoute } from '../js/ui/learning/routes.js';
const infoAPI = await import('../js/ui/learning/lesson-info.js').catch(() => ({}));
const catalog = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url)));
const lesson = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json', import.meta.url)));
const text = node => [node.textContent || '', ...node.children.map(text)].join(' ');
function harness({ language = 'both', records = {}, loadLesson = async () => lesson, routeCatalog = catalog } = {}) {
  const doc = new TestDocument(), root = doc.createElement('div'); doc.body.append(root);
  const map = new Map([['sec_cert_learning_progress_v1', JSON.stringify({ schemaVersion: 1, lessons: records })], ['sec_cert_active_session_v1', 'protected-quiz']]);
  const store = createProgressStore({ getItem: k => map.get(k), setItem: (k, v) => map.set(k, v) });
  let active;
  state.setup.language = language; state.learning = { domainId: null, objectiveId: null, lessonId: null, slideId: null };
  const render = () => { disposeLearningRoute(); active = renderLearningRoute(root, render, { loadCatalog: async () => routeCatalog, loadLesson, progressStore: store, lessonCache: new Map() }); };
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
  // This is deliberately an empty-domain fixture, independent of live publication growth.
  const routeCatalog = structuredClone(catalog);
  for (const objective of routeCatalog.domains.find(d => d.id === 2).objectives) {
    objective.status = 'coming-soon'; objective.lessons = []; objective.relatedLessonIds = [];
  }
  const h = harness({ routeCatalog, loadLesson: async () => { throw Error('offline'); } }); try {
    await h.open('learning-domain', { domainId: 2 }); assert.equal(h.root.querySelectorAll('.learning-objective').length, 4); assert.equal(h.root.querySelectorAll('[data-lesson-id]').length, 0);
    assert.match(h.text(), /Coming Soon/);
    await h.open('learning-domain', { domainId: 1 }); assert.equal(h.root.querySelectorAll('[data-lesson-id]').length, 0); assert.match(h.text(), /could not be checked/i);
  } finally { h.destroy(); }
});
test('Lesson Info preserves outcomes and sources, closes with Escape and restores focus without progress writes', () => {
  assert.equal(typeof infoAPI.renderLessonInfo, 'function', 'optional metadata panel replaces mandatory launch screen');
  const doc = new TestDocument(), root = doc.createElement('div'), opener = doc.createElement('button'); doc.body.append(root); root.append(opener); opener.focus();
  const panel = infoAPI.renderLessonInfo(root, { lesson, language: 'both' }); const dialog = root.querySelector('[role="dialog"]');
  assert.ok(dialog); assert.match(text(dialog), /What you'll learn/); assert.match(text(dialog), /Sources/); assert.match(text(dialog), /NIST/);
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
    const analysis = h.root.querySelector('[data-action="case-analysis"]'); assert.equal(/[\u0e00-\u0e7f]/.test(text(analysis)), false);
    const choice = h.root.querySelector('[data-option-key]'); fire(choice, 'click'); assert.equal(choice.getAttribute('aria-pressed'), 'true');
    fire(h.root.querySelector('[data-action="lesson-info"]'), 'click'); fire(h.root.querySelector('[data-action="close-info"]'), 'click');
    assert.equal(h.root.querySelector('[data-option-key]'), choice); assert.equal(choice.getAttribute('aria-pressed'), 'true');
  } finally { h.destroy(); }
});
test('availability refresh preserves keyboard focus and current page scroll', async () => {
  let resolveLesson; const h = harness({ loadLesson: async (_catalog, id) => {
    if (id !== lesson.id) return JSON.parse(fs.readFileSync(new URL(`../content/isc2-cc-2026/learning/published/lessons/${id}.json`, import.meta.url), 'utf8'));
    return new Promise(resolve => { resolveLesson = resolve; });
  } });
  const scrolls = []; h.doc.defaultView = { scrollY: 0, scrollTo: ({ top }) => { h.doc.defaultView.scrollY = top; scrolls.push(top); } };
  try {
    const pending = h.open('learning-domain', { domainId: 1 }); await Promise.resolve(); await Promise.resolve();
    const back = h.root.querySelector('#btn-domain-back'); assert.ok(back); back.focus(); h.doc.defaultView.scrollY = 640;
    resolveLesson(lesson); await pending;
    assert.equal(h.doc.activeElement.id, 'btn-domain-back'); assert.equal(h.doc.defaultView.scrollY, 640);
  } finally { h.destroy(); }
});
test('Domain cards are fully clickable, keyboard-accessible via Enter, contain no Explore Domain link, and navigate all five domains', async () => {
  const h = harness();
  try {
    await h.open('learning-center');
    assert.equal(h.root.querySelectorAll('.learning-domain-link').length, 0);
    assert.doesNotMatch(h.text(), /Explore Domain →/);
    assert.equal(h.root.querySelectorAll('.learning-coverage-note').length, 0);
    assert.doesNotMatch(h.text(), /More lessons are being prepared/);
    const cards = h.root.querySelectorAll('.learning-domain-card');
    assert.equal(cards.length, 5);
    for (const [index, card] of cards.entries()) {
      const domainId = String(index + 1);
      assert.equal(card.getAttribute('data-domain-id'), domainId);
      assert.equal(card.getAttribute('role'), 'button');
      assert.equal(card.tabIndex, 0);
      assert.match(card.getAttribute('aria-label'), new RegExp(`Domain ${domainId}:`));
      assert.equal(card.querySelectorAll('button, a').length, 0);
    }
    const card2 = h.root.querySelector('[data-domain-id="2"]');
    card2.focus();
    fire(card2, 'keydown', { key: 'Enter' });
    await h.settle();
    assert.equal(state.screen, 'learning-domain');
    assert.equal(state.learning.domainId, 2);

    await h.open('learning-center');
    const card5 = h.root.querySelector('[data-domain-id="5"]');
    fire(card5, 'click');
    await h.settle();
    assert.equal(state.screen, 'learning-domain');
    assert.equal(state.learning.domainId, 5);
  } finally { h.destroy(); }
});
test('Learning Center Back button visually matches Version Selection with btn btn-secondary btn-back-home and navigates to versions', async () => {
  const h = harness();
  try {
    await h.open('learning-center');
    const backBtn = h.root.querySelector('#btn-learning-back');
    assert.ok(backBtn);
    assert.equal(backBtn.className.includes('btn'), true);
    assert.equal(backBtn.className.includes('btn-secondary'), true);
    assert.equal(backBtn.className.includes('btn-back-home'), true);
    assert.match(text(backBtn), /← Back to Versions/);
    fire(backBtn, 'click');
    assert.equal(state.screen, 'exam-versions');
  } finally { h.destroy(); }
});
test('Learning Center handles all four expected states without completed-lesson placeholder', async () => {
  // State 1: No lessons started -> Domain cards only, no continue section, no placeholder
  const h1 = harness();
  try {
    await h1.open('learning-center');
    assert.equal(h1.root.querySelectorAll('.learning-continue').length, 0);
    assert.equal(h1.root.querySelectorAll('.learning-start-intro').length, 0);
    assert.doesNotMatch(h1.text(), /Ready for another look/i);
    assert.doesNotMatch(h1.text(), /completed all currently available lessons/i);
    assert.doesNotMatch(h1.text(), /Your learning path starts here/i);
    assert.equal(h1.root.querySelectorAll('.learning-domain-card').length, 5);
    assert.match(h1.text(), /Explore Domains/);
  } finally { h1.destroy(); }

  // State 2: Unfinished lesson exists -> Continue Learning with Resume action
  const inProgressRecord = visitSlide(lesson, null, 'slide-04-integrity', 'en');
  const h2 = harness({ records: { [lesson.id]: inProgressRecord } });
  try {
    await h2.open('learning-center');
    assert.equal(h2.root.querySelectorAll('.learning-continue').length, 1);
    assert.equal(h2.root.querySelectorAll('.learning-start-intro').length, 0);
    assert.doesNotMatch(h2.text(), /Ready for another look/i);
    const resumeBtn = h2.root.querySelector('[data-action="continue-learning"]');
    assert.ok(resumeBtn);
    assert.match(text(resumeBtn), /Resume Lesson →/);
    fire(resumeBtn, 'click');
    await h2.settle();
    assert.equal(state.screen, 'learning-viewer');
    assert.equal(state.learning.slideId, 'slide-04-integrity');
  } finally { h2.destroy(); }

  // State 3: All available lessons completed -> Domain cards only, accurate completion counts
  let completedRecord = null;
  for (const s of lesson.slides) completedRecord = visitSlide(lesson, completedRecord, s.id, 'en');
  completedRecord = completeReading(lesson, completedRecord);
  assert.equal(completedRecord.status, 'completed');

  const h3 = harness({ records: { [lesson.id]: completedRecord } });
  try {
    await h3.open('learning-center');
    assert.equal(h3.root.querySelectorAll('.learning-continue').length, 0);
    assert.equal(h3.root.querySelectorAll('.learning-start-intro').length, 0);
    assert.doesNotMatch(h3.text(), /Ready for another look/i);
    assert.doesNotMatch(h3.text(), /completed all currently available lessons/i);
    assert.doesNotMatch(h3.text(), /Your learning path starts here/i);
    assert.equal(h3.root.querySelectorAll('.learning-domain-card').length, 5);

    // Accurate completion counts on heading, while cards have no status/completion text
    const heading = h3.root.querySelector('.learning-section-heading');
    assert.match(text(heading), /1 of 1 available lessons completed/);
    const d1Card = h3.root.querySelector('[data-domain-id="1"]');
    assert.doesNotMatch(text(d1Card), /available lessons completed/);
    assert.doesNotMatch(text(d1Card), /lesson available/);
    assert.doesNotMatch(text(d1Card), /Coming Soon/);
    assert.match(text(d1Card), /Security Principles/);
    assert.match(text(d1Card), /24% exam weight/);

    // Can review completed lesson via Domain Overview
    fire(d1Card, 'click');
    await h3.settle();
    assert.equal(state.screen, 'learning-domain');
    const reviewBtn = h3.root.querySelector(`[data-lesson-id="${lesson.id}"]`);
    assert.ok(reviewBtn);
    assert.match(text(reviewBtn), /Start Learning →/);

    // State 4: Completed lesson reviewed again -> preserve completed status and no continue panel
    fire(reviewBtn, 'click');
    await h3.settle();
    assert.equal(state.screen, 'learning-viewer');
    assert.equal(h3.store.read(lesson).status, 'completed');

    // Return to Learning Center
    await h3.open('learning-center');
    assert.equal(h3.root.querySelectorAll('.learning-continue').length, 0);
    assert.doesNotMatch(h3.text(), /Ready for another look/i);
    assert.match(text(h3.root.querySelector('.learning-section-heading')), /1 of 1 available lessons completed/);
  } finally { h3.destroy(); }
});

test('Learning Center Domain cards display only essential metadata and no availability/completion status text', async () => {
  const h = harness();
  try {
    await h.open('learning-center');
    const cards = h.root.querySelectorAll('.learning-domain-card');
    assert.equal(cards.length, 5);
    for (const [index, card] of cards.entries()) {
      const domainId = index + 1;
      const cardText = text(card);
      // Essential elements must be present with Domain 1-5 label
      assert.equal(card.querySelector('.learning-domain-index').textContent, `Domain ${domainId}`);
      assert.match(cardText, /exam weight/);
      assert.ok(card.querySelector('.learning-domain-index'));
      assert.ok(card.querySelector('.learning-weight'));
      assert.ok(card.querySelector('h3'));
      assert.ok(card.querySelector('.learning-domain-description'));

      // Status text must be completely absent from cards
      assert.doesNotMatch(cardText, /lesson available/i);
      assert.doesNotMatch(cardText, /lessons available/i);
      assert.doesNotMatch(cardText, /available lessons completed/i);
      assert.doesNotMatch(cardText, /Coming Soon/i);
      assert.doesNotMatch(cardText, /Checking availability/i);
      assert.doesNotMatch(cardText, /could not be checked/i);
      assert.equal(card.querySelectorAll('.learning-course-status').length, 0);
      assert.equal(card.querySelectorAll('.learning-progress-label').length, 0);
    }
    const d3 = h.root.querySelector('[data-domain-id="3"]');
    assert.match(text(d3), /Identity and Access Management \(IAM\) Concepts/);
    assert.match(text(d3), /Explore identity life cycle management and the principles that govern logical access/);
    const d5 = h.root.querySelector('[data-domain-id="5"]');
    assert.match(text(d5), /Security Operations and Incident Response/);
    assert.match(text(d5), /Explore data security, security operations, incident response, asset protection, and testing/);
  } finally { h.destroy(); }
});

test('Learning Center Domain cards use compact horizontal landscape layout without aspect-ratio constraints', () => {
  const css = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
  const cardRuleMatch = css.match(/\.learning-course-screen \.learning-domain-card\s*\{([^}]+)\}/);
  assert.ok(cardRuleMatch, 'learning-domain-card CSS rule must exist');
  const cardCSS = cardRuleMatch[1];
  assert.equal(cardCSS.includes('aspect-ratio'), false, 'desktop card must not have aspect-ratio');
  assert.match(cardCSS, /min-height:\s*230px/, 'desktop min-height must be approximately 230px');
  assert.match(cardCSS, /display:\s*flex/);

  const tabletMatch = css.match(/@media\s*\(max-width:\s*1099px\)\s*\{([\s\S]+?)\n\}/);
  assert.ok(tabletMatch, 'tablet media query for domain card must exist');
  assert.match(tabletMatch[1], /\.learning-domain-card\s*\{[^}]*min-height:\s*200px/);
  assert.equal(tabletMatch[1].includes('aspect-ratio'), false, 'tablet card must not have aspect-ratio');

  const mobileMatch = css.match(/@media\s*\(max-width:\s*719px\)\s*\{([\s\S]+?)\n\}/);
  assert.ok(mobileMatch, 'mobile media query must exist');
  assert.match(mobileMatch[1], /\.learning-domain-card\s*\{[^}]*min-height:\s*0/);
  assert.equal(mobileMatch[1].includes('aspect-ratio'), false, 'mobile card must not have aspect-ratio');
});

test('Learning Center Domain cards feature soft blue glow hover and focus-visible styling', () => {
  const css = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');

  // Base transition includes border-color, background-color, box-shadow around 200-250ms
  const baseMatch = css.match(/\.learning-course-screen \.learning-domain-card\s*\{([^}]+)\}/);
  assert.ok(baseMatch, 'learning-domain-card rule must exist');
  assert.match(baseMatch[1], /transition:[^;]*box-shadow/);
  assert.match(baseMatch[1], /transition:[^;]*0\.2[0-5]s/);

  // Hover styling has bright blue border and soft blue outer glow box-shadow
  const hoverMatch = css.match(/\.learning-course-screen \.learning-domain-card:hover\s*\{([^}]+)\}/);
  assert.ok(hoverMatch, 'learning-domain-card:hover rule must exist');
  assert.match(hoverMatch[1], /box-shadow:[^;]*0\s+0\s+22px/);
  assert.match(hoverMatch[1], /border-color:\s*rgba\(/);
  assert.match(hoverMatch[1], /background:\s*var\(--panel-hover\)/);

  // Focus-visible styling has clear outline and matching glow
  const focusMatch = css.match(/\.learning-course-screen \.learning-domain-card:focus-visible\s*\{([^}]+)\}/);
  assert.ok(focusMatch, 'learning-domain-card:focus-visible rule must exist');
  assert.match(focusMatch[1], /outline:/);
  assert.match(focusMatch[1], /box-shadow:[^;]*0\s+0\s+22px/);

  // Prefers-reduced-motion is respected
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('Learning Slides screens (Center, Domain, Viewer) unify header with Version Selection and include Theme Toggle', async () => {
  const h = harness();
  try {
    // 1. Learning Center header
    await h.open('learning-center');
    const centerHeader = h.root.querySelector('.learning-course-nav');
    assert.ok(centerHeader, 'Learning Center header must exist');
    assert.match(centerHeader.className, /start-top-bar/);
    const centerActions = h.root.querySelector('.start-top-actions');
    assert.ok(centerActions, 'start-top-actions container must exist');
    const centerToggle = h.root.querySelector('#learning-theme-toggle');
    assert.ok(centerToggle, 'Learning Center theme toggle must exist');
    assert.match(centerToggle.className, /theme-toggle/);

    // 2. Domain Overview header
    await h.open('learning-domain', { domainId: 1 });
    const domainHeader = h.root.querySelector('.learning-course-nav');
    assert.ok(domainHeader, 'Domain Overview header must exist');
    assert.match(domainHeader.className, /start-top-bar/);
    const domainBack = h.root.querySelector('#btn-domain-back');
    assert.ok(domainBack, 'Domain back button must exist');
    assert.match(domainBack.className, /btn-back-home/);
    const domainToggle = h.root.querySelector('#domain-theme-toggle');
    assert.ok(domainToggle, 'Domain Overview theme toggle must exist');

    // 3. Presentation Viewer header
    await h.open('learning-viewer', { lessonId: 'lesson-d1-01-cia-triad', domainId: 1, objectiveId: '1.1' });
    const viewerHeader = h.root.querySelector('.learning-toolbar');
    assert.ok(viewerHeader, 'Viewer toolbar must exist');
    const viewerToggle = h.root.querySelector('#viewer-theme-toggle');
    assert.ok(viewerToggle, 'Viewer theme toggle must exist');
    const viewerActions = viewerHeader.querySelector('.start-top-actions');
    assert.ok(viewerActions, 'Viewer start-top-actions container must exist');

    // 4. CSS Shell alignment: max-width 1320px and padding 40px
    const css = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
    assert.match(css, /\.app:has\(>\s*\.learning-course-screen\)\s*\{[^}]*max-width:\s*1320px/);
    assert.match(css, /\.app:has\(>\s*\.learning-course-screen\)\s*\{[^}]*padding:\s*40px/);
  } finally {
    h.destroy();
  }
});

test('Domain Overview: official Objectives render in order, first available selected by default, radio semantics and Coming Soon for unavailable', async () => {
  const h = harness();
  try {
    await h.open('learning-domain', { domainId: 1 });
    const list = h.root.querySelector('.learning-objective-list');
    assert.ok(list, 'Objective list container must exist');
    assert.equal(list.getAttribute('role'), 'radiogroup');
    assert.match(list.getAttribute('aria-label'), /Security Principles Objectives/);

    const rows = h.root.querySelectorAll('.learning-objective-item');
    assert.equal(rows.length, 5, 'Must render exactly 5 official Domain 1 objectives');

    // 1. All official objectives appear in correct order
    const expectedCodes = ['1.1', '1.2', '1.3', '1.4', '1.5'];
    rows.forEach((row, i) => {
      assert.equal(row.getAttribute('data-objective-id'), expectedCodes[i]);
      assert.equal(row.getAttribute('role'), 'radio');
    });

    // 2. The first available Objective (1.1) is selected by default
    const row1 = rows[0];
    assert.ok(row1.classList.contains('is-available'));
    assert.ok(row1.classList.contains('is-selected'));
    assert.equal(row1.getAttribute('aria-checked'), 'true');
    assert.equal(row1.tabIndex, 0);

    // 3. This CIA-only loader fails identity validation for all published 1.2–1.5 lessons.
    for (let i = 1; i < 5; i++) {
      const row = rows[i];
      assert.ok(row.classList.contains('is-unavailable'), `Row ${expectedCodes[i]} must be marked unavailable`);
      assert.equal(row.classList.contains('is-selected'), false, `Row ${expectedCodes[i]} must not be selected`);
      assert.equal(row.getAttribute('aria-disabled'), 'true');
      assert.equal(row.getAttribute('aria-checked'), 'false');
      assert.equal(row.tabIndex, -1);
      const badge = row.querySelector('.objective-status-badge');
      assert.ok(badge, `Row ${expectedCodes[i]} must have status badge`);
      assert.equal(badge.textContent.trim(), 'Availability could not be checked');

      // Attempting to click an unavailable objective does not select it
      fire(row, 'click');
      assert.equal(row.getAttribute('aria-checked'), 'false');
      assert.equal(row1.getAttribute('aria-checked'), 'true');
    }
  } finally {
    h.destroy();
  }
});

test('Domain Overview: selecting an Objective does not immediately navigate, and bottom button navigates directly', async () => {
  const h = harness();
  try {
    await h.open('learning-domain', { domainId: 1 });
    assert.equal(state.screen, 'learning-domain');

    const row1 = h.root.querySelector('#learning-objective-1-1');
    assert.ok(row1);

    // Clicking an available objective keeps the user on Domain Overview (no immediate navigation)
    fire(row1, 'click');
    assert.equal(state.screen, 'learning-domain');

    // Bottom action button is enabled and has correct label and data attribute
    const startBtn = h.root.querySelector('#btn-start-learning');
    assert.ok(startBtn, 'Bottom action button must exist');
    assert.equal(startBtn.disabled, false);
    assert.match(text(startBtn), /Start Learning →/);
    assert.equal(startBtn.getAttribute('data-lesson-id'), 'lesson-d1-01-cia-triad');

    // Activating bottom button navigates directly to presentation viewer
    fire(startBtn, 'click');
    await h.settle();
    assert.equal(state.screen, 'learning-viewer');
    assert.equal(state.learning.lessonId, 'lesson-d1-01-cia-triad');
    assert.equal(state.learning.slideId, 'slide-01-orientation');
  } finally {
    h.destroy();
  }
});

test('Domain Overview: bottom button always displays Start Learning across not-started, in-progress, and completed states', async () => {
  // 1. Not started
  const h1 = harness();
  try {
    await h1.open('learning-domain', { domainId: 1 });
    const btn1 = h1.root.querySelector('#btn-start-learning');
    assert.ok(btn1);
    assert.match(text(btn1), /Start Learning →/);
    assert.doesNotMatch(text(btn1), /Resume Learning|Review Learning/);
  } finally {
    h1.destroy();
  }

  // 2. In progress: always displays 'Start Learning →' while resuming at the saved slide internally
  const inProgressRecord = visitSlide(lesson, null, 'slide-06-compound-impact', 'en');
  const h2 = harness({ records: { [lesson.id]: inProgressRecord } });
  try {
    await h2.open('learning-domain', { domainId: 1 });
    const btn2 = h2.root.querySelector('#btn-start-learning');
    assert.ok(btn2);
    assert.match(text(btn2), /Start Learning →/);
    assert.doesNotMatch(text(btn2), /Resume Learning/);

    // Resumes at the saved slide
    fire(btn2, 'click');
    await h2.settle();
    assert.equal(state.screen, 'learning-viewer');
    assert.equal(state.learning.slideId, 'slide-06-compound-impact');
  } finally {
    h2.destroy();
  }

  // 3. Completed: always displays 'Start Learning →' while allowing review without resetting completed status
  let completedRecord = null;
  for (const s of lesson.slides) completedRecord = visitSlide(lesson, completedRecord, s.id, 'en');
  completedRecord = completeReading(lesson, completedRecord);
  assert.equal(completedRecord.status, 'completed');
  const h3 = harness({ records: { [lesson.id]: completedRecord } });
  try {
    await h3.open('learning-domain', { domainId: 1 });
    const btn3 = h3.root.querySelector('#btn-start-learning');
    assert.ok(btn3);
    assert.match(text(btn3), /Start Learning →/);
    assert.doesNotMatch(text(btn3), /Review Learning/);

    // Review preserves completed status
    fire(btn3, 'click');
    await h3.settle();
    assert.equal(state.screen, 'learning-viewer');
    assert.equal(h3.store.read(lesson).status, 'completed');
  } finally {
    h3.destroy();
  }

  // 4. No available Objective selected (e.g. Domain 2 where all objectives are coming soon)
  const h4 = harness();
  try {
    await h4.open('learning-domain', { domainId: 2 });
    const btn4 = h4.root.querySelector('#btn-start-learning');
    assert.ok(btn4);
    assert.equal(btn4.disabled, true);
    assert.equal(btn4.getAttribute('aria-disabled'), 'true');
    assert.match(text(btn4), /Start Learning →/);
    assert.equal(btn4.hasAttribute('data-lesson-id'), false);
    assert.equal(h4.root.querySelectorAll('.is-selected').length, 0);
  } finally {
    h4.destroy();
  }
});

test('Domain Overview: multi-lesson objective resolution preserves independent progress and picks the correct lesson', () => {
  const dummyLesson = id => ({ id, domainId: 1, primaryObjectiveId: '1.1', objectiveIds: ['1.1'], slides: [{ id: 's1' }, { id: 's2' }] });
  const dummyEntry = (id, status, updatedAt = '2026-10-25T01:00:00Z') => ({
    summary: { id, domainId: 1, primaryObjectiveId: '1.1', objectiveIds: ['1.1'] },
    lesson: dummyLesson(id),
    availability: 'available',
    progress: { status, updatedAt, visitedSlideIds: status === 'not-started' ? [] : ['s1'], lastSlideId: 's1' }
  });

  // Scenario A: All lessons not started -> picks first in catalog order with Start Learning
  const objA = {
    id: '1.1',
    lessons: [dummyEntry('L1', 'not-started'), dummyEntry('L2', 'not-started'), dummyEntry('L3', 'not-started')]
  };
  const resA = resolveObjectiveLearningState(objA);
  assert.equal(resA.summary.id, 'L1');
  assert.equal(resA.intent, 'start');
  assert.equal(resA.buttonLabel, 'Start Learning →');
  assert.equal(resA.status, 'not-started');

  // Scenario B: L1 completed, L2 in-progress (01:00), L3 in-progress (02:00) -> picks most recently updated in-progress (L3) with Start Learning label
  const objB = {
    id: '1.1',
    lessons: [
      dummyEntry('L1', 'completed', '2026-10-25T00:30:00Z'),
      dummyEntry('L2', 'in-progress', '2026-10-25T01:00:00Z'),
      dummyEntry('L3', 'in-progress', '2026-10-25T02:00:00Z')
    ]
  };
  const resB = resolveObjectiveLearningState(objB);
  assert.equal(resB.summary.id, 'L3');
  assert.equal(resB.intent, 'resume');
  assert.equal(resB.buttonLabel, 'Start Learning →');
  assert.equal(resB.status, 'in-progress');

  // Scenario C: L1 completed, L2 not-started, L3 not-started -> picks first not-started (L2) with Start Learning label (since objective is in progress)
  const objC = {
    id: '1.1',
    lessons: [dummyEntry('L1', 'completed', '2026-10-25T00:30:00Z'), dummyEntry('L2', 'not-started'), dummyEntry('L3', 'not-started')]
  };
  const resC = resolveObjectiveLearningState(objC);
  assert.equal(resC.summary.id, 'L2');
  assert.equal(resC.intent, 'start');
  assert.equal(resC.buttonLabel, 'Start Learning →');
  assert.equal(resC.status, 'in-progress');

  // Scenario D: All lessons completed -> picks first in catalog order with Start Learning label
  const objD = {
    id: '1.1',
    lessons: [dummyEntry('L1', 'completed'), dummyEntry('L2', 'completed'), dummyEntry('L3', 'completed')]
  };
  const resD = resolveObjectiveLearningState(objD);
  assert.equal(resD.summary.id, 'L1');
  assert.equal(resD.intent, 'review');
  assert.equal(resD.buttonLabel, 'Start Learning →');
  assert.equal(resD.status, 'completed');

  // Scenario E: Empty or unavailable -> returns null
  assert.equal(resolveObjectiveLearningState({ id: '1.2', lessons: [] }), null);
  assert.equal(resolveObjectiveLearningState({ id: '1.2', lessons: [{ availability: 'coming-soon' }] }), null);
});

test('Domain Overview: keyboard navigation (ArrowDown, ArrowUp, Space, Enter) and focus restoration', async () => {
  const h = harness();
  try {
    await h.open('learning-domain', { domainId: 1 });
    const row1 = h.root.querySelector('#learning-objective-1-1');
    assert.ok(row1);

    // Space/Enter on row keeps selection and does not navigate
    fire(row1, 'keydown', { key: ' ' });
    assert.equal(state.screen, 'learning-domain');
    assert.equal(row1.getAttribute('aria-checked'), 'true');

    fire(row1, 'keydown', { key: 'Enter' });
    assert.equal(state.screen, 'learning-domain');
    assert.equal(row1.getAttribute('aria-checked'), 'true');

    // Arrow keys wrap around available items
    fire(row1, 'keydown', { key: 'ArrowDown' });
    assert.equal(row1.getAttribute('aria-checked'), 'true');

    // Launch presentation then return to verify focus lands on #btn-start-learning
    const startBtn = h.root.querySelector('#btn-start-learning');
    fire(startBtn, 'click');
    await h.settle();
    assert.equal(state.screen, 'learning-viewer');

    fire(h.root.querySelector('[data-action="back-domain"]'), 'click');
    await h.settle();
    assert.equal(state.screen, 'learning-domain');
    assert.equal(h.doc.activeElement.id, 'btn-start-learning');
    assert.equal(h.doc.activeElement.getAttribute('data-lesson-id'), 'lesson-d1-01-cia-triad');
  } finally {
    h.destroy();
  }
});

test('Domain Overview: EN, TH, and EN+TH content rendering and Theme styling compatibility', async () => {
  // 1. Language modes
  const hEn = harness({ language: 'en' });
  try {
    await hEn.open('learning-domain', { domainId: 1 });
    const row1 = hEn.root.querySelector('#learning-objective-1-1');
    assert.match(text(row1), /Understand cybersecurity concepts/);
    assert.equal(/[\u0e00-\u0e7f]/.test(text(row1)), false, 'EN mode must contain zero Thai characters');
  } finally {
    hEn.destroy();
  }

  const hTh = harness({ language: 'th' });
  try {
    await hTh.open('learning-domain', { domainId: 1 });
    const row1 = hTh.root.querySelector('#learning-objective-1-1');
    assert.match(text(row1), /เข้าใจแนวคิดด้านความมั่นคงปลอดภัยไซเบอร์/);
    // UI chrome stays English
    assert.match(text(hTh.root.querySelector('#btn-domain-back')), /Learning Center/);
    assert.match(text(hTh.root.querySelector('#btn-start-learning')), /Start Learning →/);
  } finally {
    hTh.destroy();
  }

  const hBoth = harness({ language: 'both' });
  try {
    await hBoth.open('learning-domain', { domainId: 1 });
    const row1 = hBoth.root.querySelector('#learning-objective-1-1');
    assert.match(text(row1), /Understand cybersecurity concepts/);
    assert.match(text(row1), /เข้าใจแนวคิดด้านความมั่นคงปลอดภัยไซเบอร์/);
  } finally {
    hBoth.destroy();
  }

  // 2. CSS theme styling rules
  const css = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
  assert.match(css, /\.learning-course-screen \.learning-objective-list/);
  assert.match(css, /\.learning-course-screen \.learning-objective-item\.is-selected/);
  assert.match(css, /html\[data-theme="light"\] \.learning-course-screen \.learning-objective-item\.is-selected/);
  assert.match(css, /\.learning-course-screen \.objective-radio-indicator/);
  assert.match(css, /\.learning-course-screen \.btn-start-learning/);
});

test('Task 72R: Lesson Info modal visual correction, What you\'ll learn, collapsed details, themed scrollbars', async () => {
  const h = harness();
  try {
    await h.open('learning-domain', { domainId: 1 });
    const infoBtn = h.root.querySelector('#btn-domain-lesson-info');
    assert.ok(infoBtn, 'Lightweight Lesson Info button must be present in Domain Overview');
    assert.equal(infoBtn.hidden, false);
    infoBtn.focus();

    // 1. Open Lesson Info modal from selected available Objective
    fire(infoBtn, 'click');
    await h.settle();

    const overlay = h.root.querySelector('.learning-info-overlay');
    assert.ok(overlay, 'Modal overlay must be present');
    const dialog = h.root.querySelector('[role="dialog"]');
    assert.ok(dialog, 'Centered modal panel with role="dialog" must be rendered');
    assert.ok(dialog.classList.contains('learning-info-panel'));
    assert.equal(dialog.getAttribute('aria-modal'), 'true');
    assert.equal(dialog.getAttribute('aria-labelledby'), 'learning-info-title');

    // Background interaction is blocked (inert on siblings)
    const bottomActions = h.root.querySelector('.learning-domain-bottom-actions');
    assert.equal(bottomActions.inert, true);
    assert.equal(h.root.querySelector('.learning-course-nav').inert, true);

    // 2. Header: Title 'Lesson Info' and single X close button (no redundant text Close button)
    const modalTitle = dialog.querySelector('#learning-info-title');
    assert.ok(modalTitle);
    assert.equal(modalTitle.textContent.trim(), 'Lesson Info');

    const closeBtn = dialog.querySelector('[data-action="close-info"]');
    assert.ok(closeBtn, 'Close X button must exist');
    assert.ok(closeBtn.classList.contains('learning-info-close-btn'));
    assert.equal(closeBtn.getAttribute('aria-label'), 'Close');
    assert.equal(closeBtn.textContent.trim(), '✕');
    // Ensure no redundant text-based close button
    const textCloseBtns = Array.from(dialog.querySelectorAll('button')).filter(b => b !== closeBtn && /Close/i.test(b.textContent));
    assert.equal(textCloseBtns.length, 0, 'Must not have redundant text-based Close buttons');

    // 3. Lesson Title with Objective identifier
    const objBadge = dialog.querySelector('.learning-info-obj-badge');
    assert.ok(objBadge);
    assert.match(text(objBadge), /OBJECTIVE 1\.1/);
    const lessonTitle = dialog.querySelector('.learning-info-lesson-title');
    assert.ok(lessonTitle);
    assert.match(text(lessonTitle), /The CIA Triad/);

    // 4. Main Section: "What you'll learn" with original learning outcomes
    const outcomesSection = dialog.querySelector('.learning-info-outcomes-section');
    assert.ok(outcomesSection, "Must render What you'll learn section");
    assert.match(text(outcomesSection), /What you'll learn/);
    const outcomeItems = outcomesSection.querySelectorAll('li');
    assert.equal(outcomeItems.length, 3, 'Must preserve all original outcomes without alteration');
    assert.match(text(outcomeItems[0]), /Distinguish clearly between Confidentiality, Integrity, and Availability/);

    // 5. Collapsible Details: "References & lesson details" (collapsed by default)
    const details = dialog.querySelector('.learning-info-details');
    assert.ok(details, 'Must render collapsible details element');
    assert.equal(details.hasAttribute('open'), false, 'Details must be COLLAPSED by default');
    assert.equal(details.open, false);

    const summary = details.querySelector('.learning-info-details-summary');
    assert.ok(summary, 'Must render summary trigger');
    assert.match(text(summary), /References & lesson details/);

    // Focus trap: Shift+Tab on first element (closeBtn) wraps to last element (summary when collapsed)
    closeBtn.focus();
    fire(dialog, 'keydown', { key: 'Tab', shiftKey: true });
    assert.equal(h.doc.activeElement, summary);

    // Tab on last element (summary) wraps to first element (closeBtn)
    summary.focus();
    fire(dialog, 'keydown', { key: 'Tab' });
    assert.equal(h.doc.activeElement, closeBtn);

    // 6. Expanding reveals prerequisites, sources with badges/links, and review metadata
    fire(summary, 'click');
    assert.equal(details.hasAttribute('open'), true, 'Details must be expanded after click');
    assert.equal(details.open, true);

    assert.match(text(details), /Before you begin/);
    assert.match(text(details), /No prerequisites required/);
    assert.match(text(details), /Sources/);
    assert.match(text(details), /NIST FIPS PUB 199/);
    assert.match(text(details), /Technical Standard/);

    const sourceLinks = details.querySelectorAll('.learning-info-source-link');
    assert.ok(sourceLinks.length > 0, 'Must render source links');
    sourceLinks.forEach(link => {
      assert.match(link.href, /^https:\/\//);
      assert.equal(link.getAttribute('target'), '_blank');
      assert.equal(link.getAttribute('rel'), 'noopener noreferrer');
    });

    // When expanded, last control inside details receives focus on reverse wrap from closeBtn
    const lastControl = sourceLinks[sourceLinks.length - 1];
    closeBtn.focus();
    fire(dialog, 'keydown', { key: 'Tab', shiftKey: true });
    assert.equal(h.doc.activeElement, lastControl);

    // Collapsing hides details again without deleting data
    fire(summary, 'click');
    assert.equal(details.hasAttribute('open'), false, 'Details must be collapsed after second click');
    assert.equal(details.open, false);
    assert.ok(details.querySelector('.learning-info-sources-list'), 'Data remains intact after collapse');

    // 7. Full slide outline is NOT rendered in modal UI
    assert.equal(dialog.querySelector('.learning-info-outline'), null);
    assert.doesNotMatch(text(dialog), /Slide outline/i);

    // 8. Objective selection and Start Learning label remain unchanged
    const selRow = h.root.querySelector('#learning-objective-1-1');
    assert.ok(selRow.classList.contains('is-selected'));
    assert.equal(selRow.getAttribute('aria-checked'), 'true');
    const startBtn = h.root.querySelector('#btn-start-learning');
    assert.match(text(startBtn), /Start Learning →/);

    // 9. Close via X button and focus restoration
    fire(closeBtn, 'click');
    assert.equal(h.root.querySelector('.learning-info-overlay'), null);
    assert.equal(bottomActions.inert, false);
    assert.equal(h.doc.activeElement, infoBtn);

    // 10. Reopen and close via Escape
    fire(infoBtn, 'click');
    assert.ok(h.root.querySelector('.learning-info-panel'));
    fire(h.root.querySelector('.learning-info-panel'), 'keydown', { key: 'Escape' });
    assert.equal(h.root.querySelector('.learning-info-overlay'), null);
    assert.equal(h.doc.activeElement, infoBtn);

    // 11. Reopen and close via Backdrop click
    fire(infoBtn, 'click');
    const newOverlay = h.root.querySelector('.learning-info-overlay');
    assert.ok(newOverlay);
    fire(newOverlay, 'click', { target: newOverlay });
    assert.equal(h.root.querySelector('.learning-info-overlay'), null);
    assert.equal(h.doc.activeElement, infoBtn);

    // 12. CSS styling checks: desktop width target (940px), themed scrollbar, and themes
    const css = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
    assert.match(css, /\.learning-screen \.learning-info-overlay\s*\{[^}]*display:\s*flex/);
    assert.match(css, /\.learning-screen \.learning-info-overlay\s*\{[^}]*align-items:\s*center/);
    assert.match(css, /\.learning-screen \.learning-info-overlay\s*\{[^}]*justify-content:\s*center/);
    assert.match(css, /\.learning-screen \.learning-info-panel\s*\{[^}]*width:\s*min\(940px,\s*calc\(100vw - 64px\)\)/);
    assert.match(css, /\.learning-screen \.learning-info-panel\s*\{[^}]*scrollbar-width:\s*thin/);
    assert.match(css, /\.learning-screen \.learning-info-panel::-webkit-scrollbar/);
    assert.match(css, /html\[data-theme="light"\] \.learning-screen \.learning-info-panel/);
  } finally {
    h.destroy();
  }
});
