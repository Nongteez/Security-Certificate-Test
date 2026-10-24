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

test('viewer mounts Slide 2 (pillars) with complete cards, badges, and takeaway', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-02-cia-overview');

  assert.ok(root.querySelector('.learning-pillars-deck'), 'Pillars deck must mount');
  const cards = root.querySelectorAll('.pillar-card');
  assert.equal(cards.length, 3, 'Must render 3 pillar cards');

  const badges = root.querySelectorAll('.pillar-symbol-badge');
  assert.equal(badges.length, 3);
  assert.equal(badges[0].textContent, 'C');
  assert.equal(badges[1].textContent, 'I');
  assert.equal(badges[2].textContent, 'A');

  const takeaway = root.querySelector('.pillars-takeaway-bar');
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

  assert.ok(root.querySelector('.learning-incident-deck'), 'Incident deck must mount');
  const stageCards = root.querySelectorAll('.incident-stage-card');
  assert.equal(stageCards.length, 3, 'Must render 3 stage cards');

  const phases = root.querySelectorAll('.stage-phase-badge');
  assert.equal(phases.length, 3);
  assert.equal(phases[0].textContent, '1');
  assert.equal(phases[1].textContent, '2');
  assert.equal(phases[2].textContent, '3');

  const connectors = root.querySelectorAll('.incident-connector');
  assert.equal(connectors.length, 2, 'Must render 2 connector arrows between 3 stages');

  const note = root.querySelector('.incident-note-badge');
  assert.ok(note, 'Disclaimer note badge must render');

  viewer.destroy();
});

test('viewer mounts Slide 7 (scenario-decision) with interactive options and safe navigation', () => {
  const doc = new TestDocument();
  const root = doc.createElement('div');
  doc.body.append(root);

  const viewer = mountLearningViewer(root, { lesson, language: 'en' });
  viewer.goToSlide('slide-07-scenario-reflection');

  assert.ok(root.querySelector('.learning-scenario-deck'), 'Scenario deck must mount');
  const options = root.querySelectorAll('.scenario-option-card');
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
  const readingBtn = root.querySelectorAll('button').find(b => b.children.some(c => c.textContent === 'Reading layout'));
  assert.ok(readingBtn);
  fire(readingBtn, 'click');

  // In reading mode, .learning-slide-body should render standard lists/paragraphs instead of .learning-pillars-deck
  const body = root.querySelector('.learning-slide-body');
  assert.ok(body.querySelector('ul'), 'Reading mode should render semantic ul list');
  assert.ok(body.querySelector('p'), 'Reading mode should render semantic paragraph');

  viewer.destroy();
});
