import {element, localize} from './dom.js';

// IDs and shape guards deliberately retain the existing semantic Reading/Info contract.
const SCENES = new Map([
 ['slide-01-grc-foundations', ['business-map', 3]],
 ['slide-02-purpose-of-grc', ['evidence-reuse', 7]],
 ['slide-03-importance-of-grc', ['breakdown-remedy', 11]],
 ['slide-04-grc-frameworks', ['framework-match', 4]],
 ['slide-05-grc-distinctions', ['direction-assurance', 4]],
 ['slide-06-applied-grc-scenario', ['applied-scenario', 4]]
]);

export function hasGrcFoundationsPresentation({lesson, slide}) {
 const scene=SCENES.get(slide?.id),b=slide?.blocks;
 return Boolean(lesson?.id==='lesson-d2-01-grc-foundations' && scene && b?.length===5 &&
  b[0]?.kind==='text' && b[1]?.kind==='table' && b[2]?.kind==='text' &&
  b[3]?.kind==='list' && b[4]?.kind==='text' && b[1].rows?.length===scene[1] &&
  b[1].columns?.length===(slide.id==='slide-02-purpose-of-grc'?2:3) &&
  b[1].rows.every(row=>Array.isArray(row)&&row.length===b[1].columns.length));
}

const pair=(en,th)=>({en,th});
// Authored presentation paraphrases: complete explanations remain in the lesson JSON.
const HEADINGS = {
 'business-map': [pair('GRC gives security a business purpose.','GRC ทำให้งาน Security มีเป้าหมายทางธุรกิจ'),
  pair('One business goal. Three connected perspectives on the same security decision.','เป้าหมายธุรกิจเดียวกัน มองการตัดสินใจด้าน Security ให้ครบทั้งสามด้าน')],
 'evidence-reuse': [pair('GRC turns separate effort into coordinated work.','GRC เปลี่ยนงานแยกส่วนให้ประสานกัน'),
  pair('Example: several teams need evidence that critical-system access was reviewed.','ตัวอย่าง: หลายทีมต้องใช้หลักฐานว่ามีการทบทวนสิทธิ์เข้าใช้ระบบสำคัญแล้ว')],
 'breakdown-remedy': [pair('Coordinated GRC makes gaps visible—and actionable.','GRC ที่ประสานกันช่วยให้เห็นช่องว่างและแก้ไขได้'),
  pair('A control gap becomes easier to address when rules, risk and responsibility are clear.','เมื่อกฎ ความเสี่ยง และผู้รับผิดชอบชัดเจน องค์กรจึงจัดการช่องว่างของ Controls ได้ตรงจุด')],
 'framework-match': [pair('Choose the reference that fits the task.','เลือก Framework หรือ Standard ให้ตรงกับงาน'),
  pair('Start with what the organization needs to achieve. These references can work together.','เริ่มจากสิ่งที่องค์กรต้องการทำให้ได้ กรอบเหล่านี้สามารถใช้เสริมกันได้')],
 'direction-assurance': [pair('Know who decides—and what the evidence proves.','แยกให้ออกว่าใครตัดสินใจ และหลักฐานบอกอะไร'),
  pair('Governance and Management have different jobs. Compliance and Risk Management ask different questions.','Governance กับ Management ทำหน้าที่ต่างกัน ส่วน Compliance กับ Risk Management ตอบคนละคำถาม')],
 'applied-scenario': [pair('What should NovaPay do first?','NovaPay ควรเริ่มจากอะไร?'),
  pair('NovaPay wants bank clients. Teams use conflicting security rules and duplicate questionnaires; clients ask about risk governance and an ISMS.','NovaPay ต้องการขยายสู่ลูกค้าธนาคาร แต่แต่ละทีมใช้กฎ Security ไม่ตรงกันและตอบแบบสอบถามซ้ำ ลูกค้าต้องการเห็นการกำกับ Risk และระบบ ISMS')]
};

const CHOICES = [
 pair('Buy more tools; let each team set its own rules.','ซื้อเครื่องมือเพิ่ม แล้วให้แต่ละทีมตั้งกฎเอง'),
 pair('Enforce endpoint security tools before setting governance policies.','บังคับติดตั้ง Endpoint Tools ก่อนกำหนดนโยบายกำกับดูแล'),
 pair('Set shared direction and owners; align risks, obligations and ISMS work.','กำหนดทิศทางและเจ้าภาพร่วมกัน แล้วประสาน Risk ข้อกำหนด และงาน ISMS'),
 pair('Pass one compliance audit; treat risk as permanently eliminated.','ตรวจผ่าน Compliance ครั้งเดียว แล้วถือว่าไร้ความเสี่ยงถาวร')
];

