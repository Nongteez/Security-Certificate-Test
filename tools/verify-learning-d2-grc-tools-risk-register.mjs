import fs from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { validateLesson, validateCatalog, publishedLessons } from '../js/core/learning-schema.js';
import { buildLearningCourseModel } from '../js/core/learning-course.js';
import { createProgressStore, visitSlide, completeReading } from '../js/core/learning-progress.js';
import { renderSlide } from '../js/ui/learning/renderers.js';
import { renderLessonInfo } from '../js/ui/learning/lesson-info.js';
import { mountLearningViewer } from '../js/ui/learning/viewer.js';
import { renderLearningRoute, disposeLearningRoute } from '../js/ui/learning/routes.js';
import { state, selectLearningScreen, updateSetup } from '../js/core/state.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';

const STAGED_PATH = new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-02-grc-tools-risk-register.json', import.meta.url);
const PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json', import.meta.url);
const L1_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const MODULE_URL = new URL('../js/ui/learning/grc-tools-risk-register-presentations.js', import.meta.url);
const CSS_PATH = new URL('../css/learning-grc-tools-risk-register.css', import.meta.url);
const REPORT_PATH = new URL('../docs/plans/isc2-cc-2026/lesson-d2-02-grc-tools-risk-register-implementation.md', import.meta.url);
const CATALOG_PATH = new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url);
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

test('1. Lesson 2 JSON (staged & published) is schema-valid, has 7 ordered slides mapped to Domain 2 Objective 2.1, and resolves all source references', () => {
  assert.ok(fs.existsSync(STAGED_PATH), 'Staged Lesson 2 JSON must exist');
  assert.ok(fs.existsSync(PUBLISHED_PATH), 'Published Lesson 2 JSON must exist');
  assert.ok(fs.existsSync(REPORT_PATH), 'Lesson 2 implementation report must exist');

  const staged = readJson(STAGED_PATH);
  const published = readJson(PUBLISHED_PATH);

  assert.equal(staged.id, 'lesson-d2-02-grc-tools-risk-register');
  assert.equal(staged.domainId, 2);
  assert.equal(staged.primaryObjectiveId, '2.1');
  assert.deepEqual(staged.objectiveIds, ['2.1']);
  assert.equal(staged.outlineId, 'isc2-cc-2026-09-01');
  assert.equal(staged.status, 'in-preparation');
  assert.equal(published.status, 'published');
  assert.deepEqual({ ...published, status: 'in-preparation' }, staged, 'Published Lesson 2 must match staged Lesson 2 content');
  assert.equal(published.slides.length, 7, 'Lesson 2 must contain exactly 7 slides');

  const stagedCheck = validateLesson(staged);
  assert.equal(stagedCheck.valid, true, stagedCheck.errors.join('; '));
  assert.equal(stagedCheck.warnings.length, 0, stagedCheck.warnings.join('; '));

  const pubCheck = validateLesson(published);
  assert.equal(pubCheck.valid, true, pubCheck.errors.join('; '));
  assert.equal(pubCheck.warnings.length, 0, pubCheck.warnings.join('; '));

  const expectedSlideIds = [
    'slide-01-grc-tools-platform',
    'slide-02-six-grc-tool-capabilities',
    'slide-03-risk-register-anatomy',
    'slide-04-scoring-and-treatment',
    'slide-05-ransomware-worked-example',
    'slide-06-residual-risk-and-ownership',
    'slide-07-risk-register-scenario'
  ];
  assert.deepEqual(published.slides.map(s => s.id), expectedSlideIds);

  const evidenceFile = new URL(`../${published.review.evidencePath}`, import.meta.url);
  assert.ok(fs.existsSync(evidenceFile), `Review evidence file must exist: ${published.review.evidencePath}`);

  for (const suffix of ['Domain 2.md', 'D2 sum.md', 'DOMAIN 2.txt']) {
    const ref = published.references.find(r => r.repositoryPath?.endsWith(suffix));
    assert.ok(ref, `Lesson 2 references must include ${suffix}`);
    assert.ok(fs.existsSync(new URL(`../${ref.repositoryPath}`, import.meta.url)), `Referenced file must exist: ${ref.repositoryPath}`);
  }
});

