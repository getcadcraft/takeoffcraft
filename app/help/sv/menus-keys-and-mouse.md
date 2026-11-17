---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar hur du redan arbetar, ge valfritt kommando egen tangent, flytta kommandon mellan menyer och ange vad hjulet och musknapparna gör.
keywords: menystil, menyer, menyrad, menyflik, menyflikar, verktygsfält, genvägar, snabbtangenter, tangenter, anpassa, ommappa, mus, hjul, invertera, zoomriktning, mittenknapp, högerknapp, panorera, exportera, importera, byta, bekant, avtagningsbord, villkor
from: f01f0d6d
---

TakeoffCraft:s kommandon är desamma oavsett hur du når dem. En **menystil** avgör bara var de sitter på skärmen, vad de heter där och vilka tangenter som kör dem. Välj en i {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:TakeoffCraft}} › {{ui:Menyer, tangenter och mus}}; ändringen gäller direkt, och den här webbläsaren kommer ihåg den.

## De tre stilarna

| Stil | Vad du får |
|---|---|
| {{ui:TakeoffCraft}} | TakeoffCraft:s egna verktygsfält: Fil, Exportera, Skala, Mängdavtagning, Redigera och Visa, med tangenterna för verktygen (en bokstav var). Utgångspunkten. |
| {{ui:Avtagningsbord}} | En menyrad ({{ui:Fil}}, {{ui:Redigera}}, {{ui:Visa}}, {{ui:Skala}}, {{ui:Mängdavtagning}}, {{ui:Poster}}, {{ui:Markering}}, {{ui:Exportera}}) över en rad med avtagningsverktyg, så som program för digital avtagning brukar lägga upp sina. Poster kallas villkor på raden. Samma tangenter, plus {{key:N}} för en ny post. Skalförvalen flyttas till bladets fält, bredvid bladets skala. |
| {{ui:Avtagningsmeny}} | Menyflikar med namn efter arbetet: {{ui:Mängdavtagning}} (mät, form, skala, från ritningen, villkor), {{ui:Redigera}}, {{ui:Visa}}, {{ui:Markering}} och {{ui:Kalkyl}} (arbetsboken, markerade PDF:er, anbudet), med en menyn {{ui:Fil}} och en snabbrad för öppna, spara, ångra och gör om. De verktyg du använder hela dagen är stora, och deras grannar små och staplade. Samma tangenter; skalförvalen flyttas till bladets fält. |

Alla tre stilarna behåller TakeoffCraft:s tangenter: {{key:V}} markera, {{key:L}} linjär, {{key:A}} area, {{key:O}} cirkel, {{key:B}} rum, {{key:P}} sökväg (välj PDF:ens linjer), {{key:X}} urtag, {{key:C}} räkna, {{key:S}} autoräkna, {{key:K}} kalibrera, {{key:D}} kontrollera, {{key:R}} bågläge, {{key:E}} avdragsläge, {{key:F}} och {{key:W}} för att anpassa, {{key:3}} 3D-kontrollvyn, {{key:F3}} fångst, samt {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}.

Bladfältets verktyg (anteckningar, moln, överstrykningar, Jämför, 3D) väntar tills en PDF är öppen; väljs de innan dess säger statusraden det.

:::tip
En tangent som hör till TakeoffCraft:s egen layout men som din stil gav ett annat kommando gör ingenting, och statusraden säger vart dess kommando tog vägen (”I Mina tangenter är Räkna Ctrl+Alt+C”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse. Medan du ritar en sträcka eller en kontur, klistrar in eller granskar en autoräkning, tillhör bokstäverna och siffrorna i en inskriven längd ritningen.
:::

## Gör den till din egen

1. Välj stilen som ligger närmast det du vill ha, klicka sedan på {{ui:Anpassa…}}.
2. Under {{ui:Tangenter och menyer}}, hitta ett kommando (sökrutan hjälper). Välj {{ui:Lägg till en tangent}} och tryck tangenten, eller två tangenter i följd för en tvåbokstavstangent. Klicka på en tangent för att ta bort den.
3. Med menyraden flyttar {{ui:Var det sitter}} kommandot till en annan meny, eller till {{ui:Bara tangenter}}.
4. Under {{ui:Mus}}, ange hjulet och knapparna som panorerar bladet.
5. Ge den ett namn och klicka på {{ui:Spara}}.

Att spara en inbyggd stil gör en egen kopia (”Mitt avtagningsbord”); den inbyggda ändras aldrig. En tangent som getts till två kommandon visas i rött och måste rättas innan du kan spara.

## Mus

- **Mushjul**: {{ui:Rulla uppåt zoomar in}} (utgångspunkten) eller {{ui:Rulla uppåt zoomar ut}}, och hur snabbt. En nypning på styrplattan zoomar alltid åt det håll fingrarna rör sig.
- **Panorera bladet med**: mittenknappen, högerknappen eller båda. Ett vänsterdrag på tom yta och {{key:Space}} med ett drag panorerar alltid; ett högerklick utan att dra avslutar alltid en sträcka eller kontur.
- **Dra i 3D-vyerna**: {{ui:Varje vys egna}} behåller 3D-kontrollvyns knappar (vänster och mitten kretsar, höger panorerar). Eller ställ mitten- och högerknappen på kretsa, panorera, zooma eller ingenting; {{key:Shift}} med knappen byter kretsa och panorera. Vänsterknappen kretsar alltid och väljer.

## Ta den med dig

{{ui:Exportera}} sparar stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importera…}} lägger till en, från en annan dator eller från en kollega. En importerad fil kan bara peka på TakeoffCraft:s egna kommandon: allt annat i den utelämnas och räknas i statusraden. {{ui:Ta bort den här stilen}} tar bort en av dina egna.

:::note
Inställningarna stannar i den här webbläsaren. {{ui:Använd den här stilen i alla appar}} under stilkorten gör att varje app öppnas i sin motsvarande stil (sitt eget verktygsfält, en menyrad eller en menyflik), med de ändringar du gjort i varje app. TakeoffCraft har ingen stil med en kommandorad: när en sådan väljs för alla appar behåller TakeoffCraft sitt eget verktygsfält.

{{ui:Avtagningsmeny}} är också menyflikarna i layouten {{ui:Ribbon and project browser}} ({{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Layout}}): se [TakeoffCraft-skärmen](topic:workspace).
:::

Relaterat: [Tangentbord och mus](topic:keyboard) · [TakeoffCraft-inställningar](topic:settings) · [Om du kommer från annan avtagningsprogramvara](topic:coming-from)
