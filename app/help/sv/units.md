---
title: Enheter
summary: Enheterna en post kan redovisa i, enheterna formelvariablerna använder och hur imperiska och metriska enheter blandas.
keywords: enheter, lf, sf, sy, sq, kvadratyard, takrutor, acres, hektar, meter, kvadratmeter, ea, styck, metrisk, imperisk, omvandling, standardenhet
from: b7bf0528
---

## Postenheter

| Posttyp | Enhet | Namn |
|---|---|---|
| Linjär | LF | linjära fot (standard) |
| Linjär | m | meter |
| Area | SF | kvadratfot (standard) |
| Area | SY | kvadratyard |
| Area | SQ | takrutor (100 kvadratfot) |
| Area | ac | acres |
| Area | m² | kvadratmeter |
| Area | ha | hektar |
| Antal | EA | styck |

Ändra den med {{ui:Enhet}} i postredigeraren när som helst, även efter mätning; mängden omvandlas direkt.

Listan {{ui:Enhet}} visar de enheter som är påslagna i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}}, och alltid postens egen enhet. En ny post börjar i den längd- eller areaenhet som är stjärnmärkt där, om den är en av postens enheter; annars i LF eller SF. Se [Enheter, inmatade värden och enhetslistor](common:unit-lists).

## Enheter för formelvariablerna

| Postenhet | L, P, H | A |
|---|---|---|
| LF | fot | kvadratfot (väggarea) |
| m | meter | kvadratmeter (väggarea) |
| SF | fot | kvadratfot |
| SY | fot | kvadratyard |
| SQ | fot | takrutor |
| ac | fot | acres |
| m² | meter | kvadratmeter |
| ha | meter | hektar |

För SY-poster är `A` i kvadratyard medan `P` och `H` förblir i fot. En volym från en SY-post är `A * 9 * H / 27` kubikyard; att använda SF för bjälklag är enklare.

## Där enheterna är fasta

Vissa avläsningar använder alltid fot:

- realtidsvisningen i statusfältet medan du ritar (fot-tum, SF),
- **Vald markering** (fot-tum, LF och SF),
- kontrollresultatet (fot-tum, med decimalfot och meter),
- segmentlängder och omkretsar i kalkylbladets Markeringar-blad (fot-tum).

Postsummor, tabellen {{ui:Mängder}}, formler och Kalkyl-bladet använder postens egen enhet.

## Skalor och enheter är separata

Ett bladets skala säger hur stor ritningen är; en posts enhet säger hur den ska redovisas. En metrisk ritning i `1:100` kan mätas i LF, och en imperisk ritning i m². Kalibrering accepterar vilken enhet som helst: `24'-6"`, `7.5 m`, `7500 mm`.

## Precision

TakeoffCraft mäter exakt utifrån de punkter du klickar, inklusive verkliga båglängder och areor, och avrundar inte mängder. Visningen avrundar längder till 1/16 tum och decimaltal till två decimaler. Pengar avrundas bara i de utsträckta beloppen, till närmaste cent.
