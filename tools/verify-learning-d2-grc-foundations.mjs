import fs from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { validateLesson, validateCatalog, publishedLessons } from '../js/core/learning-schema.js';
import { renderSlide } from '../js/ui/learning/renderers.js';
import { renderLessonInfo } from '../js/ui/learning/lesson-info.js';
import { createProgressStore, visitSlide, completeReading } from '../js/core/learning-progress.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';

const LESSON_PATH = new URL('../content/isc2-cc-2026/learning/staged/lessons/lesson-d2-01-grc-foundations.json', import.meta.url);
const MODULE_URL = new URL('../js/ui/learning/grc-foundations-presentations.js', import.meta.url);
const CSS_PATH = new URL('../css/learning-grc-foundations.css', import.meta.url);
const REPORT_PATH = new URL('../docs/plans/isc2-cc-2026/lesson-d2-01-grc-foundations-implementation.md', import.meta.url);
const CATALOG_PATH = new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url);

const readJson = url => JSON.parse(fs.readFileSync(url, 'utf8'));
const nodeText = node => [node?.textContent || '', ...(node?.children || []).map(nodeText)].join(' ');

test('1. Lesson 1 JSON is schema-valid, staged (not published), mapped to Domain 2 Objective 2.1, and resolves all references', () => {
  assert.ok(fs.existsSync(LESSON_PATH), 'Staged Lesson 1 JSON must exist');
  assert.ok(fs.existsSync(REPORT_PATH), 'Lesson 1 implementation report must exist');

  const lesson = readJson(LESSON_PATH);
  assert.equal(lesson.id, 'lesson-d2-01-grc-foundations');
  assert.equal(lesson.domainId, 2);
  assert.equal(lesson.primaryObjectiveId, '2.1');
  assert.deepEqual(lesson.objectiveIds, ['2.1']);
  assert.equal(lesson.outlineId, 'isc2-cc-2026-09-01');
  assert.equal(lesson.status, 'in-preparation', 'Domain 2 Lesson 1 must remain unpublished (in-preparation)');
  assert.equal(lesson.slides.length, 6, 'Lesson 1 must follow the approved 6-slide roadmap sequence');

  const stagedCheck = validateLesson(lesson);
  assert.equal(stagedCheck.valid, true, stagedCheck.errors.join('; '));
  assert.equal(stagedCheck.warnings.length, 0, `Unexpected warnings: ${stagedCheck.warnings.join('; ')}`);

  const publishReadyCheck = validateLesson({ ...structuredClone(lesson), status: 'published' });
  assert.equal(publishReadyCheck.valid, true, publishReadyCheck.errors.join('; '));
  assert.equal(publishReadyCheck.warnings.length, 0, publishReadyCheck.warnings.join('; '));

  const expectedSlideIds = [
    'slide-01-grc-foundations',
    'slide-02-purpose-of-grc',
    'slide-03-importance-of-grc',
    'slide-04-grc-frameworks',
    'slide-05-grc-distinctions',
    'slide-06-applied-grc-scenario'
  ];
  assert.deepEqual(lesson.slides.map(s => s.id), expectedSlideIds);

  const evidenceFile = new URL(`../${lesson.review.evidencePath}`, import.meta.url);
  assert.ok(fs.existsSync(evidenceFile), `Review evidence file must exist: ${lesson.review.evidencePath}`);

  for (const suffix of ['Domain 2.md', 'D2 sum.md', 'DOMAIN 2.txt']) {
    const ref = lesson.references.find(r => r.repositoryPath?.endsWith(suffix));
    assert.ok(ref, `Lesson references must include ${suffix}`);
    assert.ok(fs.existsSync(new URL(`../${ref.repositoryPath}`, import.meta.url)), `Referenced source must exist: ${ref.repositoryPath}`);
  }
});

