---
title: Einingar
summary: Einingarnar sem liður getur birt, einingarnar sem breytur formúlna nota og hvernig breskar og metrískar einingar blandast.
keywords: einingar, lf, sf, sy, sq, ferjarðir, þakferningar, ekrur, hektarar, metrar, fermetrar, ea, stykki, metrakerfi, breskt kerfi, umreikningur, sjálfgefin eining
from: b7bf0528
---

## Einingar liða

| Gerð liðar | Eining | Heiti |
|---|---|---|
| Línuleg | LF | línuleg fet (sjálfgefið) |
| Línuleg | m | metrar |
| Flatarmál | SF | ferfet (sjálfgefið) |
| Flatarmál | SY | ferjarðir |
| Flatarmál | SQ | þakferningar (100 ferfet) |
| Flatarmál | ac | ekrur |
| Flatarmál | m² | fermetrar |
| Flatarmál | ha | hektarar |
| Telja | EA | hvert stykki |

Breyttu henni með {{ui:Eining}} í ritlinum fyrir liði hvenær sem er, jafnvel eftir mælingu; magnið er umreiknað strax.

Listinn {{ui:Eining}} sýnir einingarnar sem kveiktar eru í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Einingar}}, og alltaf eigin einingu liðarins. Nýr liður byrjar í lengdar- eða flatarmálseiningunni sem er merkt þar með stjörnu, þegar hún er ein af einingum liðarins; annars í LF eða SF. Sjá [Einingar, innslegin gildi og einingalistar](common:unit-lists).

## Einingar formúlubreyta

| Eining liðar | L, P, H | A |
|---|---|---|
| LF | fet | ferfet (veggflötur) |
| m | metrar | fermetrar (veggflötur) |
| SF | fet | ferfet |
| SY | fet | ferjarðir |
| SQ | fet | þakferningar |
| ac | fet | ekrur |
| m² | metrar | fermetrar |
| ha | metrar | hektarar |

Fyrir SY-liði er `A` í ferjörðum en `P` og `H` haldast í fetum. Rúmmál úr SY-lið er `A * 9 * H / 27` rúmjarðir; að nota SF fyrir plötur er einfaldara.

## Hvar einingar eru fastar

Sumar mælingar nota alltaf fet:

- lifandi mælingin í stöðustikunni meðan teiknað er (fet-tommur, SF),
- **Valin markering** (fet-tommur, LF og SF),
- niðurstaða athugunar (fet-tommur, með aukastafa fetum og metrum),
- lengdir hluta og ummál í **Markeringar**-vinnublaði töflureiknisins (fet-tommur).

Samtölur liða, {{ui:Magntölur}}-taflan, formúlur og Áætlunar-vinnublaðið nota eigin einingu liðarins.

## Mælikvarðar og einingar eru aðskildar

Mælikvarði blaðs segir hversu stór teikningin er; eining liðarins segir hvernig skila skal henni. Metrísk teikning í `1:100` má magntaka í LF, og teikning í breskum einingum í m². Kvörðun tekur við hvaða einingu sem er: `24'-6"`, `7.5 m`, `7500 mm`.

## Nákvæmni

TakeoffCraft mælir nákvæmlega út frá punktunum sem þú smellir á, þar á meðal raunverulegar bogalengdir og flatarmál, og rúnnar ekki magntölur. Birting rúnnar lengdir að 1/16 tommu og aukastafi niður í tvo. Peningar eru aðeins rúnnaðir í heildarupphæðunum, að sentinum.
