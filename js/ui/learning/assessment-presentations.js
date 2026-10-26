import {element,localize} from './dom.js';

const scenes=new Map([
 ['slide-01-choose-the-method',['methods',2]],
 ['slide-02-define-the-criteria',['criteria',3]],
 ['slide-03-estimate-one-loss',['single',3]],
 ['slide-04-annual-frequency',['frequency',3]],
 ['slide-05-annualize-the-loss',['annual',3]],
 ['slide-06-compare-like-with-like',['compare',2]],
 ['slide-07-test-the-estimate',['sensitivity',2]],
 ['slide-08-prioritize-with-context',['priority',3]]
]);
// Bounded worked example only; no user input or general-purpose financial calculator.
const model=Object.freeze({assetValue:10000,exposureFactor:0.5,baseRate:2,higherRate:4});
export function hasAssessmentPresentation({lesson,slide}) {
 const scene=scenes.get(slide?.id),b=slide?.blocks;
 return lesson?.id==='lesson-d1-06-assessment' && !!scene && b?.length===4 &&
  [0,2,3].every(i=>b[i]?.kind==='text') && b[1]?.kind==='table' &&
  b[1].rows?.length===scene[1] && b[1].rows.every(r=>Array.isArray(r)&&r.length===3);
}
function art(doc,type) {
 const shapes={
  categories:'<path d="M25 20h106v115H25zM44 44h15v15H44zM72 48h40M44 76h15v15H44zM72 80h40M44 108h68"/>',
  numbers:'<rect x="24" y="14" width="112" height="126" rx="8"/><path d="M43 34h74v25H43zM46 80h12M82 80h12M110 80h9M46 103h12M82 103h12M110 103h9M46 125h12M82 125h12M110 125h9"/>',
  asset:'<path d="M23 36h114v92H23zM23 65h114M23 97h114M40 51h5M40 82h5M40 112h5M62 51h54M62 82h54M62 112h54M53 18h54"/>',
  fraction:'<circle cx="80" cy="76" r="55"/><path d="M80 21v110M80 76l39-39M80 76l39 39M80 76h55"/>',
  calendar:'<rect x="20" y="27" width="120" height="105" rx="7"/><path d="M20 58h120M48 13v28M112 13v28M43 80h15M73 80h15M103 80h15M43 105h15M73 105h15M103 105h15"/>',
  evidence:'<path d="M23 12h85l27 27v96H23zM108 12v28h27M43 58h68M43 80h51M43 102h30"/><circle cx="113" cy="110" r="24"/><path d="m129 128 18 17M100 110l8 8 19-21"/>',
  balance:'<path d="M80 21v105M49 136h62M25 42h110M45 42l-26 52h52L45 42zM115 42 89 94h52l-26-52z"/>',
  context:'<path d="M19 28h122v82H83l-30 25v-25H19zM39 50h82M39 72h54M39 94h37"/>'
 };
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 160 150');svg.setAttribute('class','as-art');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.evidence}</g>`;return svg;
}
export function renderAssessmentPresentation(host,context) {
 const {slide}=context,kind=scenes.get(slide.id)[0],doc=host.ownerDocument,language=context.language==='th'?'th':'en',rows=slide.blocks[1].rows;
 const put=(tag,cls,pair)=>localize(element(doc,tag,cls),pair,language);
 const root=element(doc,'section',`as-scene as-${kind}`);root.setAttribute('data-assessment-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','as-header');header.append(element(doc,'p','as-kicker',`ASSESSMENT / ${String([...scenes.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','as-title',slide.title),put('p','as-lead',slide.blocks[0].text));
 const main=element(doc,'div','as-main');root.append(header,main,put('footer','as-footer',slide.blocks[3].text));host.append(root);
 const entry=(r,cls,icon)=>{const n=element(doc,'section',cls);if(icon)n.append(art(doc,icon));n.append(put('h4','as-term',r[0]),put('p','as-copy',r[1]),put('p','as-note',r[2]));return n;};
 if(kind==='methods') {
  rows.forEach((r,i)=>main.append(entry(r,`as-method as-method-${i}`,i?'numbers':'categories')));
 } else if(kind==='criteria') {
  rows.forEach((r,i)=>{const n=entry(r,'as-criterion',['categories','evidence','context'][i]);n.prepend(element(doc,'span','as-step',String(i+1)));main.append(n);});
 } else if(kind==='single') {
  const values=element(doc,'div','as-single-values');rows.forEach((r,i)=>values.append(entry(r,`as-single-value as-single-value-${i}`,['asset','fraction','numbers'][i])));
  const proportion=element(doc,'div','as-proportion');proportion.setAttribute('aria-hidden','true');for(let i=0;i<10;i++)proportion.append(element(doc,'span',i<5?'as-lost':'as-retained'));main.append(values,proportion);
 } else if(kind==='frequency') {
  const rates=element(doc,'div','as-rate-examples');rows.slice(0,2).forEach((r,i)=>rates.append(entry(r,`as-rate as-rate-${i}`,'calendar')));main.append(rates,entry(rows[2],'as-unit-reminder'));
 } else if(kind==='annual') {
  const factors=element(doc,'div','as-factors');factors.append(entry(rows[0],'as-factor','asset'),element(doc,'span','as-times','×'),entry(rows[1],'as-factor','calendar'));
  main.append(factors,entry(rows[2],'as-annual-result','numbers'));
 } else if(kind==='compare') {
  rows.forEach((r,i)=>main.append(entry(r,`as-comparison as-comparison-${i}`,i?'calendar':'asset')));
 } else if(kind==='sensitivity') {
  const state=context.interactionState||{},abort=new AbortController();
  const inputs=element(doc,'section','as-sensitivity-inputs');inputs.append(art(doc,'numbers'),put('p','as-held',{en:'AV $10,000 · EF 50% · SLE $5,000/event',th:'AV $10,000 · EF 50% · SLE $5,000/ครั้ง'}));
  const label=put('h4','as-term',rows[0][0]),rate=put('p','as-selected-rate',rows[0][1]);inputs.append(label,rate);
  const result=element(doc,'section','as-live-result');result.setAttribute('aria-live','polite');result.append(element(doc,'h4','as-term','ALE'));
  const amount=element(doc,'p','as-amount');amount.setAttribute('data-annual-result','');result.append(amount,put('p','as-note',{en:'Expected annual loss in this teaching model',th:'ความเสียหายคาดหมายรายปีในแบบจำลองสอนนี้'}));
  const button=element(doc,'button','as-estimate-button');button.type='button';button.setAttribute('data-action','assessment-estimate');
  const paint=()=>{const index=state.higher?1:0,r=rows[index],frequency=state.higher?model.higherRate:model.baseRate;localize(label,r[0],language);localize(rate,r[1],language);const annual=model.assetValue*model.exposureFactor*frequency;localize(amount,{en:`$${annual.toLocaleString('en-US')} / year`,th:`$${annual.toLocaleString('en-US')} / ปี`},language);button.textContent=state.higher?'Use base estimate':'Use higher frequency estimate';button.setAttribute('aria-pressed',String(!!state.higher));};
  button.addEventListener('click',()=>{state.higher=!state.higher;paint();},{signal:abort.signal});const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(inputs,result,button);
  return {destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 } else if(kind==='priority') {
  rows.forEach((r,i)=>{const n=entry(r,'as-priority-step',['balance','context','evidence'][i]);n.prepend(element(doc,'span','as-priority-number',String(i+1).padStart(2,'0')));main.append(n);});
 }
 return {destroy(){}};
}
