import { useCallback, useEffect, useRef } from "react";

/**
 * Pune `data-active` pe fiecare element atins de vârful unui `.rail-fill`.
 * Vârful e calculat cu aceeași formulă ca `animation-range: cover 0% cover 100%`,
 * iar atributul e scris direct în DOM, deci scroll-ul nu provoacă re-render.
 *
 * `railRef` merge pe părintele lui `.rail-fill` — fill-ul e scalat de propria
 * animație, așa că dreptunghiul lui nu e cel real.
 */
export function useRailHits(hitOffset: number) {
  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const setItemRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      itemRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const { top, height } = rail.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh - top) / (vh + height), 0), 1);
      const tip = top + progress * height;

      for (const item of itemRefs.current) {
        if (!item) continue;
        const hit = tip >= item.getBoundingClientRect().top + hitOffset;
        item.toggleAttribute("data-active", hit);
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [hitOffset]);

  return { railRef, setItemRef };
}
