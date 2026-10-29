// CIA revision 4: authorized final F07/F09 corrections; exact fields are tested in verify-learning-final-signoff.mjs. Phase1 and original-slide locks remain in verify-learning-academic-remediation.mjs and verify-learning-ai-applications.mjs.
import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {TestDocument} from './fixtures/learning/dom.mjs';
import {renderSlide} from '../js/ui/learning/renderers.js';
import {renderLessonInfo} from '../js/ui/learning/lesson-info.js';
const lessonPath = new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json',import.meta.url);
const lesson=JSON.parse(fs.readFileSync(lessonPath)), slide=lesson.slides[0];
const text=n=>[n.textContent,...n.children.map(text)].join(' ');
// Slide 1 is frozen for this task: preserve both languages and desktop reading equivalents.
const protectedIntroHashes={
  "th:presentation": "2a9d277257c629e92f06a24757da42395c71680da1155af02494d6c9afe38449",
  "th:reading": "60eba344bb16f979bd0aae2ddddc5ae407d84ee1018fbc09f730db328a70b757",
  "en:presentation": "62a143efacb494033815627127ad36343767d1c7997fb7de967d3d3cca16fc4c",
  "en:reading": "50496e6626cbe35771451c3611f532eebc15e78c0b2b328ace33ca3c92be4fb2"
};
test('accepted Slide 1 rendering remains byte-identical in TH/EN presentation and reading modes',()=>{
 const tree=n=>({tag:n.tagName,classes:n.className,text:n.textContent,attributes:[...n.attributes].sort(),children:n.children.map(tree)});
 for(const language of ['th','en'])for(const mode of ['presentation','reading']){const doc=new TestDocument(),host=doc.createElement('article'),h=renderSlide(host,{slide:lesson.slides[0],lesson,language,mode});assert.equal(crypto.createHash('sha256').update(JSON.stringify(tree(host))).digest('hex'),protectedIntroHashes[language+':'+mode]);h.destroy();}
});
for(const language of ['th','en']) test(`production Slide 1 renders editorial HTML and three goals in ${language}`,()=>{
 const doc=new TestDocument(),host=doc.createElement('article');const h=renderSlide(host,{lesson,slide,language,mode:'presentation'});
 assert.ok(host.querySelector('.cia-editorial'));
 assert.equal(host.querySelectorAll('.cia-editorial-goal').length,3);
 for(const term of ['Confidentiality','Integrity','Availability'])assert.ok(text(host).includes(term));
 assert.ok(host.querySelector('.cia-editorial-question').querySelector(`[lang="${language}"]`));
 assert.equal(host.querySelectorAll('.hero-mini-pill').length,0);
 assert.ok(host.querySelector('img').getAttribute('src').endsWith('/assets/learning/cia-editorial-document.svg'));
 h.destroy();
});
test('the existing mobile reading policy can show the responsive editorial content, while desktop Text View stays complete',()=>{
 const doc=new TestDocument();doc.defaultView={matchMedia:()=>({matches:true})};const host=doc.createElement('article');let h=renderSlide(host,{lesson,slide,language:'th',mode:'reading'});assert.ok(host.querySelector('.cia-editorial'));h.destroy();
 doc.defaultView=undefined;h=renderSlide(host,{lesson,slide,language:'th',mode:'reading'});assert.equal(!!host.querySelector('.cia-editorial'),false);for(const b of slide.blocks)if(b.kind==='text')assert.ok(text(host).includes(b.text.th));h.destroy();
});
test('Lesson Info exposes the exact full Slide 1 explanation in either language without changing source data',()=>{
 for(const language of ['th','en']){const doc=new TestDocument(),host=doc.createElement('div');doc.body.append(host);const h=renderLessonInfo(host,{lesson,language});const explanation=host.querySelector('.learning-info-intro-explanation');assert.ok(explanation);for(const b of slide.blocks){if(b.kind==='text')assert.ok(text(explanation).includes(b.text[language]));if(b.kind==='list')for(const item of b.items)assert.ok(text(explanation).includes(item[language]));}h.destroy();}
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(lessonPath)).digest('hex'),'87ded3584b7e5d0b6cd99cd299dff102b9d32feffdc5519d7c36fec8a17200bf');
});
