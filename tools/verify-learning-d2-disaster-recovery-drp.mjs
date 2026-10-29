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

const STAGED_PATH = new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-04-disaster-recovery-drp.json', import.meta.url);
const PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-04-disaster-recovery-drp.json', import.meta.url);
const L1_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const L2_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-02-grc-tools-risk-register.json', import.meta.url);
const L3_PUBLISHED_PATH = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d2-03-business-continuity-bcp.json', import.meta.url);
const MODULE_URL = new URL('../js/ui/learning/disaster-recovery-drp-presentations.js', import.meta.url);
const CSS_PATH = new URL('../css/learning-disaster-recovery-drp.css', import.meta.url);
const REPORT_PATH = new URL('../docs/plans/isc2-cc-2026/lesson-d2-04-disaster-recovery-drp-implementation.md', import.meta.url);
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

test('1. Lesson 4 JSON (staged & published) is schema-valid, has 9 ordered slides mapped to Domain 2 Objective 2.2, and resolves all source references', () => {
  assert.ok(fs.existsSync(STAGED_PATH), 'Staged Lesson 4 JSON must exist');
  assert.ok(fs.existsSync(PUBLISHED_PATH), 'Published Lesson 4 JSON must exist');
  assert.ok(fs.existsSync(REPORT_PATH), 'Lesson 4 implementation report must exist');

  const staged = readJson(STAGED_PATH);
  const published = readJson(PUBLISHED_PATH);

  assert.equal(staged.id, 'lesson-d2-04-disaster-recovery-drp');
  assert.equal(staged.domainId, 2);
  assert.equal(staged.primaryObjectiveId, '2.2');
  assert.deepEqual(staged.objectiveIds, ['2.2']);
  assert.equal(staged.outlineId, 'isc2-cc-2026-09-01');
  assert.equal(staged.status, 'in-preparation');
  assert.equal(published.status, 'published');
  assert.deepEqual({ ...published, status: 'in-preparation' }, staged, 'Published Lesson 4 must match staged Lesson 4 content');
  assert.equal(published.slides.length, 9, 'Lesson 4 must contain exactly 9 slides');

  const stagedCheck = validateLesson(staged);
  assert.equal(stagedCheck.valid, true, stagedCheck.errors.join('; '));
  assert.equal(stagedCheck.warnings.length, 0, stagedCheck.warnings.join('; '));

  const pubCheck = validateLesson(published);
  assert.equal(pubCheck.valid, true, pubCheck.errors.join('; '));
  assert.equal(pubCheck.warnings.length, 0, pubCheck.warnings.join('; '));

  const expectedSlideIds = [
    'slide-01-dr-definition-purposes-drp',
    'slide-02-dr-importance-and-compliance-bounds',
    'slide-03-rto-and-rpo-timeline',
    'slide-04-worked-recovery-target-examples',
    'slide-05-backup-and-restoration-strategies',
    'slide-06-dr-sites-hot-warm-cold',
    'slide-07-drp-testing-and-coordination',
    'slide-08-bc-vs-dr-seven-dimensions',
    'slide-09-disaster-recovery-scenario'
  ];
  assert.deepEqual(published.slides.map(s => s.id), expectedSlideIds);

  const evidenceFile = new URL(`../${published.review.evidencePath}`, import.meta.url);
  assert.ok(fs.existsSync(evidenceFile), `Review evidence file must exist: ${published.review.evidencePath}`);

  for (const suffix of ['Domain 2.md', 'D2 sum.md', 'DOMAIN 2.txt']) {
    const ref = published.references.find(r => r.repositoryPath?.endsWith(suffix));
    assert.ok(ref, `Lesson 4 references must include ${suffix}`);
    assert.ok(fs.existsSync(new URL(`../${ref.repositoryPath}`, import.meta.url)), `Referenced file must exist: ${ref.repositoryPath}`);
  }
});

