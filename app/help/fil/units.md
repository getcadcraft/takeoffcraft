---
title: Mga unit
summary: Ang mga unit na maaaring iulat ng item, ang mga unit na ginagamit ng mga formula variable nito, at kung paano nagsasama ang imperial at metric.
keywords: units, lf, sf, sy, sq, square yards, roofing squares, acres, hectares, metro, square meters, ea, bawat isa, metric, imperial, conversion, default na unit
from: b7bf0528
---

## Mga unit ng item

| Uri ng item | Unit | Pangalan |
|---|---|---|
| Linear | LF | linear feet (default) |
| Linear | m | metro |
| Area | SF | square feet (default) |
| Area | SY | square yards |
| Area | SQ | roofing squares (100 square feet) |
| Area | ac | acres |
| Area | m² | square meters |
| Area | ha | ektarya |
| Count | EA | bawat isa |

Baguhin ito gamit ang {{ui:Unit}} sa item editor anumang oras, kahit pagkatapos sumukat; agad na nako-convert ang dami.

Ipinapakita ng listahan ng {{ui:Unit}} ang mga unit na naka-on sa {{ui:Settings}} › {{ui:General}} › {{ui:Units}}, at palagi ang sariling unit ng item. Nagsisimula ang bagong item sa unit ng haba o lawak na may bituin doon, kapag isa ito sa mga unit ng item; kung hindi, sa LF o SF. Tingnan ang [Mga unit, typed na value at mga listahan ng unit](common:unit-lists).

## Mga unit ng formula variable

| Unit ng item | L, P, H | A |
|---|---|---|
| LF | feet | square feet (lawak ng pader) |
| m | metro | square meters (lawak ng pader) |
| SF | feet | square feet |
| SY | feet | square yards |
| SQ | feet | squares |
| ac | feet | acres |
| m² | metro | square meters |
| ha | metro | ektarya |

Para sa mga SY item, nasa square yards ang `A` habang nananatili sa feet ang `P` at `H`. Ang volume mula sa SY item ay `A * 9 * H / 27` cubic yards; mas simple ang paggamit ng SF para sa slab.

## Saan nakapirmi ang mga unit

Ang ilang readout ay laging nasa feet:

- ang live readout sa status bar habang gumuguhit (feet-inches, SF),
- **Selected mark** (feet-inches, LF at SF),
- ang resulta ng check (feet-inches, na may decimal feet at metro),
- haba ng segment at perimeter sa Marks worksheet ng spreadsheet (feet-inches).

Ginagamit ng mga kabuuan ng item, ng {{ui:Quantities}} table, ng mga formula at ng Estimate worksheet ang sariling unit ng item.

## Magkahiwalay ang scale at unit

Sinasabi ng scale ng sheet kung gaano kalaki ang drawing; sinasabi ng unit ng item kung paano ito iuulat. Maaaring kunin sa LF ang metric drawing na nasa `1:100`, at sa m² ang imperial drawing. Tumatanggap ang calibration ng anumang unit: `24'-6"`, `7.5 m`, `7500 mm`.

## Katumpakan

Sumusukat nang eksakto ang TakeoffCraft mula sa mga punto na iyong i-click, kasama ang totoong haba at lawak ng arko, at hindi nito binibilog ang mga dami. Ibinibilog ng display ang mga haba sa 1/16 inch at ang mga decimal sa dalawang lugar. Ibinibilog lang ang pera sa mga extended amount, sa sentimo.
