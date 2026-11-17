---
title: Prijsgeheugen van uw eerdere projecten
summary: TakeoffCraft onthoudt de tarieven die u in eerdere opmetingen gebruikte, alleen op deze computer, zodat een nieuwe opmeting kan beginnen met wat u de vorige keer betaalde. Bekijk het, gebruik het, vergeet het.
keywords: prijsgeheugen, prijzen, prijzen onthouden, vorig project, eerdere projecten, typische prijs, mediaan, tarieven, zonder prijs, opnieuw prijzen, leren van een eerdere opmeting, vergeten, bibliotheek
from: 7279f1a1
---

{{ui:Prijzen}} op de werkbalk (het dollarteken) opent wat TakeoffCraft onthoudt over de prijzen die u gebruikte. Het is een gewone lijst: voor elke postnaam de tarieven van uw laatste projecten. Ze wordt in deze browser bewaard (in Studio, in de eigen webweergave) naast de prijsbibliotheek, nooit in een opmetingsbestand, en er wordt niets ergens naartoe gestuurd. Het is geen getraind model.

## Wat wordt onthouden

Wanneer u een opmeting opslaat, wordt elke post die een prijs heeft en gebruikt wordt (hij heeft een markering, of een getypte hoeveelheid boven nul) onthouden onder zijn naam en type: materiaaltarief, arbeidstarief, verlies en eenheid. Een project zijn de tekeningbestanden waaruit de opmeting is gemaakt, dus de opmeting opnieuw opslaan vervangt de eigen prijzen ervan in plaats van een ander project toe te voegen. De laatste 12 projecten worden per naam bewaard.

Om uw oudere werk te gebruiken, kiest u {{ui:Leren van een eerdere opmeting…}} en selecteert u een opgeslagen opmeting (.json). De geprijsde, gebruikte posten ervan worden op dezelfde manier onthouden.

Namen komen overeen wanneer hun woorden overeenkomen, ongeacht hoofdletters of leestekens ("2x4 Stud, 8 ft" en "2x4 stud 8 FT" zijn hetzelfde). Dezelfde woorden voor een ander soort post (een lineaire post en een telpost) zijn niet dezelfde prijs.

## Gebruik op een nieuwe opmeting

1. Maak de posten van de nieuwe opmeting.
2. Kies {{ui:Prijzen}}. Onder {{ui:Deze opmeting}} ziet u elke post die een onthouden prijs heeft, wat u er nu op heeft, de tarieven van de laatste opdracht, de typische tarieven (het midden van de onthouden projecten) en de spreiding.
3. Kies {{ui:Laatste gebruiken}} of {{ui:Gebruikelijke gebruiken}} bij één post, of {{ui:Prijs N posten zonder prijs uit het geheugen}} om elke post zonder prijs te vullen met de tarieven van de laatste opdracht.

Elk gebruik is één stap: {{key:Ctrl+Z}} neemt het terug. Een post met alleen een vergelijkbare naam (de ene naam staat in de andere) meldt dat, en de knoppen gebruiken de tarieven van de vergelijkbare naam. Een per stuk onthouden prijs wordt nooit op een post per voet gezet: het dialoogvenster zegt dat de eenheden verschillen en laat hem met rust.

## Bekijken, wijzigen, vergeten

{{ui:Alles wat is onthouden}} toont elke naam met zijn tarieven en het aantal projecten. De prullenbakknop vergeet één naam; {{ui:Alle prijzen wissen}} vergeet ze allemaal. Schakel {{ui:Mijn prijzen onthouden wanneer ik een opmeting opsla}} uit om niet meer te onthouden; wat er al staat, blijft tot u het vergeet. Uw opmetingen en de prijsbibliotheek worden nooit aangeraakt.

## Met uw assistent

Als u assistenten in Instellingen toestaat, kunnen ze lezen wat voor de posten van de opmeting is onthouden (prices_list) en posten daaruit prijzen geven (prices_apply, die eerst een voorbeeld kan tonen). Het is dezelfde lijst als in het dialoogvenster.