test('2. Mandatory source accuracy: all 6 GRC tool capabilities (S08), all 11 Risk Register fields (S09), 6-field Ransomware example (S10), Assessment vs. Register, D2-Q02, and D2-Q06', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const [s1, s2, s3, s4, s5, s6, s7] = lesson.slides;
  const fullJson = JSON.stringify(lesson);

  assert.doesNotMatch(fullJson, /\b(TODO|TBD|lorem ipsum)\b/i, 'Must not contain placeholder text');
  assert.doesNotMatch(fullJson, /compliance breaking/i, 'Must not reproduce transcript ASR typo "compliance breaking"');

  // Slide 1: GRC Tools centralize & track vs separate spreadsheets + GRC vs GRC Tool distinction
  const s1Text = JSON.stringify(s1);
  assert.match(s1Text, /spreadsheet/i);
  assert.match(s1Text, /centralize/i);
  assert.match(s1Text, /software platform/i);
  assert.match(s1Text, /GRC Tool/i);

  // Slide 2: All 6 exact GRC tool capabilities from S08
  const s2Text = JSON.stringify(s2);
  const sixCapabilities = [
    /Risk registers/i,
    /Policy management/i,
    /Compliance tracking/i,
    /Control management/i,
    /Audit management/i,
    /Risk assessments/i
  ];
  for (const rx of sixCapabilities) {
    assert.match(s2Text, rx, `Slide 2 must preserve S08 GRC tool capability matching ${rx}`);
  }

  // Slide 3: Documented record of identified organizational risks + Risk Assessment vs Risk Register + All 11 fields from S09
  const s3Text = JSON.stringify(s3);
  assert.match(s3Text, /documented record of identified organizational risks/i);
  assert.match(s3Text, /Risk Assessment/i);
  const elevenFields = [
    /Risk description/i,
    /Affected asset or process/i,
    /Threat/i,
    /Vulnerability/i,
    /Likelihood/i,
    /Impact/i,
    /Risk rating/i,
    /Risk owner/i,
    /Treatment strategy/i,
    /Current status/i,
    /Residual risk/i
  ];
  for (const rx of elevenFields) {
    assert.match(s3Text, rx, `Slide 3 must preserve S09 Risk Register field matching ${rx}`);
  }

  // Slide 4: 1-4 ordinal scale vs quantitative analysis (D2-Q02) + 4 treatment strategies (Mitigate, Accept, Transfer, Avoid)
  const s4Text = JSON.stringify(s4);
  for (const term of ['1–4', 'ordinal', 'qualitative', 'quantitative', 'Mitigate', 'Accept', 'Transfer', 'Avoid']) {
    assert.match(s4Text, new RegExp(term, 'i'), `Slide 4 must include ${term}`);
  }

  // Slide 5: Exact 6-field worked example from S10 (Ransomware affecting critical servers, High, High, IT Manager, Mitigation, EDR, backups, network segmentation, MFA)
  const s5Text = JSON.stringify(s5);
  for (const term of [
    'Ransomware affecting critical servers',
    'High',
    'IT Manager',
    'Mitigation',
    'EDR',
    'backups',
    'network segmentation',
    'MFA'
  ]) {
    assert.match(s5Text, new RegExp(term, 'i'), `Slide 5 must preserve S10 worked example value: ${term}`);
  }

  // Slide 6: Explicit inherent baseline -> verified controls -> reassessed remaining risk; qualified zero-risk warning and owner accountability
  const s6Text = JSON.stringify(s6);
  for (const term of ['Inherent', 'Residual', 'zero', 'Avoid', 'Risk Owner', 'accountab']) {
    assert.match(s6Text, new RegExp(term, 'i'), `Slide 6 must explain ${term}`);
  }

  // Slide 7: Interactive decision scenario with 4 options
  assert.equal(s7.rendererId, 'interactive');
  assert.equal(s7.blocks[1].rows.length, 4, 'Slide 7 scenario must provide 4 options');
});

