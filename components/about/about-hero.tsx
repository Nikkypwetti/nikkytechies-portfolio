import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function AboutHero() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            I Organize Client Operations, Projects & Business Workflows.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            I focus on operations, project coordination, CRM systems and
            workflow automation. I build structured systems for client
            onboarding, task and deadline tracking, documentation, meeting
            follow-up and business processes using Airtable, Notion, HubSpot,
            Make.com, n8n and AI.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}