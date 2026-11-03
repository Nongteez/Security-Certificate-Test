# VIS-01–VIS-06 Targeted Implementation Plan

User-approved execution scope: implement six described defects in the current dirty workspace; no worktree replacement, Git mutations, unrelated modules or other diagram redesign. Single-flow execution. User specification supplies the approved goals and authorizes the targeted design choice.

Goal: resolve measured prose/spacing constraints and threat-example geometry with real before/after review.
Architecture: retain renderer, anchors, original Markdown, navigation and 23 other diagram payloads. Introduce a Reading-only CSS block before Phase 3B.2 with scoped specificity. Replace only threatChain with a single native responsive causal map; accessible relationship labels are normal HTML, separate from arrows. Controls occupy a shared band above the causal example, not a terminal node. Asset contains its Vulnerability; actor exploits it, successful attack can cause Impact. Keep all five existing bilingual definitions/examples. Plain concise bilingual qualification lives outside the main diagram card.
Stack: existing HTML/CSS/JS registry, no new runtime dependency. Installed Chrome/CDP for ten target states (five viewports × both themes).

Alternatives considered: (1) widen old SVG arrow gaps—retains ambiguous five-node row and duplicate mobile layout; (2) preferred single responsive native relationship map—normal-sized Thai text and explicit grouping; (3) whole-diagram redesign across registry—out of scope. Do not shrink text to fit.

1. Recover source/current diffs and record protected hashes; capture all ten Before states and actual computed widths/gaps/SVG bounds.
2. Add failing focused contracts for full-width prose, controlled spacing, causal edges, grouped asset/vulnerability, separate controls and outside concise caption. Verify expected failures.
3. Implement only css/reading.css and diagrams.threatChain. Preserve original five definition paragraphs/subtitles, all Markdown and other payloads. Cap expanded sidebar-free article at 76rem; ordinary prose follows actual article width.
4. Capture After states and validate connector labels vs nodes/lines, content bounds, font size, grouping, paragraph widths and spacing. Inspect actual desktop/mobile Light/Dark images and compare before/after. Correct only demonstrated issues.
5. Run focused/affected Reading suites, retaining strict preservation of all other diagrams. Any old byte-equality assertion for the intentionally replaced diagram receives a narrow documented migration with semantic/content checks, not blanket exclusion. Keep old fixtures immutable.
6. Verify representative unrelated diagrams/tables plus actual navigation position restoration; compare protected hashes. Save report, exact manifests and checkpoint. No human approval claimed.
