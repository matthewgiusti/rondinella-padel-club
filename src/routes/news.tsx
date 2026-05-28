import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import tournamentImg from "@/assets/tournament.jpg";
import communityImg from "@/assets/community.jpg";
import lessonsImg from "@/assets/lessons.jpg";
import courtImg from "@/assets/court.jpg";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News, Tornei & Eventi — Rondinella Padel Club" },
      {
        name: "description",
        content:
          "Tornei FITP, americane, eventi sociali e novità del Rondinella Padel Club di Firenze. Resta aggiornato sul calendario del club.",
      },
      { property: "og:title", content: "News & Eventi — Rondinella Padel Club" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
});

const WHATSAPP =
  "https://wa.me/393000000000?text=Ciao%2C%20vorrei%20iscrivermi%20a%20un%20torneo";

const posts = [
  {
    img: tournamentImg,
    cat: "Torneo FITP",
    d: "21 GIU 2026",
    t: "Tappa FITP Bronze d'estate",
    e: "Iscrizioni aperte al torneo federale di giugno. Maschile, femminile e misto.",
    slug: "tappa-fitp-bronze-giugno",
  },
  {
    img: communityImg,
    cat: "Evento sociale",
    d: "27 LUG 2026",
    t: "Notte del Padel — terza edizione",
    e: "Partite a oltranza dalle 19, cena sociale, dj set fino a tardi. Si gioca, si mangia, si resta.",
    slug: "notte-del-padel-2026",
  },
  {
    img: lessonsImg,
    cat: "Corsi",
    d: "01 SET 2026",
    t: "Aperte le iscrizioni ai corsi autunnali",
    e: "Nuovi gruppi per principianti, intermedi, junior e donne. Posti limitati.",
    slug: "corsi-autunno-2026",
  },
  {
    img: courtImg,
    cat: "Club",
    d: "15 MAG 2026",
    t: "Inaugurato il quarto campo",
    e: "Da maggio è ufficialmente in funzione il nostro quarto campo, semi-coperto e illuminato.",
    slug: "quarto-campo-aperto",
  },
];

const upcoming = [
  { d: "VEN", t: "Americana del venerdì", h: "20:00 · settimanale" },
  { d: "21 GIU", t: "Torneo sociale d'estate", h: "Weekend" },
  { d: "12 LUG", t: "Tappa FITP Bronze", h: "Sab + Dom" },
  { d: "27 LUG", t: "Notte del Padel", h: "Dalle 19:00" },
  { d: "10 AGO", t: "Mixed Ferragosto", h: "Pomeriggio" },
];

function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News, Tornei & Eventi"
        title="Cosa succede"
        italicWord="al club."
        description="Tornei FITP, americane, serate e tutte le novità del Rondinella. Aggiornato settimanalmente."
        image={tournamentImg}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Ultime dal club</p>
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {posts.map((p) => (
                  <article
                    key={p.slug}
                    className="group flex flex-col border border-border bg-surface transition-all hover:border-brand"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.t}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-brand">
                        <span>{p.cat}</span>
                        <span className="text-foreground/30">·</span>
                        <span className="text-muted-foreground">{p.d}</span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold uppercase leading-tight tracking-tight">
                        {p.t}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                        {p.e}
                      </p>
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80 hover:text-brand"
                      >
                        Info & iscrizioni <ArrowRight size={14} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="md:col-span-4 md:col-start-9">
              <div className="sticky top-24 border border-border bg-surface p-8">
                <div className="flex items-center gap-3 text-brand">
                  <Calendar size={18} />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                    Prossimi appuntamenti
                  </p>
                </div>
                <ul className="mt-8 divide-y divide-border">
                  {upcoming.map((e) => (
                    <li key={e.t} className="py-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                        {e.d}
                      </div>
                      <div className="mt-1 font-display text-sm font-bold uppercase tracking-tight">
                        {e.t}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {e.h}
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-3 bg-brand px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-foreground hover:brightness-110"
                >
                  <MessageCircle size={14} />
                  Iscriviti via WhatsApp
                </a>
                <Link
                  to="/corsi"
                  className="mt-3 flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/80 hover:border-brand hover:text-brand"
                >
                  Vedi i corsi
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
