import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

// câte chenare goale arătăm până vin pozele reale
const PLACEHOLDER_COUNT = 5;

// distanța minimă (px) a unui swipe ca să schimbe slide-ul
const SWIPE_THRESHOLD = 40;

// săgețile stau în interiorul pozei, negre cu border alb ca butoanele din pagină
const arrowClass =
  "absolute top-1/2 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/80 bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black";

/** Caruselul cu screenshot-uri; fără imagini arată placeholdere. */
export default function ProjectCarousel({
  images = [],
  name,
  className,
}: {
  images?: string[];
  name: string;
  className?: string;
}) {
  const { t } = useTranslation();
  const slides: (string | null)[] = images.length
    ? images
    : Array.from({ length: PLACEHOLDER_COUNT }, () => null);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // loop: după ultimul slide revine la primul și invers
  const goTo = (i: number) =>
    setCurrent((i + slides.length) % slides.length);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    else if (e.key === "ArrowRight") goTo(current + 1);
    else return;
    e.preventDefault();
  };

  const onTouchEnd = (x: number) => {
    if (touchStartX.current === null) return;
    const dx = x - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) >= SWIPE_THRESHOLD) goTo(current + (dx < 0 ? 1 : -1));
  };

  const slideLabel = (i: number) =>
    t("projects.slide", { n: i + 1, total: slides.length });

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label={t("projects.gallery", { name })}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      className={cn(
        "relative overflow-hidden rounded-xl bg-[#1A1622] ring-1 ring-white/10 focus-visible:outline-2 focus-visible:outline-yellow-400",
        className,
      )}
    >
      {/* banda cu toate slide-urile, mutată cu translate după slide-ul curent */}
      <div
        className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div
            key={src ?? i}
            role="group"
            aria-roledescription="slide"
            aria-label={slideLabel(i)}
            aria-hidden={i !== current}
            className="aspect-video w-full shrink-0"
          >
            {src ? (
              <img
                src={src}
                alt={slideLabel(i)}
                loading="lazy"
                // contain: screenshot-urile de pe telefon sunt pe verticală și nu le tăiem
                className="size-full object-contain"
              />
            ) : (
              <div className="grid size-full place-items-center text-white/30">
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon aria-hidden size={32} />
                  <span className="text-xs tracking-[0.25em] uppercase tabular-nums">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label={t("projects.previousImage")}
        className={cn("left-3", arrowClass)}
      >
        <ArrowLeft aria-hidden size={16} />
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label={t("projects.nextImage")}
        className={cn("right-3", arrowClass)}
      >
        <ArrowRight aria-hidden size={16} />
      </button>

      {/* punctele de jos — cel curent e mai lung și galben */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={slideLabel(i)}
            aria-current={i === current}
            className={cn(
              "h-1.5 cursor-pointer rounded-full transition-all duration-300",
              i === current
                ? "w-6 bg-yellow-400"
                : "w-1.5 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