test('2. Mandatory source & academic accuracy: DR definition/purposes/concepts (S16), DR vs DRP, 5 importance points + D2-Q04 GDPR/HIPAA bounds (S17), RTO vs RPO timeline & worked examples (S18/Domain 2.md), Cloud/Off-site backups (S18), Hot/Warm/Cold sites (S18), Testing & Drills (S18), and 7-row BC vs DR table (S19)', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const [s1, s2, s3, s4, s5, s6, s7, s8, s9] = lesson.slides;
  const fullJson = JSON.stringify(lesson);

  assert.doesNotMatch(fullJson, /\b(TODO|TBD|lorem ipsum)\b/i, 'Must not contain placeholder text');
  assert.doesNotMatch(fullJson, /off-site stitch/i, 'Must not reproduce transcript ASR typo "off-site stitch"');

  // Slide 1: DR definition, Purposes, 3 Key Concepts (S16) & DR vs DRP distinction
  const s1Text = JSON.stringify(s1);
  assert.match(s1Text, /restore IT infrastructure, systems, and data after a disaster or major disruption/i);
  assert.match(s1Text, /Minimize downtime/i);
  assert.match(s1Text, /Restore critical IT operations/i);
  assert.match(s1Text, /Protect data integrity/i);
  assert.match(s1Text, /Support business continuity/i);
  assert.match(s1Text, /IT-focused recovery/i);
  assert.match(s1Text, /Data and system restoration/i);
  assert.match(s1Text, /critical part of overall BC/i);
  assert.match(s1Text, /DRP/);

  // Slide 2: 5 Importance points from S17 + D2-Q04 bounded GDPR/HIPAA note
  const s2Text = JSON.stringify(s2);
  for (const term of ['Minimizes Downtime', 'Protects Data Integrity', 'Supports Compliance', 'Reduces Financial Losses', 'Enhances Customer Trust', 'GDPR', 'HIPAA']) {
    assert.match(s2Text, new RegExp(term, 'i'), `Slide 2 must include ${term}`);
  }
  assert.match(s2Text, /illustrative|example|where applicable|not.*identical/i, 'Slide 2 must enforce D2-Q04 compliance boundary');

  // Slide 3: RTO and RPO definitions & timeline semantics (S18, Domain 2.md §9.1–9.2)
  const s3Text = JSON.stringify(s3);
  assert.match(s3Text, /Recovery Time Objective/i);
  assert.match(s3Text, /maximum acceptable downtime/i);
  assert.match(s3Text, /Recovery Point Objective/i);
  assert.match(s3Text, /maximum acceptable.*data loss/i);

  // Slide 4: Worked recovery target examples (Domain 2.md §9.3 16:30/17:00/18:00 & S18/T:L57–60 4:00 PM / 4:30 / 5:00 / 5:20)
  const s4Text = JSON.stringify(s4);
  for (const term of ['16:30', '17:00', '18:00', '30', '4:00', '4:30', '5:00', '5:20']) {
    assert.match(s4Text, new RegExp(term, 'i'), `Slide 4 must include worked timeline value ${term}`);
  }

  // Slide 5: Backup and Recovery Strategies (S18: cloud backups, off-site storage)
  const s5Text = JSON.stringify(s5);
  assert.match(s5Text, /cloud backups/i);
  assert.match(s5Text, /off-site storage/i);

  // Slide 6: Disaster Recovery Sites (S18: hot sites, warm sites, cold sites + readiness/time/cost trade-offs)
  const s6Text = JSON.stringify(s6);
  for (const term of ['Hot Site', 'Warm Site', 'Cold Site']) {
    assert.match(s6Text, new RegExp(term, 'i'), `Slide 6 must compare ${term}`);
  }

  // Slide 7: Testing and Drills (S18) + Recovery Coordination
  const s7Text = JSON.stringify(s7);
  assert.match(s7Text, /Testing and Drills/i);
  assert.match(s7Text, /Regular testing of the DR plan/i);

  // Slide 8: Complete 7-row BC vs DR comparison table (S19, Domain 2.md §10)
  const s8Text = JSON.stringify(s8);
  for (const term of ['Primary Focus', 'Scope', 'Examples', 'Key Planning Document', 'Business Impact Analysis', 'Recovery Metrics', 'Relationship']) {
    assert.match(s8Text, new RegExp(term, 'i'), `Slide 8 must include S19 row ${term}`);
  }

  // Slide 9: Interactive DR Scenario with 4 balanced options
  assert.equal(s9.rendererId, 'interactive');
  assert.equal(s9.blocks[1].rows.length, 4, 'Slide 9 scenario must provide 4 options');
  const enOptionLengths = s9.blocks[1].rows.map(r => r[1].en.length);
  const maxLen = Math.max(...enOptionLengths);
  const minLen = Math.min(...enOptionLengths);
  assert.ok(maxLen - minLen <= 85, `Scenario options must be balanced in length (min=${minLen}, max=${maxLen})`);
});

