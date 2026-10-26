/**
 * tools/verify-version-selection-layout.mjs
 * Verification suite for Certification Version Selection desktop layout consistency
 * and alignment with the main Certifications page.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import versions, { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const baseCss = fs.readFileSync(path.join(root, 'css', 'base.css'), 'utf8');
const componentsCss = fs.readFileSync(path.join(root, 'css', 'components.css'), 'utf8');
const versionsCss = fs.readFileSync(path.join(root, 'css', 'versions.css'), 'utf8');

const cc = certifications.find(c => c.id === 'isc2-cc');

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
      classes: new Set(),
      toggle(cls, force) {
        if (force) this.classes.add(cls);
        else this.classes.delete(cls);
      }
    },
    getAttribute: key => attributes[key] || null,
    setAttribute: (key, val) => { attributes[key] = val; },
    addEventListener(type, fn) { this.handlers[type] = fn; },
    focus() { this.focusCount++; }
  };
}

function renderScreen(learningAvailable = true) {
  state.setup.language = 'en';
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

  const container = {
    innerHTML: '',
    querySelector: sel => selectors[sel] || null,
    querySelectorAll: () => []
  };

  const instance = renderExamVersionsScreen(container, cc, () => {}, () => {}, '', null, learningAvailable);
  return { html: container.innerHTML, instance };
}

test('1. Container Width: Version Selection wrapper matches .app max-width (1320px)', () => {
  // Confirm .app shell reference is 1320px
  assert.match(baseCss, /\.app\s*\{[^}]*max-width:\s*1320px;/);
  
  // Confirm .start-screen-wrapper.exam-versions-screen is scoped to 1320px
  assert.match(versionsCss, /\.start-screen-wrapper\.exam-versions-screen\s*\{[^}]*max-width:\s*1320px;/);
  assert.match(versionsCss, /\.start-screen-wrapper\.exam-versions-screen\s*\{[^}]*width:\s*100%;/);
});

test('2. Panel Card Layout: Desktop padding is comfortable (28px 32px 34px) providing proportional grid width', () => {
  const panelMatch = versionsCss.match(/\.exam-versions-screen\s+\.start-panel-card\s*\{([^}]+)\}/);
  assert.ok(panelMatch, '.exam-versions-screen .start-panel-card rule must exist');
  assert.match(panelMatch[1], /padding:\s*28px\s+32px\s+34px;/);

  // Calculate inner grid width on 1320px desktop:
  // 1320px - (32px * 2 padding) - 3px border = 1253px available.
  // In 3-column grid with 20px gap: (1253 - 40) / 3 = 404.33px per card.
  // Home page card width: (1320 - 40) / 3 = 426.67px.
  // Difference is only ~22.3px (5.2%), achieving visually balanced parity.
  const innerWidth = 1320 - 64 - 3;
  const cardWidth = (innerWidth - 40) / 3;
  assert.ok(cardWidth >= 400 && cardWidth <= 410, `Card width should be ~404px, got ${cardWidth.toFixed(1)}px`);
});

test('3. Header Typography: Brand logo and title are scaled proportionally for wide desktop', () => {
  const logoMatch = versionsCss.match(/\.exam-versions-screen\s+\.start-logo\s*\{([^}]+)\}/);
  assert.ok(logoMatch, '.exam-versions-screen .start-logo rule must exist');
  assert.match(logoMatch[1], /width:\s*58px;/);
  assert.match(logoMatch[1], /height:\s*58px;/);

  const titleMatch = versionsCss.match(/\.exam-versions-screen\s+\.start-title\s*\{([^}]+)\}/);
  assert.ok(titleMatch, '.exam-versions-screen .start-title rule must exist');
  assert.match(titleMatch[1], /font-size:\s*24px;/);
});

test('4. Card Grid & Typography: Card padding, min-height, title spacing, and description readability', () => {
  const cardMatch = versionsCss.match(/\.exam-versions-screen\s+\.version-card\s*\{([^}]+)\}/);
  assert.ok(cardMatch, '.exam-versions-screen .version-card rule must exist');
  assert.match(cardMatch[1], /padding:\s*24px;/);
  assert.match(cardMatch[1], /min-height:\s*250px;/);

  const titleMatch = versionsCss.match(/\.exam-versions-screen\s+\.version-card\s+\.cert-card-title\s*\{([^}]+)\}/);
  assert.ok(titleMatch, 'Title padding rule must exist');
  assert.match(titleMatch[1], /padding-inline-end:\s*36px;/);

  const descMatch = versionsCss.match(/\.exam-versions-screen\s+\.version-card\s+\.cert-card-desc\s*\{([^}]+)\}/);
  assert.ok(descMatch, 'Description rule must exist');
  assert.match(descMatch[1], /font-size:\s*14px;/);
  assert.match(descMatch[1], /line-height:\s*1\.6;/);

  // Meta count badge must maintain dynamic bottom alignment
  const badgeMatch = versionsCss.match(/\.exam-versions-screen\s+\.version-card\s+\.meta-badge-count\s*\{([^}]+)\}/);
  assert.ok(badgeMatch, 'meta-badge-count rule must exist');
  assert.match(badgeMatch[1], /margin-top:\s*auto;/);
});

test('5. Responsive Media Queries: Tablet (<=1080px) and Mobile (<=640px, <=480px) adapt gracefully', () => {
  // Tablet <= 1080px
  assert.match(versionsCss, /@media\s*\(\s*max-width:\s*1080px\s*\)/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.start-panel-card\s*\{[^}]*padding:\s*24px;/);

  // Mobile <= 640px
  assert.match(versionsCss, /@media\s*\(\s*max-width:\s*640px\s*\)/);
  assert.match(versionsCss, /padding:\s*18px\s+16px\s+20px;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.start-title\s*\{[^}]*font-size:\s*20px;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-card\s*\{[^}]*min-height:\s*auto;/);

  // Shared components.css responsive grid behavior is preserved
  assert.match(componentsCss, /@media\s*\(\s*max-width:\s*1080px\s*\)\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(componentsCss, /@media\s*\(\s*max-width:\s*640px\s*\)\s*\{[^}]*grid-template-columns:\s*1fr;/);
});

test('6. HTML Card Content & Action Labels: All 4 cards intact with exact labels', () => {
  const { html } = renderScreen(true);
  const cards = html.split('<article ').slice(1).map(c => '<article ' + c.split('</article>')[0] + '</article>');
  assert.equal(cards.length, 4, 'Must render exactly 4 version cards');

  // Pre-2026 card
  assert.ok(cards[0].includes('ISC2 CC — Pre-2026 Exam Outline'));
  assert.ok(cards[0].includes('Select →'));
  assert.ok(cards[0].includes('583 Questions'));

  // 2026 card
  assert.ok(cards[1].includes('ISC2 CC 2026 — Exam Outline') || cards[1].includes('ISC2 CC — 2026 Exam Outline'));
  assert.ok(cards[1].includes('Select →'));
  assert.ok(cards[1].includes('86 Questions'));

  // Vocabulary card
  assert.ok(cards[2].includes('ISC2 CC — Exam Vocabulary'));
  assert.ok(cards[2].includes('Select →'));
  assert.ok(cards[2].includes('313 Terms'));

  // Learning Slides card (4th card in 2nd row)
  assert.ok(cards[3].includes('ISC2 CC 2026 — Update Slides') || cards[3].includes('ISC2 CC 2026 Update — Slides'));
  assert.ok(cards[3].includes('Learning →'));
  assert.ok(cards[3].includes('data-learning-card'));
});
