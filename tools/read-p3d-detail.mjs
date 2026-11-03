import fs from 'node:fs';

const p3d = fs.readFileSync('docs/plans/isc2-cc-2026/reading-notes-phase3d-diagram-semantics-remediation.md', 'utf8');
const lines = p3d.split('\n');
console.log(lines.slice(30, 120).join('\n'));

