import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-foreground transition-colors hover:brightness-110"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Qualcosa non ha funzionato
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Riprova o torna alla home — siamo a un messaggio di distanza.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:brightness-110"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { name: "theme-color", content: "#0a0a0a" },
      { title: "Rondinella Padel Club — Padel a Firenze e Scandicci" },
      {
        name: "description",
        content:
          "Padel a Firenze: 4 campi (3 coperti + 1 semi-coperto), corsi e lezioni per tutti i livelli, wheelchair padel e tornei FITP. In Via Edoardo Detti, Firenze.",
      },
      { property: "og:title", content: "Rondinella Padel Club — Firenze" },
      {
        property: "og:description",
        content:
          "Quattro campi, tre maestri FITP, corsi, lezioni, tornei e wheelchair padel. Il club di padel di Firenze.",
      },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Rondinella Padel Club" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsClub",
          name: "Rondinella Padel Club",
          sport: "Padel",
          telephone: "+393293712615",
          email: "info@rondinellapadelclub.it",
          url: "https://rondinellapadelclub.it",
          areaServed: ["Firenze", "Scandicci", "Sesto Fiorentino"],
          openingHours: "Mo-Su 07:00-23:30",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Edoardo Detti, 23",
            postalCode: "50143",
            addressLocality: "Firenze",
            addressRegion: "FI",
            addressCountry: "IT",
          },
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
