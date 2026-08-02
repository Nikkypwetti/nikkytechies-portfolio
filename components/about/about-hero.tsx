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
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            I Design Business Systems That Remove Repetitive Work.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-3xl text-xl text-muted-foreground leading-relaxed">
            I'm an Automation Systems Builder focused on Airtable,
            Notion, Make.com, n8n, AI integrations, and CRM automation.
            I help businesses replace manual processes with reliable,
            scalable workflows that save time and improve operations.
          </p>
        </FadeIn>

      </Container>
    </Section>
  );
}