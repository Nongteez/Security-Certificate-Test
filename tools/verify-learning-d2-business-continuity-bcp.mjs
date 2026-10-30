import fs from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { validateLesson, validateCatalog, publishedLessons } from '../js/core/learning-schema.js';
import { buildLearningCourseModel, resolveObjectiveLearningState } from '../js/core/learning-course.js';
import { createProgressStore, visitSlide, completeReading } from '../js/core/learning-progress.js';
import { renderSlide } from '../js/ui/learning/renderers.js';
import { renderLessonInfo } from '../js/ui/learning/lesson-info.js';
import { mountLearningViewer } from '../js/ui/learning/viewer.js';
import { renderLearningRoute, disposeLearningRoute } from '../js/ui/learning/routes.js';
import { state, selectLearningScreen, updateSetup } from '../js/core/state.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';

const STAGED_PATH = new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-03-business-continuity-bcp.json', import.meta.url);
const PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-03-business-continuity-bcp.json', import.meta.url);
const L1_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const L2_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json', import.meta.url);
const MODULE_URL = new URL('../js/ui/learning/business-continuity-bcp-presentations.js', import.meta.url);
const CSS_PATH = new URL('../css/learning-business-continuity-bcp.css', import.meta.url);
const REPORT_PATH = new URL('../docs/plans/isc2-cc-2026/lesson-d2-03-business-continuity-bcp-implementation.md', import.meta.url);
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

test('1. Lesson 3 JSON (staged & published) is schema-valid, has 6 ordered slides mapped to Domain 2 Objective 2.2, and resolves all source references', () => {
  assert.ok(fs.existsSync(STAGED_PATH), 'Staged Lesson 3 JSON must exist');
  assert.ok(fs.existsSync(PUBLISHED_PATH), 'Published Lesson 3 JSON must exist');
  assert.ok(fs.existsSync(REPORT_PATH), 'Lesson 3 implementation report must exist');

  const staged = readJson(STAGED_PATH);
  const published = readJson(PUBLISHED_PATH);

  assert.equal(staged.id, 'lesson-d2-03-business-continuity-bcp');
  assert.equal(staged.domainId, 2);
  assert.equal(staged.primaryObjectiveId, '2.2');
  assert.deepEqual(staged.objectiveIds, ['2.2']);
  assert.equal(staged.outlineId, 'isc2-cc-2026-09-01');
  assert.equal(staged.status, 'in-preparation');
  assert.equal(published.status, 'published');
  assert.deepEqual({ ...published, status: 'in-preparation' }, staged, 'Published Lesson 3 must match staged Lesson 3 content');
  assert.equal(published.slides.length, 6, 'Lesson 3 must contain exactly 6 slides');

  const stagedCheck = validateLesson(staged);
  assert.equal(stagedCheck.valid, true, stagedCheck.errors.join('; '));
  assert.equal(stagedCheck.warnings.length, 0, stagedCheck.warnings.join('; '));

  const pubCheck = validateLesson(published);
  assert.equal(pubCheck.valid, true, pubCheck.errors.join('; '));
  assert.equal(pubCheck.warnings.length, 0, pubCheck.warnings.join('; '));

  const expectedSlideIds = [
    'slide-01-redundancy-and-bc-foundations',
    'slide-02-eight-disruption-triggers',
    'slide-03-bcp-and-eight-elements',
    'slide-04-operational-redundancy-strategies',
    'slide-05-bia-and-recovery-priorities',
    'slide-06-continuity-decision-scenario'
  ];
  assert.deepEqual(published.slides.map(s => s.id), expectedSlideIds);

  const evidenceFile = new URL(`../${published.review.evidencePath}`, import.meta.url);
  assert.ok(fs.existsSync(evidenceFile), `Review evidence file must exist: ${published.review.evidencePath}`);

  for (const suffix of ['Domain 2.md', 'D2 sum.md', 'DOMAIN 2.txt']) {
    const ref = published.references.find(r => r.repositoryPath?.endsWith(suffix));
    assert.ok(ref, `Lesson 3 references must include ${suffix}`);
    assert.ok(fs.existsSync(new URL(`../${ref.repositoryPath}`, import.meta.url)), `Referenced file must exist: ${ref.repositoryPath}`);
  }
});

