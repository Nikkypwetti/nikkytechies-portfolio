"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ProjectScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/projects/")) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
