import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-4.md', 'utf8');

function showSection(startAnchor, endAnchor) {
  const s = text.indexOf(startAnchor);
  const e = text.indexOf(endAnchor, s);
  console.log('=== ' + startAnchor + ' to ' + endAnchor + ' ===');
  console.log(text.slice(s, e !== -1 ? e : s + 1500));
}

showSection('topic-4-1-tcp-ip-mapping', 'topic-4-1-ipv4-cidr-nat');
showSection('topic-4-1-ipv4-cidr-nat', 'topic-4-1-ipv6-architecture');
showSection('topic-4-3-shared-responsibility', 'topic-4-3-deployment-models');

