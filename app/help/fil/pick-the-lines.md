---
title: "Piliin ang mga linya ng PDF"
summary: "I-click ang linya ng vector PDF para sukatin ang buong konektadong path nito, o i-click sa loob ng saradong outline para sa lawak nito, kasama ang nakikitang gap tolerance at isang undo bawat segment."
keywords: "path, pick, linework, lines, konektado, buong run, trace, outline, perimeter, gap, tolerance, bridge, segments, tab, vector, area from lines, p"
from: c22526ae
---

Sa vector PDF, totoong linya ang mga pader at gilid. Kinukuha ng {{ui:Path}} ({{key:P}}) ang mga ito gaya ng pagkaguhit: isang click sa linya ay sumusukat sa lahat ng nakakabit dito, mula dulo hanggang dulo, kaya hindi mo kailangang i-trace ang pader sa pamamagitan ng pag-click sa mga kanto nito. Kailangan ng sheet ng scale. Walang linyang mapipili sa scanned na page; gamitin doon ang [Linear](topic:measure-linear) o [Area](topic:measure-areas).

## Pumili ng path o outline

1. Piliin ang {{ui:Path}}. Naka-outline ang linyang nasa ilalim ng pointer, at nakaguhit nang manipis ang ibang path na maaari nitong maging.
2. I-click ang linya: napipili ang buong konektadong path. Ibinibigay ng bar sa ilalim ng toolbar ang mga segment nito, haba, gap tolerance, at kung ilang gap ang na-bridge. Ang path na bumabalik sa simula nito ay sarado at nag-uulat din ng perimeter nito.
3. O i-click sa loob ng saradong outline, malayo sa anumang linya: ang outline sa paligid ng puntong iyon ay napipili bilang area. Nauuna ang pinakamaliit; sinusubukan ng {{key:Tab}} ang susunod na mas malaki.
4. Pindutin ang {{key:Enter}} (o right-click, o double-click) para idagdag ang mga mark. Ang napiling path ay nagiging mark ng isang **linear** na item, at ang outline ay mark ng isang **area** na item: ang aktibong item kung may ganoong uri, kung wala ang pinakabagong item ng uri na iyon. Kung wala, bumubukas ang form ng bagong item at walang idadagdag hangga't hindi mo muling pinipindot ang {{key:Enter}}. Lahat ng napili ay idinadagdag sa iisang undo step.

## Ang gap tolerance

Nag-iiwan ng maliliit na butas ang mga drafter kung saan dapat magtagpo ang mga linya. Nagdudugtong ang dalawang linya kapag mas malapit ang mga dulo nila kaysa sa **gap tolerance**. Nagsisimula ito sa 1.5 points sa sheet (ipinapakita sa feet at inches sa scale ng sheet), at isang dashed ring na kasinglapad nito ang sumusunod sa pointer at nakalagay sa bawat dulo ng path sa ilalim nito. Bawat butas na na-bridge ay may orange na ring sa napiling path, at binibilang ito ng bar.

Pinalalapad ng {{key:]}} ang tolerance, pinaliliit ito ng {{key:[}}. Agad na muling dinudugtong ang napiling path sa bagong tolerance. Sa junction, nagpapatuloy ang path nang diretso, sa daang pinakakaunti ang liko, at iniiwan ang branch.

## Mga key

| Key o aksyon | Ano ang ginagawa nito |
|---|---|
| Click | Piliin ang path sa ilalim ng pointer, o ang outline sa paligid nito. |
| {{key:Shift}} + click | Idagdag ang isa pang path o outline sa mga napili. |
| {{key:Tab}} | Subukan ang susunod na path sa ilalim ng pointer, o ang susunod na mas malaking outline. |
| {{key:Backspace}} o {{key:Mod+Z}} | Alisin ang huling segment ng huling napiling path, isang segment kada beses. Mawawala ang path na wala nang segment. Kapag walang napili, ang {{key:Mod+Z}} ay ang karaniwang undo. |
| {{key:[}} at {{key:]}} | Mas makitid at mas malapad na gap tolerance. |
| {{key:Enter}} | Idagdag ang mga mark. |
| {{key:Esc}} | Alisin ang napili. |

## Mabuting malaman

- Ang kurba sa drawing ay kadena ng maiikling tuwid na piraso, kaya bahagyang mas maikli ang haba nito kaysa sa tunay na arc. Para sa eksaktong arc, sukatin mula sa mismong file ng drawing ([Sukatin mula sa drawing](topic:measure-from-a-drawing)).
- Ang na-bridge na gap ay binibilang bilang tuwid na tawiran sa ibabaw nito, kaya kasama nito sa perimeter ng saradong outline.
- Ang stroke at fill lang sa sariling path ng page ang linya. Ang text na iginuhit bilang mga letra, at ang mga larawan, ay hindi.
