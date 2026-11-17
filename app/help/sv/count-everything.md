---
title: Räkna allt i ritningssatsen
summary: Rama in en symbolförteckning en gång så räknar TakeoffCraft varje symbol i den på varje öppet blad i en och samma körning. Varje räkning är en länk till sitt blad, och du granskar innan något läggs till.
keywords: räkna allt, förteckning, symbolförteckning, hela ritningssatsen, varje blad, alla blad, varje dörr, varje armatur, apparater, schema, symboler, autoräkna, räkna alla, ritningssats, 200 blad, matchningsnivå, liknande utseende
from: adc99744
---

{{ui:Räkna allt}} läser en symbolförteckning och räknar sedan varje symbol i den på varje öppet blad. Det är {{ui:Autoräkna}} för en hel förteckning på en gång. Det är enkel symbolmatchning på dina egna blad, inte en tränad modell, och ingenting lämnar din dator. Granska räkningarna innan du lägger till dem: det är en hjälp, inte en garanti.

## Räkna en förteckning

1. Öppna ritningarna. En förteckning på valfritt blad duger: symbolerna med namnen bredvid.
2. Välj {{ui:Räkna allt}} i verktygsfältet.
3. Dra en ruta runt förteckningen, symbolerna och namnen. En rubrik utan symbol bredvid (SYMBOLFÖRTECKNING) lämnas utanför på egen hand.
   Panelen listar varje symbol med sin bild och namnet som står bredvid. Namnet blir postens namn, så byt namn här om du vill.
4. Avmarkera alla symboler du inte vill räkna. En symbol som inte kan sökas (för liten eller tom) säger varför.
5. Välj {{ui:Räkna på N blad}}. En rad visar bladet som söks; {{ui:Avbryt}} stoppar körningen. Sidan går fortfarande att använda.

Förteckningens egna symboler räknas inte på sitt eget blad. Ett blad som ritats i en annan skala söks i den skalan, och symbolerna hittas vridna i valfri rät vinkel.

## Granska räkningarna

- Varje symbol visar sin summa och, under den, en länk per blad som har någon (”E-103: 4”). Klicka på en för att gå till det bladet. Träffarna är inramade i postens färg.
- **Klicka på en ruta** för att utesluta den träffen. Den blir streckad och överstruken; klicka igen för att återställa den.
- **Flytta matchningsnivån** (50 % till 100 %, med början på din nivå i Inställningar). Högre behåller bara nära matchningar. Reglaget filtrerar bara det som hittats; inget söks igen.
- Två symboler som ser lika ut (ett dubbeluttag och ett fyrfaldigt uttag) kan matcha samma ställe. Den bättre matchningen tar det, och panelen säger på hur många ställen det hände, så att du kan kontrollera dem.
- Ett blad som är för stort för att sökas i symbolens storlek hoppas över, och panelen säger det.

## Lägg till dem

Välj {{ui:Lägg till N markeringar}}. Varje symbol blir en räkningspost med en markering på varje träff. Ett namn som redan är en av dina räkningsposter återanvänds (inget dubbleras där du redan markerat för hand). Hela körningen är ett steg: {{key:Ctrl+Z}} tar tillbaka varje post och markering.

Det du godkänner matas också in i {{ui:Inlärt}}: symbolerna sparas i mängdavtagningens fil för nästa gång.

## Med din assistent

Om du tillåter assistenter i Inställningar kan de läsa en förteckning (legend_open), köra räkningen i bakgrunden (legend_count_start, sedan legend_count_status), läsa räkningarna (legend_count_result) och lägga till dem (legend_count_add, som först kan förhandsvisa vad som skulle läggas till). Det är samma körning som du ser i panelen.

## Symboler i valfri vinkel

Bocka i {{ui:Symboler i valfri vinkel}} innan du räknar för att även hitta symboler som ritats i en vinkel som inte är rät (en diagonal väggplugg, en armatur vänd efter ett tak). Sökningen vrider då varje symbol var 15:e grad. En rund symbol behöver fortfarande en sökning, och en symbol som inte är rund kan ta upp till sex gånger så lång tid. Låt det vara avslaget för ritningar som är ritade rätvinkligt.

## Bra att veta

- Den behöver symboler ritade på samma sätt som i förteckningen. En förteckning ritad i en annan storlek än bladen är bra när bladens skalor är inställda; utan skalor söks symbolerna i förteckningens storlek.
- En symbol med en vägg eller en lång linje ritad rakt igenom kan missas, eftersom den inte längre liknar förteckningens bild. Kontrollera träffarna på första bladet innan du litar på resten.
- En skanning utan text fungerar fortfarande: symbolerna hittas efter sina rader, och du skriver in namnen.
