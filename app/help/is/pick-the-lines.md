---
title: Veldu línur PDF-skjalsins
summary: Smelltu á línu í vektor-PDF til að mæla alla samtengda slóð hennar, eða smelltu innan lokaðrar útlínu fyrir flatarmál hennar, með sýnt bilþol og eina afturköllun á hvern hluta.
keywords: slóð, velja, línuverk, línur, tengdar, öll keyrslan, rekja, útlína, ummál, bil, þol, brú, hlutar, flipi, vektor, flatarmál úr línum, p
from: c22526ae
---

Á vektor-PDF eru veggir og brúnir raunverulegar línur. {{ui:Slóð}} ({{key:P}}) tekur þær eins og þær eru teiknaðar: einn smellur á línu mælir allt sem er tengt henni, enda á milli, svo þú þarft ekki að rekja vegg með því að smella á hornin. Blaðið þarf mælikvarða. Skannaðar síður hafa engar línur til að velja; notaðu [Línulegt](topic:measure-linear) eða [Flatarmál](topic:measure-areas) þar.

## Veldu slóð eða útlínu

1. Veldu {{ui:Slóð}}. Línan undir bendlinum er dregin í útlínu, og aðrar slóðir sem hún gæti verið teiknuð sem eru dregnar daufar.
2. Smelltu á línu: öll samtengda slóðin er valin. Stikan undir tækjastikunni sýnir hluta hennar, lengd, bilþolið og hversu mörg bil voru brúuð. Slóð sem kemur aftur að upphafi sínu er lokuð og sýnir líka ummál sitt.
3. Eða smelltu innan lokaðrar útlínu, fjarri línum: útlínan umhverfis þann punkt er valin sem flatarmál. Sú minnsta kemur fyrst; {{key:Tab}} prófar þá næstu stærri.
4. Ýttu á {{key:Enter}} (eða hægrismelltu, eða tvísmelltu) til að bæta við merkjunum. Valin slóð verður merki í lið af gerðinni **Línuleg**, og útlína verður merki í lið af gerðinni **Flatarmál**: virki liðurinn ef hann hefur þá gerð, annars sá nýjasti af þeirri gerð. Án liðs opnast eyðublaðið fyrir nýjan lið og ekkert bætist við fyrr en þú ýtir aftur á {{key:Enter}}. Allt sem var valið er bætt við í einu afturkallsskrefi.

## Bilþol

Teiknarar skilja eftir litla bil þar sem línur ættu að mætast. Tvær línur tengjast þegar endar þeirra eru nær hvor öðrum en **bilþolið**. Það byrjar í 1,5 punktum á blaðinu (sýnt í fetum og tommum við mælikvarða blaðsins), og punktalínu-hringur af þeirri breidd fylgir bendlinum og situr á hverjum enda slóðarinnar undir honum. Hvert bil sem var brúað er merkt appelsínugult á valinni slóð, og stikan telur þau.

{{key:]}} gerir bilþolið breiðara, {{key:[}} þrengra. Valin slóð er tengd aftur strax við nýja þolið. Við samskeyti heldur slóðin áfram beint, eftir þeirri stefnu sem beygir minnst, og yfirgefur greinina.

## Takkar

| Takki eða aðgerð | Hvað hann gerir |
|---|---|
| Smelltu | Veldu slóðina undir bendlinum, eða útlínuna umhverfis hana. |
| {{key:Shift}} + smellur | Bættu annarri slóð eða útlínu við það sem er valið. |
| {{key:Tab}} | Prófaðu næstu slóð undir bendlinum, eða næstu stærri útlínu. |
| {{key:Backspace}} eða {{key:Mod+Z}} | Taktu síðasta hlutann af síðustu valinni slóð, einn hluta í einu. Slóð án hluta fer. Án þess að neitt sé valið er {{key:Mod+Z}} venjuleg afturköllun. |
| {{key:[}} og {{key:]}} | Þrengra og breiðara bilþol. |
| {{key:Enter}} | Bæta við merkjunum. |
| {{key:Esc}} | Hreinsa það sem er valið. |

## Gott að vita

- Bogi í teikningu er keðja af stuttum beinum bútum, svo lengd hans er örlítið undir raunverulegum boga. Fyrir nákvæman boga, mældu skrá teikningarinnar sjálfrar ([Mæla úr teikningu](topic:measure-from-a-drawing)).
- Brúað bil telst sem bein stökk yfir það, svo ummál lokaðrar útlínu tekur það með.
- Aðeins strik og fyllingar í slóðum síðunnar sjálfrar eru línur. Texti sem er teiknaður sem stafir, og myndir, eru það ekki.
