import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { isStructuredRenderer, validateVisual, semanticBlocks, BUDGETS, TONES } from '../js/core/learning-visuals.js';
import { validateLesson } from '../js/core/learning-schema.js';
import { TestDocument, fire } from './fixtures/learning/dom.mjs';
import { mountLearningViewer } from '../js/ui/learning/viewer.js';

const lessonPath = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json', import.meta.url);
const lesson = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));

test('structured renderers are registered and identifiable', () => {
  assert.equal(isStructuredRenderer('pillars'), true);
  assert.equal(isStructuredRenderer('incident-flow'), true);
  assert.equal(isStructuredRenderer('scenario-decision'), true);
  assert.equal(isStructuredRenderer('text'), false);
  assert.equal(isStructuredRenderer('comparison'), false);
  assert.equal(isStructuredRenderer('unknown-custom'), false);
});

test('pilot lesson slides 2, 6, and 7 use structured visual renderers', () => {
  const slide2 = lesson.slides.find(s => s.id === 'slide-02-cia-overview');
  assert.ok(slide2, 'Slide 2 must exist');
  assert.equal(slide2.rendererId, 'pillars');
  assert.ok(slide2.visual, 'Slide 2 must have visual object');

  const slide6 = lesson.slides.find(s => s.id === 'slide-06-compound-impact');
  assert.ok(slide6, 'Slide 6 must exist');
  assert.equal(slide6.rendererId, 'incident-flow');
  assert.ok(slide6.visual, 'Slide 6 must have visual object');

  const slide7 = lesson.slides.find(s => s.id === 'slide-07-scenario-reflection');
  assert.ok(slide7, 'Slide 7 must exist');
  assert.equal(slide7.rendererId, 'scenario-decision');
  assert.ok(slide7.visual, 'Slide 7 must have visual object');
});

test('all prototype slides strictly satisfy authoring character budgets', () => {
  const slide2 = lesson.slides.find(s => s.id === 'slide-02-cia-overview');
  const res2 = validateVisual(slide2);
  assert.deepEqual(res2.structure, [], 'Slide 2 structure errors');
  assert.deepEqual(res2.content, [], 'Slide 2 content/budget errors');

  const slide6 = lesson.slides.find(s => s.id === 'slide-06-compound-impact');
  const res6 = validateVisual(slide6);
  assert.deepEqual(res6.structure, [], 'Slide 6 structure errors');
  assert.deepEqual(res6.content, [], 'Slide 6 content/budget errors');

  const slide7 = lesson.slides.find(s => s.id === 'slide-07-scenario-reflection');
  const res7 = validateVisual(slide7);
  assert.deepEqual(res7.structure, [], 'Slide 7 structure errors');
  assert.deepEqual(res7.content, [], 'Slide 7 content/budget errors');
});

test('semanticBlocks generates complete fallback blocks for reading mode and accessibility', () => {
  const slide2 = lesson.slides.find(s => s.id === 'slide-02-cia-overview');
  const blocks2 = semanticBlocks(slide2);
  assert.ok(blocks2.length >= 1);
  assert.equal(blocks2[0].kind, 'list');
  assert.equal(blocks2[0].items.length, 3);
  assert.ok(blocks2[0].items[0].en.includes('Confidentiality'));
  assert.ok(blocks2[0].items[0].th.includes('การรักษาความลับ'));

  const slide6 = lesson.slides.find(s => s.id === 'slide-06-compound-impact');
  const blocks6 = semanticBlocks(slide6);
  assert.ok(blocks6.length >= 2);
  const listBlock6 = blocks6.find(b => b.kind === 'list');
  assert.ok(listBlock6);
  assert.equal(listBlock6.items.length, 3);
  assert.ok(listBlock6.items[0].en.includes('Exfiltration'));

  const slide7 = lesson.slides.find(s => s.id === 'slide-07-scenario-reflection');
  const blocks7 = semanticBlocks(slide7);
  assert.ok(blocks7.length >= 2);
  const revealBlock7 = blocks7.find(b => b.kind === 'reveal');
  assert.ok(revealBlock7);
  assert.ok(revealBlock7.text.en.includes('Integrity'));
  assert.ok(revealBlock7.text.th.includes('Integrity'));
});

