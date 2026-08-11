import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function ResumeCTA() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="rounded-3xl border bg-card px-8 py-16 text-center">
            <h2 className="text-4xl font-bold">
              Looking for Operations, Project or Automation Support?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I&apos;m available for remote operations, project coordination,
              CRM support and workflow automation opportunities.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Contact Me
                </Button>
              </Link>

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
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}