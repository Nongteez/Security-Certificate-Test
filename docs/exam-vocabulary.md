# ISC2 CC — Exam Vocabulary

## 1. Implementation summary

Added an ISC2 CC vocabulary learning-content entry to the existing Exam Version Selection screen. It uses the same card grid, circular information button, modal, typography, badges, buttons, themes and responsive styles. It remains Coming Soon and cannot start a quiz. No vocabulary dataset, flashcards, learning engine, data schema or database was created.

## 2. Files created and modified

Modified for this request:

- `data/exam-versions.js`: appends the vocabulary entry, with a content-type discriminator and localized description. The exam resolver now explicitly rejects non-exam types; existing entries without a type retain their existing exam behavior.
- `data/exam-version-info.js`: adds the vocabulary's EN/TH metadata and six-section content. The original two exam-information objects remain identical. Intended vocabulary domains reuse the updated outline names without weights, counts or question imports.
- `js/ui/screen-versions.js`: renders vocabulary content through the existing dialog helpers and localizes its title, description, status/button text and information-button label. Existing exam cards and modal handlers are preserved.
- `tools/verify-exam-versions.mjs`: updates the expected registry length to three.
- `tools/verify-exam-version-info.mjs`: updates expected IDs/statuses/icon count and its DOM fixture for three entries.
- `tools/verify-exam-dialog-complete.mjs`: excludes the intentionally extended registry from an older raw-file snapshot check. Full comparison of both original registry entries now occurs in the vocabulary tests; all other protected hashes remain checked.

Created:

- `tools/verify-exam-vocabulary.mjs`: seven focused tests covering registry identity/type/isolation, direct loader/state calls, cards, dialog content, localization, accessibility handlers and integrity.
- `docs/verification/exam-vocabulary-before.json`: pre-edit hashes for 42 protected files, plus full original registry entries and information objects.
- `docs/verification/exam-vocabulary-results.json`: actual commands, outputs and exit codes.
- This report.

All prior uncommitted feature work, `docs/plans/task.md`, and the user's source JSON files remain present. No staging, commits, resets, moves or reverts occurred. No CSS was changed for this request.

## 3. Registry changes

The existing registry now includes:

```js
{
  id: 'isc2-cc-vocabulary',
  certificationId: 'isc2-cc',
  type: 'vocabulary',
  title: 'ISC2 CC — Exam Vocabulary',
  description: 'Learn and practice essential terminology for the ISC2 Certified in Cybersecurity (CC) exam.',
  descriptionTh: 'เรียนรู้และฝึกคำศัพท์สำคัญสำหรับเตรียมสอบ ISC2 Certified in Cybersecurity (CC)',
  status: 'coming-soon'
}
```

There is no count, dataset path, question-bank reference or loader. `getExamVersions()` keeps its existing public name/signature and returns the selector entries in order. `resolveExamVersion()` only resolves exam content; vocabulary remains rejected even if someone later mistakenly supplies exam references and an available status. No question-loader, engine or session module was modified.

## 4. Final card structure

| Order | ID | Display title | Status | Action |
|---|---|---|---|---|
| 1 | `2026` | ISC2 CC — Pre-2026 Exam Outline | Available, 583 questions | Select Version |
| 2 | `next-bank` | ISC2 CC — 2026 Exam Outline | Coming Soon | Disabled |
| 3 | `isc2-cc-vocabulary` | ISC2 CC — Exam Vocabulary | Coming Soon, no count | Disabled |

All three have information buttons. The original grid and its responsive breakpoints are reused; no card-layout redesign or navigation change was introduced.

## 5. Vocabulary information dialog

Title: **ISC2 CC — Exam Vocabulary**. Subtitle: **ISC2 Certified in Cybersecurity Vocabulary Practice**.

1. Overview: the requested ISC2 CC-specific English-terminology, technical-definition and Thai-meaning explanation.
2. Vocabulary Information: the seven requested table rows—Certification, Content Type, Focus, Languages, Organization, Learning Content and Availability.
3. Domain Coverage: the five updated ISC2 CC 2026 domain names, clearly described as intended categories, without weights, counts or an imported-content claim.
4. Learning Objectives: all five requested learning goals, explicitly distinguished from implemented application features.
5. Future Practice Features: the six requested planned capabilities, explicitly labelled as unavailable plans.
6. Important Notice: the exact independent-preparation-resource clarification, including that this is not a separate official ISC2 exam or outline version, followed by “Vocabulary content is coming soon.”

The current information button, initial heading focus, Close button, Escape/Tab/backdrop handlers, inert background, overflow restoration and return focus to the triggering icon are reused. Information interaction cannot select an exam.

## 6. Localization coverage

Vocabulary card title, supplied description, status/button label, accessible information label, dialog subtitle, all headings, table labels/values, category names, goals, plans and notices support EN, TH and EN+TH through the existing language state/buttons. No separate selector or global translation changes were added. Identical technical labels are displayed once where possible; domain numbers are shared values.

Existing exam entries and information translations are unchanged and are compared in full to the pre-edit snapshot.

## 7. Verification commands and results

Node **v24.15.0**. No browser, browser automation, Playwright, Puppeteer or E2E tests were used.

| Command | Result |
|---|---|
| `node --test tools/verify-exam-vocabulary.mjs tools/verify-exam-dialog-complete.mjs tools/verify-exam-version-info.mjs tools/verify-exam-versions.mjs` | 40/40 pass: 7 vocabulary + 33 existing scenarios |
| `node tools/verify-phase4-quiz-engine.mjs` | 7/7 pass |
| `node tools/verify-session-persistence.mjs` | 8/8 pass |
| `node tools/verify-english-ui-compactness.mjs` | 3/3 pass |
| `node --check` for all application/data JS and the four version/dialog/vocabulary test modules | 30/30 pass |

The existing suites passed 33/33 before edits. New tests were observed failing before implementation. Focused tests verify exactly three ordered unique entries, CC affiliation, learning type, absent counts/references/loaders, blocked direct exam access, correct seven facts/five goals/six plans/five categories, all languages, disabled actions, modal keyboard/focus behavior and unchanged original content. Existing localization-completeness checks also traverse the new metadata. An independent read-only review found no actionable findings and separately passed the seven vocabulary tests.

## 8. Integrity confirmation

All **42 protected files** match their pre-edit SHA-256 hashes. Both original registry entries and exam-dialog metadata objects match their pre-edit values in full. The existing bank still loads **583 unique questions**, with domain counts **142/65/93/156/127**.

Question text, answers, explanations, translations, IDs, mappings, paths and references were preserved. Quiz Configuration, question loader, quiz engine, state, storage/session persistence, scoring, results, retry, certification navigation, shared styles and other certification implementations were not changed for this request. No localStorage data was accessed through a browser or cleared.

## 9. Future integration and limitations

Supply the actual vocabulary dataset first. Inspect its format before selecting a learning/practice engine or schema. Keep the stable `isc2-cc-vocabulary` identity and update its metadata only after validation. A future implementation must add a dedicated content-type action/route appropriate to that dataset, rather than passing vocabulary into `resolveExamVersion()` or the existing exam loader. Changing status alone intentionally does not activate exam selection for vocabulary.

No vocabulary records or speculative learning infrastructure have been prepared. Browser rendering, real keyboard/screen-reader behavior, mobile layout and light/dark appearance were not visually verified; Node DOM doubles and preserved styles provide limited UI evidence. Zero regression risk is not claimed. The previously documented original-HTML migration mismatch remains outside this scoped feature and was not rerun or changed.
