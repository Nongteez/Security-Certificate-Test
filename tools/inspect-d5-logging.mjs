import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-5.md', 'utf8');
const s = text.indexOf('topic-5-2-logging-telemetry-audit');
const e = text.indexOf('topic-5-2-monitoring-siem-correlation', s);
console.log(text.slice(s, e !== -1 ? e : s + 2000));

