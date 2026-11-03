import {applyDiagramClarifications} from './reading-fidelity-clarifications.mjs';
import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {diagrams} from '../js/core/diagram-generator.js';
const css=fs.readFileSync('css/reading.css','utf8');
test('diagram reflow follows available container space, not only viewport width',()=>{
 assert.match(css,/container: reading-diagram \/ inline-size/);
 for(const key of ['threatChain','defenseInDepth','osiVsTcpIpModel','cloudSharedResponsibility'])
  assert.match(css,new RegExp(`@container reading-diagram \\(min-width: [0-9.]+px\\) \\{[\\s\\S]*?data-diagram="${key}"`));
 assert.match(css,/\.reading-body \.reading-diagram-card \.reading-diagram-svg \{[\s\S]*?max-width: none/);
});
test('cloud legend has a bounded font rule and accessible contrasting responsibility colors',()=>{
 assert.match(css,/data-diagram="cloudSharedResponsibility"[\s\S]*?g:first-child > text[\s\S]*?font-size: 10\.5px/);
 assert.match(css,/rect\[fill="#10b981"\][\s\S]*?#047857/);
 assert.match(css,/rect\[fill="#3b82f6"\][\s\S]*?#1d4ed8/);
});
test('native alternatives retain word boundaries and readable label sizes',()=>{
 assert.match(css,/Phase 3E/);assert.match(css,/font-size: 15px/);assert.match(css,/flex-wrap: wrap/);
 assert.match(css,/word-break: normal/);assert.match(css,/overflow-wrap: normal/);
 assert.match(css,/\.reading-mob-tier-info[\s\S]*?min-width: 0/);
});
test('reflowed OSI view names every original layer with its original detail',()=>{
 const h=diagrams.osiVsTcpIpModel;const mobile=h.slice(h.indexOf('<div class="reading-diag-mobile'));
 for(const n of [7,6,5,4,3,2,1])assert.match(mobile,new RegExp(`data-osi-layer="${n}"`));
 for(const name of ['Presentation','Session','Physical','Radio Signals','NetBIOS','RJ45'])assert.ok(mobile.includes(name),name);
 assert.match(mobile,/model correspondence, not packet flow/);
});
test('all original diagram markup preserved except additive reflow labels',()=>{
 const old=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3d/final-diagrams.json','utf8'));
 assert.deepEqual(Object.keys(diagrams),Object.keys(old));
 for(const id of Object.keys(old)){
  const clean=diagrams[id].replace(/<p class="reading-diagram-source-labels">[\s\S]*?<\/p>/g,'').replace(/<section class="reading-osi-reference">[\s\S]*?<\/div><\/section>/,'');
  assert.equal(clean,applyDiagramClarifications(old[id],id),id);
 }
});

test('dense reflow alternatives preserve original paired service/port and example labels',()=>{
 for(const[id,words]of Object.entries({dmzFirewallArchitecture:['HTTPS:443','Port 25','Port 53','External Firewall','Internal Firewall'],cloudSharedResponsibility:['AWS EC2','Azure VMs','App Engine','AWS Lambda'],nistSp80063Framework:['SP 800-63A','SP 800-63B','SP 800-63C']})){
  const mobile=diagrams[id].slice(diagrams[id].indexOf('<div class="reading-diag-mobile'));
  for(const word of words)assert.ok(mobile.includes(word),id+': '+word);
 }
});
