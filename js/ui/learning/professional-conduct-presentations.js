import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-access-and-authority',['authority',2]],['slide-02-professional-conduct',['conduct',3]],
 ['slide-03-reasonable-care',['care',3]],['slide-04-investigate-and-review',['diligence',3]],
 ['slide-05-scan-patch-verify',['cycle',3]],['slide-06-four-canons',['canons',4]],
 ['slide-07-public-trust-and-honesty',['trust',3]],['slide-08-competent-service',['service',3]],
 ['slide-09-reporting-decision',['decision',3]],['slide-10-defensible-decisions',['record',3]]
]);
export function hasProfessionalConductPresentation({lesson,slide}){
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-12-professional-conduct'&&!!scene&&b?.length===4&&[0,2,3].every(i=>b[i]?.kind==='text')&&b[1]?.kind==='table'&&b[1].rows?.length===scene[1]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
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
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','pc-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Fixed original SVG only. Teaching content is inserted through text nodes.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.evidence}</g>`;return svg;
}
export function renderProfessionalConductPresentation(host,context){
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`pc-scene pc-${kind}`);root.setAttribute('data-professional-conduct-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','pc-header');header.append(element(doc,'p','pc-kicker',`PROFESSIONAL CONDUCT / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','pc-title',slide.title),put('p','pc-lead',slide.blocks[0].text));const main=element(doc,'div','pc-main');root.append(header,main,put('footer','pc-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','pc-term',row[0]),put('p','pc-copy',row[1]),put('p','pc-note',row[2]));return n;};
 if(kind==='authority'){main.append(entry(rows[0],'pc-capability','request'),element(doc,'div','pc-not-equal','≠'),entry(rows[1],'pc-authority-boundary','shield'));}
 else if(kind==='conduct'){const promise=element(doc,'div','pc-undertaking');promise.append(art(doc,'guide'),put('h4','pc-term',{en:'Professional code',th:'หลักจรรยาบรรณวิชาชีพ'}));const lanes=element(doc,'div','pc-conduct-lanes');rows.forEach((r,i)=>{const n=entry(r,'pc-conduct-lane');n.prepend(element(doc,'span','pc-number',String(i+1)));lanes.append(n);});main.append(promise,lanes);}
 else if(kind==='care')rows.forEach((r,i)=>{const n=entry(r,'pc-care-step',['alert','shield','evidence'][i]);n.prepend(element(doc,'span','pc-number',String(i+1)));if(i<2)n.append(element(doc,'span','pc-arrow','→'));main.append(n);});
 else if(kind==='diligence'){const lens=element(doc,'div','pc-inquiry');lens.append(art(doc,'eye'),put('p','pc-inquiry-caption',{en:'BEFORE · AFTER · CHANGE',th:'ก่อน · หลัง · เมื่อเปลี่ยน'}));const steps=element(doc,'div','pc-inquiry-steps');rows.forEach((r,i)=>{const n=entry(r,'pc-inquiry-step');n.prepend(element(doc,'span','pc-number',String(i+1)));steps.append(n);});main.append(lens,steps);}
 else if(kind==='cycle')rows.forEach((r,i)=>{const n=entry(r,'pc-cycle-step',['eye','repair','restore'][i]);n.prepend(put('p','pc-cycle-label',i===1?{en:'DUE CARE',th:'DUE CARE'}:{en:'DUE DILIGENCE',th:'DUE DILIGENCE'}));if(i<2)n.append(element(doc,'span','pc-arrow','→'));main.append(n);});
 else if(kind==='canons')rows.forEach((r,i)=>{const n=entry(r,'pc-canon');n.prepend(element(doc,'span','pc-number',['I','II','III','IV'][i]));main.append(n);});
 else if(kind==='trust'){const risk=entry(rows[0],'pc-public-interest','alert'),follow=element(doc,'div','pc-trust-actions');rows.slice(1).forEach((r,i)=>follow.append(entry(r,'pc-trust-action',i?'alternative':'evidence')));main.append(risk,follow);}
 else if(kind==='service')rows.forEach((r,i)=>{const n=entry(r,'pc-service-step',['guide','request','layers'][i]);n.prepend(element(doc,'span','pc-number',String(i+1)));main.append(n);});
 else if(kind==='decision'){
  const state=context.interactionState||{},abort=new AbortController(),choices=element(doc,'div','pc-choices'),feedback=element(doc,'section','pc-feedback');feedback.setAttribute('aria-live','polite');feedback.setAttribute('data-professional-conduct-feedback','');
  const buttons=['Hide finding','Publish records','Report safely'].map((label,i)=>{const b=element(doc,'button','pc-choice',label);b.type='button';b.setAttribute('data-professional-conduct-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<3?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(i===n)));feedback.classList.toggle('is-supported',i===2);feedback.replaceChildren(art(doc,i===2?'shield':i<0?'guide':'alert'));if(i<0)feedback.append(put('h4','pc-term',{en:'Inspect a response',th:'พิจารณาการตอบสนอง'}),put('p','pc-copy',{en:'Choose an action and examine its consequences.',th:'เลือกการกระทำแล้วพิจารณาผลที่ตามมา'}));else feedback.append(put('h4','pc-term',rows[i][0]),put('p','pc-copy',rows[i][1]),put('p','pc-note',rows[i][2]));};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='record'){const key=element(doc,'div','pc-record-key');key.append(art(doc,'effect'),put('h4','pc-term',{en:'A defensible decision',th:'การตัดสินใจที่มีเหตุผลรองรับ'}));const record=element(doc,'div','pc-record-lines');rows.forEach((r,i)=>{const n=entry(r,'pc-record-item');n.prepend(element(doc,'span','pc-number',String(i+1)));record.append(n);});main.append(key,record);}
 return {destroy(){}};
}
