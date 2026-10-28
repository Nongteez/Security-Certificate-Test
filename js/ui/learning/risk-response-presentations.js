import {element,localize} from './dom.js';
const scenes=new Map([
 ['slide-01-four-response-paths',['paths',4]],['slide-02-stop-or-reduce',['routes',2]],
 ['slide-03-share-the-consequences',['allocation',2]],['slide-04-authorize-acceptance',['acceptance',3]],
 ['slide-05-risk-that-remains',['residual',2]],['slide-06-use-organisational-limits',['limits',2]],
 ['slide-07-compare-treatment-value',['value',3]],['slide-08-clinic-decision',['case',3]],
 ['slide-09-monitor-and-reassess',['monitor',3]],['slide-10-communicate-the-decision',['record',3]]
]);
export function hasRiskResponsePresentation({lesson,slide}) {
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-07-risk-response' && !!scene && b?.length===4 &&
 [0,2,3].every(i=>b[i]?.kind==='text') && b[1]?.kind==='table' &&
 b[1].rows?.length===scene[1] && b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type) {
 const shapes={
  stop:'<path d="m48 18 64 0 34 34v64l-34 34H48l-34-34V52zM47 84h66"/>',
  shield:'<path d="m80 12 56 22v42c0 35-24 55-56 70-32-15-56-35-56-70V34zM49 77l22 22 42-47"/>',
  share:'<path d="M14 44h45l22 24-22 24H14M146 44h-35L89 68l22 24h35M32 109h96M32 124h74"/>',
  decision:'<path d="M29 15h82l23 23v101H29zM111 15v24h23M47 60h67M47 82h49M47 108l14 14 37-38"/>',
  service:'<rect x="19" y="24" width="122" height="94" rx="6"/><path d="M19 51h122M40 38h8M62 38h8M80 118v19M52 137h56M45 78h70M45 96h41"/>',
  limit:'<path d="M26 23v113h108M47 115V85h18v30M79 115V65h18v50M111 115V43h18v72M17 53h125"/>',
  value:'<rect x="29" y="13" width="103" height="126" rx="7"/><path d="M46 31h69v24H46zM47 77h12M79 77h12M108 77h7M47 101h12M79 101h12M108 101h7M47 123h44M108 123h7"/>',
  review:'<path d="M125 50a53 53 0 1 0 6 57M125 19v35H91"/><circle cx="79" cy="81" r="24"/><path d="m96 99 25 25M67 81h24M79 69v24"/>',
  message:'<path d="M16 24h128v87H83l-31 26v-26H16zM38 48h83M38 72h64M38 95h79"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 160');svg.setAttribute('class','rr-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 // Only fixed, original SVG code is parsed; lesson text always uses text nodes.
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.decision}</g>`;return svg;
}
export function renderRiskResponsePresentation(host,context) {
 const {slide}=context,doc=host.ownerDocument,kind=scenes.get(slide.id)[0],language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language),root=element(doc,'section',`rr-scene rr-${kind}`);
 root.setAttribute('data-response-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','rr-header');header.append(element(doc,'p','rr-kicker',`RISK RESPONSE / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','rr-title',slide.title),put('p','rr-lead',slide.blocks[0].text));
 const main=element(doc,'div','rr-main');root.append(header,main,put('footer','rr-footer',slide.blocks[3].text));host.append(root);
 const entry=(row,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','rr-term',row[0]),put('p','rr-copy',row[1]),put('p','rr-note',row[2]));return n;};
 if(kind==='paths')rows.forEach((r,i)=>{let n=entry(r,'rr-path',['stop','shield','share','decision'][i]);n.prepend(element(doc,'span','rr-index',String(i+1).padStart(2,'0')));main.append(n);});
 else if(kind==='routes')rows.forEach((r,i)=>{let n=entry(r,'rr-route',i?'shield':'stop');n.prepend(element(doc,'span','rr-route-line',i?'→':'⊣'));main.append(n);});
 else if(kind==='allocation'){rows.forEach((r,i)=>{let n=entry(r,`rr-lane rr-lane-${i}`,i?'share':'service');main.append(n);});main.append(put('p','rr-link',{en:'Combine financial sharing with effective safeguards.',th:'ใช้การแบ่งภาระการเงินร่วมกับมาตรการที่มีผลจริง'}));}
 else if(kind==='acceptance')rows.forEach((r,i)=>{let n=entry(r,'rr-decision-step',['review','decision','review'][i]);n.prepend(element(doc,'span','rr-number',String(i+1)));if(i<2)n.append(element(doc,'span','rr-arrow','→'));main.append(n);});
 else if(kind==='residual'){main.append(entry(rows[0],'rr-baseline','service'),element(doc,'div','rr-control-bridge','→'),entry(rows[1],'rr-remaining','shield'));}
 else if(kind==='limits')rows.forEach((r,i)=>{let n=entry(r,`rr-boundary rr-boundary-${i}`,i?'limit':'decision');n.prepend(element(doc,'span','rr-level',i?'02':'01'));main.append(n);});
 else if(kind==='value')rows.forEach((r,i)=>{let n=entry(r,`rr-ledger rr-ledger-${i}`,i===2?'decision':'value');main.append(n);});
 else if(kind==='case'){
  const state=context.interactionState||{},abort=new AbortController(),feedback=element(doc,'section','rr-feedback'),choices=element(doc,'div','rr-choices');feedback.setAttribute('data-response-feedback','');feedback.setAttribute('aria-live','polite');
  const labels=['Close risk now','Request evidence and review','Buy insurance and close'];
  const buttons=labels.map((label,i)=>{let b=element(doc,'button','rr-choice',label);b.type='button';b.setAttribute('data-response-choice',String(i));b.addEventListener('click',()=>{state.choice=i;paint();},{signal:abort.signal});choices.append(b);return b;});
  const paint=()=>{let i=Number.isInteger(state.choice)&&state.choice>=0&&state.choice<3?state.choice:-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(n===i)));feedback.replaceChildren(art(doc,i===1?'review':'decision'));if(i<0)feedback.append(put('h4','rr-term',{en:'What information is missing?',th:'ยังขาดข้อมูลอะไร?'}),put('p','rr-copy',{en:'Select an action to inspect the reasoning.',th:'เลือกการกระทำเพื่อดูเหตุผลประกอบ'}));else feedback.append(put('h4','rr-term',rows[i][0]),put('p','rr-copy',rows[i][1]),put('p','rr-note',rows[i][2]));feedback.classList.toggle('is-recommended',i===1);};
  const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(choices,feedback);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='monitor')rows.forEach((r,i)=>{let n=entry(r,'rr-monitor-step',['shield','review','decision'][i]);n.prepend(element(doc,'span','rr-monitor-label',['01','02','↻'][i]));main.append(n);});
 else if(kind==='record'){let spine=element(doc,'div','rr-record-spine');spine.append(art(doc,'message'),put('h4','rr-term',{en:'Clinic risk record',th:'บันทึก Risk คลินิก'}));let items=element(doc,'div','rr-record-items');rows.forEach((r,i)=>{let n=entry(r,'rr-record-item');n.prepend(element(doc,'span','rr-index',String(i+1)));items.append(n);});main.append(spine,items);}
 return {destroy(){}};
}
