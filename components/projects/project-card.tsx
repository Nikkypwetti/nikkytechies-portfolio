import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TechBadge } from "./tech-badge"; 
import type { Project } from "@/types/project";


type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
<Link href={`/projects/${project.slug}`}>
  <article
    className="group rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
  >
      {project.heroImage && (
  <div className="relative mb-6 overflow-hidden rounded-xl">
    <Image
      src={project.heroImage}
      alt={project.title}
      width={1200}
      height={700}
      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </div>
)}

      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-primary">
          {project.type}
        </span>

        <span className="text-sm text-muted-foreground">
          {project.year}
        </span>
      </div>

      <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
          {project.title}
      </h3>

      <p className="mt-5 leading-7 text-muted-foreground">
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

      <ul className="mt-6 space-y-3">
        {project.metrics.map((metric) => (
    <li
      key={metric}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <span className="text-primary">✓</span>
      {metric}
    </li>
  ))}
</ul>

     <div className="mt-8 inline-flex items-center gap-2 font-medium text-primary">
  View Case Study
  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
  </div>
    </article>
  </Link>
  );
}