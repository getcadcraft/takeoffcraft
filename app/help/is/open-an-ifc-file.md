---
title: Sæktu magntölur úr IFC 4.3-skrá
summary: Opnaðu IFC 4.3-skrá af vegi, járnbraut, brú eða jarðvinnu og fáðu talningu eftir flokki, með lengdum, flatarmálum og rúmmálum sem skráin gefur upp, sem tiltekin magntölur.
keywords: ifc, ifc4x3, ifc 4.3, vegur, járnbraut, brú, slitlag, kantsteinn, lag, jarðvinna, legur, innviðir, magntölur, bim, mannvirki, tiltekin magntölur
from: 6b08c2c4
---

IFC 4.3-skrá getur haldið vegum, járnbrautum, brúm, sjávarmannvirkjum og þeim hlutum sem þau eru gerð úr: slitlögum, lögum, kantsteinum, teinum, jarðvinnu, legum, staurum og fleiru. TakeoffCraft les þá og breytir þeim í tiltekin magntölur sem þú getur verðlagt.

## Opnaðu skrána

1. Veldu {{ui:Opna teikningar}} í {{ui:Skrá}}-hópnum, eða ýttu á {{key:Mod+O}}.
2. Veldu IFC-skrána (þú getur valið hana með PDF-skjölum), eða dragðu hana á TakeoffCraft.

Ein tiltekin magntala er búin til fyrir hvern flokk og fyrirfram skilgreinda gerð, til dæmis „Slitlag (sveigjanlegt): talning“, og, þegar skráin gefur þær upp, „lengd“ í m, „flatarmál“ í m² og „rúmmál“ í m³. Athugasemdin á hverjum lið segir hversu margir hlutir voru taldir og hversu margir gáfu enga magntölu. Ef þú opnar nýrri skrá með sama nafni uppfærast þessar magntölur í stað þess að bæta við fleiri.

## Það sem hún gerir ekki

- Hún les magntölusettin (IfcElementQuantity) sem skráin geymir. Hún mælir ekki þrívíddarformin, svo hlutur án magntölusetts er talinn en bætir engri lengd, flatarmáli eða rúmmáli við.
- Aðeins innviðaflokkar IFC 4.3 eru lesnir. Byggingarskrá (veggir, hurðir, plötur) er ekki breytt í magntölur hér; skrá sem er ekki IFC 4.3 segir það og flytur ekkert inn.
- Einingarnar eru eigin einingar skráarinnar, umreiknaðar í metra.
