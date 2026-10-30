import {hasLogicalPresentation,logicalScene,pair} from './domain3-lesson-shell.js';
const id='lesson-d3-06-mfa-authentication-signals',ids=["slide-d3-06-01-authenticated-but-not-authorized", "slide-d3-06-02-factor-types-not-screens", "slide-d3-06-03-risk-context-not-a-factor", "slide-d3-06-04-implausible-login-evidence", "slide-d3-06-05-proportionate-authorized-response", "slide-d3-06-06-anomalous-login-decision"];
export const hasIamMfaAuthenticationSignalsPresentation=context=>hasLogicalPresentation(context,id,ids)&&(context.slide.id!==ids.at(-1)||context.slide.blocks[1].rows.length===4);
export function renderIamMfaAuthenticationSignalsPresentation(host,context){
 const a=logicalScene(host,context),{main,put,node,flow,table,emphasize,rows}=a,i=ids.indexOf(context.slide.id);
 if(i===0){main.append(put('p','d3l-kicker',pair('Analyst: MFA succeeded','Analyst: ผ่าน MFA แล้ว')));main.append(table(pair('Same authenticated analyst; different requested actions','Analyst ที่ยืนยันตัวตนคนเดิม แต่ขอทำต่างกัน'),[pair('Request','คำขอ'),pair('Authorization','การอนุญาต'),pair('Result','ผล')],rows))}
 else if(i===1)main.append(table(pair('Compare the actual configured factors','เทียบปัจจัยที่วิธีตั้งค่ากำหนดจริง'),[pair('Method','วิธี'),pair('Factor types','ประเภทปัจจัย'),pair('Meaning','ความหมาย')],rows.slice(0,2)));
 else if(i===2){main.append(flow(rows.map(r=>node(r[0],r[1]))));emphasize(pair('Location or AI scoring is context, not an additional independent MFA factor.','Location หรือคะแนน AI เป็นบริบท ไม่ใช่ปัจจัย MFA อิสระเพิ่ม'))}
 else if(i===3){main.append(put('p','d3l-kicker',pair('Same account • normalized UTC time','บัญชีเดียวกัน • เวลา UTC ฐานเดียวกัน')));const timeline=a.el('div','d3l-timeline');for(const r of rows)timeline.append(node(r[0],r[1]));main.append(timeline);emphasize(pair('15 minutes between observations → assess supporting context.','ข้อมูลห่างกัน 15 นาที → ประเมินบริบทประกอบ'))}
 else if(i===4){main.append(flow(rows.map(r=>node(r[0],r[1]))));emphasize(pair('Urgent policy-required containment need not wait for a full investigation.','การควบคุมเร่งด่วนตามนโยบายไม่จำเป็นต้องรอสอบสวนครบ'))}
 else return a.scenario();
 return {destroy(){}};
}
