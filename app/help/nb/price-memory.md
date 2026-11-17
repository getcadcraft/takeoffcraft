---
title: Prishukommelse fra tidligere jobber
summary: TakeoffCraft husker satsene du brukte i tidligere mengdeuttak, bare på denne datamaskinen, slik at et nytt mengdeuttak kan starte fra det du betalte sist. Se det, bruk det, glem det.
keywords: prishukommelse, priser, husk priser, siste jobb, tidligere jobber, typisk pris, median, satser, uprisede, prissett på nytt, lær av et tidligere mengdeuttak, glem, bibliotek
from: 7279f1a1
---

{{ui:Priser}} på verktøylinjen (dollartegnet) åpner det TakeoffCraft husker om prisene du brukte. Det er en enkel liste: for hvert postnavn, satsene fra de siste jobbene dine. Den lagres i denne nettleseren (i Studio, i sitt eget nettvisningsvindu) ved siden av prisbiblioteket, aldri inne i en mengdeuttaksfil, og ingenting sendes noe sted. Det er ikke en trent modell.

## Hva som huskes

Når du lagrer et mengdeuttak, huskes hver post som har en pris og er brukt (den har et merke, eller en skrevet mengde over null), under sitt navn og type: materialsats, arbeidssats, svinn og enhet. En jobb er planfilene det tas av, så når du lagrer det samme mengdeuttaket igjen, erstattes dets egne priser i stedet for at det legges til en ny jobb. De siste 12 jobbene beholdes for hvert navn.

For å starte med eldre arbeid, velg {{ui:Lær av et tidligere mengdeuttak…}} og velg et lagret mengdeuttak (.json). Dets prissatte, brukte poster huskes på samme måte.

Navn stemmer når ordene deres stemmer, uansett store og små bokstaver eller tegnsetting («2x4 Stud, 8 ft» og «2x4 stud 8 FT» er det samme). De samme ordene for en annen type post (en lineær post og en tellepost) er ikke den samme prisen.

## Bruk det i et nytt mengdeuttak

1. Lag postene i det nye mengdeuttaket.
2. Velg {{ui:Priser}}. Under {{ui:Dette mengdeuttaket}} ser du hver post som har en husket pris, hva du har på den nå, siste jobbs satser, de typiske satsene (midten av de huskede jobbene) og spennet.
3. Velg {{ui:Bruk siste}} eller {{ui:Bruk typisk}} på én post, eller {{ui:Pris N uprisede poster fra hukommelsen}} for å fylle hver post som ikke har en pris ennå, med siste jobbs pris.

Hver bruk er ett trinn: {{key:Ctrl+Z}} angrer det. En post som bare har et lignende navn (ett navn inni et annet), sier fra om det, og knappene bruker det lignende navnets satser. En pris husket per stk. settes aldri på en post per fot: dialogen sier at enhetene er ulike og lar den være.

## Se det, endre det, glem det

{{ui:Alt som er husket}} lister hvert navn med satsene og antall jobber. Søppelbøtteknappen glemmer ett navn; {{ui:Tøm alle priser}} glemmer dem alle. Slå av {{ui:Husk prisene mine når jeg lagrer et mengdeuttak}} for å slutte å huske; det som allerede finnes, blir værende til du glemmer det. Mengdeuttakene dine og prisbiblioteket røres aldri.

## Med assistenten din

Tillater du assistenter i Innstillinger, kan de lese det som er husket for mengdeuttakets poster (prices_list) og prise poster fra det (prices_apply, som kan forhåndsvise først). Det er den samme listen som dialogen.
