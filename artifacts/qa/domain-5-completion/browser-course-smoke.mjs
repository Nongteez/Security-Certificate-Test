import fs from 'node:fs';
const q='artifacts/qa/domain-5-completion/',base='content/isc2-cc-2026/learning/published/';
export async function courseSmoke(api){
 const {evaluate,send,sleep,screenshot}=api,catalog=JSON.parse(fs.readFileSync(base+'catalog.json')),results=[];
 const click=async s=>{await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(s)});if(!e)throw Error('Missing '+${JSON.stringify(s)});e.click()})()`);await sleep(300)};
 for(const d of catalog.domains){
  await send('Page.reload',{ignoreCache:true});await sleep(2200);
  await evaluate(`[...document.querySelectorAll('button')].find(b=>b.innerText.includes('Open Certification')).click()`);await sleep(600);
  for(let i=0;i<80;i++){if(await evaluate(`[...document.querySelectorAll('button')].some(b=>b.innerText.includes('Learning'))`))break;await sleep(100)}
  await evaluate(`[...document.querySelectorAll('button')].find(b=>b.innerText.includes('Learning ')).click()`);await sleep(600);
  await click('#learning-domain-'+d.id);const o=d.objectives.find(o=>o.lessons.some(l=>l.status==='published')),l=o.lessons.find(l=>l.status==='published');
  await click('#learning-objective-'+o.id.replace('.','-'));await evaluate(`(()=>{const s=document.querySelector('#learning-objective-lesson');s.value=${JSON.stringify(l.id)};s.dispatchEvent(new Event('change',{bubbles:true}))})()`);await click('#btn-start-learning');await sleep(400);
  if(!await evaluate(`!!document.querySelector('.learning-slide')`))throw Error('Course domain '+d.id);
  const title=await evaluate(`document.querySelector('.learning-slide').innerText`);const lesson=JSON.parse(fs.readFileSync(base+l.lessonPath));if(!lesson.slides.some(s=>title.includes(s.title.en)||title.includes(s.title.th)))throw Error('Course title '+d.id);
  const pics=[await screenshot('course-domain-'+d.id+'-presentation.png')];await click('[data-action="reading"]');pics.push(await screenshot('course-domain-'+d.id+'-reading.png'));await click('[data-action="reading"]');await click('[data-action="lesson-info"]');pics.push(await screenshot('course-domain-'+d.id+'-info.png'));await click('[data-action="close-info"]');results.push({domain:d.id,lesson:l.id,modes:3,screenshots:pics});
 }
 fs.writeFileSync(q+'course-smoke.json',JSON.stringify({cases:results,runtimeErrors:api.errors},null,2));return {domains:results.length,modes:15};
}
