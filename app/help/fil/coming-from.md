---
title: Galing sa ibang takeoff software
summary: Paano nauugnay ang mga gawi ng mga dedicated na takeoff program at PDF markup tool sa TakeoffCraft, at ang mga pagkakaiba na madalas magdulot ng problema.
keywords: paglipat, migrate, kondisyon, piyesa, kasangkapan sa pagsukat, listahan ng markups, quantity link, gawi sa takeoff, pagkakaiba, ihambing
from: 12004ce5
---

Kung nakagawa ka na ng takeoff sa PlanSwift o gamit ang mga measurement tool ng Bluebeam Revu, karamihan ng TakeoffCraft ay magiging pamilyar: isang plan set, isang scale kada sheet, mga bagay na sinusukat, at isang presyadong kabuuan. Iba ang pagkakabit ng mga bahagi sa ilang lugar, at nasa ibaba ang mga iyon.

Kung kilala mo ang PlanSwift o On-Screen Takeoff, piliin ang {{ui:Takeoff desk}} na estilo ng menu sa {{ui:Mga setting}} › {{ui:TakeoffCraft}} › {{ui:Mga menu, key at mouse}}: isang menu bar na may File, {{ui:I-edit}}, View, Scale, Takeoff, {{ui:Items}}, {{ui:Markup}} at {{ui:I-export}} sa ibabaw ng isang hilera ng takeoff tools, kasama ang scale presets sa sheet bar. Tingnan ang [Mga menu, key at mouse](topic:menus-keys-and-mouse).

## Mga gawi na tinumbas

| Nakasanayan mo | Sa TakeoffCraft |
|---|---|
| Pagbubukas ng job o project na nag-iimbak ng mga plano (PlanSwift) | Buksan ang mga PDF at ang `.takeoff.json` project nang magkatabi. Ang project ay nag-iimbak lamang ng takeoff; ang mga PDF ay nananatiling sarili mong file. |
| Listahan ng markups na may mga note, cloud at highlight (Bluebeam) | {{ui:Markup}} sa sheet bar: mga note, cloud at highlight na may status (Open, Answered, Closed), nakalista sa ilalim ng **Markups**, iginuhit sa marked PDF. Tingnan ang [Mga note, cloud at highlight](topic:markups). |
| Mga sukat na naka-save bilang markups sa loob ng PDF (Bluebeam) | Ang takeoff ay nasa `.takeoff.json` file. {{ui:Marked PDF}} ay gumagawa ng kopyang may iginuhit na takeoff, para sa pagbabahagi; {{ui:PDF na may takeoff sa loob}} ay gumagawa ng kopyang may dalang takeoff, para mabuksang muli sa TakeoffCraft. |
| Takeoff items (PlanSwift), custom measurement tools na naka-save sa Tool Chest (Bluebeam) | **Items** sa ilalim ng {{ui:Items}}: pangalan, uri, kulay, unit, taas o lalim, waste, rates. |
| Parts at assemblies na may formulas (PlanSwift) | Ang {{ui:Assembly}} ng item: mga component na may formula gamit ang `L H A N P`. |
| Pagtatakda ng scale ng page, o pag-calibrate (parehong programa) | Listahan ng {{ui:Preset}} o {{ui:Calibrate}} sa {{ui:Scale}} group, kada sheet. Sinusukat ng {{ui:Check}} ang isang kilalang dimensyon. |
| Paglalapat ng isang scale sa hanay ng mga page | Hindi pa: itakda ang bawat sheet. |
| Viewports na may magkakaibang scale sa iisang sheet (Bluebeam) | Hindi pa: isang scale kada sheet. |
| Polylength at area tools (Bluebeam), linear at area takeoff (PlanSwift) | {{ui:Linear}} ({{key:L}}) at {{ui:Area}} ({{key:A}}). |
| Pagpindot ng Shift para sa tuwid na linya | Ang {{key:Shift}} ay nagsa-snap sa 45° na hakbang, parehong ideya. |
| Pag-snap sa mga linya ng drawing | Naka-on bilang default: mga dulo, midpoint, intersection at ang pinakamalapit na punto sa isang linya, at maaaring patayin gamit ang {{key:F3}}, gaya sa mga CAD program. |
| Count tool (parehong programa) | {{ui:Count}} ({{key:C}}). |
| Visual search para sa mga simbolo (Bluebeam) | {{ui:Auto count}} ({{key:S}}): i-box ang isang simbolo, suriin, idagdag. |
| Cut-outs o deductions sa mga area | {{ui:Cut-out}} ({{key:X}}) sa napiling area, at mga round cut-out. |
| Deductions sa linear runs | Iguhit nang tuwid ang run at pindutin ang {{key:E}} ({{ui:Deduct}}) para sa opening. Tingnan ang [Sukatin ang linear runs](topic:measure-linear). |
| Arc segments sa isang polyline | {{ui:Arc}} ({{key:R}}): i-click ang isang punto sa curve, pagkatapos ang dulo nito. |
| Listahan ng Markups na may quantity columns (Bluebeam) | Ang talahanayan ng {{ui:Dami}}, {{ui:By item}} o {{ui:By sheet}}. |
| Estimating grid na may pricing (PlanSwift) | Parehong talahanayan: waste, material at labor kada unit, extended totals, {{ui:Kabuuang job}}. |
| Pag-export sa Excel | {{ui:XLSX}} na may live formulas, o {{ui:CSV}}. |
| Escape para ihinto ang tool | {{key:Esc}} ay nagkakansela at bumabalik sa {{ui:Piliin}}. |
| Right-click para tapusin | Tinatapos ng right-click ang run o isinasara ang area dito rin. Walang right-click menu. |

