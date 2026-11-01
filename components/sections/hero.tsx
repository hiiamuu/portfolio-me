import Image from "next/image";
import { hero, site, socials } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { cv, imageme } from "@/app/assets";
import { getYearsOfExperience } from "@/lib/experience";

// Split layout: intro text on the left, photo on the right (photo first on phones).
export async function Hero() {
  const years = await getYearsOfExperience();

  return (
    <Section
      id="profile"
      className="flex flex-col-reverse items-center gap-10 pt-4 desktop:flex-row desktop:justify-between desktop:gap-16 desktop:pt-8"
    >
      <div className="max-w-2xl text-center desktop:text-left">
        <p className="font-semibold">Hello, I&apos;m</p>
        <h1 className="text-4xl font-semibold tablet:text-5xl wide:text-6xl">{site.name}</h1>
        <p className="mt-1 text-xl font-semibold tablet:text-2xl">{site.role}</p>
        <p className="tablet:text-lg">{site.specialty}</p>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed tablet:text-lg desktop:mx-0">
          {hero.intro}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 desktop:justify-start">
          <Button asChild variant="outlined" size="pill">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
          <Button asChild variant="solid" size="pill">
            <a href="#contact">Contact Info</a>
          </Button>
          <div className="flex gap-4 tablet:ml-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`My ${s.label} profile`}
                className="transition-opacity duration-300 hover:opacity-70"
              >
                <Image src={s.icon} alt="" width={32} height={32} className="size-8 dark:invert" />
              </a>
            ))}
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-t-[0.1rem] border-border pt-8 tablet:grid-cols-4">
          {hero.stats(years).map((stat) => (
            // Label comes first in the markup for screen readers, but shows below the number.
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="text-3xl font-semibold tablet:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Photo with an offset outline ring behind it. */}
      <div className="relative size-[min(64vw,280px)] shrink-0 tablet:size-80 desktop:size-96 wide:size-104">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border-[0.1rem] border-border"
        />
        <Image
          src={imageme}
          alt={site.name}
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1400px) 416px, (min-width: 1200px) 384px, (min-width: 600px) 320px, 64vw"
          className="rounded-full object-cover"
        />
      </div>
    </Section>
  );
}
