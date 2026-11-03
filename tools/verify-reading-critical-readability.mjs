/** Focused Phase 3A.2 content/serialization contracts; real paint/DOM is checked in Chrome QA. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseMarkdown,parseInline} from '../js/core/markdown-parser.js';
import {renderInlineMath,renderBlockMath} from '../js/core/math-renderer.js';
import {diagrams} from '../js/core/diagram-generator.js';
const source=fs.readFileSync(new URL('../content/isc2-cc-2026/reading/domain-1.md',import.meta.url),'utf8');
// A text-only assertion helper, not a DOM/layout simulator. Native entity decoding is checked in Chrome.
const text=html=>html.replace(/<[^>]+>/g,'').replace(/&#(?:0*36|x0*24);|&dollar;/gi,'$').replace(/&times;/g,'×');
const contexts=[
 ['AV definition','มูลค่ารวมของทรัพย์สินที่กำลังพิจารณา',['$10,000']],
 ['SLE variable','<div class="reading-formula-var"><strong>AV</strong>',['$10,000']],
 ['ALE variable','<div class="reading-formula-var"><strong>SLE</strong>',['$5,000']],
 ['cost-benefit paragraph','<p><strong>การเปรียบเทียบด้านการเงินแบบง่าย:',['$10,000','$25,000']]
];
for(const [name,marker,values] of contexts)test(`${name}: visible currency retained without escapes or accidental math`,()=>{
 const line=source.split('\n').find(s=>s.includes(marker));assert.ok(line,marker);
 const rendered=parseMarkdown(line),visible=text(rendered);
 assert.doesNotMatch(visible,/\\\$/);
 for(const value of values)assert.ok(visible.includes(value),`Missing ${value}`);
 assert.doesNotMatch(rendered,/role="math"|class="katex/,'Currency must not become a math-delimited span');
});
test('Due Care note preserves its exact qualification with semantic emphasis',()=>{
 const line=source.split('\n').find(s=>s.includes('class="reading-table-note"'));
 const rendered=parseMarkdown(line);assert.ok(rendered.includes('<em>'));
 assert.doesNotMatch(text(rendered),/\*/);
 assert.match(text(rendered),/Illustrative Verb Clusters/);assert.match(text(rendered),/ไม่ใช่คู่คำที่มีความสัมพันธ์เทียบเท่ากันแบบ 1 ต่อ 1/);
});
test('Ordinary Markdown emphasis still parses',()=>{
 assert.equal(parseInline('*explanation*'),'<em>explanation</em>');
 assert.equal(parseInline('**term**'),'<strong>term</strong>');
});
test('An intentional asterisk in inline code remains literal',()=>{
 assert.equal(parseInline('`*literal*`'),'<code>*literal*</code>');
});
test('Inline SLE expression retains multiplication and escaped math currency',()=>{
 const rendered=renderInlineMath(String.raw`SLE = \$10,000 \times 0.50 = \$5,000`);
 assert.match(rendered,/role="math"/);assert.match(text(rendered),/SLE = \$10,000 × 0.50 = \$5,000/);
});
test('Display ALE expression remains display math',()=>{
 const rendered=renderBlockMath(String.raw`ALE = SLE \times ARO`);
 assert.match(rendered,/reading-math-display/);assert.match(text(rendered),/ALE = SLE × ARO/);
});
test('The source retains all eight valid escaped-dollar tokens in actual math',()=>{
 const remaining=source.match(/\\\$/g)||[];assert.equal(remaining.length,8);
 assert.match(source,/SLE = \\\$10,000 \\times 0\.50 = \\\$5,000/);
});
test('Representative risk values and economic counterexample remain correct',()=>{
 assert.equal(10000*.5,5000);assert.equal(5000*2,10000);assert.equal(5000*.2,1000);
 assert.equal(100000*.4,40000);assert.equal(40000*.5,20000);assert.equal(10000-9000-5000,-4000);
 assert.match(source,/−4,000\/ปี/);assert.match(source,/50% หรือ 0\.50/);
});
test('The three DMZ service rectangles have explicit paint',()=>{
 const rects=[...diagrams.dmzFirewallArchitecture.matchAll(/<rect\b[^>]*\bx="311"[^>]*\by="(?:98|136|174)"[^>]*>/g)];
 assert.equal(rects.length,3);for(const [rect] of rects)assert.match(rect,/\bfill="(?!none)[^"]+"/);
});
test('DMZ roles, zones and all three service/port examples remain',()=>{
 for(const label of ['Internet / Outside','External','Firewall','Demilitarized Zone (DMZ)','Web Server / WAF','Mail Gateway (SMTP)','Public DNS / Proxy','HTTPS:443','Port 25','Port 53','Internal Network','Database Servers','Strict ACLs'])assert.ok(diagrams.dmzFirewallArchitecture.includes(label),label);
 assert.match(diagrams.dmzFirewallArchitecture,/viewBox="0 0 840 280"/);
});
