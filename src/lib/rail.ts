// Bara galbenă care trece prin toată pagina e făcută din segmente separate
// (câte unul pe secțiune). Toate citesc același „vârf” — mijlocul viewport-ului —
// așa că se umplu ca o singură linie continuă.

type Listener = (tip: number) => void;

/** Primește dimensiunea cutiei unui RailPath și întoarce unul sau mai multe path-uri SVG. */
export type PathBuilder = (w: number, h: number) => string[];

export const verticalPath: PathBuilder = (w, h) => [`M${w / 2} 0 V${h}`];

const TIP_RATIO = 0.5;

/** x-ul barei când merge pe stânga (Stack → Contact): centrul nodurilor de 15px. */
export const LEFT_RAIL_X = 7.5;

const listeners = new Set<Listener>();
let raf = 0;
let ro: ResizeObserver | null = null;

const run = () => {
  raf = 0;
  const tip = window.innerHeight * TIP_RATIO;
  for (const listener of listeners) listener(tip);
};

const schedule = () => {
  if (!raf) raf = requestAnimationFrame(run);
};

/** Un singur listener de scroll pentru toată pagina; primești vârful în coordonate de viewport. */
export function subscribeRail(listener: Listener) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    ro = new ResizeObserver(schedule);
    ro.observe(document.body);
  }
  listeners.add(listener);
  schedule();

  return () => {
    listeners.delete(listener);
    if (listeners.size > 0) return;
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    ro?.disconnect();
    ro = null;
    cancelAnimationFrame(raf);
    raf = 0;
  };
}

/**
 * Ref callback care pune `data-active` pe element cât timp vârful barei e sub el.
 * `offset` = câți px în element trebuie să intre bara; implicit, mijlocul lui.
 * Scrie direct în DOM, deci scroll-ul nu provoacă re-render.
 */
export const railActive = (offset?: number) => (el: HTMLElement | null) => {
  if (!el) return;
  return subscribeRail((tip) => {
    const r = el.getBoundingClientRect();
    const at = offset === undefined ? r.top + r.height / 2 : r.top + offset;
    el.toggleAttribute("data-active", tip >= at);
  });
};
