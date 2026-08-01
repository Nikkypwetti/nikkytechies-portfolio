import Link from "next/link";
import { ArrowLeft, Calendar, FolderGit2 } from "lucide-react";

import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export function ProjectHeader({ project }: Props) {
  return (
    <header className="space-y-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FolderGit2 className="size-4" />
            {project.type}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            {project.year}
          </div>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-xl leading-8 text-muted-foreground">
          {project.description}
        </p>
      </div>
    </header>
  );
}