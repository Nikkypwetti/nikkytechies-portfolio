import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ResumeProjects() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <h2 className="text-3xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Selected automation systems demonstrating CRM design,
            AI integrations and workflow automation.
          </p>
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

      </Container>
    </Section>
  );
}