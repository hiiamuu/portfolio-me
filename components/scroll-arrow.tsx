import Image from "next/image";

// Desktop-only arrow in the bottom-right of a section that jumps to the next one.
export function ScrollArrow({ to }: { to: string }) {
  return (
    <a
      href={to}
      aria-label="Scroll to next section"
      className="absolute -right-20 bottom-10 hidden desktop:block"
    >
      <Image src="/assets/arrow.png" alt="" width={32} height={32} className="h-8 w-auto dark:invert" />
    </a>
  );
}
