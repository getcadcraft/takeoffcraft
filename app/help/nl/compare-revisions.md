---
title: Een herziene tekening vergelijken en de opmeting verplaatsen
summary: Leg het oude blad over de herziening, lijn ze uit, zie wat er is veranderd, en verplaats de opmeting naar het nieuwe blad, met de markeringen om te controleren gemarkeerd.
keywords: herziening, herzien, vergelijken, overlay, oud, nieuw, wijzigingen, addendum, bulletin, opnieuw uitgegeven, opmeting verplaatsen, overdragen, meenemen, uitlijnen, gemarkeerd, controleren
from: 3a1d9fe0
---

Wanneer een blad opnieuw wordt uitgegeven, hoeft u het niet opnieuw op te meten. Open de oude PDF en de nieuwe, vergelijk de twee bladen, en verplaats de opmeting ernaartoe. TakeoffCraft markeert elke markering waar de tekening is veranderd, zodat u die controleert en de rest behoudt.

## Vergelijken

1. Open beide PDF's: de oude set en de herziene ({{ui:Tekeningen openen}}; ze kunnen in één bestand of in meerdere staan).
2. Toon het **nieuwe** blad.
3. Kies {{ui:Vergelijken}} op de bladbalk onder de tekening.
4. Kies het oude blad in de lijst. TakeoffCraft stelt het blad voor met hetzelfde nummer in de andere PDF, of dezelfde pagina. Kies **Vergelijken**.

De oude tekening ligt nu in rood over de nieuwe. Waar de twee overeenkomen, liggen de rode lijnen op de zwarte; waar ze verschillen, ziet u alleen rode lijnen (verwijderd) en alleen zwarte lijnen (toegevoegd). Een balk onderaan het blad bevat de stappen hieronder; {{key:Esc}} of {{ui:Sluiten}} beëindigt het vergelijken.

## Uitlijnen

Herziene bladen worden vaak een beetje scheef geplot: verschoven op de pagina, of op een iets andere grootte. Als de rode tekening niet op de zwarte ligt, kies **Uitlijnen op twee punten** en klik vier keer:

1. een punt op de oude (rode) tekening, zoals het middelpunt van een kolom of een hoek van het gebouw,
2. hetzelfde punt op de nieuwe (zwarte) tekening,
3. een tweede punt op de rode tekening, ver van het eerste,
4. hetzelfde punt op de zwarte tekening.

De rode tekening verschuift, draait en schaalt op de zwarte. De statusbalk zegt hoeveel groter de nieuwe tekening is ("grootte × 1.000" wanneer die gelijk is). Zoom in voor de keuzes: hoe dichter u klikt, hoe beter de pasvorm.

## Wijzigingen zoeken

Kies **Wijzigingen zoeken**. TakeoffCraft vergelijkt het lijnwerk van de twee tekeningen: lijnwerk alleen op het oude blad wordt rood, lijnwerk alleen op het nieuwe blad wordt blauw, en de statusbalk telt ze. Lijnen die met een haar zijn verschoven (een herplot) tellen niet mee als wijzigingen.

Het kijkt ook naar elke markering op het oude blad en telt die welke op een plek liggen waar de tekening is veranderd:

- een traject of een vlak wanneer de tekening aan een van de uiteinden of hoeken is veranderd, of langs ten minste ongeveer een zesde van de lengte;
- een telling wanneer er iets direct naast is veranderd.

## De opmeting verplaatsen

Kies **Opmeting hier verplaatsen**. Elke markering op het oude blad verschuift naar het nieuwe, via de uitlijning, in één stap ongedaan te maken. De markeringen naast een wijziging worden gemarkeerd: ze krijgen een oranje gloed, en de bladbalk toont "(n) te controleren".

Als het nieuwe blad geen schaal had, neemt het de schaal van het oude blad over (aangepast wanneer de tekeningen moesten worden geschaald om uit te lijnen). Had het al een andere schaal, dan vraagt TakeoffCraft eerst: verplaatste markeringen worden gemeten op de schaal van het nieuwe blad.

## De gemarkeerde markeringen controleren

1. Kies "(n) te controleren" op de bladbalk. Het zoomt naar de volgende gemarkeerde markering en selecteert die; het paneel zegt waarom ze is gemarkeerd.
2. Corrigeer de markering als de tekening eronder is veranderd (sleep de hoeken, voeg markeringen toe of verwijder ze, of haal ze helemaal weg).
3. Kies **Gecontroleerd** in het paneel. De markering verdwijnt en het aantal op de bladbalk daalt.

De markeringen worden met de opmeting opgeslagen, zodat u ze later kunt controleren.

:::note
Vergelijken werkt net zo goed op vectorPDF's als op scans, omdat het vergelijkt wat getekend is. Een scan die scheef of uitgerekt is, past misschien alleen ruwweg met twee punten; controleer dan meer markeringen met het oog.
:::
