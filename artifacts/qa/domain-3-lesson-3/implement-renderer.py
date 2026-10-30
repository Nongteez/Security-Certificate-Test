from pathlib import Path
old=Path('css/learning-iam-review-deprovisioning.css').read_text(encoding='utf-8');s=old[:old.index('.learning-viewer .learning-iam-review-slide .d3r-table')];s=s.replace('Lesson 2','Lesson 3').replace('No selectors change Lesson 1','No selectors change Lessons 1–2').replace('learning-iam-review-slide','learning-iam-frameworks-slide').replace('d3r-','d3f-')
s+='''.learning-iam-frameworks-slide .d3f-guidance {display:grid;gap:3cqw;}
.learning-iam-frameworks-slide .d3f-guidance-row {display:grid;grid-template-columns:1fr 2fr;gap:3cqw;padding:1.5cqw 0;border-top:2px solid #4d91b3;align-items:start;}
.learning-iam-frameworks-slide .d3f-record {flex:1.1;border-left:3px solid #397f77;padding-left:1.5cqw;}
.learning-iam-frameworks-slide .d3f-record-fields {display:grid;grid-template-columns:auto 1fr;gap:1cqw;margin:0;}
.learning-iam-frameworks-slide .d3f-record-fields dd {margin:0;}
.learning-iam-frameworks-slide .d3f-governance-map {display:grid;grid-template-columns:1.7fr 1fr;gap:4cqw;align-items:center;}
.learning-iam-frameworks-slide .d3f-runtime {border-left:3px solid #397f77;padding-left:2cqw;display:grid;gap:1cqw;}
.learning-iam-frameworks-slide .d3f-sso-source {text-align:center;border-top:0;border-bottom:2px solid #4d91b3;}
.learning-iam-frameworks-slide .d3f-sso-branches {display:grid;grid-template-columns:1fr 1fr;gap:4cqw;}
'''
s+=old[old.index('.learning-iam-review-slide .d3r-decision'):old.index('@container')].replace('learning-iam-review-slide','learning-iam-frameworks-slide').replace('d3r-','d3f-')
s+='''@container (max-width:800px) {
 .learning-iam-frameworks-slide .d3f-scene {height:auto;min-height:100%;padding:24px;gap:24px;}
 .learning-iam-frameworks-slide .d3f-flow {flex-wrap:wrap;}
 .learning-iam-frameworks-slide .d3f-decision,.learning-iam-frameworks-slide .d3f-governance-map,.learning-iam-frameworks-slide .d3f-guidance-row,.learning-iam-frameworks-slide .d3f-sso-branches {grid-template-columns:1fr;}
 .learning-iam-frameworks-slide .d3f-option {grid-template-columns:24px 1fr;padding:12px;}
}
'''
Path('css/learning-iam-frameworks-tools.css').write_text(s,encoding='utf-8')
p=Path('js/ui/learning/renderers.js');s=p.read_text(encoding='utf-8');s="import {hasIamFrameworksToolsPresentation,renderIamFrameworksToolsPresentation} from './iam-frameworks-tools-presentations.js';\n"+s
needle='  const iamReview =';pos=s.index(needle);s=s[:pos]+'''  const iamFrameworks = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasIamFrameworksToolsPresentation(context);
  host.classList.toggle('learning-iam-frameworks-slide',Boolean(iamFrameworks));
  if (iamFrameworks) heading.classList.add('learning-sr-only');
'''+s[pos:]
s=s.replace('  if (iamReview) {\n    const handle=', '''  if (iamFrameworks) {
    const handle=renderIamFrameworksToolsPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (iamReview) {
    const handle=''');p.write_text(s,encoding='utf-8')
p=Path('js/ui/learning/lesson-info.js');s=p.read_text(encoding='utf-8').replace("'lesson-d3-02-review-deprovisioning'].includes", "'lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools'].includes");p.write_text(s,encoding='utf-8')
p=Path('index.html');s=p.read_text(encoding='utf-8');needle='    <link rel="stylesheet" href="./css/learning-iam-review-deprovisioning.css">';assert needle in s;s=s.replace(needle,needle+'\n    <link rel="stylesheet" href="./css/learning-iam-frameworks-tools.css">');p.write_text(s,encoding='utf-8')
p=Path('tools/verify-learning-d3-frameworks-tools.mjs');s=p.read_text(encoding='utf-8').replace('Approved Lesson 2','Approved Lesson 3').replace('Lesson 1 precedes Lesson 2','Lessons 1–2 precede Lesson 3');s=s.replace("assert.ok(o.lessons.findIndex(l=>l.id===l1id)<o.lessons.findIndex(l=>l.id===id));", "assert.deepEqual(o.lessons.map(l=>l.id),[l1id,'lesson-d3-02-review-deprovisioning',id]);");p.write_text(s,encoding='utf-8')
