---
title: Välj PDF-filens linjer
summary: Klicka på en linje i en vektor-PDF för att mäta hela dess sammanhängande bana, eller inuti en sluten kontur för dess area, med luckstoleransen visad och en ångring per segment.
keywords: bana, välj, linjer, sammanhängande, hela sträckan, spåra, kontur, omkrets, lucka, tolerans, brygga, segment, flik, vektor, area från linjer, p
from: c22526ae
---

På en vektor-PDF är väggar och kanter riktiga linjer. {{ui:Bana}} ({{key:P}}) tar dem som de är ritade: ett klick på en linje mäter allt som är sammanfogat med den, från ände till ände, så du behöver inte spåra en vägg genom att klicka på dess hörn. Bladet behöver en skala. En skannad sida har inga linjer att välja; använd [Linjär](topic:measure-linear) eller [Area](topic:measure-areas) där.

## Välj en bana eller en kontur

1. Välj {{ui:Bana}}. Linjen under pekaren konturmarkeras, tillsammans med de andra banor den kunde vara, tunt ritade.
2. Klicka på en linje: hela den sammanhängande banan väljs. Fältet under verktygsfältet anger dess segment, längd, luckstoleransen och hur många luckor som överbryggades. En bana som återvänder till sin start är sluten och anger även sin omkrets.
3. Eller klicka inuti en sluten kontur, bort från alla linjer: konturen runt den punkten väljs som en area. Den minsta kommer först; {{key:Tab}} prövar nästa större.
4. Tryck på {{key:Enter}} (eller högerklicka, eller dubbelklicka) för att lägga till märkena. En vald bana blir ett märke på en post av typen **linjär**, och en kontur ett märke på en post av typen **area**: den aktiva posten om den har den typen, annars den senast skapade av den typen. Utan någon sådan öppnas formuläret för ny post, och inget läggs till förrän du trycker på {{key:Enter}} igen. Allt som valts läggs till i ett enda ångrasteg.

## Luckstoleransen

Ritare lämnar små hål där linjer borde mötas. Två linjer förenas när deras ändar ligger närmare varandra än **luckstoleransen**. Den börjar på 1.5 points på bladet (visas i fot och tum vid bladets skala), och en streckad ring så bred följer pekaren och sitter på varje ände av banan under den. Varje hål som överbryggats ringas in i orange på en vald bana, och fältet räknar dem.

{{key:]}} gör toleransen bredare, {{key:[}} smalare. En vald bana förenas direkt igen vid den nya toleransen. Vid en förgrening fortsätter banan rakt fram, den riktning som böjer minst, och lämnar grenen.

## Tangenter

| Tangent eller åtgärd | Vad den gör |
|---|---|
| Klick | Välj banan under pekaren, eller konturen runt den. |
| {{key:Shift}} + klick | Lägg till en annan bana eller kontur till det som är valt. |
| {{key:Tab}} | Prova nästa bana under pekaren, eller nästa större kontur. |
| {{key:Backspace}} eller {{key:Mod+Z}} | Ta bort sista segmentet på den senast valda banan, ett segment i taget. En bana utan segment kvar försvinner. Utan något valt är {{key:Mod+Z}} vanlig ångra. |
| {{key:[}} och {{key:]}} | Smalare och bredare luckstolerans. |
| {{key:Enter}} | Lägg till märkena. |
| {{key:Esc}} | Rensa det som är valt. |

## Bra att veta

- En kurva i ritningen är en kedja av korta raka bitar, så dess längd är något kortare än den verkliga bågen. För en exakt båge, mät ritningens egen fil ([Mät från en ritning](topic:measure-from-a-drawing)).
- En överbryggad lucka räknas som ett rakt hopp över den, så en sluten konturs omkrets inkluderar den.
- Endast streck och fyllningar i sidans egna banor är linjer. Text skriven som bokstäver, och bilder, är det inte.
