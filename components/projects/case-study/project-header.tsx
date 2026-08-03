import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export function ProjectHeader({
  project,
}: Props) {
  return (
    <header className="space-y-10">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-6">

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {project.type}
          </span>

          <span className="rounded-full border px-4 py-1 text-sm">
            {project.year}
          </span>

        </div>

        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-xl text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">

          {project.demo && (
  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground"
  >
    Live Demo
    <ExternalLink className="size-4" />
  </a>
)}

{project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border px-5 py-3"
  >
    GitHub
    <SiGithub className="size-4" />
  </a>
)}

        </div>

      </div>

      {project.heroImage && (
        <div className="overflow-hidden rounded-3xl border shadow-xl">

          <Image
            src={project.heroImage}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full object-cover"
            priority
          />

        </div>
      )}

    </header>
  );
}