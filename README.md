# CHORDA

**Chord Bible per chitarristi** — Accordi · Progressioni · Metronomo

> Un riferimento completo di teoria applicata alla chitarra, disponibile offline, senza dipendenze, in un singolo file HTML.

---

## Demo

**[→ Apri Chorda](https://allerock.github.io/chorda/)** *(GitHub Pages)*

---

## Funzionalità

### 🎸 Accordi
Seleziona qualsiasi tonalità (12 note × maggiore/minore) e visualizza tutti gli accordi diatonici con:
- Gradi armonici (I, II, III... con colori distinti)
- Diteggiature per voicings standard e avanzati
- Modalità **Base** e **Completo** per livello di dettaglio

### ↗ Progressioni
Progressioni armoniche pronte per l'uso, organizzate per genere:
Classic · Pop · Rock · Jazz · Blues · Soul · Reggae · Latin · Metal · Country · Film · Exotic

Ogni progressione include analisi dei gradi, accordi suggeriti e esempi di riferimento.

### ◉ Metronomo
Metronomo di precisione costruito su **Web Audio API**:
- Range 20–300 BPM
- Tap Tempo
- Metri: 2/4 · 3/4 · 4/4 · 5/4 · 6/8 · 7/8
- Accento automatico sul primo beat
- Feedback visivo sincronizzato all'audio

---

## Tecnologia

| Caratteristica | Dettaglio |
|---|---|
| Architettura | Single-file HTML/CSS/JS |
| Dipendenze runtime | Nessuna (solo Google Fonts) |
| Offline support | Service Worker + Cache API |
| Installabile come app | Sì — PWA manifest incluso |
| Framework | Vanilla JS — zero librerie |
| Dimensione | < 100 KB |

---

## Struttura del repository

```
chorda/
├── index.html        # Applicazione completa
├── manifest.json     # PWA manifest
├── sw.js             # Service Worker (offline cache)
├── icons/
│   ├── icon-192.png  # Icona PWA (da aggiungere)
│   └── icon-512.png  # Icona PWA (da aggiungere)
├── README.md
└── LICENSE
```

---

## Installazione locale

Nessun build step, nessun `npm install`.

```bash
git clone https://github.com/allerock/chorda.git
cd chorda
# Apri index.html nel browser — oppure usa un server locale:
python3 -m http.server 8080
```

> ⚠️ Il Service Worker richiede un contesto HTTPS o `localhost` per attivarsi. Su file:// il metronomo e gli accordi funzionano comunque.

---

## Deploy su GitHub Pages

1. Vai su **Settings → Pages** nel repository
2. Source: `Deploy from a branch` → `main` → `/ (root)`
3. Salva — l'app sarà live in pochi secondi

---

## Note sulle icone PWA

Le icone `icons/icon-192.png` e `icons/icon-512.png` non sono incluse nel repository. Per abilitare l'installazione completa come PWA, aggiungile manualmente rispettando le dimensioni indicate. Il font e i colori di riferimento sono:

- Font: **Bebas Neue**
- Sfondo: `#0d0d0f`
- Accent: `#e8b84b`

---

## Licenza

Questo progetto è distribuito sotto licenza proprietaria.
**Non è software open source.**

La pubblicazione su GitHub ha finalità di portfolio e dimostrazione. Il codice sorgente non può essere copiato, modificato o redistribuito senza autorizzazione scritta dell'autore.

Consulta il file [LICENSE](./LICENSE) per i termini completi.

---

## Autore

**Alessandro Rocca** · [MEM Software](https://github.com/allerock)

*Built to last.*

---

*© 2026 Alessandro Rocca · MEM Software · All Rights Reserved*
