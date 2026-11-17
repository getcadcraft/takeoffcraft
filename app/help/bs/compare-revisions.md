---
title: Uporedi revidirani list i premjesti predmjer
summary: Postavite stari list preko revizije, poravnajte ih, pogledajte šta se promijenilo i premjestite predmjer na novi list, uz oznake za provjeru.
keywords: revizija, revidirano, uporedi, preklapanje, stari, novi, promjene, dodatak, bilten, ponovno izdanje, premjesti predmjer, prenos, prenesi, poravnaj, označeno, provjeri
from: 3a1d9fe0
---

Kad se list ponovo izda, ne morate ga ponovo predmjeriti. Otvorite stari PDF i novi, uporedite dva lista i prenesite predmjer. TakeoffCraft označava svaku oznaku na kojoj se crtež promijenio, pa provjerite te i zadržite ostale.

## Uporedi

1. Otvorite oba PDF-a: stari skup i revidirani ({{ui:Otvori planove}}; mogu biti u jednoj datoteci ili u više).
2. Prikažite **novi** list.
3. Odaberite {{ui:Uporedi}} na traci lista ispod crteža.
4. Odaberite stari list s liste. TakeoffCraft predlaže list s istim brojem u drugom PDF-u, ili istu stranicu. Odaberite **Uporedi**.

Stari crtež sada leži preko novog, crveno. Tamo gdje se slažu, crvene linije su na crnim; tamo gdje se razlikuju, vidite samo crvene linije (uklonjene) i samo crne linije (dodane). Traka na dnu lista sadrži korake ispod; {{key:Esc}} ili {{ui:Zatvori}} završava poređenje.

## Poravnajte ih

Revidirani listovi su često štampani malo pomjereno: pomaknuti na stranici ili u nešto drugačijoj veličini. Ako crveni crtež ne leži na crnom, odaberite **Poravnaj po dvije tačke** i kliknite četiri puta:

1. tačku na starom (crvenom) crtežu, kao centar stuba ili ugao zgrade,
2. istu tačku na novom (crnom) crtežu,
3. drugu tačku na crvenom crtežu, daleko od prve,
4. istu tačku na crnom crtežu.

Crveni crtež se pomjera, okreće i skalira na crni. Statusna traka kaže koliko je novi crtež veći („veličina × 1,000” kad je ista). Zumirajte za odabir tačaka: što preciznije kliknete, to je bolje poklapanje.

## Pronađite šta se promijenilo

Odaberite **Pronađi promjene**. TakeoffCraft uspoređuje crtež dva lista: tinta samo na starom listu postaje crvena, tinta samo na novom listu postaje plava, a statusna traka ih broji. Linije koje su se pomjerile za dlaku (ponovno štampanje) se ne broje kao promjene.

Takođe gleda svaku oznaku na starom listu i broji one koje su na mjestu gdje se crtež promijenio:

- dionicu ili površinu kad se crtež promijenio na jednom od njenih krajeva ili uglova, ili duž barem otprilike šestine njene dužine;
- brojanje kad se nešto promijenilo odmah pored njega.

## Premjestite predmjer

Odaberite **Premjesti predmjer ovdje**. Svaka oznaka sa starog lista se premješta na novi, kroz poravnanje, u jednom koraku poništavanja. One pored promjene su označene: crtaju se narandžastim haloom, a traka lista pokazuje „(n) za provjeru”.

Ako novi list nije imao razmjeru, preuzima razmjeru starog lista (prilagođenu ako su crteži morali biti skalirani da se poklope). Ako je već imao drugačiju razmjeru, TakeoffCraft prvo pita: premještene oznake se mjere u razmjeri novog lista.

## Provjerite označene oznake

1. Odaberite „(n) za provjeru” na traci lista. Zumira na sljedeću označenu oznaku i odabire je; njen panel kaže zašto je označena.
2. Ispravite oznaku ako se crtež promijenio ispod nje (povucite njene uglove, dodajte ili izbrišite oznake, ili je ponovo uklonite).
3. Odaberite **Provjereno** u njenom panelu. Oznaka nestaje, a brojka na traci lista se smanjuje.

Oznake se čuvaju s predmjerom, pa ih možete provjeriti kasnije.

:::note
Poređenje radi i na vektorskim PDF-ovima i na skenovima, jer uspoređuje ono što je nacrtano. Skeniran list koji je iskrivljen ili rastegnut može se poklopiti samo grubo s dvije tačke; tada provjerite više oznaka na oko.
:::
