---
title: Suriin ang supplier stock at lead time
summary: Magdagdag ng stock list ng supplier (CSV o spreadsheet) at susuriin ng TakeoffCraft ang kailangan ng takeoff, kasama ang waste, laban dito: sapat ba sa stock, at gaano katagal ang paghihintay. Lumalabas sa Problems panel ang mga kakulangan at mahahabang paghihintay.
keywords: supplier, stock, nasa stock, lead time, availability, kakulangan, backorder, order list, csv, sku, vendor, materyales, supply, problema
from: f11160fb
---

{{ui:Supply}} sa toolbar (ang trak) ay sinusuri ang kailangan ng iyong takeoff laban sa stock list ng supplier. Naka-save sa sariling file ng takeoff ang mga row ng supplier na mahalaga. Walang ipinapadala kahit saan at walang tinatanong sa supplier: ikaw ang magdadala ng file.

## Ang file

Isang CSV file na may header row. Kailangan nito ng column na pangalan o SKU at column na stock o lead time. Kinikilala ang mga header na ito (anumang ayos, anumang letter case): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- Maaaring numero ang stock (1,200), "In stock" o "Out of stock".
- Maaaring "5 days", "2 weeks", "2-3 weeks" (ang mas mahaba ang ginagamit), "3 months", "same day" o "backorder" ang lead time. Ang simpleng numero ay nasa unit ng header (days, maliban kung weeks o months ang nakasulat sa header).
- Hindi binabasa ang mga Excel file: i-save muna ang sheet bilang CSV.

## Suriin ang takeoff

1. Piliin ang {{ui:Supply}}, saka {{ui:Add a supplier file…}} at piliin ang CSV. Maaaring magdagdag ng higit sa isa: hanggang limang file, 2,000 row ang itinatago sa kabuuan, at mauuna ang mga tumutugma sa iyong mga item.
2. Bawat item, pangalawang kondisyon at bahagi ng assembly na may dami ay tinutugma sa isang row ayon sa pangalan, o ayon sa SKU sa pangalan nito. Ginagamit ang katulad na pangalan (ang isa ay nasa loob ng isa) kapag walang eksaktong tugma, at sinasabi ito.
3. Sa ilalim ng {{ui:What the takeoff needs}}, mauuna ang mga kulang: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". Kasama ang waste sa kailangan. Iniuulat ang unit ng supplier na iba sa estimate (tonelada laban sa talampakan) at hindi ito kailanman ikinukumpara. May {{ui:Select the item}} ang bawat row, na dadalhin ka sa item.
4. Itakda ang {{ui:Longest wait wanted (days)}} (default 14). Mamarkahan ang item na walang stock at lampas sa paghihintay na iyon, at ipapakita ng buod ang pinakamahabang paghihintay na mahalaga.
5. Dina-download ng {{ui:Order list (CSV)}} ang mga kulang na item kasama ang kulang na dami, ang supplier at ang lead time. Inaalis ng {{ui:Leave out}} ang isang kailangan sa pagsusuri (isa itong undo step).

## Mga spreadsheet file at ang Library ng presyo

Maaaring Excel workbook (.xlsx) ang listahan ng supplier, bukod sa CSV: ang unang sheet ang binabasa, na may parehong pangalan ng column. Hindi kailanman pinapatakbo ang mga formula; ang value na nasa file ang binabasa.

Kapag naidagdag na ang file na may presyo, itinatakda ng {{ui:Prices into the Library}} sa dialog ang material price ng bawat entry sa [Library](topic:price-library) na pinepresyuhan ng file: parehong pangalan, at unit na pareho (o hindi binanggit). Nananatili ang labor, waste, taas at assemblies; sinasabi ng note ng entry kung saang file galing ang presyo. Hindi pinepresyuhan ng listahang nasa feet ang entry na nasa metro, at ang entry na walang tugmang pangalan ay hindi ginagalaw; sinasabi ng status line kung ilan ang nilaktawan dahil sa unit. I-reprice mula sa Library para maidala ang mga bagong presyo sa takeoff na ito.

## Sa Problems panel

Ang kakulangan ay babala at ang mahabang paghihintay ay tala, sa shared na Problems panel ("Supplier stock"), kaya kasama ng bawat iba pang check ang mga ito. Maaari mong tanggapin ang isa na may dahilan, at naka-save sa takeoff ang pagtanggap.

## Kasama ang iyong assistant

Kung pinapayagan mo ang mga assistant sa {{ui:Settings}}, mababasa nila ang check (supply_check). Ikaw lang ang nagdadagdag ng supplier file.

## Mabuting malaman

Tanging kasing-bago lang ng file na idinagdag mo ang mga figure ng stock. Idagdag muli ang file para i-refresh ito: papalitan ng file na may parehong pangalan ang nauna.
