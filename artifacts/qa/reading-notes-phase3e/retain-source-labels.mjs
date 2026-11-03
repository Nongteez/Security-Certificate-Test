import fs from 'node:fs';import{diagrams}from'../../../js/core/diagram-generator.js';
let source=fs.readFileSync('js/core/diagram-generator.js','utf8');const parity=[];
for(const id of ['cloudSharedResponsibility','dmzFirewallArchitecture','nistSp80063Framework']){
 const h=diagrams[id],svg=h.split('<svg')[1].split('</svg>')[0],groups=[...svg.matchAll(/<g>([\s\S]*?)<\/g>/g)].map(m=>[...m[1].matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(t=>t[1]));
 let additions;
 if(id==='cloudSharedResponsibility')additions=groups.slice(1);
 if(id==='dmzFirewallArchitecture')additions=[[...groups[0],...groups[1]],groups[2],[...groups[3],...groups[4]]];
 if(id==='nistSp80063Framework')additions=groups.slice(0,3).map(a=>[a[0]]);
 let i=0;const split=h.indexOf('<div class="reading-diag-mobile');let mobile=h.slice(split).replace(/<p class="reading-mob-tier-desc">[\s\S]*?<\/p>/g,m=>{const labels=additions[i++];if(!labels)throw Error('parity card count '+id);return m+`<p class="reading-diagram-source-labels">${labels.join(' · ')}</p>`});
 if(i!==additions.length)throw Error('card count '+id);
 if(id==='cloudSharedResponsibility')mobile=mobile.replace(/(<div class="reading-diag-mobile[^>]+>)/,`$1<p class="reading-diagram-source-labels">${groups[0].join(' · ')}</p>`);
 const next=h.slice(0,split)+mobile;if(!source.includes(h))throw Error('source changed '+id);source=source.replace(h,next);parity.push({id,source:'Unmodified original SVG text nodes; preserve association with corresponding native concept card',cardLabels:additions});
}
fs.writeFileSync('js/core/diagram-generator.js',source);fs.writeFileSync('artifacts/qa/reading-notes-phase3e/representation-parity.json',JSON.stringify(parity,null,2));
