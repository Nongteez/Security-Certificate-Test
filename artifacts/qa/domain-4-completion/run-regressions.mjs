import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const q='artifacts/qa/domain-4-completion/',command=JSON.parse(fs.readFileSync(q+'entry-node-command.json','utf8')).command;
const r=spawnSync(command[0],command.slice(1),{encoding:'utf8',maxBuffer:24*1024*1024});fs.writeFileSync(q+'final-shared-node.tap',r.stdout+r.stderr);const counts=Object.fromEntries(['tests','pass','fail','skipped'].map(k=>[k,Number(r.stdout.match(new RegExp('^# '+k+' (\\d+)','m'))?.[1])]));const failures=[...r.stdout.matchAll(/^not ok (\d+) - (.*)$/gm)].map(m=>({number:Number(m[1]),name:m[2]}));fs.writeFileSync(q+'final-shared-node-results.json',JSON.stringify({command,exitCode:r.status,...counts,failures},null,2));console.log(JSON.stringify({exitCode:r.status,...counts,failures}));
