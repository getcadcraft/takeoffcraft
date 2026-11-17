---
title: Voorraad en levertijden van leverancier controleren
summary: Voeg de voorraadlijst van een leverancier toe (CSV of spreadsheet) en TakeoffCraft controleert wat de opmeting nodig heeft, inclusief verlies, daarmee: genoeg op voorraad en hoe lang de wachttijd is. Tekorten en lange wachttijden verschijnen in het paneel Problemen.
keywords: leverancier, voorraad, op voorraad, levertijd, beschikbaarheid, tekort, nabestelling, bestellijst, csv, sku, verkoper, materialen, levering, problemen
from: f11160fb
---

{{ui:Levering}} op de werkbalk (de vrachtwagen) controleert wat uw opmeting nodig heeft tegen de voorraadlijst van een leverancier. De rijen van de leverancier die ertoe doen, worden bewaard in het eigen bestand van de opmeting. Er wordt niets verstuurd en niemand wordt door de app bij een leverancier gevraagd: u brengt het bestand aan.

## Het bestand

Een CSV-bestand met een kopregel. Het heeft een kolom met naam of SKU nodig, en een kolom met voorraad of levertijd. Deze kopteksten worden herkend (in willekeurige volgorde, ongeacht hoofdletters): Item, Name, Description of Product; SKU, Part of Item #; In stock, On hand, Available of Quantity; Lead time of Delivery days; Unit of UOM; Price of Cost; Supplier of Vendor.

- Voorraad kan een getal zijn (1,200), "In stock" of "Out of stock".
- Een levertijd kan "5 days", "2 weeks", "2-3 weeks" (de langste wordt gebruikt), "3 months", "same day" of "backorder" zijn. Een kaal getal is in de eenheid van de kop (dagen, tenzij de kop weken of maanden zegt).
- Excel-bestanden worden niet gelezen: sla het blad eerst op als CSV.

## De opmeting controleren

1. Kies {{ui:Levering}}, daarna {{ui:Een leveranciersbestand toevoegen…}} en kies het CSV-bestand. U kunt er meer dan één toevoegen: maximaal vijf bestanden, in totaal 2,000 rijen bewaard, eerst die welke overeenkomen met uw posten.
2. Elke post, tweede voorwaarde en samenstellingsonderdeel met een hoeveelheid wordt gekoppeld aan een rij op naam, of op SKU in de naam. Een vergelijkbare naam (de ene in de andere) wordt gebruikt wanneer er geen exacte is, en dat wordt gemeld.
3. Onder {{ui:Wat de opmeting nodig heeft}} komen de tekorten eerst: "Tekort 120 EA", "Levertijd 21 dagen", "In nabestelling", "Eenheid wijkt af", "Geen voorraadcijfer" of "Op voorraad". De behoefte omvat verlies. Een leveranciereenheid die niet die van de raming is (een ton tegen een voet) wordt gemeld en nooit vergeleken. Elke rij heeft {{ui:Het item selecteren}}, dat naar de post springt.
4. Stel {{ui:Langste gewenste wachttijd (dagen)}} in (standaard 14). Een post die niet op voorraad is en langer wacht dan dat, wordt aangegeven, en de samenvatting noemt de langste wachttijd die telt.
5. {{ui:Bestellijst (CSV)}} downloadt de tekortposten met het tekort, de leverancier en de levertijd. {{ui:Weglaten}} haalt een behoefte uit de controle (het is een stap die ongedaan gemaakt kan worden).

## Spreadsheetbestanden en de prijsbibliotheek

De lijst van een leverancier kan naast een CSV ook een Excel-werkmap (.xlsx) zijn: het eerste blad wordt gelezen, met dezelfde kolomnamen. Formules worden nooit uitgevoerd; de waarde die het bestand bevat, is wat wordt gelezen.

Zodra een bestand met prijzen is toegevoegd, zet {{ui:Prijzen naar de bibliotheek}} in het dialoogvenster de materiaalprijs van elk item in de [Bibliotheek](topic:price-library) dat het bestand prijst: dezelfde naam, en een eenheid die gelijk is (of niet is vermeld). Arbeid, verlies, hoogte en samenstellingen blijven zoals ze zijn, en de opmerking van het item vermeldt uit welk bestand de prijs komt. Een item in meter wordt niet geprijsd op basis van een lijst in voet, en een item zonder overeenkomende naam blijft ongewijzigd; de statusregel meldt hoeveel er om de eenheid zijn overgeslagen. Herprijs vanuit de Bibliotheek om de nieuwe prijzen in deze opmeting te brengen.

## In het paneel Problemen

Een tekort is een waarschuwing en een lange wachttijd is een opmerking, in het gedeelde paneel Problemen ("Voorraad leverancier"), zodat ze naast elke andere controle staan. U kunt er een met reden accepteren, en de acceptatie wordt in de opmeting bewaard.

## Met uw assistent

Als u assistenten toestaat in Instellingen, kunnen zij de controle lezen (supply_check). Een leveranciersbestand toevoegen doet u zelf.

## Goed om te weten

Voorraadcijfers zijn alleen zo actueel als het bestand dat u toevoegt. Voeg het bestand opnieuw toe om het te verversen: een bestand met dezelfde naam vervangt het eerdere.
