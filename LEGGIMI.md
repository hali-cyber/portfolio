# Portfolio — Hossam Ali

Portfolio personale **bilingue (IT/EN)**, statico e cinematografico. Solo HTML, CSS e JavaScript: veloce, sicuro, senza database. Pensato per il sottodominio **hali.gtltechnology.it**.

## Struttura

```
sito/
├── index.html            Portfolio (pagina unica, tutte le sezioni)
├── 404.html              Pagina di errore
├── robots.txt / sitemap.xml / .htaccess
└── assets/
    ├── css/style.css     Stile (i colori sono in cima, nel blocco :root)
    ├── js/main.js        Lingua, animazioni, menu
    ├── fonts/            Font self-hosted in woff2 (nessuna richiesta esterna)
    ├── img/              monogram, favicon, foto, og-image, badge certificazioni
    └── doc/              CV in PDF (IT / EN)
```

## Anteprima in locale

Doppio clic su `index.html`: funziona tutto, lingua e font compresi. Nessun server necessario.

## Pubblicazione su Aruba — sottodominio hali.gtltechnology.it

1. Nel pannello Aruba di **gtltechnology.it**, sezione domini/sottodomini, crea il sottodominio **hali** (→ `hali.gtltechnology.it`) e assegnagli una cartella dedicata (es. `hali` dentro lo spazio web).
2. Apri il **File Manager** (o via FTP con FileZilla) ed entra in quella cartella.
3. Carica **tutto il contenuto della cartella `sito/`** nella radice del sottodominio, così che `index.html` sia direttamente lì (non dentro una sottocartella `sito`).
4. Verifica che siano stati caricati anche `.htaccess` e le cartelle `assets/` (con `fonts/`, `img/`, `doc/`).
5. Attendi l'attivazione del sottodominio e apri `https://hali.gtltechnology.it`.

Essendo un sito statico, funziona su qualsiasi piano di hosting (anche senza PHP).

## Lingua IT / EN

- Il pulsante **IT / EN** in alto cambia lingua; la scelta viene ricordata nel browser.
- Nel codice ogni testo esiste in due versioni con l'attributo `data-l`:
  `<span data-l="it">Ciao</span><span data-l="en">Hello</span>`.
  Per modificare un testo, aggiorna entrambe le versioni.

## Aggiornare i contenuti

- **Testi, esperienze, case study:** direttamente in `index.html` (ordinati per sezione con commenti).
- **CV:** sostituisci i file in `assets/doc/` mantenendo gli stessi nomi (`Hossam-Ali-CV-IT.pdf`, `Hossam-Ali-CV-EN.pdf`).
- **Foto:** sostituisci `assets/img/portrait.jpg` (verticale ~4:5).
- **Colori:** in cima a `assets/css/style.css`, blocco `:root` (`--accent` per l'azzurro, `--ink` per lo sfondo).
- **Certificazioni:** badge in `assets/img/cert/`.

## Font

I font (Fraunces, Inter, Space Mono) sono **ospitati localmente** in `assets/fonts/` e caricati via `@font-face` in `style.css`: **nessuna richiesta a Google o ad altri servizi esterni**. Massima privacy e velocità, anche offline.

## SEO

- Meta tag, Open Graph e dati strutturati (schema.org Person) sono già impostati sul dominio `hali.gtltechnology.it`.
- Dopo la pubblicazione, invia `https://hali.gtltechnology.it/sitemap.xml` a Google Search Console.

---
Hossam Ali — Morengo (BG), Italia — hali.gtltechnology.it
