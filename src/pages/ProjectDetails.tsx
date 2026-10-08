import ProjectLinks from "@/components/common/ProjectLinks";
import { getProject, projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProject(id);
  if (!project) return <NotFound />;

  const index = projects.indexOf(project);


  return (
    <article className="mx-auto w-[min(64rem,90%)] pt-36 pb-32 text-white">
      <Link
        to="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
      >
        <ArrowLeft
          aria-hidden
          size={16}
          className="transition-transform motion-safe:group-hover:-translate-x-0.5"
        />
        Toate proiectele
      </Link>

      {/* antet */}
      <header className="mt-10">
        <p className="text-xs font-medium tracking-[0.25em] text-yellow-400 uppercase tabular-nums">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-balance">
          {project.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-pretty text-white/60">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <ProjectLinks project={project} />
        </div>
      </header>


    </article>
  );
}

