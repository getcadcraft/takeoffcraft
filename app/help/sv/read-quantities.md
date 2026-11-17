---
title: Läs av mängder och kalkylen
summary: Använd tabellen Mängder per post och per blad, jobbsumman, markering och varningen Ofullständig.
keywords: mängder, summor, per post, per blad, jobbsumma, kalkyl, sammanfattning, rapport, markering, ofullständig, kostnader
from: 069d41f1
---

Tabellen {{ui:Mängder}} längst ned i fönstret är din kalkyl i realtid. Den ändras i samma ögonblick som du ritar, raderar, skalar om eller redigerar ett á-pris. Mängder lagras aldrig; de mäts om från markeringarna varje gång, så de kan inte bli inaktuella.

## Per post

Välj {{ui:Per post}} (standard). Varje post har en rad, och varje komponent i en kalkylsammansättning har en rad under den.

| Kolumn | Betydelse |
|---|---|
| Post | Namn, med postens färg. "+(n) oskalade" betyder att vissa markeringar ligger på blad utan skala. |
| Mängd | Den uppmätta summan i postens enhet (komponenter: formelns resultat). |
| Enhet | LF, m, SF, SY, m², EA eller komponentens enhet. |
| Spill % | Skrivs här eller i postredigeraren. |
| Med spill | Mängd × (1 + spill). |
| Material/á-pris, Arbete/á-pris | Á-priser; du kan skriva in dem här. |
| Material, Arbete | Med spill × á-pris, avrundat till närmaste cent. |
| Summa | Material + arbete. |

Den sista raden, **Jobbsumma**, adderar kolumnerna material, arbete och summa. Samma summa visas till höger i tabellens rubrik.

Skriv i en spill- eller prisruta och tryck på {{key:Enter}} eller klicka utanför för att tillämpa värdet. Ett värde som TakeoffCraft inte kan läsa markeras med röd kontur, och statusfältet säger varför, till exempel "Skriv ett belopp, till exempel 12.50."

Klicka på en posts rad för att markera dess markeringar på alla blad och hoppa till ett blad som har dem (samma som att klicka på posten under {{ui:Poster}}).

## Per blad

Välj {{ui:Per blad}} för att se varje posts mängd på varje blad, med antalet markeringar. Klicka på en rad för att öppna bladet med posten markerad. Använd det för att kontrollera att varje blad har mätts av, eller för att dela upp mängderna per våning eller arbetsområde.

## Per område

När avtagningen har anbudsområden listar {{ui:Per område}} varje områdes poster och en delsumma. Se [Anbudsområden](topic:bid-areas).

## Varningen Ofullständig

När något utelämnas från summorna visar rubriken en varning, till exempel:

"Ofullständig: 1 formelfel, 6 markeringar på blad utan skala (ingår inte i summorna)"

- **Formelfel**: en kalkylsammansättningskomponents formel kan inte beräknas. Dess rad säger "Formelfel: …". Se [Kalkylsammansättningar och formler](topic:assemblies#when-a-formula-is-wrong).
- **Markeringar på blad utan skala**: ge de bladen en skala. Se [Ange skalan](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Samma anteckningar går in i det exporterade kalkylbladet, så en ofullständig kalkyl ser aldrig komplett ut.

## Markera en post

Klicka på en post under {{ui:Poster}} eller i tabellen. Dess markeringar förblir starka på alla blad, och resten bleknar. Bladlistan visar "(n) markerade" vid varje blad med markeringar. Klicka på posten igen för att sluta markera.

## Postsummor i sidopanelen

Varje post i listan {{ui:Poster}} visar också sin mängd. Blocket **Uppmätt** i postredigeraren visar de värden som dess formler använder: längd, sträckor och väggarea; area, omkrets och antal områden; eller antal.

## Markeringar på PDF-filer som inte är öppna

En avtagning kan innehålla markeringar på PDF-filer som du inte har öppnat den här gången. De räknas fortfarande i alla summor; bladlistan anger namnen på dessa PDF-filer. Se [Spara och öppna en avtagning igen](topic:save-and-reopen).

## Mer utrymme

Pilknappen till höger i rubriken {{ui:Mängder}} döljer tabellen så att bladet får mer utrymme. Välj den igen för att visa tabellen.
