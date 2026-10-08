import Lightfall from "@/components/common/Lightfall";
import { ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import avatar from "../../public/avatar.svg";

const socials = [
  {
    href: "https://github.com/Alexandru2401",
    label: "GitHub",
    icon: FaGithub,
    // culorile oficiale GitHub
    className: "border-white/15 bg-[#24292F] hover:bg-[#32383F]",
  },
];

// TODO: pune datele reale
const LOCATION = "București, RO";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
        <Lightfall
          backgroundColor="#2F293A"
          backgroundGlow={0.1}
          mouseInteraction={false}
          dpr={0.5}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh w-[min(64rem,90%)] items-center pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* stânga — textul; umbra îl desparte de liniile albe din Lightfall */}
          <div className="[text-shadow:0_0_24px_rgb(47_41_58/0.9),0_2px_6px_rgb(0_0_0/0.5)]">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wider text-white">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/70" />
              Disponibil pentru proiecte
              <span >·</span>
              {LOCATION}
              <span>·</span>
              Remote
            </p>

            <h1 className="mt-5 text-[clamp(1.75rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-tight text-white">
              Alex DEV
              <span
                className="mt-2 block whitespace-nowrap text-5xl text-white/80 tracking-tight"
              >
                Fullstack developer
              </span>
            </h1>

            <p className="mt-6 max-w-md text-pretty text-white/60">
              Dezvolt aplicații web scalabile, de la arhitectura backend până la interfața finală. Lucrez cu TypeScript, React, Next.js și Node.js, cu accent pe cod ușor de întreținut și performanță.
            </p>



            <ul className="mt-8 flex flex-wrap gap-3">
              <li>
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full border border-transparent bg-yellow-400 p-2 px-4 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  <LayoutGrid aria-hidden size={18} />
                  Vezi proiectele
                  <ArrowRight
                    size={14}
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </li>
              {socials.map(({ href, label, icon: Icon, className }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-2 rounded-full border p-2 px-4 text-sm font-medium text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${className}`}
                  >
                    <Icon aria-hidden size={18} />
                    {label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* dreapta — poza, cu partea de jos topită în fundal */}
          <figure className="relative w-full max-w-xs justify-self-center lg:justify-self-end">
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
