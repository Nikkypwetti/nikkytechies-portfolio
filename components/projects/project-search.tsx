import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function ProjectSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by project, technology or keyword..."
        className="w-full rounded-xl border bg-card py-3 pl-12 pr-4 outline-none transition focus:border-primary"
      />

    </div>
  );
}