import fs from 'node:fs';

const files = fs.readdirSync('artifacts/qa/reading-notes-phase3d');
const beforeD4 = files.filter(f => f.startsWith('before-d4'));
console.log('before-d4 files in Phase 3D:', beforeD4);

const otherDirs = ['domain-4-reading-notes', 'domain-4-independent-audit'];
otherDirs.forEach(d => {
  if (fs.existsSync(`artifacts/qa/${d}`)) {
    console.log(`\nFiles in ${d}:`);
    console.log(fs.readdirSync(`artifacts/qa/${d}`).filter(f => f.includes('osi') || f.includes('diagram')));
  }
});

