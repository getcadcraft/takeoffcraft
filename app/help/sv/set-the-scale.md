---
title: Ange skalan
summary: Ge varje blad en skala med ett förval eller genom att kalibrera på ett känt mått, kontrollera den och förstå varför blad utan skala utelämnas från summorna.
keywords: identifiera skala, läs skala, skala från text, alla blad, skala, kalibrera, förval, kontrollera skala, verifiera, känt mått, oskalad, ingen skala, förhållande, ange skala
from: 8f0148e6
---

Varje blad har sin egen skala. Du anger den, eller låter TakeoffCraft läsa den från bladens text (nedan), och kontrollerar den. Tills ett blad har en skala vägrar {{ui:Linjär}}, {{ui:Area}}, {{ui:Cirkel}} och {{ui:Urtag}} att mäta på det. {{ui:Räkna}} och {{ui:Autoräkna}} fungerar utan skala.

Bladlistan visar varje blads skala, eller **Ingen skala**. Fältet under det öppna bladet säger samma sak.

## Använd ett förval (när PDF-filen är utskriven i full storlek)

1. Öppna bladet.
2. Öppna listan {{ui:Förval}} i gruppen {{ui:Skala}}.
3. Välj skalan som står på ritningen, till exempel `1/8" = 1'-0"` under Arkitektoniska.
   Statusfältet säger "Skala för det här bladet: 1/8" = 1'-0"."
4. Kontrollera den (nedan).

Ett förval förutsätter att PDF-filen har den verkliga pappersstorlek som ritningen gjordes för. Om någon gjorde PDF-filen med "anpassa till sida", eller det är en uppsättning i halv storlek, är förvalet fel. Kalibrera i stället.

Hela listan finns i [Skalförval](topic:scale-presets).

## Läs skalorna från bladens text

De flesta ritningar anger sin skala: `SCALE: 1/4" = 1'-0"` i ritningshuvudet, `1:100` under en vy. TakeoffCraft kan läsa den och ange varje blad på en gång.

1. Öppna listan {{ui:Förval}} och välj {{ui:Från bladens text…}} (överst).
2. Listan visar varje blad: dess skala nu, och vad dess text säger — **Anger 1/4" = 1'-0"**, **Ingen skala i texten** eller **Anger ej skala** (NTS).
3. Blad utan skala som anger en skala är markerade. Markera eller avmarkera vilka som helst, och välj sedan {{ui:Ange de markerade skalorna}}. En {{key:Mod+Z}} tar tillbaka alla.
4. Kontrollera en dimension på varje blad med {{ui:Kontrollera}} (nedan): ett förval är bara rätt när PDF-filen är utskriven i full storlek.

Den läser arkitektoniska (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), tekniska (`1" = 20'`) och metriska (`1:50`) beteckningar som matchar ett [förval](topic:scale-presets). När ett blad anger mer än en skala (en plan med förstorade detaljer) tar den den som anges oftast, och en som står efter ordet SCALE räknas dubbelt; de övriga visas i rött så att du kan kontrollera dem. Ett skannat blad har ingen text: ange dess skala för hand.

## Kalibrera på ett känt mått

Använd detta när det inte finns någon utskriven skala du litar på, seten har ändrats i storlek, eller bladet säger "ej i skala" men har dimensioner.

1. Öppna bladet och zooma in på ett långt mått du känner till, till exempel avståndet mellan axlar eller ett totalmått för byggnaden. Ju längre, desto noggrannare.
2. Välj {{ui:Kalibrera}} i gruppen {{ui:Skala}}, eller tryck på {{key:K}}.
3. Klicka på ena änden av måttet. Zooma in på varje ände för precision; du kan zooma och panorera mellan klicken.
4. Klicka på den andra änden. Håll {{key:Shift}} för att hålla linjen på 0°, 45° eller 90°.
   Dialogrutan **Kalibrera det här bladet** öppnas.
5. Skriv det verkliga avståndet i **Verkligt avstånd**, till exempel `24'-6 1/2"`, `24.5` (decimala fot), `30"` eller `7.5 m`. Se [Inmatning av längd, pris och procent](topic:entry-formats).
6. Välj {{ui:Ange skalan}}.
   Statusfältet visar skalan som "1" = (n)'", och när den ligger inom 0.5 % av ett förval säger det vilket, till exempel "vilket matchar 1/4" = 1'-0" (välj det förvalet för en exakt skala)".
   TakeoffCraft återgår till verktyget {{ui:Markera}}.

När kalibreringen matchar ett förval ger det förvalet en exakt skala i stället för en som beror på var du klickade.

## Kontrollera skalan

Kontrollera alltid en ny skala på ett andra mått.

1. Välj {{ui:Kontrollera}} i gruppen {{ui:Skala}}, eller tryck på {{key:D}}.
2. Klicka på båda ändarna av ett mått som står på ritningen.
   Statusfältet visar "Kontroll: 12'-6"" med samma längd i decimala fot och meter, och kontrollinjen står kvar på bladet med sin längd.
3. Jämför med det utskrivna måttet. Om det avviker, kalibrera på ett längre mått.

Tryck på {{key:Esc}} för att rensa kontrollinjen.

## Ändra en skala

Välj ett annat förval eller kalibrera igen. Om bladet redan har mätningar frågar TakeoffCraft **Ändra det här bladets skala?** och säger hur många mätningar som kommer att mätas om. Välj {{ui:Ändra skalan}}. Varje sträcka och area på bladet mäts om med den nya skalan. Du kan ångra det med {{key:Mod+Z}}.

## Varför blad utan skala inte räknas som noll

En markering på ett blad utan skala har ingen verklig längd eller area. TakeoffCraft räknar den aldrig som noll, eftersom det i tysthet skulle göra din kalkyl för låg. I stället:

- lämnas dessa markeringar utanför summorna,
- visas "+(n) oskalade" bredvid posten i {{ui:Mängder}},
- visas "Ofullständig: (n) markeringar på blad utan skala (ingår inte i summorna)" i tabellrubriken,
- skrivs antalet i anteckningskolumnen i kalkylbladsexporten.

Det här kan hända när du öppnar ett projekt vars skalor aldrig angavs. Ge bladet en skala så räknas markeringarna direkt. Räknemarkeringar räknas alltid; de behöver ingen skala.

## Tips

- Ange skalan på varje blad du ska mäta innan du börjar. Sök i bladlistan efter **Ingen skala** för att hitta de som återstår (sökrutan tittar på bladnamn, inte skalor).
- Detaljer och förstorade plan på samma blad använder ofta en annan skala. TakeoffCraft har en skala per blad; se [Vad som inte är byggt ännu](topic:not-built-yet).
- Metriska ritningar: välj ett metriskt förval som `1:100`, eller kalibrera med ett metriskt avstånd som `6000 mm`.
