import {element,localize,pair} from './dom.js';
import {isPair} from '../../core/learning-schema.js';
import {domain4Storyboard} from './domain4-storyboard.js';
export function hasDomain4Presentation({lesson,slide}={}){
 const def=domain4Storyboard.find(x=>x.id===lesson?.id),b=slide?.blocks,shape=def?.slides.find(x=>x.id===slide?.id);
 return Boolean(def&&shape&&lesson.domainId===4&&lesson.primaryObjectiveId===def.objectiveId&&isPair(slide.title)&&Array.isArray(b)&&b.length===5&&b.map(x=>x?.kind).join(',')==='text,table,text,list,text'&&[b[0].text,b[2].text,b[4].text,b[1].caption].every(isPair)&&Array.isArray(b[1].columns)&&b[1].columns.length===3&&b[1].columns.every(isPair)&&Array.isArray(b[1].rows)&&b[1].rows.length>0&&b[1].rows.length<=4&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3&&r.every(isPair))&&Array.isArray(b[3].items)&&b[3].items.every(isPair)&&(shape.layout!=='scenario'||b[1].rows.length===4));
}
export function renderDomain4Presentation(host,context){
 const {lesson,slide,language='en'}=context,definition=domain4Storyboard.find(x=>x.id===lesson.id),layout=definition.slides.find(x=>x.id===slide.id).layout,doc=host.ownerDocument;
 const el=(tag,cls='',copy)=>element(doc,tag,cls,copy),put=(tag,cls,copy)=>localize(el(tag,cls),copy,language);
 const root=el('section',`d4-scene d4-layout-${layout}`),head=el('header','d4-header'),main=el('div','d4-main'),rows=slide.blocks[1].rows;
 root.setAttribute('data-d4-composition',slide.id);head.append(put('h3','d4-title',slide.title),put('p','d4-lead',slide.blocks[0].text));root.append(head,main,put('p','d4-foot',slide.blocks[4].text));host.append(root);
 if(layout==='scenario')return scenario();
 if(['mapping','rules'].includes(layout)){
  const t=el('table','d4-table');t.append(put('caption','d4-caption',slide.blocks[1].caption));const h=el('thead'),tr=el('tr');for(const p of slide.blocks[1].columns){const c=put('th','',p);c.setAttribute('scope','col');tr.append(c)}h.append(tr);t.append(h);const body=el('tbody');for(const r of rows){const tr=el('tr');r.forEach((p,i)=>{const c=put(i?'td':'th','',p);if(!i)c.setAttribute('scope','row');tr.append(c)});body.append(tr)}t.append(body);main.append(t);
 }else if(layout==='envelope'){
  const outer=el('div','d4-envelopes');let parent=outer;
  for(const r of rows){const layer=el('section','d4-envelope-box'),label=el('div','d4-envelope-label');label.append(put('h4','d4-term',r[0]),put('p','d4-copy',r[1]),put('p','d4-note',r[2]));layer.append(label);parent.append(layer);parent=layer}main.append(outer);
 }else if(['stack','layers'].includes(layout)){
  const list=el('ol','d4-stack');for(const [i,r] of rows.entries()){const li=el('li','d4-layer');li.append(put('h4','d4-term',r[0]),put('p','d4-copy',r[1]),put('p','d4-note',r[2]));list.append(li)}main.append(list);
 }else if(layout==='compare'){
  const box=el('div','d4-compare');for(const r of rows){const col=el('section','d4-contrast');col.append(put('h4','d4-term',r[0]),put('p','d4-copy',r[1]),put('p','d4-note',r[2]));box.append(col)}main.append(box);
 }else if(layout==='tunnel'){
  const path=el('div','d4-tunnel-route'),protectedLeg=el('div','d4-tunnel-leg'),group=el('div','d4-tunnel-pair');
  protectedLeg.append(put('p','d4-note',pair('VPN protection: device ↔ gateway','VPN ป้องกันช่วงอุปกรณ์ ↔ Gateway')));
  rows.forEach((r,i)=>{const node=el('section','d4-stop');node.append(put('h4','d4-term',r[0]),put('p','d4-copy',r[1]),put('p','d4-note',r[2]));if(i<2){if(i){const arrow=el('span','d4-edge','↔');arrow.setAttribute('aria-hidden','true');group.append(arrow)}group.append(node)}else{const arrow=el('span','d4-edge','→');arrow.setAttribute('aria-hidden','true');path.append(arrow,node)}});
  protectedLeg.append(group);path.prepend(protectedLeg);main.append(path);
 }else{
  const blocked=['slide-d4-05-01-blast-radius','slide-d4-05-04-vlan-routing'].includes(slide.id);
  const path=el('ol','d4-path');for(const [i,r] of rows.entries()){const li=el('li','d4-stop');li.append(put('h4','d4-term',r[0]),put('p','d4-copy',r[1]),put('p','d4-note',r[2]));path.append(li);if(i<rows.length-1){const mark=el('li',`d4-edge${blocked&&i===1?' d4-denied':''}`,blocked&&i===1?'×':layout==='boundary'?'⇢':'→');mark.setAttribute('aria-hidden','true');path.append(mark)}}main.append(path);
  const denied={
   'slide-d4-05-03-dmz-path':pair('DENY: Internet → internal database','DENY: Internet → Database ภายใน'),
   'slide-d4-05-05-workload-policy':pair('DENY shortcut: web → database','DENY ทางลัด: Web → Database'),
   'slide-d4-05-06-ai-environment-boundary':pair('DENY: unrestricted development → sensitive production','DENY: Development → Production อ่อนไหวแบบไม่จำกัด')
  }[slide.id];if(denied)main.append(put('p','d4-policy-deny',denied));
 }
 return {destroy(){}};
 function scenario(){
  const state=context.interactionState||{},abort=new AbortController(),options=el('div','d4-options'),feedback=el('section','d4-feedback'),side=el('div','d4-feedback-side'),wrap=el('div','d4-decision');options.setAttribute('role','group');options.setAttribute('aria-label','Learning scenario choices');feedback.setAttribute('data-d4-feedback','');feedback.setAttribute('aria-live','polite');feedback.setAttribute('aria-atomic','true');
  const paint=()=>{const n=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===n)));feedback.setAttribute('data-outcome',n<0?'idle':n===definition.best?'recommended':'reconsider');feedback.replaceChildren(put('h4','d4-term',n<0?pair('Choose an action.','เลือกแนวทางปฏิบัติ'):n===definition.best?pair('Supported by this case','สอดคล้องกับกรณีนี้'):pair('Reconsider the boundary','ทบทวนขอบเขตอีกครั้ง')),put('p','d4-copy',n<0?pair('Use the stated requirement and inspect the reason.','ใช้ความต้องการที่โจทย์ระบุแล้วพิจารณาเหตุผล'):rows[n][2]))};
  const buttons=rows.map((r,i)=>{const b=el('button','d4-option');b.type='button';b.setAttribute('data-d4-choice',String(i));b.setAttribute('data-slide-interactive','');const letter=el('span','d4-letter',String.fromCharCode(65+i));letter.setAttribute('aria-hidden','true');b.append(letter,put('span','d4-option-copy',r[1]));b.addEventListener('click',()=>{state.choice=i;paint()},{signal:abort.signal});options.append(b);return b});
  const reset=el('button','d4-reset','Reset');reset.type='button';reset.setAttribute('data-d4-reset','');reset.addEventListener('click',()=>{delete state.choice;paint()},{signal:abort.signal});side.append(feedback,reset);wrap.append(options,side);main.append(wrap);const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop)}};
 }
}
