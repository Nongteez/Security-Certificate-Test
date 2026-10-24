/** Uses actual browser events as the source of truth; contains no preview override. */
export function createFullscreenController(stage, { onChange = () => {}, onError = () => {} } = {}) {
  const doc = stage.ownerDocument, abort = new AbortController(); let active = doc.fullscreenElement === stage, destroyed = false, invoker;
  const change = () => { const next = doc.fullscreenElement === stage; if (next === active) return; active = next;
    if (active) stage.focus(); else if (invoker?.isConnected) invoker.focus(); onChange(active);
  };
  doc.addEventListener('fullscreenchange', change, { signal: abort.signal });
  doc.addEventListener('fullscreenerror', () => { if (!destroyed) onError(Error('Fullscreen request failed')); }, { signal: abort.signal });
  return {
    get active() { return active; },
    async enter() { if (destroyed) return; invoker = doc.activeElement;
      try { if (!stage.requestFullscreen || doc.fullscreenEnabled === false) throw Error('Fullscreen unavailable'); await stage.requestFullscreen(); if (destroyed && doc.fullscreenElement === stage) await doc.exitFullscreen(); }
      catch (error) { if (!destroyed) onError(error); }
    },
    async exit() { if (doc.fullscreenElement === stage) { try { await doc.exitFullscreen(); } catch (error) { if (!destroyed) onError(error); } } },
    destroy() { destroyed = true; abort.abort(); if (doc.fullscreenElement === stage) Promise.resolve(doc.exitFullscreen()).catch(() => {}); }
  };
}
