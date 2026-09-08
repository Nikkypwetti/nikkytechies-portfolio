import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { allProjects } from "@/data/all-projects";

const highlights = [
  { value: "7+", label: "Years Professional Experience" },
  { value: String(allProjects.length), label: "Portfolio Case Studies" },
  { value: "10+", label: "Platforms & Tools Across Portfolio" },
  { value: "4", label: "Core Areas: CRM • RevOps • Operations • Business Systems" },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Professional Snapshot"
            title="Operations experience backed by hands-on CRM, RevOps and Business Systems work."
            description="My background combines customer-facing sales, executive administration and hands-on work across CRM, Revenue Operations, Business Systems, reporting and workflow automation."
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-8 text-muted-foreground">
                I worked as a Sales Account Manager, managing customer
                relationships, sales enquiries, account information and
                follow-up. Before that, I supported senior leadership as an
                Executive Secretary, coordinating schedules, correspondence,
                documentation and day-to-day priorities.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                I now combine that operational experience with hands-on work in
                HubSpot, Airtable, Notion, ClickUp, Google Sheets, n8n,
                Make.com and related systems to structure pipelines, projects,
                client onboarding, reporting and business workflows.
              </p>

              <p className="text-lg leading-8 text-muted-foreground">
                My portfolio case studies are self-directed projects designed
                around realistic business problems, with clear workflow logic,
                measurable scope, documentation and implementation evidence.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-card p-6">
                  <h3 className="text-4xl font-bold text-primary">{item.value}</h3>
                  <p className="mt-2 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
