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
            title="I build systems that keep client work organized and moving."
            description="I combine operations, project coordination, CRM systems and automation to help teams manage work more clearly and efficiently."
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-8 text-muted-foreground">
                I focus on operations, project coordination and business
                systems that help teams manage clients, projects, tasks,
                deadlines and documentation in one organized workflow.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                I build Airtable CRMs, Notion workspaces, client onboarding
                systems, project tracking workflows and AI-powered
                automations using Make.com, n8n, HubSpot, Zapier and modern
                APIs.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                My projects include client onboarding, task and deadline
                management, SOP documentation, meeting follow-up, CRM
                operations and automated workflows that reduce repetitive
                administrative work.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">
                  4
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Featured Case Studies
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">
                  8+
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Platforms Used
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">
                  Ops
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Project Coordination
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-4xl font-bold text-primary">
                  AI
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Workflow Automation
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}