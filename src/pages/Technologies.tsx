import RailCheckpoint from "@/components/rail/RailCheckpoint";
import RailPath from "@/components/rail/RailPath";
import { stackLayers } from "@/data/technologies";
import { LEFT_RAIL_X, railActive, type PathBuilder } from "@/lib/rail";

// bara vine deja pe stânga (de la Experiență) și rămâne acolo până jos
const stackPath: PathBuilder = (_w, h) => [`M${LEFT_RAIL_X} 0 V${h}`];

export default function Technologies() {
  return (
    <section
      id="stack"
      className="relative mx-auto w-[min(72rem,90%)] pt-36 pb-40 text-white"
    >
      <RailPath d={stackPath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#stack"
        label="Stack"
        className="absolute top-20 left-0"
      />

      <header className="max-w-2xl pl-12 md:pl-16">
        <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-tighter">
          Cu ce
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
          >
            construiesc
          </span>
        </h1>

        <p className="mt-6 max-w-md text-pretty text-white/60">
          Un produs complet are straturi: design, frontend, API, deploy. Mai jos
          sunt uneltele pe care le folosesc pentru fiecare — derulează și
          urmărește cum se aprinde stack-ul.
        </p>
      </header>

      <div className="relative mt-24">
        <ol className="flex flex-col gap-28">
          {stackLayers.map((layer, i) => (
            // data-active e pus de railActive când bara ajunge la strat
            <li
              key={layer.title}
              ref={railActive(60)}
              className="group relative grid gap-8 pl-12 md:grid-cols-[15rem_1fr] md:pl-16"
            >
              {/* nodul de pe linie */}
              <span
                aria-hidden
                className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
              />

              <div className="transition-opacity duration-500 not-group-data-active:opacity-40">
                <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {layer.title}
                </h2>
                <p className="mt-2 text-sm text-pretty text-white/60">
                  {layer.description}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {layer.tech.map(({ name, role, icon: Icon, color }, j) => (
                  <li
                    key={name}
                    className="relative overflow-hidden rounded-xl bg-[#2F293A] p-4 ring-1 ring-white/10 transition-all duration-300 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)] motion-safe:hover:-translate-y-1"
                  >
                    {/* lumină în culoarea brandului, aprinsă odată cu stratul */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-8 -right-8 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-data-active:opacity-25"
                      style={{ background: color, transitionDelay: `${j * 70}ms` }}
                    />

                    <Icon
                      aria-hidden
                      className="relative size-7 opacity-40 grayscale transition-all duration-500 group-data-active:opacity-100 group-data-active:grayscale-0"
                      style={{ color, transitionDelay: `${j * 70}ms` }}
                    />
                    <h3 className="relative mt-4 font-medium">{name}</h3>
                    <p className="relative mt-1 text-sm text-white/50">
                      {role}
                    </p>
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
