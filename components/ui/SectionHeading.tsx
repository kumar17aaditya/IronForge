import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight",
          light ? "text-foreground" : "text-foreground",
        )}
      >
        {headline}
      </h2>
      {body && (
        <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl">
          {body}
        </p>
      )}
    </div>
  );
}
