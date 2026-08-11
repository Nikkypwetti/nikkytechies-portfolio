import Link from "next/link";

import { Mail, Link as LinkIcon } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            description="I'm available for remote operations, project coordination, CRM, business systems and automation opportunities."
          />
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="size-6 text-primary" />

                <Link
                  href="mailto:olanike.basirat30@gmail.com"
                  className="hover:text-primary"
                >
                  olanike.basirat30@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <SiGithub size={20} />

                <Link
                  href="https://github.com/Nikkypwetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  github.com/Nikkypwetti
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <LinkIcon className="h-5 w-5" />

                <Link
                  href="https://www.linkedin.com/in/ganiyu-basirat-308ab9403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  linkedin.com/in/ganiyu-basirat-308ab9403
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="text-2xl font-semibold">
                Need help organizing your operations or workflows?
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                I&apos;m available for remote operations, project coordination,
                CRM support and automation opportunities. Feel free to reach
                out to discuss how I can support your team.
              </p>

              <Link href="mailto:olanike.basirat30@gmail.com">
                <Button size="lg" className="mt-8 w-full">
                  <Mail className="mr-2 size-5" />
                  Email Me
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}