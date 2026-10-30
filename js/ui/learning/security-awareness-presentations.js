import {pair,makeScene,makeDecision} from './domain2-lesson-shell.js';
const id='lesson-d2-05-security-awareness-culture-leadership';
const scenes=new Map([['slide-01-awareness-to-safe-action',['recognition-to-action',5]],['slide-02-awareness-and-training',['knowledge-and-practice',2]],['slide-03-shared-daily-culture',['shared-daily-behaviour',6]],['slide-04-leadership-makes-rules-credible',['leadership-example',6]],['slide-05-reinforcement-and-feedback',['learning-feedback-loop',3]],['slide-06-culture-and-leadership-decision',['supported-reporting-scenario',4]]]);
export function hasSecurityAwarenessPresentation({lesson,slide}={}){const a=scenes.get(slide?.id),b=slide?.blocks;return lesson?.id===id&&!!a&&b?.length===5&&b.map(x=>x.kind).join(',')==='text,table,text,list,text'&&b[1].columns?.length===3&&b[1].rows?.length===a[1]&&b[1].rows.every(r=>r.length===3);}
export function renderSecurityAwarenessPresentation(host,context){
 const [kind]=scenes.get(context.slide.id),scene=makeScene(host,context,kind,'data-awareness-composition'),{main,el,put,arrow,foot}=scene,rows=context.slide.blocks[1].rows;
 const item=(a,b)=>{const n=el('section','d2a-item');n.append(put('h4','d2s-term',a),put('p','d2s-copy',b));return n;};
 if(kind==='recognition-to-action'){
  const n=el('div','d2a-response');for(const [i,k]of [0,2,4].entries()){if(i)n.append(arrow());n.append(item(rows[k][1],[pair('Unexpected request for customer records','คำขอข้อมูลลูกค้าที่ไม่คาดหมาย'),pair('Check your responsibility and policy','ตรวจหน้าที่ของตนและนโยบาย'),pair('Use a known reporting channel','ใช้ช่องทางรายงานที่รู้จัก')][i]));}main.append(n);foot(pair('Knowledge helps when the employee knows the safe next action.','ความรู้ช่วยได้เมื่อพนักงานรู้ว่าจะทำอะไรอย่างปลอดภัยต่อไป'));
 }else if(kind==='knowledge-and-practice'){
  const n=el('div','d2a-learning');for(const row of rows)n.append(item(row[0],row[1]));main.append(n);foot(pair('A reminder and practical training can address the same risk in different ways.','ข้อความเตือนกับการฝึกลงมืออาจช่วยรับมือความเสี่ยงเดียวกันคนละด้าน'));
 }else if(kind==='shared-daily-behaviour'){
  const n=el('div','d2a-culture');n.append(item(pair('A suspicious email arrives','ได้รับอีเมลน่าสงสัย'),pair('The employee recognizes the concern','พนักงานสังเกตสิ่งผิดปกติ')));n.append(arrow());const team=el('div','d2a-team');team.append(item(pair('The team makes reporting normal','ทีมมองการรายงานเป็นเรื่องปกติ'),pair('Ask when unsure · follow policy · protect information','ถามเมื่อไม่แน่ใจ · ทำตามนโยบาย · ปกป้องข้อมูล')));n.append(team);main.append(n);foot(pair('Shared responsibility needs usable processes and support.','ความรับผิดชอบร่วมต้องมีขั้นตอนที่ใช้ได้และการสนับสนุน'));
 }else if(kind==='leadership-example'){
  const n=el('div','d2a-example');n.append(item(pair('Written policy','นโยบายที่เขียนไว้'),pair('Use MFA for organizational access','ใช้ MFA เพื่อเข้าระบบองค์กร')));n.append(arrow());n.append(item(pair('Management follows it too','ผู้บริหารทำตามด้วย'),pair('Visible example + resources + clear responsibilities','แบบอย่างที่เห็นจริง + ทรัพยากร + หน้าที่ชัด')));main.append(n);foot(pair('Leaders also support awareness programs and encourage incident reporting.','ผู้นำยังต้องสนับสนุน Awareness และส่งเสริมการรายงานเหตุ'));
 }else if(kind==='learning-feedback-loop'){
  const n=el('div','d2a-loop');rows.forEach((r,i)=>{if(i)n.append(arrow());n.append(item(r[0],r[1]));});main.append(n);foot(pair('Feed what people found difficult back into the next reminder, practice and process improvement.','นำสิ่งที่คนพบว่ายากกลับไปปรับข้อความเตือน การฝึก และขั้นตอนรอบถัดไป'));
 }else return makeDecision(scene,context,{prefix:'awareness',correctIndex:2,prompt:pair('What would improve the situation?','อะไรช่วยปรับสถานการณ์ได้?'),choices:rows.map(r=>r[1])});
 return{destroy(){}};
}
