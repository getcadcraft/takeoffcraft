---
title: Bid areas
summary: Lagyan ng tag ang mga marka ayon sa gusali, palapag o phase, mag-takeoff sa isang area nang sabay-sabay, at basahin ang mga dami at gastos ng bawat area.
keywords: idagdag na alternate, ibawas na alternate, base bid, alternates, bid area, area, gusali, palapag, level, phase, zone, alternate, breakdown, hati, typical floor, subtotal, ayon sa area
from: 64f3d41c
---

Ang bid area ay bahagi ng job na pinepresyohan mo nang hiwalay: isang gusali, isang palapag, isang phase, isang pakpak. Maaaring nasa isang bid area lang ang bawat marka. Mababasa ang mga dami at ang estimate para sa bawat area, may subtotal para sa bawat isa, habang ang job total ay nananatiling kabuuan ng lahat.

## Gumawa ng bid area

1. Sa itaas ng panel na {{ui:Items}}, buksan ang listahan ng {{ui:Bid area}}.
2. Piliin ang **New bid area…**, i-type ang pangalan gaya ng "Building A" o "Level 2", at piliin ang **Make it**.
   Nagiging kasalukuyang area ang bagong area. Sinasabi ng status bar: "New marks go in (name). Marks in other bid areas are dimmed." — ibig sabihin, mapupunta sa (pangalan) ang mga bagong marka, at pinadidilim ang mga marka sa ibang bid area.

## Mag-takeoff sa isang area

Habang may napiling bid area sa listahan, mapupunta roon ang bawat bagong marka: mga run, area, bilog, count, mga markang idinadagdag ng {{ui:Auto count}}, at ang mga i-paste mo. Ang mga marka sa ibang bid area, at ang mga walang area, ay pinadidilim sa sheet para makita mo kung saan kabilang ang alin.

Piliin ang **No bid area** sa listahan para mag-takeoff nang walang area; walang pinadidilim sa ganitong kaso.

:::tip
Mga magkakatulad na palapag: mag-takeoff sa Level 2, piliin ang mga marka nito ({{key:Mod+A}} sa sheet), kopyahin, piliin ang Level 3 sa listahan at i-paste. Mapupunta sa Level 3 ang mga kopya. Kapag magkakapareho ang mga palapag at hindi mo kailangang paghiwalayin, ang [typical group](topic:typical-groups) ay nagbibilang ng isang palapag nang maraming beses.
:::

## Ilipat ang mga marka sa ibang area

Pumili ng isang marka o marami ({{key:Shift}} + click, o {{key:Mod+A}}). Sa ilalim ng **Selected mark** (o **Selected marks**), piliin ang area sa field na {{ui:Bid area}}. Sinasabi ng status bar: "3 marks moved to Level 2." Isang undo step ito.

## Palitan ang pangalan, ayusin ang ayos, o burahin

Piliin ang **Manage bid areas…** sa listahan. I-type sa ibabaw ng pangalan para palitan ito, gamitin ang mga arrow para baguhin ang ayos (sinusundan ito ng mga table at ng workbook), o burahin ang isa gamit ang bin. Hindi binubura ng pagbura ng bid area ang mga marka nito: mapupunta ang mga ito sa walang bid area. Ina-undo ng {{key:Mod+Z}} ang bawat pagbabago.

## Basahin ang mga dami ayon sa area

Sa table ng {{ui:Quantities}}, piliin ang {{ui:By area}} (lalabas ito kapag may bid area na ang takeoff). Ipinapakita ng bawat area ang mga item na nasa loob nito, kasama ang dami, unit at kabuuan nito, at pagkatapos ay row ng subtotal. Ang mga markang walang bid area ay nasa dulo, bilang **No bid area**. I-click ang row ng item para i-highlight ang item at gawing kasalukuyang area ang area nito.

Kinukuwenta ang mga assembly para sa bawat area mula sa sariling total ng area na iyon. Ang formula na nagra-round up, gaya ng `ceil(L / 4)`, ay maaaring magbigay ng kaunting dagdag kapag pinagsama ang mga area kaysa sa buong job, gaya ng mangyayari sa bid na pinepresyohan area by area.

## Alternates: base bid kasama ang mga idinadagdag at ibinabawas

Ang bid area ay puwedeng maging **alternate**: gawaing puwedeng idagdag ng owner sa bid, o alisin dito. Sa **Manage bid areas…**, may listahan ang bawat area sa tabi ng pangalan nito:

| Pagpipilian | Ano ang ginagawa nito |
|---|---|
| {{ui:Base bid}} | Nasa bid, gaya ng dati. |
| {{ui:Add alternate}} | Pinepresyohan nang hiwalay at **wala sa base bid**: upgrade ng carpet, dagdag na canopy. |
| {{ui:Deduct alternate}} | Nasa base bid, at iniaalok bilang bawas: "tanggalin ang canopy". |

Mag-takeoff ng gawain ng alternate sa bid area nito tulad ng ibang area. Kapag may alternate na ang takeoff:

- Ang header ng table ng {{ui:Quantities}} ay nagsasabing **Base bid** sa halip na Job total: ang buong takeoff nang walang add alternate.
- Nagtatapos ang {{ui:By area}} sa base bid at isang row bawat alternate: **+$300.00** para sa add, **−$1,050.00** para sa deduct.
- Pinepresyohan lang ng alternate ang mga item na may marka rito, kasama ang kanilang assembly, para hindi makapasok ang assembly part ng ibang item.

Sa mga export, nagtatapos ang CSV sa base bid at mga alternate, at nakakakuha ang workbook ng worksheet na **Alternates**: ang base bid, ang mga item ng bawat alternate at pagbabago nito, at ang base bid na wala ang bawat add alternate.

## Sa export

{{ui:XLSX}} ay nagdaragdag ng worksheet na **By bid area**: mga item at component ng bawat area na may dami, dami kasama ang waste, material, labor at kabuuan, subtotal bawat area (isang formula na `SUM`) at **All bid areas** sa dulo. Nakakakuha ang worksheet na **Marks** ng column na **Bid area**. Kapag walang bid area ang takeoff, mag-e-export ito gaya ng dati. Tingnan ang [Export columns](topic:export-columns).

Nase-save ang mga bid area sa project file kasama ng mga marka.
