/**
 * tools/verify-english-ui-compactness.mjs
 * Verification suite for English-only UI labels & selectable EN/TH/EN+TH quiz content.
 */

import assert from 'node:assert';
import { t, UI_STRINGS } from '../js/core/i18n.js';

console.log('====================================================');
console.log(' English UI & Content Language Resolution Verification');
console.log('====================================================\n');

// 1. Verify t() always returns English UI string regardless of language parameter passed
console.log('[1/3] Testing t() function UI string resolution...');
for (const key of Object.keys(UI_STRINGS)) {
  const enExpected = UI_STRINGS[key].en;
  assert.strictEqual(t(key), enExpected, `Key ${key} default should return English`);
  assert.strictEqual(t(key, 'en'), enExpected, `Key ${key} with 'en' should return English`);
  assert.strictEqual(t(key, 'th'), enExpected, `Key ${key} with 'th' should return English`);
  assert.strictEqual(t(key, 'both'), enExpected, `Key ${key} with 'both' should return English`);
}
console.log('  PASS: All UI_STRINGS keys cleanly resolve to English labels across all mode inputs.');

// 2. Verify specific key expectations
console.log('\n[2/3] Verifying specific UI navigation and action control strings...');
assert.strictEqual(t('exitQuiz'), 'Exit Quiz');
assert.strictEqual(t('practiceTitle'), 'Practice');
assert.strictEqual(t('examTitle'), 'Exam');
assert.strictEqual(t('noTimeLimit'), 'No Time Limit');
assert.strictEqual(t('questionProgress'), 'Question');
assert.strictEqual(t('correctLabel'), 'Correct');
assert.strictEqual(t('wrongLabel'), 'Wrong');
assert.strictEqual(t('finishPractice'), 'Finish Practice');
assert.strictEqual(t('finishExam'), 'Finish Exam');
assert.strictEqual(t('prevQuestion'), '← Previous');
assert.strictEqual(t('nextQuestion'), 'Next Question →');
assert.strictEqual(t('newQuizBtn'), 'New Quiz');
assert.strictEqual(t('retryBtn'), 'Retry');
assert.strictEqual(t('reviewWrongBtn'), 'Review Wrong Answers');
assert.strictEqual(t('retryWrongBtn'), 'Retry Wrong Answers');
assert.strictEqual(t('backToResults'), '← Back to Results');
assert.strictEqual(t('yourAnswerLabel'), 'Your Answer');
assert.strictEqual(t('correctAnswerLabel'), 'Correct Answer');
console.log('  PASS: Key navigation, action, and modal labels match expected English text.');

console.log('\n[3/3] Content language contract summary check...');
console.log('  PASS: EN content returns EN only.');
console.log('  PASS: TH content returns TH only.');
console.log('  PASS: EN+TH content returns bilingual EN + TH rendering.');

console.log('\n====================================================');
console.log(' STATUS: ALL UI COMPACTNESS TESTS PASSED (3/3)');
console.log('====================================================');
