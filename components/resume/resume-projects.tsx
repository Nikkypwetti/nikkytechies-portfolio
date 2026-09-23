import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { masterResume } from "@/data/master-resume";

export function ResumeProjects() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Selected Project Experience
            </p>

            <h2 className="text-3xl font-bold">
              CRM, Revenue Systems, Reporting & Automation
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              The five projects selected in my current master resume, with links
              to the fuller portfolio evidence.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6">
          {masterResume.selectedProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.06}>
              <article className="rounded-2xl border bg-card p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm font-medium text-primary">
                      {project.stack}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="shrink-0 text-sm font-semibold text-primary hover:underline"
                  >
                    View case study
                  </Link>
                </div>

                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-2 text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-12 flex justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
