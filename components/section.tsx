import { cn } from "@/lib/utils";

// Shared section frame from the original site: 10rem side margins and a
// near-full-screen height on desktop; 5% margins and natural height below 1200px.
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative mx-[5%] box-border pt-[4vh] desktop:mx-40 desktop:h-[96vh] desktop:min-h-fit",
        className
      )}
      {...props}
    />
  );
}
