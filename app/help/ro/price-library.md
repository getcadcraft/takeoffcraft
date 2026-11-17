---
title: Biblioteca de prețuri
summary: Păstrați articolele, tarifele și ansamblurile într-o bibliotecă, importați-o dintr-un CSV sau dintr-un deviz anterior, adăugați articole din ea în orice antemăsurătoare și actualizați prețurile unei antemăsurători din ea.
keywords: bibliotecă, pachete pe meserii, listă de prețuri, carte de prețuri, bază de date costuri, import csv, tarife, ansambluri, reutilizare, articole model, actualizare prețuri, reprețuire
from: 37356c68
---

**Biblioteca de prețuri** păstrează articolele pe care le folosiți lucrare de lucrare: tipul, unitatea, înălțimea, pierderea, tarifele pentru material și manoperă și ansamblul lor. Ea este păstrată în acest browser, separat de orice antemăsurătoare, astfel încât fiecare antemăsurătoare deschisă aici o poate folosi.

Deschideți-o cu {{ui:Library}} din capul panoului {{ui:Items}}.

## Completarea bibliotecii

- {{ui:Import CSV…}} citește o foaie de calcul salvată ca CSV (vezi coloanele de mai jos). Articolele al căror nume și tip există deja în bibliotecă sunt înlocuite; restul sunt adăugate. Rândurile care nu pot fi citite sunt sărite, iar aplicația spune care și de ce.
- {{ui:Adăugare articolele acestei antemăsurători}} copiază fiecare articol al antemăsurătorii deschise în bibliotecă, cu tarifele și ansamblul său (nu cu marcajele).
- Devizul CSV exportat de TakeoffCraft ([Exportul devizului](topic:export-estimate)) se importă așa cum este: prețurile ultimei lucrări pregătesc următoarea.

- {{ui:Pachete pe meserii…}} adaugă ansambluri gratuite pentru o meserie, precum gips-carton, instalații electrice sau beton, fără prețuri. Consultați [Pachete pe meserii](topic:trade-packs).

{{ui:Export CSV}} salvează biblioteca ca CSV, pentru a păstra o copie, a o edita într-o foaie de calcul sau a o da unui coleg. {{ui:Clear}} o golește (apăsați de două ori).

:::note
Biblioteca se află în spațiul de stocare al acestui browser. Alt browser, alt computer sau o fereastră privată au propria bibliotecă (sau niciuna). Exportați-o pentru a o muta.
:::

## Folosirea ei într-o antemăsurătoare

- Bifați articole (scrieți în {{ui:Find in the library}} pentru a restrânge lista) și alegeți {{ui:Add to takeoff}}. Ele sunt adăugate cu ansamblurile lor, într-un singur pas pe care {{key:Mod+Z}} îl anulează. Un nume deja existent în antemăsurătoare primește un număr, precum `Carpet (2)`.
- {{ui:Update prices}} dă articolelor antemăsurătorii pierderea și tarifele din bibliotecă, pentru fiecare articol al cărui nume și tip se potrivesc cu un articol din bibliotecă, și la fel pentru componentele ansamblului cu același nume. Înălțimile, unitățile și formulele rămân neschimbate. Un singur {{key:Mod+Z}} readuce toate prețurile vechi.

## Coloanele CSV

Primul rând numește coloanele, în orice ordine; celelalte coloane sunt ignorate.

| Coloană | Ce se trece în ea |
|---|---|
| Item (or Name) | Numele articolului. Obligatoriu. |
| Type | Linear, Area sau Count (LF, SF și EA funcționează și ele). Lăsat gol, unitatea decide. |
| Unit | LF sau m; SF, SY sau m²; EA. Gol: unitatea obișnuită a tipului. |
| Waste % | `10` sau `10%`. |
| Material per unit, Labor per unit | Tarife precum `2.10` sau `$1,250`. |
| Height (or Depth) | `9'-0"`, `9` sau `2.7` pentru unități metrice. |
| Component, Formula | Un rând cu un nume de Component (sau cu tipul `Component`) face parte din ansamblul articolului de deasupra lui. Unitatea, pierderea și tarifele sale sunt proprii; formula sa folosește literele articolului, vezi [Ansambluri și formule](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Virgule, punct și virgulă sau tabulatoare între coloane funcționează, toate.
