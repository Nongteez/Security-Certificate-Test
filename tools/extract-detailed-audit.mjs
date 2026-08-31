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

async function runDetailedAudit() {
  const allQuestions = [];
  const byId = new Map();

  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const fileUrl = pathToFileURL(filePath).href;
    const mod = await import(fileUrl);
    const questions = mod.default || mod.questions;
    questions.forEach((q, idx) => {
      const item = { ...q, _file: info.file, _domExpected: info.dom, _idx: idx };
      allQuestions.push(item);
      byId.set(q.id, item);
    });
  }

  // 1. All Contamination occurrences
  const contaminations = [];
  allQuestions.forEach((q) => {
    const fields = [
      { name: 'question', val: q.question },
      { name: 'question_th', val: q.question_th },
      { name: 'explanation', val: q.explanation },
      { name: 'explanation_th', val: q.explanation_th }
    ];
    (q.options || []).forEach((opt, idx) => fields.push({ name: `options[${idx}]`, val: opt }));
    (q.options_th || []).forEach((opt, idx) => fields.push({ name: `options_th[${idx}]`, val: opt }));

    fields.forEach(({ name, val }) => {
      if (typeof val !== 'string') return;
      if (val.includes('github.com') || val.includes('http://') || val.includes('https://') || val.includes('ayemunhossain')) {
        contaminations.push({
          id: q.id,
          dom: q.dom,
          field: name,
          textSnippet: val.length > 100 ? val.substring(0, 100) + '...' : val,
          fullText: val
        });
      }
    });
  });

  // 2. Specific pairs inspection
  const pairAnalyses = [];
  const testPairs = [
    { p: [294, 372], label: 'Q294 ↔ Q372' },
    { p: [96, 468], label: 'Q96 ↔ Q468' },
    { p: [286, 315], label: 'Q286 ↔ Q315' },
    { p: [83, 474], label: 'Q83 ↔ Q474' },
    { p: [223, 408], label: 'Q223 ↔ Q408' },
    { p: [420, 431], label: 'Q420 ↔ Q431' },
    { p: [288, 379], label: 'Q288 ↔ Q379' }
  ];

  testPairs.forEach(({ p, label }) => {
    const q1 = byId.get(p[0]);
    const q2 = byId.get(p[1]);
    pairAnalyses.push({
      label,
      q1: {
        id: q1.id,
        dom: q1.dom,
        question: q1.question,
        options: q1.options,
        correct_idx: q1.correct_idx,
        correct_answer: q1.options[q1.correct_idx],
        explanation: q1.explanation
      },
      q2: {
        id: q2.id,
        dom: q2.dom,
        question: q2.question,
        options: q2.options,
        correct_idx: q2.correct_idx,
        correct_answer: q2.options[q2.correct_idx],
        explanation: q2.explanation
      }
    });
  });

  // 3. Q83 vs Q474 deep check
  const q83 = byId.get(83);
  const q474 = byId.get(474);

  // 4. Save analysis json
  fs.writeFileSync(
    path.join(ROOT_DIR, 'tools', 'detailed-audit-data.json'),
    JSON.stringify({
      totalQuestions: allQuestions.length,
      contaminationsCount: contaminations.length,
      contaminations,
      pairAnalyses,
      q83: { q: q83.question, opts: q83.options, c: q83.options[q83.correct_idx] },
      q474: { q: q474.question, opts: q474.options, c: q474.options[q474.correct_idx] }
    }, null, 2),
    'utf-8'
  );

  console.log('Detailed audit data saved successfully.');
  console.log(`Total contaminations: ${contaminations.length}`);
}

runDetailedAudit().catch(console.error);
