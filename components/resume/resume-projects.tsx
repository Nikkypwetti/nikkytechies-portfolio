import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ResumeProjects() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </p>

            <h2 className="text-3xl font-bold">
              Featured Projects
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Selected self-directed projects demonstrating client onboarding,
              project coordination, CRM operations, task and deadline
              management, documentation, AI integration and workflow
              automation.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={index * 0.08}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}