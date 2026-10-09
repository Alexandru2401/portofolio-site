import { BriefcaseBusiness, CalendarDays, Code, MapPin } from "lucide-react";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { jobs } from "@/data/experience";
import { LEFT_RAIL_X, railActive, type PathBuilder } from "@/lib/rail";

// centrul checkpoint-ului (top-20) și locul unde bara cotește, sub el
const CHECKPOINT_Y = 40;
const TURN_Y = CHECKPOINT_Y + 40;

// vine din mijloc (de la Despre mine), trece prin checkpoint, abia apoi cotește
// spre stânga și coboară pe stânga până la Stack, care o preia de acolo
const experiencePath: PathBuilder = (w, h) => [
  `M${w / 2} 0 V${TURN_Y} H${LEFT_RAIL_X} V${h}`,
];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-[calc(100%-1rem)] md:w-[min(72rem,90%)] pt-36 pb-24 text-white"
    >
      <RailPath d={experiencePath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#experience"
        label="Experiență"
        className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <header className="max-w-5xl pl-8 md:pl-16">
        <h2 className="text-[clamp(1.75rem,5vw,4.5rem)] text-center font-semibold leading-[0.9] tracking-tighter">
          Experiență în câmpul muncii
        </h2>

        <p className="mt-6 text-pretty text-center text-white/80">
          Echipele și produsele la care am contribuit, de la cel mai recent în
          jos.
        </p>
      </header>

      <ol className="mt-16 flex flex-col gap-20">
        {jobs.map((job) => (
          // data-active e pus de railActive când bara ajunge la job
          <li
            key={`${job.company}-${job.period}`}
            ref={railActive(60)}
            className="group relative grid gap-6 pl-8 md:grid-cols-[15rem_1fr] md:gap-8 md:pl-16"
          >
            {/* nodul de pe linie */}
            <span
              aria-hidden
              className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
            />

            <div>
              <p className="flex items-center gap-2 text-xs transition-opacity duration-500 not-group-data-active:opacity-40 font-medium tracking-[0.25em] text-yellow-400 uppercase tabular-nums">
                <CalendarDays aria-hidden size={14} className="shrink-0" />
                {job.period}
              </p>
              <div className="mt-3 flex items-center gap-3">
                {/* pătrat alb ca o iconiță de aplicație — logo-urile au text
                    închis la culoare; glow când bara ajunge la job */}
                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-white/10 transition-all duration-500 group-data-active:shadow-[0_0_24px_-4px_rgb(250_204_21/0.5)]">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt=""
                      className="size-full object-contain"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="text-sm font-semibold text-[#1A1622]"
                    >
                      {initials(job.company)}
                    </span>
                  )}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight transition-opacity duration-500 not-group-data-active:opacity-40">
                  {job.company}
                </h3>
              </div>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/50">
                <MapPin aria-hidden size={14} className="shrink-0" />
                {job.location}
              </p>
            </div>

            {/* se aprinde ca un card de proiect când bara ajunge la job (fără shake) */}
            <article className="rounded-xl bg-[#2F293A] p-6 ring-1 ring-white/10 saturate-50 transition-all duration-500 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)] group-data-active:scale-[1.02] group-data-active:shadow-[0_0_70px_-10px_rgb(250_204_21/0.55)] group-data-active:ring-yellow-400/80 group-data-active:saturate-100">
              <h4 className="flex items-center gap-2.5 text-lg font-medium">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/5 text-yellow-400 ring-1 ring-white/10">
                  <BriefcaseBusiness aria-hidden size={16} />
                </span>
                {job.role}
              </h4>
              <p className="mt-2 text-sm text-pretty text-white/60">
                {job.description}
              </p>

              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ul
                className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4"
                aria-label="Tehnologii"
              >
                <li aria-hidden className="text-white/40">
                  <Code size={16} />
                </li>
                {job.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