test('3. Bilingual TH/EN completeness & Reading Mode depth across all 9 slides', () => {
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
  for (const term of ['Disaster Recovery', 'DR', 'DRP', 'RTO', 'RPO', 'Hot Site', 'Warm Site', 'Cold Site', 'Cloud', 'Backup', 'BC', 'BCP', 'BIA']) {
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
    assert.ok(infoText.includes('Slides 1–9 — Full explanations'));
    assert.equal(infoHost.querySelectorAll('[data-explanation-slide]').length, 9);
    infoHandle.destroy();
  }
});

test('4. Nine purposeful custom visual compositions render via renderSlide in TH/EN without generic card/table fallback', async () => {
  assert.ok(fs.existsSync(MODULE_URL), 'Lesson 4 presentation module must exist');
  assert.ok(fs.existsSync(CSS_PATH), 'Lesson 4 scoped stylesheet must exist');

  const html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  assert.match(html, /href="\.\/css\/learning-disaster-recovery-drp\.css"/, 'index.html must link Lesson 4 stylesheet');

  const mod = await import(MODULE_URL.href);
  assert.equal(typeof mod.hasDisasterRecoveryDrpPresentation, 'function');
  assert.equal(typeof mod.renderDisasterRecoveryDrpPresentation, 'function');

  const lesson = readJson(PUBLISHED_PATH);
  const expectedCompositions = [
    'dr-nested-scope-foundations',
    'dr-strategic-benefits-bounds',
    'rto-rpo-directional-timeline',
    'worked-outage-target-analysis',
    'backup-offsite-resilience-architecture',
    'recovery-sites-spectrum',
    'drp-lifecycle-drills-coordination',
    'bc-vs-dr-master-matrix',
    'disaster-recovery-decision-scenario'
  ];

  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);
    const seen = [];

    for (const slide of lesson.slides) {
      assert.equal(mod.hasDisasterRecoveryDrpPresentation({ lesson, slide }), true, `Should match ${slide.id}`);
      const handle = renderSlide(host, {
        lesson,
        slide,
        language,
        mode: 'presentation',
        interactionState: {}
      });
      assert.equal(host.classList.contains('learning-dr-drp-slide'), true, `${slide.id} must receive .learning-dr-drp-slide`);
      assert.equal(host.querySelector('.learning-slide-title')?.classList.contains('learning-sr-only'), true);
      assert.equal(host.querySelector('.learning-table-scroll'), null, `${slide.id} must not fall back to generic table`);

      const comp = host.querySelector('[data-dr-drp-composition]');
      assert.ok(comp, `Custom composition must mount for ${slide.id}`);
      assert.equal(comp.getAttribute('lang'), language);
      seen.push(comp.getAttribute('data-dr-drp-composition'));

      // Presentation canvas must remain concise and never dump the long Reading Mode paragraph (blocks[2])
      assert.equal(nodeText(host).includes(slide.blocks[2].text[language]), false, `Presentation canvas must stay concise on ${slide.id}`);
      handle.destroy();
    }

    assert.deepEqual(seen, expectedCompositions, 'All 9 slides must render distinct visual compositions');
  }

  // Verify specific visual elements on Slide 2 (5 benefits), Slide 3 (timeline markers), Slide 6 (3 site tiers), and Slide 8 (7 comparison rows)
  {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);

    const h2 = renderSlide(host, { lesson, slide: lesson.slides[1], language: 'en', mode: 'presentation', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-drp-benefit]').length, 5, 'Slide 2 visual must render all 5 S17 importance points');
    h2.destroy();

    const h3 = renderSlide(host, { lesson, slide: lesson.slides[2], language: 'en', mode: 'presentation', interactionState: {} });
    assert.ok(host.querySelector('[data-drp-timeline]'), 'Slide 3 visual must render explicit RTO/RPO timeline');
    h3.destroy();

    const h6 = renderSlide(host, { lesson, slide: lesson.slides[5], language: 'en', mode: 'presentation', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-drp-site-tier]').length, 3, 'Slide 6 visual must render Hot, Warm, and Cold sites');
    h6.destroy();

    const h8 = renderSlide(host, { lesson, slide: lesson.slides[7], language: 'en', mode: 'presentation', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-drp-comparison-row]').length, 7, 'Slide 8 visual must render all 7 S19 BC vs DR comparison rows');
    h8.destroy();
  }

  // Verify fail-safe guard when slide block structure is altered
  const mutatedSlide = structuredClone(lesson.slides[0]);
  mutatedSlide.blocks[1].rows.pop();
  assert.equal(mod.hasDisasterRecoveryDrpPresentation({ lesson, slide: mutatedSlide }), false);

  // Verify CSS scoping
  const css = fs.readFileSync(CSS_PATH, 'utf8');
  assert.match(css, /\.learning-dr-drp-slide/);
  assert.doesNotMatch(css, /\.learning-(cia|aaa|nr|privacy|risk|assessment|response|governance|frameworks|categories|functions|conduct|grc-foundations|grc-tools|bc-bcp)-slide/);
});

