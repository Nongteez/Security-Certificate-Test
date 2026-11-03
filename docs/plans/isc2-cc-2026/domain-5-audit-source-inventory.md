# Domain 5 question-bank audit — Source inventory (A)

Audit date: 2026-11-03 (Asia/Bangkok). Scope: audit and planning only. Source root: `D:/_Coding/SEC-CERT-TEST/ISC2 Update 2026/Domain 5/`.

## Method and provenance

Recursive enumeration found **81 files: 2 Markdown, 1 transcript TXT, 78 PNG**; no nested files or PDFs were present. All three text files were read in full, including embedded practice prompts and endnotes. All 78 PNGs were visually inspected in 13 six-image contact sheets; the dense Diffie-Hellman and patch diagrams were additionally reopened at original resolution. This is visual review, not a claim that every decorative mark was legible. No OCR-only coverage claim is made. File hashes below identify the inspected versions.

Source codes used throughout the reports:

- **T** = `DOMAIN 5.txt`, instructor narrative as captured by an apparently automated transcript. Instructor/video identity, recording date and transcript editing history are unverified. Transcript artifacts such as “seam”, “fishing”, “pages” and “HIPPA” are not canonical terms.
- **N** = `Domain 5.md`, Thai expanded study notes. Conversational provenance and its own disclosure at lines 4–8 and 1227 indicate a synthesized/AI-assisted study artifact; authorship is not authenticated. Claims marked “from slides” are assertions to cross-check, not original evidence.
- **S** = `D5 sum.md`, Thai synthesized summary, similarly apparently AI-generated/assisted; no independently established human authorship. Do not count N and S as independent corroboration.
- **I01–I78** = individual screenshots in the table. Course-slide evidence plus visible annotations; these are not official ISC2 publications. I24–I27 are local Domain 1 reading-page captures, not Domain 5 teaching.
- **R01** = verified official outline; **R02** = official supplementary AI commentary; R03 onward = external technical references registered in the academic findings report. Reviewer proposals/inferences are explicitly labeled in the other reports.

No independently identifiable human-authored Domain 5 note set was found. No original video/audio is supplied. A PDF referenced inside N is absent from this directory; its described contents are not treated as inspected. The official outline was fetched separately from ISC2.

## Inspection limitations and visual-only information

I16 cuts off the diagram's lower edge; I15 preserves the full main encryption flow. I29 cuts off the retention sentence; I30 preserves it. I21 ends with an unfinished digital-signature example; the missing continuation cannot be recovered from this file. Some handwriting and tiny logos are not reliably legible, especially I06, I32 and I56; no finding relies on guessing those marks. All files opened; none was wholly unreadable. These limitations concern missing/cropped content, not an unread file.

Important visual distinctions: I14 is **key agreement**, not transmission of the final shared secret; its toy arithmetic is internally consistent but provides no authentication by itself. I36's P1–P5 matrix is illustrative, not a universal priority scheme. I48's diagram uses “Identification” where prose says “Detection and Analysis.” I54's cycle uses “Operate/Maintain” where prose explicitly includes “Monitor.” I59's circular graphic orders labels differently from its five-step prose. Those differences prohibit sequence questions based on picture position alone. I38's intentional-actor definition conflicts with I39's accidental-insider example. I24–I27 must not inflate Domain 5 coverage.

## Text files

| Code | File | Bytes | Lines | Coverage / inspection | SHA-256 |
|---|---|---:|---:|---|---|
| T | `DOMAIN 5.txt` | 59242 | 227 | Read all; 5.1–5.5 lecture, no timestamps; physical line numbers are anchors | `ff9a83dea6775d4d1f1bbeb246019983b2affb28eed19cfbda7fbef0d328e1c5` |
| N | `Domain 5.md` | 82711 | 1231 | Read all; supplemented cryptography, strong 5.2–5.5; 25 embedded practice prompts; no substantive handling/PQC unit | `1a8968dfb7422aa3375cd46dd2205766b47e7b4c95b734559ae9f2be266c682a` |
| S | `D5 sum.md` | 88927 | 1237 | Read all; 5.1 cryptography and 5.2–5.5; overview merges 5.5 into 5.4; purported ten-item quiz contains only first prompt | `a5a5e15599558596c63bdac5c024e88203870cdb36040638eca56cd9c97584fb` |

