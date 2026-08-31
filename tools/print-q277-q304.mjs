import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const mod = await import(pathToFileURL(path.join(ROOT_DIR, 'data/certs/isc2/cc/versions/2026/questions/domain-1.js')).href);
const questions = mod.default || mod.questions;

[277, 304].forEach((id) => {
  const q = questions.find((x) => x.id === id);
  console.log(`Q${id}:`);
  console.log('EN Question:', q.question);
  console.log('TH Question:', q.question_th);
  console.log('Options:', q.options);
  console.log('Options TH:', q.options_th);
  console.log('correct_idx:', q.correct_idx);
  console.log('EN Explanation:', q.explanation);
  console.log('TH Explanation:', q.explanation_th);
  console.log('---------------------------------');
});
