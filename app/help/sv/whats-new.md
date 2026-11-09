---
title: Nytt i 0.8 och 0.8.1
summary: Räkna en hel symbolförteckning över alla öppna blad i en körning, prissätt poster utifrån priserna från dina tidigare jobb, kontrollera mängdavtagningen mot en leverantörs lager och leveranstider, och nya assistentverktyg för alla tre, samt de gemensamma ändringarna i 0.8 och rättningen i 0.8.1 för DWG-filer.
keywords: nytt, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, räkna allt, teckenförklaring, symbolförteckning, hela satsen, prisminne, tidigare jobb, senaste jobbet, typiskt pris, leverantör, lager, leveranstid, restnotering, beställningslista, brist, problempanelen, assistent, språk, indataenheter, verktygsfältsrader, dwg
from: a04adef6
---

Detta är vad som ändrats i TakeoffCraft 0.8 (släppt 2026-11-01) och 0.8.1 (2026-11-02), jämfört med 0.7. En symbolförteckning kan nu räknas över hela satsen på en gång, en ny mängdavtagning kan börja från priserna i dina tidigare jobb, och mängdavtagningen kan kontrolleras mot en leverantörs lager. 0.8.1 är en rättningsutgåva.

## Nytt

### Räkna allt i satsen

- **Markera teckenförklaringen en gång.** {{ui:Count everything}} i verktygsfältet läser en symbolförteckning: dra en ruta runt symbolerna och namnen som står bredvid dem. Varje symbol listas med sin bild och sitt namn, och namnet blir postens namn. Avmarkera det du inte vill ha och välj sedan {{ui:Räkna på N blad}}. En stapel visar vilket blad som söks, {{ui:Cancel}} stoppar körningen, och sidan går fortfarande att använda.
- **Varje blad i en körning.** Varje symbol räknas på varje öppet blad. Ett blad ritat i en annan skala söks i den skalan, och symboler hittas vridna i valfri rät vinkel. Teckenförklaringens egna symboler räknas inte på sitt eget blad.
- **Granska innan något läggs till.** Varje summa har en länk per blad (”E-103: 4”) som går till bladet. Klicka på en ruta vid en träff för att utesluta den, och klicka igen för att ta tillbaka den. Matchningsnivån (50% till 100%) filtrerar bara det som hittats; inget söks om.
- **Ett ångra-steg.** {{ui:Lägg till N markeringar}} skapar en räkneapost per symbol med en markering på varje träff. Ett namn som redan är en av dina räkneposter återanvänds. {{key:Ctrl+Z}} tar tillbaka alla poster och markeringar. Det du godkänner matar också {{ui:Inlärt}}.
- **Symboler i valfri vinkel.** Bocka i {{ui:Symboler i valfri vinkel}} före du räknar för att även hitta symboler som vridits en vinkel som inte är rät. Sökningen vrider då varje symbol var 15:e grad, och en symbol som inte är rund kan ta upp till sex gånger så lång tid.
- **Vad det är.** Enkel symbolmatchning på dina egna blad, utan tränad modell, och inget lämnar din dator. På en påhittad sats med 200 blad tog det 9.4 sekunder från början till slut i Chrome på en snabb stationär dator; verkliga ritningsserier kommer att ta längre tid. Se [Räkna allt i satsen](topic:count-everything).

### Prisminne från dina egna jobb

- **TakeoffCraft kommer ihåg dina priser.** När du sparar en mängdavtagning kommer varje prissatt post som används att minnas med namn och typ: materialpris, arbetspris, spill och enhet. De senaste 12 jobben sparas för varje namn. Det sparas på den här datorn bredvid prisbiblioteket, aldrig i en mängdavtagningsfil, och inget skickas någonstans.
- **Starta en ny mängdavtagning från det.** {{ui:Prices}} i verktygsfältet visar för varje post det senaste jobbets priser, de typiska priserna och intervallet. {{ui:Use last}} eller {{ui:Use typical}} sätter pris på en post, och {{ui:Sätt pris på N poster utan pris från minnet}} fyller i varje post som ännu saknar pris. Varje användning är ett ångra-steg.
- **Äldre arbete.** {{ui:Lär från en tidigare mängdavtagning…}} kommer ihåg de prissatta posterna i en sparad mängdavtagning (.json).
- **Se det, ändra det, glöm det.** {{ui:Everything remembered}} listar varje namn; papperskorgsknappen glömmer ett, och {{ui:Clear all prices}} glömmer alla. Stäng av {{ui:Kom ihåg mina priser när jag sparar en mängdavtagning}} för att sluta. Ett pris per styck läggs aldrig på en post per fot. Se [Prisminne från dina tidigare jobb](topic:price-memory).

### Leverantörens lager och leveranstider

