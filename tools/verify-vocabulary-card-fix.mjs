/**
 * tools/verify-vocabulary-card-fix.mjs
 * Verification suite for ISC2 CC — Exam Vocabulary card language & layout fix.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import versions, { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';
import { t } from '../js/core/i18n.js';
import { loadDomainQuestions } from '../js/core/question-loader.js';

const cc = certifications.find(c => c.id === 'isc2-cc');
const vocabId = 'isc2-cc-vocabulary';

function mockElement(attributes = {}) {
  return {
    innerHTML: '',
    textContent: '',
    hidden: true,
    inert: false,
    handlers: {},
    focusCount: 0,
    getAttribute: key => attributes[key] || null,
    addEventListener(type, fn) { this.handlers[type] = fn; },
    focus() { this.focusCount++; }
  };
}

function renderScreenForLanguage(lang) {
  state.setup.language = lang;
  const overlay = mockElement();
  const title = mockElement();
  const content = mockElement();
  const close = mockElement();
  const background = mockElement();

  const selectors = {
    '#version-info-modal': overlay,
    '#version-info-title': title,
    '#version-info-content': content,
    '#btn-version-info-close': close,
    '#version-selection-content': background
  };

  const root = {
    innerHTML: '',
    querySelector: sel => selectors[sel] || null,
    querySelectorAll: () => []
  };

  renderExamVersionsScreen(root, cc, () => {}, () => {});
  return root.innerHTML;
}

function extractCardHtml(fullHtml, cardIndex) {
  const cards = fullHtml.split('<article ').slice(1).map(c => '<article ' + c.split('</article>')[0] + '</article>');
  return cards[cardIndex];
}

const thaiRegex = /[\u0E00-\u0E7F]/;

test('data/exam-versions.js contains exact expected metadata for vocabulary', () => {
  const vocab = versions.find(v => v.id === vocabId);
  assert.ok(vocab, 'Vocabulary entry exists');
  assert.equal(vocab.title, 'ISC2 CC — Exam Vocabulary');
  assert.equal(vocab.description, 'Learn and practice essential cybersecurity terminology for the ISC2 Certified in Cybersecurity (CC) exam.');
  assert.equal(vocab.status, 'coming-soon');
  assert.equal(vocab.type, 'vocabulary');
  assert.equal(resolveExamVersion('isc2-cc', vocabId), null, 'Vocabulary cannot resolve as an exam');
});

test('Vocabulary card renders strictly English UI text and clean layout across EN, TH, and EN+TH', () => {
  const modes = ['en', 'th', 'both'];

  for (const mode of modes) {
    const html = renderScreenForLanguage(mode);
    const vocabCard = extractCardHtml(html, 2); // 3rd card is vocabulary

    // 1. Title verification
    assert.ok(
      vocabCard.includes('<h3 class="cert-card-title">ISC2 CC — Exam Vocabulary</h3>'),
      `[${mode}] Title must strictly be English 'ISC2 CC — Exam Vocabulary'`
    );

    // 2. Description verification
    assert.ok(
      vocabCard.includes('<p class="cert-card-desc">Learn and practice essential cybersecurity terminology for the ISC2 Certified in Cybersecurity (CC) exam.</p>'),
      `[${mode}] Description must strictly be expected English text`
    );

    // 3. Status badge verification
    assert.ok(
      vocabCard.includes('<span class="status-badge status-planned">Coming Soon</span>'),
      `[${mode}] Status badge must strictly be single-line 'Coming Soon'`
    );

    // 4. Action button verification
    assert.ok(
      vocabCard.includes('<button type="button" class="btn btn-secondary btn-disabled" disabled>Coming Soon</button>'),
      `[${mode}] Action button must strictly be disabled 'Coming Soon'`
    );

    // 5. Info button aria-label verification
    assert.ok(
      vocabCard.includes('aria-label="View vocabulary information: ISC2 CC — Exam Vocabulary"'),
      `[${mode}] Info button aria-label must be English-only`
    );

    // 6. Card must be disabled
    assert.ok(
      vocabCard.includes('class="cert-card version-card cert-card-disabled"'),
      `[${mode}] Card must have cert-card-disabled class`
    );

    // 7. No Thai characters in the card
    assert.equal(
      thaiRegex.test(vocabCard),
      false,
      `[${mode}] Vocabulary card must NOT contain any Thai characters`
    );

    // 8. No <br> tags in the card (which previously broke inline-flex and caused overflow)
    assert.equal(
      vocabCard.includes('<br>'),
      false,
      `[${mode}] Vocabulary card must NOT contain <br> tags`
    );
  }
});

test('Other exam version cards remain stable, available, and English-only', () => {
  const html = renderScreenForLanguage('both');
  const card1 = extractCardHtml(html, 0);
  const card2 = extractCardHtml(html, 1);

  assert.ok(card1.includes('ISC2 CC — Pre-2026 Exam Outline'));
  assert.ok(card1.includes('583 practice questions based on the previous ISC2 CC exam domain structure.'));
  assert.ok(card1.includes('status-available">Available</span>'));
  assert.ok(card1.includes('Select →</button>'));

  assert.ok(card2.includes('ISC2 CC — 2026 Exam Outline'));
  assert.ok(card2.includes('status-available">Available</span>'));
  assert.ok(card2.includes('Select →</button>'));
});

test('UI labels remain English-only via i18n across all modes', () => {
  for (const mode of ['en', 'th', 'both']) {
    assert.equal(t('practiceTitle', mode), 'Practice');
    assert.equal(t('examTitle', mode), 'Exam');
    assert.equal(t('finishExam', mode), 'Finish Exam');
  }
});

test('Question content language preferences still work correctly for questions', async () => {
  const questions = await loadDomainQuestions({
    vendorId: 'isc2',
    certId: 'cc',
    version: 'next-bank',
    domainId: 1
  });

  assert.ok(questions.length > 0, 'Loaded questions from next-bank Domain 1');
  const sample = questions[0];

  // Verify English content exists
  assert.ok(sample.question && sample.question.trim().length > 0, 'Question has English text');
  assert.ok(sample.options && sample.options.length === 4, 'Question has 4 English options');

  // Verify Thai content exists
  assert.ok(sample.question_th && sample.question_th.trim().length > 0, 'Question has Thai text');
  assert.ok(sample.options_th && sample.options_th.length === 4, 'Question has 4 Thai options');

  // Verify Thai characters exist in Thai content
  assert.ok(thaiRegex.test(sample.question_th), 'question_th contains Thai text');
  assert.ok(thaiRegex.test(sample.options_th[0]), 'options_th contains Thai text');
});
