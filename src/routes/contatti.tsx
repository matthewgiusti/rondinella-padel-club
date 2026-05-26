import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contatti — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Vieni a trovarci al Rondinella Padel Club: indirizzo, orari, WhatsApp e mappa. Milano.",
      },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

function ContactPage() {
  return (
    <PageShell>
      <section className="bg-background pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Contatti</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-[96px]">
            Scrivici,
            <br />
            <span className="font-serif italic text-brand normal-case tracking-normal">
              passa a trovarci
            </span>
            .
          </h1>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Per prenotare un campo, una lezione o solo per vedere il club, il modo più
            rapido è WhatsApp. Ti rispondiamo entro pochi minuti.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                i: MessageCircle,
                t: "WhatsApp",
                v: "+39 000 000 0000",
                a: WHATSAPP,
                cta: "Scrivici",
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
                className="group flex flex-col justify-between border border-border bg-background p-8 transition-all hover:border-brand"
              >
                <div>
                  <c.i className="text-brand" size={22} />
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">
                    {c.t}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70">{c.v}</p>
                </div>
                <span className="mt-10 text-[10px] uppercase tracking-[0.22em] text-foreground/60 group-hover:text-brand">
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
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
                Via della Rondinella 12
                <br />
                <span className="font-serif italic text-brand normal-case tracking-normal">
                  Milano
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
                      Via della Rondinella 12, 20100 Milano (MI)
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
                      Lunedì — Domenica · 07:00 — 24:00
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
                      Parcheggio gratuito riservato. Metro M3 a 600m.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden border border-border md:aspect-[16/11]">
                <iframe
                  title="Mappa Rondinella Padel Club"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.18%2C45.46%2C9.20%2C45.48&layer=mapnik"
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
