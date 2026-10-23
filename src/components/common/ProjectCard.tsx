import type { Ref } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";
import ProjectVideo from "./ProjectVideo";

// subtitlurile din card — ca etichetele din pagina de detalii, ca să nu se confunde cu textul
const subtitleClass =
  "text-xs font-medium tracking-[0.2em] text-yellow-400 uppercase";

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
  const detailsUrl = `/proiecte/${project.id}`;
  // fără poster dedicat, video-ul din card folosește primul screenshot din proiect
  const cover = project.images?.[0];
  return (
    // data-active e pus de ProjectsSection când linia galbenă ajunge la card
    <article
      ref={ref}
      className={`group relative flex w-full flex-col gap-4 my-2 md:w-4/5 md:flex-row md:gap-6 rounded-2xl bg-[#2F293A] p-4 md:p-6 ring-1 ring-white/10 saturate-50 transition-all duration-500 hover:-translate-y-1 data-active:scale-[1.02] data-active:opacity-100 data-active:shadow-[0_0_50px_-12px_rgb(250_204_21/0.45)] data-active:ring-yellow-400/60 data-active:saturate-100 motion-safe:data-active:animate-card-shake ${alignLeft ? "self-start [--dir:-1]" : "self-end [--dir:1] md:flex-row-reverse"
        }`}
    >
      {/* tipul proiectului, pe marginea de sus a cardului — neutru, ca să nu concureze cu galbenul */}
      <span
        className={`absolute -top-3 right-4 z-10 rounded-full border border-white/20 bg-[#1A1622] px-3 py-1 text-xs font-medium text-white/75 ${alignLeft ? "" : "md:right-auto md:left-4"}`}
      >
        {t(
          project.projectType === "client"
            ? "projects.clientProject"
            : "projects.personalProject",
        )}
      </span>

      {/* stânga: imagine + stack */}
      <div className="flex flex-col gap-4 flex-1">
        {/* butonul de play rămâne; până există video, popup-ul arată „Video în curând” */}
        <ProjectVideo project={{ ...project, poster: project.poster ?? cover }} />

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
      {/* @container: acțiunile se aranjează după lățimea coloanei, nu a ecranului —
          pe tabletă cardul are două coloane înguste chiar dacă ecranul e lat */}
      <div className="@container flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-slate-200">
          {project.name}
        </h3>

        <h4 className={`mt-4 ${subtitleClass}`}>{t("projects.problem")}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-200/80">
          {project.problem}
        </p>

        <h4 className={`mt-4 ${subtitleClass}`}>{t("projects.solution")}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-200/80">
          {project.solution}
        </p>

        {/* cifre reale din projects.items.<id>.results — doar unde există */}
        {/* bandă de statistici: cifra mare sus, eticheta mică dedesubt, separate prin linii */}
        {project.results.length > 0 && (
          <dl className="mt-5 flex divide-x divide-white/10 overflow-hidden">
            {project.results.map(({ value, label }) => (
              <div
                key={label}
                className="flex min-w-0 flex-1 flex-col-reverse items-center gap-0.5 py-2"
              >
                <dt className="text-[0.6875rem] leading-tight text-balance font-medium tracking-wider text-slate-200/55 uppercase">
                  {label}
                </dt>
                <dd className="text-lg leading-none font-semibold text-slate-100 tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* îngust: butoanele împart rândul, „Detalii” dedesubt pe toată lățimea; lat: un singur rând */}
        <div className="mt-auto flex flex-col gap-3 pt-6 @sm:flex-row @sm:items-center">
          <div className="flex gap-2 *:flex-1 *:justify-center @sm:*:flex-none">
            <ProjectLinks project={project} />
          </div>

          {/* link secundar, gri — devine alb la hover — Live Demo rămâne acțiunea principală */}
          <Link
            to={detailsUrl}
            aria-label={t("projects.detailsAbout", { name: project.name })}
            className="group/details flex items-center justify-center gap-1 rounded-sm border-t border-white/10 px-1 pt-3 pb-1.5 text-sm font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 @sm:ml-auto @sm:border-0 @sm:py-1.5"
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
