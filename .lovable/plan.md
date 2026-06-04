# Integrazione Meta Pixel — Rondinella Padel Club

Pixel ID: **1309487903488710**

Obiettivo: caricare il Meta Pixel su tutto il sito, tracciare la PageView ad ogni cambio pagina e tracciare i click sulle azioni chiave, con eventi facili da usare nelle campagne Meta.

## 1. Caricamento del Pixel
- Inserire lo snippet base del Meta Pixel nel layout radice (`src/routes/__root.tsx`), nel blocco `scripts`, così viene caricato su ogni pagina insieme al `<noscript>` di fallback.
- Inizializzazione una sola volta con `fbq('init', '1309487903488710')`.

## 2. PageView su ogni pagina
- Il Pixel invia `PageView` all'avvio. Poiché il sito è una single-page app (TanStack Router), aggiungere un piccolo hook che invia `fbq('track', 'PageView')` ad ogni cambio di rotta, così ogni navigazione interna viene contata correttamente.
- L'hook viene montato una volta nel componente radice.

## 3. Helper per gli eventi
- Creare un piccolo helper `src/lib/meta-pixel.ts` con una funzione `trackPixel(event, params?)` che chiama `fbq` in modo sicuro (controllo che `fbq` esista). Tiene il codice pulito e riutilizzabile.

## 4. Tracciamento dei click

| Azione | Dove | Evento inviato |
|---|---|---|
| Prenota (Playtomic) | header desktop + menu mobile (`SiteHeader.tsx`) | `Lead` (standard) + custom `Prenota` |
| Scrivici WhatsApp | FAB (`WhatsAppFab.tsx`) + card WhatsApp contatti | `Contact` (standard) + custom `Scrivici` |
| Click telefono | card "Telefono" (`contatti.tsx`) | `Contact` |
| Click email | card "Email" (`contatti.tsx`) | `Contact` |
| Click Instagram | card "Instagram" (`contatti.tsx`) | custom `SocialClick` |
| Click Indicazioni (Google/Waze/Apple) | pulsanti mappa (`contatti.tsx`) | custom `GetDirections` |

Ogni evento custom include parametri descrittivi (es. `{ location: 'header' }`) per distinguere la provenienza nei report.

## 5. Scroll depth (opzionale, incluso)
- Hook leggero che invia `ScrollDepth` al 50% e 90% della pagina, una sola volta per pagina.

## Dettagli tecnici
- Lo snippet del Pixel è codice di terze parti pubblico (non un segreto), quindi va direttamente nel codice — nessun secret da configurare.
- Nessun impatto sul layout o sul design: solo aggiunta di handler `onClick` agli elementi esistenti.
- Compatibile con SSR: lo script `fbq` è no-op lato server e si attiva solo nel browser.

## File coinvolti
- `src/routes/__root.tsx` — snippet Pixel + noscript
- `src/lib/meta-pixel.ts` — helper `trackPixel` + hook PageView/scroll (nuovo)
- `src/components/SiteHeader.tsx` — click Prenota
- `src/components/WhatsAppFab.tsx` — click Scrivici
- `src/routes/contatti.tsx` — telefono, email, Instagram, indicazioni, WhatsApp

## Note
- Non c'è ancora un form di contatto: l'evento `Lead` da form verrà aggiunto quando/se introdurremo il modulo.
- Se in futuro vuoi anche GA4, GTM o Microsoft Clarity (citati nel tuo documento), li possiamo aggiungere con lo stesso approccio.