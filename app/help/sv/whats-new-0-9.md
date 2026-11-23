---
title: Nytt i 0.9 (tidigare)
summary: Läs längder i meter, centimeter eller millimeter, metriska areor i m2 med väggarea, skalförval 1:75 och 1:150, vikt- och temperaturenheter, Båge med tio metoder samt live-markörer, Följ och en personlista.
keywords: nytt i 0.9, tidigare version, vad är nytt, versionsinformation, ändringslogg, 0.9, visa längder som, meter, centimeter, millimeter, metriskt, följ global, enheter, visningsenheter, m2, kvadratmeter, väggarea, skalförval, 1:75, 1:150, vikt, kilogram, kg, ton, lb, temperatur, celsius, fahrenheit, båge, bågmetoder, 3-punktsbåge, radie, live, markörer, följ, personlista, klass, verktygstips, layout, nytt i, ändringar, 0.8, 0.8.1, version, nya funktioner, räkna allt, teckenförklaring, hela setet, prisminne, tidigare jobb, senaste jobb, typiskt pris, leverantör, lager, leveranstid, restorder, beställningslista, brist, problempanelen, assistent, språk, indataenheter, verktygsfältsrader, dwg
from: f4322ba2
---

Det här är vad som ändrats i TakeoffCraft 0.9, jämfört med 0.8.1. Det är en liten version för den här appen: längder kan nu läsas i meter, centimeter eller millimeter, areor och skalor följer metriskt arbete ordentligt, och Båge har tio sätt att rita. Live-sessioner visar dessutom var alla befinner sig.

## Nytt

### Läs längder i meter, centimeter eller millimeter

