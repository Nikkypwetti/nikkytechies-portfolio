import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import { services } from "@/data/services";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <Section id="services">
      <Container>

        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Automation Systems That Help Businesses Scale"
            description="I design modern business systems that reduce manual work, improve visibility, and streamline operations."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </FadeIn>

      </Container>
    </Section>
  );
}