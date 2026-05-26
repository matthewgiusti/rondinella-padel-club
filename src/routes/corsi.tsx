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
      { title: "Corsi & Lezioni — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Corsi di padel a Milano per principianti, intermedi e avanzati. Maestri qualificati, gruppi piccoli, percorsi personalizzati.",
      },
    ],
    links: [{ rel: "canonical", href: "/corsi" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20informazioni%20sui%20corsi";

function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Corsi & Lezioni"
        title="Imparare il padel"
        italicWord="sul serio."
        description="Gruppi piccoli, maestri qualificati FIT-FIP, percorsi costruiti sul tuo livello. Dal primo colpo alla preparazione agonistica."
        image={lessonsImg}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Prova gratuita",
                d: "Una lezione introduttiva di 45 minuti per capire se il padel fa per te.",
                p: "Gratis",
              },
              {
                t: "Corso base",
                d: "8 lezioni di gruppo (max 4 persone). Tecnica, regole, gioco di coppia.",
                p: "280€",
              },
              {
                t: "Lezione privata",
                d: "Sessione one-to-one con video analisi opzionale.",
                p: "55€",
              },
              {
                t: "Pacchetto coppia",
                d: "10 lezioni in due. Un percorso costruito insieme.",
                p: "480€",
              },
            ].map((c, i) => (
              <div
                key={c.t}
                className={`flex flex-col justify-between border border-border bg-surface p-8 transition-colors hover:border-brand ${
                  i === 0 ? "border-brand/40" : ""
                }`}
              >
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {c.t}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {c.d}
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-border pt-5">
                  <span className="font-display text-2xl font-bold text-brand">
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
              <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
                Tre principi,
                <br />
                <span className="font-serif italic text-brand normal-case tracking-normal">
                  zero scorciatoie
                </span>
                .
              </h2>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-6">
                {[
                  [
                    "Tecnica prima di tutto",
                    "Si parte dai fondamentali, sempre. Anche con i giocatori avanzati.",
                  ],
                  [
                    "Gruppi piccoli, attenzione vera",
                    "Massimo 4 allievi per maestro. Ogni colpo viene visto e corretto.",
                  ],
                  [
                    "Video analisi e progressione",
                    "Strumenti professionali per misurare i tuoi miglioramenti, mese dopo mese.",
                  ],
                  [
                    "Maestri certificati FIT-FIP",
                    "Tutto lo staff è composto da istruttori federali con esperienza agonistica.",
                  ],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-5 border-t border-border pt-6">
                    <Check className="mt-1 shrink-0 text-brand" size={18} />
                    <div>
                      <h3 className="font-display text-lg font-semibold uppercase tracking-tight">
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

      <section className="relative overflow-hidden border-t border-border bg-background py-28">
        <img
          src={racketImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="max-w-3xl font-display text-3xl font-bold uppercase leading-[1] tracking-tight md:text-6xl">
            Prenota la tua{" "}
            <span className="font-serif italic text-brand normal-case tracking-normal">
              prova gratuita
            </span>
            .
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-brand px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-foreground hover:brightness-110"
          >
            <MessageCircle size={16} />
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
