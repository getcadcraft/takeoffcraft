---
title: I-export ang estimate at marked PDF
summary: I-download ang estimate bilang XLSX workbook na may live formulas o bilang CSV, at mga kopya ng iyong PDF na may takeoff na nakaguhit.
keywords: proposal, bid summary, export, xlsx, spreadsheet, workbook, csv, marked pdf, i-print ang takeoff, ulat, ibahagi, ipadala, legend
from: 334f89c7
---

Ang mga export ay mga download. Ginagawa ang mga ito sa computer mo mula sa takeoff at sa mga bukas na PDF; walang ipinapadala kahit saan.

## Ang estimate bilang spreadsheet (XLSX)

1. Buksan ang menu na {{ui:I-export}} sa toolbar at piliin ang {{ui:XLSX}}.
   Dina-download ng browser mo ang `(name).xlsx`. Ipinapakita ng status bar ang "Na-export ang (name).xlsx (estimate with live formulas, by sheet, marks, scales)." at nagdaragdag ng babala kapag hindi kumpleto ang estimate.
2. Buksan ito sa spreadsheet program mo.

Apat na worksheet ang workbook, at ang mga report sa ibaba kapag naaangkop:

| Worksheet | Ang laman nito |
|---|---|
| Estimate | Isang row bawat item at bawat component: quantity, waste, quantity with waste, rate, material, labor, total, notes. Ang kabuuan ng job sa ibaba. |
| By sheet | Quantity ng bawat item sa bawat sheet, kasama ang bilang ng mark. |
| Marks | Bawat mark: sheet, item, type, quantity, at detail (haba ng mga segment, gross at cut-out areas, perimeter). |
| Scales | Bawat sheet na may scale o marks: ang scale nito, paano ito itinakda (preset, o calibrated sa distansyang na-type mo), at feet per PDF unit. |
| Takeoff summary | Quantity ng bawat item, CSI number, marks at sheets, nang walang presyo. |
| Material list | Bawat bahagi ng assembly na pinagsama-sama sa buong takeoff (ang parehong bahagi na ginamit ng ilang item ay iisang linya), kasama ang waste at gastos sa material, at ang mga item na gumagamit nito. |
| Quote request | Ang material list na ipapadala sa supplier: quantities with waste, walang lamang unit-price column, at mga extension at kabuuan na pumupuno habang nagta-type ng presyo. |
| By division | Material, labor at total ayon sa CSI MasterFormat division, kapag may {{ui:CSI number}} ang mga item. |

Kapag may [bid summary](topic:bid-summary), nagtatapos din ang Estimate worksheet sa mga markup nito (labor burden, sales tax, overhead, profit, bond at ang bid), bilang live formulas.

Pinapanatili ng Estimate worksheet ang **live formulas**: quantity with waste, ang na-round na halaga ng material at labor, ang total ng bawat row, at ang kabuuan ng job. Ina-recalculate ng spreadsheet programs ang mga ito, kaya maaari mong baguhin ang rate o waste sa spreadsheet at susunod ang mga total. Nakalagay rin sa mga cell ang mga numerong kinuwenta ng TakeoffCraft, at tugma ang mga ito hanggang sentimo.

Nakalista sa notes column ang formula ng bawat component, mga error sa formula, mga mark sa sheet na walang scale, wall area at perimeter. Kapag may naiwan, sinasabi ng row ng kabuuan ng job na "Incomplete: see the notes above".

Nasuri na ang workbook sa LibreOffice Calc, na nag-recalculate nito sa parehong mga total. Hindi pa ito nabubuksan sa Excel. Ang detalye ng bawat column ay nasa [Mga column ng export](topic:export-columns).

## Ang estimate bilang CSV

Buksan ang menu na {{ui:I-export}} at piliin ang {{ui:CSV}}. Makakakuha ka ng `(name).csv`: ang parehong row at column ng Estimate worksheet, bilang plain values (walang formula), at ang kabuuan ng job. Gamitin ito para i-paste sa ibang estimating o accounting system.

