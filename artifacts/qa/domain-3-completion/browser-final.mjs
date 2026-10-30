import fs from 'node:fs';
import {openLesson} from './browser-matrix.mjs';
const qa='artifacts/qa/domain-3-completion/',dir='content/isc2-cc-2026/learning/published/';
const catalog=JSON.parse(fs.readFileSync(dir+'catalog.json'));
const ids=catalog.domains.find(d=>d.id===3).objectives.flatMap(o=>o.lessons.map(l=>l.id));
const lessons=ids.map(id=>JSON.parse(fs.readFileSync(dir+'lessons/'+id+'.json')));
const save=(name,result)=>fs.writeFileSync(qa+name,JSON.stringify(result,null,2)+'\n');
const assert=(condition,message)=>{if(!condition)throw Error(message)};
const helper=api=>({click:async s=>{await api.evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(s)});e.focus();e.click()})()`);await api.sleep(180)},key:async(key,code=key,text)=>{await api.send('Input.dispatchKeyEvent',{type:'keyDown',key,code,...(text?{text}:{}),windowsVirtualKeyCode:key==='Enter'?13:key==='Escape'?27:key==='ArrowLeft'?37:39});await api.send('Input.dispatchKeyEvent',{type:'keyUp',key,code});await api.sleep(180)},current:()=>api.evaluate(`document.querySelector('[data-d3-logical-composition],[data-iam-provisioning-composition],[data-iam-review-composition],[data-iam-frameworks-composition]')?.getAttributeNames().filter(n=>n.endsWith('-composition')).map(n=>document.querySelector('['+n+']').getAttribute(n))[0]`)});
export async function layoutSweep(api){
 const {send,evaluate,screenshot,sleep}=api,{click}=helper(api),result=[];
 for(const l of lessons.slice(3))for(const [width,height] of [[1366,768],[1920,1080]])for(const language of ['en','th']){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await openLesson(api,l.id);await click('#learning-language-'+language);
  if(await evaluate(`document.querySelector('[data-view]').getAttribute('data-view')==='reading'`))await click('[data-action="reading"]');
  await click('[data-action="slides"]');await click(`[data-slide-id="${l.slides[0].id}"]`);
  for(const [i,s] of l.slides.entries()){
   await evaluate('document.fonts.ready');await sleep(80);
   const r=await evaluate(`(()=>{const root=document.querySelector('[data-d3-logical-composition]'),m=root.querySelector('.d3l-main'),b=m.getBoundingClientRect();return {id:root.getAttribute('data-d3-logical-composition'),view:document.querySelector('[data-view]').getAttribute('data-view'),mainHeight:b.height,children:[...m.children].map(e=>{const r=e.getBoundingClientRect();return {top:r.top-b.top,bottom:b.bottom-r.bottom}}),overflow:root.scrollHeight>root.clientHeight+1||root.scrollWidth>root.clientWidth+1}})()`);
   assert(r.id===s.id&&r.view==='presentation'&&!r.overflow&&r.children.every(c=>c.top>=-1&&c.bottom>=-1),'Layout region overlap '+l.id+' '+width+' '+language+' '+s.id+' '+JSON.stringify(r));
   result.push({lessonId:l.id,width,height,language,slide:s.id,...r,screenshot:await screenshot(`L${l.id.split('-')[2]}-${width}-${language}-S${i+1}-presentation.png`)});save('layout-regions.json',result);
   if(i<l.slides.length-1)await click('[data-action="next"]');
  }
 }
 return {cases:result.length,passed:true};
}
export async function interactions(api){
 const {send,evaluate,screenshot,sleep}=api,{click,key,current}=helper(api),result=[];
 for(const l of lessons.slice(3))for(const [width,height] of [[1366,768],[1920,1080]])for(const language of ['en','th']){
  const prefix=`L${l.id.split('-')[2]}-${width}-${language}-interaction`,entry={lessonId:l.id,width,height,language,screenshots:[]};
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await openLesson(api,l.id);await click('#learning-language-'+language);await click('[data-action="slides"]');await click(`[data-slide-id="${l.slides.at(-1).id}"]`);
  await evaluate(`document.querySelector('[data-d3-logical-choice="2"]').focus()`);await key('Enter','Enter','\r');
  await evaluate(`document.querySelector('.presentation-workspace').focus()`);await key('ArrowLeft');assert(await current()===l.slides.at(-2).id,'Previous keyboard slide');await key('ArrowRight');assert(await current()===l.slides.at(-1).id,'Next keyboard slide');
  assert(await evaluate(`document.querySelector('[data-d3-logical-choice="2"]').getAttribute('aria-pressed')==='true'`),'Return retained choice');entry.keyboard=true;
  const other=language==='en'?'th':'en';await click('#learning-language-'+other);assert(await evaluate(`document.querySelector('[data-d3-logical-choice="2"]').getAttribute('aria-pressed')==='true'`),'Language retained choice');await click('#learning-language-'+language);entry.languageSwitch=true;
  for(const theme of ['light','dark']){
   if(await evaluate(`document.documentElement.getAttribute('data-theme')`)!==theme)await click('#viewer-theme-toggle');
   assert(await evaluate(`document.documentElement.getAttribute('data-theme')`)===theme,'Theme switch');
   entry.screenshots.push(await screenshot(prefix+'-'+theme+'-presentation.png'));
   await click('[data-action="reading"]');entry.screenshots.push(await screenshot(prefix+'-'+theme+'-reading.png'));await click('[data-action="reading"]');
   await click('[data-action="lesson-info"]');await evaluate(`(()=>{document.querySelector('.learning-info-source-explanations').open=true;const e=document.querySelectorAll('.learning-info-slide-explanation')[${l.slides.length-1}];e.open=true;e.scrollIntoView()})()`);await sleep(100);entry.screenshots.push(await screenshot(prefix+'-'+theme+'-info.png'));
   await key('Escape');assert(!await evaluate(`!!document.querySelector('.learning-info-overlay')`),'Info Escape');assert(await evaluate(`document.activeElement?.getAttribute('data-action')==='lesson-info'`),'Info return focus');
  }
  await evaluate(`document.querySelector('[data-action="fullscreen"]').focus()`);await key('Enter','Enter','\r');await sleep(220);assert(await evaluate('!!document.fullscreenElement'),'Native fullscreen entered');entry.screenshots.push(await screenshot(prefix+'-fullscreen.png'));
  await key('Escape');await sleep(200);assert(!await evaluate('!!document.fullscreenElement'),'Fullscreen exited');assert(await current()===l.slides.at(-1).id,'Fullscreen restored slide');assert(await evaluate(`document.querySelector('[data-d3-logical-choice="2"]').getAttribute('aria-pressed')==='true'`),'Fullscreen retained choice');entry.fullscreen=true;
  result.push(entry);save('interaction-results.json',result);
 }
 return {cases:result.length,passed:true};
}
export async function progress(api){
 const {send,evaluate,screenshot,sleep}=api,result=[],{click}=helper(api);
 if(await evaluate(`!!document.querySelector('.presentation-workspace')`))await click('[data-action="back-domain"]');
 const seed=await evaluate(`(async()=>{const {createProgressStore,visitSlide}=await import('/js/core/learning-progress.js');const c=await(await fetch('/content/isc2-cc-2026/learning/published/catalog.json')).json(),summaries=c.domains.flatMap(d=>d.objectives.flatMap(o=>o.lessons)),store=createProgressStore(),expected={};for(const [i,id] of ${JSON.stringify(ids)}.entries()){const l=await(await fetch('/content/isc2-cc-2026/learning/published/lessons/'+id+'.json')).json();const p=visitSlide(l,null,l.slides[Math.min(i+1,l.slides.length-2)].id,i%2?'th':'en');p.updatedAt=new Date(1760000000000+i*1000).toISOString();store.save(l,p);expected[id]=p.lastSlideId;}for(const id of ['lesson-d1-01-cia-triad','lesson-d2-01-grc-foundations']){const l=await(await fetch('/content/isc2-cc-2026/learning/published/lessons/'+id+'.json')).json();store.save(l,visitSlide(l,null,l.slides[2].id,'th'));}const all=JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1'));return {expected,other:Object.fromEntries(Object.entries(all.lessons).filter(([id])=>!${JSON.stringify(ids)}.includes(id))),schemaVersion:all.schemaVersion}})()`);
 save('progress-seed.json',seed);assert(seed.schemaVersion===1,'V1 schema');
 for(const id of ids){await send('Page.reload',{ignoreCache:true});await sleep(1300);await openLesson(api,id);const got=await evaluate(`({lesson:JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1')).lessons[${JSON.stringify(id)}].lastSlideId,contents:!!document.querySelector('.learning-lesson-contents')})`);assert(got.lesson===seed.expected[id]&&!got.contents,'Independent direct Resume '+id);assert(await evaluate(`document.querySelector('.learning-slide').innerText.includes(${JSON.stringify(lessons.find(l=>l.id===id).slides.find(s=>s.id===seed.expected[id]).title.en)})||document.querySelector('.learning-slide').innerText.includes(${JSON.stringify(lessons.find(l=>l.id===id).slides.find(s=>s.id===seed.expected[id]).title.th)})`),'Rendered saved slide '+id);result.push({id,expected:seed.expected[id],...got,renderedTitleVerified:true,screenshot:await screenshot('resume-'+id+'.png')});save('progress-results.json',{cases:result,otherRecordsPreserved:false});}
 const after=await evaluate(`JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1'))`);assert(JSON.stringify(Object.fromEntries(Object.entries(after.lessons).filter(([id])=>!ids.includes(id))))===JSON.stringify(seed.other),'Other lesson records changed');
 // Most recently visited Lesson 6 is selected by the actual Learning Center Continue action.
 await click('[data-action="back-domain"]');await click('#btn-domain-back');await sleep(400);assert(await evaluate(`!!document.querySelector('[data-action="continue-learning"]')`),'Continue available');const center=await screenshot('learning-center-continue.png');await click('[data-action="continue-learning"]');await sleep(350);assert(await evaluate(`JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1')).lessons[${JSON.stringify(ids[5])}].lastSlideId`)===seed.expected[ids[5]],'Continue exact saved position');
 assert(await evaluate(`(async()=>{const s=(await import('/js/core/state.js')).state;return s.screen==='learning-viewer'&&s.learning.lessonId===${JSON.stringify(ids[5])}&&s.learning.slideId===${JSON.stringify(seed.expected[ids[5]])}})()`),'Continue rendered exact lesson and slide');
 save('progress-results.json',{cases:result,otherRecordsPreserved:true,schemaVersion:after.schemaVersion,continueLearning:{passed:true,screenshot:center},runtimeErrors:api.errors||[]});return {lessons:result.length,otherRecordsPreserved:true,continueLearning:true};
}
