import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

import { technologies } from "@/data/technologies";
import { TechBadge } from "@/components/projects/tech-badge";

const techStack = Object.values(technologies);

export function AboutTechStack() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Technology Stack
            </p>

            <h2 className="text-4xl font-bold">
              Tools I Use to Build Automation Systems
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
                I build business systems using Airtable, Notion, Make.com,
                Zapier, n8n, AI services, APIs, and modern cloud tools to
                create reliable automations that save time and improve operations.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <FadeIn
              key={tech.id}
              delay={index * 0.04}
            >
              <TechBadge tech={tech} />
            </FadeIn>
          ))}
        </div>

      </Container>
    </Section>
  );
}