import fs from 'node:fs';
import path from 'node:path';

const dir = 'docs/plans/isc2-cc-2026';
const files = fs.readdirSync(dir);
const diagramReports = files.filter(f => f.includes('diagram') || f.includes('vis01') || f.includes('visual') || f.includes('phase3'));

console.log('=== Diagram Related Planning & Remediation Reports ===');
diagramReports.forEach(f => console.log(' -', f));

