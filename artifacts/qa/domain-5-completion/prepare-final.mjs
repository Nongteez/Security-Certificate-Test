import fs from 'node:fs';
let s=fs.readFileSync('artifacts/qa/domain-4-completion/browser-final.mjs','utf8').replaceAll('domain-4-completion','domain-5-completion').replaceAll('data-d4','data-d5').replaceAll('.d4-','.d5-').replace('d.id===4','d.id===5').replaceAll('ids[8]','ids[10]');fs.writeFileSync('artifacts/qa/domain-5-completion/browser-final.mjs',s);
