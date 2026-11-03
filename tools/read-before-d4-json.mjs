import fs from 'node:fs';

const p = 'artifacts/qa/reading-notes-phase3d/before-d4.json';
if (fs.existsSync(p)) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(content.slice(0, 2000));
} else {
  console.log('before-d4.json not found');
}

