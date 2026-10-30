import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';

const lessonId='lesson-d3-01-roles-provisioning';
const suffixes=['role-to-task','identity-account-identifier','authorize-before-assignment','provision-approved-access','verify-the-grant','own-the-reporting-bot','urgent-access-decision'];
const shapes=[5,4,3,6,3,5,4];
const scenes=new Map(suffixes.map((s,i)=>[`slide-d3-01-0${i+1}-${s}`,i]));

/** Only this reviewed lesson and complete semantic shapes opt into native canvases. */
export function hasIamRolesProvisioningPresentation({lesson,slide}={}) {
 const i=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id===lessonId&&lesson?.domainId===3&&i!==undefined&&isPair(slide.title)&&
  Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&
  [b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&
  Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&
  Array.isArray(b[1].rows)&&b[1].rows.length===shapes[i]&&
  b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&
  Array.isArray(b[3].items)&&b[3].items.every(isPair);
}

export function renderIamRolesProvisioningPresentation(host,context) {
 const {slide,language='en'}=context,doc=host.ownerDocument,i=scenes.get(slide.id);
 const el=(tag,cls='',copy)=>element(doc,tag,cls,copy);
 const put=(tag,cls,copy)=>localize(el(tag,cls),copy,language);
 const root=el('section','d3p-scene');root.setAttribute('data-iam-provisioning-composition',suffixes[i]);
 const header=el('header','d3p-header');header.append(put('h3','d3p-title',slide.title),put('p','d3p-lead',slide.blocks[0].text));
 const main=el('div','d3p-main'),foot=put('p','d3p-foot',slide.blocks[4].text);root.append(header,main,foot);host.append(root);
 const node=(title,copy,cls='')=>{const n=el('section',`d3p-node ${cls}`);n.append(put('h4','d3p-term',title),put('p','d3p-copy',copy));return n;};
 const arrow=()=>{const a=el('span','d3p-arrow','→');a.setAttribute('aria-hidden','true');return a;};
 const flow=(...nodes)=>{const n=el('div','d3p-flow');nodes.forEach((x,j)=>{if(j)n.append(arrow());n.append(x);});return n;};
 const rows=slide.blocks[1].rows;
 if(i===0){
  main.append(flow(node(pair('Finance employee','พนักงาน Finance'),pair('Assigned work','หน้าที่ที่ได้รับมอบหมาย')),node(pair('Monthly report','รายงานรายเดือน'),pair('Accounting resource','ทรัพยากร Accounting')),node(pair('Read','อ่าน'),pair('Required permission','สิทธิ์ที่จำเป็น'))));
  const boundary=el('div','d3p-boundary');boundary.append(put('h4','d3p-term',pair('Outside this task','อยู่นอกงานนี้')),put('p','d3p-copy',pair('Change payroll · administer the network','แก้ Payroll · ดูแล Network')));main.append(boundary);
 }else if(i===1){
  const map=el('div','d3p-account-map'),person=node(pair('Mina','Mina'),pair('One person','บุคคลคนเดียว'),'d3p-person');
  const accounts=el('div','d3p-accounts');
  accounts.append(node(pair('Ordinary account','บัญชีทั่วไป'),pair('mina.siri · reporting','mina.siri · งานรายงาน')),node(pair('Administrative account','บัญชีดูแลระบบ'),pair('mina.siri.admin · approved maintenance','mina.siri.admin · งานดูแลที่อนุมัติ')));
  const link=el('div','d3p-link');link.append(put('p','d3p-note',pair('may use','อาจใช้')),arrow());map.append(person,link,accounts);main.append(map);
  const auth=el('div','d3p-auth');auth.append(put('h4','d3p-term',pair('Identifier ≠ authenticator','Identifier ≠ Authenticator')),put('p','d3p-copy',pair('Account name ≠ evidence of authenticator control','ชื่อบัญชี ≠ หลักฐานว่าควบคุม Authenticator ได้')));main.append(auth);
 }else if(i===2){
  main.append(flow(...rows.map(r=>node(r[0],r[1]))));
  main.append(put('p','d3p-emphasis',pair('Can configure access ≠ can approve any access','ตั้งค่าสิทธิ์ได้ ≠ อนุมัติสิทธิ์ใดก็ได้')));
 }else if(i===3){
  const grant=el('div','d3p-grant');grant.append(put('h4','d3p-term',pair('Approved onboarding scope','ขอบเขตรับเข้าที่อนุมัติ')),put('p','d3p-copy',pair('Correct person · Finance reporting · read only','ผู้ใช้งานถูกคน · รายงาน Finance · อ่านเท่านั้น')));main.append(grant);
  main.append(flow(node(pair('Account','บัญชี'),pair('Link the right identity','เชื่อมกับ Identity ที่ถูกต้อง')),node(pair('Role + rights','Role + สิทธิ์'),pair('Configure approved scope','ตั้งค่าตามที่อนุมัติ')),node(pair('Application','แอปพลิเคชัน'),pair('Enable report access','ให้เข้าถึงรายงาน')),node(pair('Authenticator','Authenticator'),pair('Bind safely','ผูกอย่างปลอดภัย'))));
 }else if(i===4){
  const table=el('table','d3p-check-table');table.append(put('caption','d3p-note',pair('Authored example · approved versus observed permissions','ตัวอย่างเพื่อการเรียน · สิทธิ์ที่อนุมัติเทียบผลตรวจจริง')));
  const head=el('thead'),tr=el('tr');for(const c of [pair('Action','รายการ'),pair('Approved','อนุมัติ'),pair('Observed','ผลจริง')]){const th=put('th','',c);th.setAttribute('scope','col');tr.append(th);}head.append(tr);table.append(head);
  const body=el('tbody');for(let r=0;r<3;r++){const row=el('tr',r===1?'d3p-mismatch':'');const th=put('th','',rows[r][0]);th.setAttribute('scope','row');row.append(th,put('td','',r===0?pair('Allow','ให้ใช้'):pair('Deny','ไม่ให้ใช้')),put('td','',r<2?pair('Allow','ใช้ได้'):pair('Deny','ใช้ไม่ได้')));body.append(row);}table.append(body);main.append(table);
  main.append(put('p','d3p-emphasis',pair('Payroll mismatch → correct the grant and verify again','Payroll ไม่ตรงขอบเขต → แก้สิทธิ์แล้วตรวจซ้ำ')));
 }else if(i===5){
  const owned=el('div','d3p-owned');owned.append(put('h4','d3p-term',pair('Accountable owner','ผู้รับผิดชอบ')),put('p','d3p-copy',pair('Finance automation team','ทีม Finance automation')));main.append(owned);
  main.append(flow(node(pair('Reporting bot','Reporting bot'),pair('Dedicated workload identity','Identity สำหรับระบบงานนี้')),node(pair('Accounting report','รายงาน Accounting'),pair('Read only the approved source','อ่านเฉพาะแหล่งที่อนุมัติ'))));
  main.append(put('p','d3p-note',pair('Protect workload authentication; record purpose and dependencies.','ปกป้องการยืนยันตัวตนของระบบงาน บันทึกวัตถุประสงค์และระบบที่พึ่งพา')));
 }else{
  const state=context.interactionState||{},abort=new AbortController(),layout=el('div','d3p-decision'),options=el('div','d3p-options'),feedback=el('section','d3p-feedback');
  options.setAttribute('role','group');options.setAttribute('aria-label','Scenario actions');feedback.setAttribute('data-iam-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;
   buttons.forEach((b,j)=>b.setAttribute('aria-pressed',String(j===selected)));
   feedback.setAttribute('data-outcome',selected<0?'idle':selected===2?'recommended':'reconsider');
   feedback.replaceChildren(put('h4','d3p-term',selected<0?pair('What should you do?','คุณควรทำอย่างไร?'):selected===2?pair('Authorized scope, then verification','อนุมัติขอบเขต แล้วตรวจผล'):pair('What is missing?','ยังขาดอะไร?')),put('p','d3p-copy',selected<0?pair('Choose an action. Check the task, approval status and your authority.','เลือกแนวทาง โดยพิจารณางาน สถานะการอนุมัติ และอำนาจของคุณ'):rows[selected][2]));
  };
  const buttons=rows.map((r,j)=>{const b=el('button','d3p-option');b.type='button';b.setAttribute('data-iam-choice',String(j));b.setAttribute('data-slide-interactive','');const letter=el('span','d3p-letter',String.fromCharCode(65+j));letter.setAttribute('aria-hidden','true');b.append(letter,put('span','d3p-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=j;paint();},{signal:abort.signal});options.append(b);return b;});
  const reset=el('button','d3p-reset','Reset');reset.type='button';reset.setAttribute('data-iam-reset','');reset.addEventListener('click',()=>{delete state.choice;paint();},{signal:abort.signal});
  const side=el('div','d3p-feedback-side');side.append(feedback,reset);layout.append(options,side);main.append(layout);
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }
 return {destroy(){}};
}
