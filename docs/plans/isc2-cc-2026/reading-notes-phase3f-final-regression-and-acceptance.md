# Phase 3F — Final Cross-Domain Regression & Acceptance Preparation

**Phase 3F Complete — Pending Human Acceptance**

Verified 2 November 2026 (Asia/Bangkok). Human visual and academic acceptance is **not approved**. Two historical test-suite exceptions and one academic provenance exception remain explicit below. No new failing suite or confirmed implementation regression remains.

## Entry gate and actual scope

Phase 3E completed before Phase 3F began: all 24 diagrams × fourteen states, cloud legend bounds, measurement at 320px, content-aware SVG/reflow sizing, contrast and representative image review passed. Its report, source hashes, 96 captures and 23-suite results were saved first. Phase 3F uses **current production**, not inherited success counts.

Published Reading coverage is **94 subsections: 24 / 29 / 17 / 24**, all **24 diagrams** and **22 tables**. Every subsection has fourteen current DOM/geometry observations; all diagrams and tables share that matrix. Viewports: 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568; Light and Dark. Installed Chrome **156.0.8078.74**, isolated profiles and localhost CDP; no user browser profile was modified.

## Confirmed fixes in this phase

### Floating-control occlusion

The existing `#btn-reading-scroll-nav` was fixed at right 28px (desktop) / 20px (mobile), intersecting the Reading column. Reproduction aligned actual text fragments with the control and found overlap in **11 of 12** sampled domain/width cases. The label was Back to top; the affected content included ordinary paragraphs and the lower-right PCI DSS explanation. Before/after PNGs retain the actual viewport.

The button now sits in the existing outer gutter: **desktop right 2px, 42×42px; mobile right 0, 24×44px**. Accounting for Chrome's 15px desktop scrollbar was necessary: right 12px still overlapped by about 6px. No article width was removed and the control was not hidden. Inset focus outline remains visible at the viewport edge; Reading bottom spacing includes a safe-area allowance. The 24px narrow target meets the AA minimum target dimension; human touch preference remains a review item.

Final reproduction: **12/12 cases, no overlap**. Every full-matrix context additionally proves the control lies outside the article and has at least a 24px target. **56 actual keyboard cases / 168 checks** prove visible focus and Enter activation to top and bottom. Reduced-motion mode makes those destination checks deterministic and is itself an accessibility path; normal navigation/scroll restoration was separately exercised.

Before: [occlusion screenshot](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/before-occlusion-d1-390.png>). After: [gutter screenshot](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/after-occlusion-d1-390.png>). Keyboard: [320px focused control](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/control-focus-320-dark.png>).

### Language and contrast

Reading body metadata is Thai (`lang=th`); purely English headings/block passages receive `lang=en`. Mixed Thai-English technical terms remain within their Thai context; no attempt was made to rewrite borrowed terminology. Metadata is restricted to published Domains 1–4 using the existing active-domain API. No lesson text, navigation logic or progress schema is changed by the annotation function. A final four-domain probe was repeated after adding that domain guard.

Full-page contrast testing found inherited faint concept subtitles/context notes, canon badges, scenario categories/answer labels and article metadata. Reading-scoped foreground fixes raise them to readable theme colors; the small instructional badges/scenario labels were raised to 14px. Minimum measured **prose text contrast 4.63:1**, **diagram text contrast 4.76:1**. Diagram instructional text remains at least **14.42px**. These are targeted rendered measurements, not a full WCAG certification or a universal minimum-font-size rule.

### Ethics precedence — unresolved provenance, neutral production wording

