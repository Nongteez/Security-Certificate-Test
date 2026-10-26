import {element,localize} from './dom.js';

const scenes=new Map([
 ['slide-01-potential-harm',['potential',2]],
 ['slide-02-connect-the-scenario',['chain',4]],
 ['slide-03-separate-the-terms',['distinctions',3]],
 ['slide-04-likelihood-and-impact',['dimensions',2]],
 ['slide-05-continuous-lifecycle',['cycle',4]],
 ['slide-06-write-a-risk-statement',['statement',3]],
 ['slide-07-review-after-change',['review',3]],
 ['slide-08-communicate-for-a-decision',['report',3]]
]);
export function hasRiskFoundationsPresentation({lesson,slide}) {
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-05-risk-foundations' && !!scene && b?.length===4 &&
  [0,2,3].every(i=>b[i]?.kind==='text') && b[1]?.kind==='table' &&
  b[1].rows?.length===scene[1] && b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}

// Fixed original SVG geometry. Content is localized as text nodes, never interpreted as markup.
function picture(doc,type) {
 const shapes={
  clinic:'<rect x="18" y="25" width="124" height="107" rx="7"/><path d="M18 53h124M44 83h25v49M93 80h26v24M86 12h28M100 1v25M29 39h4M41 39h4"/>',
  weakness:'<path d="M27 12h106v122H27zM46 38h68M46 61h38M86 77l-18 20 17 13-15 25M104 79h13M104 102h13"/>',
  event:'<path d="M19 75h113M104 44l30 31-30 31M35 25l11 13M55 10l4 18M35 121l11-13M55 136l4-18"/>',
  impact:'<path d="M19 25h122v91H19zM52 135h56M80 116v19M33 84l28-28 28 24 31-39"/>',
  flood:'<path d="M27 61V29h106v33M53 29V12h54v17M11 81q17-16 34 0t34 0t34 0t34 0M11 106q17-16 34 0t34 0t34 0t34 0M11 131q17-16 34 0t34 0t34 0t34 0"/>',
  evidence:'<path d="M24 10h80l25 24v103H24zM104 10v26h25M42 61h61M42 83h46M42 106h36"/><circle cx="113" cy="105" r="22"/><path d="m128 122 19 18M101 105l8 9 17-18"/>',
  patch:'<rect x="24" y="22" width="112" height="106" rx="13"/><path d="M65 46h30v24h24v30H95v24H65v-24H41V70h24z"/>',
  message:'<path d="M14 26h132v84H69l-28 25v-25H14zM35 49h88M35 69h88M35 90h57"/>',
  axes:'<path d="M25 130V16M16 30l9-15 9 15M25 130h121M131 121l16 9-16 9"/><path d="M46 112l70-65M97 48l21-3-3 21" stroke="#1d8177"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','rf-art');svg.setAttribute('viewBox','0 0 160 150');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.evidence}</g>`;return svg;
}

export function renderRiskFoundationsPresentation(host,context) {
 const {slide}=context,kind=scenes.get(slide.id)[0],doc=host.ownerDocument,language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const localized=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language);
 const root=element(doc,'section',`rf-scene rf-${kind}`);root.setAttribute('data-risk-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','rf-header');header.append(element(doc,'p','rf-kicker',`RISK FOUNDATIONS / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),localized('h3','rf-title',slide.title),localized('p','rf-lead',slide.blocks[0].text));
 const main=element(doc,'div','rf-main');root.append(header,main,localized('footer','rf-footer',slide.blocks[3].text));host.append(root);
 const entry=(r,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(picture(doc,icon));n.append(localized('h4','rf-term',r[0]),localized('p','rf-copy',r[1]),localized('p','rf-note',r[2]));return n;};
 if(kind==='potential') {
  main.append(entry(rows[0],'rf-value','clinic'),element(doc,'div','rf-possibility','?'),entry(rows[1],'rf-possible-event','event'));
 } else if(kind==='chain') {
  rows.forEach((r,i)=>{const n=entry(r,'rf-chain-part',['clinic','weakness','event','impact'][i]);n.prepend(element(doc,'span','rf-index',String(i+1).padStart(2,'0')));if(i<3)n.append(element(doc,'span','rf-chain-arrow','→'));main.append(n);});
 } else if(kind==='distinctions') {
  rows.forEach((r,i)=>main.append(entry(r,'rf-distinction',['flood','weakness','impact'][i])));
 } else if(kind==='dimensions') {
  const axes=element(doc,'div','rf-axes');axes.append(picture(doc,'axes'),localized('p','rf-axis-y',rows[0][0]),localized('p','rf-axis-x',rows[1][0]));
  const questions=element(doc,'div','rf-dimension-questions');rows.forEach(r=>questions.append(entry(r,'rf-dimension')));main.append(axes,questions);
 } else if(kind==='cycle') {
  rows.forEach((r,i)=>{const n=entry(r,`rf-cycle-step rf-cycle-step-${i}`,['evidence','axes','patch','evidence'][i]);n.prepend(element(doc,'span','rf-cycle-number',String(i+1)));const arrow=element(doc,'span','rf-cycle-arrow',['→','↓','←','↑'][i]);arrow.setAttribute('aria-hidden','true');n.append(arrow);main.append(n);});
 } else if(kind==='statement') {
  main.append(entry(rows[0],'rf-finding','weakness'),entry(rows[1],'rf-risk-message','message'),entry(rows[2],'rf-context','evidence'));
 } else if(kind==='review') {
  const state=context.interactionState||{},abort=new AbortController(),evidence=entry(rows[0],'rf-current-evidence','weakness');evidence.setAttribute('data-risk-evidence','');evidence.setAttribute('aria-live','polite');
  const button=element(doc,'button','rf-change-button');button.type='button';button.setAttribute('data-action','risk-change');
  const paint=()=>{const row=rows[state.changed?1:0];evidence.replaceChildren(picture(doc,state.changed?'patch':'weakness'),localized('h4','rf-term',row[0]),localized('p','rf-copy',row[1]),localized('p','rf-note',row[2]));evidence.classList.toggle('is-changed',!!state.changed);button.textContent=state.changed?'Show before change':'Show after change';button.setAttribute('aria-pressed',String(!!state.changed));};
  button.addEventListener('click',()=>{state.changed=!state.changed;paint();},{signal:abort.signal});const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();
  const follow=entry(rows[2],'rf-watch','evidence');main.append(evidence,follow,button);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 } else if(kind==='report') {
  const spine=element(doc,'div','rf-report-spine');spine.append(picture(doc,'message'),localized('p','rf-report-label',{en:'Decision-ready information',th:'ข้อมูลพร้อมใช้ตัดสินใจ'}));
  const report=element(doc,'div','rf-report-items');rows.forEach((r,i)=>{const n=entry(r,'rf-report-item');n.prepend(element(doc,'span','rf-report-number',String(i+1)));report.append(n);});main.append(spine,report);
 }
 return {destroy(){}};
}
