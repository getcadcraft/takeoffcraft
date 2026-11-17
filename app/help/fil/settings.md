---
title: Mga setting ng TakeoffCraft
summary: Ipakita ang pulgada hanggang 1/16, 1/8 o 1/4, magsimula ng bagong item na may porsyento ng waste, piliin kung saan magsisimula ang slider ng Auto count, mag-snap sa linya ng drawing o sa 45° nang hindi hawak ang Shift, itakda kung gaano kalapad na pinto ang isinasara ng Room fill, at piliin ang corner indicator ng 3D view.
keywords: mga setting, preferences, opsyon, precision, fraction, pulgada, rounding, waste, default waste, auto count, threshold, match, slider, snap, 45, anggulo, shift, view cube, axis icon, corner indicator, 3d
from: bca3f0ed
---

Buksan ang {{ui:Mga setting}} gamit ang gear sa app bar o {{key:Mod+,}}. Ang unang tab, {{ui:TakeoffCraft}}, ay naglalaman ng mga setting na kabilang sa app na ito; ang {{ui:Pangkalahatan}} ay naglalaman ng mga setting na ibinabahagi ng bawat CadCraft app (theme, panel, toolbar). Umiiral lang sa app ang mga setting ng TakeoffCraft: babaguhin mo sila dito, at inaalala ito ng browser na ito. Ibinabalik ng {{ui:I-reset ang mga setting ng TakeoffCraft}} sa panimulang estado ang mga ito.

## Feet at pulgada

Ipakita ang mga haba hanggang sa pinakamalapit na **1/16"** (ang panimula), **1/8"** o **1/4"**. Binabago nito kung paano binabasa ang mga haba sa sheet, sa mga panel, sa mga dami at sa status bar.

Ang display lang ang nirorounds. Ang mga dami, gastos at export ay kinukuwenta mula sa eksaktong haba, at palaging ipinapakita ng mga export ang 1/16".

## Waste sa simula

Ang porsyento ng waste na sinisimulan ng bawat bagong item: 0% (ang panimula), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. Maaari ka pa ring mag-type ng ibang waste para sa bawat item, sa item editor o direkta sa talahanayan ng mga dami. Pinapanatili ng mga item na mayroon ka na ang sarili nilang waste.

## Auto count: saan magsisimula ang match slider

Kung saan nakapuwesto ang slider ng {{ui:Match}} kapag natapos ang paghahanap ng [Auto count](topic:auto-count), mula 50% hanggang 95%; 75% ang panimula. Ang mas mababa ay nag-aalok ng mas maraming magkamukha para ma-reject mo; ang mas mataas ay nag-aalok ng mas kaunti. Maaari mo pa ring galawin ang slider sa bawat review.

## Mag-snap sa sariling linya ng drawing

Naka-on sa simula. Habang sumusukat ka o nagca-calibrate, ang puntong malapit sa linya ng PDF ay tumatalon sa dulo nito, sa midpoint nito, sa tawiran o sa pinakamalapit na punto nito. Pinapa-on at pinapa-off din ito ng {{key:F3}} at ng {{ui:Snap}} sa status bar. Higit pa: [Mag-snap sa mga linya ng drawing](topic:snap-to-the-drawing).

## Room fill: gaano kalapad na bukas ang isinasara nito

{{ui:Isasara ng room fill ang mga bukas hanggang}} ay nagtatakda kung gaano kalapad na pintuan o agwat ang itinuturing ng {{ui:Room}} na sarado: 3'-0" hanggang 8'-0", 4'-0" sa simula. Kapag mas malapad ito sa pinakamalapad mong pinto, tatakbo ang room sa katabing room; kapag mas makitid sa pinto, mananatiling bukas ang room. Tingnan ang [Punan ang room ng isang click](topic:measure-areas#fill-a-room-with-one-click).

## Mag-snap sa 45° nang walang Shift

Naka-off sa simula. Kapag naka-on, ang mga run, balangkas, cut-out at mga kinaladkad na sulok ay pupunta sa 0°, 45°, 90° o 135° mula sa huling punto nang hindi hawak ang {{key:Shift}}; hawakan ang {{key:Shift}} para mag-click sa anumang anggulo. Ang status bar ay magbabasa ng "Nagsa-snap sa 45°; hinahayaan ng Shift ang anggulo". Ang puntong ini-click mo sa kurba ng arc, at ang mga bilog, ay hindi kailanman nagsa-snap; ang dulo ng arc ay nagsa-snap.

## Laki ng count marker

Gaano kalaki ang mga count dot: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (ang panimula: ang laki na palaging mayroon ang mga dot) o {{ui:Large}}. Nananatili ang laki sa screen sa bawat zoom, at iginuguhit ng minarkahang PDF ang bawat dot sa parehong laki sa papel, anuman ang laki ng sheet, kaya ang PDF sa 100% ay magmumukhang gaya ng screen. Higit pa: [Mag-count nang manu-mano](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Corner indicator

Para sa [3D check view](topic:check-in-3d) lang: {{ui:View cube}} (ang panimula: isang cube sa kanang itaas na maaari mong i-click, kaladkarin at paikutin), {{ui:Axis icon}} (maliit na X, Y, Z marker sa kanang ibaba) o {{ui:Wala}}. Agad itong nagbabago at naitatago sa browser na ito. Hindi kailanman nagpapakita nito ang flat sheet.

## Path tool: pinakamalaking agwat na pinagdurugtong nito

{{ui:Path tool: pinakamalaking agwat na pagdurugtungin}} ay kung gaano kalayo ang dalawang dulo ng linya at maituturing pa ring iisang path, sa PDF points (0.05 hanggang 60; 1.5 sa simula). Madalas na humihinto nang kaunti ang mga linya ng drawing bago magtagpo. Mas maraming pinagdurugtong ang mas malaki; mas kaunti ang mas maliit, kaya nananatiling hiwalay ang mga linya. Binabago ito ng {{key:[}} at {{key:]}} habang pumipili ka, at sumusunod ang field na ito. Tingnan ang [Pumili ng mga linya](topic:pick-the-lines).