test('3. Bilingual TH/EN completeness & Reading Mode depth across all 7 slides', () => {
  const lesson = readJson(PUBLISHED_PATH);
  for (const slide of lesson.slides) {
    assert.equal(slide.blocks.length, 5, `${slide.id} must have 5 semantic blocks [lead, table, deepText, deepList, takeaway]`);
    assert.equal(slide.blocks[0].kind, 'text');
    assert.equal(slide.blocks[1].kind, 'table');
    assert.equal(slide.blocks[2].kind, 'text');
    assert.equal(slide.blocks[3].kind, 'list');
    assert.equal(slide.blocks[4].kind, 'text');

    assert.ok(slide.blocks[2].text.en.length >= 280, `${slide.id} EN Reading Mode explanation must be substantial`);
    assert.ok(slide.blocks[2].text.th.length >= 220, `${slide.id} TH Reading Mode explanation must be substantial`);
    assert.ok(slide.blocks[3].items.length >= 3, `${slide.id} Reading Mode list must unpack examples and exam distinctions`);
    assert.notEqual(slide.blocks[2].text.en, slide.blocks[0].text.en, 'Reading Mode must not merely repeat presentation lead');
  }

  // Verify TH mode preserves established English technical terms naturally
  const thCorpus = lesson.slides.map(s => `${s.title.th} ${s.blocks[0].text.th} ${s.blocks[2].text.th}`).join(' ');
  for (const term of ['GRC', 'Risk Register', 'Risk Assessment', 'Likelihood', 'Impact', 'Risk Owner', 'Residual Risk', 'Ransomware', 'EDR', 'MFA']) {
    assert.ok(thCorpus.includes(term), `TH content should retain established English cybersecurity term: ${term}`);
  }

  // Verify Reading Mode and Lesson Info modal in both TH and EN
  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);
    for (const slide of lesson.slides) {
      const handle = renderSlide(host, { lesson, slide, language, mode: 'reading' });
      const text = nodeText(host);
      assert.ok(text.includes(slide.blocks[2].text[language]), `Reading mode missing deep explanation on ${slide.id} (${language})`);
      assert.ok(text.includes(slide.blocks[3].items[0][language]), `Reading mode missing list item on ${slide.id} (${language})`);
      handle.destroy();
    }

    const infoHost = doc.createElement('div');
    doc.body.append(infoHost);
    const infoHandle = renderLessonInfo(infoHost, { lesson, language });
    const infoText = nodeText(infoHost);
    assert.ok(infoText.includes('OBJECTIVE 2.1'));
    assert.ok(infoText.includes('Slides 1–7 — Full explanations'));
    assert.equal(infoHost.querySelectorAll('[data-explanation-slide]').length, 7);
    infoHandle.destroy();
  }
});

