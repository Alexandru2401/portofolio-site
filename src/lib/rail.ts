// Bara galbenă care trece prin toată pagina e făcută din segmente separate
// (câte unul pe secțiune). Toate citesc același „vârf” — mijlocul viewport-ului —
// așa că se umplu ca o singură linie continuă.

type Listener = (tip: number) => void;

/** Primește dimensiunea cutiei unui RailPath și întoarce unul sau mai multe path-uri SVG. */
export type PathBuilder = (w: number, h: number) => string[];

export const verticalPath: PathBuilder = (w, h) => [`M${w / 2} 0 V${h}`];

/** Raza colțurilor rotunjite de `roundCorners`. */
const CORNER_RADIUS = 12;

/**
 * Rotunjește colțurile unui path făcut doar din M/H/V (linii drepte).
 * Raza scade singură pe segmentele scurte, ca două curbe să nu se suprapună.
 */
export function roundCorners(d: string, r = CORNER_RADIUS) {
  const tokens = d.match(/[MHV]|-?\d*\.?\d+/g) ?? [];
  const pts: [number, number][] = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < tokens.length; ) {
    const cmd = tokens[i++];
    if (cmd === "M") {
      x = Number(tokens[i++]);
      y = Number(tokens[i++]);
    } else if (cmd === "H") x = Number(tokens[i++]);
    else if (cmd === "V") y = Number(tokens[i++]);
    const last = pts.at(-1);
    if (!last || last[0] !== x || last[1] !== y) pts.push([x, y]);
  }
  if (pts.length < 3) return d;

  const out = [`M${pts[0][0]} ${pts[0][1]}`];
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const [nx, ny] = pts[i + 1];
    const lenIn = Math.hypot(cx - px, cy - py);
    const lenOut = Math.hypot(nx - cx, ny - cy);
    // capetele nu sunt colțuri, deci primul/ultimul segment poate fi folosit întreg
    const rr = Math.min(
      r,
      i === 1 ? lenIn : lenIn / 2,
      i === pts.length - 2 ? lenOut : lenOut / 2,
    );
    const ax = cx - ((cx - px) / lenIn) * rr;
    const ay = cy - ((cy - py) / lenIn) * rr;
    const bx = cx + ((nx - cx) / lenOut) * rr;
    const by = cy + ((ny - cy) / lenOut) * rr;
    out.push(`L${ax} ${ay} Q${cx} ${cy} ${bx} ${by}`);
  }
  const [lx, ly] = pts[pts.length - 1];
  out.push(`L${lx} ${ly}`);
  return out.join(" ");
}

const TIP_RATIO = 0.5;

/** x-ul barei când merge pe stânga (Stack → Contact): centrul nodurilor de 15px. */
export const LEFT_RAIL_X = 7.5;

/** x-ul barei când merge pe dreapta (pe mobil, Stack → Contact). */
export const rightRailX = (w: number) => w - LEFT_RAIL_X;

/** Sub breakpoint-ul `md` din Tailwind (48rem) bara are alt traseu. */
export const isMobileRail = () =>
  window.matchMedia("(width < 48rem)").matches;

const listeners = new Set<Listener>();
let raf = 0;
let ro: ResizeObserver | null = null;

const run = () => {
  raf = 0;
  const vh = window.innerHeight;
  // aproape de capătul paginii vârful coboară spre marginea de jos, ca bara să
  // ajungă la final chiar dacă ultima secțiune e mai scurtă de jumătate de ecran
  const remaining =
    document.documentElement.scrollHeight - (window.scrollY + vh);
  const tip = Math.max(vh * TIP_RATIO, vh - Math.max(remaining, 0));
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
