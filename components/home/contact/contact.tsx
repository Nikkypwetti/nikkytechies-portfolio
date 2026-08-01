import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  Calendar,
} from "lucide-react";

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
            title="Let's Build Something Amazing Together"
            description="Whether you need an Airtable CRM, AI workflow, Notion workspace, or business automation, I'd love to hear about your project."
          />
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <FadeIn delay={0.2}>
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="size-6 text-primary" />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Github className="size-6 text-primary" />
                <Link
                  href="https://github.com/Nikkypwetti"
                  target="_blank"
                  className="hover:text-primary"
                >
                  github.com/Nikkypwetti
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="size-6 text-primary" />
                <Link
                  href="https://linkedin.com/in/ganiyu-basirat"
                  target="_blank"
                  className="hover:text-primary"
                >
                  linkedin.com/in/ganiyu-basirat
                </Link>
              </div>

            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="rounded-2xl border bg-card p-8">

              <h3 className="text-2xl font-semibold">
                Ready to automate your business?
              </h3>

              <p className="mt-4 text-muted-foreground">
                Book a discovery call and let's discuss how automation can
                save your team hours every week.
              </p>

             <Link href="mailto:olanike.nikkytechies@proton.me">
                <Button size="lg" className="mt-8 w-full">
                  <Calendar className="mr-2 size-5" />
                  Book a Discovery Call
                </Button>
              </Link>

            </div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}