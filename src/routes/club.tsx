import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import clubImg from "@/assets/club-exterior.jpg";
import courtImg from "@/assets/court.jpg";
import racketImg from "@/assets/racket-detail.jpg";

export const Route = createFileRoute("/club")({
  component: ClubPage,
  head: () => ({
    meta: [
      { title: "Il Club — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Storia, valori e struttura del Rondinella Padel Club: un club di padel a Milano costruito attorno alla community.",
      },
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
        italicWord="che è anche casa."
        description="Rondinella nasce nel 2019 da un gruppo di amici e una convinzione: il padel non è solo uno sport, è un modo di stare insieme."
        image={clubImg}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">La storia</p>
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
                Sei anni di
                <br />
                <span className="font-serif italic text-brand normal-case tracking-normal">
                  partite
                </span>{" "}
                vere.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>
                Abbiamo aperto con due campi e l'idea di non vendere mai un'ora al
                miglior offerente. Volevamo un club: gente che torna, che si conosce,
                che organizza la partita del giovedì da sola.
              </p>
              <p>
                Sei anni dopo i campi sono quattro, i soci più di mille, ma la regola è
                rimasta. Si entra come ospiti. Si esce come parte di qualcosa.
              </p>
            </div>
          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-4">
            {[
              ["2019", "Apertura"],
              ["04", "Campi"],
              ["1.200+", "Soci"],
              ["38", "Tornei l'anno"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-border pt-6">
                <div className="font-display text-4xl font-bold text-brand md:text-5xl">
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

      <section className="border-t border-border bg-surface py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[640px]">
            <img
              src={courtImg}
              alt="Interno campo da padel"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-5 py-20 md:px-16">
            <div className="max-w-lg">
              <p className="eyebrow">La struttura</p>
              <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
                Tutto ciò che serve.
                <br />
                <span className="font-serif italic text-brand normal-case tracking-normal">
                  Niente di più
                </span>
                .
              </h2>
              <ul className="mt-10 space-y-5 text-sm text-foreground/85">
                {[
                  "3 campi indoor panoramici + 1 outdoor coperto",
                  "Spogliatoi con docce private e prodotti dedicati",
                  "Pro shop con noleggio e prova racchette",
                  "Bar e cucina con piatti leggeri post-partita",
                  "Parcheggio gratuito riservato ai soci",
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
          <p className="eyebrow">Lo staff</p>
          <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
            Le persone del club
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "Marco Sereni",
                r: "Head Coach · FIT-FIP",
                d: "15 anni di tennis, 8 di padel. Allena la prima squadra del club.",
              },
              {
                n: "Lucia Bertelli",
                r: "Maestra junior & women",
                d: "Specializzata nei corsi femminili e giovanili. Ex giocatrice serie B.",
              },
              {
                n: "Daniele Conte",
                r: "Direttore sportivo",
                d: "Organizza tornei, leghe e tutta la vita interna del club.",
              },
            ].map((p) => (
              <article
                key={p.n}
                className="border-t border-border pt-8 transition-colors hover:border-brand"
              >
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {p.n}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-brand">
                  {p.r}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  {p.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-surface py-28">
        <img
          src={racketImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="max-w-3xl font-serif text-3xl italic leading-snug text-foreground md:text-5xl">
            "Non costruiamo un centro sportivo. Costruiamo un'abitudine."
          </h2>
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-brand">
            — I fondatori
          </p>
        </div>
      </section>
    </PageShell>
  );
}
