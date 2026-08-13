import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ganiyu Basirat Olanike for remote Operations, Revenue Operations, Project Coordination, CRM, Sales Operations and Business Systems opportunities.",
};

const contactLinks = [
  {
    label: "Email",
    value: "olanike.basirat30@gmail.com",
    href: "mailto:olanike.basirat30@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Ganiyu Basirat Olanike",
    href: "https://www.linkedin.com/in/ganiyu-basirat-308ab9403",
    icon: CiLinkedin,
  },
  {
    label: "GitHub",
    value: "Nikkypwetti",
    href: "https://github.com/Nikkypwetti",
    icon: SiGithub,
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Let&apos;s Connect
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                I&apos;m open to remote opportunities in Operations, Revenue
                Operations, Project Coordination, CRM Administration, Sales
                Operations and Business Systems.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                I work with tools such as Airtable, Notion, HubSpot, ClickUp,
                Make.com, n8n, Zapier, Google Workspace and Slack to support
                client operations, CRM workflows, project delivery, reporting,
                documentation and workflow automation.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn delay={0.15}>
              <div className="rounded-3xl border bg-card p-8 md:p-10">
                <h2 className="text-3xl font-bold">
                  Open to Remote Opportunities
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                  I&apos;m interested in opportunities where I can support
                  project coordination, CRM operations, client onboarding,
                  sales processes, reporting, documentation, task management
                  and day-to-day business operations.
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                  If my experience and projects match what your team is looking
                  for, feel free to reach out by email or connect with me on
                  LinkedIn.
                </p>

                <a
                  href="mailto:olanike.basirat30@gmail.com?subject=Operations%20or%20RevOps%20Opportunity"
                  className="mt-8 inline-block"
                >
                  <Button size="lg">
                    <Mail className="mr-2 size-4" />
                    Contact Me
                  </Button>
                </a>

                <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-5 text-primary" />
                  Lagos, Nigeria · Available for remote opportunities
                </div>
              </div>
            </FadeIn>

            <div className="space-y-5">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn
                    key={item.label}
                    delay={0.2 + index * 0.08}
                  >
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-5 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="mt-1 font-semibold group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}