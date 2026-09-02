import { projects } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { FadeIn } from "@/components/animations/fade-in";

const featuredSlugs = [
  "revenue-intelligence-production-simulation",
  "ai-revenue-intelligence-reporting-agent",
  "business-operations-client-project-system",
  "client-onboarding-automation",
];

export function FeaturedProjects() {
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio Evidence"
            title="Selected case studies for Operations, RevOps & Business Systems"
            description="Recruiter-ready evidence of how I structure customer data, operational workflows, reporting controls and automation — from business problem through implementation and verified results."
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
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
