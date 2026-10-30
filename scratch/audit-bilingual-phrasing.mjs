import fs from 'node:fs';
import path from 'node:path';

const domains = [1, 2, 3, 4];
console.log('=== AUDITING BILINGUAL TERMINOLOGY & NATURAL THAI PHRASING ===\n');

const terms = [
  { en: 'Confidentiality', th: 'การรักษาความลับ' },
  { en: 'Integrity', th: 'ความถูกต้องครบถ้วน' },
  { en: 'Availability', th: 'ความพร้อมใช้งาน' },
  { en: 'Authentication', th: 'การยืนยันตัวตน' },
  { en: 'Authorization', th: 'การกำหนดสิทธิ์|การอนุญาต' },
  { en: 'Accounting', th: 'การบันทึก.*การใช้งาน|การตรวจสอบย้อนหลัง' },
  { en: 'Non-repudiation', th: 'การปฏิเสธความรับผิดไม่ได้' },
  { en: 'Due Care', th: 'ความระมัดระวัง|การลงมือปฏิบัติ' },
  { en: 'Due Diligence', th: 'การตรวจสอบอย่างรอบคอบ|การสืบค้น' },
  { en: 'Least Privilege', th: 'สิทธิ์เท่าที่จำเป็น' },
  { en: 'Separation of Duties', th: 'การแบ่งแยกหน้าที่' },
  { en: 'Business Continuity', th: 'ความต่อเนื่องทางธุรกิจ' },
  { en: 'Disaster Recovery', th: 'การกู้คืนจากภัยพิบัติ' },
  { en: 'Zero Trust', th: 'ไม่ไว้วางใจ' },
  { en: 'Defense in Depth', th: 'การป้องกันหลายชั้น' }
];

for (const dId of domains) {
  const mdPath = path.resolve(`content/isc2-cc-2026/reading/domain-${dId}.md`);
  const rawMd = fs.readFileSync(mdPath, 'utf8');

  console.log(`--- Domain ${dId} Bilingual Audit ---`);

  // Check how many paragraphs lack Thai
  // Paragraphs in Markdown are blocks separated by blank lines
  const paragraphs = rawMd.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0 && !p.startsWith('<') && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('-'));
  let englishOnlyParagraphs = 0;
  const sampleEnOnly = [];
  for (const p of paragraphs) {
    // Check if contains Thai characters (\u0E00-\u0E7F)
    const hasThai = /[\u0E00-\u0E7F]/.test(p);
    if (!hasThai && p.length > 50) {
      englishOnlyParagraphs++;
      sampleEnOnly.push(p.substring(0, 80));
    }
  }
  console.log(`  Prose paragraphs: ${paragraphs.length}`);
  console.log(`  English-only paragraphs (>50 chars without Thai): ${englishOnlyParagraphs}`);
  if (englishOnlyParagraphs > 0) {
    console.log(`     Sample: ${sampleEnOnly.slice(0, 3).join(' | ')}`);
  }

  // Check key terms consistency
  for (const t of terms) {
    const hasEn = new RegExp(`\\b${t.en}\\b`, 'i').test(rawMd);
    if (hasEn) {
      const hasTh = new RegExp(t.th, 'i').test(rawMd);
      if (!hasTh) {
        console.log(`  [POTENTIAL MISMATCH] Term "${t.en}" present in Domain ${dId}, but Thai translation pattern "${t.th}" NOT found!`);
      }
    }
  }
  console.log('');
}

