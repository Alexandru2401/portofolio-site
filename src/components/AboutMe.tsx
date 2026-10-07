import type { ReactNode } from "react";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { verticalPath, type PathBuilder } from "@/lib/rail";

// TODO: completează cu detalii personale (de unde ești, ce faci în afara codului)
const principles = [
  {
    title: "Încep de la problemă",
    text: "Întâi înțeleg cine folosește aplicația și ce îl încurcă. Abia apoi aleg tehnologia.",
  },
  {
    title: "Livrez cap-coadă",
    text: "Design, frontend, API, deploy — pot duce o funcționalitate singur până în producție.",
  },
  {
    title: "Scriu cod care se citește",
    text: "Tipuri clare, componente mici, nume bune. Următorul developer o să-mi mulțumească.",
  },
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

export default function AboutMe() {
  return (
    <section id="about-me" className="text-white">
      <div className="relative h-32">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>

      {/* aici bara se bifurcă și înconjoară secțiunea ca un border */}
      <div className="relative mx-auto w-[min(76rem,94%)] px-6 pt-20 pb-16 md:px-12">
        <RailPath d={borderPaths} className="top-0 left-0 size-full" />
        <RailCheckpoint
          href="#about-me"
          label="Despre mine"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="grid items-center gap-16 md:grid-cols-[1fr_1.05fr]">
          {/* stânga — povestea și principiile */}
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.9] tracking-tighter">
              Construiesc
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
              >
                cap-coadă
              </span>
            </h2>

            <p className="mt-6 max-w-md text-pretty text-white/60">
              Sunt Alex, developer fullstack. Îmi place să duc un produs de la o
              idee schițată până la ceva ce oamenii folosesc în fiecare zi — cum
              a fost CRM-ul pentru call center sau catalogul de produse cu panou
              de administrare.
            </p>

            <ol className="mt-10 flex flex-col gap-3">
              {principles.map(({ title, text }, i) => (
                <li
                  key={title}
                  className="group flex gap-4 rounded-xl p-4 ring-1 ring-white/10 transition-all duration-300 hover:bg-[#2F293A] hover:ring-yellow-400/60"
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

          {/* dreapta — același profil, scris ca obiect TypeScript */}
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
          </div>
        </div>
      </div>

      <div className="relative h-32">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>
    </section>
  );
}
