import fs from'node:fs';import{diagrams}from'../../../js/core/diagram-generator.js';
const q='artifacts/qa/reading-notes-phase3d/';const next={...diagrams};
function blocks(h,cls){const a=[];for(const m of h.matchAll(new RegExp(`<div class="${cls}(?: [^"]*)?"[^>]*>`,'g'))){let depth=0;for(const t of h.slice(m.index).matchAll(/<\/?div\b[^>]*>/g)){depth+=t[0].startsWith('</')?-1:1;if(!depth){a.push({start:m.index,end:m.index+t.index+t[0].length});break;}}}return a;}
const note=(h,text)=>h.replace(/(<\/div>\s*)$/,`<p class="reading-semantic-note">${text}</p>$1`);
let h=next.threatChain;
h=h.replace('data-diagram="threatChain"','data-diagram="threatChain" data-relationship="causal-example-with-controls"');
h=h.replace('Cybersecurity Threat &amp; Control Relationship Pipeline','Threats, Vulnerabilities, Impacts and Controls: A Causal Example');
h=h.replace('ความสัมพันธ์ 5 ขั้นตอน: ภัยคุกคามเจาะผ่านช่องโหว่สร้างผลกระทบต่อทรัพย์สิน โดยมีมาตรการควบคุมปิดกั้น','ความสัมพันธ์ของทรัพย์สิน ช่องโหว่ ผู้คุกคาม ผลกระทบ และมาตรการควบคุม');
const edges=blocks(h,'reading-mob-step-connector');if(edges.length!==4)throw Error('threat edge count');h=h.slice(0,edges[3].start)+h.slice(edges[3].end);
h=h.replace(/<span class="reading-mob-tier-num[^"]*">0[1-5]<\/span>/g,'');
next.threatChain=note(h,'Illustrative causal relationships, not five procedural steps. Controls reduce relevant risks; they are not a final stage after impact. / ตัวอย่างความสัมพันธ์เชิงเหตุและผล ไม่ใช่กระบวนการห้าขั้น มาตรการควบคุมช่วยลดความเสี่ยงได้หลายจุด ไม่ใช่ขั้นตอนสุดท้ายที่ต้องรอหลังเกิดความเสียหาย');
h=next.grcAlignment.replace('data-diagram="grcAlignment"','data-diagram="grcAlignment" data-relationship="coordinated-grc"');
for(const r of blocks(h,'reading-mob-arrow-down').reverse())h=h.slice(0,r.start)+h.slice(r.end);
h=h.replace(/<span class="reading-mob-num-badge[^"]*">0[123]<\/span>/g,'');
next.grcAlignment=note(h,'Governance, Risk Management and Compliance are coordinated functions supporting shared objectives, not mandatory stages. / Governance, Risk Management และ Compliance ทำงานประสานกันเพื่อเป้าหมายร่วม ไม่ใช่ขั้นตอนที่ต้องทำเรียงตามกัน');
h=next.privacyFlow.replace('data-diagram="privacyFlow"','data-diagram="privacyFlow" data-relationship="roles-and-instructions"');
h=h.replace('Data Privacy Roles &amp; Lifecycle Chain (GDPR / Regulatory)','Data Privacy Roles and Instructions — Example Delegation');
h=h.replace(/<span class="reading-mob-tier-num[^"]*">0[123]<\/span>/g,'');
h=h.replace('ให้ข้อมูลและความยินยอม (Consent)','ให้ข้อมูลตามบริบท; Consent เมื่อใช้ฐานความยินยอม');
next.privacyFlow=note(h,'Example role relationships when a processor is used, not compulsory processing stages. The consent label applies when consent is the relevant basis; it does not establish the legal basis for every processing context. / ตัวอย่างความสัมพันธ์ระหว่างบทบาทเมื่อมีการใช้ผู้ประมวลผล ไม่ใช่ขั้นตอนบังคับของการประมวลผลทุกกรณี ป้าย Consent ใช้เมื่ออาศัยฐานความยินยอม ไม่ได้กำหนดฐานกฎหมายแทนการพิจารณาบริบท');
let source=fs.readFileSync('js/core/diagram-generator.js','utf8');
for(const id of['threatChain','grcAlignment','privacyFlow']){if(!source.includes(diagrams[id]))throw Error('concurrent change '+id);source=source.replace(diagrams[id],next[id]);}
fs.writeFileSync('js/core/diagram-generator.js',source);
const ledger=JSON.parse(fs.readFileSync(q+'content-ledger.json','utf8'));
for(const id of['threatChain','grcAlignment','privacyFlow'])for(const p of diagrams[id].matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/g)){
 const replacement=id==='threatChain'&&p[0].includes('ความสัมพันธ์ 5 ขั้นตอน')?next[id].match(/<p class="reading-mob-banner-text">[\s\S]*?<\/p>/)[0]:p[0];
 ledger.push({diagram:id,purpose:'Retained explanation / qualified entity-relationship caption',before:p[0],after:replacement,reason:p[0]===replacement?'Retained verbatim':'Entities and controls are not mandatory procedural stages',reference:'Official outline 1.1 / existing threat-control definitions'});
}
fs.writeFileSync(q+'content-ledger.json',JSON.stringify(ledger,null,2));
const matrix=JSON.parse(fs.readFileSync(q+'diagram-matrix.json','utf8'));
for(const r of matrix){if(['threatChain','grcAlignment','privacyFlow'].includes(r.id)){r.changed=true;r.disposition='Corrected mobile sequencing / scope while retaining valid SVG relationships';}if(r.id==='privacyFlow'){r.relationship='Roles, data and instructions in an example delegation';r.concept='Subject, controller and processor relationships; consent is conditional rather than an obligatory processing step';}}
fs.writeFileSync(q+'diagram-matrix.json',JSON.stringify(matrix,null,2));
fs.writeFileSync(q+'final-diagrams.json',JSON.stringify(next,null,2));
console.log('Applied three additional bounded relationship corrections');
