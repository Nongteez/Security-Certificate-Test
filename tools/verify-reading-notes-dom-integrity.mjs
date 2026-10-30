/**
 * ISC2 CC 2026 Reading Notes — DOM Integrity & HTML Escaping Verification Suite
 *
 * Verifies:
 * 1. Balanced DOM tree (0 unclosed tags, 0 mismatched tags)
 * 2. 0 escaped structural HTML tags (&lt;div&gt;, &lt;/div&gt;, &lt;h4&gt;, &lt;strong&gt;, etc.)
 * 3. Guaranteed single-level sibling independence for:
 *    - Multi-Factor Authentication factors (4 items in .reading-mfa-stack)
 *    - Risk Treatment responses (4 items in .reading-treatment-stack)
 *    - Security Control categories (4 items in .reading-category-stack)
 *    - Review Scenarios (8 cards in .reading-scenario-card)
 * 4. Maximum DOM nesting depth <= 4 within cards
 * 5. Math notation vs currency isolation ($...$ formulas rendered, literal currency preserved)
 * 6. Clean textbook aesthetics (0 <hr> or --- dividers)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const domain1Path = path.join(projectRoot, 'content', 'isc2-cc-2026', 'reading', 'domain-1.md');
if (!fs.existsSync(domain1Path)) {
  console.error(`FAIL: Domain 1 Markdown not found at ${domain1Path}`);
  process.exit(1);
}

const markdown = fs.readFileSync(domain1Path, 'utf8');
const html = parseMarkdown(markdown);

let testCount = 0;
let passCount = 0;

function assert(condition, message, details = '') {
  testCount++;
  if (condition) {
    passCount++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    if (details) console.error(`    Details: ${details}`);
  }
}

function extractStackBlock(html, stackClass) {
  const regex = new RegExp(`<div class="[^"]*\\b${stackClass}\\b[^"]*"`);
  const match = regex.exec(html);
  if (!match) return null;
  const startIdx = match.index;
  
  let depth = 0;
  let endIdx = -1;
  const tagRegex = /<\/?div\b[^>]*>/g;
  tagRegex.lastIndex = startIdx;
  let m;
  while ((m = tagRegex.exec(html)) !== null) {
    if (m[0].startsWith('</div')) {
      depth--;
      if (depth === 0) {
        endIdx = m.index + m[0].length;
        break;
      }
    } else {
      depth++;
    }
  }
  return html.slice(startIdx, endIdx);
}

function measureHtmlDepth(cardHtml) {
  // Strip SVG elements so we measure pure HTML layout container nesting
  const withoutSvg = cardHtml.replace(/<svg\b[\s\S]*?<\/svg>/g, '<span class="svg-placeholder"></span>');
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*?)?(\/?)>/g;
  let depth = 0;
  let max = 0;
  let m;
  while ((m = tagRegex.exec(withoutSvg)) !== null) {
    const full = m[0];
    const tag = m[1].toLowerCase();
    const isClosing = full.startsWith('</');
    const isSelfClosing = m[2] === '/' || voidTags.has(tag);
    if (isSelfClosing) continue;
    if (!isClosing) {
      depth++;
      if (depth > max) max = depth;
    } else {
      depth--;
    }
  }
  return max;
}

console.log('\n============================================================');
console.log('ISC2 CC 2026 — Reading Notes DOM Integrity Verification');
console.log('============================================================\n');

// -----------------------------------------------------------------------------
// Test 1: HTML Tag Balance Verification (Stack Parser)
// -----------------------------------------------------------------------------
console.log('Test Suite 1: HTML Tag Balance & Stack Verification');
{
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  const svgSelfClosing = new Set(['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'stop']);
  const clean = html.replace(/<!--[\s\S]*?-->/g, '');
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*?)?(\/?)>/g;
  const stack = [];
  const errors = [];
  let match;

  while ((match = tagRegex.exec(clean)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();
    const isClosing = fullTag.startsWith('</');
    const isSelfClosing = match[2] === '/' || voidTags.has(tagName) || (svgSelfClosing.has(tagName) && fullTag.endsWith('/>'));

    if (isSelfClosing) continue;

    if (!isClosing) {
      stack.push({ tag: tagName, pos: match.index, full: fullTag });
    } else {
      if (stack.length === 0) {
        errors.push(`Closing tag </${tagName}> at ${match.index} has no matching open tag`);
      } else {
        const last = stack.pop();
        if (last.tag !== tagName) {
          errors.push(`Mismatched tag: expected </${last.tag}> (opened: ${last.full} at ${last.pos}), found </${tagName}> at ${match.index}`);
        }
      }
    }
  }

  if (stack.length > 0) {
    stack.forEach(s => errors.push(`Unclosed tag <${s.tag}> opened at ${s.pos}`));
  }

  assert(errors.length === 0, 'All HTML tags are 100% balanced with zero unclosed or mismatched tags', errors.slice(0, 5).join('; '));
}

// -----------------------------------------------------------------------------
// Test 2: Raw HTML Escaping Leakage Check
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Raw HTML Escaping & Bracket Leakage');
{
  const escapedTags = html.match(/&lt;\/?(?:div|h[1-6]|p|strong|span|article|section|table|ul|ol|li)[^&]*&gt;/gi);
  assert(!escapedTags || escapedTags.length === 0, 'No raw HTML tags escaped to &lt;tag&gt; or &lt;/tag&gt;', escapedTags ? escapedTags.slice(0, 5).join(', ') : '');

  const unrenderedDirectives = html.match(/:::(?:scenario|mfa-factors|risk-treatment|control-categories)/g);
  assert(!unrenderedDirectives || unrenderedDirectives.length === 0, 'No unrendered ::: block directives leaked into output');

  const unsafeScripts = html.match(/<script\b|<iframe\b/gi);
  assert(!unsafeScripts || unsafeScripts.length === 0, 'No dangerous script or iframe tags injected');
}

// -----------------------------------------------------------------------------
// Test 3: Sibling Independence & No Recursive Nesting
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Sibling Independence & Single-Level Layout');
{
  // MFA Factors
  const mfaItemCount = (html.match(/class="[^"]*reading-mfa-item[^"]*"/g) || []).length;
  assert(mfaItemCount === 4, `All 4 MFA items present (found ${mfaItemCount})`);

  const mfaStack = extractStackBlock(html, 'reading-mfa-stack');
  if (mfaStack) {
    const itemsInStack = (mfaStack.match(/class="[^"]*reading-mfa-item[^"]*"/g) || []).length;
    assert(itemsInStack === 4, `MFA stack contains exactly 4 direct sibling items (found ${itemsInStack})`);
    const nestedStacks = (mfaStack.match(/class="[^"]*\breading-mfa-stack\b[^"]*"/g) || []).length;
    assert(nestedStacks === 1, 'No nested reading-mfa-stack containers');
  } else {
    assert(false, 'MFA stack container found in HTML');
  }

  // Risk Treatment
  const treatmentItemCount = (html.match(/class="[^"]*reading-treatment-item[^"]*"/g) || []).length;
  assert(treatmentItemCount === 4, `All 4 Risk Treatment items present (found ${treatmentItemCount})`);

  const riskStack = extractStackBlock(html, 'reading-treatment-stack');
  if (riskStack) {
    const itemsInStack = (riskStack.match(/class="[^"]*reading-treatment-item[^"]*"/g) || []).length;
    assert(itemsInStack === 4, `Risk treatment stack contains exactly 4 direct sibling items (found ${itemsInStack})`);
    const nestedStacks = (riskStack.match(/class="[^"]*\breading-treatment-stack\b[^"]*"/g) || []).length;
    assert(nestedStacks === 1, 'No nested reading-treatment-stack containers');
  } else {
    assert(false, 'Risk treatment stack container found in HTML');
  }

  // Control Categories
  const categoryItemCount = (html.match(/class="[^"]*reading-category-item[^"]*"/g) || []).length;
  assert(categoryItemCount === 4, `All 4 Control Category items present (found ${categoryItemCount})`);

  const catStack = extractStackBlock(html, 'reading-category-stack');
  if (catStack) {
    const itemsInStack = (catStack.match(/class="[^"]*reading-category-item[^"]*"/g) || []).length;
    assert(itemsInStack === 4, `Control category stack contains exactly 4 direct sibling items (found ${itemsInStack})`);
    const nestedStacks = (catStack.match(/class="[^"]*\breading-category-stack\b[^"]*"/g) || []).length;
    assert(nestedStacks === 1, 'No nested reading-category-stack containers');
  } else {
    assert(false, 'Control category stack container found in HTML');
  }

  // Review Scenarios
  const scenarioCardCount = (html.match(/class="reading-scenario-card"/g) || []).length;
  assert(scenarioCardCount === 8, `All 8 Review Scenario cards present (found ${scenarioCardCount})`);

  const scenarioRegex = /<div class="reading-scenario-card" data-scenario="(\d+)">([\s\S]*?)<\/div>(?=\s*(?:<div class="reading-scenario-card"|<h4|<p|$))/g;
  let matches = 0;
  let matchScen;
  while ((matchScen = scenarioRegex.exec(html)) !== null) {
    matches++;
    const cardContent = matchScen[2];
    assert(!cardContent.includes('class="reading-scenario-card"'), `Scenario ${matchScen[1]} does NOT contain another scenario card`);
  }
  assert(matches === 8, `All 8 scenarios successfully validated as independent sibling cards (matched ${matches})`);
}

// -----------------------------------------------------------------------------
// Test 4: Maximum DOM Nesting Depth Inside Cards
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Maximum DOM Nesting Depth Inside Cards');
{
  const scenarioCards = html.match(/<div class="reading-scenario-card" data-scenario="[^"]+">[\s\S]*?<\/div>(?=\s*(?:<div class="reading-scenario-card"|<h|<p|$))/g) || [];
  let maxScenarioDepth = 0;
  scenarioCards.forEach(c => {
    const d = measureHtmlDepth(c);
    if (d > maxScenarioDepth) maxScenarioDepth = d;
  });
  assert(maxScenarioDepth <= 4, `Scenario cards have shallow DOM tree (max depth ${maxScenarioDepth} <= 4)`);

  const mfaItems = html.match(/<div class="[^"]*reading-mfa-item[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g) || [];
  let maxMfaDepth = 0;
  mfaItems.forEach(c => {
    const d = measureHtmlDepth(c);
    if (d > maxMfaDepth) maxMfaDepth = d;
  });
  assert(maxMfaDepth <= 4 && mfaItems.length === 4, `MFA factor items have shallow DOM tree (found ${mfaItems.length}, max depth ${maxMfaDepth} <= 4)`);

  const treatmentItems = html.match(/<div class="[^"]*reading-treatment-item[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g) || [];
  let maxTreatmentDepth = 0;
  treatmentItems.forEach(c => {
    const d = measureHtmlDepth(c);
    if (d > maxTreatmentDepth) maxTreatmentDepth = d;
  });
  assert(maxTreatmentDepth <= 4 && treatmentItems.length === 4, `Risk treatment items have shallow DOM tree (found ${treatmentItems.length}, max depth ${maxTreatmentDepth} <= 4)`);
}

// -----------------------------------------------------------------------------
// Test 5: Currency vs. KaTeX Math Notation Isolation
// -----------------------------------------------------------------------------
console.log('\nTest Suite 5: Currency vs. KaTeX Math Notation Isolation');
{
  assert(html.includes('$50/ปี'), 'Literal currency $50/ปี is preserved in output text');
  assert(html.includes('$2,000/ปี'), 'Literal currency $2,000/ปี is preserved in output text');
  assert(html.includes('$10,000'), 'Literal currency $10,000 is preserved in output text');
  assert(html.includes('$25,000'), 'Literal currency $25,000 is preserved in output text');

  // Math formula rendering check
  assert(html.includes('class="reading-math-inline" role="math" aria-label="SLE = AV \\times EF"'), 'Math formula SLE = AV x EF is correctly rendered');
  assert(html.includes('class="reading-math-inline" role="math" aria-label="ALE = SLE \\times ARO"'), 'Math formula ALE = SLE x ARO is correctly rendered');

  // Check that currency was not wrapped into KaTeX math
  const katexCurrencyLeak = html.match(/class="math-[^"]*"[^>]*>\$50/);
  assert(!katexCurrencyLeak, 'Currency was not hijacked into a KaTeX math component');
}

// -----------------------------------------------------------------------------
// Test 6: Textbook Aesthetics (Zero <hr> or --- Clutter)
// -----------------------------------------------------------------------------
console.log('\nTest Suite 6: Textbook Aesthetics & Clean Dividers');
{
  const hrCount = (html.match(/<hr/g) || []).length;
  assert(hrCount === 0, `0 <hr> divider tags present in generated HTML (found ${hrCount})`);

  const markdownDividers = markdown.split('\n').filter(l => /^(\-{3,}|\*{3,})$/.test(l.trim())).length;
  assert(markdownDividers === 0, `0 raw '---' horizontal rules in Domain 1 Markdown source (found ${markdownDividers})`);
}

// -----------------------------------------------------------------------------
// Summary
// -----------------------------------------------------------------------------
console.log('\n============================================================');
console.log(`DOM Integrity Results: ${passCount} / ${testCount} Passed`);
console.log('============================================================\n');

if (passCount !== testCount) {
  process.exit(1);
}
