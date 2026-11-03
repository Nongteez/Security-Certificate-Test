import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-5.md', 'utf8');
const s = text.indexOf('ความสำคัญยิ่งยวดของ NTP');
console.log(text.slice(s - 50, s + 400));