- **Visa längder som.** {{ui:Settings}} › {{ui:TakeoffCraft}} har {{ui:Show lengths as}} med {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm och mm. {{ui:Follow Global}} använder den metriska längdenhet du markerat i {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, och fot och tum när ingen är markerad. Det ändrar hur längder visas på bladet, i statusfältet och i panelerna, inklusive höjder, djup, tjocklekar och nivåerna. Ett rent tal som skrivs i ett höjdfält tolkas i den enhet som visas.
- **Endast visning.** Mängder, kostnader och exporter räknas ut från de exakta längderna. Valet 1/16, 1/8 och 1/4 tum visas bara för fot och tum. Se [Visa längder i meter](topic:show-lengths-in-meters).
- **Viktenheter.** En post under {{ui:Typed quantity (no drawing)}} kan nu anges i lb, TON, kg eller t och prissättas per enhet.
- **Temperatur.** Varje post har ett valfritt fält {{ui:Temperature}} i postredigeraren, angivet i grader C eller F. {{ui:Show temperatures as}} i {{ui:Settings}} › {{ui:TakeoffCraft}} erbjuder {{ui:Follow Global}}, °C eller °F.

### Areor och skalor för metriskt arbete

- **Areor i m2 på ritningen.** En area som mätts med en metrisk post anger nu m2 på ritningsetiketten och i markeringspanelen, precis som i tabellen, i stället för SF. Regeln är m2 när posten prissätts metriskt eller när längder visas i m, cm eller mm, och SF annars.
- **Väggarea.** En linjär post med en höjd visar också sin väggarea (längd gånger höjd) i listan över poster och som en noteringsrad under tabellen med mängder per post.
- **Skalförval 1:75 och 1:150.** De finns i listan {{ui:Preset}} i gruppen {{ui:Scale}}, som nu har 32 skalor. Se [Skalförval](topic:scale-presets).

### Båge med tio metoder

- När {{ui:Arc}} är på (verktygsfältsknapp eller {{key:R}}) visas en ruta {{ui:Arc method}} i bladfältet: 3 punkter, Start, Centrum, Ändpunkt, Start, Centrum, Vinkel, Start, Centrum, Längd, Start, Ändpunkt, Vinkel, Start, Ändpunkt, Riktning, Start, Ändpunkt, Radie, Centrum, Start, Ändpunkt, Centrum, Start, Vinkel och Centrum, Start, Längd. Vinkel, längd, radie och riktning kan klickas eller skrivas in. Det fungerar i linjära sekvenser, areor och urtag. Filer som sparats före 0.9 öppnas på samma sätt. Se [Rita bågar med tio metoder](topic:draw-arcs-ten-methods).

### Att arbeta tillsammans

- **Se varandras markörer.** I en Live-session visas varje persons pekare på bladet med deras namn och färg, med en streckad ruta runt de markeringar de valt. Personer på ett annat blad visas i listan med det bladets namn. Se [Arbeta live med andra](topic:work-live).
- **Följ en person och personlistan.** Knappen {{ui:People}} i en Live-session listar varje person med verktyget de använder, bladet de är på och när de senast redigerade. {{ui:Follow}} flyttar din vy med deras, och värden kan använda {{ui:Ask everyone to follow me}}. Se [Följ en kollega i en Live-session](topic:follow-a-teammate).

## I alla appar

- **Verktygstips och starttipset.** Text som visas vid hovring är ett Bootstrap-verktygstips, och starttipset kan stängas.
- **Rullbara flikrader.** En panels flikrad som inte får plats rullar i stället för att klippas av.
- **Flikrubriker.** Webbläsarfliken visar `<dokument> - TakeoffCraft | CadCraft`.
- **Layout.** Layout-listan i {{ui:Settings}} är en rullgardinsmeny som visar vald layout.
- **Språk.** Språket du väljer når nu de ord som sidan själv skriver ut, som Ny, Öppna och Spara. Andra språk än engelska är maskinutkast tills en modersmålstalare har läst igenom dem.

## Begränsningar

- Visningen av längder, vikt- och temperaturenheter och de nya förvalen har kontrollerats med tester och på sidan. Varje panel i varje enhet har inte kontrollerats för hand.
- Personlistan har inte handkontrollerats med en verklig klass med lärare och elever.
- Språk andra än engelska är maskinutkast.
- Windows-installerare är inte kodsignerade (Mer information, sedan Kör ändå). macOS-diskavbildningen är inte notariserad (högerklicka, sedan {{ui:Open}}).

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i TakeoffCraft 0.8 (publicerad 2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. En teckenförklaring för symboler kan nu räknas över hela setet på en gång, en ny mängdavtagning kan börja från priserna i dina tidigare jobb, och mängdavtagningen kan kontrolleras mot en leverantörs lager. 0.8.1 är en åtgärdsversion.

### Nytt

**Räkna allt i setet**

- **Markera teckenförklaringen en gång.** {{ui:Count everything}} i verktygsfältet läser en teckenförklaring: dra en ruta runt symbolerna och namnen som står bredvid. Varje symbol listas med sin bild och sitt namn, och namnet blir postens namn. Avmarkera det du inte vill ha och välj sedan {{ui:Count on N sheets}}. En rad visar bladet som söks, {{ui:Cancel}} stoppar körningen och sidan går att använda under tiden.
- **Alla blad i en körning.** Varje symbol räknas på varje öppet blad. Ett blad som ritats i en annan skala söks i den skalan, och symboler hittas även vända i valfri rät vinkel. Teckenförklarings egna symboler räknas inte på sitt eget blad.
- **Granska innan något läggs till.** Varje summa har en länk per blad ("E-103: 4") som går till det bladet. Klicka på en ruta för en träff för att utesluta den, och klicka igen för att ta tillbaka den. Matchningsnivån (50 % till 100 %) filtrerar bara det som hittats; inget söks om.
- **Ett steg att ångra.** {{ui:Add N marks}} skapar en räknepost per symbol med en markering vid varje träff. Ett namn som redan är en av dina räkneposter återanvänds. {{key:Ctrl+Z}} tar tillbaka alla poster och markeringar. Det du godkänner matas också in i {{ui:Learned}}.
- **Symboler i valfri vinkel.** Bocka i {{ui:Symbols at any angle}} före du räknar för att också hitta symboler vridna i en vinkel som inte är en rät vinkel. Sökningen vrider då varje symbol var 15:e grad, och en symbol som inte är rund kan ta upp till sex gånger så lång tid.
- **Vad det är.** Enkel symbolmatchning på dina egna blad, utan tränad modell, och ingenting lämnar din dator. På ett påhittat set med 200 blad tog det 9,4 sekunder från början till slut i Chrome på en snabb stationär dator; verkliga ritningsset går långsammare. Se [Räkna allt i setet](topic:count-everything).

**Prisminne från dina egna jobb**

- **TakeoffCraft kommer ihåg dina priser.** När du sparar en mängdavtagning kommer varje prissatt post som används ihåg med namn och typ: materialpris, arbetspris, spill och enhet. De senaste 12 jobben sparas för varje namn. Det sparas på den här datorn bredvid prisbiblioteket, aldrig inne i en mängdavtagningsfil, och inget skickas någonstans.
- **Starta en ny mängdavtagning från det.** {{ui:Prices}} i verktygsfältet visar för varje post det senaste jobbets priser, de typiska priserna och intervallet. {{ui:Use last}} eller {{ui:Use typical}} prissätter en post, och {{ui:Price N unpriced items from memory}} fyller varje post som ännu saknar pris. Varje användning är ett steg att ångra.
- **Äldre arbete.** {{ui:Learn from a past takeoff…}} kommer ihåg de prissatta posterna i en sparad mängdavtagning (.json).
- **Se det, ändra det, glöm det.** {{ui:Everything remembered}} listar varje namn; papperskorgsknappen glömmer ett namn, och {{ui:Clear all prices}} glömmer alla. Stäng av {{ui:Remember my prices when I save a takeoff}} för att sluta. Ett pris per styck läggs aldrig på en post per fot. Se [Prisminne från dina tidigare jobb](topic:price-memory).

**Leverantörslager och leveranstider**

- **Kontrollera mot en leverantörs lista.** {{ui:Supply}} i verktygsfältet tar en leverantörs lagerlista ({{ui:Add a supplier file…}}), en CSV-fil eller ett kalkylblad, och kontrollerar vad mängdavtagningen behöver, med spill, mot den. Upp till fem filer sparas. Ingenting skickas och ingenting frågar en leverantör: du tar med filen.
- **Vad den visar.** Korta poster kommer först: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" eller "In stock". {{ui:Longest wait wanted (days)}} börjar på 14.
- **Beställningslista.** {{ui:Order list (CSV)}} laddar ner de korta posterna med bristmängden, leverantören och leveranstiden.
- **Priser till biblioteket.** Om filen har priser sätter {{ui:Prices into the Library}} materialpriset för varje bibliotekspost med samma namn och enhet. Räkna om från biblioteket för att föra in dem i mängdavtagningen.
- **I panelen Problem.** En brist är en varning och en lång väntan är en notering, under "Leverantörslager". Du kan godkänna en med en orsak, och orsaken sparas i mängdavtagningen. Se [Kontrollera leverantörslager och leveranstider](topic:supplier-stock).

**AI-assistenter**

- **Verktyg för alla tre.** Med assistenter tillåtna i {{ui:Settings}} kan en assistent läsa en teckenförklaring (`legend_open`), köra räkningen (`legend_count_start`, sedan `legend_count_status` och `legend_count_result`) och lägga till den (`legend_count_add`, som kan förhandsgranskas först). Den kan läsa de sparade priserna (`prices_list`) och prissätta poster från dem (`prices_apply`, som kan förhandsgranskas först), och läsa leverantörskontrollen (`supply_check`). Att lägga till en leverantörsfil är fortfarande din uppgift. Se [Använd TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

**I alla appar**

- **Språk.** Femtiofyra språk totalt; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska). Andra språk än engelska är maskinutkast tills en modersmålstalare har läst igenom dem.
- **Indataenheter.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} anger vad en styrplatta, en musens sidoknappar, en penna, en 3D-mus, en spelkontroll eller en MIDI-kontroll gör, för alla appar eller för en enskild. Se [Använd en styrplatta, 3D-mus eller kontroll](common:input-devices).
- **Verktygsfältsrader.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} erbjuder {{ui:Wrap}} (startläget), {{ui:2 rows}} och {{ui:1 row}}; grupper som inte får plats rullar i sidled. Se [Ordna panelerna](common:arrange-panels).
- **Panelen Problem.** Den gemensamma panelen för varningar och noteringar visar nu leverantörslagerkontrollen ovan, bredvid de andra kontrollerna.
- **Tillägg.** Tillägg följer din kontolista. Se [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet: anslut din assistent en gång för alla åtta apparna. Studio har ingen egen AI.

### Åtgärdat i 0.8.1

- **Avsnittet med klasser i DWG-filer.** Avsnittet med klasser i en DWG-fil lästes som fel typ. Detta är åtgärdat i TakeoffCraft och i fyra andra appar.
- **Studio kan byta språk medan det körs.** Tidigare var Studio och dess paketerade versioner endast på engelska. Detta har inte testats i skrivbordsversionen på alla plattformar; säg till om språket inte ändras.

### Finns inte i den här versionen ännu

- **Inte kodsignerad.** Windows kan varna, och på en Mac högerklickar du och väljer {{ui:Open}} första gången. Butiksversionerna (Microsoft Store, Google Play, App Store) är pausade, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Studio-uppdateringar.** Windows-installeraren och Linux-paketen söker efter uppdateringar en gång om dagen och frågar först. Den portabla zip-filen informerar bara, och macOS och APK uppdateras inte själva. Den macOS-.dmg-fil för 0.8 följer versionen.
- **Anslut din AI.** Enklickanslutning inne i Studio, den hostade kopplingen för AI i webbläsaren, din egen API-nyckel inne i Studio och ett publicerat MCP-paket utlovas inte i den här versionen.
- **Räkna allt.** Det kräver symboler ritade på samma sätt som i teckenförklaringen, och en symbol med en vägg eller en lång linje genom sig kan missas. Spegelvända symboler hittas inte, och ett blad utan skala som ritats i en annan storlek söks i teckenförklaringens storlek. Kontrollera träffarna på det första bladet innan du litar på resten.
- **Leverantörslager.** Lagersiffrorna är bara så aktuella som filen du lägger till. Kontrollen frågar aldrig en leverantör.
- **Språk.** Tamils appfält flödar över.

Allt annat finns i [Finns inte ännu](topic:not-built-yet). För versionen före den här, se [Nytt i 0.7](topic:whats-new-0-7).
