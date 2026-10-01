import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

const capabilities = [
  {
    title: "CRM & Revenue Operations",
    description:
      "Design and support lifecycle stages, pipelines, ownership, lead routing, duplicate controls and CRM data governance so revenue teams can see what needs action.",
    proof: "Salesforce • HubSpot • Revenue Systems • Sales operations",
  },
  {
    title: "Business Systems & Operations",
    description:
      "Turn scattered tasks, client work and operating procedures into connected systems with clear ownership, delivery visibility and documented handoffs.",
    proof: "Notion • Airtable • ClickUp • SOPs • Process documentation",
  },
  {
    title: "Reporting & Data Quality",
    description:
      "Define governed KPIs and build reporting views for pipeline aging, weighted pipeline, forecast vs target, pipeline coverage, sales velocity, stage conversion and data quality.",
    proof: "Power BI • DAX • Salesforce Reports • PostgreSQL",
  },
  {
    title: "Workflow & AI Automation",
    description:
      "Build repeatable handoffs and integrations while keeping validation, human approval, idempotency, failure handling and operational accountability visible.",
    proof: "n8n • Make.com • Zapier • APIs • AI workflows",
  },
];

export function RecruiterFocus() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Business Value"
            title="What I help teams improve"
            description="My portfolio focuses on the operating systems behind clean customer data, predictable follow-up, reliable reporting, governed handoffs and consistent delivery."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.title} delay={index * 0.07}>
              <article className="h-full rounded-3xl border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {capability.title}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {capability.description}
                </p>
                <p className="mt-6 border-t pt-4 text-sm font-medium text-muted-foreground">
                  {capability.proof}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
