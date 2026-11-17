---
title: Basahin ang mga dami at ang estimate
summary: Gamitin ang talahanayang Dami ayon sa item at ayon sa sheet, ang kabuuang job, highlighting, at ang Incomplete warning.
keywords: dami, kabuuan, ayon sa item, ayon sa sheet, kabuuang job, estimate, buod, ulat, highlight, incomplete, gastos
from: 069d41f1
---

Ang talahanayan ng {{ui:Dami}} sa ibaba ng window ang iyong live na estimate. Nagbabago ito sa sandaling gumuhit ka, magbura, mag-rescale, o mag-edit ng rate. Hindi kailanman sine-save ang mga dami; sinusukat ulit ang mga ito mula sa mga marka sa bawat pagkakataon, kaya hindi sila nagiging luma.

## Ayon sa item

Piliin ang {{ui:Ayon sa item}} (ang default). May sariling row ang bawat item, at may row sa ilalim nito ang bawat component ng assembly nito.

| Kolum | Kahulugan |
|---|---|
| Item | Pangalan, na may kulay ng item. Ang "+(n) unscaled" ay nangangahulugang may ilang marka sa mga sheet na walang scale. |
| Quantity (Dami) | Ang sinukat na kabuuan sa unit ng item (components: ang resulta ng formula). |
| Unit | LF, m, SF, SY, m², EA, o ang unit ng component. |
| Waste % | Itina-type dito o sa item editor. |
| With waste (May waste) | Dami × (1 + waste). |
| Material/unit, Labor/unit | Mga rate; maaari mo itong i-type dito. |
| Material, Labor | May waste × rate, binilog sa pinakamalapit na sentimo. |
| Total | Material + labor. |

Ang huling row, **Kabuuang job**, ay nagdaragdag ng mga kolum ng material, labor at total. Ang parehong kabuuan ay nakikita sa kanan ng header ng talahanayan.

Mag-type sa cell ng waste o rate at pindutin ang {{key:Enter}} o mag-click sa labas para ilapat ito. Ang value na hindi mabasa ng TakeoffCraft ay may pulang outline, at sinasabi ng status bar kung bakit, halimbawa "Mag-type ng halaga gaya ng 12.50."

Mag-click sa row ng item para i-highlight ang mga marka nito sa bawat sheet at tumalon sa sheet na mayroon nito (pareho ng pag-click dito sa ilalim ng {{ui:Items}}).

## Ayon sa sheet

Piliin ang {{ui:Ayon sa sheet}} para makita ang dami ng bawat item sa bawat sheet, kasama ang bilang ng mga marka. Mag-click sa row para buksan ang sheet na naka-highlight ang item. Gamitin ito para suriin na nasukat ang bawat sheet, o para hatiin ang mga dami ayon sa palapag o lugar ng trabaho.

## Ayon sa area

Kapag may bid area ang takeoff, inililista ng {{ui:Ayon sa area}} ang mga item ng bawat area at ang subtotal. Tingnan ang [Mga bid area](topic:bid-areas).

## Ang Incomplete warning

Kapag may naiwan sa mga total, nagpapakita ang header ng warning, halimbawa:

"Incomplete: 1 formula error, 6 marka sa mga sheet na walang scale (hindi kasama sa mga total)"

- **Mga error sa formula**: hindi makalkula ang formula ng component ng assembly. Ang row nito ay nagsasabing "Formula error: …". Tingnan ang [Mga assembly at formula](topic:assemblies#when-a-formula-is-wrong).
- **Mga marka sa sheet na walang scale**: bigyan ng scale ang mga sheet na iyon. Tingnan ang [Itakda ang scale](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Ang parehong note ay napupunta sa na-export na spreadsheet, kaya hindi kailanman magmumukhang kumpleto ang estimate na hindi kumpleto.

## Mag-highlight ng item

Mag-click sa item sa ilalim ng {{ui:Items}} o sa talahanayan. Nananatiling buo ang kulay ng mga marka nito sa bawat sheet, at mawawala ang kulay ng iba. Ipinapakita ng listahan ng sheets ang "(n) naka-highlight" sa bawat sheet na may marka nito. Mag-click ulit sa item para itigil ang pag-highlight.

## Mga kabuuan ng item sa side panel

Ipinapakita rin ng bawat item sa listahan ng {{ui:Items}} ang dami nito. Ipinapakita ng **Sinukat** block ng item editor ang mga value na ginagamit ng mga formula nito: haba, run at lawak ng pader; lawak, perimeter at bilang ng area; o bilang.

## Mga marka sa PDF na hindi bukas

Maaaring isama ng takeoff ang mga marka sa mga PDF na hindi mo binuksan sa pagkakataong ito. Binibilang pa rin ang mga ito sa bawat total; pinapangalanan ng listahan ng sheets ang mga PDF na iyon. Tingnan ang [I-save at buksan ulit ang takeoff](topic:save-and-reopen).

## Mas maraming espasyo

Ang arrow button sa kanan ng header ng {{ui:Dami}} ay nagtatago ng talahanayan para magkaroon ng mas maraming espasyo ang sheet. Pindutin ulit para ibalik ang talahanayan.
