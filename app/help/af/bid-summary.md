---
title: Tenderopsomming en voorstel
summary: Voeg arbeidslas, verkoopsbelasting, algemene uitgawes, wins en borg by die raming, skryf insluitings en uitsluitings, en laai 'n voorstel-PDF af om te stuur.
keywords: tender, arbeidslas, las, betaalstaat, voorstel, kwotasie, algemene uitgawes, wins, opslag, marge, verkoopsbelasting, borg, insluitings, uitsluitings, voorwaardes, handtekening, kliënt, prys
from: 3208a561
---

Die raming prys wat jy opgemeet het. Die **tenderopsomming** maak dit 'n prys: dit voeg verkoopsbelasting, algemene uitgawes, wins en borg by, en maak 'n **voorstel-PDF** met jou insluitings en uitsluitings.

Maak dit oop vanaf {{ui:Uitvoer}} › {{ui:Tenderopsomming en voorstel…}}. Alles daarin word saam met die hoeveelheidsopname gestoor, en elke verandering kan ontdoen word.

## Die opslae

Tik 'n persentasie in enige van die vyf (laat die ander op 0). Hulle word in hierdie volgorde uitgewerk, elk op wat daarbo is:

| Lyn | Uitgewerk as |
|---|---|
| Materiaal, Arbeid | Die raming se totale (die basistender wanneer die hoeveelheidsopname [alternatiewe](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) het). |
| Arbeidslas | Las % × arbeid: betaalstaatbelasting, versekering en voordele op jou spanne se lone. |
| **Koste** | Materiaal + arbeid + arbeidslas. |
| Verkoopsbelasting op materiaal | Belasting % × materiaal. |
| Algemene uitgawes | Algemene uitgawes % × (koste + belasting). |
| Wins | Wins % × (koste + belasting + algemene uitgawes). |
| Borg | Borg % × alles hierbo. |
| **Tender** | Die som van die lyne. |

Elke lyn word na die sent afgerond. Die werkboek wys dieselfde lyne onder die Raming-blad se totaal, met lewendige formules. Die opsomming werk op soos jy tik: {{key:Enter}} aanvaar 'n persentasie. Elke alternatief word met dieselfde opslae op sy eie koste gewys, sodat die eienaar sien wat die neem daarvan werklik verander.

## Die voorstel

Vul in wat die voorstel moet sê:

- **Projek** (die hoeveelheidsopname se naam wanneer leeg), **Aan** (die kliënt) en **Van** (jou maatskappy).
- **Insluitings** en **Uitsluitings**: een per lyn; 'n voorafgaande streep of kolletjie is in orde.
- **Voorwaardes**: vrye teks, soos "Geldig vir 30 dae."
- **Lys die items en hoeveelhede**: die omvang, item vir item, met hoeveelhede en geen pryse nie. Ontmerk dit vir 'n vaste-somvoorstel.

Kies {{ui:Voorstel-PDF}}. Die PDF (`<takeoff> - proposal.pdf`) het die datum, die prysblok met elke opslag en die tender, die alternatiewe, die omvang, die insluitings en uitsluitings, die voorwaardes, en lyne om te teken en te dateer. As 'n paar hoeveelhede nie gemeet kon word nie ('n blad sonder skaal), sê dit so onder die prys.

## In die uitvoer

Sodra die hoeveelheidsopname 'n tenderopsomming het, eindig die CSV daarmee en die werkboek kry 'n **Tenderopsomming**-blad, met elke lyn, sy persentasie en sy bedrag. Sien [Voer die raming uit](topic:export-estimate).
