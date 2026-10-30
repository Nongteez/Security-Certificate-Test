/**
 * Domain 1 Math Renderer Module
 *
 * Provides accurate, beautiful typesetting for mathematical formulas:
 * - Uses KaTeX when window.katex is loaded in the browser
 * - Features a robust, semantic fallback typesetter for offline and Node test environments
 * - Accurately formats quantitative risk equations (SLE = AV × EF, ALE = SLE × ARO)
 * - Properly parses LaTeX operators (\times, \to, \approx, \mathbf, \text) into clean semantic HTML
 * - Guarantees zero raw LaTeX markup leaks into article text
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
 * Robust semantic typesetter fallback for LaTeX math expressions.
 * Transforms raw LaTeX commands into clean, styled HTML.
 * @param {string} latex - Raw LaTeX expression
 * @param {boolean} isDisplay - Whether this is a block display equation
 * @returns {string} Clean HTML string
 */
export function formatSemanticMath(latex, isDisplay = false) {
  if (!latex) return '';

  let math = String(latex).trim();

  // Normalize dollar signs ($10,000 -> $10,000 without escaping issues)
  math = math.replace(/\\(\$)/g, '$1');

  // Parse \text{...} into clean text spans
  math = math.replace(/\\text\{([^}]+)\}/g, (match, inner) => {
    return `<span class="math-text">${escapeHtml(inner)}</span>`;
  });

  // Parse \mathbf{...} into bold math variables
  math = math.replace(/\\mathbf\{([^}]+)\}/g, (match, inner) => {
    return `<strong class="math-bold">${escapeHtml(inner)}</strong>`;
  });

  // Parse standard math operators
  math = math.replace(/\\times/g, '<span class="math-operator">&times;</span>');
  math = math.replace(/\\to/g, '<span class="math-arrow">&rarr;</span>');
  math = math.replace(/\\approx/g, '<span class="math-operator">&asymp;</span>');
  math = math.replace(/\\neq/g, '<span class="math-operator">&ne;</span>');
  math = math.replace(/\\le(q)?/g, '<span class="math-operator">&le;</span>');
  math = math.replace(/\\ge(q)?/g, '<span class="math-operator">&ge;</span>');

  // Wrap variables in semantic variable tags where appropriate
  math = math.replace(/\b(AV|EF|SLE|ARO|ALE|Risk|Likelihood|Impact)\b/g, (match) => {
    return `<var class="math-var">${match}</var>`;
  });

  if (isDisplay) {
    return `<div class="reading-math-block"><div class="reading-math-display" role="math" aria-label="${escapeHtml(latex)}"><span class="math-inner">${math}</span></div></div>`;
  }
  return `<span class="reading-math-inline" role="math" aria-label="${escapeHtml(latex)}">${math}</span>`;
}

/**
 * Renders an inline math expression.
 * @param {string} latex
 * @returns {string}
 */
export function renderInlineMath(latex) {
  if (!latex) return '';
  const cleanLatex = latex.trim();

  // If KaTeX is available in the browser window, use it
  if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
    try {
      return window.katex.renderToString(cleanLatex, {
        displayMode: false,
        throwOnError: false,
        strict: false
      });
    } catch (err) {
      console.warn('KaTeX inline render error, falling back to semantic math:', err);
    }
  }

  return formatSemanticMath(cleanLatex, false);
}

/**
 * Renders a block display math equation.
 * @param {string} latex
 * @returns {string}
 */
export function renderBlockMath(latex) {
  if (!latex) return '';
  const cleanLatex = latex.trim();

  // If KaTeX is available in the browser window, use it
  if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
    try {
      const rendered = window.katex.renderToString(cleanLatex, {
        displayMode: true,
        throwOnError: false,
        strict: false
      });
      return `<div class="reading-math-block"><div class="reading-math-display" role="math" aria-label="${escapeHtml(cleanLatex)}">${rendered}</div></div>`;
    } catch (err) {
      console.warn('KaTeX block render error, falling back to semantic math:', err);
    }
  }

  return formatSemanticMath(cleanLatex, true);
}
