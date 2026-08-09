import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs md:text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 px-6 py-3.5 md:px-7 md:py-4 min-h-11";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-[#d8ff6b] active:bg-[#b3e836]",
  secondary:
    "border border-foreground/30 text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:text-accent underline underline-offset-4 decoration-foreground/30 hover:decoration-accent px-0 py-1",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
