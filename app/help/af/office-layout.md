---
title: "Die kantooruitleg: groepering, subtotale, titel en opskrifte uit jou Verstekbeleide"
summary: Skakel die Verstekbeleide-byvoeging aan en die skatting, die hoeveelhede per blad, die uitvoere en wat 'n assistent lees neem jou kantoor se roosteruitleg aan, dieselfde een wat BimCraft se roosters neem.
keywords: kantoorstandaard, kantooruitleg, verstekbeleide, byvoeging, roosteruitleg, groepeer volgens soort, groepeer volgens blad, subtotaal, totale, titel, opskrifte, hoofletters, skattinguitleg, uitvoeruitleg, instellings
from: cfd2f30a
---

## Wat jy sal doen

Laat TakeoffCraft sy tabelle uitlê soos jou kantoor dit uitreik, sonder om dit in elke hoeveelheidsopname op te stel. Die uitleg word een keer in **Verstekbeleide** gestel en geld vir elke toepassing op hierdie rekenaar: wat jy in BimCraft of CadCraft stel, is wat TakeoffCraft gebruik, en omgekeerd.

## Stappe

1. Open **Instellings › Byvoegings** en skakel **Verstekbeleide** aan. Dit is af totdat jy dit doen; as dit af is, of as niks gestel is nie, is TakeoffCraft presies soos dit was.
2. Open **Instellings › Globaal › Verstekbeleide** en vind **Roosteruitleg (die kantoorstandaard)**:

| Beleid | Wat dit in TakeoffCraft doen |
|---|---|
| Groepeer roosters volgens | **Soort** groepeer die skatting volgens itemsoort (Lineêr, Oppervlakte, Telling, Getikte hoeveelheid). **Vlak** groepeer die hoeveelhede per blad volgens hul blad. **Vertrek** en **Geen groepering** laat albei ongegroepeer |
| Totale in roosters | **'n Subtotaal onder elke groep en 'n totaal** voeg 'n subtotaal onder elke groep by. Die werkstotaal bly altyd |
| Roostertitel | 'n Reël bo die tabel, byvoorbeeld `{schedule}: office layout` |
| Kolomopskrifte | Soos geskryf, IN HOOFLETTERS of Met Hoofletters |

3. Maak Instellings toe. Die tabelle volg dadelik.

## Wat die uitleg gebruik

- **Hoeveelhede › Volgens item** en **Volgens blad**: groepopskrifte, 'n subtotaal onder elke groep, die titel en die opskrifgeval. 'n Reël onder die titel sê watter dele jou kantoorstandaard gestel het. Die rye is dieselfde rye: jy tik steeds tariewe en verlies daarin en klik syfers om hul merke te kies. 'n Komponent of 'n tweede voorwaarde bly onder sy item.
- **Die uitgevoerde skatting** (CSV en XLSX): dieselfde groepe en subtotale. In die werkboek is 'n subtotaal 'n `SUBTOTAL`-formule oor sy groep, en die werkstotaal is ook een, sodat niks twee keer getel word nie.
- **Wat 'n assistent lees**: `takeoff_estimate` en `takeoff_quantities` (per blad) voeg 'n `layout`-blok by met die groepe, die rye en die subtotale, en sê watter dele die kantoor gestel het.

## Wat sy eie behou

- **Hoeveelhede › Volgens oppervlakte** stel sy eie groepering (volgens tenderarea) en behou dit.
- Die **werkstotaal**, die opmerkings van die tenderopsomming en die alternatiewe word nie hergroepeer nie.
- 'n Groepering waarvoor die tabel geen kolom het nie, word weggelaat: die skatting het geen vlak nie, die hoeveelhede per blad het geen soort nie.

## Goed om te weet

- Die beleide word in hierdie blaaier vir elke CadCraft-toepassing gehou en reis saam in die Verstekbeleide-lêer (**Stoor na 'n lêer** / **Laai van 'n lêer** op dieselfde plek), sodat 'n kantoor een lêer deel.
- 'n Skatting wat as CSV met groepe daarin uitgevoer word, is vir lees. Om 'n skatting as 'n prysbiblioteek terug in te bring, voer dit uit sonder enige groepering.
- BimCraft se kant van dieselfde standaard: roosters, opstellings en uitvoere. TakeoffCraft het nog geen beleide van sy eie nie, so daar is geen Verstekbeleide-afdeling onder Instellings › TakeoffCraft nie.
