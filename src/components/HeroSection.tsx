import Lightfall from "@/components/common/Lightfall";
import { ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import avatar from "../../public/avatar.svg";

// aceeași înălțime, padding și formă pentru ambele CTA-uri; culorile vin separat
const ctaClass =
  "group flex h-11 items-center gap-2 rounded-full border px-5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const socials = [
  {
    href: "https://github.com/Alexandru2401",
    label: "GitHub",
    icon: FaGithub,
    // culorile oficiale GitHub
    className: "border-white/15 bg-[#24292F] hover:bg-[#32383F] active:bg-[#1C2026]",
  },
];

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative overflow-x-clip">
      {/* fundal solid sub canvas — cu opacitate redusă altfel s-ar vedea grila din RootLayout.
          Coboară 10rem sub hero, ca trecerea spre grilă să fie lungă și să nu înceapă sub butoane */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+10rem)] overflow-hidden bg-[#0D0B12] mask-[linear-gradient(to_bottom,black_75%,transparent)]">
        <Lightfall
          className="opacity-40"
          backgroundColor="#2F293A"
          backgroundGlow={0.1}
          density={0.3}
          speed={0.25}
          mouseInteraction={false}
          dpr={0.5}
        />
      </div>

      {/* min-h = înălțimea vizibilă a hero-ului (înainte min-h-svh într-o secțiune tăiată la 90dvh
          împingea conținutul sub centru); pt-24 lasă loc navbar-ului fix */}
      <div className="relative z-10 section-container flex min-h-[90dvh] items-center pt-24 pb-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* stânga — textul; umbra îl desparte de liniile albe din Lightfall */}
          <div className="relative isolate [text-shadow:0_0_24px_rgb(47_41_58/0.9),0_2px_6px_rgb(0_0_0/0.5)]">
            {/* pată difuză doar sub text, în culoarea fundalului din Lightfall — se topește în animație */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-12 -inset-y-10 -z-10 rounded-[40%] bg-[#0D0B12]/80 blur-3xl"
            />

            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-slate-200">
              Alex DEV
              {/* rolul: mai mic și mai subțire decât numele; pe ecrane înguste trece pe rândul următor */}
              <span className="mt-3 block text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-tight text-balance text-slate-200/75">
                {t("hero.role")}
              </span>
            </h1>

            <p className="mt-6 max-w-136 text-base leading-relaxed text-pretty text-slate-200/85 md:text-lg">
              {t("hero.description")}
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              <li>
                <a
                  href="#projects"
                  className={twMerge(
                    ctaClass,
                    "border-transparent bg-yellow-400 font-semibold text-[#1A1622] hover:bg-yellow-300 active:bg-yellow-500 focus-visible:outline-yellow-400",
                  )}
                >
                  <LayoutGrid aria-hidden size={18} />
                  {t("hero.seeProjects")}
                  <ArrowRight
                    aria-hidden
                    size={14}
                    className="opacity-60 transition-transform motion-safe:group-hover:translate-x-0.5"
                  />
                </a>
              </li>
              {socials.map(({ href, label, icon: Icon, className }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={twMerge(
                      ctaClass,
                      "font-medium text-white focus-visible:outline-white/60",
                      className,
                    )}
                  >
                    <Icon aria-hidden size={18} />
                    {label}
                    <ArrowUpRight
                      aria-hidden
                      size={14}
                      className="opacity-50 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* dreapta — poza, cu partea de jos topită în fundal */}
          <figure className="relative w-full max-w-56 justify-self-center sm:max-w-64 lg:max-w-xs lg:justify-self-end">
            <img
              src={avatar}
              alt="Alex"
              className="relative w-full drop-shadow-[0_24px_40px_rgb(0_0_0/0.45)] mask-[linear-gradient(to_bottom,black_70%,transparent)]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
