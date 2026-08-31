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

async function listContaminations() {
  const list = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      const check = (val, field) => {
        if (typeof val !== 'string') return;
        if (val.includes('github.com') || val.includes('ayemunhossain') || val.includes('http://') || val.includes('https://')) {
          list.push({ id: q.id, dom: q.dom, field, val });
        }
      };
      check(q.question, 'question');
      check(q.question_th, 'question_th');
      check(q.explanation, 'explanation');
      check(q.explanation_th, 'explanation_th');
      (q.options || []).forEach((o, i) => check(o, `options[${i}]`));
      (q.options_th || []).forEach((o, i) => check(o, `options_th[${i}]`));
    });
  }

  console.log(`Total contaminated fields found: ${list.length}`);
  const byQ = new Map();
  list.forEach((item) => {
    if (!byQ.has(item.id)) byQ.set(item.id, []);
    byQ.get(item.id).push(item);
  });
  console.log(`Distinct questions affected: ${byQ.size}\n`);

  byQ.forEach((items, qid) => {
    const d = items[0].dom;
    console.log(`Q${qid} (Domain ${d}):`);
    items.forEach((it) => {
      console.log(`  - Field: ${it.field}`);
      const match = it.val.match(/(github\.com[^\s"']*|https?:\/\/[^\s"']*|ayemunhossain)/gi);
      console.log(`    Artifact: ${match ? match.join(', ') : 'unknown'}`);
    });
  });
}

listContaminations().catch(console.error);
