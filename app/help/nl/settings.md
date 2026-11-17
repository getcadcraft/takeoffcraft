---
title: TakeoffCraft-instellingen
summary: Toon inches tot 1/16, 1/8 of 1/4, begin nieuwe posten met een verliespercentage, kies waar de schuifregelaar van Automatisch tellen begint, klik vast op de lijnen van de tekening of op 45° zonder Shift in te houden, stel in hoe breed een deur is die Ruimte invullen sluit, en kies de hoekindicator van de 3D-weergave.
keywords: instellingen, voorkeuren, opties, precisie, breuken, inches, afronding, verlies, standaardverlies, automatisch tellen, drempel, overeenkomst, schuifregelaar, vastklikken, 45, hoek, shift, aanzichtkubus, assenpictogram, hoekindicator, 3d
from: bca3f0ed
---

Open {{ui:Instellingen}} met het tandwiel in de appbalk of {{key:Mod+,}}. Het eerste tabblad, {{ui:TakeoffCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat de instellingen die elke CadCraft-app deelt (thema, panelen, werkbalk). De instellingen van TakeoffCraft bestaan alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze. {{ui:TakeoffCraft-instellingen opnieuw instellen}} zet ze terug op het begin.

## Feet en inches

Toon lengten tot het dichtstbijzijnde **1/16"** (het begin), **1/8"** of **1/4"**. Dit verandert hoe lengten worden gelezen op het blad, in de panelen, in de hoeveelheden en in de statusbalk.

Alleen de weergave wordt afgerond. Hoeveelheden, kosten en exports worden berekend op de exacte lengten, en de exports tonen altijd 1/16".

## Verlies om mee te beginnen

Het verliespercentage waarmee elke nieuwe post begint: 0% (het begin), 2%, 3%, 5%, 7.5%, 10%, 15% of 20%. U kunt voor elke post nog steeds een ander verlies typen, in de postbewerker of rechtstreeks in de tabel Hoeveelheden. Posten die u al heeft, behouden hun eigen verlies.

## Automatisch tellen: waar de overeenkomstschuifregelaar begint

Waar de schuifregelaar {{ui:Overeenkomst}} staat wanneer een zoekactie van [Automatisch tellen](topic:auto-count) klaar is, van 50% tot 95%; 75% is het begin. Lager biedt meer gelijkenissen om af te wijzen; hoger biedt er minder. U kunt de schuifregelaar tijdens elke controle nog steeds verplaatsen.

## Vastklikken op de eigen lijnen van de tekening

Aan bij het begin. Terwijl u meet of ijkt, springt een punt dicht bij een lijn van de PDF naar het eindpunt, het middelpunt, een kruising of het dichtstbijzijnde punt erop. {{key:F3}} en {{ui:Vastklikken}} in de statusbalk zetten het ook aan en uit. Meer: [Vastklikken op de lijnen van de tekening](topic:snap-to-the-drawing).

## Ruimte invullen: hoe breed een opening het sluit

{{ui:Ruimte invullen sluit openingen tot}} stelt in hoe breed een deuropening of opening is die het gereedschap {{ui:Ruimte}} als gesloten beschouwt: 3'-0" tot 8'-0", 4'-0" aan het begin. Breder dan uw breedste deur laat een ruimte doorlopen in de volgende; smaller dan een deur laat de ruimte open. Zie [Een ruimte met één klik invullen](topic:measure-areas#fill-a-room-with-one-click).

## Vastklikken op 45° zonder Shift

Uit aan het begin. Wanneer dit aan staat, gaan lijnen, omtrekken, uitsparingen en versleepte hoeken op 0°, 45°, 90° of 135° vanaf het laatste punt, zonder {{key:Shift}} in te houden; houd {{key:Shift}} ingedrukt om op elke hoek te klikken. De statusbalk leest dan "Klikt vast op 45°; Shift geeft de hoek vrij". Het punt waarop u op de kromming van een boog klikt, en cirkels worden nooit vastgeklikt; het uiteinde van een boog wel.

## Grootte van de telmarkering

Hoe groot de telstippen zijn: {{ui:Extra klein}}, {{ui:Klein}}, {{ui:Middel}} (het begin: de grootte die de stippen altijd hadden) of {{ui:Groot}}. De grootte blijft op het scherm bij elke zoomstand, en de gemarkeerde PDF tekent elke stip op dezelfde grootte op papier, wat het blad ook is, zodat de PDF op 100% eruitziet zoals het scherm. Meer: [Met de hand tellen](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Hoekindicator

Alleen voor de [3D-controleweergave](topic:check-in-3d): {{ui:Aanzichtkubus}} (het begin: een kubus rechtsboven om te klikken, slepen en draaien), {{ui:Assenpictogram}} (een kleine X-, Y-, Z-markering rechtsonder) of {{ui:Geen}}. Het verandert meteen en wordt in deze browser bewaard. Het platte blad toont nooit een van beide.

## Padgereedschap: de grootste opening die het verbindt

{{ui:Padgereedschap: grootste opening om te verbinden}} is hoe ver twee lijneinden uit elkaar mogen liggen en nog steeds als één pad tellen, in PDF-punten (0.05 tot 60; 1.5 aan het begin). De lijnen van een tekening stoppen vaak een haartje voor elkaar. Een grotere waarde verbindt meer; een kleinere houdt lijnen gescheiden. {{key:[}} en {{key:]}} wijzigen het terwijl u kiest, en dit veld volgt. Zie [De lijnen kiezen](topic:pick-the-lines).
