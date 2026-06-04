## Obiettivo

Trasformare il documento **TOV Guidelines v1** in regole operative permanenti per il progetto e correggere solo le poche frasi attualmente fuori-tono, **senza cambiare il senso dei contenuti** e **senza toccare le keyword SEO/GEO**.

## Valutazione del documento (sintesi)

Il documento è **sufficiente per orientare il tono** (personalità, principio "community non business", vocabolario sì/no in italiano, stile, regole per canale, test finale). È **insufficiente sul piano operativo**: non gestisce le keyword SEO obbligatorie, non risolve la contraddizione "innovativo/migliore" col master context, non definisce regole di microcopy (form, errori, alt-text, label) né esempi per le singole pagine del sito. Queste lacune le colmo io nella memoria.

## Decisioni confermate

- **Approccio**: memoria TOV + ritocchi sicuri.
- **Innovativo/Migliore**: vietati come slogan; ammessi solo in contesti concreti (es. inclusività/Wheelchair), mai autocelebrativi → *eccezione controllata*.
- **Forma**: sempre **"tu"** informale su tutto il sito.

## Cosa farò

### 1. Creare la memoria `mem://design/tone-of-voice`
Regole sintetiche e azionabili che codificano:
- Personalità (friendly, sporty, positive, helpful, approachable, informal, reliable) e cosa NON essere (arrogante, istituzionale, corporate, elitario).
- Principio cardine: il club comunica come community; protagoniste sono le persone, non il club.
- Vocabolario preferito (giocare, allenarsi, divertirsi, stare insieme, community, gruppo, compagni di gioco, partita, lezione, torneo, campo, squadra) ed espressioni ("C'è posto per tutti", "Qualunque sia il tuo livello", "Ti aspettiamo in campo", "Vieni a provare", "Gioca con noi").
- Parole/CTA da evitare (premium, esclusivo, eccellenza, esperienza unica, leader, riferimento, top level, élite, prestigioso, migliore, innovativo, rivoluzionario; e CTA come "Scopri l'esperienza", "Sblocca il tuo potenziale", "Accedi ora").
- Stile: frasi brevi, voce attiva, linguaggio concreto, "tu".
- **Regola SEO/GEO (aggiunta critica)**: le keyword di posizionamento — *campo da padel Firenze, campo coperto padel, lezioni padel Firenze, corsi padel Firenze, padel Scandicci, wheelchair padel* — restano sempre intatte; si addolcisce solo il contesto attorno, mai la keyword.
- **Eccezione controllata** su "innovazione/migliorare": ammessa solo in senso concreto e non autocelebrativo.
- Coerenza con le memorie esistenti: "Rondinella Padel Club"/"RPC", "Wheelchair" (non "Wheelchair Padel"), niente prezzi, niente "americane"/gerarchia master.
- Test finale: "Lo direbbe davvero qualcuno a Rondinella?".

### 2. Aggiornare `mem://index.md`
Aggiungere il riferimento alla nuova memoria nella sezione Memories (mantenendo invariato tutto il resto del file).

### 3. Ritocchi sicuri ai testi fuori-tono
Dall'analisi del codice, l'unica vera occorrenza fuori-tono nei contenuti è in `src/routes/wheelchair.tsx`:
- "è diventato un **punto di riferimento** per l'inclusione" → riformulare in chiave community (es. "è cresciuto come esperienza di inclusione attraverso lo sport"), mantenendo identico il messaggio e senza rimuovere termini SEO.
- Rileggo Home, Club, Corsi, Servizi, Contatti per eventuali frasi marketing-y residue; intervengo solo dove serve, con modifiche minime.

```text
Vincolo invariato in ogni ritocco:
- nessun cambio di significato
- nessuna keyword SEO/GEO rimossa o spostata
- struttura, layout e heading (H1/H2) invariati
```

## Dettagli tecnici

- File memoria: `mem://design/tone-of-voice` (type: design) + aggiornamento `mem://index.md`.
- Edit di copy: solo stringhe testuali nei file route/component, nessuna modifica a logica, props o struttura JSX.
- Nessun impatto su SEO: title, meta description, alt-text e keyword restano invariati.

## Fuori scope

- Riscrittura integrale dei contenuti.
- Modifiche al design, ai componenti o alla struttura delle pagine.
- Traduzioni o nuove pagine.
