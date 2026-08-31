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

const SETS = [
  { set: 'D-01', ids: [294, 372, 287], dom: 1, topic: 'Access management best practices / "Trust but verify"' },
  { set: 'D-02', ids: [286, 315], dom: 2, topic: 'Business Continuity Plan document definition' },
  { set: 'D-03', ids: [288, 379], dom: 5, topic: 'PII / Privacy Policy' },
  { set: 'D-04', ids: [283, 361], dom: 2, topic: 'SLA / data ownership and destruction' },
  { set: 'D-05', ids: [222, 330], dom: 4, topic: 'Poor website input validation / XSS' }
];

async function inspectSets1to5() {
  const map = new Map();
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => map.set(q.id, { ...q, _domExpected: info.dom }));
  }

  for (const s of SETS) {
    console.log(`================================================================`);
    console.log(`SET ${s.set}: ${s.topic} (Domain ${s.dom}) - IDs: ${s.ids.join(', ')}`);
    console.log(`================================================================\n`);

    s.ids.forEach((id) => {
      const q = map.get(id);
      console.log(`--- Q${q.id} (Domain ${q.dom}) ---`);
      console.log(`EN Question: "${q.question}"`);
      console.log(`TH Question: "${q.question_th}"`);
      console.log(`EN Options:`);
      q.options.forEach((opt, idx) => {
        console.log(`  [${idx}] ${opt} ${idx === q.correct_idx ? '<-- [CORRECT_IDX]' : ''}`);
      });
      console.log(`TH Options:`);
      q.options_th.forEach((opt, idx) => {
        console.log(`  [${idx}] ${opt}`);
      });
      console.log(`Configured correct_idx: ${q.correct_idx} (${q.options[q.correct_idx]})`);
      console.log(`EN Explanation: "${q.explanation}"`);
      console.log(`TH Explanation: "${q.explanation_th}"`);
      console.log();
    });
  }
}

inspectSets1to5().catch(console.error);
