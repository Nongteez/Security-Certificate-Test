import {element,localize} from '../dom.js';
export const pair=(en,th)=>({en,th});
export const node=(doc,tag,cls,value,language)=>{const n=element(doc,tag,cls);if(value!==undefined)localize(n,typeof value==='string'?pair(value,value):value,language);return n;};
export function scene(host,context,id,title,kicker){
 const doc=host.ownerDocument,language=context.language==='th'?'th':'en',root=element(doc,'section',`cia-v3 cia-v3-${id}`);root.setAttribute('data-cia-composition',id);root.setAttribute('lang',language);
 const header=element(doc,'header','v3-header');header.append(node(doc,'p','v3-kicker',kicker,language),node(doc,'h3','v3-headline',title,language));
 const main=element(doc,'div','v3-main'),footer=element(doc,'footer','v3-footer');root.append(header,main,footer);host.append(root);
 return{doc,language,root,main,footer,put:(tag,cls,value)=>node(doc,tag,cls,value,language)};
}
export function graphic(doc,markup,viewBox='0 0 600 400',className='v3-graphic'){
 const svg=doc.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox',viewBox);svg.setAttribute('class',className);svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.innerHTML=markup;return svg;
}
const icons={
 person:'<circle cx="48" cy="25" r="14"/><path d="M20 86V67c0-27 56-27 56 0v19"/>',
 file:'<path d="M22 7h37l17 17v65H22zM59 7v20h17M34 44h30M34 58h30M34 72h20"/>',
 eye:'<path d="M5 48q43-51 86 0-43 51-86 0z"/><circle cx="48" cy="48" r="15"/>',
 database:'<ellipse cx="48" cy="19" rx="34" ry="12"/><path d="M14 19v55c0 17 68 17 68 0V19M14 46c0 17 68 17 68 0"/>',
 lock:'<rect x="18" y="40" width="60" height="46" rx="7"/><path d="M30 40V25a18 18 0 0 1 36 0v15M48 56v15"/>',
 hospital:'<path d="M12 88V24h72v64M37 88V66h22v22M38 10h20v11h12v20H58v12H38V41H26V21h12z"/>',
 server:'<rect x="12" y="8" width="72" height="80" rx="7"/><path d="M12 34h72M12 61h72M24 21h36M24 47h36M24 74h36"/><circle cx="73" cy="21" r="2"/><circle cx="73" cy="47" r="2"/>',
 changed:'<path d="M22 7h37l17 17v65H22zM59 7v20h17M35 43l26 26M61 43 35 69M34 79h30"/>',
 export:'<path d="M22 9h34v21h20v56H22zM56 9l20 21M38 58h49M71 43l16 15-16 15"/>'
};
export function icon(doc,name,cls=''){return graphic(doc,`<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${icons[name]||icons.file}</g>`,'0 0 96 96',`v3-icon ${cls}`);}
export function safeguards(s,items){const strip=s.doc.createElement('div');strip.className='v3-safeguards';for(const item of items)strip.append(s.put('p','v3-safeguard',item));return strip;}
