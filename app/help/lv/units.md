---
title: Mērvienības
summary: Mērvienības, kurās vienums var ziņot, mērvienības, ko izmanto tā formulu mainīgie, un kā angļu un metriskās sistēmas savienojas.
keywords: mērvienības, lf, sf, sy, sq, kvadrātjardi, jumta kvadrāti, akri, hektāri, metri, kvadrātmetri, ea, katrs, metriskā, angļu, pārveidošana, noklusējuma mērvienība
from: b7bf0528
---

## Vienuma mērvienības

| Vienuma tips | Mērvienība | Nosaukums |
|---|---|---|
| Lineārs | LF | lineārās pēdas (noklusējums) |
| Lineārs | m | metri |
| Laukums | SF | kvadrātpēdas (noklusējums) |
| Laukums | SY | kvadrātjardi |
| Laukums | SQ | jumta kvadrāti (100 kvadrātpēdas) |
| Laukums | ac | akri |
| Laukums | m² | kvadrātmetri |
| Laukums | ha | hektāri |
| Skaitīt | EA | katrs |

Mainiet to ar {{ui:Mērvienība}} vienuma redaktorā jebkurā laikā, pat pēc mērīšanas; daudzums tiek uzreiz pārveidots.

Saraksts {{ui:Mērvienība}} rāda mērvienības, kas ieslēgtas {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Mērvienības}}, un vienmēr vienuma pašu mērvienību. Jauns vienums sākas ar garuma vai laukuma mērvienību, kas tur atzīmēta ar zvaigznīti, ja tā ir vienuma mērvienību vidū; citādi ar LF vai SF. Skatiet [Mērvienības, ievadītās vērtības un mērvienību saraksti](common:unit-lists).

## Formulu mainīgo mērvienības

| Vienuma mērvienība | L, P, H | A |
|---|---|---|
| LF | pēdas | kvadrātpēdas (sienas laukums) |
| m | metri | kvadrātmetri (sienas laukums) |
| SF | pēdas | kvadrātpēdas |
| SY | pēdas | kvadrātjardi |
| SQ | pēdas | kvadrāti |
| ac | pēdas | akri |
| m² | metri | kvadrātmetri |
| ha | metri | hektāri |

SY vienumiem `A` ir kvadrātjardos, bet `P` un `H` paliek pēdās. Tilpums no SY vienuma ir `A * 9 * H / 27` kubikjardi; plātnēm vienkāršāk izmantot SF.

## Kur mērvienības ir fiksētas

Daži rādījumi vienmēr izmanto pēdas:

- tiešais rādījums statusa joslā zīmēšanas laikā (pēdas-collas, SF),
- **Atlasītā atzīme** (pēdas-collas, LF un SF),
- pārbaudes rezultāts (pēdas-collas, ar decimālām pēdām un metriem),
- posmu garumi un perimetri izklājlapas lapā Marks (pēdas-collas).

Vienumu kopsummas, tabula {{ui:Daudzumi}}, formulas un tāmes lapa izmanto paša vienuma mērvienību.

## Mērogi un mērvienības ir atsevišķi

Lapas mērogs norāda, cik liels ir rasējums; vienuma mērvienība norāda, kā to ziņot. Metrisko rasējumu `1:100` var aprēķināt LF, bet angļu rasējumu — m². Kalibrēšana pieņem jebkuru mērvienību: `24'-6"`, `7.5 m`, `7500 mm`.

## Precizitāte

TakeoffCraft mēra precīzi no punktiem, uz kuriem noklikšķināt, tostarp patiesos loku garumus un laukumus, un daudzumus nenoapaļo. Rādījumā garumi tiek noapaļoti līdz 1/16 collai un decimāldaļas līdz diviem cipariem. Nauda tiek noapaļota tikai pagarinātajās summās, līdz centam.
