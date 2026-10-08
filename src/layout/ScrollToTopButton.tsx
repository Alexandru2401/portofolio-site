import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

// apare după ce userul a parcurs un sfert din pagină
const SHOW_AFTER = 0.25;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollable > 0 && window.scrollY / scrollable > SHOW_AFTER);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Înapoi sus"
      title="Înapoi sus"
      // ascuns: nu poate fi focusat cu Tab și nu prinde click-uri
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={twMerge(
        "group fixed right-6 bottom-6 z-40 grid size-11 cursor-pointer place-items-center rounded-full bg-slate-200 text-[#1A1622] shadow-lg shadow-black/40 transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_30px_-6px_rgb(250_204_21/0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp
        aria-hidden
        size={20}
        className="transition-transform motion-safe:group-hover:-translate-y-0.5"
      />
    </button>
  );
}
