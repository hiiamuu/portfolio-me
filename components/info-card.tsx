import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// The original "details-container": rounded 2rem card with a thin grey border.
export function InfoCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "flex-1 gap-0 rounded-pill border-[0.1rem] border-border px-6 py-6 text-center text-base ring-0",
        className
      )}
      {...props}
    />
  );
}
