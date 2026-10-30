import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';
const id='lesson-d3-02-review-deprovisioning';
const suffixes=['mover-before-after','review-apply-verify','activity-and-ownership','review-at-the-change','withdraw-without-erasing-history','central-and-application-sessions','retire-a-workload-identity','complete-offboarding-decision'];
const shapes=[6,4,4,3,8,3,4,4],scenes=new Map(suffixes.map((s,i)=>[`slide-d3-02-0${i+1}-${s}`,i]));
export function hasIamReviewDeprovisioningPresentation({lesson,slide}={}){
 const i=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id===id&&lesson?.domainId===3&&i!==undefined&&isPair(slide.title)&&Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&
  [b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&Array.isArray(b[1].rows)&&b[1].rows.length===shapes[i]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&Array.isArray(b[3].items)&&b[3].items.every(isPair);
}
export function renderIamReviewDeprovisioningPresentation(host,context){
 const {slide,language='en'}=context,doc=host.ownerDocument,i=scenes.get(slide.id),rows=slide.blocks[1].rows;
 const el=(tag,cls='',copy)=>element(doc,tag,cls,copy),put=(tag,cls,p)=>localize(el(tag,cls),p,language);
 const root=el('section','d3r-scene');root.setAttribute('data-iam-review-composition',suffixes[i]);
 const header=el('header','d3r-header');header.append(put('h3','d3r-title',slide.title),put('p','d3r-lead',slide.blocks[0].text));
 const main=el('div','d3r-main');root.append(header,main,put('p','d3r-foot',slide.blocks[4].text));host.append(root);
 const node=(title,copy,cls='')=>{const n=el('section',`d3r-node ${cls}`);n.append(put('h4','d3r-term',title),put('p','d3r-copy',copy));return n;};
 const arrow=()=>{const a=el('span','d3r-arrow','→');a.setAttribute('aria-hidden','true');return a;};
 const flow=(nodes,cls='')=>{const n=el('div',`d3r-flow ${cls}`);nodes.forEach((x,j)=>{if(j)n.append(arrow());n.append(x);});return n;};
 const table=(caption,heads,data,cls='')=>{const t=el('table',`d3r-table ${cls}`);t.append(put('caption','d3r-note',caption));const h=el('thead'),tr=el('tr');for(const p of heads){const cell=put('th','',p);cell.setAttribute('scope','col');tr.append(cell);}h.append(tr);const body=el('tbody');for(const row of data){const r=el('tr');row.forEach((p,j)=>{const c=put(j===0?'th':'td','',p);if(j===0)c.setAttribute('scope','row');r.append(c);});body.append(r);}t.append(h,body);return t;};
 if(i===0){
  const change=el('div','d3r-role-change');change.append(put('h4','d3r-term',pair('Finance','Finance')),arrow(),put('h4','d3r-term',pair('IT','IT')),put('p','d3r-note',pair('Changed responsibilities','หน้าที่เปลี่ยนไป')));main.append(change);
  main.append(table(pair('Illustrative access after the move','ตัวอย่างสิทธิ์หลังย้ายงาน'),[pair('Permission','สิทธิ์'),pair('Before','ก่อนย้าย'),pair('Now needed','งานใหม่ต้องใช้'),pair('Observed','ผลตรวจ')],[
   [pair('Financial report: read','รายงานการเงิน: อ่าน'),pair('Yes','มี'),pair('No','ไม่ต้องใช้'),pair('Still allowed','ยังใช้ได้')],
   [pair('IT support: assigned scope','IT support: ตามหน้าที่'),pair('No','ไม่มี'),pair('Yes','ต้องใช้'),pair('Allowed','ใช้ได้')]
  ],'d3r-mover-table'));
  main.append(put('p','d3r-emphasis',pair('Remove the stale grant; do not merely add the new role.','ถอนสิทธิ์ที่ค้าง ไม่ใช่เพียงเพิ่ม Role ใหม่')));
 }else if(i===1){
  main.append(flow([
   node(pair('Current need','ความจำเป็นปัจจุบัน'),pair('Review duties and actual rights','เทียบหน้าที่กับสิทธิ์จริง')),
   node(pair('Decision','ผลตัดสินใจ'),pair('Retain / change / remove','คง / ปรับ / ถอน')),
   node(pair('Apply','ลงมือปรับ'),pair('Update the relevant system','ปรับในระบบที่เกี่ยวข้อง')),
   node(pair('Verify','ตรวจผล'),pair('Check allowed and denied work','ตรวจงานที่ให้ใช้และปฏิเสธ'))
  ]));
  main.append(put('p','d3r-emphasis',pair('A signed review is not the enforced result.','ลงนามผลทบทวนแล้ว ยังไม่ใช่ผลบังคับใช้จริง')));
 }else if(i===2){
  main.append(table(pair('Activity × accountable ownership — independent questions','การใช้งาน × ผู้รับผิดชอบ — เป็นคนละคำถาม'),[pair('Activity','การใช้งาน'),pair('Accountable owner','มีผู้รับผิดชอบ'),pair('Missing accountability','ขาดผู้รับผิดชอบ')],[
   [pair('Recent use','มีการใช้'),pair('Owned service runs its approved job','บริการมีทีมดูแล ทำงานที่อนุมัติ'),pair('Old job runs; no owner is known','งานเก่ายังรัน แต่ไม่ทราบผู้ดูแล')],
   [pair('No recent use','ไม่พบการใช้ระยะนี้'),pair('Approved recovery account, rarely used','บัญชีกู้คืนที่อนุมัติไว้ ใช้นาน ๆ ครั้ง'),pair('Leftover account; no known owner','บัญชีตกค้าง ไม่ทราบผู้ดูแล')]
  ],'d3r-ownership-table'));
  main.append(put('p','d3r-emphasis',pair('Investigate purpose, rights and dependencies in every case.','ตรวจวัตถุประสงค์ สิทธิ์ และระบบที่พึ่งพาในทุกกรณี')));
 }else if(i===3){
  const triggers=el('div','d3r-triggers');triggers.append(node(pair('Policy-defined calendar','รอบตามนโยบาย'),pair('Routine access review','ทบทวนสิทธิ์ตามรอบ')),node(pair('Role / project / contract changes','หน้าที่ / โครงการ / สัญญาเปลี่ยน'),pair('Reassess when the relevant event occurs','ตรวจเมื่อเกิดเหตุที่เกี่ยวข้อง')));
  const n=el('div','d3r-trigger-flow');n.append(triggers,arrow(),node(pair('Current justified access','สิทธิ์ที่ยังมีเหตุผลรองรับ'),pair('Decide, apply and verify','ตัดสินใจ ปรับ และตรวจผล')));main.append(n);
  main.append(put('p','d3r-emphasis',pair('Do not wait for the next review to remove known unjustified rights.','อย่ารอรอบถัดไปเพื่อถอนสิทธิ์ที่รู้ว่าหมดความจำเป็นแล้ว')));
 }else if(i===4){
  const lanes=el('div','d3r-withdrawal'),access=el('section','d3r-access-lane'),evidence=el('section','d3r-evidence-lane');
  access.append(put('h4','d3r-term',pair('End-of-contract access withdrawal','ถอนสิทธิ์เมื่อสัญญาสิ้นสุด')));
  const list=el('ul','d3r-actions');for(const p of [pair('Disable the relevant account','ระงับบัญชีที่เกี่ยวข้อง'),pair('Revoke application access','ถอนสิทธิ์ในแอป'),pair('Remove obsolete group memberships','ถอดสมาชิกกลุ่มที่เลิกใช้'),pair('Revoke privileged rights','ถอนสิทธิ์ระดับสูง')])list.append(put('li','d3r-copy',p));access.append(list);
  evidence.append(put('h4','d3r-term',pair('Required evidence','หลักฐานที่ต้องเก็บ')),put('p','d3r-copy',pair('Preserve authorization and activity records under retention policy.','เก็บหลักฐานอนุมัติและกิจกรรมตามนโยบายเก็บรักษา')),put('p','d3r-note',pair('Record deletion is a separate authorized decision.','การลบระเบียนเป็นอีกการตัดสินใจหนึ่งตามอำนาจ')));lanes.append(access,evidence);main.append(lanes);
 }else if(i===5){
  const sessions=el('div','d3r-sessions');sessions.append(node(pair('Central account','บัญชีกลาง'),pair('Disabled','ถูกระงับ'),'d3r-disabled'),node(pair('Existing app session','Session เดิมในแอป'),pair('Still usable in this observed case','ยังใช้ได้ในกรณีที่ตรวจพบนี้'),'d3r-residual'));main.append(sessions);
  main.append(put('p','d3r-emphasis',pair('Use supported revocation → verify the application denies access.','ใช้กลไกเพิกถอนที่รองรับ → ตรวจว่าแอปปฏิเสธการเข้าถึง')));
  main.append(put('p','d3r-note',pair('Central and application session handling can differ; coordinated termination may be supported.','การจัดการ Session กลางกับในแอปอาจต่างกัน บางระบบรองรับการประสานยุติ Session')));
 }else if(i===6){
  main.append(put('p','d3r-kicker',pair('Reporting workload retired','เลิกใช้ระบบงานรายงานนี้แล้ว')));
  main.append(flow([
   node(pair('Owner + dependencies','ผู้ดูแล + ระบบที่พึ่งพา'),pair('Confirm current purpose and justified use','ยืนยันวัตถุประสงค์และการใช้ที่ยังจำเป็น')),
   node(pair('Authorized withdrawal','ถอนตามอำนาจ'),pair('Remove obsolete rights and authentication material','ถอนสิทธิ์และจัดการสิ่งยืนยันตัวตนที่เลิกใช้')),
   node(pair('Verified retirement','ตรวจผลการเลิกใช้'),pair('No unjustified access path remains','ไม่เหลือช่องทางที่หมดความจำเป็น'))
  ]));
 }else{
  const state=context.interactionState||{},abort=new AbortController(),layout=el('div','d3r-decision'),options=el('div','d3r-options'),feedback=el('section','d3r-feedback');options.setAttribute('role','group');options.setAttribute('aria-label','Offboarding scenario actions');feedback.setAttribute('data-iam-review-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,j)=>b.setAttribute('aria-pressed',String(j===selected)));feedback.setAttribute('data-outcome',selected<0?'idle':selected===2?'recommended':'reconsider');feedback.replaceChildren(put('h4','d3r-term',selected<0?pair('What completes removal?','จะถอนสิทธิ์ให้ครบได้อย่างไร?'):selected===2?pair('Complete, verify, retain evidence','ถอนให้ครบ ตรวจผล เก็บหลักฐาน'):pair('Check the remaining access path','พิจารณาช่องทางที่ยังใช้ได้')),put('p','d3r-copy',selected<0?pair('Consider the confirmed end date, your authority and the session that still works.','พิจารณาวันสิ้นสุดสัญญาที่ทราบ อำนาจของคุณ และ Session ที่ยังใช้ได้'):rows[selected][2]));};
  const buttons=rows.map((r,j)=>{const b=el('button','d3r-option');b.type='button';b.setAttribute('data-iam-review-choice',String(j));b.setAttribute('data-slide-interactive','');const mark=el('span','d3r-letter',String.fromCharCode(65+j));mark.setAttribute('aria-hidden','true');b.append(mark,put('span','d3r-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=j;paint();},{signal:abort.signal});options.append(b);return b;});
  const reset=el('button','d3r-reset','Reset');reset.type='button';reset.setAttribute('data-iam-review-reset','');reset.addEventListener('click',()=>{delete state.choice;paint();},{signal:abort.signal});const side=el('div','d3r-feedback-side');side.append(feedback,reset);layout.append(options,side);main.append(layout);
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }
 return {destroy(){}};
}
