import fs from 'node:fs';
const qa='artifacts/qa/domain-3-lesson-2';
const ids=JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/lessons/lesson-d3-02-review-deprovisioning.json')).slides.map(s=>s.id);
export async function checkExtras({send,evaluate,screenshot,sleep}){
 const click=async s=>{await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(s)});if(!e)throw Error('missing ${s}');e.focus();e.click()})()`);await sleep(230)};
 const goto=async i=>{await click('[data-action="slides"]');await click(`[data-slide-id="${ids[i]}"]`)};
 await click('#viewer-theme-toggle');const theme=await evaluate(`document.documentElement.getAttribute('data-theme')`);
 const cases=[];
 for(const [width,height] of [[1366,768],[1920,1080]])for(const language of ['en','th']){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await click('#learning-language-'+language);
  for(const i of [0,2,5,7]){await goto(i);if(i===7)await click('[data-iam-review-choice="2"]');await evaluate('document.fonts.ready');
   const geometry=await evaluate(`(()=>{const r=document.querySelector('[data-iam-review-composition]');return {view:document.querySelector('[data-view]').getAttribute('data-view'),overflow:r.scrollWidth>r.clientWidth+1||r.scrollHeight>r.clientHeight+1}})()`);
   if(geometry.view!=='presentation'||geometry.overflow)throw Error('Light geometry');cases.push({width,height,language,slide:i+1,...geometry,screenshot:await screenshot(width+'-'+language+'-S'+(i+1)+'-light.png')});
  }
  await click('[data-action="lesson-info"]');cases.push({width,height,language,info:true,screenshot:await screenshot(width+'-'+language+'-info-light.png')});await click('[data-action="close-info"]');
 }
 await click('#learning-language-en');await goto(7);await click('[data-iam-review-choice="2"]');await click('#learning-language-th');
 const outcome=()=>evaluate(`document.querySelector('[data-iam-review-feedback]')?.getAttribute('data-outcome')`);
 if(await outcome()!=='recommended')throw Error('Language state lost');await click('[data-action="reading"]');await click('[data-action="reading"]');if(await outcome()!=='recommended')throw Error('Reading state lost');
 await click('#viewer-theme-toggle');if(await outcome()!=='recommended')throw Error('Theme state lost');
 // Fullscreen through the actual toolbar; preserve slide and transient scenario state.
 await evaluate(`document.querySelector('[data-action="fullscreen"]').focus()`);await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',windowsVirtualKeyCode:13});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await sleep(250);const fullscreen=await evaluate('!!document.fullscreenElement');await screenshot('fullscreen-scenario.png');
 await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await sleep(250);const restored=await evaluate(`!document.fullscreenElement&&document.querySelector('[data-iam-review-feedback]')?.getAttribute('data-outcome')==='recommended'`);
 if(!fullscreen||!restored)throw Error('Fullscreen restore failed');
 const result={theme,cases,languageReadingThemeStatePreserved:true,fullscreen,fullscreenStateRestored:restored};fs.writeFileSync(qa+'/extras.json',JSON.stringify(result,null,2));return {cases:cases.length,fullscreen,restored};
}
