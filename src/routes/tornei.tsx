import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Trophy, Users, Clock, MessageCircle } from "lucide-react";
import tournamentImg from "@/assets/tournament.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/tornei")({
  component: TournamentsPage,
  head: () => ({
    meta: [
      { title: "Tornei & Eventi — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Tornei FIP, americane settimanali, leghe stagionali e serate al Rondinella Padel Club di Milano.",
      },
    ],
    links: [{ rel: "canonical", href: "/tornei" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20iscrivermi%20a%20un%20torneo";

const events = [
  {
    d: "14",
    m: "GIU",
    t: "Americana del Venerdì",
    s: "Open · Tutti i livelli",
    h: "20:00 — 23:30",
    p: "15€",
  },
  {
    d: "22",
    m: "GIU",
    t: "Torneo Rondinella Summer",
    s: "M · F · Misto · FIP Bronze",
    h: "Weekend",
    p: "Da 40€ a coppia",
  },
  {
    d: "06",
    m: "LUG",
    t: "Notte Bianca del Padel",
    s: "Partite + DJ set + cena sociale",
    h: "Dalle 18:00",
    p: "35€",
  },
  {
    d: "20",
    m: "LUG",
    t: "Lega Estiva — Girone A",
    s: "8 squadre · 6 settimane",
    h: "Serale infrasettimanale",
    p: "120€ a coppia",
  },
  {
    d: "09",
    m: "AGO",
    t: "Ferragosto Mixed",
    s: "Torneo misto + aperitivo",
    h: "Pomeriggio",
    p: "25€",
  },
];

function TournamentsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tornei & Eventi"
        title="Si gioca,"
        italicWord="poi si festeggia."
        description="Ogni mese tornei FIP, americane, leghe e serate. Iscriviti da solo o con il tuo compagno: pensiamo noi a costruire il girone giusto."
        image={tournamentImg}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: Trophy, t: "Tornei FIP", d: "Bronze, Silver e tappe regionali." },
              { i: Users, t: "Leghe", d: "Stagioni di 6—8 settimane per livello." },
              {
                i: Clock,
                t: "Americane",
                d: "Ogni venerdì sera. Iscrizione singola.",
              },
            ].map((c) => (
              <div key={c.t} className="border border-border bg-surface p-8">
                <c.i className="text-brand" size={22} />
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Calendario · Estate 2026</p>
          <h2 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Prossimi appuntamenti
          </h2>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {events.map((e) => (
              <li
                key={e.t}
                className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 py-7 md:grid-cols-[80px_1fr_1fr_auto_auto] md:gap-x-10"
              >
                <div className="row-span-2 text-center md:row-span-1">
                  <div className="font-display text-3xl font-bold leading-none text-brand md:text-4xl">
                    {e.d}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {e.m}
                  </div>
                </div>
                <div className="md:col-span-1">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-tight md:text-xl">
                    {e.t}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {e.s}
                  </p>
                </div>
                <div className="col-start-2 text-xs uppercase tracking-[0.18em] text-foreground/70 md:col-start-3">
                  {e.h}
                </div>
                <div className="col-start-2 font-display text-sm font-semibold md:col-start-4">
                  {e.p}
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-start-2 mt-1 inline-flex w-fit items-center bg-brand px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-foreground hover:brightness-110 md:col-start-5 md:mt-0"
                >
                  Iscriviti
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[360px] md:min-h-[560px]">
            <img
              src={communityImg}
              alt="Aperitivo al club"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-20 md:px-16">
            <div className="max-w-lg">
              <p className="eyebrow">Dopo la partita</p>
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
                Il vero{" "}
                <span className="font-serif italic text-brand normal-case tracking-normal">
                  terzo tempo
                </span>
                .
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">
                Ogni evento Rondinella finisce al bar: un aperitivo, un piatto del
                nostro chef, qualcuno che racconta il match come fosse Wimbledon. È
                questo che fa la differenza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
