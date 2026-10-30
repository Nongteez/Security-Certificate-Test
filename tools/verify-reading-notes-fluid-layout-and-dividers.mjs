/**
 * Verification Suite for:
 * Reading Notes Fluid Layout & Section Dividers Architecture
 */

import { readFileSync } from 'fs';
import { parseMarkdown } from '../js/core/markdown-parser.js';

let passes = 0;
let failures = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failures++;
  }
}

console.log('============================================================');
console.log('Reading Notes Fluid Layout & Section Dividers Verification');
console.log('============================================================\n');

const cssContent = readFileSync('css/reading.css', 'utf8');
const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: Problem 2 — Elimination of Duplicate Section Dividers
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Section Dividers Architecture & Spacing Normalization');

// 1. Verify .reading-lead has no border-bottom
const leadMatch = cssContent.match(/\.reading-lead\s*\{([\s\S]*?)\}/);
assert(Boolean(leadMatch), '.reading-lead rule exists in reading.css');
if (leadMatch) {
  assert(!leadMatch[1].includes('border-bottom'), '.reading-lead has NO border-bottom (duplicate line removed)');
  assert(!leadMatch[1].includes('padding-bottom'), '.reading-lead has NO redundant padding-bottom');
  assert(leadMatch[1].includes('margin-bottom: var(--space-xl)'), '.reading-lead maintains comfortable 32px bottom rhythm');
}

// 2. Verify .reading-objective-section provides the single authoritative section boundary
const sectionRuleMatch = cssContent.match(/\.reading-objective-section\s*\{([\s\S]*?)\}/);
assert(Boolean(sectionRuleMatch), '.reading-objective-section rule exists');
if (sectionRuleMatch) {
  assert(sectionRuleMatch[1].includes('border-top: 1px solid var(--line)'), '.reading-objective-section has clean border-top section divider');
}

// 3. Verify .reading-objective-section:first-of-type normalizes vertical spacing
assert(cssContent.includes('.reading-objective-section:first-of-type'), 'CSS defines .reading-objective-section:first-of-type');
assert(cssContent.includes('margin-top: var(--space-xl)'), 'First objective section normalizes spacing from introduction to 32px');

// 4. Verify h2 inside section eliminates double-margin
assert(cssContent.includes('.reading-objective-section > h2:first-child') || cssContent.includes('.reading-objective-section > h2:first-of-type'),
  'First H2 inside objective section resets margin-top to 0 to prevent double-gap');

// 5. Verify DOM structure: exactly ONE section divider between Domain 1 lead and Objective 1.1
const leadIdx = renderedHtml.indexOf('class="reading-lead"');
const obj11Idx = renderedHtml.indexOf('id="obj-1-1"');
const textBetween = renderedHtml.substring(leadIdx, obj11Idx);
assert(!textBetween.includes('<hr'), 'Zero <hr> tags between lead and Objective 1.1');
assert(!textBetween.includes('border-bottom'), 'No inline border-bottom between lead and Objective 1.1');

// -----------------------------------------------------------------------------
// Test Suite 2: Problem 1 — Fluid Layout & Desktop Space Utilization
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Fluid Desktop Layout & Space Utilization');

// 1. Expanded layout fluid wide components
const componentsRule = cssContent.match(/\.reading-concept-grid,[\s\S]*?\.reading-scenario-card\s*\{([\s\S]*?)\}/);
assert(Boolean(componentsRule), 'Wide educational components rule exists');
if (componentsRule) {
  assert(componentsRule[1].includes('max-width: 100%'), 'Wide components have max-width: 100% (no artificial 1040px truncation)');
  assert(componentsRule[1].includes('width: 100%'), 'Wide components fill 100% of available article width');
}

// 2. Collapsed sidebar symmetric centering
const collapsedArticleMatch = cssContent.match(/\.reading-layout\.sidebar-collapsed\s+\.reading-article\s*\{([\s\S]*?)\}/);
assert(Boolean(collapsedArticleMatch), 'Collapsed article rule exists');
if (collapsedArticleMatch) {
  assert(collapsedArticleMatch[1].includes('margin: 0 auto'), 'Collapsed article is centered symmetrically (margin: 0 auto)');
  assert(collapsedArticleMatch[1].includes('max-width: 1140px'), 'Collapsed article expands up to 1140px');
  assert(collapsedArticleMatch[1].includes('width: 100%'), 'Collapsed article has width: 100%');
}

// 3. Collapsed content pane centering
const collapsedPaneMatch = cssContent.match(/\.reading-layout\.sidebar-collapsed\s+\.reading-content-pane\s*\{([\s\S]*?)\}/);
assert(Boolean(collapsedPaneMatch), 'Collapsed content pane rule exists');
if (collapsedPaneMatch) {
  assert(collapsedPaneMatch[1].includes('margin: 0 auto'), 'Collapsed content pane is centered (margin: 0 auto)');
  assert(collapsedPaneMatch[1].includes('max-width: 1240px'), 'Collapsed content pane expands up to 1240px');
}

// 4. Prose measure constraint
const proseBaseMatch = cssContent.includes('.reading-article-markdown > p') && cssContent.includes('max-width: var(--reading-prose-max-width)');
assert(proseBaseMatch, 'Base prose measure preserves comfortable reading line length token (--reading-prose-max-width)');

// 5. Preserved design tokens in :root
assert(cssContent.includes('--reading-screen-max-width: 1560px'), ':root defines --reading-screen-max-width');
assert(cssContent.includes('--reading-article-max-width: 1080px'), ':root defines --reading-article-max-width');
assert(cssContent.includes('--reading-prose-max-width: 100%') || cssContent.includes('--reading-prose-max-width: 780px'), ':root defines --reading-prose-max-width');

console.log('\n============================================================');
console.log(`Fluid Layout & Dividers Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}
