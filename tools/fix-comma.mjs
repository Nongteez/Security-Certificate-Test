import fs from 'node:fs';

let content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const idx = content.indexOf('backupRestoreChains');
const lastBt = content.lastIndexOf('`', idx);
console.log('lastBt index:', lastBt);
content = content.slice(0, lastBt + 1) + ',\n\n' + content.slice(lastBt + 1).trimStart();
fs.writeFileSync('js/core/diagram-generator.js', content, 'utf8');
console.log('Inserted comma after backtick!');

