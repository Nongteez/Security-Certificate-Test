import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';

import { renderExplanation2026Content } from '../js/ui/components/explanation-2026.js';
import nextBankQuestions from '../data/certs/isc2/cc/versions/next-bank/questions/domain-1.js';
import legacyDomain1 from '../data/certs/isc2/cc/versions/2026/questions/domain-1.js';
import * as loader from '../js/core/question-loader.js';
import * as engine from '../js/core/quiz-engine.js';
import * as storage from '../js/core/storage.js';
import { state } from '../js/core/state.js';
import certifications from '../data/certifications.js';

const cc = certifications[0];

test('2026 Domain 1 Data Structure: All 24 questions have valid explanation_detail', () => {
  assert.equal(nextBankQuestions.length, 24, '2026 Domain 1 must contain exactly 24 questions');

  let structuredCount = 0;
  let tipCount = 0;
  let exampleCount = 0;

  for (const q of nextBankQuestions) {
    assert.ok(q.explanation, `Q${q.id} must preserve original string explanation`);
    assert.ok(q.explanation_th, `Q${q.id} must preserve original string explanation_th`);
    assert.ok(q.short_explanation_en, `Q${q.id} must preserve short_explanation_en`);

    const detail = q.explanation_detail;
    assert.ok(detail, `Q${q.id} must have explanation_detail`);
    assert.ok(detail.correct.en, `Q${q.id} must have correct.en`);
    assert.ok(detail.correct.th, `Q${q.id} must have correct.th`);

    assert.equal(detail.incorrect.length, 3, `Q${q.id} must have exactly 3 incorrect options`);
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[q.correct_idx];
    const expectedIncorrectLetters = letters.filter(l => l !== correctLetter);
    const actualIncorrectLetters = detail.incorrect.map(i => i.letter);
    assert.deepEqual(actualIncorrectLetters.sort(), expectedIncorrectLetters.sort(), `Q${q.id} incorrect options must match non-correct letters`);

    for (const inc of detail.incorrect) {
      assert.ok(inc.text_en && inc.text_en.length > 5, `Q${q.id} incorrect ${inc.letter} must have text_en`);
      assert.ok(inc.text_th && inc.text_th.length > 5, `Q${q.id} incorrect ${inc.letter} must have text_th`);
    }

    if (detail.exam_tip) {
      tipCount++;
      assert.ok(detail.exam_tip.en && detail.exam_tip.th);
    }

    if (detail.example) {
      exampleCount++;
      assert.ok(detail.example.en && detail.example.th);
    }

    structuredCount++;
  }

  assert.equal(structuredCount, 24, 'All 24 questions must be structured');
  assert.equal(tipCount, 2, 'Two questions have explicit exam tips (Q598, Q606)');
  assert.equal(exampleCount, 1, 'One question has an explicit example (Q607)');
});

test('2026 Explanation Renderer in EN mode: Produces correct, incorrect, and optional sections with English content', () => {
  for (const q of nextBankQuestions) {
    const html = renderExplanation2026Content(q, 'en');
    assert.ok(html.includes('exp-2026-container'), 'Must have container class');
    assert.ok(html.includes('exp-correct-section'), 'Must have correct section');
    const correctLetter = ['A', 'B', 'C', 'D'][q.correct_idx];
    assert.ok(html.includes(`Correct Answer: Option ${correctLetter}`), `Must identify Option ${correctLetter}`);
    assert.ok(html.includes('Why Other Options Are Incorrect'), 'Must have incorrect header');
    assert.ok(html.includes('exp-incorrect-list'), 'Must have incorrect list');

    // Should include English reason and NOT include Thai text in EN mode
    assert.ok(html.includes(q.explanation_detail.correct.en.slice(0, 20)));
    assert.doesNotMatch(html, /คำอธิบาย|ข้อ [A-D] ถูกต้อง/);
  }

  // Check Q598 for Exam Tip in EN mode
  const q598 = nextBankQuestions.find(x => x.id === 598);
  const html598 = renderExplanation2026Content(q598, 'en');
  assert.ok(html598.includes('exp-tip-section'), 'Q598 must include tip section');
  assert.ok(html598.includes('Exam Tip'));

  // Check Q607 for Example in EN mode
  const q607 = nextBankQuestions.find(x => x.id === 607);
  const html607 = renderExplanation2026Content(q607, 'en');
  assert.ok(html607.includes('exp-example-section'), 'Q607 must include example section');
  assert.ok(html607.includes('Real-World Example'));
});

