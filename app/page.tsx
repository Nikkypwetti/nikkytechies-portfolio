import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <h1 className="text-5xl font-bold tracking-tight">
            Business Systems Builder
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Helping businesses streamline operations with Airtable,
            Notion, HubSpot, AI, and workflow automation.
          </p>
        </Container>
      </Section>
    </>
  );
}