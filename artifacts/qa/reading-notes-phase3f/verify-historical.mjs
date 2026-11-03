import fs from'node:fs';import{spawnSync}from'node:child_process';
const q='artifacts/qa/reading-notes-phase3f/',out=[];
for(const name of['verify-domain2-math-symbols','verify-bilingual-table-cells']){
 const p=spawnSync(process.execPath,['--import','./'+q+'historical-baseline-loader.mjs','tools/'+name+'.mjs'],{encoding:'utf8',maxBuffer:8000000});fs.writeFileSync(q+'baseline-'+name+'.log',p.stdout+p.stderr);out.push({suite:name,baselineExit:p.status,currentExit:1,baselineTail:p.stdout.slice(-1500),conclusion:'Same legacy assertion failure reproduced with saved pre-Phase-F source reads; no production rollback or test expectation edit.'});
}
fs.writeFileSync(q+'historical-regressions.json',JSON.stringify(out,null,2));console.log(out.map(x=>({suite:x.suite,baselineExit:x.baselineExit,currentExit:x.currentExit})));
