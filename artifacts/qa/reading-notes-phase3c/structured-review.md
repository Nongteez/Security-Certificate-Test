# Single-flow structured implementation review

Scope: compare the Phase 3C starting filesystem with the final scoped implementation, not HEAD's combined previous/concurrent changes. This is agent technical review; human visual and accessibility acceptance remain pending.

## Findings

No blocking production issue found in the Phase 3C delta.

- CSS is restricted to Reading descendants. Native content sizing plus normal word boundaries handles real data without semantic classifiers, source rewrites or universal percentage columns. Three-or-more-column comparisons have a readable floor; two-column comparisons and existing document roles retain their own behavior.
- GRC's nowrap/fixed-layout interaction is removed by a more specific override; existing type sizes and padding are retained. Bilingual English spans can wrap at meaningful boundaries. Risk/scenario headers yield space without changing labels or concept order.
- Renderer changes affect only scroll-wrapper attributes. Native table scopes, cell content, row order and parseInline safety remain. Attribute quotes and ampersands are escaped; focused tests cover attempted attribute injection and real table counts/data.
- Keyboard behavior is native and tested using actual Tab/Shift+Tab/ArrowRight, not only tabindex assertions. Visible focus and contextual names are provided. No keyboard trap, inaccessible hidden column or custom scroll architecture is introduced.
- All 308 table states and all 1,316 subsection states pass; 240 navigation checks and 692 automated checks pass. The separate historical D1 suite stays 366/370; its four assertions were not modified. One unrelated-to-history wrapper-tag assertion was strengthened for intended accessibility semantics.
- Source hashes preserve all wording, formulas, numbers, anchors, original notes, prior Reading changes, diagrams and concurrent Slides. Only four existing files intentionally differ from phase start; exact deltas are isolated in implementation-delta.patch.
- Screenshot exports are distinct from application behavior. The 15px scrollbar reflow was reproduced, corrected in the capture fixture, and checked around each final export. Fractional vertical positioning under 1px is tolerated with a small image margin; table width and height must remain fixed. Earlier failed capture attempts remain recorded, not represented as production defects or final evidence.

## Remaining acceptance boundaries

Measurement-diagram fallback words at 320px, conceptual diagram semantics, the inherited floating-scroll-control corner occlusion and four historical diagram assertions are recorded separately. No diagram remediation, physical-device/cross-browser acceptance, screen-reader certification or human sign-off is claimed. No commit or integration action is requested or performed.
