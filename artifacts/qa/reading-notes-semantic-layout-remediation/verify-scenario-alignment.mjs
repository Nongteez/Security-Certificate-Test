import fs from 'node:fs';
import assert from 'node:assert/strict';
import {parseScenarioBlock} from '../../../js/core/scenario-component.js';
const results=[];
for(const d of[4,5]){
 const s=fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}.md`,'utf8');
 const {['domain'+d+'Scenarios']:scenarios}=await import(`../../../content/isc2-cc-2026/reading/domain-${d}-scenarios.js`);
 const parsed=[...s.matchAll(/:::scenario\s*\n([\s\S]*?)\n:::/g)].map(m=>parseScenarioBlock(m[1].split('\n')));
 assert.equal(parsed.length,scenarios.length);
 for(let i=0;i<parsed.length;i++)for(const key of['topic','situation','question','answer','reasoning'])results.push({domain:d,id:i+1,key,pass:parsed[i][key]===scenarios[i][key]});
}
fs.writeFileSync('artifacts/qa/reading-notes-semantic-layout-remediation/scenario-alignment.json',JSON.stringify({status:results.every(r=>r.pass)?'PASS':'FAIL',results},null,2)+'\n');
console.log(JSON.stringify({checks:results.length,failed:results.filter(r=>!r.pass)}));assert.ok(results.every(r=>r.pass));