test('2. Mandatory source & academic accuracy: Redundancy vs. Backup (SPOF vs. data copy), all 8 S12 disruptions (+ human error), all 8 S14 BCP elements, BC vs. BCP, BIA role (S19), and BCP vs. DRP boundary', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const [s1, s2, s3, s4, s5, s6] = lesson.slides;
  const fullJson = JSON.stringify(lesson);

  assert.doesNotMatch(fullJson, /\b(TODO|TBD|lorem ipsum)\b/i, 'Must not contain placeholder text');
  assert.doesNotMatch(fullJson, /national disaster/i, 'Must not reproduce transcript ASR typo "national disaster"');

  // Slide 1: Redundancy & Business Continuity (BC) Foundations + Redundancy vs Backup distinction
  const s1Text = JSON.stringify(s1);
  assert.match(s1Text, /continue critical business operations during and after a disruption/i);
  assert.match(s1Text, /single points? of failure/i);
  assert.match(s1Text, /Redundancy/i);
  assert.match(s1Text, /Backup/i);

  // Slide 2: All 8 exact disruption triggers from S12 + spoken human error from T:L35
  const s2Text = JSON.stringify(s2);
  const eightDisruptions = [
    /Natural disasters/i,
    /Cyberattacks/i,
    /Power outages/i,
    /Equipment failures/i,
    /Network outages/i,
    /Pandemics/i,
    /Loss of facilities/i,
    /Supply-chain disruptions/i
  ];
  for (const rx of eightDisruptions) {
    assert.match(s2Text, rx, `Slide 2 must preserve S12 disruption trigger matching ${rx}`);
  }
  assert.match(s2Text, /Human error/i, 'Slide 2 must include spoken human error trigger from T:L35');

  // Slide 3: Business Continuity Planning (BCP), BC vs BCP distinction, and all 8 exact BCP elements from S14
  const s3Text = JSON.stringify(s3);
  assert.match(s3Text, /documents how an organization will continue critical operations during a disruption/i);
  const eightBcpElements = [
    /Critical business processes/i,
    /Roles and responsibilities/i,
    /Communication procedures/i,
    /Alternate work locations/i,
    /Backup personnel/i,
    /Alternate suppliers/i,
    /Essential technology and systems/i,
    /Recovery priorities/i
  ];
  for (const rx of eightBcpElements) {
    assert.match(s3Text, rx, `Slide 3 must preserve S14 BCP element matching ${rx}`);
  }

  // Slide 4: Operational Redundancy across Alternate Work Locations, Backup Personnel, Alternate Suppliers, and Essential Technology
  const s4Text = JSON.stringify(s4);
  for (const term of ['Alternate work locations', 'Backup personnel', 'Alternate suppliers', 'Essential technology']) {
    assert.match(s4Text, new RegExp(term, 'i'), `Slide 4 must cover ${term}`);
  }

  // Slide 5: Business Impact Analysis (BIA), Critical Process Dependencies, Recovery Priorities & BCP vs DRP boundary
  const s5Text = JSON.stringify(s5);
  for (const term of ['Business Impact Analysis', 'BIA', 'critical business functions', 'Recovery priorities', 'BCP', 'DRP']) {
    assert.match(s5Text, new RegExp(term, 'i'), `Slide 5 must explain ${term}`);
  }

  // Slide 6: Applied Continuity Decision Scenario with 4 balanced options
  assert.equal(s6.rendererId, 'interactive');
  assert.equal(s6.blocks[1].rows.length, 4, 'Slide 6 scenario must provide 4 options');
  const enOptionLengths = s6.blocks[1].rows.map(r => r[1].en.length);
  const maxLen = Math.max(...enOptionLengths);
  const minLen = Math.min(...enOptionLengths);
  assert.ok(maxLen - minLen <= 85, `Scenario options must be balanced in length so correct answer is not obvious by length (min=${minLen}, max=${maxLen})`);
});

