from pathlib import Path
import json
q=Path('artifacts/qa/domain-3-completion');ids=json.loads((q/'approved-slide-ids.json').read_text())['06']
s="""import {hasLogicalPresentation,logicalScene,pair} from './domain3-lesson-shell.js';
const id='lesson-d3-06-mfa-authentication-signals',ids=IDS;
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
""".replace('IDS',json.dumps(ids));Path('js/ui/learning/iam-mfa-authentication-signals-presentations.js').write_text(s,encoding='utf-8')
p=Path('js/ui/learning/domain3-logical-presentations.js');s=p.read_text(encoding='utf-8');s="import {hasIamMfaAuthenticationSignalsPresentation,renderIamMfaAuthenticationSignalsPresentation} from './iam-mfa-authentication-signals-presentations.js';\n"+s;s=s.replace('const presentations=[[','const presentations=[[hasIamMfaAuthenticationSignalsPresentation,renderIamMfaAuthenticationSignalsPresentation],[');p.write_text(s,encoding='utf-8')
p=Path('docs/plans/task.md');raw=p.read_bytes();lines=raw.splitlines(keepends=True)
for i,x in enumerate(lines):
 if b'| D3-FINISH.' in x:lines[i]=b'| D3-FINISH. Complete Domain 3 Learning Slides | In Progress - Full Domain QA | Lessons 4-5 focused checks pass (35/35, 38/38). Lesson 6 authored; run focused checks, then all-new-slide desktop QA, complete inventory/coverage review, six-lesson progress, regressions and preservation report. |\n'
p.write_bytes(b''.join(lines))
