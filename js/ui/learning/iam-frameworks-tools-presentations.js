import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';
const id='lesson-d3-03-iam-frameworks-tools';
const suffixes=['guidance-is-not-software','directory-records','idp-to-application','governance-and-enforcement','sso-with-access-boundaries','tool-responsibility-decision'];
const shapes=[2,10,4,4,4,4],scenes=new Map(suffixes.map((s,i)=>[`slide-d3-03-0${i+1}-${s}`,i]));
export function hasIamFrameworksToolsPresentation({lesson,slide}={}){
 const i=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id===id&&lesson?.domainId===3&&i!==undefined&&isPair(slide.title)&&Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&
  [b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&Array.isArray(b[1].rows)&&b[1].rows.length===shapes[i]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&Array.isArray(b[3].items)&&b[3].items.every(isPair);
}
export function renderIamFrameworksToolsPresentation(host,context){
 const {slide,language='en'}=context,doc=host.ownerDocument,i=scenes.get(slide.id),rows=slide.blocks[1].rows;
 const el=(tag,cls='',copy)=>element(doc,tag,cls,copy),put=(tag,cls,p)=>localize(el(tag,cls),p,language);
 const root=el('section','d3f-scene');root.setAttribute('data-iam-frameworks-composition',suffixes[i]);
 const header=el('header','d3f-header');header.append(put('h3','d3f-title',slide.title),put('p','d3f-lead',slide.blocks[0].text));
 const main=el('div','d3f-main');root.append(header,main,put('p','d3f-foot',slide.blocks[4].text));host.append(root);
 const node=(title,copy,cls='')=>{const n=el('section',`d3f-node ${cls}`);n.append(put('h4','d3f-term',title),put('p','d3f-copy',copy));return n;};
 const arrow=()=>{const a=el('span','d3f-arrow','→');a.setAttribute('aria-hidden','true');return a;};
 const flow=nodes=>{const n=el('div','d3f-flow');nodes.forEach((x,j)=>{if(j)n.append(arrow());n.append(x)});return n;};
 if(i===0){
  const comparison=el('div','d3f-guidance');for(const row of rows){const lane=el('section','d3f-guidance-row');lane.append(put('h4','d3f-term',row[0]),put('p','d3f-copy',row[1]));comparison.append(lane)}main.append(comparison);
  main.append(put('p','d3f-emphasis',pair('Define the outcome → configure suitable tools → verify the result.','กำหนดผลลัพธ์ → ตั้งค่าเครื่องมือที่เหมาะสม → ตรวจผลจริง')));
 }else if(i===1){
  const record=el('section','d3f-record');record.append(put('h4','d3f-term',pair('Directory record','ระเบียน Directory')));
  const dl=el('dl','d3f-record-fields');for(const [k,v] of [[pair('Account','บัญชี'),pair('mina.siri','mina.siri')],[pair('Group','กลุ่ม'),pair('ReportReaders','ReportReaders')]])dl.append(put('dt','d3f-copy',k),put('dd','d3f-copy',v));record.append(dl);
  main.append(flow([record,node(pair('Application lookup','แอปค้นข้อมูล'),pair('Read the linked account/group data','อ่านข้อมูลบัญชี/กลุ่มที่เชื่อมกัน')),node(pair('Apply the app rule','ใช้กฎของแอป'),pair('Does this request permit report reading?','คำขอนี้ได้รับอนุญาตให้อ่านรายงานหรือไม่?'))]));
  main.append(put('p','d3f-emphasis',pair('Account data ≠ proof of the current sign-in.','ข้อมูลบัญชี ≠ หลักฐานการลงชื่อเข้าใช้ครั้งนี้')));
 }else if(i===2){
  main.append(flow(rows.map(r=>node(r[0],r[1]))));
  main.append(put('p','d3f-emphasis',pair('An authenticated session still has an access boundary.','Session ที่ยืนยันตัวตนแล้ว ยังมีขอบเขตสิทธิ์')));
 }else if(i===3){
  const map=el('div','d3f-governance-map');map.append(flow([node(pair('Accountable decision','ตัดสินโดยผู้รับผิดชอบ'),pair('Approve report read','อนุมัติให้อ่านรายงาน')),node(pair('Configured rights','สิทธิ์ที่ตั้งค่า'),pair('Apply the approved grant','นำสิทธิ์ที่อนุมัติไปใช้'))]));
  const runtime=el('div','d3f-runtime');runtime.append(put('h4','d3f-term',pair('At the application','เมื่อขอใช้แอป')),put('p','d3f-copy',pair('Read report: allowed','อ่านรายงาน: อนุญาต')),put('p','d3f-copy',pair('Edit report: denied','แก้รายงาน: ปฏิเสธ')));map.append(runtime);main.append(map);
  main.append(put('p','d3f-emphasis',pair('Connect the decision, applied change and observed result.','เชื่อมผลตัดสิน การปรับจริง และผลที่ตรวจพบ')));
 }else if(i===4){
  main.append(node(pair('Mina signs in at the IdP','Mina ลงชื่อเข้าใช้ที่ IdP'),pair('Separate assertions, each intended for its relying app','Assertion แยกกัน แต่ละอันส่งถึงแอปปลายทางที่กำหนด'),'d3f-sso-source'));
  const branches=el('div','d3f-sso-branches');for(const r of [rows[1],rows[2]])branches.append(node(r[0],r[1]));main.append(branches);
  main.append(put('p','d3f-emphasis',pair('Each app validates the assertion and applies its own rules.','แต่ละแอปตรวจ Assertion แล้วใช้กฎสิทธิ์ของตน')));
 }else{
  const state=context.interactionState||{},abort=new AbortController(),layout=el('div','d3f-decision'),options=el('div','d3f-options'),feedback=el('section','d3f-feedback');options.setAttribute('role','group');options.setAttribute('aria-label','Identity tool responsibility choices');feedback.setAttribute('data-iam-frameworks-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,j)=>b.setAttribute('aria-pressed',String(j===selected)));feedback.setAttribute('data-outcome',selected<0?'idle':selected===2?'recommended':'reconsider');feedback.replaceChildren(put('h4','d3f-term',selected<0?pair('What supplies this evidence?','หน้าที่ใดให้หลักฐานนี้?'):selected===2?pair('Use and validate the IdP assertion','ใช้และตรวจ Assertion จาก IdP'):pair('Match the evidence to its purpose','เทียบหลักฐานกับหน้าที่')),put('p','d3f-copy',selected<0?pair('The need is authentication information for this federated sign-in.','สิ่งที่ต้องใช้คือข้อมูล Authentication สำหรับการลงชื่อแบบ Federation ครั้งนี้'):rows[selected][2]));};
  const buttons=rows.map((r,j)=>{const b=el('button','d3f-option');b.type='button';b.setAttribute('data-iam-frameworks-choice',String(j));b.setAttribute('data-slide-interactive','');const mark=el('span','d3f-letter',String.fromCharCode(65+j));mark.setAttribute('aria-hidden','true');b.append(mark,put('span','d3f-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=j;paint()},{signal:abort.signal});options.append(b);return b;});
  const reset=el('button','d3f-reset','Reset');reset.type='button';reset.setAttribute('data-iam-frameworks-reset','');reset.addEventListener('click',()=>{delete state.choice;paint()},{signal:abort.signal});const side=el('div','d3f-feedback-side');side.append(feedback,reset);layout.append(options,side);main.append(layout);
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop)}};
 }
 return {destroy(){}};
}
