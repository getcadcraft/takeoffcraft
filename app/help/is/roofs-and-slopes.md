---
title: Þök og hallar
summary: Gefðu svæði halla til að mæla yfirborð þaksins út frá grunnmyndinni, og mæltu gaflbrúnir, ása og dali eftir hallanum.
keywords: þak, halli, hallastuðull, ris, hlaup, 6:12, gaflbrún, ás, dalur, gafl, þakklæðning, ferningar, hallaflötur, sönn lengd, grunnflötur
from: 38225b60
---

Grunnmynd af þaki sýnir hvern þakflöt flatan, eins og hann sést að ofan. Þakið sjálft er stærra: flötur með 6:12 halla hefur um 12% meira yfirborð en grunnflöturinn, og hallandi jaðrar hans eru lengri en þeir virðast. Gefðu liðnum hallann og TakeoffCraft mælir eftir hallanum.

## Að slá inn halla

Halli er hækkun á hvert 12 hlaup, eins og á hallatáknum grunnmyndarinnar. Sláðu hann inn sem `6:12`, `6/12` eða bara `6`; annað hlaup virkar líka (`4:10` er 4.8:12). Horn virkar með gráðumerki: `26.57°`. Autt eða `0` er flatt.

## Þakflatarmál

1. Búðu til flatarmálslið fyrir þakklæðninguna, eða opnaðu þann sem þú átt.
2. Í stillingum hans skaltu slá inn **Halli**, til dæmis `6:12`.
3. Teiknaðu útlínur hvers þakflatar á grunnmyndinni með {{ui:Area}}, eins og venjulega.

Hver flötur telur grunnflatarmál sitt sinnum hallastuðulinn: √(1 + (ris ÷ 12)²), 1.118 við 6:12 og 1.414 við 12:12. Veldu flöt til að sjá **Flatarmál** (á hallanum), **Grunnflatarmál** og **Hallastuðul**.

Flatir með öðrum halla: veldu flötinn og slógu inn hans eigin **Halli** í spjaldinu hans. Skildu eftir autt til að nota halla liðarins. 3D-athugunarsýnin, samsetningarnar (`A` er hallandi flatarmál), kostnaðurinn og útflutningurinn nota allir hallandi flatarmálið. Útskurðir á hallandi fleti, eins og þakgluggar, eru dregnir frá á sama halla.

Ummálið (`P`) er áfram grunnummál. Mældu þakskegg, gaflbrúnir, ása og dali sem hlaup (hér að neðan).

## Gaflbrúnir, ásar og dalir

1. Búðu til línulegan lið, til dæmis „Gaflbrún“ eða „Ásar“.
2. Stilltu **Halla** hans á **Gaflbrún** (hallandi jaðar, eins og á gafli) eða **Ás eða dalur** (línan þar sem tveir fletir mætast), og slógu inn **Halli** þakflatanna.
3. Teiknaðu hlaupin á grunnmyndina með {{ui:Linear}}.

Gaflbrún telur grunnlengd sína sinnum hallastuðulinn. Ás eða dalur liggur í 45° þvert á grunnmyndina milli tveggja flata með sama halla, þannig að sönn lengd hans er grunnlengd sinnum √(1 + (ris ÷ 12)² ÷ 2): 1.061 við 6:12, 1.225 við 12:12.

Eitt hlaup getur blandað þessu saman. Veldu það: hver hluti í spjaldinu hans hefur lista yfir halla — **Halli liðarins** (stilling liðarins), **Lárétt**, **Gaflbrún** eða **Ás eða dalur** — og lengd hans eftir hallanum. Eigin **Halli** hlaupsins í spjaldinu kemur í stað halla liðarins fyrir alla hluta þess. Spjaldið sýnir líka **Grunnlengd**, og merkimiðarnir á blaðinu sýna lengdirnar eftir hallanum.

Frádrættir virka enn: frádreginn hluti telur ekkert, hvort sem hann er hallandi eða ekki.

:::note
Ásar og dalir gera ráð fyrir að báðir fletir hafi sama halla. Fyrir fleti með mismunandi halla skaltu mæla ásinn eftir sannri lengd á öðrum stað, eða teikna hann sem gaflbrún með jafngildum halla.
:::
