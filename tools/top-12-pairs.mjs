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

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function getTokens(s) {
  return new Set(normalize(s).split(' ').filter(Boolean));
}

function jaccard(t1, t2) {
  if (t1.size === 0 || t2.size === 0) return 0;
  let inter = 0;
  for (const x of t1) if (t2.has(x)) inter++;
  return inter / (t1.size + t2.size - inter);
}

async function printTop12() {
  const allQ = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => allQ.push(q));
  }

  const allPairs = [];
  for (let i = 0; i < allQ.length; i++) {
    const q1 = allQ[i];
    const tQ1 = getTokens(q1.question);
    const optsNorm1 = q1.options.map(normalize).sort().join(' | ');
    const tOpt1 = getTokens(optsNorm1);

    for (let j = i + 1; j < allQ.length; j++) {
      const q2 = allQ[j];
      const tQ2 = getTokens(q2.question);
      const optsNorm2 = q2.options.map(normalize).sort().join(' | ');
      const tOpt2 = getTokens(optsNorm2);

      const simQ = jaccard(tQ1, tQ2);
      const simOpt = jaccard(tOpt1, tOpt2);

      if (simQ >= 0.7 || (simQ >= 0.5 && simOpt >= 0.7) || simOpt >= 0.9) {
        allPairs.push({
          id1: q1.id,
          dom1: q1.dom,
          stem1: q1.question,
          ans1: q1.options[q1.correct_idx],
          opts1: q1.options,
          id2: q2.id,
          dom2: q2.dom,
          stem2: q2.question,
          ans2: q2.options[q2.correct_idx],
          opts2: q2.options,
          simQ,
          simOpt,
          score: simQ * 0.5 + simOpt * 0.5
        });
      }
    }
  }

  allPairs.sort((a, b) => b.score - a.score);
  for (let i = 0; i < Math.min(12, allPairs.length); i++) {
    const p = allPairs[i];
    console.log(`[#${i+1}] Q${p.id1} (D${p.dom1}) ↔ Q${p.id2} (D${p.dom2}) | simQ: ${(p.simQ*100).toFixed(1)}%, simOpt: ${(p.simOpt*100).toFixed(1)}% | score: ${(p.score*100).toFixed(1)}%`);
    console.log(`  Q${p.id1}: "${p.stem1}"`);
    console.log(`    Opts: ${JSON.stringify(p.opts1)}`);
    console.log(`    Ans: "${p.ans1}"`);
    console.log(`  Q${p.id2}: "${p.stem2}"`);
    console.log(`    Opts: ${JSON.stringify(p.opts2)}`);
    console.log(`    Ans: "${p.ans2}"`);
    console.log();
  }
}

printTop12().catch(console.error);
