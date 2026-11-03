import {applyReadingClarifications} from './reading-fidelity-clarifications.mjs';
import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';import {parseInline,parseMarkdown}from '../js/core/markdown-parser.js';
const fixture=JSON.parse(fs.readFileSync(new URL('./fixtures/reading-cross-domain-fidelity.json',import.meta.url),'utf8'));
const arg=process.argv.find(x=>x.startsWith('--domain='));const domains=arg?[Number(arg.split('=')[1])]:[1,2,3,4];
const visible=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#36;/g,'$').replace(/\s+/g,' ').replace(/ > (?=ข้อสังเกตสำคัญสำหรับข้อสอบ \(Exam Core Distinction\):)/g,' ').trim();
const chunks=(s,d)=>{const re=d===1?/<div id="(topic-[^"]+)" class="reading-topic-anchor"><\/div>\s*\n### (.+)/g:/<h3 id="([^"]+)"[^>]*>(.*?)<\/h3>/g;const ms=[...s.matchAll(re)];return Object.fromEntries(ms.map((m,i)=>[m[1],s.slice(m.index,ms[i+1]?.index??s.length)]))};
for(const d of domains){
 const source=fs.readFileSync(new URL(`../content/isc2-cc-2026/reading/domain-${d}.md`,import.meta.url),'utf8'),byId=chunks(source,d),before=fixture.domains[d];
 test(`D${d}: every original anchor and complete rendered educational text retained`,()=>{assert.deepEqual([...source.matchAll(/id="([^"]+)"/g)].map(m=>m[1]),[...before.matchAll(/id="([^"]+)"/g)].map(m=>m[1]));assert.equal(visible(parseMarkdown(source)),visible(parseMarkdown(applyReadingClarifications(before))))});
 test(`D${d}: opt-in typography scope covers objective and review sections`,()=>{const sections=[...source.matchAll(/<section[^>]*class="([^"]*reading-objective-section[^"]*)"[^>]*>/g)];assert.ok(sections.length);assert.ok(sections.every(m=>m[1].includes('reading-structured-objective')))});
 for(const entry of fixture.sections.filter(e=>e.domain===d)){
 const s=byId[entry.id],html=parseMarkdown(s);
 test(`${entry.id}: complete subsection text, examples, formulas and values`,()=>assert.equal(visible(html),visible(parseMarkdown(applyReadingClarifications(entry.before)))));
 test(`${entry.id}: reviewed group labels and definition titles are semantic headings`,()=>{const heads=[...html.matchAll(/<h[45]\b[^>]*>([\s\S]*?)<\/h[45]>/g)].map(m=>visible(m[1]));for(const title of [...entry.promoteLabels,...entry.definitionTerms])assert.ok(heads.includes(visible(parseInline(title.replace(/\*\*/g,'')))),title)});
 test(`${entry.id}: heading levels do not skip a parent`,()=>{let previous=3;for(const h of html.matchAll(/<h([345])\b[^>]*>/g)){const level=Number(h[1]);assert.ok(level<=previous+1,`H${previous} to H${level}`);previous=level}});
 test(`${entry.id}: appropriate ordered-list semantics`,()=>{if(entry.orderedDisposition==='retain meaningful process')assert.match(html,/<ol\b/);else if(entry.orderedDisposition==='unordered parallel items')assert.doesNotMatch(html,/<ol\b/);else if(entry.orderedDisposition==='peer concept headings'){const titles=[...html.matchAll(/<li>\s*<strong>(.*?)<\/strong>/g)].map(m=>visible(m[1]));for(const title of entry.definitionTerms)assert.ok(!titles.includes(visible(parseInline(title))))}});
 }
}
test('Numeric superscripts render in inline prose without raw markup',()=>{assert.equal(parseInline('2<sup>32</sup>'),'2<sup>32</sup>');assert.equal(parseInline('2<sup>8</sup> = 256'),'2<sup>8</sup> = 256');assert.equal(parseInline('3.4 &times; 10<sup>38</sup>'),'3.4 &times; 10<sup>38</sup>')});
test('Superscript-looking code remains literal escaped code',()=>assert.equal(parseInline('`2<sup>32</sup>`'),'<code>2&lt;sup&gt;32&lt;/sup&gt;</code>'));
test('Attribute-bearing and nonnumeric superscripts remain escaped',()=>{for(const s of ['<sup onclick="alert(1)">32</sup>','<sup><img src=x onerror=alert(1)></sup>','<sup>hello</sup>'])assert.ok(parseInline(s).includes('&lt;sup'))});
test('Existing script and iframe escaping is preserved',()=>{for(const s of ['<script>alert(1)</script>','<iframe src=x></iframe>'])assert.ok(parseInline(s).includes('&lt;'))});
test('All five authored D4 exponent occurrences become native sup elements',()=>{const html=parseMarkdown(fs.readFileSync(new URL('../content/isc2-cc-2026/reading/domain-4.md',import.meta.url),'utf8'));assert.equal((html.match(/<sup>\d+<\/sup>/g)||[]).length,5);assert.doesNotMatch(html,/&lt;\/?sup&gt;/)});


test('Scoped B2 typography leaves the pilot block and global tokens intact',()=>{
 const css=fs.readFileSync(new URL('../css/reading.css',import.meta.url),'utf8'),start=css.indexOf('/* Phase 3B.2:'),end=css.indexOf('/* End Phase 3B.2 scoped typography. */',start);assert.ok(start>=0&&end>start);const block=css.slice(start,end);assert.doesNotMatch(block,/:root|list-style\s*:\s*none|counter-reset/);for(const rule of block.matchAll(/([^{}]+)\{/g))for(const selector of rule[1].replace(/\/\*[\s\S]*?\*\//g,'').trim().split(','))assert.ok(selector.trim().startsWith('.reading-body .reading-structured-objective'),selector);
 const before=fixture.domains['4'],now=fs.readFileSync(new URL('../content/isc2-cc-2026/reading/domain-4.md',import.meta.url),'utf8'),extract=x=>x.slice(x.indexOf('<section class="reading-structure-pilot">'),x.indexOf('<h3 id="topic-4-1-tcp-ip-mapping"'));assert.equal(extract(now),extract(before));
});


test('Remaining authored ordered lists belong only to the risk and SoD process examples',()=>{
 for(const d of [1,2,3,4]){const source=fs.readFileSync(new URL(`../content/isc2-cc-2026/reading/domain-${d}.md`,import.meta.url),'utf8');const byId=chunks(source,d);for(const [id,chunk]of Object.entries(byId))if(/^\s*\d+\. /m.test(chunk))assert.ok(['topic-1-2-risk-lifecycle','topic-3-2-sod'].includes(id),id)}
});
