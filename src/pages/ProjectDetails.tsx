import ProjectCarousel from "@/components/common/ProjectCarousel";
import ProjectLinks from "@/components/common/ProjectLinks";
import ProjectVideo from "@/components/common/ProjectVideo";
import { useProjects } from "@/data/projects";
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router";
import NotFound from "./NotFound";

// eticheta galbenă mică de deasupra fiecărei secțiuni
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-medium tracking-[0.25em] text-yellow-400 uppercase">
      {children}
    </h2>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const projects = useProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return <NotFound />;

  const project = projects[index];
  // navigare circulară: după ultimul proiect vine iar primul
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

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
        {t("projects.allProjects")}
      </Link>

      {/* React 19 mută <title> în <head>; la ieșire revine titlul din index.html */}
      <title>{`${project.name} · Alex DEV`}</title>

      {/* antet */}
      <header className="mt-10">
        <p className="text-xs font-medium tracking-[0.25em] text-yellow-400 uppercase tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
          {/* chenar alb, ca logo-urile din Experiență — logo-urile au fundal alb */}
          {project.logo && (
            <span className="flex h-16 shrink-0 items-center overflow-hidden rounded-2xl bg-white px-3 ring-1 ring-white/10 shadow-[0_0_32px_-8px_rgb(250_204_21/0.5)] md:h-20">
              <img src={project.logo} alt="" className="h-full w-auto" />
            </span>
          )}
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-balance">
            {project.name}
          </h1>
        </div>
        <p className="mt-5 max-w-2xl text-lg text-pretty text-white/60">
          {project.tagline}
        </p>

        {/* rol · durată · an */}
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-white/10 py-5">
          {[
            { label: t("projects.role"), value: project.role },
            { label: t("projects.duration"), value: project.duration },
            { label: t("projects.year"), value: project.year },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-xs tracking-[0.2em] text-white/40 uppercase">
                {label}
              </dt>
              <dd className="mt-1 font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <ProjectLinks project={project} />
        </div>
      </header>

      {/* descriere pe scurt */}
      <section className="mt-16 max-w-3xl">
        <SectionTitle>{t("projects.about")}</SectionTitle>
        <p className="mt-4 text-pretty leading-relaxed text-white/70">
          {project.overview}
        </p>
      </section>

      {/* video în stânga pe toată înălțimea; în dreapta caruselul (2/3) și stack-ul (1/3) */}
      <div className="mt-12 grid gap-4 md:grid-cols-5 md:grid-rows-[2fr_1fr]">
        <ProjectVideo
          project={project}
          className="md:col-span-2 md:row-span-2 md:aspect-auto md:h-full"
        />

        <ProjectCarousel
          images={project.images}
          name={project.name}
          className="md:col-span-3"
        />

        <section className="rounded-xl bg-[#2F293A] p-5 ring-1 ring-white/10 md:col-span-3">
          <SectionTitle>{t("projects.techStack")}</SectionTitle>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10"
              >
                <Icon aria-hidden className="text-base" style={{ color }} />
                {name}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* problema → soluția */}
      <section className="mt-20 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-[#2F293A] p-6 ring-1 ring-white/10">
          <SectionTitle>{t("projects.problem")}</SectionTitle>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            {project.problem}
          </p>
        </div>
        <div className="rounded-xl bg-[#2F293A] p-6 ring-1 ring-yellow-400/40 shadow-[0_0_60px_-24px_rgb(250_204_21/0.5)]">
          <SectionTitle>{t("projects.solution")}</SectionTitle>
          <p className="mt-4 text-pretty leading-relaxed text-white/70">
            {project.solution}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle>{t("projects.features")}</SectionTitle>
        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-white/80">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-yellow-400/15 text-yellow-400">
                <Check aria-hidden size={12} strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <SectionTitle>{t("projects.challenges")}</SectionTitle>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {project.challenges.map(({ title, text }, i) => (
            <li
              key={title}
              className="rounded-xl bg-[#2F293A] p-6 ring-1 ring-white/10 transition-colors hover:ring-yellow-400/50"
            >
              <span className="text-xs font-medium tracking-[0.25em] text-yellow-400 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-pretty leading-relaxed text-white/60">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ce am ales și de ce */}
      <section className="mt-20">
        <SectionTitle>{t("projects.decisions")}</SectionTitle>
        <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {project.decisions.map(({ title, text }) => (
            <div key={title} className="grid gap-2 py-5 md:grid-cols-[1fr_2fr] md:gap-8">
              <dt className="font-semibold">{title}</dt>
              <dd className="text-sm text-pretty leading-relaxed text-white/60">
                {text}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 max-w-3xl">
        <SectionTitle>{t("projects.lessons")}</SectionTitle>
        <blockquote className="mt-6 border-l-2 border-yellow-400 pl-6 text-lg text-pretty leading-relaxed text-white/80 italic">
          {project.lessons}
        </blockquote>
      </section>

      {/* CTA spre contact */}
      <section className="mt-24 flex flex-col items-start gap-6 rounded-2xl bg-[#2F293A] p-8 ring-1 ring-white/10 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            {t("projects.ctaTitle")}
          </h2>
          <p className="mt-2 max-w-md text-pretty text-white/60">
            {t("projects.ctaText")}
          </p>
        </div>
        <Link
          to="/#contact"
          className="group flex shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-medium text-[#1A1622] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        >
          <Mail aria-hidden size={16} />
          {t("projects.ctaButton")}
          <ArrowRight
            aria-hidden
            size={14}
            className="opacity-60 transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </Link>
      </section>

      <nav
        aria-label={t("projects.navLabel")}
        className="mt-16 flex items-center justify-between gap-3 border-t border-white/10 pt-8"
      >
        <Link
          to={`/proiecte/${prev.id}`}
          aria-label={`${t("projects.previous")}: ${prev.name}`}
          className="group flex items-center gap-2 rounded-lg border border-white/80 bg-black px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft
            aria-hidden
            size={16}
            className="transition-transform motion-safe:group-hover:-translate-x-0.5"
          />
          {t("projects.previous")}
        </Link>

        <Link
          to={`/proiecte/${next.id}`}
          aria-label={`${t("projects.next")}: ${next.name}`}
          className="group flex items-center gap-2 rounded-lg border border-white/80 bg-black px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t("projects.next")}
          <ArrowRight
            aria-hidden
            size={16}
            className="transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </Link>
      </nav>
    </article>
  );
}
