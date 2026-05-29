# Correzione contenuti — Rondinella Padel Club

Aggiorno contatti, indirizzo, mappa, dati legali, staff e tono di voce con i dati reali forniti.

## Dati reali da applicare
- **Telefono / WhatsApp:** +39 3712615
- **Email:** info@rondinellapadelclub.it (prima: info@rondinellapadel.it)
- **Instagram:** @rondinellapadelclub → instagram.com/rondinellapadelclub
- **Indirizzo:** Via Edoardo Detti, 23 — 50143 Firenze (FI) (prima: Via della Rondinella, Sesto Fiorentino)
- **Orari:** tutti i giorni 7:00 – 23:30 (prima: 08:00)
- **P.IVA:** 07188890482
- **Maestri:** Dario Satti, Filippo Giacomelli, Nicola Manfredini — tutti maestri FITP alla pari, senza distinzione di ruolo

> Nota: il numero "+39 3712615" è più corto di un classico mobile italiano (10 cifre). Lo inserisco esattamente così come fornito; se è incompleto basta segnalarmelo e lo correggo.

## 1. Contatti, indirizzo e mappa
- **`SiteHeader.tsx`, `SiteFooter.tsx`, `WhatsAppFab.tsx`, `index.tsx`, `corsi.tsx`, `wheelchair.tsx`, `news.tsx`, `contatti.tsx`:** aggiorno la costante `WHATSAPP` con il numero `393712615`.
- **`SiteFooter.tsx`:** indirizzo, telefono, email, link Instagram, e P.IVA reale nella riga legale.
- **`contatti.tsx`:** schede telefono/WhatsApp/email/Instagram, blocco indirizzo, orari, e l'embed mappa centrato su Via Edoardo Detti 23, Firenze.
- **`index.tsx` (sezione Visit):** indirizzo, orari, contatto rapido e mappa aggiornati.
- Sostituisco i riferimenti "Sesto Fiorentino / Firenze nord" con **Firenze** dove indicano la sede fisica (eyebrow hero, titoli "Vieni a trovarci").

## 2. Dati SEO e structured data
- **`__root.tsx`:** aggiorno il JSON-LD `SportsClub` (streetAddress, postalCode 50143, addressLocality Firenze) e aggiungo telefono/email. Mantengo `areaServed` (Firenze, Scandicci, Sesto Fiorentino) per la copertura locale delle keyword.

## 3. Staff / maestri (`club.tsx`)
- Sostituisco le tre schede con ruoli gerarchici (Head Coach / settore donne / settore adulti) con i **tre maestri nominali alla pari**: Dario Satti, Filippo Giacomelli, Nicola Manfredini, tutti etichettati "Maestro FITP", con descrizioni neutre e senza distinzione di ruolo.

## 4. Alleggerimento del tono di voce
Riduco l'enfasi sulla community (resta presente ma non dominante), spostando il focus su sport, accessibilità e qualità del gioco. Interventi mirati:
- **`index.tsx`:** ammorbidisco i testi più "community-centrici" (sezione Identity, Pillars, Tornei "si tifa, si resta", CTA), riscrivo la sezione Testimonials in chiave più generica/sportiva, e correggo la stat hero "7 / 24" → "7/7 · Aperti tutti i giorni".
- **`club.tsx`:** rendo più neutri il valore "Community", la citazione di chiusura ("Un socio, una sera qualsiasi") e i testi introduttivi.
- **`wheelchair.tsx`:** alleggerisco i riferimenti alla community mantenendo il messaggio di accessibilità.

## Note tecniche
- Solo modifiche a contenuti/testo e a una costante link: nessun cambiamento di struttura, routing o logica.
- La mappa OpenStreetMap viene riposizionata aggiornando i parametri bbox/marker sulle coordinate di Via Edoardo Detti 23, Firenze.
- Nessuna nuova dipendenza.
