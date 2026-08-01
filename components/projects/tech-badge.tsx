import type { Technology } from "@/types/technology";
import { TechnologyIcon } from "./technology-icon";

type Props = {
  tech: Technology;
};

export function TechBadge({ tech }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent">
      <TechnologyIcon id={tech.id} />
      <span>{tech.name}</span>
    </div>
  );
}