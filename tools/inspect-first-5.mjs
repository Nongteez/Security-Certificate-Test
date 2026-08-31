import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, file: 'domain-1.js' },
  { dom: 2, file: 'domain-2.js' }
];

const targetIds = [277, 304, 338, 237, 242];

async function inspectFirst5() {
  const currentMap = new Map();
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      if (targetIds.includes(q.id)) {
        currentMap.set(q.id, { ...q, _dom: info.dom });
      }
    });
  }

  const origData = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'tools', 'contaminated-questions-full.json'), 'utf-8'));
  const origMap = new Map();
  origData.forEach((q) => origMap.set(q.id, q));

  for (let idx = 0; idx < targetIds.length; idx++) {
    const id = targetIds[idx];
    const curr = currentMap.get(id);
    const orig = origMap.get(id);

    console.log(`================================================================`);
    console.log(`[#${idx + 1}] QUESTION Q${id} (Domain ${curr.dom})`);
    console.log(`================================================================`);
    console.log(`EN Question: "${curr.question}"`);
    console.log(`TH Question: "${curr.question_th}"`);
    console.log(`EN Options:`);
    curr.options.forEach((opt, oIdx) => console.log(`  [${oIdx}] ${opt} ${oIdx === curr.correct_idx ? '<-- CORRECT_IDX' : ''}`));
    console.log(`TH Options:`);
    curr.options_th.forEach((opt, oIdx) => console.log(`  [${oIdx}] ${opt}`));
    console.log(`Configured correct_idx: ${curr.correct_idx} (${curr.options[curr.correct_idx]})`);
    console.log(`----------------------------------------------------------------`);
    console.log(`ORIGINAL (Pre-Clean) EN:`);
    console.log(orig ? orig.explanation : '(no original found)');
    console.log(`CURRENT (Post-Clean) EN:`);
    console.log(curr.explanation);
    console.log(`CURRENT TH Explanation:`);
    console.log(curr.explanation_th);
    console.log();
  }
}

inspectFirst5().catch(console.error);
