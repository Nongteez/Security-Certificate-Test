import { execSync } from 'node:child_process';
import fs from 'node:fs';

const v_b74 = execSync('git show b7412a15:js/core/diagram-generator.js', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
const v_25a = execSync('git show 25a896a2:js/core/diagram-generator.js', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
const v_cur = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

function getDiag(code, key) {
  const start = code.indexOf(`${key}:`);
  if (start === -1) return null;
  let end = code.indexOf('\n  //', start + 10);
  if (end === -1) end = code.indexOf('\n};', start);
  return code.slice(start, end).trim();
}

const diagramKeys = [
  'threatChain', 'ciaTriad', 'loadBalancer', 'aaaLifecycle', 'privacyFlow',
  'defenseInDepth', 'riskCalculationFlow', 'riskLifecycle', 'documentHierarchy',
  'controlTimeline', 'dueCareDiligence', 'ethicsCanons',
  'grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy',
  'iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels',
  'osiVsTcpIpModel', 'dmzFirewallArchitecture', 'defenseInDepthLayers', 'cloudSharedResponsibility'
];

for (const k of diagramKeys) {
  const b74 = getDiag(v_b74, k);
  const a25 = getDiag(v_25a, k);
  const cur = getDiag(v_cur, k);

  const b74_a25_diff = b74 && a25 ? (b74 !== a25) : 'N/A';
  const a25_cur_diff = a25 && cur ? (a25 !== cur) : 'N/A';

  console.log(`${k.padEnd(26)} | b74 vs 25a: ${String(b74_a25_diff).padEnd(5)} | 25a vs cur: ${String(a25_cur_diff).padEnd(5)}`);
}

