import {pair,makeScene,makeDecision} from './domain2-lesson-shell.js';
export const LESSON_ID='lesson-d2-04-disaster-recovery-drp';
const specs=[['slide-01-dr-definition-purposes-drp','dr-service-restoration',4],['slide-02-dr-importance-and-compliance-bounds','dr-business-impact',5],['slide-03-rto-and-rpo-timeline','rto-rpo-directional-timeline',4],['slide-04-worked-recovery-target-examples','target-and-observed-data',4],['slide-05-backup-and-restoration-strategies','backup-restoration-path',4],['slide-06-dr-sites-hot-warm-cold','recovery-site-preparation',4],['slide-07-drp-testing-and-coordination','exercise-measure-correct',4],['slide-08-bc-vs-dr-seven-dimensions','parallel-bc-dr-response',7],['slide-09-disaster-recovery-scenario','disaster-recovery-decision-scenario',4]];
const map=new Map(specs.map(([id,kind,rows])=>[id,{kind,rows}]));
export function hasDisasterRecoveryDrpPresentation({lesson,slide}={}) {const a=map.get(slide?.id),b=slide?.blocks;return lesson?.id===LESSON_ID&&!!a&&b?.length===5&&b.map(x=>x.kind).join(',')==='text,table,text,list,text'&&b[1].columns?.length===3&&b[1].rows?.length===a.rows&&b[1].rows.every(r=>r.length===3);}
export function renderDisasterRecoveryDrpPresentation(host,context) {
 const scene=makeScene(host,context,map.get(context.slide.id).kind,'data-dr-drp-composition'),{main,el,put,arrow,foot}=scene;
 const add=(parent,tag,cls,en,th)=>{const n=put(tag,cls,pair(en,th));parent.append(n);return n;};
 const step=(title,copy)=>{const n=el('section','d2d-step');n.append(put('h4','d2s-term',title),put('p','d2s-copy',copy));return n;};
 const flow=items=>{const n=el('div','d2d-flow');items.forEach((item,i)=>{if(i)n.append(arrow());n.append(step(...item));});main.append(n);};
 const index=specs.findIndex(x=>x[0]===context.slide.id);
 if(index===0){
  flow([[pair('IT disruption','IT หยุดชะงัก'),pair('Order system unavailable','ระบบคำสั่งซื้อใช้ไม่ได้')],[pair('Activate the DRP','เริ่มใช้ DRP'),pair('Named owners + approved procedures','ผู้รับผิดชอบ + ขั้นตอนที่อนุมัติ')],[pair('Validated service','บริการผ่านการตรวจ'),pair('Data, dependencies and transactions work','ข้อมูล Dependency และธุรกรรมใช้ได้')]]);
  foot(pair('DR restores the technology that supports business continuity.','DR กู้เทคโนโลยีที่สนับสนุนความต่อเนื่องของธุรกิจ'));
 }else if(index===1){
  const n=el('div','d2d-impact');add(n,'h4','d2s-term','Order service unavailable','บริการคำสั่งซื้อใช้ไม่ได้');const effects=el('div','d2d-effects');
  for(const [a,b]of [[pair('Operations','การดำเนินงาน'),pair('Staff cannot complete customer orders','ทีมดำเนินคำสั่งซื้อลูกค้าไม่ได้')],[pair('Data and money','ข้อมูลและการเงิน'),pair('Lost records, revenue and productivity','ข้อมูล รายได้ และประสิทธิภาพสูญเสีย')],[pair('Trust and obligations','ความเชื่อมั่นและข้อกำหนด'),pair('Customers need reliable, accountable recovery','ลูกค้าต้องการการกู้คืนที่เชื่อถือได้และรับผิดชอบ')]])effects.append(step(a,b));n.append(effects);main.append(n);
  foot(pair('Recovery reduces impact; applicable legal or contractual duties depend on context.','การกู้คืนช่วยลดผลกระทบ ข้อกำหนดกฎหมายหรือสัญญาที่ใช้ขึ้นกับบริบท'));
 }else if(index===2||index===3){
  const timeline=el('div','d2d-timeline');timeline.setAttribute('data-drp-timeline','');const labels=el('div','d2d-time-labels');
  for(const [a,b]of [[pair('16:30','16:30'),pair('Earliest acceptable data','จุดข้อมูลเก่าสุดที่ยอมรับได้')],[pair('17:00','17:00'),pair('Outage','เกิดเหตุ')],[pair('18:00','18:00'),pair('Target service deadline','เส้นตายบริการตามเป้าหมาย')]])labels.append(step(a,b));
  const windows=el('div','d2d-time-windows');add(windows,'div','d2d-rpo','← RPO · 30 min','← RPO · 30 นาที');add(windows,'div','d2d-rto','RTO · 1 hour →','RTO · 1 ชั่วโมง →');timeline.append(labels,windows);main.append(timeline);
  if(index===2)foot(pair('Example targets. Measure the actual usable data point and restoration time separately.','ตัวอย่างเป้าหมาย ต้องวัดจุดข้อมูลที่ใช้ได้และเวลากู้คืนจริงแยกกัน'));
  else {const observed=el('div','d2d-observed');add(observed,'h4','d2s-term','Observed data loss in two separate crashes','ข้อมูลสูญหายจริงในเหตุล่มสองเหตุแยกกัน');add(observed,'p','d2s-copy','16:00 backup → 16:30 crash = 30 min lost','Backup 16:00 → ล่ม 16:30 = เสียข้อมูล 30 นาที');add(observed,'p','d2s-copy','17:00 backup → 17:20 crash = 20 min lost','Backup 17:00 → ล่ม 17:20 = เสียข้อมูล 20 นาที');main.append(observed);foot(pair('No restoration time is given for those crashes; observed RTO cannot be evaluated.','สองเหตุนี้ไม่ได้ให้เวลากู้บริการ จึงยังประเมินผล RTO จริงไม่ได้'));}
 }else if(index===4){
  flow([[pair('Protected copy','สำเนาที่ปกป้องไว้'),pair('Off-site / cloud with separated access','นอกสถานที่ / Cloud พร้อมแยกสิทธิ์')],[pair('Restore','กู้คืน'),pair('Data + configuration + required keys','ข้อมูล + Configuration + กุญแจที่ต้องใช้')],[pair('Verify','ตรวจสอบ'),pair('Integrity and business transactions','Integrity และธุรกรรมธุรกิจ')]]);
  foot(pair('A separate location helps; it does not prove a clean, accessible or timely restoration.','การแยกสถานที่ช่วยได้ แต่ไม่พิสูจน์ว่าข้อมูลสะอาด เข้าถึงได้ หรือกู้ทันเวลา'));
 }else if(index===5){
  const sites=el('div','d2d-sites');for(const [name,ready,work]of [
   ['Hot Site',pair('Most systems pre-positioned','เตรียมระบบไว้มากที่สุด'),pair('Verify current data, access, capacity and cutover','ตรวจข้อมูลล่าสุด สิทธิ์ กำลังรองรับ และการย้ายบริการ')],
   ['Warm Site',pair('Partial infrastructure ready','โครงสร้างพื้นฐานพร้อมบางส่วน'),pair('Prepare remaining systems, configurations and data','เตรียมระบบ Configuration และข้อมูลที่ยังขาด')],
   ['Cold Site',pair('Basic space and utilities','พื้นที่และสาธารณูปโภคพื้นฐาน'),pair('Provision equipment, systems and recoverable data','จัดหาอุปกรณ์ ระบบ และข้อมูลที่กู้ได้')]
  ]){const row=el('div','d2d-site');row.setAttribute('data-drp-site-tier',name);row.append(el('h4','d2s-term',name),put('p','d2s-note',ready),put('p','d2s-copy',work));sites.append(row);}main.append(sites);
  foot(pair('More readiness usually costs more. No site category guarantees a specific RTO.','ความพร้อมมากมักมีต้นทุนสูงกว่า ไม่มีประเภท Site ใดรับประกัน RTO เฉพาะค่า'));
 }else if(index===6){
  flow([[pair('Exercise','ซ้อมแผน'),pair('Restore a known-good state with the responsible teams','กู้สถานะที่เชื่อถือได้ร่วมกับทีมรับผิดชอบ')],[pair('Measure','วัดผล'),pair('Observed data loss + time to a validated service','ข้อมูลสูญหายจริง + เวลาจนบริการผ่านการตรวจ')],[pair('Correct and retest','แก้ไขและทดสอบซ้ำ'),pair('Assign owners, update the DRP and close gaps','มอบหมายคนแก้ ปรับ DRP และปิดช่องว่าง')]]);
  foot(pair('Coordinate authorization, security containment and stakeholder communication.','ประสานอำนาจอนุมัติ การควบคุมเหตุ และการสื่อสารกับผู้เกี่ยวข้อง'));
 }else if(index===7){
  const parallel=el('div','d2d-parallel');
  const a=step(pair('Business Continuity · BCP','Business Continuity · BCP'),pair('Safe alternate branch + approved manual order queue','สาขาสำรองปลอดภัย + คิวคำสั่งซื้อ Manual ที่อนุมัติ'));
  const b=step(pair('Disaster Recovery · DRP','Disaster Recovery · DRP'),pair('Restore identity, network and order database; validate service','กู้ Identity เครือข่าย และฐานข้อมูลคำสั่งซื้อ แล้วตรวจบริการ'));parallel.append(a,b);main.append(parallel);
  foot(pair('BIA informs priorities for both. Continuity work and IT recovery can proceed in parallel.','BIA ให้ข้อมูลลำดับทั้งสองฝั่ง งานต่อเนื่องกับการกู้ IT ทำคู่ขนานกันได้'));
 }else return makeDecision(scene,context,{prefix:'drp',correctIndex:2,prompt:pair('Which plan meets the requirements?','แผนใดรองรับข้อกำหนด?'),choices:[
  pair('Call data loss RTO; start buying Cold Site servers.','เรียกข้อมูลสูญหายว่า RTO แล้วเริ่มซื้อ Server ให้ Cold Site'),
  pair('Keep daily backups only at the primary site; skip drills.','Backup รายวันไว้ที่สถานที่หลักเท่านั้น แล้วงดซ้อม'),
  pair('RPO 30 min, RTO 1 hour; protected copies and tested recovery capacity.','RPO 30 นาที RTO 1 ชั่วโมง พร้อมสำเนาที่ปกป้องและระบบกู้ที่ทดสอบ'),
  pair('Restore test servers first; recover orders next week.','กู้ Server ทดสอบก่อน แล้วกู้คำสั่งซื้อสัปดาห์หน้า')
 ]});
 return{destroy(){}};
}
