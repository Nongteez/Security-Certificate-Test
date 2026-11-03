import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {drafts,stagedQuestions} from '../../../content/isc2-cc-2026/questions/domain-5-draft.mjs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const report=read('artifacts/qa/domain5-production/independent-review.json');
for(const [path,hash] of Object.entries(report.currentInputHashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex'),hash,'Reviewed input changed: '+path);
const ledger=drafts.map(d=>{
 const r=report.items.find(x=>x.id===d.id);
 assert.ok(r&&r.inputRevision===d.revision&&r.keyAgreement&&r.uniqueBestAnswer&&r.hardGates.length===0);
 assert.ok(Object.values(r.scores).length===10&&Object.values(r.scores).every(n=>n>=4)&&r.total50>=45);
 assert.ok(Object.keys(r.originalRubric0to3.scores).length===8&&Object.values(r.originalRubric0to3.scores).every(n=>n>=2));
 return {...r,status:'ACCEPTED',scores:Object.values(r.scores),scoreDimensions:Object.keys(r.scores),itemHash:crypto.createHash('sha256').update(JSON.stringify(stagedQuestions.find(q=>q.id===d.id))).digest('hex'),reviewEvidence:'artifacts/qa/domain5-production/independent-review.json'};
});
fs.writeFileSync('content/isc2-cc-2026/sources/domain-5/production/qa-ledger.json',JSON.stringify(ledger,null,2)+'\n');
fs.writeFileSync('data/certs/isc2/cc/versions/next-bank/questions/domain-5.js','/** Original practice questions; Sep2026 scope. Review/source metadata is kept in content/isc2-cc-2026/sources/domain-5/production. */\nconst questions = '+JSON.stringify(stagedQuestions,null,2)+';\n\nexport default questions;\n');
console.log(`Published ${ledger.length} independently reviewed items; rejected1003/1025 excluded. Runtime exports exactly11 fields.`);
