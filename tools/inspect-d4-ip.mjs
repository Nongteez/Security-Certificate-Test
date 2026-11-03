import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-4.md', 'utf8');
const s = text.indexOf('topic-4-1-ipv4-cidr-nat');
const e = text.indexOf('topic-4-1-ipv6-architecture', s);
console.log(text.slice(s, e !== -1 ? e : s + 2500));

