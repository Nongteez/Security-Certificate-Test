# Phase 2 execution plan and decisions

Authorized scope: the supplied Phase 2 specification. No shared router/global state, educational content or redesign changes.

1. Capture baseline, read Task143/current code and reproduce reload/focus defects in Chrome. Done: all four reloads displaced; closed drawer admitted seven hidden focus targets; Escape failed.
2. Add failing tests for restoration intent, legacy compatibility and optional relative offset. Done: 12 fail, two existing behaviors pass.
3. Preserve V1 storage and existing absolute Y; add optional `lastAnchorOffset` for reflow-aware subsection context. Test cold deep link vs reload vs history vs generic Resume independently.
4. Fix reader-local lifecycle and actual heading tracking. Cancel delayed restores on user input and obsolete renders; await content/font layout once. Flush on exit/pagehide and suppress initialization saves. Store per-entry history snapshots without replacing the shared router.
5. Make the existing sidebar a non-modal navigation disclosure: inert/aria-hidden when closed, expanded/control attributes, focus entry, Escape/return, close on focus leaving, responsive state sync. No focus trap or dialog role.
6. Run all seven viewports × both themes × four domains in real Chrome; measure mid-section reload, explicit links, history, Resume, legacy/reopen, async cancellation, long tables/diagrams and actual keyboard traversal. Preserve red and final evidence.
7. Run existing Reading Notes + A/B regressions, fresh read-only review, final protected-file comparison, report and machine-readable manifest. No commits or acceptance approval.

Rulings: existing Read entry and per-domain selectors provide Resume; no separate overview Resume button is present, so no new UI is invented. Reading-local history listeners supplement existing routing; shared app/router/renderer remain untouched. Instant position/anchor restoration avoids an initialization animation overwriting user movement. Existing short titles, academic strings, tables/diagrams and all presentation structure remain unchanged.
