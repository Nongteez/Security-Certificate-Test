import {pair,makeScene,makeDecision} from './domain2-lesson-shell.js';
export const LESSON_ID='lesson-d2-03-business-continuity-bcp';
const scenes=new Map([
 ['slide-01-redundancy-and-bc-foundations',['service-alternate-path',4]],
 ['slide-02-eight-disruption-triggers',['disruption-service-response',8]],
 ['slide-03-bcp-and-eight-elements',['continuity-operating-plan',8]],
 ['slide-04-operational-redundancy-strategies',['independent-alternate-dependencies',4]],
 ['slide-05-bia-and-recovery-priorities',['business-impact-dependencies',4]],
 ['slide-06-continuity-decision-scenario',['continuity-response-scenario',4]]
]);
export function hasBusinessContinuityBcpPresentation({lesson,slide}={}) {
 const spec=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id===LESSON_ID&&!!spec&&b?.length===5&&b.map(x=>x.kind).join(',')==='text,table,text,list,text'&&b[1].columns?.length===3&&b[1].rows?.length===spec[1]&&b[1].rows.every(r=>r.length===3);
}
export function renderBusinessContinuityBcpPresentation(host,context) {
 const scene=makeScene(host,context,scenes.get(context.slide.id)[0],'data-bc-bcp-composition');
 const {main,el,put,arrow,foot}=scene;
 const add=(parent,tag,cls,en,th)=>{const n=put(tag,cls,pair(en,th));parent.append(n);return n;};
 const kind=scenes.get(context.slide.id)[0];
 if(kind==='service-alternate-path') {
  const service=el('div','d2b-service');add(service,'h4','d2s-term','Customer support','บริการลูกค้า');add(service,'p','d2s-note','The business activity to sustain','งานธุรกิจที่ต้องทำต่อ');main.append(service);
  const paths=el('div','d2b-service-paths');
  for(const [a,b,c]of [
   [pair('Primary route','เส้นทางหลัก'),pair('Headquarters + primary connection','สำนักงานใหญ่ + การเชื่อมต่อหลัก'),pair('Unavailable during the flood','ใช้ไม่ได้ระหว่างน้ำท่วม')],
   [pair('Prepared alternate','ทางเลือกที่เตรียมไว้'),pair('Safe branch + trained team + working connection','สาขาปลอดภัย + ทีมที่ฝึกแล้ว + การเชื่อมต่อที่ใช้ได้'),pair('Provide the agreed service level','ให้บริการตามระดับที่ตกลงไว้')]
  ]) {const row=el('div','d2b-service-path');row.append(put('h4','d2s-term',a),put('p','d2s-copy',b),arrow(),put('p','d2s-copy',c));paths.append(row);}main.append(paths);
  foot(pair('Test capacity and handover. A stored backup alone cannot run the service.','ทดสอบกำลังรองรับและการส่งต่องาน ไฟล์ Backup เพียงอย่างเดียวไม่ได้ทำให้บริการเดินต่อ'));
 } else if(kind==='disruption-service-response') {
  const lanes=el('div','d2b-disruption-lanes');
  for(const [a,b,c]of [
   [pair('Flood','น้ำท่วม'),pair('Office inaccessible','เข้าอาคารไม่ได้'),pair('Safe alternate workplace','สถานที่ทำงานสำรองที่ปลอดภัย')],
   [pair('Network outage','เครือข่ายล่ม'),pair('Orders cannot reach the team','คำสั่งซื้อส่งถึงทีมไม่ได้'),pair('Tested alternate connectivity','การเชื่อมต่อสำรองที่ทดสอบแล้ว')],
   [pair('Key staff unavailable','คนสำคัญมาทำงานไม่ได้'),pair('Critical task has no operator','งานสำคัญไม่มีคนทำ'),pair('A trained deputy','คนทำหน้าที่แทนที่ฝึกไว้')]
  ]) {const row=el('div','d2b-disruption-lane');row.append(put('h4','d2s-term',a),arrow(),put('p','d2s-copy',b),arrow(),put('p','d2s-copy',c));lanes.append(row);}main.append(lanes);
  foot(pair('One incident can affect several resources. Reading includes all eight source examples and human error.','เหตุเดียวอาจกระทบหลายทรัพยากร Reading รวมตัวอย่างทั้งแปดจากต้นฉบับและ Human error'));
 } else if(kind==='continuity-operating-plan') {
  const plan=el('section','d2b-plan');add(plan,'h4','d2s-term','Customer support — fallback instructions','บริการลูกค้า — แนวทางทำงานเมื่อเกิดเหตุ');const dl=el('dl','d2b-plan-record');
  for(const [a,b]of [
   [pair('Critical work','งานสำคัญ'),pair('Receive and track customer requests','รับและติดตามคำขอลูกค้า')],
   [pair('Activation','การเริ่มใช้แผน'),pair('Authorized shift lead confirms the arrangement','หัวหน้ากะที่มีอำนาจยืนยันการใช้แผน')],
   [pair('People / place','คน / สถานที่'),pair('Trained deputies at a prepared alternate branch','ผู้ทำหน้าที่แทนที่ฝึกไว้ ณ สาขาสำรองที่เตรียมไว้')],
   [pair('Tools / contact','เครื่องมือ / ติดต่อ'),pair('Tested access, essential systems and agreed channels','การเข้าถึงที่ทดสอบแล้ว ระบบจำเป็น และช่องทางที่ตกลงไว้')]
  ]) {const row=el('div','d2b-plan-row');row.append(put('dt','d2s-note',a),put('dd','d2s-copy',b));dl.append(row);}plan.append(dl);main.append(plan);
  foot(pair('Illustrative excerpt. Reading retains all eight BCP elements, including suppliers and recovery priorities.','ตัวอย่างส่วนหนึ่งของแผน Reading เก็บ BCP ทั้งแปดองค์ประกอบ รวมคู่ค้าและลำดับการฟื้นงาน'));
 } else if(kind==='independent-alternate-dependencies') {
  const diagram=el('div','d2b-common-cause'),contracts=el('div','d2b-contracts');add(contracts,'p','d2s-copy','ISP contract A','สัญญา ISP A');add(contracts,'p','d2s-copy','ISP contract B','สัญญา ISP B');
  const shared=el('div','d2b-shared-route');add(shared,'h4','d2s-term','Same upstream fibre route','ใช้เส้นใยแก้วเส้นทางเดียวกัน');add(shared,'p','d2s-note','One cable cut can affect both links','สายขาดครั้งเดียวอาจกระทบทั้งสองลิงก์');const result=el('div','d2b-dependency-result');add(result,'h4','d2s-term','Both connections fail','การเชื่อมต่อทั้งคู่ล้มเหลว');add(result,'p','d2s-note','Different contracts ≠ independent paths','ต่างสัญญา ≠ ต่างเส้นทาง');diagram.append(contracts,arrow(),shared,arrow(),result);main.append(diagram);
  foot(pair('Also check sites, power, staff and capacity. Exercise the alternate under realistic conditions.','ตรวจสถานที่ ไฟฟ้า คน และกำลังรองรับด้วย ฝึกใช้ทางสำรองภายใต้เงื่อนไขที่สมจริง'));
 } else if(kind==='business-impact-dependencies') {
  const diagram=el('div','d2b-bia-map'),impact=el('div','d2b-business-impact');add(impact,'h4','d2s-term','Order processing stops','งานรับคำสั่งซื้อหยุด');add(impact,'p','d2s-copy','Unfulfilled orders accumulate over time','คำสั่งซื้อที่ยังส่งมอบไม่ได้สะสมตามเวลา');const deps=el('div','d2b-dependencies');add(deps,'h4','d2s-term','What must be available?','ต้องมีอะไรพร้อมใช้งาน?');
  for(const [en,th]of [['Trained staff and a safe workplace','คนที่ทำงานเป็นและที่ทำงานปลอดภัย'],['Identity, network and order data','Identity, เครือข่าย และข้อมูลคำสั่งซื้อ'],['A supplier able to fulfil orders','คู่ค้าที่ส่งมอบคำสั่งซื้อได้']])add(deps,'p','d2s-copy',en,th);diagram.append(impact,arrow(),deps);main.append(diagram);const priority=el('div','d2b-priority');add(priority,'h4','d2s-term','Recover what enables the critical service','ฟื้นสิ่งที่ทำให้งานสำคัญเดินได้');add(priority,'p','d2s-note','Identity or network may need to return before the application.','อาจต้องกู้ Identity หรือเครือข่ายก่อน Application');main.append(priority);
  foot(pair('BIA informs business priorities; the DRP defines the IT recovery arrangements.','BIA ให้ข้อมูลจัดลำดับงานธุรกิจ ส่วน DRP กำหนดแนวทางกู้ IT'));
 } else {
  return makeDecision(scene,context,{prefix:'bcb',correctIndex:1,prompt:pair('Which response sustains the business?','แนวทางใดทำให้งานธุรกิจเดินต่อ?'),choices:[
   pair('Wait for headquarters and its ISP to recover.','รอสำนักงานใหญ่และ ISP หลักกลับมาใช้ได้'),
   pair('Activate the BCP using prepared alternatives and recovery priorities.','เริ่ม BCP ใช้ทางเลือกที่เตรียมไว้และลำดับการฟื้นงาน'),
   pair('Check nightly backups; wait for server restoration next week.','ตรวจ Backup รายคืน แล้วรอกู้ Server สัปดาห์หน้า'),
   pair('Restore every service at once, including test and archive systems.','กู้ทุกบริการพร้อมกัน รวมระบบทดสอบและคลังเก็บถาวร')
  ]});
 }
 return {destroy(){}};
}
