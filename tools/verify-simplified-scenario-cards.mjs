/**
 * Verification Suite for:
 * Task 113 — Simplify Review Scenario Cards (Domain 1 Reading Notes)
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
console.log('Simplified Review Scenario Cards Verification');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const md = readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(md);

// -----------------------------------------------------------------------------
// Test Suite 1: CSS Clean & Minimal Scenario Card Styling
// -----------------------------------------------------------------------------
console.log('Test Suite 1: CSS Scenario Card & Answer Styling Rules');

// 1. .reading-scenario-card styling
const cardMatch = css.match(/\/\*\s*=====\s*Review Scenario Cards[\s\S]*?\.reading-scenario-card\s*\{([^}]+)\}/);
assert(Boolean(cardMatch), '.reading-scenario-card rule exists in reading.css');

if (cardMatch) {
  const body = cardMatch[1];
  assert(body.includes('border: 1px solid var(--line)'), 'Card has single subtle outer border (1px solid var(--line))');
  assert(!body.includes('border-left: 3px solid var(--blue)'), 'Thick blue left accent border REMOVED from scenario card');
  assert(!body.includes('border-left: 4px'), 'Zero 4px border-left clutter');
  assert(body.includes('border-radius: var(--radius-sm)'), 'Card preserves subtle rounded corners (var(--radius-sm))');
  assert(body.includes('box-shadow: none'), 'Card box-shadow is reset to none');
}

// 2. .reading-scenario-answer styling (horizontal divider, no gray box or green left border)
const answerMatch = css.match(/\.reading-scenario-answer\s*\{([^}]+)\}/);
assert(Boolean(answerMatch), '.reading-scenario-answer rule exists in reading.css');

if (answerMatch) {
  const body = answerMatch[1];
  assert(body.includes('border-top: 1px solid var(--line)'), 'Answer uses simple subtle horizontal divider (border-top: 1px solid var(--line))');
  assert(body.includes('background: transparent'), 'Nested gray answer box removed (background: transparent)');
  assert(!body.includes('background: var(--panel-2)'), 'background: var(--panel-2) completely removed');
  assert(body.includes('border-left: none') || !body.includes('border-left: 3px solid #10b981'), 'Green left border removed from answer container');
  assert(body.includes('border-radius: 0') || !body.includes('border-radius: 6px'), 'Nested container border-radius removed');
}

// 3. .reading-scenario-answer-label styling
const labelMatch = css.match(/\.reading-scenario-answer-label\s*\{([^}]+)\}/);
assert(Boolean(labelMatch), '.reading-scenario-answer-label rule exists');
if (labelMatch) {
  const body = labelMatch[1];
  assert(body.includes('color: #10b981'), '"เฉลยและเหตุผล" preserves semantic success color (#10b981)');
}

// -----------------------------------------------------------------------------
// Test Suite 2: All 8 Review Scenarios Structure & Content Integrity
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: All 8 Review Scenarios Structural & Content Verification');

const expectedScenarios = [
  {
    id: '1',
    topic: 'CIA Triad',
    situation: 'ผู้โจมตีสามารถแก้ไขตัวเลขเงินเดือนในฐานข้อมูลโดยที่ระบบไม่ส่งสัญญาณเตือนใด ๆ',
    question: 'เหตุการณ์นี้ส่งผลกระทบต่อหลักการใดของ CIA มากที่สุด?',
    answer: 'Integrity',
    reasoning: 'เพราะข้อมูลถูกแก้ไขดัดแปลงให้ผิดเพี้ยนไปจากความจริง'
  },
  {
    id: '2',
    topic: 'Access Control',
    situation: 'พนักงานกรอกรหัสผ่านผ่านเรียบร้อยแล้ว แต่เมื่อคลิกเปิดไฟล์โฟลเดอร์การเงิน ระบบแจ้งว่าไม่สามารถเข้าถึงได้',
    question: 'ปัญหานี้เกี่ยวข้องกับขั้นตอนใดของระบบควบคุมการเข้าถึง?',
    answer: 'Authorization',
    reasoning: 'เนื่องจาก Authentication ยืนยันตัวตนผ่านแล้ว แต่สิทธิ์การเข้าถึงไม่อนุญาต'
  },
  {
    id: '3',
    topic: 'Risk Management',
    situation: 'บริษัทแห่งหนึ่งตัดสินใจซื้อกรมธรรม์ประกันภัยไซเบอร์ (Cyber Insurance) วงเงิน 50 ล้านบาท เพื่อคุ้มครองกรณีข้อมูลรั่วไหล',
    question: 'จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?',
    answer: 'Risk Transfer (Sharing)',
    reasoning: 'การโอนย้ายภาระทางการเงินไปยังบริษัทประกันภัย'
  },
  {
    id: '4',
    topic: 'Professional Conduct',
    situation: 'เจ้าหน้าที่ความปลอดภัยนำโปรแกรม Vulnerability Scanner มาสแกนเซิร์ฟเวอร์ทั้งหมดในองค์กรเพื่อทำรายงานความเสี่ยง',
    question: 'การกระทำนี้สะท้อนถึงหลักการใดระหว่าง Due Care กับ Due Diligence?',
    answer: 'Due Diligence',
    reasoning: 'เนื่องจากเป็นการตรวจสอบ สืบค้น และประเมินความเสี่ยงอย่างรอบคอบ'
  },
  {
    id: '5',
    topic: 'Professional Conduct',
    situation: 'เมื่อระบบสแกนพบช่องโหว่ระดับวิกฤต ทีมงานจึงเร่งดาวน์โหลดและติดตั้ง Security Patch ทันที',
    question: 'การลงมือติดตั้ง Patch สะท้อนถึงหลักการใด?',
    answer: 'Due Care',
    reasoning: 'เป็นการลงมือปฏิบัติเพื่อปกป้องทรัพย์สิน'
  },
  {
    id: '6',
    topic: 'Risk Analysis',
    situation: 'ผู้บริหารพิจารณาแล้วพบว่า ค่าใช้จ่ายในการซื้ออุปกรณ์ป้องกัน DDoS มูลค่าปีละ 1,000,000 บาท สูงกว่าความเสียหายเฉลี่ยต่อปีที่คาดว่าจะเกิดขึ้น (ALE = 50,000 บาท) ผู้บริหารจึงลงนามอนุมัติไม่ซื้ออุปกรณ์และยอมรับความเสี่ยงนี้',
    question: 'จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?',
    answer: 'Risk Acceptance',
    reasoning: 'การยอมรับความเสี่ยงอย่างเป็นทางการเมื่อต้นทุนสูงกว่าผลประโยชน์'
  },
  {
    id: '7',
    topic: 'Security Architecture',
    situation: 'องค์กรบังคับใช้นโยบายว่า แม้พนักงานจะล็อกอินผ่านคอมพิวเตอร์ที่ต่อสาย LAN ภายในอาคารสำนักงานใหญ่ ทุกคนยังต้องยืนยันตัวตนผ่าน MFA และระบบจะตรวจสอบสุขภาพของเครื่องก่อนอนุญาตให้เข้าถึงคลาวด์',
    question: 'สอดคล้องกับแนวคิดทางสถาปัตยกรรมความปลอดภัยใด?',
    answer: 'Zero Trust Architecture',
    reasoning: 'Never Trust, Always Verify ไม่ให้ความเชื่อถือโดยปริยายเพียงเพราะอยู่ภายในเครือข่าย'
  },
  {
    id: '8',
    topic: 'Security Controls',
    situation: 'ป้ายเตือนขนาดใหญ่เขียนว่า <em>พื้นที่หวงห้าม บันทึกภาพด้วยกล้องวงจรปิดตลอด 24 ชั่วโมง ผู้บุกรุกจะถูกดำเนินคดีตามกฎหมาย</em>',
    question: 'ป้ายเตือนนี้ทำหน้าที่เป็น Security Control ประเภทใด?',
    answer: 'Deterrent Control',
    reasoning: 'มุ่งยับยั้งใจและขัดขวางไม่ให้ผู้ประสงค์ร้ายกล้าลงมือกระทำผิด'
  }
];

const cardMatches = [...renderedHtml.matchAll(/<div class="reading-scenario-card"[^>]*data-scenario="(\d+)"/g)];
assert(cardMatches.length === 8, `Exactly 8 review scenario cards rendered in DOM (found: ${cardMatches.length})`);

expectedScenarios.forEach(scen => {
  const cardStartRegex = new RegExp(`<div class="reading-scenario-card"[^>]*data-scenario="${scen.id}">([\\s\\S]*?)(?=<div class="reading-scenario-card"|<h4|$)`);
  const cardMatch = renderedHtml.match(cardStartRegex);
  assert(Boolean(cardMatch), `Scenario #${scen.id} card exists in DOM`);

  if (cardMatch) {
    const html = cardMatch[1];

    // Badge & Topic
    assert(html.includes(`Scenario ${scen.id}`), `Scenario #${scen.id} contains badge "Scenario ${scen.id}"`);
    assert(html.includes(scen.topic), `Scenario #${scen.id} contains topic "${scen.topic}"`);

    // Situation & Question
    const cleanSituationCheck = scen.id === '8'
      ? 'พื้นที่หวงห้าม บันทึกภาพด้วยกล้องวงจรปิดตลอด 24 ชั่วโมง'
      : scen.situation;
    assert(html.includes(cleanSituationCheck), `Scenario #${scen.id} situation text is preserved`);
    assert(html.includes(scen.question), `Scenario #${scen.id} question text is preserved`);

    // Answer & Reasoning
    assert(html.includes(scen.answer), `Scenario #${scen.id} answer "${scen.answer}" is preserved`);
    assert(html.includes(scen.reasoning), `Scenario #${scen.id} reasoning is preserved`);

    // Semantic Groups
    assert(html.includes('class="reading-scenario-situation"') || html.includes('class="reading-scenario-context'), `Scenario #${scen.id} has situation element`);
    assert(html.includes('class="reading-scenario-question"'), `Scenario #${scen.id} has question element`);
    assert(html.includes('class="reading-scenario-answer"'), `Scenario #${scen.id} has answer element`);
    assert(html.includes('เฉลยและเหตุผล:'), `Scenario #${scen.id} has "เฉลยและเหตุผล:" label`);
  }
});

// -----------------------------------------------------------------------------
// Test Suite 3: DOM Non-Nesting & Hygiene
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: DOM Non-Nesting & Hygiene');

// Ensure no scenario card is nested inside another scenario card
let nestingDetected = false;
for (let i = 1; i <= 8; i++) {
  const idx = renderedHtml.indexOf(`data-scenario="${i}"`);
  const nextIdx = renderedHtml.indexOf(`data-scenario="${i + 1}"`);
  if (idx !== -1 && nextIdx !== -1) {
    const chunk = renderedHtml.substring(idx, nextIdx);
    const openDivs = (chunk.match(/<div\b/g) || []).length;
    const closeDivs = (chunk.match(/<\/div>/g) || []).length;
    if (openDivs !== closeDivs) {
      nestingDetected = true;
    }
  }
}
assert(!nestingDetected, 'All 8 scenario cards are balanced sibling elements (zero recursive nesting)');
assert(!renderedHtml.includes('&lt;strong class="reading-scenario'), 'No escaped HTML markup in scenario cards');

console.log('\n============================================================');
console.log(`Simplified Scenario Cards Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) {
  process.exit(1);
}
