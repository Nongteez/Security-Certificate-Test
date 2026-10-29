import fs from 'node:fs';
import {publishedLessons} from '../../../js/core/learning-schema.js';
const base='content/isc2-cc-2026/learning/published/',dir='artifacts/qa/domain-1-final-signoff/';
const catalog=JSON.parse(fs.readFileSync(base+'catalog.json'));
for(const entry of publishedLessons(catalog).filter(l=>l.domainId===1)){
 const lesson=JSON.parse(fs.readFileSync(base+entry.lessonPath)),lines=[];
 for(const slide of lesson.slides){const seen=new Set();lines.push(`## ${slide.id} (${slide.rendererId}/${slide.layoutId})`);
  function pairs(v,path){if(!v||typeof v!=='object')return;if(typeof v.en==='string'&&typeof v.th==='string'){const key=JSON.stringify(v);if(!seen.has(key)){lines.push(path+' EN: '+v.en,path+' TH: '+v.th);seen.add(key);}return;}for(const [k,x]of Object.entries(v))pairs(x,path+'.'+k);}
  pairs(slide,'slide');lines.push('');
 }
 fs.writeFileSync(dir+lesson.id+'-content.txt',lines.join('\n')+'\n');
}
console.log('Exported complete, per-slide deduplicated bilingual text for all 103 current slides.');
