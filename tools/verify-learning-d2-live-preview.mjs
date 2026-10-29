import fs from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { validateCatalog, validateLesson, publishedLessons } from '../js/core/learning-schema.js';
import { buildLearningCourseModel, resolveObjectiveLearningState } from '../js/core/learning-course.js';
import { createProgressStore, visitSlide } from '../js/core/learning-progress.js';
import { renderSlide } from '../js/ui/learning/renderers.js';
import { renderLessonInfo } from '../js/ui/learning/lesson-info.js';
import { mountLearningViewer } from '../js/ui/learning/viewer.js';
import { renderLearningRoute, disposeLearningRoute } from '../js/ui/learning/routes.js';
import { state, selectLearningScreen, updateSetup } from '../js/core/state.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';

const CATALOG_PATH = new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url);
const STAGED_L1_PATH = new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const PUBLISHED_L1_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const PUBLISHED_L2_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json', import.meta.url);
const INDEX_HTML_PATH = new URL('../index.html', import.meta.url);

const readJson = url => JSON.parse(fs.readFileSync(url, 'utf8'));
const nodeText = node => [node?.textContent || '', ...(node?.children || []).map(nodeText)].join(' ');

function createMemoryStorage() {
  const map = new Map();
  return {
    getItem: k => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => { map.set(k, String(v)); }
  };
}

function createDiskLoaders() {
  const loadCatalog = async () => readJson(CATALOG_PATH);
  const loadLesson = async (catalog, lessonId) => {
    const summary = publishedLessons(catalog).find(l => l.id === lessonId);
    if (!summary) throw new Error(`Unpublished lesson: ${lessonId}`);
    return readJson(new URL(`../content/isc2-cc-2026/learning/published/${summary.lessonPath}`, import.meta.url));
  };
  return { loadCatalog, loadLesson };
}

test('1. Catalog & published Lesson 1 validate cleanly, preserve staged Lesson 1 parity, and distinguish lesson availability from Domain 2 completion', () => {
  const catalog = readJson(CATALOG_PATH);
  const catCheck = validateCatalog(catalog);
  assert.equal(catCheck.valid, true, `Catalog invalid: ${catCheck.errors.join('; ')}`);

  const d2 = catalog.domains.find(d => d.id === 2);
  assert.ok(d2, 'Domain 2 must exist in catalog');
  assert.equal(d2.status, 'in-preparation', 'Domain 2 curriculum as a whole must remain in-preparation (not completed)');
  assert.deepEqual(d2.objectives.map(o => o.id), ['2.1', '2.2', '2.3', '2.4']);

  const [obj21, obj22, obj23, obj24] = d2.objectives;
  assert.equal(obj21.status, 'in-preparation');
  assert.equal(obj22.status, 'in-preparation', 'Objective 2.2 has Lesson 3 published and Lesson 4 coming-soon');
  assert.equal(obj23.status, 'coming-soon');
  assert.equal(obj24.status, 'coming-soon');
  assert.equal(obj22.lessons.length, 2);
  assert.equal(obj23.lessons.length, 0);
  assert.equal(obj24.lessons.length, 0);

  assert.equal(obj21.lessons.length, 2, 'Objective 2.1 should list Lesson 1 (published) and Lesson 2 (published)');
  const [l1Summary, l2Summary] = obj21.lessons;
  assert.equal(l1Summary.id, 'lesson-d2-01-grc-foundations');
  assert.equal(l1Summary.status, 'published');
  assert.equal(l1Summary.lessonPath, 'lessons/lesson-d2-01-grc-foundations.json');

  assert.equal(l2Summary.id, 'lesson-d2-02-grc-tools-risk-register');
  assert.equal(l2Summary.status, 'published');
  assert.equal(l2Summary.lessonPath, 'lessons/lesson-d2-02-grc-tools-risk-register.json');
  assert.equal(fs.existsSync(PUBLISHED_L2_PATH), true, 'Published Lesson 2 JSON must exist');

  assert.ok(fs.existsSync(STAGED_L1_PATH), 'Staged Lesson 1 must remain intact');
  assert.ok(fs.existsSync(PUBLISHED_L1_PATH), 'Published Lesson 1 copy must exist');

  const stagedL1 = readJson(STAGED_L1_PATH);
  const publishedL1 = readJson(PUBLISHED_L1_PATH);
  assert.equal(stagedL1.status, 'in-preparation', 'Staged copy preserves in-preparation status');
  assert.equal(publishedL1.status, 'published', 'Published copy has published status');
  assert.deepEqual(
    { ...publishedL1, status: 'in-preparation' },
    stagedL1,
    'Published Lesson 1 content must match staged Lesson 1 without regenerating or altering slides'
  );

  const pubCheck = validateLesson(publishedL1);
  assert.equal(pubCheck.valid, true, pubCheck.errors.join('; '));
  assert.equal(pubCheck.warnings.length, 0, pubCheck.warnings.join('; '));

  const pubSummaries = publishedLessons(catalog);
  assert.equal(pubSummaries.length, 16, '12 Domain 1 lessons + 4 Domain 2 lessons');
  for (const s of pubSummaries) {
    const lesson = readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url));
    const check = validateLesson(lesson);
    assert.equal(check.valid, true, `${s.id}: ${check.errors.join('; ')}`);
  }
});

