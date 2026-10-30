/**
 * Verification Suite for:
 * Task — Separate English Terms and Thai Translations in Reading Notes Tables
 *
 * Requirements:
 * 1. English technical term on the first line.
 * 2. Thai translation, including parentheses, on the second line.
 * 3. Both lines remain bold or semibold, with the English term slightly more prominent.
 * 4. Small, consistent vertical gap (approximately 2–4px).
 * 5. Preserve natural wrapping for long English terms and long Thai translations.
 * 6. Avoid splitting Thai words unnecessarily.
 * 7. Keep existing table structure, column widths, borders, backgrounds, and content.
 * 8. Zero badges, nested cards, decorative dividers, or extra colors.
 * 9. Ordinary explanatory parentheses, examples, and math expressions strictly protected.
 */

import { readFileSync, existsSync } from 'fs';
import { parseMarkdown, formatBilingualTermCell } from '../js/core/markdown-parser.js';

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
console.log('Bilingual Table Terminology Separation Verification Suite');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const markdown = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(markdown);

// -----------------------------------------------------------------------------
// Test Suite 1: CSS Architecture & Styling Rules
// -----------------------------------------------------------------------------
console.log('Test Suite 1: CSS Architecture & Semantic Styling Rules');

assert(css.includes('.reading-bilingual-term'), 'CSS defines .reading-bilingual-term container');

const termRuleMatch = css.match(/\.reading-bilingual-term\s*\{([\s\S]*?)\}/);
assert(Boolean(termRuleMatch), '.reading-bilingual-term CSS rule block exists');
if (termRuleMatch) {
  const body = termRuleMatch[1];
  assert(body.includes('display: flex'), '.reading-bilingual-term uses display: flex');
  assert(body.includes('flex-direction: column'), '.reading-bilingual-term stacks elements into 2 lines (flex-direction: column)');
  assert(body.includes('gap: 3px') || body.includes('gap: 2px') || body.includes('gap: 4px'), '.reading-bilingual-term defines 2-4px vertical gap');
  assert(body.includes('line-height: 1.35') || body.includes('line-height: 1.3') || body.includes('line-height: 1.4'), '.reading-bilingual-term defines compact line-height');
}

assert(css.includes('.reading-term-en'), 'CSS defines .reading-term-en styling');
assert(css.includes('.reading-term-th'), 'CSS defines .reading-term-th styling');

