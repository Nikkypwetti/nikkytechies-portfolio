import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import { ProjectHeader } from "@/components/projects/case-study/project-header";
import { ProjectProblem } from "@/components/projects/case-study/project-problem";
import { ProjectSolution } from "@/components/projects/case-study/project-solution";
import { ProjectArchitecture } from "@/components/projects/case-study/project-architecture";
import { ProjectTechStack } from "@/components/projects/case-study/project-tech-stack";
import { ProjectResults } from "@/components/projects/case-study/project-results";
import { ProjectGallery } from "@/components/projects/case-study/project-gallery";
import { ProjectMetrics } from "@/components/projects/case-study/project-metrics";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl space-y-20 px-6 py-20">
      <ProjectHeader project={project} />

      <ProjectProblem problem={project.problem} />

      <ProjectSolution solution={project.solution} />

      <ProjectArchitecture architecture={project.architecture} />

      <ProjectTechStack technologies={project.technologies} />

      <ProjectResults results={project.results} />

      <ProjectMetrics metrics={project.metrics} />

      <ProjectGallery />
    </main>
  );
}