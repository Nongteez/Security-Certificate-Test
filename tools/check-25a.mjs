import { execSync } from 'node:child_process';
import fs from 'node:fs';

const diffStat = execSync('git diff --stat d5024844 25a896a2', { encoding: 'utf8' });
console.log('=== git diff --stat d5024844 25a896a2 ===\n', diffStat);

// Check if diagram-generator.js changed between d5024844 and 25a896a2
const diagDiff = execSync('git diff d5024844 25a896a2 -- js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
console.log('diagDiff length between d5024844 and 25a896a2:', diagDiff.length);
if (diagDiff.length > 0) {
  console.log('diagDiff snippet:\n', diagDiff.slice(0, 1000));
}

