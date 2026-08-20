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
              Professional Story
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              From executive administration and account management to connected business systems
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.15}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                My professional background started in executive administration,
                where I supported senior leadership with schedules,
                correspondence, meetings, documentation, action items and
                day-to-day priorities.
              </p>
              <p>
                I later worked in sales account management, building customer
                relationships, handling enquiries, maintaining account
                information, identifying customer needs and coordinating
                follow-up across the sales process.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                Those roles gave me practical exposure to the operational
                problems behind customer-facing work: scattered information,
                inconsistent follow-up, unclear ownership, repetitive tasks and
                limited visibility into what needs attention next.
              </p>
              <p>
                I now combine that experience with HubSpot, Airtable, Notion,
                ClickUp, Google Sheets, n8n, Make.com and AI-enabled workflows
                to structure CRM data, pipelines, onboarding, projects,
                reporting, documentation and follow-up.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