test('validateLesson confirms published lesson validity with structured slides', () => {
  const validation = validateLesson(lesson);
  assert.equal(validation.valid, true, `Validation errors: ${validation.errors.join('; ')}`);
  assert.equal(validation.errors.length, 0);
});

test('budget violations and structure defects are properly caught', () => {
  const overBudgetSlide = {
    rendererId: 'pillars',
    visual: {
      pillars: [
        {
          key: 'confidentiality', tone: 'blue', symbol: 'C',
          term: { en: 'This is an excessively long term exceeding maximum budget length allowed', th: 'คำศัพท์นี้มีความยาวเกินกว่าขีดจำกัดที่กำหนดไว้' },
          question: { en: 'Valid question?', th: 'คำถามที่ถูกต้อง?' },
          summary: { en: 'Valid summary.', th: 'คำสรุปที่ถูกต้อง' }
        },
        {
          key: 'integrity', tone: 'green', symbol: 'I',
          term: { en: 'Integrity', th: 'ความถูกต้อง' },
          question: { en: 'Valid?', th: 'ถูกต้อง?' },
          summary: { en: 'Valid summary.', th: 'คำสรุป' }
        }
      ]
    }
  };
  const r = validateVisual(overBudgetSlide);
  assert.ok(r.content.length > 0, 'Should catch over-budget term');

  const badToneSlide = {
    rendererId: 'pillars',
    visual: {
      pillars: [
        {
          key: 'confidentiality', tone: 'neon-yellow', symbol: 'C',
          term: { en: 'Term', th: 'คำ' }, question: { en: 'Q?', th: 'ค?' }, summary: { en: 'S', th: 'ส' }
        },
        {
          key: 'integrity', tone: 'green', symbol: 'I',
          term: { en: 'Term', th: 'คำ' }, question: { en: 'Q?', th: 'ค?' }, summary: { en: 'S', th: 'ส' }
        }
      ]
    }
  };
  const rTone = validateVisual(badToneSlide);
  assert.ok(rTone.structure.length > 0, 'Should reject invalid tone');
});

test('viewer mounts Slide 2 with a peer triad, three labels and complete takeaway', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-02-cia-overview');

  assert.ok(root.querySelector('.cia-v3-overview'), 'Peer triad must mount');
  const cards = root.querySelectorAll('.v3-goal-explanation');
  assert.equal(cards.length, 3, 'Must render 3 goal explanations');

  const badges = root.querySelectorAll('.v3-goal-symbol');
  assert.equal(badges.length, 3);
  assert.equal(badges[0].querySelector('[lang]').textContent, 'C');
  assert.equal(badges[1].querySelector('[lang]').textContent, 'I');
  assert.equal(badges[2].querySelector('[lang]').textContent, 'A');

  const takeaway = root.querySelector('.v3-footer');
  assert.ok(takeaway, 'Takeaway bar must render');

  // Verify bilingual support
  viewer.setLanguage('both');
  assert.ok(root.querySelectorAll('[lang="th"]').length > 0, 'Thai translations must be rendered in both mode');

  viewer.destroy();
});

test('viewer mounts Slide 6 (incident-flow) with sequence stages and connectors', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-06-compound-impact');

  assert.ok(root.querySelector('.cia-v3-incident'), 'Open incident sequence must mount');
  const stageCards = root.querySelectorAll('.v3-incident-phase');
  assert.equal(stageCards.length, 3, 'Must render 3 stage cards');

  const phases = root.querySelectorAll('.v3-phase-number');
  assert.equal(phases.length, 3);
  assert.equal(phases[0].querySelector('[lang]').textContent, '1');
  assert.equal(phases[1].querySelector('[lang]').textContent, '2');
  assert.equal(phases[2].querySelector('[lang]').textContent, '3');

  const connectors = root.querySelectorAll('.v3-sequence-arrow');
  assert.equal(connectors.length, 2, 'Must render 2 connector arrows between 3 stages');

  const note = root.querySelector('.v3-sequence-note');
  assert.ok(note, 'Disclaimer note badge must render');

  viewer.destroy();
});

