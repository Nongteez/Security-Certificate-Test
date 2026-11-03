import { execSync } from 'node:child_process';
import fs from 'node:fs';

const diffOutput = execSync('git diff 25a896a2 -- js/core/diagram-generator.js', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

fs.writeFileSync('tools/diff-25a-to-current.diff', diffOutput, 'utf8');

// Find all diagram keys modified in this diff
const modifiedDiagrams = [];
const keyMatches = [...diffOutput.matchAll(/@@\s+-\d+,\d+\s+\+\d+,\d+\s+@@\s+(?:\/\/\s*([^\n]+)|([a-zA-Z0-9_-]+):)/g)];
console.log('Modified regions count:', keyMatches.length);

const keys = [
  'threatChain', 'ciaTriad', 'loadBalancer', 'aaaLifecycle', 'privacyFlow',
  'defenseInDepth', 'riskCalculationFlow', 'riskLifecycle', 'documentHierarchy',
  'controlTimeline', 'dueCareDiligence', 'ethicsCanons',
  'grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy',
  'iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels',
  'osiVsTcpIpModel', 'dmzFirewallArchitecture', 'defenseInDepthLayers', 'cloudSharedResponsibility'
];

for (const k of keys) {
  if (diffOutput.includes(k)) {
    console.log(`Key ${k} is present in diff against 25a896a2`);
  }
}

