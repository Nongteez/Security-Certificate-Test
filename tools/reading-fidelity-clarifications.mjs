// Test-only exact migrations for Phase 3F wording and the authorized VIS threat redesign.
// Old fixtures remain immutable; every other byte/text comparison stays active.
import fs from 'node:fs';
const ledger=JSON.parse(fs.readFileSync(new URL('./fixtures/reading-phase3f-clarifications.json',import.meta.url),'utf8'));
export function applyReadingClarifications(text){
 const start=text.indexOf('topic-1-5-isc2-ethics');if(start<0)return text;
 const next=text.indexOf('topic-1-5-distinctions-scenarios',start),end=next<0?text.length:next;
 let section=text.slice(start,end);
 for(const {before,after}of ledger.readingReplacements)section=section.split(before).join(after);
 return text.slice(0,start)+section+text.slice(end);
}
const visualThreat=JSON.parse(fs.readFileSync(new URL('./fixtures/reading-visual-threat-revision.json',import.meta.url),'utf8'));
export function applyDiagramClarifications(text,id){
 if(id==='threatChain'){
  if(text!==visualThreat.before&&text!==visualThreat.after)throw new Error('Unrecorded threatChain baseline change');
  return visualThreat.after;
 }
 if(id!=='ethicsCanons')return text;
 for(const {before,after}of ledger.diagramReplacements)text=text.split(before).join(after);
 return text;
}
