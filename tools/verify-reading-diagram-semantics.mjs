import {applyDiagramClarifications} from './reading-fidelity-clarifications.mjs';
import fs from 'node:fs';import test from 'node:test';import assert from 'node:assert/strict';
import {diagrams} from '../js/core/diagram-generator.js';
const q='artifacts/qa/reading-notes-phase3d/';
const base=JSON.parse(fs.readFileSync(q+'baseline-diagrams.json','utf8'));
const modified=['controlTimeline','effectivenessHierarchy','bcVsDrScope','iamLifecycle','defenseInDepth','osiVsTcpIpModel','aaaLifecycle','dmzFirewallArchitecture','threatChain','privacyFlow','grcAlignment'];
test('registry and every unmodified diagram preserved',()=>{assert.deepEqual(Object.keys(diagrams),Object.keys(base));for(const id of Object.keys(base).filter(id=>!modified.includes(id)))assert.equal(["nistSp80063Framework","cloudSharedResponsibility"].includes(id)?diagrams[id].replace(/<p class="reading-diagram-source-labels">[\s\S]*?<\/p>/g,''):diagrams[id],applyDiagramClarifications(base[id],id),id)});
test('five control functions coexist without workflow arrows or temporal stages',()=>{const h=diagrams.controlTimeline;for(const name of ['Deterrent','Preventive','Detective','Corrective','Recovery'])assert.match(h,new RegExp(`data-concept="${name.toLowerCase()}"`));assert.match(h,/data-relationship="coexisting-functions"/);assert.doesNotMatch(h,/marker-end|diag-timeline-arrow|reading-mob-step-connector|>BEFORE<|>DURING<|>AFTER</);assert.match(h,/not a mandatory sequence/)});
test('measurement retains six concepts in meaningful groups without ordinals',()=>{const h=diagrams.effectivenessHierarchy;for(const key of ['metric','kpi','kri','dashboard','scorecard','report'])assert.match(h,new RegExp(`data-concept="${key}"`));assert.match(h,/data-group="measures"/);assert.match(h,/data-group="communication"/);assert.match(h,/local study aid/);assert.doesNotMatch(h,/diag-step-num|reading-mob-tier-num|>0[1-6]</);assert.doesNotMatch(h,/marker-end|6-Part Framework/)});
test('JML Mover is optional and repeatable with continuous governance',()=>{const h=diagrams.iamLifecycle;for(const stage of ['joiner','mover','leaver'])assert.match(h,new RegExp(`data-stage="${stage}"`));assert.match(h,/data-optional="true" data-repeatable="true"/);assert.match(h,/without a Mover/);assert.match(h,/Periodic Access Reviews/);assert.doesNotMatch(h,/reading-mob-arrow-down|>0[123]</)});
test('BC and DR are distinct coordinated scopes without universal subset notation',()=>{const h=diagrams.bcVsDrScope;assert.match(h,/data-relationship="supporting-scopes"/);assert.match(h,/DR supports business continuity/);assert.doesNotMatch(h,/DR ⊂ BC|IT SUBSET/);for(const key of ['People','Processes','Facilities','Suppliers','Technology','Virtual Machines','Hot Site','Warm Site','Cold Site','Network Recovery'])assert.ok(h.includes(key),key)});
test('DiD is an illustrative, complementary architecture without mandatory order',()=>{const h=diagrams.defenseInDepth;assert.match(h,/not a fixed number or chronological sequence/);assert.match(h,/ไม่รับประกัน/);for(const key of ['People','Perimeter','Network','Identity &amp; Access','Endpoint','Application &amp; Data','Resilience &amp; Response'])assert.ok(h.includes(key),key)});
test('OSI mapping preserves seven identifiers and distinguishes data flow',()=>{const h=diagrams.osiVsTcpIpModel;for(const[n,name]of[[7,'Application'],[6,'Presentation'],[5,'Session'],[4,'Transport'],[3,'Network'],[2,'Data Link'],[1,'Physical']])assert.ok(h.includes(`${n}. ${name}`));assert.match(h,/model correspondence, not packet flow/)});
test('Accounting is ongoing rather than the final mandatory step',()=>{const h=diagrams.aaaLifecycle;assert.match(h,/data-relationship="illustrative-access"/);assert.match(h,/data-concept="accounting" data-scope="ongoing"/);assert.match(h,/throughout the access example/);for(const word of ['Identification','Authentication','Authorization','Accounting','Non-repudiation','MFA'])assert.ok(h.includes(word))});
test('DMZ explicitly identifies zone boundaries and qualified isolation',()=>{const h=diagrams.dmzFirewallArchitecture;assert.match(h,/zone overview, not a universal packet route/);assert.match(h,/FW1/);assert.match(h,/FW2/);assert.match(h,/does not guarantee/);assert.doesNotMatch(h,/หากถูกเจาะระบบ ผู้โจมตีจะยังไม่สามารถเข้าถึงเครือข่ายภายในได้/)});
test('all original explanatory mobile paragraphs retained except documented corrections',()=>{
 const ledger=JSON.parse(fs.readFileSync(q+'content-ledger.json','utf8'));
 for(const row of ledger){
  if(row.diagram==='threatChain'){
   // VIS-03–06 intentionally replace the mobile wrapper; preserve each definition body.
   if(row.after.includes('reading-mob-banner-text')){
    for(const id of ['asset','vulnerability','threat-actor','impact','controls'])assert.ok(diagrams.threatChain.includes(`data-threat-concept="${id}"`));
    assert.match(diagrams.threatChain,/not five required steps/);
   }else assert.ok(diagrams.threatChain.includes(row.after.replace(/^<p[^>]*>/,'').replace(/<\/p>$/,'')),row.purpose);
  }else assert.ok(diagrams[row.diagram].includes(row.after),`${row.diagram}: ${row.purpose}`);
  if(row.before!==row.after)assert.ok(row.reason&&row.reference);
 }
});
test('condensed SVG examples remain available as selectable English terms',()=>{
 for(const word of ['Motion Sensor','Patching','Malware Removal','Warning Banners','Honeytokens','Alternate Site'])assert.ok(diagrams.controlTimeline.includes(word),word);
 for(const word of ['Username / User ID','Password, MFA, Bio','Permissions / Roles','Audit Logs / Tracing'])assert.ok(diagrams.aaaLifecycle.includes(word),word);
 for(const word of ['Relevant','Measurable','Consistent','ตรงประเด็น','วัดได้จริง','วัดซ้ำได้ผลสม่ำเสมอ'])assert.ok(diagrams.effectivenessHierarchy.includes(word),word);
});

test('threat/control entities are not a five-step response procedure',()=>{const h=diagrams.threatChain;assert.match(h,/data-relationship="causal-example-with-controls"/);assert.doesNotMatch(h,/ความสัมพันธ์ 5 ขั้นตอน/);assert.match(h,/not a final stage after impact/)});
test('GRC mobile pillars coexist without stage connectors',()=>{const h=diagrams.grcAlignment,m=h.slice(h.indexOf('<div class="reading-diag-mobile'));assert.match(h,/not mandatory stages/);assert.doesNotMatch(m,/reading-mob-arrow-down|reading-mob-num-badge/)});
test('privacy diagram shows scoped role relationships, not compulsory consent steps',()=>{const h=diagrams.privacyFlow;assert.match(h,/data-relationship="roles-and-instructions"/);assert.match(h,/Consent เมื่อใช้ฐานความยินยอม/);assert.match(h,/when a processor is used/);assert.doesNotMatch(h,/ให้ข้อมูลและความยินยอม \(Consent\)/)});
