import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

const platformGroups = [
  {
    title: "CRM & Revenue Operations",
    tools: ["HubSpot", "CRM data governance", "Sales pipelines", "Lifecycle workflows"],
    note: "Customer relationships, pipeline structure, follow-up and revenue operations.",
  },
  {
    title: "Operations & Project Delivery",
    tools: ["ClickUp", "Airtable", "Notion", "Asana", "Trello"],
    note: "Work execution, client delivery, task ownership, documentation and operating systems.",
  },
  {
    title: "Automation & Integrations",
    tools: ["n8n", "Make.com", "Zapier", "REST APIs", "Webhooks"],
    note: "n8n is my primary workflow-orchestration platform; Make.com and Zapier support additional integration use cases.",
  },
  {
    title: "Reporting & Data",
    tools: ["Power BI", "PostgreSQL", "Google Sheets", "Data quality controls"],
    note: "Management reporting, operational metrics, governed datasets and decision support.",
  },
  {
    title: "Collaboration & Business Tools",
    tools: ["Slack", "Google Workspace", "Gmail", "Google Calendar"],
    note: "Team communication, scheduling, documentation, operational follow-up and handoffs.",
  },
];

export function CorePlatformsTools() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Core Platforms & Tools"
            title="Tools organized by the business work they support"
            description="I use tools as parts of an operating stack: CRM for customer truth, work-management systems for execution, automation for handoffs, and reporting for decisions."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {platformGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border bg-card p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                  <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border bg-muted/40 px-3 py-1.5 text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {group.note}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
