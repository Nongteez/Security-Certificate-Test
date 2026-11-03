import { execSync } from 'node:child_process';
import fs from 'node:fs';

const diffOutput = execSync('git diff b7412a15 25a896a2 -- js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

console.log('Diff length between b7412a15 and 25a896a2:', diffOutput.length);
fs.writeFileSync('tools/diff-b74-25a.diff', diffOutput, 'utf8');

// Let's summarize what changed in b7412a15 -> 25a896a2
const summary = execSync('git diff --stat b7412a15 25a896a2 -- js/core/diagram-generator.js', { encoding: 'utf8' });
console.log(summary);

