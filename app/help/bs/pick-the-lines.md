---
title: Odabir linija PDF-a
summary: Kliknite na liniju vektorskog PDF-a da izmjerite čitav povezani put, ili kliknite unutar zatvorene konture za njenu površinu, uz prikazanu toleranciju razmaka i jedno poništavanje po segmentu.
keywords: put, odabir, linije, povezano, cijeli niz, praćenje, kontura, obim, razmak, tolerancija, most, segmenti, tab, vektor, površina iz linija, p
from: c22526ae
---

Na vektorskom PDF-u zidovi i ivice su prave linije. {{ui:Path}} ({{key:P}}) ih uzima onakvima kakve su nacrtane: jedan klik na liniju mjeri sve što je spojeno s njom, od kraja do kraja, pa ne morate pratiti zid klikanjem na njegove uglove. List mora imati razmjeru. Skenirana stranica nema linija za odabir; tu koristite [Linearno](topic:measure-linear) ili [Površina](topic:measure-areas).

## Odaberite put ili konturu

1. Izaberite {{ui:Path}}. Linija ispod pokazivača je ocrtana, a drugi putevi koje bi mogla biti dio prikazani su tanko.
2. Kliknite na liniju: odabire se cijeli povezani put. Traka ispod alatne trake prikazuje njegove segmente, dužinu, toleranciju razmaka i koliko je razmaka premošćeno. Put koji se vraća na svoj početak je zatvoren i prikazuje i svoj obim.
3. Ili kliknite unutar zatvorene konture, dalje od svake linije: kontura oko te tačke se odabire kao površina. Najmanja dolazi prva; {{key:Tab}} isprobava sljedeću veću.
4. Pritisnite {{key:Enter}} (ili desni klik, ili dvostruki klik) da dodate oznake. Odabrani put postaje oznaka **linearne** stavke, a kontura oznaka **površinske** stavke: aktivna stavka ako je te vrste, inače najnovija te vrste. Ako nema nijedne, otvara se obrazac za novu stavku i ništa se ne dodaje dok ponovo ne pritisnete {{key:Enter}}. Sve odabrano se dodaje u jednom koraku poništavanja.

## Tolerancija razmaka

Crtači ostavljaju male rupe tamo gdje se linije treba spojiti. Dvije linije se spajaju kad su im krajevi bliži od **tolerancije razmaka**. Ona počinje sa 1.5 tačke na listu (prikazana u stopama i inčima po razmjeri lista), a isprekidani prsten te širine prati pokazivač i stoji na svakom kraju puta ispod njega. Svaka premošćena rupa je obilježena narandžastim krugom na odabranom putu, a traka ih broji.

{{key:]}} čini toleranciju širom, a {{key:[}} užom. Odabrani put se odmah ponovo spaja pri novoj toleranciji. Na spoju put nastavlja pravo, onako kako najmanje skreće, i ostavlja granu.

## Tipke

| Tipka ili radnja | Šta radi |
|---|---|
| Klik | Odabire put ispod pokazivača, ili konturu oko njega. |
| {{key:Shift}} + klik | Dodaje još jedan put ili konturu odabranom. |
| {{key:Tab}} | Isprobava sljedeći put ispod pokazivača, ili sljedeću veću konturu. |
| {{key:Backspace}} ili {{key:Mod+Z}} | Skida posljednji segment sa posljednjeg odabranog puta, jedan po jedan. Put bez preostalih segmenata nestaje. Kad ništa nije odabrano, {{key:Mod+Z}} je obično poništavanje. |
| {{key:[}} i {{key:]}} | Uža i šira tolerancija razmaka. |
| {{key:Enter}} | Dodaje oznake. |
| {{key:Esc}} | Briše odabir. |

## Dobro je znati

- Krivina u crtežu je lanac kratkih ravnih dijelova, pa je njena dužina malo kraća od prave dužine luka. Za tačan luk izmjerite iz same datoteke crteža ([Mjerenje iz crteža](topic:measure-from-a-drawing)).
- Premošćeni razmak se računa kao ravan skok preko njega, pa obim zatvorene konture uključuje i njega.
- Samo potezi i ispune u samim putevima stranice su linije. Tekst nacrtan kao slova i slike to nisu.
