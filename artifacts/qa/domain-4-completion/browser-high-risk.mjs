import fs from 'node:fs';
import {openLesson} from './browser-matrix.mjs';
const dir='content/isc2-cc-2026/learning/published/',qa='artifacts/qa/domain-4-completion/';
const c=JSON.parse(fs.readFileSync(dir+'catalog.json')),ls=c.domains.find(d=>d.id===4).objectives.flatMap(o=>o.lessons).map(s=>JSON.parse(fs.readFileSync(dir+s.lessonPath)));
export async function highRisk(api){
 const {send,evaluate,screenshot,sleep}=api,out=[];
 const click=async s=>{await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(s)});e.focus();e.click()})()`);await sleep(130)};
 // Layer stack, tunnel endpoint, dense device comparison, DMZ boundary, cloud responsibility, hybrid integration.
 for(const [li,si] of [[0,2],[1,4],[3,2],[4,2],[7,4],[8,3]])for(const [width,height] of [[1366,768],[1920,1080]])for(const language of ['en','th']){
  const l=ls[li],s=l.slides[si],r={lessonId:l.id,slide:s.id,width,height,language,themes:[]};await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await openLesson(api,l.id);await click('#learning-language-'+language);await click('[data-action="slides"]');await click(`[data-slide-id="${s.id}"]`);
  for(const theme of ['light','dark']){if(await evaluate(`document.documentElement.getAttribute('data-theme')`)!==theme)await click('#viewer-theme-toggle');const p=`high-risk-L${String(li+1).padStart(2,'0')}-S${si+1}-${width}-${language}-${theme}`,entry={theme,screenshots:[]};
   const native=await evaluate(`(()=>{const r=document.querySelector('[data-d4-composition]');return {id:r?.getAttribute('data-d4-composition'),background:r&&getComputedStyle(r).backgroundColor,overflow:!r||r.scrollWidth>r.clientWidth+1||r.scrollHeight>r.clientHeight+1}})()`);if(native.id!==s.id||native.overflow||native.background!=='rgb(255, 255, 255)')throw Error(p+' native');entry.native=native;entry.screenshots.push(await screenshot(p+'-presentation.png'));
   await click('[data-action="reading"]');entry.screenshots.push(await screenshot(p+'-reading.png'));await click('[data-action="reading"]');await click('[data-action="lesson-info"]');await evaluate(`(()=>{document.querySelector('.learning-info-source-explanations').open=true;const e=document.querySelectorAll('.learning-info-slide-explanation')[${si}];e.open=true;e.scrollIntoView()})()`);await sleep(80);entry.screenshots.push(await screenshot(p+'-info.png'));await click('[data-action="close-info"]');r.themes.push(entry);
  }out.push(r);fs.writeFileSync(qa+'high-risk-results.json',JSON.stringify(out,null,2)+'\n');
 }return {cases:out.length,themedCases:2*out.length,passed:true};
}