- **Kontrollera mot en leverantörs lista.** {{ui:Leverans}} i verktygsfältet tar emot en leverantörs lagerlista ({{ui:Lägg till en leverantörsfil…}}), en CSV eller ett kalkylblad, och kontrollerar mot den vad mängdavtagningen behöver, med spill. Upp till fem filer sparas. Inget skickas och ingen frågar en leverantör: du tar med filen.
- **Vad den säger.** Korta poster kommer först: ”Brist 120 EA”, ”Leveranstid 21 dagar”, ”Restnoterad”, ”Enheten skiljer sig”, ”Saknar lagervärde” eller ”I lager”. {{ui:Längsta önskade väntan (dagar)}} börjar på 14.
- **Beställningslista.** {{ui:Beställningslista (CSV)}} hämtar hem de korta posterna med bristmängden, leverantören och leveranstiden.
- **Priser till biblioteket.** Om filen har priser sätter {{ui:Priser till biblioteket}} materialpriset för varje biblioteksobjekt med samma namn och enhet. Sätt nytt pris från biblioteket för att föra in dem i mängdavtagningen.
- **I Problempanelen.** En brist är en varning och en lång väntan är en notering, under ”Leverantörslager”. Du kan godkänna en med en orsak, och orsaken sparas i mängdavtagningen. Se [Kontrollera leverantörens lager och leveranstider](topic:supplier-stock).

### AI-assistenter

- **Verktyg för alla tre.** Med assistenter tillåtna i {{ui:Inställningar}} kan en assistent läsa en teckenförklaring (`legend_open`), köra räkningen (`legend_count_start`, sedan `legend_count_status` och `legend_count_result`) och lägga till den (`legend_count_add`, som kan förhandsgranska först). Den kan läsa de sparade priserna (`prices_list`) och sätta pris på poster utifrån dem (`prices_apply`, som kan förhandsgranska först), och läsa leverantörskontrollen (`supply_check`). Att lägga till en leverantörsfil är fortfarande din uppgift. Se [Använd TakeoffCraft med AI-assistenter](topic:use-with-ai-assistants).

### I alla appar

- **Språk.** Femtiofyra språk totalt; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili och uzbekiska). Andra språk än engelska är maskinella utkast tills en modersmålstalare har läst dem.
- **Indataenheter.** {{ui:Inställningar}} › {{ui:Globalt}} › {{ui:Indataenheter}} anger vad en styrplatta, en musens sidoknappar, en penna, en 3D-mus, en handkontroll eller en MIDI-kontroll gör, för alla appar eller för en. Se [Använd styrplatta, 3D-mus eller handkontroll](common:input-devices).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder {{ui:Radbryt}} (startläget), {{ui:2 rader}} och {{ui:1 rad}}; grupper som inte ryms rullar i sidled. Se [Ordna panelerna](common:arrange-panels).
- **Problempanelen.** Den gemensamma panelen för varningar och noteringar bär nu lagerkontrollen ovan, bredvid de andra kontrollerna.
- **Tillägg.** Tillägg följer din kontolista. Se [Tillägg och din kontolista](common:addons-basics).
- **Anslut din AI.** CadCraft Studio är navet: anslut din assistent en gång för alla åtta apparna. Studio har ingen egen AI.

## Åtgärdat i 0.8.1

- **DWG-klassavsnitt.** Klassavsnittet i en DWG-fil lästes som fel typ. Detta är åtgärdat i TakeoffCraft och i fyra andra appar.
- **Studio kan byta språk medan det körs.** Tidigare var Studio och dess paketerade utgåvor bara på engelska. Detta har inte testats i skrivbordsversionen på alla plattformar; säg till om språket inte byts.

## Finns inte ännu

- **Inte kodsignerad.** Windows kan varna, och på en Mac högerklickar du och väljer {{ui:Öppen}} första gången. Butiksversionerna (Microsoft Store, Google Play, App Store) är pausade, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Studio-uppdateringar.** Windows-installeraren och Linux-paketen söker efter uppdateringar en gång om dagen och frågar först. Den bärbara zip-filen säger bara till, och macOS och APK uppdateras inte själva. macOS-.dmg för 0.8 följer med utgåvan.
- **Anslut din AI.** Anslutning med ett klick i Studio, den hostade kopplingen för AI i webbläsaren, en egen API-nyckel i Studio och ett publicerat MCP-paket utlovas inte i denna version.
- **Räkna allt.** Det kräver symboler ritade på samma sätt som i teckenförklaringen, och en symbol med en vägg eller lång linje genom sig kan missas. Speglade symboler hittas inte, och ett blad utan skala som ritats i en annan storlek söks i teckenförklaringens storlek. Kontrollera träffarna på första bladet innan du litar på resten.
- **Leverantörslager.** Lagervärden är bara så aktuella som filen du lägger till. Kontrollen frågar aldrig en leverantör.
- **Språk.** Tamils appfält flödar över.

Allt annat finns i [Finns inte ännu](topic:not-built-yet). För utgåvan före denna, se [Nytt i 0.7](topic:whats-new-0-7).
