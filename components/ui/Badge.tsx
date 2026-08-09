import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "outline";
}

export function Badge({ children, className, variant = "outline" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full",
        variant === "accent"
          ? "bg-accent text-accent-foreground"
          : "border border-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
