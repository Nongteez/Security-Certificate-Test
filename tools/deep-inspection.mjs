import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, file: 'domain-1.js' },
  { dom: 2, file: 'domain-2.js' },
  { dom: 3, file: 'domain-3.js' },
  { dom: 4, file: 'domain-4.js' },
  { dom: 5, file: 'domain-5.js' }
];

async function loadAllQuestions() {
  const map = new Map();
  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      map.set(q.id, { ...q, _file: info.file, _domExpected: info.dom });
    });
  }
  return map;
}

async function deepInspect() {
  const qMap = await loadAllQuestions();

  console.log('=== 1. PAIR INSPECTIONS ===\n');
  const pairsToInspect = [
    [294, 372],
    [96, 468],
    [286, 315],
    [83, 474],
    [223, 408],
    [420, 431],
    [288, 379]
  ];

  for (const [id1, id2] of pairsToInspect) {
    const q1 = qMap.get(id1);
    const q2 = qMap.get(id2);
    console.log(`--- PAIR: Q${id1} ↔ Q${id2} ---`);
    console.log(`Q${id1} (Dom ${q1.dom}): "${q1.question}"`);
    console.log(`  Options: ${JSON.stringify(q1.options)}`);
    console.log(`  Correct: [${q1.correct_idx}] "${q1.options[q1.correct_idx]}"`);
    console.log(`Q${id2} (Dom ${q2.dom}): "${q2.question}"`);
    console.log(`  Options: ${JSON.stringify(q2.options)}`);
    console.log(`  Correct: [${q2.correct_idx}] "${q2.options[q2.correct_idx]}"`);
    console.log();
  }

  console.log('=== 2. Q312 DEEP AUDIT ===\n');
  const q312 = qMap.get(312);
  console.log(`Q312 (Dom ${q312.dom}): "${q312.question}"`);
  console.log(`  Options: ${JSON.stringify(q312.options, null, 2)}`);
  console.log(`  Correct_idx: ${q312.correct_idx} (${q312.options[q312.correct_idx]})`);
  console.log(`  Explanation EN: "${q312.explanation}"`);
  console.log(`  Explanation TH: "${q312.explanation_th}"`);
  console.log();

  console.log('=== 3. Q33 & Q34 DOMAIN AUDIT ===\n');
  const q33 = qMap.get(33);
  const q34 = qMap.get(34);
  console.log(`Q33 (Dom ${q33.dom}): "${q33.question}"`);
  console.log(`  Options: ${JSON.stringify(q33.options)}`);
  console.log(`  Correct: [${q33.correct_idx}] "${q33.options[q33.correct_idx]}"`);
  console.log(`  Explanation: "${q33.explanation}"`);
  console.log();
  console.log(`Q34 (Dom ${q34.dom}): "${q34.question}"`);
  console.log(`  Options: ${JSON.stringify(q34.options)}`);
  console.log(`  Correct: [${q34.correct_idx}] "${q34.options[q34.correct_idx]}"`);
  console.log(`  Explanation: "${q34.explanation}"`);
  console.log();

  console.log('=== 4. CONTAMINATED TEXT AUDIT (github / urls / usernames / artifacts) ===\n');
  const contaminated = [];
  qMap.forEach((q) => {
    const checkString = (str, field) => {
      if (!str || typeof str !== 'string') return;
      if (str.includes('github.com') || str.includes('http://') || str.includes('https://') || str.includes('ayemunhossain')) {
        contaminated.push({ id: q.id, dom: q.dom, field, str });
      }
    };
    checkString(q.question, 'question');
    checkString(q.question_th, 'question_th');
    checkString(q.explanation, 'explanation');
    checkString(q.explanation_th, 'explanation_th');
    (q.options || []).forEach((opt, idx) => checkString(opt, `options[${idx}]`));
    (q.options_th || []).forEach((opt, idx) => checkString(opt, `options_th[${idx}]`));
  });

  console.log(`Found ${contaminated.length} contaminated fields:`);
  contaminated.forEach((c) => {
    console.log(`- Q${c.id} (Dom ${c.dom}, field: ${c.field}): "${c.str}"`);
  });
  console.log();

  console.log('=== 5. CHECKING ALL QUESTIONS FOR EXPLANATION VS ANSWER CONTRADICTIONS ===\n');
  const contradictions = [];
  qMap.forEach((q) => {
    const en = q.explanation || '';
    const th = q.explanation_th || '';
    const correctLetter = ['A', 'B', 'C', 'D', 'E'][q.correct_idx];
    
    // Test if explanation mentions letter A/B/C/D at start
    const mEn = en.match(/^(?:(?:The\s+)?correct\s+(?:answer|choice|option)\s+is\s+|Answer:\s*)([A-E])\b/i);
    if (mEn && mEn[1].toUpperCase() !== correctLetter) {
      contradictions.push({ id: q.id, dom: q.dom, lang: 'EN', stated: mEn[1].toUpperCase(), correct: correctLetter, exp: en });
    }
    const mTh = th.match(/^(?:คำตอบที่ถูกต้องคือ|คำตอบคือ)\s*([A-E])\b/i);
    if (mTh && mTh[1].toUpperCase() !== correctLetter) {
      contradictions.push({ id: q.id, dom: q.dom, lang: 'TH', stated: mTh[1].toUpperCase(), correct: correctLetter, exp: th });
    }
  });

  console.log(`Found ${contradictions.length} direct explanation letter contradictions:`);
  contradictions.forEach((c) => {
    console.log(`- Q${c.id} (Dom ${c.dom}, ${c.lang}): states '${c.stated}' but correct_idx is '${c.correct}'`);
  });
}

deepInspect().catch(console.error);
