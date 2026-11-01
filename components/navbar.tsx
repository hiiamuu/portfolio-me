import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { HamburgerMenu } from "@/components/hamburger-menu";

const logo = "cursor-default whitespace-nowrap text-2xl tablet:text-[2rem]";

export function Navbar() {
  return (
    <>
      {/* Desktop */}
      <nav className="mx-40 hidden h-24 items-center justify-between desktop:flex">
        <div className={logo}>{site.name}</div>
        <div className="flex items-center gap-6 wide:gap-8">
          <ul className="flex gap-6 text-xl wide:gap-8 wide:text-2xl">
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
      <nav className="mx-[5%] flex h-20 items-center justify-between desktop:hidden">
        <div className={logo}>{site.name}</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <HamburgerMenu links={navLinks} />
        </div>
      </nav>
    </>
  );
}
