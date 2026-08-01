type Props = {
  before: string[];
  after: string[];
};

export function ProjectBeforeAfter({
  before,
  after,
}: Props) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold">
        Before vs After
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">
          <h3 className="mb-6 text-xl font-semibold text-red-600">
            Before
          </h3>

          <ul className="space-y-4">
            {before.map((item) => (
              <li key={item}>
                ❌ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">
          <h3 className="mb-6 text-xl font-semibold text-green-600">
            After
          </h3>

          <ul className="space-y-4">
            {after.map((item) => (
              <li key={item}>
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}