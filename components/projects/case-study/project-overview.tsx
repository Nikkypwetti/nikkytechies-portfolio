type Props = {
  overview: string[];
};

export function ProjectOverview({
  overview,
}: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        At a Glance
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {overview.map((item) => (
          <div
            key={item}
            className="rounded-xl border bg-card p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}