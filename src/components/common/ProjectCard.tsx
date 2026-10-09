import type { Ref } from "react";
import { Link } from "react-router";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({
  project,
  index,
  ref,
}: {
  project: Project;
  index: number;
  ref?: Ref<HTMLElement>;
}) {
  const { t } = useTranslation();
  const alignLeft = index % 2 === 0;
  return (
    // data-active e pus de ProjectsSection când linia galbenă ajunge la card
    <article
      ref={ref}
      className={`group relative flex w-full flex-col gap-4 my-2 md:w-4/5 md:flex-row md:gap-6 rounded-2xl bg-[#2F293A] p-4 md:p-6 ring-1 ring-white/10 saturate-50 transition-all duration-500 hover:-translate-y-1 data-active:scale-[1.02] data-active:opacity-100 data-active:shadow-[0_0_70px_-10px_rgb(250_204_21/0.55)] data-active:ring-yellow-400/80 data-active:saturate-100 motion-safe:data-active:animate-card-shake ${
        alignLeft ? "self-start [--dir:-1]" : "self-end [--dir:1]"
      }`}
    >
      {/* stânga: media + stack */}
      <div className="flex flex-col gap-4 flex-1">
        <button
          type="button"
          className="group/media relative aspect-video overflow-hidden rounded-xl bg-[#1A1622] ring-1 ring-white/5"
          aria-label={t("projects.previewLabel")}
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
          {project.tech.map(({ name, icon: Icon, color }) => (
            <li
              key={name}
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon aria-hidden className="text-sm" style={{ color }} />
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* dreapta: text + acțiuni */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <h4>{t("projects.problem")}</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.problem}
        </p>

        <h4>{t("projects.solution")}</h4>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.solution}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <ProjectLinks project={project} />

          <Link
            to={`/proiecte/${project.id}`}
            aria-label={t("projects.detailsAbout", { name: project.name })}
            className="group/details ml-auto flex items-center gap-1.5 rounded-lg bg-yellow-400 px-3.5 py-1.5 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            {t("projects.details")}
            <ArrowRight
              aria-hidden
              size={14}
              className="transition-transform motion-safe:group-hover/details:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
