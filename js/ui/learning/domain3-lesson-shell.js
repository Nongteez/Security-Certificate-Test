import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';
export {pair};
export function hasLogicalPresentation(context,lessonId,ids){
 const {lesson,slide}=context||{},b=slide?.blocks;
 return lesson?.id===lessonId&&lesson.domainId===3&&lesson.primaryObjectiveId==='3.2'&&ids.includes(slide?.id)&&isPair(slide.title)&&Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&[b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&Array.isArray(b[1].rows)&&b[1].rows.length>0&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&Array.isArray(b[3].items)&&b[3].items.every(isPair);
}
export function logicalScene(host,context){
 const {slide,language='en'}=context,doc=host.ownerDocument;
 const el=(tag,cls='',copy)=>element(doc,tag,cls,copy),put=(tag,cls,p)=>localize(el(tag,cls),p,language);
 const root=el('section','d3l-scene');root.setAttribute('data-d3-logical-composition',slide.id);
 const header=el('header','d3l-header'),main=el('div','d3l-main');header.append(put('h3','d3l-title',slide.title),put('p','d3l-lead',slide.blocks[0].text));root.append(header,main,put('p','d3l-foot',slide.blocks[4].text));host.append(root);
 const node=(title,copy,cls='')=>{const n=el('section',`d3l-node ${cls}`);n.append(put('h4','d3l-term',title),put('p','d3l-copy',copy));return n};
 const arrow=()=>{const a=el('span','d3l-arrow','→');a.setAttribute('aria-hidden','true');return a};
 const flow=nodes=>{const n=el('div','d3l-flow');nodes.forEach((x,i)=>{if(i)n.append(arrow());n.append(x)});return n};
 const table=(caption,heads,rows,cls='')=>{const t=el('table',`d3l-table ${cls}`);t.append(put('caption','d3l-note',caption));const h=el('thead'),r=el('tr');for(const p of heads){const c=put('th','',p);c.setAttribute('scope','col');r.append(c)}h.append(r);t.append(h);const body=el('tbody');for(const row of rows){const tr=el('tr');row.forEach((p,i)=>{const td=put(i?'td':'th','',p);if(!i)td.setAttribute('scope','row');tr.append(td)});body.append(tr)}t.append(body);return t};
 const emphasize=p=>main.append(put('p','d3l-emphasis',p));
 const scenario=()=>{
  const state=context.interactionState||{},abort=new AbortController(),rows=slide.blocks[1].rows,layout=el('div','d3l-decision'),options=el('div','d3l-options'),feedback=el('section','d3l-feedback');options.setAttribute('role','group');options.setAttribute('aria-label','Learning scenario choices');feedback.setAttribute('data-d3-logical-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const selected=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));feedback.setAttribute('data-outcome',selected<0?'idle':selected===2?'recommended':'reconsider');feedback.replaceChildren(put('h4','d3l-term',selected<0?pair('Choose an action and inspect the reason.','เลือกแนวทางแล้วพิจารณาเหตุผล'):selected===2?pair('Supported by this stated case','สอดคล้องกับเงื่อนไขของกรณีนี้'):pair('Reconsider this choice','พิจารณาทางเลือกนี้อีกครั้ง')),put('p','d3l-copy',selected<0?pair('Use the stated task, policy and evidence.','ใช้หน้าที่ นโยบาย และหลักฐานที่โจทย์ระบุ'):rows[selected][2]))};
  const buttons=rows.map((r,i)=>{const b=el('button','d3l-option');b.type='button';b.setAttribute('data-d3-logical-choice',String(i));b.setAttribute('data-slide-interactive','');const mark=el('span','d3l-letter',String.fromCharCode(65+i));mark.setAttribute('aria-hidden','true');b.append(mark,put('span','d3l-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=i;paint()},{signal:abort.signal});options.append(b);return b});
  const reset=el('button','d3l-reset','Reset');reset.type='button';reset.setAttribute('data-d3-logical-reset','');reset.addEventListener('click',()=>{delete state.choice;paint()},{signal:abort.signal});const side=el('div','d3l-feedback-side');side.append(feedback,reset);layout.append(options,side);main.append(layout);
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop)}};
 };
 return {el,put,main,node,flow,table,emphasize,scenario,rows:slide.blocks[1].rows};
}
