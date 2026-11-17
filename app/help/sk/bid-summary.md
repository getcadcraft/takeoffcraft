---
title: Súhrn ponuky a návrh
summary: Pridajte odvody mzdy, daň z predaja, réžiu, zisk a záruku k odhadu, napíšte zahrnuté a nezahrnuté položky a stiahnite PDF návrhu na odoslanie.
keywords: ponuka, odvody mzdy, odvod, mzdy, návrh, cenová ponuka, réžia, zisk, prirážka, marža, daň z predaja, záruka, zahrnuté položky, nezahrnuté položky, podmienky, podpis, klient, cena
from: 3208a561
---

Odhad oceňuje to, čo ste odmerali. **Súhrn ponuky** z neho urobí cenu: pripočíta daň z predaja, réžiu, zisk a záruku a vytvorí **PDF návrhu** so zahrnutými a nezahrnutými položkami.

Otvorte ho z {{ui:Export}} › {{ui:Súhrn ponuky a návrh…}}. Všetko v ňom sa uloží spolu s meraním a každú zmenu možno vrátiť späť.

## Prirážky

Zadajte percento do ktorejkoľvek z piatich (ostatné nechajte na 0). Počítajú sa v tomto poradí, každá z hodnoty nad sebou:

| Riadok | Vypočítané ako |
|---|---|
| Materiál, Práca | Súčty odhadu (základná ponuka, keď má meranie [alternatívy](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Odvody mzdy | % odvodov × práca: dane zo mzdy, poistenie a benefity z miezd vašich tímov. |
| **Náklady** | Materiál + práca + odvody mzdy. |
| Daň z predaja z materiálu | % dane × materiál. |
| Réžia | % réžie × (náklady + daň). |
| Zisk | % zisku × (náklady + daň + réžia). |
| Záruka | % záruky × všetko vyššie. |
| **Ponuka** | Súčet riadkov. |

Každý riadok sa zaokrúhli na cent. Zošit ukazuje rovnaké riadky pod celkovou sumou listu Odhad, ako živé vzorce. Súhrn sa aktualizuje, keď píšete: {{key:Enter}} potvrdí percento. Každá alternatíva sa zobrazuje s rovnakými prirážkami na svoje vlastné náklady, takže vlastník vidí, čo jej výber naozaj zmení.

## Návrh

Vyplňte, čo má návrh obsahovať:

- **Projekt** (názov merania, ak je prázdny), **Pre** (klient) a **Od** (vaša firma).
- **Zahrnuté** a **Nezahrnuté** položky: jedna na riadok; úvodná pomlčka alebo odrážka je v poriadku.
- **Podmienky**: voľný text, napríklad "Platné 30 dní."
- **Vypísať položky a množstvá**: rozsah položku po položke s množstvami a bez cien. Zrušte zaškrtnutie pre paušálny návrh.

Vyberte {{ui:PDF ponuky}}. PDF (`<takeoff> - proposal.pdf`) obsahuje dátum, cenový blok s každou prirážkou a ponukou, alternatívy, rozsah, zahrnuté a nezahrnuté položky, podmienky a riadky na podpis a dátum. Ak sa niektoré množstvá nedali odmerať (list bez mierky), uvedie to pod cenou.

## V exportoch

Keď má meranie súhrn ponuky, CSV na konci obsahuje ho a zošit dostane list **Súhrn ponuky** s každým riadkom, jeho percentom a sumou. Pozrite [Export odhadu](topic:export-estimate).
