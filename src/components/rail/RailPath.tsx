import { useEffect, useRef } from "react";
import { subscribeRail, type PathBuilder } from "@/lib/rail";
import { cn } from "@/lib/utils";

/**
 * Un segment din bara galbenă. Se umple pe măsură ce vârful barei (mijlocul
 * viewport-ului) trece de la marginea de sus la cea de jos a cutiei.
 * Mai multe path-uri se umplu în paralel — așa se face bifurcarea.
 *
 * `d` trebuie să fie o funcție stabilă (definită în afara componentei).
 */
export default function RailPath({
  d,
  className,
}: {
  d: PathBuilder;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const count = d(0, 0).length;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const tracks = [...svg.querySelectorAll<SVGPathElement>("[data-track]")];
    const fills = [...svg.querySelectorAll<SVGPathElement>("[data-fill]")];

    const draw = () => {
      const { width, height } = svg.getBoundingClientRect();
      d(width, height).forEach((path, i) => {
        tracks[i]?.setAttribute("d", path);
        fills[i]?.setAttribute("d", path);
      });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(svg);

    const unsubscribe = subscribeRail((tip) => {
      const { top, height } = svg.getBoundingClientRect();
      const progress =
        height > 0 ? Math.min(Math.max((tip - top) / height, 0), 1) : 0;
      for (const fill of fills) {
        fill.style.strokeDashoffset = String(1 - progress);
        fill.style.opacity = progress > 0 ? "1" : "0";
      }
    });

    return () => {
      ro.disconnect();
      unsubscribe();
    };
  }, [d]);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className={cn("pointer-events-none absolute overflow-visible", className)}
    >
      {Array.from({ length: count }, (_, i) => (
        <path key={i} data-track className="fill-none stroke-white/10" />
      ))}
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          data-fill
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset={1}
          strokeWidth={2}
          strokeLinecap="round"
          className="fill-none stroke-yellow-400 opacity-0 drop-shadow-[0_0_6px_rgb(250_204_21/0.7)]"
        />
      ))}
    </svg>
  );
}
