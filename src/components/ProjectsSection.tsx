import ProjectCard from "./common/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative mx-auto mt-20 flex max-w-10/12 flex-col gap-22"
    >
      <div className="absolute left-0 top-0 h-full w-px -translate-x-6 bg-white/10">
        <div className="rail-fill h-full w-full bg-yellow-400" />
      </div>

      {[...new Array(3)].map((_, i) => (
        <ProjectCard key={i} index={i} />
      ))}
    </section>
  );
}
