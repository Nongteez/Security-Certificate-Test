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

async function searchAll() {
  const matches = [];
  const pattern = /(github\.com|ayemunhossain|ayemunhossai|ayemunhossa|https?:\/\/|www\.|\.com|\.net|\.org)/gi;

  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;

    questions.forEach((q) => {
      const check = (val, field) => {
        if (!val || typeof val !== 'string') return;
        const m = val.match(pattern);
        if (m) {
          matches.push({
            id: q.id,
            dom: q.dom,
            field,
            matchedPatterns: [...new Set(m.map((x) => x.toLowerCase()))],
            text: val
          });
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

  console.log(`Found ${matches.length} total string matches for URL / web patterns.\n`);
  
  // Filter into (A) Confirmed accidental artifacts vs (B) Legitimate technical cybersecurity content
  const accidental = [];
  const legitimate = [];

  matches.forEach((item) => {
    if (
      item.text.includes('github.com') ||
      item.text.includes('ayemunhossain') ||
      item.text.includes('ayemunhossai') ||
      item.text.includes('ayemunhossa') ||
      item.text.includes('resources.infosecinstitute.com')
    ) {
      accidental.push(item);
    } else {
      legitimate.push(item);
    }
  });

  console.log(`Accidental artifacts: ${accidental.length}`);
  console.log(`Legitimate technical text: ${legitimate.length}\n`);

  console.log('--- LEGITIMATE TECHNICAL TEXT MATCHES ---');
  legitimate.forEach((item) => {
    console.log(`Q${item.id} (D${item.dom}, ${item.field}) [matches: ${item.matchedPatterns.join(', ')}]:`);
    console.log(`  "${item.text}"\n`);
  });
}

searchAll().catch(console.error);
