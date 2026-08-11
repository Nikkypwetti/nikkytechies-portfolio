import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function ApplicationNote() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Application Note
            </p>

            <h2 className="text-2xl font-bold md:text-3xl">
              Operations & Project Coordination VA
            </h2>

            <div className="mt-8 space-y-5 leading-7 text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  APPLICATION FOR: Operations & Project Coordination VA
                </strong>
              </p>

              <p>Hello Hiring Team,</p>

              <p>
                My name is Ganiyu Basirat, and I am applying for the Operations
                & Project Coordination VA position.
              </p>

              <p>
                I have completed the online assessment and received an
                assessment score of 81%.
              </p>

              <p>
                I am interested in the opportunity to contribute my skills,
                experience, and reliability to your team. I have attached my
                CV/portfolio for your review and would be happy to provide any
                additional information needed.
              </p>

              <p>
                Email:{" "}
                <Link
                  href="mailto:olanike.basirat30@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  olanike.basirat30@gmail.com
                </Link>
              </p>

              <p>Thank you for your time and consideration.</p>

              <p>
                Best regards,
                <br />
                Ganiyu Basirat
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}