test('viewer mounts Slide 7 (scenario-decision) with interactive options and safe navigation', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-07-scenario-reflection');

  assert.ok(root.querySelector('.cia-v3-investigation'), 'Ledger investigation must mount');
  const options = root.querySelectorAll('[data-option-key]');
  assert.equal(options.length, 3, 'Must render 3 options');

  // All interactive options must have data-slide-interactive to avoid fullscreen slide advance
  for (const opt of options) {
    assert.ok(opt.hasAttribute('data-slide-interactive'), 'Options must be data-slide-interactive');
  }

  // Click on Option 2 (Integrity)
  const integrityOption = options[1];
  fire(integrityOption, 'click');

  assert.equal(integrityOption.classList.contains('is-correct'), true, 'Integrity must be marked is-correct');
  assert.equal(options[0].classList.contains('is-incorrect'), true, 'Confidentiality must be marked is-incorrect');
  assert.equal(options[2].classList.contains('is-incorrect'), true, 'Availability must be marked is-incorrect');

  viewer.destroy();
});

test('reading mode toggle renders semantic blocks for structured slides', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-02-cia-overview');

  // Toggle reading mode via the reading button
  const more = root.querySelector('[data-action="more"]');
  if (more) fire(more, 'click');
  const readingBtn = root.querySelector('[data-action="reading"]');
  assert.ok(readingBtn);
  fire(readingBtn, 'click');

  // In reading mode, .learning-slide-body should render standard lists/paragraphs instead of .learning-pillars-deck
  const body = root.querySelector('.learning-slide-body');
  assert.ok(body.querySelector('ul'), 'Reading mode should render semantic ul list');
  assert.ok(body.querySelector('p'), 'Reading mode should render semantic paragraph');

  viewer.destroy();
});

test('viewer mounts Phase 3 Prototype 1 (hero-intro), Prototype 2 (connected diagram), and Prototype 3 (process timeline)', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'th' });

  // Prototype 1: Hero Intro (Slide 1)
  viewer.goToSlide('slide-01-orientation');
  assert.ok(root.querySelector('.cia-editorial'), 'Editorial composition must mount on Slide 1');
  assert.ok(root.querySelector('.cia-editorial-question'), 'Opening question must render as HTML');
  assert.ok(root.querySelector('.cia-editorial-art'), 'Editorial document illustration must render');
  assert.equal(root.querySelectorAll('.cia-editorial-goal').length, 3, 'Must render the three CIA goals');
  assert.equal(root.querySelectorAll('.hero-mini-pill').length, 0, 'Rejected mini pills must not render');

  // Prototype 2: Pillars with Connected Concept Diagram (Slide 2)
  const allText = el => (el.textContent || '') + (el.children || []).map(allText).join('');
  viewer.goToSlide('slide-02-cia-overview');
  assert.ok(root.querySelector('.cia-v3-overview'), 'Overview must mount on Slide 2');
  assert.ok(root.querySelector('.v3-triad-figure'), 'Large peer relationship must render');
  assert.ok(root.querySelector('.v3-graphic'), 'Original geometry must render');
  const pillarTitles = root.querySelectorAll('.v3-node-term');
  assert.equal(pillarTitles.length, 3);
  // Verify English terms retained in Thai mode
  assert.ok(allText(pillarTitles[0]).includes('Confidentiality'), 'Must retain English term in Thai mode');
  assert.ok(allText(pillarTitles[1]).includes('Integrity'), 'Must retain English term in Thai mode');
  assert.ok(allText(pillarTitles[2]).includes('Availability'), 'Must retain English term in Thai mode');

  // Prototype 3: Incident Timeline Track and Flow Connectors (Slide 6)
  viewer.goToSlide('slide-06-compound-impact');
  assert.ok(root.querySelector('.cia-v3-incident'), 'Incident sequence must mount on Slide 6');
  assert.ok(root.querySelector('.v3-incident-sequence'), 'Open incident sequence must render');
  const timeTags = root.querySelectorAll('.v3-phase-number');
  assert.equal(timeTags.length, 3, 'Must render 3 ordered phases without invented timing');
  assert.ok(allText(timeTags[0]).includes('1'), 'First source phase remains first');
  const flowLabels = root.querySelectorAll('.v3-sequence-arrow');
  assert.equal(flowLabels.length, 2, 'Must render 2 connector flow labels');

  viewer.destroy();
});
