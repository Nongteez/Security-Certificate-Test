import {element,localize} from './dom.js';
export const LESSON_ID='lesson-d2-02-grc-tools-risk-register';
const SCENES=new Map([
 ['slide-01-grc-tools-platform',['shared-work-record',3,3]],
 ['slide-02-six-grc-tool-capabilities',['connected-capabilities',6,2]],
 ['slide-03-risk-register-anatomy',['assessment-to-register',11,2]],
 ['slide-04-scoring-and-treatment',['scoring-decision',6,3]],
 ['slide-05-ransomware-worked-example',['ransomware-control-effects',6,3]],
 ['slide-06-residual-risk-and-ownership',['reassess-remaining-risk',4,3]],
 ['slide-07-risk-register-scenario',['register-triage-scenario',4,3]]
]);
export function hasGrcToolsRiskRegisterPresentation({lesson,slide}={}){
 const spec=SCENES.get(slide?.id),b=slide?.blocks;
 return Boolean(lesson?.id===LESSON_ID&&spec&&b?.length===5&&b[0]?.kind==='text'&&b[1]?.kind==='table'&&b[2]?.kind==='text'&&b[3]?.kind==='list'&&b[4]?.kind==='text'&&b[1].columns?.length===spec[2]&&Array.isArray(b[1].rows)&&b[1].rows.length===spec[1]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===spec[2]));
}
const pair=(en,th)=>({en,th});
const CHOICES=[pair('Keep the finding in separate team spreadsheets.','เก็บผลประเมินไว้ใน Spreadsheet แยกตามทีม'),pair('Install controls; delete the record as zero risk.','ติดตั้ง Controls แล้วลบรายการเพราะถือว่า Risk เป็นศูนย์'),pair('Record the risk, name the IT Manager and track treatment plus remaining risk.','บันทึก Risk ระบุ IT Manager เป็น Owner และติดตามแผนกับความเสี่ยงคงเหลือ'),pair('Report 4 × 4 as $16,000; make the owner configure every control alone.','รายงาน 4 × 4 เป็นเงิน 16,000 ดอลลาร์ แล้วให้ Owner ตั้งค่าทุก Control คนเดียว')];

