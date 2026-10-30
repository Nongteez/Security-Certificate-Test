/**
 * ISC2 CC 2026 — Scenario Component Module
 *
 * Provides structured scenario data parsing and safe semantic HTML rendering.
 * Guarantees that each scenario is an independent, top-level sibling element
 * with balanced HTML and zero nested container clutter.
 */

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Parses raw key-value lines from a :::scenario block into structured data fields.
 * @param {string[]} lines - Lines within the :::scenario block
 * @returns {Object} Structured scenario fields
 */
export function parseScenarioBlock(lines) {
  const data = {
    id: '',
    badge: '',
    topic: '',
    situation: '',
    question: '',
    answer: '',
    reasoning: ''
  };

  let currentKey = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const match = trimmed.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (match) {
      const rawKey = match[1].toLowerCase();
      const val = match[2].trim();

      // Normalize key aliases
      if (rawKey === 'id' || rawKey === 'num' || rawKey === 'scenario') {
        currentKey = 'id';
        data.id = val;
      } else if (rawKey === 'badge' || rawKey === 'label') {
        currentKey = 'badge';
        data.badge = val;
      } else if (rawKey === 'topic' || rawKey === 'category') {
        currentKey = 'topic';
        data.topic = val;
      } else if (rawKey === 'situation' || rawKey === 'context') {
        currentKey = 'situation';
        data.situation = val;
      } else if (rawKey === 'question' || rawKey === 'q') {
        currentKey = 'question';
        data.question = val;
      } else if (rawKey === 'answer' || rawKey === 'ans') {
        currentKey = 'answer';
        data.answer = val;
      } else if (rawKey === 'reasoning' || rawKey === 'reason' || rawKey === 'explanation') {
        currentKey = 'reasoning';
        data.reasoning = val;
      } else {
        currentKey = rawKey;
        data[rawKey] = val;
      }
    } else if (currentKey) {
      // Multi-line continuation for the current field
      data[currentKey] = (data[currentKey] ? data[currentKey] + ' ' : '') + trimmed;
    }
  }

  // Fallback defaults
  if (!data.badge && data.id) {
    data.badge = `Scenario ${data.id}`;
  } else if (!data.id && data.badge) {
    const numMatch = data.badge.match(/\d+/);
    data.id = numMatch ? numMatch[0] : '1';
  }

  return data;
}

/**
 * Renders a structured scenario object into clean, semantic, accessible sibling HTML.
 * @param {Object} scenario - Structured scenario data
 * @param {Function} [inlineParser] - Optional markdown inline formatting function
 * @returns {string} Rendered HTML string
 */
export function renderScenarioCard(scenario, inlineParser = (text) => escapeHtml(text)) {
  const id = escapeHtml(scenario.id || '1');
  const badge = escapeHtml(scenario.badge || `Scenario ${id}`);
  const topic = escapeHtml(scenario.topic || '');
  const situation = inlineParser(scenario.situation || scenario.context || '');
  const question = inlineParser(scenario.question || '');

  let rawAnswer = scenario.answer || '';
  let rawReasoning = scenario.reasoning || '';

  // If answer already contains reasoning enclosed in parentheses, separate or format cleanly
  let answerHtml = '';
  if (rawAnswer && rawReasoning) {
    const parsedAns = inlineParser(rawAnswer);
    const parsedReason = inlineParser(rawReasoning);
    answerHtml = `<strong>${parsedAns}</strong> (${parsedReason})`;
  } else if (rawAnswer) {
    answerHtml = inlineParser(rawAnswer);
    // Ensure the key answer term is bolded if not already wrapped
    if (!answerHtml.includes('<strong>') && !answerHtml.includes('<b>')) {
      const parenIdx = answerHtml.indexOf('(');
      if (parenIdx > 0) {
        const term = answerHtml.slice(0, parenIdx).trim();
        const rest = answerHtml.slice(parenIdx);
        answerHtml = `<strong>${term}</strong> ${rest}`;
      } else {
        answerHtml = `<strong>${answerHtml}</strong>`;
      }
    }
  }

  return [
    `<div class="reading-scenario-card" data-scenario="${id}">`,
    `  <div class="reading-scenario-header">`,
    `    <span class="reading-scenario-badge">${badge}</span>`,
    `    <span class="reading-scenario-topic">${topic}</span>`,
    `  </div>`,
    `  <p class="reading-scenario-context reading-scenario-situation">`,
    `    <strong class="reading-scenario-label">สถานการณ์:</strong> ${situation}`,
    `  </p>`,
    `  <p class="reading-scenario-question">`,
    `    <strong class="reading-scenario-label">คำถาม:</strong> ${question}`,
    `  </p>`,
    `  <div class="reading-scenario-answer">`,
    `    <div class="reading-scenario-answer-label">เฉลยและเหตุผล:</div>`,
    `    <p class="reading-scenario-answer-text">${answerHtml}</p>`,
    `  </div>`,
    `</div>`
  ].join('\n');
}
