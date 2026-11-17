---
title: Yfirfara magntökuna í þrívídd
summary: Sjáðu veggi, plötur og talningar á opna blaðinu standa á teikningunni, snúðu um þá, og smelltu á einn til að velja merkingu hans.
keywords: png, mynd, ljósmynd, skjámynd, stafla, hæðir, kótar, glb, gltf, flytja út 3d, veggþykkt, grunnhæð, op, hurðarhaus, 3d, þrívídd, yfirfara, sýn, veggir, veghæð, plata, dýpt, rúmmál, snúa, líkan, val, samsíða, perspektíf
from: fb16b4f7
---

Þrívíddarsýnin er yfirferð, ekki önnur teikning: hún lætur magntökuna á opna blaðinu standa upp af blaðinu sjálfu á skjánum, svo vantandi veggur, tvöföld plata eða villutalning sést í fljótu bragði.

Áður en þú byrjar: blaðið þarf mælikvarða ([Stilla mælikvarða](topic:set-the-scale)). Hæðir og dýpt þurfa raunveruleg fet, þannig að á blaði án mælikvarða segir {{ui:3D}} það og er áfram á flata blaðinu.

## Opna þrívíddarsýnina

1. Sýndu blaðið sem þú vilt yfirfara.
2. Veldu {{ui:3D}} á stikunni sem sýnir heiti blaðsins og mælikvarðann, eða ýttu á {{key:3}}.
   Í fyrsta skipti tekur þrívíddarsýnin smá stund að hlaðast. Blaðið er teiknað á jörðinni og magntakan stendur á því í lit hvers liðar.
3. Til að fara til baka, veldu {{ui:3D}} aftur, {{ui:Aftur á blaðið}}, eða ýttu á {{key:3}}. Að velja teikniverkfæri (Línulegt, Flötur, Talning og svo framvegis) fer líka til baka, því merkingar eru teiknaðar á flata blaðinu.

Sýnin sýnir blaðið á skjánum; skiptu um blöð í blaðalistanum, eða með {{key:PageDown}} og {{key:PageUp}}, og þrívíddarsýnin fylgir. Til að sjá nokkrar hæðir í einu skaltu stafla þeim (hér fyrir neðan).

## Það sem þú sérð

| Merking | Í þrívídd |
|---|---|
| Línuleg runa, liður með hæð | Veggur af þeirri hæð eftir rununni. Bognar runur fylgja boganum. |
| Línuleg runa, liður án hæðar | Lína á blaðinu. Gefðu liðnum hæð undir **Liður** til að reisa hann upp. |
| Flötur, liður með dýpt | Plata af þeirri dýpt, með útskurðum opnum. |
| Flötur, liður án dýptar | Þunn 2" plata, svo hún sjáist samt. |
| Talning | Lítill stólpi á hverjum talda punkti. |

Hæðin er reiturinn {{ui:Hæð}} á línulegum lið og dýptin er reiturinn {{ui:Dýpt}} á flatarlið, undir **Liður** (sjá [Búa til magnliði](topic:create-items)). Breyttu honum, og þrívíddarsýnin uppfærist strax. Athugasemdin undir heiti blaðsins segir hvað blaðið geymir, til dæmis „Þetta blað í þrívídd: 2 veggir, 1 plata, 3 talningar“, og hversu margar runur eða flatir hafa enga hæð eða dýpt. Smellir fara í gegnum hana til sýnarinnar.

Tölurnar breytast ekki í þrívídd: flatarmál veggs er nákvæm lengd hans sinnum hæð hans, og rúmmál plötu er nettóflatarmál hennar (útlína mínus útskurðir, bogar nákvæmir) sinnum dýpt hennar. Bogar eru aðeins teiknaðir sem stuttir beinir kaflar á skjánum.

## Skoðaðu í kringum þig

| Aðgerð | Hvað hún gerir |
|---|---|
| Draga, eða draga með miðhnappi | Snúa um magntökuna. |
| {{key:Shift}} + draga, eða draga með hægri hnappi | Hliðra. |
| Músarhjól | Aðdráttur inn og út við bendilinn. |
| Tvífingurstrok á snertiborði | Snúa ({{key:Shift}} hliðrar). Klípa aðdregur. |
| {{ui:Ísó}}, {{ui:Ofan}}, {{ui:Framan}}, {{ui:Aftan}}, {{ui:Vinstri}}, {{ui:Hægri}}, {{ui:Neðan}} | Staðlaðar sýnir, rammaðar utan um magntökuna. Þrívíddarsýnin opnast í {{ui:Ísó}}. |
| {{ui:Perspektíf}} | Perspektíf kveikt eða slökkt (samsíða þegar slökkt). |
| {{ui:Aðdráttur að öllu}} eða {{key:F}} | Allt blaðið. |
| {{ui:Blað}} | Sýna eða fela teikninguna á jörðinni. |
| Útsýnisteningurinn efst hægra megin | Smelltu á flöt, brún eða horn til að horfa þaðan; dragðu hann til að snúa; dragðu áttavitahringinn til að snúa honum; húshnappurinn fer aftur í {{ui:Ísó}}. |

