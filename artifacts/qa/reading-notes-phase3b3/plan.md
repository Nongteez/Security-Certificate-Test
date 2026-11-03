# Phase 3B.3 implementation plan

Approved task: fix actual width use and visual hierarchy, preserving academic content and B2 semantics. Current dirty tree is the baseline; no worktree replacement, renewed approval gate or Git mutations.

Confirmed Chrome baseline: outer .app max-width 1320 makes .reading-screen max-width1560 unreachable. At1920, article934; direct prose768.768 while nested definitions916. B2 concept-unit84ch plus paragraph84ch evaluate in different font contexts. Gutter48 compresses1024 article575. The three privacy roles are separate full-width divs with h5 labels at the same level as their group caption.

1. Add failing content/scope/hierarchy contracts. Capture before94-range width geometry and reference screenshots.
2. Scope shell width1560, sidebar270/gutter32 (28 at constrained desktop) to published Reading Notes. Fill article's pane; ordinary prose96ch, definition prose104ch, lists/definition containers availablewidth. Keep table/diagram internals and global tokens untouched.
3. Add Privacy-context/role-group wrappers only in D1 1.1.6. Keep full wording/order; h6 role labels below h5 group; three columns only when context >=56rem, one column otherwise. Preserve headings, anchors and detail. Reduce only three long-clause emphasis runs, retain key English exam terms.
4. Verify representative14-state Chrome result; expand shared proven CSS, inspect all94 ranges at14 states for content-aware width/alignment/headings, sample screenshots before/after, validate collapsed sidebar and Phase2 journeys.
5. Run B2/all Reading/A-B/A2/B1 regressions; retain four historical assertions. Exact source-text fidelity and protected-file check, report94-row matrix and manifests. No3C.
