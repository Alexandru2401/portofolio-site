import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { LEFT_RAIL_X, type PathBuilder } from "@/lib/rail";

// TODO: pune adresa de email și profilul de LinkedIn reale
const EMAIL = "salut@exemplu.ro";

const socials = [
  { href: "https://github.com/Alexandru2401", label: "GitHub", icon: FaGithub },
  { href: "https://linkedin.com/in/...", label: "LinkedIn", icon: FaLinkedin },
];

// bara pleacă de pe stânga (de la Stack) și se întoarce la mijloc, unde se termină
const contactPath: PathBuilder = (w, h) => [
  `M${LEFT_RAIL_X} 0 V40 H${w / 2} V${h}`,
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // clipboard blocat (ex. context nesecurizat) — rămâne link-ul mailto
    }
  };

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 text-white"
    >
      {/* glow galben care „răsare” de sub marginea paginii */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-3xl"
      />

      <div className="relative mx-auto w-[min(72rem,90%)] pt-44">
        <RailPath d={contactPath} className="top-0 left-0 h-24 w-full" />
        <RailCheckpoint
          href="#contact"
          label="Contact"
          className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/70" />
          Disponibil pentru remote
        </p>

        <h2 className="mt-5 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-tighter">
          Hai să construim
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.55)" }}
          >
            ceva împreună
          </span>
        </h2>

        <p className="mt-6 max-w-md text-pretty text-white/60">
          Ai un proiect, o idee sau un rol deschis? Scrie-mi — răspund de obicei
          în aceeași zi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-lg font-semibold text-[#1A1622] transition-all hover:bg-yellow-300 hover:shadow-[0_0_50px_-8px_rgb(250_204_21/0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            {EMAIL}
            <ArrowUpRight
              size={20}
              className="transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            {copied ? (
              <Check size={16} className="text-emerald-400" />
            ) : (
              <Copy size={16} />
            )}
            <span aria-live="polite">{copied ? "Copiat!" : "Copiază"}</span>
          </button>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                <Icon aria-hidden />
                {label}
                <ArrowUpRight
                  size={14}
                  className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-28 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Alex · Construit cu React și Tailwind CSS</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex min-h-11 items-center gap-2 rounded-lg px-3 text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            Înapoi sus
            <ArrowUp
              size={16}
              className="transition-transform motion-safe:group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
