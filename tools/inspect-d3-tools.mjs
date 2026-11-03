import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-3.md', 'utf8');
const s = text.indexOf('topic-3-1-iam-tools');
const e = text.indexOf('topic-3-1-least-privilege', s);
console.log(text.slice(s, e !== -1 ? e : s + 2000));

