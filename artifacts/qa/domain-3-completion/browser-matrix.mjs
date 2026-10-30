import fs from 'node:fs';
const qa='artifacts/qa/domain-3-completion';
const results=fs.existsSync(qa+'/browser-matrix.json')?JSON.parse(fs.readFileSync(qa+'/browser-matrix.json')):[];
export async function openLesson(api,id){
 const {evaluate,sleep}=api;
 const wait=async s=>{for(let i=0;i<100;i++){if(await evaluate(`!!document.querySelector(${JSON.stringify(s)})`))return;await sleep(100)}throw Error('UI not ready '+s)};
 const click=async s=>{await wait(s);await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(s)});e.focus();e.click()})()`);await sleep(250)};
 if(await evaluate(`!!document.querySelector('.learning-info-overlay')`))await click('[data-action="close-info"]');
 if(await evaluate(`!!document.querySelector('.presentation-workspace')`))await click('[data-action="back-domain"]');
 if(!await evaluate(`!!document.querySelector('#learning-objective-lesson')`)){
  if(!await evaluate(`!!document.querySelector('#learning-domain-3')`)){
   await wait('button');await evaluate(`[...document.querySelectorAll('button')].find(b=>b.innerText.includes('Open Certification'))?.click()`);await sleep(500);
   for(let i=0;i<80;i++){const ready=await evaluate(`[...document.querySelectorAll('button')].some(b=>b.innerText.includes('Learning →'))`);if(ready)break;await sleep(100)}
   await evaluate(`[...document.querySelectorAll('button')].find(b=>b.innerText.includes('Learning →')).click()`);await sleep(450);
  }
  await click('#learning-domain-3');
 }
 await click(id.includes('-0'+(id.includes('-04-')?4:id.includes('-05-')?5:6)+'-')&&/lesson-d3-0[456]-/.test(id)?'#learning-objective-3-2':'#learning-objective-3-1');
 await wait('#learning-objective-lesson');await evaluate(`(()=>{const s=document.querySelector('#learning-objective-lesson');s.value=${JSON.stringify(id)};s.dispatchEvent(new Event('change',{bubbles:true}))})()`);await click('#btn-start-learning');await wait('.presentation-workspace');await evaluate('document.fonts.ready');await sleep(250);
}
export async function runMatrix(api,id,width,height,language,start=0,end){
 const {send,evaluate,screenshot,sleep}=api,l=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/lessons/'+id+'.json')),lessonNumber=id.split('-')[2];end??=l.slides.length;
 const click=async s=>{await evaluate(`document.querySelector(${JSON.stringify(s)}).click()`);await sleep(140)};
 await openLesson(api,id);await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await click('#learning-language-'+language);
 if(await evaluate(`document.querySelector('[data-view]')?.getAttribute('data-view')==='reading'`))await click('[data-action="reading"]');
 await click('[data-action="slides"]');await click(`[data-slide-id="${l.slides[start].id}"]`);
 for(let i=start;i<end;i++){
  await evaluate('document.fonts.ready');await sleep(220);const prefix=`L${lessonNumber}-${width}-${language}-S${i+1}`,entry={lessonId:id,width,height,language,slide:l.slides[i].id};
  entry.presentation=await evaluate(`(()=>{const r=document.querySelector('[data-d3-logical-composition]'),s=document.querySelector('.learning-slide');return {view:document.querySelector('[data-view]')?.getAttribute('data-view'),composition:r?.getAttribute('data-d3-logical-composition'),stage:{width:Math.round(s.getBoundingClientRect().width),height:Math.round(s.getBoundingClientRect().height)},overflow:document.documentElement.scrollWidth>innerWidth+1||!r||r.scrollWidth>r.clientWidth+1||r.scrollHeight>r.clientHeight+1,minCopy:Math.min(...[...r?.querySelectorAll('.d3l-copy,.d3l-option-copy,.d3l-table td')||[]].map(n=>parseFloat(getComputedStyle(n).fontSize)))} })()`);
  if(entry.presentation.view!=='presentation'||entry.presentation.composition!==l.slides[i].id||entry.presentation.overflow)throw Error('Presentation failure '+prefix+' '+JSON.stringify(entry.presentation));entry.presentation.screenshot=await screenshot(prefix+'-presentation.png');
  await click('[data-action="reading"]');await sleep(120);entry.reading=await evaluate(`(()=>{const r=document.querySelector('.presentation-canvas');return {view:document.querySelector('[data-view]').getAttribute('data-view'),height:r.clientHeight,scrollHeight:r.scrollHeight,overflow:r.scrollWidth>r.clientWidth+1,text:r.innerText}})()`);
  if(entry.reading.view!=='reading'||entry.reading.overflow||!entry.reading.text.includes(l.slides[i].blocks[2].text[language]))throw Error('Reading failure '+prefix);delete entry.reading.text;entry.reading.screenshots=[];
  for(let part=0;part<Math.ceil(entry.reading.scrollHeight/(entry.reading.height-40));part++){await evaluate(`document.querySelector('.presentation-canvas').scrollTop=${part*(entry.reading.height-40)}`);await sleep(30);entry.reading.screenshots.push(await screenshot(prefix+`-reading-${part+1}.png`))}
  entry.reading.endVisible=await evaluate(`(()=>{const r=document.querySelector('.presentation-canvas'),e=r.querySelector('.learning-slide-body').lastElementChild;return e.getBoundingClientRect().bottom<=r.getBoundingClientRect().bottom+1})()`);if(!entry.reading.endVisible)throw Error('Reading end '+prefix);
  await click('[data-action="reading"]');await click('[data-action="lesson-info"]');await evaluate(`document.querySelector('.learning-info-source-explanations').open=true;document.querySelectorAll('.learning-info-slide-explanation')[${i}].open=true`);await sleep(80);
  entry.info=await evaluate(`(()=>{const p=document.querySelector('.learning-info-panel'),d=document.querySelectorAll('.learning-info-slide-explanation')[${i}];return {height:d.getBoundingClientRect().height,panelHeight:p.clientHeight,start:d.getBoundingClientRect().top-p.getBoundingClientRect().top+p.scrollTop,overflow:p.scrollWidth>p.clientWidth+1,text:d.innerText}})()`);
  if(entry.info.overflow||!entry.info.text.includes(l.slides[i].blocks[2].text[language]))throw Error('Info failure '+prefix);delete entry.info.text;entry.info.screenshots=[];
  for(let part=0;part<Math.ceil(entry.info.height/(entry.info.panelHeight-60));part++){await evaluate(`document.querySelector('.learning-info-panel').scrollTop=${entry.info.start+part*(entry.info.panelHeight-60)}`);await sleep(30);entry.info.screenshots.push(await screenshot(prefix+`-info-${part+1}.png`))}
  await click('[data-action="close-info"]');
  if(i===l.slides.length-1){entry.scenario=[];for(let choice=0;choice<4;choice++){
   await evaluate(`document.querySelector('[data-d3-logical-choice="${choice}"]').focus()`);await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',windowsVirtualKeyCode:13});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await sleep(120);
   const state=await evaluate(`({outcome:document.querySelector('[data-d3-logical-feedback]').getAttribute('data-outcome'),text:document.querySelector('[data-d3-logical-feedback]').innerText,selected:document.querySelector('[data-d3-logical-choice="${choice}"]').getAttribute('aria-pressed'),focus:document.activeElement.getAttribute('data-d3-logical-choice')})`);
   if(state.selected!=='true'||state.focus!==String(choice)||state.outcome!==(choice===2?'recommended':'reconsider')||!state.text.includes(l.slides[i].blocks[1].rows[choice][2][language]))throw Error('Feedback '+prefix+' '+choice);entry.scenario.push({choice,...state,screenshot:await screenshot(prefix+`-choice-${choice}.png`)})
  }await click('[data-d3-logical-reset]');if(await evaluate(`document.querySelector('[data-d3-logical-feedback]').getAttribute('data-outcome')`)!=='idle')throw Error('Reset '+prefix)}
  const old=results.findIndex(r=>r.lessonId===id&&r.width===width&&r.language===language&&r.slide===entry.slide);if(old>=0)results[old]=entry;else results.push(entry);fs.writeFileSync(qa+'/browser-matrix.json',JSON.stringify(results,null,2));if(i<end-1)await click('[data-action="next"]');
 }
 return {lesson:id,width,height,language,slides:end-start,modes:3*(end-start),totalEntries:results.length};
}
