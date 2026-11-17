---
title: Les mengder og kalkylen
summary: Bruk tabellen Mengder etter post og etter ark, sum for jobben, utheving og advarselen Ufullstendig.
keywords: mengder, totaler, etter post, etter ark, sum for jobben, kalkyle, sammendrag, rapport, utheving, ufullstendig, kostnader
from: 069d41f1
---

Tabellen {{ui:Mengder}} nederst i vinduet er din løpende kalkyle. Den endrer seg i det øyeblikket du tegner, sletter, endrer målestokk eller redigerer en enhetspris. Mengder lagres aldri; de måles på nytt fra markeringene hver gang, slik at de ikke kan bli utdaterte.

## Etter post

Velg {{ui:Etter post}} (standard). Hver post har en rad, og hver av delkomponentene i en sammensatt post har en rad under seg.

| Kolonne | Betydning |
|---|---|
| Post | Navn, med postens farge. «+(n) uten målestokk» betyr at noen markeringer ligger på ark uten målestokk. |
| Mengde | Den målte summen i postens enhet (komponenter: resultatet av formelen). |
| Enhet | LF, m, SF, SY, m², EA, eller komponentens enhet. |
| Svinn % | Skrives inn her eller i postredigeringen. |
| Med svinn | Mengde × (1 + svinn). |
| Materiale/enhet, Arbeid/enhet | Enhetspriser; du kan skrive dem inn her. |
| Materiale, Arbeid | Med svinn × enhetspris, avrundet til nærmeste øre. |
| Sum | Materiale + arbeid. |

Den siste raden, **Sum for jobben**, legger sammen kolonnene for materiale, arbeid og sum. Den samme totalsummen vises til høyre i tabellens overskrift.

Skriv inn i en svinn- eller prisceller og trykk {{key:Enter}} eller klikk utenfor for å bruke den. En verdi TakeoffCraft ikke kan lese, får rød kant, og statuslinjen forklarer hvorfor, for eksempel «Skriv inn et beløp, for eksempel 12.50.»

Klikk på radraden til en post for å markere markeringene på alle ark og hoppe til et ark som har dem (samme som å klikke på posten under {{ui:Poster}}).

## Etter ark

Velg {{ui:Etter ark}} for å se mengden for hver post på hvert ark, med antall markeringer. Klikk på en rad for å åpne arket med posten uthevet. Bruk det til å kontrollere at alle ark er målt, eller til å fordele mengdene på etasje eller arbeidsområde.

## Etter område

Når mengdeuttaket har tilbudsområder, lister {{ui:Etter område}} opp hvert områdes poster og en delsum. Se [Tilbudsområder](topic:bid-areas).

## Advarselen Ufullstendig

Når noe er utelatt fra summene, viser overskriften en advarsel, for eksempel:

«Ufullstendig: 1 formelfeil, 6 markeringer på ark uten målestokk (ikke med i summene)»

- **Formelfeil**: en sammensatt komponents formel kan ikke beregnes. Raden sier «Formelfeil: …». Se [Sammensatte poster og formler](topic:assemblies#when-a-formula-is-wrong).
- **Markeringer på ark uten målestokk**: gi disse arkene en målestokk. Se [Sett målestokken](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

De samme merknadene tas med i det eksporterte regnearket, slik at en ufullstendig kalkyle aldri ser komplett ut.

## Uthev en post

Klikk på en post under {{ui:Poster}} eller i tabellen. Markeringene beholder full styrke på alle ark, og resten blir svakere. Arkelisten viser «(n) uthevet» på hvert ark med markeringer. Klikk på posten igjen for å slutte å utheve.

## Postsummer i sidepanelet

Hver post i listen {{ui:Poster}} viser også sin mengde. Postredigeringens blokk **Målt** viser verdiene formlene bruker: lengde, strekninger og veggareal; areal, omkrets og antall områder; eller antall.

## Markeringer i PDF-er som ikke er åpne

Et mengdeuttak kan inkludere markeringer i PDF-er du ikke har åpnet denne gangen. De teller fortsatt i alle summer; arkelisten viser navnene på disse PDF-ene. Se [Lagre og åpne et mengdeuttak igjen](topic:save-and-reopen).

## Mer plass

Pilknappen til høyre i overskriften til {{ui:Mengder}} skjuler tabellen, slik at arket får mer plass. Velg den igjen for å vise tabellen igjen.
