import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Database,
  TrendingUp,
  Workflow,
} from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const skills = [
  {
    title: "Revenue & Sales Operations",
    description: "Supporting lead management, pipeline processes, account follow-up, customer journeys and sales operations workflows.",
    icon: TrendingUp,
  },
  {
    title: "CRM & Data Operations",
    description: "Managing structured customer, lead and project information, lifecycle stages, data quality and reporting across CRM systems.",
    icon: Database,
  },
  {
    title: "Project & Client Operations",
    description: "Coordinating onboarding, tasks, deadlines, priorities, dependencies, status updates and delivery follow-up.",
    icon: ClipboardList,
  },
  {
    title: "Executive & Administrative Operations",
    description: "Supporting schedules, correspondence, meetings, documentation, action items, email and calendar coordination.",
    icon: CalendarDays,
  },
  {
    title: "Reporting & Process Improvement",
    description: "Using spreadsheets, dashboards, validation and operational analysis to identify gaps and improve visibility.",
    icon: BarChart3,
  },
  {
    title: "Workflow & AI Automation",
    description: "Connecting business tools with n8n, Make.com, Zapier, APIs, webhooks and AI services to reduce repetitive work.",
    icon: Workflow,
  },
];

export function AboutSkills() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Core Capabilities
            </p>
            <h2 className="text-4xl font-bold">What I Can Own or Support</h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                  <Icon className="mb-6 size-10 text-primary" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{skill.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
