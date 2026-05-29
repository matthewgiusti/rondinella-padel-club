import { MapPin, Navigation, Car } from "lucide-react";

/* Rondinella Padel Club — Via Edoardo Detti, 23, 50143 Firenze (FI) */
export const CLUB_ADDRESS = "Via Edoardo Detti, 23, 50143 Firenze (FI)";
export const CLUB_GEO = { lat: 43.7985, lng: 11.2255 };

const DEST_QUERY = encodeURIComponent(
  "Rondinella Padel Club, Via Edoardo Detti 23, 50143 Firenze",
);

export const MAP_EMBED = `https://www.google.com/maps?q=${DEST_QUERY}&output=embed`;
export const GOOGLE_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${DEST_QUERY}`;
export const APPLE_DIRECTIONS = `https://maps.apple.com/?daddr=${DEST_QUERY}`;
export const WAZE_DIRECTIONS = `https://waze.com/ul?ll=${CLUB_GEO.lat},${CLUB_GEO.lng}&navigate=yes`;

type Props = {
  /** Render the section heading/eyebrow. Default true. */
  withHeading?: boolean;
};

export function MapDirections({ withHeading = true }: Props) {
  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-5">
        {withHeading && (
          <>
            <p className="eyebrow">Dove siamo</p>
            <h2 className="mt-6 font-display text-3xl font-black uppercase leading-[1] tracking-tight md:text-5xl">
              Firenze
              <br />
              <span className="font-serif italic text-brand font-normal normal-case tracking-normal">
                Via Edoardo Detti
              </span>
            </h2>
          </>
        )}

        <ul className="mt-8 space-y-6 text-sm">
          <li className="flex items-start gap-4">
            <MapPin size={18} className="mt-0.5 text-brand" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Indirizzo
              </div>
              <div className="mt-1 text-foreground/85">
                Via Edoardo Detti, 23
                <br />
                50143 Firenze (FI)
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Car size={18} className="mt-0.5 text-brand" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Come arrivare
              </div>
              <div className="mt-1 text-foreground/85">
                Ampio parcheggio nelle vicinanze. Comodo da tutta Firenze, Scandicci,
                Sesto Fiorentino e Campi Bisenzio.
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={GOOGLE_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-foreground transition-all hover:brightness-110"
          >
            <Navigation size={14} />
            Indicazioni Google Maps
          </a>
          <a
            href={WAZE_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:border-brand hover:text-brand"
          >
            Waze
          </a>
          <a
            href={APPLE_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:border-brand hover:text-brand"
          >
            Apple Maps
          </a>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="aspect-[4/3] overflow-hidden border border-border md:aspect-[16/11]">
          <iframe
            title="Mappa Rondinella Padel Club — Via Edoardo Detti 23, Firenze"
            src={MAP_EMBED}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
