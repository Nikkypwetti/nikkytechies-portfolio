"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/shared/container";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo already contains its own Link */}
          <Logo />

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/resume">
              <Button>Resume</Button>
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:!hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-md border text-xl transition-colors hover:bg-muted"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-4 md:!hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}

              <div className="mt-3 border-t pt-4">
                <Link
                  href="/resume"
                  onClick={closeMenu}
                  className="block"
                >
                  <Button className="w-full">
                    View Resume
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}