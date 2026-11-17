---
title: Sukatin mula sa drawing
summary: Kumuha ng haba at area mula sa mismong linya, arc, polyline at hatch ng drawing sa pamamagitan ng pagpili sa mga ito, may eksaktong arc at butas, sa halip na i-trace gamit ang click.
keywords: measure drawing, geometry, polyline, arc, circle, hatch, bulge, eksaktong haba, eksaktong area, pick, window, trace, mula sa cad, linear, area
from: fd734246
---

Ang {{ui:Measure drawing}} sa sheet bar ng DWG o DXF sheet ay kumukuha ng mismong object ng drawing bilang mark, kaya hindi mo na kailangang i-trace ang mga ito gamit ang click. Eksakto ang haba ng polyline, haba ng arc, area ng circle, at area ng hatch kasama ang mga butas nito, mula sa parehong aritmetika na ginagamit ng takeoff para sa bawat mark.

## Kumuha ng mga object bilang linear o area item

1. Gumawa o i-click ang **linear** o **area** na item sa ilalim ng {{ui:Items}}. Kailangan ng sheet ng scale.
2. Piliin ang {{ui:Measure drawing}}.
3. I-click ang mga object sa sheet para piliin ang mga ito, o i-drag ang window sa paligid ng mga ito: lahat ng ganap na nasa loob nito ay napipili. Idinadagdag ng {{key:Shift}} ang window sa napili; i-click muli ang napiling object para alisin ito. Ipinapakita ng bar ang kabuuan: "6 runs: 108'-9 1/8" in all."
4. Piliin ang add button, na nagsasabi ng bilang at item, gaya ng {{ui:Idagdag ang 6 sa Edge}} (o pindutin ang {{key:Enter}}). Bawat object ay nagiging isang mark ng item, sa iisang undo step. Inaalis ng {{key:Esc}} ang napili mo.

## Ano ang kinukuha ng bawat uri ng item

- Kinukuha ng **linear** na item ang mga linya, arc, polyline, circle at spline ayon sa haba. Ang saradong hugis ay binibilang ayon sa perimeter nito. Hindi kasama ang hatch: may area ito, hindi haba, at sinasabi ito ng bar.
- Kinukuha ng **area** na item ang mga saradong hugis: saradong polyline, circle, 2D solid, at hatch kasama ang mga butas nito. Hindi kasama ang bukas na run, at sinasabi ito ng bar.

## Eksakto, at halos eksakto

Eksakto ang mga linya, arc (anumang bulge), polyline na may bulge at circle: gumagamit ang haba at area ng radius at sweep ng arc, hindi ng larawan nito. Ang ellipse, spline at hatch na ang hangganan ay gawa sa mga gilid ay sinusukat gamit ang chord na isang degree o mas pino, na nasa loob ng 0.01% para sa ellipse at 0.1% para sa iba; sinasabi ng bar kung ilan sa mga napili mo ang kurbang ganitong uri.

## Saan ito kumukuha

- **Model**: mga object sa model space. **Isang layout**: sarili nitong mga linya, at ang mga model object sa loob ng viewport, na naka-scale sa pamamagitan nito. Hindi inaalok ang object na tumatawid sa gilid ng viewport (lalabas itong putol kapag na-plot); ang object na ipinapakita ng dalawang viewport ay kinukuha nang isang beses.
- Mga layer lamang na ipinapakita ng sheet. Ang mga block ay binibilang, hindi sinusukat: tingnan ang [Magbilang mula sa drawing](topic:count-from-a-drawing). Hindi inaalok ang 3D polyline, mesh, solid at region.
