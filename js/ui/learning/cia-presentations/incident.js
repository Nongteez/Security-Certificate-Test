import {scene,pair,icon} from './shared.js';
export function incident(host,context){
 const v=context.slide.visual,s=scene(host,context,'incident',pair('One incident. Several security goals.','เหตุเดียว กระทบได้มากกว่าหนึ่งเป้าหมาย'),'COMPOUND INCIDENT / HOSPITAL RANSOMWARE');
 const sequence=s.doc.createElement('div');sequence.className='v3-incident-sequence';
 for(const [i,stage]of v.stages.entries()){const phase=s.doc.createElement('section');phase.className=`v3-incident-phase v3-phase-${i}`;phase.append(s.put('span','v3-phase-number',`${i+1}`),icon(s.doc,['export','lock','changed'][i]),s.put('h4','v3-term',stage.label),s.put('p','v3-copy',stage.event),s.put('strong','v3-incident-goal',stage.pillar.en),s.put('p','v3-caption',stage.impact));sequence.append(phase);if(i<2)sequence.append(s.put('span','v3-sequence-arrow','→'));}
 s.main.append(sequence);s.footer.append(s.put('p','v3-sequence-note',v.note),s.put('p','v3-copy',v.takeaway));return{destroy(){}};
}
