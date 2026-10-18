/**
 * tools/sync-staging-domain-1.mjs
 *
 * Populates content/isc2-cc-2026/questions/domain-1.md with the 24 authored questions,
 * including full editorial metadata, concept mappings, and Thai explanations.
 */

import fs from 'node:fs';
import path from 'node:path';
import { domain1NewQuestions } from './draft-domain-1-questions.mjs';

function formatStagedQuestion(q) {
  const letters = ['A', 'B', 'C', 'D'];
  const correctLetter = letters[q.correct_idx];

  const optionsMd = q.options.map((opt, i) => {
    const isCorrect = i === q.correct_idx;
    return `  - [${isCorrect ? 'x' : ' '}] **${letters[i]}.** ${opt}`;
  }).join('\n');

  const optionsThMd = q.options_th.map((opt, i) => {
    const isCorrect = i === q.correct_idx;
    return `  - [${isCorrect ? 'x' : ' '}] **${letters[i]}.** ${opt}`;
  }).join('\n');

  return `### Question Entry: Q-D1-${String(q.id).padStart(3, '0')} (Production ID: ${q.id})

#### 1. Identification & Source Provenance
- **Question ID (Production):** \`${q.id}\`
- **Domain:** Domain 1: Security Principles
- **Objective ID:** \`${q._meta.objective}\`
- **Opportunity Family:** \`${q._meta.opportunity}\`
- **Concept IDs:** \`${q._meta.concept}\`
- **Source References:** ${q._meta.references}
- **Validation Status:** \`VALIDATED / ACTIVATED\`

#### 2. English Question Specification
- **Question Stem (English):**
  > ${q.question}

- **Answer Options (English):**
${optionsMd}

- **Correct Answer Index:** \`${q.correct_idx}\` (Option ${correctLetter})

- **Full Explanation (English):**
  > ${q.explanation}

- **Short Explanation (English):**
  > ${q.short_explanation_en}

#### 3. Thai Translation (คำแปลภาษาไทย)
- **Translated Question Stem (ภาษาไทย):**
  > ${q.question_th}

- **Translated Answer Options (ภาษาไทย):**
${optionsThMd}

- **Translated Explanation (คำอธิบายภาษาไทย):**
  > ${q.explanation_th.replace(/\n/g, '\n  > ')}

---
`;
}

function main() {
  const stagingFilePath = path.resolve('content/isc2-cc-2026/questions/domain-1.md');
  const questionsMd = domain1NewQuestions.map(formatStagedQuestion).join('\n');

  const fileContent = `# Domain 1: Security Principles — Question Staging & Activation Record

> **Domain Weight:** 26% (Exam Weight)  
> **Status:** Production Active — 24 Source-Grounded Items Staged & Activated  
> **Activated Production IDs:** 584–607 (Total Domain 1 Bank: 166 Questions)  
> **Opportunity Families Served:** O01–O18 (18/18 Plannable Families)  
> **Held / Deferred Opportunities:** O19, O20 (Zero items authored; strictly held)  

---

## 1. Domain Objectives & Subtopic Distribution

- **Subtopic 1.1: Security Concepts (Objective 1.1)** — 7 Questions (Q584–Q590) [O01–O07]
- **Subtopic 1.2: Risk Management Concepts (Objective 1.2)** — 6 Questions (Q591–Q596) [O08–O12]
- **Subtopic 1.3: Governance Concepts (Objective 1.3)** — 4 Questions (Q597–Q600) [O13–O14]
- **Subtopic 1.4: Cybersecurity Controls (Objective 1.4)** — 5 Questions (Q601–Q605) [O15–O17]
- **Subtopic 1.5: Professional & Ethical Conduct (Objective 1.5)** — 2 Questions (Q606–Q607) [O18]

---

## 2. Validated & Activated Questions

${questionsMd}
`;

  fs.writeFileSync(stagingFilePath, fileContent, 'utf8');
  console.log(`Updated staging record at ${stagingFilePath}`);
}

main();
