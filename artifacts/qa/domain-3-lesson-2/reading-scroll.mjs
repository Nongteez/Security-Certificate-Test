import fs from 'node:fs';
const qa='artifacts/qa/domain-3-lesson-2',results=[];
export async function checkReading({send,evaluate,screenshot,sleep},width,height,language){
 const click=s=>evaluate(`document.querySelector(${JSON.stringify(s)})?.click()`);
 await click('[data-action="close-info"]');if(await evaluate(`document.querySelector('[data-view]')?.getAttribute('data-view')==='reading'`)){await click('[data-action="reading"]');await sleep(180);}
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await click(`#learning-language-${language}`);await evaluate(`for(let i=0;i<7;i++)document.querySelector('[data-action="previous"]').click()`);await sleep(250);
 for(let i=0;i<8;i++){
  await click('[data-action="reading"]');await sleep(150);
  const entry={width,height,language,slide:i+1,...await evaluate(`(()=>{const e=document.querySelector('.presentation-canvas');return {height:e.clientHeight,scrollHeight:e.scrollHeight,overflow:getComputedStyle(e).overflowY,horizontalOverflow:e.scrollWidth>e.clientWidth+1};})()`),screenshots:[]};
  if(entry.horizontalOverflow||entry.height<200)throw Error('Reading geometry '+JSON.stringify(entry));
  const count=Math.ceil(entry.scrollHeight/(entry.height-40));
  for(let n=0;n<count;n++){await evaluate(`document.querySelector('.presentation-canvas').scrollTop=${n*(entry.height-40)}`);await sleep(30);entry.screenshots.push(await screenshot(`${width}-${language}-S${i+1}-reading-part-${n+1}.png`));}
  entry.endVisible=await evaluate(`(()=>{const e=document.querySelector('.presentation-canvas'),p=e.querySelector('.learning-slide-body').lastElementChild;return p.getBoundingClientRect().bottom<=e.getBoundingClientRect().bottom+1;})()`);
  if(!entry.endVisible)throw Error('Reading end not reachable '+JSON.stringify(entry));
  results.push(entry);fs.writeFileSync(`${qa}/reading-scroll.json`,JSON.stringify(results,null,2));
  await click('[data-action="reading"]');await sleep(100);if(i<7)await click('[data-action="next"]');
 }
 return {width,height,language,scrollCases:8,total:results.length};
}
