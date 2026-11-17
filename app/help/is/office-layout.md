---
title: "Skrifstofuuppsetningin: flokkun, undirsamtölur, titill og fyrirsagnir úr sjálfgefnum reglum"
summary: Kveiktu á viðbótinni Sjálfgefnar reglur og mat, magntölur eftir blöðum, útflutningar og það sem aðstoðarmaður les taka við skrifstofuuppsetningu þinni, sömu og listar BimCraft nota.
keywords: skrifstofustaðall, skrifstofuuppsetning, sjálfgefnar reglur, viðbót, uppsetning lista, flokka eftir gerð, flokka eftir blaði, undirsamtala, samtölur, titill, fyrirsagnir, hástafir, uppsetning mats, uppsetning útflutnings, stillingar
from: cfd2f30a
---

## Hvað þú gerir

Láttu TakeoffCraft raða töflum sínum eins og skrifstofan gefur þær út, án þess að setja það upp í hverri magntöku. Uppsetningin er stillt einu sinni, í Sjálfgefnum reglum, og gildir fyrir öll forrit á þessari tölvu: það sem þú stillir í BimCraft eða CadCraft er það sem TakeoffCraft notar, og öfugt.

## Skref

1. Opnaðu **Stillingar › Viðbætur** og kveiktu á **Sjálfgefnar reglur**. Hún er slökkt þar til þú gerir það; með hana slökkta, eða þegar ekkert er stillt, er TakeoffCraft nákvæmlega eins og áður.
2. Opnaðu **Stillingar › Almennt › Sjálfgefnar reglur** og finndu **Útlit lista (skrifstofustaðallinn)**:

| Regla | Hvað hún gerir í TakeoffCraft |
|---|---|
| Flokka lista eftir | **Gerð** flokkar matið eftir gerð liðar (Línuleg, Flatarmál, Talning, Tiltekið magn). **Kóti** flokkar magntölur eftir blöðum eftir blaði þeirra. **Rými** og **Engin flokkun** skilja bæði eftir óflokkuð |
| Samtölur í listum | **Undirsamtala undir hverjum hópi og heildarsamtala** bætir undirsamtölu undir hvern hóp. Heildarsumman fyrir verkið helst alltaf |
| Titill lista | Lína yfir töflunni, til dæmis `{schedule}: skrifstofuuppsetning` |
| Dálkafyrirsagnir | Eins og skrifað, Í HÁSTÖFUM eða Með Hástöfum |

3. Lokaðu Stillingum. Töflurnar fylgja strax.

## Hvað tekur uppsetninguna

- **Magntölur › Eftir lið** og **Eftir blaði**: hópfyrirsagnir, undirsamtala undir hverjum hópi, titillinn og stafsetning fyrirsagna. Lína undir titlinum segir hvaða hlutar skrifstofustaðallinn stillti. Raðirnar eru þær sömu: þú skrifar enn einingaverð og sóun í þær og smellir á tölur til að velja merki þeirra. Íhlutur eða annað skilyrði helst undir lið sínum.
- **Útflutt mat** (CSV og XLSX): sömu hópar og undirsamtölur. Í vinnubókinni er undirsamtala `SUBTOTAL`-formúla yfir hópinn, og heildarsumman er líka ein slík, svo ekkert er talið tvisvar.
- **Það sem aðstoðarmaður les**: `takeoff_estimate` og `takeoff_quantities` (eftir blöðum) bæta við `layout`-blokk með hópunum, röðunum og undirsamtölunum, og segja hvaða hlutar skrifstofan stillti.

## Það sem heldur sinni eigin uppsetningu

- **Magntölur › Eftir svæði** gefa upp sína eigin flokkun (eftir tilboðssvæði) og halda henni.
- **Heildarsumman**, álagningarnar í tilboðsyfirlitinu og valkostirnir eru ekki endurflokkaðir.
- Flokkun sem taflan hefur enga dálk fyrir er skilin eftir: matið hefur engan kóta, og magntölur eftir blöðum hafa enga gerð.

## Gott að vita

- Sjálfgefnu reglurnar eru geymdar í þessum vafra fyrir öll CadCraft-forrit og fylgja með í Sjálfgefnu reglu-skránni (**Vista í skrá** og **Hlaða úr skrá** á sama stað), svo skrifstofa getur deilt einni skrá.
- Mat sem er flutt út sem CSV með hópum er ætlað til lestrar. Til að flytja mat aftur inn sem verðsafn, fluttu það út án flokkunar.
- Hlutdeild BimCraft í sama staðli: listar, uppsetningar og útflutningar. TakeoffCraft hefur engar reglur sjálfstætt enn, svo enginn hluti Sjálfgefinna reglna er undir Stillingar › TakeoffCraft.
