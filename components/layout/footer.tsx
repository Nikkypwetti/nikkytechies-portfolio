import Link from "next/link";

import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="font-semibold">
              NikkyTechies
            </h3>

            <p className="text-sm text-muted-foreground">
              Building Airtable, Notion & AI Systems.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/projects"
              className="hover:text-primary"
            >
              Projects
            </Link>

            <Link
              href="/resume"
              className="hover:text-primary"
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className="hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NikkyTechies.
          Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}