test('3. Bilingual TH/EN completeness & Reading Mode depth across all 6 slides', () => {
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
  for (const term of ['Redundancy', 'Business Continuity', 'BC', 'BCP', 'BIA', 'Single Point of Failure', 'DRP', 'Backup']) {
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
    assert.ok(infoText.includes('OBJECTIVE 2.2'));
    assert.ok(infoText.includes('Slides 1–6 — Full explanations'));
    assert.equal(infoHost.querySelectorAll('[data-explanation-slide]').length, 6);
    infoHandle.destroy();
  }
});

test('4. Six purposeful custom visual compositions render via renderSlide in TH/EN without generic card/table fallback', async () => {
  assert.ok(fs.existsSync(MODULE_URL), 'Lesson 3 presentation module must exist');
  assert.ok(fs.existsSync(CSS_PATH), 'Lesson 3 scoped stylesheet must exist');

  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  assert.match(html, /href="\.\/css\/learning-business-continuity-bcp\.css"/, 'index.html must link Lesson 3 stylesheet');

  const mod = await import(MODULE_URL.href);
  assert.equal(typeof mod.hasBusinessContinuityBcpPresentation, 'function');
  assert.equal(typeof mod.renderBusinessContinuityBcpPresentation, 'function');

  const lesson = readJson(PUBLISHED_PATH);
  const expectedCompositions = [
    'service-alternate-path',
    'disruption-service-response',
    'continuity-operating-plan',
    'independent-alternate-dependencies',
    'business-impact-dependencies',
    'continuity-response-scenario'
  ];

  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);
    const seen = [];

    for (const slide of lesson.slides) {
      assert.equal(mod.hasBusinessContinuityBcpPresentation({ lesson, slide }), true, `Should match ${slide.id}`);
      const handle = renderSlide(host, {
        lesson,
        slide,
        language,
        mode: 'presentation',
        interactionState: {}
      });
      assert.equal(host.classList.contains('learning-bc-bcp-slide'), true, `${slide.id} must receive .learning-bc-bcp-slide`);
      assert.equal(host.querySelector('.learning-slide-title')?.classList.contains('learning-sr-only'), true);
      assert.equal(host.querySelector('.learning-table-scroll'), null, `${slide.id} must not fall back to generic table`);

      const comp = host.querySelector('[data-bc-bcp-composition]');
      assert.ok(comp, `Custom composition must mount for ${slide.id}`);
      assert.equal(comp.getAttribute('lang'), language);
      seen.push(comp.getAttribute('data-bc-bcp-composition'));

      // Presentation canvas must remain concise and never dump the long Reading Mode paragraph (blocks[2])
      assert.equal(nodeText(host).includes(slide.blocks[2].text[language]), false, `Presentation canvas must stay concise on ${slide.id}`);
      handle.destroy();
    }

    assert.deepEqual(seen, expectedCompositions, 'All 6 slides must render distinct visual compositions');
  }

  // Full source lists stay in semantic Reading/Info; canvas teaches selected operational relationships.
  for (const language of ['th','en']) {
    const doc=new TestDocument(),host=doc.createElement('article');
    for (const index of [1,2]) {
      const slide=lesson.slides[index];const h=renderSlide(host,{lesson,slide,language,mode:'reading'});
      for (const row of slide.blocks[1].rows) for(const cell of row) assert.ok(nodeText(host).includes(cell[language]));
      h.destroy();
    }
    const h=renderSlide(host,{lesson,slide:lesson.slides[3],language,mode:'presentation'});
    assert.ok(host.querySelector('.d2b-common-cause'));assert.ok(host.querySelector('.d2b-shared-route'));h.destroy();
  }

  // Verify fail-safe guard when slide block structure is altered
  const mutatedSlide = structuredClone(lesson.slides[0]);
  mutatedSlide.blocks[1].rows.pop();
  assert.equal(mod.hasBusinessContinuityBcpPresentation({ lesson, slide: mutatedSlide }), false);

  // Verify CSS scoping
  const css = fs.readFileSync(CSS_PATH, 'utf8');
  assert.match(css, /\.learning-bc-bcp-slide/);
  assert.doesNotMatch(css, /\.learning-(cia|aaa|nr|privacy|risk|assessment|response|governance|frameworks|categories|functions|conduct|grc-foundations|grc-tools)-slide/);
});