test('4. Seven purposeful custom visual compositions render via renderSlide in TH/EN without generic card/table fallback', async () => {
  assert.ok(fs.existsSync(MODULE_URL), 'Lesson 2 presentation module must exist');
  assert.ok(fs.existsSync(CSS_PATH), 'Lesson 2 scoped stylesheet must exist');

  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  assert.match(html, /href="\.\/css\/learning-grc-tools-risk-register\.css"/, 'index.html must link Lesson 2 stylesheet');

  const mod = await import(MODULE_URL.href);
  assert.equal(typeof mod.hasGrcToolsRiskRegisterPresentation, 'function');
  assert.equal(typeof mod.renderGrcToolsRiskRegisterPresentation, 'function');

  const lesson = readJson(PUBLISHED_PATH);
  const expectedCompositions = [
    'shared-work-record',
    'connected-capabilities',
    'assessment-to-register',
    'scoring-decision',
    'ransomware-control-effects',
    'reassess-remaining-risk',
    'register-triage-scenario'
  ];

  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);
    const seen = [];

    for (const slide of lesson.slides) {
      assert.equal(mod.hasGrcToolsRiskRegisterPresentation({ lesson, slide }), true, `Should match ${slide.id}`);
      const handle = renderSlide(host, {
        lesson,
        slide,
        language,
        mode: 'presentation',
        interactionState: {}
      });
      assert.equal(host.classList.contains('learning-grc-tools-slide'), true, `${slide.id} must receive .learning-grc-tools-slide`);
      assert.equal(host.querySelector('.learning-slide-title')?.classList.contains('learning-sr-only'), true);
      assert.equal(host.querySelector('.learning-table-scroll'), null, `${slide.id} must not fall back to generic table`);

      const comp = host.querySelector('[data-grc-tools-composition]');
      assert.ok(comp, `Custom composition must mount for ${slide.id}`);
      assert.equal(comp.getAttribute('lang'), language);
      seen.push(comp.getAttribute('data-grc-tools-composition'));

      // Presentation canvas must remain concise and never dump the long Reading Mode paragraph (blocks[2])
      assert.equal(nodeText(host).includes(slide.blocks[2].text[language]), false, `Presentation canvas must stay concise on ${slide.id}`);
      handle.destroy();
    }

    assert.deepEqual(seen, expectedCompositions, 'All 7 slides must render distinct visual compositions');
  }

  // Teach a readable record on the canvas; retain the complete source dictionary in Reading.
  {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);

    const h2 = renderSlide(host, { lesson, slide: lesson.slides[1], language: 'en', mode: 'presentation', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-grt-capability]').length, 6, 'Slide 2 visual must render all 6 S08 capabilities');
    h2.destroy();

    const h3 = renderSlide(host, { lesson, slide: lesson.slides[2], language: 'en', mode: 'presentation', interactionState: {} });
    assert.ok(host.querySelector('[data-grt-register-example]'), 'Slide 3 must show a readable risk record');
    assert.match(nodeText(host), /Risk Assessment/);
    assert.match(nodeText(host), /IT Manager/);
    assert.equal(host.querySelectorAll('[data-grt-field]').length, 0, 'Do not restore eleven equal mini-fields');
    h3.destroy();

    const h5 = renderSlide(host, { lesson, slide: lesson.slides[4], language: 'en', mode: 'presentation', interactionState: {} });
    for (const term of ['Ransomware', 'High / High', 'IT Manager', 'Mitigation']) assert.ok(nodeText(host).includes(term), `Worked source record must retain ${term}`);
    assert.equal(host.querySelectorAll('[data-grt-control-item]').length, 4, 'Slide 5 visual must render all 4 S10 controls');
    h5.destroy();
    for (const language of ['en', 'th']) {
      for (const i of [1, 2, 4]) {
        const reading = renderSlide(host, {lesson, slide: lesson.slides[i], language, mode: 'reading'});
        for (const row of lesson.slides[i].blocks[1].rows) for (const pair of row) assert.ok(nodeText(host).includes(pair[language]), 'Every source capability, field and worked value remains readable');
        reading.destroy();
      }
    }
  }

  // Verify fail-safe guard when slide block structure is altered
  const mutatedSlide = structuredClone(lesson.slides[0]);
  mutatedSlide.blocks[1].rows.pop();
  assert.equal(mod.hasGrcToolsRiskRegisterPresentation({ lesson, slide: mutatedSlide }), false);

  // Verify CSS scoping
  const css = fs.readFileSync(CSS_PATH, 'utf8');
  assert.match(css, /\.learning-grc-tools-slide/);
  assert.doesNotMatch(css, /\.learning-(cia|aaa|nr|privacy|risk|assessment|response|governance|frameworks|categories|functions|conduct|grc-foundations)-slide/);
});

