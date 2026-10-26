/** Pure sizing policy: no application-shell max-width enters this calculation. */
export function calculateStageLayout({ width, height, toolbarHeight = 56, noticeHeight = 0, fullscreen = false }) {
  const gutter = fullscreen ? 8 : 16, gap = fullscreen ? 8 : 12;
  const availableWidth = Math.max(0, width - gutter * 2);
  const availableHeight = Math.max(0, height - toolbarHeight - gutter * 2 - gap - noticeHeight - (noticeHeight > 0 ? gap : 0));
  const fitted = Math.min(availableWidth, availableHeight * 16 / 9);
  return { width: width < 720 ? availableWidth : fitted, height: fitted * 9 / 16,
    mode: width < 720 ? 'reading' : 'presentation' };
}

/** One measurement owner. Renderer + fonts + two stable frames precede overflow decisions. */
export function createPresentationStage(workspace, stage, toolbar, { notice, onModeChange = () => {}, onGeometry = () => {} } = {}) {
  const doc = workspace.ownerDocument, view = doc.defaultView, abort = new AbortController();
  let destroyed = false, generation = 0, frame, key, ready = Promise.resolve(), requestedReading = false, observedBody;
  let mode = 'presentation', reason = '', rejectedGeometry = '';
  const raf = fn => { if (view?.requestAnimationFrame) frame = view.requestAnimationFrame(fn); };
  function resolveMode(next, why) {
    if (mode === next && reason === why) return;
    const changed = mode !== next; mode = next; reason = why;
    workspace.setAttribute('data-view', mode);
    if (mode === 'reading') {
      stage.style.height = 'auto';
      stage.style.aspectRatio = 'auto';
    }
    if (changed) onModeChange(mode, reason);
  }
  function viewport() {
    // Width comes from the full workspace; height is the visual viewport, never content height.
    const width = view?.innerWidth || workspace.getBoundingClientRect().width;
    const height = view?.visualViewport?.height || view?.innerHeight;
    const full = !!doc.fullscreenElement && (doc.fullscreenElement === workspace || doc.fullscreenElement === workspace.closest?.('.learning-viewer'));
    const toolbarHeight = toolbar.getBoundingClientRect().height || 56;
    const noticeHeight = notice && !notice.hidden ? notice.getBoundingClientRect().height : 0;
    return width > 0 && height > 0 ? { width, height, toolbarHeight, noticeHeight, fullscreen: full } : null;
  }
  function refresh() {
    if (destroyed || !view?.requestAnimationFrame) return;
    const ticket = ++generation;
    if (frame) view.cancelAnimationFrame?.(frame);
    Promise.resolve(ready).then(() => doc.fonts?.ready).then(() => {
      if (destroyed || ticket !== generation) return;
      const box = viewport(); if (!box) return;
      // A fallback's own notice must not invalidate its rejection and cause a fit/reading loop.
      const layout = calculateStageLayout(box), size = `${Math.round(box.width)}:${Math.round(box.height)}:${box.toolbarHeight}:${box.fullscreen}:${key}`;
      stage.style.width = `${layout.width}px`;
      stage.style.aspectRatio = '16 / 9';
      stage.style.setProperty?.('--viewer-body-size', `${Math.min(18, Math.max(14, layout.width / 78))}px`);
      stage.style.setProperty?.('--viewer-title-size', `${Math.min(34, Math.max(22, layout.width / 42))}px`);
      onGeometry(layout);
      if (requestedReading || layout.mode === 'reading' || rejectedGeometry === size) {
        resolveMode('reading', requestedReading ? 'requested' : layout.mode === 'reading' ? 'responsive' : 'overflow'); return;
      }
      stage.style.height = `${layout.height}px`; resolveMode('presentation', '');
      const sample = () => ({ width: stage.clientWidth, height: stage.clientHeight, scrollWidth: stage.scrollWidth, scrollHeight: stage.scrollHeight });
      raf(() => {
        if (destroyed || ticket !== generation) return;
        const first = sample();
        raf(() => {
          if (destroyed || ticket !== generation || doc.fonts?.status === 'loading') return;
          const second = sample();
          // Ignore disconnected/zero/constrained boxes and changing layouts rather than declaring false overflow.
          const valid = first.width > 0 && first.height > 0 && Math.abs(second.width - layout.width) < 4 && Math.abs(second.height - layout.height) < 4;
          const stable = Object.keys(first).every(k => Math.abs(first[k] - second[k]) < 1);
          if (!valid || !stable) return;
          const overflowThreshold = Math.max(16, Math.round(second.height * 0.025));
          if (second.scrollHeight > second.height + overflowThreshold || second.scrollWidth > second.width + overflowThreshold) {
            rejectedGeometry = size; resolveMode('reading', 'overflow');
          }
        });
      });
    }).catch(() => { /* A renderer owns its failure fallback; a failed measurement never hides content. */ });
  }
  const Observer = view?.ResizeObserver;
  const observer = Observer ? new Observer(refresh) : null;
  observer?.observe(workspace); observer?.observe(toolbar); observer?.observe(stage);
  if (notice) observer?.observe(notice);
  view?.addEventListener?.('resize', refresh, { signal: abort.signal });
  view?.visualViewport?.addEventListener?.('resize', refresh, { signal: abort.signal });
  doc.fonts?.addEventListener?.('loadingdone', refresh, { signal: abort.signal });
  return {
    get mode() { return mode; }, get reason() { return reason; }, refresh,
    setContent({ key: nextKey, ready: nextReady = Promise.resolve() }) {
      if (key !== nextKey) { key = nextKey; rejectedGeometry = ''; }
      if (observedBody) observer?.unobserve?.(observedBody);
      observedBody = stage.querySelector('.learning-slide-body');
      if (observedBody) observer?.observe(observedBody);
      ready = nextReady; refresh();
    },
    setReading(value) { requestedReading = value; if (!value) rejectedGeometry = ''; refresh();
      // No layout engine in Node/unsupported environments; explicit reading remains operable.
      if (!view?.requestAnimationFrame) resolveMode(value ? 'reading' : 'presentation', value ? 'requested' : '');
    },
    destroy() { destroyed = true; generation++; abort.abort(); observer?.disconnect(); if (frame) view?.cancelAnimationFrame?.(frame); }
  };
}
