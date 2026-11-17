---
title: Mæla úr teikningu
summary: Taktu lengdir og flatarmál úr eigin línum, bogum, fjöllínum og skyggingum teikningarinnar með því að velja þau, með nákvæmum bogum og götum, í stað þess að rekja þau með smellum.
keywords: mæla teikningu, rúmfræði, fjöllína, bogi, hringur, skygging, bunga, nákvæm lengd, nákvæmt flatarmál, velja, gluggi, rekja, úr cad, línuleg, flatarmál
from: fd734246
---

{{ui:Mæla teikningu}} á blaðastiku DWG- eða DXF-blaðs tekur hluti teikningarinnar sjálfrar sem merkingar, svo þú þarft ekki að rekja þá með smellum. Lengd fjöllínu, lengd boga, flatarmál hrings og flatarmál skyggingar með götum sínum koma nákvæm út, úr sama reikningi og magntakan notar fyrir hverja merkingu.

## Taka hluti sem línulegan eða flatarmálslið

1. Búðu til eða smelltu á **línulegan** eða **flatarmálslið** undir {{ui:Liðir}}. Blaðið þarf mælikvarða.
2. Veldu {{ui:Mæla teikningu}}.
3. Smelltu á hlutina á blaðinu til að velja þá, eða dragðu glugga utan um þá: allt sem er alveg innan hans er valið. {{key:Shift}} bætir glugga við valið; smelltu aftur á valinn hlut til að sleppa honum. Stikan sýnir heildina: „6 runs: 108'-9 1/8" in all.“
4. Veldu bætingarhnappinn, sem nefnir fjöldann og liðinn, svo sem {{ui:Bæta 6 við Edge}} (eða ýttu á {{key:Enter}}). Hver hlutur verður ein merking liðsins, í einu afturkallanlegu skrefi. {{key:Esc}} hreinsar það sem þú valdir.

## Hvað hver liðstegund tekur

- **Línulegur** liður tekur línur, boga, fjöllínur, hringi og splænur eftir lengd. Lokuð lögun telur eftir jaðarlengd sinni. Skygging er sleppt: hún hefur flatarmál, ekki lengd, og stikan segir það.
- **Flatarmálsliður** tekur lokaðar lögun: lokaðar fjöllínur, hringi, tvívíð föst efni og skyggingar með götum sínum. Opnar keyrslur eru skildar eftir og stikan segir það.

## Nákvæmt og næstum nákvæmt

Línur, bogar (hvaða bunga sem er), fjöllínur með bungum og hringir eru nákvæm: lengdir og flatarmál nota radíus og sveiflu bogans, ekki mynd af honum. Sporbaugar, splænur og skyggingar sem eru gerðar úr jöðrum eru mældar í strengjum með einnar gráðu bili eða fínna, sem er innan hundraðshluta prósents fyrir sporbauga og tíunda hluta fyrir hitt; stikan segir hversu margir þeirra hluta sem þú valdir eru bogar af þessu tagi.

## Hvaðan það tekur

- **Líkan**: hlutir í líkansrými. **Útlit**: eigin línur þess, og líkanshlutir innan sýnagluggar, skalaðir í gegnum hann. Hlutur sem sker jaðar sýnagluggans er ekki boðinn (hann prentast afskorinn); hlutur sem tveir sýnagluggar sýna er tekinn einu sinni.
- Aðeins lög sem blaðið sýnir. Blokkir eru taldar, ekki mældar: sjá [Telja úr teikningu](topic:count-from-a-drawing). Þrívíðar fjöllínur, möskvar, föst efni og svæði eru ekki boðin.
