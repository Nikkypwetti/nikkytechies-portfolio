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
              Let's Build Your Next Automation System
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              I'm available for Airtable, Notion, AI workflow and business automation projects.
            </p>

            <div className="mt-10 flex justify-center gap-4">

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