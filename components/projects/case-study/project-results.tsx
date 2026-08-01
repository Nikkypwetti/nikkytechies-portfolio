type Props = {
  results: string[];
};

export function ProjectResults({ results }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">
        Business Results
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {results.map((result) => (
          <div
            key={result}
            className="rounded-xl border p-6"
          >
            ✓ {result}
          </div>
        ))}
      </div>
    </section>
  );
}