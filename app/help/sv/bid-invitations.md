---
title: Skicka ett paket för anbud
summary: Maila ett anbudspaket till underentreprenörer, låt dem skriva in priser på en sida som inte kräver konto, håll priserna förseglade till öppningstiden och hämta dem till jämförelsebladet.
keywords: skicka för anbud, inbjudan, anbudsinbjudan, anbudsgivare, underentreprenör, bjud in, e-post, prisförfrågan, förseglade anbud, anbudsöppning, anbudsdag, försenat anbud, förfallodatum, påminnelse, underentreprenörsregister, försäkring, kvalificering, csv, anslut, blad-pdf
from: fb314b2c
---

{{ui:Exportera}} › {{ui:Anbudspaket och jämförelse…}} › {{ui:Skicka för anbud…}} skickar ett paket till de personer du väljer. Webbplatsen mailar var och en en länk; de öppnar en sida, ser omfattningen och skriver ett pris för varje rad. Du ser priserna i jämförelsebladet, redo att jämföras ([Anbudspaket och anbudsjämförelse](topic:bid-leveling)).

:::note
Att skicka är **ännu inte öppet för alla.** Medan funktionen testas fungerar den för konton som CadCraft-teamet har aktiverat; om ditt inte är det, säger dialogrutan det. Anbudsgivarens sida fungerar för varje inbjudan som skickats.
:::

## Innan du skickar

- Du behöver ett CadCraft-konto med en verifierad e-postadress. TakeoffCraft i webbläsaren ber dig att **Ansluta**: en flik öppnas på getcadcraft.com, du klickar på **Anslut**, och den fliken får en inloggning som gäller i 30 dagar, endast för anbudspaket, tills du stänger TakeoffCraft-fliken. Du kan ta bort den när som helst på din säkerhetssida. Ett Studio-fönster kan inte skicka ännu.
- Ge varje post ett CSI-nummer: ett paket är posterna i en CSI-division ([Skapa mätningsposter](topic:create-items)).
- Skala de blad som paketets märken ligger på, så att mängderna anbudsgivarna ser är uppmätta.

## Skicka ett paket

1. Välj {{ui:Skicka för anbud…}} under paketet.
2. Fyll i titel, projekt och ett valfritt meddelande, samt **förfallotiden** i din egen tidszon.
3. Låt **Håll priserna förseglade** vara ibockad för att dölja alla priser till **öppningstiden** (inte före förfallotiden), eller avbocka den för att se priserna när de kommer in.
4. Låt rutan för blad vara ibockad för att skicka en PDF med de blad som innehåller paketets märken, med märkena ritade. Dina priser ingår aldrig i det som skickas: bara postnamn, CSI-nummer, mängder, enheter och bladnamn.
5. Skriv in personerna att bjuda in, en per rad, som `Namn <name@company.com>` eller bara adressen, eller bocka i personer från dina underentreprenörsregister. Upp till 60 åt gången, 100 per paket.
6. Välj {{ui:Skicka inbjudningar}}. Varje person får ett enkelt e-postmeddelande med ditt namn och din e-postadress, förfallotiden och länken; svar går till dig.

Dialogen berättar hur många som skickades, och namnger alla som hoppades över: redan inbjudna till detta paket, bad att inte få anbudsinbjudningar, ogiltig adress, eller över en sändningsgräns.

## Vad anbudsgivaren ser

En sida på en lång privat länk, utan inloggning. Den visar vem som bjöd in dem, förfallotiden, om priserna är förseglade, ditt meddelande och blad-PDF:en, sedan varje rad med dess mängd. För varje rad skriver de ett pris eller bockar i **Ingår inte**, och kan lägga till en anteckning. De lägger till anteckningar för hela paketet och upp till 3 filer (en offert, ett omfattningsbrev, ett certifikat). De kan spara igen och ändra sina priser fram till öppningen, eller **tacka nej**, med en ruta för att be CadCraft att inte skicka dem fler anbudsinbjudningar.

## Förseglade anbud och öppningen

Före öppningstiden ser **ingen** ett pris, en anteckning eller en fil: varken du, i TakeoffCraft eller på din sida för anbudspaket. Du ser vem som bjudits in och om de har svarat. Vid öppningstiden visas varje anbud på en gång. Ett anbud som sparas efter förfallotiden godtas och markeras **försenat**; jämförelsen listar det ändå, och att det är försenat är en markering, inte ett avgörande. Efter öppningen kan en anbudsgivare inte ändra ett pris. Utan förslutning är ett anbud slutgiltigt när det förfaller.

## Hämta priserna

{{ui:Hämta priser}} frågar webbplatsen och lägger till varje svar i paketet som ett anbud, märkt **webb**. TakeoffCraft frågar också tyst varje gång du öppnar dialogen medan den är ansluten. Ett anbud vars anbudsgivare sparat en ny version uppdateras på plats; ett anbud du redigerat står kvar som du lämnade det tills de skickar en ny version. Varje hämtning är ett steg som {{key:Mod+Z}} ångrar. Utelämnade rader kommer med som den omfattning anbudet lämnar utanför, så att jämförelsen fyller i dem till din egen kostnad.

## På webbplatsen

Ditt konto får två sidor till när du kan skicka: **Anbudspaket** listar vad du skickat, vem som svarat, de försenade anbuden och filerna, och låter dig skicka en påminnelse (en ny länk; den gamla slutar fungera), stänga, öppna igen eller avbryta ett paket. **Underentreprenörer** håller ett register för varje företag: kontakter, branscher, kvalifikationssvar (år i verksamhet, borgensram, EMR, säkerhetsrekord, fackansluten eller icke fackansluten, referenser), giltighetsdatum för licens och försäkring, markerade när de passerat eller ligger inom 30 dagar, samt deras tidigare anbud. Importera och exportera registren som CSV: en rad per kontakt, med de kolumner exporten visar. Ett företag du redan har uppdateras, aldrig upprepas.

## Vem som ser vad, och hur länge

Anbudsgivarens priser, anteckningar och filer går till dig och till CadCraft-teamet, som driver sidan. De sparas i 24 månader efter förfallodatumet, filerna i 180 dagar; sedan tas de bort. Anbudsgivarens e-postadress är den du angav; den används bara för att skicka inbjudan och eventuella påminnelser för den. En adress får högst 3 inbjudningar per dag från alla tillsammans, och du kan skicka upp till 200 per dag.

## Inte byggt ännu

Tilläggsbesked, tilldelningsbrev, ett signerat omfattningsblad per anbudsgivare och automatiska påminnelser innan ett försäkringsdatum går ut är inte byggt. Se [Inte byggt ännu](topic:not-built-yet).
