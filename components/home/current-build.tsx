import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/animations/fade-in";

export function CurrentBuild() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border bg-card p-7 shadow-sm md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Current Portfolio Build
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-semibold">
                In Progress
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  ClickUp Operations Build — GrowOps Agency
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                  Building a full work-execution system for a simulated 12-person B2B services agency:
                  four ClickUp Spaces, 12 Lists, team-specific workflows, management dashboards,
                  SOPs, adoption controls and HubSpot-to-ClickUp handoffs orchestrated with n8n.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  ["4", "Spaces"],
                  ["12", "Lists"],
                  ["8", "n8n automations"],
                  ["3", "Dashboards"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border bg-muted/30 p-4">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/projects/clickup-operations-growops-agency"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-primary"
            >
              View build scope
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
