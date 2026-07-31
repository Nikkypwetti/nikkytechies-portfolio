"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/shared/container";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/resume" className="hidden md:inline-flex">
                <Button>
                  Resume
                </Button>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}