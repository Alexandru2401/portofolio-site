import type { ReactNode } from "react";
import { ArrowRight, Download } from "lucide-react";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { CV_URL } from "@/data/links";
import { verticalPath, type PathBuilder } from "@/lib/rail";

// TODO: completează cu detalii personale (de unde ești, ce faci în afara codului)
const principles = [
  {
    title: "Încep de la problemă",
    text: "Înțeleg problema, userul final și constrângerile. Apoi aleg soluția potrivită.",
  },
  {
    title: "Livrez complet",
    text: "Frontend — Backend — Deploy. Pot duce o funcționalitate singur până în producție.",
  },
  {
    title: "Scriu cod pentru oameni",
    text: "Tipuri clare, componente mici, nume bune și o structură ușor de înțeles și întreținut.",
  }
];

// cele două ramuri ale bifurcării: pornesc din mijlocul marginii de sus,
// coboară pe laterale și se reîntâlnesc în mijlocul marginii de jos
const R = 28;
const borderPaths: PathBuilder = (w, h) => {
  const cx = w / 2;
  return [
    `M${cx} 0 H${R} A${R} ${R} 0 0 0 0 ${R} V${h - R} A${R} ${R} 0 0 0 ${R} ${h} H${cx}`,
    `M${cx} 0 H${w - R} A${R} ${R} 0 0 1 ${w} ${R} V${h - R} A${R} ${R} 0 0 1 ${w - R} ${h} H${cx}`,
  ];
};

// mini syntax highlighting pentru cardul de cod
const kw = (t: string) => <span className="text-violet-300">{t}</span>;
const key = (t: string) => <span className="text-sky-300">{t}</span>;
const str = (t: string) => <span className="text-yellow-300">"{t}"</span>;
const com = (t: string) => <span className="text-white/35 italic">{t}</span>;
const strList = (items: string[]) => (
  <>
    [
    {items.map((item, i) => (
      <span key={item}>
        {str(item)}
        {i < items.length - 1 && ", "}
      </span>
    ))}
    ]
  </>
);

const codeLines: ReactNode[] = [
  com("// cine e omul din spatele proiectelor"),
  <>
    {kw("const")} alex = {"{"}
  </>,
  <>
    {"  "}
    {key("rol")}: {str("Fullstack developer")},
  </>,
  <>
    {"  "}
    {key("stack")}: {strList(["React", "TypeScript", "Node.js"])},
  </>,
  <>
    {"  "}
    {key("focus")}: {str("produse complete, de la design la deploy")},
  </>,
  <>
    {"  "}
    {key("construit")}: {strList(["CRM call center", "catalog de produse"])},
  </>,
  <>
    {"  "}
    {key("disponibil")}: {str("remote")},
  </>,
  <>
    {"}"} {kw("satisfies")} Developer;
  </>,
  "",
  <>
    {kw("export default")} alex;
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[1.1em] w-2 translate-y-[0.2em] bg-yellow-400 motion-safe:animate-pulse"
    />
  </>,
];

// TODO: actualizează ce lucrezi acum
const status = [
  "disponibil pentru roluri remote",
  "UTC+3 · răspund în 24h",
  "acum: backend pe un CRM în producție",
];

export default function AboutMe() {
  return (
    <section id="about-me" className="text-white">
      <div className="relative h-32">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>

      {/* aici bara se bifurcă și înconjoară secțiunea ca un border */}
      <div className="relative mx-auto w-[min(76rem,94%)] px-6 pt-16 pb-16 md:px-12 md:pb-36">
        <RailPath d={borderPaths} className="top-0 left-0 size-full" />
        <RailCheckpoint
          href="#about-me"
          label="Despre mine"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <h2 className="text-[clamp(1.75rem,5vw,4.5rem)] text-center font-semibold leading-[0.9] tracking-tighter text-balance lg:whitespace-nowrap">
          De la idee până în producție
        </h2>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_1.05fr]">
          {/* Cards */}
          <div>
            <ol className="flex flex-col gap-3">
              {principles.map(({ title, text }, i) => (
                <li
                  key={title}
                  className="group flex gap-4 rounded-xl p-4 ring-1 bg-[#1a1622] ring-white/10 transition-all duration-300 hover:bg-[#2F293A] hover:ring-yellow-400/60"
                >
                  <span className="pt-0.5 text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-pretty text-white/50">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Code editor - ts */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full bg-yellow-400/10 blur-3xl"
            />

            <figure className="relative overflow-hidden rounded-2xl bg-[#1A1622] ring-1 ring-white/10 shadow-2xl shadow-black/40 transition-all duration-500 hover:ring-yellow-400/60 hover:shadow-[0_0_70px_-10px_rgb(250_204_21/0.45)]">
              <div className="flex items-center gap-4 border-b border-white/10 bg-[#2F293A] px-4">
                <div aria-hidden className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-white/15" />
                  <span className="size-3 rounded-full bg-white/15" />
                  <span className="size-3 rounded-full bg-yellow-400" />
                </div>
                <figcaption className="border-b-2 border-yellow-400 py-3 text-sm text-white/80">
                  alex.ts
                </figcaption>
                <span className="ml-auto text-xs text-white/35">TypeScript</span>
              </div>

              <pre className="overflow-x-auto py-5 text-[13px] leading-7 sm:text-sm">
                <code className="grid">
                  {codeLines.map((line, i) => (
                    <span key={i} className="flex hover:bg-white/5">
                      <span
                        aria-hidden
                        className="w-12 shrink-0 pr-4 text-right text-white/25 select-none tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span className="pr-6 whitespace-pre text-white/85">
                        {line}
                      </span>
                    </span>
                  ))}
                </code>
              </pre>
            </figure>

            {/* terminal */}
            <figure className="relative mt-4 overflow-hidden rounded-xl bg-[#0D0B12]/95 font-mono text-[13px] ring-1 ring-white/15 shadow-2xl shadow-black/60 backdrop-blur-md md:absolute md:-right-10 md:-bottom-26 md:mt-0 md:w-[23rem]">
              <div className="flex items-center gap-3 border-b border-white/10 bg-[#2F293A] px-3 py-2">
                <div aria-hidden className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <figcaption className="text-xs text-white/50">terminal</figcaption>
              </div>

              <div className="p-4">
                <p className="text-white/85">
                  <span className="text-yellow-400">$</span> npm run status
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {status.map((line) => (
                    <li key={line} className="flex gap-2 text-white/70">
                      <span aria-hidden className="text-emerald-400">
                        ✔
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2 font-sans">
                  <a
                    href="#contact"
                    className="group flex items-center gap-1.5 rounded-lg bg-yellow-400 px-3 py-1.5 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    Hai să vorbim
                    <ArrowRight
                      aria-hidden
                      size={14}
                      className="transition-transform motion-safe:group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href={CV_URL}
                    download
                    className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                  >
                    <Download aria-hidden size={14} />
                    Descarcă CV
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div className="relative h-32">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>
    </section>
  );
}
