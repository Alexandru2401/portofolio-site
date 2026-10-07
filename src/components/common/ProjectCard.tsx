import { Play } from "lucide-react";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";

import { BsTypescript } from "react-icons/bs";

const technologies = [
  { tech: "HTML", logo: <FaHtml5 />, color: "#E34F26" },
  { tech: "CSS", logo: <FaCss3 />, color: "#1572B6" },
  { tech: "React", logo: <FaReact />, color: "#61DAFB" },
  { tech: "Tailwind CSS", logo: <RiTailwindCssFill />, color: "#38BDF8" },
  { tech: "TypeScript", logo: <BsTypescript />, color: "#3178C6" },
  { tech: "Node.js", logo: <FaNodeJs />, color: "#5FA04E" },
];

export default function ProjectCard({ index }: { index: number }) {
  const alignLeft = index % 2 === 0;
  return (
    <article
      className={`group relative flex w-4/5 gap-6 rounded-2xl bg-[#2F293A] p-6 ring-1 transition-all duration-300 hover:-translate-y-1 ${
        alignLeft ? "self-start" : "self-end"
      }`}
    >
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
          {technologies.map(({ tech, logo, color }) => (
            <li
              key={tech}
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <span className="text-sm" style={{ color }} aria-hidden>
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
        <h4>Problema</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          O scurtă descriere a proiectului — ce face și ce problemă rezolvă.
        </p>

        <h4>Soluția</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          O scurtă descriere a soluției implementate.
        </p>
        <a
          href="#"
          className="ml-auto rounded-lg bg-yellow-400 px-3.5 py-1.5 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300"
        >
          Detalii
        </a>

        <div className="mt-auto flex items-center gap-1 pt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            Live <SiNetlify />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            Cod <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}
