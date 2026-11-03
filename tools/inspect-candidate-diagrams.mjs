import fs from 'fs';
import { execSync } from 'child_process';
import { diagrams } from '../js/core/diagram-generator.js';

const keys = [
  'osiVsTcpIpModel',
  'dmzFirewallArchitecture',
  'threatChain',
  'aaaLifecycle',
  'controlTimeline',
  'bcVsDrScope',
  'effectivenessHierarchy',
  'iamLifecycle'
];

console.log('=== CANDIDATE DIAGRAMS INSPECTION ===\n');

for (const k of keys) {
  const curHtml = diagrams[k] || '';
  const hasSvg = curHtml.includes('<svg');
  const hasCards = curHtml.includes('reading-semantic-grid') || curHtml.includes('reading-threat-card') || curHtml.includes('reading-mob-stack-list');
  
  console.log(`--- [${k}] ---`);
  console.log(`Current: length=${curHtml.length}, hasSvg=${hasSvg}, hasCards=${hasCards}`);

  // Extract historical versions
  let b74Html = '';
  try {
    const raw = execSync(`git show b7412a15:js/core/diagram-generator.js`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    const idx = raw.indexOf(`${k}:`);
    if (idx !== -1) {
      let end = raw.indexOf('\n  //', idx + 10);
      if (end === -1) end = raw.indexOf('\n};', idx);
      b74Html = raw.slice(idx, end).trim();
    }
  } catch (e) {
    b74Html = 'N/A';
  }

  let d50Html = '';
  try {
    const raw = execSync(`git show d5024844:js/core/diagram-generator.js`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
    const idx = raw.indexOf(`${k}:`);
    if (idx !== -1) {
      let end = raw.indexOf('\n  //', idx + 10);
      if (end === -1) end = raw.indexOf('\n};', idx);
      d50Html = raw.slice(idx, end).trim();
    }
  } catch (e) {
    d50Html = 'N/A';
  }

  console.log(`b74 length: ${b74Html.length}, d50 length: ${d50Html.length}`);
  if (b74Html && b74Html.includes('<svg')) {
    const vb = b74Html.match(/viewBox="[^"]+"/);
    console.log(`b74 has SVG! ${vb ? vb[0] : ''}`);
  }
  if (d50Html && d50Html.includes('<svg')) {
    const vb = d50Html.match(/viewBox="[^"]+"/);
    console.log(`d50 has SVG! ${vb ? vb[0] : ''}`);
  }
  console.log('');
}

