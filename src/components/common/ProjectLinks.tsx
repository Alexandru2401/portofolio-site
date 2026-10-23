import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";

/** Live Demo (galben, acțiunea principală) + Cod Sursă în culorile GitHub. */
export default function ProjectLinks({
  project,
}: {
  project: Pick<Project, "liveUrl" | "repoUrl">;
}) {
  const { t } = useTranslation();
  return (
    <>
      {project.liveUrl && (
        // acțiunea principală: galbenul site-ului, cu logo-ul Netlify
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 rounded-full bg-yellow-400 px-3.5 py-1.5 text-sm font-semibold text-[#1A1622] transition-colors hover:bg-yellow-300 active:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          <SiNetlify aria-hidden size={18} />
          {t("projects.liveDemo")}
        </a>
      )}
      {project.repoUrl && (
        // GitHub: butonul dark din UI-ul lor
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 rounded-full border border-[#f0f6fc1a] bg-[#212830] px-3.5 py-1.5 text-sm font-semibold text-[#f0f6fc] transition-colors hover:border-[#3d444d] hover:bg-[#2a313c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6feb]"
        >
          <FaGithub aria-hidden size={18} />
          {t("projects.sourceCode")}
        </a>
      )}
    </>
  );
}
