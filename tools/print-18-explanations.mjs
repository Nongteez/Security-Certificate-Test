import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'tools', 'contaminated-questions-full.json'), 'utf-8'));

const expQuestions = data.filter((q) => q.explanation && (q.explanation.includes('github.com') || q.explanation.includes('http') || q.explanation.includes('ayemunhossain')));

for (let i = 0; i < 18; i++) {
  const q = expQuestions[i];
  console.log(`=== [#${i + 1}] Q${q.id} (Domain ${q.dom}) ===`);
  console.log(`EN: ${q.explanation}`);
  console.log(`TH: ${q.explanation_th}`);
  console.log();
}
