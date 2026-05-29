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
          <p className="eyebrow">Le possibilità</p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-4xl">
            Un modo di giocare
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              per ognuno
            </span>
            .
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Corsi stagionali",
                m: "Settembre → giugno",
                d: "Percorso continuativo in piccolo gruppo, con appuntamento fisso settimanale. Disponibile anche il corso agonisti per chi vuole spingersi oltre.",
              },
              {
                t: "Lezioni con maestro",
                m: "Da 1 a 4 persone",
                d: "Lezioni singole, in coppia, tripla o quadrupla. Disponibili nei formati da 60 e da 90 minuti, per imparare o limare i colpi.",
              },
              {
                t: "Pacchetti lezioni",
                m: "5 · 10 · 15 lezioni",
                d: "Più lezioni con continuità, da 1 a 4 persone. Lo stesso maestro, lo stesso ritmo, miglioramenti che si vedono.",
              },
              {
                t: "Partite guidate",
                m: "Con il maestro in campo",
                d: "Si gioca una vera partita con il maestro che osserva: tattica, posizionamento e correzione degli errori sul momento.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="flex flex-col border border-border bg-surface p-8 transition-colors hover:border-brand"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                  {c.m}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                  {c.d}
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border-t border-border pt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-brand"
                >
                  Chiedi informazioni
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Tesseramento</p>
              <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Entra
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  nel club
                </span>
                .
              </h2>
              <p className="mt-8 text-base leading-relaxed text-foreground/80">
                La tessera ha validità stagionale, da settembre ad agosto. Per
                tesserarti basta presentarti in reception con un documento e la
                visita medica sportiva in corso di validità.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-5">
                {[
                  "Scontistica garantita sulla quota campo",
                  "Priorità di prenotazione fino a 15 giorni di anticipo",
                  "Assicurazione sanitaria inclusa",
                  "Accesso ai tornei sociali del club",
                  "T-shirt ufficiale del club in omaggio",
                  "Sconti e offerte con i partner del club",
                  "Accesso alle lezioni con i maestri",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 border-t border-border pt-5 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 shrink-0 text-brand" size={18} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
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
            Iniziare è semplice
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
            Trova il corso
            <br />
            <span className="font-serif italic font-normal normal-case tracking-normal">
              giusto per te
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
