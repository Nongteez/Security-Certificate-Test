from repair_helpers import *
p='js/ui/screen-reading.js'
change(p,"const images = [...container.querySelectorAll('.reading-article img')].map(img => img.decode?.().catch(() => {}));",'''const layoutTarget = location.anchorId && document.getElementById(location.anchorId);
    const images = [...container.querySelectorAll('.reading-article img')]
      .filter(img => img.complete || img.loading !== 'lazy' || (layoutTarget && (img.compareDocumentPosition(layoutTarget) & Node.DOCUMENT_POSITION_FOLLOWING)))
      .map(img => {
        // Only preceding images can shift this anchor. Offscreen lazy images
        // after it must not delay every reload until the fallback timer.
        if (!img.complete && img.loading === 'lazy') img.loading = 'eager';
        return img.decode?.().catch(() => {});
      });''','Do not stall anchor restoration on decode of unrelated offscreen lazy images; await layout-affecting images before the requested anchor.')
change(p,"if (!article || ![1, 2, 3, 4].includes(getActiveDomain().id)) return;","if (!article || !getActiveDomain().published) return;",'Apply existing Thai/English reading metadata to every published domain, including Domain5, using actual domain data.')
# Derive anchor→objective relationships from actual navigation rather than guessing a possibly nonexistent objective from ID text.
old="""const objMatch = initialAnchor.match(/^(?:topic|obj)-(\\d+)-(\\d+)/);
    if (objMatch) {
      expandedDomainSet.add(parseInt(objMatch[1], 10));
      expandedObjSet.add(`${objMatch[1]}.${objMatch[2]}`);
    }"""
new="""for (const domain of READING_DOMAINS) {
      const objective = (domain.objectives || []).find(obj => obj.anchorId === initialAnchor || (obj.topics || []).some(topic => topic.id === initialAnchor));
      if (objective) { expandedDomainSet.add(domain.id); expandedObjSet.add(objective.id); break; }
    }"""
change(p,old,new,'Only expand objectives present in the real navigation model, never a regex-invented objective.')
old="""const match = id?.match(/^(?:topic|obj)-(\\d+)-(\\d+)/);
    const objective = match ? `${match[1]}.${match[2]}` : null;"""
new="""const objective = (getActiveDomain().objectives || [])
      .find(obj => obj.anchorId === id || (obj.topics || []).some(topic => topic.id === id))?.id || null;"""
change(p,old,new,'Resolve active/expanded objective from current domain topic data while preserving separate user-controlled expansion state.')
css='''
/* Semantic remediation: preserve each diagram's native reading size. */
@container reading-diagram (min-width: 880px) and (max-width: 1050px) {
  .reading-body [data-diagram="backupRestoreChains"] .reading-diag-desktop,
  .reading-body [data-diagram="drSiteTiers"] .reading-diag-desktop,
  .reading-body [data-diagram="idsVsIpsInspectionFlow"] .reading-diag-desktop { display: none !important; }
  .reading-body [data-diagram="backupRestoreChains"] .reading-diag-mobile,
  .reading-body [data-diagram="drSiteTiers"] .reading-diag-mobile,
  .reading-body [data-diagram="idsVsIpsInspectionFlow"] .reading-diag-mobile { display: block !important; }
}
.reading-body .reading-diagram-card code { white-space: normal; overflow-wrap: anywhere; }
.reading-body .reading-diagram-card .reading-mob-tier-card > h5 { margin: 0 0 .6rem; }
.reading-body .reading-example-box {
  box-shadow: none;
  border-radius: 0;
  border: 0;
  border-left: 2px solid var(--line);
  background: transparent;
  padding: 12px 18px;
}
/* End semantic remediation. */
'''
s=(ROOT/'css/reading.css').read_text(encoding='utf-8');change('css/reading.css',s[-150:],s[-150:]+css,'Use existing mobile diagram representations where dense SVG labels become too small; simplify example framing after semantic grouping fixes.')
print('Shared reading-only repairs applied.')