test('2. End-to-end Learning Route flow: Learning Center -> Domain 2 -> Objective 2.1 -> Start Learning -> Lesson 1 Presentation, with unfinished lessons unlaunchable', async () => {
  const { loadCatalog, loadLesson } = createDiskLoaders();
  const progressStore = createProgressStore(createMemoryStorage());
  const lessonCache = new Map();
  const doc = new TestDocument();
  const container = doc.createElement('div');
  doc.body.append(container);

  updateSetup({ language: 'en' });
  selectLearningScreen('learning-center');

  let activeDispose = null;
  const mountCurrentRoute = async () => {
    activeDispose = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
    await activeDispose.ready;
  };

  // Step A: Learning Center shows clickable Domain 2 card with 17.3% weight
  await mountCurrentRoute();
  const d2Card = container.querySelector('#learning-domain-2');
  assert.ok(d2Card, 'Domain 2 card must render in Learning Center');
  assert.match(nodeText(d2Card), /Domain 2/);
  assert.match(nodeText(d2Card), /Security Governance/);
  assert.match(nodeText(d2Card), /17\.3% exam weight/i);

  // Click Domain 2 card -> navigates state to learning-domain (domainId: 2)
  fire(d2Card, 'click');
  assert.equal(state.screen, 'learning-domain');
  assert.equal(state.learning.domainId, 2);

  // Step B: Domain 2 Overview renders Objectives 2.1-2.4 with 2.1 available & selected and 2.2-2.4 Coming Soon
  await mountCurrentRoute();
  const obj21Row = container.querySelector('#learning-objective-2-1');
  const obj22Row = container.querySelector('#learning-objective-2-2');
  const obj23Row = container.querySelector('#learning-objective-2-3');
  const obj24Row = container.querySelector('#learning-objective-2-4');

  assert.ok(obj21Row && obj22Row && obj23Row && obj24Row, 'All 4 Domain 2 objectives must render');
  assert.equal(obj21Row.classList.contains('is-available'), true);
  assert.equal(obj21Row.classList.contains('is-selected'), true);
  assert.equal(obj21Row.getAttribute('aria-checked'), 'true');
  assert.equal(obj21Row.getAttribute('aria-disabled'), null);
  assert.equal(obj22Row.classList.contains('is-available'), true, 'Objective 2.2 is now available');

  for (const unavailableRow of [obj23Row, obj24Row]) {
    assert.equal(unavailableRow.classList.contains('is-unavailable'), true);
    assert.equal(unavailableRow.getAttribute('aria-disabled'), 'true');
    assert.match(nodeText(unavailableRow), /Coming Soon/);
    fire(unavailableRow, 'click');
  }
  assert.equal(obj21Row.getAttribute('aria-checked'), 'true', 'Clicking Coming Soon objectives must not change selection');

  // Verify Objective 2.1 lesson dropdown exposes both published lessons (Lesson 1 & Lesson 2)
  const lessonChoiceWrap = container.querySelector('.learning-objective-lesson-choice');
  assert.equal(lessonChoiceWrap.hidden, false, 'Two available lessons in Objective 2.1 make multi-lesson selector visible');

  const startBtn = container.querySelector('#btn-start-learning');
  assert.ok(startBtn, 'Start Learning button must exist');
  assert.equal(startBtn.disabled, false);
  assert.equal(startBtn.getAttribute('data-lesson-id'), 'lesson-d2-01-grc-foundations');

  // Click Start Learning -> navigates to learning-viewer for Lesson 1 Slide 1
  fire(startBtn, 'click');
  assert.equal(state.screen, 'learning-viewer');
  assert.equal(state.learning.lessonId, 'lesson-d2-01-grc-foundations');
  assert.equal(state.learning.domainId, 2);
  assert.equal(state.learning.objectiveId, '2.1');
  assert.equal(state.learning.slideId, 'slide-01-grc-foundations');

  // Step C: Viewer opens Lesson 1 with custom renderer active
  await mountCurrentRoute();
  assert.ok(container.querySelector('.learning-viewer'), 'Presentation viewer must mount');
  const stage = container.querySelector('.learning-slide');
  assert.equal(stage.classList.contains('learning-grc-foundations-slide'), true);
  assert.equal(
    stage.querySelector('[data-grc-foundations-composition]')?.getAttribute('data-grc-foundations-composition'),
    'grc-roof-cycle'
  );
  activeDispose?.();

  // Step D: Direct route attempt to unfinished Lesson 3 cannot launch a broken slide viewer
  selectLearningScreen('learning-viewer', {
    lessonId: 'lesson-d2-03-incident-response-foundations',
    domainId: 2,
    objectiveId: '2.2'
  });
  await mountCurrentRoute();
  assert.equal(container.querySelector('.learning-viewer'), null, 'Unfinished Lesson 3 must never mount viewer');
  assert.match(nodeText(container), /Learning content could not be loaded/i);
  disposeLearningRoute();
});

