# CHORDA

**Tutto quello che ti serve sapere sulla chitarra. In un file.**

→ **[Apri l'app](https://allerock.github.io/chorda/)**

---

Chorda nasce da una rottura di scatole precisa: aprire tre tab diversi per trovare gli accordi di una tonalità, le progressioni di un genere, e avere un metronomo decente. Tutto questo mentre stai cercando di suonare.

Un file HTML. Nessuna installazione. Funziona offline. Si installa sul telefono come un'app vera.

---

## Cosa fa

**Accordi** — Scegli tonalità e modo (maggiore o minore) e vedi tutti gli accordi diatonici con gradi, voicings e diteggiature. Modalità Base per chi inizia, Completo per chi vuole tutto.

**Progressioni** — Le progressioni armoniche più usate in 12 generi: Classic, Pop, Rock, Jazz, Blues, Soul, Reggae, Latin, Metal, Country, Film, Exotic. Con analisi dei gradi e riferimenti reali.

**Metronomo** — Costruito su Web Audio API, non su `setInterval`. Tap tempo, 6 metri diversi, accento sul primo beat, feedback visivo sincronizzato all'audio. Funziona davvero.

---

## Stack

Zero dipendenze. Zero framework. Zero build step.

```
HTML + CSS + Vanilla JS  —  un file solo
Service Worker           —  cache offline
PWA manifest             —  installabile su iOS e Android
```

Peso totale: meno di 100KB.

---

## Usalo

Apri il browser, vai su `https://allerock.github.io/chorda/` e il gioco è fatto. Se vuoi installarlo:

- **Android** — Chrome mostra il banner "Aggiungi alla schermata Home" in automatico
- **iOS** — Safari → Condividi → Aggiungi alla schermata Home

Per girarlo in locale:

```bash
git clone https://github.com/allerock/chorda.git
cd chorda
python3 -m http.server 8080
```

---

## Licenza

Proprietaria. Non è open source.

Il codice non si copia, non si modifica, non si redistribuisce senza permesso scritto. I dettagli sono nel file [LICENSE](./LICENSE).

---

*© 2026 Alessandro Rocca · [MEM Software](https://github.com/allerock)*
