import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-3.md', 'utf8');
const anchors = [...text.matchAll(/id="(topic-[^"]+)"/g)].map(m => m[1]);
console.log('Anchors in domain-3.md:');
anchors.forEach(a => console.log('  ', a));

