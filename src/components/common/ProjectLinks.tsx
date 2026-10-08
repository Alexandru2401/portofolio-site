import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import type { Project } from "@/data/projects";

/** Live Demo + Cod Sursă, în culorile Netlify și GitHub. */
export default function ProjectLinks({
  project,
}: {
  project: Pick<Project, "liveUrl" | "repoUrl">;
}) {
  return (
    <>
      {project.liveUrl && (
        // Netlify: teal de brand cu text navy
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 rounded-lg bg-[#00C7B7] px-3.5 py-1.5 text-sm font-semibold text-[#0E1E25] transition-colors hover:bg-[#32E6E2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32E6E2]"
        >
          <SiNetlify aria-hidden size={18} />
          Live Demo
        </a>
      )}
      {project.repoUrl && (
        // GitHub: butonul dark din UI-ul lor
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 rounded-lg border border-[#f0f6fc1a] bg-[#212830] px-3.5 py-1.5 text-sm font-semibold text-[#f0f6fc] transition-colors hover:border-[#3d444d] hover:bg-[#2a313c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6feb]"
        >
          <FaGithub aria-hidden size={18} />
          Cod Sursă
        </a>
      )}
    </>
  );
}
