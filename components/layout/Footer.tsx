import { Container } from "@/components/ui/Container";
import { brand, footer, location } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight">
              {brand.name.toUpperCase()}
            </p>
            <p className="mt-3 text-muted max-w-xs">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/85 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {brand.fullName}. {footer.legalNote}
          </p>
          <p className="text-xs text-muted">{location.addressLines.join(", ")}</p>
        </div>
      </Container>
    </footer>
  );
}
