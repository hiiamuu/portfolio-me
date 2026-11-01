// "Get To Know More" / "About Me" style heading used by every section.
export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-center">{eyebrow}</p>
      <h2 className="text-center text-[2rem] font-semibold tablet:text-5xl">{title}</h2>
    </>
  );
}
