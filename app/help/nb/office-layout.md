---
title: "Kontorlayout: gruppering, delsummer, tittel og overskrifter fra standardreglene dine"
summary: Slå på tillegget Standardregler, så tar kalkylen, mengdene per ark, eksportene og det en assistent leser kontorets tabelloppsett, det samme som BimCraft-tabellene bruker.
keywords: kontorstandard, kontorlayout, standardregler, tillegg, tabelloppsett, grupper etter type, grupper etter ark, delsum, summer, tittel, overskrifter, store bokstaver, kalkylelayout, eksportlayout, innstillinger
from: cfd2f30a
---

## Hva du gjør

La TakeoffCraft legge ut tabellene slik kontoret ditt utsteder dem, uten å sette det opp i hvert mengdeuttak. Layouten settes én gang, under Standardregler, og gjelder for alle appene på denne datamaskinen: det du setter i BimCraft eller CadCraft er det TakeoffCraft bruker, og omvendt.

## Steg

1. Åpne **Innstillinger › Tillegg** og slå på **Standardregler**. Den er av til du gjør det; når den er av, eller ingenting er satt, er TakeoffCraft akkurat som før.
2. Åpne **Innstillinger › Global › Standardregler** og finn **Tabelloppsett (kontorstandarden)**:

| Regel | Hva den gjør i TakeoffCraft |
|---|---|
| Grupper tabeller etter | **Type** grupperer kalkylen etter posttype (Lineær, Areal, Tell, Typet mengde). **Nivå** grupperer mengdene per ark etter arket deres. **Rom** og **Ingen gruppering** lar begge stå ugrupperte |
| Summer i tabeller | **En delsum under hver gruppe og en total** legger til en delsum under hver gruppe. Totalen for jobben er alltid med |
| Tabelltittel | En linje over tabellen, for eksempel `{schedule}: kontorlayout` |
| Kolonneoverskrifter | Som skrevet, I STORE BOKSTAVER eller Med store bokstaver |

3. Lukk Innstillinger. Tabellene følger med en gang.

## Hva som påvirkes av layouten

- **Mengder › Per post** og **Per ark**: gruppeoverskrifter, en delsum under hver gruppe, tittelen og overskriftsskriften. En linje under tittelen sier hvilke deler kontorstandarden din satte. Radene er de samme radene: du skriver fortsatt inn satser og svinn i dem, og klikker på tall for å velge merkene deres. En komponent eller en andre betingelse blir stående under sin post.
- **Den eksporterte kalkylen** (CSV og XLSX): de samme gruppene og delsummene. I arbeidsboken er en delsum en `SUBTOTAL`-formel over gruppen, og totalen for jobben er også en, slik at ingenting telles to ganger.
- **Det en assistent leser**: `takeoff_estimate` og `takeoff_quantities` (per ark) legger til en `layout`-blokk med gruppene, radene og delsummene, og sier hvilke deler kontoret satte.

## Det som beholder sitt eget

- **Mengder › Per område** angir sin egen gruppering (etter tilbudsområde) og beholder den.
- **Totalen for jobben**, påslagene i tilbudsoppsummeringen og alternativene grupperes ikke på nytt.
- En gruppering tabellen ikke har en kolonne for, utelates: kalkylen har ingen nivå, og mengdene per ark har ingen type.

## Greit å vite

- Reglene lagres i denne nettleseren for alle CadCraft-appene og følger med i standardreglerfilen (**Lagre til fil** / **Last inn fra fil** på samme sted), slik at et kontor kan dele én fil.
- En kalkyle eksportert som CSV med grupper i er beregnet på lesing. For å hente en kalkyle inn igjen som prisbibliotek, eksporter den uten gruppering satt.
- BimCraft har sin side av samme standard: tabeller, oppsett og eksporter. TakeoffCraft har ingen egne regler ennå, så det finnes ingen Standardregler-seksjon under Innstillinger › TakeoffCraft.
