---
title: Eksporta kolonnas
summary: Katra XLSX un CSV eksporta darblapa un kolonna, kā arī formulas, ko satur tāmes darblapa.
keywords: eksports, kolonnas, xlsx, csv, darblapa, tāmes lapa, pēc lapas, atzīmes, mērogi, formulas, lauki
from: fed07851
---

## Tāme (XLSX darblapa un CSV)

Viena rinda katram vienumam, pēc tās rinda katram tā mezgla komponentam (ar atkāpi). Pēc tam tukša rinda un kopējā summa.

| Kolonna | Saturs | XLSX failā |
|---|---|---|
| A Vienums | Vienuma nosaukums (treknrakstā) vai komponenta nosaukums (ar atkāpi) | Teksts |
| B Veids | Lineārs, Laukums, Skaits vai Komponents | Teksts |
| C Mērvienība | LF, m, SF, SY, m², EA vai komponenta mērvienība | Teksts |
| D Daudzums | Izmērītais kopējais daudzums vai formulas rezultāts | Skaitlis |
| E Zudumi % | Zudumi | Procenti (0.10 = 10%) |
| F Daudzums ar zudumiem | Daudzums × (1 + zudumi) | Formula `D*(1+E)` |
| G Materiāls par vienību | Materiāla likme | Skaitlis |
| H Darbs par vienību | Darba likme | Skaitlis |
| I Materiāls | Izvērstais materiāls | Formula `ROUND(F*G,2)` |
| J Darbs | Izvērstais darbs | Formula `ROUND(F*H,2)` |
| K Kopā | Materiāls + darbs | Formula `I+J` |
| L Piezīmes | Izmantotā formula, formulas kļūda, atzīmes lapās bez mēroga, sienas laukums, perimetrs | Teksts |

Kopējās summas rindā: `SUM` kolonnām I, J un K pār visām iepriekšējām rindām, un piezīmēs "Nepilnīgs: skatiet piezīmes augstāk", ja kaut kas ir izlaists.

Rindai ar formulas kļūdu nav daudzuma vai summu; tās piezīme norāda kļūdu. Galvenes rinda ir fiksēta.

CSV failā tās pašas kolonnas satur vienkāršas vērtības, Zudumi % ir procentu skaitlis (10 nozīmē 10%), un nauda ir dolāros ar diviem decimāldaļām. Teksts, ko izklājlapa varētu uzskatīt par formulu (sākas ar `=`, `+`, `-` vai `@`), tiek papildināts ar vadošo `'`, lai tas paliktu teksts.

## Pēc lapas (tikai XLSX)

| Kolonna | Saturs |
|---|---|
| Lapa | Lapas nosaukums (ar PDF nosaukumu, ja tas nav atvērts) |
| Vienums | Vienuma nosaukums |
| Daudzums | Šī vienuma daudzums šajā lapā tā mērvienībā |
| Mērvienība | Vienuma mērvienība |
| Atzīmes | Atzīmju skaits |

## Atzīmes (tikai XLSX)

Viena rinda katrai atzīmei.

| Kolonna | Saturs |
|---|---|
| Lapa | Lapas nosaukums |
| Vienums | Vienuma nosaukums |
| Veids | Lineārs, Laukums vai Skaits |
| Daudzums | Garums, neto laukums vai 1 |
| Mērvienība | LF vai m; SF, SY vai m²; EA |
| Detalizācija | Lineārie: segmentu garumi, atskaitītie atzīmēti kā "(deduct)", un "atskaita (garums) no uzzīmētā (garums)". Laukumi: bruto un izgriezumu laukumi, ja ir izgriezumi, un perimetrs. "Lapai nav mēroga" atzīmēm bez mēroga. |
| Piedāvājuma laukums | Tikai tad, ja apjomu aprēķinā ir piedāvājuma laukumi: atzīmes laukums vai "Nav piedāvājuma laukuma" |

## Pēc piedāvājuma laukuma (tikai XLSX, ja apjomu aprēķinā ir piedāvājuma laukumi)

| Kolonna | Saturs |
|---|---|
| Piedāvājuma laukums | Laukuma nosaukums vai "Nav piedāvājuma laukuma" |
| Vienums | Vienums vai komponents zem tā ar atkāpi |
| Mērvienība | Vienuma vai komponenta mērvienība |
| Daudzums | Izmērīts šajā laukumā (komponentiem: formula pēc laukuma kopsummām) |
| Daudzums ar zudumiem | Daudzums × (1 + zudumi) |
| Materiāls, Darbs, Kopā | Izvērsts līdz centam, kā tāmē |
| Piezīmes | Formula, kļūdas un atzīmes bez mēroga, kā tāmē |

Katrs laukums beidzas ar rindu "(nosaukums) starpsumma", kuras izmaksas ir `SUM` formulas pār tās rindām; pēdējā rinda **Visi piedāvājuma laukumi** saskaita starpsummas. Darblapai **Atzīmes** tad ir septītā kolonna **Piedāvājuma laukums**.

## Mērogi (tikai XLSX)

Viena rinda katrai lapai, kurai ir mērogs vai atzīmes.

| Kolonna | Saturs |
|---|---|
| Lapa | Lapas nosaukums |
| Mērogs | Priekšiestatījuma nosaukums, kalibrētais mērogs vai "Nav mēroga" |
| Kā | "Priekšiestatījums" vai "Kalibrēts pēc attāluma, ko ievadījāt" |
| Pēdas uz PDF vienību | Precīzais mēroga koeficients, ko izmanto TakeoffCraft |

## Failu nosaukumi

- `(nosaukums).xlsx` un `(nosaukums).csv`, kur nosaukums nāk no pirmā PDF, kas atvērts apjomu aprēķinā.
- CSV ir UTF-8 ar baitu secības zīmi un Windows rindu beigām, ko lasa izklājlapu programmas visās platformās.
