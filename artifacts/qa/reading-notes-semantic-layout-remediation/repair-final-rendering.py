from repair_helpers import *
p='content/isc2-cc-2026/reading/domain-5.md';s=(ROOT/p).read_text(encoding='utf-8');wrappers=list(re.finditer(r'<div class="reading-table-wrapper">\s*\n([\s\S]*?)\n</div>',s));assert 0 < len(wrappers) <= 14,len(wrappers)
for m in wrappers:
 assert '\n|'in '\n'+m[1]and'---'in m[1];change(p,m[0],m[1].strip()+'\n','Remove redundant authored table wrapper; parser owns the single responsive wrapper. Preserve all table cells and inline bilingual headers.')
css='''
/* Diagram panels follow theme surfaces; white-on-colour badges need dark fills. */
.reading-body .reading-diagram-card svg .diag-box:not([class*="diag-box-"]) { fill: var(--panel-2); }
.reading-body .reading-diagram-card svg rect[fill="#1e293b"],
.reading-body .reading-diagram-card svg rect[fill="#334155"] { fill: var(--panel-2); }
.reading-body .reading-diagram-card svg rect[fill="#6366f1"] { fill: #4338ca; }
.reading-body .reading-diagram-card svg rect[fill="#0ea5e9"] { fill: #0369a1; }
.reading-body .reading-diagram-card svg rect[fill="#f59e0b"] { fill: #92400e; }
@container reading-diagram (min-width: 880px) and (max-width: 1050px) {
  .reading-body :is([data-diagram="dmzFirewallArchitecture"], [data-diagram="siemTelemetryPipeline"], [data-diagram="mitreAttackTacticTechnique"], [data-diagram="irpLifecycle"], [data-diagram="assetLifecycleAndEol"], [data-diagram="purpleTeamLoop"]) .reading-diag-desktop { display: none !important; }
  .reading-body :is([data-diagram="dmzFirewallArchitecture"], [data-diagram="siemTelemetryPipeline"], [data-diagram="mitreAttackTacticTechnique"], [data-diagram="irpLifecycle"], [data-diagram="assetLifecycleAndEol"], [data-diagram="purpleTeamLoop"]) .reading-diag-mobile { display: block !important; }
}
'''
p='css/reading.css';s=(ROOT/p).read_text(encoding='utf-8');change(p,s[-100:],s[-100:]+css,'Repair measured theme contrast and keep complex existing diagrams readable in laptop-width content columns.')