test('2. Academic accuracy & source guardrails hold across all 6 slides (7 purposes, 7 benefits vs 4 failures, frameworks vs laws, NIST CSF 2.0 Govern, ISO 27001 non-mandatory, Reading-only AI note)', () => {
  const lesson = readJson(LESSON_PATH);
  const [s1, s2, s3, s4, s5, s6] = lesson.slides;
  const fullJson = JSON.stringify(lesson);

  // D2-Q01: Never reproduce ASR typo "Coop" for COBIT
  assert.doesNotMatch(fullJson, /\bCoop\b/, 'Must not reproduce transcript ASR typo "Coop"');
  assert.doesNotMatch(fullJson, /\b(TODO|TBD|lorem ipsum)\b/i, 'Must not contain placeholder text');

  // Slide 1: GRC Foundations (Governance, Risk Management, Compliance + Business Alignment)
  const s1Text = JSON.stringify(s1);
  for (const term of ['Governance', 'Risk', 'Compliance', 'direction', 'oversight', 'accountability', 'business objectives']) {
    assert.match(s1Text, new RegExp(term, 'i'), `Slide 1 missing key term: ${term}`);
  }

  // Slide 2: All 7 source-supported purposes of GRC (S05 / Domain 2.md §2.2)
  const s2Text = JSON.stringify(s2);
  const sevenPurposes = [
    /align cybersecurity with business objectives/i,
    /identify and manage risks/i,
    /legal and regulatory obligations/i,
    /consistent policies and controls/i,
    /improve accountability/i,
    /informed decision-making/i,
    /reduce duplication/i
  ];
  for (const rx of sevenPurposes) {
    assert.match(s2Text, rx, `Slide 2 must preserve source purpose matching ${rx}`);
  }

  // Slide 3: All 7 benefits contrasted with all 4 failure modes without GRC (S06 / Domain 2.md §2.3)
  const s3Text = JSON.stringify(s3);
  const sevenBenefits = [
    /reduce cybersecurity and business risks?/i,
    /protect critical information and assets/i,
    /meet regulatory requirements/i,
    /avoid or reduce financial penalties/i,
    /improve decision-making/i,
    /clear accountability/i,
    /organizational resilience/i
  ];
  for (const rx of sevenBenefits) {
    assert.match(s3Text, rx, `Slide 3 must preserve source benefit matching ${rx}`);
  }
  const fourFailures = [
    /inconsistent security practices/i,
    /unidentified risks/i,
    /compliance violations/i,
    /poor accountability/i
  ];
  for (const rx of fourFailures) {
    assert.match(s3Text, rx, `Slide 3 must preserve source failure mode matching ${rx}`);
  }

  // Slide 4: NIST CSF (with CSF 2.0 Govern), ISO/IEC 27001 (ISMS, non-mandatory by default), COBIT (Enterprise IT), Frameworks vs Standards vs Laws, and Reading-Mode-only AI supplement
  const s4MainCanvasText = JSON.stringify([s4.title, s4.blocks[0], s4.blocks[1], s4.blocks[4]]);
  const s4ReadingText = JSON.stringify([s4.blocks[2], s4.blocks[3]]);
  for (const fw of ['NIST', 'ISO/IEC 27001', 'ISMS', 'COBIT', 'enterprise IT']) {
    assert.match(s4MainCanvasText, new RegExp(fw, 'i'), `Slide 4 main content missing ${fw}`);
  }
  assert.match(s4ReadingText, /Govern/, 'Slide 4 Reading Mode must explain NIST CSF 2.0 Govern function');
  assert.match(s4ReadingText, /voluntary|not universally mandatory|not legally mandatory/i, 'Slide 4 must clarify ISO/IEC 27001 certification is not universally mandatory');
  assert.match(s4ReadingText, /not interchangeable|distinct from laws|laws.*regulations.*standards/i, 'Slide 4 must distinguish frameworks, standards, and laws/regulations');
  assert.doesNotMatch(s4MainCanvasText, /\bAI\b|artificial intelligence/i, 'Main slide canvas on Slide 4 must focus on core frameworks, keeping AI strictly in Reading Mode');
  assert.match(s4ReadingText, /Verified Supplement|เพิ่มเติมเพื่อความเข้าใจ/, 'Slide 4 Reading Mode must clearly label supplementary context');
  assert.match(s4ReadingText, /\bAI\b|emerging technolog/i, 'Slide 4 Reading Mode includes the bounded emerging-tech/AI supplement');

  // Slide 5: Governance vs. Management AND Risk Management vs. Compliance
  const s5Text = JSON.stringify(s5);
  assert.match(s5Text, /Governance/);
  assert.match(s5Text, /Management/);
  assert.match(s5Text, /Risk Management/);
  assert.match(s5Text, /Compliance/);
  assert.match(s5Text, /does not guarantee|not equal|Compliant ≠ Secure|ไม่ได้แปลว่าปลอดภัย/i);

  // Slide 6: Realistic organizational decision scenario with 4 options
  assert.equal(s6.rendererId, 'interactive');
  assert.equal(s6.blocks[1].rows.length, 4, 'Slide 6 scenario must offer 4 plausible organizational options');
});

