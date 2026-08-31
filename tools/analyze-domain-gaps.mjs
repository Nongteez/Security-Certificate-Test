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

async function scanGaps() {
  const allQ = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => allQ.push(q));
  }

  // Proposed topics to check against bank
  const proposals = [
    { dom: 1, id: 294, topic: 'ISC2 Code of Ethics Canons hierarchy / precedence' },
    { dom: 1, id: 372, topic: 'Risk Appetite vs Risk Tolerance distinction' },
    { dom: 2, id: 315, topic: 'Maximum Tolerable Downtime (MTD) vs Recovery Time Objective (RTO)' },
    { dom: 2, id: 283, topic: 'Incident Response: Chain of Custody & Evidence Preservation' },
    { dom: 2, id: 197, topic: 'BC/DR Tabletop Exercise vs Simulation Exercise' },
    { dom: 4, id: 330, topic: 'SQL Injection (SQLi) vs Cross-Site Scripting (XSS) mechanism' },
    { dom: 4, id: 363, topic: 'Social Engineering: Spear Phishing vs Whaling distinction' },
    { dom: 4, id: 147, topic: 'OSI Layer 2 (Data Link) - MAC addressing & Frame Switching' },
    { dom: 4, id: 442, topic: 'OSI Layer 4 (Transport) - TCP (Connection-Oriented) vs UDP (Connectionless)' },
    { dom: 5, id: 288, topic: 'Data Sanitization: Clearing vs Purging vs Destruction methods' }
  ];

  console.log('Testing proposed replacement topics against existing 583 questions:\n');

  proposals.forEach((p) => {
    const keywords = p.topic.toLowerCase().split(/[\s/:()-]+/).filter((w) => w.length > 3);
    const matches = allQ.filter((q) => {
      if (q.dom !== p.dom) return false;
      const qText = (q.question + ' ' + (q.options || []).join(' ')).toLowerCase();
      let matchCount = 0;
      keywords.forEach((k) => { if (qText.includes(k)) matchCount++; });
      return matchCount >= 2;
    });

    console.log(`[Q${p.id} - Dom ${p.dom}] Proposed: "${p.topic}"`);
    console.log(`  Matching questions in Domain ${p.dom}: ${matches.length} matches (IDs: ${matches.map((m) => m.id).join(', ') || 'None'})`);
    console.log();
  });
}

scanGaps().catch(console.error);
