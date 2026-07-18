import { Play, ArrowUpRight } from "lucide-react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";

const technologies = [
  { tech: "HTML", logo: <FaHtml5 /> },
  { tech: "CSS", logo: <FaCss3 /> },
  { tech: "React", logo: <FaReact /> },
  { tech: "Tailwind CSS", logo: <RiTailwindCssFill /> },
  { tech: "TypeScript", logo: <BsTypescript /> },
  { tech: "Node.js", logo: <FaNodeJs /> },
];

export default function ProjectCard() {
  return (
    <article className="group relative flex gap-6 rounded-2xl bg-[#2F293A] p-6 ring-1 ring-white/5 transition-all duration-300 hover:ring-white/15 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
      {/* accent lateral care crește la hover */}
      <span className="absolute left-0 top-6 h-8 w-1 rounded-full bg-yellow-400/80 transition-all duration-300 group-hover:h-16" />

      {/* stânga: media + stack */}
      <div className="flex flex-col gap-4 flex-1">
        <button
          type="button"
          className="group/media relative aspect-video overflow-hidden rounded-xl bg-[#1A1622] ring-1 ring-white/5"
          aria-label="Redă preview proiect"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover/media:scale-110 group-hover/media:bg-yellow-400 absolute inset-0 m-auto">
            <Play
              size={22}
              className="translate-x-0.5 text-white transition-colors group-hover/media:text-[#1A1622]"
              fill="currentColor"
            />
          </span>
        </button>

        <ul className="flex flex-wrap gap-2">
          {technologies.map(({ tech, logo }) => (
            <li
              key={tech}
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span className="text-sm" aria-hidden>
                {logo}
              </span>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* dreapta: text + acțiuni */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          Nume proiect
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          O scurtă descriere a proiectului — ce face și ce problemă rezolvă.
        </p>

        <div className="mt-auto flex items-center gap-1 pt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            Live <ArrowUpRight size={14} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            Cod <ArrowUpRight size={14} />
          </a>
          <a
            href="#"
            className="ml-auto rounded-lg bg-yellow-400 px-3.5 py-1.5 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300"
          >
            Detalii
          </a>
        </div>
      </div>
    </article>
  );
}
