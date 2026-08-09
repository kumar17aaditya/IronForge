"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand, navLinks } from "@/data/site";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on escape for keyboard users
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
          scrolled
            ? "bg-background/92 backdrop-blur-md border-b border-border-soft"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <Container className="flex items-center justify-between py-5 md:py-6">
          <a
            href="#"
            className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground"
          >
            {brand.name.toUpperCase()}
          </a>

          <nav className="hidden md:flex items-center gap-11">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground-soft hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              href={getGenericWhatsAppLink("membership")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-5 py-2.5 text-[11px]"
            >
              Join Now
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-[60] inline-flex items-center justify-center w-11 h-11 text-foreground"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="md:hidden fixed inset-0 z-40 flex flex-col bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          >
            <div className="grain-overlay" />
            <div className="relative flex-1 flex flex-col justify-between px-6 pt-28 pb-10">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : 0.06 * i }}
                    className="font-display text-5xl xs:text-6xl font-bold py-4 border-b border-border-soft text-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="flex flex-col gap-4">
                <Button
                  href={getGenericWhatsAppLink("membership")}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  Join Now
                </Button>
                <p className="text-xs text-muted text-center">
                  Bengaluru · Open 24/7
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
