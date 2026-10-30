from pathlib import Path
import json
q=Path('artifacts/qa/domain-3-completion');ids=json.loads((q/'approved-slide-ids.json').read_text())['04'];p=Path('js/ui/learning/iam-least-privilege-sod-presentations.js');s="""import {hasLogicalPresentation,logicalScene,pair} from './domain3-lesson-shell.js';
const id='lesson-d3-04-least-privilege-sod',ids=IDS;
export const hasIamLeastPrivilegeSodPresentation=context=>hasLogicalPresentation(context,id,ids)&&(context.slide.id!==ids.at(-1)||context.slide.blocks[1].rows.length===4);
export function renderIamLeastPrivilegeSodPresentation(host,context){
 const a=logicalScene(host,context),{main,put,node,flow,table,emphasize,rows}=a,i=ids.indexOf(context.slide.id);
 if(i===0)main.append(table(pair('Declared report-reading assignment','หน้าที่อ่านรายงานที่ระบุ'),[pair('Action','การกระทำ'),pair('Need','ความจำเป็น'),pair('Grant','สิทธิ์')],rows.slice(0,3)));
 else if(i===1){const lanes=a.el('div','d3l-columns');for(const r of rows)lanes.append(node(r[0],r[1]));main.append(lanes);emphasize(pair('Different tasks justify different bounded capability.','งานต่างกันรองรับความสามารถที่มีขอบเขตต่างกัน')))}
 else if(i===2)main.append(table(pair('Same analyst; explicit action and information scope','Analyst คนเดิม ขอบเขตการกระทำและข้อมูลชัดเจน'),[pair('Request','คำขอ'),pair('Task need','ความจำเป็นต่องาน'),pair('Result','ผล')],rows));
 else if(i===3){main.append(flow(rows.slice(0,2).map(r=>node(r[0],r[1]))));const boundary=node(pair('Self-approval: blocked','อนุมัติตนเอง: ถูกปฏิเสธ'),rows[2][2],'d3l-boundary');main.append(boundary)}
 else if(i===4)main.append(table(pair('Who really controls the two authorities?','ใครควบคุมอำนาจทั้งสองจริง?'),[pair('Assignment','การมอบหมาย'),pair('Actual controller','ผู้ควบคุมจริง'),pair('Policy assessment','ผลเทียบนโยบาย')],rows));
 else if(i===5){main.append(put('p','d3l-kicker',pair('Accountable owner: automation team','ผู้รับผิดชอบ: ทีม Automation')));main.append(flow(rows.slice(0,2).map(r=>node(r[0],r[1]))));emphasize(pair('Bot request capability stays; its self-approval path is blocked.','คงสิทธิ์สร้างคำขอของ Bot แต่ปิดช่องทางอนุมัติตนเอง')))}
 else return a.scenario();
 return {destroy(){}};
}
""".replace('IDS',json.dumps(ids));p.write_text(s,encoding='utf-8')
p=Path('js/ui/learning/domain3-logical-presentations.js');p.write_text("""// Trusted dispatch for newly authored Domain 3 logical-control lessons only.
import {hasIamLeastPrivilegeSodPresentation,renderIamLeastPrivilegeSodPresentation} from './iam-least-privilege-sod-presentations.js';
const presentations=[[hasIamLeastPrivilegeSodPresentation,renderIamLeastPrivilegeSodPresentation]];
export const hasDomain3LogicalPresentation=context=>presentations.some(([has])=>has(context));
export function renderDomain3LogicalPresentation(host,context){return presentations.find(([has])=>has(context))?.[1](host,context)}
""",encoding='utf-8')
p=Path('js/ui/learning/renderers.js');s=p.read_text(encoding='utf-8');s="import {hasDomain3LogicalPresentation,renderDomain3LogicalPresentation} from './domain3-logical-presentations.js';\n"+s;pos=s.index('  const iamFrameworks =');s=s[:pos]+"""  const d3Logical = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasDomain3LogicalPresentation(context);
  host.classList.toggle('learning-d3-logical-slide',Boolean(d3Logical));
  if (d3Logical) heading.classList.add('learning-sr-only');
"""+s[pos:];s=s.replace('  if (iamFrameworks) {\n    const handle=',"""  if (d3Logical) {
    const handle=renderDomain3LogicalPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (iamFrameworks) {
    const handle=""");p.write_text(s,encoding='utf-8')
p=Path('index.html');b=p.read_bytes();needle=b'    <link rel="stylesheet" href="./css/learning-iam-frameworks-tools.css">';assert needle in b;b=b.replace(needle,needle+b'\n    <link rel="stylesheet" href="./css/learning-domain3-lesson-shell.css">');p.write_bytes(b)
