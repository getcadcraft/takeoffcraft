---
title: Chýbajúce jednotkové ceny a podpísanie rozpočtu
summary: Zistite, ktoré riadky rozpočtu majú množstvo a žiadnu jednotkovú cenu, podpíšte rozpočet svojím menom, aby súbor zaznamenal, kto, kedy a aký celkový súčet, a kliknutím na údaj vyberte značky, z ktorých pochádza.
keywords: rozpočet, podpis, podpísať, schváliť, schválenie, chýbajúca cena, bez ceny, neocenené, jednotková cena, cena, celkom, geodet, záznam, audit, vybrať značky, údaj, sledovať
from: 9acf71ef
---

## Čo urobíte

Skontrolujte, či je každý riadok rozpočtu ocenený, a potom ho podpíšte svojím menom. Súbor výkazu zaznamená, kto podpísal, kedy a za aký celkový súčet.

## Riadky bez jednotkovej ceny

V **Quantities › By item** riadok, ktorý má množstvo a žiadnu materiálovú ani pracovnú jednotkovú cenu, nesie **bez ceny** a lišta nad tabuľkou povie, koľko ich je. Taký riadok nepridáva nič do súčtu. Položka bez vlastnej ceny sa neoznačí, ak je ocenený jeden z jej komponentov: zostava sa oceňuje cez svoje časti. Exportovaný rozpočet v stĺpci Poznámky každého takého riadku uvedie **Bez ceny** a ich počet.

## Podpísanie rozpočtu

1. Kliknite na **Podpísať rozpočet** nad tabuľkou Quantities.
2. Dialógové okno uvedie celkový súčet, ktorý podpisujete, a vypíše riadky bez jednotkovej ceny. Zadajte svoje meno a ak chcete, aj svoju funkciu.
3. Kliknite na **Podpísať**. Lišta teraz hovorí "Podpísal … dňa …" s celkovým súčtom. Uložte výkaz, aby sa to zachovalo v súbore.

Podpis patrí k číslam, ktoré podpisujete. Každá neskoršia zmena množstva, jednotkovej ceny alebo riadku ho zruší a TakeoffCraft vás na to upozorní. Späť vráti rozpočet, ktorý ste podpísali, aj s jeho podpisom. Premenovanie riadku nie je zmena čísla. **Odstrániť podpis** ho zruší.

Výkaz uložený mimo TakeoffCraft po podpise sa otvorí bez podpisu s poznámkou o tom. Exportovaný rozpočet (CSV a XLSX) uvádza podpis pod súčtami.

Podpisuje iba osoba. AI asistent dokáže zistiť, či je rozpočet podpísaný, a ktoré jednotkové ceny chýbajú; nemá spôsob, ako podpísať.

## Kliknutím na údaj zistite, odkiaľ pochádza

Kliknite na množstvo alebo sumu riadku, aby sa vybrali značky, z ktorých bol nameraný. Ak sú na inom liste, tento list sa otvorí. Kliknutím na údaj riadku **Celkom za zákazku** vyberiete všetky značky na liste. Zadané množstvo nemá žiadne značky.

## Dobré vedieť

- Podpis zaznamenáva meno tak, ako bolo zadané. Je to záznam v súbore, nie elektronický podpis.
- Ak sú vo výkaze balíky ponuky pridelené subdodávateľom alebo alternatívy, podpísaný súčet je základná ponuka zobrazená ako **Celkom za zákazku**.
