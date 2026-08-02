type Props = {
  architecture: string[];
};

export function ProjectArchitecture({
  architecture,
}: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        Implementation Steps
      </h2>

      <div className="space-y-4">
        {architecture.map((step, index) => (
          <div
            key={step}
            className="flex gap-5"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {index + 1}
            </div>

            <div className="rounded-xl border p-5 flex-1">
              {step}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}