test('5. Interactive Continuity Decision Scenario (Slide 6) supports 4 choices, TH/EN feedback, state persistence across language switches, and listener cleanup', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const scenarioSlide = lesson.slides[5];
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

  const choiceBtn = i => host.querySelector(`[data-bcb-scenario-choice="${i}"]`);
  assert.equal(host.querySelectorAll('[data-bcb-scenario-choice]').length, 4);

  // Distractor Option 0 (suspending operations until primary building & servers are rebuilt)
  fire(choiceBtn(0), 'click');
  assert.equal(interactionState.choice, 0);
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'true');
  assert.equal(host.querySelector('[data-bcb-scenario-feedback]')?.getAttribute('data-bcb-outcome'), 'distractor');
  assert.ok(nodeText(host.querySelector('[data-bcb-scenario-feedback]')).includes(scenarioSlide.blocks[1].rows[0][2].en));

  // Recommended Option 1 (activating BCP: alternate work locations, backup personnel, communication procedures, and BIA recovery priorities while DR restores IT)
  fire(choiceBtn(1), 'click');
  assert.equal(interactionState.choice, 1);
  assert.equal(choiceBtn(1).getAttribute('aria-pressed'), 'true');
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'false');
  assert.equal(host.querySelector('[data-bcb-scenario-feedback]')?.getAttribute('data-bcb-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-bcb-scenario-feedback]')), /BCP|alternate work locations|backup personnel/i);

  // Switch language to TH -> verify state persists and feedback renders in Thai
  handle.destroy();
  handle = renderSlide(host, {
    lesson,
    slide: scenarioSlide,
    language: 'th',
    mode: 'presentation',
    interactionState
  });
  assert.equal(choiceBtn(1).getAttribute('aria-pressed'), 'true');
  assert.equal(host.querySelector('[data-bcb-scenario-feedback]')?.getAttribute('data-bcb-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-bcb-scenario-feedback]')), /BCP|Business Continuity/);

  // Verify listener cleanup on destroy()
  const staleBtn = choiceBtn(2);
  handle.destroy();
  fire(staleBtn, 'click');
  assert.equal(interactionState.choice, 1, 'Destroyed scenario must not mutate state');
});

