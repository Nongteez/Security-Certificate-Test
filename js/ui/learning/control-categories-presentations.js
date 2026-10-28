import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-category-and-purpose',['axes',2]],['slide-02-technical-enforcement',['technical',3]],
 ['slide-03-administrative-direction',['administrative',3]],['slide-04-physical-protection',['physical',2]],
 ['slide-05-course-labels',['labels',2]],['slide-06-one-goal-three-controls',['together',3]],
 ['slide-07-classify-the-mechanism',['classify',3]],['slide-08-select-and-check',['decision',3]]
]);
export function hasControlCategoriesPresentation({lesson,slide}){
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-10-control-categories'&&!!scene&&b?.length===4&&[0,2,3].every(i=>b[i]?.kind==='text')&&b[1]?.kind==='table'&&b[1].rows?.length===scene[1]&&b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type){
 const shapes={
 mechanism:'<rect x="24" y="24" width="112" height="112" rx="10"/><path d="M45 50h70M45 78h40M45 106h70M57 38v24M98 66v24M72 94v24"/>',
 purpose:'<circle cx="80" cy="80" r="58"/><circle cx="80" cy="80" r="31"/><path d="m80 80 58-58M118 22h20v20"/>',
 user:'<circle cx="80" cy="43" r="25"/><path d="M24 140v-20a56 56 0 0 1 112 0v20M106 67l20 20 24-28"/>',
 rules:'<path d="M25 17h110v126H25zM44 46h67M44 73h47M44 100h61M44 123h35"/><path d="M108 99l12 12 24-28"/>',
 result:'<path d="m80 14 56 22v40c0 35-22 56-56 73-34-17-56-38-56-73V36zM48 79l21 21 43-46"/>',
 team:'<circle cx="53" cy="48" r="20"/><circle cx="112" cy="58" r="17"/><path d="M12 135v-24a41 41 0 0 1 82 0v24M100 91a35 35 0 0 1 47 34v10M45 110h30"/>',
 review:'<path d="M25 16h93l19 19v108H25zM118 16v21h19M43 56h70M43 80h43"/><circle cx="103" cy="108" r="25"/><path d="m122 127 25 25M91 108l9 9 18-20"/>',
 door:'<path d="M23 145V14h114v131M42 145V33h76v112M105 88h2M12 145h136"/>',
 room:'<path d="M12 143V18h136v125M12 143h136M24 37h47v49H24zM25 62h45M26 78h45M91 143V46h43v97M121 95h2M29 112h29M29 125h29"/>',
 record:'<path d="M32 14h77l24 25v106H32zM109 14v26h24M49 65h64M49 88h64M49 111h45"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','ct-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Original fixed geometry; untrusted teaching strings never enter SVG/HTML markup.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.rules}</g>`;return svg;
}
export function renderControlCategoriesPresentation(host,context){
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`ct-scene ct-${kind}`);root.setAttribute('data-control-categories-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','ct-header');header.append(element(doc,'p','ct-kicker',`CONTROL CATEGORIES / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','ct-title',slide.title),put('p','ct-lead',slide.blocks[0].text));const main=element(doc,'div','ct-main');root.append(header,main,put('footer','ct-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','ct-term',row[0]),put('p','ct-copy',row[1]),put('p','ct-note',row[2]));return n;};
 if(kind==='axes'){main.append(entry(rows[0],'ct-axis-category','mechanism'),element(doc,'div','ct-axis-divider','≠'),entry(rows[1],'ct-axis-function','purpose'));}
 else if(kind==='technical')rows.forEach((r,i)=>{let n=entry(r,'ct-enforcement-step',['user','mechanism','result'][i]);n.prepend(element(doc,'span','ct-number',String(i+1)));if(i<2)n.append(element(doc,'span','ct-arrow','→'));main.append(n);});
 else if(kind==='administrative')rows.forEach((r,i)=>{let n=entry(r,'ct-process',['rules','team','review'][i]);n.prepend(element(doc,'span','ct-number',String(i+1)));main.append(n);});
 else if(kind==='physical'){const site=element(doc,'div','ct-site');site.append(art(doc,'room'),put('p','ct-site-caption',{en:'SERVER ROOM · physical boundary',th:'ห้อง SERVER · ขอบเขตพื้นที่จริง'}));const notes=element(doc,'div','ct-site-notes');rows.forEach((r,i)=>notes.append(entry(r,'ct-site-callout',i?'user':'door')));main.append(site,notes);}
 else if(kind==='labels'){const umbrella=element(doc,'div','ct-umbrella');umbrella.append(art(doc,'team'),put('h4','ct-term',{en:'Administrative perspective',th:'มุม Administrative'}),put('p','ct-note',{en:'People-led direction and processes',th:'ทิศทางและกระบวนการที่คนดำเนินการ'}));const branches=element(doc,'div','ct-label-branches');rows.forEach((r,i)=>branches.append(entry(r,'ct-label-branch',i?'user':'rules')));main.append(umbrella,branches);}
 else if(kind==='together'){const goal=element(doc,'div','ct-shared-goal');goal.append(art(doc,'record'),put('h4','ct-term',{en:'Authorised access to records',th:'เข้าถึงข้อมูลตามสิทธิ์ที่อนุมัติ'}));const paths=element(doc,'div','ct-control-paths');rows.forEach((r,i)=>paths.append(entry(r,'ct-control-path',['team','mechanism','door'][i])));main.append(goal,paths);}
 else if(kind==='classify'){
  const state=context.interactionState||{},abort=new AbortController(),choices=element(doc,'div','ct-choices'),feedback=element(doc,'section','ct-feedback');feedback.setAttribute('aria-live','polite');feedback.setAttribute('data-control-categories-feedback','');
  const buttons=['Technical','Administrative','Physical'].map((label,i)=>{const b=element(doc,'button','ct-choice',label);b.type='button';b.setAttribute('data-control-categories-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{const i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<3?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(i===n)));feedback.replaceChildren(art(doc,i===1?'review':'rules'));if(i<0)feedback.append(put('h4','ct-term',{en:'Which mechanism is described?',th:'อธิบายกลไกแบบใด?'}),put('p','ct-copy',{en:'Choose a category to inspect the reasoning.',th:'เลือกประเภทเพื่อดูเหตุผลประกอบ'}));else feedback.append(put('h4','ct-term',rows[i][0]),put('p','ct-copy',rows[i][1]),put('p','ct-note',rows[i][2]));feedback.classList.toggle('is-correct',i===1);};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='decision'){const key=element(doc,'div','ct-decision-key');key.append(art(doc,'purpose'),put('h4','ct-term',{en:'Explain your choice',th:'อธิบายเหตุผลที่เลือก'}));const record=element(doc,'div','ct-decision-record');rows.forEach((r,i)=>{let n=entry(r,'ct-decision-item');n.prepend(element(doc,'span','ct-number',String(i+1)));record.append(n);});main.append(key,record);}
 return {destroy(){}};
}
