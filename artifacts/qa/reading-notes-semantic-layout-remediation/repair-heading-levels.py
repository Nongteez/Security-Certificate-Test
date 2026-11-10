from repair_helpers import *
p='content/isc2-cc-2026/reading/domain-5.md';s=(ROOT/p).read_text(encoding='utf-8');lines=s.splitlines(keepends=True);has_group=False
for line in lines:
 if line.startswith('<h3 '):has_group=False
 elif line.startswith('<h4'):has_group=True
 elif line.startswith('<h5')and not has_group:
  new=line.replace('<h5','<h4',1).replace('</h5>','</h4>');change(p,line,new,'Promote direct Domain5 subsection definitions to H4; retain H5 only beneath actual H4 groups.')
css='''
/* Direct definitions now use their actual semantic level. */
.reading-body .reading-structure-pilot .reading-definition-unit > h4 { margin: 0 0 8px; font-size: 16px; line-height: 1.55; font-weight: 700; color: var(--text); }
'''
p='css/reading.css';s=(ROOT/p).read_text(encoding='utf-8');change(p,s[-100:],s[-100:]+css,'Keep definition typography consistent after semantic heading-level correction.')
