import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-12 w-auto" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Il padel a Firenze nord come dovrebbe essere: quattro campi, gente vera,
              partite che diventano amicizie. Ti aspettiamo.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Naviga</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/corsi", "Corsi & Lezioni"],
                ["/wheelchair", "Wheelchair Padel"],
                ["/news", "News & Tornei"],
                ["/club", "Il Club"],
                ["/contatti", "Contatti"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-foreground/80 transition-colors hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Vieni a trovarci</p>
            <ul className="mt-6 space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-brand" />
                <span>
                  Via della Rondinella, 50019
                  <br />
                  Sesto Fiorentino · Firenze
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand" />
                <a href="tel:+390000000000" className="hover:text-brand">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand" />
                <a href="mailto:info@rondinellapadel.it" className="hover:text-brand">
                  info@rondinellapadel.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rondinella Padel Club · Firenze</p>
          <p>P.IVA 00000000000</p>
        </div>
      </div>
    </footer>
  );
}
