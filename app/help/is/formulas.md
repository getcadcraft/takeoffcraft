---
title: Formúlumál
summary: Reglurnar fyrir magnformúlur samsetninga — breytur, aðgerðarmerki, föll, ávalningu og öll villuboð.
keywords: formúla, tjáning, setningafræði, föll, ceil, floor, round, min, max, abs, breytur, aðgerðarmerki, reikningur
from: 4da14575
---

Íhlutir samsetninga fá magn sitt úr formúlu. Formúla er lítil reiknitjáning yfir mældu gildum liðarins. Sjá [Samsetningar og formúlur](topic:assemblies) fyrir unnin dæmi.

## Breytur

| Tegund liðar | Breyta | Merking |
|---|---|---|
| Línulegt | `L` | Heildarlengd |
| Línulegt | `H` | Hæð liðarins |
| Línulegt | `A` | Veggflötur, L × H, að frádregnum opum þeirra hlaupa sem bera þau (magntaka úr BimCraft). Þegar sú magntaka nefnir mælingaaðferð er `A` mælt með henni: op sem eru ekki stærri en minnsta stærð aðferðarinnar haldast inni, og það sem aðferðin tekur af þar sem veggir mætast er undanskilið. Athugasemdin undir liðnum nefnir aðferðina |
| Línulegt | `N` | Fjöldi hlaupa |
| Flatarmál | `A` | Heildar nettóflatarmál (útlínur mínus útskurðir) |
| Flatarmál | `P` | Heildarummál, þar með taldar útskurðabrúnir |
| Flatarmál | `H` | Dýpt eða þykkt liðarins |
| Flatarmál | `N` | Fjöldi flatarmála |
| Talning | `N` | Talningin |

- Breytur eru í einingum liðarins: sjá [Einingar](topic:units).
- Há- og lágstafir eru þeir sömu: `l` er `L`.
- Aðeins breytur af tegund liðarins virka. `P` á línulegum lið gefur `"P" er ekki mælt gildi hér. Notaðu L, H, A, N.`
- Tóm hæð eða dýpt er 0.

## Aðgerðarmerki

| Skrifaðu | Merking |
|---|---|
| `+` | Leggja saman |
| `-` eða `−` | Draga frá, eða neikvætt gildi |
| `*` eða `×` | Margfalda |
| `/` eða `÷` | Deila |
| `( )` | Hópa |

Margföldun og deiling ganga á undan samlagningu og frádrætti: `L * 2 + 4` er (L × 2) + 4. Notaðu sviga ef þú ert í vafa.

Tölur geta haft aukastafi (`1.333`, `.5`) og veldisvísa (`1e3` = 1000). Bil eru hunsuð.

## Föll

| Fall | Niðurstaða | Dæmi |
|---|---|---|
| `ceil(x)` | Ávalar upp í heila tölu | `ceil(67.5)` = 68 |
| `floor(x)` | Ávalar niður í heila tölu | `floor(67.5)` = 67 |
| `round(x)` | Ávalar að næstu heilu tölu, miðgildi frá núlli | `round(2.5)` = 3 |
| `round(x, d)` | Ávalar að d aukastöfum (0 til 10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Minnsta gildi | `min(N, 10)` |
| `max(a, b, …)` | Stærsta gildi | `max(1, ceil(N / 12))` |
| `abs(x)` | Gildið án formerkis | `abs(-3)` = 3 |

`ceil` og `floor` hunsa smávægilega ávölnunarskekkju í tölvu, þannig að gildi sem á að vera nákvæmlega 1 er aldrei ávalað upp í 2.

## Villur

Formúla sem ekki er hægt að lesa eða reikna sýnir villu sína undir reitnum, og liðurinn er skilinn eftir í samtölunum ({{ui:Magntölur}}-hausinn segir „Ófullkomið“). Skilaboð:

| Skilaboð | Lausn |
|---|---|
| Skrifaðu formúlu, til dæmis L eða ceil(L / 1.333) + 1. | Formúlan er tóm. |
| "X" er ekki mælt gildi hér. Notaðu … | Notaðu eina af skráðum breytum. |
| "X" er ekki fall hér. Notaðu ceil, floor, round, min, max, abs. | Notaðu eitt af þessum föllum. |
| "#" er ekki leyft í formúlu. | Fjarlægðu þann staf (einingar, `%`, `$` og `=` eru ekki leyfð). |
| Vantar ")". / Það er ")" án síns "(". | Jafnaðu sviga. |
| Gildi vantar á undan ")". | Eitthvað eins og `max(1, )`: fylltu inn gildið. |
| Formúlan endar of snemma. | Eitthvað eins og `L *`: ljúktu henni. |
| Óvænt "…". Vantar aðgerðarmerki? | Tvö gildi hlið við hlið, eins og `2L`: skrifaðu `2 * L`. |
| ceil() tekur 1 gildi. | Gefðu fallinu rétt fjölda gilda. |
| round(x, digits) þarf heilar tölur frá 0 til 10. | Notaðu heila tölu aukastafa. |
| Formúlan deilir með núlli. | Oftast er H 0: settu hæð eða dýpt liðarins. |
| Formúlan gefur ekki tölu. | Niðurstaðan er of stór til að vera tala. |
| Þessi formúla er of löng (500 stafir í mesta lagi). | Styttu hana. |

## Örugg í hönnun

Formúla getur aðeins reiknað með breytunum og föllunum hér að ofan. Hún getur ekki keyrt kóða né lesið neitt annað, þannig að formúla í verkefnaskrá sem einhver sendir þér er skaðlaus.
