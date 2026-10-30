/**
 * Verification Suite for:
 * Task — Highlight S-A-P-P Ethics Mnemonic and Initial Letters
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
console.log('Ethics Mnemonic S-A-P-P Highlighting Verification');
console.log('============================================================\n');

const cssContent = readFileSync('css/reading.css', 'utf8');
const baseCss = readFileSync('css/base.css', 'utf8');
const mdContent = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(mdContent);

// -----------------------------------------------------------------------------
// Test Suite 1: CSS Scoped Rule & Theme Color Token
// -----------------------------------------------------------------------------
console.log('Test Suite 1: CSS Scoped Class & Theme Color Tokens');

const mnemonicRuleMatch = cssContent.match(/\.reading-mnemonic-highlight\s*\{([^}]+)\}/);
assert(Boolean(mnemonicRuleMatch), '.reading-mnemonic-highlight rule exists in reading.css');

if (mnemonicRuleMatch) {
  const body = mnemonicRuleMatch[1];
  assert(body.includes('color: var(--blue)'), '.reading-mnemonic-highlight uses theme-aware color: var(--blue)');
  assert(body.includes('font-weight: 700') || body.includes('font-weight: bold'), '.reading-mnemonic-highlight enforces bold font-weight (700)');
}

assert(baseCss.includes('--blue: #3a86ff'), 'Dark theme defines high-contrast --blue: #3a86ff in base.css');
assert(baseCss.includes('--blue: #2563eb'), 'Light theme defines accessible --blue: #2563eb in base.css');

// -----------------------------------------------------------------------------
// Test Suite 2: Mnemonic Code Highlighting (S - A - P - P)
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Mnemonic Code S-A-P-P Highlighting');

assert(
  mdContent.includes('"<strong class="reading-mnemonic-highlight">S - A - P - P</strong>"') ||
  mdContent.includes('<strong class="reading-mnemonic-highlight">S - A - P - P</strong>'),
  'Markdown contains S - A - P - P wrapped in .reading-mnemonic-highlight'
);

assert(
  renderedHtml.includes('<strong class="reading-mnemonic-highlight">S - A - P - P</strong>'),
  'Rendered DOM outputs <strong class="reading-mnemonic-highlight">S - A - P - P</strong> without escaping corruption'
);

// -----------------------------------------------------------------------------
// Test Suite 3: Explanatory Line Initial Letters Only
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Explanatory Line Initial Letters Only');

// S in Society
assert(renderedHtml.includes('<strong class="reading-mnemonic-highlight">S</strong>ociety'), 'ONLY "S" in "Society" is highlighted in bold blue');
assert(!renderedHtml.includes('<strong class="reading-mnemonic-highlight">Society</strong>'), 'Full word "Society" is NOT highlighted');

// A in Act honorably
assert(renderedHtml.includes('<strong class="reading-mnemonic-highlight">A</strong>ct honorably'), 'ONLY "A" in "Act honorably" is highlighted in bold blue');
assert(!renderedHtml.includes('<strong class="reading-mnemonic-highlight">Act'), 'Full word "Act" is NOT highlighted');

// P in Principals
assert(renderedHtml.includes('<strong class="reading-mnemonic-highlight">P</strong>rincipals'), 'ONLY "P" in "Principals" is highlighted in bold blue');
assert(!renderedHtml.includes('<strong class="reading-mnemonic-highlight">Principals</strong>'), 'Full word "Principals" is NOT highlighted');

// P in Profession
assert(renderedHtml.includes('<strong class="reading-mnemonic-highlight">P</strong>rofession'), 'ONLY "P" in "Profession" is highlighted in bold blue');
assert(!renderedHtml.includes('<strong class="reading-mnemonic-highlight">Profession</strong>'), 'Full word "Profession" is NOT highlighted');

// -----------------------------------------------------------------------------
// Test Suite 4: Plain Text, Separators & Structure Preservation
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Plain Text, Separators & Callout Preservation');

// Connecting arrows
const expectedExplanation = '<strong class="reading-mnemonic-highlight">S</strong>ociety → <strong class="reading-mnemonic-highlight">A</strong>ct honorably → <strong class="reading-mnemonic-highlight">P</strong>rincipals → <strong class="reading-mnemonic-highlight">P</strong>rofession';
assert(renderedHtml.includes(expectedExplanation), 'Arrows (→) and spaces retain normal body text position and formatting');

// Callout structure
assert(renderedHtml.includes('<strong>สูตรจำตัวอักษรย่อ (Mnemonic):</strong>'), 'Thai callout label is 100% preserved');
assert(renderedHtml.includes('<blockquote class="reading-blockquote">'), 'Mnemonic callout is rendered inside standard blockquote');

// Clean HTML hygiene
assert(!renderedHtml.includes('&lt;strong class="reading-mnemonic-highlight"&gt;'), 'No escaped HTML markup leakage');
assert(!renderedHtml.includes('\\to'), 'Zero raw LaTeX arrow leakage');

console.log('\n============================================================');
console.log(`Ethics Mnemonic Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}

