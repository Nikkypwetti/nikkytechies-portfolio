import { ExternalLink } from "lucide-react";

type DocumentationItem = {
  title: string;
  description: string;
  href: string;
  status?: "Completed" | "Planned";
};

type Props = {
  documentation?: DocumentationItem[];
};

export function ProjectDocumentation({ documentation }: Props) {
  if (!documentation || documentation.length === 0) return null;

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Operating Documentation
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          Governance & Requirements Artifacts
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          Supporting documents connect business requirements and GTM rules to
          Salesforce controls, validation evidence and user adoption guidance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {documentation.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold group-hover:text-primary">
                {item.title}
              </h3>
              <ExternalLink className="size-5 shrink-0 text-muted-foreground" />
            </div>
            <p className="mt-3 leading-7 text-muted-foreground">
              {item.description}
            </p>
            {item.status && (
              <span className="mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold">
                {item.status}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
