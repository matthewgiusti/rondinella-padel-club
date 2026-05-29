import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, MapPin, Clock, Users, Heart, Trophy, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import heroImg from "@/assets/hero.jpg";
import courtImg from "@/assets/court.jpg";
import communityImg from "@/assets/community.jpg";
import lessonsImg from "@/assets/lessons.jpg";
import tournamentImg from "@/assets/tournament.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Rondinella Padel Club — Padel a Firenze e Scandicci" },
      {
        name: "description",
        content:
          "4 campi (3 coperti + 1 semi-coperto), corsi, wheelchair padel, tornei FITP. Il club di padel di Firenze nord per chi vuole giocare e stare bene.",
      },
      { property: "og:title", content: "Rondinella Padel Club — Firenze" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393712615?text=Ciao%20Rondinella%2C%20vorrei%20informazioni";

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Ticker />
      <Identity />
      <Pillars />
      <Courts />
      <Lessons />
      <Wheelchair />
      <Tournaments />
      <Testimonials />
      <WhatsAppCTA />
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
        alt="Partita di padel al Rondinella Padel Club di Firenze"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-32 md:px-10 md:pb-28">
        <p className="eyebrow animate-fade-up">Padel a Firenze · Coperto · Tutti i livelli</p>
        <h1 className="mt-6 max-w-5xl font-display text-[44px] font-black uppercase leading-[0.92] tracking-tight text-foreground animate-fade-up md:text-[120px]">
          Gioca.
          <br />
          Ridi.{" "}
          <span className="font-serif text-brand italic normal-case tracking-normal font-normal">
            Torna.
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 animate-fade-up md:text-lg">
          Il padel come ti piace: quattro campi, tre maestri FITP, gente che ti chiama
          per nome dalla seconda volta. Per chi gioca da sempre e per chi non ha mai
          tenuto in mano una pala.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-fade-up">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-brand px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-foreground transition-all hover:brightness-110"
          >
            <MessageCircle size={16} />
            Prenota su WhatsApp
          </a>
          <Link
            to="/corsi"
            className="group inline-flex items-center justify-center gap-3 border border-foreground/30 bg-transparent px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground transition-all hover:border-brand hover:text-brand"
          >
            Prova gratuita
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
          {[
            ["04", "Campi"],
            ["03", "Coperti"],
            ["FITP", "Maestri certificati"],
            ["7 / 24", "Sempre aperti"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-2xl font-black text-brand md:text-3xl">
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

/* -------------------------------- TICKER ------------------------------ */
function Ticker() {
  const items = [
    "Campi coperti",
    "Corsi per tutti",
    "Wheelchair padel",
    "Tornei FITP",
    "Americane del venerdì",
    "Bar interno",
    "Parcheggio",
    "Aperti 7/7",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-brand text-brand-foreground">
      <div className="flex whitespace-nowrap py-3 animate-ticker">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">{it}</span>
            <span className="text-xs">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ IDENTITY ------------------------------ */
function Identity() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="eyebrow">Benvenuti al Rondinella</p>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-7xl">
              Un club fatto
              <br />
              di{" "}
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                persone
              </span>
              .
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              Rondinella è uno sport club di Firenze nord nato per chi ama muoversi
              insieme agli altri. Famiglie, gruppi di amici, ex sportivi, principianti
              curiosi: qui si gioca a padel ma soprattutto si sta bene.
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
              Niente snob, nessuna iscrizione obbligatoria, nessun livello minimo.
              Prenoti, vieni, giochi. Il resto succede da sé.
            </p>
            <Link
              to="/club"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand"
            >
              Scopri il club <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PILLARS ------------------------------ */
function Pillars() {
  const items = [
    {
      icon: Heart,
      t: "Sport · Amici · Famiglia",
      d: "Tre parole che scriviamo sui muri perché sono quelle che facciamo davvero, ogni sera.",
    },
    {
      icon: Users,
      t: "Per tutti i livelli",
      d: "Hai 18 o 65 anni? Hai giocato a tennis o non hai mai preso una pala? Ti troviamo il campo giusto.",
    },
    {
      icon: GraduationCap,
      t: "Maestri FITP",
      d: "Tre tecnici federali che insegnano col sorriso. Si impara, ci si diverte, si torna.",
    },
    {
      icon: Trophy,
      t: "Tornei & socialità",
      d: "Americane infrasettimanali, tornei FITP nel weekend, serate aperte. Il giovedì non si sta a casa.",
    },
  ];
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-px bg-border md:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="group flex flex-col bg-surface p-8 transition-colors hover:bg-background md:p-10"
            >
              <it.icon size={28} className="text-brand" strokeWidth={1.6} />
              <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-tight">
                {it.t}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{it.d}</p>
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
    <section className="border-t border-border bg-background">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[720px]">
          <img
            src={courtImg}
            alt="Campo da padel coperto al Rondinella"
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 md:px-16 md:py-32">
          <div className="max-w-lg">
            <p className="eyebrow">I campi</p>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
              Quattro campi.
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                Sempre giocabili
              </span>
              .
            </h2>
            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              Tre campi totalmente coperti e uno semi-coperto: che piova, che faccia
              caldo, che sia gennaio o ferragosto — qui si gioca. Erba sintetica
              professionale, illuminazione LED, vetri temperati.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              {[
                ["Coperti", "3 indoor"],
                ["Semi-coperto", "1 outdoor"],
                ["Spogliatoi", "M / F separati"],
                ["Servizi", "Bar interno + parcheggio"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-base font-bold text-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-foreground hover:brightness-110"
            >
              Prenota un campo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- LESSONS ------------------------------ */
function Lessons() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Corsi & Lezioni</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
              Si impara
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                divertendosi
              </span>
              .
            </h2>
          </div>
          <Link
            to="/corsi"
            className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 hover:text-brand"
          >
            Tutti i corsi
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Prima volta",
              d: "Una lezione di prova gratuita per capire se il padel fa per te. Pala e palline le mettiamo noi.",
              p: "Gratis",
              c: "Su appuntamento",
            },
            {
              t: "Corsi di gruppo",
              d: "Massimo 4 persone per maestro. Tecnica, regole, scambi veri da subito.",
              p: "Da 30€",
              c: "Pomeriggio · sera",
            },
            {
              t: "Lezione privata",
              d: "Tu (o tu e il tuo compagno) e il maestro. Per migliorare in fretta.",
              p: "Da 50€",
              c: "7 giorni su 7",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group relative flex flex-col border border-border bg-surface p-8 transition-all hover:border-brand md:p-10"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand">{c.c}</p>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">
                {c.t}
              </h3>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/70">
                {c.d}
              </p>
              <div className="mt-10 flex items-end justify-between border-t border-border pt-6">
                <span className="font-display text-base font-bold">{c.p}</span>
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
            alt="Lezione di padel di gruppo"
            width={1920}
            height={820}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-5 md:px-16">
            <p className="max-w-lg font-serif text-2xl italic leading-snug text-foreground md:text-4xl">
              "Insegniamo a giocare. Ma soprattutto a divertirsi giocando."
              <span className="mt-4 block text-xs not-italic uppercase tracking-[0.22em] text-brand">
                — I maestri Rondinella
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHEELCHAIR ---------------------------- */
function Wheelchair() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Wheelchair Padel</p>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
              Lo sport è
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                di tutti
              </span>
              .
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Al Rondinella il wheelchair padel non è un'attività extra: è parte del
              club. Campi accessibili, istruttori formati, gruppi misti e un calendario
              dedicato. Vieni a provare, da solo o con un amico.
            </p>
            <Link
              to="/wheelchair"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand"
            >
              Scopri il programma <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="border-l-2 border-brand pl-6 md:pl-10">
              <p className="font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
                "Qui non ti senti diverso. Ti senti un giocatore."
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                — Luca, socio dal 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TOURNAMENTS ---------------------------- */
function Tournaments() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Tornei & Eventi</p>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
              Si gioca,
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                si tifa
              </span>
              , si resta.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              Americane del venerdì, tornei interni e tappe FITP ufficiali. E dopo la
              partita ci si ferma: chi gioca tifa, chi tifa beve, chi beve organizza la
              prossima.
            </p>
            <Link
              to="/news"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand"
            >
              Calendario completo <ArrowRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                {
                  d: "VEN",
                  t: "Americana settimanale",
                  s: "Tutti i livelli · iscrizione singola",
                  h: "20:00",
                },
                {
                  d: "21 GIU",
                  t: "Torneo sociale d'estate",
                  s: "Maschile · Femminile · Misto",
                  h: "Weekend",
                },
                {
                  d: "12 LUG",
                  t: "Tappa FITP Bronze",
                  s: "Open · gara federale",
                  h: "Sabato + Domenica",
                },
                {
                  d: "27 LUG",
                  t: "Notte del padel",
                  s: "Partite + cena sociale + musica",
                  h: "Dalle 19:00",
                },
              ].map((e) => (
                <li
                  key={e.t}
                  className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface/40 md:flex-row md:items-center md:gap-8"
                >
                  <div className="w-24 font-display text-sm font-bold text-brand">
                    {e.d}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
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

/* ----------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const items = [
    {
      q: "Sono entrata per una lezione di prova. Tre mesi dopo ho una squadra fissa il martedì.",
      n: "Giulia",
      r: "Socia dal 2024",
    },
    {
      q: "Mio figlio gioca, io gioco, mia moglie tifa al bar. È diventato il posto della famiglia.",
      n: "Andrea",
      r: "Socio dal 2022",
    },
    {
      q: "Non avevo mai fatto sport in vita mia. Qui sono partito da zero senza sentirmi fuori posto.",
      n: "Federico",
      r: "Socio dal 2025",
    },
  ];
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="eyebrow">Le voci del club</p>
        <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
          Cosa dicono i nostri soci
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="flex flex-col">
              <div className="font-serif text-5xl leading-none text-brand">"</div>
              <blockquote className="mt-2 font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-display text-sm font-bold uppercase tracking-tight">
                  {t.n}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.r}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
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
              alt="Premiazione torneo Rondinella"
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

/* ----------------------------- WHATSAPP CTA --------------------------- */
function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-brand py-24 text-brand-foreground md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
          Prenota la tua partita
        </p>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
          Un messaggio
          <br />
          e sei{" "}
          <span className="font-serif italic font-normal normal-case tracking-normal">
            in campo
          </span>
          .
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-foreground/80 md:text-lg">
          Disponibilità campi, prova gratuita, info sui corsi o wheelchair padel — su
          WhatsApp rispondiamo entro pochi minuti.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-background px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground transition-all hover:bg-foreground hover:text-background"
        >
          <MessageCircle size={16} />
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ------------------------------ VISIT/MAP ----------------------------- */
function Visit() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Vieni a trovarci</p>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
              Sesto Fiorentino
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                Firenze nord
              </span>
            </h2>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <Clock size={18} className="mt-0.5 text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Aperti
                  </div>
                  <div className="mt-1 text-foreground/85">
                    Lun—Dom · 08:00 — 23:30
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
                    Via della Rondinella · 50019 Sesto Fiorentino (FI)
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle size={18} className="mt-0.5 text-brand" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Contatto rapido
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.18%2C43.82%2C11.24%2C43.86&layer=mapnik"
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
