---
title: Stĺpce exportu
summary: Každý pracovný hárok a stĺpec exportu XLSX a CSV, s vzorcami, ktoré hárok Rozpočet obsahuje.
keywords: export, stĺpce, xlsx, csv, pracovný hárok, rozpočet, podľa listu, značky, mierky, vzorce, polia
from: fed07851
---

## Rozpočet (pracovný hárok XLSX a CSV)

Jeden riadok na položku, za ním riadok na každý komponent jej zostavy (odsadený). Potom prázdny riadok a celkový súčet.

| Stĺpec | Obsah | V XLSX |
|---|---|---|
| A Položka | Názov položky (tučne) alebo názov komponentu (odsadený) | Text |
| B Typ | Dĺžka, Plocha, Počet alebo Komponent | Text |
| C Jednotka | LF, m, SF, SY, m², EA alebo jednotka komponentu | Text |
| D Množstvo | Nameraný súčet alebo výsledok vzorca | Číslo |
| E Odpad % | Odpad | Percento (0.10 = 10 %) |
| F Množstvo s odpadom | Množstvo × (1 + odpad) | Vzorec `D*(1+E)` |
| G Materiál na jednotku | Jednotková cena materiálu | Číslo |
| H Práca na jednotku | Jednotková cena práce | Číslo |
| I Materiál | Rozšírený materiál | Vzorec `ROUND(F*G,2)` |
| J Práca | Rozšírená práca | Vzorec `ROUND(F*H,2)` |
| K Spolu | Materiál + práca | Vzorec `I+J` |
| L Poznámky | Použitý vzorec, chyba vzorca, značky na listoch bez mierky, plocha steny, obvod | Text |

Riadok celkového súčtu: `SUM` stĺpcov I, J a K cez všetky riadky vyššie a v Poznámkach „Neúplné: pozri poznámky vyššie“, keď sa niečo vynechalo.

Riadok s chybou vzorca nemá množstvo ani sumy; jeho poznámka uvádza chybu. Hlavičkový riadok je ukotvený.

V CSV tie isté stĺpce obsahujú prosté hodnoty, Odpad % je číslo percent (10 pre 10 %) a peniaze sú v dolároch s dvoma desatinnými miestami. Text, ktorý by tabuľkový program mohol považovať za vzorec (začína `=`, `+`, `-` alebo `@`), dostane úvodné `'`, aby zostal textom.

## Podľa listu (iba XLSX)

| Stĺpec | Obsah |
|---|---|
| List | Názov listu (s názvom PDF, ak nie je otvorené) |
| Položka | Názov položky |
| Množstvo | Množstvo tejto položky na tomto liste v jej jednotke |
| Jednotka | Jednotka položky |
| Značky | Počet značiek |

## Značky (iba XLSX)

Jeden riadok na značku.

| Stĺpec | Obsah |
|---|---|
| List | Názov listu |
| Položka | Názov položky |
| Typ | Dĺžka, Plocha alebo Počet |
| Množstvo | Dĺžka, čistá plocha alebo 1 |
| Jednotka | LF alebo m; SF, SY alebo m²; EA |
| Podrobnosti | Dĺžka: dĺžky úsekov, odpočítané označené „(odpočet)“ a „odpočíta (dĺžka) z (dĺžka) nakreslenej“. Plocha: hrubé a plochy výrezov, ak sú výrezy, a obvod. „List nemá mierku“ pre značky bez mierky. |
| Oblasť ponuky | Iba ak výkaz obsahuje oblasti ponuky: plocha značky alebo „Bez oblasti ponuky“ |

## Podľa oblasti ponuky (iba XLSX, keď výkaz obsahuje oblasti ponuky)

| Stĺpec | Obsah |
|---|---|
| Oblasť ponuky | Názov oblasti alebo „Bez oblasti ponuky“ |
| Položka | Položka alebo odsadený komponent pod ňou |
| Jednotka | Jednotka položky alebo komponentu |
| Množstvo | Nameraná v tejto oblasti (komponenty: vzorec na súčtoch oblasti) |
| Množstvo s odpadom | Množstvo × (1 + odpad) |
| Materiál, Práca, Spolu | Rozšírené na cent, ako v hárku Rozpočet |
| Poznámky | Vzorec, chyby a značky bez mierky, ako v hárku Rozpočet |

Každá oblasť končí riadkom „medzisúčet (názov)“, ktorého náklady sú vzorce `SUM` cez jej riadky; posledný riadok **Všetky oblasti ponuky** sčítava medzisúčty. Hárok **Značky** potom má siedmy stĺpec **Oblasť ponuky**.

## Mierky (iba XLSX)

Jeden riadok na list, ktorý má mierku alebo značky.

| Stĺpec | Obsah |
|---|---|
| List | Názov listu |
| Mierka | Názov predvoľby, kalibrovaná mierka alebo „Bez mierky“ |
| Spôsob | „Predvoľba“ alebo „Kalibrované podľa (vzdialenosti, ktorú ste zadali)“ |
| Stopy na jednotku PDF | Presný koeficient mierky, ktorý používa TakeoffCraft |

## Názvy súborov

- `(name).xlsx` a `(name).csv`, kde názov pochádza z prvého PDF otvoreného vo výkaze.
- CSV je UTF-8 so značkou poradia bajtov (BOM) a koncami riadkov Windows, ktoré tabuľkové programy na každej platforme čítajú.