test('3. Bilingual TH/EN quality & Reading Mode depth work cleanly in both languages', () => {
  const lesson = readJson(LESSON_PATH);
  for (const slide of lesson.slides) {
    assert.equal(slide.blocks.length, 5, `${slide.id} must have 5 semantic blocks [lead, table, deepText, deepList, takeaway]`);
    assert.equal(slide.blocks[0].kind, 'text');
    assert.equal(slide.blocks[1].kind, 'table');
    assert.equal(slide.blocks[2].kind, 'text');
    assert.equal(slide.blocks[3].kind, 'list');
    assert.equal(slide.blocks[4].kind, 'text');

    assert.ok(slide.blocks[2].text.en.length >= 280, `${slide.id} EN Reading Mode narrative must be substantial`);
    assert.ok(slide.blocks[2].text.th.length >= 220, `${slide.id} TH Reading Mode narrative must be substantial`);
    assert.ok(slide.blocks[3].items.length >= 3, `${slide.id} Reading Mode list must unpack examples/distinctions`);
    assert.notEqual(slide.blocks[2].text.en, slide.blocks[0].text.en, 'Reading Mode must expand beyond slide lead');
  }

  // Verify TH mode mixes natural Thai with familiar English cybersecurity terminology
  const thCorpus = lesson.slides.map(s => `${s.title.th} ${s.blocks[0].text.th} ${s.blocks[2].text.th}`).join(' ');
  for (const term of ['Governance', 'Risk', 'Compliance', 'NIST CSF', 'ISO/IEC 27001', 'ISMS', 'COBIT', 'Management']) {
    assert.ok(thCorpus.includes(term), `TH content should preserve familiar English technical term: ${term}`);
  }

  // Verify Reading Mode rendering & Lesson Info modal in both TH and EN
  for (const language of ['th', 'en']) {
    const doc = new TestDocument();
    const host = doc.createElement('article');
    doc.body.append(host);
    for (const slide of lesson.slides) {
      const handle = renderSlide(host, { lesson, slide, language, mode: 'reading' });
      const rendered = nodeText(host);
      assert.ok(rendered.includes(slide.blocks[2].text[language]), `Reading mode missing deep narrative on ${slide.id} (${language})`);
      assert.ok(rendered.includes(slide.blocks[3].items[0][language]), `Reading mode missing deep list item on ${slide.id} (${language})`);
      handle.destroy();
    }

    const infoHost = doc.createElement('div');
    doc.body.append(infoHost);
    const infoHandle = renderLessonInfo(infoHost, { lesson, language });
    const infoRendered = nodeText(infoHost);
    assert.ok(infoRendered.includes('OBJECTIVE 2.1'));
    assert.ok(infoRendered.includes(lesson.title[language]));
    assert.ok(infoRendered.includes(lesson.outcomes[0][language]));
    infoHandle.destroy();
  }
});

