import ProjectCard from "./common/ProjectCard";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { useTranslation } from "react-i18next";
import { useProjects } from "@/data/projects";
import { railActive, verticalPath } from "@/lib/rail";

const HIT_OFFSET = 15;

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = useProjects();
  return (
    <section
      id="projects"
      className="relative mx-auto flex w-full flex-col gap-10 px-4 pt-10 md:max-w-10/12 md:px-0"
    >
      <RailPath
        d={verticalPath}
        className="-top-20 left-1/2 h-[calc(100%+10rem)] w-px -translate-x-1/2"
      />

      <RailCheckpoint href="#projects" label={t("nav.projects")} className="self-center -top-10" />

      {projects.map((project, i) => (
        // data-active e pus de railActive când bara ajunge la card
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          ref={railActive(HIT_OFFSET)}
        />
      ))}
    </section>
  );
}
