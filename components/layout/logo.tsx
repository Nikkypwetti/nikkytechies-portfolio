import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
    >
      Nikky<span className="text-blue-600">Techies</span>
    </Link>
  );
}