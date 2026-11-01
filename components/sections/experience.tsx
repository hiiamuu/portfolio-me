import Image from "next/image";
import { jobs } from "@/data/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { InfoCard } from "@/components/info-card";
import { ScrollArrow } from "@/components/scroll-arrow";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="My Professional" title="Experience" />

      <div className="my-8 flex flex-col gap-8">
        {jobs.map((job) => (
          <InfoCard key={job.company + job.period} className="text-left tablet:px-10 tablet:py-8">
            <div className="mb-6 flex flex-col gap-1 tablet:flex-row tablet:items-start tablet:justify-between">
              <div>
                <h3 className="text-xl font-semibold tablet:text-2xl">{job.role}</h3>
                <p className="font-semibold">{job.company}</p>
                <p>{job.location}</p>
              </div>
              <p className="w-fit shrink-0 rounded-pill border-[0.1rem] border-border px-4 py-1 text-sm font-semibold">
                {job.period}
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-5 desktop:grid-cols-2">
              {job.highlights.map((h) => (
                <li key={h.label} className="flex items-start gap-3">
                  <Image
                    src="/assets/checkmark.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-0.5 size-6 shrink-0 dark:invert"
                  />
                  <div>
                    <h4 className="font-semibold">{h.label}</h4>
                    <p>{h.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </InfoCard>
        ))}
      </div>

      <ScrollArrow to="#projects" />
    </Section>
  );
}
