import RailCheckpoint from "@/components/rail/RailCheckpoint";
import RailPath from "@/components/rail/RailPath";
import { useRef, useState, type KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { stackLayers } from "@/data/technologies";
import { useMessages } from "@/i18n";
import {
  isMobileRail,
  LEFT_RAIL_X,
  railActive,
  rightRailX,
  roundCorners,
  type PathBuilder,
} from "@/lib/rail";

// centrul checkpoint-ului pe mobil (-top-5 + jumătate din min-h-11)
const MOBILE_CHECKPOINT_Y = 2;

// bara vine deja pe stânga (de la Experiență) și rămâne acolo până jos;
// pe mobil trece prin checkpoint-ul din mijloc și coboară pe dreapta
const stackPath: PathBuilder = (w, h) =>
  isMobileRail()
    ? [
      roundCorners(
        `M${LEFT_RAIL_X} 0 V${MOBILE_CHECKPOINT_Y} H${rightRailX(w)} V${h}`,
      ),
    ]
    : [`M${LEFT_RAIL_X} 0 V${h}`];

export default function Technologies() {
  const { t } = useTranslation();
  const { stack } = useMessages();
  const [activeId, setActiveId] = useState(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeId) ?? stackLayers[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // săgețile mută selecția între tab-uri, ca la un tablist nativ
  const onTabKeyDown = (e: KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const i = stackLayers.indexOf(active);
    const next = (i + step + stackLayers.length) % stackLayers.length;
    setActiveId(stackLayers[next].id);
    tabRefs.current[next]?.focus();
  };
  return (
    <section
      id="stack"
      className="section-container relative pt-16 pb-16 text-white md:pt-24 md:pb-24"
    >
      <RailPath d={stackPath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#stack"
        label={t("nav.stack")}
        className="absolute -top-5 left-1/2 -translate-x-1/2 md:top-2 md:-left-10 md:translate-x-0"
      />

      <header className="px-8 md:px-16">
        <h2 className="section-title">
          {t("stack.title")}
        </h2>
      </header>

      {/* data-active e pus de railActive când bara ajunge la secțiune */}
      <div
        ref={railActive(60)}
        className="group relative mt-12 grid gap-6 pr-8 md:mt-16 md:grid-cols-[15rem_1fr] md:gap-8 md:pr-0 md:pl-16"
      >
        {/* nodul de pe linie (pe dreapta pe mobil) */}
        <span
          aria-hidden
          className="absolute top-1 right-0 size-3.75 md:right-auto md:left-0 rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
        />

        {/* tab-urile: rând orizontal pe mobil, coloană în stânga pe desktop */}
        <div
          role="tablist"
          aria-orientation="vertical"
          onKeyDown={onTabKeyDown}
          // padding-ul (compensat cu margini negative) lasă loc pentru contur și glow,
          // altfel overflow-ul le taie; scrollbar-ul e ascuns, swipe-ul merge oricum
          className="-m-2 flex gap-2 overflow-x-auto p-2 scrollbar-none [&::-webkit-scrollbar]:hidden md:m-0 md:flex-col md:overflow-visible md:p-0"
        >
          {stackLayers.map((layer, i) => {
            const selected = layer.id === active.id;
            return (
              <button
                key={layer.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`stack-tab-${layer.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="stack-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(layer.id)}
                className={`flex shrink-0 cursor-pointer items-baseline gap-3 rounded-md px-4 py-3 text-left ring-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-yellow-400 ${selected
                    ? "bg-[#2F293A] ring-yellow-400/70 shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)]"
                    : "bg-white/5 ring-white/20 text-white/85 hover:bg-white/10 hover:text-white hover:ring-white/40"
                  }`}
              >
                <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold tracking-tight md:text-lg">
                  {stack.layers[layer.id].title}
                </span>
              </button>
            );
          })}
        </div>

        {/* key pe strat ca animația de intrare să ruleze la fiecare schimbare */}
        <div
          key={active.id}
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${active.id}`}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          <p className="text-sm text-pretty text-white/60">
            {stack.layers[active.id].description}
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {active.tech.map(({ name, icon: Icon, color }, j) => (
              <li
                key={name}
                className="relative min-w-0 overflow-hidden rounded-md bg-[#2F293A] p-3 ring-1 ring-white/10 transition-all duration-300 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)] motion-safe:hover:-translate-y-1"
              >
                {/* lumină în culoarea brandului, aprinsă când bara ajunge aici */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-data-active:opacity-25"
                  style={{ background: color, transitionDelay: `${j * 70}ms` }}
                />

                <div className="relative flex items-center gap-2.5">
                  <Icon
                    aria-hidden
                    className="size-6 shrink-0 md:size-7 opacity-70 grayscale transition-all duration-500 group-data-active:opacity-100 group-data-active:grayscale-0"
                    style={{ color, transitionDelay: `${j * 70}ms` }}
                  />
                  <h3 className="truncate text-sm font-medium md:text-base">{name}</h3>
                </div>
                <p className="relative mt-2 text-xs text-white/50 md:text-sm">{stack.roles[name]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
