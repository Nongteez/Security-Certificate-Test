/**
 * tools/verify-vocabulary-study-card-fullform.mjs
 * Verification test suite for removing FULL FORM label from Vocabulary Study Cards.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

const jsPath = 'js/ui/screen-vocabulary.js';
const vocabDir = 'content/isc2-cc-2026/vocabulary';

test('1. Study Cards: FULL FORM: label removed while full-form value is preserved', () => {
  const js = fs.readFileSync(jsPath, 'utf8');

  // Locate renderCardsView function
  const cardsStart = js.indexOf('function renderCardsView(entries)');
  assert.ok(cardsStart !== -1, 'renderCardsView must exist');
  const cardsEnd = js.indexOf('function renderFlashcardsView', cardsStart);
  assert.ok(cardsEnd !== -1, 'renderFlashcardsView boundary found');
  const cardsCode = js.slice(cardsStart, cardsEnd);

  // Assert 'dict-fullform-label' and 'Full Form:' are NOT in Study Cards
  assert.ok(!cardsCode.includes('dict-fullform-label'), 'dict-fullform-label must NOT exist in Study Cards');
  assert.ok(!cardsCode.includes('Full Form:'), 'Full Form: label text must NOT exist in Study Cards');

  // Assert dict-fullform-row and dict-fullform-val are retained
  assert.ok(cardsCode.includes('<div class="dict-fullform-row">'), 'dict-fullform-row container must be retained');
  assert.ok(cardsCode.includes('<span class="dict-fullform-val">${escapeHtml(entry.full_form)}</span>'), 'dict-fullform-val with entry.full_form must be retained');

  // Assert acronym badge is retained
  assert.ok(cardsCode.includes('<span class="vocab-acronym-tag">${escapeHtml(entry.acronym)}</span>'), 'Acronym badge markup must be retained on Study Cards');
});

test('2. Vocabulary Detail Modal & Flashcards: Full Form labels strictly preserved', () => {
  const js = fs.readFileSync(jsPath, 'utf8');

  // Modal retains Full Form label
  const modalStart = js.indexOf('function renderModalContent(list, index)');
  const modalEnd = js.indexOf('function renderCardsView', modalStart);
  const modalCode = js.slice(modalStart, modalEnd);
  assert.ok(modalCode.includes('modal-label-dim'), 'modal-label-dim must be preserved in Modal');
  assert.ok(modalCode.includes('Full Form:'), 'Full Form: label must be preserved in Modal');

  // Flashcards retain Full Form label
  const flashStart = js.indexOf('function renderFlashcardsView');
  const flashCode = js.slice(flashStart);
  assert.ok(flashCode.includes('flashcard-back-fullform-wrap'), 'flashcard-back-fullform-wrap must be preserved in Flashcards');
  assert.ok(flashCode.includes('Full Form'), 'Full Form label must be preserved in Flashcards');
});

test('3. Data Integrity: all 313 vocabulary entries remain intact', () => {
  const d1 = JSON.parse(fs.readFileSync(path.join(vocabDir, 'domain-1.json'), 'utf8'));
  const d2 = JSON.parse(fs.readFileSync(path.join(vocabDir, 'domain-2.json'), 'utf8'));
  const d3 = JSON.parse(fs.readFileSync(path.join(vocabDir, 'domain-3.json'), 'utf8'));

  assert.equal(d1.entries.length, 110, 'Domain 1 has 110 entries');
  assert.equal(d2.entries.length, 101, 'Domain 2 has 101 entries');
  assert.equal(d3.entries.length, 102, 'Domain 3 has 102 entries');
  assert.equal(d1.entries.length + d2.entries.length + d3.entries.length, 313, 'Total is 313');

  // Check entries with full_form (e.g., MFA, CIA, etc.)
  const allEntries = [...d1.entries, ...d2.entries, ...d3.entries];
  const fullFormEntries = allEntries.filter(e => e.full_form);
  assert.ok(fullFormEntries.length > 0, 'Entries with full_form must exist');

  const mfa = allEntries.find(e => e.acronym === 'MFA' || e.term === 'MFA' || e.term.includes('Multi-Factor'));
  assert.ok(mfa, 'MFA term exists');
  assert.ok(mfa.full_form, 'MFA has full_form value');
});
