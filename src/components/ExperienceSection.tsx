import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { jobs } from "@/data/experience";
import { LEFT_RAIL_X, railActive, type PathBuilder } from "@/lib/rail";

// vine din mijloc (de la Despre mine), cotește spre stânga și coboară pe stânga
// până la Stack, care o preia de acolo
const experiencePath: PathBuilder = (w, h) => [
  `M${w / 2} 0 V48 H${LEFT_RAIL_X} V${h}`,
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative mx-auto w-[min(72rem,90%)] pt-36 pb-24 text-white"
    >
      <RailPath d={experiencePath} className="top-0 left-0 size-full" />
      <RailCheckpoint
        href="#experience"
        label="Experiență"
        className="absolute top-20 left-0"
      />

      <header className="max-w-2xl pl-12 md:pl-16">
        <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-tighter">
          Unde am
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
          >
            lucrat
          </span>
        </h2>

        <p className="mt-6 max-w-md text-pretty text-white/60">
          Echipele și produsele la care am contribuit, de la cel mai recent în
          jos.
        </p>
      </header>

      <ol className="mt-24 flex flex-col gap-20">
        {jobs.map((job) => (
          // data-active e pus de railActive când bara ajunge la job
          <li
            key={`${job.company}-${job.period}`}
            ref={railActive(60)}
            className="group relative grid gap-6 pl-12 md:grid-cols-[15rem_1fr] md:gap-8 md:pl-16"
          >
            {/* nodul de pe linie */}
            <span
              aria-hidden
              className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-white/20 bg-[#0D0B12] transition-all duration-500 group-data-active:border-yellow-400 group-data-active:bg-yellow-400 group-data-active:shadow-[0_0_16px_2px_rgb(250_204_21/0.6)]"
            />

            <div className="transition-opacity duration-500 not-group-data-active:opacity-40">
              <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 uppercase tabular-nums">
                {job.period}
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {job.company}
              </h3>
              <p className="mt-1 text-sm text-white/50">{job.location}</p>
            </div>

            <article className="rounded-xl bg-[#2F293A] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-yellow-400/70 hover:shadow-[0_0_40px_-12px_rgb(250_204_21/0.55)]">
              <h4 className="text-lg font-medium">{job.role}</h4>
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

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tehnologii">
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
