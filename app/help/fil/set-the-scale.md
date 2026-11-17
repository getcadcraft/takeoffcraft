---
title: Itakda ang scale
summary: Bigyan ang bawat sheet ng scale gamit ang preset o sa pamamagitan ng calibrate sa kilalang sukat, suriin ito, at unawain kung bakit hindi isinasama sa mga total ang mga sheet na walang scale.
keywords: tukuyin ang scale, basahin ang scale, scale mula sa text, lahat ng sheet, scale, calibrate, preset, suriin ang scale, i-verify, kilalang sukat, hindi naka-scale, walang scale, ratio, itakda ang scale
from: 8f0148e6
---

Bawat sheet ay may sariling scale. Itatakda mo ito, o hahayaang basahin ito ng TakeoffCraft mula sa text ng mga sheet (sa ibaba), at susuriin mo ito. Hangga't walang scale ang sheet, hindi ito masusukat ng {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} at {{ui:Cut-out}}. Gumagana nang walang scale ang {{ui:Count}} at {{ui:Auto count}}.

Ipinapakita ng listahan ng sheets ang scale ng bawat sheet, o **Walang scale**. Ganoon din ang sinasabi ng bar sa ilalim ng bukas na sheet.

## Gumamit ng preset (kapag naka-print sa buong laki ang PDF)

1. Buksan ang sheet.
2. Buksan ang listahan ng {{ui:Preset}} sa grupong {{ui:Scale}}.
3. Piliin ang scale na naka-print sa drawing, halimbawa `1/8" = 1'-0"` sa ilalim ng Architectural.
   Sinasabi ng status bar ang "Scale para sa sheet na ito: 1/8" = 1'-0"."
4. Suriin ito (sa ibaba).

Ipinapalagay ng preset na ang PDF ay ang totoong laki ng papel na pinagawaan ng drawing. Kung ginawa ang PDF gamit ang "fit to page", o half-size na set ito, mali ang preset. I-calibrate na lang sa halip.

Ang buong listahan ay nasa [Mga scale preset](topic:scale-presets).

## Basahin ang mga scale mula sa text ng mga sheet

Karamihan sa mga drawing ay nagsasabi ng scale nila: `SCALE: 1/4" = 1'-0"` sa title block, `1:100` sa ilalim ng isang view. Mababasa ito ng TakeoffCraft at maitatakda nito ang bawat sheet nang sabay-sabay.

1. Buksan ang listahan ng {{ui:Preset}} at piliin ang {{ui:Mula sa text ng mga sheet…}} (nasa itaas).
2. Ipinapakita ng listahan ang bawat sheet: ang scale nito ngayon, at kung ano ang sinasabi ng text nito — **Nagsasabing 1/4" = 1'-0"**, **Walang scale sa text nito**, o **Nagsasabing hindi naka-scale** (NTS).
3. Ang mga sheet na walang scale at may sinasabing scale ay tsinek. Tsekan o alisin ang tsek sa alinman, pagkatapos piliin ang {{ui:Itakda ang mga tsekadong scale}}. Binabawi ng isang {{key:Mod+Z}} ang lahat.
4. Suriin ang isang dimension sa bawat sheet gamit ang {{ui:Suriin}} (sa ibaba): tama lang ang preset kapag naka-print sa buong laki ang PDF.

Binabasa nito ang architectural (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), engineering (`1" = 20'`) at metric (`1:50`) na notasyon na tumutugma sa isang [preset](topic:scale-presets). Kapag higit sa isang scale ang sinasabi ng sheet (plano na may pinalaking detalye), kukunin nito ang madalas nitong banggitin, at ang nakasulat pagkatapos ng salitang SCALE ay binibilang nang doble; ang iba ay ipinapakita sa pula para masuri mo. Ang na-scan na sheet ay walang text: itakda ang scale nito nang manu-mano.

## Mag-calibrate sa kilalang sukat

Gamitin ito kapag walang naka-print na scale na mapagkakatiwalaan mo, na-resize ang set, o sinasabi ng sheet na "not to scale" pero may mga dimension.

