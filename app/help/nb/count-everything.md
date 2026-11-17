---
title: Tell alt i settet
summary: Merk en symbolforklaring én gang, så teller TakeoffCraft hvert symbol i den på hvert åpne ark i én kjøring. Hver telling er en lenke til sitt ark, og du gjennomgår før noe legges til.
keywords: tell alt, forklaring, symbolforklaring, hele settet, alle ark, alle dører, alle armaturer, enheter, skjema, symboler, autotelling, tell alle, sett med planer, 200 ark, treffnivå, ser likt ut
from: adc99744
---

{{ui:Tell alt}} leser en symbolforklaring og teller deretter hvert symbol i den på hvert åpne ark. Det er {{ui:Autotelling}} for en hel forklaring på en gang. Det er enkel symbolmatching på dine egne ark, ikke en trent modell, og ingenting forlater datamaskinen din. Gjennomgå tellingene før du legger dem til: det er en hjelper, ikke en garanti.

## Tell en forklaring

1. Åpne planene. En forklaring på et hvilket som helst ark går bra: symbolene med navnene ved siden av.
2. Velg {{ui:Tell alt}} på verktøylinjen.
3. Dra en boks rundt forklaringen, symbolene og navnene. En tittel uten symbol ved siden av (SYMBOLFORKLARING) utelates alene.
   Panelet lister hvert symbol med bildet og navnet som står ved siden av. Navnet blir postens navn, så gi det nytt her om du vil.
4. Fjern haken for symboler du ikke vil telle. Et symbol som ikke kan søkes etter (for lite, eller tomt) sier hvorfor.
5. Velg {{ui:Tell på N ark}}. En linje viser arket som søkes i; {{ui:Avbryt}} stopper kjøringen. Siden er fortsatt brukbar.

Forklaringens egne symboler telles ikke på sitt ark. Et ark tegnet i en annen målestokk søkes i den målestokken, og symbolene finnes vendt i enhver rett vinkel.

## Gjennomgå tellingene

- Hvert symbol viser sin totalsum, og under den en lenke per ark som har noen («E-103: 4»). Klikk på en for å gå til det arket. Treffene er merket med en boks i postens farge.
- **Klikk på en boks** for å utelate det treffet. Den blir stiplet og gjennomstreket; klikk igjen for å hente den tilbake.
- **Flytt treffnivået** (50 % til 100 %, som starter på innstillingsnivået ditt). Høyere beholder bare nære treff. Glidebryteren filtrerer bare det som ble funnet; ingenting søkes på nytt.
- To symboler som ser like ut (et dobbelt og et firedobbelt uttak) kan treffe samme sted. Det beste treffet tar det, og panelet sier hvor mange steder det skjedde, slik at du kan kontrollere dem.
- Et ark som er for stort til å søkes i symbolets størrelse, hoppes over, og panelet sier det.

## Legg dem til

Velg {{ui:Legg til N markeringer}}. Hvert symbol blir en tellepost med et merke på hvert treff. Et navn som allerede er en av dine tellepostene, brukes igjen (ingenting dobles der du har merket for hånd). Hele kjøringen er ett trinn: {{key:Ctrl+Z}} tar tilbake hver post og hvert merke.

Det du aksepterer mates også inn i {{ui:Lært}}: symbolene huskes i mengdeuttakets fil til neste gang.

## Med assistenten din

Hvis du tillater assistenter i Innstillinger, kan de lese en forklaring (legend_open), kjøre tellingen i bakgrunnen (legend_count_start, deretter legend_count_status), lese tellingene (legend_count_result) og legge dem til (legend_count_add, som først kan vise en forhåndsvisning av hva det ville legge til). Det er den samme kjøringen du ser i panelet.

## Symboler i alle vinkler

Kryss av {{ui:Symboler i alle vinkler}} før du teller for også å finne symboler tegnet i en vinkel som ikke er rett (en skrå veggplugg, en armatur vendt etter et tak). Søket vender da hvert symbol hver 15. grad; et rundt symbol trenger fortsatt ett søk, og et symbol som ikke er rundt, kan ta opptil seks ganger så lang tid. La det være av for planer tegnet firkantet.

## Godt å vite

- Det trenger symboler tegnet på samme måte som i forklaringen. En forklaring tegnet i en annen størrelse enn arkene er greit når arkenes målestokker er satt; uten målestokker søkes symbolene i forklaringens størrelse.
- Et symbol med en vegg eller en lang linje tegnet rett gjennom seg kan bli oversett, fordi det ikke lenger ser ut som forklaringens bilde. Kontroller treffene på det første arket før du stoler på resten.
- En skanning uten tekst fungerer fortsatt: symbolene finnes etter sine rader, og du skriver inn navnene.
