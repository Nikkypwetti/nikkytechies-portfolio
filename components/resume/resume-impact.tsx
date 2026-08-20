import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const highlights = [
  {
    value: "7+",
    label: "Years Professional Experience",
    description: "Sales/account management and executive administration",
  },
  {
    value: "18-step",
    label: "Client Onboarding Workflow",
    description: "Supports 5 service packages across 4 core systems",
  },
  {
    value: "14-step",
    label: "AI Meeting Workflow",
    description: "Extracts 7 structured insights across 4 synchronized systems",
  },
  {
    value: "5",
    label: "Lead Qualification Routes",
    description: "Delivered through 2 connected n8n workflows",
  },
];

export function ResumeImpact() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Career & Project Impact
            </p>

            <h2 className="text-3xl font-bold">Quantified Experience</h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Verified professional experience and measurable project scope
              across operations, CRM, revenue systems and automation.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <div className="h-full rounded-2xl border bg-card p-7">
                <p className="text-4xl font-bold text-primary">{item.value}</p>
                <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
