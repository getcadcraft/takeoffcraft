---
title: Gem og genåbn et mængdeudtræk
summary: Gem mængdeudtrækket som projektfilen .takeoff.json, genåbn det med de samme PDF'er, og hvad der sker når en PDF mangler eller er ændret.
keywords: mængdeudtræk i pdf, indlejring, vedhæftning, gem, åbn, genåbn, projekt, takeoff.json, fortsæt, fortsæt arbejdet, rettet pdf, ændret pdf, manglende pdf, sikkerhedskopi, automatisk gem, gendan, nedbrud
from: bd5080a6
---

Et mængdeudtræk gemmes som en lille projektfil, `(name).takeoff.json`. Den indeholder dine poster, kalkulationsenheder, priser, hvert arks målestok og hver markering. Den indeholder **ikke** PDF'erne; den finder dem igen ud fra deres indhold.

## Gem

1. Vælg {{ui:Gem mængdeudtræk}} i gruppen {{ui:Fil}}, eller tryk {{key:Mod+S}}.
   Din browser downloader `(name).takeoff.json`. Statuslinjen siger »Gemt (name).takeoff.json. Den åbnes igen oven på de samme PDF'er (de matches efter deres indhold).«
2. Flyt filen hen ved jobbets PDF'er, så de to bliver sammen.

Hver gem downloader en ny fil. Din browser kan kalde den anden `(name) (1).takeoff.json`; behold den nyeste.

Navnet kommer fra den første PDF, du åbnede i dette mængdeudtræk.

:::note
Gem mængdeudtræk er stadig den eneste måde at gemme et mængdeudtræk som fil på. Mens du arbejder, gemmer TakeoffCraft også en gendannelseskopi i denne browser (se nedenfor), og skysave er endnu ikke tilgængelig. Hvis du forsøger at lukke fanen med ikke-gemte ændringer, spørger browseren om du vil forlade siden.
:::

## Behold mængdeudtrækket i PDF'en

{{ui:Eksportér}} › {{ui:PDF med mængdeudtrækket indeni}} downloader en kopi af hver åben PDF, navngivet som `Plans (with takeoff).pdf`, der bærer hele mængdeudtrækket som en vedhæftning: poster, markeringer, målestoksforhold, tilbudsområder, alt det `.takeoff.json` indeholder. Dens sider er urørte, så den ser ud og udskrives som originalen, og andre PDF-læsere lister mængdeudtrækket under deres vedhæftninger.

Åbn den PDF i TakeoffCraft (på hvilken måde du end åbner PDF'er), og den spørger **Denne PDF har et mængdeudtræk indeni**: vælg {{ui:Åbn mængdeudtrækket}} for at få det tilbage, eller {{ui:Kun PDF'en}} for kun at åbne tegningen. Kopien står for den PDF, den blev lavet af, så en `.takeoff.json` gemt fra en af dem åbner på begge.

Med flere PDF'er bærer hver kopi hele mængdeudtrækket; åbn dem sammen. Gemmer du igen fra en kopi, erstatter det mængdeudtrækket i den, det tilføjer ikke et andet. `.takeoff.json` er stadig filen at beholde: den er lille, og det er den automatiske gem og desktop-appen skriver.

## Hvis fanen eller browseren stopper

Et par sekunder efter hver ændring gemmer TakeoffCraft en kopi af mængdeudtrækket i denne browsers egen lagring, sammen med dens PDF'er når de samlet er på 64 MB eller mindre. Intet uploades. Når du gemmer mængdeudtrækket, starter et nyt eller åbner et andet projekt, forsvinder kopien.

Hvis fanen går ned, browseren eller computeren stopper, eller du forlader med ikke-gemte ændringer, spørger TakeoffCraft næste gang du åbner det, **Gendan dit arbejde?** og lister mængdeudtrækket med navn. Vælg **Gendan** for at få det tilbage: posterne, markeringerne og målestoksforholdene vender tilbage, og dens PDF'er åbnes igen, hvis de blev gemt. Statuslinjen siger »Gendannet (name). Den er endnu ikke gemt i en fil: Gem mængdeudtræk gemmer den.« Når PDF'erne var for store til at blive gemt, åbn dem igen; markeringerne vises på deres ark. Mere: [Gendan dit arbejde](common:recover).

## Genåbn

1. Åbn TakeoffCraft.
2. Slip `.takeoff.json`-filen og dens PDF'er på siden sammen. Eller vælg {{ui:Åbn tegninger}} til PDF'erne og {{ui:Åbn mængdeudtræk}} til projektet, i valgfri rækkefølge.
   Statuslinjen siger »Åbnet (name): 12 poster, 340 markeringer.« Hvert ark får sin målestok tilbage, og markeringerne vises på deres ark.

Rækkefølgen af PDF'erne er ligegyldig, og det samme gælder deres filnavne eller mapper. TakeoffCraft genkender hver PDF ud fra et fingeraftryk af dens indhold.

Hvis du åbner et projekt mens det aktuelle mængdeudtræk har ikke-gemte ændringer, spørger TakeoffCraft først: **Annuller**, **Kassér ændringer** eller **Gem mængdeudtræk først**. Åbning af et projekt erstatter de nuværende poster og markeringer; PDF'er der allerede er åbne, forbliver åbne.

## Når en PDF mangler

Hvis du åbner projektet uden alle dets PDF'er, tilføjer statuslinjen »Åbn dets PDF'er for at se markeringerne (listet under Ark).« Under arkelisten står der en note:

» Dette mængdeudtræk dækker også PDF'er, der ikke er åbne. Deres mængder tælles; åbn dem for at se og redigere deres markeringer: «

efterfulgt af filnavnene og størrelserne. Deres markeringer tæller stadig med i alle totaler og eksporter, med de målestokke de blev målt i. Åbn disse PDF'er for at se og redigere markeringerne.

## Når en PDF er ændret

En PDF der er revideret, eller bare gemt igen af et andet program, har et andet indhold, så den er en **anden fil** for TakeoffCraft, selv med samme navn. I noten under arkelisten står der for en sådan fil »en fil med dette navn er åben, men dens indhold er forskelligt«.

- Markeringerne forbliver knyttet til den gamle version. De bliver ved med at tælle, på deres gamle positioner og målestokke.
- Den reviderede PDF åbnes som nye ark uden målestok og uden markeringer.

For at flytte mængdeudtrækket over på revisionen, åbn begge PDF'er og brug {{ui:Sammenlign}} på det nye ark: [Sammenlign et revideret ark og flyt mængdeudtrækket](topic:compare-revisions).

## En beskadiget eller fremmed fil

TakeoffCraft kontrollerer hver projektfil, før den bruges. Meddelelser du kan se:

- »(file) er ikke et TakeoffCraft-projekt (det er ikke gyldig JSON).«
- »Dette er ikke en TakeoffCraft-projektfil.«
- »Dette projekt er gemt af en nyere TakeoffCraft. Åbn det der.«
- »3 markeringer var beskadigede og er udeladt.« (resten åbnes)

## Fortrydelseshistorik

Fortrydelseshistorikken starter forfra, når du åbner et projekt. Gemning rydder den ikke.