test('6. Catalog publication, Objective 2.2 activation with Lesson 3 published & Lesson 4 coming-soon, independent progress/Resume, and strict Domain 1 + Lessons 1-2 preservation', async () => {
  const catalog = readJson(CATALOG_PATH);
  assert.equal(validateCatalog(catalog).valid, true);

  const d2 = catalog.domains.find(d => d.id === 2);
  assert.equal(d2.status, 'in-preparation', 'Domain 2 curriculum remains in-preparation while Objectives 2.3-2.4 and Lesson 4 are Coming Soon');
  const [obj21, obj22, obj23, obj24] = d2.objectives;
  assert.equal(obj21.lessons.length, 2);
  assert.equal(obj22.status, 'in-preparation', 'Objective 2.2 is in-preparation with Lesson 3 published and Lesson 4 coming-soon');
  assert.equal(obj22.lessons.length, 2);
  assert.equal(obj22.lessons[0].id, 'lesson-d2-03-business-continuity-bcp');
  assert.equal(obj22.lessons[0].status, 'published');
  assert.equal(obj22.lessons[0].lessonPath, 'lessons/lesson-d2-03-business-continuity-bcp.json');
  assert.equal(obj22.lessons[1].id, 'lesson-d2-04-disaster-recovery-drp');
  assert.ok(['coming-soon', 'published'].includes(obj22.lessons[1].status));
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
  selectLearningScreen('learning-domain', { domainId: 2 });

  let disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;

  const obj21Row = container.querySelector('#learning-objective-2-1');
  const obj22Row = container.querySelector('#learning-objective-2-2');
  const obj23Row = container.querySelector('#learning-objective-2-3');
  const obj24Row = container.querySelector('#learning-objective-2-4');

  assert.equal(obj21Row.classList.contains('is-available'), true);
  assert.equal(obj22Row.classList.contains('is-available'), true, 'Objective 2.2 must now be selectable');
  assert.equal(obj23Row.classList.contains('is-unavailable'), true);
  assert.equal(obj24Row.classList.contains('is-unavailable'), true);

  // Select Objective 2.2 and click Start Learning -> launches Lesson 3
  fire(obj22Row, 'click');
  assert.equal(obj22Row.getAttribute('aria-checked'), 'true');
  const startBtn = container.querySelector('#btn-start-learning');
  assert.equal(startBtn.disabled, false);
  assert.equal(startBtn.getAttribute('data-lesson-id'), 'lesson-d2-03-business-continuity-bcp');

  fire(startBtn, 'click');
  assert.equal(state.screen, 'learning-viewer');
  assert.equal(state.learning.lessonId, 'lesson-d2-03-business-continuity-bcp');
  assert.equal(state.learning.objectiveId, '2.2');
  assert.equal(state.learning.slideId, 'slide-01-redundancy-and-bc-foundations');

  disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;
  assert.ok(container.querySelector('.learning-slide')?.classList.contains('learning-bc-bcp-slide'));
  disposeLearningRoute();

  // Verify independent progress for Domain 1 (12 lessons), Domain 2 Lesson 1, Domain 2 Lesson 2, and Domain 2 Lesson 3
  const d1Lessons = publishedLessons(catalog)
    .filter(s => s.domainId === 1)
    .map(s => readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url)));
  assert.equal(d1Lessons.length, 12);

  const l1 = readJson(L1_PUBLISHED_PATH);
  const l2 = readJson(L2_PUBLISHED_PATH);
  const l3 = readJson(PUBLISHED_PATH);

  for (const d1 of d1Lessons) {
    progressStore.save(d1, visitSlide(d1, progressStore.read(d1), d1.slides[1].id, 'en'));
  }
  progressStore.save(l1, completeReading(l1, l1.slides.reduce((p, s) => visitSlide(l1, p, s.id, 'en'), progressStore.read(l1))));
  progressStore.save(l2, visitSlide(l2, progressStore.read(l2), l2.slides[2].id, 'en'));
  const d1Snap = d1Lessons.map(d1 => JSON.stringify(progressStore.summary(d1.id)));
  const l1Snap = JSON.stringify(progressStore.summary(l1.id));
  const l2Snap = JSON.stringify(progressStore.summary(l2.id));

  let l3Prog = progressStore.read(l3);
  l3Prog = visitSlide(l3, l3Prog, l3.slides[0].id, 'th');
  l3Prog = visitSlide(l3, l3Prog, l3.slides[1].id, 'th');
  l3Prog = visitSlide(l3, l3Prog, l3.slides[2].id, 'th');
  progressStore.save(l3, l3Prog);

  const reloaded = createProgressStore(storage);
  assert.equal(reloaded.read(l3).status, 'in-progress');
  assert.equal(reloaded.read(l3).lastSlideId, 'slide-03-bcp-and-eight-elements');
  assert.equal(JSON.stringify(reloaded.summary(l1.id)), l1Snap, 'Lesson 1 progress must remain untouched');
  assert.equal(JSON.stringify(reloaded.summary(l2.id)), l2Snap, 'Lesson 2 progress must remain untouched');
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

