import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TechStack } from "./tech-stack";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
  return (
    <Section className="pt-28">
      <Container>
        <div className="max-w-5xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ganiyu Basirat Olanike • Operations • RevOps • CRM • Business Systems
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              I Connect Revenue Operations, CRM & Project Delivery Into Clear Workflows
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-muted-foreground">
              I bring 7+ years of professional experience across sales account
              management and executive administration, combined with hands-on
              CRM, reporting, project coordination and AI workflow automation
              projects.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
              I work across HubSpot, Airtable, Notion, ClickUp, Google
              Workspace, n8n and Make.com to organize pipelines, customer
              information, project delivery, reporting, documentation and
              follow-up.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">View Case Studies</Button>
              </Link>

              <Link href="/resume">
                <Button variant="outline" size="lg">
                  View ATS Resume
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Lagos, Nigeria • Open to remote worldwide opportunities
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <TechStack />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
