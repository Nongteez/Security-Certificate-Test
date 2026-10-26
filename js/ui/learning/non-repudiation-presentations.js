import {element,localize} from './dom.js';
const ids=new Map([['slide-01-disputed-action','dispute'],['slide-02-different-questions','questions'],['slide-03-sign-and-verify','keys'],['slide-04-altered-copy','alteration'],['slide-05-evidence-conditions','conditions'],['slide-06-evaluate-the-claim','case']]);
export function hasNonRepudiationPresentation({lesson,slide}) {
 const kind=ids.get(slide?.id),blocks=slide?.blocks,expected={dispute:3,questions:3,keys:2,alteration:3,conditions:4,case:3};
 return lesson?.id==='lesson-d1-03-non-repudiation'&&!!kind&&blocks?.length===4&&[0,2,3].every(i=>blocks[i]?.kind==='text')&&blocks[1]?.kind==='table'&&blocks[1].rows?.length===expected[kind]&&blocks[1].rows.every(row=>Array.isArray(row)&&row.length===3);
}
// Original trusted illustration geometry; educational strings are never injected as HTML.
function art(doc,type){const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','nr-art');svg.setAttribute('viewBox','0 0 180 140');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');const shapes={
 person:'<circle cx="90" cy="36" r="22"/><path d="M37 127V96c0-48 106-48 106 0v31"/>',
 order:'<path d="M42 9h71l26 26v94H42zM113 9v28h26M58 57h62M58 77h48M58 98c18-17 8 21 28-4 8-10 1 18 23 6"/>',
 key:'<circle cx="51" cy="66" r="31"/><circle cx="51" cy="66" r="10"/><path d="M82 66h78v20h-23V68M112 66v24"/>',
 public:'<circle cx="49" cy="59" r="27"/><circle cx="49" cy="59" r="9"/><path d="M76 59h78v18h-20V61M109 59v22M32 104h80M94 94l18 10-18 10"/>',
 review:'<path d="M28 10h92v112H28zM44 35h57M44 53h48M44 71h35"/><circle cx="120" cy="91" r="29"/><path d="m140 112 25 20M106 90l10 10 21-24"/>',
 record:'<rect x="22" y="20" width="136" height="105" rx="8"/><path d="M22 48h136M49 20v105M66 67h70M66 88h55M66 109h65"/>',
 signature:'<path d="M31 11h106v110H31zM49 34h69M49 53h48M49 72h33M100 99l11 9 21-25"/><circle cx="113" cy="98" r="27"/>'};
 svg.innerHTML=`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.order}</g>`;return svg;}
export function renderNonRepudiationPresentation(host,context){
 const {slide}=context,kind=ids.get(slide.id),doc=host.ownerDocument,language=context.language==='th'?'th':'en';
 const put=(tag,cls,value)=>{const n=element(doc,tag,cls);if(value)localize(n,value,language);return n;};
 const root=element(doc,'section',`nr-v3 nr-${kind}`);root.setAttribute('data-nr-composition',kind);root.setAttribute('lang',language);
 const header=element(doc,'header','nr-header');header.append(element(doc,'p','nr-kicker',`TRUSTWORTHY EVIDENCE / ${String([...ids.keys()].indexOf(slide.id)+1).padStart(2,'0')}`),put('h3','nr-title',slide.title),put('p','nr-lead',slide.blocks[0].text));
 const main=element(doc,'div','nr-main'),footer=put('footer','nr-footer',slide.blocks[3].text);root.append(header,main,footer);host.append(root);const rows=slide.blocks[1].rows;
 const line=(parent,tag,cls,value)=>{const n=put(tag,cls,value);parent.append(n);return n;};
 if(kind==='dispute'){
  for(const [i,row]of rows.entries()){const col=element(doc,'section',`nr-party nr-party-${i}`);col.append(art(doc,['person','order','review'][i]));line(col,'h4','nr-term',row[0]);line(col,'p','nr-copy',row[1]);line(col,'p','nr-note',row[2]);if(i<2)col.append(element(doc,'span','nr-link','→'));main.append(col);}
 }else if(kind==='questions'){
  for(const [i,row]of rows.entries()){const ribbon=element(doc,'section','nr-ribbon');ribbon.append(art(doc,['person','record','signature'][i]));line(ribbon,'h4','nr-term',row[0]);const text=element(doc,'div');line(text,'p','nr-copy',row[1]);line(text,'p','nr-note',row[2]);ribbon.append(text);main.append(ribbon);}
 }else if(kind==='keys'){
  for(const [i,row]of rows.entries()){const lane=element(doc,'section',`nr-key-lane nr-key-lane-${i}`);lane.append(art(doc,i?'review':'signature'));const text=element(doc,'div');line(text,'h4','nr-term',row[0]);line(text,'p','nr-formula',row[1]);line(text,'p','nr-note',row[2]);lane.append(text,art(doc,i?'public':'key'));main.append(lane);}
 }else if(kind==='alteration'){
  const state=context.interactionState||{},abort=new AbortController(),papers=element(doc,'div','nr-papers');
  const original=element(doc,'section','nr-paper');original.append(art(doc,'order'));line(original,'h4','nr-term',rows[0][0]);line(original,'p','nr-quantity',rows[0][1]);line(original,'p','nr-note',rows[0][2]);
  const copy=element(doc,'section','nr-paper nr-received');copy.append(art(doc,'order'));const title=line(copy,'h4','nr-term',rows[1][0]),quantity=line(copy,'p','nr-quantity',rows[1][1]);
  const result=line(copy,'p','nr-verification',rows[1][2]);result.setAttribute('data-verification-result','');result.setAttribute('role','status');result.setAttribute('aria-live','polite');
  papers.append(original,copy);const button=element(doc,'button','nr-alter-button');button.type='button';button.setAttribute('data-action','nr-alter');
  const paint=()=>{const row=rows[state.altered?2:1];localize(title,row[0],language);localize(quantity,row[1],language);localize(result,row[2],language);copy.classList.toggle('is-altered',!!state.altered);button.setAttribute('aria-pressed',String(!!state.altered));button.textContent=state.altered?'Show unchanged copy':'Compare altered copy';};
  button.addEventListener('click',()=>{state.altered=!state.altered;paint();},{signal:abort.signal});const stop=()=>abort.abort();context.signal?.addEventListener('abort',stop,{once:true});if(context.signal?.aborted)stop();paint();main.append(papers,button);
  return{destroy(){abort.abort();context.signal?.removeEventListener('abort',stop);}};
 }else if(kind==='conditions'){
  for(const [i,row]of rows.entries()){const item=element(doc,'section','nr-condition');line(item,'p','nr-number',{en:`0${i+1}`,th:`0${i+1}`});line(item,'h4','nr-term',row[0]);line(item,'p','nr-copy',row[1]);line(item,'p','nr-note',row[2]);main.append(item);}main.append(art(doc,'signature'));
 }else if(kind==='case'){
  for(const [i,row]of rows.entries()){const evidence=element(doc,'section','nr-case-row');evidence.append(art(doc,['record','signature','order'][i]));line(evidence,'h4','nr-term',row[0]);line(evidence,'p','nr-copy',row[1]);line(evidence,'p','nr-note',row[2]);main.append(evidence);}
 }
 return{destroy(){}};
}
