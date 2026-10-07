import { useEffect, useRef } from "react";
import ProjectCard from "./common/ProjectCard";

const HIT_OFFSET = 15;

export default function ProjectsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

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

      for (const card of cardRefs.current) {
        if (!card) continue;
        const hit = tip >= card.getBoundingClientRect().top + HIT_OFFSET;
        card.toggleAttribute("data-active", hit);
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
  }, []);

  return (
    <section
      id="projects"
      className="relative mx-auto pt-20 flex max-w-10/12 flex-col gap-22"
    >
      <div
        ref={railRef}
        className="absolute left-1/2 -top-10 h-full w-px -translate-x-1/2 bg-white/10"
      >
        <div className="rail-fill h-full w-full bg-yellow-400" />
      </div>

      {[...new Array(3)].map((_, i) => (
        <ProjectCard
          key={i}
          index={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
        />
      ))}
    </section>
  );
}
