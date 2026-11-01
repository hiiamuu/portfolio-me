import Image from "next/image";
import { about, site } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Get To Know More" title="About Me" />

      <div className="desktop:flex desktop:h-4/5 desktop:gap-16">
        <div className="relative mx-auto mt-8 mb-8 size-[46vw] shrink-0 tablet:size-68.75 desktop:mx-0 desktop:my-auto desktop:size-100">
          <Image
            src={site.aboutImage}
            alt={`${site.name} portrait`}
            fill
            sizes="(min-width: 1200px) 400px, (min-width: 600px) 275px, 46vw"
            className="rounded-pill object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-8 flex flex-wrap gap-8 desktop:mt-8 wide:flex-nowrap">
            {about.cards.map((card) => (
              <InfoCard key={card.title} className="min-w-56">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mx-auto h-8 w-auto dark:invert"
                />
                <h3 className="my-2 text-lg font-semibold">{card.title}</h3>
                <p>
                  {card.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </InfoCard>
            ))}
          </div>
          <p>{about.text}</p>
        </div>
      </div>

      <ScrollArrow to="#experience" />
    </Section>
  );
}
