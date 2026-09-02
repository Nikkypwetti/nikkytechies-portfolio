import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { TechBadge } from "./tech-badge";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl">
      {project.heroImage && (
        <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden border-b bg-muted">
          <Image
            src={project.heroImage}
            alt={project.title}
            width={1200}
            height={700}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {project.category}
            </span>
            {project.status && (
              <span className="rounded-full border px-3 py-1 text-xs font-semibold">
                {project.status}
              </span>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-primary">
            {project.title}
          </h3>
        </Link>

        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {project.status === "In Progress" ? "Build Scope" : "Proof"}
          </p>
          <ul className="mt-3 space-y-2">
            {project.metrics.slice(0, 3).map((metric) => (
              <li key={metric} className="flex gap-2 text-sm text-muted-foreground">
                <span className="font-bold text-primary">✓</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.platforms && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech) => (
            <TechBadge key={tech.id} tech={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            View Case Study
            <ArrowRight className="size-4" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              GitHub
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