Hornið sýnir útsýnisteninginn, litla X, Y, Z-ásatákn, eða ekkert: veldu í {{ui:Stillingar}}, á flipanum TakeoffCraft, undir **Hornvísir** ([Stillingar TakeoffCraft](topic:settings)). Flata blaðið hefur engan hornvísi.

:::touch
Einn fingur snýr; tveir fingur klípa til að aðdraga og færast til að hliðra. Smellur velur.
:::

## Veggir með þykkt, grunni og opum

Línulegur liður með hæð stendur sem þunn ræma. Til að sjá hann sem raunverulegan vegg skaltu gefa liðnum lögun sína undir **Í þrívídd** í stillingunum hans:

- **Veggþykkt** (8", 0.2 m): veggurinn verður fastur, miðjaður á línuna sem þú teiknaðir, með skáskornum hornum.
- **Grunnhæð**: veggurinn byrjar svo langt fyrir ofan gólfið (undirloft, efri skáparöð). Flatarlið hefur hana líka: loft í 9'-0".
- **Opshaus**: dreginn hluti (hurð, [Draga hluta af runu frá](topic:measure-linear#deduct-a-part-of-a-run)) heldur veggnum yfir þeirri hæð, svo hurð sést sem hurð. Án hans skilur frádreginn hluti eftir bil upp í toppinn.

Þetta mótar aðeins þrívíddarsýnina: magntölurnar (lengd, veggflötur, kostnaður) haldast eins og þær voru.

## Stafla hæðunum

1. Opnaðu PDF-skrár af hverri hæð.
2. Í þrívíddarsýninni skaltu velja {{ui:Kótar…}} og skrifa hæð hverrar hæðar, eins og `0` fyrir jarðhæð og `12'` fyrir þá næstu. Autt skilur blað út undan.
3. Veldu {{ui:Stafla}}. Sérhvert blað með kóta sýnir magntöku sína í sinni hæð; blaðið á skjánum liggur undir sinni eigin hæð, hin eru útlínuð. Athugasemdin segir hversu margar hæðir eru staflaðar.

Blöð raðast eftir stöðu sinni á síðunni, þannig að þetta virkar fyrir grunnmyndir sem eru teiknaðar eins (sama blaðastærð og staða). Blað með kóta en án mælikvarða er skilið eftir, og athugasemdin segir það. Veldu {{ui:Stafla}} aftur fyrir eitt blað í einu. Kótarnir eru vistaðir með magntökunni.

## Vista þrívíddarsýnina sem mynd

Veldu {{ui:PNG}} á þrívíddarstikunni fyrir mynd af sýninni eins og hún er á skjánum (`… 3D.png`). {{key:Shift}} + smellur á {{ui:PNG}} gerir hana tvöfalt stærri (`… 3D@2x.png`), fyrir prentun.

## Vista þrívíddarsýnina sem líkan

Veldu {{ui:GLB}} á þrívíddarstikunni. Þú færð `.glb`-skrá (glTF, tvíundarleg) af því sem sýnin sýnir — gólfið á skjánum, eða allar staflaðar hæðir — sem önnur þrívíddarforrit opna: einn hlut fyrir hverja merkingu, nefndan eftir lið sínum, í lit liðarins, í metrum með Y upp. Blaðið sjálft og útlínurnar eru ekki með.

## Velja merkingu úr þrívídd

Smelltu á vegg, plötu, plötu eða stólpa. Merking hans verður valda merkingin, alveg eins og ef þú hefðir smellt á hana á blaðinu: hún birtist undir **Valin merking**, liðurinn hennar verður núverandi, og stöðustikan gefur lengd hennar og hæð, eða flatarmál, dýpt og rúmmál í rúmyardum. {{key:Shift}} + smellur bætir merkingum við valið eða tekur þær út. {{key:Delete}} eyðir völdum merkingum og {{key:Mod+Z}} skilar þeim; {{key:Esc}} velur engar. Þegar þú ert aftur á blaðinu haldast sömu merkingar valdar.

:::tip
Teikningin fylgir þemanu: í þemanu Model verður blaðið á jörðinni dökkt eins og flata sýnin.
:::
