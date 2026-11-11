# ISC2 CC academic verification replay

Run these commands from the repository root with Python 3.10 or later and Node.js 24. Give each run a new directory outside the checkout. The replay retains its scratch directory and writes any regenerated reports there.

```powershell
python tools/replay-academic-verification.py acceptance "$env:TEMP/sec-cert-acceptance-replay"
python tools/replay-academic-verification.py audit157 "$env:TEMP/sec-cert-audit157-replay"
python tools/replay-academic-verification.py expansion "$env:TEMP/sec-cert-expansion-replay"
python tools/replay-academic-verification.py repair "$env:TEMP/sec-cert-repair-replay"
python tools/replay-academic-verification.py remediation "$env:TEMP/sec-cert-remediation-replay"
python tools/replay-academic-verification.py signoff "$env:TEMP/sec-cert-signoff-replay"
```

| Replay | Historical input and check |
| --- | --- |
| `acceptance` | The 200-question acceptance bundle and its original 1,590 protected hashes. |
| `audit157` | The 157-question bank at `f794545744431c3345b36e69de4106f383e61379`, the archived audit inputs, both report generators, and the original 715-hash audit check. |
| `expansion` | The first 200-question release at `939cc8ee5c74a926777a0e49073a82d14d330ebb`, including its bank and metadata before the subsequent accepted field corrections. |
| `repair` | The 157-question repair phase. The post-repair bank comes from the remediation entry snapshots. |
| `remediation` | The later 157-question remediation phase. The approved changes are captured in the expansion entry snapshots. |
| `signoff` | The original 157-question signoff evidence and verifier. A successful replay verifies the recorded decision, which was **BLOCKED — ACADEMIC ISSUES REMAIN** at that phase. |

The [source archive](https://github.com/Nongteez/Security-Certificate-Test/tree/8eecd568d3939cf2ef15babab9befd2ee8c74ab6) holds the original QA evidence and the input manifests. Git must have that commit and its ancestors locally. The helper also uses the locally integrated `6adfa062b6fe8273ce0c6e787bd9b6734d740268` for 17 Learning Slides blobs whose checkout bytes were preserved during integration. You can check availability with `git cat-file -t <commit>`.

The helper uses each original manifest to verify the exact bytes before invoking the unchanged scripts. It reconstructs Windows LF and CRLF representations where the hashes require them. The [mixed-line-ending recipe](../../../tools/academic-replay-crlf.json) records only the CRLF positions in 12 original files. Two early verifier blobs recovered from local Git objects are preserved under [replay fixtures](../../../tools/fixtures/academic-replay). Their original LF Git object IDs are `0ec32a3f4afbeaa0d2f1e09504afe14c7f20e132` and `efa71bbe83316c6849a3b1c12d0dd1bb3cff171b`. The helper checks the CRLF bytes against the historical manifests before use.

The [acceptance fixtures](../../../artifacts/qa/question-bank-200-academic-acceptance) and [157-question audit input](../../../tmp/audit-questions.json) are available at their original paths in the development tree. Use the replay for whole-tree assertions and when regenerating reports. Running the acceptance script directly on a production checkout reaches two phase-specific byte checks against the original LF question slices and historical file hashes. The production checkout deliberately preserves the accepted deployment bytes. Its content and build should be checked with the focused regressions and production verifier.

Historical screenshots and generated evidence remain at the pinned source commit. To retrieve a particular file without checking out that tree, use `git show 8eecd568d3939cf2ef15babab9befd2ee8c74ab6:<path>`.
