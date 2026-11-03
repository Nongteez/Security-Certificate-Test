import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const q='artifacts/qa/domain-5-completion/',files=fs.readdirSync('tools').filter(p=>/^verify-learning-.*\.mjs$/.test(p)&&!p.startsWith('verify-learning-d5')).map(p=>'tools/'+p);
fs.writeFileSync(q+'regression-command.json',JSON.stringify({command:['node','--test','--test-reporter=tap',...files]},null,2));
const r=spawnSync(process.execPath,['--test','--test-reporter=tap',...files],{encoding:'utf8',maxBuffer:64*1024*1024,timeout:240000});fs.writeFileSync(q+'shared-regressions.tap',(r.stdout||'')+'\n'+(r.stderr||''));console.log(JSON.stringify({exit:r.status,error:r.error?.message,files:files.length,tail:r.stdout?.slice(-400)}));
