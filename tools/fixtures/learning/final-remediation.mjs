import fs from 'node:fs';
export const finalRemediationFields=JSON.parse(fs.readFileSync(new URL('./final-remediation-fields.json',import.meta.url)));
// Restore only the eight explicitly authorized fields for older preservation projections.
// Current content is independently asserted against each exact `after` value.
export function withOriginalFinalFields(lesson){
 const copy=structuredClone(lesson);
 for(const c of finalRemediationFields.filter(c=>c.lessonId===lesson.id)){
  const parent=c.path.slice(0,-1).reduce((v,k)=>v[k],copy);
  parent[c.path.at(-1)]=structuredClone(c.before);
 }
 return copy;
}