test('2026 Explanation Renderer in TH mode: Produces Thai explanations with English UI labels', () => {
  for (const q of nextBankQuestions) {
    const html = renderExplanation2026Content(q, 'th');
    assert.ok(html.includes('exp-correct-section'), 'Must have correct section');
    const correctLetter = ['A', 'B', 'C', 'D'][q.correct_idx];
    assert.ok(html.includes(`Correct Answer: Option ${correctLetter}`), `Must identify Option ${correctLetter}`);
    assert.ok(html.includes('Why Other Options Are Incorrect'), 'UI header remains in English');
    assert.ok(html.includes(q.explanation_detail.correct.th.slice(0, 10)), 'Must include Thai explanation text');
  }

  // Check Q598 Exam Tip in TH mode
  const q598 = nextBankQuestions.find(x => x.id === 598);
  const html598 = renderExplanation2026Content(q598, 'th');
  assert.ok(html598.includes('Policy บอกว่า'));

  // Check Q607 Example in TH mode
  const q607 = nextBankQuestions.find(x => x.id === 607);
  const html607 = renderExplanation2026Content(q607, 'th');
  assert.ok(html607.includes('SOC 2'));
});

test('2026 Explanation Renderer in EN+TH mode: Separates EN and TH blocks with divider', () => {
  for (const q of nextBankQuestions) {
    const html = renderExplanation2026Content(q, 'both');
    assert.ok(html.includes('exp-2026-both'), 'Must have bilingual container');
    assert.ok(html.includes('exp-lang-en'), 'Must have EN block');
    assert.ok(html.includes('exp-lang-th'), 'Must have TH block');
    assert.ok(html.includes('explanation-divider'), 'Must have language divider');
    assert.ok(html.includes('<span class="lang-badge">EN</span> English Explanation'), 'Must have EN header');
    assert.ok(html.includes('<span class="lang-badge">TH</span> คำอธิบายภาษาไทย'), 'Must have TH header');

    // Both languages present
    assert.ok(html.includes(q.explanation_detail.correct.en.slice(0, 20)));
    assert.ok(html.includes(q.explanation_detail.correct.th.slice(0, 10)));
  }
});

test('Fallback resilience: Unstructured questions render clean paragraphs without crashing', () => {
  const unstructuredQuestion = {
    id: 9999,
    dom: 1,
    question: "Test question stem",
    options: ["Alpha", "Beta", "Gamma", "Delta"],
    correct_idx: 0,
    explanation: "This is paragraph one.\n\nThis is paragraph two.\n- Bullet point one\n- Bullet point two",
    explanation_th: "นี่คือย่อหน้าที่หนึ่ง\n\nนี่คือย่อหน้าที่สอง\n- ข้อหนึ่ง\n- ข้อสอง"
  };

  const htmlEn = renderExplanation2026Content(unstructuredQuestion, 'en');
  assert.ok(htmlEn.includes('exp-2026-fallback'), 'Must use fallback class');
  assert.ok(htmlEn.includes('exp-p'), 'Must format paragraphs');
  assert.ok(htmlEn.includes('exp-bullet-item'), 'Must format bullets');

  const htmlBoth = renderExplanation2026Content(unstructuredQuestion, 'both');
  assert.ok(htmlBoth.includes('explanation-divider'), 'Must have bilingual divider');
  assert.ok(htmlBoth.includes('This is paragraph one'));
  assert.ok(htmlBoth.includes('นี่คือย่อหน้าที่หนึ่ง'));
});

