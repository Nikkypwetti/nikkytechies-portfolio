import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export function ProjectHeader({ project }: Props) {
  return (
    <header className="space-y-6">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to Projects
      </Link>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>{project.type}</span>
        <span>•</span>
        <span>{project.year}</span>
      </div>

      <h1 className="text-5xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="max-w-3xl text-lg text-muted-foreground">
        {project.description}
      </p>
    </header>
  );
}