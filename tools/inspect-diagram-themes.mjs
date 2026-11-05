import fs from 'node:fs';

const readingCss = fs.readFileSync('css/reading.css', 'utf8');
const lines = readingCss.split('\n');

console.log('Total reading.css lines:', lines.length);

const lightDiagramRules = [];
lines.forEach((l, i) => {
  if (l.includes('data-theme="light"') || l.includes('.light-theme')) {
    if (l.includes('diagram') || l.includes('svg') || l.includes('diag') || l.includes('chart')) {
      lightDiagramRules.push(`${i + 1}: ${l.trim()}`);
    }
  }
});

console.log('Light theme diagram rules count:', lightDiagramRules.length);
console.log(lightDiagramRules.slice(0, 40).join('\n'));