const TOOL_FIRST_REASON=pair(
 'More tools without Governance direction, consistent policies or clear accountability leave the same problems: conflicting practices and duplicated work.',
 'การซื้อเครื่องมือเพิ่มโดยไม่มี Governance กำหนดทิศทาง นโยบายร่วม และผู้รับผิดชอบที่ชัดเจน ยังทำให้แต่ละทีมใช้แนวปฏิบัติไม่ตรงกันและทำงานซ้ำ'
);

export function renderGrcFoundationsPresentation(host,context) {
 const {slide}=context,doc=host.ownerDocument,[kind]=SCENES.get(slide.id);
 const language=context.language==='th'?'th':'en';
 const put=(tag,cls,copy)=>localize(element(doc,tag,cls),copy,language);
 const root=element(doc,'section',`grf-scene grf-slide-${kind}`);
 root.setAttribute('data-grc-foundations-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','grf-header');
 header.append(put('h3','grf-title',HEADINGS[kind][0]),put('p','grf-lead',HEADINGS[kind][1]));
 const main=element(doc,'div','grf-main');root.append(header,main);host.append(root);
 const note=copy=>main.append(put('p','grf-takeaway',copy));
 const arrow=()=>{const n=element(doc,'span','grf-arrow','→');n.setAttribute('aria-hidden','true');return n;};

 if(kind==='business-map') {
  const map=element(doc,'div','grf-business-map');
  const goal=element(doc,'div','grf-goal');
  goal.append(put('p','grf-label',pair('Business objective','เป้าหมายธุรกิจ')),
   put('h4','grf-goal-title',pair('Keep critical services trustworthy.','ให้บริการสำคัญทำงานได้อย่างน่าเชื่อถือ')),
   put('p','grf-copy',pair('Example: protect privileged access with MFA.','ตัวอย่าง: ปกป้องบัญชีสิทธิ์สูงด้วย MFA')));
  const roles=element(doc,'div','grf-roles');
  const entries=[
   ['Governance',pair('Set direction, oversight and accountability.','กำหนดทิศทาง กำกับดูแล และผู้รับผิดชอบ'),pair('Leadership sets the MFA policy and names its owner.','ผู้บริหารกำหนดนโยบาย MFA และเจ้าของนโยบาย')],
   ['Risk Management',pair('Identify, assess and manage exposure.','ระบุ ประเมิน และจัดการความเสี่ยง'),pair('Prioritize privileged accounts that lack MFA.','จัดลำดับแก้ไขบัญชีสิทธิ์สูงที่ยังไม่มี MFA')],
   ['Compliance',pair('Meet applicable requirements.','ปฏิบัติตามข้อกำหนดที่ใช้บังคับจริง'),pair('Verify MFA evidence against relevant rules and contracts.','ตรวจหลักฐาน MFA ให้ตรงกับกฎและสัญญาที่เกี่ยวข้อง')]
  ];
  for(const [name,role,example] of entries){const row=element(doc,'section','grf-role');row.append(element(doc,'h4','grf-term',name),put('p','grf-copy',role),put('p','grf-note',example));roles.append(row);}
  map.append(goal,roles);main.append(map);
  note(pair('GRC connects these perspectives; they inform the same business decision.','GRC เชื่อมทั้งสามด้าน เพื่อใช้ตัดสินใจเรื่องธุรกิจเดียวกัน'));
 } else if(kind==='evidence-reuse') {
  const container=element(doc,'div','grf-evidence-container');
  const purposesStrip=element(doc,'div','grf-purposes-strip');
  const pHeader=element(doc,'h4','grf-strip-title');
  localize(pHeader,pair('7 Connected Purposes of GRC','7 วัตถุประสงค์หลักที่ประสานกันของ GRC'),language);
  const pList=element(doc,'div','grf-purposes-pills');
  const purposes=[
    pair('1. Align with business goals','1. จัดแนวกับเป้าหมายธุรกิจ'),
    pair('2. Identify & manage risks','2. ชี้และจัดการความเสี่ยง'),
    pair('3. Meet legal obligations','3. ปฏิบัติตามกฎหมาย/เกณฑ์'),
    pair('4. Consistent policies & controls','4. นโยบายและมาตรการร่วม'),
    pair('5. Improve accountability','5. ความรับผิดชอบชัดเจน'),
    pair('6. Informed decision-making','6. ตัดสินใจอย่างมีข้อมูล'),
    pair('7. Reduce duplicated effort','7. ลดการทำงานซ้ำซ้อน')
  ];
  for(const p of purposes){const pill=element(doc,'span','grf-purpose-pill');localize(pill,p,language);pList.append(pill);}
  purposesStrip.append(pHeader,pList);

  const compare=element(doc,'div','grf-review-comparison');
  const before=element(doc,'section','grf-separate');
  before.append(put('h4','grf-term',pair('Separate requests (Fragmented)','การขอหลักฐานแบบแยกส่วน')));
  const copies=element(doc,'div','grf-separate-reviews');
  for(const team of [pair('Security team','ทีม Security'),pair('Internal audit','ผู้ตรวจสอบภายใน'),pair('Bank partner','คู่ค้าธนาคาร')]){
   const row=element(doc,'div','grf-review-copy');row.append(put('strong','grf-copy',team),put('p','grf-note',pair('Collect another access review.','รวบรวม Access review อีกชุด')));copies.append(row);
  }
  before.append(copies,put('p','grf-copy',pair('Repeated work · Inconsistent data','เกิดงานซ้ำซ้อน และเสี่ยงได้ข้อมูลที่ไม่ตรงกัน')));
  const after=element(doc,'section','grf-shared');
  after.append(put('h4','grf-term',pair('Coordinated access review','การทบทวนสิทธิ์ที่ประสานงานร่วมกัน')));
  const record=element(doc,'div','grf-evidence-record');
  record.append(put('h5','grf-record-title',pair('Shared access-review evidence','หลักฐาน Access review ชุดเดียวกัน')),
   put('p','grf-copy',pair('One consistent policy. A named owner. Verified results.','ใช้นโยบายเดียวกัน มีเจ้าของงาน และตรวจผลแล้ว')));
  after.append(record,put('p','grf-copy',pair('Reuse relevant evidence across all teams and obligations.','นำหลักฐานที่เกี่ยวข้องไปใช้ร่วมกันระหว่างทีมและข้อกำหนด')));
  compare.append(before,arrow(),after);
  container.append(purposesStrip,compare);
  main.append(container);
  note(pair('The primary purpose of GRC is coordinated decisions and less duplication—not more paperwork.','จุดประสงค์หลักคือประสานการตัดสินใจและลดงานซ้ำซ้อน ไม่ใช่เพิ่มภาระเอกสาร'));
 } else if(kind==='breakdown-remedy') {
  const table=element(doc,'div','grf-remedy-table');
  const head=element(doc,'div','grf-remedy-head');head.append(put('h4','grf-term',pair('Without coordination','เมื่อขาดการประสานงาน')),put('h4','grf-term',pair('With effective GRC','เมื่อมี GRC ที่ทำงานได้ผล')));table.append(head);
  const examples=[
   [pair('Teams follow conflicting rules.','แต่ละทีมใช้กฎไม่ตรงกัน'),pair('Use consistent policies and controls.','ใช้ Policies และ Controls ที่สอดคล้องกัน')],
   [pair('Important risks go unnoticed.','มองไม่เห็นความเสี่ยงสำคัญ'),pair('Identify risk and protect critical assets.','ระบุ Risk และปกป้อง Assets สำคัญ')],
   [pair('Applicable duties are missed.','พลาดข้อกำหนดที่ต้องปฏิบัติตาม'),pair('Check compliance; reduce penalty risk.','ตรวจ Compliance และลดโอกาสเกิดค่าปรับ')],
   [pair('No one owns the follow-up.','ไม่ชัดว่าใครต้องติดตามแก้ไข'),pair('Name an accountable owner; review progress.','ระบุเจ้าภาพและทบทวนความคืบหน้า')]
  ];
  for(const [problem,remedy] of examples){const row=element(doc,'div','grf-remedy-row');row.setAttribute('data-grc-breakdown','');row.append(put('p','grf-copy',problem),arrow(),put('p','grf-copy',remedy));table.append(row);}
  main.append(table);
  note(pair('Better decisions support resilience. Effective GRC does not guarantee zero incidents.','ข้อมูลที่ดีช่วยตัดสินใจและเพิ่ม Resilience แต่ GRC ไม่ได้รับประกันว่าจะไม่เกิดเหตุเลย'));
 } else if(kind==='framework-match') {
  const list=element(doc,'div','grf-framework-matches');
  const tasks=[
   [pair('Manage cybersecurity risk','บริหารความเสี่ยง Cybersecurity'),'NIST CSF',pair('Structure cybersecurity risk outcomes.','จัดโครงสร้างผลลัพธ์ด้านความเสี่ยงไซเบอร์')],
   [pair('Establish and improve an ISMS','สร้างและปรับปรุง ISMS'),'ISO/IEC 27001',pair('Requirements for an information security management system.','ข้อกำหนดของระบบบริหารความมั่นคงปลอดภัยสารสนเทศ')],
   [pair('Govern and manage enterprise IT','กำกับดูแลและบริหาร Enterprise IT'),'COBIT',pair('Connect IT governance and management to business goals.','เชื่อมการกำกับและบริหาร IT กับเป้าหมายธุรกิจ')]
  ];
  for(const [task,name,purpose] of tasks){const row=element(doc,'section','grf-framework-row');const answer=element(doc,'div','grf-framework-answer');answer.append(element(doc,'h4','grf-framework-name',name),put('p','grf-note',purpose));row.append(put('p','grf-task',task),arrow(),answer);list.append(row);}
  main.append(list);
  note(pair('A framework or standard is not a law. ISO certification is not a universal legal requirement.','Framework หรือ Standard ไม่ใช่กฎหมาย และ ISO certification ไม่ได้เป็นข้อบังคับทางกฎหมายสำหรับทุกองค์กร'));
 } else if(kind==='direction-assurance') {
  const flow=element(doc,'div','grf-direction-flow');
  const gov=element(doc,'section','grf-direction-role');gov.append(element(doc,'h4','grf-term','Governance'),put('p','grf-copy',pair('Sets direction, authority and oversight.','กำหนดทิศทาง อำนาจตัดสินใจ และกำกับดูแล')));
  const link=element(doc,'div','grf-feedback-link');link.append(put('p','grf-note',pair('Direction →','ทิศทาง →')),put('p','grf-note',pair('← Evidence','← หลักฐานผลลัพธ์')));
  const mgmt=element(doc,'section','grf-direction-role');mgmt.append(element(doc,'h4','grf-term','Management'),put('p','grf-copy',pair('Plans, implements and reports results.','วางแผน นำไปปฏิบัติ และรายงานผล')));flow.append(gov,link,mgmt);
  const example=element(doc,'div','grf-audit-example');
  const compliance=element(doc,'section','grf-audit-fact');compliance.append(element(doc,'h4','grf-term','Compliance'),put('p','grf-copy',pair('A payment-system audit passed.','ระบบชำระเงินผ่านการตรวจตามข้อกำหนด')),put('p','grf-note',pair('Evidence covers a defined scope and time.','หลักฐานครอบคลุมขอบเขตและช่วงเวลาที่ตรวจ')));
  const risk=element(doc,'section','grf-audit-fact');risk.append(element(doc,'h4','grf-term','Risk Management'),put('p','grf-copy',pair('A corporate VPN still lacks MFA.','แต่ VPN พนักงานยังไม่มี MFA')),put('p','grf-note',pair('Assess and address the remaining exposure.','ยังต้องประเมินและจัดการความเสี่ยงนี้')));
  example.append(compliance,element(doc,'span','grf-not-equal','≠'),risk);main.append(flow,example);
  note(pair('Compliant does not mean risk-free. Keep assessing risk beyond the audit checklist.','ผ่าน Compliance ไม่ได้แปลว่าไร้ Risk ต้องประเมินความเสี่ยงต่อ ไม่หยุดแค่ Checklist'));
 } else if(kind==='applied-scenario') {
  const state=context.interactionState||{},abort=new AbortController(),rows=slide.blocks[1].rows;
  const layout=element(doc,'div','grf-scenario-layout'),choices=element(doc,'div','grf-scenario-choices'),feedback=element(doc,'section','grf-scenario-feedback');
  feedback.setAttribute('data-grc-scenario-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const buttons=CHOICES.map((copy,index)=>{
   const button=element(doc,'button','grf-scenario-choice');button.type='button';button.setAttribute('data-grc-scenario-choice',String(index));
   const letter=element(doc,'span','grf-choice-letter',String.fromCharCode(65+index));letter.setAttribute('aria-hidden','true');
   button.append(letter,put('span','grf-choice-copy',copy));button.addEventListener('click',()=>{state.choice=index;paint();},{signal:abort.signal});choices.append(button);return button;
  });
  const paint=()=>{
   const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<rows.length?state.choice:-1;
   buttons.forEach((button,index)=>button.setAttribute('aria-pressed',String(index===selected)));
   feedback.setAttribute('data-grc-outcome',selected<0?'pending':selected===2?'recommended':'distractor');
   if(selected<0)feedback.replaceChildren(put('h4','grf-feedback-title',pair('Which action addresses the coordination gap?','แนวทางใดแก้ปัญหาการประสานงาน?')),put('p','grf-copy',pair('Choose an action to inspect its reasoning.','เลือกแนวทาง แล้วพิจารณาเหตุผลประกอบ')));
   else feedback.replaceChildren(put('h4','grf-feedback-title',selected===2?pair('A coordinated first step','เริ่มต้นด้วยการประสานงาน'):pair('The gap remains','ช่องว่างยังไม่ได้รับการแก้ไข')),put('p','grf-feedback-reason',selected===0?TOOL_FIRST_REASON:rows[selected][2]));
  };
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();
  paint();layout.append(choices,feedback);main.append(layout);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }
 return {destroy(){}};
}
