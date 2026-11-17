---
title: Typgrupper
summary: Mät en typisk enhet, ett rum eller en våning en gång och räkna den så många gånger den upprepas, ändra antalet senare och se vilka markeringar som är typiska.
keywords: typ, typgrupp, upprepa, upprepningsantal, multiplicera, gånger, enhet, hotellrum, lägenhet, typisk våning, x24, kopior
from: 42c3a372
---

En byggnad upprepar ofta sig: 24 identiska hotellrum, 6 typiska våningar, 40 parkeringsplatser med samma markering. En **typgrupp** låter dig mäta en av dem och räkna den så många gånger den upprepas, utan att rita kopiorna.

## Skapa en typgrupp

1. Mät en enhet: dess väggar, dess golv, dess uttag, vilka poster som helst.
2. Markera dess markeringar med verktyget {{ui:Markera}}: klicka på en, sedan {{key:Shift}} + klicka på de andra ([Markera markeringarna](topic:copy-paste#select-the-marks)).
3. Under **Vald markering** öppnar du {{ui:Typ}} och väljer {{ui:Ny typgrupp…}}.
4. Ge den ett namn (`Enhet A`) och antalet gånger den upprepas (`24`), och välj {{ui:Skapa grupp}}.

Varje mängd för de markeringarna räknas nu 24 gånger: en 10 ft lång vägg ger 240 ft, ett golv på 80 SF ger 1,920 SF, två uttag ger 48. Kostnaderna följer efter, och kalkylsammansättningars formler ser de upprepade summorna (`N` räknar också varje sträcka 24 gånger).

På ritningen går en streckad ruta runt gruppens markeringar med dess namn och antal, till exempel **Enhet A ×24**.

## Ändra senare

Grupperna listas under **Typgrupper** i den högra panelen:

- Ändra siffran efter **×** för att ändra hur många gånger den räknas (1 till 10,000). Varje mängd uppdateras.
- Byt namn i dess namnruta.
- Ikonen med en ruta markerar gruppens markeringar (och visar deras blad).
- Papperskorgen tar bort gruppen. Dess markeringar finns kvar, räknade en gång.

För att lägga till markeringar i en grupp eller ta bort dem, markera dem och välj gruppen (eller {{ui:Inte typ (×1)}}) under {{ui:Typ}}.

## Bra att veta

- En grupps markeringar kan ligga på flera blad, och vara av vilka poster som helst. Varje markering finns i högst en grupp.
- Kopior du klistrar in ingår inte i gruppen: en inklistrad kopia av en typisk enhet skulle annars räknas 24 gånger till. Använd en grupp för "samma sak N gånger", och kopiera och klistra in för de kopior du ritar.
- Markeringarna ritas en gång, så 3D-vyn och den markerade PDF:en visar en enhet; mängderna, exporterna och tabellen per blad räknar den ×N. Bladet **Markeringar** i Excel-exporten anger vilka markeringar som är typiska och hur många gånger de räknas.
- Med budareor räknas en grupps markeringar ×N i sin egen budarea.
