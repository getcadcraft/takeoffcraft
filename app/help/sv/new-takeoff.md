---
title: Starta en ny avtagning
summary: Rensa allt och starta en tom avtagning utan att ladda om sidan, och spara ditt arbete först.
keywords: ny, ny avtagning, rensa, återställ, börja om, tom, stäng pdf, nästa jobb
from: 16d392a4
---

{{ui:Ny}} stänger alla PDF:er och startar en tom avtagning på samma sida.

1. Spara den aktuella avtagningen om du vill behålla den: {{ui:Spara avtagning}} eller {{key:Mod+S}}.
2. Välj {{ui:Ny}} i gruppen {{ui:Fil}}.
3. Om det finns osparade ändringar frågar TakeoffCraft **Osparad avtagning**: välj {{ui:Spara avtagning först}} (det laddar ner projektet och rensar sedan), {{ui:Kassera ändringar}} eller {{ui:Avbryt}}.
   Fönstret går tillbaka till sitt tomma läge: inga PDF:er, inga poster, inga markeringar, inga skalor. Statusfältet säger "Ny avtagning. Öppna PDF:er för att börja."

Det som rensas:

- varje öppen PDF, dess blad och miniatyrer,
- poster, sammansättningar, markeringar och skalor,
- varje blads zoom och position,
- ångrahistoriken (du kan inte ångra {{ui:Ny}}),
- bågläget och eventuell autoräkningssökning eller granskning.

Dina filer på disken berörs inte. För att återuppta den gamla avtagningen, öppna dess `.takeoff.json` och PDF:er: se [Spara och öppna en avtagning igen](topic:save-and-reopen).

:::note
Varje ny avtagning startar utan poster. För att föra över poster, kopiera dem först: {{ui:Kopiera post}} under Poster (eller kopiera markeringar, som bär sina poster), och klistra sedan in med {{ui:Klistra in}} i den nya avtagningen. Se [Kopiera, klistra in och duplicera markeringar](topic:copy-paste). För poster du använder på varje jobb, behåll dem i ditt [prisbibliotek](topic:price-library) och lägg till dem därifrån, eller lägg till ett [branschpaket](topic:trade-packs).
:::
