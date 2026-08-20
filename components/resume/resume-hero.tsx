import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function ResumeHero() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Master Resume
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Operations, RevOps & Business Systems
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            I combine 7+ years of professional experience across sales account
            management and executive administration with hands-on CRM,
            project coordination, reporting, data quality, business systems and
            AI workflow automation experience.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
            My work spans HubSpot, Airtable, Notion, ClickUp, Google Workspace,
            spreadsheets, n8n, Make.com, Zapier, AI integrations, APIs and
            technical systems used to organize customer journeys, revenue
            processes, projects, data and operational workflows.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/resume/ganiyu-basirat-resume.pdf" download>
              <Button size="lg">Download ATS Resume</Button>
            </a>

            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
