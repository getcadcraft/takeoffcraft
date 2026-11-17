---
title: "Price library"
summary: "Itago ang iyong mga item, rate at assembly sa isang library, i-import ito mula sa CSV o nakaraang estimate, magdagdag ng mga item mula rito sa anumang takeoff, at i-update ang presyo ng takeoff mula rito."
keywords: "library, trade packs, price list, price book, cost database, import csv, rates, assemblies, muling gamitin, template items, update prices, reprice"
from: 37356c68
---

Hawak ng **price library** ang mga item na ginagamit mo sa bawat trabaho: ang uri, unit, taas, waste, material at labor rate, at ang assembly nito. Nakatago ito sa browser na ito, hiwalay sa anumang takeoff, kaya magagamit ito ng bawat takeoff na bubuksan mo rito.

Buksan ito gamit ang {{ui:Library}} sa itaas ng panel na {{ui:Items}}.

## Punan ang library

- {{ui:Mag-import ng CSV…}} ay bumabasa ng spreadsheet na naka-save bilang CSV (tingnan ang mga column sa ibaba). Ang mga item na may parehong pangalan at uri na nasa library na ay pinapalitan; ang iba ay idinadagdag. Nilalaktawan ang mga row na hindi nito mabasa, at sinasabi nito kung alin at bakit.
- {{ui:Idagdag ang mga item ng takeoff na ito}} ay kinokopya ang bawat item ng bukas na takeoff sa library, kasama ang mga rate at assembly nito (hindi ang mga mark nito).
- Ang estimate CSV na ine-export ng TakeoffCraft ([I-export ang estimate](topic:export-estimate)) ay nag-iimport nang eksakto: ang presyo ng nakaraang trabaho ang nagsisilbing simula ng susunod.

- {{ui:Trade pack…}} ay nagdaragdag ng libreng assembly para sa isang trade, gaya ng drywall, electrical o concrete, nang walang presyo. Tingnan ang [Trade pack](topic:trade-packs).

{{ui:I-export ang CSV}} ay nagse-save ng library bilang CSV, para magkaroon ng kopya, i-edit sa spreadsheet, o ibigay sa kasamahan. {{ui:I-clear}} ay binubura ang laman nito (i-click nang dalawang beses).

:::note
Nasa storage ng browser na ito ang library. Ibang browser, ibang computer, o private window ay may sariling library (o wala). I-export ito para mailipat.
:::

## Gamitin ito sa takeoff

- Lagyan ng tsek ang mga item (mag-type sa {{ui:Hanapin sa library}} para paliitin ang listahan) at piliin ang {{ui:Idagdag sa takeoff}}. Idinadagdag sila kasama ng kanilang mga assembly sa isang hakbang na mababawi ng {{key:Mod+Z}}. Ang pangalang mayroon na sa takeoff ay binibigyan ng numero, gaya ng `Carpet (2)`.
- Ibinibigay ng {{ui:I-update ang mga presyo}} sa mga item ng takeoff ang waste at mga rate ng library, para sa bawat item na tugma ang pangalan at uri sa isang item ng library, at gayundin para sa mga assembly component na may parehong pangalan. Nananatili ang taas, unit at formula. Isang {{key:Mod+Z}} ang nagbabalik ng lahat ng lumang presyo.

## Mga column ng CSV

Ang unang row ay nagpapangalan ng mga column, sa anumang ayos; binabalewala ang ibang column.

| Column | Ano ang nilalaman |
|---|---|
| Item (o Name) | Pangalan ng item. Kailangan. |
| Type | Linear, Area o Count (gumagana rin ang LF, SF at EA). Kapag walang laman, ang unit ang nagpapasya. |
| Unit | LF o m; SF, SY o m²; EA. Walang laman: ang karaniwang unit ng uri. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Mga rate gaya ng `2.10` o `$1,250`. |
| Height (o Depth) | `9'-0"`, `9`, o `2.7` para sa metric units. |
| Component, Formula | Ang row na may Component name (o Type na `Component`) ay bahagi ng assembly ng item sa itaas nito. Sariling Unit, Waste at mga rate nito; ang Formula nito ay gumagamit ng mga letra ng item, tingnan ang [Assembly at formula](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Gumagana ang kuwit, semicolon, o tab bilang separator sa pagitan ng mga column.
