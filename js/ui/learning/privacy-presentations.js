import {element, localize} from './dom.js';

const compositions = new Map([
 ['slide-01-secure-is-not-enough', ['boundaries',2]],
 ['slide-02-recognize-personal-data', ['identity',3]],
 ['slide-03-roles-and-responsibility', ['roles',3]],
 ['slide-04-purpose-and-minimization', ['purpose',3]],
 ['slide-05-inventory-and-copies', ['inventory',3]],
 ['slide-06-retention-with-a-reason', ['retention',3]],
 ['slide-07-conditional-erasure', ['erasure',3]],
 ['slide-08-evaluate-a-new-use', ['case',3]]
]);

/** Content-specific adapters decline unknown structures so the full semantic fallback remains usable. */
export function hasPrivacyPresentation({lesson,slide}) {
 const definition=compositions.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-04-privacy' && !!definition && b?.length===4 &&
  [0,2,3].every(i=>b[i]?.kind==='text') && b[1]?.kind==='table' &&
  b[1].rows?.length===definition[1] && b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}

// Original fixed SVG artwork. Educational strings always enter through text nodes.
function illustration(doc,type) {
 const drawings={
  person:'<circle cx="80" cy="35" r="21"/><path d="M32 130v-29c0-48 96-48 96 0v29"/>',
  lock:'<rect x="29" y="61" width="102" height="73" rx="8"/><path d="M47 61V40a33 33 0 0166 0v21M80 86v23"/>',
  record:'<path d="M30 9h79l23 25v105H30zM109 9v27h23M48 60h65M48 81h48M48 103h58"/>',
  shop:'<path d="M20 61V38l15-22h90l15 22v23M20 40h120M30 62v72h100V62M44 85h29v49M90 81h25v25M80 16v24M49 16l-6 24M111 16l6 24"/>',
  service:'<rect x="20" y="16" width="120" height="36" rx="6"/><rect x="20" y="61" width="120" height="36" rx="6"/><path d="M80 97v28M43 125h74M38 34h4M38 79h4M61 34h59M61 79h59"/>',
  clock:'<circle cx="80" cy="74" r="54"/><path d="M80 36v42l28 16M27 18l15-10M119 8l15 10"/>',
  review:'<path d="M22 10h87v114H22zM39 37h50M39 57h40M39 78h28"/><circle cx="112" cy="94" r="27"/><path d="m130 114 20 20M98 94l10 10 20-22"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 150');svg.setAttribute('class','pv-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${drawings[type]||drawings.record}</g>`;return svg;
}

export function renderPrivacyPresentation(host,context) {
 const {slide}=context,kind=compositions.get(slide.id)[0],doc=host.ownerDocument,language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const node=(tag,cls,value)=>{const n=element(doc,tag,cls);if(value)localize(n,value,language);return n;};
 const root=element(doc,'section',`pv-scene pv-${kind}`);root.setAttribute('lang',language);root.setAttribute('data-privacy-composition',kind);
 const header=element(doc,'header','pv-header');header.append(element(doc,'p','pv-kicker',`PRIVACY / ${String([...compositions.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),node('h3','pv-title',slide.title),node('p','pv-lead',slide.blocks[0].text));
 const main=element(doc,'div','pv-main');root.append(header,main,node('footer','pv-footer',slide.blocks[3].text));host.append(root);
 const item=(row,cls,icon)=>{const el=element(doc,'section',cls);if(icon)el.append(illustration(doc,icon));el.append(node('h4','pv-term',row[0]),node('p','pv-copy',row[1]),node('p','pv-note',row[2]));return el;};
 if(kind==='boundaries') {
  const gate=element(doc,'div','pv-gate');gate.append(illustration(doc,'lock'),node('p','pv-gate-label',{en:'Same protected database',th:'ฐานข้อมูลที่ปกป้องไว้'}));
  const questions=element(doc,'div','pv-questions');rows.forEach((r,i)=>questions.append(item(r,`pv-boundary pv-boundary-${i}`)));main.append(gate,questions);
 } else if(kind==='identity') {
  const link=element(doc,'div','pv-link');link.append(illustration(doc,'person'),node('p','pv-link-label',{en:'One identifiable person',th:'บุคคลที่ระบุตัวได้'}));main.append(link);
  const examples=element(doc,'div','pv-identifiers');rows.forEach((r,i)=>{const el=item(r,'pv-identifier');el.prepend(element(doc,'span','pv-index',String(i+1).padStart(2,'0')));examples.append(el);});main.append(examples);
 } else if(kind==='roles') {
  rows.forEach((r,i)=>{const el=item(r,`pv-role pv-role-${i}`,['person','shop','service'][i]);if(i<2)el.append(element(doc,'span','pv-arrow','→'));main.append(el);});
 } else if(kind==='purpose') {
  const form=element(doc,'div','pv-form');rows.forEach((r,i)=>{const line=item(r,`pv-field ${i===2?'pv-unneeded':'pv-needed'}`);line.prepend(element(doc,'span','pv-mark',i===2?'−':'+'));form.append(line);});main.append(form);
 } else if(kind==='inventory') {
  const hub=element(doc,'div','pv-hub');hub.append(illustration(doc,'review'),node('p','pv-hub-label',{en:'Data inventory',th:'Data inventory'}));
  const copies=element(doc,'div','pv-copies');rows.forEach((r,i)=>copies.append(item(r,'pv-copy-location',i===2?'service':'record')));main.append(hub,copies);
 } else if(kind==='retention') {
  rows.forEach((r,i)=>{const step=item(r,'pv-time-step',i===0?'clock':i===1?'review':'record');step.prepend(element(doc,'span','pv-step',String(i+1)));main.append(step);});
 } else if(kind==='erasure') {
  const assess=item(rows[0],'pv-assess','review'),branches=element(doc,'div','pv-branches');branches.append(item(rows[1],'pv-outcome pv-erase'),item(rows[2],'pv-outcome pv-retain'));main.append(assess,branches);
 } else if(kind==='case') {
  const flow=element(doc,'div','pv-reuse');flow.append(item(rows[0],'pv-ticket','record'),element(doc,'span','pv-reuse-arrow','→'),item(rows[1],'pv-training','service'));main.append(flow);
  const state=context.interactionState||{},abort=new AbortController(),button=element(doc,'button','pv-reason-button','Show reasoning');button.type='button';button.setAttribute('data-action','privacy-reason');
  const answer=item(rows[2],'pv-reason');answer.id='privacy-case-reason';answer.setAttribute('data-privacy-reason','');answer.setAttribute('role','region');answer.setAttribute('aria-label','Scenario reasoning');button.setAttribute('aria-controls',answer.id);
  const paint=()=>{answer.hidden=!state.reason;button.setAttribute('aria-expanded',String(!!state.reason));button.textContent=state.reason?'Hide reasoning':'Show reasoning';};
  button.addEventListener('click',()=>{state.reason=!state.reason;paint();},{signal:abort.signal});const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(button,answer);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }
 return {destroy(){}};
}
