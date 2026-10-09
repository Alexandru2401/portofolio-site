import RailCheckpoint from "@/components/rail/RailCheckpoint";
import RailPath from "@/components/rail/RailPath";
import { useTranslation } from "react-i18next";
import { stackLayers } from "@/data/technologies";
import { useMessages } from "@/i18n";
import {
  isMobileRail,
  LEFT_RAIL_X,
  railActive,
  rightRailX,
  type PathBuilder,
} from "@/lib/rail";

// centrul checkpoint-ului pe mobil (-top-5 + jumătate din min-h-11)
const MOBILE_CHECKPOINT_Y = 2;

// bara vine deja pe stânga (de la Experiență) și rămâne acolo până jos;
// pe mobil trece prin checkpoint-ul din mijloc și coboară pe dreapta
const stackPath: PathBuilder = (w, h) =>
  isMobileRail()
    ? [
        `M${LEFT_RAIL_X} 0 V${MOBILE_CHECKPOINT_Y} H${rightRailX(w)} V${h}`,
      ]
    : [`M${LEFT_RAIL_X} 0 V${h}`];

export default function Technologies() {
  const { t } = useTranslation();
  const { stack } = useMessages();
  return (
    <section
      id="stack"
      className="relative mx-auto w-[calc(100%-1rem)] md:w-[min(72rem,90%)] pt-22 md:pt-36 pb-10 md:pb-40 text-white"
    >
      <RailPath d={stackPath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#stack"
        label={t("nav.stack")}
        className="absolute -top-5 left-1/2 -translate-x-1/2 md:top-20 md:-left-10 md:translate-x-0"
      />

      <header className="max-w-5xl px-8 md:pr-0 md:pl-16">
        <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] text-center  font-semibold leading-[0.9] tracking-tighter">
          {t("stack.title")}
        </h1>

        <p className="mt-4 text-center text-sm text-pretty text-white/60 md:mt-6 md:text-base">
          {t("stack.subtitle")}
        </p>
      </header>

      <div className="relative mt-12 md:mt-24">
        <ol className="flex flex-col gap-12 md:gap-8">
          {stackLayers.map((layer, i) => (
            // data-active e pus de railActive când bara ajunge la strat
            <li
              key={layer.id}
              ref={railActive(60)}
              className="group relative grid gap-4 pr-8 md:grid-cols-[15rem_1fr] md:gap-8 md:pr-0 md:pl-16"
            >
              {/* nodul de pe linie (pe dreapta pe mobil) */}
              <span
                aria-hidden
                className="absolute top-1 right-0 size-[15px] md:right-auto md:left-0 rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
              />

              <div className="transition-opacity duration-500 not-group-data-active:opacity-70">

                <h2 className="text-xl font-semibold tracking-tight md:mt-2 md:text-2xl">
                  <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>   {stack.layers[layer.id].title}
                </h2>
                <p className="mt-2 text-sm text-pretty text-white/60">
                  {stack.layers[layer.id].description}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                {layer.tech.map(({ name, icon: Icon, color }, j) => (
                  // galben doar în stratul curent; cele trecute revin la normal
                  <li
                    key={name}
                    className="relative min-w-0 overflow-hidden rounded-md bg-[#2F293A] p-3 ring-1 ring-white/10 transition-all duration-300 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)] motion-safe:hover:-translate-y-1 group-current:ring-yellow-400/70 group-current:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)]"
                  >
                    {/* lumină în culoarea brandului, aprinsă odată cu stratul */}
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
