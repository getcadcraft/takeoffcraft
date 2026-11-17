---
title: Nyheter i 0.9
summary: Läs längder i meter, centimeter eller millimeter, metriska areor i m2 med väggarea, skalförval 1:75 och 1:150, vikt- och temperaturenheter, Arc med tio metoder, samt live-markörer, Följ och en personlista.
keywords: nyheter, release notes, ändringslogg, 0.9, visa längder som, meter, centimeter, millimeter, metriskt, följ global, enheter, visningsenheter, m2, kvadratmeter, väggarea, skalförval, 1:75, 1:150, vikt, kilogram, kg, ton, lb, temperatur, celsius, fahrenheit, arc, arc-metoder, 3-punktsbåge, radie, live, markörer, följ, personlista, klass, verktygstips, layout, ändringar, 0.8, 0.8.1, version, nya funktioner, räkna allt, teckenförklaring, hela uppsättningen, prisminne, tidigare jobb, förra jobbet, typiskt pris, leverantör, lager, leveranstid, restnotering, beställningslista, brist, problempanel, assistent, språk, indataenheter, verktygsfältsrader, dwg
from: 6182b998
---

Detta är vad som ändrats i TakeoffCraft 0.9, jämfört med 0.8.1. Det är en liten version för den här appen: längder kan nu läsas i meter, centimeter eller millimeter, areor och skalor följer metriskt arbete ordentligt, och Arc har tio sätt att rita. Live-sessioner visar också vem som är var.

## Nytt

### Läs längder i meter, centimeter eller millimeter

- **Visa längder som.** {{ui:Inställningar}} › {{ui:TakeoffCraft}} har {{ui:Visa längder som}} med {{ui:Följ Global}}, {{ui:Fot och tum}}, m, cm och mm. {{ui:Följ Global}} använder den metriska längdenhet du markerat med stjärna i {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Enheter}}, och fot och tum när ingen är markerad. Det ändrar hur längder läses på bladet, i statusfältet och i panelerna, inklusive höjder, djup, tjocklek och nivåerna. Ett rent tal som skrivs i ett höjdfält läses i den enhet som visas.
- **Bara visning.** Mängder, kostnader och exporter räknas ut från de exakta längderna. Valet 1/16, 1/8 och 1/4 tum finns bara för fot och tum. Se [Visa längder i meter](topic:show-lengths-in-meters).
- **Viktenheter.** En post med {{ui:Angiven mängd (ingen ritning)}} kan nu vara i lb, TON, kg eller t, och prissättas per enhet.
- **Temperatur.** Varje post har ett valfritt fält {{ui:Temperatur}} i postredigeraren, angivet i grader C eller F. {{ui:Visa temperaturer som}} i {{ui:Inställningar}} › {{ui:TakeoffCraft}} erbjuder {{ui:Följ Global}}, °C eller °F.

### Areor och skalor för metriskt arbete

- **Areor i m2 på ritningen.** En area uppmätt med en metrisk post säger nu m2 på ritningens etikett och markeringspanelen, lika väl som i tabellen, i stället för SF. Regeln är m2 när posten prissätts i metriskt eller när längder visas i m, cm eller mm, och SF annars.
- **Väggarea.** En linjär post med en höjd visar också sin väggarea (längd gånger höjd) i listan Poster och som en noteringsrad under tabellen med mängder per post.
- **Skalförval 1:75 och 1:150.** De finns i listan {{ui:Förval}} i gruppen {{ui:Skala}}, som nu har 32 skalor. Se [Skalförval](topic:scale-presets).

### Arc med tio metoder

- Medan {{ui:Båge}} är på (verktygsfältsknappen eller {{key:R}}) visas en ruta {{ui:Bågmetod}} i bladraden, med: 3-punkt; Start, Centrum, Slut; Start, Centrum, Vinkel; Start, Centrum, Längd; Start, Slut, Vinkel; Start, Slut, Riktning; Start, Slut, Radie; Centrum, Start, Slut; Centrum, Start, Vinkel; och Centrum, Start, Längd. Vinkel, längd, radie och riktning kan klickas eller skrivas in. Det fungerar i linjära sträckor, areor och urtag. Filer sparade före 0.9 öppnas likadant. Se [Rita bågar med tio metoder](topic:draw-arcs-ten-methods).

### Samarbete

- **Se varandras markörer.** I en Live-session visas varje persons pekare på bladet med deras namn och färg, och en streckad ruta i deras färg runt de markeringar de valt. Personer på ett annat blad listas med det bladets namn. Se [Arbeta live med andra](topic:work-live).
- **Följ en person, och personlistan.** Knappen {{ui:Personer}} i en Live-session listar varje person med verktyget de kör, bladet de är på och när de senast redigerade. {{ui:Följ}} flyttar din vy med deras, och värden kan använda {{ui:Be alla följa mig}}. Se [Följ en kollega i en Live-session](topic:follow-a-teammate).

## I alla appar

