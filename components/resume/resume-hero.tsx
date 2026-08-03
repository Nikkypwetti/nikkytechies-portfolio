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
            Resume
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Automation Systems Builder
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            I design Airtable CRMs, Notion workspaces, AI-powered workflows,
            and automation systems that help businesses reduce manual work,
            improve visibility, and scale operations.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-wrap gap-4">
             <a
  href="/resume/ganiyu-basirat-resume.pdf"
  download
>
  <Button
    size="lg"
    variant="outline"
  >
    Download Resume
  </Button>
</a>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </FadeIn>

      </Container>
    </Section>
  );
}