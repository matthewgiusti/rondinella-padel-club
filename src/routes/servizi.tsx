import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { MapDirections } from "@/components/MapDirections";
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  CalendarRange,
  Accessibility,
  LayoutGrid,
  MapPin,
} from "lucide-react";
import courtImg from "@/assets/court.jpg";

export const Route = createFileRoute("/servizi")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Campo da Padel a Firenze — Servizi · Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Campo da padel coperto a Firenze: prenotazione campi, corsi e lezioni padel a Firenze, wheelchair padel e tornei FITP. Comodo da Scandicci e Sesto Fiorentino.",
      },
      {
        name: "keywords",
        content:
          "campo da padel firenze, campo coperto padel, lezioni padel firenze, corsi padel firenze, padel scandicci, wheelchair padel",
      },
      { property: "og:title", content: "Servizi Padel a Firenze — Rondinella Padel Club" },
      {
        property: "og:description",
        content:
          "Campi coperti, corsi e lezioni di padel a Firenze. Prenota un campo o una lezione con i maestri FITP del Rondinella Padel Club.",
      },
      { property: "og:url", content: "/servizi" },
      { property: "og:image", content: "/favicon.jpg" },
    ],
    links: [{ rel: "canonical", href: "/servizi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://rondinella-padel-club.lovable.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Servizi",
              item: "https://rondinella-padel-club.lovable.app/servizi",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Dove si trova il campo da padel a Firenze?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Il Rondinella Padel Club è in Via Edoardo Detti 23, 50143 Firenze, comodo da tutta Firenze nord, Scandicci e Sesto Fiorentino, con ampio parcheggio nelle vicinanze.",
              },
            },
            {
              "@type": "Question",
              name: "I campi da padel sono coperti?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì: 3 campi sono totalmente coperti e 1 è semi-coperto, così si gioca tutto l'anno con qualsiasi condizione meteo.",
              },
            },
            {
              "@type": "Question",
              name: "Fate corsi e lezioni di padel a Firenze?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì, offriamo corsi stagionali e lezioni con maestri FITP da 1 a 4 persone, per tutti i livelli, dai principianti agli agonisti.",
              },
            },
            {
              "@type": "Question",
              name: "È possibile praticare wheelchair padel?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sì, il wheelchair padel fa parte del club: campi accessibili, istruttori formati e un calendario dedicato.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const WHATSAPP =
  "https://wa.me/393293712615?text=Ciao%2C%20vorrei%20informazioni%20sui%20servizi";

const services = [
  {
    icon: LayoutGrid,
    t: "Prenotazione campi",
    k: "Campo da padel coperto a Firenze",
    d: "Quattro campi (3 coperti + 1 semi-coperto), erba sintetica professionale e illuminazione LED. Prenoti, vieni, giochi — tutto l'anno.",
    to: "/contatti" as const,
  },
  {
    icon: GraduationCap,
    t: "Corsi & Lezioni",
    k: "Lezioni e corsi padel a Firenze",
    d: "Corsi stagionali e lezioni con maestri FITP da 1 a 4 persone. Per principianti, donne, junior e agonisti.",
    to: "/corsi" as const,
  },
  {
    icon: Accessibility,
    t: "Wheelchair Padel",
    k: "Padel accessibile a tutti",
    d: "Campi accessibili, istruttori formati e gruppi misti. Lo sport è di tutti, anche in carrozzina.",
    to: "/wheelchair" as const,
  },
  {
    icon: CalendarRange,
    t: "Tornei & Eventi",
    k: "Tornei sociali e FITP",
    d: "Tornei sociali e competizioni FITP, momenti di comunità e socialità dentro e fuori dal campo.",
    to: "/club" as const,
  },
];

const areas = [
  "Firenze nord",
  "Scandicci",
  "Sesto Fiorentino",
  "Campi Bisenzio",
  "Rifredi",
  "Novoli",
  "Castello",
  "Le Piagge",
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servizi · Padel a Firenze"
        title="Il padel a Firenze,"
        italicWord="vicino a te."
        description="Campi coperti, corsi e lezioni con maestri FITP, wheelchair padel e tornei. In Via Edoardo Detti 23, comodo da tutta Firenze, Scandicci e Sesto Fiorentino."
        image={courtImg}
      />

      {/* SERVICES GRID */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow">Cosa offriamo</p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-5xl">
            Tutto il padel,
            <br />
            <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
              in un solo club
            </span>
            .
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.t}
                className="group flex flex-col border border-border bg-surface p-8 transition-colors hover:border-brand md:p-10"
              >
                <s.icon size={28} className="text-brand" strokeWidth={1.6} />
                <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-brand">
                  {s.k}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                  {s.d}
                </p>
                <Link
                  to={s.to}
                  className="mt-8 inline-flex items-center gap-2 border-t border-border pt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-brand"
                >
                  Scopri di più
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="border-t border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow">Zone servite</p>
              <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
                Padel comodo
                <br />
                <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                  da tutta Firenze
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80">
                Siamo in Via Edoardo Detti 23, nel cuore di Firenze nord. Raggiungerci è
                semplice da Scandicci, Sesto Fiorentino e Campi Bisenzio, con ampio
                parcheggio nelle vicinanze.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {areas.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 bg-surface px-6 py-5 text-sm text-foreground/85"
                  >
                    <MapPin size={15} className="shrink-0 text-brand" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MAP & DIRECTIONS */}
      <section className="border-t border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <MapDirections />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-brand py-20 text-brand-foreground md:py-28">
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]">
            Pronto a giocare?
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-black uppercase leading-[1] tracking-tight md:text-6xl">
            Prenota il tuo
            <br />
            <span className="font-serif italic font-normal normal-case tracking-normal">
              campo a Firenze
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
            Scrivici su WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
