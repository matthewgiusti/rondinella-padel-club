import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import courtImg from "@/assets/court.jpg";

export const Route = createFileRoute("/wheelchair")({
  component: WheelchairPage,
  head: () => ({
    meta: [
      { title: "Wheelchair Padel a Firenze — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Wheelchair padel a Firenze dal 2023: campi accessibili, istruttori formati e carrozzine dedicate. Progetto premiato dalla FITP come Miglior Progetto Sociale in Toscana 2023.",
      },
      { property: "og:title", content: "Wheelchair Padel — Rondinella Padel Club" },
      { property: "og:url", content: "/wheelchair" },
    ],
    links: [{ rel: "canonical", href: "/wheelchair" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393712615?text=Ciao%2C%20vorrei%20informazioni%20sul%20wheelchair%20padel";

function WheelchairPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Wheelchair Padel"
        title="Lo sport"
        italicWord="è di tutti."
        description="Al Rondinella il wheelchair padel è una parte vera del club. Campi accessibili, istruttori dedicati e sessioni aperte a tutti i livelli."
        image={communityImg}

      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">Cos'è</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Stesso campo.
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  Stesso gioco
                </span>
                .
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                Dal <strong className="font-semibold text-foreground">settembre 2023</strong>,
                con il Progetto Wheelchair abbiamo aperto le porte del padel alle persone
                con disabilità motoria, convinti che questo sport possa abbattere ogni
                barriera. Si gioca sugli stessi campi del padel tradizionale, con regole
                leggermente adattate.
              </p>
              <p className="text-foreground/70">
                Organizziamo lezioni individuali, sessioni di gruppo e partite miste —
                perché giocare insieme è il punto. I campi sono accessibili dall'ingresso
                fino agli spogliatoi e mettiamo a disposizione carrozzine da padel
                dedicate, in prova per chi vuole iniziare senza attrezzatura propria.
                Insieme a ConsorzioBlu e al Gruppo Sportivo Unità Spinale accompagniamo
                anche chi vuole arrivare all'agonismo.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Il programma</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Lezione introduttiva",
                d: "Una sessione individuale con un istruttore formato. Per provare, capire, vedere come ci si sente in campo.",
                p: "Su richiesta",
              },
              {
                t: "Corso settimanale",
                d: "Un appuntamento fisso a settimana, in piccolo gruppo. Tecnica, mobilità, partite.",
                p: "Su richiesta",
              },
              {
                t: "Partite miste",
                d: "Sessioni di gioco con altri giocatori del club. Per chi gioca da tempo e cerca compagni.",
                p: "Aperte",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="flex flex-col border border-border bg-background p-8 transition-colors hover:border-brand"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                  {c.d}
                </p>
                <div className="mt-8 border-t border-border pt-5 font-display text-sm font-bold text-brand">
                  {c.p}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-16 grid gap-5 md:grid-cols-2">
            {[
              "Campi accessibili dall'ingresso agli spogliatoi",
              "Istruttori formati al wheelchair padel",
              "Sedie sportive disponibili in prova",
              "Gruppi misti aperti a tutti i giocatori",
            ].map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 border-t border-border pt-5 text-sm text-foreground/85"
              >
                <Check className="mt-0.5 shrink-0 text-brand" size={18} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">I traguardi</p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
            Un progetto
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              che cresce
            </span>
            .
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            In pochi anni il Progetto Wheelchair è diventato un punto di riferimento
            per l'inclusione attraverso lo sport. Vogliamo continuare a crescere e a
            ispirare altri club, perché il padel sia davvero uno sport per tutti.
          </p>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {[
              ["5+", "Open Day organizzati"],
              ["20", "Atleti al primo Torneo Misto Wheelchair"],
              ["2023", "Miglior Progetto Sociale in Toscana — FITP"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background p-8">
                <div className="font-display text-4xl font-black text-brand md:text-5xl">
                  {n}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {l}
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
              <p className="eyebrow">Insieme a noi</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                I partner
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  del progetto
                </span>
                .
              </h2>
              <p className="mt-8 text-base leading-relaxed text-foreground/75">
                Il Progetto Wheelchair esiste grazie alla collaborazione con realtà
                che credono nello sport come strumento di inclusione e aggregazione.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-px bg-border sm:grid-cols-2">
                {[
                  "Spingi la Vita Onlus",
                  "Fondazione Decathlon",
                  "Decathlon Italia",
                  "Rotary Club Firenze Est",
                  "Gabriele Borgogni Onlus",
                  "ConsorzioBlu",
                  "Gruppo Sportivo Unità Spinale",
                ].map((p) => (
                  <li
                    key={p}
                    className="bg-surface p-6 text-sm font-semibold uppercase tracking-tight text-foreground/85"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="border-t border-border bg-background">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[360px] md:min-h-[560px]">
            <img
              src={courtImg}
              alt="Campo accessibile al Rondinella"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center bg-brand px-5 py-20 text-brand-foreground md:px-16">
            <div className="max-w-lg">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
                Vieni a provare
              </p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Scrivici.
                <br />
                <span className="font-serif italic font-normal normal-case tracking-normal">
                  Organizziamo tutto noi
                </span>
                .
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-foreground/80">
                Ti aspettiamo per una lezione introduttiva. Bastano una
                telefonata o un messaggio: decidiamo insieme orario, istruttore e
                attrezzatura.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-background px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground hover:bg-foreground hover:text-background"
              >
                <MessageCircle size={16} />
                Scrivici su WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
