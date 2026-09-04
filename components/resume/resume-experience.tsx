import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { experience } from "@/data/experience";

export function ResumeExperience() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Experience
            </p>

            <h2 className="text-3xl font-bold">Professional Experience</h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Professional experience across sales account management,
              executive administration, customer relationships and business
              operations.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-6">
          {experience.map((item, index) => (
            <FadeIn key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className="rounded-2xl border bg-card p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-1 font-medium text-primary">
                      {item.company}
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground md:text-right">
                    <p>{item.period}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 leading-7">
                      <span className="mt-2 text-primary">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
