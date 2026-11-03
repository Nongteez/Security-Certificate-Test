import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';import{diagrams}from'../js/core/diagram-generator.js';
import vm from 'node:vm';
import {applyReadingClarifications,applyDiagramClarifications} from './reading-fidelity-clarifications.mjs';
const css=fs.readFileSync('css/reading.css','utf8'),screen=fs.readFileSync('js/ui/screen-reading.js','utf8'),d1=fs.readFileSync('content/isc2-cc-2026/reading/domain-1.md','utf8');
test('Reading scroll control remains available in the outer gutter without narrowing content',()=>{
 assert.match(css,/Phase 3F/);assert.match(css,/\.reading-screen \.reading-scroll-nav\s*\{[^}]*right: 2px/s);
 assert.match(css,/@media \(max-width: 840px\)[\s\S]*?\.reading-screen \.reading-scroll-nav\s*\{[^}]*width: 24px;[^}]*height: 44px/s);
 assert.match(screen,/id="btn-reading-scroll-nav"/);assert.match(screen,/scrollNavBtn\.addEventListener\('click', handleClick\)/);
});
test('Reading language metadata is scoped and preserves existing content',()=>{
 assert.match(screen,/function applyReadingLanguageMetadata/);assert.match(screen,/setAttribute\('lang', 'th'\)/);assert.match(screen,/setAttribute\('lang', 'en'\)/);
});
test('ethics retains all four canons without unverified universal conflict claims',()=>{
 const a=d1.indexOf('id="topic-1-5-isc2-ethics"'),b=d1.indexOf('id="topic-1-5-distinctions-scenarios"',a),text=d1.slice(a,b),h=diagrams.ethicsCanons;
 for(const word of ['Protect society','Act honorably','Provide diligent','Advance and protect'])assert.ok(text.includes(word),word);
 assert.match(text,/Use professional ethical judgment/);assert.doesNotMatch(text,/Strict Order of Precedence|Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ/);
 assert.doesNotMatch(h,/supersedes|Supersedes|PRIORITY|STRICT ORDER/);assert.match(h,/Four mandatory canons/);
});
test('all source content and diagram payloads equal the Phase F baseline plus exact recorded clarifications',()=>{
 const base=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3f/baseline-runtime.json','utf8'));
 for(const d of[1,2,3,4]){
  const path=`content/isc2-cc-2026/reading/domain-${d}.md`,current=fs.readFileSync(path,'utf8');
  assert.equal(current,d===1?applyReadingClarifications(base['/'+path]):base['/'+path],path);
  assert.deepEqual([...current.matchAll(/id="([^"]+)"/g)].map(m=>m[1]),[...base['/'+path].matchAll(/id="([^"]+)"/g)].map(m=>m[1]));
 }
 const scope={};vm.runInNewContext(base['/js/core/diagram-generator.js'].replace('export const diagrams =','globalThis.beforeDiagrams ='),scope);
 assert.deepEqual(Object.keys(diagrams),Object.keys(scope.beforeDiagrams));
 for(const id of Object.keys(diagrams))assert.equal(diagrams[id],applyDiagramClarifications(scope.beforeDiagrams[id],id),id);
});
test('Reading language annotation leaves navigation and progress implementation byte-preserved',()=>{
 const base=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3f/baseline-runtime.json','utf8'));
 const current=screen.replace(/  function applyReadingLanguageMetadata\(\) \{[\s\S]*?\n  \}\n\n/,'').replace(/\n    applyReadingLanguageMetadata\(\);/,'');
 assert.equal(current,base['/js/ui/screen-reading.js']);
 const cleaned=css.replace(/\/\* VIS-01[\s\S]*?\/\* End VIS-01[^\n]*\*\/\n\n/,'').replace(/\/\* Phase 3F:[\s\S]*?\/\* End Phase 3F Reading accessibility\. \*\/\n\n/,'');
 assert.equal(cleaned,base['/css/reading.css']);
});
