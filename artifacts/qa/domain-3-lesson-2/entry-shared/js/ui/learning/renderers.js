import {hasIamRolesProvisioningPresentation,renderIamRolesProvisioningPresentation} from './iam-roles-provisioning-presentations.js';
import {hasSecurityReportingPresentation,renderSecurityReportingPresentation} from './security-reporting-presentations.js';
import {hasSecurityMetricsPresentation,renderSecurityMetricsPresentation} from './security-metrics-presentations.js';
import {hasSocialPasswordsPresentation,renderSocialPasswordsPresentation} from './social-engineering-passwords-presentations.js';
import {hasSecurityAwarenessPresentation,renderSecurityAwarenessPresentation} from './security-awareness-presentations.js';
import { hasDisasterRecoveryDrpPresentation, renderDisasterRecoveryDrpPresentation } from './disaster-recovery-drp-presentations.js';
import { hasBusinessContinuityBcpPresentation, renderBusinessContinuityBcpPresentation } from './business-continuity-bcp-presentations.js';
import { hasGrcToolsRiskRegisterPresentation, renderGrcToolsRiskRegisterPresentation } from './grc-tools-risk-register-presentations.js';
import { hasGrcFoundationsPresentation, renderGrcFoundationsPresentation } from './grc-foundations-presentations.js';
import {hasProfessionalConductPresentation,renderProfessionalConductPresentation} from './professional-conduct-presentations.js';
import {hasControlFunctionsPresentation,renderControlFunctionsPresentation} from './control-functions-presentations.js';
import {hasControlCategoriesPresentation,renderControlCategoriesPresentation} from './control-categories-presentations.js';
import {hasFrameworksPresentation,renderFrameworksPresentation} from './frameworks-presentations.js';
import {hasGovernancePresentation,renderGovernancePresentation} from './governance-presentations.js';
import {hasRiskResponsePresentation,renderRiskResponsePresentation} from './risk-response-presentations.js';
import {hasAssessmentPresentation,renderAssessmentPresentation} from './assessment-presentations.js';
import {hasRiskFoundationsPresentation,renderRiskFoundationsPresentation} from './risk-foundations-presentations.js';
import { hasPrivacyPresentation, renderPrivacyPresentation } from './privacy-presentations.js';
import { element, localize } from './dom.js';
import { registerRendererType } from '../../core/learning-schema.js';
import { isStructuredRenderer, semanticBlocks } from '../../core/learning-visuals.js';
import { renderPillars, renderIncidentFlow, renderScenarioDecision, renderVisualThumbnail } from './visual-components.js';
import { renderEditorialIntro } from './editorial-intro.js';
import { hasCiaPresentation, renderCiaPresentation } from './cia-presentations/index.js';
import { hasAaaPresentation, renderAaaPresentation } from './aaa-presentations.js';
import { hasNonRepudiationPresentation, renderNonRepudiationPresentation } from './non-repudiation-presentations.js';
const registry = new Map();
/** Trusted code registers adapters. JSON never supplies module URLs or executable content. */
export function registerLearningRenderer(id, { validate, load, thumbnail }) {
  if (typeof load !== 'function' || typeof thumbnail !== 'function') throw Error('Renderer needs load and thumbnail functions');
  registerRendererType(id, validate); registry.set(id, { load, thumbnail });
}
function blocks(host, { slide, lesson, language, mode, signal, interactionState = {} }) {
  const doc = host.ownerDocument;
  for (const [blockIndex, b] of (slide.blocks || []).entries()) {
    if (b.kind === 'text') host.append(localize(element(doc, 'p'), b.text, language));
    if (b.kind === 'list') { const ul = element(doc, 'ul'); for (const item of b.items) ul.append(localize(element(doc, 'li'), item, language)); host.append(ul); }
    if (b.kind === 'table') {
      const wrap = element(doc, 'div', 'learning-table-scroll'), table = element(doc, 'table'); table.append(localize(element(doc, 'caption'), b.caption, language));
      const head = element(doc, 'thead'), tr = element(doc, 'tr'); for (const col of b.columns) { const th = localize(element(doc, 'th'), col, language); th.setAttribute('scope', 'col'); tr.append(th); } head.append(tr); table.append(head);
      const body = element(doc, 'tbody'); for (const row of b.rows) { const r = element(doc, 'tr'); for (const cell of row) r.append(localize(element(doc, 'td'), cell, language)); body.append(r); } table.append(body); wrap.append(table); host.append(wrap);
    }
    if (b.kind === 'diagram') {
      const figure = element(doc, 'figure', 'learning-diagram'); figure.append(localize(element(doc, 'figcaption'), b.description, language));
      if (mode !== 'reading') {
        const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', `0 0 ${Math.max(1, b.steps.length) * 200} 100`); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
        b.steps.forEach((step, index) => {
          const rect = doc.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('x', index * 200 + 5); rect.setAttribute('y', '10'); rect.setAttribute('width', '165'); rect.setAttribute('height', '70'); rect.setAttribute('rx', '12'); rect.setAttribute('fill', '#EFF6FF'); rect.setAttribute('stroke', '#2563EB');
          const label = doc.createElementNS('http://www.w3.org/2000/svg', 'text'); label.setAttribute('x', index * 200 + 87); label.setAttribute('y', '52'); label.setAttribute('text-anchor', 'middle'); label.setAttribute('fill', '#1E293B'); label.textContent = step[language === 'th' ? 'th' : 'en']; svg.append(rect, label);
          if (index < b.steps.length - 1) { const arrow = doc.createElementNS('http://www.w3.org/2000/svg', 'text'); arrow.setAttribute('x', index * 200 + 175); arrow.setAttribute('y', '52'); arrow.setAttribute('fill', '#2563EB'); arrow.textContent = '→'; svg.append(arrow); }
        }); figure.append(svg);
      }
      const ol = element(doc, 'ol'); for (const step of b.steps) ol.append(localize(element(doc, 'li'), step, language)); figure.append(ol); host.append(figure);
    }
    if (b.kind === 'reveal') { const details = element(doc, 'details'); details.setAttribute('data-slide-interactive', ''); details.append(localize(element(doc, 'summary'), b.label, 'en'), localize(element(doc, 'p'), b.text, language)); details.open = mode === 'reading' || interactionState.reveals?.[blockIndex] === true; details.addEventListener('toggle', () => { if (mode !== 'reading') { interactionState.reveals ||= {}; interactionState.reveals[blockIndex] = details.open; } }, { signal }); host.append(details); }
    if (b.kind === 'media') {
      const a = lesson.assets.find(asset => asset.id === b.assetId); if (!a) continue;
      const figure = element(doc, 'figure'); const fallback = () => { figure.replaceChildren(localize(element(doc, 'figcaption'), a.transcript || a.alt, language)); };
      if (mode === 'reading' && a.type !== 'image') { fallback(); host.append(figure); continue; }
      const media = element(doc, a.type === 'image' ? 'img' : a.type); media.src = new URL(`../../../${a.path}`, import.meta.url).href; media.setAttribute('data-slide-interactive', '');
      if (a.type === 'image') { media.alt = language === 'both' ? `${a.alt.en} / ${a.alt.th}` : a.alt[language]; media.loading = 'lazy'; }
      else { media.controls = true; media.preload = 'none'; }
      media.addEventListener('error', fallback, { signal }); signal.addEventListener('abort', () => { media.pause?.(); media.removeAttribute('src'); media.load?.(); }, { once: true });
      figure.append(media, localize(element(doc, 'figcaption'), a.transcript || a.alt, language)); host.append(figure);
    }
  }
}
export function renderThumbnail(host, slide, language) {
  if (isStructuredRenderer(slide.rendererId)) { renderVisualThumbnail(host, { slide, language }); return; }
  const custom = registry.get(slide.rendererId); if (custom) { custom.thumbnail(host, { slide, language }); return; }
  const doc = host.ownerDocument; host.append(element(doc, 'strong', '', slide.title[language === 'th' ? 'th' : 'en']));
  const first = slide.blocks?.[0] || semanticBlocks(slide)?.[0]; let preview = first?.text || first?.description || first?.caption || first?.items?.[0];
  if (preview) host.append(element(doc, 'small', '', preview[language === 'th' ? 'th' : 'en']));
  if (first?.kind === 'table') host.append(element(doc, 'span', 'learning-thumb-pattern', '▥  ▥  ▥'));
  if (first?.kind === 'diagram') host.append(element(doc, 'span', 'learning-thumb-pattern', '□ → □ → □'));
  if (first?.kind === 'reveal') host.append(element(doc, 'span', 'learning-thumb-pattern', '＋'));
  if (slide.layoutId === 'hero-intro' || slide.rendererId === 'hero-intro') host.append(element(doc, 'span', 'learning-thumb-pattern', '▲ 🛡️ ▲'));
}
export function renderSlide(host, context) {
  const abort = new AbortController(); let cleanup = () => {}, ready = Promise.resolve(); host.replaceChildren();
  host.setAttribute('data-layout', context.slide.layoutId || 'default');
  host.setAttribute('data-renderer', context.slide.rendererId || 'text');
  const heading = localize(element(host.ownerDocument, 'h2', 'learning-slide-title'), context.slide.title, context.language); host.append(heading);
  const iamProvisioning = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasIamRolesProvisioningPresentation(context);
  host.classList.toggle('learning-iam-provisioning-slide',Boolean(iamProvisioning));
  if (iamProvisioning) heading.classList.add('learning-sr-only');
  const isIntro = context.slide.layoutId === 'hero-intro' || context.slide.rendererId === 'hero-intro';
  const editorial = isIntro && (context.mode !== 'reading' || host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches);
  const cia = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasCiaPresentation(context);
  const aaa = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasAaaPresentation(context);
  const nr = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasNonRepudiationPresentation(context);
  const privacy = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasPrivacyPresentation(context);
  const risk = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasRiskFoundationsPresentation(context);
  const assessment = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasAssessmentPresentation(context);
  const response = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasRiskResponsePresentation(context);
  const governance = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasGovernancePresentation(context);
  const frameworks = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasFrameworksPresentation(context);
  const categories = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasControlCategoriesPresentation(context);
  const functions = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasControlFunctionsPresentation(context);
  const conduct = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasProfessionalConductPresentation(context);
  const grcFoundations = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasGrcFoundationsPresentation(context);
  const grcTools = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasGrcToolsRiskRegisterPresentation(context);
  const bcBcp = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasBusinessContinuityBcpPresentation(context);
  const drDrp = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasDisasterRecoveryDrpPresentation(context);
  const d2SecurityAwareness = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasSecurityAwarenessPresentation(context);
  host.classList.toggle('learning-security-awareness-slide', Boolean(d2SecurityAwareness));
  const d2SocialPasswords = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasSocialPasswordsPresentation(context);
  host.classList.toggle('learning-social-passwords-slide', Boolean(d2SocialPasswords));
  const d2SecurityMetrics = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasSecurityMetricsPresentation(context);
  host.classList.toggle('learning-security-metrics-slide', Boolean(d2SecurityMetrics));
  const d2SecurityReporting = context.mode !== 'reading' && !host.ownerDocument.defaultView?.matchMedia?.('(max-width: 719px)').matches && hasSecurityReportingPresentation(context);
  host.classList.toggle('learning-security-reporting-slide', Boolean(d2SecurityReporting));
  host.classList.toggle('learning-dr-drp-slide', Boolean(drDrp));
  host.classList.toggle('learning-bc-bcp-slide', Boolean(bcBcp));
  host.classList.toggle('learning-grc-tools-slide', Boolean(grcTools));
  host.classList.toggle('learning-grc-foundations-slide', Boolean(grcFoundations));
  host.classList.toggle('learning-conduct-slide', Boolean(conduct));
  host.classList.toggle('learning-functions-slide', Boolean(functions));
  host.classList.toggle('learning-categories-slide', Boolean(categories));
  host.classList.toggle('learning-frameworks-slide', Boolean(frameworks));
  host.classList.toggle('learning-governance-slide', Boolean(governance));
  host.classList.toggle('learning-response-slide', Boolean(response));
  host.classList.toggle('learning-assessment-slide', Boolean(assessment));
  host.classList.toggle('learning-risk-slide', Boolean(risk));
  host.classList.toggle('learning-privacy-slide', Boolean(privacy));
  host.classList.toggle('learning-nr-slide', Boolean(nr));
  host.classList.toggle('learning-aaa-slide', Boolean(aaa));
  if (cia) host.classList.add('learning-cia-slide'); else if (host.classList.contains('learning-cia-slide')) host.classList.remove('learning-cia-slide');
  host.classList.toggle('learning-editorial-slide', Boolean(editorial));
  if (d2SecurityAwareness || editorial || cia || aaa || nr || privacy || risk || assessment || response || governance || frameworks || categories || functions || conduct || grcFoundations || grcTools || bcBcp || drDrp) heading.classList.add('learning-sr-only');
  if (d2SocialPasswords) heading.classList.add('learning-sr-only');
  if (d2SecurityMetrics) heading.classList.add('learning-sr-only');
  if (d2SecurityReporting) heading.classList.add('learning-sr-only');
  const body = element(host.ownerDocument, 'div', 'learning-slide-body');
  body.setAttribute('data-layout', context.slide.layoutId || 'default');
  host.append(body);
  const args = { ...context, signal: abort.signal };
  const getSemanticSlide = () => ({ ...context.slide, blocks: (context.slide.blocks && context.slide.blocks.length) ? context.slide.blocks : semanticBlocks(context.slide) });
  const fallback = () => { if (!abort.signal.aborted) { body.replaceChildren(); blocks(body, { ...args, slide: getSemanticSlide(), mode: 'reading' }); } };
  const custom = registry.get(context.slide.rendererId);

  if (iamProvisioning) {
    const handle=renderIamRolesProvisioningPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (d2SecurityReporting) {
    const handle=renderSecurityReportingPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (d2SecurityMetrics) {
    const handle=renderSecurityMetricsPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (d2SocialPasswords) {
    const handle=renderSocialPasswordsPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (d2SecurityAwareness) {
    const handle=renderSecurityAwarenessPresentation(body,args); cleanup=()=>handle?.destroy?.();
  } else if (editorial) {
    const handle = renderEditorialIntro(body, args); cleanup = () => handle?.destroy?.();
  } else if (cia) {
    const handle = renderCiaPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (aaa) {
    const handle = renderAaaPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (nr) {
    const handle = renderNonRepudiationPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (privacy) {
    const handle = renderPrivacyPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (risk) {
    const handle = renderRiskFoundationsPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (assessment) {
    const handle = renderAssessmentPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (response) {
    const handle = renderRiskResponsePresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (conduct) {
    const handle = renderProfessionalConductPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (functions) {
    const handle = renderControlFunctionsPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (categories) {
    const handle = renderControlCategoriesPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (frameworks) {
    const handle = renderFrameworksPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (governance) {
    const handle = renderGovernancePresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (grcFoundations) {
    const handle = renderGrcFoundationsPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (grcTools) {
    const handle = renderGrcToolsRiskRegisterPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (bcBcp) {
    const handle = renderBusinessContinuityBcpPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (drDrp) {
    const handle = renderDisasterRecoveryDrpPresentation(body, args); cleanup = () => handle?.destroy?.();
  } else if (context.mode !== 'reading') {
    if (context.slide.rendererId === 'pillars') {
      const handle = renderPillars(body, args); cleanup = () => handle?.destroy?.();
    } else if (context.slide.rendererId === 'incident-flow') {
      const handle = renderIncidentFlow(body, args); cleanup = () => handle?.destroy?.();
    } else if (context.slide.rendererId === 'scenario-decision') {
      const handle = renderScenarioDecision(body, args); cleanup = () => handle?.destroy?.();
    } else if (custom) {
      ready = Promise.resolve().then(() => custom.load()).then(module => {
        if (abort.signal.aborted) return; const handle = module.render(body, args); cleanup = () => handle?.destroy?.();
      }).catch(fallback);
    } else blocks(body, args);
  } else {
    blocks(body, { ...args, slide: getSemanticSlide(), mode: 'reading' });
  }
  return { ready, destroy() { abort.abort(); cleanup(); } };
}
