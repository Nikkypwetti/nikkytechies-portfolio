import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image"; // Added for the Hero Image

import { allProjects as projects } from "@/data/all-projects";
import { applyProjectEvidenceOverride } from "@/data/project-evidence-overrides";

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
import { ProjectPlatforms } from "@/components/projects/case-study/project-platforms";
import { ProjectNavigation } from "@/components/projects/case-study/project-navigation";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectAutomation } from "@/components/projects/case-study/project-automation";
import { ProjectScrollToTop } from "@/components/projects/project-scroll-to-top";
import { ProjectGovernance } from "@/components/projects/case-study/project-governance";
import { ProjectDocumentation } from "@/components/projects/case-study/project-documentation";
import { ProjectRecruiterSummary } from "@/components/projects/case-study/project-recruiter-summary";
import { ProjectInterviewGuide } from "@/components/projects/case-study/project-interview-guide";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const baseProject = projects.find((p) => p.slug === slug);

  if (!baseProject) {
    notFound();
  }

  const project = applyProjectEvidenceOverride(baseProject);

  return (
    <main className="mx-auto max-w-6xl space-y-28 px-6 py-24">
      <ProjectScrollToTop />

      {/* 1. Header */}
      <ProjectHeader project={project} />

      {/* 2. Platforms */}
      <FadeIn delay={0.02}>
        <ProjectPlatforms platforms={project.platforms} status={project.status} />
      </FadeIn>

      {/* 3. Recruiter Summary */}
      <FadeIn delay={0.04}>
        <ProjectRecruiterSummary summary={project.recruiterSummary} />
      </FadeIn>

      {/* 4. Hero Image (Just 1 image) */}
      {project.heroImage && (
        <FadeIn delay={0.06}>
          <div className="overflow-hidden rounded-3xl border bg-card">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority // This ensures the hero image loads immediately
            />
          </div>
        </FadeIn>
      )}

      {/* 5. Overview */}
      <FadeIn delay={0.08}>
        <ProjectOverview overview={project.overview} />
      </FadeIn>

      {/* 6. Problem */}
      <FadeIn delay={0.10}>
        <ProjectProblem problem={project.problem} />
      </FadeIn>

      {/* 7. Solution */}
      <FadeIn delay={0.12}>
        <ProjectSolution solution={project.solution} />
      </FadeIn>

      {/* 8. Project Gallery (Full Gallery - now animating perfectly item by item) */}
      <ProjectGallery gallery={project.gallery} />

      {/* 9. Architecture */}
      <FadeIn delay={0.15}>
        <ProjectArchitecture architecture={project.architecture} />
      </FadeIn>

      {/* 10. Results */}
      <FadeIn delay={0.18}>
        <ProjectResults results={project.results} />
      </FadeIn>

      {/* --- Everything else follows below --- */}

      <FadeIn delay={0.20}>
        <ProjectBeforeAfter before={project.before} after={project.after} />
      </FadeIn>

      <FadeIn delay={0.22}>
        <ProjectGovernance governance={project.governance} />
      </FadeIn>

      <FadeIn delay={0.25}>
        <ProjectAutomation automation={project.automation} />
      </FadeIn>

      <FadeIn delay={0.28}>
        <ProjectWorkflow workflow={project.workflow} />
      </FadeIn>

      <FadeIn delay={0.30}>
        <ProjectDocumentation documentation={project.documentation} />
      </FadeIn>

      <FadeIn delay={0.32}>
        <ProjectTechStack technologies={project.technologies} />
      </FadeIn>

      <FadeIn delay={0.35}>
        <ProjectImpact stats={project.stats} metrics={project.metrics} />
      </FadeIn>

      <FadeIn delay={0.40}>
        <ProjectInterviewGuide talkingPoints={project.interviewTalkingPoints} />
      </FadeIn>

      <FadeIn delay={0.45}>
        <ProjectNavigation currentProject={project} projects={projects} />
      </FadeIn>
    </main>
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const baseProject = projects.find((project) => project.slug === slug);

  if (!baseProject) {
    return {
      title: "Project Not Found | Nikky Techies",
    };
  }

  const project = applyProjectEvidenceOverride(baseProject);

  return {
    title: `${project.title} | Nikky Techies`,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : [],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}