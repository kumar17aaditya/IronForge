"use client";

import { MessageCircle } from "lucide-react";
import { getGenericWhatsAppLink } from "@/lib/whatsapp";

export function MobileWhatsAppBar() {
  return (
    <div
      className="md:hidden fixed bottom-5 right-5 z-40"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={getGenericWhatsAppLink("starting my journey at IronForge")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message IronForge on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
      >
        <MessageCircle size={22} strokeWidth={2.25} />
      </a>
    </div>
  );
}
