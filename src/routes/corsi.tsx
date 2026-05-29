import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import lessonsImg from "@/assets/lessons.jpg";
import racketImg from "@/assets/racket-detail.jpg";

export const Route = createFileRoute("/corsi")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "Corsi & Lezioni Padel — Firenze · Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Corsi e lezioni di padel a Firenze: corsi stagionali, lezioni con maestro da 1 a 4 persone, pacchetti e partite guidate. Tre maestri FITP, gruppi piccoli.",
      },
      { property: "og:title", content: "Corsi & Lezioni — Rondinella Padel Club" },
      { property: "og:url", content: "/corsi" },
    ],
    links: [{ rel: "canonical", href: "/corsi" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393712615?text=Ciao%2C%20vorrei%20informazioni%20sui%20corsi";

function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Corsi & Lezioni"
        title="Iniziare è facile."
        italicWord="Migliorare anche."
        description="Tre maestri FITP, gruppi piccoli, un metodo costruito per farti tornare. Dal primo colpo al gioco di coppia, senza fretta e senza giudizio."
        image={lessonsImg}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Prova gratuita",
                d: "45 minuti con un maestro per capire se il padel ti piace. Pala e palline incluse.",
                p: "Gratis",
                hl: true,
              },
              {
                t: "Corso base",
                d: "8 lezioni di gruppo (max 4). Tecnica, regole, primi scambi di coppia.",
                p: "240€",
              },
              {
                t: "Lezione privata",
                d: "Uno-a-uno con il maestro. Per partire da zero o limare i colpi.",
                p: "50€",
              },
              {
                t: "Pacchetto coppia",
                d: "10 lezioni in due. Lo stesso campo, lo stesso ritmo.",
                p: "420€",
              },
            ].map((c) => (
              <div
                key={c.t}
                className={`flex flex-col justify-between border bg-surface p-8 transition-colors hover:border-brand ${
                  c.hl ? "border-brand" : "border-border"
                }`}
              >
                <div>
                  {c.hl && (
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                      Inizia da qui
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {c.t}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {c.d}
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-border pt-5">
                  <span className="font-display text-2xl font-black text-brand">
                    {c.p}
                  </span>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Richiedi ${c.t}`}
                  >
                    <ArrowRight
                      size={20}
                      className="text-foreground/40 transition-all hover:translate-x-1 hover:text-brand"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Il metodo</p>
              <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Si impara
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  giocando
                </span>
                .
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-6">
                {[
                  [
                    "Gruppi piccoli, attenzione vera",
                    "Massimo 4 allievi per maestro. Ogni colpo viene visto e corretto.",
                  ],
                  [
                    "Tecnica + divertimento",
                    "Si parte dai fondamentali, ma si gioca subito. Niente esercizi infiniti.",
                  ],
                  [
                    "Maestri FITP certificati",
                    "Tre tecnici federali con esperienza di insegnamento e di campo.",
                  ],
                  [
                    "Percorsi su misura",
                    "Principianti, donne, junior, agonisti: ogni livello ha il suo programma.",
                  ],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-5 border-t border-border pt-6">
                    <Check className="mt-1 shrink-0 text-brand" size={18} />
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                        {t}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-brand py-24 text-brand-foreground md:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
            Prima lezione gratuita
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
            Vieni a provare.
            <br />
            <span className="font-serif italic font-normal normal-case tracking-normal">
              Senza impegno
            </span>
            .
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-background px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground hover:bg-foreground hover:text-background"
          >
            <MessageCircle size={16} />
            Prenota su WhatsApp
          </a>
        </div>
        <img
          src={racketImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 object-cover opacity-20 mix-blend-multiply md:block"
        />
      </section>
    </PageShell>
  );
}
