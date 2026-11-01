import Image from "next/image";
import { MapPin } from "lucide-react";
import { site, socials } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

const linkedin = socials.find((s) => s.label === "LinkedIn")!;

// Matches the style of the black round email/LinkedIn PNG icons.
const roundIcon =
  "flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Get in Touch" title="Contact Me" />

      <ul className="mx-auto my-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 rounded-pill border-[0.1rem] border-border px-6 py-6 tablet:px-10">
        <li className="flex items-center gap-2">
          <Image src="/assets/email.png" alt="" width={32} height={32} className="size-8 dark:invert" />
          <a href={`mailto:${site.email}`} className="nav-link tablet:text-lg">
            {site.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Image src={linkedin.icon} alt="" width={32} height={32} className="size-8 dark:invert" />
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link tablet:text-lg"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className={roundIcon}>
            <MapPin className="size-4" aria-hidden />
          </span>
          <span className="tablet:text-lg">{site.location}</span>
        </li>
      </ul>
    </Section>
  );
}
