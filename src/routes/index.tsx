import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin, Clock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/hero.jpg";
import courtImg from "@/assets/court.jpg";
import racketImg from "@/assets/racket-detail.jpg";
import communityImg from "@/assets/community.jpg";
import lessonsImg from "@/assets/lessons.jpg";
import tournamentImg from "@/assets/tournament.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Rondinella Padel Club — Padel a Milano" },
      {
        name: "description",
        content:
          "Campi premium, corsi per tutti i livelli, tornei e una community autentica. Vivi il padel a Milano da Rondinella.",
      },
    ],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Identity />
      <Courts />
      <Lessons />
      <Tournaments />
      <WhatsAppCTA />
      <Testimonials />
      <Visit />
    </PageShell>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <img
        src={heroImg}
        alt="Partita di padel serale al Rondinella Padel Club"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-24 pt-32 md:px-10 md:pb-32">
        <p className="eyebrow animate-fade-up">Milano · Dal 2019</p>
        <h1 className="mt-6 max-w-5xl font-display text-[44px] font-bold uppercase leading-[0.92] tracking-tight text-foreground animate-fade-up md:text-[112px]">
          Il padel
          <br />
          è un{" "}
          <span className="font-serif text-brand italic normal-case tracking-normal">
            rituale
          </span>
          .
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-foreground/80 animate-fade-up md:text-lg">
          Quattro campi, una community, una sola idea di club: un posto vero dove
          tornare la sera, giocare bene e fermarsi a parlare.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-fade-up">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-brand px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-foreground transition-all hover:brightness-110"
          >
            <MessageCircle size={16} />
            Prenota una partita
          </a>
          <Link
            to="/club"
            className="group inline-flex items-center justify-center gap-3 border border-border bg-transparent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground transition-all hover:border-brand hover:text-brand"
          >
            Scopri il club
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* footer strip */}
        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
          {[
            ["04", "Campi indoor"],
            ["365", "Giorni all'anno"],
            ["07—24", "Orario"],
            ["1.2k", "Soci attivi"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-2xl font-bold text-brand md:text-3xl">
                {n}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ IDENTITY ------------------------------ */
function Identity() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Il nostro mondo</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-6xl">
              Un club,
              <br />
              non un{" "}
              <span className="font-serif italic text-brand normal-case tracking-normal">
                centro sportivo
              </span>
              .
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Rondinella nasce da un'idea semplice: restituire al padel ciò che lo rende
              speciale. La partita del martedì sera. Il caffè prima del primo set. Le
              persone che ritrovi sempre. Il rumore della pallina sul vetro.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
              Non vendiamo ore di campo. Costruiamo un luogo dove sentirsi a casa,
              giocando.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3 md:gap-6">
          {[
            {
              n: "01",
              t: "Atmosfera",
              d: "Luce calda, materiali veri, silenzi che contano. Il club è pensato come un posto in cui restare.",
            },
            {
              n: "02",
              t: "Community",
              d: "Soci che si conoscono per nome. Tornei interni, serate, partite organizzate da chi gioca.",
            },
            {
              n: "03",
              t: "Cura",
              d: "Campi controllati ogni giorno, spogliatoi puliti, attrezzatura aggiornata. Nessun dettaglio lasciato al caso.",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="border-t border-border pt-8 transition-colors hover:border-brand"
            >
              <div className="font-display text-sm font-semibold text-brand">{c.n}</div>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">
                {c.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- COURTS ------------------------------- */
function Courts() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[720px]">
          <img
            src={courtImg}
            alt="Campo da padel al tramonto"
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 md:px-16 md:py-32">
          <div className="max-w-lg">
            <p className="eyebrow">Campi & Strutture</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
              Quattro campi,
              <br />
              <span className="font-serif italic text-brand normal-case tracking-normal">
                un'unica esigenza
              </span>
              : giocare bene.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-foreground/75">
              Tre campi indoor panoramici e uno outdoor coperto. Erba sintetica
              professionale, illuminazione LED tarata per il gioco serale, vetri
              temperati di ultima generazione.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              {[
                ["Superficie", "Mondo Supercourt"],
                ["Illuminazione", "LED 1200 lux"],
                ["Apertura", "07:00 — 24:00"],
                ["Prenotazione", "App + WhatsApp"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-base font-semibold text-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- LESSONS ------------------------------ */
function Lessons() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Corsi & Lezioni</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-6xl">
              Dal primo colpo
              <br />
              al{" "}
              <span className="font-serif italic text-brand normal-case tracking-normal">
                vibora
              </span>
              .
            </h2>
          </div>
          <Link
            to="/corsi"
            className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80 hover:text-brand"
          >
            Tutti i corsi
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Avviamento",
              d: "Per chi prende la pala per la prima volta. Tecnica di base, regole, primi scambi.",
              p: "Da 35€ / lezione",
              c: "Lun · Mer · Ven",
            },
            {
              t: "Intermedio",
              d: "Costruzione del gioco, tattica di coppia, controllo del rimbalzo sui vetri.",
              p: "Da 40€ / lezione",
              c: "Mar · Gio · Sab",
            },
            {
              t: "Avanzato",
              d: "Lavoro su colpi specifici, video-analisi, preparazione tornei FIP.",
              p: "Da 55€ / lezione",
              c: "Su prenotazione",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              className={`group relative flex flex-col border border-border bg-surface p-8 transition-all hover:border-brand md:p-10 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
                {c.c}
              </p>
              <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight">
                {c.t}
              </h3>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/70">
                {c.d}
              </p>
              <div className="mt-10 flex items-end justify-between border-t border-border pt-6">
                <span className="font-display text-base font-semibold">{c.p}</span>
                <ArrowRight
                  size={20}
                  className="text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-brand"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-20 aspect-[21/9] overflow-hidden">
          <img
            src={lessonsImg}
            alt="Lezione di padel in piccolo gruppo"
            width={1920}
            height={820}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-5 md:px-16">
            <p className="max-w-md font-serif text-2xl italic leading-snug text-foreground md:text-4xl">
              "Insegniamo a giocare. Non solo a tirare la pallina."
              <span className="mt-4 block text-xs not-italic uppercase tracking-[0.22em] text-brand">
                — Marco Sereni, Head Coach
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TOURNAMENTS ---------------------------- */
function Tournaments() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Tornei & Community</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-6xl">
              Si gioca,
              <br />
              poi si{" "}
              <span className="font-serif italic text-brand normal-case tracking-normal">
                resta
              </span>
              .
            </h2>
            <p className="mt-8 text-base leading-relaxed text-foreground/75">
              Tornei interni ogni mese, americane del venerdì, leghe stagionali. E un
              bar che dopo la partita diventa il vero campo da gioco.
            </p>
            <Link
              to="/tornei"
              className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
            >
              Calendario completo
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                {
                  d: "14 GIU",
                  t: "Americana del Venerdì",
                  s: "Open · Tutti i livelli",
                  h: "20:00",
                },
                {
                  d: "22 GIU",
                  t: "Torneo Rondinella Summer",
                  s: "Maschile · Femminile · Misto",
                  h: "Tutto il weekend",
                },
                {
                  d: "06 LUG",
                  t: "Notte Bianca del Padel",
                  s: "Partite + DJ set + cena",
                  h: "Dalle 18:00",
                },
                {
                  d: "20 LUG",
                  t: "Lega Estiva — Girone A",
                  s: "Su iscrizione",
                  h: "Serale",
                },
              ].map((e) => (
                <li
                  key={e.t}
                  className="group flex flex-col gap-2 py-6 transition-colors hover:bg-background/40 md:flex-row md:items-center md:gap-8"
                >
                  <div className="w-24 font-display text-sm font-bold text-brand">
                    {e.d}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-tight md:text-xl">
                      {e.t}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {e.s}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/70">
                    <Clock size={12} />
                    {e.h}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHATSAPP CTA --------------------------- */
function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-32 md:py-44">
      <img
        src={racketImg}
        alt=""
        width={1080}
        height={1920}
        loading="lazy"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="eyebrow">Prenota la tua partita</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight md:text-7xl">
          Scrivici su WhatsApp.
          <br />
          <span className="font-serif italic text-brand normal-case tracking-normal">
            Rispondiamo subito.
          </span>
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
          Disponibilità campi, prove gratuite, primo corso, ingresso in una lega — un
          messaggio basta per cominciare.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-brand px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-foreground transition-all hover:brightness-110"
        >
          <MessageCircle size={16} />
          Apri WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const items = [
    {
      q: "Sono entrata pensando di prendere una lezione. Sono uscita con una squadra.",
      n: "Giulia M.",
      r: "Socia dal 2022",
    },
    {
      q: "L'unico posto dove ti chiamano per nome appena entri. E i campi sono i migliori della zona.",
      n: "Andrea T.",
      r: "Socio dal 2020",
    },
    {
      q: "Il mio rituale del giovedì. Partita, doccia, un bicchiere al bar.",
      n: "Federico R.",
      r: "Socio dal 2021",
    },
  ];
  return (
    <section className="border-t border-border bg-surface py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="eyebrow">Le voci del club</p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="flex flex-col">
              <div className="font-serif text-3xl text-brand">"</div>
              <blockquote className="mt-2 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-display text-sm font-semibold uppercase tracking-tight">
                  {t.n}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={communityImg}
              alt="Soci al bar dopo la partita"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={tournamentImg}
              alt="Trofeo torneo Rondinella"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ VISIT/MAP ----------------------------- */
function Visit() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Vieni a trovarci</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl">
              Via della Rondinella 12
              <br />
              <span className="font-serif italic text-brand normal-case tracking-normal">
                Milano
              </span>
            </h2>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <Clock size={18} className="mt-0.5 text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Orari
                  </div>
                  <div className="mt-1 text-foreground/85">
                    Lun—Dom · 07:00 — 24:00
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-0.5 text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Indirizzo
                  </div>
                  <div className="mt-1 text-foreground/85">
                    Via della Rondinella 12, 20100 Milano
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle size={18} className="mt-0.5 text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Contatto
                  </div>
                  <div className="mt-1 text-foreground/85">+39 000 000 0000</div>
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
  );
}
