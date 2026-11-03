import fs from 'node:fs';
const text = fs.readFileSync('content/isc2-cc-2026/reading/domain-3.md', 'utf8');

function showSection(startAnchor, endAnchor) {
  const s = text.indexOf(startAnchor);
  const e = text.indexOf(endAnchor, s);
  console.log('=== ' + startAnchor + ' to ' + endAnchor + ' ===');
  console.log(text.slice(s, e !== -1 ? e : s + 2000));
}

showSection('topic-3-2-polp-vs-sod', 'topic-3-2-dac');
showSection('topic-3-2-models-matrix', 'topic-3-review-scenarios');