**D1-N08 remains “Requires additional authoritative current-course evidence.”** The original notes explicitly enumerate four canons and an S–A–P–P mnemonic; they do not establish a universal earlier-canon-always-wins algorithm. The current official [ISC2 ethics page](https://www.isc2.org/ethics) and [examination agreement](https://www.isc2.org/exams/exam-agreement) establish mandatory professional duties and ethical judgment. Their silence does **not disprove** historical authorized precedence teaching.

Following the master's explicit instruction for an unresolved case, the lesson and diagram retain all four canonical duties, numbering, examples of professional obligations, the Canon 2 qualification and mnemonic, while removing unverified universal override language and supersedes connectors. Production now teaches contextual professional judgment. This does not assert that ISC2 has never taught an order of precedence.

Exact new bilingual rule: **พิจารณาหน้าที่ตาม Canon ทั้งสี่ร่วมกับข้อเท็จจริงและบริบท หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันอัลกอริทึมตัดสินความขัดแย้งแบบตายตัว. Use professional ethical judgment; numbering alone does not establish a universal conflict-resolution algorithm.**

Trace: `ISC2 Update 2026/Domain 1/D1 sum.md:1540–1619`, `Domain 1.md:263–273`; current source `content/isc2-cc-2026/reading/domain-1.md`, anchor `topic-1-5-isc2-ethics`; registry `ethicsCanons`. Exact literal before/after pairs are in `academic-exception.json` and `tools/fixtures/reading-phase3f-clarifications.json`, with human approval explicitly false.

**Cross-module exception:** the protected Question Bank still teaches highest/strict priority in `data/certs/isc2/cc/versions/2026/questions/domain-1.js:2725,3091,3099`. It was not modified. Human academic review must reconcile that interpretation with authorized current-course evidence. It is not silently labelled false, resolved, or accepted.

## Current browser results

| Verification | Coverage / checks | Result |
|---|---:|---|
| Full Reading matrix | 94×14 subsection states; 24×14 diagrams; 22×14 tables; **6,588 checks** | Pass |
| Navigation / progress | 56 domain/view/theme journeys; **920 checks** | Pass |
| Native keyboard scroll control | 56 cases; **168 checks** | Pass |
| Final occlusion / language reproduction | 12 cases; **24 checks** | Pass |
| Browser total | **7,700 checks** | Zero final failures |
| Independent source/table/anchor reconciliation | **448 derived checks** | Pass |

Counts are check executions and overlap in subject matter; they are not claims of that many independent educational concepts. Current named regions, accessible heading names via Chrome AX tree, logical heading order, whole words, visible text bounds, correct diagram relationships, table scope/rows/padded words, focus/Tab exit/ArrowRight, language metadata, floating gutter and settled layout were checked. All five numeric superscript occurrences are preserved by the automated structural/rendering suite.

Wide tables intentionally retain native horizontal scroll inside a named region. Their keyboard entry/exit and ArrowRight movement were tested where overflowing; there is no page-level horizontal scroll. A partially visible column in a start-position screenshot is an accessible scrollable column, not discarded content.

Navigation checks measure actual scroll offsets after reload, Resume, direct links, Back/Forward and cross-domain return; verify inactive-domain progress is retained; and exercise objective/subsection state, desktop sidebar scrolling, closed-mobile Tab exclusion, drawer focus entry, Shift+Tab, Escape return and responsive collapse. Each of the 56 journeys seeds a **global-fields-only v1 record** and verifies actual resumed scroll position. No migration or schema change was made.

## Complete subsection matrix

Each row has current source/heading geometry, word/Math checks and fourteen configuration observations in `subsection-coverage.json`. Earlier source-line fields are retained for traceability; current anchors are unchanged.

| Domain | Subsection / anchor | States | Result |
|---|---|---:|---|
| 4 | 4.1.1 Network Fundamentals &amp; Topologies: พื้นฐานเครือข่ายและขอบเขต — `topic-4-1-fundamentals-topologies` | 14/14 | Pass |
| 4 | 4.1.2 OSI 7-Layer Reference Model: แบบจำลองอ้างอิง 7 ชั้น — `topic-4-1-osi-model` | 14/14 | Pass |
| 4 | 4.1.3 TCP/IP 4-Layer Architecture Mapping: แบบจำลอง TCP/IP ในทางปฏิบัติ — `topic-4-1-tcp-ip-mapping` | 14/14 | Pass |
| 4 | 4.1.4 IPv4 Addressing, Subnetting, Classes &amp; NAT: ระบบหมายเลขไอพีเวอร์ชัน 4 — `topic-4-1-ipv4-cidr-nat` | 14/14 | Pass |
| 4 | 4.1.5 IPv6 Architecture, SLAAC &amp; Dual-Stack: การขยายขีดความสามารถสู่ IPv6 — `topic-4-1-ipv6-architecture` | 14/14 | Pass |
| 4 | 4.1.6 Transport Layer Protocols (TCP vs. UDP): โพรโทคอลในระดับการขนส่ง — `topic-4-1-tcp-vs-udp` | 14/14 | Pass |
| 4 | 4.1.7 Network Ports, Multiplexing &amp; Core Services: พอร์ตและการระบุบริการ — `topic-4-1-ports-multiplexing` | 14/14 | Pass |
| 4 | 4.1.8 Network Devices &amp; Security Filtering: อุปกรณ์เครือข่ายและการกรองข้อมูล — `topic-4-1-network-devices` | 14/14 | Pass |
| 4 | 4.1.9 Wireless Security: Wi-Fi, Bluetooth &amp; VPN: ความมั่นคงปลอดภัยไร้สาย — `topic-4-1-wireless-security` | 14/14 | Pass |
| 4 | 4.1.10 Network Threats, Embedded Systems &amp; IoT Security: ภัยคุกคามและอุปกรณ์อัจฉริยะ — `topic-4-1-network-threats-iot` | 14/14 | Pass |
| 4 | 4.2.1 Network Segmentation &amp; Blast Radius Reduction: การแบ่งส่วนเครือข่าย — `topic-4-2-segmentation-blast-radius` | 14/14 | Pass |
| 4 | 4.2.2 Firewall Security Zones &amp; Trust Boundaries: เขตความปลอดภัยและขอบเขตความเชื่อถือ — `topic-4-2-firewall-zones` | 14/14 | Pass |
| 4 | 4.2.3 Demilitarized Zone (DMZ) Architecture: เขตปลอดทหารและเครือข่ายกันชน — `topic-4-2-dmz-architecture` | 14/14 | Pass |
| 4 | 4.2.4 Virtual Local Area Networks (VLANs) &amp; Routing: เครือข่ายเสมือนระดับสวิตช์ — `topic-4-2-vlans-routing` | 14/14 | Pass |
| 4 | 4.2.5 Micro-Segmentation &amp; East-West Traffic Control: การแบ่งส่วนเครือข่ายระดับย่อย — `topic-4-2-microsegmentation` | 14/14 | Pass |
| 4 | 4.2.6 Defense in Depth Layered Strategy: การป้องกันแบบเชิงลึกหลายชั้น — `topic-4-2-defense-in-depth` | 14/14 | Pass |
| 4 | 4.2.7 Zero Trust Architecture (ZTA) in Networking: สถาปัตยกรรมแบบไม่ไว้วางใจสิ่งใด — `topic-4-2-zero-trust` | 14/14 | Pass |
| 4 | 4.3.1 Cloud Computing Foundations &amp; 5 Characteristics: คุณลักษณะสำคัญ 5 ประการ — `topic-4-3-cloud-characteristics` | 14/14 | Pass |
| 4 | 4.3.2 Cloud Service Models (IaaS, PaaS, SaaS, FaaS): รูปแบบการให้บริการคลาวด์ — `topic-4-3-service-models` | 14/14 | Pass |
| 4 | 4.3.3 The Shared Responsibility Model: โมเดลความรับผิดชอบร่วม — `topic-4-3-shared-responsibility` | 14/14 | Pass |
| 4 | 4.3.4 Cloud Deployment Models: รูปแบบการติดตั้งระบบคลาวด์ — `topic-4-3-deployment-models` | 14/14 | Pass |
| 4 | 4.3.5 Critical Deployment Distinction: ความแตกต่างระหว่าง Hybrid vs. Multi-Cloud — `topic-4-3-hybrid-vs-multicloud` | 14/14 | Pass |
| 4 | 4.3.6 Cloud Network Architecture &amp; Security Controls: สถาปัตยกรรมเครือข่ายคลาวด์ — `topic-4-3-cloud-network-controls` | 14/14 | Pass |
| 4 | Domain 4 Review &amp; Practical Analysis — `topic-4-review-scenarios` | 14/14 | Pass |
| 1 | 1.1.1 Core Security Concepts & Assets — `topic-1-1-core-concepts` | 14/14 | Pass |
| 1 | 1.1.2 The CIA Triad — Confidentiality, Integrity, Availability — `topic-1-1-cia-triad` | 14/14 | Pass |
| 1 | 1.1.3 Identification & Authentication (AAA) — `topic-1-1-identification-authentication` | 14/14 | Pass |
| 1 | 1.1.4 Multi-Factor Authentication (MFA) — `topic-1-1-mfa` | 14/14 | Pass |
| 1 | 1.1.5 Authorization & Accounting — `topic-1-1-authorization-accounting` | 14/14 | Pass |
| 1 | 1.1.6 Non-repudiation, Privacy & Data Protection — `topic-1-1-privacy-data-protection` | 14/14 | Pass |
| 1 | 1.1.7 Zero Trust & Defense in Depth — `topic-1-1-zero-trust-defense-in-depth` | 14/14 | Pass |
| 1 | 1.2.1 Risk Definition & Core Components — `topic-1-2-risk-components` | 14/14 | Pass |
| 1 | 1.2.2 Quantitative Risk Analysis & Formulas — `topic-1-2-quantitative-risk` | 14/14 | Pass |
| 1 | 1.2.3 Risk Management Lifecycle — `topic-1-2-risk-lifecycle` | 14/14 | Pass |
| 1 | 1.2.4 Risk Treatment: The 4 Responses — `topic-1-2-risk-treatment` | 14/14 | Pass |
| 1 | 1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance — `topic-1-2-inherent-residual-risk` | 14/14 | Pass |
| 1 | 1.3.1 Security Governance Fundamentals — `topic-1-3-governance-fundamentals` | 14/14 | Pass |
| 1 | 1.3.2 Laws and Regulations — `topic-1-3-laws-regulations` | 14/14 | Pass |
| 1 | 1.3.3 Security Frameworks — `topic-1-3-security-frameworks` | 14/14 | Pass |
| 1 | 1.3.4 Security Document Hierarchy — `topic-1-3-document-hierarchy` | 14/14 | Pass |
| 1 | 1.3.5 Governance, Risk, and Compliance (GRC) — `topic-1-3-grc` | 14/14 | Pass |
| 1 | 1.4.1 Security Control Categories — `topic-1-4-control-categories` | 14/14 | Pass |
| 1 | 1.4.2 Security Control Types / Functions — `topic-1-4-control-types` | 14/14 | Pass |
| 1 | 1.4.3 Contextual & Overlapping Controls — `topic-1-4-overlapping-controls` | 14/14 | Pass |
| 1 | 1.5.1 Professional Code of Conduct & Authority Boundaries — `topic-1-5-code-of-conduct` | 14/14 | Pass |
| 1 | 1.5.2 Due Care vs. Due Diligence — `topic-1-5-due-care-due-diligence` | 14/14 | Pass |
| 1 | 1.5.3 ISC2 Code of Ethics (The 4 Canons) — `topic-1-5-isc2-ethics` | 14/14 | Pass |
| 1 | 1.5.4 Concept Distinctions, Scenarios & Quick Review — `topic-1-5-distinctions-scenarios` | 14/14 | Pass |
| 2 | 2.1.1 GRC Foundations: 3 Pillars Defined — `topic-2-1-grc-foundations` | 14/14 | Pass |
| 2 | 2.1.2 The Purpose of GRC: วัตถุประสงค์ของการบูรณาการ — `topic-2-1-purpose-of-grc` | 14/14 | Pass |
| 2 | 2.1.3 The Importance of GRC: ความสำคัญต่อความทนทานขององค์กร — `topic-2-1-importance-of-grc` | 14/14 | Pass |
| 2 | 2.1.4 GRC Frameworks and Standards — `topic-2-1-frameworks-standards` | 14/14 | Pass |
| 2 | 2.1.5 Centralized GRC Tools and Platforms — `topic-2-1-grc-tools` | 14/14 | Pass |
| 2 | 2.1.6 The Risk Register: Structure, Ownership, and Tracking — `topic-2-1-risk-register` | 14/14 | Pass |
| 2 | 2.2.1 Business Continuity (BC) Foundations — `topic-2-2-bc-foundations` | 14/14 | Pass |
| 2 | 2.2.2 The Business Continuity Plan (BCP) — `topic-2-2-bcp-components` | 14/14 | Pass |
| 2 | 2.2.3 Business Impact Analysis (BIA) — `topic-2-2-bia` | 14/14 | Pass |
| 2 | 2.2.4 Disaster Recovery (DR) & IT Scope — `topic-2-2-dr-it-scope` | 14/14 | Pass |
| 2 | 2.2.5 BC vs. DR: Scope & Relationship — `topic-2-2-bc-vs-dr` | 14/14 | Pass |
| 2 | 2.2.6 RTO and RPO Recovery Metrics — `topic-2-2-rto-rpo` | 14/14 | Pass |
| 2 | 2.2.7 DRP, Backup & Recovery Sites — `topic-2-2-drp-sites` | 14/14 | Pass |
| 2 | 2.2.8 DR Testing, Exercises & Drills — `topic-2-2-dr-testing` | 14/14 | Pass |
| 2 | 2.3.1 Security Culture as Shared Responsibility — `topic-2-3-security-culture` | 14/14 | Pass |
| 2 | 2.3.2 Security Leadership & Accountability — `topic-2-3-security-leadership` | 14/14 | Pass |
| 2 | 2.3.3 Security Awareness Programs — `topic-2-3-awareness-programs` | 14/14 | Pass |
| 2 | 2.3.4 Social Engineering & Psychology — `topic-2-3-social-engineering-psychology` | 14/14 | Pass |
| 2 | 2.3.5 Common Social Engineering Techniques — `topic-2-3-social-engineering-techniques` | 14/14 | Pass |
| 2 | 2.3.6 Password Protection & Modern Authentication — `topic-2-3-password-protection` | 14/14 | Pass |
| 2 | 2.4.1 Rationale for Security Measurement — `topic-2-4-measurement-rationale` | 14/14 | Pass |
| 2 | 2.4.2 Security Metrics Characteristics — `topic-2-4-metrics-characteristics` | 14/14 | Pass |
| 2 | 2.4.3 Incident Response Metrics: MTTD & MTTR — `topic-2-4-mttd-mttr` | 14/14 | Pass |
| 2 | 2.4.4 Key Performance (KPI) vs. Risk (KRI) Indicators — `topic-2-4-kpi-vs-kri` | 14/14 | Pass |
| 2 | 2.4.5 Security Dashboards: Operational Visualization — `topic-2-4-dashboards` | 14/14 | Pass |
| 2 | 2.4.6 Security Scorecards: Benchmark Comparison — `topic-2-4-scorecards` | 14/14 | Pass |
| 2 | 2.4.7 Cybersecurity Reports: Formal Communication — `topic-2-4-reports` | 14/14 | Pass |
| 2 | 2.4.8 The 6-Part Measurement Memory Aid — `topic-2-4-memory-aid` | 14/14 | Pass |
| 2 | Domain 2 Review &amp; Practical Analysis — `topic-2-review-scenarios` | 14/14 | Pass |
| 3 | 3.1.1 IAM Overview &amp; The JML Lifecycle: วงจรชีวิตตัวตนดิจิทัล — `topic-3-1-jml-lifecycle` | 14/14 | Pass |
| 3 | 3.1.2 Roles Definition &amp; Permission Alignment: การกำหนดบทบาทหน้าที่ — `topic-3-1-roles-definition` | 14/14 | Pass |
| 3 | 3.1.3 Identity Provisioning: ตัวอย่างกิจกรรม 6 ส่วนในการจัดสรรสิทธิ์ — `topic-3-1-provisioning` | 14/14 | Pass |
| 3 | 3.1.4 Access Review &amp; 6 Core Audit Findings: การทบทวนสิทธิ์เป็นระยะ — `topic-3-1-access-review` | 14/14 | Pass |
| 3 | 3.1.5 Deprovisioning: Triggers &amp; Revocation Practices — `topic-3-1-deprovisioning` | 14/14 | Pass |
| 3 | 3.1.6 IAM Management Frameworks: NIST SP 800-63 vs CSF — `topic-3-1-iam-frameworks` | 14/14 | Pass |
| 3 | 3.1.7 IAM Technology Stack: Directory Services, IdPs &amp; Access Platforms — `topic-3-1-iam-tools` | 14/14 | Pass |
| 3 | 3.1.8 Principle of Least Privilege (PoLP): หลักสิทธิ์ขั้นต่ำที่จำเป็น — `topic-3-1-least-privilege` | 14/14 | Pass |
| 3 | 3.2.1 Logical vs. Physical Access Controls: สถาปัตยกรรมการควบคุม — `topic-3-2-logical-controls` | 14/14 | Pass |
| 3 | 3.2.2 Segregation of Duties (SoD): การแบ่งแยกหน้าที่ความรับผิดชอบ — `topic-3-2-sod` | 14/14 | Pass |
| 3 | 3.2.3 Least Privilege vs. Segregation of Duties: การเปรียบเทียบเชิงลึก — `topic-3-2-polp-vs-sod` | 14/14 | Pass |
| 3 | 3.2.4 Discretionary Access Control (DAC): การควบคุมตามดุลยพินิจของเจ้าของ — `topic-3-2-dac` | 14/14 | Pass |
| 3 | 3.2.5 Mandatory Access Control (MAC): การควบคุมแบบบังคับตามป้ายกำกับ — `topic-3-2-mac` | 14/14 | Pass |
| 3 | 3.2.6 Role-Based Access Control (RBAC): การควบคุมตามบทบาทหน้าที่ — `topic-3-2-rbac` | 14/14 | Pass |
| 3 | 3.2.7 Attribute-Based Access Control (ABAC): การควบคุมตามคุณลักษณะและบริบท — `topic-3-2-abac` | 14/14 | Pass |
| 3 | 3.2.8 Master Access Control Models Comparison Matrix: สรุปเปรียบเทียบ 4 โมเดล — `topic-3-2-models-matrix` | 14/14 | Pass |
| 3 | Domain 3 Review &amp; Practical Analysis — `topic-3-review-scenarios` | 14/14 | Pass |

## Diagram and table matrices

| D | Diagram | Min px | Min contrast | States |
|---|---|---:|---:|---:|
| 1 | `threatChain` | 15.00 | 14.43:1 | 14/14 pass |
| 1 | `ciaTriad` | 15.00 | 14.85:1 | 14/14 pass |
| 1 | `loadBalancer` | 15.00 | 14.03:1 | 14/14 pass |
| 1 | `aaaLifecycle` | 15.50 | 16.27:1 | 14/14 pass |
| 1 | `privacyFlow` | 15.00 | 14.03:1 | 14/14 pass |
| 1 | `defenseInDepth` | 15.00 | 12.90:1 | 14/14 pass |
| 1 | `riskCalculationFlow` | 14.42 | 14.03:1 | 14/14 pass |
| 1 | `riskLifecycle` | 15.00 | 13.98:1 | 14/14 pass |
| 1 | `documentHierarchy` | 14.84 | 14.85:1 | 14/14 pass |
| 1 | `controlTimeline` | 15.50 | 5.17:1 | 14/14 pass |
| 1 | `dueCareDiligence` | 15.00 | 14.03:1 | 14/14 pass |
| 1 | `ethicsCanons` | 15.00 | 14.85:1 | 14/14 pass |
| 2 | `grcAlignment` | 15.00 | 6.74:1 | 14/14 pass |
| 2 | `bcVsDrScope` | 15.50 | 16.27:1 | 14/14 pass |
| 2 | `rtoRpoTimeline` | 15.00 | 7.58:1 | 14/14 pass |
| 2 | `effectivenessHierarchy` | 15.50 | 16.27:1 | 14/14 pass |
| 3 | `iamLifecycle` | 15.50 | 16.27:1 | 14/14 pass |
| 3 | `nistSp80063Framework` | 14.50 | 6.70:1 | 14/14 pass |
| 3 | `leastPrivilegeVsSod` | 14.50 | 6.70:1 | 14/14 pass |
| 3 | `accessControlModels` | 15.00 | 5.48:1 | 14/14 pass |
| 4 | `osiVsTcpIpModel` | 15.00 | 14.85:1 | 14/14 pass |
| 4 | `dmzFirewallArchitecture` | 15.00 | 14.85:1 | 14/14 pass |
| 4 | `defenseInDepthLayers` | 15.00 | 4.76:1 | 14/14 pass |
| 4 | `cloudSharedResponsibility` | 14.50 | 5.48:1 | 14/14 pass |

| D | Table index | Headers | Rows (including header) | States |
|---|---:|---|---:|---:|
| 1 | 0 | คำศัพท์ / คำจำกัดความ / ตัวอย่างในโลกจริง | 8 | 14/14 pass |
| 1 | 1 | สถานการณ์ในโจทย์ / หลักการที่เด่นที่สุด / คำอธิบายเหตุผล | 5 | 14/14 pass |
| 1 | 2 | คำถามหลักในข้อสอบ / ขั้นตอนที่เกี่ยวข้อง | 5 | 14/14 pass |
| 1 | 3 | ประเภทเอกสาร / บทบาทหน้าที่ / ระดับการบังคับ / ตัวอย่างรูปธรรม | 5 | 14/14 pass |
| 1 | 4 | คำกริยาในโจทย์ Due Care (DO) / คำกริยาในโจทย์ Due Diligence (CHECK) | 6 | 14/14 pass |
| 1 | 5 | Keyword ในโจทย์ข้อสอบ / เชื่อมโยงไปยังคำตอบ / แนวคิด | 24 | 14/14 pass |
| 2 | 0 | Framework / Standard / จุดเน้นหลัก (Primary Focus) / ขอบเขตและการนำไปใช้ / คำจำสั้นสำหรับสอบ | 4 | 14/14 pass |
| 2 | 1 | ฟิลด์ข้อมูล (Field) / ความหมายและบทบาท / ตัวอย่างรูปธรรมในองค์กร | 13 | 14/14 pass |
| 2 | 2 | ประเด็นเปรียบเทียบ / Business Continuity (BC) / Disaster Recovery (DR) | 6 | 14/14 pass |
| 2 | 3 | เทคนิคการโจมตี / คำอธิบายและพฤติกรรมตามสไลด์ / คำใบ้สำคัญในข้อสอบ (Exam Keywords) | 7 | 14/14 pass |
| 2 | 4 | มิติเปรียบเทียบ / Key Performance Indicator (KPI) / Key Risk Indicator (KRI) | 5 | 14/14 pass |
| 2 | 5 | ขอบเขตงาน (Area) / ค่าเป้าหมาย (Target) / ผลงานจริง (Actual) / สถานะประเมิน (Status) | 5 | 14/14 pass |
| 2 | 6 | เครื่องมือ / แนวคิด / คำสำคัญในโจทย์สอบ (Key Exam Triggers) / วัตถุประสงค์หลัก (Primary Purpose) / ตัวอย่างการใช้งานในองค์กร | 7 | 14/14 pass |
| 3 | 0 | Role Name(ชื่อบทบาทหน้าที่) / Primary Job Function(หน้าที่งานหลัก) / Required Access & Permissions(สิทธิ์การเข้าถึงที่จำเป็น) | 6 | 14/14 pass |
| 3 | 1 | Comparison Aspect(มิติการเปรียบเทียบ) / Principle of Least Privilege (PoLP)(หลักสิทธิ์ขั้นต่ำ) / Segregation of Duties (SoD)(การแบ่งแยกหน้าที่) | 5 | 14/14 pass |
| 3 | 2 | Access Control Model(โมเดลการควบคุม) / Decision Maker(ผู้ตัดสินใจให้สิทธิ์) / Primary Mechanism(กลไกหลักในการทำงาน) / Typical Use Case / Environment(สภาพแวดล้อมที่นิยมใช้) / Exam Keyword Triggers(คำสำคัญบ่งชี้ในข้อสอบ) | 5 | 14/14 pass |
| 3 | 3 | Concept(แนวคิดสำคัญ) / Exam Trigger Keywords(คำค้นพบในโจทย์ข้อสอบ) / Core Purpose(วัตถุประสงค์หลัก) / Practical Scenario Example(ตัวอย่างสถานการณ์จริง) | 11 | 14/14 pass |
| 4 | 0 | OSI 7-Layer Model(แบบจำลองทางทฤษฎี) / TCP/IP 4-Layer Model(สถาปัตยกรรมใช้งานจริง) / Data Unit (PDU)(หน่วยข้อมูล) / Key Protocols(โพรโทคอลหลัก) | 5 | 14/14 pass |
| 4 | 1 | Feature(คุณลักษณะ) / TCP(Transmission Control Protocol) / UDP(User Datagram Protocol) | 7 | 14/14 pass |
| 4 | 2 | Port Number(หมายเลขพอร์ต) / Protocol Name(ชื่อโพรโทคอล) / Transport(ระดับการขนส่ง) / Security Evaluation(ความปลอดภัยและการใช้งาน) | 16 | 14/14 pass |
| 4 | 3 | Dimension(มิติการพิจารณา) / Hybrid Cloud(คลาวด์แบบผสมผสาน) / Multi-Cloud(คลาวด์หลายผู้ให้บริการ) | 5 | 14/14 pass |
| 4 | 4 | Concept(แนวคิดสำคัญ) / Exam Trigger Keywords(คำค้นพบในโจทย์ข้อสอบ) / Core Purpose(วัตถุประสงค์หลัก) / Practical Scenario Example(ตัวอย่างสถานการณ์จริง) | 13 | 14/14 pass |

## Academic fidelity and automated regressions

All four complete Markdown sources equal the Phase F baseline plus **only the exact recorded ethics replacements**. All 24 diagram payloads equal their Phase F baseline plus the recorded ethics clarification. Course formulas, numeric values, technical terminology, bilingual explanations, examples and all anchors are preserved outside that authorized clarification. Original eight notes remain byte-identical. Prior Batch A/B academic checks pass; the reported 48 corrections were not regenerated or overwritten.

**28 suites were run: 26 pass (1,456 passing checks in those suites); two historical suites still fail.** Across all suites, including partial legacy suites, 1,508 assertions pass. It would be incorrect to call all 28 suites green.

| Suite | Passing checks | Exit / disposition |
|---|---:|---|
| `verify-reading-critical-readability` | 13 | 0 — Pass |
| `verify-reading-cross-domain-structure` | 391 | 0 — Pass |
| `verify-reading-lead-width` | 25 | 0 — Pass |
| `verify-reading-navigation` | 15 | 0 — Pass |
| `verify-reading-notes-dom-integrity` | 36 | 0 — Pass |
| `verify-reading-notes-domain1-presentation` | 370 | 0 — Pass |
| `verify-reading-notes-domain1` | 10 | 0 — Pass |
| `verify-reading-notes-domain2` | 9 | 0 — Pass |
| `verify-reading-notes-domain3` | 10 | 0 — Pass |
| `verify-reading-notes-domain4` | 10 | 0 — Pass |
| `verify-reading-notes-fluid-layout-and-dividers` | 25 | 0 — Pass |
| `verify-reading-notes-foundation` | 9 | 0 — Pass |
| `verify-reading-notes-rendering-quality` | 5 | 0 — Pass |
| `verify-reading-persistence` | 20 | 0 — Pass |
| `verify-reading-structure-pilot` | 13 | 0 — Pass |
| `verify-text-alignment-and-reading-width` | 23 | 0 — Pass |
| `verify-document-hierarchy-remediation` | 8 | 0 — Pass |
| `reading-notes-phase1b-batch-a` | 23 | 0 — Pass |
| `reading-notes-phase1b-batch-b` | 33 | 0 — Pass |
| `verify-reading-layout-width` | 9 | 0 — Pass |
| `verify-reading-tables-typography` | 5 | 0 — Pass |
| `verify-reading-diagram-semantics` | 14 | 0 — Pass |
| `verify-reading-diagram-legibility` | 6 | 0 — Pass |
| `verify-reading-final-accessibility` | 5 | 0 — Pass |
| `verify-domain2-math-symbols` | 5 | 1 — Historical baseline exception |
| `verify-bilingual-table-cells` | 47 | 1 — Historical baseline exception |
| `verify-ethics-mnemonic-highlight` | 20 | 0 — Pass |
| `verify-vocabulary-bilingual-guidance` | 349 | 0 — Pass |

### Historical exceptions, not hidden failures

- `verify-domain2-math-symbols.mjs`: three obsolete assertions require the old exact RTO wording, a formal DR ⊂ BC diagram and Passphrase ≥14 text. Current academic wording and BC/DR semantics were already qualified before this master task. The suite has additional parent-harness failure accounting; these are three underlying assertion causes, not a new production defect.
- `verify-bilingual-table-cells.mjs`: 47 checks pass; the single hardcoded total expects 25 cells, while the existing current output has 27. The preserved table structures and remaining terminology checks pass.

Both failures were rerun with a read-only preload routing source reads to the **saved pre-Phase-F runtime**. Assertion messages match current runs exactly. The relevant source files also predate this task. Neither legacy suite was edited; raw baseline/current logs and `historical-regressions.json` remain. These are test-maintenance acceptance exceptions, not new regressions or permission to restore superseded teaching.

### Necessary assertion adaptations

Two existing Domain 1 expectations required a universal precedence claim; they now require four mandatory canons, professional judgment and absence of unverified supersedes wording, matching the explicit user-authorized clarification. Old fidelity fixtures remain unchanged. A test-only helper applies the exact ledger replacements only inside the ethics subsection / `ethicsCanons` expected string; all other text/byte comparisons remain active. New tests prove the entire final corpus equals that exact transformation. This does not grant human academic approval.

Phase 3E's NIST/cloud preservation guard allows only their explicitly added original SVG-label paragraphs. The original four historical entity/no-guarantee assertions resolved in Phase 3D remain green; valid safety qualifications were retained.

## Actual image review and harness corrections

Current final evidence includes 96 diagram components, 24 representative subsection viewport images, 144 navigation images, 14 keyboard-control focus images, 12 before/12 after occlusion images and four contact sheets. Actual PNG inspection covered all diagrams in overview sheets and native examples for cloud, measurement, OSI, JML, DiD, DMZ, ethics and the gutter/focus change. Overview thumbnails are structural checks; they do not certify reading every glyph. `visual-review.json` records the exact inspected files.

Three QA issues were diagnosed rather than patched into production: (1) broad paragraph ranges included KaTeX's intentionally clipped MathML accessibility tree; geometry now checks individual visible text nodes, excluding clipped MathML while retaining visible KaTeX checks; no formula changed. (2) CDP Enter without character text generated no click. A diagnostic recorded zero clicks with incomplete input and a real click with full Enter; the invalid checks were archived and complete native keyboard cases rerun. (3) one control-run readiness timeout used repeated same-document URLs; unique per-case URLs/retry and resume retained sixteen passing cases. All final 56 control cases pass.

The final language-domain guard was checked against existing shell/foundation tests and a repeated four-domain Chrome probe. It changes no Domains 1–4 annotation result and preserves unpublished Domain 5. Screenshot full-surface width locking remains QA-only; final component capture geometry checks pass. No manual screen-reader application or physical-device certification is claimed.

## Preservation and exact production changes

Master task baseline: **28,280 files**; **28,271 byte-preserved**; 9 authorized existing-file changes; no deletion/unexpected change.

Phase 3F baseline: **28,441 files**; **28,431 byte-preserved**; 10 authorized existing-file changes; no deletion/unexpected change.

All original notes, Learning Slides, Quiz/Question Banks, Vocabulary, Domain 5 and previous QA remain preserved. Domains 2–4 Markdown is byte-identical to task start. D1 changes are confined to the exact ethics clarification; the rest is byte-preserved. Original CSS bytes are recovered after removing only E/F insertions. Existing navigation/progress JS is recovered after removing only language annotation; schema v1 is unchanged.

Production files changed during this master execution:

| File | Scope |
|---|---|
| [css/reading.css](<D:/_Coding/SEC-CERT-TEST/css/reading.css>) | Marked E/F Reading-only diagram legibility, contrast, gutter, focus and safe bottom spacing blocks. |
| [js/core/diagram-generator.js](<D:/_Coding/SEC-CERT-TEST/js/core/diagram-generator.js>) | Additive OSI/NIST/DMZ/cloud native labels; bounded neutral ethics clarification. Existing diagram keys and other relationships retained. |
| [js/ui/screen-reading.js](<D:/_Coding/SEC-CERT-TEST/js/ui/screen-reading.js>) | Published-Reading language metadata function and call only; no storage/history/router change. |
| [content/isc2-cc-2026/reading/domain-1.md](<D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/reading/domain-1.md>) | Only neutral ethics subsection wording/badges; original four canon duties and mnemonic retained. |

Other task edits are the own tracker row, explicitly justified tests/helper/clarification fixture, three reports and E/F QA evidence. `changed-files.json` enumerates every task file, size and SHA-256, with the master starting SHA for existing files. `master-production-delta.patch` is isolated from pre-existing dirty changes. No Git stage, commit, push, reset, revert, clean, deployment or unrelated refactor was performed.

## Remaining exceptions and human acceptance

Engineering gates pass with **no new unresolved regression**. The following remain acceptance items, not silently closed findings:

1. D1-N08 current authorized-course precedence provenance and the protected Question Bank interpretation. Neutral wording is implemented; definitive precedence verification remains open.
2. Two pre-existing failing test suites described above. Their assertion maintenance needs separate review; no expectation was silently changed.
3. Human visual preference, touch comfort for the 24×44 mobile gutter tab, Thai-English voice switching with native assistive technology, physical devices and cross-browser review. Automated AX/keyboard/contrast checks do not equal full WCAG or human accessibility acceptance.

- [ ] Review seven viewport sizes in both themes, especially cloud legend, 320px measurement, OSI and long native cards.
- [ ] Review before/after gutter images and actual keyboard top/bottom behavior.
- [ ] Approve or request changes to the neutral ethics wording; supply authorized current-course evidence if settling precedence.
- [ ] Acknowledge/review the Question Bank interpretation and legacy test exceptions without changing protected modules in this task.
- [ ] Complete native assistive-technology/physical-device review as required for acceptance.
- [ ] Explicitly record human visual and academic acceptance. No box is checked by this report.

## Evidence and references

- [summary.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/summary.json>)
- [subsection-coverage.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/subsection-coverage.json>)
- [diagram-coverage.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/diagram-coverage.json>)
- [table-coverage.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/table-coverage.json>)
- [derived-reconciliation.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/derived-reconciliation.json>)
- [navigation-journey-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/navigation-journey-results.json>)
- [control-keyboard-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/control-keyboard-results.json>)
- [before-occlusion.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/before-occlusion.json>)
- [after-occlusion.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/after-occlusion.json>)
- [academic-exception.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/academic-exception.json>)
- [regression-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/regression-results.json>)
- [historical-regressions.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/historical-regressions.json>)
- [preservation.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/preservation.json>)
- [evidence-manifest.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/evidence-manifest.json>)
- [changed-files.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/changed-files.json>)
- [visual-review.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/visual-review.json>)
- [review.md](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/review.md>)
- [checkpoint.md](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/checkpoint.md>)

- [W3C text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) and [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) support the targeted criteria. They do not certify this implementation.
- [KaTeX supported layout](https://katex.org/docs/supported.html#layout) distinguishes inline breaking and display layout; visible formula checks are separate from its clipped accessibility representation.
- [Chromium CDP input protocol](https://chromedevtools.github.io/devtools-protocol/tot/Input/) and the saved empirical key-event diagnostic document the corrected native Enter input.