1. Buksan ang sheet at mag-zoom in sa mahabang dimension na alam mo, gaya ng agwat ng grid line o kabuuang dimension ng gusali. Kung mas mahaba, mas tumpak.
2. Piliin ang {{ui:Calibrate}} sa grupong {{ui:Scale}}, o pindutin ang {{key:K}}.
3. I-click ang isang dulo ng dimension. Mag-zoom in sa bawat dulo para sa katumpakan; maaari kang mag-zoom at mag-pan sa pagitan ng mga click.
4. I-click ang kabilang dulo. Hawakan ang {{key:Shift}} para manatili ang linya sa 0°, 45° o 90°.
   Bubukas ang dialog na **I-calibrate ang sheet na ito**.
5. I-type ang totoong distansya sa **Real distance**, halimbawa `24'-6 1/2"`, `24.5` (decimal feet), `30"` o `7.5 m`. Tingnan ang [Pagpasok ng haba, rate at porsyento](topic:entry-formats).
6. Piliin ang {{ui:Itakda ang scale}}.
   Ipinapakita ng status bar ang scale bilang "1" = (n)'", at kapag nasa loob ito ng 0.5% ng isang preset, sinasabi nito kung alin, halimbawa "na tumutugma sa 1/4" = 1'-0" (piliin ang preset na iyon para sa eksaktong scale)".
   Bumabalik ang TakeoffCraft sa tool na {{ui:Piliin}}.

Kapag tumugma ang calibration sa isang preset, ang pagpili sa preset na iyon ay nagbibigay ng eksaktong scale sa halip na isa na nakadepende sa kung saan ka nag-click.

## Suriin ang scale

Laging suriin ang bagong scale sa ikalawang dimension.

1. Piliin ang {{ui:Suriin}} sa grupong {{ui:Scale}}, o pindutin ang {{key:D}}.
2. I-click ang magkabilang dulo ng dimension na naka-print sa drawing.
   Ipinapakita ng status bar ang "Check: 12'-6"" na may parehong haba sa decimal feet at sa meter, at nananatili ang check line sa sheet kasama ang haba nito.
3. Ihambing ito sa naka-print na dimension. Kung may mali, mag-calibrate sa mas mahabang dimension.

Pindutin ang {{key:Esc}} para burahin ang check line.

## Baguhin ang scale

Pumili ng ibang preset o mag-calibrate ulit. Kung may mga sukat na ang sheet, magtatanong ang TakeoffCraft: **Baguhin ang scale ng sheet na ito?** at sasabihin kung ilang sukat ang susukatin ulit. Piliin ang {{ui:Palitan ang scale}}. Muling susukatin ang bawat run at area sa sheet sa bagong scale. Maaari mo itong i-undo gamit ang {{key:Mod+Z}}.

## Bakit hindi binibilang na zero ang mga sheet na walang scale

Ang marka sa sheet na walang scale ay walang totoong haba o lawak. Hindi ito kailanman binibilang ng TakeoffCraft bilang zero, dahil tahimik nitong gagawing masyadong mababa ang estimate mo. Sa halip, ginagawa nito ang mga sumusunod:

- inilalabas ang mga marka sa mga total,
- ipinapakita ang "+(n) hindi naka-scale" sa tabi ng item sa {{ui:Dami}},
- ipinapakita ang "Incomplete: (n) marka sa mga sheet na walang scale (hindi kasama sa mga total)" sa header ng talahanayan,
- isinusulat ang bilang sa notes column ng spreadsheet export.

Maaari itong mangyari kapag nagbukas ka ng project na hindi kailanman naitakda ang mga scale. Bigyan ng scale ang sheet at kaagad na mabibilang ang mga marka. Palaging binibilang ang mga count mark; hindi sila nangangailangan ng scale.

## Mga tip

- Itakda ang scale ng bawat sheet na susukatin mo bago ka magsimula. Hanapin sa listahan ng sheets ang **Walang scale** para makita ang mga natitira. (Ang search box ay tumitingin sa pangalan ng sheet, hindi sa scale.)
- Ang mga detalye at pinalaking plano sa parehong sheet ay kadalasang may ibang scale. Isang scale lang ang kayang hawakan ng TakeoffCraft bawat sheet; tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
- Mga metric na drawing: pumili ng metric na preset gaya ng `1:100`, o mag-calibrate gamit ang metric na distansya gaya ng `6000 mm`.