export function renderGrcToolsRiskRegisterPresentation(host,context={}){
 const {slide}=context,doc=host.ownerDocument,[kind]=SCENES.get(slide.id),language=context.language==='th'?'th':'en';
 const put=(tag,cls,copy)=>localize(element(doc,tag,cls),copy,language);
 const root=element(doc,'section',`grt-scene grt-slide-${kind}`);root.setAttribute('data-grc-tools-composition',kind);root.setAttribute('lang',language);
 const head=element(doc,'header','grt-header');head.append(put('h3','grt-title',slide.title),put('p','grt-lead',slide.blocks[0].text));
 const main=element(doc,'div','grt-main');root.append(head,main);host.append(root);
 const arrow=()=>{const n=element(doc,'span','grt-arrow','→');n.setAttribute('aria-hidden','true');return n;};
 const note=copy=>main.append(put('p','grt-takeaway',copy));
 const field=(label,value)=>{const r=element(doc,'div','grt-record-field');r.append(put('dt','grt-field-label',label),put('dd','grt-field-value',value));return r;};
 if(kind==='shared-work-record'){
  const flow=element(doc,'div','grt-work-flow'),copies=element(doc,'section','grt-working-copies');
  copies.append(put('h4','grt-term',pair('Separate working copies','ไฟล์ทำงานแยกส่วน')));
  for(const copy of [pair('Policy versions','เวอร์ชันนโยบาย'),pair('Control status','สถานะ Controls'),pair('Audit evidence','หลักฐาน Audit')])copies.append(put('p','grt-paper-copy',copy));
  copies.append(put('p','grt-note',pair('Which copy is current? Who follows up?','ชุดไหนเป็นปัจจุบัน และใครต้องติดตามต่อ?')));
  const record=element(doc,'section','grt-owned-record');record.append(put('h4','grt-record-title',pair('Privileged access review','การทบทวนสิทธิ์สูง')));
  const data=element(doc,'dl','grt-record-data');data.append(field(pair('Owner','เจ้าของงาน'),pair('IT Manager','IT Manager')),field(pair('Status','สถานะ'),pair('Evidence under review','กำลังตรวจหลักฐาน')),field(pair('Evidence','หลักฐาน'),pair('MFA access-review results','ผล Access review เรื่อง MFA')));record.append(data);
  flow.append(copies,arrow(),record);main.append(flow);
  note(pair('The platform tracks shared records. People validate the evidence and act.','แพลตฟอร์มช่วยติดตามข้อมูลร่วมกัน คนยังต้องตรวจหลักฐานและดำเนินการ'));
 }else if(kind==='connected-capabilities'){
  const links=element(doc,'div','grt-capability-map'),left=element(doc,'div','grt-capability-links'),right=element(doc,'div','grt-capability-links');
  const tasks=[['Risk assessments',pair('Evaluate exposure.','ประเมินความเสี่ยง')],['Risk registers',pair('Record risks and owners.','บันทึก Risk และ Owner')],['Policy management',pair('Approve and review rules.','อนุมัติและทบทวนนโยบาย')],['Control management',pair('Track safeguards.','ติดตามมาตรการควบคุม')],['Compliance tracking',pair('Map applicable duties.','ติดตามข้อกำหนดที่ใช้จริง')],['Audit management',pair('Review evidence and findings.','ทบทวนหลักฐานและ Findings')]];
  tasks.forEach(([name,action],i)=>{const item=element(doc,'section','grt-capability-link');item.setAttribute('data-grt-capability',name);item.append(element(doc,'h4','grt-capability-name',name),put('p','grt-copy',action));(i<3?left:right).append(item);});
  const record=element(doc,'section','grt-shared-control');record.append(put('h4','grt-record-title',pair('Shared control record','ข้อมูล Control ร่วมกัน')),put('p','grt-copy',pair('Privileged-access MFA','MFA สำหรับบัญชีสิทธิ์สูง')),put('p','grt-note',pair('Owner · status · evidence','Owner · สถานะ · หลักฐาน')));links.append(left,record,right);main.append(links);
  note(pair('Connected information supports different activities; it is not a fixed sequence.','ข้อมูลที่เชื่อมกันนำไปใช้กับงานต่าง ๆ ได้ โดยไม่ได้บังคับลำดับขั้นตายตัว'));
 }else if(kind==='assessment-to-register'){
  const transfer=element(doc,'div','grt-assessment-record'),assessment=element(doc,'section','grt-assessment-activity');assessment.append(element(doc,'h4','grt-term','Risk Assessment'),put('p','grt-large-question',pair('What could happen—and how serious is it?','อะไรอาจเกิดขึ้น และเสียหายแค่ไหน?')),put('p','grt-copy',pair('Evaluate the asset, threat, weakness, likelihood and impact.','วิเคราะห์ Asset, Threat, จุดอ่อน Likelihood และ Impact')));
  const record=element(doc,'section','grt-register-example');record.setAttribute('data-grt-register-example','');record.append(element(doc,'h4','grt-record-title','Risk Register'));
  const data=element(doc,'dl','grt-record-data');data.append(field(pair('Risk','ความเสี่ยง'),pair('Ransomware on critical billing servers.','Ransomware ต่อเซิร์ฟเวอร์เรียกเก็บเงิน')),field(pair('Assessment','ผลประเมิน'),pair('Likelihood: High / Impact: High','Likelihood: High · Impact: High')),field(pair('Owner','ผู้รับผิดชอบ'),pair('IT Manager','IT Manager')),field(pair('Treatment / status','แผน / สถานะ'),pair('Mitigation; reassessment due.','Mitigation; รอประเมินซ้ำ')));record.append(data);transfer.append(assessment,arrow(),record);main.append(transfer);
  note(pair('The assessment informs the record. Ownership and review keep it useful.','ใช้ผลประเมินประกอบการบันทึก แล้วมีเจ้าภาพติดตามและทบทวนต่อ'));
 }else if(kind==='scoring-decision'){
  const example=element(doc,'section','grt-score-example');example.setAttribute('data-grt-scoring-example','ordinal-1-4');example.append(put('p','grt-note',pair('Illustrative four-point ordinal scales; the organization defines the rating bands.','ตัวอย่างสเกลลำดับสี่ระดับ โดยองค์กรเป็นผู้กำหนดเกณฑ์จัดระดับ')));
  const formula=element(doc,'div','grt-score-formula');
  for(const [name,value]of [[pair('Likelihood','Likelihood'),'3'],[null,'×'],[pair('Impact','Impact'),'4'],[null,'='],[pair('Priority points','คะแนนจัดลำดับ'),'12']]){const term=element(doc,'div',name?'grt-score-term':'grt-score-operator');if(name)term.append(put('p','grt-field-label',name));term.append(element(doc,'strong','grt-score-number',value));formula.append(term);}example.append(formula);main.append(example);
  const choices=element(doc,'div','grt-response-choices');
  for(const [name,action]of [['Avoid',pair('Retire the exposed activity.','ยุติกิจกรรมที่เป็นต้นเหตุ')],['Mitigate',pair('Continue with tested safeguards.','ดำเนินงานต่อโดยใช้ Controls ที่ทดสอบแล้ว')],['Transfer / Share',pair('Allocate agreed loss; retain duties.','แบ่งภาระตามข้อตกลง และดูแลหน้าที่ที่ยังมี')],['Accept',pair('Authorize, document and review.','ให้ผู้มีอำนาจอนุมัติ บันทึก และทบทวน')]]){const row=element(doc,'section','grt-response-choice');row.append(element(doc,'h4','grt-term',name),put('p','grt-copy',action));choices.append(row);}main.append(choices);
  note(pair('12 is a priority score, not money or probability. Apply agreed criteria to the decision.','12 เป็นคะแนนจัดลำดับ ไม่ใช่ตัวเงินหรือความน่าจะเป็น ต้องตัดสินใจตามเกณฑ์ที่ตกลงร่วมกัน'));
 }else if(kind==='ransomware-control-effects'){
  const example=element(doc,'div','grt-ransomware-layout'),record=element(doc,'section','grt-server-record');record.append(put('h4','grt-record-title',pair('Ransomware affecting critical servers','Ransomware กระทบเซิร์ฟเวอร์สำคัญ')));
  const data=element(doc,'dl','grt-record-data');data.append(field(pair('Likelihood / Impact','Likelihood / Impact'),pair('High / High','High / High')),field(pair('Risk Owner','Risk Owner'),pair('IT Manager','IT Manager')),field(pair('Treatment','แนวทางจัดการ'),pair('Mitigation','Mitigation')));record.append(data);
  const effects=element(doc,'div','grt-control-effects');
  const controls=[['MFA',pair('Reduce misuse of stolen passwords.','ลดการใช้รหัสผ่านที่ขโมยมา')],['Network segmentation',pair('Limit lateral spread.','จำกัดการแพร่กระจายข้ามระบบ')],['EDR',pair('Detect and support response.','ช่วยตรวจจับและตอบสนอง')],['Backups',pair('Support recovery when restores are tested.','ช่วยกู้คืนเมื่อทดสอบ Restore แล้ว')]];
  controls.forEach(([name,effect],i)=>{const row=element(doc,'section','grt-control-effect');row.setAttribute('data-grt-control-item',String(i));row.append(element(doc,'h4','grt-control-name',name),arrow(),put('p','grt-copy',effect));effects.append(row);});example.append(record,effects);main.append(example);
  note(pair('These controls complement one another. Verify their effect; installation is not a guarantee.','Controls เหล่านี้ทำงานเสริมกัน ต้องตรวจผลจริง การติดตั้งไม่ได้รับประกันผลลัพธ์'));
 }else if(kind==='reassess-remaining-risk'){
  const compare=element(doc,'div','grt-reassessment-diagram'),before=element(doc,'section','grt-baseline'),after=element(doc,'section','grt-remaining');
  before.append(element(doc,'h4','grt-term','Inherent Risk'),put('p','grt-large-question',pair('State the before-control assumptions.','ระบุสมมติฐานก่อนใช้ Controls')),put('p','grt-copy',pair('A baseline without the safeguards assumed in this scenario.','ฐานเปรียบเทียบที่สมมติว่ายังไม่มีมาตรการในสถานการณ์นี้')));
  const controls=element(doc,'div','grt-verify-controls');controls.append(put('p','grt-copy',pair('Implement, test and verify','นำไปใช้ ทดสอบ และตรวจผล')),arrow());
  after.append(element(doc,'h4','grt-term','Residual Risk'),put('p','grt-large-question',pair('Reassess what remains.','ประเมินสิ่งที่ยังเหลืออยู่')),put('p','grt-copy',pair('Use evidence of the implemented controls and current exposure.','ใช้หลักฐานจาก Controls ที่ทำงานจริงและความเสี่ยงปัจจุบัน')));compare.append(before,controls,after);main.append(compare);
  const owner=element(doc,'div','grt-owner-review');owner.append(put('h4','grt-term',pair('Accountable follow-through','มีผู้รับผิดชอบติดตามต่อ')),put('p','grt-copy',pair('The Risk Owner coordinates specialist work and review. The authorized decision-maker accepts or escalates the remaining risk.','Risk Owner ประสานผู้เชี่ยวชาญและติดตามผล ผู้มีอำนาจเป็นผู้พิจารณายอมรับหรือส่งต่อความเสี่ยงที่เหลือ')));main.append(owner);
  note(pair('Planned reductions are estimates. Reassess achieved results before deciding what is acceptable.','ผลลด Risk ตามแผนยังเป็นค่าคาดการณ์ ต้องประเมินผลจริงก่อนตัดสินใจว่ายอมรับได้หรือไม่'));
 }else if(kind==='register-triage-scenario'){
  const state=context.interactionState||{},abort=new AbortController(),rows=slide.blocks[1].rows;
  const layout=element(doc,'div','grt-scenario-layout'),choices=element(doc,'div','grt-scenario-options'),feedback=element(doc,'section','grt-scenario-feedback');choices.setAttribute('role','group');choices.setAttribute('aria-label','Scenario decision options');feedback.setAttribute('data-grt-scenario-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const buttons=CHOICES.map((copy,index)=>{const b=element(doc,'button','grt-option-btn');b.type='button';b.setAttribute('data-grt-scenario-choice',String(index));const letter=element(doc,'span','grt-option-letter',String.fromCharCode(65+index));letter.setAttribute('aria-hidden','true');b.append(letter,put('span','grt-option-action',copy));b.addEventListener('click',()=>{state.choice=index;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<rows.length?state.choice:-1;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));feedback.setAttribute('data-grt-outcome',selected<0?'idle':selected===2?'recommended':'distractor');if(selected<0)feedback.replaceChildren(put('h4','grt-feedback-title',pair('Which action creates accountable follow-up?','แนวทางใดทำให้มีเจ้าภาพติดตามต่อ?')),put('p','grt-feedback-body',pair('Choose an action, then inspect its reasoning.','เลือกแนวทาง แล้วพิจารณาเหตุผลประกอบ')));else feedback.replaceChildren(put('h4','grt-feedback-title',selected===2?pair('An owned, reviewable record','บันทึกที่มีเจ้าภาพและทบทวนได้'):pair('The gap remains','ช่องว่างยังไม่ได้รับการแก้ไข')),put('p','grt-feedback-body',rows[selected][2]));};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();layout.append(choices,feedback);main.append(layout);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }
 return {destroy(){}};
}
