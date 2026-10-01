type EvidenceItem = {
  title: string;
  description: string;
  status: "Verified" | "Verified — screenshot unavailable" | "Not claimed";
};

type Props = {
  evidence?: EvidenceItem[];
  github?: string;
};

const statusClass: Record<EvidenceItem["status"], string> = {
  Verified: "border-foreground/15 bg-background",
  "Verified — screenshot unavailable": "border-dashed border-foreground/20 bg-background",
  "Not claimed": "border-dashed border-foreground/15 bg-muted/30",
};

export function ProjectEvidence({ evidence, github }: Props) {
  if (!evidence || evidence.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Evidence & Validation
        </p>
        <h2 className="text-3xl font-bold">What the project evidence proves</h2>
        <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
          This is the evidence map for the implementation, not a list of generic
          features. It separates verified outcomes from the one visual that could
          not be resent and from claims that are deliberately not made.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {evidence.map((item) => (
          <article
            key={item.title}
            className={`rounded-2xl border p-5 ${statusClass[item.status]}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium">
                {item.status}
              </span>
            </div>
            <p className="mt-3 leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      {github && (
        <div className="rounded-2xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            The detailed implementation narrative and evidence matrix are available
            with the project source documentation.
          </p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex font-semibold underline underline-offset-4"
          >
            View the GrowAgency GitHub case study
          </a>
        </div>
      )}
    </section>
  );
}
