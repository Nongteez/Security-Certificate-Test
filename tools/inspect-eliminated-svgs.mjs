import { execSync } from 'node:child_process';
import fs from 'node:fs';

const v_b74 = execSync('git show b7412a15:js/core/diagram-generator.js', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
const v_d50 = execSync('git show d5024844:js/core/diagram-generator.js', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
const v_cur = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

function getDiag(code, key) {
  if (!code) return null;
  const start = code.indexOf(`${key}:`);
  if (start === -1) return null;
  let end = code.indexOf('\n  //', start + 10);
  if (end === -1) end = code.indexOf('\n};', start);
  return code.slice(start, end).trim();
}

const targets = ['threatChain', 'aaaLifecycle', 'controlTimeline', 'bcVsDrScope', 'effectivenessHierarchy', 'iamLifecycle'];

for (const t of targets) {
  console.log(`\n======================================================`);
  console.log(`DIAGRAM: ${t}`);
  console.log(`======================================================`);

  const oldCode = getDiag(v_b74, t) || getDiag(v_d50, t);
  const curCode = getDiag(v_cur, t);

  console.log('--- HISTORICAL VERSION ---');
  console.log(oldCode ? oldCode.slice(0, 700) : 'NOT IN b74/d50');
  console.log('\n--- CURRENT WORKING VERSION ---');
  console.log(curCode ? curCode.slice(0, 700) : 'NOT IN CURRENT');
}