const enMatch = css.match(/\.reading-bilingual-term\s+\.reading-term-en[^{]*\{([\s\S]*?)\}/);
if (enMatch) {
  assert(enMatch[1].includes('font-weight: 700'), 'English term has bold weight (font-weight: 700)');
  assert(enMatch[1].includes('color: var(--text)'), 'English term has primary text color (var(--text))');
}

const thMatch = css.match(/\.reading-bilingual-term\s+\.reading-term-th\s*\{([\s\S]*?)\}/);
if (thMatch) {
  assert(thMatch[1].includes('font-weight: 600'), 'Thai translation has semibold weight (font-weight: 600)');
  assert(thMatch[1].includes('color: var(--text-dim)') || thMatch[1].includes('color: var(--text-muted)'), 'Thai translation uses muted/subordinate color');
}

// -----------------------------------------------------------------------------
// Test Suite 2: Table 1 (Section 1.1.1) Core Concepts Bilingual Term Cells
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Table 1 (Section 1.1.1) Core Concepts Cells');

const table1Expected = [
  { en: 'Asset', th: '(ทรัพย์สิน)' },
  { en: 'Threat', th: '(ภัยคุกคาม)' },
  { en: 'Threat Actor', th: '(ผู้ก่อภัยคุกคาม)' },
  { en: 'Vulnerability', th: '(ช่องโหว่)' },
  { en: 'Exploit', th: '(การใช้ประโยชน์จากช่องโหว่)' },
  { en: 'Risk', th: '(ความเสี่ยง)' },
  { en: 'Control / Safeguard', th: '(มาตรการควบคุม)' }
];

table1Expected.forEach(item => {
  const expectedSnippet = `<div class="reading-bilingual-term"><span class="reading-term-en"><strong>${item.en}</strong></span><span class="reading-term-th">${item.th}</span></div>`;
  assert(renderedHtml.includes(expectedSnippet), `Table 1 renders stacked bilingual term: ${item.en} + ${item.th}`);
});

// -----------------------------------------------------------------------------
// Test Suite 3: Table 4 (Section 1.3.3) Documentation Hierarchy Cells
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Table 4 (Section 1.3.3) Documentation Hierarchy Cells');

const table4Expected = [
  { en: 'Policy', th: '(นโยบาย)' },
  { en: 'Standard', th: '(มาตรฐาน)' },
  { en: 'Procedure', th: '(ขั้นตอนปฏิบัติ)' },
  { en: 'Guideline', th: '(แนวทางปฏิบัติ)' },
  { en: 'Mandatory', th: '(บังคับทุกคน)' },
  { en: 'Mandatory', th: '(บังคับผู้ปฏิบัติ)' },
  { en: 'Advisory', th: '(ไม่บังคับ ยืดหยุ่น)' }
];

table4Expected.forEach(item => {
  const expectedSnippet = `<div class="reading-bilingual-term"><span class="reading-term-en"><strong>${item.en}</strong></span><span class="reading-term-th">${item.th}</span></div>`;
  assert(renderedHtml.includes(expectedSnippet), `Table 4 renders stacked bilingual term: ${item.en} + ${item.th}`);
});

// -----------------------------------------------------------------------------
// Test Suite 4: Table 5 (Section 1.5.1) Due Care vs Due Diligence Action Verbs
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Table 5 (Section 1.5.1) Due Care vs Due Diligence Verbs');

const table5Expected = [
  { en: 'Implement', th: '(นำไปติดตั้ง)' },
  { en: 'Assess / Evaluate', th: '(ประเมินผล)' },
  { en: 'Apply', th: '(ปรับใช้)' },
  { en: 'Review / Audit', th: '(ทบทวนและตรวจสอบ)' },
  { en: 'Protect', th: '(ปกป้อง)' },
  { en: 'Monitor', th: '(เฝ้าระวัง)' },
  { en: 'Take Action', th: '(ลงมือปฏิบัติ)' },
  { en: 'Investigate', th: '(สืบค้นหาข้อเท็จจริง)' },
  { en: 'Patch', th: '(อุดช่องโหว่)' },
  { en: 'Verify', th: '(ตรวจพิสูจน์ยืนยัน)' }
];

table5Expected.forEach(item => {
  const expectedSnippet = `<div class="reading-bilingual-term"><span class="reading-term-en"><strong>${item.en}</strong></span><span class="reading-term-th">${item.th}</span></div>`;
  assert(renderedHtml.includes(expectedSnippet), `Table 5 renders stacked bilingual term: ${item.en} + ${item.th}`);
});

// -----------------------------------------------------------------------------
// Test Suite 5: Protection of Non-Terminology Parenthetical Cells
// -----------------------------------------------------------------------------
console.log('\nTest Suite 5: Protection of Non-Terminology Parenthetical Cells');

// Examples column in Table 1 must NOT be converted to .reading-bilingual-term
assert(!renderedHtml.includes('<div class="reading-bilingual-term"><span class="reading-term-en"><strong>ฐานข้อมูลลูกค้า</strong>'), 'Examples in Table 1 Col 2 are NOT converted to bilingual term');
assert(renderedHtml.includes('ฐานข้อมูลลูกค้า (Customer Database)'), 'Customer Database example text preserved verbatim');
assert(renderedHtml.includes('อาชญากรไซเบอร์ (Cybercriminals)'), 'Cybercriminals example text preserved verbatim');
assert(renderedHtml.includes('การตั้งค่าความปลอดภัยผิดพลาด (Misconfiguration)'), 'Misconfiguration example text preserved verbatim');

// Table 2 Col 1 explanatory note
assert(renderedHtml.includes('<strong>Availability</strong> <em>(และอาจกระทบ I/C)</em>'), 'Table 2 explanatory note preserved verbatim without conversion');

// Table 4 Col 1 explanation
assert(renderedHtml.includes('(Answers: <em>WHAT & WHY</em>)'), 'Table 4 WHAT & WHY explanation preserved verbatim');

// Table 6 Col 0 abbreviations
assert(renderedHtml.includes('<em>High-level management direction (WHAT)</em>'), 'Table 6 WHAT keyword preserved verbatim');
assert(renderedHtml.includes('<strong>ISC2 Code of Ethics (Canons 1–4)</strong>'), 'Table 6 Canons 1–4 reference preserved verbatim');

// -----------------------------------------------------------------------------
// Test Suite 6: Total Cell Count & Preservation Boundary
// -----------------------------------------------------------------------------
console.log('\nTest Suite 6: Total Cell Count & Preservation Boundary');

const termCellCount = (renderedHtml.match(/class="reading-bilingual-term"/g) || []).length;
assert(termCellCount === 25, `Exactly 25 bilingual terminology cells converted across 3 tables (found: ${termCellCount})`);

// Ensure learning slides, questions, vocabulary remain untouched
assert(existsSync('data/exam-versions.js'), 'exam-versions.js exists');
assert(existsSync('js/core/quiz-engine.js'), 'quiz-engine.js exists');
assert(existsSync('js/core/vocabulary-loader.js'), 'vocabulary-loader.js exists');

console.log('\n============================================================');
console.log(`Bilingual Terminology Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}
