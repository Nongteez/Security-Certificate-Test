import fs from 'node:fs';
for(const [p,marker] of [['docs/plans/task.md','| D4-FINISH'],['docs/plans/isc2-cc-2026/domain-4-source-inventory.md','## 2026-10-31 Learning Slides addendum']]){
 const s=fs.readFileSync(p,'utf8'),i=s.indexOf(marker);if(i<0)throw Error(marker);const before=fs.readFileSync('artifacts/qa/domain-4-completion/entry-shared/'+p);fs.writeFileSync(p,Buffer.concat([before,Buffer.from('\n'+s.slice(i))]));
}