test('Legacy Isolation: Pre-2026 exam questions NEVER use 2026 structured explanations', async () => {
  // Verify legacy domain 1 has no explanation_detail
  for (const lq of legacyDomain1) {
    assert.equal(lq.explanation_detail, undefined, `Legacy Q${lq.id} must never have explanation_detail`);
  }

  // Load through question loader so that origins are tagged
  const loadedLegacy = await loader.loadDomainQuestions({ vendorId: 'isc2', certId: 'cc', version: '2026', domainId: 1 });

  state.selectedCertification = cc;
  state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: loadedLegacy.slice(0, 2) });
  
  // Record answer to reveal explanation in practice mode
  engine.recordAnswer({ questionIndex: 0, selectedIndex: loadedLegacy[0].correct_idx });

  const dummyContainer = {
    innerHTML: '',
    querySelector: () => null,
    querySelectorAll: () => []
  };

  const { renderQuizScreen } = await import('../js/ui/screen-quiz.js');
  renderQuizScreen(dummyContainer, () => {});

  // Legacy markup check: Must NOT contain exp-2026-container, must contain standard explanation-en
  assert.doesNotMatch(dummyContainer.innerHTML, /exp-2026-container/);
  assert.doesNotMatch(dummyContainer.innerHTML, /exp-correct-section/);
  assert.match(dummyContainer.innerHTML, /class="explanation-en"/);
  assert.match(dummyContainer.innerHTML, new RegExp(loadedLegacy[0].explanation.slice(0, 25).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));

  engine.exitQuizSession();
});

test('next-bank Activation: Practice and Review screens render 2026 structured explanation', async () => {
  // Load through question loader so that origins are tagged
  const loadedNextBank = await loader.loadDomainQuestions({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainId: 1 });

  state.selectedCertification = cc;
  state.selectedExamVersion = 'next-bank';
  state.setup.language = 'both';

  engine.startQuizSession({ mode: 'practice', questions: loadedNextBank.slice(0, 2) });
  engine.recordAnswer({ questionIndex: 0, selectedIndex: loadedNextBank[0].correct_idx });

  const dummyContainer = {
    innerHTML: '',
    querySelector: () => null,
    querySelectorAll: () => []
  };

  const { renderQuizScreen } = await import('../js/ui/screen-quiz.js');
  renderQuizScreen(dummyContainer, () => {});

  // next-bank Practice Quiz Screen verification
  assert.match(dummyContainer.innerHTML, /exp-2026-container/);
  assert.match(dummyContainer.innerHTML, /exp-correct-section/);
  assert.match(dummyContainer.innerHTML, /Correct Answer: Option B/);
  assert.match(dummyContainer.innerHTML, /Why Other Options Are Incorrect/);
  assert.match(dummyContainer.innerHTML, /<span class="exp-letter-tag">[A-D]<\/span>/, 'Must render plain letter label');
  assert.doesNotMatch(dummyContainer.innerHTML, /<span class="exp-letter-tag">Option [A-D]<\/span>/, 'Must not render Option badge prefix');
  assert.match(dummyContainer.innerHTML, /English Explanation/);
  assert.match(dummyContainer.innerHTML, /คำอธิบายภาษาไทย/);

  // Now record answer for question 1 and finish quiz to test Review Screen
  engine.recordAnswer({ questionIndex: 1, selectedIndex: (loadedNextBank[1].correct_idx + 1) % 4 }); // wrong answer
  engine.finishQuizSession();

  const { renderReviewWrongScreen } = await import('../js/ui/screen-results.js');
  
  const dummyReviewContainer = {
    innerHTML: '',
    querySelector: () => null,
    querySelectorAll: () => []
  };

  renderReviewWrongScreen(dummyReviewContainer, () => {});

  // Review Screen must also use the structured 2026 explanation layout
  assert.match(dummyReviewContainer.innerHTML, /exp-2026-container/);
  assert.match(dummyReviewContainer.innerHTML, /exp-correct-section/);
  assert.match(dummyReviewContainer.innerHTML, /Why Other Options Are Incorrect/);
  assert.match(dummyReviewContainer.innerHTML, /<span class="exp-letter-tag">[A-D]<\/span>/, 'Review screen renders plain letter label');
  assert.match(dummyReviewContainer.innerHTML, /English Explanation/);

  engine.exitQuizSession();
});

