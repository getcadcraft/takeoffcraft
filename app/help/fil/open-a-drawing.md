---
title: "Magbukas ng DWG o DXF drawing"
summary: "Buksan ang drawing file bilang mga sheet (model space at bawat layout), magsimula sa scale na ibinibigay ng drawing, ipakita o itago ang mga layer nito, at i-import ang mga naka-link na drawing."
keywords: "dwg, dxf, cad, drawing, magbukas ng drawing, layouts, model space, paper space, sheets, units, insunits, viewport scale, xref, naka-link na drawing, layers, frozen, walang pdf, plot, nang walang plotting"
from: d8c3f504
---

Nagbubukas ang TakeoffCraft ng DWG o DXF drawing gaya ng pagbubukas nito ng PDF: hindi mo kailangang i-plot muna ito sa PDF. Tumpak ang pagbilang mula mismo sa drawing dahil alam ng drawing kung ano ang bawat bagay. Tingnan ang [Bilangin mula sa drawing](topic:count-from-a-drawing).

## Buksan ang drawing

1. Piliin ang {{ui:Buksan ang plano}} sa pangkat na {{ui:File}}, o pindutin ang {{key:Mod+O}}.
2. Piliin ang DWG o DXF file. Maaari kang pumili ng marami, at kasama rin ang mga PDF.
3. Piliin ang Buksan.

Maaari mo ring i-drop ang mga drawing file sa TakeoffCraft, gaya ng mga PDF. Walang ina-upload: binabasa ng browser ang file sa computer mo.

Bumabasa ang TakeoffCraft ng DWG mula AutoCAD 2000 hanggang 2018, at ASCII DXF mula R12 hanggang 2018. Tinatanggihan nito ang binary DXF (i-save ito bilang ASCII, o bilang DWG) at ang file na hindi alin man sa dalawa, at sinasabi nito kung bakit. Ang sirang file ay nagbubukas sa kung ano ang nabasa, at may mensaheng nagsasabi nito; maaaring kulang ang mga bilang nito.

## Mga sheet

- **Model** ang model space ng drawing.
- **Bawat layout** (paper space tab) ay isang sheet, pinangalanan ayon sa tab nito, ayon sa ayos ng tab. Ipinapakita ng layout ang model sa pamamagitan ng mga viewport nito, gaya ng pagka-plot nito.

Gumagana ang zoom, pan, pag-snap sa sariling linya ng drawing, mga mark, note, {{ui:I-calibrate}} at iba pa gaya sa PDF. Ang mga sheet ng drawing ay nise-save sa takeoff ayon sa pangalan ng file at fingerprint ng laman nito, gaya ng PDF: buksan muli ang parehong file at nasa mga sheet pa rin ang mga mark.

## Ang scale

Nagsisimula ang sheet sa scale na ibinibigay ng drawing:

- **Ang layout** ay kumukuha ng scale ng pinakamalaking viewport nito. Ang scale tulad ng 1/2" = 1'-0" ay pinangalanan bilang preset na katumbas nito; ang iba ay ipinapakita bilang "From the drawing's viewport: 1" = 2.5'". Kung may viewport ang layout sa ibang scale, ang pinakamalaki ang magtatakda ng scale ng sheet: suriin ang iba gamit ang {{ui:Suriin}}.
- **Model** ay kumukuha ng units ng drawing (inches, millimeters, feet…) bilang scale nito, "Drawing units (inches)".
- **Drawing na walang units** (hindi sinabi ng drawing kung inch o millimeter ang unit) ay walang scale: sinasabi ng sheet na "No scale", at tinatanggihan ang pagsukat dito, gaya ng PDF na walang scale. Hindi kailangan ng scale sa pagbilang. Bigyan ito ng isa gamit ang {{ui:I-calibrate}}.

Ang {{ui:I-calibrate}}, {{ui:Suriin}} at ang listahan ng {{ui:Preset}} ay nagbabago ng scale anumang oras, at nangingibabaw ang mga ito sa scale ng drawing. Naka-off ang listahan ng preset sa Model, na walang paper size.

## Mga layer

{{ui:Layers}} sa sheet bar ay naglilista ng mga layer ng drawing, kasama kung ilang bagay ang bawat isa sa sheet na ito. Ang mga layer na pinatay o na-freeze ng file ay nagsisimulang nakatago. Alisan ng tsek ang layer para itago ito, o lagyan ng tsek ang nakatagong layer para ipakita: gumuguhit muli ang sheet, at ang nakatago ay hindi kasama sa mga bilang at sa mga bagay na iniaalok sa {{ui:Measure drawing}}, maliban kung humiling kang bilangin din ang mga nakatagong layer. Ipinapakita ng {{ui:Ipakita lahat}} ang bawat layer; binabawi ng {{ui:Bumalik sa mga layer ng file}} ang mga pagbabago mo. Ang mga pagpili sa layer ay bahagi ng session na ito, hindi ng takeoff file.

## Mga naka-link na drawing (xrefs)

Ipinapakita ng drawing na nagli-link ng ibang drawing ang mga ito kung saan sila ipinasok. Hinahanap ng TakeoffCraft ang naka-link na drawing sa mga **bukas na file**, ayon sa file name nito: buksan ang host drawing at ang naka-link na drawing nang sabay (o isa-isa). Hanggang doon, sinasabi ng status bar kung ilang naka-link na drawing ang hindi nakita, na kulang ang iginuguhit ng mga ito, at sinasabi ito ng mga bilang.

## Mga limitasyon

- Ang mga bagay na hindi mabasa o mailagay ng TakeoffCraft (proxy object, hindi kilalang class) ay nakalista sa count window ayon sa uri; hindi sila kailanman inaalis nang walang sinasabi.
- Ang napakalalaking drawing ay iginuguhit nang bahagya, at humihinto ang bilang sa isang cap, at sinasabi ito. Magbukas ng PDF plot ng ganoong drawing sa halip.
- Iginuguhit ang drawing sa itim at sa sarili nitong mga kulay, pinadilim para sa puting papel. Hindi ina-apply ang plot style table at pen assignment.
