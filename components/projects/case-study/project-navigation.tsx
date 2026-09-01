import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid2x2 } from "lucide-react";

import type { Project } from "@/types/project";

type Props = {
  currentProject: Project;
  projects: Project[];
};

export function ProjectNavigation({
  currentProject,
  projects,
}: Props) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentProject.slug
  );

  const previous =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : null;

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <section className="border-t pt-12">
      <div className="grid gap-6 md:grid-cols-3">

        {/* Previous */}

        <div>
          {previous && (
            <Link
              href={`/projects/${previous.slug}`}
              scroll
              prefetch
              className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft className="size-4" />
                Previous Project
              </span>

              <h3 className="font-semibold">
                {previous.title}
              </h3>
            </Link>
          )}
        </div>

        {/* All Projects */}

        <Link
          href="/projects"
          scroll
          prefetch
          className="group flex h-full flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
        >
          <Grid2x2 className="mb-3 size-8 text-primary" />

          <span className="font-semibold">
            All Projects
          </span>
        </Link>

        {/* Next */}

        <div>
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              scroll
              prefetch
              className="group flex h-full flex-col rounded-2xl border bg-card p-6 text-right transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="mb-3 inline-flex items-center justify-end gap-2 text-sm text-muted-foreground">
                Next Project
                <ArrowRight className="size-4" />
              </span>

              <h3 className="font-semibold">
                {next.title}
              </h3>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
