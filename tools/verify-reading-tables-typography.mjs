import fs from 'node:fs';
import assert from 'node:assert/strict';
import {parseMarkdown} from '../js/core/markdown-parser.js';
const css=fs.readFileSync('css/reading.css','utf8');
const inventory=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3c/table-inventory.json','utf8'));
let checks=0;
function check(name,fn){fn();checks++;console.log('PASS',name);}
check('all 22 original table data structures retained',()=>{
 assert.equal(inventory.length,22);
 for(const t of inventory){
  const source=fs.readFileSync(`content/isc2-cc-2026/reading/domain-${t.domain}.md`,'utf8').split(/\r?\n/);
  const current=source.slice(t.line-1,t.line+1+t.rows.length).map(l=>l.trim().slice(1,-1).split('|').map(c=>c.trim()));
  assert.deepEqual(current[0],t.headers);assert.deepEqual(current.slice(2),t.rows);
 }
});
check('native headers and complete row/cell counts for every table',()=>{
 for(const t of inventory){
  const md=[t.headers,t.headers.map(()=> '---'),...t.rows].map(r=>'| '+r.join(' | ')+' |').join('\n');const html=parseMarkdown(md);
  assert.equal((html.match(/<th scope="col"/g)||[]).length,t.headers.length);
  assert.equal((html.match(/<td(?: |\>)/g)||[]).length,t.rows.length*t.headers.length);
  assert.equal((html.match(/<tr>/g)||[]).length,t.rows.length+1);
 }
});
check('scroll wrappers have keyboard entry and contextual accessible names',()=>{
 const html=parseMarkdown('| **Dashboard** | Actual & Target |\n| --- | --- |\n| Scorecard | เปรียบเทียบ |');
 assert.match(html,/<div[^>]*role="region"[^>]*tabindex="0"[^>]*aria-label="[^\"]*Dashboard[^\"]*Actual &amp; Target/);
 assert.doesNotMatch(html,/aria-label="[^\"]*<strong>/);
});
check('label cannot inject attributes or elements',()=>{
 const html=parseMarkdown('| A " autofocus="true | B |\n| --- | --- |\n| C | D |');
 assert.match(html,/aria-label="[^>]*&quot;/);assert.doesNotMatch(html,/<div[^>]* autofocus="true"/);
});
check('scoped table sizing uses natural word boundaries and content-driven layout',()=>{
 const block=css.split('/* Phase 3C:')[1]?.split('/* End Phase 3C')[0];assert.ok(block);
 assert.match(block,/\.reading-body \.reading-table[\s\S]*table-layout:\s*auto/);
 assert.match(block,/word-break:\s*normal/);assert.match(block,/overflow-wrap:\s*normal/);
 assert.match(block,/:focus-visible/);assert.doesNotMatch(block,/font-size:\s*(?:1[0-3]|[0-9])px/);
 assert.doesNotMatch(block,/(?:^|\n)(?:p|td|th|table|body)\s*\{/);
});
console.log(`${checks}/${checks} focused checks passed`);
