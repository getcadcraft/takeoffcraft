---
title: Autoräkna en symbol
summary: Rita en ruta runt en symbol, låt TakeoffCraft hitta de övriga på detta blad eller på alla öppna blad, granska träffarna med reglaget och lägg till dem i ett steg.
keywords: valfri vinkel, roterad, vriden, annan skala, olika skala, autoräkna, automatisk räkning, symbolsökning, hitta symboler, mönster, mall, träff, detektera, räkneverktyg
from: fa68a6c1
---

{{ui:Auto count}} hittar varje kopia av en symbol när du har ritat en ruta runt en. Sedan granskar du träffarna på bladet och lägger till de du godkänner som räknemärken. Det är ett hjälpmedel, inte en garanti: granska alltid innan du lägger till.

## Hitta symbolerna

1. Skapa eller klicka på en räknepost under {{ui:Items}}.
2. Öppna ett blad där symbolen förekommer.
3. Välj {{ui:Auto count}} i verktygsfältet eller tryck på {{key:S}}.
   En lista visas överst på bladet: "Dra en ruta runt en symbol på detta blad."
4. Om du vill söka på alla öppna blad, inte bara detta, bocka i {{ui:Search all open sheets}}.
5. Zooma in så att symbolen syns tydligt och dra sedan en ruta tätt runt en kopia av den. Ta med hela symbolen; tomt papper runt den klipps bort.
   Listen visar "Söker…" med en förloppsindikator och en {{ui:Cancel}}-knapp. Sidan svarar fortfarande: du kan zooma, panorera och byta blad. Om du väljer ett annat verktyg eller trycker på {{key:Esc}} avbryts sökningen.
6. När den är klar visas träffarna på bladet som rutor i postens färg, och listen visar en sammanfattning, till exempel "22 träffar, 19 att lägga till (3 redan räknade). Klicka på en ruta för att förkasta eller återställa den."

I {{ui:Auto count}} ritar du en ruta när du drar på bladet i stället för att panorera. För att panorera håller du ned {{key:Space}} och drar, eller drar med mittenknappen.

## Granska träffarna

- **Klicka på en ruta** för att förkasta den. En förkastad ruta är streckad och genomkorsad. Klicka igen för att återställa den.
- **Flytta {{ui:Match}}-reglaget** (50% till 95%, startar på 75%). Ett högre värde visar bara nära träffar; ett lägre visar mer löst liknande. Reglaget filtrerar bara det som hittats; det söker inte igen.
- **Redan räknade**: träffar på en plats som redan har ett räknemärke för denna post börjar förkastade, så att du inte räknar något två gånger.
- **Andra blad**: när du sökte på alla öppna blad, byt blad med bladlistan eller med {{key:PageDown}} och granska varje blad. Sammanfattningen säger hur många blad som har träffar.

## Lägg till dem

Välj {{ui:Add}}. Knappen anger hur många, till exempel "Lägg till 19 märken".
Räknemärkena läggs till i mitten av varje godkänd ruta: "19 räknemärken lades till på ”Dubbelt uttag”. Ctrl+Z tar bort dem alla."

Hela satsen är ett ångra-steg, så ett enda {{key:Mod+Z}} tar bort den.

För att avbryta granskningen utan att lägga till något, välj {{ui:Discard}} eller tryck på {{key:Esc}}. Om du väljer ett annat verktyg avbryts den också.

## Vad den hittar och vad den missar

TakeoffCraft jämför ritningen, pixel för pixel, med symbolen du ritade runt.

- Den hittar symbolen vriden 0°, 90°, 180° och 270°. Bocka i {{ui:Any angle (slower)}} på autoräkningsraden innan du ritar rutan för att även hitta den i valfri vinkel: den prövar var 15°, och finjusterar sedan varje träff till en och en halv grad. Det tar ungefär sex gånger så lång tid. Den hittar inte en spegelvänd symbol (om inte symbolen ser likadan ut speglad).
- Med {{ui:Search all open sheets}} ibockad söks ett blad i en annan skala med den storlek symbolen har där: en armatur ritad i skala på en 1/8"-plan är hälften så stor som på en 1/4"-plan, och hittas ändå. Ett sådant blad söks också med rutans egna storlek, för märkningar och symboler som är utskrivna i samma storlek på varje blad. Detta kräver en skala på båda bladen; ett blad utan skala söks endast i rutans storlek.
- Mycket lika symboler kan matcha varandra: ett dubbel- och ett fyrauttag, eller två armaturmärkningar som skiljer sig med en bokstav. Höj reglaget tills bara de rätta finns kvar och förkasta resten för hand.
- En symbol som korsas av andra linjer, skraffering eller text får lägre poäng och kan behöva en lägre reglerinställning.
- Mycket små rutor avvisas: "Den rutan är för liten. Rita den runt hela symbolen." En tom ruta avvisas också: "Den rutan är nästan tom. Rita den runt en symbol."
- Ett blad som skulle bli mycket stort i den storlek som behövs för denna symbol hoppas över, och sammanfattningen säger "1 blad var för stort för att sökas i denna symbolstorlek." Rita runt en större symbol, eller räkna det bladet för hand.

Om inget hittas visar statusfältet "Inga träffar. Sänk träffreglaget eller rita rutan tätare runt symbolen."

## Hastighet och webbläsare

Sökningen körs i en bakgrundsprocess, så sidan svarar fortfarande och du kan avbryta när som helst. Varje blad ritas först i arbetsstorlek på själva sidan, vilket kan göra att ett mycket stort blad pausar en kort stund. Det fungerar i aktuella versioner av Chrome, Edge, Firefox och Safari. Sökning i många blad tar längre tid; förloppsindikatorn rör sig blad för blad. Offline fungerar autoräkning när programraden visar {{ui:Offline ready}}: {{ui:Save for offline}} behåller även bakgrundsprocessen. Se [Arbeta offline](common:offline).
