---
title: Uporedite revidirani list i prenesite predmer
summary: Postavite stari list preko revizije, poravnajte ih, pogledajte šta se promenilo i prenesite predmer na novi list, sa oznakama za proveru označenim.
keywords: revizija, revidirano, uporedi, preklapanje, staro, novo, izmene, dodatak, saopštenje, ponovno izdanje, prenos predmera, prenesi, poravnaj, označeno, proveri
from: 3a1d9fe0
---

Kada se list ponovo izda, ne morate ponovo da ga merite. Otvorite stari PDF i novi, uporedite dva lista i prenesite predmer. TakeoffCraft označava svaku oznaku gde se crtež promenio, pa proverite te i zadržite ostale.

## Uporedite

1. Otvorite oba PDF-a: stari skup i revidirani ({{ui:Otvori planove}}; mogu biti u jednoj ili više datoteka).
2. Prikažite **novi** list.
3. Izaberite {{ui:Uporedi}} na traci lista ispod crteža.
4. Izaberite stari list na spisku. TakeoffCraft predlaže list sa istim brojem u drugom PDF-u, ili istu stranicu. Izaberite **Uporedi**.

Stari crtež sada leži preko novog, u crvenoj boji. Gde se dva slažu, crvene linije su na crnim; gde se razlikuju, vidite samo crvene linije (uklonjeno) i samo crne linije (dodato). Traka na dnu lista sadrži korake ispod. {{key:Esc}} ili {{ui:Zatvori}} završava poređenje.

## Poravnajte

Revidirani listovi se često iscrtaju malo pomereno: pomereni na stranici ili u malo drugačijoj veličini. Ako crveni crtež ne leži na crnom, izaberite **Poravnaj pomoću dve tačke** i kliknite četiri puta:

1. tačku na starom (crvenom) crtežu, kao centar stuba ili ugao zgrade,
2. istu tačku na novom (crnom) crtežu,
3. drugu tačku na crvenom crtežu, daleko od prve,
4. istu tačku na crnom crtežu.

Crveni crtež se pomera, okreće i skalira na crni. Statusna traka kaže koliko je novi crtež veći („veličina × 1.000” kada je ista). Uvećajte za izbor tačaka: što bliže kliknete, to je bolje poklapanje.

## Pronađite šta se promenilo

Izaberite **Pronađi izmene**. TakeoffCraft upoređuje tuš dva crteža: tuš samo na starom listu postaje crven, tuš samo na novom listu postaje plav, a statusna traka ih broji. Linije pomerene za dlaku (ponovno štampanje) se ne broje kao izmene.

Takođe pregleda svaku oznaku na starom listu i broji one koje su tamo gde se crtež promenio:

- potez ili površina kada se crtež promenio na jednom od njihovih krajeva ili uglova, ili duž najmanje oko šestine njihove dužine;
- brojanje kada se bilo šta promenilo odmah pored njega.

## Prenesite predmer

Izaberite **Prenesi predmer ovde**. Svaka oznaka na starom listu se premešta na novi, kroz poravnanje, u jednom koraku opozivanja. One pored izmene se označavaju: crtaju se narandžastim haloom, a traka lista pokazuje „(n) za proveru”.

Ako novi list nije imao razmeru, preuzima razmeru starog lista (prilagođenu kada je crteže trebalo skalirati da se poklope). Ako je već imao drugačiju razmeru, TakeoffCraft prvo pita: pomerene oznake se mere u razmeri novog lista.

## Proverite označene oznake

1. Izaberite „(n) za proveru” na traci lista. Zumira na sledeću označenu oznaku i bira je; njen panel kaže zašto je označena.
2. Ispravite oznaku ako se crtež promenio ispod nje (prevucite njene uglove, dodajte ili obrišite oznake, ili je ponovo uklonite).
3. Izaberite **Provereno** u njenom panelu. Oznaka se uklanja, a broj na traci lista se smanjuje.

Oznake se čuvaju sa predmerom, pa ih kasnije možete proveriti.

:::note
Poređenje radi i na vektorskim PDF-ovima i na skenovima, jer upoređuje ono što je nacrtano. Skeniran list koji je iskrivljen ili razvučen može se poravnati samo približno sa dve tačke; tada proverite više oznaka golim okom.
:::
