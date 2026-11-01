import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { HamburgerMenu } from "@/components/hamburger-menu";

const logo = "cursor-default text-2xl tablet:text-[2rem]";

export function Navbar() {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden h-[17vh] items-center justify-around desktop:flex">
        <div className={logo}>{site.name}</div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile / tablet */}
      <nav className="flex h-[17vh] items-center justify-around desktop:hidden">
        <div className={logo}>{site.name}</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <HamburgerMenu links={navLinks} />
        </div>
      </nav>
    </>
  );
}