test('Minimal Neutral Design: CSS verifies neutral theme, plain letter labels, and preserved icons', () => {
  const css = fs.readFileSync('css/quiz.css', 'utf-8');

  // 1. No colored left borders on sections
  assert.doesNotMatch(css, /\.exp-correct-section\s*\{[^}]*border-left/, 'Must remove colored left border from correct section');
  assert.doesNotMatch(css, /\.exp-incorrect-section\s*\{[^}]*border-left/, 'Must remove colored left border from incorrect section');
  assert.doesNotMatch(css, /\.exp-example-section\s*\{[^}]*border-left/, 'Must remove colored left border from example section');
  assert.doesNotMatch(css, /\.exp-tip-section\s*\{[^}]*border-left/, 'Must remove colored left border from tip section');

  // 2. No tinted gradient backgrounds
  assert.doesNotMatch(css, /\.exp-correct-section\s*\{[^}]*linear-gradient/, 'Must remove tinted gradient from correct section');
  assert.doesNotMatch(css, /\.exp-example-section\s*\{[^}]*linear-gradient/, 'Must remove tinted gradient from example section');
  assert.doesNotMatch(css, /\.exp-tip-section\s*\{[^}]*linear-gradient/, 'Must remove tinted gradient from tip section');
  assert.doesNotMatch(css, /html\[data-theme="light"\]\s+\.exp-correct-section/, 'Must remove light-mode green gradient override');

  // 3. No nested card borders on incorrect items
  assert.doesNotMatch(css, /\.exp-incorrect-item\s*\{[^}]*border:\s*1px\s+solid/, 'Must remove nested card box-border from incorrect items');

  // 4. Option tags A/B/C/D must be plain-text neutral labels (no badge border, background, or radius)
  assert.doesNotMatch(css, /\.exp-letter-tag\s*\{[^}]*var\(--red-bg\)/, 'Letter tag must not use red background');
  assert.doesNotMatch(css, /\.exp-letter-tag\s*\{[^}]*color:\s*var\(--red\)/, 'Letter tag must not use red text color');
  assert.match(css, /\.exp-letter-tag\s*\{[^}]*background:\s*transparent/, 'Letter tag must have transparent background (unbadged)');
  assert.match(css, /\.exp-letter-tag\s*\{[^}]*border:\s*none/, 'Letter tag must have border: none (unbadged)');
  assert.match(css, /\.exp-letter-tag\s*\{[^}]*color:\s*var\(--text-dim\)/, 'Letter tag must use neutral text color');

  // 5. Preserved status icons
  assert.match(css, /\.exp-status-correct\s*\{[^}]*color:\s*var\(--green\)/, 'Must keep green color for correct icon');
  assert.match(css, /\.exp-status-incorrect\s*\{[^}]*color:\s*var\(--red\)/, 'Must keep red color for incorrect icon');

  // 6. Subtle neutral dividers
  assert.match(css, /\.exp-section\s*\+\s*\.exp-section\s*\{[^}]*border-top:\s*1px\s+solid\s+var\(--line\)/, 'Sections separated by subtle neutral divider');
  assert.match(css, /\.exp-incorrect-item\s*\{[^}]*border-bottom:\s*1px\s+solid\s+var\(--line\)/, 'Incorrect items separated as clean rows by subtle neutral divider');

  // 7. Icon characters and plain letter labels in component
  const compJs = fs.readFileSync('js/ui/components/explanation-2026.js', 'utf-8');
  assert.match(compJs, /<span class="exp-status-icon exp-status-correct">✓<\/span>/, 'Must have green ✓ icon markup');
  assert.match(compJs, /<span class="exp-status-icon exp-status-incorrect">✕<\/span>/, 'Must have red ✕ icon markup');
  assert.match(compJs, /<span class="exp-letter-tag">\${item\.letter}<\/span>/, 'Must render plain letter label without Option prefix');
  assert.doesNotMatch(compJs, /<span class="exp-letter-tag">Option \${item\.letter}<\/span>/, 'Must not contain Option prefix');
});

