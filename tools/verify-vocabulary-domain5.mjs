import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {loadVocabularyData,clearVocabularyCache} from '../js/core/vocabulary-loader.js';
import versions from '../data/exam-versions.js';
const path='content/isc2-cc-2026/vocabulary/domain-5.json';
assert.ok(fs.existsSync(path),'Reviewed Domain5 vocabulary JSON must exist');
const d=JSON.parse(fs.readFileSync(path,'utf8'));
const old=[1,2,3,4].flatMap(n=>JSON.parse(fs.readFileSync(`content/isc2-cc-2026/vocabulary/domain-${n}.json`,'utf8')).entries);
const fields=Object.keys(old.at(-1)).sort();
assert.equal(d.domain_id,5);assert.equal(d.total_entries,d.entries.length);
assert.deepEqual([...new Set(d.entries.map(e=>e.objective))].sort(),['5.1','5.2','5.3','5.4','5.5']);
function validate(e){
 assert.deepEqual(Object.keys(e).sort(),fields);assert.match(e.id,/^VOC-CC26-D5-\d{3}$/);assert.equal(e.domain,5);
 assert.ok(e.term.trim().length>2);
 for(const f of ['thai_meaning','definition_en','explanation_th','example_en','example_th','exam_relevance','exam_relevance_th'])assert.ok(typeof e[f]==='string'&&e[f].trim().length>10&&!e[f].includes('\uFFFD'),`${e.id} ${f}`);
 for(const f of ['thai_meaning','explanation_th','example_th','exam_relevance_th'])assert.match(e[f],/[\u0e00-\u0e7f]/);
 assert.ok(e.sources.length>0);assert.ok(Array.isArray(e.confused_with)&&Array.isArray(e.keywords));assert.ok(e.acronym===null||e.full_form);
}
d.entries.forEach(validate);
for(const f of ['exam_relevance_th','definition_en']){const broken=structuredClone(d.entries[0]);broken[f]='';assert.throws(()=>validate(broken));}
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
assert.equal(new Set([...old,...d.entries].map(e=>e.id)).size,old.length+d.entries.length);
assert.ok(d.entries.every(e=>!old.some(o=>norm(e.term)===norm(o.term))),'No exact term duplicates');
clearVocabularyCache();const all=await loadVocabularyData('all');assert.equal(all.entries.length,403+d.entries.length);assert.deepEqual((await loadVocabularyData(5)).entries,d.entries);
assert.equal(all.total_entries,all.entries.length);assert.equal((await loadVocabularyData('all')),all);
assert.equal(versions.find(v=>v.id==='isc2-cc-vocabulary').vocabularyCount,all.entries.length);
const review=JSON.parse(fs.readFileSync('artifacts/qa/domain5-vocabulary/entry-review.json','utf8'));
const canonical=value=>Array.isArray(value)?value.map(canonical):value&&typeof value==='object'?Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])])):value;
for(const e of d.entries){const r=review.find(r=>r.id===e.id);assert.ok(r&&r.status==='PASS_AUTHOR_QA'&&!r.hardFails.length);assert.equal(Object.keys(r.scores).length,10);assert.ok(Object.values(r.scores).every(n=>n>=4&&n<=5)&&r.total50>=45);assert.equal(r.itemHash,crypto.createHash('sha256').update(JSON.stringify(canonical(e))).digest('hex'),'Reviewed content changed: '+e.id);}
const baseline=JSON.parse(fs.readFileSync('artifacts/qa/domain5-vocabulary/baseline.json','utf8'));
const protectedFiles=Object.keys(baseline.files).filter(p=>/vocabulary\/domain-[1-4]\.json$/.test(p)||/versions\/(2026|next-bank)\/questions\/domain-\d\.js$/.test(p));
for(const p of protectedFiles)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),baseline.files[p],`Preserve ${p}`);
console.log(`PASS: ${d.entries.length} Domain5; ${all.entries.length} combined;5objectives;schema/bilingual/negative/loader/cache;${protectedFiles.length} existing-bank hashes.`);
