import fs from 'node:fs';
import {openLesson} from './browser-matrix.mjs';
const q='artifacts/qa/domain-5-completion/';
export async function completion(api){
 const {evaluate,send,sleep,screenshot}=api,story=JSON.parse(fs.readFileSync(q+'storyboard.json')),results=[];
 const click=async s=>{await evaluate(`document.querySelector(${JSON.stringify(s)}).click()`);await sleep(130)};
 for(const l of story){await openLesson(api,l.id);await click('[data-action="slides"]');await click(`[data-slide-id="${l.slides[0].id}"]`);for(let i=1;i<l.slides.length;i++)await click('[data-action="next"]');
 if(!await evaluate(`!document.querySelector('[data-action="complete"]').disabled`))throw Error('Finish unavailable '+l.id);await click('[data-action="complete"]');
 const p=await evaluate(`JSON.parse(localStorage.getItem('sec_cert_learning_progress_v1')).lessons[${JSON.stringify(l.id)}]`);if(p.status!=='completed'||p.visitedSlideIds.length!==l.slides.length)throw Error('Completion '+l.id);
 results.push({id:l.id,status:p.status,visited:p.visitedSlideIds.length,lastSlideId:p.lastSlideId,screenshot:await screenshot('completed-'+l.id+'.png')});}
 await send('Page.reload',{ignoreCache:true});await sleep(1000);const after=await evaluate('JSON.parse(localStorage.getItem("sec_cert_learning_progress_v1"))');for(const l of story)if(after.lessons[l.id].status!=='completed')throw Error('Completion reload '+l.id);
 fs.writeFileSync(q+'completion-results.json',JSON.stringify({lessons:results,reloadPreserved:true,runtimeErrors:api.errors},null,2));return {completed:results.length,reloadPreserved:true};
}
export {courseSmoke} from './browser-course-smoke.mjs';
