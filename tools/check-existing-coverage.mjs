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

async function checkExistingCoverage() {
  const allQ = [];
  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;
    questions.forEach((q) => allQ.push({ ...q, file: info.file }));
  }

  const searches = [
    {
      topic: 'Q294 - ISC2 Code of Ethics Canons / Precedence',
      filter: (q) => q.dom === 1 && (/canon/i.test(q.question) || /ethics/i.test(q.question) || /precedence/i.test(q.question))
    },
    {
      topic: 'Q372 - Defense in Depth / Layered Controls',
      filter: (q) => q.dom === 1 && (/defense in depth/i.test(q.question) || /layered/i.test(q.question) || /security in depth/i.test(q.question))
    },
    {
      topic: 'Q315 - RPO vs RTO',
      filter: (q) => q.dom === 2 && (/rpo/i.test(q.question) || /rto/i.test(q.question) || /recovery point/i.test(q.question) || /recovery time/i.test(q.question))
    },
    {
      topic: 'Q283 - Chain of Custody & Evidence Preservation',
      filter: (q) => q.dom === 2 && (/custody/i.test(q.question) || /evidence/i.test(q.question) || /forensic/i.test(q.question))
    },
    {
      topic: 'Q197 - BC/DR Testing (Tabletop / Simulation / Full-interruption)',
      filter: (q) => q.dom === 2 && (/tabletop/i.test(q.question) || /simulation/i.test(q.question) || /exercise/i.test(q.question) || /test/i.test(q.question))
    },
    {
      topic: 'Q330 - SQL Injection vs XSS / Parameterized queries',
      filter: (q) => q.dom === 4 && (/sql/i.test(q.question) || /injection/i.test(q.question) || /parameterized/i.test(q.question) || /prepared statement/i.test(q.question))
    },
    {
      topic: 'Q363 - Spear Phishing vs Whaling',
      filter: (q) => q.dom === 4 && (/whaling/i.test(q.question) || /spear/i.test(q.question) || /executive/i.test(q.question))
    },
    {
      topic: 'Q147 - OSI Layer 2 vs Layer 3 (Frames vs Packets / Switch vs Router)',
      filter: (q) => q.dom === 4 && (/layer 2/i.test(q.question) || /layer 3/i.test(q.question) || /data link/i.test(q.question) || /frame/i.test(q.question))
    },
    {
      topic: 'Q442 - TCP vs UDP (3-Way Handshake / Connection-oriented vs Connectionless)',
      filter: (q) => q.dom === 4 && (/tcp/i.test(q.question) || /udp/i.test(q.question) || /handshake/i.test(q.question) || /connectionless/i.test(q.question))
    },
    {
      topic: 'Q288 - Data Sanitization (Clear vs Purge vs Destroy / NIST SP 800-88)',
      filter: (q) => q.dom === 5 && (/sanitiz/i.test(q.question) || /purge/i.test(q.question) || /clear/i.test(q.question) || /destroy/i.test(q.question) || /degauss/i.test(q.question))
    }
  ];

  searches.forEach((s) => {
    console.log(`========================================================`);
    console.log(`SEARCH: ${s.topic}`);
    console.log(`========================================================`);
    const matches = allQ.filter(s.filter);
    console.log(`Found ${matches.length} matching questions:`);
    matches.forEach((m) => {
      console.log(`  [Q${m.id}] (dom ${m.dom}): "${m.question}" (correct: [${m.correct_idx}] ${m.options[m.correct_idx]})`);
    });
    console.log();
  });
}

checkExistingCoverage().catch(console.error);
