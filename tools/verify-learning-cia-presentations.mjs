import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
import {semanticBlocks} from '../js/core/learning-visuals.js';
const path=new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json',import.meta.url);
const lesson=JSON.parse(fs.readFileSync(path)), text=n=>[n.textContent||'',...n.children.map(text)].join(' ');
for(const language of ['th','en'])test(`seven distinct white presentation compositions render in ${language}`,()=>{
 const compositions=new Set();for(const slide of lesson.slides.slice(1)){const doc=new TestDocument(),host=doc.createElement('article'),h=renderSlide(host,{lesson,slide,language,mode:'presentation'});const c=host.querySelector('[data-cia-composition]');assert.ok(c,slide.id);compositions.add(c.getAttribute('data-cia-composition'));assert.ok(host.querySelector('h3'));assert.equal(host.querySelectorAll('.pillar-card, .incident-stage-card, .scenario-option-card').length,0);assert.ok(host.querySelector(`[lang="${language}"]`));h.destroy();}assert.equal(compositions.size,7);
});
test('complete semantic source explanations for Slides 2–8 are accessible in Lesson Info',()=>{
 for(const language of ['th','en']){const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const h=renderLessonInfo(host,{lesson,language});for(const slide of lesson.slides.slice(1)){const content=host.querySelector(`[data-explanation-slide="${slide.id}"]`);assert.ok(content,slide.id);for(const b of semanticBlocks(slide)){if(b.kind==='text')assert.ok(text(content).includes(b.text[language]),slide.id);if(b.kind==='list')for(const item of b.items)assert.ok(text(content).includes(item[language]),slide.id);}}h.destroy();}
});
test('compact investigation reveals all source reasons, keeps semantic keys through language change, and aborts listeners',()=>{
 const doc=new TestDocument(),host=doc.createElement('article'),state={},abort=new AbortController(),slide=lesson.slides[6];let h=renderSlide(host,{lesson,slide,language:'th',mode:'presentation',interactionState:state});const options=host.querySelectorAll('[data-option-key]');assert.equal(options.length,3);fire(options[1],'click');assert.equal(state.selectedKey,'integrity');assert.equal(state.revealed,true);for(const option of slide.visual.options)assert.ok(text(host).includes(option.reason.th));h.destroy();h=renderSlide(host,{lesson,slide,language:'en',mode:'presentation',interactionState:state});assert.equal(host.querySelector('[data-option-key="integrity"]').getAttribute('aria-pressed'),'true');const reveal=host.querySelector('[data-action="case-analysis"]');fire(reveal,'click');assert.equal(state.revealed,false);h.destroy();fire(reveal,'click');assert.equal(state.revealed,false);assert.equal('status' in state,false);
});
test('unanswered investigation does not mark any choice correct or incorrect',()=>{
 const doc=new TestDocument(),host=doc.createElement('article'),h=renderSlide(host,{lesson,slide:lesson.slides[6],language:'en',mode:'presentation',interactionState:{}});for(const b of host.querySelectorAll('[data-option-key]')){assert.equal(b.classList.contains('is-correct'),false);assert.equal(b.classList.contains('is-incorrect'),false);}h.destroy();
});
test('the entire recap source matrix remains available in Lesson Info in both languages',()=>{
 for(const language of ['th','en']){const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const h=renderLessonInfo(host,{lesson,language});const content=host.querySelector('[data-explanation-slide="slide-08-takeaways"]'),table=lesson.slides[7].blocks.find(b=>b.kind==='table');for(const cell of [...table.columns,...table.rows.flat()])assert.ok(text(content).includes(cell[language]));h.destroy();}
});
test('reviewed lesson bytes remain unchanged',()=>assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex'),'034d8ae332ddcb5b3669823f50bca6e8f9122926f2f698a331db50b385cd9a55'));
