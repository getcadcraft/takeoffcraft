---
title: Met de hand tellen
summary: Klik op elke deur, elk armatuur of apparaat om het te tellen, controleer uw tellingen en corrigeer fouten.
keywords: tellen, elk, ea, armaturen, deuren, apparaten, symbolen, aftellen, klik tellen, handmatig tellen
from: 594f2980
---

Een telitem telt dingen: deuren, lichtarmaturen, stopcontacten, sanitaire toestellen. Elke klik op het blad voegt één telmarkering toe. Tellen heeft geen schaal nodig.

## Tellen

1. Maak of klik een telitem aan onder {{ui:Posten}} (type {{ui:Tellen}}).
2. Kies {{ui:Tellen}} in de werkbalk, of druk op {{key:C}}.
3. Klik elk ding op het blad aan.
   Elke klik zet een stip in de kleur van het item, en de telling van het item gaat met één omhoog.
4. Ga naar het volgende blad ({{key:PageDown}}) en blijf tellen. Het gereedschap blijft op {{ui:Tellen}}.
5. Druk op {{key:Esc}} als u klaar bent. TakeoffCraft keert terug naar {{ui:Selecteren}}.

Slepen verschuift nog steeds en het wiel zoomt nog steeds terwijl u telt, zodat u over het blad kunt bewegen zonder stippen toe te voegen.

:::tip
Klik op het telitem om zijn stippen op elk blad te markeren. De bladenlijst toont dan hoeveel er op elk blad staan, wat helpt om de bladen te vinden die u nog niet hebt geteld.
:::

## Een telling corrigeren

- **Een stip verwijderen**: kies {{ui:Selecteren}} ({{key:V}}), klik de stip aan en druk op {{key:Delete}} of kies {{ui:Markering verwijderen}}. Of druk direct na een verkeerde klik op {{key:Mod+Z}}.
- **Een stip verplaatsen**: selecteer hem en sleep hem.
- **Onder het verkeerde item geteld**: selecteer de stip en kies het juiste telitem in de lijst **Item** onder **Geselecteerde markering**.

## Stipgrootte, op het scherm en in de PDF

De stippen houden op het scherm dezelfde grootte, hoe ver u ook zoomt. Om die te wijzigen, opent u {{ui:Instellingen}}, het tabblad TakeoffCraft, en kiest u **Grootte telmarkering**: Extra klein, Klein, Middel (de standaard) of Groot.

De PDF-export ({{ui:Exporteren}} › de gemarkeerde PDF) tekent elke stip op papier even groot, ongeacht het formaat van het blad: een viewer die de PDF op 100% toont, toont de stippen zo groot als op het scherm. Waar de stippen op een blad elkaar anders zouden raken, maakt de export de stippen van dat blad kleiner, zodat elk leesbaar blijft.

## Veel identieke symbolen

Voor een symbool dat vaak op een blad voorkomt, kunt u [Automatisch tellen](topic:auto-count) proberen: omkader er één, bekijk wat het vindt, en voeg ze in één stap allemaal toe.

## Tellingen in formules gebruiken

De hoeveelheid van een telitem is **N**. Samenstellingscomponenten kunnen die gebruiken, bijvoorbeeld scharnieren `N * 3` voor deuren. Zie [Samenstellingen en formules](topic:assemblies).
