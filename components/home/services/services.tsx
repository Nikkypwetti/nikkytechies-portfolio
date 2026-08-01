import { Database, Workflow, Bot, Briefcase } from "lucide-react";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const services = [
  {
    title: "Airtable Systems",
    description:
      "Custom CRMs, relational databases, interfaces, and automations.",
    icon: Database,
  },
  {
    title: "Notion Workspaces",
    description:
      "Team hubs, project management systems, SOPs, and internal knowledge bases.",
    icon: Briefcase,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks using Make.com, n8n, Zapier, and APIs.",
    icon: Workflow,
  },
  {
    title: "AI Automation",
    description:
      "Integrate Groq, Claude, Gemini, and OpenAI into business workflows.",
    icon: Bot,
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Business systems that save time and scale operations."
        description="I build modern no-code and low-code solutions that reduce manual work, improve collaboration, and automate repetitive processes."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="mb-4 size-10 text-primary" />

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}