---
title: "Odaberite linije PDF-a"
summary: "Kliknite liniju vektorskog PDF-a da izmjerite cijeli spojeni put ili kliknite unutar zatvorenog obrisa za njegovu površinu, uz prikazanu toleranciju razmaka i jedan poništaj po segmentu."
keywords: "putanja, odabir, linije, cijela dionica, spojeno, prati, obris, opseg, razmak, tolerancija, premošćivanje, segmenti, tab, vektor, površina iz linija, p"
from: c22526ae
---

Na vektorskom PDF-u zidovi i rubovi su prave linije. {{ui:Putanja}} ({{key:P}}) ih uzima onakvima kakve su nacrtane: jedan klik na liniju mjeri sve spojeno s njom, od kraja do kraja, pa zid ne morate pratiti klikanjem po kutovima. List treba mjerilo. Skenirana stranica nema linija za odabir; tamo upotrijebite [Linearno](topic:measure-linear) ili [Površina](topic:measure-areas).

## Odaberite putanju ili obris

1. Odaberite {{ui:Putanja}}. Linija ispod pokazivača je ocrtana, a druge putanje koje bi mogla biti prikazane su tanko.
2. Kliknite liniju: odabire se cijeli spojeni put. Traka ispod alatne trake daje njegove segmente, duljinu, toleranciju razmaka i koliko je razmaka premošteno. Put koji se vraća na početak je zatvoren i prijavljuje i svoj opseg.
3. Ili kliknite unutar zatvorenog obrisa, podalje od bilo koje linije: obris oko te točke odabire se kao površina. Najmanji dolazi prvi; {{key:Tab}} isprobava sljedeći veći.
4. Pritisnite {{key:Enter}} (ili desni klik, ili dvostruki klik) za dodavanje oznaka. Odabrani put postaje oznaka **linearne** stavke, a obris oznaka **površinske** stavke: aktivna stavka ako je te vrste, inače najnovija te vrste. Ako nema nijedne, otvara se obrazac za novu stavku i ništa se ne dodaje dok ponovno ne pritisnete {{key:Enter}}. Sve odabrano dodaje se u jednom koraku poništavanja.

## Tolerancija razmaka

Crtači ostavljaju male rupe tamo gdje se linije trebaju spojiti. Dvije linije se spajaju kad su im krajevi bliži od **tolerancije razmaka**. Ona počinje od 1.5 točke na listu (prikazano u stopama i inčima pri mjerilu lista), a iscrtkani krug te širine prati pokazivač i stoji na svakom kraju putanje pod njim. Svaka premošćena rupa obilježena je narančasto na odabranoj putanji, a traka ih broji.

{{key:]}} čini toleranciju širom, {{key:[}} užom. Odabrana putanja se odmah ponovno spaja pri novoj toleranciji. Na spoju putanja nastavlja ravno, najmanje zakrivljenim putem, a ogranak ostavlja.

## Tipke

| Tipka ili radnja | Što radi |
|---|---|
| Klik | Odabire putanju ispod pokazivača ili obris oko nje. |
| {{key:Shift}} + klik | Dodaje još jednu putanju ili obris odabiru. |
| {{key:Tab}} | Isprobava sljedeću putanju ispod pokazivača ili sljedeći veći obris. |
| {{key:Backspace}} ili {{key:Mod+Z}} | Uklanja zadnji segment sa zadnje odabrane putanje, jedan po jedan segment. Putanja bez segmenata nestaje. Bez odabira, {{key:Mod+Z}} je obično poništavanje. |
| {{key:[}} i {{key:]}} | Uža i šira tolerancija razmaka. |
| {{key:Enter}} | Dodaje oznake. |
| {{key:Esc}} | Briše odabir. |

## Dobro je znati

- Krivulja u crtežu je niz kratkih ravnih dijelova, pa je njezina duljina neznatno manja od prave duljine luka. Za točan luk izmjerite iz same datoteke crteža ([Mjerenje iz crteža](topic:measure-from-a-drawing)).
- Premošteni razmak broji se kao ravan skok preko njega, pa opseg zatvorenog obrisa uključuje i njega.
- Linije su samo potezi i ispune u vlastitim putanjama stranice. Tekst nacrtan kao slova i slike nisu linije.
