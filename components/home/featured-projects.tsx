import { projects } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { FadeIn } from "@/components/animations/fade-in";

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio Evidence"
            title="Selected Business Systems Case Studies"
            description="Self-directed case studies built around realistic operations, CRM, client delivery and AI workflow problems, with measurable scope and implementation evidence."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
