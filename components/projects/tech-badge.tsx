import type { Technology } from "@/types/technology";
import { TechnologyIcon } from "./technology-icon";

type Props = {
  tech: Technology;
};

export function TechBadge({ tech }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-primary hover:text-primary-foreground">
      <TechnologyIcon id={tech.id} />
      <span>{tech.name}</span>
    </div>
  );
}