import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'tools', 'contaminated-questions-full.json'), 'utf-8'));

const expQuestions = data.filter((q) => q.explanation && (q.explanation.includes('github.com') || q.explanation.includes('http') || q.explanation.includes('ayemunhossain')));

console.log(`There are ${expQuestions.length} explanations with artifacts:\n`);

expQuestions.forEach((q, idx) => {
  console.log(`[#${idx + 1}] Q${q.id} (Domain ${q.dom}):`);
  console.log(`  Question EN: "${q.question}"`);
  console.log(`  Question TH: "${q.question_th}"`);
  console.log(`  Explanation EN: "${q.explanation}"`);
  console.log(`  Explanation TH: "${q.explanation_th}"`);
  console.log('----------------------------------------------------');
});
