import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// câte chenare goale arătăm până vin pozele reale
const PLACEHOLDER_COUNT = 5;

// săgețile stau în interiorul pozei, negre cu border alb ca butoanele din pagină
const arrowClass =
  "border-white/80 bg-black/70 text-white backdrop-blur-sm hover:bg-white hover:text-black disabled:opacity-0";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // punctul activ urmează slide-ul la care a ajuns Embla (click, swipe, tastatură)
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const slideLabel = (i: number) =>
    t("projects.slide", { n: i + 1, total: slides.length });

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      aria-label={t("projects.gallery", { name })}
      className={cn(
        "overflow-hidden rounded-xl bg-[#1A1622] ring-1 ring-white/10",
        className,
      )}
    >
      <CarouselContent className="ml-0">
        {slides.map((src, i) => (
          <CarouselItem
            key={src ?? i}
            aria-label={slideLabel(i)}
            className="aspect-video pl-0"
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
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        aria-label={t("projects.previousImage")}
        className={cn("left-3", arrowClass)}
      />
      <CarouselNext
        aria-label={t("projects.nextImage")}
        className={cn("right-3", arrowClass)}
      />

      {/* punctele de jos — cel curent e mai lung și galben */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={slideLabel(i)}
            aria-current={i === current}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current
                ? "w-6 bg-yellow-400"
                : "w-1.5 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