test('5. Interactive Risk Register scenario (Slide 7) supports 4 choices, TH/EN feedback, state persistence across language switches, and listener cleanup', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const scenarioSlide = lesson.slides[6];
  const doc = new TestDocument();
  const host = doc.createElement('article');
  doc.body.append(host);

  const interactionState = {};
  let handle = renderSlide(host, {
    lesson,
    slide: scenarioSlide,
    language: 'en',
    mode: 'presentation',
    interactionState
  });

  const choiceBtn = i => host.querySelector(`[data-grt-scenario-choice="${i}"]`);
  assert.equal(host.querySelectorAll('[data-grt-scenario-choice]').length, 4);

  // Distractor Option 1 (deleting risk as zero residual risk)
  fire(choiceBtn(1), 'click');
  assert.equal(interactionState.choice, 1);
  assert.equal(choiceBtn(1).getAttribute('aria-pressed'), 'true');
  assert.equal(host.querySelector('[data-grt-scenario-feedback]')?.getAttribute('data-grt-outcome'), 'distractor');
  assert.match(nodeText(host.querySelector('[data-grt-scenario-feedback]')), /Residual|zero/i);

  // Recommended Option 2: owned Risk Register, tracked mitigation and evidence-based remaining-risk review
  fire(choiceBtn(2), 'click');
  assert.equal(interactionState.choice, 2);
  assert.equal(choiceBtn(2).getAttribute('aria-pressed'), 'true');
  assert.equal(choiceBtn(1).getAttribute('aria-pressed'), 'false');
  assert.equal(host.querySelector('[data-grt-scenario-feedback]')?.getAttribute('data-grt-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-grt-scenario-feedback]')), /Risk Register|IT Manager|Residual/i);

  // Switch language to TH -> verify state persists and feedback renders in Thai
  handle.destroy();
  handle = renderSlide(host, {
    lesson,
    slide: scenarioSlide,
    language: 'th',
    mode: 'presentation',
    interactionState
  });
  assert.equal(choiceBtn(2).getAttribute('aria-pressed'), 'true');
  assert.equal(host.querySelector('[data-grt-scenario-feedback]')?.getAttribute('data-grt-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-grt-scenario-feedback]')), /Risk Register|IT Manager|Residual Risk/);

  // Verify listener cleanup on destroy()
  const staleBtn = choiceBtn(0);
  handle.destroy();
  fire(staleBtn, 'click');
  assert.equal(interactionState.choice, 2, 'Destroyed scenario must not mutate state');
});

