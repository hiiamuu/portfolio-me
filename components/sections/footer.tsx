import { cacheLife } from "next/cache";
import { navLinks, site } from "@/data/site";

// Cached so the static page can still show the current year (re-checked daily).
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="mx-4 h-[40vh] tablet:h-[26vh]">
      <nav className="mb-8 flex items-center justify-around tablet:mb-0 tablet:h-[17vh]">
        <ul className="flex flex-col gap-2 text-center tablet:flex-row tablet:gap-8 tablet:text-2xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-center">
        Copyright &copy; <CurrentYear /> {site.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
