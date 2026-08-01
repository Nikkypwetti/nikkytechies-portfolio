type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <article className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
        <Icon className="size-8" />
      </div>

      <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}