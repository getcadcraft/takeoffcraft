---
title: Smella í línur teikningarinnar
summary: Punktar smella á línuverk PDF-skjalsins meðan þú mælir eða kvarðar: enda, miðpunkta, skurðpunkta eða hvar sem er á línu, með merki sem sýnir hvaða punktur það er.
keywords: smella, osnap, hlutasmellun, endapunktur, miðpunktur, skurðpunktur, næsti, vigur, línuverk, línur, nákvæmt, nákvæmlega, f3, segull, horn
from: 41d29e9b
---

Flest teikningasett eru vigur-PDF-skjöl: veggir þeirra og brúnir eru raunverulegar línur, ekki mynddílar. Á meðan þú mælir smellir TakeoffCraft punktunum þínum á þessar línur, þannig að byrjun á runu er nákvæmlega á horni veggs og kvörðun les víddina sem teiknarinn teiknaði, en ekki mynddílinn sem þú smellir á.

Smellun er á þegar þú byrjar. Kveiktu og slökktu á henni með {{ui:Smella}} í stöðustikunni eða {{key:F3}}; stillingin geymist í þessum vafra (hún er einnig undir [Stillingar](topic:settings)).

## Hvað smellt er á

Þegar bendillinn kemst innan um 10 skjádíla frá línu sýnir merki hvar smellið lendir, ásamt heiti þess:

| Merki | Heiti | Hvar |
|---|---|---|
| Ferningur | **Endi** | Endi línu, eða horn þar sem línur mætast. Báðir endar bogalínu teljast; punktar meðfram henni gera það ekki. |
| Þríhyrningur | **Miðpunktur** | Miðja beinnar línu. |
| Kross | **Skurðpunktur** | Þar sem tvær línur skerast, eða þar sem önnur endar á hinni. |
| Stundaglas | **Á línunni** | Næsti punktur á línu, þegar enginn endi, miðpunktur eða skurðpunktur er nálægt. |

Næsti endi, miðpunktur eða skurðpunktur vinnur. Punkturinn lendir aðeins á línunni sjálfri þegar ekkert þeirra er nálægt. Stækkaðu aðdráttinn til að velja á milli punkta sem liggja þétt saman: 10 skjádílarnir eru skjádílar, þannig að við hærri aðdrátt þekja þeir minna af blaðinu.

## Hvar það virkar

Smellun virkar í {{ui:Línuleg}}, {{ui:Flatarmál}}, {{ui:Hringur}}, {{ui:Úrskurður}}, {{ui:Kvarða}} og {{ui:Athuga}}, og þegar þú dregur horn á völdu merki. Hún staðsetur einnig punkta á bogum. {{ui:Telja}}, {{ui:Sjálftalning}} og líming smella ekki.

Punktur sem smellt er á vinnur fram yfir 45° smellingu {{key:Shift}}: til að teikna í 45° frá línunum skaltu fyrst slökkva á smellingu með {{key:F3}}.

:::tip
Kvarðaðu með smellingu kveikta. Smelltu nálægt báðum endum málsetningarlínu eða vegg sem þú þekkir: báðir punktarnir lenda nákvæmlega á teikningunni og mælikvarðinn verður nákvæmur (stöðustikan nefnir þá forstillinguna sem hann passar við).
:::

## Blöð sem ekki er hægt að smella á

- **Skannaðar teikningar** eru myndir án lína sem hægt er að smella á. Stöðustikan segir „Þetta blað hefur engar línur sem hægt er að smella á (skönnuð síða er mynd).“ og punktar fara þangað sem þú smellir.
- **Mjög stórar teikningar**: smellingin les allt að 400.000 línustrik á hvert blað. Ef blaðið hefur fleiri segir það til um það og smellir aðeins á þau fyrstu.
- **Texti** er ekki smelltur á, nema PDF-skjalið teikni stafina sem línur (sumir teiknarar gera það).

Línur blaðsins eru lesnar í fyrsta skipti sem þú opnar það, í bakgrunni; stórt blað getur tekið sekúndu áður en merkin birtast.
