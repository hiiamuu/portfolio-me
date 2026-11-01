import Image from "next/image";
import { site, socials } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { cv, imageme } from "@/app/assets";

export function Hero() {
  return (
    <Section
      id="profile"
      className="desktop:flex desktop:min-h-[80vh] desktop:justify-center desktop:gap-20"
    >
      <div className="relative mx-auto mb-8 size-[46vw] shrink-0 tablet:size-68.75 desktop:mx-0 desktop:my-auto desktop:size-100">
        <Image
          src={imageme}
          alt={site.name}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1200px) 400px, (min-width: 600px) 275px, 46vw"
          className="rounded-full object-cover"
        />
      </div>

      <div className="self-center text-center">
        <p className="font-semibold">Hello, I&apos;m</p>
        <h1 className="text-[2rem] font-semibold tablet:text-5xl">{site.name}</h1>
        <p className="text-xl font-semibold tablet:text-[1.75rem]">{site.role}</p>
        <p className="mb-4 tablet:text-lg">{site.specialty}</p>

        <div className="flex flex-wrap justify-center gap-4 tablet:flex-nowrap">
          <Button asChild variant="outlined" size="pill">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
          <Button asChild variant="solid" size="pill">
            <a href="#contact">Contact Info</a>
          </Button>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`My ${s.label} profile`}
            >
              <Image src={s.icon} alt="" width={32} height={32} className="size-8 dark:invert" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
