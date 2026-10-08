import ProjectCard from "./common/ProjectCard";
import RailCheckpoint from "./rail/RailCheckpoint";
import RailPath from "./rail/RailPath";
import { projects } from "@/data/projects";
import { railActive, verticalPath } from "@/lib/rail";

const HIT_OFFSET = 15;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative mx-auto pt-20 flex max-w-10/12 flex-col gap-22"
    >
      <RailPath
        d={verticalPath}
        className="top-0 left-1/2 h-full w-px -translate-x-1/2"
      />

      <RailCheckpoint href="#projects" label="Proiecte" className="self-center" />

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
