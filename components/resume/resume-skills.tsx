import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { skills } from "@/data/skills";

export function ResumeSkills() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Competencies
            </p>

            <h2 className="text-3xl font-bold">Core Business & Systems Skills</h2>

            <p className="mt-4 text-muted-foreground">
              Capabilities spanning revenue operations, CRM, project delivery,
              executive support, analytics, documentation, automation and
              technical systems.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeIn key={skill.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                  <Icon className="mb-5 h-8 w-8 text-primary" />

                  <h3 className="text-xl font-semibold">{skill.title}</h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
