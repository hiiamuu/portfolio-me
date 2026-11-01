"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function isDarkPreferred() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  // Re-apply after React's dev-mode remount clears the class. No-op in production.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkPreferred());
  }, []);

  function toggle() {
    const dark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </Button>
  );
}
