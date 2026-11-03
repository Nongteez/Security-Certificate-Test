/** Original Domain 5 authoring manifest. Metadata never enters runtime objects.
 * Canonical English with real auxiliary Thai prompts; no confidential exam source.
 * Review evidence lives in sources/domain-5/production, separate from export. */
import authored from '../sources/domain-5/production/drafts.json' with {type:'json'};
export const rejectedDrafts=authored.filter(d=>d.status==='REJECTED');
export const drafts=authored.filter(d=>d.status!=='REJECTED');
export function buildProductionQuestion(draft){
 const letters=['A','B','C','D'];const key=letters[draft.correct];const correct=draft.choices[draft.correct];
 const incorrect=draft.choices.flatMap((c,i)=>i===draft.correct?[]:[{letter:letters[i],text_en:c[2],text_th:c[3]}]);
 return {id:draft.id,dom:5,question:draft.stem[0],options:draft.choices.map(c=>c[0]),correct_idx:draft.correct,
  explanation:`Option ${key} is correct. ${correct[2]} ${incorrect.map(c=>`Option ${c.letter} is incorrect: ${c.text_en}`).join(' ')}`,
  short_explanation_en:draft.takeaway,question_th:draft.stem[1],options_th:draft.choices.map(c=>c[1]),
  explanation_th:`ข้อ ${key} ถูกต้อง: ${correct[3]}\n${incorrect.map(c=>`- ข้อ ${c.letter} ไม่ถูกต้อง: ${c.text_th}`).join('\n')}`,
  explanation_detail:{correct:{en:correct[2],th:correct[3]},incorrect}};
}
export const stagedQuestions=drafts.map(buildProductionQuestion);
