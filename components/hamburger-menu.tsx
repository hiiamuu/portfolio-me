"use client";

import { useState } from "react";
import type { NavLink } from "@/data/site";
import { cn } from "@/lib/utils";

// The original site's mobile menu: three lines that turn into an X and a dropdown below.
export function HamburgerMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const line = "h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out";

  return (
    <div className="relative inline-block">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="flex h-6 w-[30px] flex-col justify-between"
      >
        <span className={cn(line, open && "translate-x-[10px] translate-y-[5px] rotate-45")} />
        <span className={cn(line, open && "opacity-0")} />
        <span className={cn(line, open && "translate-x-[10px] -translate-y-[5px] -rotate-45")} />
      </button>

      <ul
        id="mobile-menu"
        className={cn(
          "absolute top-full right-0 z-50 w-max overflow-hidden bg-background transition-all duration-300 ease-in-out",
          open ? "max-h-[300px]" : "max-h-0"
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="nav-link block p-2.5 text-center text-2xl"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
