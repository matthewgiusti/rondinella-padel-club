# Pubblicazione su Hostinger

Questo progetto è un sito statico (nessun server Node.js richiesto). La build genera file HTML/CSS/JS pronti per essere caricati su hosting condiviso.

## 1. Genera la build

```bash
bun install
bun run build
```

Output: cartella `dist/client/`. Contiene:
- `index.html`, `club/index.html`, `corsi/index.html`, `servizi/index.html`, `wheelchair/index.html`, `contatti/index.html`
- `assets/` (JS, CSS, immagini con hash)
- `favicon.jpg`, `robots.txt`, `sitemap.xml`, `.htaccess`

Verifica sempre il contenuto di `dist/client/` prima di caricarlo: deve contenere tutti i file sopra elencati.

## 2. Backup del sito attuale

Prima di sovrascrivere qualsiasi cosa, fai un backup completo dell'attuale `public_html` (File Manager di Hostinger → seleziona tutto → Comprimi, oppure Hostinger → Backup nel pannello hPanel). Se qualcosa va storto, potrai ripristinare il sito WordPress in pochi minuti.

## 3. Carica i file

Via **File Manager di Hostinger** (hPanel → File Manager → `public_html`) oppure via **FTP** (credenziali in hPanel → File Manager → FTP Accounts):

1. Svuota (o rinomina, per sicurezza) il contenuto attuale di `public_html` — è l'installazione WordPress esistente.
2. Carica **tutto il contenuto** di `dist/client/` (non la cartella stessa, il suo contenuto) dentro `public_html`, incluso il file nascosto `.htaccess`.
3. Assicurati che `.htaccess` sia arrivato: nel File Manager di Hostinger, attiva "Mostra file nascosti" se non lo vedi.

## 4. Verifica DNS/dominio

Il dominio `rondinellapadelclub.it` è già su Hostinger, quindi non serve toccare i DNS: basta che punti allo stesso hosting su cui carichi i nuovi file (verificalo in hPanel → Domini, che l'hosting collegato sia quello dove hai caricato `dist/client/`).

## 5. Redirect già inclusi

Il file `.htaccess` incluso nella build gestisce automaticamente:
- `www.rondinellapadelclub.it` → `rondinellapadelclub.it` (dominio canonico, come già oggi)
- forzatura HTTPS
- `/lezioni` → `/corsi/` (redirect 301, la pagina "Lezioni" è stata sostituita da "Corsi & Lezioni")
- `/prezzi` → `/servizi/` (redirect 301, la pagina prezzi non esiste più nel nuovo sito)

Non serve configurare altro lato Hostinger per questi redirect.

## 6. iubenda — verifica il dominio autorizzato

L'integrazione cookie usa lo stesso account iubenda già configurato sul sito WordPress (siteId 3351672, cookiePolicyId 87531025). Se nel pannello iubenda il dominio autorizzato è specificamente `www.rondinellapadelclub.it` (con www) invece di quello canonico, potrebbe essere necessario aggiungerlo/aggiornarlo da Iubenda → Impostazioni sito, altrimenti il banner potrebbe non caricarsi. Verificalo dopo il primo caricamento.

## 7. Test dopo la pubblicazione

Controlla, nell'ordine:
1. `https://rondinellapadelclub.it/` — home carica correttamente, banner cookie compare
2. Naviga tutte le pagine dal menu: Servizi, Corsi & Lezioni, Wheelchair, Il Club, Contatti
3. Accetta i cookie e verifica che il pulsante WhatsApp/i link di contatto funzionino
4. Prova `https://rondinellapadelclub.it/lezioni` → deve reindirizzare a `/corsi/`
5. Prova `https://rondinellapadelclub.it/prezzi` → deve reindirizzare a `/servizi/`
6. Prova `https://www.rondinellapadelclub.it/` → deve reindirizzare alla versione senza www
7. Controlla `https://rondinellapadelclub.it/sitemap.xml` e `https://rondinellapadelclub.it/robots.txt`
8. Invia la sitemap aggiornata su [Google Search Console](https://search.google.com/search-console) (se già configurata per il dominio) per accelerare la riscansione

## Limitazione nota

Le pagine non esistenti (URL indovinati/rotti) mostrano oggi la pagina 404 generica di Apache/Hostinger, non quella personalizzata del sito (che esiste solo lato client, per la navigazione interna). Non bloccante per il lancio; se in futuro serve una pagina 404 brandizzata anche per accessi diretti, va generato un file statico dedicato e configurato `ErrorDocument 404` nell'`.htaccess`.
