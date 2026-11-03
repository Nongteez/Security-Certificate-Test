import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
import {renderSlide} from '../../../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../../../js/ui/learning/lesson-info.js';
import {TestDocument} from '../../../tools/fixtures/learning/dom.mjs';
const q='artifacts/qa/domain-5-completion/',base='content/isc2-cc-2026/learning/published/';
const source=fs.readFileSync(q+'entry-shared/js/ui/learning/renderers.js','utf8');
const absolute=s=>s.replace(/from (['"])(\.[^'"]+)\1/g,(_,quote,rel)=>'from '+quote+pathToFileURL(path.resolve('js/ui/learning',rel)).href+quote);
const originalURL='data:text/javascript;base64,'+Buffer.from(absolute(source)).toString('base64');
const original=await import(originalURL);
let infoSource=absolute(fs.readFileSync(q+'entry-shared/js/ui/learning/lesson-info.js','utf8'));infoSource=infoSource.replace(pathToFileURL(path.resolve('js/ui/learning/renderers.js')).href,originalURL);
const originalInfo=await import('data:text/javascript;base64,'+Buffer.from(infoSource).toString('base64'));
const catalog=JSON.parse(fs.readFileSync(base+'catalog.json')),tree=n=>({tag:n.tagName,classes:n.className,text:n.textContent,attributes:[...n.attributes].sort(),children:n.children.map(tree)}),results=[];
for(const d of catalog.domains.filter(d=>d.id!==5))for(const e of d.objectives.flatMap(o=>o.lessons).filter(e=>e.status==='published')){
 const l=JSON.parse(fs.readFileSync(base+e.lessonPath));let cases=0;
 for(const s of l.slides)for(const language of ['en','th','both'])for(const mode of ['presentation','reading']){
  const a=new TestDocument(),b=new TestDocument(),x=a.createElement('article'),y=b.createElement('article');
  const h=renderSlide(x,{lesson:l,slide:s,language,mode}),g=original.renderSlide(y,{lesson:l,slide:s,language,mode});assert.deepEqual(tree(x),tree(y),l.id+' '+s.id+' '+language+' '+mode);h.destroy();g.destroy();cases++;
 }
 for(const language of ['en','th','both']){const a=new TestDocument(),b=new TestDocument(),x=a.createElement('div'),y=b.createElement('div');a.body.append(x);b.body.append(y);const h=renderLessonInfo(x,{lesson:l,language}),g=originalInfo.renderLessonInfo(y,{lesson:l,language});assert.deepEqual(tree(x),tree(y),l.id+' Info '+language);h.destroy();g.destroy();cases++;}
 results.push({lesson:l.id,domain:d.id,cases,passed:true});
}
fs.writeFileSync(q+'prior-domain-render-parity.json',JSON.stringify({method:'Exact DOM/event-double render tree comparison against entry source modules with absolute dependency URLs. Not browser visual comparison.',lessons:results,cases:results.reduce((n,l)=>n+l.cases,0)},null,2));console.log(results.length+' prior lessons, '+results.reduce((n,l)=>n+l.cases,0)+' exact render cases preserved');
