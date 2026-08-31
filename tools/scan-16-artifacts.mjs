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

const targetIds = [277, 304, 338, 237, 242, 323, 325, 190, 207, 209, 222, 291, 356, 364, 368, 205];

async function scan16ForArtifacts() {
  const all16 = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => {
      if (targetIds.includes(q.id)) all16.push(q);
    });
  }

  const suspiciousPatterns = [
    /github\.com/i,
    /ayemunhossain/i,
    /ayemunhossai/i,
    /ayemunhossa/i,
    /https?:\/\//i,
    /www\./i,
    /\s{2,}/,
    /[a-zA-Z0-9]\s+[,.]/,
    /\s+$/
  ];

  let issueCount = 0;
  all16.forEach((q) => {
    const str = JSON.stringify(q);
    if (str.includes('github') || str.includes('ayemun') || str.includes('http')) {
      console.log(`Artifact detected in Q${q.id}!`);
      issueCount++;
    }
  });

  console.log(`Scan completed for 16 target questions.`);
  console.log(`Remaining artifact fragments in these 16 questions: ${issueCount}`);
}

scan16ForArtifacts().catch(console.error);
