---
title: Izaberi linije PDF-a
summary: Klikni liniju vektorskog PDF-a da izmeriš ceo povezani put, ili klikni unutar zatvorene konture za njenu površinu, sa prikazanom tolerancijom razmaka i jednim poništavanjem po segmentu.
keywords: put, izbor, linije, povezano, cela deonica, prati, kontura, obim, razmak, tolerancija, premošćavanje, segmenti, tab, vektor, površina iz linija, p
from: c22526ae
---

Na vektorskom PDF-u zidovi i ivice su prave linije. {{ui:Put}} ({{key:P}}) ih uzima onakve kakve su nacrtane: jedan klik na liniju meri sve što je spojeno sa njom, od kraja do kraja, pa ne moraš da pratiš zid klikanjem na njegove uglove. List treba da ima razmeru. Skenirana stranica nema linije koje se biraju; tamo koristi [Dužina](topic:measure-linear) ili [Površina](topic:measure-areas).

## Izaberi put ili konturu

1. Izaberi {{ui:Put}}. Linija ispod pokazivača je ocrtana, a ostali putevi koji bi mogli biti ta linija ocrtani su tanko.
2. Klikni liniju: ceo povezani put se bira. Traka ispod trake sa alatima daje segmente, dužinu, toleranciju razmaka i koliko je razmaka premošćeno. Put koji se vraća na svoj početak je zatvoren i prikazuje i svoj obim.
3. Ili klikni unutar zatvorene konture, dalje od linija: kontura oko te tačke se bira kao površina. Najmanja dolazi prva; {{key:Tab}} proba sledeću veću.
4. Pritisni {{key:Enter}} (ili desni klik, ili dupli klik) da dodaš oznake. Izabrani put postaje oznaka **linearne** stavke, a kontura oznaka **površinske** stavke: aktivna stavka ako je te vrste, inače najnovija te vrste. Bez takve stavke otvara se forma za novu stavku i ništa se ne dodaje dok ponovo ne pritisneš {{key:Enter}}. Sve izabrano se dodaje u jednom koraku poništavanja.

## Tolerancija razmaka

Crtači ostavljaju male rupe tamo gde linije treba da se spoje. Dve linije se spajaju kada su im krajevi bliži od **tolerancije razmaka**. Ona počinje sa 1.5 tačke na listu (prikazano u stopama i inčima pri razmeri lista), a isprekidani prsten te širine prati pokazivač i sedi na svakom kraju puta ispod njega. Svaka premošćena rupa je obeležena narandžastim prstenom na izabranom putu, a traka ih broji.

{{key:]}} čini toleranciju širom, {{key:[}} užom. Izabrani put se odmah ponovo spaja na novoj toleranciji. Na spoju put nastavlja pravo, na način koji najmanje skreće, i ostavlja granu.

## Tasteri

| Taster ili radnja | Šta radi |
|---|---|
| Klik | Bira put ispod pokazivača, ili konturu oko njega. |
| {{key:Shift}} + klik | Dodaje još jedan put ili konturu izboru. |
| {{key:Tab}} | Proba sledeći put ispod pokazivača, ili sledeću veću konturu. |
| {{key:Backspace}} ili {{key:Mod+Z}} | Skida poslednji segment sa poslednjeg izabranog puta, jedan po jedan segment. Put bez segmenata nestaje. Bez izabranog, {{key:Mod+Z}} je obično poništavanje. |
| {{key:[}} i {{key:]}} | Uža i šira tolerancija razmaka. |
| {{key:Enter}} | Dodaje oznake. |
| {{key:Esc}} | Briše izbor. |

## Dobro je znati

- Kriva u crtežu je lanac kratkih pravih delova, pa je njena dužina malo kraća od prave dužine luka. Za tačan luk izmeri sam crtež ([Merenje iz crteža](topic:measure-from-a-drawing)).
- Premošćeni razmak računa se kao prava preskočna linija preko njega, pa obim zatvorene konture to uključuje.
- Samo potezi i ispune u samim putevima stranice su linije. Tekst nacrtan kao slova i slike nisu.
