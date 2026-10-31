import fs from 'node:fs';
const p='docs/plans/task.md',q='artifacts/qa/domain-4-completion/';
const original=fs.readFileSync(q+'entry-shared/'+p),current=fs.readFileSync(p);
if(!current.subarray(0,original.length).equals(original))throw Error('Tracker entry prefix changed');
const tail=current.subarray(original.length).toString('utf8');
if(!tail.includes('| D4-FINISH')||tail.split('\n').filter(x=>x.trim()&&!x.startsWith('| D4-FINISH')).length)throw Error('Unexpected concurrent tracker addition; preserve it');
const row='\r\n| D4-FINISH — Domain 4 complete Learning Slides | Complete — technical QA; human review pending | 9 published lessons / 57 EN/TH slides; all 11 official requirements plus separate AI guidance mapped. 290/290 D4 checks pass. Chrome: 228 slide cases / 684 modes, 144 feedback states, 36 keyboard/language/fullscreen cases, 48 theme states, 9 reload/Resume cases and Continue Learning verified; screenshot inspection complete. Shared 426/435 (5 entry failures + 4 obsolete task boundaries); auxiliary 50/59 (8 old expectations + missing Playwright). 3,112 protected files unchanged. Full report and exact manifest: domain-4-completion-report.md / artifacts/qa/domain-4-completion/. No Domain 5, commit or push. |\r\n';
fs.writeFileSync(p,Buffer.concat([original,Buffer.from(row)]));
