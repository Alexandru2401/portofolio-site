import Lightfall from "@/components/common/Lightfall";
import { ArrowUpRight } from "lucide-react";
import avatar from "@/assets/avatar.jpeg";

const socials = [
  {
    href: "https://github.com/...",
    label: "GitHub",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/...",
    label: "LinkedIn",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-svh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
        <Lightfall
          backgroundColor="#2F293A"
          backgroundGlow={1.5}
          mouseInteraction={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh w-[min(72rem,90%)] items-center">
        <div className="grid w-full rounded-full items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-0">
          {/* stânga — poza, topită în background */}
          <figure className="relative aspect-3/4 w-full rounded-full max-w-sm justify-self-center md:justify-self-start">
            <img
              src={avatar}
              alt="Alex"
              className="h-full w-full rounded-full object-cover contrast-125"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/15" />
          </figure>

          {/* dreapta — textul, care calcă peste poză */}
          <div className="md:-ml-16">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/70" />
              Disponibil pentru remote
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-tighter text-white">
              Fullstack
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
              >
                developer
              </span>
            </h1>

            <p className="mt-6 max-w-md text-pretty text-white/60">
              Construiesc produse complete în React și TypeScript — de la un CRM
              de call center la un catalog de produse cu dashboard de
              administrare. Design, frontend, API, deploy.
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                >
                  {icon}
                  {label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