- **Verktygstips och starttipset.** Hovertexten är ett Bootstrap-verktygstips, och starttipset kan stängas.
- **Rullande flikrader.** En panels flikrad som inte får plats rullar i stället för att klippas av.
- **Flikrubriker.** Webbläsarfliken visar `<document> - TakeoffCraft | CadCraft`.
- **Layout.** Layoutlistan i {{ui:Inställningar}} är en rullgardin som visar vald layout.
- **Språk.** Språket du väljer når nu orden som sidan själv skriver ut, till exempel Ny, Öppna och Spara. Andra språk än engelska är maskinutkast tills en modersmålstalare har granskat dem.

## Ärliga begränsningar

- Visning av längdenheter, vikt- och temperaturenheter och de nya förvalen har kontrollerats av tester och på sidan. Varje panel i varje enhet har inte kontrollerats för hand.
- Personlistan har inte kontrollerats för hand med en riktig klass av lärare och elever.
- Språk andra än engelska är maskinutkast.
- Windows-installationsprogram är inte kodsignerade (Mer information, sedan Kör ändå). Mac-diskavbildningen är inte notariserad (högerklicka, sedan Öppna).

## Tidigare: 0.8 och 0.8.1

Detta är vad som ändrats i TakeoffCraft 0.8 (släppt 2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. En teckenförklaring kan nu räknas över hela uppsättningen på en gång, en ny mängdavtagning kan starta från priserna i dina tidigare jobb, och mängdavtagningen kan kontrolleras mot en leverantörs lager. 0.8.1 är en rättningsversion.

### Nytt

**Räkna allt i uppsättningen**

- **Markera teckenförklaringen en gång.** {{ui:Räkna allt}} i verktygsfältet läser en teckenförklaring: dra en ruta runt symbolerna och namnen som står bredvid. Varje symbol listas med sin bild och sitt namn, och namnet blir postens namn. Avmarkera det du inte vill ha, välj sedan {{ui:Räkna på N blad}}. En rad visar bladet som söks, {{ui:Avbryt}} stoppar körningen, och sidan är fortsatt användbar.
- **Varje blad i en körning.** Varje symbol räknas på varje öppet blad. Ett blad ritat i en annan skala söks i den skalan, och symboler hittas vridna i vilken rät vinkel som helst. Teckenförklaringens egna symboler räknas inte på sitt eget blad.
- **Granska innan något läggs till.** Varje summa har en länk per blad (”E-103: 4”) som går till det bladet. Klicka på en träff för att utesluta den, och klicka igen för att ta tillbaka den. Matchningsnivån (50 % till 100 %) filtrerar bara det som hittats; inget söks igen.
- **Ett steg att ångra.** {{ui:Lägg till N markeringar}} skapar en räknepost per symbol med en markering på varje träff. Ett namn som redan är en av dina räkneposter återanvänds. {{key:Ctrl+Z}} tar tillbaka alla poster och markeringar. Det du godkänner matas också in i {{ui:Inlärt}}.
- **Symboler i valfri vinkel.** Markera {{ui:Symboler i valfri vinkel}} innan du räknar för att också hitta symboler som vridits i en vinkel som inte är rät. Sökningen vrider då varje symbol var 15:e grad, och en symbol som inte är rund kan ta upp till sex gånger så lång tid.
- **Vad det är.** Enkel symbolmatchning på dina egna blad, utan tränad modell, och ingenting lämnar din dator. På en påhittad uppsättning med 200 blad tog det 9,4 sekunder från början till slut i Chrome på en snabb stationär dator; riktiga bladuppsättningar blir långsammare. Se [Räkna allt i uppsättningen](topic:count-everything).

**Prisminne från dina egna jobb**

- **TakeoffCraft kommer ihåg dina priser.** När du sparar en mängdavtagning kommer varje prissatt post som används ihåg med namn och typ: materialpris, arbetspris, spill och enhet. De senaste 12 jobben sparas för varje namn. Det sparas på den här datorn bredvid prisbiblioteket, aldrig inne i en mängdavtagningsfil, och ingenting skickas någonstans.
- **Starta en ny mängdavtagning från det.** {{ui:Priser}} i verktygsfältet visar för varje post förra jobbets priser, de typiska priserna och intervallet. {{ui:Använd senaste}} eller {{ui:Använd typiskt}} prissätter en post, och {{ui:Prissätt N poster utan pris från minnet}} fyller i varje post som ännu inte har något pris. Varje användning är ett steg att ångra.
- **Äldre arbete.** {{ui:Lär från en tidigare mängdavtagning…}} kommer ihåg de prissatta posterna i en sparad mängdavtagning (.json).
- **Se det, ändra det, glöm det.** {{ui:Allt som är ihågkommet}} listar varje namn; papperskorgsknappen glömmer ett, och {{ui:Rensa alla priser}} glömmer alla. Stäng av {{ui:Kom ihåg mina priser när jag sparar en mängdavtagning}} för att sluta. Ett pris per styck läggs aldrig på en post per fot. Se [Prisminne från dina tidigare jobb](topic:price-memory).

**Leverantörens lager och leveranstider**

- **Kontrollera mot en leverantörs lista.** {{ui:Leverans}} i verktygsfältet tar en leverantörs lagerlista ({{ui:Lägg till en leverantörsfil…}}), en CSV eller ett kalkylblad, och kontrollerar mot den vad mängdavtagningen behöver, med spill. Upp till fem filer sparas. Ingenting skickas och ingen frågar en leverantör: du tar med filen.
- **Vad den säger.** Korta poster kommer först: ”Kort med 120 EA”, ”Leveranstid 21 dagar”, ”Restnoterad”, ”Enheten skiljer sig”, ”Inget lagervärde” eller ”I lager”. {{ui:Längsta önskade väntan (dagar)}} börjar på 14.
- **Beställningslista.** {{ui:Beställningslista (CSV)}} laddar ner de korta posterna med hur mycket som saknas, leverantören och leveranstiden.
- **Priser till biblioteket.** Om filen har priser sätter {{ui:Priser till biblioteket}} materialpriset för varje bibliotekspost med samma namn och enhet. Ladda om från biblioteket för att föra in dem i mängdavtagningen.
- **I problempanelen.** En brist är en varning och en lång väntan är en notering, under ”Leverantörslager”. Du kan godkänna en med en orsak, och orsaken sparas i mängdavtagningen. Se [Kontrollera leverantörens lager och leveranstider](topic:supplier-stock).

**AI-assistenter**

- **Verktyg för alla tre.** Med assistenter tillåtna i {{ui:Inställningar}} kan en assistent läsa en teckenförklaring (`legend_open`), köra räkningen (`legend_count_start`, sedan `legend_count_status` och `legend_count_result`) och lägga till den (`legend_count_add`, som kan förhandsgranskas först). Den kan läsa de ihågkomna priserna (`prices_list`) och prissätta poster från dem (`prices_apply`, som kan förhandsgranskas först), och läsa leverantörskontrollen (`supply_check`). Att lägga till en leverantörsfil är fortfarande ditt jobb. Se [Använd TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

**I alla appar**

- **Språk.** Femtiofyra språk totalt; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska). Språk andra än engelska är maskinutkast tills en modersmålstalare har läst dem.
- **Indataenheter.** {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Indataenheter}} anger vad en pekplatta, en muss sidoknappar, en penna, en 3D-mus, en handkontroll eller en MIDI-kontroll gör, för alla appar eller för en. Se [Använd en pekplatta, 3D-mus eller kontroll](common:input-devices).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder {{ui:Radbryt}} (startläget), {{ui:2 rader}} och {{ui:1 rad}}; grupper som inte får plats rullar åt sidan. Se [Ordna panelerna](common:arrange-panels).
- **Problempanelen.** Den delade panelen med varningar och noteringar bär nu leverantörslagerkontrollen ovan, bredvid de andra kontrollerna.
- **Tillägg.** Tillägg följer din kontolista. Se [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet: anslut din assistent en gång för alla åtta apparna. Studio har ingen egen AI.

### Rättat i 0.8.1

- **DWG-klassavsnittet.** Klassavsnittet i en DWG-fil lästes som fel typ. Det är rättat i TakeoffCraft, och i fyra andra appar.
- **Studio kan byta språk medan det körs.** Tidigare var Studio och dess paketerade versioner bara på engelska. Det här har inte testats i skrivbordsversionen på alla plattformar; säg till om språket inte byts.

### Inte i den här versionen än

- **Inte kodsignerad.** Windows kan varna, och på en Mac högerklickar du och väljer {{ui:Öppna}} första gången. Butiksversionerna (Microsoft Store, Google Play, App Store) är på hold, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Studio-uppdateringar.** Windows-installationsprogrammet och Linux-paketen kontrollerar en gång om dagen och frågar först. Den bärbara zip-filen visar bara att det finns en uppdatering, och macOS och APK uppdateras inte själva. Macens .dmg för 0.8 följer med släppet.
- **Anslut din AI.** Anslutning med ett klick i Studio, den hostade kopplingen för AI i webbläsaren, din egen API-nyckel i Studio och ett publicerat MCP-paket utlovas inte i den här versionen.
- **Räkna allt.** Det behöver symboler ritade på samma sätt som i teckenförklaringen, och en symbol med en vägg eller lång linje genom sig kan missas. Spegelvända symboler hittas inte, och ett blad utan skala som ritats i en annan storlek söks i teckenförklaringens storlek. Kontrollera träffarna på första bladet innan du litar på resten.
- **Leverantörslager.** Lagervärden är bara så aktuella som filen du lägger till. Kontrollen frågar aldrig en leverantör.
- **Språk.** Tamilska appfältet flödar över.

Allt annat finns under [Finns inte ännu](topic:not-built-yet). För versionen före, se [Nyheter i 0.7](topic:whats-new-0-7).
