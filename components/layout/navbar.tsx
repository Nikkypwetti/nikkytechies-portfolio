import Link from "next/link";

import { navigation } from "@/data/navigation";
import { Container } from "@/components/shared/container";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}