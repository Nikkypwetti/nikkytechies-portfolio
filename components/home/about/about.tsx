import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

export function About() {
  return (
    <Section id="about">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About Me"
            title="I build systems that let businesses focus on growth instead of repetitive work."
            description="My passion is helping businesses replace manual processes with reliable systems powered by Airtable, Notion, AI, and modern automation tools."
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-8 text-muted-foreground">
                I'm an Automation Consultant focused on designing business
                systems that improve efficiency and eliminate repetitive work.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                I build custom Airtable CRMs, Notion workspaces, AI-powered
                workflows, and integrations using Make.com, n8n, HubSpot,
                Zapier, and modern APIs.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                Every solution is designed to save time, reduce errors, and
                give teams a single source of truth for their operations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">10+</h3>
                <p className="mt-2 text-muted-foreground">
                  Automation Projects
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">8+</h3>
                <p className="mt-2 text-muted-foreground">
                  Platforms Used
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">80%</h3>
                <p className="mt-2 text-muted-foreground">
                  Manual Work Reduced
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">AI</h3>
                <p className="mt-2 text-muted-foreground">
                  Automation Focus
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}