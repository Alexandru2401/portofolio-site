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
      className="relative mx-auto w-[calc(100%-1rem)] md:w-[min(72rem,90%)] pt-36 pb-10 md:pb-40 text-white"
    >
      <RailPath d={stackPath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#stack"
        label="Stack"
        className="absolute top-20 -left-10"
      />

      <header className="max-w-5xl pl-8 md:pl-16">
        <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] text-center  font-semibold leading-[0.9] tracking-tighter">
          Tehnologiile folosite
        </h1>

        <p className="mt-6 text-center text-pretty text-white/60">
          Un produs complet are straturi: design, frontend, API, deploy. Mai jos
          sunt uneltele pe care le folosesc pentru fiecare — derulează și
          urmărește cum se aprinde stack-ul.
        </p>
      </header>

      <div className="relative mt-24">
        <ol className="flex flex-col gap-8">
          {stackLayers.map((layer, i) => (
            // data-active e pus de railActive când bara ajunge la strat
            <li
              key={layer.title}
              ref={railActive(60)}
              className="group relative grid gap-8 pl-8 md:grid-cols-[15rem_1fr] md:pl-16"
            >
              {/* nodul de pe linie */}
              <span
                aria-hidden
                className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
              />

              <div className="transition-opacity duration-500 not-group-data-active:opacity-70">

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>   {layer.title}
                </h2>
                <p className="mt-2 text-sm text-pretty text-white/60">
                  {layer.description}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {layer.tech.map(({ name, role, icon: Icon, color }, j) => (
                  // galben doar în stratul curent; cele trecute revin la normal
                  <li
                    key={name}
                    className="relative overflow-hidden rounded-md bg-[#2F293A] p-3 ring-1 ring-white/10 transition-all duration-300 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)] motion-safe:hover:-translate-y-1 group-current:ring-yellow-400/70 group-current:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)]"
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
                        className="size-7 shrink-0 opacity-70 grayscale transition-all duration-500 group-data-active:opacity-100 group-data-active:grayscale-0"
                        style={{ color, transitionDelay: `${j * 70}ms` }}
                      />
                      <h3 className="font-medium">{name}</h3>
                    </div>
                    <p className="relative mt-2 text-sm text-white/50">{role}</p>
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
