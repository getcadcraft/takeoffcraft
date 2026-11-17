---
title: "Ano ang hindi pa nagagawa"
summary: "Mga feature ng takeoff na wala sa build na ito, at kung ano ang gagawin ngayon."
keywords: "limitasyon, kulang, hindi pa, roadmap, pinaplano, alternatibo, bawat run, cloud, desktop"
from: 94ff90d0
---

Ang TakeoffCraft ay ginagawa pa. Ito ang listahan ng mga hindi pa kayang gawin ng kasalukuyang build, at kung paano pa rin matatapos ang trabaho.

## Pagsukat

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Pagpasok ng punto sa gitna ng run o outline | Burahin ang mark at iguhit ulit. |
| Pagpili gamit ang box (window) | {{key:Shift}} + i-click ang bawat mark, o {{key:Mod+A}} para sa lahat ng mark sa sheet. Tingnan ang [Kopyahin, i-paste at i-duplicate ang mga mark](topic:copy-paste). |
| Pag-rotate, pag-mirror o pag-rescale ng na-paste na kopya | I-paste sa sheet na may parehong scale at parehong oryentasyon; iguhit ang natitira nang manual. |
| Pagbasa ng scale mula sa scanned na sheet, o mula sa graphic scale bar | Piliin ang preset, o i-calibrate gamit ang haba ng bar. |
| Higit sa isang scale kada sheet (detail areas, pinalaking plano) | Sukatin ang bahagi sa scale ng sheet, at bilangin ang detalye sa sarili nitong pinalaking sheet kung mayroon nito ang set. |

## Items at presyo

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Assembly formula na gumagamit ng ibang uri ng mark ng isang item (ang mga pinto ng room item sa formula ng palapag nito) | Gumagamit ang formula ng kabuuan ng pangunahing uri; presyuhan ang ibang uri sa sarili nilang row. |
| Assembly formula na kinukuwenta kada run | Gumagamit ang formula ng kabuuan ng item; gamitin ang `N` para sa extra kada run. |
| Formula na gumagamit ng dami ng ibang item | Ulitin ang pagsukat sa item na iyon, o kuwentahin ito sa spreadsheet export. |
| Crew sa assembly component, o working day na hindi 8 oras | Ilagay ang crew sa item; basahin ang crew-days para sa ibang haba ng araw bilang crew-hours ÷ ang araw mo. |
| Markup maliban sa note, cloud at highlight (arrow, dimension, stamp), o reply sa isang note | Isulat ito sa text ng note; baguhin ang status nito habang naaayos. |
| Price library na ibinabahagi ng team, o nakatago sa account mo | Nakatago ang library sa browser na ito: i-export ito bilang CSV at i-import sa kabilang computer. |
| Trade pack na nasuri ng mga aktibong estimator | Panimulang set lang ang bawat pack: suriin ang mga assumption nito laban sa trabaho at produkto mo bago magpresyo gamit ito. Tingnan ang [Trade pack](topic:trade-packs). |
| Presyo sa trade pack | Assembly lang ang dala ng mga pack: itakda ang sarili mong rate, o i-import ang price list mo bilang CSV. |
| Pagpalit ng pangalan ng takeoff | Galing sa unang PDF ang pangalan; palitan ng pangalan ang mga na-download na file. |
| Pagpapangalan ng sheet nang manual | Pinapangalanan ang sheet ayon sa page label ng PDF; maghanap gamit ang file name at page. |

## Drawing (DWG at DXF)

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Plot style table, pen assignment at CTB file sa mga sheet ng drawing | Iginuguhit ang drawing na itim, o sa mga kulay nito na pinadilim para sa papel; galing sa drawing ang line weight. |
| Pagbukas ng binary DXF, o DWG na mas luma sa AutoCAD 2000 | I-save ito bilang ASCII DXF o mas bagong DWG. |
| Paghanap ng naka-link na drawing (xref) ayon sa folder na kinalalagyan nito | Buksan din ang file ng naka-link na drawing, kasama ang host: hinahanap ito ayon sa file name sa mga bukas na file. |
| Pagsukat ng 3D polyline, mesh, solid at region | Bilangin ang mga ito ayon sa layer at uri, o sukatin ang plan view gamit ang Linear at Area tool. |
| Text sa marked PDF mula sa drawing na hindi Latin ang script | Ang mga karakter na walang glyph sa Helvetica ay lalabas bilang "?" sa marked PDF; hindi apektado ang drawing sa screen. |
| Paglipat ng drawing sa ibang app mula sa sheet bar | Buksan ang parehong file sa app na iyon. |
| Drawing na may takeoff sa loob nito, gaya ng ginagawa ng {{ui:PDF na may takeoff sa loob}} para sa PDF | {{ui:I-save ang takeoff}}: bumubukas muli ang `.takeoff.json` sa parehong drawing, hinahanap ayon sa laman nito. |
| Pagguhit o pagbilang ng mga PDF underlay, larawan at OLE object na nakalagay sa drawing | Frame lang ang ipinapakita ng mga larawan. Buksan mismo ang underlay PDF bilang sheet. |

