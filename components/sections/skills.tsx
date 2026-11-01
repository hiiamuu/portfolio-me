import { CodeXml, Database, Server, Sparkles, Terminal, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";
import { Tag } from "@/components/tag";

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: CodeXml,
  backend: Server,
  ai: Sparkles,
  database: Database,
  devops: Wrench,
  other: Terminal,
};

// One wide card; each category is a row: icon + name on the left, skill tags on the right.
export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Explore My" title="Skills" />

      <InfoCard className="mx-auto my-8 max-w-5xl p-0 py-0 text-left">
        <ul className="divide-y divide-border">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <li
                key={group.title}
                className="flex flex-col gap-4 px-6 py-6 tablet:px-10 desktop:grid desktop:grid-cols-[19rem_1fr] desktop:items-center desktop:gap-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold desktop:whitespace-nowrap">{group.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </InfoCard>

      <ScrollArrow to="#experience" />
    </Section>
  );
}
