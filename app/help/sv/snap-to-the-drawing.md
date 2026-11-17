---
title: Fånga mot ritningens linjer
summary: Punkter hoppar till PDF:ens egna linjer medan du mäter eller kalibrerar: ändar, mittpunkter, korsningar eller var som helst på en linje, med en markör som visar vilken.
keywords: fångst, objektfångst, osnap, ändpunkt, mittpunkt, skärning, närmaste, vektor, linjer, exakt, F3, magnet, hörn
from: 41d29e9b
---

De flesta ritningsserier är vektor-PDF:er: deras väggar och kanter är riktiga linjer, inte pixlar. Medan du mäter fångar TakeoffCraft dina klick mot de linjerna, så att en sträcka börjar exakt vid en väggs hörn och en kalibrering läser det mått ritaren ritade, inte pixeln du träffade.

{{ui:Fångst}} är på när du startar. Slå av och på den med {{ui:Fångst}} i statusfältet eller med {{key:F3}}; inställningen sparas i den här webbläsaren (den finns också under [Inställningar](topic:settings)).

## Vad det fångar

När pekaren kommer inom cirka 10 skärmpixlar från en linje visar en markör var klicket landar, tillsammans med dess namn:

| Markör | Namn | Var |
|---|---|---|
| Kvadrat | **Ändpunkt** | Änden på en linje, eller ett hörn där linjer möts. En kurvas två ändar räknas; punkterna längs den gör inte det. |
| Triangel | **Mittpunkt** | Mitten av en rak linje. |
| Kors | **Skärning** | Där två linjer korsar varandra, eller där en slutar på en annan. |
| Timglas | **På linjen** | Närmaste punkt på en linje, när ingen ändpunkt, mittpunkt eller skärning finns nära. |

Närmaste ändpunkt, mittpunkt eller skärning vinner. Bara när ingen av dem är nära hamnar punkten på själva linjen. Zooma in för att välja mellan punkter som ligger nära varandra: de 10 pixlarna är skärmpixlar, så vid högre zoom täcker de mindre av ritningen.

## Var det fungerar

Fångst fungerar i {{ui:Linjär}}, {{ui:Area}}, {{ui:Cirkel}}, {{ui:Urtag}}, {{ui:Kalibrera}} och {{ui:Kontrollera}}, samt när du drar i hörnet på en markerad markering. Det placerar också bågpunkter. {{ui:Räkna}}, {{ui:Autoräkna}} och inklistring fångas inte.

En fångad punkt går före 45°-fångsten från {{key:Shift}}: för att rita i 45° bort från linjerna, stäng av fångst med {{key:F3}} först.

:::tip
Kalibrera med fångst på. Klicka nära de två ändarna på en måttlinje eller en vägg du känner till: båda punkterna landar exakt på ritningen, och skalan blir exakt (statusfältet anger då förvalet den motsvarar).
:::

## Ritningar det inte kan fånga mot

- **Skannade ritningar** är bilder utan linjer att fånga mot. Statusfältet säger "Det här bladet har inga linjer att fånga mot (en skannad sida är en bild)." och punkterna hamnar där du klickar.
- **Mycket stora ritningar**: fångst läser upp till 400,000 linjesegment per blad. På ett blad med fler säger appen det och fångar bara mot de första.
- **Text** fångas inte, om inte PDF:en ritar bokstäverna som linjer (vissa plottrar gör det).

Bladets linjer läses första gången du öppnar det, i bakgrunden; ett stort blad kan ta en sekund innan markörerna visas.