## Mga pagkakaibang nakakalito

**Hindi nasa loob ng PDF mo ang takeoff.** Walang nababago sa iyong mga PDF kahit anong gawin mo. I-save ang `.takeoff.json` file at itago ito kasama ng mga drawing. Ang pagpapadala ng marked PDF sa iba ay hindi nagpapadala ng editable na takeoff: ipadala ang project file at ang orihinal na mga PDF, o isang [PDF na may takeoff sa loob](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Itinutugma ang mga PDF ayon sa laman, hindi sa pangalan.** Ang revised na sheet na na-save sa ibabaw ng lumang file name ay bagong file para sa TakeoffCraft, na walang scale at walang mark. Nananatili ang mga lumang mark mo sa lumang bersyon at patuloy na nagbibilang. Tingnan ang [I-save at buksang muli ang takeoff](topic:save-and-reopen#when-a-pdf-has-changed).

**Ang mga markang walang scale ay hindi kasama, hindi binibilang bilang zero.** Kapag walang scale ang isang sheet, hindi binibilang ang mga run at area nito, at sasabihin ng talahanayan na "Incomplete". Sa maraming programa, makikita mo lang ang 0. Tingnan ang [Itakda ang scale](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Walang hula sa laki ng page.** Ipinapalagay ng mga preset na naka-print ang PDF sa buong laki. Ang kalahating laki o "fit to page" na PDF ay nangangailangan ng {{ui:Calibrate}}. Palaging gamitin ang {{ui:Check}}.

**Isang item, isang pangunahing uri, higit pa kung hihilingin.** Ang item ay linear, area o count, at naka-lock ang uri nito kapag may mga mark na. Ang kondisyong nagbibigay ng area at perimeter nito ay isang area item: ang perimeter nito ay ang variable na `P`. Ang pader na may haba at area ay isang linear item na may taas. Para sa item na maraming kondisyon, gaya ng kuwartong may sahig, base at mga pinto, lagyan ng tsek ang ibang uri sa ilalim ng **{{ui:Sukatin din}}**: bawat isa ay pinepresyuhan sa sarili nitong hilera. Tingnan ang [Isang item, maraming uri ng mark](topic:create-items#one-item-several-kinds-of-marks).

**Ang formulas ay tumatakbo sa mga kabuuan.** Ginagamit ng assembly formulas ang mga kabuuan ng item sa lahat ng sheet, hindi bawat run nang hiwalay. Nandiyan ang `N` (bilang ng mga run o area) para sa mga dagdag kada run, gaya ng isang dagdag na stud kada pader.

**Kasama sa perimeter ang cut-outs.** Dinadagdagan ng `P` ng area ang mga gilid ng mga butas nito. Tingnan ang [Sukatin ang mga area na may cut-out](topic:measure-areas#read-the-area).

**Nagpa-pan ang pag-drag.** Ang pag-drag gamit ang kaliwang button sa sheet ay nagpa-pan, sa bawat tool maliban sa {{ui:Auto count}}. Hindi mo kailangang lumipat sa pan tool. Nag-zoom ang wheel; hindi ito nag-scroll.

**Kopya ng pagbawi, hindi cloud.** Nagtatago ang TakeoffCraft ng kopya ng iyong trabaho sa browser na ito at ibinabalik ito pagkatapos ng crash ([Kung huminto ang tab o ang browser](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), pero ikaw ang dapat mag-save ng takeoff: {{key:Mod+S}}. Hindi pa available ang cloud saving.

**Nasa browser ang lahat.** Walang kailangang i-install, at hindi kailanman ina-upload ang mga plano. Para sa desktop app, may TakeoffCraft sa CadCraft Studio, kasama ng iba pang pitong app.

## Hindi pa narito

Hindi pa nagagawa ang mga per-sheet scale region. Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet) para sa buong listahan at kung ano ang gagawin sa halip.
