import fs from 'node:fs';
const q='artifacts/qa/reading-notes-phase3d/';
const base=JSON.parse(fs.readFileSync(q+'baseline-diagrams.json','utf8')),next={...base},ledger=[];
const modified=['controlTimeline','effectivenessHierarchy','bcVsDrScope','iamLifecycle','defenseInDepth','osiVsTcpIpModel','aaaLifecycle','dmzFirewallArchitecture'];
const paragraphs=h=>[...h.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(m=>m[0]);
const mobile=h=>h.slice(h.indexOf('<div class="reading-diag-mobile'));
const content=(h,cls)=>h.match(new RegExp(`<[^>]+class="${cls}"[^>]*>([\\s\\S]*?)<\\/[^>]+>`))?.[1]||'';
function blocks(h,cls){const out=[];const re=new RegExp(`<div class="${cls}(?: [^"]*)?"[^>]*>`,'g');for(const m of h.matchAll(re)){let depth=0;for(const t of h.slice(m.index).matchAll(/<\/?div\b[^>]*>/g)){depth+=t[0].startsWith('</')?-1:1;if(!depth){out.push(h.slice(m.index,m.index+t.index+t[0].length));break;}}}return out;}
const frame=(id,title,relation,note,body)=>`<div class="reading-diagram-card reading-semantic-diagram" data-diagram="${id}" data-relationship="${relation}" role="region" aria-label="${title}"><div class="reading-diagram-header"><span class="reading-diagram-tag">Concept relationship / ความสัมพันธ์ของแนวคิด</span><h4 class="reading-diagram-title">${title}</h4></div><p class="reading-semantic-note">${note}</p>${body}</div>`;
const card=(title,body,attrs='',level=5)=>`<section class="reading-semantic-concept" ${attrs}><h${level}>${title}</h${level}>${body}</section>`;
const group=body=>`<div class="reading-semantic-grid">${body}</div>`;
const texts=h=>[...h.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m=>m[1]);
const bullets=h=>texts(h).filter(s=>s.startsWith('&bull;')).map(s=>s.replace(/^&bull;\s*/,''));
const list=a=>`<ul>${a.map(s=>`<li>${s}</li>`).join('')}</ul>`;
function note(id,n){next[id]=next[id].replace(/(<\/div>\s*)$/,`<p class="reading-semantic-note">${n}</p>$1`);}

// Five independent functions: retain every example and all explanatory prose.
{
 const h=mobile(base.controlTimeline),names=['deterrent','preventive','detective','corrective','recovery'];
 const items=blocks(h,'reading-mob-sub-item');
 const cards=items.map((item,i)=>card(content(item,'reading-mob-sub-name'),`<p>${content(item,'reading-mob-sub-desc')}</p>`,`data-concept="${names[i]}"`));
 const prose=paragraphs(h); // Includes timing qualifications, all contexts and CCTV overlap.
 next.controlTimeline=frame('controlTimeline','Security Control Function Matrix','coexisting-functions','Complementary functions, not a mandatory sequence. Controls may coexist and one control may serve several functions; an incident need not pass through every function. / หน้าที่เหล่านี้ทำงานร่วมกันได้ ไม่ใช่ลำดับขั้นบังคับ และไม่ใช่ทุกเหตุการณ์ต้องผ่านครบทุกหน้าที่',group(cards.join(''))+`<div class="reading-semantic-context">${prose.join('')}</div>`);
}
// BC/DR: two coordinated scopes rather than a universal mathematical subset.
{
 const h=mobile(base.bcVsDrScope);
 const goals=paragraphs(h),scope=[...h.matchAll(/<span class="reading-mob-tag-item">([\s\S]*?)<\/span>/g)].map(m=>m[1]);
 const examples=h.match(/<ul class="reading-mob-examples-list">[\s\S]*?<\/ul>/)[0];
 next.bcVsDrScope=frame('bcVsDrScope','Business Continuity and Disaster Recovery: Coordinated Scopes','supporting-scopes','DR supports business continuity through IT, service and data recovery; BC and DR have distinct, coordinated planning scopes. This comparison is not a universal subset theorem. / DR สนับสนุนความต่อเนื่องทางธุรกิจด้วยการกู้คืนเทคโนโลยี บริการ และข้อมูล ทั้งสองมีขอบเขตการวางแผนต่างกันและประสานกัน ไม่ได้อ้างความเป็นสับเซตแบบตายตัว',group(card('BUSINESS CONTINUITY (BC)',`<p>ร่มใหญ่ครอบคลุมทั้งองค์กร (Comprehensive Scope)</p>${goals[0]}${list(scope)}`,'data-concept="bc"')+card('DISASTER RECOVERY (DR)',`<p>การกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล</p>${goals[1]}<p>ตัวอย่างการปฏิบัติ (Practical Examples):</p>${examples}<p>Data &amp; System Restoration · Cloud / On-Premise · Alternate Sites</p>`,'data-concept="dr"')));
}
// Six mnemonic associations grouped by purpose. Metric includes selected KPIs/KRIs.
{
 const cards=blocks(mobile(base.effectivenessHierarchy),'reading-mob-tier-card');const by={};
 for(const c of cards){const title=content(c,'reading-mob-tier-name'),key=title.toLowerCase();by[key]=card(title,`<p class="reading-semantic-action">${content(c,'reading-mob-tier-action')}</p>${paragraphs(c).join('')}${['kpi','kri'].includes(key)?'<p>'+texts(base.effectivenessHierarchy).filter(t=>t.startsWith('ตอบคำถาม:'))[key==='kpi'?0:1]+'</p>':''}${key==='report'?'<p>Audience example / ตัวอย่างผู้รับสาร: Executive</p>':''}`,`data-concept="${key}"`,6);}
 const measures=`<section class="reading-semantic-group" data-group="measures"><h5>Measurement and indicators / การวัดและตัวชี้วัด</h5><p>KPI and KRI are purpose-selected measures, not compulsory successive steps. / KPI และ KRI เป็นการวัดที่เลือกใช้ตามวัตถุประสงค์ ไม่ใช่ขั้นตอนที่ต้องทำต่อกัน</p>${by.metric}${group(by.kpi+by.kri)}</section>`;
 const formats=`<section class="reading-semantic-group" data-group="communication"><h5>Presentation and communication / การนำเสนอและสื่อสาร</h5><p>Formats can present relevant measures for different audiences; they are not successive maturity levels. / เลือกรูปแบบสื่อสารตามข้อมูลและผู้รับสาร ไม่ใช่ลำดับวุฒิภาวะที่ต้องผ่านทีละระดับ</p>${group(by.dashboard+by.scorecard+by.report)}</section>`;
 next.effectivenessHierarchy=frame('effectivenessHierarchy','Measurement and Communication — Local Study Aid','grouped-measures-and-formats','A local study aid, not an official ISC2 six-step procedure. / เครื่องช่วยจำในบทเรียนนี้ ไม่ใช่กระบวนการหกขั้นตอนอย่างเป็นทางการของ ISC2',measures+formats);
}
// Conditional JML events: all three distinctions and continuous governance retained.
{
 const h=mobile(base.iamLifecycle),cards=blocks(h,'reading-mob-tier-card'),english=bullets(base.iamLifecycle);
 const names=['joiner','mover','leaver'];
 const body=cards.map((c,i)=>card(content(c,'reading-mob-tier-name'),`<p>${content(c,'reading-mob-tier-action')}</p>${paragraphs(c).join('')}${list(english.slice(i*3,i*3+3))}`,`data-stage="${names[i]}"${i===1?' data-optional="true" data-repeatable="true"':''}`));
 next.iamLifecycle=frame('iamLifecycle','Joiner, Mover, Leaver — Conditional Identity Lifecycle','conditional-lifecycle','An identity can go from Joiner to Leaver without a Mover event. Role changes may happen repeatedly while access remains active. / ผู้ใช้อาจเข้าใหม่แล้วพ้นสภาพโดยไม่มีการย้ายบทบาท ส่วนการเปลี่ยนบทบาทอาจเกิดซ้ำได้ระหว่างที่ยังมีสิทธิ์ใช้งาน',group(body.join(''))+`<section class="reading-semantic-governance"><h5>Continuous Governance / การกำกับดูแลต่อเนื่อง</h5>${paragraphs(h).at(-1)}</section>`);
}
// AAA: access example plus ongoing Accounting, not a mandatory fourth stage.
{
 const cards=blocks(mobile(base.aaaLifecycle),'reading-mob-tier-card'),keys=['identification','authentication','authorization','accounting'];
 const body=cards.map((c,i)=>card(content(c,'reading-mob-tier-name'),`<p>${content(c,'reading-mob-tier-action')}</p>${paragraphs(c).join('')}`,`data-concept="${keys[i]}"${i===3?' data-scope="ongoing"':''}`));
 next.aaaLifecycle=frame('aaaLifecycle','AAA Framework and an Illustrative Access Example','illustrative-access','Identification, Authentication and Authorization describe claim, proof and permitted actions in this access example. Accounting records relevant events throughout the access example, including authentication attempts; it does not wait until all access has finished. / ตัวอย่างนี้แยกการอ้างตัวตน การพิสูจน์ และการกำหนดสิทธิ์ ส่วน Accounting บันทึกเหตุการณ์ที่เกี่ยวข้องตลอดตัวอย่าง รวมถึงความพยายามพิสูจน์ตัวตน ไม่ได้รอจนการเข้าถึงทั้งหมดจบลง',group(body.slice(0,3).join(''))+body[3]);
}
note('defenseInDepth','These seven layers are examples of complementary defenses, not a fixed number or chronological sequence. No layer guarantees protection. / ทั้งเจ็ดเป็นตัวอย่างมาตรการหลายชั้นที่เสริมกัน ไม่ใช่จำนวนชั้นสากลหรือลำดับเวลา และไม่รับประกันการป้องกันได้ทุกกรณี');
next.defenseInDepth=next.defenseInDepth.replace('Defense in Depth 7-Layer Architecture Diagram','Defense in Depth: example complementary layers, not chronological steps');
note('osiVsTcpIpModel','Lines show model correspondence, not packet flow or an encapsulation sequence. Layer numbers identify architectural functions, not mandatory operational steps. / เส้นแสดงการเทียบแบบจำลอง ไม่ใช่เส้นทางแพ็กเก็ตหรือลำดับ encapsulation หมายเลขชั้นระบุหน้าที่ทางสถาปัตยกรรม ไม่ใช่ขั้นตอนการทำงานที่ต้องผ่านตามลำดับนี้');
note('dmzFirewallArchitecture','Illustrative zone overview, not a universal packet route. FW1 mediates outside/DMZ connections; FW2 controls separately permitted connections to the internal network. Public requests may terminate in the DMZ. Isolation limits paths but does not guarantee that compromise cannot spread. / ตัวอย่างภาพรวมเขตและขอบเขตไฟร์วอลล์ ไม่ใช่เส้นทางบังคับของทุกแพ็กเก็ต คำขอบริการอาจสิ้นสุดใน DMZ ส่วนการเชื่อมต่อภายในต้องได้รับอนุญาตแยกตามนโยบาย การแบ่งเขตจำกัดเส้นทางแต่ไม่รับประกันว่าจะหยุดการลุกลามได้ทุกกรณี');
next.dmzFirewallArchitecture=next.dmzFirewallArchitecture.replace('Demilitarized Zone (DMZ) Dual-Firewall Perimeter Architecture','Demilitarized Zone (DMZ): Illustrative Zones and Firewall Boundaries');
const corrections=[
 ['หากถูกเจาะระบบ ผู้โจมตีจะยังไม่สามารถเข้าถึงเครือข่ายภายในได้','การแบ่งเขตช่วยจำกัดเส้นทางจาก DMZ ไปยังเครือข่ายภายใน โดยขึ้นกับนโยบาย การตั้งค่า และการควบคุมที่เกี่ยวข้อง'],
 ['เครือข่ายภายในที่มีความปลอดภัยสูงสุด','เครือข่ายภายในสำหรับทรัพย์สินสำคัญ']
];
for(const[a,b]of corrections)next.dmzFirewallArchitecture=next.dmzFirewallArchitecture.replace(a,b);

// Keep all existing explanatory paragraphs. Explicitly inventory two bounded
// DMZ qualifications instead of silently changing a guarantee/trust statement.
for(const id of modified){
 const h=base[id],p=paragraphs(h);
 for(const raw of p){let after=raw;if(id==='aaaLifecycle'&&raw.includes('วงจร 4 ขั้นตอน')){ledger.push({diagram:id,purpose:'Replace mandatory fourth-stage caption with ongoing accounting',before:raw,after:next[id].match(/<p class="reading-semantic-note">([\s\S]*?)<\/p>/)[1],reason:'Accounting is ongoing, not deferred until after authorized access',reference:'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf#page=47'});continue;}for(const[a,b]of corrections)if(id==='dmzFirewallArchitecture')after=after.replace(a,b);
  ledger.push({diagram:id,purpose:'Original explanatory paragraph',before:raw,after,reason:raw===after?'Retained verbatim':'Zone trust and isolation are conditional, not guarantees',reference:raw===after?'Current verified course material':'https://csrc.nist.gov/glossary/term/demilitarized_zone'});
 }
}
fs.writeFileSync(q+'content-ledger.json',JSON.stringify(ledger,null,2));
fs.writeFileSync(q+'proposed-diagrams.json',JSON.stringify(next,null,2));
const review=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3a/diagram-review.json','utf8'));
const classifications=['Causal example','Interacting goals','Data distribution','Illustrative access / ongoing Accounting','Illustrative data lifecycle','Example layered architecture','Arithmetic dependency','Cycle','Authority hierarchy','Coexisting functions','Illustrative check/act/recheck cycle','Normative canon identifiers','Coordinated functions','Supporting scopes','Temporal objectives','Grouped measures / formats','Conditional lifecycle','Interrelated identity facets','Comparison','Comparison','Reference-model correspondence','Zone/boundary overview','Example layered architecture','Responsibility comparison'];
const inventory=[];
for(let d=1;d<=4;d++){const s=fs.readFileSync(`content/isc2-cc-2026/reading/domain-${d}.md`,'utf8');let anchor='';for(const[lineIndex,line]of s.split(/\r?\n/).entries()){const a=line.match(/id="(topic-[^"]+)"/);if(a)anchor=a[1];const m=line.match(/data-diagram="([^"]+)"/);if(m){const i=review.findIndex(r=>r.name===m[1]);inventory.push({domain:d,anchor,line:lineIndex+1,id:m[1],concept:review[i].purposeAndRelationshipReview,relationship:classifications[i],changed:modified.includes(m[1]),disposition:modified.includes(m[1])?'Semantic correction / qualification':'Retained after current source review',previousAudit:review[i].purposeAndRelationshipReview});}}}
if(inventory.length!==24)throw Error('inventory count '+inventory.length);
fs.writeFileSync(q+'diagram-matrix.json',JSON.stringify(inventory,null,2));
console.log('Prepared',inventory.length,'diagrams,',modified.length,'changes,',ledger.length,'retained/qualified paragraphs');
