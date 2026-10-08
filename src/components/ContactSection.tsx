import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { LEFT_RAIL_X, type PathBuilder } from "@/lib/rail";


// aceleași butoane ca în hero, în culorile oficiale
const socials = [
  {
    href: "https://github.com/Alexandru2401",
    label: "GitHub",
    icon: FaGithub,
    className: "border-white/15 bg-[#24292F] hover:bg-[#32383F]",
  },
  {
    href: "https://linkedin.com/in/...",
    label: "LinkedIn",
    icon: FaLinkedin,
    className: "border-transparent bg-[#0A66C2] hover:bg-[#004182]",
  },
];

// bara pleacă de pe stânga (de la Stack) și se întoarce la mijloc, unde se termină
const contactPath: PathBuilder = (w, h) => [
  `M${LEFT_RAIL_X} 0 V40 H${w / 2} V${h}`,
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 text-white"
    >
      <div className="relative mx-auto w-[min(72rem,90%)] pt-44 pb-28">
        <RailPath d={contactPath} className="top-0 left-0 h-24 w-full" />
        <RailCheckpoint
          href="#contact"
          label="Contact"
          className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white">
          Disponibil pentru remote
        </p>

        {/* titlu și subtitlu ca la celelalte secțiuni */}
        <h2 className="mt-5 text-center text-[clamp(1.75rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-tighter text-balance">
          Hai să construim ceva împreună
        </h2>

        <p className="mx-auto mt-6 max-w-md text-center text-pretty text-white/60">
          Ai un proiect, o idee sau un rol deschis? Scrie-mi — răspund de obicei
          în aceeași zi.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-3">
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
    </section>
  );
}
