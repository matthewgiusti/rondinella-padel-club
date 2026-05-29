# Logo reale + correzione contenuti (corsi, lezioni, tornei)

Due interventi: (1) integrare il logo/icona PNG forniti, (2) correggere i contenuti di corsi/lezioni e tornei secondo le indicazioni — **nessun prezzo online**, solo informazione sulle possibilità.

## 1. Logo e icona reali
- Copiare i file forniti negli asset del progetto:
  - `logo_rondinella_giallo_bianco(1).png` → `src/assets/logo-rondinella.png` (wordmark giallo, sfondo trasparente — ideale su header/footer scuri).
  - `RONDINELLA_ICON.jpg` → `public/favicon.jpg` (per favicon) e `src/assets/rondinella-icon.jpg` (marchio compatto).
- **`src/components/Logo.tsx`**: sostituire l'attuale SVG ricostruito con i file reali.
  - `variant="full"` → `<img>` del wordmark PNG, con sottotitolo testuale "PADEL CLUB" opzionale sotto (il PNG contiene solo "RONDINELLA").
  - `variant="mark"` → `<img>` dell'icona rondine.
  - `alt="Rondinella Padel Club"`, dimensioni gestite via `className` come ora; mantenere l'uso esistente in `SiteHeader`, `SiteFooter`.
- **`src/routes/__root.tsx`**: aggiungere il favicon nei `links` (`rel="icon"` → `/favicon.jpg`) e impostare `og:image`/`twitter:image` solo sulle route foglia dove utile (facoltativo).

## 2. Offerta da comunicare (senza prezzi)
Basata sul documento, descritta solo a parole:
- **Tesseramento stagionale** (settembre–agosto): scontistica sulla quota campo, prenotazioni con due settimane di anticipo, accesso ai tornei sociali, t-shirt ufficiale, vantaggi coi partner, accesso alle lezioni. Per tesserarsi: documento + visita medica sportiva valida.
- **Partite** (90 minuti): prenotabili tutti i giorni; menzionare la disponibilità senza importi.
- **Lezioni con maestro** — singola, coppia, tripla, quadrupla (da 1 a 4 persone), disponibili nei formati **60 e 90 minuti**.
- **Pacchetti di lezioni** — da 5, 10 o 15 lezioni, da 1 a 4 persone.
- **Corsi stagionali** e **Corso agonisti**, percorsi continuativi nella stagione.
- **Partite guidate** col maestro, per migliorare tattica e correggere gli errori in partita.
- Eliminare ovunque "prova gratuita" e qualunque prezzo (es. "Gratis", "240€", "Da 50€").

## 3. `src/routes/corsi.tsx`
- Sostituire le 4 card a prezzo con card **informative senza prezzo**: Corsi stagionali, Lezioni spot (1–4 persone, 60/90 min), Pacchetti (5/10/15), Partite guidate. Togliere campo prezzo, etichetta "Inizia da qui" e CTA per card (resta una CTA WhatsApp generica per informazioni).
- Aggiungere un blocco informativo su **Tesseramento** e relativi vantaggi.
- Hero + `meta description`: rimuovere riferimenti a prova/prezzi.
- Sezione CTA finale: da "Prima lezione gratuita / Senza impegno" a invito generico a chiedere info su WhatsApp.

## 4. `src/routes/index.tsx`
- Hero: pulsante "Prova gratuita" → CTA generica (es. "Scopri i corsi").
- Ticker: "Americane del venerdì" → voce generica (es. "Tornei sociali").
- Pillars: "americane e tornei FITP" → "tornei sociali e FITP".
- Anteprima corsi (card "Gratis / Da 30€ / Da 50€"): rimuovere prezzi e card prova gratuita; sostituire con le possibilità reali (lezioni 1–4 persone, pacchetti, partite guidate) senza prezzo.
- Sezione "Tornei & Eventi": rimuovere "Americana/e"; descrivere tornei sociali e FITP in modo generico.
- WhatsApp CTA: togliere "prova gratuita".

## 5. `src/routes/news.tsx`
- `meta description`, hero description e voce "Americana del venerdì": eliminare il termine "americane"; usare "tornei sociali" / "serate di gioco", mantenendo i tornei FITP.

## 6. `src/routes/wheelchair.tsx`
- Card "Lezione introduttiva / Gratis" e testo "lezione introduttiva gratuita": rendere generici (es. "Su richiesta"), togliendo la gratuità.

## Note tecniche
- Solo modifiche a contenuti/testo, al componente `Logo`, agli asset e ai link favicon: nessun cambio di routing o logica.
- Il documento prezzi resta riferimento interno: nessun importo pubblicato.
