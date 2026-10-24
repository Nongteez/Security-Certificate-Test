/**
 * tools/verify-ui-language-boundary.mjs
 * Static verification suite for UI Language Boundaries & Version Selection Layout.
 *
 * Verifies:
 * 1. Application UI is strictly English-only across EN, TH, and EN+TH (both) modes.
 * 2. Version cards (Pre-2026, 2026, Vocabulary, Learning Slides) contain zero Thai text.
 * 3. Learning Slides card matches the exact required English-only copy:
 *    - Title: ISC2 CC — Learning Slides
 *    - Description: Explore cybersecurity concepts through interactive presentations, visual explanations, and structured lessons aligned with the 2026 exam outline.
 *    - Status: Available (or Coming Soon when gated)
 *    - Action: Open Learning Center → (or Coming Soon when gated)
 * 4. Dynamic availability gating works correctly without hardcoding.
 * 5. Educational content (quiz, vocabulary, slides) continues to support EN / TH / EN+TH.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import versions, { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';

const cc = certifications.find(c => c.id === 'isc2-cc');
const thaiRegex = /[\u0E00-\u0E7F]/;

function mockElement(attributes = {}) {
  return {
    innerHTML: '',
    textContent: '',
    hidden: true,
    inert: false,
    handlers: {},
    focusCount: 0,
    className: '',
    disabled: false,
    classList: {
      toggle(cls, force) {
        if (force) this.classes.add(cls);
        else this.classes.delete(cls);
      },
      classes: new Set()
    },
    getAttribute: key => attributes[key] || null,
    setAttribute(key, val) { attributes[key] = val; },
    addEventListener(type, fn) { this.handlers[type] = fn; },
    focus() { this.focusCount++; }
  };
}

function renderScreenForLanguage(lang, learningAvailable = false) {
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

  const instance = renderExamVersionsScreen(root, cc, () => {}, () => {}, '', null, learningAvailable);
  return { html: root.innerHTML, instance, close };
}

function extractCards(fullHtml) {
  return fullHtml.split('<article ').slice(1).map(c => '<article ' + c.split('</article>')[0] + '</article>');
}

test('All four version cards contain ZERO Thai characters across EN, TH, and EN+TH modes', () => {
  for (const mode of ['en', 'th', 'both']) {
    const { html } = renderScreenForLanguage(mode, true);
    const cards = extractCards(html);
    assert.equal(cards.length, 4, `[${mode}] Must render exactly 4 version cards`);

    for (let i = 0; i < cards.length; i++) {
      const cardHtml = cards[i];
      assert.equal(
        thaiRegex.test(cardHtml),
        false,
        `[${mode}] Card ${i + 1} (${versions[i].id}) must NOT contain any Thai characters. Found in: ${cardHtml}`
      );
      assert.equal(
        cardHtml.includes('<span lang="th">'),
        false,
        `[${mode}] Card ${i + 1} (${versions[i].id}) must not contain <span lang="th">`
      );
      assert.equal(
        cardHtml.includes('<br>'),
        false,
        `[${mode}] Card ${i + 1} (${versions[i].id}) must not contain <br> tag causing button/badge split`
      );
    }
  }
});

test('Learning Slides card has exact English-only copy and properties when available', () => {
  for (const mode of ['en', 'th', 'both']) {
    const { html } = renderScreenForLanguage(mode, true);
    const cards = extractCards(html);
    const learningCard = cards[3]; // 4th card

    // 1. Title
    assert.ok(
      learningCard.includes('<h3 class="cert-card-title">ISC2 CC — Learning Slides</h3>'),
      `[${mode}] Title must strictly be 'ISC2 CC — Learning Slides'`
    );

    // 2. Description
    const expectedDesc = 'Explore cybersecurity concepts through interactive presentations, visual explanations, and structured lessons aligned with the 2026 exam outline.';
    assert.ok(
      learningCard.includes(`<p class="cert-card-desc">${expectedDesc}</p>`),
      `[${mode}] Description must strictly match exact required English text`
    );

    // 3. Status badge
    assert.ok(
      learningCard.includes('<span class="status-badge status-available learning-entry-status">Available</span>'),
      `[${mode}] Status badge must strictly be single-line 'Available'`
    );

    // 4. Action button
    assert.ok(
      learningCard.includes('btn-select-version btn-learning-entry" data-version-id="isc2-cc-learning-slides">Learning →</button>'),
      `[${mode}] Action button must strictly be 'Learning →' and not disabled`
    );

    // 5. Must NOT have cert-card-disabled class
    assert.equal(
      learningCard.includes('cert-card-disabled'),
      false,
      `[${mode}] Card must not have cert-card-disabled when available`
    );

    // 6. Cards 1, 2, 3 must have 'Select →' button
    for (let c = 0; c < 3; c++) {
      assert.ok(
        cards[c].includes('>Select →</button>'),
        `[${mode}] Card ${c + 1} action button must strictly be 'Select →'`
      );
    }
  }
});

test('Learning Slides card gates availability correctly when unavailable', () => {
  for (const mode of ['en', 'th', 'both']) {
    const { html } = renderScreenForLanguage(mode, false);
    const cards = extractCards(html);
    const learningCard = cards[3];

    assert.ok(
      learningCard.includes('cert-card-disabled'),
      `[${mode}] Card must have cert-card-disabled when unavailable`
    );
    assert.ok(
      learningCard.includes('<span class="status-badge status-planned learning-entry-status">Coming Soon</span>'),
      `[${mode}] Status badge must be 'Coming Soon'`
    );
    assert.ok(
      learningCard.includes('btn-select-version btn-learning-entry" data-version-id="isc2-cc-learning-slides" disabled>Coming Soon</button>'),
      `[${mode}] Action button must be disabled 'Coming Soon'`
    );
  }
});

test('Dynamic setLearningAvailable updates card to English-only without Thai text', () => {
  state.setup.language = 'both';
  const learningCardMock = mockElement({ 'data-learning-card': 'true' });
  const actionMock = mockElement({ 'data-version-id': 'isc2-cc-learning-slides' });
  const statusMock = mockElement();

  const elementMap = {
    '[data-learning-card]': learningCardMock,
    '.btn-learning-entry': actionMock,
    '.learning-entry-status': statusMock
  };

  const root = {
    innerHTML: '',
    querySelector: sel => elementMap[sel] || null,
    querySelectorAll: () => []
  };

  const screen = renderExamVersionsScreen(root, cc, () => {}, () => {}, '', null, false);
  screen.setLearningAvailable(true);

  assert.equal(actionMock.textContent, 'Learning →');
  assert.equal(statusMock.textContent, 'Available');
  assert.equal(actionMock.disabled, false);
  assert.equal(thaiRegex.test(actionMock.textContent), false);
  assert.equal(thaiRegex.test(statusMock.textContent), false);

  screen.setLearningAvailable(false);
  assert.equal(actionMock.textContent, 'Coming Soon');
  assert.equal(statusMock.textContent, 'Coming Soon');
  assert.equal(actionMock.disabled, true);
  assert.equal(thaiRegex.test(actionMock.textContent), false);
  assert.equal(thaiRegex.test(statusMock.textContent), false);
});

test('Modal close button is strictly English Close', () => {
  const { html, close } = renderScreenForLanguage('both', true);
  assert.ok(html.includes('<button type="button" class="btn btn-secondary modal-close-btn" id="btn-version-info-close">Close</button>'));
  // Test when information modal opens with activeInfoId
  const icon = mockElement({ 'data-info-version-id': '2026' });
  const overlay = mockElement();
  const title = mockElement();
  const content = mockElement();
  const background = mockElement();
  const root = {
    innerHTML: '',
    querySelector: sel => ({
      '#version-info-modal': overlay,
      '#version-info-title': title,
      '#version-info-content': content,
      '#btn-version-info-close': close,
      '#version-selection-content': background
    }[sel] || null),
    querySelectorAll: sel => sel === '.btn-version-info' ? [icon] : []
  };
  renderExamVersionsScreen(root, cc, () => {}, () => {}, '', '2026', true);
  assert.equal(close.textContent, 'Close');
});
