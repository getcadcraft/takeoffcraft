---
title: Mga scale preset
summary: Bawat preset sa listahan ng Preset (architectural, engineering at metric) at kung ano ang ipinapalagay ng bawat isa tungkol sa PDF.
keywords: scale, mga preset, architectural scale, engineering scale, metric scale, ratio, 1/4 inch, 1/8 inch, 1:100, buong laki
from: 31ac0000
---

Ang listahan ng {{ui:Preset}} sa grupong {{ui:Scale}} ay may 32 scale sa tatlong grupo. Eksaktong itinatakda ng preset ang scale ng bukas na sheet.

Ipinapalagay ng bawat preset na ang PDF page ay ang totoong laki ng papel ng drawing: isang pulgada sa PDF page ay isang pulgada ng papel (ang mga PDF page ay 72 point bawat pulgada). Kung na-resize ang PDF, gamitin ang {{ui:I-calibrate}}. Gamitin ang {{ui:Suriin}} pagkatapos magtakda ng anumang scale. Tingnan ang [Itakda ang scale](topic:set-the-scale).

## Architectural

| Preset | Isang pulgada sa papel ay |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Engineering

| Preset | Isang pulgada sa papel ay |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metric

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Ang metric ratio ay nangangahulugang isang unit sa papel ay ganoon karaming unit sa totoong buhay: sa `1:100`, 10 mm sa page ay 1 m.

## Calibrated scales

Ang calibrated scale ay lumalabas bilang "Calibrated 1" = 4.002' sa 24'-6"" sa bar sa ilalim ng sheet: totoong feet bawat pulgada ng papel, at ang distansyang na-type mo. Kapag nasa loob ito ng 0.5% ng isang preset, nagdadagdag ang bar ng "(tumutugma sa 1/4" = 1'-0")" at ipinapakita ng listahan ng sheets ang pangalan ng preset.

## Kakaibang PDF

Ang ilang PDF ay nagdedeklara ng mas malaking unit ng page (isang "user unit"); isinasaalang-alang ito ng TakeoffCraft para sa mga preset at sa ipinapakitang scale. Ang mga page na naka-rotate sa PDF ay sinusukat nang pareho sa mga nakatayong page.
