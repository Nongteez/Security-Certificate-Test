import { execSync } from 'node:child_process';
import fs from 'node:fs';

const commits = ['b7412a15', 'd5024844', '25a896a2'];
const versions = {};

for (const c of commits) {
  try {
    versions[c] = execSync(`git show ${c}:js/core/diagram-generator.js`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
  } catch (e) {
    versions[c] = '';
  }
}
versions['current'] = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

// List of all 28 diagrams
const diagramKeys = [
  // Domain 1 (12)
  'threatChain', 'ciaTriad', 'loadBalancer', 'aaaLifecycle', 'privacyFlow',
  'defenseInDepth', 'riskCalculationFlow', 'riskLifecycle', 'documentHierarchy',
  'controlTimeline', 'dueCareDiligence', 'ethicsCanons',
  // Domain 2 (4)
  'grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy',
  // Domain 3 (4)
  'iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels',
  // Domain 4 (4)
  'osiVsTcpIpModel', 'dmzFirewallArchitecture', 'defenseInDepthLayers', 'cloudSharedResponsibility',
  // Domain 5 (4)
  'mitreAttackTacticTechnique', 'irpLifecycle', 'assetLifecycleAndEol', 'securityTestingMatrix'
];

function extractDiagSnippet(code, key) {
  if (!code) return null;
  const start = code.indexOf(`${key}:`);
  if (start === -1) return null;
  // find next diagram key or end of object
  let end = code.indexOf('\n  //', start + 10);
  if (end === -1) end = code.indexOf('\n};', start);
  if (end === -1) end = start + 8000;
  return code.slice(start, end).trim();
}

console.log('=== Diagram Evolution Across Git Versions ===');
const report = [];

for (const key of diagramKeys) {
  const v_b74 = extractDiagSnippet(versions['b7412a15'], key);
  const v_d50 = extractDiagSnippet(versions['d5024844'], key);
  const v_25a = extractDiagSnippet(versions['25a896a2'], key);
  const v_cur = extractDiagSnippet(versions['current'], key);

  const presentIn = [];
  if (v_b74) presentIn.push('b7412a15');
  if (v_d50) presentIn.push('d5024844');
  if (v_25a) presentIn.push('25a896a2');
  if (v_cur) presentIn.push('current');

  const diff_25a_cur = v_25a && v_cur ? (v_25a !== v_cur) : 'N/A';
  const diff_d50_25a = v_d50 && v_25a ? (v_d50 !== v_25a) : 'N/A';

  report.push({
    key,
    presentIn,
    changedInCurrent: diff_25a_cur,
    changedIn25a: diff_d50_25a,
    len_25a: v_25a ? v_25a.length : 0,
    len_cur: v_cur ? v_cur.length : 0
  });

  console.log(`${key.padEnd(26)} | Present: [${presentIn.join(', ')}] | Changed vs 25a: ${diff_25a_cur}`);
}

fs.writeFileSync('tools/diagram-evolution.json', JSON.stringify(report, null, 2), 'utf8');

