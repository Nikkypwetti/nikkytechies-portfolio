import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TechBadge } from "./tech-badge"; 
import type { Project } from "@/types/project";


type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-primary">
          {project.type}
        </span>

        <span className="text-sm text-muted-foreground">
          {project.year}
        </span>
      </div>

      <h3 className="text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge
            key={tech.id}
            tech={tech}
          />
        ))}
      </div>

      <ul className="mt-6 space-y-2">
        {project.metrics.map((metric) => (
          <li
            key={metric}
            className="text-sm text-muted-foreground"
          >
            ✓ {metric}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-8 inline-flex items-center gap-2 font-medium text-primary"
      >
        View Case Study
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}