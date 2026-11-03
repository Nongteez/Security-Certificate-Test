# Intermediate results retained

The first focused run had 7 failures / 6 passes: four currency contexts, raw note emphasis, the count of intended remaining math escapes, and missing DMZ paint.

The first after-browser run had 9 failures / 330 checks: the selected --text-secondary token was undefined, resolving port fills to black in Dark. The final correction uses the verified existing --text token. first-after-browser.json and three first-after DMZ Dark screenshots preserve that attempt.

The first DOM-integrity regression had 34/35 passes. Its serialized HTML $25,000 assertion did not recognize a valid currency entity. The test was made entity-aware and gained a separate two-currency/no-math guard; final 36/36. This was a new representation-assumption failure, not a baseline product failure.

The same four historical presentation-string assertions fail against frozen pre-task files and current files (366/370). They were neither weakened nor remediated.

A frozen Markdown-response MIME issue in the QA server was corrected before the accepted baseline run; no production change was involved.
