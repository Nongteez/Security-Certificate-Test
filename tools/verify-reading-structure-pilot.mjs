/** Semantic and complete-text contracts for the two approved Phase 3B.1 subsections. */
import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {parseMarkdown} from '../js/core/markdown-parser.js';
const source=fs.readFileSync(new URL('../content/isc2-cc-2026/reading/domain-4.md',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../css/reading.css',import.meta.url),'utf8');
const original=JSON.parse(fs.readFileSync(new URL('./fixtures/reading-structure-pilot-content.json',import.meta.url),'utf8'));
const a=source.indexOf('<h3 id="topic-4-1-fundamentals-topologies"'),b=source.indexOf('<h3 id="topic-4-1-osi-model"'),c=source.indexOf('<h3 id="topic-4-1-tcp-ip-mapping"');
// Include the pilot opening wrapper before its h3 when present.
const start=(pos)=>{const s=source.lastIndexOf('<section class="reading-structure-pilot',pos);return s>=0&&source.slice(s,pos).trim().split('\n').length===1?s:pos};
const network=source.slice(start(a),start(b)),osi=source.slice(start(b),c);
const networkHtml=parseMarkdown(network),osiHtml=parseMarkdown(osi);
const visible=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/\s+/g,' ').trim();
test('Network has three semantic concept-group headings',()=>{
 const headings=[...networkHtml.matchAll(/<h4\b[^>]*>(.*?)<\/h4>/gs)].map(m=>visible(m[1]));
 assert.equal(headings.length,3);assert.ok(headings[0].includes('Network Scope'));assert.ok(headings[1].includes('Collision & Broadcast Domains'));assert.ok(headings[2].includes('ขอบเขตการเข้าถึงทางสถาปัตยกรรม'));
});
test('Ten network terms have their own semantic definition headings',()=>{
 const headings=[...networkHtml.matchAll(/<h5\b[^>]*>(.*?)<\/h5>/gs)].map(m=>visible(m[1]));
 assert.equal(headings.length,10);for(const [i,name] of ['LAN','WAN','WLAN','PAN','VPN','Collision Domain','Broadcast Domain','Intranet','Extranet','Internet'].entries())assert.ok(headings[i].startsWith(name),name);
});
test('Network definitions have grouped explanations rather than an undifferentiated bullet stream',()=>{
 assert.equal((networkHtml.match(/class="reading-definition-unit"/g)||[]).length,10);assert.doesNotMatch(networkHtml,/<li>/);
 assert.match(networkHtml,/<h5[^>]*>LAN[^<]*<\/h5>\s*<p>/);
});
test('Seven OSI layer names are h4 headings in 7 through 1 order',()=>{
 const layers=[...osiHtml.matchAll(/<h4\b[^>]*>(Layer (\d)[\s\S]*?)<\/h4>/g)].map(m=>Number(m[2]));assert.deepEqual(layers,[7,6,5,4,3,2,1]);
});
test('OSI layer titles are no longer ordered-list items',()=>{
 assert.doesNotMatch(osiHtml,/<ol\b/);assert.doesNotMatch(osiHtml,/<li>\s*(?:<strong>)?Layer [1-7]/);assert.equal((osiHtml.match(/class="reading-layer-unit"/g)||[]).length,7);
});
test('Each OSI layer retains a separate supporting list and PDU explanation',()=>{
 const units=[...osiHtml.matchAll(/<section class="reading-layer-unit">([\s\S]*?)<\/section>/g)];assert.equal(units.length,7);
 for(const unit of units){assert.match(unit[1],/<ul>/);assert.match(unit[1],/PDU/)}
});
test('Complete Network educational text is preserved after Markdown restructuring',()=>{
 assert.equal(visible(networkHtml),visible(parseMarkdown(original.networkBefore)));
});
test('Complete OSI educational text is preserved after removing generated list ordinals',()=>{
 assert.equal(visible(osiHtml),visible(parseMarkdown(original.osiBefore)));
});
test('Mnemonic wording and Layer 1 to Layer 7 direction remain intact',()=>{
 assert.match(visible(osiHtml),/Please Do Not Throw Sausage Pizza Away \(Layer 1 → Layer 7\)/);
});
test('Corrected subnet and sockets explanations remain intact',()=>{
 for(const term of ['192.168.1.255','192.168.1.0/24','subnet mask','FF:FF:FF:FF:FF:FF'])assert.ok(networkHtml.includes(term),term);
 assert.match(osiHtml,/sockets เป็น API/);assert.match(osiHtml,/ไม่ใช่โพรโทคอลประจำ Session Layer/);
});
test('Existing topic and objective navigation anchors are retained',()=>{
 assert.equal((source.match(/<h3 id="topic-/g)||[]).length,24);
 for(const id of ['obj-4-1','topic-4-1-fundamentals-topologies','topic-4-1-osi-model','topic-4-1-tcp-ip-mapping','topic-4-1-ipv4-cidr-nat'])assert.equal((source.match(new RegExp(`id="${id}"`,'g'))||[]).length,1);
});
test('Pilot styles are explicitly scoped and do not hide list markers',()=>{
 const mark=css.indexOf('/* Phase 3B.1:');assert.ok(mark>=0);const added=css.slice(mark);
 assert.doesNotMatch(added,/:root|list-style\s*:\s*none|counter-reset/);
 for(const rule of added.matchAll(/([^{}]+)\{/g))for(const selector of rule[1].replace(/\/\*[\s\S]*?\*\//g,'').trim().split(','))assert.ok(selector.trim().startsWith('.reading-body .reading-structure-pilot'),selector);
});
test('Two pilot wrappers stop before the neighboring TCP/IP subsection',()=>{
 assert.equal((source.match(/class="reading-structure-pilot"/g)||[]).length,2);
 assert.ok(osi.trim().endsWith('</section>'));assert.ok(source.slice(c).startsWith('<h3 id="topic-4-1-tcp-ip-mapping"'));
});
