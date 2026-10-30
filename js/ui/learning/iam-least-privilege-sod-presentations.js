import {hasLogicalPresentation,logicalScene,pair} from './domain3-lesson-shell.js';
const id='lesson-d3-04-least-privilege-sod',ids=["slide-d3-04-01-rights-for-the-task", "slide-d3-04-02-limit-privileged-work", "slide-d3-04-03-permission-and-information-need", "slide-d3-04-04-stop-self-approval", "slide-d3-04-05-roles-need-independent-actors", "slide-d3-04-06-bot-authority-boundary", "slide-d3-04-07-scope-and-conflict-decision"];
export const hasIamLeastPrivilegeSodPresentation=context=>hasLogicalPresentation(context,id,ids)&&(context.slide.id!==ids.at(-1)||context.slide.blocks[1].rows.length===4);
export function renderIamLeastPrivilegeSodPresentation(host,context){
 const a=logicalScene(host,context),{main,put,node,flow,table,emphasize,rows}=a,i=ids.indexOf(context.slide.id);
 if(i===0)main.append(table(pair('Declared report-reading assignment','หน้าที่อ่านรายงานที่ระบุ'),[pair('Action','การกระทำ'),pair('Need','ความจำเป็น'),pair('Grant','สิทธิ์')],rows.slice(0,3)));
 else if(i===1){const lanes=a.el('div','d3l-columns');for(const r of rows)lanes.append(node(r[0],r[1]));main.append(lanes);emphasize(pair('Different tasks justify different bounded capability.','งานต่างกันรองรับความสามารถที่มีขอบเขตต่างกัน'))}
 else if(i===2)main.append(table(pair('Same analyst; explicit action and information scope','Analyst คนเดิม ขอบเขตการกระทำและข้อมูลชัดเจน'),[pair('Request','คำขอ'),pair('Task need','ความจำเป็นต่องาน'),pair('Result','ผล')],rows));
 else if(i===3){main.append(flow(rows.slice(0,2).map(r=>node(r[0],r[1]))));const boundary=node(pair('Self-approval: blocked','อนุมัติตนเอง: ถูกปฏิเสธ'),rows[2][2],'d3l-boundary');main.append(boundary)}
 else if(i===4)main.append(table(pair('Who really controls the two authorities?','ใครควบคุมอำนาจทั้งสองจริง?'),[pair('Assignment','การมอบหมาย'),pair('Actual controller','ผู้ควบคุมจริง'),pair('Policy assessment','ผลเทียบนโยบาย')],rows));
 else if(i===5){main.append(put('p','d3l-kicker',pair('Accountable owner: automation team','ผู้รับผิดชอบ: ทีม Automation')));main.append(flow(rows.slice(0,2).map(r=>node(r[0],r[1]))));emphasize(pair('Bot request capability stays; its self-approval path is blocked.','คงสิทธิ์สร้างคำขอของ Bot แต่ปิดช่องทางอนุมัติตนเอง'))}
 else return a.scenario();
 return {destroy(){}};
}
