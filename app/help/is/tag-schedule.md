---
title: Fluttu merkjalista inn sem magntölur
summary: Merkjalisti sem er fluttur út úr byggingarlíkaninu (CSV) verður að tegundarmagntölum í magntökunni, ein fyrir hvert merki, þannig að fjöldi og flatarmál úr líkaninu standa við hliðina á því sem þú mældir.
keywords: merki, merkjalisti, byggingarlíkan, bimcraft, ifc, magntölur, csv, listi, innflutningur, tegundarmagntala
from: a60c19b6
---

{{ui:Merki}} á tækjastikunni flytur inn merkjalista sem BimCraft vistaði sem CSV-skrá. Hvert aðgreint merki verður að tegundarmagntölu, af sömu gerð og skurður og fylling CivilCraft verða.

1. Í BimCraft, búðu til merkjalistann sem þú vilt og vistaðu hann sem CSV.
2. Veldu {{ui:Merki}} og veldu skrána.
3. Tilgreindu hvaða dálkur nefnir línuna ({{ui:Nefna línuna eftir}}, venjulega merkið) og hvaða dálkur geymir töluna ({{ui:Magn úr}}). Með {{ui:Telja línurnar}} telst hver lína sem ein.
4. Veldu eininguna. Lengd í millimetrum verður að metrum með {{ui:Margfalda með}} 0.001.
5. {{ui:Bæta magntölum við}}.

Línur með sama merki eru lagðar saman. Reitur sem er ekki tala er sleppt og talinn í samantektinni. Ef sami listinn er fluttur inn aftur uppfærir hann magntölurnar sem þú átt nú þegar í stað þess að bæta við fleiri; heiti þeirra, einingarverð og afgangur eru áfram þín.

## Gott að vita

Tegundarmagntala er ekki mæld á blaði, þannig að hún hefur engar markeringar. Ekkert er sent neitt; skráin er lesin hér.
