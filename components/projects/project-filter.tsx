const filters = [
  "All",
  "CRM",
  "Automation",
  "AI",
  "Notion",
] as const;

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

export function ProjectFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
            selected === filter
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card hover:-translate-y-1 hover:border-primary/40"
          }`}
        >
          {filter}
        </button>
      ))}

    </div>
  );
}