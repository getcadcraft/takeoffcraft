---
title: Tilboðssvæði
summary: Merktu merkingar eftir byggingu, hæð eða áfanga, taktu magn inn í eitt svæði í einu, og lestu magntölur og kostnað fyrir hvert svæði.
keywords: viðbótarvalkostur, frádráttarvalkostur, grunntilboð, valkostir, tilboðssvæði, svæði, bygging, hæð, kótar, áfangi, svæði, valkostur, sundurliðun, skipting, dæmigerð hæð, millisumma, eftir svæði
from: 64f3d41c
---

Tilboðssvæði er hluti verksins sem þú verðleggur sjálfstætt: bygging, hæð, áfangi eða væng. Hver merking getur verið á einu tilboðssvæði. Magntölurnar og kostnaðaráætlunin má þá lesa fyrir hvert svæði, með millisummu fyrir hvert, en heildarverð verksins er enn summa alls.

## Búa til tilboðssvæði

1. Efst á spjaldinu {{ui:Liðir}} skaltu opna listann {{ui:Tilboðssvæði}}.
2. Veldu **Nýtt tilboðssvæði…**, skrifaðu heiti eins og „Bygging A“ eða „Hæð 2“, og veldu **Búa til**.
   Nýja svæðið verður núverandi. Stöðustikan segir „Nýjar merkingar fara í (heiti). Merkingar á öðrum tilboðssvæðum eru dofnaðar.“

## Taka magn inn á svæði

Meðan tilboðssvæði er valið í listanum fer hver ný merking inn í það: runur, flatir, hringir, talningar, merkingarnar sem {{ui:Sjálftalning}} bætir við, og það sem þú límir inn. Merkingar á öðrum tilboðssvæðum og merkingar á engu svæði eru dofnaðar á blaðinu, svo þú sjáir hvað tilheyrir hvar.

Veldu **Ekkert tilboðssvæði** í listanum til að taka magn án þess; þá er ekkert dofnað.

:::tip
Dæmigerðar hæðir: taktu magn af Hæð 2, veldu merkingar hennar ({{key:Mod+A}} á blaðinu), afritaðu þær, veldu Hæð 3 í listanum og límdu. Afritin fara í Hæð 3. Þegar hæðirnar eru eins og þú þarft ekki að aðgreina þær, telur [dæmigerður hópur](topic:typical-groups) eina hæð nokkrum sinnum í staðinn.
:::

## Færa merkingar á annað svæði

Veldu eina merkingu eða nokkrar ({{key:Shift}} + smellur, eða {{key:Mod+A}}). Undir **Valin merking** (eða **Valdar merkingar**) velurðu svæðið í reitnum {{ui:Tilboðssvæði}}. Stöðustikan segir „3 merkingar færðar á Hæð 2.“ Það er eitt afturköllunarskref.

## Endurnefna, raða eða eyða

Veldu **Stjórna tilboðssvæðum…** í listanum. Skrifaðu yfir heiti til að endurnefna það, notaðu örvarnar til að breyta röðinni (töflurnar og vinnubókin fylgja henni), eða eyddu einu með ruslafötunni. Eyðing tilboðssvæðis heldur merkingum þess: þær eru þá á engu svæði. {{key:Mod+Z}} afturkallar hverja breytingu.

## Lesa magntölur eftir svæði

Í töflunni {{ui:Magntölur}} velurðu {{ui:Eftir svæði}} (hann birtist þegar magntakan hefur tilboðssvæði). Hvert svæði sýnir liðina sem það geymir, með magni, einingu og heildarverði, og síðan millisummuröð. Merkingar á engu tilboðssvæði koma síðast, sem **Ekkert tilboðssvæði**. Smelltu á röð liðar til að auðkenna liðinn og gera það svæði að núverandi svæði.

Samsetningar eru reiknaðar fyrir hvert svæði út frá eigin heildartölum svæðisins. Formúla sem námundar upp, eins og `ceil(L / 4)`, getur þá gefið aðeins meira í svæðunum samanlögðum en fyrir allt verkið, eins og gerist á tilboði sem er verðlagt svæði fyrir svæði.

## Valkostir: grunntilboð plús viðbætur og frádrættir

Tilboðssvæði getur verið **valkostur**: verk sem eigandinn getur bætt við tilboðið eða tekið úr því. Í **Stjórna tilboðssvæðum…** hefur hvert svæði lista við hliðina á heitinu sínu:

| Val | Hvað það gerir |
|---|---|
| {{ui:Grunntilboð}} | Í tilboðinu, eins og venjulega. |
| {{ui:Viðbótarvalkostur}} | Verðlagt sér og **tekið út úr grunntilboðinu**: uppfærsla á teppi, auka yfirbygging. |
| {{ui:Frádráttarvalkostur}} | Í grunntilboðinu, og boðið sem frádráttur: „fjarlægið yfirbygginguna“. |

Taktu magn af verki valkostar inn á tilboðssvæði hans eins og á öðru svæði. Þegar magntakan hefur valkost:

- Hausinn á töflunni {{ui:Magntölur}} segir **Grunntilboð** í stað Heildarverð verks: allt verkið án viðbótarvalkostanna.
- {{ui:Eftir svæði}} endar á grunntilboðinu og einni röð fyrir hvern valkost: **+$300.00** fyrir viðbót, **−$1,050.00** fyrir frádrátt.
- Valkostur verðleggur aðeins þá liði sem eru með merkingar í honum, ásamt samsetningum þeirra, þannig að hluti samsetningar annars liðar læðist ekki með.

Í útflutningnum endar CSV-skráin á grunntilboðinu og valkostunum, og vinnubókin fær vinnublaðið **Valkostir**: grunntilboðið, liði hvers valkosts og breytingu hans, og grunntilboðið með öllum viðbótarvalkostum fjarlægðum.

## Í útflutningnum

{{ui:XLSX}} bætir við vinnublaðinu **Eftir tilboðssvæði**: liðir og íhlutir hvers svæðis með magni, magni með úrgangi, efni, vinnu og heildarverði, millisumma fyrir hvert svæði (`SUM`-formúla) og **Öll tilboðssvæði** í lokin. Vinnublaðið **Merkingar** fær dálkinn **Tilboðssvæði**. Magntaka án tilboðssvæða er flutt út eins og áður. Sjá [Dálkar útflutnings](topic:export-columns).

Tilboðssvæðin eru vistuð í verkskránni ásamt merkingunum.
