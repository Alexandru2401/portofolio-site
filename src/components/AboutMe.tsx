import { ArrowRight, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import StatStrip from "./common/StatStrip";
import { CV_URL } from "@/data/links";

// TODO: poza profesională (ex. import din @/assets) — fără ea textul ocupă toată coloana
const ABOUT_PHOTO: string | undefined = undefined;
import { useMessages } from "@/i18n";
import type { Messages } from "@/i18n/locales/ro";
import { verticalPath, type PathBuilder } from "@/lib/rail";

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

// comentariul, cheile și valorile din cod vin din traduceri
const codeLines = (code: Messages["about"]["code"]) => [
  com(code.comment),
  <>
    {kw("const")} alex = {"{"}
  </>,
  <>
    {"  "}
    {key(code.roleKey)}: {str("Fullstack developer")},
  </>,
  <>
    {"  "}
    {key("stack")}: {strList(["React", "TypeScript", "Node.js"])},
  </>,
  <>
    {"  "}
    {key(code.focusKey)}: {str(code.focus)},
  </>,
  <>
    {"  "}
    {key(code.builtKey)}: {strList(code.built)},
  </>,
  <>
    {"  "}
    {key(code.availableKey)}: {str(code.available)},
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
  const { t } = useTranslation();
  const { about } = useMessages();
  return (
    <section id="about-me" className="text-white">
      <div className="relative h-16 md:h-20">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>

      {/* aici bara se bifurcă și înconjoară secțiunea ca un border */}
      <div className="section-container relative px-6 pt-16 pb-20 md:px-12 md:pb-40">
        <RailPath d={borderPaths} className="top-0 left-0 size-full" />
        <RailCheckpoint
          href="#about-me"
          label={t("nav.aboutMe")}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <h2 className="section-title">
          {t("about.title")}
        </h2>

        <div className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-[1fr_1.05fr] [&>*]:min-w-0">
          {/* povestea — text direct pe fundal, fără card, ca să contrasteze cu fereastra de cod */}
          <div>
            <div className="flex items-start gap-5">
              {ABOUT_PHOTO && (
                <img
                  src={ABOUT_PHOTO}
                  alt="Alex"
                  className="size-20 shrink-0 rounded-2xl object-cover ring-1 ring-white/10 sm:size-24"
                />
              )}
              <div className="flex max-w-xl flex-col gap-4">
                {about.story.map((paragraph, i) => (
                  <p
                    key={paragraph}
                    className={
                      i === 0
                        ? "text-lg leading-relaxed text-pretty text-slate-200"
                        : "leading-relaxed text-pretty text-slate-200"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <StatStrip
              items={about.facts}
              className="mt-8 max-w-xl border-y border-white/10 py-2"
            />
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
                  {codeLines(about.code).map((line, i) => (
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
            <figure className="relative mt-4 overflow-hidden rounded-xl bg-[#0D0B12]/95 font-mono text-xs ring-1 ring-white/15 shadow-2xl shadow-black/60 backdrop-blur-md md:absolute md:-right-10 md:-bottom-20 md:mt-0 md:w-80">
              <div className="flex items-center gap-3 border-b border-white/10 bg-[#2F293A] px-3 py-2">
                <div aria-hidden className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <figcaption className="text-xs text-white/50">terminal</figcaption>
              </div>

              <div className="p-3">
                <p className="text-white/85">
                  <span className="text-yellow-400">$</span> npm run status
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {about.status.map((line) => (
                    <li key={line} className="flex gap-2 text-white/70">
                      <span aria-hidden className="text-emerald-400">
                        ✔
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2 font-sans">
                  <a
                    href="#contact"
                    className="group flex items-center gap-1.5 rounded-lg bg-yellow-400 px-2.5 py-1 text-xs font-medium text-[#1A1622] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    {t("about.letsTalk")}
                    <ArrowRight
                      aria-hidden
                      size={12}
                      className="transition-transform motion-safe:group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href={CV_URL}
                    download
                    className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/8 px-2.5 py-1 text-xs text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                  >
                    <Download aria-hidden size={12} />
                    {t("nav.downloadCv")}
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div className="relative h-10 md:h-16">
        <RailPath d={verticalPath} className="top-0 left-1/2 h-full w-px -translate-x-1/2" />
      </div>
    </section>
  );
}
