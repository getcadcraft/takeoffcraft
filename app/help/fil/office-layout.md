---
title: "Ang layout ng opisina: grouping, subtotal, title at heading mula sa iyong Default Policies"
summary: "I-on ang Default Policies add-on para ang estimate, ang dami kada sheet, ang mga export, at ang binabasa ng assistant ay kumuha ng layout ng iskedyul ng opisina mo, ang parehong layout na kinukuha ng mga iskedyul ng BimCraft."
keywords: "office standard, layout ng opisina, default policies, add-on, layout ng iskedyul, group by type, group by sheet, subtotal, kabuuan, title, heading, malalaking titik, layout ng estimate, layout ng export, settings"
from: cfd2f30a
---

## Ano ang gagawin mo

Ipalatag sa TakeoffCraft ang mga table ayon sa paraan ng pag-issue ng opisina mo, nang hindi ito itinatakda sa bawat takeoff. Isang beses lang itinatakda ang layout sa Default Policies, at nalalapat ito sa bawat app sa computer na ito: ang itinakda mo sa BimCraft o CadCraft ang gamit ng TakeoffCraft, at ganoon din ang kabaligtaran.

## Mga hakbang

1. Buksan ang **Settings › Add-ons** at i-on ang **Default Policies**. Naka-off ito hanggang sa gawin mo; kapag naka-off ito o walang nakatakda, eksaktong gaya pa rin ng dati ang TakeoffCraft.
2. Buksan ang **Settings › Global › Default Policies** at hanapin ang **Schedule layout (ang office standard)**:

| Policy | Ano ang ginagawa nito sa TakeoffCraft |
|---|---|
| Group schedules by | **Type** ay pinapangkat ang estimate ayon sa uri ng item (Linear, Area, Count, Typed quantity). **Level** ay pinapangkat ang mga dami ayon sa sheet nila. **Room** at **No grouping** ay hindi pinapangkat ang dalawa |
| Totals in schedules | **A subtotal under each group and a total** ay nagdadagdag ng subtotal sa ilalim ng bawat pangkat. Laging nananatili ang kabuuan ng trabaho |
| Schedule title | Isang linya sa ibabaw ng table, halimbawa `{schedule}: office layout` |
| Column headings | Gaya ng nakasulat, IN CAPITALS o With Capitals |

3. Isara ang Settings. Kaagad na susunod ang mga table.

## Ano ang kumukuha ng layout

- **Dami › By item** at **By sheet**: mga heading ng pangkat, subtotal sa ilalim ng bawat pangkat, ang title, at ang case ng heading. May linya sa ilalim ng title na nagsasabi kung aling bahagi ang itinakda ng standard ng opisina mo. Pareho pa rin ang mga row: ikaw pa rin ang nagta-type ng rate at waste sa mga ito, at nagki-click ng mga figure para piliin ang mga mark nila. Nananatili sa ilalim ng item nito ang component o ang ikalawang kondisyon.
- **Ang na-export na estimate** (CSV at XLSX): ang parehong mga pangkat at subtotal. Sa workbook, ang subtotal ay isang `SUBTOTAL` formula sa ibabaw ng pangkat nito, at ganoon din ang kabuuan ng trabaho, kaya walang nabibilang nang dalawang beses.
- **Ang binabasa ng assistant**: ang `takeoff_estimate` at `takeoff_quantities` (ayon sa sheet) ay nagdaragdag ng `layout` block na may mga pangkat, row, at subtotal, at sinasabi kung aling bahagi ang itinakda ng opisina.

## Ano ang nananatili sa sarili nito

- **Dami › By area** ay may sarili nitong pagpapangkat (ayon sa bid area) at pinananatili ito.
- Ang **kabuuan ng trabaho**, ang mga markup ng bid summary, at ang mga alternate ay hindi muling pinapangkat.
- Ang pagpapangkat na walang column sa table ay iniiwan: walang level ang estimate, at walang type ang dami kada sheet.

## Mabuting malaman

- Nakatago ang mga policy sa browser na ito para sa bawat CadCraft app, at dinadala ang mga ito sa Default Policies file (**I-save sa file** / **I-load mula sa file** sa parehong lugar), kaya iisang file ang ibinabahagi ng opisina.
- Ang estimate na na-export bilang CSV na may pangkat ay para sa pagbasa. Para maibalik ito bilang price library, i-export ito nang walang nakatakdang pagpapangkat.
- Ito ang bahagi ng BimCraft sa parehong standard: mga iskedyul, set-up at export. Wala pang sariling policy ang TakeoffCraft, kaya walang Default Policies section sa ilalim ng Settings › TakeoffCraft.
