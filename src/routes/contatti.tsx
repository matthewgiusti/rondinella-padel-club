import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contatti — Rondinella Padel Club · Firenze" },
      {
        name: "description",
        content:
          "Vieni a trovarci al Rondinella Padel Club di Sesto Fiorentino: indirizzo, orari, WhatsApp, telefono e mappa.",
      },
      { property: "og:title", content: "Contatti — Rondinella Padel Club" },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

function ContactPage() {
  return (
    <PageShell>
      <section className="bg-background pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-[96px]">
            Scrivici,
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              passa a trovarci
            </span>
            .
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Per prenotare un campo, una lezione o solo per dare un'occhiata al club, il
            modo più rapido è WhatsApp. Ti rispondiamo entro pochi minuti.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                i: MessageCircle,
                t: "WhatsApp",
                v: "+39 000 000 0000",
                a: WHATSAPP,
                cta: "Scrivici",
                hl: true,
              },
              {
                i: Phone,
                t: "Telefono",
                v: "+39 000 000 0000",
                a: "tel:+390000000000",
                cta: "Chiama",
              },
              {
                i: Mail,
                t: "Email",
                v: "info@rondinellapadel.it",
                a: "mailto:info@rondinellapadel.it",
                cta: "Invia",
              },
              {
                i: Instagram,
                t: "Instagram",
                v: "@rondinellapadel",
                a: "https://instagram.com",
                cta: "Seguici",
              },
            ].map((c) => (
              <a
                key={c.t}
                href={c.a}
                target={c.a.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between border p-8 transition-all ${
                  c.hl
                    ? "border-brand bg-brand text-brand-foreground hover:brightness-110"
                    : "border-border bg-background hover:border-brand"
                }`}
              >
                <div>
                  <c.i
                    className={c.hl ? "text-brand-foreground" : "text-brand"}
                    size={22}
                  />
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">
                    {c.t}
                  </h3>
                  <p
                    className={`mt-3 text-sm ${
                      c.hl ? "text-brand-foreground/80" : "text-foreground/70"
                    }`}
                  >
                    {c.v}
                  </p>
                </div>
                <span
                  className={`mt-10 text-[10px] uppercase tracking-[0.22em] ${
                    c.hl
                      ? "text-brand-foreground/90"
                      : "text-foreground/60 group-hover:text-brand"
                  }`}
                >
                  {c.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Dove siamo</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Sesto Fiorentino
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  Firenze nord
                </span>
              </h2>
              <ul className="mt-10 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-0.5 text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Indirizzo
                    </div>
                    <div className="mt-1 text-foreground/85">
                      Via della Rondinella, 50019
                      <br />
                      Sesto Fiorentino (FI)
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock size={18} className="mt-0.5 text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Apertura
                    </div>
                    <div className="mt-1 text-foreground/85">
                      Lunedì — Domenica · 08:00 — 23:30
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-0.5 text-brand" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Come arrivare
                    </div>
                    <div className="mt-1 text-foreground/85">
                      Parcheggio ampio nelle vicinanze. Centro commerciale a pochi
                      minuti. Comodo da Scandicci, Firenze, Calenzano.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden border border-border md:aspect-[16/11]">
                <iframe
                  title="Mappa Rondinella Padel Club — Sesto Fiorentino"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=11.18%2C43.82%2C11.24%2C43.86&layer=mapnik"
                  className="h-full w-full grayscale invert-[0.92]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
