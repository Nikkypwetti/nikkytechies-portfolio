type Props = {
  platforms?: string[];
  status?: "Completed" | "In Progress" | "Planned";
};

export function ProjectPlatforms({ platforms, status }: Props) {
  if ((!platforms || platforms.length === 0) && !status) return null;

  return (
    <section className="rounded-3xl border bg-card p-7 md:p-9">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Project Context
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Platforms & build status
          </h2>
        </div>

        {status && (
          <span className="rounded-full border px-4 py-2 text-sm font-semibold">
            {status}
          </span>
        )}
      </div>

      {platforms && (
        <div className="mt-6 flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary"
            >
              {platform}
            </span>
          ))}
        </div>
      )}

      {status === "In Progress" && (
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          This case study shows the current build scope. Planned automation counts and outcome targets are not presented as completed results until runtime evidence is verified.
        </p>
      )}
    </section>
  );
}
