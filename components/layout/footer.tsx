import Link from "next/link";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Nikky</span>
              <span className="text-primary">Techies</span>
            </Link>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
              Portfolio of Ganiyu Basirat Olanike — combining professional
              experience in sales account management and executive
              administration with hands-on RevOps, CRM, project operations,
              reporting, business systems and workflow automation work.
            </p>
            <Link href="/contact" className="mt-5 inline-flex text-sm font-medium text-primary hover:underline">
              Discuss an opportunity →
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
              <Link href="/projects" className="transition-colors hover:text-foreground">Projects</Link>
              <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
              <Link href="/resume" className="transition-colors hover:text-foreground">Resume</Link>
              <Link href="/contact" className="transition-colors hover:text-foreground">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Career Focus</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Revenue & Sales Operations</span>
              <span>CRM & Business Systems</span>
              <span>Project Coordination</span>
              <span>Customer Operations</span>
              <span>Reporting & Data Quality</span>
              <span>AI Workflow Automation</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NikkyTechies. All rights reserved.</p>
          <p>Operations • RevOps • CRM • Business Systems • AI Automation</p>
        </div>
      </Container>
    </footer>
  );
}
