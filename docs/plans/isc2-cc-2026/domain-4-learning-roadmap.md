# Domain 4 Learning Slides — implementation roadmap

2026-10-31. Governing task: complete Domain 4 continuously; human academic/visual acceptance remains separate. Entry HEAD `d5024844f6a8bf62c4ba9b46a6c01609667feb95`; clean entry tree. No existing lessons are regenerated. The earlier Domain 4 Reading Notes and Task 55 audits remain independent deliverables.

## Design and execution plan

Author nine coherent lessons grouped by the three official objectives. This is a teaching decomposition, not nine official objectives or an arbitrary slide quota. Each lesson ends with an original four-choice reasoning scenario. Presentation compositions use explicit connections, stacks, boundaries or comparisons. Full semantic bilingual blocks supply Reading and expandable Info explanations. Native code dispatches only these exact lesson/slide IDs; no schema, framework, dependencies or storage migration.

| Order | Stable lesson ID | Objective | Storyboard suffixes, in exact slide order |
| --- | --- | --- | --- |
| 1 | lesson-d4-01-network-request | 4.1 | request-path; osi-upper; osi-lower; tcpip-map; encapsulation; tcp-udp; delivery-decision |
| 2 | lesson-d4-02-addresses-vpns | 4.1 | address-notation; private-public; nat-boundary; dual-stack; vpn-scope; tunnel-decision |
| 3 | lesson-d4-03-traffic-rules-signals | 4.1 | transport-endpoints; service-clues; firewall-policy; detection-prevention; ai-monitoring; alert-decision |
| 4 | lesson-d4-04-wireless-connected-systems | 4.1 | wifi-controls; bluetooth-pairing; device-overlap; ot-change-safety; iot-lifecycle; wireless-signals; device-decision |
| 5 | lesson-d4-05-segmentation-paths | 4.2 | blast-radius; firewall-zones; dmz-path; vlan-routing; workload-policy; ai-environment-boundary; path-decision |
| 6 | lesson-d4-06-layered-zero-trust | 4.2 | independent-defenses; residual-dependencies; resource-decision; complementary-controls; access-decision |
| 7 | lesson-d4-07-cloud-characteristics | 4.3 | cloud-model; self-service; elasticity; measured-service; pooling-network-access; capacity-decision |
| 8 | lesson-d4-08-services-responsibility | 4.3 | iaas-stack; paas-stack; saas-boundary; faas-code; named-responsibilities; ai-hosting; duty-decision |
| 9 | lesson-d4-09-cloud-deployments | 4.3 | public-access-boundary; private-ownership; community-governance; hybrid-composition; multicloud-dependencies; deployment-decision |

Slide IDs are `slide-d4-NN-MM-SUFFIX` using the two-digit lesson/slide positions above. Inventory: 57 slides (7/6/6/7/7/5/6/7/6). IDs are frozen before authoring. FaaS and multi-cloud are useful source-supported extensions, not additional NIST service/deployment categories.

## Ordered quality gates

1. Read all 58 source files; verify official 2026 scope and technical corrections; record source limits.
2. Establish focused failing checks, author Lesson 1 and isolated Domain 4 presentation adapter, then run checks/spec/code review.
3. Repeat author/check/review sequentially for Lessons 2–9; publish only schema-valid reviewed bilingual records.
4. Run the full 57-slide production Chrome matrix at both desktop viewports and languages, all three modes; visually inspect screenshots, fix demonstrated defects, retake affected evidence. Exercise all scenario feedback, navigation, fullscreen, themes and reload/Resume.
5. Run shared and earlier-domain regressions, compare all protected entry hashes, finalize report/coverage/tracker. Stop before Domain 5.

Baseline shared suite: 435 tests, 430 pass, 5 fail before any production edits. Exact TAP and command are in `artifacts/qa/domain-4-completion/entry-node.*`; old task-entry snapshots and superseded objective/catalog assumptions require classification, not automatic edits to protected tests.

## Preservation and acceptance

Allowed existing-file edits: catalog Domain 4 branch and revision only; one additive renderer dispatch/import; exact reviewed Domain 4 Info allowlist; one stylesheet link; appended inventory addendum; new tracker row. All other existing files must match entry hashes. Progress remains `sec_cert_learning_progress_v1` schema 1. No original source edits, question generation, Vocabulary changes, Reading Notes edits, commits or pushes. Implementation completion is not human acceptance.

## Verified delivery — 2026-10-31

All five ordered gates completed. Nine lessons / 57 bilingual slides published in the order above; 290/290 Domain 4 checks pass. Chrome verified all 228 slide/viewport/language cases in Presentation, Reading and Info, all 144 feedback branches, 36 keyboard/language/fullscreen cases, 48 high-risk theme states, and nine independent reload/direct Resume cases plus Continue Learning. Screenshots were visually inspected; detailed evidence and historical/obsolete test failures are in `domain-4-completion-report.md`. All 3,112 non-allowlisted entry files remain byte-identical. Ready for human visual and academic review; no Domain 5 work started.
