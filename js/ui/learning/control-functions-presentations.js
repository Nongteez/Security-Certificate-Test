import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-category-and-function',['lenses',2]],['slide-02-preventive',['prevent',3]],
 ['slide-03-detective',['detect',3]],['slide-04-corrective-and-recovery',['restore',2]],
 ['slide-05-deterrent',['deter',2]],['slide-06-directive',['direct',2]],
 ['slide-07-compensating',['compensate',3]],['slide-08-context-changes-function',['context',3]],
 ['slide-09-reason-from-effects',['reason',3]]
]);
export function hasControlFunctionsPresentation({lesson,slide}){
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-11-control-functions'&&!!scene&&b?.length===4&&[0,2,3].every(i=>b[i]?.kind==='text')&&b[1]?.kind==='table'&&b[1].rows?.length===scene[1]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type){
 const shapes={
 layers:'<rect x="20" y="20" width="84" height="84" rx="8"/><path d="M40 124h84V40M60 144h84V60M40 45h44M40 65h34M40 85h44"/>',
 effect:'<circle cx="80" cy="80" r="58"/><path d="M80 22v58l41 30M18 80h20M122 80h20M80 122v20"/>',
 gate:'<path d="M28 145V18h104v127M28 50h104M50 72l60 60M110 72l-60 60M12 145h136"/>',
 request:'<circle cx="55" cy="45" r="22"/><path d="M13 136v-26a42 42 0 0 1 84 0v26M101 62h42M125 46l18 16-18 16"/>',
 shield:'<path d="m80 12 57 22v44c0 32-23 55-57 70-34-15-57-38-57-70V34zM50 80l21 21 40-46"/>',
 eye:'<path d="M10 80q70-85 140 0-70 85-140 0z"/><circle cx="80" cy="80" r="24"/><path d="M80 67v26M67 80h26"/>',
 alert:'<path d="M80 17 149 139H11zM80 55v43"/><circle cx="80" cy="119" r="2"/>',
 repair:'<path d="m99 16 24 17-15 28 31 65-22 13-32-66-27-8 11-32 9 23 23-2 11-18zM23 30h22v107H23zM14 30h40v30H14"/>',
 restore:'<path d="M25 58a60 60 0 1 1-2 50M25 58V20M25 58h38M54 84l19 20 35-40"/>',
 camera:'<path d="M25 45h79v67H25zM104 67l35-19v62l-35-19M41 112v29M16 141h55M39 28l9-13M68 28V10M96 28l10-13"/><circle cx="64" cy="77" r="18"/>',
 guide:'<path d="M24 15h90l23 24v106H24zM114 15v25h23M42 62h62M42 84h40M42 108h62M42 131h42"/>',
 alternative:'<path d="M18 80h30M48 80l31-42h61M48 80l31 42h61M124 22l18 16-18 16M124 106l18 16-18 16M89 26l26 25M115 26 89 51"/>',
 evidence:'<path d="M25 16h90l23 23v105H25zM115 16v24h23M43 62h62M43 85h42"/><circle cx="108" cy="113" r="23"/><path d="m125 130 23 22M98 113l8 8 15-18"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','fn-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Fixed original SVG only. Teaching content is inserted through text nodes.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.evidence}</g>`;return svg;
}
export function renderControlFunctionsPresentation(host,context){
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`fn-scene fn-${kind}`);root.setAttribute('data-control-functions-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','fn-header');header.append(element(doc,'p','fn-kicker',`CONTROL FUNCTIONS / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','fn-title',slide.title),put('p','fn-lead',slide.blocks[0].text));const main=element(doc,'div','fn-main');root.append(header,main,put('footer','fn-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','fn-term',row[0]),put('p','fn-copy',row[1]),put('p','fn-note',row[2]));return n;};
 if(kind==='lenses'){main.append(entry(rows[0],'fn-category','layers'),element(doc,'div','fn-plus','+'),entry(rows[1],'fn-function','effect'));}
 else if(kind==='prevent')rows.forEach((r,i)=>{const n=entry(r,`fn-prevent-step fn-prevent-${i}`,['request','gate','shield'][i]);n.prepend(element(doc,'span','fn-number',String(i+1)));if(i<2)n.append(element(doc,'span','fn-arrow','→'));main.append(n);});
 else if(kind==='detect')rows.forEach((r,i)=>{const n=entry(r,'fn-detection',['request','eye','evidence'][i]);n.prepend(element(doc,'span','fn-number',String(i+1)));main.append(n);});
 else if(kind==='restore'){main.append(entry(rows[0],'fn-repair','repair'),entry(rows[1],'fn-recover','restore'));}
 else if(kind==='deter'){const visible=element(doc,'div','fn-visible');visible.append(art(doc,'camera'),put('p','fn-visible-label',{en:'VISIBLE PRESENCE',th:'มองเห็นมาตรการ'}));const effects=element(doc,'div','fn-deter-effects');rows.forEach((r,i)=>effects.append(entry(r,'fn-deter-effect',i?'alert':null)));main.append(visible,effects);}
 else if(kind==='direct'){const command=entry(rows[0],'fn-instruction','guide');main.append(command,element(doc,'div','fn-arrow-inline','→'),entry(rows[1],'fn-application','request'));}
 else if(kind==='compensate')rows.forEach((r,i)=>{const n=entry(r,'fn-alternative-step',['alternative','shield','evidence'][i]);n.prepend(element(doc,'span','fn-number',String(i+1)));main.append(n);});
 else if(kind==='context'){
  const state=context.interactionState||{},abort=new AbortController(),choices=element(doc,'div','fn-choices'),feedback=element(doc,'section','fn-feedback');feedback.setAttribute('aria-live','polite');feedback.setAttribute('data-control-functions-feedback','');
  const buttons=['Visible camera','Recording review','Alert + intervention'].map((label,i)=>{const b=element(doc,'button','fn-choice',label);b.type='button';b.setAttribute('data-control-functions-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<3?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(i===n)));feedback.replaceChildren(art(doc,i===1?'eye':i===2?'shield':'camera'));if(i<0)feedback.append(put('h4','fn-term',{en:'Inspect a stated use',th:'พิจารณาวิธีใช้ที่ระบุ'}),put('p','fn-copy',{en:'Choose a context; more than one function may apply.',th:'เลือกบริบท หลายหน้าที่อาจใช้ร่วมกันได้'}));else feedback.append(put('h4','fn-term',rows[i][0]),put('p','fn-copy',rows[i][1]),put('p','fn-note',rows[i][2]));};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='reason'){const key=element(doc,'div','fn-reason-key');key.append(art(doc,'effect'),put('h4','fn-term',{en:'Reason from the effect',th:'วิเคราะห์จากผลที่เกิด'}));const record=element(doc,'div','fn-reason-record');rows.forEach((r,i)=>{const n=entry(r,'fn-reason-item');n.prepend(element(doc,'span','fn-number',String(i+1)));record.append(n);});main.append(key,record);}
 return {destroy(){}};
}