test('5. Interactive Disaster Recovery Scenario (Slide 9) supports 4 choices, TH/EN feedback, state persistence across language switches, and listener cleanup', () => {
  const lesson = readJson(PUBLISHED_PATH);
  const scenarioSlide = lesson.slides[8];
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

  const choiceBtn = i => host.querySelector(`[data-drp-scenario-choice="${i}"]`);
  assert.equal(host.querySelectorAll('[data-drp-scenario-choice]').length, 4);

  // Distractor Option 0 (confusing RTO with RPO and relying on untested cold site)
  fire(choiceBtn(0), 'click');
  assert.equal(interactionState.choice, 0);
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'true');
  assert.equal(host.querySelector('[data-drp-scenario-feedback]')?.getAttribute('data-drp-outcome'), 'distractor');
  assert.match(nodeText(host.querySelector('[data-drp-scenario-feedback]')), /RTO|RPO|Cold Site/i);

  // Recommended Option 2 (recognizing 30-min data loss as RPO, 1-hr downtime as RTO, off-site/cloud replication + Hot/Warm readiness + DRP testing)
  fire(choiceBtn(2), 'click');
  assert.equal(interactionState.choice, 2);
  assert.equal(choiceBtn(2).getAttribute('aria-pressed'), 'true');
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'false');
  assert.equal(host.querySelector('[data-drp-scenario-feedback]')?.getAttribute('data-drp-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-drp-scenario-feedback]')), /RPO|RTO|Hot|off-site/i);

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
  assert.equal(host.querySelector('[data-drp-scenario-feedback]')?.getAttribute('data-drp-outcome'), 'recommended');
  assert.match(nodeText(host.querySelector('[data-drp-scenario-feedback]')), /RPO|RTO/);

  // Verify listener cleanup on destroy()
  const staleBtn = choiceBtn(1);
  handle.destroy();
  fire(staleBtn, 'click');
  assert.equal(interactionState.choice, 2, 'Destroyed scenario must not mutate state');
});

