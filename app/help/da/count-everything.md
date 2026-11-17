---
title: Tæl alt i sættet
summary: Tegn en boks om en symbolforklaring én gang, og TakeoffCraft tæller hvert symbol i den på hvert åbent ark i ét kørsel. Hver optælling er et link til sit ark, og du gennemgår før noget tilføjes.
keywords: tæl alt, forklaring, symbolforklaring, hele sættet, hvert ark, alle ark, hver dør, hver armatur, enheder, skema, symboler, auto-tælling, tæl alle, sæt af tegninger, 200 ark, matchniveau, ligner
from: adc99744
---

{{ui:Tæl alt}} læser en symbolforklaring og tæller derefter hvert symbol i den på hvert åbent ark. Det er {{ui:Auto-tælling}} for en hel forklaring på én gang. Det er ren symbolmatchning på dine egne ark, ikke en trænet model, og intet forlader din computer. Gennemgå tallene før du tilføjer dem: det er en hjælper, ikke en garanti.

## Tæl en forklaring

1. Åbn planerne. En forklaring på et hvilket som helst ark er nok: symbolerne med deres navne ved siden af.
2. Vælg {{ui:Tæl alt}} på værktøjslinjen.
3. Træk en boks om forklaringen, symbolerne og navnene. En titel uden et symbol ved siden af (SYMBOLFORKLARING) springes over alene.
   Panelet lister hvert symbol med dets billede og navnet trykt ved siden af. Navnet bliver postens navn, så omdøb det her hvis du vil.
4. Fjern markeringen ved et symbol du ikke vil tælle. Et symbol der ikke kan søges efter (for småt, eller tomt) siger hvorfor.
5. Vælg {{ui:Tæl på N ark}}. En bjælke viser arket der søges i; {{ui:Annuller}} stopper kørslen. Siden er stadig brugbar.

Forklaringens egne symboler tælles ikke på dens eget ark. Et ark tegnet i en anden målestok søges i den målestok, og symbolerne findes drejet i enhver ret vinkel.

## Gennemgå tallene

- Hvert symbol viser sin total, og under den et link pr. ark der har nogen ("E-103: 4"). Klik på et for at gå til arket. Fundene omgives af en boks i postens farve.
- **Klik på en boks** for at udelade det fund. Den bliver stiplet og overstreget; klik igen for at få den tilbage.
- **Flyt matchniveauet** (50 % til 100 %, startende ved dit niveau i {{ui:Indstillinger}}). Højere beholder kun nære matcher. Skyderen filtrerer kun det der er fundet; intet søges igen.
- To symboler der ligner hinanden (en dobbelt- og en firedobbelt stikkontakt) kan matche det samme sted. Den bedste match tager det, og panelet siger hvor mange steder det skete på, så du kan kontrollere dem.
- Et ark der er for stort til at søge i symbolets størrelse springes over, og panelet siger det.

## Tilføj dem

Vælg {{ui:Tilføj N markeringer}}. Hvert symbol bliver en antalspost med en markering på hvert fund. Et navn der allerede er en antalspost hos dig genbruges (intet fordobles der hvor du allerede har markeret i hånden). Hele kørslen er ét trin: {{key:Ctrl+Z}} tager alle poster og markeringer tilbage.

Det du accepterer føder også {{ui:Lært}}: symbolerne huskes i mængdeudtrækkets fil til næste gang.

## Med din assistent

Hvis du tillader assistenter i Indstillinger, kan de læse en forklaring (legend_open), køre tællingen i baggrunden (legend_count_start, derefter legend_count_status), læse tallene (legend_count_result) og tilføje dem (legend_count_add, som først kan vise en forhåndsvisning af hvad det ville tilføje). Det er den samme kørsel du ser i panelet.

## Symboler i enhver vinkel

Sæt flueben ved {{ui:Symboler i enhver vinkel}} før du tæller for også at finde symboler tegnet i en vinkel der ikke er en ret vinkel (en skrå stikprop, et armatur drejet efter et tag). Søgningen drejer så hvert symbol hver 15. grad; et rundt symbol kræver stadig én søgning, og et symbol der ikke er rundt kan tage op til seks gange så lang tid. Lad det være fra for planer tegnet firkantet.

## Godt at vide

- Det kræver symboler tegnet på samme måde som i forklaringen. En forklaring tegnet i en anden størrelse end arkene er fint når arkenes målestokke er sat; uden målestokke søges symbolerne i forklaringens størrelse.
- Et symbol med en væg eller en lang linje tegnet lige igennem kan blive overset, fordi det ikke længere ligner forklaringens billede. Kontrollér fundene på det første ark før du stoler på resten.
- En scanning uden tekst virker stadig: symbolerne findes efter deres rækker, og du skriver navnene.
