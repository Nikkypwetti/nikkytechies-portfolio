import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { masterResume } from "@/data/master-resume";

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
            {masterResume.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-5 max-w-5xl text-lg font-semibold leading-8 text-primary md:text-xl">
            {masterResume.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            My master profile combines 7+ years of professional experience in
            sales account management and executive/administrative operations
            with hands-on Salesforce, HubSpot, Revenue Systems, Power BI,
            reporting, data and workflow automation project evidence.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/resume/download" download>
              <Button size="lg">Download Master ATS Resume</Button>
            </a>

            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Portfolio Evidence
              </Button>
            </Link>

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
