import {scene,pair,icon} from './shared.js';
export function incident(host,context){
 const v=context.slide.visual,isAi=context.slide.id==='slide-09-ai-training-integrity',s=scene(host,context,'incident',isAi?context.slide.title:pair('One incident. Several security goals.','เหตุเดียว กระทบได้มากกว่าหนึ่งเป้าหมาย'),isAi?'AI APPLICATION / MODEL POISONING':'COMPOUND INCIDENT / HOSPITAL RANSOMWARE');
 const sequence=s.doc.createElement('div');sequence.className='v3-incident-sequence';
 for(const [i,stage]of v.stages.entries()){const phase=s.doc.createElement('section');phase.className=`v3-incident-phase v3-phase-${i}`;phase.append(s.put('span','v3-phase-number',`${i+1}`),icon(s.doc,isAi?['changed','database','server'][i]:['export','lock','changed'][i]),s.put('h4','v3-term',stage.label),s.put('p','v3-copy',stage.event),s.put('strong','v3-incident-goal',isAi?stage.pillar:stage.pillar.en),s.put('p','v3-caption',stage.impact));sequence.append(phase);if(i<2)sequence.append(s.put('span','v3-sequence-arrow','→'));}
 s.main.append(sequence);s.footer.append(s.put('p','v3-sequence-note',v.note),s.put('p','v3-copy',v.takeaway));return{destroy(){}};
}
