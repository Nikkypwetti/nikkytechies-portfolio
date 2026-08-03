import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex min-h-screen items-center">
      <Container>

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-primary">
            Error 404
          </p>

          <h1 className="mt-6 text-6xl font-bold md:text-8xl">
            Page Not Found
          </h1>

          <p className="mt-8 text-lg text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link href="/">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back Home
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </Section>
  );
}