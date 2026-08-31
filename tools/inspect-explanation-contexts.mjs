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

async function inspectContexts() {
  const list = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      const strQ = JSON.stringify(q);
      if (strQ.includes('github.com') || strQ.includes('ayemunhossain') || strQ.includes('http://') || strQ.includes('https://')) {
        list.push({ ...q, _dom: info.dom, _file: info.file });
      }
    });
  }

  console.log(`Found ${list.length} contaminated questions. Outputting full details...\n`);
  fs.writeFileSync(
    path.join(ROOT_DIR, 'tools', 'contaminated-questions-full.json'),
    JSON.stringify(list, null, 2),
    'utf-8'
  );
  console.log('Saved to tools/contaminated-questions-full.json');
}

inspectContexts().catch(console.error);
