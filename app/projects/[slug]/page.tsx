import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import { ProjectHeader } from "@/components/projects/case-study/project-header";
import { ProjectProblem } from "@/components/projects/case-study/project-problem";
import { ProjectSolution } from "@/components/projects/case-study/project-solution";
import { ProjectArchitecture } from "@/components/projects/case-study/project-architecture";
import { ProjectTechStack } from "@/components/projects/case-study/project-tech-stack";
import { ProjectResults } from "@/components/projects/case-study/project-results";
import { ProjectGallery } from "@/components/projects/case-study/project-gallery";
import { ProjectImpact } from "@/components/projects/case-study/project-impact";
import { ProjectBeforeAfter } from "@/components/projects/case-study/project-before-after";
import { ProjectWorkflow } from "@/components/projects/case-study/project-workflow";
import { ProjectOverview } from "@/components/projects/case-study/project-overview";
import { ProjectNavigation } from "@/components/projects/case-study/project-navigation";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectAutomation } from "@/components/projects/case-study/project-automation";



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
  <main className="mx-auto max-w-6xl space-y-28 px-6 py-24">

  <ProjectHeader project={project} />

  <FadeIn>
    <ProjectOverview overview={project.overview} />
  </FadeIn>

  <FadeIn delay={0.05}>
    <ProjectProblem problem={project.problem} />
  </FadeIn>

  <FadeIn delay={0.10}>
    <ProjectBeforeAfter
      before={project.before}
      after={project.after}
    />
  </FadeIn>

  <FadeIn delay={0.15}>
    <ProjectSolution solution={project.solution} />
  </FadeIn>

  <FadeIn delay={0.25}>
    <ProjectAutomation
      automation={project.automation}
    />
  </FadeIn>

  <FadeIn delay={0.20}>
    <ProjectWorkflow workflow={project.workflow} />
  </FadeIn>

  <FadeIn delay={0.30}>
    <ProjectArchitecture architecture={project.architecture} />
  </FadeIn>

  <FadeIn delay={0.30}>
    <ProjectTechStack
      technologies={project.technologies}
    />
  </FadeIn>

  <FadeIn delay={0.35}>
    <ProjectImpact
      stats={project.stats}
      metrics={project.metrics}
    />
  </FadeIn>

  {/* <FadeIn delay={0.40}>
    <ProjectResults results={project.results} />
  </FadeIn>

  <FadeIn delay={0.40}>
    <ProjectGallery gallery={project.gallery} />
  </FadeIn>

  <FadeIn delay={0.45}>
    <ProjectNavigation
      currentProject={project}
      projects={projects}
    />
  </FadeIn> */}
  <FadeIn delay={0.40}>
  <ProjectResults results={project.results} />
</FadeIn>

<ProjectGallery gallery={project.gallery} />

<FadeIn delay={0.45}>
  <ProjectNavigation
    currentProject={project}
    projects={projects}
  />
</FadeIn>

</main>
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Nikky Techies",
    };
  }

  return {
    title: `${project.title} | Nikky Techies`,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage
        ? [project.heroImage]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.heroImage
        ? [project.heroImage]
        : [],
    },
  };
}