test('4. Six distinct custom visual compositions render in TH/EN, use scoped CSS, and preserve semantic fallback', async () => {
  assert.ok(fs.existsSync(MODULE_URL), 'Domain 2 Lesson 1 presentation module must exist');
  assert.ok(fs.existsSync(CSS_PATH), 'Domain 2 Lesson 1 scoped stylesheet must exist');

  const mod = await import(MODULE_URL.href);
  assert.equal(typeof mod.hasGrcFoundationsPresentation, 'function');
  assert.equal(typeof mod.renderGrcFoundationsPresentation, 'function');

  const lesson = readJson(LESSON_PATH);
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
    const host = doc.createElement('div');
    doc.body.append(host);
    const seen = [];

    for (const slide of lesson.slides) {
      assert.equal(mod.hasGrcFoundationsPresentation({ lesson, slide }), true, `Should match ${slide.id}`);
      host.replaceChildren();
      const handle = mod.renderGrcFoundationsPresentation(host, {
        lesson,
        slide,
        language,
        mode: 'presentation',
        interactionState: {}
      });
      const root = host.querySelector('[data-grc-foundations-composition]');
      assert.ok(root, `Composition root must render for ${slide.id}`);
      assert.equal(root.getAttribute('lang'), language);
      seen.push(root.getAttribute('data-grc-foundations-composition'));

      // Presentation canvas must NOT dump the long Reading Mode paragraph (blocks[2])
      assert.equal(nodeText(host).includes(slide.blocks[2].text[language]), false, `Presentation canvas should stay concise on ${slide.id}`);
      handle.destroy();
    }

    assert.deepEqual(seen, expectedCompositions, 'All 6 slides must use distinct visual compositions');
  }

  // Verify Slide 2 renders all 7 purposes and Slide 3 renders all 7 benefits + 4 failures on the visual canvas
  {
    const doc = new TestDocument();
    const host = doc.createElement('div');
    const h2 = mod.renderGrcFoundationsPresentation(host, { lesson, slide: lesson.slides[1], language: 'en', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-grc-purpose-item]').length, 7, 'Slide 2 visual must render all 7 purposes');
    h2.destroy();

    host.replaceChildren();
    const h3 = mod.renderGrcFoundationsPresentation(host, { lesson, slide: lesson.slides[2], language: 'en', interactionState: {} });
    assert.equal(host.querySelectorAll('[data-grc-benefit-item]').length, 7, 'Slide 3 visual must render all 7 benefits');
    assert.equal(host.querySelectorAll('[data-grc-failure-item]').length, 4, 'Slide 3 visual must render all 4 failure modes');
    h3.destroy();
  }

  // Verify fail-safe guard when slide block structure is altered
  const mutatedSlide = structuredClone(lesson.slides[0]);
  mutatedSlide.blocks[1].rows.pop();
  assert.equal(mod.hasGrcFoundationsPresentation({ lesson, slide: mutatedSlide }), false, 'Altered slide shape must fall back safely');

  // Verify CSS scoping & light educational palette
  const css = fs.readFileSync(CSS_PATH, 'utf8');
  assert.match(css, /\.learning-grc-foundations-slide/);
  assert.doesNotMatch(css, /\.learning-(cia|aaa|nr|privacy|risk|assessment|response|governance|frameworks|categories|functions|conduct)-slide/, 'Must not touch Domain 1 CSS classes');
});

