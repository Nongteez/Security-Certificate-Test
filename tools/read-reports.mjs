import fs from 'node:fs';

function readSummary(f) {
  const p = `docs/plans/isc2-cc-2026/${f}`;
  if (!fs.existsSync(p)) return 'Not found: ' + f;
  const content = fs.readFileSync(p, 'utf8');
  return content.slice(0, 2000);
}

console.log('=== PHASE 3D SUMMARY ===');
console.log(readSummary('reading-notes-phase3d-diagram-semantics-remediation.md'));

console.log('\n=== PHASE 3E SUMMARY ===');
console.log(readSummary('reading-notes-phase3e-diagram-legibility-remediation.md'));

