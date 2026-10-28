import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-framework-structure',['structure',3]],['slide-02-nist-outcomes',['outcomes',2]],
 ['slide-03-iso-isms',['isms',2]],['slide-04-cis-safeguards',['safeguards',3]],
 ['slide-05-policy-direction',['policy',2]],['slide-06-standard-requirement',['standard',2]],
 ['slide-07-procedure-steps',['procedure',3]],['slide-08-guideline-advice',['guideline',2]],
 ['slide-09-classify-the-purpose',['classify',4]],['slide-10-connect-and-review',['connect',3]]
]);
export function hasFrameworksPresentation({lesson,slide}){
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-09-frameworks'&&!!scene&&b?.length===4&&[0,2,3].every(i=>b[i]?.kind==='text')&&b[1]?.kind==='table'&&b[1].rows?.length===scene[1]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type){
 const shapes={
 map:'<path d="M18 25h124v110H18zM18 61h124M58 25v110M100 25v110M23 105l35-24 42 25 36-38"/>',
 target:'<circle cx="80" cy="80" r="60"/><circle cx="80" cy="80" r="35"/><path d="m80 80 59-59M119 21h20v20"/>',
 system:'<path d="M31 25h91l16 16v93H31zM122 25v18h16M49 66h69M49 88h69M49 110h44"/><path d="M18 43v94h94"/>',
 check:'<path d="M24 20h112v120H24zM44 51l12 12 22-25M89 51h27M44 99l12 12 22-25M89 99h27"/>',
 policy:'<path d="M20 29h120v94H20zM50 123v18M110 123v18M43 52h74M43 75h55M43 98h42"/>',
 steps:'<path d="M20 22h35v35H20zM62 39h72M20 68h35v35H20zM62 85h72M20 114h35v35H20zM62 131h72"/>',
 advice:'<path d="M80 16a42 42 0 0 1 27 74l-5 11H58l-5-11A42 42 0 0 1 80 16zM58 115h44M63 130h34M71 144h18M80 28v18M50 49l12 12M110 49 98 61"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','fw-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Fixed original SVG; lesson strings are always text nodes.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.system}</g>`;return svg;
}
export function renderFrameworksPresentation(host,context){
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`fw-scene fw-${kind}`);
 root.setAttribute('data-frameworks-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','fw-header');header.append(element(doc,'p','fw-kicker',`FRAMEWORKS & DOCUMENTS / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','fw-title',slide.title),put('p','fw-lead',slide.blocks[0].text));
 const main=element(doc,'div','fw-main');root.append(header,main,put('footer','fw-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{let n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','fw-term',row[0]),put('p','fw-copy',row[1]),put('p','fw-note',row[2]));return n;};
 if(kind==='structure')rows.forEach((r,i)=>{let n=entry(r,'fw-bridge-step',['map','target','check'][i]);n.prepend(element(doc,'span','fw-index',String(i+1).padStart(2,'0')));if(i<2)n.append(element(doc,'span','fw-arrow','→'));main.append(n);});
 else if(kind==='outcomes'){main.append(entry(rows[0],'fw-outcome','target'),element(doc,'div','fw-flow-arrow','→'),entry(rows[1],'fw-local','steps'));}
 else if(kind==='isms'){const centre=element(doc,'div','fw-isms-centre');centre.append(art(doc,'system'),element(doc,'h4','fw-term','ISMS'),put('p','fw-note',{en:'Information Security Management System',th:'ระบบบริหารความปลอดภัยสารสนเทศ'}));main.append(entry(rows[0],'fw-establish','target'),centre,entry(rows[1],'fw-improve','check'));}
 else if(kind==='safeguards')rows.forEach((r,i)=>{let n=entry(r,'fw-safeguard',['target','steps','check'][i]);n.prepend(element(doc,'span','fw-index',String(i+1)));main.append(n);});
 else if(kind==='policy'){const statement=entry(rows[0],'fw-policy-statement','policy');main.append(statement,entry(rows[1],'fw-policy-authority','system'));}
 else if(kind==='standard'){main.append(entry(rows[0],'fw-policy-source','policy'),element(doc,'div','fw-flow-arrow','→'),entry(rows[1],'fw-required','check'));}
 else if(kind==='procedure')rows.forEach((r,i)=>{let n=entry(r,'fw-procedure-step');n.prepend(element(doc,'span','fw-number',String(i+1)));if(i<2)n.append(element(doc,'span','fw-arrow','→'));main.append(n);});
 else if(kind==='guideline'){main.append(entry(rows[0],'fw-boundary','check'),entry(rows[1],'fw-guidance','advice'));}
 else if(kind==='classify'){
  const state=context.interactionState||{},abort=new AbortController(),choices=element(doc,'div','fw-choices'),feedback=element(doc,'section','fw-feedback');feedback.setAttribute('aria-live','polite');feedback.setAttribute('data-frameworks-feedback','');
  const buttons=['Policy','Standard','Procedure','Guideline'].map((label,i)=>{const b=element(doc,'button','fw-choice',label);b.type='button';b.setAttribute('data-frameworks-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<4?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(i===n)));feedback.replaceChildren(art(doc,i===1?'check':'system'));if(i<0)feedback.append(put('h4','fw-term',{en:'Classify the statement',th:'แยกหน้าที่ของข้อความ'}),put('p','fw-copy',{en:'Select a document function to inspect its reasoning.',th:'เลือกหน้าที่เอกสารเพื่อดูเหตุผลประกอบ'}));else feedback.append(put('h4','fw-term',rows[i][0]),put('p','fw-copy',rows[i][1]),put('p','fw-note',rows[i][2]));feedback.classList.toggle('is-correct',i===1);};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='connect'){const spine=element(doc,'div','fw-document-spine');spine.append(art(doc,'system'),put('h4','fw-term',{en:'Aligned documents',th:'เอกสารที่สอดคล้องกัน'}));const chain=element(doc,'div','fw-chain');rows.forEach((r,i)=>{const n=entry(r,'fw-chain-item');n.prepend(element(doc,'span','fw-index',String(i+1)));chain.append(n);});main.append(spine,chain);}
 return {destroy(){}};
}