test('5. Applied GRC scenario supports 4 choices, option-specific TH/EN feedback, state retention, listener cleanup, and V1 progress isolation', async () => {
  const mod = await import(MODULE_URL.href);
  const lesson = readJson(LESSON_PATH);
  const scenarioSlide = lesson.slides[5];
  const doc = new TestDocument();
  const host = doc.createElement('div');
  doc.body.append(host);

  const state = {};
  const controller = new AbortController();
  let handle = mod.renderGrcFoundationsPresentation(host, {
    lesson,
    slide: scenarioSlide,
    language: 'en',
    mode: 'presentation',
    interactionState: state,
    signal: controller.signal
  });

  const choiceBtn = index => host.querySelector(`[data-grc-scenario-choice="${index}"]`);
  assert.equal(host.querySelectorAll('[data-grc-scenario-choice]').length, 4);

  // Select distractor 0 -> verify incorrect feedback
  fire(choiceBtn(0), 'click');
  assert.equal(state.choice, 0);
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'true');
  const feedbackNode = () => host.querySelector('[data-grc-scenario-feedback]');
  assert.equal(feedbackNode().getAttribute('data-grc-outcome'), 'distractor');
  assert.match(nodeText(feedbackNode()), /technical|direction|governance/i);

  // Select correct option (index 2) -> verify recommended feedback
  fire(choiceBtn(2), 'click');
  assert.equal(state.choice, 2);
  assert.equal(choiceBtn(2).getAttribute('aria-pressed'), 'true');
  assert.equal(choiceBtn(0).getAttribute('aria-pressed'), 'false');
  assert.equal(feedbackNode().getAttribute('data-grc-outcome'), 'recommended');
  assert.match(nodeText(feedbackNode()), /Governance|ISMS|Risk/i);

  // Switch language to TH -> verify state is retained and feedback translates to Thai
  handle.destroy();
  host.replaceChildren();
  handle = mod.renderGrcFoundationsPresentation(host, {
    lesson,
    slide: scenarioSlide,
    language: 'th',
    mode: 'presentation',
    interactionState: state
  });
  assert.equal(choiceBtn(2).getAttribute('aria-pressed'), 'true');
  assert.equal(feedbackNode().getAttribute('data-grc-outcome'), 'recommended');
  assert.match(nodeText(feedbackNode()), /Governance|ความเสี่ยง|ISMS/);

  // Verify listener disposal after destroy()
  const staleButton = choiceBtn(1);
  handle.destroy();
  fire(staleButton, 'click');
  assert.equal(state.choice, 2, 'Destroyed scenario must not mutate state');

  // Verify independent V1 progress compatibility alongside all 12 published Domain 1 lessons
  let rawStorage;
  const storage = { getItem: () => rawStorage, setItem: (_, v) => { rawStorage = v; } };
  const store = createProgressStore(storage);
  const catalog = readJson(CATALOG_PATH);
  const d1Lessons = publishedLessons(catalog)
    .filter(s => s.domainId === 1)
    .map(s => readJson(new URL(`../content/isc2-cc-2026/learning/published/${s.lessonPath}`, import.meta.url)));
  assert.equal(d1Lessons.length, 12);

  for (const d1 of d1Lessons) {
    store.save(d1, visitSlide(d1, store.read(d1), d1.slides[1].id, 'th'));
  }
  const d1Snapshot = d1Lessons.map(d1 => JSON.stringify(store.summary(d1.id)));

  let d2Progress = store.read(lesson);
  for (const s of lesson.slides) {
    d2Progress = visitSlide(lesson, d2Progress, s.id, 'th');
  }
  d2Progress = completeReading(lesson, d2Progress);
  store.save(lesson, d2Progress);

  const reloaded = createProgressStore(storage);
  assert.equal(reloaded.read(lesson).status, 'completed');
  assert.equal(reloaded.read(lesson).lastSlideId, 'slide-06-applied-grc-scenario');
  d1Lessons.forEach((d1, idx) => {
    assert.equal(JSON.stringify(reloaded.summary(d1.id)), d1Snapshot[idx], `Domain 1 lesson ${d1.id} progress must remain untouched`);
  });
});

test('6. Protected unapproved shared files and all Domain 1 files remain completely unmodified in Git', () => {
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
    assert.ok(authorizedShared.has(file), `Unauthorized tracked file must not be modified: ${file}`);
  }

  const statusOut = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' });
  const lines = statusOut.split(/\r?\n/).filter(Boolean);
  const forbiddenPatterns = [
    /lesson-d1-/i,
    /css\/learning\.css$/i,
    /docs\/plans\/task\.md/i
  ];
  for (const line of lines) {
    for (const pat of forbiddenPatterns) {
      assert.doesNotMatch(line, pat, `Protected or Domain 1 file must not be modified: ${line}`);
    }
  }
});

