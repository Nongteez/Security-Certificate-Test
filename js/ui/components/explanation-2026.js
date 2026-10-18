/**
 * 2026 Exam Outline Structured Explanation Component
 * 
 * Provides enhanced explanation formatting exclusively for ISC2 CC 2026 (version ID: next-bank).
 * Supports:
 *   1. Correct Answer breakdown with clear option identification
 *   2. Incorrect Options breakdown with A/B/C/D badges and distinct reasoning
 *   3. Optional Examples (when provided)
 *   4. Optional Exam Tips (when provided)
 *   5. EN / TH / EN+TH language modes
 *   6. Fallback paragraph formatting for unstructured questions
 */

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const LETTER_TO_IDX = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };

/**
 * Escapes HTML characters for safe rendering.
 * @param {string} str 
 * @returns {string}
 */
export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Formats multi-paragraph plain text into clean HTML paragraphs.
 * @param {string} text 
 * @returns {string}
 */
function formatParagraphs(text) {
  if (!text) return '';
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length <= 1) {
    return `<p class="exp-p">${escapeHtml(text)}</p>`;
  }
  return lines.map(line => {
    if (line.startsWith('- ') || line.startsWith('• ')) {
      return `<div class="exp-bullet-item"><span class="exp-bullet">•</span> <span>${escapeHtml(line.slice(2))}</span></div>`;
    }
    return `<p class="exp-p">${escapeHtml(line)}</p>`;
  }).join('');
}

/**
 * Renders a single language block (EN or TH) for a structured 2026 question.
 * @param {Object} question - Question object
 * @param {'en'|'th'} langCode - Target language
 * @returns {string} HTML string
 */
function renderSingleLangStructured(question, langCode) {
  const detail = question.explanation_detail;
  const isTh = langCode === 'th';
  const correctIdx = question.correct_idx;
  const correctLetter = LETTERS[correctIdx] || 'A';
  
  const options = (isTh && question.options_th) ? question.options_th : question.options;
  const correctOptionText = (options && options[correctIdx]) ? options[correctIdx] : '';

  // 1. Correct Answer Section
  const correctReason = isTh ? (detail.correct.th || detail.correct.en) : detail.correct.en;
  let correctHtml = `
    <div class="exp-section exp-correct-section">
      <div class="exp-section-title">
        <span class="exp-status-icon exp-status-correct">✓</span>
        <span class="exp-title-text">Correct Answer: Option ${correctLetter}</span>
      </div>
      ${correctOptionText ? `<div class="exp-option-quote">"${escapeHtml(correctOptionText)}"</div>` : ''}
      <div class="exp-section-body">
        ${escapeHtml(correctReason)}
      </div>
    </div>
  `;

  // 2. Incorrect Options Section
  let incorrectHtml = '';
  if (detail.incorrect && Array.isArray(detail.incorrect) && detail.incorrect.length > 0) {
    const itemsHtml = detail.incorrect.map(item => {
      const idx = item.idx !== undefined ? item.idx : LETTER_TO_IDX[item.letter];
      const optText = (idx !== undefined && options && options[idx]) ? options[idx] : '';
      const reason = isTh ? (item.text_th || item.text_en) : item.text_en;
      return `
        <div class="exp-incorrect-item">
          <div class="exp-incorrect-header">
            <span class="exp-letter-tag">${item.letter}</span>
            ${optText ? `<span class="exp-incorrect-option-text">${escapeHtml(optText)}</span>` : ''}
          </div>
          <div class="exp-incorrect-body">
            ${escapeHtml(reason)}
          </div>
        </div>
      `;
    }).join('');

    incorrectHtml = `
      <div class="exp-section exp-incorrect-section">
        <div class="exp-section-title">
          <span class="exp-status-icon exp-status-incorrect">✕</span>
          <span class="exp-title-text">Why Other Options Are Incorrect</span>
        </div>
        <div class="exp-incorrect-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }

  // 3. Optional Example Section
  let exampleHtml = '';
  if (detail.example) {
    const exText = isTh ? (detail.example.th || detail.example.en) : detail.example.en;
    if (exText) {
      exampleHtml = `
        <div class="exp-section exp-example-section">
          <div class="exp-section-title">
            <span class="exp-status-icon">📌</span>
            <span class="exp-title-text">Real-World Example</span>
          </div>
          <div class="exp-section-body">
            ${escapeHtml(exText)}
          </div>
        </div>
      `;
    }
  }

  // 4. Optional Exam Tip Section
  let tipHtml = '';
  if (detail.exam_tip) {
    const tipText = isTh ? (detail.exam_tip.th || detail.exam_tip.en) : detail.exam_tip.en;
    if (tipText) {
      tipHtml = `
        <div class="exp-section exp-tip-section">
          <div class="exp-section-title">
            <span class="exp-status-icon">💡</span>
            <span class="exp-title-text">Exam Tip</span>
          </div>
          <div class="exp-section-body">
            ${escapeHtml(tipText)}
          </div>
        </div>
      `;
    }
  }

  return `
    <div class="exp-single-lang-wrap">
      ${correctHtml}
      ${incorrectHtml}
      ${exampleHtml}
      ${tipHtml}
    </div>
  `;
}

/**
 * Main explanation renderer for 2026 Exam Outline (next-bank).
 * @param {Object} question - Question object from question bank
 * @param {'en'|'th'|'both'} lang - Language mode from state.setup.language
 * @returns {string} HTML content for the explanation container
 */
export function renderExplanation2026Content(question, lang = 'en') {
  if (!question) return '';

  // If question has structured explanation data
  if (question.explanation_detail && question.explanation_detail.correct) {
    if (lang === 'en') {
      return `
        <div class="exp-2026-container exp-2026-en">
          ${renderSingleLangStructured(question, 'en')}
        </div>
      `;
    }

    if (lang === 'th') {
      return `
        <div class="exp-2026-container exp-2026-th">
          ${renderSingleLangStructured(question, 'th')}
        </div>
      `;
    }

    // Both (EN + TH) mode: clearly separated language sections
    return `
      <div class="exp-2026-container exp-2026-both">
        <div class="exp-lang-block exp-lang-en">
          <div class="exp-lang-label"><span class="lang-badge">EN</span> English Explanation</div>
          ${renderSingleLangStructured(question, 'en')}
        </div>
        <div class="explanation-divider" aria-hidden="true"></div>
        <div class="exp-lang-block exp-lang-th">
          <div class="exp-lang-label"><span class="lang-badge">TH</span> คำอธิบายภาษาไทย</div>
          ${renderSingleLangStructured(question, 'th')}
        </div>
      </div>
    `;
  }

  // Fallback for unstructured questions: clean paragraph formatting
  if (lang === 'en') {
    return `<div class="explanation-en exp-2026-fallback">${formatParagraphs(question.explanation)}</div>`;
  } else if (lang === 'th') {
    return `<div class="explanation-th exp-2026-fallback">${formatParagraphs(question.explanation_th || question.explanation)}</div>`;
  } else {
    return `
      <div class="exp-2026-container exp-2026-both">
        <div class="explanation-en exp-2026-fallback">
          <span class="lang-badge">EN</span>
          ${formatParagraphs(question.explanation)}
        </div>
        <div class="explanation-divider" aria-hidden="true"></div>
        <div class="explanation-th exp-2026-fallback">
          <span class="lang-badge">TH</span>
          ${formatParagraphs(question.explanation_th || question.explanation)}
        </div>
      </div>
    `;
  }
}
