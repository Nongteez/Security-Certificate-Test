import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';
import {diagrams} from '../js/core/diagram-generator.js';
const css=fs.readFileSync('css/reading.css','utf8'),h=diagrams.threatChain;
const baseline=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-visual-remediation/baseline-runtime.json','utf8'));
test('VIS-01 ordinary prose uses the article width with a bounded expanded rail',()=>{
 assert.match(css,/VIS-01[\s\S]*?\.reading-structured-objective > p:not\(\.reading-intro-label\)\s*\{\s*max-width: 100%/);
 assert.match(css,/\.reading-layout \.reading-article\s*\{\s*max-width: 76rem/);
 assert.match(css,/VIS-01[\s\S]*?--reading-narrative-measure: 100%;[\s\S]*?--reading-definition-measure: 100%/);
});
test('VIS-02 objective and subsection rhythm has a dedicated scoped correction',()=>{
 assert.match(css,/VIS-01[\s\S]*?\.reading-objective-section:first-of-type\s*\{[^}]*margin-top: 16px;[^}]*padding-top: 16px/s);
 assert.match(css,/VIS-01[\s\S]*?\.reading-structured-objective > h3\s*\{[^}]*margin: 28px 0 12px/s);
});
test('VIS-03/05 relationship map keeps controls separate and causal links explicit',()=>{
 for(const id of ['asset','vulnerability','threat-actor','impact','controls'])assert.match(h,new RegExp(`data-threat-concept="${id}"`));
 assert.match(h,/data-threat-group="vulnerable-asset"/);assert.match(h,/data-from="threat-actor" data-to="vulnerability"/);assert.match(h,/data-from="vulnerable-asset" data-to="impact"/);
 assert.ok(h.indexOf('data-threat-concept="controls"')<h.indexOf('class="reading-threat-map"'));
 assert.doesNotMatch(h,/diag-arrow-dash|C 685 140|reading-diag-mobile|reading-diag-desktop/);
});
test('VIS-04 qualification is concise and outside the diagram card',()=>{
 assert.match(h,/<\/div>\s*<p id="threatChain-note" class="reading-threat-caption">/);
 assert.match(h,/not five required steps/);assert.match(h,/not a final stage after impact/);assert.match(h,/Controls can reduce risk where relevant/);
 assert.doesNotMatch(h,/Illustrative causal relationships, not five procedural steps/);
});
test('VIS-06 normal HTML labels reflow with separate arrow tracks',()=>{
 assert.match(h,/class="reading-threat-edge-label"/);assert.doesNotMatch(h,/<text\b/);
 assert.match(css,/@container reading-diagram \(min-width: 880px\)/);
 assert.match(css,/grid-template-columns: minmax\(0, 1fr\) 96px minmax\(0, 1\.2fr\) 96px minmax\(0, 1fr\)/);
});
test('all five original bilingual definition paragraphs and subtitles are preserved',()=>{
 const old=baseline['js/core/diagram-generator.js'].split('threatChain: `')[1].split('`,')[0];
 const bodies=[...old.matchAll(/<(?:p|span) class="reading-mob-tier-(?:desc|action)">([\s\S]*?)<\/(?:p|span)>/g)];assert.equal(bodies.length,10);for(const m of bodies)assert.ok(h.includes(m[1]),m[1]);
});
test('all Markdown and other 23 diagram payloads are preserved',async()=>{
 const vm=await import('node:vm'),scope={};vm.runInNewContext(baseline['js/core/diagram-generator.js'].replace('export const diagrams =','globalThis.old ='),scope);
 assert.ok(Object.keys(diagrams).length >= Object.keys(scope.old).length);for(const id of Object.keys(scope.old))if(id!=='threatChain')assert.equal(diagrams[id],scope.old[id],id);
 for(const d of[1,2,3,4]){const name=`content/isc2-cc-2026/reading/domain-${d}.md`;assert.equal(fs.readFileSync(name,'utf8'),baseline[name],name)}
});
