import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";

const capabilities = [
  {
    title: "CRM & Revenue Operations",
    description:
      "Structure lifecycle stages, pipelines, ownership, follow-up and CRM data so revenue teams can see what needs action.",
    proof: "HubSpot • CRM governance • Sales operations",
  },
  {
    title: "Business Systems & Operations",
    description:
      "Turn scattered tasks, client work and operating procedures into connected systems with clear ownership and delivery visibility.",
    proof: "Notion • Airtable • ClickUp • SOPs",
  },
  {
    title: "Reporting & Data Quality",
    description:
      "Create reliable KPI definitions, management dashboards and data-quality controls that support faster operational decisions.",
    proof: "Power BI • PostgreSQL • Reporting controls",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repeatable handoffs, notifications and integrations while keeping validation, failure handling and human accountability visible.",
    proof: "n8n • Make.com • Zapier • APIs",
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
            description="My portfolio focuses on the operational systems behind clean customer data, predictable follow-up, reliable reporting and consistent delivery."
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
