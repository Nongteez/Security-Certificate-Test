import { element, localize } from './dom.js';
import { renderSlide } from './renderers.js';

function formatAuthority(auth) {
  if (auth === 'technical-primary') return 'Technical Standard';
  if (auth === 'official-scope') return 'Official Outline';
  if (auth === 'editorial') return 'Project Reference';
  return auth ? String(auth).toUpperCase() : '';
}

/** Centered responsive modal dialog for lesson metadata; owns modal focus/inert state and never reads or writes progress. */
export function renderLessonInfo(host, { lesson, language = 'en', onClose = () => {} }) {
  const doc = host.ownerDocument, abort = new AbortController(), opener = doc.activeElement;
  const overlay = element(doc, 'div', 'learning-info-overlay');
  const panel = element(doc, 'section', 'learning-info-panel');
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'learning-info-title');
  let destroyed = false; const explanationHandles = [];

  // 1. Header with title and single X close icon
  const header = element(doc, 'header', 'learning-info-header');
  const title = element(doc, 'h2', 'learning-info-modal-title', 'Lesson Info');
  title.id = 'learning-info-title';

  const closeBtn = element(doc, 'button', 'learning-info-close-btn');
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.setAttribute('data-action', 'close-info');
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', () => destroy(), { signal: abort.signal });

  header.append(title, closeBtn);
  panel.append(header);

  // 2. Lesson Title with Objective identifier
  const titleBlock = element(doc, 'div', 'learning-info-title-block');
  const objCode = lesson.primaryObjectiveId || (lesson.objectiveIds && lesson.objectiveIds[0]);
  if (objCode) {
    titleBlock.append(element(doc, 'p', 'learning-eyebrow learning-info-obj-badge', `OBJECTIVE ${objCode}`));
  }
  const lessonHeading = element(doc, 'h3', 'learning-info-lesson-title');
  localize(lessonHeading, lesson.title, language);
  titleBlock.append(lessonHeading);
  panel.append(titleBlock);

  // 3. Main section: "What you'll learn" (preserves original learning outcomes)
  if (lesson.outcomes?.length) {
    const section = element(doc, 'section', 'learning-info-section learning-info-outcomes-section');
    section.append(element(doc, 'h4', 'learning-info-section-title', "What you'll learn"));
    const list = element(doc, 'ul', 'learning-content learning-info-list');
    for (const item of lesson.outcomes) {
      list.append(localize(element(doc, 'li'), item, language));
    }
    section.append(list);
    panel.append(section);
  }

  // The concise introductory canvas never replaces the complete verified explanation.
  const intro = lesson.slides?.find(slide => slide.layoutId === 'hero-intro');
  if (intro?.blocks?.length) {
    const explanation = element(doc, 'details', 'learning-info-intro-explanation');
    explanation.append(element(doc, 'summary', 'learning-info-details-summary', 'Introduction — Full explanation'));
    const body = element(doc, 'div', 'learning-info-details-body');
    body.append(localize(element(doc, 'h4'), intro.title, language));
    for (const block of intro.blocks) {
      if (block.kind === 'text') body.append(localize(element(doc, 'p'), block.text, language));
      if (block.kind === 'list') { const list = element(doc, 'ul', 'learning-info-list'); for (const item of block.items) list.append(localize(element(doc, 'li'), item, language)); body.append(list); }
    }
    explanation.append(body); panel.append(explanation);
  }

  if (['lesson-d1-01-cia-triad','lesson-d1-02-aaa-mfa','lesson-d1-03-non-repudiation','lesson-d1-04-privacy','lesson-d1-05-risk-foundations','lesson-d1-06-assessment','lesson-d1-07-risk-response','lesson-d1-08-governance','lesson-d1-09-frameworks','lesson-d1-10-control-categories','lesson-d1-11-control-functions','lesson-d1-12-professional-conduct'].includes(lesson.id)) {
    const isAaa = lesson.id === 'lesson-d1-02-aaa-mfa';
    const isConduct = lesson.id === 'lesson-d1-12-professional-conduct';
    const isFunctions = lesson.id === 'lesson-d1-11-control-functions';
    const isCategories = lesson.id === 'lesson-d1-10-control-categories';
    const isFrameworks = lesson.id === 'lesson-d1-09-frameworks';
    const isGovernance = lesson.id === 'lesson-d1-08-governance';
    const isResponse = lesson.id === 'lesson-d1-07-risk-response';
    const isAssessment = lesson.id === 'lesson-d1-06-assessment';
    const isRisk = lesson.id === 'lesson-d1-05-risk-foundations';
    const isPrivacy = lesson.id === 'lesson-d1-04-privacy';
    const isNr = lesson.id === 'lesson-d1-03-non-repudiation';
    const explanations = element(doc, 'details', `learning-info-source-explanations${isAaa ? ' learning-info-aaa-explanations' : ''}`);
    explanations.append(element(doc, 'summary', 'learning-info-details-summary', isConduct ? 'Slides 1–10 — Full explanations' : isFunctions ? 'Slides 1–9 — Full explanations' : isCategories ? 'Slides 1–8 — Full explanations' : isFrameworks ? 'Slides 1–10 — Full explanations' : isGovernance ? 'Slides 1–9 — Full explanations' : isResponse ? 'Slides 1–10 — Full explanations' : (isPrivacy || isRisk || isAssessment) ? 'Slides 1–8 — Full explanations' : isNr ? `Slides 1–${lesson.slides.length} — Full explanations` : isAaa ? 'Slides 1–7 — Full explanations' : `Slides 2–${lesson.slides.length} — Full explanations`));
    for (const [index, slide] of (lesson.slides || []).entries()) {
      if (index === 0 && !isAaa && !isNr && !isPrivacy && !isRisk && !isAssessment && !isResponse && !isGovernance && !isFrameworks && !isCategories && !isFunctions && !isConduct) continue;
      const detail = element(doc, 'details', 'learning-info-slide-explanation');
      detail.append(element(doc, 'summary', 'learning-info-details-summary', `Slide ${index + 1} — ${slide.title.en}`));
      const content = element(doc, 'div', 'learning-info-details-body'); content.setAttribute('data-explanation-slide', slide.id);
      explanationHandles.push(renderSlide(content, {lesson,slide,language,mode:'reading'}));
      detail.append(content); explanations.append(detail);
    }
    panel.append(explanations);
  }
  // Limit Domain 3 explanations to its reviewed lessons; preserve existing D1/D2 paths.
  if ((lesson.domainId === 2 || (lesson.domainId === 3 && ['lesson-d3-01-roles-provisioning','lesson-d3-02-review-deprovisioning','lesson-d3-03-iam-frameworks-tools','lesson-d3-06-mfa-authentication-signals','lesson-d3-05-access-control-models','lesson-d3-04-least-privilege-sod'].includes(lesson.id))) && Array.isArray(lesson.slides) && lesson.slides.length > 0) {
    const d2Explanations = element(doc, 'details', 'learning-info-source-explanations');
    d2Explanations.append(element(doc, 'summary', 'learning-info-details-summary', `Slides 1–${lesson.slides.length} — Full explanations`));
    for (const [index, slide] of lesson.slides.entries()) {
      const detail = element(doc, 'details', 'learning-info-slide-explanation');
      detail.append(element(doc, 'summary', 'learning-info-details-summary', `Slide ${index + 1} — ${slide.title.en}`));
      const content = element(doc, 'div', 'learning-info-details-body'); content.setAttribute('data-explanation-slide', slide.id);
      explanationHandles.push(renderSlide(content, { lesson, slide, language, mode: 'reading' }));
      detail.append(content); d2Explanations.append(detail);
    }
    panel.append(d2Explanations);
  }

  // 4. Collapsible Details: "References & lesson details" (collapsed by default)
  const hasPrereqs = Boolean(lesson.prerequisites?.length);
  const hasSources = Boolean(lesson.references?.length);
  const hasMeta = Boolean(lesson.review || lesson.revision);

  if (hasPrereqs || hasSources || hasMeta) {
    const details = element(doc, 'details', 'learning-info-details');
    // Ensure .open getter/setter works smoothly in both DOM and mock test environments
    Object.defineProperty(details, 'open', {
      get() { return details.hasAttribute('open'); },
      set(v) { if (v) details.setAttribute('open', ''); else details.removeAttribute('open'); },
      configurable: true
    });

    const summary = element(doc, 'summary', 'learning-info-details-summary', 'References & lesson details');
    summary.addEventListener('click', () => {
      if (!doc.defaultView) {
        details.open = !details.open;
      }
    }, { signal: abort.signal });
    details.append(summary);

    const detailsBody = element(doc, 'div', 'learning-info-details-body');

    // 4.1 Before you begin (prerequisites, if present)
    if (hasPrereqs) {
      const sub = element(doc, 'section', 'learning-info-sub-section');
      sub.append(element(doc, 'h5', 'learning-info-sub-title', 'Before you begin'));
      const list = element(doc, 'ul', 'learning-content learning-info-list');
      for (const item of lesson.prerequisites) {
        list.append(localize(element(doc, 'li'), item, language));
      }
      sub.append(list);
      detailsBody.append(sub);
    }

    // 4.2 Sources (preserves all references, rendering external URLs as accessible links)
    if (hasSources) {
      const sub = element(doc, 'section', 'learning-info-sub-section');
      sub.append(element(doc, 'h5', 'learning-info-sub-title', 'Sources'));
      const list = element(doc, 'ul', 'learning-info-sources-list');
      for (const ref of lesson.references) {
        const li = element(doc, 'li', 'learning-info-source-item');
        if (ref.authority) {
          li.append(element(doc, 'span', 'learning-info-source-badge', formatAuthority(ref.authority)));
        }
        if (ref.url?.startsWith('https://')) {
          const a = element(doc, 'a', 'learning-info-source-link', ref.title);
          a.href = ref.url;
          a.setAttribute('href', ref.url);
          a.target = '_blank';
          a.setAttribute('target', '_blank');
          a.rel = 'noopener noreferrer';
          a.setAttribute('rel', 'noopener noreferrer');
          li.append(a);
        } else {
          li.append(element(doc, 'span', 'learning-info-source-title', ref.title));
        }
        if (ref.locator) {
          li.append(element(doc, 'span', 'learning-info-source-locator', ` — ${ref.locator}`));
        }
        list.append(li);
      }
      sub.append(list);
      detailsBody.append(sub);
    }

    // 4.3 Review metadata & version notes
    if (hasMeta) {
      const metaBlock = element(doc, 'div', 'learning-info-meta-block');
      if (lesson.revision) {
        metaBlock.append(element(doc, 'p', 'learning-progress-label', `Content version: ${lesson.revision}`));
      }
      if (lesson.review) {
        for (const kind of ['technical', 'bilingual', 'rights']) {
          const r = lesson.review[kind];
          metaBlock.append(element(doc, 'p', '', `${kind}: ${r?.status || 'pending'} · ${r?.reviewer || '—'} · ${r?.reviewedAt || '—'}`));
        }
        metaBlock.append(element(doc, 'p', '', `Review evidence: ${lesson.review.evidencePath || 'Not provided'}`));
      }
      detailsBody.append(metaBlock);
    }

    details.append(detailsBody);
    panel.append(details);
  }

  overlay.append(panel);
  host.append(overlay);

  // Background inertness
  const background = [];
  for (let node = overlay; node.parentElement; node = node.parentElement) {
    for (const sibling of node.parentElement.children) {
      if (sibling !== node) {
        background.push([sibling, !!sibling.inert]);
        sibling.inert = true;
      }
    }
    if (node.parentElement === doc.body) break;
  }
  const overflow = doc.body.style.overflow;
  doc.body.style.overflow = 'hidden';

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    abort.abort();
    explanationHandles.forEach(handle => handle.destroy());
    overlay.parentElement?.removeChild(overlay);
    for (const [node, inert] of background) node.inert = inert;
    doc.body.style.overflow = overflow;
    if (opener?.isConnected) opener.focus();
    onClose();
  }

  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      destroy();
    }
    if (event.key === 'Tab') {
      const controls = Array.from(panel.querySelectorAll('button, a, input, select, textarea, summary, [tabindex]'))
        .filter(n => {
          if (n.disabled || n.hidden || n.tabIndex === -1) return false;
          const parentDetails = n.closest?.('details');
          if (parentDetails && !parentDetails.hasAttribute('open') && n.tagName !== 'SUMMARY') {
            return false;
          }
          return true;
        });
      const first = controls[0] || closeBtn, last = controls.at(-1) || closeBtn;
      if (event.shiftKey && (doc.activeElement === first || !panel.contains(doc.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (doc.activeElement === last || !panel.contains(doc.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    }
  }, { signal: abort.signal });

  overlay.addEventListener('click', event => {
    if (event.target === overlay) destroy();
  }, { signal: abort.signal });

  closeBtn.focus();
  return { destroy };
}
