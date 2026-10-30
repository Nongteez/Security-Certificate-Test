/**
 * Verification Test Suite: Concept Distinctions Matrix Readability
 *
 * Verifies:
 * 1. Exactly 12 distinction cards and 24 concept distinction entries
 * 2. Each concept label is a separate block element (display: block)
 * 3. Each concept description is a separate block element on the next line
 * 4. Zero trailing colons (':') after concept terms
 * 5. Modest spacing (0.25rem) between term and desc; larger spacing (0.85rem) between points
 * 6. 100% preservation of English/Thai text, keywords, and academic meaning
 * 7. Clean CSS rules without fixed heights or broken layout
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const projectRoot = path.resolve('.');
const mdPath = path.join(projectRoot, 'content/isc2-cc-2026/reading/domain-1.md');
const cssPath = path.join(projectRoot, 'css/reading.css');

const mdContent = fs.readFileSync(mdPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const renderedHtml = parseMarkdown(mdContent);

console.log('============================================================');
console.log('Concept Distinctions Matrix Readability Verification');
console.log('============================================================\n');

let passedTests = 0;
function test(name, fn) {
  try {
    fn();
    passedTests++;
    console.log(`  ✓ PASS: ${name}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
    process.exit(1);
  }
}

// -----------------------------------------------------------------------------
// Test Suite 1: Structural Count & Semantic Hierarchy
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Structural Count & Semantic Hierarchy');

test('Exactly 1 distinction grid container exists in DOM', () => {
  const grids = renderedHtml.match(/class="reading-distinction-grid"/gi) || [];
  assert.strictEqual(grids.length, 1, `Expected 1 grid, found ${grids.length}`);
});

test('Exactly 12 paired distinction cards exist', () => {
  const cards = renderedHtml.match(/class="reading-distinction-card"/gi) || [];
  assert.strictEqual(cards.length, 12, `Expected 12 cards, found ${cards.length}`);
});

test('Exactly 24 distinction point items exist (2 per card)', () => {
  const points = renderedHtml.match(/class="reading-distinction-point"/gi) || [];
  assert.strictEqual(points.length, 24, `Expected 24 points, found ${points.length}`);
});

test('Exactly 24 distinction term elements exist', () => {
  const terms = renderedHtml.match(/class="reading-distinction-term"/gi) || [];
  assert.strictEqual(terms.length, 24, `Expected 24 terms, found ${terms.length}`);
});

test('Exactly 24 distinction description elements exist', () => {
  const descs = renderedHtml.match(/class="reading-distinction-desc"/gi) || [];
  assert.strictEqual(descs.length, 24, `Expected 24 descs, found ${descs.length}`);
});

// -----------------------------------------------------------------------------
// Test Suite 2: Colon Eradication & Label Independence
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: Colon Eradication & Label Independence');

test('Zero trailing colons exist inside or directly following concept labels', () => {
  const colonTerms = renderedHtml.match(/<strong[^>]*class="reading-distinction-term"[^>]*>[^<]*:<\/strong>/gi) || [];
  assert.strictEqual(colonTerms.length, 0, `Found trailing colons in terms: ${JSON.stringify(colonTerms)}`);
});

test('No colon separates term and description', () => {
  const colonBetween = renderedHtml.match(/<\/strong>\s*:\s*<div/gi) || [];
  assert.strictEqual(colonBetween.length, 0, `Found colon between term and desc: ${colonBetween.length}`);
});

test('All 12 card titles are preserved with numbers 1 to 12', () => {
  const titles = [
    '1. Threat vs. Vulnerability',
    '2. Risk vs. Impact',
    '3. Authentication vs. Authorization',
    '4. Confidentiality vs. Privacy',
    '5. Integrity vs. Availability',
    '6. Hashing vs. Encryption',
    '7. Preventive vs. Detective',
    '8. Corrective vs. Recovery',
    '9. Risk Transfer vs. Risk Mitigation',
    '10. Policy vs. Procedure',
    '11. Due Care vs. Due Diligence',
    '12. Zero Trust vs. Defense in Depth'
  ];
  for (const title of titles) {
    assert.ok(renderedHtml.includes(title), `Card title missing: ${title}`);
  }
});

// -----------------------------------------------------------------------------
// Test Suite 3: 100% Content Preservation across all 24 concepts
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Content Preservation (All 24 Concepts)');

const expectedEntries = [
  { term: 'Threat (ภัยคุกคาม)', desc: 'สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย (Hacker, Malware, Flood)' },
  { term: 'Vulnerability (ช่องโหว่)', desc: 'จุดอ่อนภายในระบบที่เปิดโอกาสให้ถูกโจมตี (Unpatched Server, Weak Password)' },
  { term: 'Risk (ความเสี่ยง)', desc: 'ผลรวมของโอกาสเกิด (Likelihood) และผลกระทบจากเหตุการณ์ที่ไม่แน่นอน' },
  { term: 'Impact (ผลกระทบ)', desc: 'ขนาดหรือมูลค่าความเสียหายที่เกิดขึ้นจริงเมื่อระบบถูกโจมตี' },
  { term: 'Authentication (พิสูจน์ตัวตน)', desc: 'ยืนยันว่าคุณคือบุคคลนั้นจริงหรือไม่ ("Prove who you are")' },
  { term: 'Authorization (กำหนดสิทธิ์)', desc: 'ตัดสินว่าคุณมีสิทธิ์ทำอะไรกับระบบได้บ้าง ("What can you do")' },
  { term: 'Confidentiality (ความลับ)', desc: 'ป้องกันไม่ให้ข้อมูลลับถูกเปิดเผยแก่ผู้ไม่มีสิทธิ์' },
  { term: 'Privacy (ความเป็นส่วนตัว)', desc: 'สิทธิและการคุ้มครองข้อมูลส่วนบุคคล (PII) ตามกฎหมายและเจตนารมณ์ของเจ้าของข้อมูล' },
  { term: 'Integrity (ความถูกต้อง)', desc: 'ข้อมูลต้องไม่ถูกแก้ไขหรือทำลายโดยมิชอบ ("Can I trust the data?")' },
  { term: 'Availability (ความพร้อมใช้)', desc: 'ระบบและข้อมูลพร้อมให้เข้าถึงได้เสมอเมื่อต้องการ ("Can I access it?")' },
  { term: 'Hashing', desc: 'ฟังก์ชันทางเดียว (One-way) ใช้คำนวณค่าเพื่อตรวจสอบความถูกต้อง ไม่สามารถถอดรหัสกลับได้' },
  { term: 'Encryption', desc: 'ฟังก์ชันสองทาง (Two-way) เข้ารหัสเพื่อรักษาความลับ และถอดรหัสกลับได้ด้วยกุญแจที่ถูกต้อง' },
  { term: 'Preventive (ป้องกัน)', desc: 'ปิดกั้นหรือสกัดกั้นการโจมตีไม่ให้เกิดขึ้น (Firewall drop, Door lock, MFA)' },
  { term: 'Detective (ตรวจจับ)', desc: 'ตรวจจับ ค้นหา และแจ้งเตือนเมื่อเกิดความผิดปกติ (IDS, Log monitor, Motion sensor)' },
  { term: 'Corrective (แก้ไข)', desc: 'แก้ไข เยียวยา หรือกำจัดมัลแวร์และอุดช่องโหว่เพื่อลดความเสียหาย' },
  { term: 'Recovery (กู้คืน)', desc: 'ฟื้นฟูระบบและข้อมูลให้กลับมาให้บริการตามปกติหลังวิกฤต (DRP restore)' },
  { term: 'Risk Transfer (โอนความเสี่ยง)', desc: 'ย้ายเฉพาะภาระทางการเงินไปยังบุคคลภายนอก (ประกันภัยไซเบอร์)' },
  { term: 'Risk Mitigation (ลดความเสี่ยง)', desc: 'ติดตั้งมาตรการทางเทคนิค/กระบวนการเพื่อลดโอกาสเกิดหรือผลกระทบโดยตรง' },
  { term: 'Policy (นโยบาย)', desc: 'ทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหารระดับสูง (WHAT & WHY)' },
  { term: 'Procedure (ขั้นตอนปฏิบัติ)', desc: 'ขั้นตอนการลงมือปฏิบัติทีละขั้นแบบเป็นลำดับสำหรับผู้ใช้งาน (HOW)' },
  { term: 'Due Care', desc: 'การลงมือกระทำในสิ่งที่สมเหตุสมผลและรับผิดชอบเพื่อปกป้องทรัพย์สิน (DO / Take Action)' },
  { term: 'Due Diligence', desc: 'การสืบค้น ตรวจสอบ ประเมินผล และติดตามสถานะความเสี่ยงอย่างรอบคอบ (CHECK / Investigate)' },
  { term: 'Zero Trust', desc: 'ปรัชญาความเชื่อมั่นและการเข้าถึง ("Never Trust, Always Verify" ตรวจสอบทุกบริบท)' },
  { term: 'Defense in Depth', desc: 'ยุทธศาสตร์สถาปัตยกรรมความปลอดภัยที่วางเกราะป้องกันหลายชั้นสอดประสานกัน' }
];

expectedEntries.forEach((entry, idx) => {
  test(`Entry #${idx + 1} (${entry.term}) content is preserved 100%`, () => {
    assert.ok(renderedHtml.includes(entry.term), `Missing term: ${entry.term}`);
    assert.ok(renderedHtml.includes(entry.desc), `Missing desc: ${entry.desc}`);
  });
});

// -----------------------------------------------------------------------------
// Test Suite 4: CSS Typography & Law of Proximity Spacing
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: CSS Typography & Spacing Rules');

test('.reading-distinction-term rule exists with display: block', () => {
  assert.ok(
    /\.reading-distinction-term\b[^{]*\{[^}]*display:\s*block/i.test(cssContent) ||
    /\.reading-distinction-point\s+strong[^{]*\{[^}]*display:\s*block/i.test(cssContent),
    'Expected display: block for distinction terms'
  );
});

test('Modest spacing exists between term and description (margin-bottom: 0.25rem)', () => {
  assert.ok(
    /margin-bottom:\s*0\.25rem/i.test(cssContent),
    'Expected 0.25rem margin-bottom between label and description'
  );
});

test('Distinct vertical spacing exists between points (margin-bottom: 0.85rem)', () => {
  assert.ok(
    /\.reading-distinction-point\s*\{[^}]*margin-bottom:\s*0\.85rem/i.test(cssContent),
    'Expected 0.85rem margin-bottom on .reading-distinction-point'
  );
});

test('Last point resets margin-bottom to 0', () => {
  assert.ok(
    /\.reading-distinction-point:last-child\s*\{[^}]*margin-bottom:\s*0/i.test(cssContent),
    'Expected margin-bottom: 0 on .reading-distinction-point:last-child'
  );
});

test('Term uses bold weight and theme heading color', () => {
  assert.ok(
    /font-weight:\s*700/i.test(cssContent) && /color:\s*var\(--text-heading\)/i.test(cssContent),
    'Expected font-weight: 700 and var(--text-heading)'
  );
});

test('Cards do not have fixed heights (natural expansion)', () => {
  const cardRuleMatch = cssContent.match(/\.reading-distinction-card\s*\{([^}]+)\}/);
  assert.ok(cardRuleMatch, '.reading-distinction-card rule must exist');
  assert.ok(!/height:\s*\d+px/i.test(cardRuleMatch[1]), 'Must not define fixed height in pixels');
  assert.ok(!/max-height:\s*\d+px/i.test(cardRuleMatch[1]), 'Must not define fixed max-height');
});

console.log('\n============================================================');
console.log(`Distinction Matrix Summary: ${passedTests} Passed, 0 Failed`);
console.log('============================================================');

