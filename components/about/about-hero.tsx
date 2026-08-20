import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function AboutHero() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Ganiyu Basirat Olanike
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Operations experience strengthened by CRM, data & automation skills.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            I combine 7+ years of professional experience across sales account
            management and executive administration with hands-on work in
            Revenue Operations, CRM, project coordination, reporting,
            documentation and AI-enabled workflow automation.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
