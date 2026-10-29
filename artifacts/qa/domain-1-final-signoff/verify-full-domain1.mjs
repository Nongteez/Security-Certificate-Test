import fs from 'node:fs';
import assert from 'node:assert/strict';
import {publishedLessons,validateLesson} from '../../../js/core/learning-schema.js';
import {semanticBlocks} from '../../../js/core/learning-visuals.js';
import {renderSlide} from '../../../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../../../js/ui/learning/lesson-info.js';
import {TestDocument,fire} from '../../../tools/fixtures/learning/dom.mjs';
const base='content/isc2-cc-2026/learning/published/',dir='artifacts/qa/domain-1-final-signoff/';
const catalog=JSON.parse(fs.readFileSync(base+'catalog.json')),all=publishedLessons(catalog).map(s=>JSON.parse(fs.readFileSync(base+s.lessonPath))),d1=all.filter(l=>l.domainId===1);
const text=n=>n?.hidden?'':[n?.textContent||'',...(n?.children||[]).map(text)].join(' ');
const evidence={kind:'Static/Node fixture observations, not browser visual QA',inventory:[],presentationRenders:0,readingRenders:0,infoExplanations:0,pairedObjects:0,feedbackStates:[]};
const ids=new Set();
function pairs(v){if(!v||typeof v!=='object')return;if('en'in v||'th'in v){assert.ok(typeof v.en==='string'&&v.en.trim());assert.ok(typeof v.th==='string'&&v.th.trim());evidence.pairedObjects++;return;}for(const x of Object.values(v))pairs(x);}
for(const lesson of d1){assert.equal(validateLesson(lesson).valid,true);pairs(lesson);evidence.inventory.push({id:lesson.id,objective:lesson.primaryObjectiveId,revision:lesson.revision,slides:lesson.slides.map(s=>({id:s.id,title:s.title.en}))});
 for(const language of ['th','en']){const doc=new TestDocument(),host=doc.createElement('article'),info=doc.createElement('div');doc.body.append(host,info);const ih=renderLessonInfo(info,{lesson,language});
  for(const slide of lesson.slides){if(language==='th'){assert.ok(!ids.has(slide.id),slide.id);ids.add(slide.id);}let h=renderSlide(host,{lesson,slide,language,mode:'presentation',interactionState:{}});await h.ready;assert.ok(host.children.length>0);evidence.presentationRenders++;h.destroy();
   h=renderSlide(host,{lesson,slide,language,mode:'reading'});const section=info.querySelector(`[data-explanation-slide="${slide.id}"]`)||(slide.layoutId==='hero-intro'?info.querySelector('.learning-info-intro-explanation'):null);assert.ok(section,slide.id+' Info missing');
   for(const b of semanticBlocks(slide)){const ps=b.kind==='text'?[b.text]:b.kind==='list'?b.items:b.kind==='table'?[...b.columns,...b.rows.flat()]:[];for(const p of ps){assert.ok(text(host).includes(p[language]),slide.id+' reading '+p[language]);assert.ok(text(section).includes(p[language]),slide.id+' Info '+p[language]);}}
   evidence.readingRenders++;evidence.infoExplanations++;h.destroy();
  }ih.destroy();
 }
}
assert.equal(ids.size,103);assert.equal(evidence.inventory.length,12);
const cases=[
 [0,6,'[data-option-key]',3],
 [1,6,'[data-action="aaa-reasoning"]',2],
 [2,3,'[data-action="nr-alter"]',2],
 [3,7,'[data-action="privacy-reason"]',2],
 [4,6,'[data-action="risk-change"]',2],
 [5,6,'[data-action="assessment-estimate"]',2],
 [6,7,'[data-response-choice]',3],
 [7,7,'[data-governance-choice]',3],
 [8,8,'[data-frameworks-choice]',4],
 [9,6,'[data-control-categories-choice]',3],
 [10,7,'[data-control-functions-choice]',3],
 [11,8,'[data-professional-conduct-choice]',3]
];
for(const language of ['th','en'])for(const [li,si,selector,count]of cases){const lesson=d1[li],slide=lesson.slides[si],state={},doc=new TestDocument(),host=doc.createElement('article');doc.body.append(host);const h=renderSlide(host,{lesson,slide,language,mode:'presentation',interactionState:state}),buttons=host.querySelectorAll(selector);assert.ok(buttons.length,slide.id+' interaction missing');
 for(let i=0;i<count;i++){if(buttons.length===1){if(i)fire(buttons[0],'click');}else fire(buttons[i],'click');const output=text(host);assert.ok(output.trim());if(li===5)assert.ok(output.includes(i?'20,000':'10,000'));evidence.feedbackStates.push({lessonId:lesson.id,slideId:slide.id,language,state:i,interaction:structuredClone(state),renderedText:output});}
 const saved=JSON.stringify(state);h.destroy();fire(buttons[0],'click');assert.equal(JSON.stringify(state),saved,slide.id+' listener cleanup');
}
assert.equal(evidence.feedbackStates.length,64);
assert.equal(10000*.5,5000);assert.equal(5000*2,10000);assert.equal(5000*4,20000);assert.equal(500*24,12000);assert.equal(10000-4000-3000,3000);
for(const lesson of all.filter(l=>l.domainId===2))for(const slide of lesson.slides)assert.ok(!['concept-split','scenario-reveal'].includes(slide.layoutId),'New Info rule must not match Domain2 authored layouts');
fs.writeFileSync(dir+'full-domain1-verification.json',JSON.stringify(evidence,null,2));console.log(JSON.stringify({lessons:evidence.inventory.length,slides:ids.size,presentation:evidence.presentationRenders,reading:evidence.readingRenders,info:evidence.infoExplanations,pairs:evidence.pairedObjects,interactionStateVisits:evidence.feedbackStates.length,financialChecks:5,domain2LayoutsUnmatched:true}));
