import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import clubImg from "@/assets/club-exterior.jpg";
import courtImg from "@/assets/court.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/club")({
  component: ClubPage,
  head: () => ({
    meta: [
      { title: "Il Club — Rondinella Padel Club · Firenze" },
      {
        name: "description",
        content:
          "Quattro campi, tre maestri FITP, una community che gioca insieme. Storia, valori e struttura del Rondinella Padel Club di Firenze nord.",
      },
      { property: "og:title", content: "Il Club — Rondinella Padel Club" },
      { property: "og:url", content: "/club" },
    ],
    links: [{ rel: "canonical", href: "/club" }],
  }),
});

function ClubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Il Club"
        title="Un posto"
        italicWord="dove tornare."
        description="Sport, amici, famiglia. Tre parole semplici che raccontano davvero come si vive il Rondinella ogni giorno."
        image={clubImg}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Chi siamo</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Un club aperto.
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  A tutti
                </span>
                .
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                Rondinella è uno sport club di Firenze nord dove al centro ci sono le
                persone, non l'infrastruttura. Sì, abbiamo quattro campi belli, tre
                maestri federali e una struttura comoda — ma il vero motivo per cui la
                gente torna è l'aria che si respira.
              </p>
              <p className="text-foreground/70">
                Non ci interessa fare il club esclusivo. Ci interessa essere il club del
                quartiere: quello dove un trentenne ex-calciatore, una signora che ha
                ripreso a muoversi, uno studente universitario e una famiglia con i
                ragazzini si trovano la stessa sera e finiscono al bar insieme.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-4">
            {[
              ["04", "Campi totali"],
              ["03", "Coperti"],
              ["03", "Maestri FITP"],
              ["7/7", "Giorni aperti"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="font-display text-4xl font-black text-brand md:text-5xl">
                  {n}
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[640px]">
            <img
              src={courtImg}
              alt="Campo da padel coperto al Rondinella Padel Club"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-20 md:px-16">
            <div className="max-w-lg">
              <p className="eyebrow">La struttura</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Tutto a portata
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  di mano
                </span>
                .
              </h2>
              <ul className="mt-10 space-y-5 text-sm text-foreground/85">
                {[
                  "3 campi indoor + 1 campo semi-coperto",
                  "Spogliatoi maschili e femminili con docce",
                  "Bar interno al circolo",
                  "Ristorante all'interno del complesso sportivo",
                  "Parcheggio ampio nelle immediate vicinanze",
                  "Centro commerciale a pochi minuti",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex gap-4 border-b border-border pb-5 last:border-b-0"
                  >
                    <span className="text-brand">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">I valori</p>
          <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
            Tre cose
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              non negoziabili
            </span>
            .
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Accessibilità",
                d: "Tutti possono giocare: principianti, esperti, giovani, meno giovani, in piedi o in carrozzina. Nessuno qui si sente fuori posto.",
              },
              {
                n: "02",
                t: "Community",
                d: "I tornei sociali, le americane, le serate al bar: organizziamo occasioni perché la gente si conosca, non solo perché paghi un'ora di campo.",
              },
              {
                n: "03",
                t: "Sport vero",
                d: "Maestri certificati, campi mantenuti bene, attrezzatura aggiornata. Si gioca seriamente, anche quando si ride.",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="border-t border-border pt-8 transition-colors hover:border-brand"
              >
                <div className="font-display text-sm font-bold text-brand">{c.n}</div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Lo staff</p>
          <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
            Tre maestri.
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              Un'unica idea di insegnamento
            </span>
            .
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Tutti e tre certificati FITP, tutti e tre alla pari: scegli il maestro o
            l'orario che preferisci, l'approccio è lo stesso. Tecnica seria e metodo
            accessibile, dal primo colpo al gioco di coppia.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "Dario Satti",
                d: "Maestro FITP. Lavora con principianti, gruppi e agonisti, dal primo approccio al perfezionamento.",
              },
              {
                n: "Filippo Giacomelli",
                d: "Maestro FITP. Segue corsi e lezioni private per ogni livello, con attenzione a tecnica e tattica.",
              },
              {
                n: "Nicola Manfredini",
                d: "Maestro FITP. Cura percorsi individuali e di gruppo, accompagnando ogni allievo nel suo percorso.",
              },
            ].map((p) => (
              <article
                key={p.n}
                className="border border-border bg-background p-8 transition-colors hover:border-brand"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {p.n}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-brand">
                  Maestro FITP
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">{p.d}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-brand py-24 text-brand-foreground md:py-28">
        <img
          src={communityImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="max-w-3xl font-serif text-3xl italic leading-snug md:text-5xl">
            "Qui non ci si sente ospiti. Ci si sente del posto."
          </h2>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em]">
            — Un socio, una sera qualsiasi
          </p>
        </div>
      </section>
    </PageShell>
  );
}
