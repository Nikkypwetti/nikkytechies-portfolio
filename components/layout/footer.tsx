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
              NikkyTechies
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Building Airtable, Notion, CRM, automation and AI-powered
              systems that help businesses replace repetitive manual work
              with scalable workflows.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
            >
              Let&apos;s build a system →
            </Link>
          </div>

          {/* Quick Links */}
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

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">
              What I Build
            </h3>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Airtable CRM Systems</span>
              <span>Notion Workspaces</span>
              <span>Business Automation</span>
              <span>AI Workflows</span>
              <span>CRM Integrations</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NikkyTechies. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}