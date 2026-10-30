import fs from 'node:fs';
const qa='artifacts/qa/domain-3-lesson-1';
const lesson=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/lessons/lesson-d3-01-roles-provisioning.json'));
const results=fs.existsSync(`${qa}/browser-matrix.json`)?JSON.parse(fs.readFileSync(`${qa}/browser-matrix.json`)):[];
export async function runMatrix({send,evaluate,screenshot,sleep},width,height,language,startIndex=0){
 const click=selector=>evaluate(`document.querySelector(${JSON.stringify(selector)})?.click()`);
 await click('[data-action="close-info"]');
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
 if(await evaluate(`document.querySelector('[data-view]')?.getAttribute('data-view')==='reading'`))await click('[data-action="reading"]');
 await click(`#learning-language-${language}`);await sleep(250);
 await evaluate(`for(let i=0;i<${6-startIndex};i++)document.querySelector('[data-action="previous"]').click()`);await sleep(350);
 for(let i=startIndex;i<7;i++){
  const prefix=`${width}-${language}-S${i+1}`,entry={width,height,language,slide:lesson.slides[i].id};
  await evaluate('document.fonts.ready');await sleep(160);
  entry.presentation=await evaluate(`(()=>{const r=document.querySelector('[data-iam-provisioning-composition]'),s=document.querySelector('.learning-slide'),v=document.querySelector('[data-view]');return {view:v?.getAttribute('data-view'),composition:r?.getAttribute('data-iam-provisioning-composition'),stage:{width:Math.round(s.getBoundingClientRect().width),height:Math.round(s.getBoundingClientRect().height)},viewport:[innerWidth,innerHeight],horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1,sceneOverflow:r?{x:r.scrollWidth>r.clientWidth+1,y:r.scrollHeight>r.clientHeight+1}:null,minCopyFont:r?Math.min(...[...r.querySelectorAll('.d3p-copy,.d3p-option-copy')].map(n=>parseFloat(getComputedStyle(n).fontSize))):null};})()`);
  if(entry.presentation.view!=='presentation'||!entry.presentation.composition||entry.presentation.horizontalOverflow||entry.presentation.sceneOverflow?.x||entry.presentation.sceneOverflow?.y)throw Error('Presentation failed '+prefix+' '+JSON.stringify(entry.presentation));
  entry.presentation.screenshot=await screenshot(prefix+'-presentation.png');
  await click('[data-action="reading"]');await sleep(160);
  entry.reading=await evaluate(`({view:document.querySelector('[data-view]').getAttribute('data-view'),native:!!document.querySelector('[data-iam-provisioning-composition]'),horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1,text:document.querySelector('.learning-slide').innerText})`);
  if(entry.reading.view!=='reading'||entry.reading.native||entry.reading.horizontalOverflow||!entry.reading.text.includes(lesson.slides[i].blocks[2].text[language]))throw Error('Reading failed '+prefix);
  delete entry.reading.text;entry.reading.screenshot=await screenshot(prefix+'-reading.png',true);
  await click('[data-action="reading"]');await sleep(160);await click('[data-action="lesson-info"]');
  await evaluate(`document.querySelector('.learning-info-source-explanations').open=true;document.querySelectorAll('.learning-info-slide-explanation')[${i}].open=true`);await sleep(100);
  entry.info=await evaluate(`(()=>{const p=document.querySelector('.learning-info-panel'),d=document.querySelectorAll('.learning-info-slide-explanation')[${i}],e=d.querySelector('[data-explanation-slide]');return {text:e.innerText,id:e.getAttribute('data-explanation-slide'),overflow:p.scrollWidth>p.clientWidth+1,start:d.getBoundingClientRect().top-p.getBoundingClientRect().top+p.scrollTop,height:d.getBoundingClientRect().height,panelHeight:p.clientHeight};})()`);
  if(entry.info.overflow||entry.info.id!==lesson.slides[i].id||!entry.info.text.includes(lesson.slides[i].blocks[2].text[language]))throw Error('Info failed '+prefix);
  delete entry.info.text;entry.info.screenshots=[];
  const count=Math.ceil(entry.info.height/(entry.info.panelHeight-60));
  for(let part=0;part<count;part++){
   await evaluate(`document.querySelector('.learning-info-panel').scrollTop=${entry.info.start+part*(entry.info.panelHeight-60)}`);await sleep(30);
   entry.info.screenshots.push(await screenshot(prefix+`-info-${part+1}.png`));
  }
  await click('[data-action="close-info"]');await sleep(80);
  if(i===6){entry.scenario=[];for(let choice=0;choice<4;choice++){
   await evaluate(`document.querySelector('[data-iam-choice="${choice}"]').focus()`);
   await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',windowsVirtualKeyCode:13});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
   await sleep(60);const outcome=await evaluate(`({selected:document.querySelector('[data-iam-choice="${choice}"]').getAttribute('aria-pressed'),outcome:document.querySelector('[data-iam-feedback]').getAttribute('data-outcome'),feedback:document.querySelector('[data-iam-feedback]').innerText,focus:document.activeElement.getAttribute('data-iam-choice'),view:document.querySelector('[data-view]').getAttribute('data-view')})`);
   if(outcome.selected!=='true'||outcome.focus!==String(choice)||outcome.view!=='presentation'||!outcome.feedback.includes(lesson.slides[i].blocks[1].rows[choice][2][language]))throw Error('Scenario failed '+prefix+' '+choice);
   entry.scenario.push({choice,...outcome,screenshot:await screenshot(prefix+`-choice-${choice}.png`)});
  }await click('[data-iam-reset]');if(await evaluate(`document.querySelector('[data-iam-feedback]').getAttribute('data-outcome')`)!=='idle')throw Error('Reset failed');}
  const old=results.findIndex(r=>r.width===width&&r.height===height&&r.language===language&&r.slide===entry.slide);if(old>=0)results[old]=entry;else results.push(entry);fs.writeFileSync(`${qa}/browser-matrix.json`,JSON.stringify(results,null,2));
  if(i<6){await click('[data-action="next"]');await sleep(100);}
 }
 return {width,height,language,slides:7,modes:21,scenarios:4,resultsTotal:results.length};
}