test('6. Catalog publication, Objective 2.2 Lesson 3 & Lesson 4 selector, independent progress/Resume, and strict Domain 1 + Lessons 1-3 preservation', async () => {
  const catalog = readJson(CATALOG_PATH);
  assert.equal(validateCatalog(catalog).valid, true);

  const d2 = catalog.domains.find(d => d.id === 2);
  assert.equal(d2.status, 'in-preparation', 'Domain 2 curriculum remains in-preparation while Objectives 2.3-2.4 are Coming Soon');
  const [obj21, obj22, obj23, obj24] = d2.objectives;
  assert.equal(obj21.lessons.length, 2);
  assert.equal(obj22.lessons.length, 2);
  assert.equal(obj22.lessons[0].id, 'lesson-d2-03-business-continuity-bcp');
  assert.equal(obj22.lessons[0].status, 'published');
  assert.equal(obj22.lessons[1].id, 'lesson-d2-04-disaster-recovery-drp');
  assert.equal(obj22.lessons[1].status, 'published');
  assert.equal(obj22.lessons[1].lessonPath, 'lessons/lesson-d2-04-disaster-recovery-drp.json');
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
  selectLearningScreen('learning-domain', { domainId: 2, objectiveId: '2.2' });

  let disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;

  // Objective 2.2 now has 2 available lessons (Lesson 3 & Lesson 4) -> #learning-objective-lesson chooser is visible with both options!
  const chooserWrap = container.querySelector('.learning-objective-lesson-choice');
  const selectEl = container.querySelector('#learning-objective-lesson');
  assert.ok(chooserWrap && selectEl, 'Lesson chooser must exist');
  assert.equal(chooserWrap.hidden, false, 'Lesson chooser must be visible when Objective 2.2 has 2 published lessons');
  assert.deepEqual(
    selectEl.children.map(o => o.getAttribute('value')),
    ['lesson-d2-03-business-continuity-bcp', 'lesson-d2-04-disaster-recovery-drp']
  );

  // Select Lesson 4 in dropdown and click Start Learning
  selectEl.value = 'lesson-d2-04-disaster-recovery-drp';
  fire(selectEl, 'change');
  const startBtn = container.querySelector('#btn-start-learning');
  assert.equal(startBtn.getAttribute('data-lesson-id'), 'lesson-d2-04-disaster-recovery-drp');

  fire(startBtn, 'click');
  assert.equal(state.screen, 'learning-viewer');
  assert.equal(state.learning.lessonId, 'lesson-d2-04-disaster-recovery-drp');
  assert.equal(state.learning.objectiveId, '2.2');
  assert.equal(state.learning.slideId, 'slide-01-dr-definition-purposes-drp');

  disposeRoute = renderLearningRoute(container, () => {}, { loadCatalog, loadLesson, progressStore, lessonCache });
  await disposeRoute.ready;
  assert.ok(container.querySelector('.learning-slide')?.classList.contains('learning-dr-drp-slide'));
  disposeLearningRoute();

  // Verify independent progress for Domain 1 (12 lessons) and Domain 2 Lessons 1, 2, 3, and 4
  const d1Lessons = publishedLessons(catalog)
    .filter(s => s.domainId === 1)
    .map(s => readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url)));
  assert.equal(d1Lessons.length, 12);

  const l1 = readJson(L1_PUBLISHED_PATH);
  const l2 = readJson(L2_PUBLISHED_PATH);
  const l3 = readJson(L3_PUBLISHED_PATH);
  const l4 = readJson(PUBLISHED_PATH);

  for (const d1 of d1Lessons) {
    progressStore.save(d1, visitSlide(d1, progressStore.read(d1), d1.slides[1].id, 'en'));
  }
  progressStore.save(l1, completeReading(l1, l1.slides.reduce((p, s) => visitSlide(l1, p, s.id, 'en'), progressStore.read(l1))));
  progressStore.save(l2, visitSlide(l2, progressStore.read(l2), l2.slides[2].id, 'en'));
  progressStore.save(l3, visitSlide(l3, progressStore.read(l3), l3.slides[3].id, 'th'));

  const d1Snap = d1Lessons.map(d1 => JSON.stringify(progressStore.summary(d1.id)));
  const l1Snap = JSON.stringify(progressStore.summary(l1.id));
  const l2Snap = JSON.stringify(progressStore.summary(l2.id));
  const l3Snap = JSON.stringify(progressStore.summary(l3.id));

  let l4Prog = progressStore.read(l4);
  l4Prog = visitSlide(l4, l4Prog, l4.slides[0].id, 'th');
  l4Prog = visitSlide(l4, l4Prog, l4.slides[1].id, 'th');
  l4Prog = visitSlide(l4, l4Prog, l4.slides[2].id, 'th');
  l4Prog = visitSlide(l4, l4Prog, l4.slides[3].id, 'th');
  progressStore.save(l4, l4Prog);

  const reloaded = createProgressStore(storage);
  assert.equal(reloaded.read(l4).status, 'in-progress');
  assert.equal(reloaded.read(l4).lastSlideId, 'slide-04-worked-recovery-target-examples');
  assert.equal(JSON.stringify(reloaded.summary(l1.id)), l1Snap, 'Lesson 1 progress must remain untouched');
  assert.equal(JSON.stringify(reloaded.summary(l2.id)), l2Snap, 'Lesson 2 progress must remain untouched');
  assert.equal(JSON.stringify(reloaded.summary(l3.id)), l3Snap, 'Lesson 3 progress must remain untouched');
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

