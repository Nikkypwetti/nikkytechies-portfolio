import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
    >
      <span className="text-foreground">
        Nikky
      </span>

      <span className="text-primary">
        Techies
      </span>
    </Link>
  );
}