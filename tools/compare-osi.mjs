import { execSync } from 'node:child_process';
import fs from 'node:fs';

const oldCode = execSync('git show 25a896a2:js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const curCode = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

function extractDiagram(code, key) {
  const start = code.indexOf(`${key}:`);
  if (start === -1) return null;
  // find next key or end of object
  const next = code.indexOf('\n  //', start + 10);
  return code.slice(start, next !== -1 ? next : start + 4000);
}

const oldOsi = extractDiagram(oldCode, 'osiVsTcpIpModel');
const curOsi = extractDiagram(curCode, 'osiVsTcpIpModel');

console.log('=== OLD OSI (25a896a2) ===');
console.log(oldOsi);

console.log('\n=== CURRENT OSI ===');
console.log(curOsi);

