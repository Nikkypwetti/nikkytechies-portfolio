type Props = {
  solution: string;
};

export function ProjectSolution({ solution }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">
        Solution
      </h2>

      <p className="text-lg leading-8 text-muted-foreground">
        {solution}
      </p>
    </section>
  );
}