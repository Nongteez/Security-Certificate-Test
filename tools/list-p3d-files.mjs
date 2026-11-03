import fs from 'node:fs';

const files = fs.readdirSync('artifacts/qa/reading-notes-phase3d');
const d4Files = files.filter(f => f.includes('osi') || f.includes('dmz') || f.includes('defenseInDepthLayers') || f.includes('cloud') || f.includes('d4'));
console.log('Phase 3D D4 files count:', d4Files.length);
console.log(d4Files.slice(0, 30));

const beforeFiles = files.filter(f => f.startsWith('before-'));
console.log('Total before- files in Phase 3D:', beforeFiles.length);
console.log(beforeFiles.slice(0, 30));

