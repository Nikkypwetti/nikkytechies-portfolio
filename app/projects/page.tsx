import type { Metadata } from "next";
import { projects } from "@/data/projects";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectCard } from "@/components/projects/project-card";

export default function ProjectsPage() {
  return (
    <Section className="pt-28 pb-20">
      <Container>

        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects & Case Studies"
            description="A collection of Airtable, Notion, CRM, and AI automation systems designed to eliminate manual work, improve visibility, and streamline business operations."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </FadeIn>

      </Container>
    </Section>
  );
};

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Airtable, Notion, CRM and AI automation systems built by Nikky Techies.",
};