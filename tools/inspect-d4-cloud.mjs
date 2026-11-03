import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-4.md', 'utf8');
const s = text.indexOf('data-diagram="cloudSharedResponsibility"');
console.log(text.slice(s - 50, s + 500));

