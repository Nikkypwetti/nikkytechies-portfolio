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
          {projects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex rounded-full border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Explore all case studies
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
