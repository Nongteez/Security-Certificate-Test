import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, file: 'domain-1.js' },
  { dom: 2, file: 'domain-2.js' },
  { dom: 3, file: 'domain-3.js' },
  { dom: 4, file: 'domain-4.js' },
  { dom: 5, file: 'domain-5.js' }
];

const targetIds = [294, 372, 315, 283, 197, 330, 363, 147, 442, 288];

async function locateLines() {
  for (const info of DOMAIN_FILES) {
    const filePath = path.join(QUESTIONS_DIR, info.file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    targetIds.forEach((id) => {
      lines.forEach((line, lineIdx) => {
        if (line.includes(`"id": ${id},`) || line.includes(`id: ${id},`)) {
          console.log(`Found Q${id} in ${info.file} at line ${lineIdx + 1}`);
        }
      });
    });
  }
}

locateLines().catch(console.error);
