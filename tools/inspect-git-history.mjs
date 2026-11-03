import { execSync } from 'node:child_process';
import fs from 'node:fs';

const commits = ['b7412a15', 'd5024844', '25a896a2'];

console.log('=== Checking osiVsTcpIpModel in git commits ===');
for (const c of commits) {
  try {
    const content = execSync(`git show ${c}:js/core/diagram-generator.js`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
    const hasOsi = content.includes('osiVsTcpIpModel');
    console.log(`Commit ${c}: has osiVsTcpIpModel? ${hasOsi}`);
    if (hasOsi) {
      // extract osiVsTcpIpModel snippet
      const idx = content.indexOf('osiVsTcpIpModel:');
      const snippet = content.slice(idx, idx + 1500);
      console.log(`Snippet from ${c}:\n`, snippet.slice(0, 500), '\n---');
    }
  } catch (err) {
    console.log(`Commit ${c}: error or file not in commit:`, err.message);
  }
}

// Current working copy
const currentContent = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const curIdx = currentContent.indexOf('osiVsTcpIpModel:');
console.log('Current working copy snippet:\n', currentContent.slice(curIdx, curIdx + 500));

