import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {parseMarkdown} from '../../../js/core/markdown-parser.js';
import {diagrams} from '../../../js/core/diagram-generator.js';
import {diagrams as originalDiagrams} from './before-diagram-generator.js';
const OUT=path.dirname(fileURLToPath(import.meta.url)),ROOT=path.resolve(OUT,'../../..');
const before=fs.readFileSync(path.join(OUT,'before-domain-5.md'),'utf8'),text=fs.readFileSync(path.join(ROOT,'content/isc2-cc-2026/reading/domain-5.md'),'utf8');
const html=parseMarkdown(text),oldHtml=parseMarkdown(before),checks=[];
function check(name,fn){try{fn();checks.push({name,passed:true});}catch(error){checks.push({name,passed:false,error:error.message.slice(0,600)});}}
const matches=(x,re)=>[...x.matchAll(re)].map(m=>m[1]);
function section(x,id){const p=x.indexOf('id="'+id+'"');assert.ok(p>=0);const start=x.lastIndexOf('<h3 ',p);let end=x.indexOf('<h3 ',p+id.length);const h2=x.indexOf('<h2',p);if(h2>=0&&(end<0||h2<end))end=h2;return x.slice(start,end<0?undefined:end);}
check('All explicit IDs and ordering unchanged',()=>assert.deepEqual(matches(text,/\bid="([^"]+)"/g),matches(before,/\bid="([^"]+)"/g)));
check('Four earlier academic target units byte-identical',()=>{for(const id of ['topic-5-1-hashing-digital-signatures','topic-5-1-tpm-vs-hsm','topic-5-1-data-sanitization-destruction','topic-5-3-irp-lifecycle-phases'])assert.equal(section(text,id),section(before,id));});
check('All 12 original scenario blocks, answers and reasoning unchanged',()=>{assert.deepEqual(text.match(/:::scenario\n[\s\S]*?\n:::/g),before.match(/:::scenario\n[\s\S]*?\n:::/g));assert.equal((html.match(/class="reading-scenario-card"/g)||[]).length,12);});
check('All existing diagram placements unchanged',()=>assert.deepEqual(matches(text,/data-diagram="([^"]+)"/g),matches(before,/data-diagram="([^"]+)"/g)));
check('All unrelated diagram templates unchanged',()=>{assert.deepEqual(Object.keys(diagrams),Object.keys(originalDiagrams));for(const key of Object.keys(diagrams))if(key!=='mitreAttackTacticTechnique')assert.equal(diagrams[key],originalDiagrams[key]);});
check('MITRE diagram geometry and markup identical; exactly three text-node changes',()=>{const a=originalDiagrams.mitreAttackTacticTechnique,b=diagrams.mitreAttackTacticTechnique;assert.equal(a.replace(/(<text\b[^>]*>)[\s\S]*?(<\/text>)/g,'$1$2'),b.replace(/(<text\b[^>]*>)[\s\S]*?(<\/text>)/g,'$1$2'));const first=matches(a,/<text\b[^>]*>([\s\S]*?)<\/text>/g),second=matches(b,/<text\b[^>]*>([\s\S]*?)<\/text>/g);assert.equal(first.length,second.length);assert.equal(first.filter((t,i)=>t!==second[i]).length,3);});
check('MITRE mobile fallback unchanged',()=>{const marker='<div class="reading-diag-mobile';assert.equal(diagrams.mitreAttackTacticTechnique.split(marker)[1],originalDiagrams.mitreAttackTacticTechnique.split(marker)[1]);});
check('Existing 14 Domain 5 tables and source wrapper normalization preserved',()=>{assert.equal((html.match(/<table\b/g)||[]).length,14);assert.equal((oldHtml.match(/<table\b/g)||[]).length,14);assert.equal((text.match(/<div class="reading-table-wrapper"/g)||[]).length,0);});
check('All original Domain 5 Markdown tables byte-identical',()=>assert.deepEqual(text.match(/^\|.*\|\s*$/gm),before.match(/^\|.*\|\s*$/gm)));
check('Task 157 CSS and parser match immutable entry hashes',()=>{const baseline=JSON.parse(fs.readFileSync(path.join(OUT,'entry-baseline.json'),'utf8'));for(const name of ['css/reading.css','js/core/markdown-parser.js']){const r=baseline.find(r=>r.path===name);assert.ok(r);assert.equal(createHash('sha256').update(fs.readFileSync(path.join(ROOT,name))).digest('hex'),r.sha256);}});
check('Target renders without leaked Markdown delimiters',()=>{const target=section(html,'topic-5-2-mitre-attack-framework').replace(/<[^>]*>/g,'');for(const marker of ['**','```',':::'])assert.ok(!target.includes(marker));});
check('Section/div wrapper counts unchanged',()=>{for(const tag of ['section','div'])for(const slash of ['','/'])assert.equal((text.match(new RegExp('<'+slash+tag+'(?:>|\\s)','g'))||[]).length,(before.match(new RegExp('<'+slash+tag+'(?:>|\\s)','g'))||[]).length);});
const report={status:checks.every(r=>r.passed)?'PASS':'FAIL',checksPassed:checks.filter(r=>r.passed).length,checksTotal:checks.length,checks};
fs.writeFileSync(path.join(OUT,'content-integrity.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(report.status!=='PASS')process.exitCode=1;
