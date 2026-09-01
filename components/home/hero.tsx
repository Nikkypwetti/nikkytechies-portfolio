import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TechStack } from "./tech-stack";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_45%)]" />
      <Container>
        <div className="max-w-6xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Ganiyu Basirat Olanike • Operations • RevOps • CRM • Business Systems
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-bold tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Turning customer data and operations into systems teams can run.
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-muted-foreground">
              Operations and business systems professional connecting CRM,
              revenue processes, project delivery, reporting and automation—backed
              by 7+ years across sales account management and executive administration.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
              Explore evidence-based case studies built with HubSpot, Airtable,
              Notion, ClickUp, Google Workspace, n8n, Make.com and Power BI.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-7">View Case Studies</Button>
              </Link>

              <Link href="/resume">
                <Button variant="outline" size="lg" className="rounded-full px-7">
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