test('6. Catalog publication, Objective 2.1 Lesson 1 & Lesson 2 selection, independent progress/Resume, and strict Domain 1 + Lesson 1 preservation', async () => {
  const catalog = readJson(CATALOG_PATH);
  assert.equal(validateCatalog(catalog).valid, true);

  const d2 = catalog.domains.find(d => d.id === 2);
  assert.equal(d2.status, 'in-preparation', 'Domain 2 curriculum remains in-preparation while Objectives 2.2-2.4 are Coming Soon');
  const [obj21, obj22, obj23, obj24] = d2.objectives;
  assert.equal(obj21.lessons.length, 2);
  assert.equal(obj21.lessons[0].id, 'lesson-d2-01-grc-foundations');
  assert.equal(obj21.lessons[0].status, 'published');
  assert.equal(obj21.lessons[1].id, 'lesson-d2-02-grc-tools-risk-register');
  assert.equal(obj21.lessons[1].status, 'published');
  assert.equal(obj21.lessons[1].lessonPath, 'lessons/lesson-d2-02-grc-tools-risk-register.json');
  assert.ok(['coming-soon', 'in-preparation'].includes(obj22.status));
  assert.equal(obj23.status, 'coming-soon');
  assert.equal(obj24.status, 'coming-soon');

  const { loadCatalog, loadLesson } = createDiskLoaders();
  const storage = createMemoryStorage();
  const progressStore = createProgressStore(storage);
  const lessonCache = new Map();
  const doc = new TestDocument();
  const container = doc.createElement('div');
  doc.body.append(container);

  updateSetup({ language: 'en' });
  selectLearningScreen('learning-domain', { domainId: 2, objectiveId: '2.1' });

  let disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;

  // Objective 2.1 now has 2 available lessons -> #learning-objective-lesson chooser is visible with both options!
  const chooserWrap = container.querySelector('.learning-objective-lesson-choice');
  const selectEl = container.querySelector('#learning-objective-lesson');
  assert.ok(chooserWrap && selectEl, 'Lesson chooser must exist');
  assert.equal(chooserWrap.hidden, false, 'Lesson chooser must be visible when Objective 2.1 has 2 published lessons');
  assert.deepEqual(
    selectEl.children.map(o => o.getAttribute('value')),
    ['lesson-d2-01-grc-foundations', 'lesson-d2-02-grc-tools-risk-register']
  );

  // Select Lesson 2 in dropdown and click Start Learning
  selectEl.value = 'lesson-d2-02-grc-tools-risk-register';
  fire(selectEl, 'change');
  const startBtn = container.querySelector('#btn-start-learning');
  assert.equal(startBtn.getAttribute('data-lesson-id'), 'lesson-d2-02-grc-tools-risk-register');

  fire(startBtn, 'click');
  assert.equal(state.screen, 'learning-viewer');
  assert.equal(state.learning.lessonId, 'lesson-d2-02-grc-tools-risk-register');
  assert.equal(state.learning.slideId, 'slide-01-grc-tools-platform');

  disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;
  assert.ok(container.querySelector('.learning-slide')?.classList.contains('learning-grc-tools-slide'));
  disposeLearningRoute();

  // Verify independent progress for Domain 1 (12 lessons), Domain 2 Lesson 1, and Domain 2 Lesson 2
  const d1Lessons = publishedLessons(catalog)
    .filter(s => s.domainId === 1)
    .map(s => readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url)));
  assert.equal(d1Lessons.length, 12);

  const l1 = readJson(L1_PUBLISHED_PATH);
  const l2 = readJson(PUBLISHED_PATH);

  for (const d1 of d1Lessons) {
    progressStore.save(d1, visitSlide(d1, progressStore.read(d1), d1.slides[1].id, 'en'));
  }
  progressStore.save(l1, completeReading(l1, l1.slides.reduce((p, s) => visitSlide(l1, p, s.id, 'en'), progressStore.read(l1))));
  const d1Snap = d1Lessons.map(d1 => JSON.stringify(progressStore.summary(d1.id)));
  const l1Snap = JSON.stringify(progressStore.summary(l1.id));

  let l2Prog = progressStore.read(l2);
  l2Prog = visitSlide(l2, l2Prog, l2.slides[0].id, 'th');
  l2Prog = visitSlide(l2, l2Prog, l2.slides[1].id, 'th');
  l2Prog = visitSlide(l2, l2Prog, l2.slides[2].id, 'th');
  progressStore.save(l2, l2Prog);

  const reloaded = createProgressStore(storage);
  assert.equal(reloaded.read(l2).status, 'in-progress');
  assert.equal(reloaded.read(l2).lastSlideId, 'slide-03-risk-register-anatomy');
  assert.equal(JSON.stringify(reloaded.summary(l1.id)), l1Snap, 'Lesson 1 progress must remain untouched');
  d1Lessons.forEach((d1, i) => {
    assert.equal(JSON.stringify(reloaded.summary(d1.id)), d1Snap[i], `Domain 1 ${d1.id} progress must remain untouched`);
  });

  // Verify Git boundaries: only the 4 authorized tracked shared files may have diffs, and zero Domain 1 files touched
  const authorizedShared = new Set([
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
    assert.ok(authorizedShared.has(file), `Unauthorized tracked file modified: ${file}`);
  }
  const statusLines = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' })
    .split(/\r?\n/)
    .filter(Boolean);
  for (const line of statusLines) {
    assert.doesNotMatch(line, /lesson-d1-/i, `Domain 1 file must remain untouched: ${line}`);
    assert.doesNotMatch(line, /css\/learning\.css$/i, `Global learning.css must remain untouched: ${line}`);
  }
});

