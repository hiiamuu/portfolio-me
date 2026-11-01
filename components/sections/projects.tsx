import { projects } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";
import { Tag } from "@/components/tag";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Browse My Academic" title="Projects" />

      <div className="my-8 grid gap-8 tablet:grid-cols-2 desktop:grid-cols-3">
        {projects.map((project) => (
          <InfoCard key={project.title} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="flex-1">{project.description}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {project.tech.map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </ul>
          </InfoCard>
        ))}
      </div>

      <ScrollArrow to="#contact" />
    </Section>
  );
}
