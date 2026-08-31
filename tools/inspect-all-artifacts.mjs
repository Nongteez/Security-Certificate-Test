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

async function inspectAll() {
  const artifacts = [];
  const urlPattern = /(github\.com[^\s"']*|https?:\/\/[^\s"']*|www\.[^\s"']*|ayemunhossain[^\s"']*)/i;

  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    
    questions.forEach((q) => {
      const check = (val, field) => {
        if (typeof val !== 'string') return;
        const match = val.match(urlPattern);
        if (match) {
          artifacts.push({
            id: q.id,
            dom: q.dom,
            field,
            matched: match[0],
            text: val
          });
        }
      };

      check(q.question, 'question');
      check(q.question_th, 'question_th');
      check(q.explanation, 'explanation');
      check(q.explanation_th, 'explanation_th');
      (q.options || []).forEach((opt, idx) => check(opt, `options[${idx}]`));
      (q.options_th || []).forEach((opt, idx) => check(opt, `options_th[${idx}]`));
    });
  }

  console.log(`Total artifacts found: ${artifacts.length}\n`);
  artifacts.forEach((a, idx) => {
    console.log(`[#${idx + 1}] Q${a.id} (Domain ${a.dom}) - Field: ${a.field}`);
    console.log(`  Matched artifact: "${a.matched}"`);
    console.log(`  Full string: "${a.text}"`);
    console.log();
  });
}

inspectAll().catch(console.error);