test('3. Custom renderer & stylesheet integration: index.html links scoped CSS and renderSlide uses GRC custom presentation (never generic fallback) across all 6 slides', () => {
  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  assert.match(html, /href="\.\/css\/learning-grc-foundations\.css"/, 'index.html must link ./css/learning-grc-foundations.css');

  const lesson = readJson(PUBLISHED_L1_PATH);
  const expectedCompositions = [
    'grc-roof-cycle',
    'purpose-clusters',
    'benefits-vs-failures',
    'framework-selector',
    'dual-distinctions',
    'applied-scenario'
  ];

  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);

    const renderedCompositions = [];
    for (const slide of lesson.slides) {
      const handle = renderSlide(host, {
        lesson,
        slide,
        language,
        mode: 'presentation',
        interactionState: {}
      });
      assert.equal(host.classList.contains('learning-grc-foundations-slide'), true, `${slide.id} must activate .learning-grc-foundations-slide`);
      assert.equal(host.querySelector('.learning-slide-title')?.classList.contains('learning-sr-only'), true, 'Outer slide h2 should be sr-only in custom presentation mode');
      assert.equal(host.querySelector('.learning-table-scroll'), null, `${slide.id} must NOT fall back to generic table rendering`);
      const comp = host.querySelector('[data-grc-foundations-composition]');
      assert.ok(comp, `${slide.id} must mount custom composition`);
      assert.equal(comp.getAttribute('lang'), language);
      renderedCompositions.push(comp.getAttribute('data-grc-foundations-composition'));
      handle.destroy();
    }
    assert.deepEqual(renderedCompositions, expectedCompositions);
  }
});

