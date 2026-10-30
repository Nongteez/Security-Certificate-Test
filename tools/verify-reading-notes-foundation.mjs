/**
 * tools/verify-reading-notes-foundation.mjs
 *
 * Automated verification suite for ISC2 CC 2026 — Reading Notes (Foundation & UI Shell).
 * Validates:
 * 1. Exam versions registry & card order (row 2, column 2)
 * 2. Version selection card rendering, 'Available' status, and 'Read →' button
 * 3. Routing from versions screen directly into reading notes
 * 4. Reading screen shell: 2-column layout, sticky/collapsible sidebar, continuous reading area
 * 5. All 5 Domain accordion entries, independent chevron toggle, and active domain selection
 * 6. Empty state presentation for unpublished domain content
 * 7. Back navigation returning to exam versions
 * 8. CSS tokens, dark/light theme classes, and index.html stylesheet link
 * 9. Preservation of existing question banks, vocabulary, and learning slides
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Import project modules
import versions, { getExamVersions } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state } from '../js/core/state.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';
import { renderReadingScreen, READING_DOMAINS } from '../js/ui/screen-reading.js';

// DOM Fixture
import { createVocabularyDOM } from './fixtures/vocabulary-dom.mjs';

let totalTests = 0;
let passedTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

console.log('=== ISC2 CC 2026 — Reading Notes Foundation Verification ===\n');

// -------------------------------------------------------------
// Test 1: Exam Versions Registry & Grid Position
// -------------------------------------------------------------
runTest('Exam Versions Registry — Card position, attributes, and no fake statistics', () => {
  const ccVersions = getExamVersions('isc2-cc');
  const slidesIdx = ccVersions.findIndex(v => v.id === 'isc2-cc-learning-slides');
  const readingIdx = ccVersions.findIndex(v => v.id === 'isc2-cc-reading-notes');

  assert.ok(slidesIdx !== -1, 'isc2-cc-learning-slides must exist');
  assert.ok(readingIdx !== -1, 'isc2-cc-reading-notes must exist');
  assert.equal(readingIdx, slidesIdx + 1, 'Reading Notes must immediately follow Update Slides');
  assert.equal(readingIdx, 4, 'Reading Notes must occupy index 4 (row 2, column 2 in 3-column grid)');

  const card = ccVersions[readingIdx];
  assert.equal(card.title, 'ISC2 CC 2026 — Reading Notes');
  assert.equal(card.description, 'Read cybersecurity study notes with clear explanations, examples, and essential exam concepts.');
  assert.equal(card.type, 'reading');
  assert.equal(card.status, 'available');
  assert.equal(card.questionCount, undefined, 'Must not display fabricated question counts');
  assert.equal(card.vocabularyCount, undefined, 'Must not display fabricated vocabulary counts');
});

// -------------------------------------------------------------
// Test 2: Card Rendering on Exam Versions Screen
// -------------------------------------------------------------
runTest('Card Rendering — Available status, Read → button, and active state', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    const cc = certifications.find(c => c.id === 'isc2-cc');

    let selectedId = null;
    renderExamVersionsScreen(container, cc, (id) => {
      selectedId = id;
    }, () => {});

    const cards = container.querySelectorAll('.version-card');
    assert.equal(cards.length, 5, 'Should render 5 version cards');

    const readingCard = cards[4];
    assert.ok(readingCard, '5th card must exist');
    assert.doesNotMatch(readingCard.className, /cert-card-disabled/, 'Reading card must not be disabled');

    const title = readingCard.querySelector('.cert-card-title');
    assert.equal(title?.textContent.trim(), 'ISC2 CC 2026 — Reading Notes');

    const statusBadge = readingCard.querySelector('.status-badge');
    assert.equal(statusBadge?.textContent.trim(), 'Available');
    assert.match(statusBadge?.className || '', /status-available/);

    const readBtn = readingCard.querySelector('.btn-reading-entry');
    assert.ok(readBtn, 'Must have .btn-reading-entry button');
    assert.equal(readBtn.textContent.trim(), 'Read →');
    assert.equal(readBtn.disabled, false, 'Read button must be enabled');

    // Simulate clicking the Read button
    readBtn.click();
    assert.equal(selectedId, 'isc2-cc-reading-notes', 'Clicking Read button must trigger onSelectVersion with isc2-cc-reading-notes');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 3: Reading Screen — Two-Column Documentation Layout
// -------------------------------------------------------------
runTest('Reading Screen Shell — Header, sidebar, content pane, and back button', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    let backTriggered = false;
    renderReadingScreen(container, () => {
      backTriggered = true;
    });

    const backBtn = container.querySelector('#btn-reading-back');
    assert.ok(backBtn, '#btn-reading-back must exist');
    assert.equal(backBtn.textContent.trim(), '← Back to Exam Versions');

    backBtn.click();
    assert.ok(backTriggered, 'Back button must trigger onBack callback');

    const sidebarToggleBtn = container.querySelector('#btn-toggle-sidebar');
    assert.ok(sidebarToggleBtn, 'Sidebar toggle button must exist');

    const sidebar = container.querySelector('#reading-sidebar');
    assert.ok(sidebar, 'Left navigation sidebar must exist');

    const contentPane = container.querySelector('#reading-content-pane');
    assert.ok(contentPane, 'Main reading content pane must exist');

    const article = container.querySelector('.reading-article');
    assert.ok(article, '.reading-article must exist inside content pane');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 4: All 5 Domains & Authoritative 2026 Objectives in Navigation Sidebar
// -------------------------------------------------------------
runTest('Sidebar Navigation — 5 Domains with Authoritative 2026 Objectives 1.1–5.5', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    renderReadingScreen(container, () => {});

    assert.equal(READING_DOMAINS.length, 5, 'Must have 5 official ISC2 CC domains');
    assert.equal(READING_DOMAINS[0].shortTitle, 'Security Principles');
    assert.equal(READING_DOMAINS[1].shortTitle, 'Security Governance');
    assert.equal(READING_DOMAINS[2].shortTitle, 'Access Controls');
    assert.equal(READING_DOMAINS[3].shortTitle, 'Network Security');
    assert.equal(READING_DOMAINS[4].shortTitle, 'Security Operations');

    // Verify exact objective counts and titles
    assert.equal(READING_DOMAINS[0].objectives.length, 5, 'Domain 1 must have 5 objectives');
    assert.equal(READING_DOMAINS[0].objectives[0].title, '1.1 Understand cybersecurity concepts');
    assert.equal(READING_DOMAINS[0].objectives[4].title, '1.5 Maintain professional and ethical conduct');

    assert.equal(READING_DOMAINS[1].objectives.length, 4, 'Domain 2 must have 4 objectives');
    assert.equal(READING_DOMAINS[1].objectives[0].title, '2.1 Plan Governance, Risk, and Compliance (GRC)');
    assert.equal(READING_DOMAINS[1].objectives[3].title, '2.4 Measure cybersecurity effectiveness');

    assert.equal(READING_DOMAINS[2].objectives.length, 2, 'Domain 3 must have 2 objectives');
    assert.equal(READING_DOMAINS[2].objectives[0].title, '3.1 Understand identity life cycle management');
    assert.equal(READING_DOMAINS[2].objectives[1].title, '3.2 Understand logical access controls');

    assert.equal(READING_DOMAINS[3].objectives.length, 3, 'Domain 4 must have 3 objectives');
    assert.equal(READING_DOMAINS[3].objectives[0].title, '4.1 Understand network security');
    assert.equal(READING_DOMAINS[3].objectives[2].title, '4.3 Understand cloud security');

    assert.equal(READING_DOMAINS[4].objectives.length, 5, 'Domain 5 must have 5 objectives');
    assert.equal(READING_DOMAINS[4].objectives[0].title, '5.1 Understand data security');
    assert.equal(READING_DOMAINS[4].objectives[4].title, '5.5 Understand security testing');

    const navGroups = container.querySelectorAll('.reading-nav-group');
    assert.equal(navGroups.length, 5, 'Must render 5 domain navigation groups in sidebar');

    // Verify Domain 1 is active by default
    const firstGroup = navGroups[0];
    assert.match(firstGroup.className, /active/, 'Domain 1 must be active by default');

    // Verify Domain 1 objectives are rendered in its sub-tree
    const d1Objectives = firstGroup.querySelectorAll('.reading-nav-objective-item');
    assert.equal(d1Objectives.length, 5, 'Domain 1 sub-tree must render 5 objectives');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 5: Domain Selection vs Independent Chevron Accordion Toggle
// -------------------------------------------------------------
runTest('Domain Navigation — Selection switches domain; Chevron toggles expand/collapse independently', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    renderReadingScreen(container, () => {});

    // 1. Initial State: Domain 1 active, article displays Domain 1
    let articleTitle = container.querySelector('.reading-article-title');
    assert.equal(articleTitle?.textContent.trim(), 'Domain 1: Security Principles');

    // 2. Click Chevron on Domain 1 to collapse it independently
    const d1Chevron = container.querySelector('[data-toggle-domain="1"]');
    assert.ok(d1Chevron, 'Domain 1 chevron must exist');
    d1Chevron.click();

    const d1Group = container.querySelector('.reading-nav-group[data-domain-id="1"]');
    assert.doesNotMatch(d1Group.className, /\bexpanded\b/, 'Domain 1 should now be collapsed');
    // Domain 1 should still be active
    assert.match(d1Group.className, /\bactive\b/, 'Domain 1 must remain active when collapsed');

    // 3. Click Domain 2 select button
    const d2Select = container.querySelector('[data-select-domain="2"]');
    assert.ok(d2Select, 'Domain 2 select button must exist');
    d2Select.click();

    // Verify article switched to Domain 2
    articleTitle = container.querySelector('.reading-article-title');
    assert.equal(articleTitle?.textContent.trim(), 'Domain 2: Security Governance');
    assert.equal(state.reading.selectedDomainId, 2, 'state.reading.selectedDomainId must be 2');

    const d2Group = container.querySelector('.reading-nav-group[data-domain-id="2"]');
    assert.match(d2Group.className, /\bactive\b/, 'Domain 2 must now be active');
    assert.match(d2Group.className, /\bexpanded\b/, 'Domain 2 must auto-expand on selection');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 6: Minimal Editorial Reading Area & Quiet Unpublished Note
// -------------------------------------------------------------
runTest('Main Reading Area — Quiet unpublished message without heavy cards, illustrations, or badges', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    state.reading = {
      selectedDomainId: 5,
      sidebarCollapsed: false,
      expandedDomains: [5]
    };
    renderReadingScreen(container, () => {});

    // Verify quiet message
    const unpublishedNote = container.querySelector('.reading-unpublished-note');
    assert.ok(unpublishedNote, '.reading-unpublished-note must be rendered');

    const noteText = container.querySelector('.reading-unpublished-text');
    assert.equal(noteText?.textContent.trim(), 'Reading content coming soon.');

    // Verify absence of dashboard cards, big SVG illustration, and foundation phase badge
    assert.equal(container.querySelector('.reading-empty-icon'), null, 'Must NOT contain heavy empty-state icon illustration');
    assert.equal(container.querySelector('.reading-notice-badge'), null, 'Must NOT contain FOUNDATION PHASE badge box');

    // Verify CSS makes reading-article unbordered directly on background
    const readingCss = fs.readFileSync(path.join(root, 'css', 'reading.css'), 'utf8');
    assert.match(readingCss, /\.reading-article\s*\{[^}]*background:\s*transparent;/, 'article must have transparent background');
    assert.match(readingCss, /\.reading-article\s*\{[^}]*border:\s*none;/, 'article must have no border');
    assert.match(readingCss, /\.reading-article\s*\{[^}]*box-shadow:\s*none;/, 'article must have no box-shadow');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 7: Desktop Sidebar Collapse and Mobile Drawer Toggle
// -------------------------------------------------------------
runTest('Sidebar Collapsibility — Desktop toggle and mobile drawer classes', () => {
  const { container, restore } = createVocabularyDOM();
  try {
    renderReadingScreen(container, () => {});

    const layout = container.querySelector('#reading-layout');
    const toggleBtn = container.querySelector('#btn-toggle-sidebar');
    assert.ok(layout, '#reading-layout must exist');
    assert.ok(toggleBtn, '#btn-toggle-sidebar must exist');

    // Desktop toggle test (simulate window.innerWidth > 840)
    globalThis.innerWidth = 1200;
    assert.doesNotMatch(layout.className, /sidebar-collapsed/);

    toggleBtn.click();
    assert.match(layout.className, /sidebar-collapsed/, 'Toggling on desktop must add sidebar-collapsed');

    toggleBtn.click();
    assert.doesNotMatch(layout.className, /sidebar-collapsed/, 'Toggling again must remove sidebar-collapsed');
  } finally {
    restore();
  }
});

// -------------------------------------------------------------
// Test 8: CSS Stylesheet & Design Tokens Verification
// -------------------------------------------------------------
runTest('CSS & HTML Verification — reading.css linked and design tokens respected', () => {
  const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(indexHtml, /<link rel="stylesheet" href="\.\/css\/reading\.css">/, 'index.html must link css/reading.css');

  const readingCss = fs.readFileSync(path.join(root, 'css', 'reading.css'), 'utf8');
  assert.match(readingCss, /var\(--panel\)/, 'reading.css must use --panel token');
  assert.match(readingCss, /var\(--line\)/, 'reading.css must use --line token');
  assert.match(readingCss, /var\(--text\)/, 'reading.css must use --text token');
  assert.match(readingCss, /var\(--blue\)/, 'reading.css must use --blue token');

  // Verify no emojis or AI-slop animations
  assert.doesNotMatch(readingCss, /[\u{1F300}-\u{1F6FF}]/u, 'reading.css must not contain emojis');
  assert.doesNotMatch(readingCss, /linear-gradient\([^)]*rainbow/i, 'reading.css must not contain rainbow gradients');
});

// -------------------------------------------------------------
// Test 9: Preservation of Existing Features
// -------------------------------------------------------------
runTest('Preservation Boundary — Existing banks, config, and vocabulary intact', () => {
  const ccVersions = getExamVersions('isc2-cc');
  const legacyCard = ccVersions.find(v => v.id === '2026');
  const nextBankCard = ccVersions.find(v => v.id === 'next-bank');
  const vocabCard = ccVersions.find(v => v.id === 'isc2-cc-vocabulary');
  const slidesCard = ccVersions.find(v => v.id === 'isc2-cc-learning-slides');

  assert.equal(legacyCard?.questionCount, 583, 'Legacy 2026 card question count preserved');
  assert.equal(nextBankCard?.questionCount, 119, 'Next-bank 2026 card question count preserved');
  assert.equal(vocabCard?.vocabularyCount, 403, 'Vocabulary count preserved');
  assert.equal(slidesCard?.status, 'coming-soon', 'Learning slides status preserved');
});

console.log(`\n=============================================================`);
console.log(`Verification Summary: ${passedTests}/${totalTests} tests passed.`);
console.log(`=============================================================`);

if (passedTests !== totalTests) {
  process.exit(1);
}
