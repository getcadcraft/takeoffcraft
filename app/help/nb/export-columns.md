---
title: Eksportkolonner
summary: Hvert regneark og hver kolonne i XLSX-eksporten og CSV-filen, med formlene Kalkyle-arket har.
keywords: eksport, kolonner, xlsx, csv, regneark, kalkylark, per ark, markeringer, målestokker, formler, felt
from: fed07851
---

## Kalkyle (XLSX-regneark og CSV)

En rad per post, etterfulgt av en rad per komponent i postens sammensatte post (innrykket). Deretter en tom rad og totalen for jobben.

| Kolonne | Innhold | I XLSX |
|---|---|---|
| A Post | Postnavn (fet) eller komponentnavn (innrykket) | Tekst |
| B Type | Lineær, Areal, Tell eller Komponent | Tekst |
| C Enhet | LF, m, SF, SY, m², EA, eller komponentens enhet | Tekst |
| D Mengde | Målt totalt, eller formelresultatet | Tall |
| E Svinn % | Svinn | Prosent (0.10 = 10%) |
| F Mengde med svinn | Mengde × (1 + svinn) | Formel `D*(1+E)` |
| G Materiell per enhet | Materialsats | Tall |
| H Arbeid per enhet | Arbeidssats | Tall |
| I Materiell | Utvidet materiell | Formel `ROUND(F*G,2)` |
| J Arbeid | Utvidet arbeid | Formel `ROUND(F*H,2)` |
| K Sum | Materiell + arbeid | Formel `I+J` |
| L Merknader | Brukt formel, formelfeil, markeringer på ark uten målestokk, veggareal, omkrets | Tekst |

Totalraden for jobben: `SUM` av kolonnene I, J og K over alle radene over, og «Ufullstendig: se merknadene over» i Merknader når noe er utelatt.

En rad med formelfeil har ingen mengde eller beløp; merknaden angir feilen. Overskriftsraden er låst.

I CSV-filen har de samme kolonnene vanlige verdier, Svinn % er et tall i prosent (10 for 10%), og beløp er i dollar med to desimaler. Tekst som et regneark kan tolke som en formel (begynner med `=`, `+`, `-` eller `@`) får et innledende `'`, slik at den forblir tekst.

## Per ark (bare XLSX)

| Kolonne | Innhold |
|---|---|
| Ark | Arknavn (med PDF-navnet når den ikke er åpen) |
| Post | Postnavn |
| Mengde | Postens mengde på det arket, i sin enhet |
| Enhet | Postens enhet |
| Markeringer | Antall markeringer |

## Markeringer (bare XLSX)

En rad per markering.

| Kolonne | Innhold |
|---|---|
| Ark | Arknavn |
| Post | Postnavn |
| Type | Lineær, Areal eller Tell |
| Mengde | Lengde, netto areal, eller 1 |
| Enhet | LF eller m; SF, SY eller m²; EA |
| Detaljer | Lineær: segmentlengdene, fradragene merket «(fradrag)», og «fradrag (lengde) av (lengde) tegnet». Areal: brutto- og utsparingsareal når det finnes utsparinger, og omkretsen. «Arket har ingen målestokk» for markeringer uten målestokk. |
| Tilbudsområde | Bare når mengdeuttaket har tilbudsområder: markeringens areal, eller «Ingen tilbudsområde» |

## Per tilbudsområde (bare XLSX, når mengdeuttaket har tilbudsområder)

| Kolonne | Hva |
|---|---|
| Tilbudsområde | Områdets navn, eller «Ingen tilbudsområde» |
| Post | Posten, eller en innrykket komponent under den |
| Enhet | Postens eller komponentens enhet |
| Mengde | Målt i det området (komponenter: formelen på områdets summer) |
| Mengde med svinn | Mengde × (1 + svinn) |
| Materiell, Arbeid, Sum | Utvidet til øre, som i Kalkyle |
| Merknader | Formel, feil og umålte markeringer, som i Kalkyle |

Hvert område slutter med en rad «(navn) delsum» der kostnadene er `SUM`-formler over radene; siste rad, **Alle tilbudsområder**, legger sammen delsummene. Regnearket **Markeringer** har da en syvende kolonne, **Tilbudsområde**.

## Målestokker (bare XLSX)

En rad per ark som har en målestokk eller markeringer.

| Kolonne | Innhold |
|---|---|
| Ark | Arknavn |
| Målestokk | Forhåndsvalgtes navn, den kalibrerte målestokken, eller «Ingen målestokk» |
| Hvordan | «Forhåndsvalgt», eller «Kalibrert på avstanden som ble skrevet inn» |
| Fot per PDF-enhet | Den nøyaktige skaleringsfaktoren TakeoffCraft bruker |

## Filnavn

- `(name).xlsx` og `(name).csv`, der navnet kommer fra den første PDF-filen som er åpnet i mengdeuttaket.
- CSV-filen er UTF-8 med byte-order-merke og Windows-linjeskift, som regnearkprogrammer på alle plattformer leser.
