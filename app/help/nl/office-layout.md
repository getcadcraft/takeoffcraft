---
title: "De kantoorindeling: groepering, subtotalen, titel en koppen uit uw Standaardbeleid"
summary: Schakel de add-on Standaardbeleid in, dan krijgen de raming, de hoeveelheden per blad, de exports en wat een assistent leest de indeling van uw kantoor, dezelfde indeling die de staten van BimCraft gebruiken.
keywords: kantoornorm, kantoorindeling, standaardbeleid, add-on, indeling van staten, groeperen op type, groeperen op blad, subtotaal, totalen, titel, koppen, hoofdletters, indeling raming, exportindeling, instellingen
from: cfd2f30a
---

## Wat u gaat doen

Laat TakeoffCraft zijn tabellen opmaken zoals uw kantoor ze uitgeeft, zonder dat u dat bij elke opmeting opnieuw instelt. De indeling wordt één keer ingesteld, in het Standaardbeleid, en geldt voor elke app op deze computer: wat u in BimCraft of CadCraft instelt, gebruikt TakeoffCraft, en andersom.

## Stappen

1. Open **Instellingen › Add-ons** en schakel **Standaardbeleid** in. Dat staat uit tot u het aanzet; staat het uit of is er niets ingesteld, dan is TakeoffCraft precies zoals voorheen.
2. Open **Instellingen › Globaal › Standaardbeleid** en zoek **Indeling van staten (de kantoornorm)**:

| Beleid | Wat het in TakeoffCraft doet |
|---|---|
| Staten groeperen op | **Type** groepeert de raming op postype (Lineair, Oppervlakte, Telling, Getypeerde hoeveelheid). **Niveau** groepeert de hoeveelheden per blad op hun blad. **Ruimte** en **Geen groepering** laten beide zonder groepering |
| Totalen in staten | **Een subtotaal onder elke groep en een totaal** voegt onder elke groep een subtotaal toe. Het totaal van het project blijft altijd staan |
| Titel van de staat | Een regel boven de tabel, bijvoorbeeld `{schedule}: office layout` |
| Kolomkoppen | Zoals geschreven, IN HOOFDLETTERS of Met Hoofdletters |

3. Sluit Instellingen. De tabellen volgen meteen.

## Wat de indeling bepaalt

- **Hoeveelheden › Per post** en **Per blad**: groepskoppen, een subtotaal onder elke groep, de titel en de hoofdletterstijl van de koppen. Een regel onder de titel zegt welke onderdelen uw kantoornorm heeft ingesteld. De rijen zijn dezelfde rijen: u vult nog steeds tarieven en verlies in en klikt op cijfers om hun markeringen te selecteren. Een component of een tweede voorwaarde blijft onder zijn post staan.
- **De geëxporteerde raming** (CSV en XLSX): dezelfde groepen en subtotalen. In de werkmap is een subtotaal een `SUBTOTAL`-formule over zijn groep, en het totaal van het project is er ook een, zodat niets dubbel wordt geteld.
- **Wat een assistent leest**: `takeoff_estimate` en `takeoff_quantities` (per blad) voegen een `layout`-blok toe met de groepen, de rijen en de subtotalen, en vermelden welke onderdelen het kantoor heeft ingesteld.

## Wat zijn eigen indeling houdt

- **Hoeveelheden › Per gebied** geeft zijn eigen groepering (per inschrijvingsgebied) en behoudt die.
- Het **totaal van het project**, de markups van de inschrijvingssamenvatting en de alternatieven worden niet opnieuw gegroepeerd.
- Een groepering waarvoor de tabel geen kolom heeft, wordt weggelaten: de raming heeft geen niveau, de hoeveelheden per blad hebben geen type.

## Goed om te weten

- Het beleid wordt in deze browser bewaard voor elke CadCraft-app en reist mee in het bestand Standaardbeleid (**Opslaan naar een bestand** / **Laden uit een bestand** op dezelfde plek), zodat een kantoor één bestand deelt.
- Een raming die als CSV met groepen is geëxporteerd, is bedoeld om te lezen. Om een raming terug te brengen als prijsbibliotheek, exporteert u haar zonder ingestelde groepering.
- De kant van BimCraft van dezelfde norm: staten, opzetten en exports. TakeoffCraft heeft nog geen eigen beleid, dus er is geen sectie Standaardbeleid onder Instellingen › TakeoffCraft.
