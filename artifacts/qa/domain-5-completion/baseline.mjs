import fs from 'node:fs';
import cp from 'node:child_process';
import {createHash} from 'node:crypto';
const paths=cp.execFileSync('git',['ls-files','-z'],{encoding:'utf8',maxBuffer:64*1024*1024}).split('\0').filter(Boolean), hashes={};
for(const p of paths)if(fs.statSync(p).isFile())hashes[p]=createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const q='artifacts/qa/domain-5-completion/';
fs.writeFileSync(q+'entry-baseline.json',JSON.stringify({head:cp.execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),hashes},null,2));
for(const p of ['content/isc2-cc-2026/learning/published/catalog.json','js/ui/learning/renderers.js','js/ui/learning/lesson-info.js','index.html','docs/plans/task.md','docs/plans/isc2-cc-2026/domain-5-academic-audit.md','docs/plans/isc2-cc-2026/domain-5-2026-coverage-matrix.md']){fs.mkdirSync(q+'entry-shared/'+p.slice(0,p.lastIndexOf('/')),{recursive:true});fs.copyFileSync(p,q+'entry-shared/'+p)}
console.log(Object.keys(hashes).length+' tracked files baselined');