test('4. Existing Slide Viewer features work for Lesson 1: TH/EN toggle, Reading Mode, Lesson Info (Slides 1-6), interactive GRC scenario, Next/Prev/Back/Fullscreen, and independent Resume', () => {
  const lesson = readJson(PUBLISHED_L1_PATH);
  const storage = createMemoryStorage();
  const progressStore = createProgressStore(storage);
  const doc = new TestDocument();
  const container = doc.createElement('div');
  doc.body.append(container);

  let backCalls = 0;
  const viewer = mountLearningViewer(container, {
    lesson,
    language: 'en',
    progress: progressStore.read(lesson),
    onProgress: p => progressStore.save(lesson, p),
    onBack: () => { backCalls += 1; }
  });

  // 1. Starts on Slide 1 in EN with custom presentation
  const stage = () => container.querySelector('.learning-slide');
  assert.equal(stage().querySelector('[data-grc-foundations-composition]')?.getAttribute('lang'), 'en');
  assert.match(nodeText(container.querySelector('.learning-counter')), /1\s*\/\s*6/);

  // 2. Switch EN -> TH -> EN via viewer toolbar
  const thBtn = container.querySelector('[data-lang="th"]');
  const enBtn = container.querySelector('[data-lang="en"]');
  assert.ok(thBtn && enBtn, 'TH/EN buttons must exist in viewer');
  fire(thBtn, 'click');
  assert.equal(stage().querySelector('[data-grc-foundations-composition]')?.getAttribute('lang'), 'th');
  fire(enBtn, 'click');
  assert.equal(stage().querySelector('[data-grc-foundations-composition]')?.getAttribute('lang'), 'en');

  // 3. Toggle Reading Mode -> verify full narrative & semantic table render without custom canvas, then return to Presentation Mode
  const readingBtn = container.querySelector('[data-action="reading"]');
  fire(readingBtn, 'click');
  assert.equal(container.querySelector('.learning-viewer').classList.contains('learning-reading-mode'), true);
  assert.equal(stage().querySelector('[data-grc-foundations-composition]'), null);
  assert.ok(nodeText(stage()).includes(lesson.slides[0].blocks[2].text.en), 'Reading mode must show Slide 1 deep explanation');
  fire(readingBtn, 'click');
  assert.equal(container.querySelector('.learning-viewer').classList.contains('learning-reading-mode'), false);
  assert.ok(stage().querySelector('[data-grc-foundations-composition]'), 'Presentation mode restores custom composition');

  // 4. Open Lesson Info modal -> verify Slides 1-6 — Full explanations in EN & TH
  fire(container.querySelector('[data-action="lesson-info"]'), 'click');
  const infoPanel = container.querySelector('.learning-info-panel');
  assert.ok(infoPanel, 'Lesson Info modal must open');
  assert.match(nodeText(infoPanel), /OBJECTIVE 2\.1/);
  assert.match(nodeText(infoPanel), /Slides 1–6 — Full explanations/);
  assert.equal(infoPanel.querySelectorAll('[data-explanation-slide]').length, 6, 'All 6 slides must appear in Lesson Info explanations');
  fire(infoPanel.querySelector('[data-action="close-info"]'), 'click');
  assert.equal(container.querySelector('.learning-info-panel'), null, 'Lesson Info modal closes cleanly');

  // Verify TH Lesson Info directly as well
  const thInfoHost = doc.createElement('div');
  doc.body.append(thInfoHost);
  const thInfo = renderLessonInfo(thInfoHost, { lesson, language: 'th' });
  assert.match(nodeText(thInfoHost), /Slides 1–6 — Full explanations/);
  assert.ok(nodeText(thInfoHost).includes(lesson.slides[3].blocks[2].text.th));
  thInfo.destroy();

  // 5. Navigate Next through Slides 2..6, test Previous & Next, and verify Slide 6 interactive scenario
  for (let step = 0; step < 5; step++) {
    fire(container.querySelector('[data-action="next"]'), 'click');
  }
  assert.match(nodeText(container.querySelector('.learning-counter')), /6\s*\/\s*6/);
  assert.equal(stage().querySelector('[data-grc-foundations-composition]')?.getAttribute('data-grc-foundations-composition'), 'applied-scenario');

  // Test Previous -> Slide 5 -> Next -> Slide 6
  fire(container.querySelector('[data-action="previous"]'), 'click');
  assert.match(nodeText(container.querySelector('.learning-counter')), /5\s*\/\s*6/);
  fire(container.querySelector('[data-action="next"]'), 'click');
  assert.match(nodeText(container.querySelector('.learning-counter')), /6\s*\/\s*6/);

  // Interactive scenario on Slide 6
  const opt0 = stage().querySelector('[data-grc-scenario-choice="0"]');
  const opt2 = stage().querySelector('[data-grc-scenario-choice="2"]');
  fire(opt0, 'click');
  assert.equal(stage().querySelector('[data-grc-scenario-feedback]')?.getAttribute('data-grc-outcome'), 'distractor');
  fire(opt2, 'click');
  assert.equal(stage().querySelector('[data-grc-scenario-feedback]')?.getAttribute('data-grc-outcome'), 'recommended');
  fire(thBtn, 'click');
  assert.equal(stage().querySelector('[data-grc-scenario-choice="2"]')?.getAttribute('aria-pressed'), 'true', 'Scenario selection persists across language toggle');
  assert.equal(stage().querySelector('[data-grc-scenario-feedback]')?.getAttribute('data-grc-outcome'), 'recommended');

  // 6. Fullscreen button triggers graceful fallback notice in non-fullscreen DOM without throwing
  const fsBtn = container.querySelector('[data-action="fullscreen"]');
  assert.ok(fsBtn, 'Fullscreen control must exist');
  fire(fsBtn, 'click');

  // 7. Verify Resume state (in-progress at Slide 6) before completion, then Back button
  const savedMidway = progressStore.read(lesson);
  assert.equal(savedMidway.status, 'in-progress');
  assert.equal(savedMidway.lastSlideId, 'slide-06-applied-grc-scenario');
  assert.equal(savedMidway.visitedSlideIds.length, 6);

  fire(container.querySelector('.viewer-back-btn'), 'click');
  assert.equal(backCalls, 1, 'Back button invokes route onBack handler');
  viewer.destroy();

  // Remount viewer with saved progress -> resumes directly at Slide 6 and allows Mark as read
  const resumedViewer = mountLearningViewer(container, {
    lesson,
    language: 'th',
    progress: progressStore.read(lesson),
    onProgress: p => progressStore.save(lesson, p)
  });
  assert.match(nodeText(container.querySelector('.learning-counter')), /6\s*\/\s*6/, 'Viewer must resume on Slide 6');
  const completeBtn = container.querySelector('[data-action="complete"]');
  assert.equal(completeBtn.disabled, false, 'Mark as read enabled once all 6 slides visited');
  fire(completeBtn, 'click');
  assert.equal(progressStore.read(lesson).status, 'completed');
  resumedViewer.destroy();
});

