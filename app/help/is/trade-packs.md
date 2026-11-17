---
title: Fagpakkar
summary: Bættu ókeypis samsetningum fyrir iðngrein við verðasafnið þitt, fjarlægðu þær í einu skrefi og deildu þínu eigin safni sem pakka.
keywords: fagpakki, pakki, samsetningar, sniðmát, byrjunarliðir, rafmagn, gifsveggir, grindarsmíði, málun, steypa, gólfefni, múrverk, þakklæðning, klæðning, trésmíði, pípulagnir, hvac, einangrun, landslag, pallar, aðalverktaki, csi, masterformat, cc0, bæta við, fjarlægja, deila
from: d3c036be
---

**Fagpakki** er safn tilbúinna liða fyrir eina iðngrein: hver liður hefur sína einingu, hæð eða dýpt, afgang og sína **samsetningu**, það er hlutana og formúlurnar sem breyta mældri línu, flatarmáli eða talningu í efni. Gifsveggur kemur til dæmis með sínum teinum, stoðum, plötum, skrúfum, límbandi og spartli.

Pakkar eru bættir í [verðasafnið](topic:price-library) þitt, og þaðan bætir þú liðum þeirra við hvaða magntöku sem er.

## Bæta við pakka

1. Opnaðu {{ui:Safn}} efst í {{ui:Liðir}}-spjaldinu, síðan {{ui:Fagpakkar…}}.
2. Veldu {{ui:Einingar}}: breskar einingar (LF, SF), metrískar einingar (m, m²) eða bæði. Sérhver samsetning kemur í báðum kerfum.
3. Veldu {{ui:Bæta við}} við hliðina á pakka.

Liðir pakkans birtast í safninu, merktir með heiti pakkans. Til að nota þá, hakaðu við þá í safninu og veldu {{ui:Bæta við magntöku}}.

:::note
**Pakki fylgir engin verð.** Liðir hans sýna „Stilltu verðið þitt“ í safninu. Verðin eru þín: skrifaðu þau inn í safninu eða ritlinum fyrir liði, eða fluttu inn verðlistann þinn sem CSV og notaðu {{ui:Uppfæra verð}}.
:::

Ef þú átt nú þegar lið með sama heiti og gerð í safninu þínu, skilur pakkinn þinn lið eftir óbreyttan. Ef þú bætir pakka aftur við kemur ný útgáfa í stað eigin liða hans.

## Fjarlægja pakka

Í {{ui:Fagpakkar…}} velur þú {{ui:Fjarlægja}} við hliðina á pakka sem þú bættir við, og svo aftur til að staðfesta. Sérhver liður sem kom úr honum fer úr safninu í einu skrefi. Liðir sem þú hefur þegar bætt við magntöku eru áfram í þeirri magntöku.

## Hvað er í pakka

Veldu {{ui:Heimildir og nánari upplýsingar}} undir pakka til að sjá hverju hver samsetning var byggð á: byggingarreglugerðum, stöðlum og uppsetningarleiðbeiningum fagfélaga. Í safninu skaltu halda bendlinum yfir lið til að lesa heimildir hans og forsendur, svo sem bil milli stoða eða þekju málningar. Berðu þær saman við verkið þitt og gagnablöð vara þinna og breyttu formúlunum þar sem þær eru ólíkar (sjá [Samsetningar og formúlur](topic:assemblies)).

Sérhver pakki er merktur **Byrjunarpakki: ekki yfirfarinn af áætlunarmanni enn** þangað til starfandi áætlunarmenn hafa yfirfarið hann.

Hver liður ber einnig CSI MasterFormat-númer sitt, til dæmis `09 21 16`.

## Deildu safninu þínu sem pakka

{{ui:Flytja út sem pakka…}} í safninu vistar það sem pakkaskrá (`.ccpack.json`) sem hver sem er getur bætt við með {{ui:Opna pakkaskrá…}}. Sjálfgefið sleppir hún liðum sem komu úr pökkum sem þú bættir við, og hún ber engin verð. Hakaðu við {{ui:Hafa verðin mín með sem sýnisverð}} til að senda verðin þín líka: þau fara út merkt með svæðinu og dagsetningunni sem þú gefur upp, og sá sem bætir pakkanum við velur hvort hann notar þau.

Pakkaskrár eru einföld gögn, aldrei forrit. TakeoffCraft athugar sérhvern hluta þeirra áður en hann er notaður og sleppir öllu sem það getur ekki lesið.