Estimate lamang ang laman ng CSV; para sa quantity ayon sa sheet at sa listahan ng mark, gamitin ang XLSX. Ang {{ui:Listahan ng materyales}} sa parehong menu ay nagse-save ng material list lamang bilang CSV, para sa pag-order.

## Ang estimate sa Google Sheets

Sa itaas ng talahanayang **Dami**, inilalagay ng **I-copy para sa Google Sheets** ang estimate sa clipboard mo bilang tab-separated text, na may parehong linya gaya ng CSV. Sa Google Sheet, i-click ang cell A1 at i-paste. Hindi nagsa-sign in ang TakeoffCraft sa Google at walang ipinapadalang anuman doon.

## Mga nawawalang rate at sign-off

Ang linyang may quantity pero walang rate ay nagsasabing **No rate** sa Notes nito, at binibilang ito ng export sa mga total. Kapag na-sign off na ang estimate, sinasabi ng export kung sino ang nag-sign, kailan, at para sa anong total. Tingnan ang [Mga nawawalang rate at pag-sign off sa estimate](topic:sign-off-the-estimate).

## Marked PDF

1. Buksan ang mga PDF na gusto mong iguhitan ng mark.
2. Buksan ang menu na {{ui:I-export}} at piliin ang {{ui:Marked PDF}}.
   Lumalabas ang "Isinusulat ang marked PDF…", pagkatapos ay dina-download ng browser mo ang isang file bawat marked PDF, na pinangalanang `(PDF name) (takeoff).pdf`.

Sa kopya:

- iginuguhit bilang linya sa kulay ng kanilang item ang mga run,
- bahagyang pinupunan ng solid outline ang mga area, at nananatiling bukas ang mga cut-out,
- tuldok ang mga count,
- ang bawat pahinang may mark ay nakakakuha ng maliit na legend sa kaliwang ibabang sulok: kulay, pangalan at quantity ng bawat item sa pahinang iyon.

Hindi binabago ang mga orihinal mong PDF.

Mga tala:

- Tanging ang mga PDF na bukas ang isinusulat. Ang mga mark sa PDF na hindi bukas ay nananatili sa mga total pero hindi iginuguhit; buksan muna ang mga PDF na iyon.
- Gumagamit ang mga pangalan sa legend ng karaniwang PDF font. Ang mga letrang hindi nito kayang ipakita ay lumalabas bilang "?".
- Hindi makokopya na may mark ang encrypted na PDF: "Ang PDF na ito ay may password o naka-encrypt, kaya hindi maisusulat ang kopyang may mark. Ligtas ang takeoff mismo; i-export na lang ang spreadsheet."
- Ang unang {{ui:Marked PDF}} sa isang tab ay naglo-load ng PDF writer. Kapag offline, nandiyan lamang ito kung ipinapakita ng app bar ang {{ui:Handa offline}}; tingnan ang [Pagtatrabaho offline](common:offline).

:::chromium
Kapag may ilang marked PDF, maaaring itanong ng Chrome at Edge nang isang beses kung papayagan ng site na ito ang pag-download ng maraming file. Piliin ang Allow, o isang file lang ang makukuha mo.
:::

## Walang ie-export?

- Ang {{ui:XLSX}} at {{ui:CSV}} ay nangangailangan ng kahit isang item: "Wala pang ie-export: gumawa ng item at i-take off ito."
- Ang {{ui:Marked PDF}} ay nangangailangan ng mark sa bukas na PDF: "Wala pang mark sa mga bukas na PDF."

## I-save din ang takeoff

Ang export ay isang report. Para patuloy na magtrabaho sa takeoff sa susunod, piliin din ang {{ui:I-save ang takeoff}}: tingnan ang [I-save at buksang muli ang takeoff](topic:save-and-reopen).

Para magdagdag ng overhead, profit, tax at bond at magpadala ng proposal, tingnan ang [Bid summary at proposal](topic:bid-summary).
