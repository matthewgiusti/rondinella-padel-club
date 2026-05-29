import { MessageCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/393712615?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 bg-brand px-4 text-brand-foreground shadow-[0_12px_40px_-12px_rgba(242,184,41,0.6)] transition-all hover:brightness-110 md:bottom-8 md:right-8"
    >
      <MessageCircle size={20} strokeWidth={2.2} />
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] md:inline">
        Scrivici
      </span>
    </a>
  );
}
