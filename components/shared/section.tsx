import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}