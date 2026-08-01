type Props = {
  problem: string;
};

export function ProjectProblem({ problem }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">
        Business Challenge
      </h2>

      <p className="text-lg leading-8 text-muted-foreground">
        {problem}
      </p>
    </section>
  );
}