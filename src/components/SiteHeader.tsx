import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/corsi", label: "Corsi & Lezioni" },
  { to: "/wheelchair", label: "Wheelchair" },
  
  { to: "/club", label: "Il Club" },
  { to: "/contatti", label: "Contatti" },
];

const WHATSAPP =
  "https://wa.me/393293712615?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" className="flex items-center" aria-label="Rondinella Padel Club">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-brand" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-px w-5 bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-brand px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-foreground transition-all hover:brightness-110 md:inline-block"
          >
            Scrivici su WhatsApp
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-border/60 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/85"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-brand px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-foreground"
          >
            Scrivici su WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
