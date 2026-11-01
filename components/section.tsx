import { cn } from "@/lib/utils";

// Shared section frame: 10rem side margins on desktop, 5% below 1200px.
// Height follows the content, with even vertical padding between sections.
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("relative mx-[5%] py-12 desktop:mx-40 desktop:py-16", className)}
      {...props}
    />
  );
}
