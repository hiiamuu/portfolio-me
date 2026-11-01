import Image from "next/image";
import { skillGroups } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";

export function Experience() {
  return (
    <Section id="experience" className="mt-8 desktop:mt-0">
      <SectionHeading eyebrow="Explore My" title="Experience" />

      <div className="my-8 flex flex-col gap-8 wide:flex-row">
        {skillGroups.map((group) => (
          <InfoCard key={group.title}>
            <h3 className="mb-8 text-xl font-semibold text-muted-foreground tablet:text-[1.75rem]">
              {group.title}
            </h3>
            <ul className="flex flex-wrap justify-around gap-10 text-left">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex w-40 justify-around gap-2">
                  <Image
                    src="/assets/checkmark.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-auto self-start dark:invert"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                    <p>{skill.level}</p>
                  </div>
                </li>
              ))}
            </ul>
          </InfoCard>
        ))}
      </div>

      <ScrollArrow to="#contact" />
    </Section>
  );
}
