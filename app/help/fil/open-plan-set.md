---
title: "Magsimula ng takeoff at magbukas ng plan set"
summary: "Magbukas ng isa o ilang PDF bilang plan set, hanapin ang daan sa mga sheet, at lumipat sa pagitan ng mga ito."
keywords: "buksan, plan set, ilang pdf, maraming file, sheets, drawings, page labels, sheet list, navigate, drop, handoff, buksan sa ibang app, markup"
from: ed434468
---

Madalas na ilang PDF ang isang plan set: architectural, structural, mechanical. Binubuksan sila ng TakeoffCraft nang magkatabi bilang iisang listahan ng sheet, at kayang sakupin ng iisang takeoff ang lahat ng ito.

## Buksan ang mga PDF

1. Piliin ang {{ui:Buksan ang plano}} sa pangkat na {{ui:File}}, o pindutin ang {{key:Mod+O}}. (Tinatawag itong {{ui:Buksan ang mga PDF…}} sa ibang menu style.)
2. Sa file dialog, piliin ang bawat PDF ng set. Pindutin nang matagal ang {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} para pumili ng marami, o ang {{key:Shift}} para pumili ng saklaw.
3. Piliin ang Buksan.
   Lalabas ang mensaheng "Binubuksan ang (name)…" habang binabasa ang bawat file. Pagkatapos, lalabas ang bawat page sa ilalim ng {{ui:Sheets}}, at bubukas ang unang page ng unang bagong PDF.

Maaari mo ring i-drag ang mga PDF mula sa {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} at i-drop ang mga ito kahit saan sa TakeoffCraft. Lumalabas ang frame na "I-drop ang mga PDF, DWG o DXF drawing, o isang .takeoff.json" habang nagdra-drag.

Para magdagdag ng PDF sa susunod, gawin ulit ang parehong paraan. Nilalaktawan ang mga PDF na bukas na.

Nakalista rin sa start screen ang mga PDF at takeoff na kamakailan mong binuksan, sa mga browser na pinapayagan ang page na muling magbukas ng file (Chrome at Edge). I-click ang isa para buksan ito; maaaring humingi muna ng pahintulot ang browser. Tingnan ang [Ang mga file mo](common:your-files).

:::note
Walang ina-upload. Binabasa ng browser ang mga PDF sa computer mo, at nawawala ang mga ito sa TakeoffCraft kapag isinara mo ang tab o pinili mo ang {{ui:Bago}}.
:::

## Mga drawing kasama ng mga PDF

{{ui:Buksan ang plano}} ay tumatanggap din ng DWG at DXF drawing, mag-isa man o kasama ng mga PDF: ang model space at mga layout ng bawat drawing ay nagiging mga sheet sa parehong listahan. Tingnan ang [Magbukas ng DWG o DXF drawing](topic:open-a-drawing), pagkatapos ay [Bilangin mula sa drawing](topic:count-from-a-drawing).

## PDF na ibinigay mula sa ibang app

Maaaring ibigay sa iyo ng isa pang app sa lineup ang PDF na bukas dito: magbubukas ito ng TakeoffCraft sa bagong tab, at bubukas doon ang PDF na parang na-drop mo ito. Sinasabi ng status bar na "Binuksan ang (name), ibinigay mula sa (app). Hindi nagbago ang orihinal na file." Walang ina-upload; dumadaan ang file sa sariling storage ng browser na ito, at mawawala ito roon kapag nabuksan na.

Kung sinasabi ng status bar na "hindi dumating" ang PDF, naghintay nang masyado ang tab, o bukas na ang PDF sa ibang tab: buksan ito gamit ang {{ui:Buksan ang plano}}.

Ang kabaligtaran naman: kapag tumatakbo ang MarkupCraft sa kinaroroonan mo at kaya nitong tanggapin ang file, ang sheet bar sa ilalim ng drawing ay may button na {{ui:MarkupCraft}}. Binubuksan nito ang PDF ng sheet na nasa screen sa MarkupCraft, sa bagong tab, para suriin at i-markup.

## Hanapin ang sheet

- I-scroll ang listahan ng {{ui:Sheets}} sa kaliwa at i-click ang isang sheet.
- I-type sa **Maghanap ng sheet** sa itaas ng listahan para i-filter ayon sa sheet number, file name, o page label. Ipinapakita ng bilang sa tabi ng {{ui:Sheets}} ang "3 of 40" habang may filter.
- Pindutin ang {{key:PageDown}} para sa susunod na sheet at {{key:PageUp}} para sa nauna. Sumusunod sila sa listahan gaya ng na-filter.

:::mac
Sa Mac keyboard na walang Page Up at Page Down na key, pindutin ang fn kasama ng up o down arrow.
:::

## Paano pinapangalanan ang mga sheet

- Ang page na may label mula sa PDF, gaya ng `A-101`, ay pinapangalanan ayon sa label na iyon.
- Ang page na walang label (o label na numero lang ng page) ay pinapangalanang "(file name), page (n)".
- Kapag may ilang PDF na bukas, dala rin ng mga sheet na may label ang file name: "A-101 — Architectural".

Hindi pa maaaring i-type nang manual ang pangalan ng sheet.

## Maglibot sa sheet

- I-scroll ang mouse wheel para mag-zoom sa kinaroroonan ng pointer.
- I-drag gamit ang kaliwa o gitnang button para mag-pan. Sa {{ui:Auto count}}, o kapag nagsimula ka sa kanto ng isang mark, pindutin nang matagal ang {{key:Space}} habang nagdra-drag, o mag-drag gamit ang gitnang button.
- Pindutin ang {{key:F}} o piliin ang {{ui:I-fit ang page}} para makita ang buong sheet; {{key:W}} o {{ui:I-fit ang lapad}} para magkasya ang lapad nito.
- Pindutin ang {{key:Plus}} o {{key:=}} para mag-zoom in, at {{key:Minus}} para mag-zoom out, sa gitna ng view.

Naaalala ng bawat sheet ang sarili nitong zoom at posisyon habang bukas ito.

## Susunod

Bago mo masukat ang isang sheet, kailangan nito ng scale: [Itakda ang scale](topic:set-the-scale).
