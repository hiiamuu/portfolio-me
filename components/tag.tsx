import { cn } from "@/lib/utils";

const sizes = {
  sm: "px-3 py-1 text-xs font-semibold",
  md: "px-4 py-1.5 text-sm font-medium",
};

// Pill-shaped tag used for skills and project tech. Fills on hover like the solid button.
export function Tag({
  size = "md",
  className,
  ...props
}: React.ComponentProps<"li"> & { size?: keyof typeof sizes }) {
  return (
    <li
      className={cn(
        "rounded-pill border-[0.1rem] border-border transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
