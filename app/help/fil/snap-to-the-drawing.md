---
title: I-snap sa mga linya ng drawing
summary: Tumatalon ang mga punto sa mismong linework ng PDF habang nagme-measure o nagka-calibrate: mga dulo, midpoint, intersection o kahit saan sa isang linya, na may marker na nagsasabi kung alin.
keywords: snap, osnap, object snap, endpoint, midpoint, intersection, pinakamalapit, vector, linework, linya, tumpak, eksakto, f3, magnet, sulok
from: 41d29e9b
---

Karamihan sa mga plan set ay vector PDF: tunay na linya ang kanilang mga pader at gilid, hindi pixel. Habang nagme-measure, sina-snap ng TakeoffCraft ang iyong mga click sa mga linyang iyon, kaya eksaktong nagsisimula ang isang run sa sulok ng pader, at ang calibration ay bumabasa ng dimensyong iginuhit ng drafter, hindi ng pixel na natamaan mo.

Naka-on ang Snap kapag nagsimula ka. I-on at i-off ito gamit ang {{ui:Snap}} sa status bar o {{key:F3}}; naka-save ang setting sa browser na ito (nasa [Mga setting](topic:settings) din ito).

## Ano ang sina-snap nito

Kapag lumapit ang pointer sa loob ng humigit-kumulang 10 screen pixel ng isang linya, may lalabas na marker na nagpapakita kung saan lalapag ang click, kasama ang pangalan nito:

| Marker | Pangalan | Saan |
|---|---|---|
| Square | **End** | Ang dulo ng linya, o sulok kung saan nagtatagpo ang mga linya. Binibilang ang dalawang dulo ng kurba; hindi ang mga punto sa gitna nito. |
| Triangle | **Midpoint** | Ang gitna ng tuwid na linya. |
| Cross | **Intersection** | Kung saan nagsasalubong ang dalawang linya, o kung saan may nagtatapos sa isa pa. |
| Hourglass | **Sa linya** | Ang pinakamalapit na punto sa linya, kapag walang malapit na dulo, midpoint o intersection. |

Ang pinakamalapit na dulo, midpoint o intersection ang nananaig. Kapag wala sa malapit, saka lamang mapupunta ang punto sa mismong linya. Mag-zoom in para pumili sa pagitan ng mga punto na magkalapit: ang 10 pixel ay screen pixel, kaya sa mas mataas na zoom, mas maliit ang sakop nito sa sheet.

## Saan ito gumagana

Gumagana ang snap sa {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}}, {{ui:Cut-out}}, {{ui:Calibrate}} at {{ui:Check}}, at kapag hinila mo ang sulok ng napiling mark. Naglalagay din ito ng mga punto sa arko. Hindi nasa-snap ang {{ui:Count}}, {{ui:Auto count}} at pag-paste.

Nangingibabaw ang na-snap na punto sa 45° snap ng {{key:Shift}}: para gumuhit sa 45° palayo sa mga linya, i-off muna ang Snap gamit ang {{key:F3}}.

:::tip
Mag-calibrate habang naka-on ang Snap. Mag-click malapit sa dalawang dulo ng dimension line o pader na alam mo: parehong tumatama nang eksakto sa drawing ang dalawang punto, at lumalabas nang tama ang scale (pagkatapos ay ipinapangalan ng status bar ang preset na tugma dito).
:::

## Mga sheet na hindi kayang i-snap

- **Mga scanned sheet** ay mga larawan na walang linyang mapag-snapan. Sinasabi ng status bar na "Walang linyang mapag-snapan ang sheet na ito (ang scanned na pahina ay larawan)." at pupunta ang mga punto kung saan ka mag-click.
- **Napakalalaking drawing**: nagba-basa ang snap ng hanggang 400,000 line segment kada sheet. Sa sheet na may mas marami pa, sinasabi ito ng app at sa unang ilan lang nagsa-snap.
- **Teksto** ay hindi nasa-snap, maliban kung iginuhit ng PDF ang mga letra bilang linya (may ilang plotter na ganoon).

Nababasa ang mga linya ng sheet sa unang beses na buksan mo ito, sa background; maaaring abutin ng isang segundo ang malaking sheet bago lumitaw ang mga marker.
