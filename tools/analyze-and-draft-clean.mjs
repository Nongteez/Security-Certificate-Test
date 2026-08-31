import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'tools', 'contaminated-questions-full.json'), 'utf-8'));

console.log(`Analyzing ${data.length} contaminated questions...\n`);

const cleanPlan = [];

data.forEach((q) => {
  const item = {
    id: q.id,
    dom: q.dom,
    file: q._file,
    changes: []
  };

  // Check question
  if (q.question.includes('github.com') || q.question.includes('http')) {
    let cleanQ = q.question
      .replace(/\s*github\.com\/ayemunhossain[^\s]*/gi, '')
      .replace(/\s*github\.com\/ayemunhossa[^\s]*/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    item.changes.push({
      field: 'question',
      original: q.question,
      cleaned: cleanQ
    });
  }

  // Check options
  if (Array.isArray(q.options)) {
    q.options.forEach((opt, idx) => {
      if (opt.includes('github.com') || opt.includes('http')) {
        let cleanOpt = opt
          .replace(/\s*github\.com\/ayemunhossain[^\s]*/gi, '')
          .replace(/\s*github\.com\/ayemunhossa[^\s]*/gi, '')
          .replace(/\s+/g, ' ')
          .trim();
        item.changes.push({
          field: `options[${idx}]`,
          original: opt,
          cleaned: cleanOpt
        });
      }
    });
  }

  // Check explanation
  if (q.explanation && (q.explanation.includes('github.com') || q.explanation.includes('http') || q.explanation.includes('ayemunhossain'))) {
    item.changes.push({
      field: 'explanation',
      original: q.explanation,
      th_explanation: q.explanation_th
    });
  }

  cleanPlan.push(item);
});

fs.writeFileSync(
  path.join(ROOT_DIR, 'tools', 'proposed-clean-plan.json'),
  JSON.stringify(cleanPlan, null, 2),
  'utf-8'
);

console.log('Saved preliminary clean plan to tools/proposed-clean-plan.json');
