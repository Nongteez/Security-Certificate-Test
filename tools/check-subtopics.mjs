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

async function checkSubtopics() {
  const allQ = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => allQ.push({ ...q, file: info.file }));
  }

  const queries = [
    { name: 'D1: Guidelines vs Policies / Procedures', dom: 1, test: (q) => /guideline/i.test(q.question) || /procedure/i.test(q.question) || /standard/i.test(q.question) },
    { name: 'D1: Compensating Control', dom: 1, test: (q) => /compensating/i.test(q.question) },
    { name: 'D2: Hot site / Cold site / Warm site', dom: 2, test: (q) => /hot site|cold site|warm site/i.test(q.question) || /hot site|cold site|warm site/i.test(q.options?.join(' ')) },
    { name: 'D2: MTD / Maximum Tolerable Downtime', dom: 2, test: (q) => /mtd|maximum tolerable/i.test(q.question) },
    { name: 'D4: Vishing / Smishing', dom: 4, test: (q) => /vishing|smishing/i.test(q.question) || /vishing|smishing/i.test(q.options?.join(' ')) },
    { name: 'D4: UDP real-time / streaming', dom: 4, test: (q) => /udp/i.test(q.question) && (/stream/i.test(q.question) || /real-time/i.test(q.question) || /voip/i.test(q.question)) }
  ];

  queries.forEach((item) => {
    console.log(`========================================================`);
    console.log(`CHECK: ${item.name}`);
    console.log(`========================================================`);
    const matches = allQ.filter((q) => q.dom === item.dom && item.test(q));
    console.log(`Found ${matches.length} matches:`);
    matches.forEach((m) => console.log(`  [Q${m.id}] ${m.question} -> [${m.correct_idx}] ${m.options[m.correct_idx]}`));
    console.log();
  });
}

checkSubtopics().catch(console.error);
