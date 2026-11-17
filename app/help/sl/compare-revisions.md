---
title: Primerjava revidiranega lista in premik predizmere
summary: Položite stari list čez revizijo, ju poravnajte, poglejte, kaj se je spremenilo, in premaknite predizmero na novi list z označenimi oznakami za preverjanje.
keywords: revizija, revidirano, primerjava, prekrivanje, staro, novo, spremembe, dodatek, bilten, ponovna izdaja, premik predizmere, prenos, poravnava, označeno, preveri
from: 3a1d9fe0
---

Ko je list ponovno izdan, ga ne rabite ponovno meriti. Odprite stari PDF in novega, primerjajte oba lista in prenesite predizmero. TakeoffCraft označi vsako oznako, kjer se je risba spremenila; te preverite, ostale obdržite.

## Primerjava

1. Odprite oba PDF-ja: stari nabor in revidiranega ({{ui:Open plans}}; lahko sta v eni datoteki ali v več).
2. Prikažite **novi** list.
3. Izberite {{ui:Compare}} na vrstici lista pod risbo.
4. Na seznamu izberite stari list. TakeoffCraft predlaga list z isto številko v drugem PDF-ju ali isto stran. Izberite **Primerjaj**.

Stara risba zdaj leži čez novo v rdeči barvi. Kjer se ujemata, rdeče črte ležijo na črnih; kjer se razlikujeta, vidite samo rdeče črte (odstranjene) in samo črne črte (dodane). Vrstica na dnu lista vsebuje korake spodaj; {{key:Esc}} ali {{ui:Close}} konča primerjavo.

## Poravnajte jih

Ponovno izdani listi so pogosto malo zamaknjeni: premaknjeni na strani ali nekoliko drugačne velikosti. Če rdeča risba ne leži na črni, izberite **Poravnaj z dvema točkama** in kliknite štirikrat:

1. točka na stari (rdeči) risbi, na primer središče stebra ali vogal stavbe,
2. ista točka na novi (črni) risbi,
3. druga točka na rdeči risbi, daleč od prve,
4. ista točka na črni risbi.

Rdeča risba se premakne, zavrti in skalira na črno. Vrstica stanja pove, za koliko je nova risba večja („velikost × 1.000“, kadar je enaka). Za izbiro povečajte: bolj ko klikate natančno, boljše prileganje.

## Poiščite spremembe

Izberite **Poišči spremembe**. TakeoffCraft primerja črnilo obeh risb: črnilo samo na starem listu postane rdeče, črnilo samo na novem listu postane modro, vrstica stanja pa jih prešteje. Črte, ki so se premaknile za las (ponovni izris), se ne štejejo kot spremembe.

Preveri tudi vsako oznako na starem listu in šteje tiste, ki ležijo tam, kjer se je risba spremenila:

- odsek ali površina, kadar se je risba spremenila na enem od njunih koncev ali oglišč ali vzdolž vsaj približno šestine dolžine;
- štetje, kadar se je karkoli spremenilo tik zraven.

## Premaknite predizmero

Izberite **Premakni predizmero sem**. Vsaka oznaka na starem listu se premakne na novega, prek poravnave, v enem koraku razveljavitve. Tiste ob spremembi so označene: narisane so z oranžnim obrobom, vrstica lista pa pokaže „(n) za preverjanje“.

Če novi list ni imel merila, prevzame merilo starega lista (prilagojeno, če so morali risbi skalirati za poravnavo). Če je že imel drugačno merilo, TakeoffCraft najprej vpraša: premaknjene oznake se izmerijo v merilu novega lista.

## Preverite označene oznake

1. Izberite „(n) za preverjanje“ na vrstici lista. Pogled se približa naslednji označeni oznaki in jo izbere; njena plošča pove, zakaj je označena.
2. Popravite oznako, če se je risba spremenila pod njo (povlecite njena oglišča, dodajte ali izbrišite oznake ali jo znova odstranite).
3. Izberite **Preverjeno** na njeni plošči. Oznaka izgine, število na vrstici lista pa pade.

Oznake se shranijo s predizmero, zato jih lahko preverite kasneje.

:::note
Primerjava deluje na vektorskih PDF-jih in tudi na skenih, ker primerja to, kar je narisano. Skeniran list, ki je nagnjen ali raztegnjen, se lahko z dvema točkama poravna samo približno; takrat preverite več oznak na oko.
:::
