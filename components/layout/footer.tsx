import Link from "next/link";

import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              <span className="text-foreground">Nikky</span>
              <span className="text-primary">Techies</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Supporting organized client operations, project coordination,
              CRM workflows and business automation through structured systems
              built with Airtable, Notion, HubSpot, Make.com, n8n and AI.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Let&apos;s work together →
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="transition-colors hover:text-foreground"
              >
                Projects
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-foreground"
              >
                About
              </Link>

              <Link
                href="/resume"
                className="transition-colors hover:text-foreground"
              >
                Resume
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Operations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              What I Support
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Project Coordination</span>
              <span>Client Onboarding</span>
              <span>Task & Deadline Tracking</span>
              <span>CRM Operations</span>
              <span>SOP Documentation</span>
              <span>Workflow Automation</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NikkyTechies. All rights reserved.
          </p>

          <p>
            Operations • Project Coordination • CRM • Automation
          </p>
        </div>
      </Container>
    </footer>
  );
}