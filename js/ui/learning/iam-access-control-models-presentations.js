import {hasLogicalPresentation,logicalScene,pair} from './domain3-lesson-shell.js';
const id='lesson-d3-05-access-control-models',ids=["slide-d3-05-01-request-policy-enforcement", "slide-d3-05-02-dac-authorized-owner", "slide-d3-05-03-mac-central-policy", "slide-d3-05-04-rbac-role-permission-reuse", "slide-d3-05-05-abac-evaluate-the-request", "slide-d3-05-06-effective-role-combinations", "slide-d3-05-07-choose-by-policy-requirement", "slide-d3-05-08-mandatory-policy-decision"];
export const hasIamAccessControlModelsPresentation=context=>hasLogicalPresentation(context,id,ids)&&(context.slide.id!==ids.at(-1)||context.slide.blocks[1].rows.length===4);
export function renderIamAccessControlModelsPresentation(host,context){
 const a=logicalScene(host,context),{main,put,node,flow,table,emphasize,rows}=a,i=ids.indexOf(context.slide.id);
 if(i===0){main.append(flow([node(pair('Subject','ผู้ขอ'),pair('Mina','Mina')),node(pair('Action + resource','การกระทำ + ทรัพยากร'),pair('Read assigned report','อ่านรายงานที่รับผิดชอบ')),node(pair('Policy + enforcement','นโยบาย + บังคับใช้'),pair('Approved read: allowed','อ่านที่อนุมัติ: อนุญาต'))]));emphasize(pair('Unapproved edit: denied under this rule.','การแก้ไขที่ไม่ได้อนุมัติ: ปฏิเสธตามกฎนี้'))}
 else if(i===1)main.append(table(pair('File owner sets these grants; software enforces them','เจ้าของไฟล์กำหนดสิทธิ์เหล่านี้ ซอฟต์แวร์บังคับใช้'),[pair('Recipient','ผู้รับ'),pair('Permission','สิทธิ์'),pair('Declared grant','การกำหนดสิทธิ์')],rows));
 else if(i===2){main.append(flow([node(rows[0][0],rows[0][1]),node(rows[1][0],rows[1][1]),node(pair('Mandatory policy','นโยบายบังคับ'),pair('Evaluate all applicable conditions','ประเมินทุกเงื่อนไขที่เกี่ยวข้อง'))]));emphasize(pair('Ordinary owner sharing cannot override this mandatory rule.','เจ้าของทั่วไปแชร์ข้ามกฎบังคับนี้ไม่ได้'))}
 else if(i===3){for(const r of rows)main.append(flow([node(r[0],pair('Authorized assignment','มอบหมายตามอำนาจ')),node(r[1],r[2])]));}
 else if(i===4){const conditions=a.el('div','d3l-conditions');for(const r of rows){const line=a.el('div','d3l-condition');line.append(put('h4','d3l-term',r[0]),put('p','d3l-copy',r[1]));conditions.append(line)}main.append(conditions);emphasize(pair('All required conditions known and satisfied → allow this read.','ข้อมูลเงื่อนไขครบและผ่านทั้งหมด → อนุญาตอ่านครั้งนี้'))}
 else if(i===5)main.append(table(pair('Explicit assignments in this example','การมอบหมายที่ระบุในตัวอย่างนี้'),[pair('User','ผู้ใช้'),pair('Assigned roles','Role ที่มอบหมาย'),pair('Stated effective rights','สิทธิ์ที่มีผลตามกรณี')],rows));
 else if(i===6)main.append(table(pair('One report; four possible decision bases','รายงานเดียว หลักตัดสินสี่แบบ'),[pair('Model','โมเดล'),pair('Decision basis','หลักตัดสิน'),pair('Bounded tradeoff','ข้อแลกเปลี่ยนที่มีขอบเขต')],[
  [pair('DAC','DAC'),pair('Authorized owner grants access','เจ้าของที่มีอำนาจให้สิทธิ์'),pair('Flexible sharing; overgrant risk','แชร์ยืดหยุ่น แต่อาจให้สิทธิ์เกิน')],
  [pair('MAC','MAC'),pair('Central mandatory policy','นโยบายบังคับจากส่วนกลาง'),pair('Owner cannot override; admin complexity','เจ้าของข้ามกฎไม่ได้ บริหารอาจซับซ้อน')],
  [pair('RBAC','RBAC'),pair('Assigned role supplies rights','Role ที่มอบหมายให้สิทธิ์'),pair('Reuse and scale; role scope matters','ใช้ซ้ำ รองรับผู้ใช้มาก ขอบเขต Role ต้องเหมาะ')],
  [pair('ABAC','ABAC'),pair('Request attributes meet policy','Attributes ของคำขอผ่านนโยบาย'),pair('Relevant conditions; missing-data rules','เงื่อนไขที่เกี่ยวข้อง และกฎเมื่อข้อมูลขาด')]
 ],'d3l-model-comparison'));
 else return a.scenario();
 return {destroy(){}};
}
