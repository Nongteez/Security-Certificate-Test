import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-govern-security',['direction',3]],['slide-02-govern-and-manage',['roles',2]],
 ['slide-03-sources-of-obligations',['obligations',2]],['slide-04-establish-applicability',['scope',3]],
 ['slide-05-bound-the-legal-examples',['examples',2]],['slide-06-payment-card-requirements',['payment',3]],
 ['slide-07-compliance-and-security',['assurance',2]],['slide-08-ai-governance-intake',['intake',3]],
 ['slide-09-trace-requirements',['trace',3]]
]);
export function hasGovernancePresentation({lesson,slide}) {
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-08-governance' && !!scene && b?.length===4 &&
 [0,2,3].every(i=>b[i]?.kind==='text') && b[1]?.kind==='table' &&
 b[1].rows?.length===scene[1] && b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type) {
 const shapes={
  compass:'<circle cx="80" cy="80" r="59"/><path d="m101 45-12 44-34 26 12-44zM80 10v13M80 137v13M10 80h13M137 80h13"/>',
  eye:'<path d="M10 80q70-88 140 0-70 88-140 0z"/><circle cx="80" cy="80" r="24"/><path d="M80 66v28M66 80h28"/>',
  owner:'<circle cx="64" cy="41" r="23"/><path d="M16 132v-16a48 48 0 0 1 96 0v16M105 72h38v44h-38zM113 94l8 8 15-20"/>',
  tools:'<path d="M26 19h34v60H26zM31 79v61h24V79M106 17l21 18-14 29 24 63-19 10-25-65-27-13 9-28 7 23 20 1 13-17z"/>',
  law:'<path d="M18 48 80 15l62 33zM27 59v62M58 59v62M102 59v62M133 59v62M16 132h128M10 144h140"/>',
  agreement:'<path d="M29 14h82l24 24v105H29zM111 14v25h24M47 62h69M47 84h50M48 119l16-13 14 7 18-18 21 17"/>',
  map:'<path d="m16 36 43-16 42 17 43-16v104l-43 16-42-17-43 17zM59 20v104M101 37v104"/><circle cx="101" cy="70" r="13"/>',
  data:'<ellipse cx="80" cy="30" rx="56" ry="18"/><path d="M24 30v94c0 25 112 25 112 0V30M24 60c0 25 112 25 112 0M24 92c0 25 112 25 112 0"/>',
  health:'<path d="M29 30h102v106H29zM57 16h46v27H57zM67 63h26v19h19v26H93v19H67v-19H48V82h19z"/>',
  card:'<rect x="13" y="31" width="134" height="99" rx="8"/><path d="M13 55h134M34 91h34M34 110h74"/>',
  review:'<path d="M28 13h83l24 24v107H28zM111 13v25h24M46 61h66M46 83h44"/><circle cx="111" cy="113" r="22"/><path d="m127 129 20 20M101 112l8 8 16-18"/>',
  shield:'<path d="m80 12 57 22v42c0 35-24 57-57 72-33-15-57-37-57-72V34zM48 78l22 22 44-47"/>',
  ai:'<rect x="34" y="34" width="92" height="92" rx="9"/><path d="M57 58h46v45H57zM53 13v21M80 13v21M107 13v21M53 126v21M80 126v21M107 126v21M13 53h21M13 80h21M13 107h21M126 53h21M126 80h21M126 107h21"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','gv-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Original fixed SVG only; content strings are rendered as text nodes.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.review}</g>`;return svg;
}
export function renderGovernancePresentation(host,context) {
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`gv-scene gv-${kind}`);
 root.setAttribute('data-governance-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','gv-header');header.append(element(doc,'p','gv-kicker',`GOVERNANCE / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','gv-title',slide.title),put('p','gv-lead',slide.blocks[0].text));
 const main=element(doc,'div','gv-main');root.append(header,main,put('footer','gv-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','gv-term',row[0]),put('p','gv-copy',row[1]),put('p','gv-note',row[2]));return n;};
 if(kind==='direction')rows.forEach((r,i)=>{let n=entry(r,'gv-pillar',['compass','eye','owner'][i]);n.prepend(element(doc,'span','gv-index',String(i+1).padStart(2,'0')));main.append(n);});
 else if(kind==='roles'){main.append(entry(rows[0],'gv-govern','compass'));const loop=element(doc,'div','gv-role-loop');loop.append(put('p','gv-down',{en:'Direction →',th:'ทิศทาง →'}),put('p','gv-up',{en:'← Evidence',th:'← หลักฐาน'}));main.append(loop,entry(rows[1],'gv-manage','tools'));}
 else if(kind==='obligations')rows.forEach((r,i)=>main.append(entry(r,`gv-obligation gv-obligation-${i}`,i?'agreement':'law')));
 else if(kind==='scope')rows.forEach((r,i)=>{let n=entry(r,'gv-scope-filter',['map','owner','data'][i]);n.prepend(element(doc,'span','gv-index',String(i+1)));main.append(n);});
 else if(kind==='examples')rows.forEach((r,i)=>{let n=entry(r,`gv-legal-example gv-example-${i}`,i?'health':'data');n.prepend(put('p','gv-example-label',i?{en:'Defined US entity roles',th:'บทบาทองค์กรที่กฎหมายสหรัฐฯ กำหนด'}:{en:'Defined processing scope',th:'ขอบเขตการประมวลผลที่กำหนด'}));main.append(n);});
 else if(kind==='payment')rows.forEach((r,i)=>{let n=entry(r,'gv-payment-step',['card','agreement','owner'][i]);n.prepend(element(doc,'span','gv-index',String(i+1).padStart(2,'0')));if(i<2)n.append(element(doc,'span','gv-arrow','→'));main.append(n);});
 else if(kind==='assurance'){main.append(entry(rows[0],'gv-compliance','review'),element(doc,'div','gv-not-equal','≠'),entry(rows[1],'gv-security','shield'));}
 else if(kind==='intake'){
  const state=context.interactionState||{},abort=new AbortController(),feedback=element(doc,'section','gv-feedback'),choices=element(doc,'div','gv-choices');feedback.setAttribute('data-governance-feedback','');feedback.setAttribute('aria-live','polite');
  const buttons=['Approve the demo','Map facts and responsibilities','Exempt AI from review'].map((label,i)=>{const b=element(doc,'button','gv-choice',label);b.type='button';b.setAttribute('data-governance-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<3?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(n===i)));feedback.replaceChildren(art(doc,i===1?'review':'ai'));if(i<0)feedback.append(put('h4','gv-term',{en:'What needs review first?',th:'ต้องทบทวนอะไรก่อน?'}),put('p','gv-copy',{en:'Choose an action to inspect its reasoning.',th:'เลือกการกระทำเพื่อดูเหตุผลประกอบ'}));else feedback.append(put('h4','gv-term',rows[i][0]),put('p','gv-copy',rows[i][1]),put('p','gv-note',rows[i][2]));feedback.classList.toggle('is-recommended',i===1);};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='trace'){const spine=element(doc,'div','gv-record-spine');spine.append(art(doc,'review'),put('h4','gv-term',{en:'Requirement record',th:'บันทึกข้อกำหนด'}));const items=element(doc,'div','gv-record-items');rows.forEach((r,i)=>{const n=entry(r,'gv-record-item');n.prepend(element(doc,'span','gv-index',String(i+1)));items.append(n);});main.append(spine,items);}
 return {destroy(){}};
}
