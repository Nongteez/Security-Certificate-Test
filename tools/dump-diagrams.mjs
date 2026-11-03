import fs from 'fs';
import { execSync } from 'child_process';
import { diagrams } from '../js/core/diagram-generator.js';

function extractFromCode(code, key) {
  const start = code.indexOf(`${key}:`);
  if (start === -1) return null;
  let end = code.indexOf('\n  //', start + 10);
  if (end === -1) end = code.indexOf('\n};', start);
  return code.slice(start, end).trim();
}

const curCode = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const d50Code = execSync('git show d5024844:js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
const b74Code = execSync('git show b7412a15:js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const dumpKeys = ['osiVsTcpIpModel', 'dmzFirewallArchitecture', 'threatChain', 'aaaLifecycle', 'controlTimeline', 'bcVsDrScope', 'effectivenessHierarchy', 'iamLifecycle'];

for (const k of dumpKeys) {
  const outDir = 'tmp/diagram-dumps';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(`${outDir}/${k}-cur.txt`, extractFromCode(curCode, k) || 'NONE');
  fs.writeFileSync(`${outDir}/${k}-d50.txt`, extractFromCode(d50Code, k) || 'NONE');
  fs.writeFileSync(`${outDir}/${k}-b74.txt`, extractFromCode(b74Code, k) || 'NONE');
}

console.log('Dumped candidate diagrams to tmp/diagram-dumps/');

