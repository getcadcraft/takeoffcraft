---
title: Læs mængder og kalkulationen
summary: Brug mængdetabellen pr. post og pr. ark, jobtotalen, markering og advarslen Ufuldstændig.
keywords: mængder, totaler, pr. post, pr. ark, jobtotal, kalkulation, oversigt, rapport, markering, ufuldstændig, omkostninger
from: 069d41f1
---

Tabellen {{ui:Mængder}} nederst i vinduet er din løbende kalkulation. Den ændrer sig i samme øjeblik du tegner, sletter, ændrer målestok eller redigerer en pris. Mængder gemmes aldrig; de måles igen ud fra markeringerne hver gang, så de ikke kan blive forældede.

## Pr. post

Vælg {{ui:Pr. post}} (standard). Hver post har en række, og hver af dens komponenter i en kalkulationsenhed har en række under den.

| Kolonne | Betydning |
|---|---|
| Post | Navn med postens farve. »+(n) uden målestok« betyder at nogle markeringer ligger på ark uden målestok. |
| Mængde | Den målte total i postens enhed (komponenter: formelresultatet). |
| Enhed | LF, m, SF, SY, m², EA eller komponentens enhed. |
| Spild % | Skrives her eller i postredigeringen. |
| Med spild | Mængde × (1 + spild). |
| Materiale/enhed, Løn/enhed | Priser; du kan skrive dem her. |
| Materiale, Løn | Med spild × pris, afrundet til øre. |
| I alt | Materiale + løn. |

Den sidste række, **Jobtotal**, lægger kolonnerne materiale, løn og i alt sammen. Den samme total vises til højre i tabelhovedet.

Skriv i en spild- eller pricelle og tryk {{key:Enter}} eller klik et andet sted for at anvende den. En værdi TakeoffCraft ikke kan læse, omrammes med rødt, og statuslinjen forklarer hvorfor, for eksempel »Skriv et beløb som 12.50.«

Klik på en postrække for at markere dens markeringer på alle ark og hoppe til et ark der har dem (det samme som at klikke på den under {{ui:Poster}}).

## Pr. ark

Vælg {{ui:Pr. ark}} for at se hver posts mængde på hvert ark med antallet af markeringer. Klik på en række for at åbne det ark med posten markeret. Brug det til at kontrollere at alle ark er udtaget, eller til at fordele mængder på etage eller arbejdsområde.

## Pr. område

Når mængdeudtrækket har tilbudsområder, lister {{ui:Pr. område}} hvert områdes poster og en delsum. Se [Tilbudsområder](topic:bid-areas).

## Advarslen Ufuldstændig

Når noget er udeladt fra totalerne, viser hovedet en advarsel, for eksempel:

» Ufuldstændig: 1 formelfejl, 6 markeringer på ark uden målestok (ikke med i totalerne) «

- **Formelfejl**: en komponents formel i en kalkulationsenhed kan ikke beregnes. Dens række siger »Formelfejl: …«. Se [Kalkulationsenheder og formler](topic:assemblies#when-a-formula-is-wrong).
- **Markeringer på ark uden målestok**: giv disse ark en målestok. Se [Angiv målestokken](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

De samme noter kommer med i det eksporterede regneark, så en ufuldstændig kalkulation aldrig ser færdig ud.

## Markér en post

Klik på en post under {{ui:Poster}} eller i tabellen. Dens markeringer bevarer fuld styrke på alle ark, og resten blegnes. Arkelisten viser »(n) markeret« på hvert ark med markeringer. Klik på posten igen for at stoppe markeringen.

## Posttotaler i sidepanelet

Hver post i listen {{ui:Poster}} viser også sin mængde. Postredigerings-blokken **Målt** viser de værdier dens formler bruger: længde, forløb og vægareal; areal, omkreds og antal arealer; eller antal.

## Markeringer i PDF'er der ikke er åbne

Et mængdeudtræk kan indeholde markeringer i PDF'er, du ikke har åbnet denne gang. De tæller stadig med i alle totaler; arkelisten navngiver disse PDF'er. Se [Gem og genåbn et mængdeudtræk](topic:save-and-reopen).

## Mere plads

Pilknappen til højre i hovedet for {{ui:Mængder}} skjuler tabellen, så arket får mere plads. Vælg den igen for at vise tabellen igen.
