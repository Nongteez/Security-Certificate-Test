import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {test} from 'node:test';
import {validateLesson,validateCatalog} from '../js/core/learning-schema.js';
const root='content/isc2-cc-2026/learning/published/',ids=['lesson-d3-01-roles-provisioning','lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools'];
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),catalog=read(root+'catalog.json'),lessons=ids.map(id=>read(root+'lessons/'+id+'.json'));
const baseline=read('artifacts/qa/domain-3-lesson-3/entry-baseline.json');
test('3.1 gate: three available lessons in approved order; 3.2 unchanged and unavailable',()=>{
 assert.ok(validateCatalog(catalog).valid);const d=catalog.domains.find(d=>d.id===3);assert.deepEqual(d.objectives[0].lessons.map(l=>l.id),ids);assert.deepEqual(d.objectives[1],read('artifacts/qa/domain-3-lesson-3/entry-shared/'+root+'catalog.json').domains.find(d=>d.id===3).objectives[1]);
 for(const l of lessons){assert.ok(validateLesson(l).valid);assert.deepEqual(l.objectiveIds,['3.1']);assert.equal(l.status,'published')}
 assert.deepEqual(lessons.map(l=>l.slides.length),[7,8,6]);assert.equal(new Set(lessons.flatMap(l=>l.slides.map(s=>s.id))).size,21);
});
test('3.1 gate: original L1/L2 content, local presentation modules and CSS are byte-identical',()=>{
 for(const [name,hash] of Object.entries(baseline.hashes))if(/(?:lesson-d3-0[12]-|iam-(?:roles-provisioning|review-deprovisioning))/.test(name)&&!name.endsWith('task.md'))assert.equal(createHash('sha256').update(fs.readFileSync(name)).digest('hex'),hash,name);
});
test('3.1 gate: source activity lists remain substantive paired explanations',()=>{
 const expected=[[0,3,6],[1,0,6],[1,4,8],[2,1,10]];for(const [li,si,count] of expected){const s=lessons[li].slides[si];assert.equal(s.blocks[1].rows.length,count);for(const r of s.blocks[1].rows)for(const p of r)assert.ok(p.en.trim()&&p.th.trim());assert.ok(s.blocks[2].text.en.length>400&&s.blocks[2].text.th.length>400)}
});
test('3.1 gate: workload provisioning/review/retirement retain official application provenance',()=>{
 for(const [li,si] of [[0,5],[1,6]]){const l=lessons[li],s=l.slides[si];assert.ok(s.referenceIds.some(id=>/ai/.test(id)));assert.ok(s.referenceIds.includes('service-account-governance'));assert.match(s.blocks[2].text.en,/owner|accountable/);assert.match(s.blocks[2].text.th,/รับผิดชอบ/)}
});
test('3.1 gate: each final scenario has four bilingual reasons and distinct subject matter',()=>{
 const scenarios=lessons.map(l=>l.slides.at(-1));for(const s of scenarios){assert.equal(s.blocks[1].rows.length,4);for(const r of s.blocks[1].rows)assert.ok(r[2].en.length>45&&r[2].th.length>45)}assert.equal(new Set(scenarios.map(s=>s.blocks[2].text.en)).size,3);
});