test('5. Domain 1 non-regression & strict authorized file boundary verification', () => {
  const catalog = readJson(CATALOG_PATH);
  const lessonsById = new Map();
  const availabilityById = new Map();
  for (const s of publishedLessons(catalog)) {
    const lesson = readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url));
    lessonsById.set(s.id, lesson);
    availabilityById.set(s.id, 'available');
  }

  const storage = createMemoryStorage();
  const store = createProgressStore(storage);
  const cia = lessonsById.get('lesson-d1-01-cia-triad');
  const d2L1 = lessonsById.get('lesson-d2-01-grc-foundations');
  store.save(cia, visitSlide(cia, store.read(cia), cia.slides[2].id, 'en'));
  const ciaBefore = JSON.stringify(store.summary(cia.id));
  store.save(d2L1, visitSlide(d2L1, store.read(d2L1), d2L1.slides[3].id, 'th'));
  assert.equal(JSON.stringify(store.summary(cia.id)), ciaBefore, 'Domain 2 progress writes must never alter Domain 1 progress');

  const model = buildLearningCourseModel({ catalog, lessonsById, availabilityById, progressStore: store });
  const domain1 = model.domains.find(d => d.id === 1);
  const domain2 = model.domains.find(d => d.id === 2);
  assert.equal(domain1.total, 12, 'Domain 1 retains all 12 available lessons');
  assert.equal(domain1.objectives.every(o => Boolean(resolveObjectiveLearningState(o))), true, 'All 5 Domain 1 objectives remain available');
  assert.equal(domain2.total, 4, 'Domain 2 exposes 4 available lessons');
  assert.equal(Boolean(resolveObjectiveLearningState(domain2.objectives[0])), true, 'Objective 2.1 is available');
  assert.equal(Boolean(resolveObjectiveLearningState(domain2.objectives[1])), true, 'Objective 2.2 is available');
  assert.equal(domain2.objectives.slice(2).every(o => resolveObjectiveLearningState(o) === null), true, 'Objectives 2.3-2.4 remain Coming Soon');

  // Representative Domain 1 custom renderers & Lesson Info still behave identically
  const doc = new TestDocument();
  const host = doc.createElement('article');
  doc.body.append(host);
  for (const [id, cls] of [
    ['lesson-d1-01-cia-triad', 'learning-cia-slide'],
    ['lesson-d1-08-governance', 'learning-governance-slide'],
    ['lesson-d1-12-professional-conduct', 'learning-conduct-slide']
  ]) {
    const d1Lesson = lessonsById.get(id);
    const slide = d1Lesson.slides[1];
    const h = renderSlide(host, { lesson: d1Lesson, slide, language: 'en', mode: 'presentation', interactionState: {} });
    assert.equal(host.classList.contains(cls), true, `Domain 1 ${id} must retain custom presentation class ${cls}`);
    assert.equal(host.classList.contains('learning-grc-foundations-slide'), false, 'Domain 2 class must never leak onto Domain 1');
    h.destroy();

    const infoHost = doc.createElement('div');
    doc.body.append(infoHost);
    const info = renderLessonInfo(infoHost, { lesson: d1Lesson, language: 'en' });
    assert.ok(infoHost.querySelector('.learning-info-source-explanations'), `Domain 1 ${id} retains Lesson Info explanations`);
    info.destroy();
  }

  // Verify Git tracked modifications are strictly within the 4 authorized shared files and zero Domain 1 files are touched
  const authorizedTracked = new Set([
    'content/isc2-cc-2026/learning/published/catalog.json',
    'js/ui/learning/renderers.js',
    'js/ui/learning/lesson-info.js',
    'index.html'
  ]);
  const diffFiles = execFileSync('git', ['diff', '--name-only'], { encoding: 'utf8' })
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean);
  for (const file of diffFiles) {
    assert.ok(authorizedTracked.has(file), `Unauthorized tracked file modified: ${file}`);
  }

  const statusLines = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' })
    .split(/\r?\n/)
    .filter(Boolean);
  for (const line of statusLines) {
    assert.doesNotMatch(line, /lesson-d1-/i, `Domain 1 lesson file must remain untouched: ${line}`);
    assert.doesNotMatch(line, /css\/learning\.css$/i, `Global learning.css must remain untouched: ${line}`);
  }
});
