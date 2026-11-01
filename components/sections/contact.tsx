import Image from "next/image";
import { site, socials } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

const linkedin = socials.find((s) => s.label === "LinkedIn")!;

export function Contact() {
  return (
    <Section
      id="contact"
      className="flex h-[40vh] flex-col justify-center tablet:h-[70vh] desktop:h-[70vh]"
    >
      <SectionHeading eyebrow="Get in Touch" title="Contact Me" />

      <div className="mx-auto my-8 flex flex-wrap justify-center rounded-pill border-[0.1rem] border-border p-2 tablet:flex-nowrap">
        <div className="flex items-center justify-center gap-2 tablet:m-4">
          <Image src="/assets/email.png" alt="" width={40} height={40} className="size-10 dark:invert" />
          <a href={`mailto:${site.email}`} className="nav-link tablet:text-lg">
            {site.email}
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 tablet:m-4">
          <Image src={linkedin.icon} alt="" width={32} height={32} className="size-8 dark:invert" />
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link tablet:text-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
