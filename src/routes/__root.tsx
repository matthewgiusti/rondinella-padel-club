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
import {
  META_PIXEL_ID,
  GA4_MEASUREMENT_ID,
  usePixelPageViews,
  usePixelScrollDepth,
  useGA4PageViews,
} from "@/lib/meta-pixel";

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
          "@type": ["SportsActivityLocation", "SportsClub"],
          "@id": "https://rondinella-padel-club.lovable.app/#organization",
          name: "Rondinella Padel Club",
          alternateName: "RPC — Rondinella Padel Club",
          description:
            "Club di padel a Firenze: 4 campi (3 coperti + 1 semi-coperto), corsi e lezioni per tutti i livelli, wheelchair padel e tornei FITP.",
          sport: "Padel",
          telephone: "+393293712615",
          email: "info@rondinellapadelclub.it",
          url: "https://rondinella-padel-club.lovable.app",
          image: "https://rondinella-padel-club.lovable.app/favicon.jpg",
          logo: "https://rondinella-padel-club.lovable.app/favicon.jpg",
          priceRange: "€€",
          currenciesAccepted: "EUR",
          areaServed: [
            { "@type": "City", name: "Firenze" },
            { "@type": "City", name: "Scandicci" },
            { "@type": "City", name: "Sesto Fiorentino" },
            { "@type": "City", name: "Campi Bisenzio" },
          ],
          sameAs: ["https://instagram.com/rondinellapadelclub"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "07:00",
              closes: "23:30",
            },
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: 43.7985,
            longitude: 11.2255,
          },
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=Rondinella%20Padel%20Club%20Via%20Edoardo%20Detti%2023%20Firenze",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Edoardo Detti, 23",
            postalCode: "50143",
            addressLocality: "Firenze",
            addressRegion: "FI",
            addressCountry: "IT",
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Campi coperti", value: true },
            { "@type": "LocationFeatureSpecification", name: "Spogliatoi", value: true },
            { "@type": "LocationFeatureSpecification", name: "Bar interno", value: true },
            { "@type": "LocationFeatureSpecification", name: "Ristorante", value: true },
            { "@type": "LocationFeatureSpecification", name: "Parcheggio", value: true },
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Corsi di padel a Firenze",
                serviceType: "Corsi di padel",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lezioni di padel con maestri FITP",
                serviceType: "Lezioni di padel",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Noleggio campo da padel coperto",
                serviceType: "Prenotazione campo",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wheelchair padel",
                serviceType: "Padel in carrozzina",
              },
            },
          ],
        }),
      },
      {
        children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  usePixelPageViews();
  usePixelScrollDepth();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
