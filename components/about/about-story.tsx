import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function AboutStory() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Story
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              From Disconnected Workflows to Structured Operations
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.15}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                I enjoy organizing business processes and turning scattered
                tasks, client information, CRM data and project updates into
                structured systems that are easier to manage.
              </p>

              <p>
                My work combines operations, project coordination, CRM
                management and workflow automation. I use tools such as
                Airtable, Notion, HubSpot, ClickUp, Make.com and n8n to support
                client onboarding, project delivery, sales processes,
                documentation and follow-up.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                I approach projects by first understanding how the work is
                currently being handled, identifying gaps or repetitive steps,
                and then creating a clearer process for tasks, ownership,
                deadlines, communication and data.
              </p>

              <p>
                I also use automation where it adds value, such as routing
                leads, updating CRM records, creating follow-up tasks,
                generating meeting insights and keeping teams informed.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}