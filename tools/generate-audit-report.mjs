/**
 * tools/generate-audit-report.mjs
 * Generates the official audit report markdown document from tools/audit-results.json.
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const dataPath = path.join(ROOT_DIR, 'tools', 'audit-results.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let report = `# ISC2 CC 2026 Question Bank Audit Report (583 Questions)

> **AUDIT ONLY REPORT** — No source code or question files were modified during this audit.

## Overall Executive Summary

\`\`\`text
Total Questions: ${data.totalQuestions}

Domain 1 (Security Principles): ${data.domainCounts[1]} (Expected: 142)
Domain 2 (BC / DR / Incident Response): ${data.domainCounts[2]} (Expected: 65)
Domain 3 (Access Controls Concepts): ${data.domainCounts[3]} (Expected: 93)
Domain 4 (Network Security): ${data.domainCounts[4]} (Expected: 156)
Domain 5 (Security Operations): ${data.domainCounts[5]} (Expected: 127)

Structurally Valid Questions: ${data.structurallyValidCount}
Needs Review: ${data.needsReviewCount}
Critical Issues: ${data.criticalCount}
High Severity Issues: ${data.highCount}
Medium Severity Issues: ${data.mediumCount}
Low Severity Issues: ${data.lowCount}
Exact Duplicates: ${data.exactDuplicatesCount}
Near Duplicates: ${data.nearDuplicatesCount}
\`\`\`

---

## 1. Required Summary Metrics & Audit Totals

1. **Actual Total Questions**: ${data.totalQuestions}
2. **Actual Count Per Domain**:
   - Domain 1: ${data.domainCounts[1]} / 142
   - Domain 2: ${data.domainCounts[2]} / 65
   - Domain 3: ${data.domainCounts[3]} / 93
   - Domain 4: ${data.domainCounts[4]} / 156
   - Domain 5: ${data.domainCounts[5]} / 127
3. **Number of Structurally Valid Questions**: ${data.structurallyValidCount}
4. **Number of Incomplete Questions**: ${data.issues.filter(i => i.type.includes('Missing') || i.type.includes('Empty') || i.type.includes('Choice Count')).length}
5. **Number of Suspected Incorrect / Contradictory Answers**: ${data.issues.filter(i => i.type.includes('Contradicts') || i.type.includes('Suspicious')).length}
6. **Number of EN/TH Translation Issues**: ${data.issues.filter(i => i.type.includes('Untranslated') || i.type.includes('Truncated')).length}
7. **Number of Exact Duplicates**: ${data.exactDuplicatesCount}
8. **Number of Near Duplicates**: ${data.nearDuplicatesCount}
9. **Number of Domain Classification Concerns**: ${data.issues.filter(i => i.type.includes('Domain')).length}
10. **Full List of Question IDs Requiring Manual Review**: ${data.flaggedQuestionIds.join(', ')}

---

## 2. Categorized Findings & Actionable Audit Items

`;

const criticals = data.issues.filter(i => i.severity === 'CRITICAL');
const highs = data.issues.filter(i => i.severity === 'HIGH');
const mediums = data.issues.filter(i => i.severity === 'MEDIUM');
const lows = data.issues.filter(i => i.severity === 'LOW');

function formatIssuesSection(title, list) {
  let s = `### ${title} (${list.length} items)\n\n`;
  if (list.length === 0) {
    s += '*None detected.*\n\n';
    return s;
  }
  list.forEach(i => {
    s += `Question ID: ${i.qId}
Domain: Domain ${i.dom}
File: ${i.file}
Issue Type: ${i.type}
Severity: ${i.severity}
Current Correct Answer: ${i.currentCorrect}
Problem: ${i.problem}
Recommended Action: ${i.rec}

---

`;
  });
  return s;
}

report += formatIssuesSection('CRITICAL SEVERITY', criticals);
report += formatIssuesSection('HIGH SEVERITY', highs);
report += formatIssuesSection('MEDIUM SEVERITY', mediums);

// For Low Severity, summarize by issue type to keep report actionable and clean
const lowTypesMap = {};
lows.forEach(i => {
  lowTypesMap[i.type] = (lowTypesMap[i.type] || 0) + 1;
});

report += `### LOW SEVERITY (${lows.length} items)

**Summary Breakdown of Low Severity Items:**
`;

Object.entries(lowTypesMap).forEach(([type, count]) => {
  report += `- **${type}**: ${count} items\n`;
});

report += `\n**Sample Low Severity Items:**\n\n`;

lows.slice(0, 15).forEach(i => {
  report += `Question ID: ${i.qId}
Domain: Domain ${i.dom}
File: ${i.file}
Issue Type: ${i.type}
Severity: ${i.severity}
Current Correct Answer: ${i.currentCorrect}
Problem: ${i.problem}
Recommended Action: ${i.rec}

---

`;
});

if (lows.length > 15) {
  report += `*Note: Remaining low severity items consist of untranslated technical terms (such as 'Confidentiality', 'Firewall', or 'Symmetric Encryption' left in English within Thai options) and minor domain placement suggestions.*

`;
}

report += `## 3. Duplicate Questions Breakdown

### Exact Duplicates (${data.exactDuplicates.length} items)

`;

data.exactDuplicates.forEach(d => {
  report += `- **Q${d.id2}** (${d.file2}) is an exact duplicate of **Q${d.id1}** (${d.file1}):
  - Question text: "${d.text}"

`;
});

report += `### Near Duplicates (${data.nearDuplicates.length} items)

`;

data.nearDuplicates.forEach(d => {
  report += `- **Q${d.id2}** (${d.file2}) vs **Q${d.id1}** (${d.file1}) [Similarity: ${d.sim}]:
  - Q${d.id1}: "${d.text1}"
  - Q${d.id2}: "${d.text2}"

`;
});

const reportPath = path.join(ROOT_DIR, 'tools', 'question-bank-audit-report.md');
fs.writeFileSync(reportPath, report, 'utf8');

// Also save artifact copy in brain directory if conversation ID path exists
const brainReportPath = 'C:\\Users\\Settapon.cs\\.gemini\\antigravity-ide\\brain\\e4d20521-826c-48d0-993e-1d4b7f7f48da\\question_bank_audit_report.md';
try {
  fs.writeFileSync(brainReportPath, report, 'utf8');
} catch (e) {}

console.log(`Full Audit Report generated successfully at: ${reportPath}`);
