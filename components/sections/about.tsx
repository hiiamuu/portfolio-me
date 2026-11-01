import Image from "next/image";
import { about } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";
import { getYearsOfExperience } from "@/lib/experience";

export async function About() {
  const years = await getYearsOfExperience();

  return (
    <Section id="about">
      <SectionHeading eyebrow="Get To Know More" title="About Me" />

      <div className="mx-auto max-w-4xl">
        <div className="my-8 flex flex-wrap gap-8 tablet:flex-nowrap">
          {about.cards(years).map((card) => (
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
        <p className="leading-relaxed tablet:text-lg">{about.summary(years)}</p>
      </div>

      <ScrollArrow to="#skills" />
    </Section>
  );
}
