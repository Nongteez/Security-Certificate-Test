import fs from 'node:fs';

const qaDir = 'artifacts/qa';
const dirs = fs.readdirSync(qaDir);
console.log('=== Directories in artifacts/qa ===');
dirs.forEach(d => console.log(' -', d));

// Check if reading-notes-phase3d or phase3e or phase3a has screenshots
['reading-notes-phase3d', 'reading-notes-phase3e', 'reading-notes-phase3f', 'reading-notes-task-144', 'reading-notes-visual-remediation'].forEach(sub => {
  const p = `${qaDir}/${sub}`;
  if (fs.existsSync(p)) {
    const files = fs.readdirSync(p);
    console.log(`\nFiles in ${sub} (${files.length} files):`);
    console.log(files.slice(0, 10).join(', '));
  }
});