## Auto count

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Paghanap ng simbolo sa sheet na walang scale na nakaguhit sa ibang laki | Bigyan ang sheet ng scale nito, o hanapin ito gamit ang box na iguguhit doon. |
| Paghanap ng mirrored na simbolo | Bilangin ang mga ito nang manual, o maghanap ulit gamit ang box sa paligid ng isang mirrored. |

## Mga file at pagbabahagi

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Iisang PDF na nagpapakita ng mark at may dala ring takeoff | {{ui:Marked PDF}} para makita ng iba ang mark; {{ui:PDF na may takeoff sa loob}} para muling buksan sa TakeoffCraft. |
| CSV ng dami kada sheet o ng mga mark | Gamitin ang {{ui:XLSX}}: nasa worksheet na By sheet at Marks ang mga ito. |
| Pag-save sa cloud | Hindi pa available. I-save ang mga project file sa computer mo at i-back up ang mga ito. |
| Hiwalay na TakeoffCraft desktop app | Mula sa 0.5, ang desktop app ay CadCraft Studio, kasama ang lahat ng walong app sa iisang install. Tumatakbo rin ang TakeoffCraft sa browser. |

## Screen at input

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Menu ng right-click (o long-press) | Gamitin ang toolbar, ang mga panel at ang mga key. Tinatapos ng long press ang isang run o outline. |
| Pag-rotate ng view | Ang mga page na naka-rotate na sa PDF ay nakatayo na nang tuwid. |

## 3D view

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Pagguhit o pag-edit ng mark sa 3D | Bumalik sa sheet ({{key:3}}) para gumuhit; gumagana sa 3D ang pagpili at pagbura. |
| Pag-align ng mga palapag na naka-stack na may magkakaibang posisyon sa kanilang page | I-stack ang mga palapag na magkakapareho ang plot; suriin ang iba nang isang sheet kada beses. |
| Pagbilang ng post na kasing-laki ng binibilang na bagay | Pare-pareho ang laki ng bawat post sa sheet; minamarkahan nito kung nasaan ang bilang, hindi kung ano ito. |

## Bid

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Addenda sa package na naipadala na, award letter, at scope sheet na pinipirmahan ng bawat bidder | Magpadala ng bagong package, at isulat mo mismo ang award. Nasasaklaw ng [Magpadala ng package para sa bid](topic:bid-invitations) ang nagawa na. |
| Pagpapadala ng bid invitation mula sa kahit anong account: habang sinusubukan pa, naka-off ang mail sa mga external bidder maliban sa mga account na in-enable ng CadCraft team | I-download ang {{ui:Scope CSV}}, ikaw mismo ang mag-email nito, at i-type ang mga bid. |
| Pagpapadala ng bid package mula sa Studio window | Magpadala mula sa TakeoffCraft sa browser. |
| Pag-reprice ng bid area ng alternate gamit ang napiling bid | Gumagamit ng sarili mong presyo ang mga alternate at subtotal ng bid area; i-adjust nang manual ang alternate. |
| Awtomatikong paalala bago mag-expire ang insurance o license ng subcontractor | Namarkahan ang petsa sa Subcontractors page kapag lumipas na o nasa loob ng 30 araw; suriin ito kapag nag-imbita ka. |

## Mga panel

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Paglipat ng {{ui:Dami}} table | Ang mga panel na {{ui:Sheets}} at {{ui:Items}} lang ang nagagalaw. Tingnan ang [Ayusin ang mga panel](common:arrange-panels). |

## Spreadsheet

Nasuri na ang XLSX workbook sa LibreOffice Calc, na nag-recalculate ng bawat kabuuan hanggang sa pinakamaliit na sentimo, kapareho ng sa TakeoffCraft. Hindi pa ito nabubuksan sa Excel. Kung may ipakitang kakaiba ang spreadsheet program, ang CSV export ay may parehong estimate bilang plain values.