## Screenshot inventory

Every path below is relative to the absolute source root above. “Reviewed” means visible slide content and diagram semantics were inspected; it is not technical approval. Topic labels are reviewer descriptions. Refer to the limitations above for cropped text/annotations.

| Code | Exact filename | Bytes | Coverage / visual observation | Status | SHA-256 |
|---|---|---:|---|---|---|
| I01 | `Screenshot 2026-11-01 203148.png` | 701275 | Objective 5.1 title | Reviewed | `71046ac0ce078749a0dd05a553ceadde1aecf10a127fbbef7c3daca3a45fa774` |
| I02 | `Screenshot 2026-11-01 203251.png` | 1654289 | Data handling: lifecycle, retention, destruction | Reviewed | `6117129ef5d14af558f458726f20dfd7afd9f61b375424fd24240a34e5d8caa2` |
| I03 | `Screenshot 2026-11-01 203612.png` | 1607374 | Classification: organization-specific levels | Reviewed | `2d50d26f1a8d23f3b0bf59731ab8e74c0934b5b015204db7127b526915f2edbe` |
| I04 | `Screenshot 2026-11-01 204019.png` | 457374 | Labeling: physical, metadata, color | Reviewed | `ea94fb6c0eaa287b98774578c176c75247f9524034fa32991fc8cb7c812558d9` |
| I05 | `Screenshot 2026-11-01 204036.png` | 398442 | Masking: last-four display example | Reviewed | `f3460f4967369bc4a2df9cc0a9b74580b96e15f4b3bfba7b8bb1e3cce8573d86` |
| I06 | `Screenshot 2026-11-01 204222.png` | 492859 | Sanitization: methods and handwritten media associations | Reviewed | `9baf469a93500e4372b4e4d8fc7a459755b87f4244523f41ea37621734a6050c` |
| I07 | `Screenshot 2026-11-01 204442.png` | 461037 | Encryption: overstated integrity/authenticity purpose | Reviewed | `a90e0584b869b6d18b82ca64cc9597679f34ccd80a7d8cf6777b008ec0533856` |
| I08 | `Screenshot 2026-11-01 204641.png` | 552675 | Data at rest: FDE and SED | Reviewed | `7122e9980d127c58c0f274a86e40fe46581a0b84eeb8d9eadce5868d354a0713` |
| I09 | `Screenshot 2026-11-01 205102.png` | 503107 | Data in transit: obsolete SSL wording | Reviewed | `092e061e0a00d25e62134e68a50f88654de78098bc88de4c40e913cd0e525fe0` |
| I10 | `Screenshot 2026-11-01 205908.png` | 536740 | Data in use: enclave, homomorphic encryption, access control | Reviewed | `99d2030bcb8b25c648b9727834f60f5106a523cf917cc10455c56d8f43580ec7` |
| I11 | `Screenshot 2026-11-01 205921.png` | 906831 | Symmetric versus asymmetric | Reviewed | `6276ce8a010dfc70694f5282cdf0aa1df5e916aa2310e1a5fe308eb66d85412c` |
| I12 | `Screenshot 2026-11-01 211003.png` | 412883 | Key usage: recipient encryption versus signer verification | Reviewed | `1825b311235b69c370afc3bc4c322133d1194fbd75575deae2a72341cb9aaff5` |
| I13 | `Screenshot 2026-11-01 211612.png` | 625692 | Use cases: bulk data, key exchange, signatures | Reviewed | `b1dbc4a1bddec6b2e7d03da57ec25f11ed8680238a6ceea9ad0cf7558cb16bba` |
| I14 | `Screenshot 2026-11-01 211633.png` | 1411530 | Diffie-Hellman arithmetic and paint-mixing diagrams | Reviewed | `0dfc9457d8eeb97708cba705fd482226f69524ab77ca33f7eb267b1555afefa7` |
| I15 | `Screenshot 2026-11-01 212706.png` | 792736 | Recipient public-key encryption diagram | Reviewed | `2ce924e455b32952b7153b19a62f21a3af1c0d711239b033d11e68b77957847e` |
| I16 | `Screenshot 2026-11-01 235024.png` | 395584 | Repeated recipient encryption diagram; bottom cropped | Reviewed; partial capture | `e61c871f2647fcf324f391afa8273d09ce3243f53e88f4a397f714591de245fc` |
| I17 | `Screenshot 2026-11-01 235209.png` | 268437 | TPM: key storage and boot claims | Reviewed | `7be3ad5ff260cd4c7437af66343649af03c2f2c27069454b8f4bd3731c5db6a2` |
| I18 | `Screenshot 2026-11-01 235638.png` | 301758 | HSM: key generation/storage/operations | Reviewed | `52683d8b3dca49706f47ddf32a53eeb241a10ceaa6a14032c51232cefdacc9a1` |
| I19 | `Screenshot 2026-11-01 235655.png` | 420830 | Hashing versus encryption; browser chrome visible | Reviewed | `0927a73d25db820af09d70109fab9354fb89a8edc3f82792176dfbdb7097c69b` |
| I20 | `Screenshot 2026-11-01 235659.png` | 416279 | Repeated hashing versus encryption; fuller capture | Reviewed | `83e2102bc3c595accaafc7a29d7f10ffd9404f81cf3712150dcad4058836352c` |
| I21 | `Screenshot 2026-11-02 000241.png` | 320476 | Algorithm uses; final example unfinished | Reviewed; partial capture | `523eb188617fd7c798670d6b70e3d83f41031f95ff4f7b9b89a18ea5dffb92e7` |
| I22 | `Screenshot 2026-11-02 001056.png` | 461927 | Hash properties; collision-resistance overstatement | Reviewed | `aa417e314c7d17b50b96380a97236d62cdab3ff44bdc70e96dd87d027de4b7d5` |
| I23 | `Screenshot 2026-11-02 002355.png` | 823495 | Objective 5.2 title | Reviewed | `70f84011f733c17df0c8ceefb5427fea9f161dc60af5100f95d84ebc409c0581` |
| I24 | `Screenshot 2026-11-02 190123.png` | 91157 | Domain 1 reading page: overview and 1.1 | Reviewed; OUT OF SCOPE (Domain 1) | `b93c9e62c42ceebae0e8bf71bc0896cff63e5262cdef42879e628afedc78e820` |
| I25 | `Screenshot 2026-11-02 190158.png` | 238908 | Domain 1 reading page: causal risk diagram | Reviewed; OUT OF SCOPE (Domain 1) | `ed3d0c17c11f20ef4ed7654dc594be7e0efe648593468efcff70ec50fe236ea8` |
| I26 | `Screenshot 2026-11-02 190227.png` | 77526 | Domain 1 causal risk diagram enlarged | Reviewed; OUT OF SCOPE (Domain 1) | `e6fef330d0e997b1efee29d82931b7a41483c78178d763ec0c8667927504627c` |
| I27 | `Screenshot 2026-11-02 190640.png` | 149075 | Domain 1 MFA page: factors and context | Reviewed; OUT OF SCOPE (Domain 1) | `8f564b54b98de473414f6a302de740901ccba75684679b971ef3271a31120336` |
| I28 | `Screenshot 2026-11-02 191307.png` | 305608 | Log aggregation and alerting | Reviewed | `a73ce2eb27441d526b24cb4ff07dbb861ecbfc72f38d3b5d58c058d355bfd81d` |
| I29 | `Screenshot 2026-11-02 191942.png` | 294047 | Reporting/archive; retention bottom cropped | Reviewed; partial capture | `6e6d7f14773270d420eaa6918092f927fb98cf80034ad397649ab923020a8b66` |
| I30 | `Screenshot 2026-11-02 191948.png` | 587489 | Repeated reporting/archive; full retention sentence | Reviewed | `54152a657434e7adb3bdfff445f082a4909b066b109bf2490995f2ef71c1659f` |
| I31 | `Screenshot 2026-11-02 192423.png` | 248900 | Agent-based versus agentless | Reviewed | `ac05a1ec03bb089b6f4a2a9de99bd45161123613b9d3921d8dd2497ad6920ef3` |
| I32 | `Screenshot 2026-11-02 192723.png` | 614951 | SIEM/antivirus; source-puzzle diagram and handwriting | Reviewed | `662c4a00880bf23c2079e3f15159c4983594a8e1566140567018982fdb955ce0` |
| I33 | `Screenshot 2026-11-02 193114.png` | 324256 | DLP and SNMP notifications | Reviewed | `5acce34054e1c73151fcce31452a005ef201316346bddc152dfa8bbbb2d09b29` |
| I34 | `Screenshot 2026-11-02 193600.png` | 236190 | Triage and investigative questions | Reviewed | `9af11471d0d7cdfcc3b981f93458c26d1169dacd3f995ce17f06b820d7362f95` |
| I35 | `Screenshot 2026-11-02 194626.png` | 194237 | Incident detection use cases | Reviewed | `127c56a763db4ae6dcabed131a2f02c2ab9c66b2822ed0df529540924427d7b8` |
| I36 | `Screenshot 2026-11-02 195354.png` | 329829 | Prioritization: factors and impact/urgency matrix | Reviewed | `af92d7a88e27974f4cc384aa2bfc78666e355fa2670224ca951c5d0c099a4433` |
| I37 | `Screenshot 2026-11-02 195814.png` | 167786 | Correlation: failed login to potential compromise | Reviewed | `5d227c4c99f97272af2dddeefb99a185d5623474524c2ad8f839b676b7a73f40` |
| I38 | `Screenshot 2026-11-02 200128.png` | 662685 | Threat actor types and illustrative portraits | Reviewed | `c1ff12c001b355c5291ec171cc84ed423d4aacf101b6593e431e4fa74402ddee` |
| I39 | `Screenshot 2026-11-02 200557.png` | 221901 | Actor motivation table, including accidental insiders | Reviewed | `dc2758a5ffa2ed2f47a09b62d94256f82cfaccded7a31e7cf331ba5ad3506154` |
| I40 | `Screenshot 2026-11-02 200608.png` | 228536 | CTI: analyzed knowledge for decisions | Reviewed | `0fe1abef9f1fa7c8253cf03ab2392c827d58d4bdb74c7702cf6289ad5e24dfa3` |
| I41 | `Screenshot 2026-11-02 201201.png` | 248164 | IOCs and retrospective log search | Reviewed | `4d7e097e2704ca6e6ec2fb39c8ef51d14996e66bc282e138280b71c40501a482` |
| I42 | `Screenshot 2026-11-02 201210.png` | 189953 | Threat frameworks: structure and uses | Reviewed | `5d3f6cdd27266313ea32fed701d69e96f0ff0c934f1275c0035633224218b672` |
| I43 | `Screenshot 2026-11-02 201553.png` | 199096 | ATT&CK tactics and goals | Reviewed | `1e274f6228daf619717800882973ad11613708f76a21756a12d0e4c5674b1d58` |
| I44 | `Screenshot 2026-11-02 201613.png` | 144369 | ATT&CK techniques and method example | Reviewed | `12a3527ddf73ad6afb5e5671f7e251928effc95580844f172bd42497dc537fc5` |
| I45 | `Screenshot 2026-11-02 201924.png` | 610033 | Objective 5.3 title | Reviewed | `fcc74ddc99871bd3e2e68fab2b835c1df2e27348f4373e7ba0bcc9ccdf3dea10` |
| I46 | `Screenshot 2026-11-02 224342.png` | 317246 | IR definition, purposes and focus | Reviewed | `87063fd6a60e9ad0c1cf86376ab40051a7eda44bde48f5733cacdb77786c5e03` |
| I47 | `Screenshot 2026-11-02 224654.png` | 525883 | IR importance; circular illustration | Reviewed | `be44a7b4886f048ac69a0447fcd4ace2af8293f22191c5f49b716f118280c42c` |
| I48 | `Screenshot 2026-11-02 224716.png` | 511662 | IR phases; prose detection/analysis versus diagram identification | Reviewed | `3f147db6bd2903afabad9af1a0744989b699953f5825f391eaa0476aed7c425e` |
| I49 | `Screenshot 2026-11-02 225150.png` | 273478 | IR exercises and capability gaps | Reviewed | `b590fb19611eb465a13517922a460f5f1eb5764aa8a50a8a49dd36fd61c0f570` |
| I50 | `Screenshot 2026-11-02 225508.png` | 235435 | Discussion-based tabletop | Reviewed | `7f97c95d67e1865c00d719fbcbea496f23cc93cab2d5bc6c7ed15d67116b6a21` |
| I51 | `Screenshot 2026-11-02 231727.png` | 205367 | Functional technical testing examples | Reviewed | `90666f57d22935f9a5ebedae2939083317633ce58799fffd1bc5439f3c7ab25d` |
| I52 | `Screenshot 2026-11-02 234557.png` | 574125 | Objective 5.4 title | Reviewed | `c653189b5f7734c07c1358298e048c92cbc617bea59887cf2b2e3b8a5acf548a` |
| I53 | `Screenshot 2026-11-02 235856.png` | 215816 | Asset protection and asset types | Reviewed | `aff1aa62563985ef9ff3817c877e1436d76be831b4ad20b164dc02b13739ec4d` |
| I54 | `Screenshot 2026-11-03 000941.png` | 547496 | Asset lifecycle: prose stages versus operate/maintain diagram | Reviewed | `a74306ff2c82fb23ec68954d2e9cc56f6f4d2f3a703da0b47d5c934658079e8a` |
| I55 | `Screenshot 2026-11-03 002224.png` | 602261 | EOL and unsupported-system risks | Reviewed | `97f4708cb050382f3a232cc286d39b4aec979adf6c08a98665af4f653547bda4` |
| I56 | `Screenshot 2026-11-03 002239.png` | 249869 | EOL options and interim controls | Reviewed | `724404afa61256cd0e5e277c3871f599284788533613015698fd6fa48b26bcce` |
| I57 | `Screenshot 2026-11-03 003733.png` | 308361 | Configuration management and components | Reviewed | `25b2d10d8778aa82d0b7b9e8427bfadd5efc833f4160cf450d0e588e34e482f7` |
| I58 | `Screenshot 2026-11-03 004605.png` | 368612 | Baselines; SP 800-128 incorrectly limited to network devices | Reviewed | `fd1de02c10521aa422fb65906bd40423c56478d4927d1dcd6ab6170595542692` |
| I59 | `Screenshot 2026-11-03 010520.png` | 523041 | Patch process; diagram sequence differs from prose | Reviewed | `25fdece40e64053739cc3eeb929ef23c6f2d1b7738d38b5bcd7c0ca5afa0e295` |
| I60 | `Screenshot 2026-11-03 010535.png` | 540801 | Poor configuration: vulnerabilities, defaults, drift | Reviewed | `4272b69fa235eadbf4db473306314dc98405ff04ee4e54a22e9bfba30e6c075f` |
| I61 | `Screenshot 2026-11-03 010810.png` | 252165 | Effective configuration and automation | Reviewed | `776abc0584bb50f674939b0a86804dcfb827cbfb0333139ad9408b44e4514712` |
| I62 | `Screenshot 2026-11-03 011101.png` | 219979 | Change management and examples | Reviewed | `1a8d079cd21bc43fd9d370ddf8b1363bc1e8f10513a809406c926616896cef86` |
| I63 | `Screenshot 2026-11-03 011111.png` | 237929 | Seven-step illustrative change process | Reviewed | `b9979b56dc7d2571954d5865fb7028cb5b02aeeea77f0143ad57c59bc0b01cfe` |
| I64 | `Screenshot 2026-11-03 011643.png` | 349020 | Configuration versus change comparison table | Reviewed | `be8426e6acc0f06b1d2944a977815a7f206f76c2db008b6ad1c1d68b9bd5a286` |
| I65 | `Screenshot 2026-11-03 011655.png` | 250342 | Security testing overview (5.5 content) | Reviewed | `997e7866ed45d4540cb9515e96a600345275c0d630a353680623dd0792a535a8` |
| I66 | `Screenshot 2026-11-03 011939.png` | 267783 | Blue team defense and investigation | Reviewed | `0c42615a865835342a7886a63a6114ee841f152c0c84b558f0562f8bfa366c58` |
| I67 | `Screenshot 2026-11-03 012123.png` | 229203 | Red team authorized adversary simulation | Reviewed | `7f7a63be7b5c9fbe2ea84960fb1268ab435863da957b315b7a03caa900e33165` |
| I68 | `Screenshot 2026-11-03 012244.png` | 192496 | Purple team collaboration cycle | Reviewed | `a35aa34943741f2dfc26ed71b995f650b3d911ba3dd1108af74c0435e25220d8` |
| I69 | `Screenshot 2026-11-03 012358.png` | 154905 | Purple team logging-gap example | Reviewed | `11dbc9f8b4797eeee0689cea39469eaa545476673ebe9b8e5631fcacdf359f08` |
| I70 | `Screenshot 2026-11-03 012413.png` | 262206 | Vulnerability scanning | Reviewed | `408e625682af57eaaeac30656759831ccf803a212136e9182ae5306a41cb658d` |
| I71 | `Screenshot 2026-11-03 012536.png` | 251086 | SAST: source/compiled code without execution | Reviewed | `a786f0ab337d7d34a623933d8649d1679de4dab44d4a5583ed1c419c3e1ff8d9` |
| I72 | `Screenshot 2026-11-03 012542.png` | 205333 | DAST: running application | Reviewed | `f2ea91072f9c9b1ee74ed8718348d6268cc8db21efde35d9543680dbcab11c96` |
| I73 | `Screenshot 2026-11-03 012549.png` | 200372 | SAST/DAST comparison | Reviewed | `8217e5593c7432e8fe4fc4f066ed66fe7311201806b0cb8ff3876b8973af23dc` |
| I74 | `Screenshot 2026-11-03 012902.png` | 253832 | Threat modeling in design | Reviewed | `a091b434ef3874cee5268f39b15a174d008bbb44b87d1eb954e8e4ef596d0a94` |
| I75 | `Screenshot 2026-11-03 012920.png` | 265663 | Physical penetration tests and controls | Reviewed | `3bf94c740bc7add9fa4d3ad1d76ea8f75f480dc455d3f89a541b4823dff32e62` |
| I76 | `Screenshot 2026-11-03 013126.png` | 226517 | Simulated phishing | Reviewed | `cc6b8e6e2d29c08206dd1b37aef097418775aac72118b1701f499c0c59becdce` |
| I77 | `Screenshot 2026-11-03 013229.png` | 218041 | Tailgating and physical controls | Reviewed | `d2cadfd757b20a2707cbd2444ae46dce297b413d9fe454b7b2917d89e6cb53d7` |
| I78 | `Screenshot 2026-11-03 013246.png` | 241666 | Impersonation and verification exercises | Reviewed | `aa2571c2e29676ebfdd3d32054d3689592477089410b64e8e1e2ebf805def08f` |

## Reading map for precise source locations

| Objective | T physical lines | N physical lines / sections | S physical lines / sections | Images |
|---|---|---|---|---|
| 5.1 | 3–79 | 51–124, sections 2.1–2.8; handling absent | 22–174, sections 1–8; handling absent | I01–I22 |
| 5.2 | 79–137 | 127–373, sections 3–5 | 176–501, sections 9–22 | I23, I28–I44 |
| 5.3 | 137–155 | 377–523, sections 6–7 | 503–669, sections 23–27 | I45–I51 |
| 5.4 | 155–195 | 527–692, sections 8–11 | 671–870, sections 28–37 | I52–I64 |
| 5.5 | 195–225 | 696–861, sections 12–14 | 872–1109, sections 38–47 | I65–I78 |

Source locations use 1-based physical lines, including blank lines; transcript paragraphs are split across lines and are not timestamped. Source-root relative filenames plus line ranges or image regions are sufficient to find evidence without relying on headings alone. Original sources were not repaired or rewritten.
