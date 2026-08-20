import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { technologies } from "@/data/technologies";
import { TechBadge } from "@/components/projects/tech-badge";

const techStack = [
  technologies.airtable,
  technologies.hubspot,
  technologies.notion,
  technologies.googleSheets,
  technologies.make,
  technologies.n8n,
  technologies.zapier,
  technologies.groq,
  technologies.slack,
  technologies.gmail,
];

export function AboutTechStack() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Business Systems Toolkit
            </p>
            <h2 className="text-4xl font-bold">
              Platforms I Use Across CRM, Operations & Automation
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My portfolio work demonstrates practical use of CRM, workspace,
              spreadsheet, collaboration and automation tools to connect
              customer data, projects, communication and follow-up.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <FadeIn key={tech.id} delay={index * 0.04}>
              <TechBadge tech={tech} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
