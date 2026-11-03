import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';
import {domain5Storyboard} from './domain5-storyboard.js';

export function hasDomain5Presentation({lesson,slide}={}) {
 const def=domain5Storyboard.find(x=>x.id===lesson?.id),scene=def?.slides.find(x=>x.id===slide?.id),b=slide?.blocks;
 return Boolean(def&&scene&&lesson.domainId===5&&lesson.primaryObjectiveId===def.objectiveId&&isPair(slide.title)&&isPair(slide.info)&&Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&[b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&Array.isArray(b[1].rows)&&b[1].rows.length>0&&b[1].rows.length<=4&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&Array.isArray(b[3].items)&&b[3].items.every(isPair)&&(scene.layout!=='scenario'||b[1].rows.length===4));
}

export function renderDomain5Presentation(host,context) {
 const {lesson,slide,language='en'}=context,definition=domain5Storyboard.find(x=>x.id===lesson.id),layout=definition.slides.find(x=>x.id===slide.id).layout,doc=host.ownerDocument;
 const el=(tag,cls='',text)=>element(doc,tag,cls,text),put=(tag,cls,text)=>localize(el(tag,cls),text,language),rows=slide.blocks[1].rows;
 const root=el('section',`d5-scene d5-layout-${layout}`),header=el('header','d5-header'),main=el('div','d5-main');
 root.setAttribute('data-d5-composition',slide.id);
 header.append(put('h3','d5-title',slide.title),put('p','d5-lead',slide.blocks[0].text));root.append(header,main,put('p','d5-foot',slide.blocks[4].text));host.append(root);
 if(layout==='scenario')return scenario();
 if(layout==='mapping') {
  const table=el('table','d5-table');table.append(put('caption','d5-caption',slide.blocks[1].caption));const head=el('thead'),tr=el('tr');
  for(const p of slide.blocks[1].columns){const th=put('th','',p);th.setAttribute('scope','col');tr.append(th)}head.append(tr);table.append(head);const body=el('tbody');
  for(const row of rows){const tr=el('tr');row.forEach((p,i)=>{const cell=put(i?'td':'th','',p);if(!i)cell.setAttribute('scope','row');tr.append(cell)});body.append(tr)}table.append(body);main.append(table);
 } else {
  const path=layout==='path',group=el(path?'ol':'div',path?'d5-path':'d5-compare');
  rows.forEach((row,i)=>{const node=el(path?'li':'section',path?'d5-stop':'d5-contrast');node.append(put('h4','d5-term',row[0]),put('p','d5-copy',row[1]),put('p','d5-note',row[2]));group.append(node);if(path&&i<rows.length-1){const edge=el('li','d5-edge','→');edge.setAttribute('aria-hidden','true');group.append(edge)}});main.append(group);
 }
 return {destroy(){}};
 function scenario(){
  const state=context.interactionState||{},abort=new AbortController(),options=el('div','d5-options'),feedback=el('section','d5-feedback'),side=el('div','d5-feedback-side'),wrap=el('div','d5-decision');
  options.setAttribute('role','group');options.setAttribute('aria-label','Learning scenario choices');feedback.setAttribute('data-d5-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const n=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===n)));feedback.setAttribute('data-outcome',n<0?'idle':n===definition.best?'recommended':'reconsider');feedback.replaceChildren(put('h4','d5-term',n<0?pair('Choose an action.','เลือกแนวทางปฏิบัติ'):n===definition.best?pair('Supported by this case','สอดคล้องกับกรณีนี้'):pair('Reconsider the reasoning','ทบทวนเหตุผลอีกครั้ง')),put('p','d5-copy',n<0?pair('Use the facts, role and authority stated in the case.','ใช้ข้อเท็จจริง หน้าที่ และอำนาจที่โจทย์ระบุ'):rows[n][2]))};
  const buttons=rows.map((r,i)=>{const b=el('button','d5-option');b.type='button';b.setAttribute('data-d5-choice',String(i));b.setAttribute('data-slide-interactive','');const letter=el('span','d5-letter',String.fromCharCode(65+i));letter.setAttribute('aria-hidden','true');b.append(letter,put('span','d5-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=i;paint()},{signal:abort.signal});options.append(b);return b});
  const reset=el('button','d5-reset','Reset');reset.type='button';reset.setAttribute('data-d5-reset','');reset.addEventListener('click',()=>{delete state.choice;paint()},{signal:abort.signal});side.append(feedback,reset);wrap.append(options,side);main.append(wrap);
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop)}};
 }
}
