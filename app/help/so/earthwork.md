---
title: Dhulka shaqada iyo dhererka barta
summary: Calaamadi dhererka barta ee sawirka goobta, u gudbi CivilCraft si ay u samayso dusha iyo jarista iyo buuxinta, oo halkan ka qaado tirooyinka fudud ee keenista.
keywords: dhulka shaqada, keenis, jar, buuxin, jar iyo buuxin, sawirka dhulka, dhererka barta, dhererka, topo, dusha, saddex-geesood, civilcraft, barta, pnezd, god khadka
from: a898e508
---

TakeoffCraft wuxuu qiyaasaa waxa lagu rejeeyay sawirka. Dhulka shaqadu waxay u baahan tahay dusha dhulka, sidaas darteed waxay la wadaagtaa CivilCraft, kaas oo ka dhisa duushaha barta, u sinaysa, oo xisaabiya jarista, buuxinta iyo gaadiidka.

## Keenista fudud halkan

Dhul loo keenay hal qoto ah, shay leh **qoto** ayaa ku filan: mugga = ballac × qoto. [Xirmada ganacsiga guud](topic:trade-packs) waxay leedahay shay keenis dhul oo weyn (mugga dhulka dabiiciga ah, mugga dhulka furan iyo tirada gaadiidka baabuurta) iyo shay god khadka (keenista, saldhigga iyo dib-u-buuxinta iyada oo loo eegayo dherer iyo qoto).

## Dhererka barta ee CivilCraft

1. Dejji miisaanka sawirka goobta.
2. Samee shay **Tiro**, tusaale ahaan "Dhulka jira", oo riix dhererka barta kasta ee sawirka.
3. Dooro calaamad oo ku qor {{ui:Dhererka}} panelka **Calaamadda la doortay**: `102.5`, `102'-6"` ama `31.24 m`. Dhererka taban iyo eber labaduba way fiican yihiin.
4. Fur menu-ga {{ui:Dhoofin}} oo dooro {{ui:Dhererka barta}}. Waxaad heleysaa fayl barta (`.csv`) oo leh Point, Northing, Easting, Elevation iyo Description, hal safka mid kasta oo calaamadsan ee sawirka furan.
5. Fur faylkaas CivilCraft (eeg [Soo dhoofi barta](app:civilcraft/import-points)). Waxay ka dhisaysaa dusha barta ([Dhis dusha](app:civilcraft/build-surface)); halkaas ka dib waxay isbarbardhigtaa duushaha oo siisaa jarista iyo buuxinta ([Mugga](app:civilcraft/volumes)).

Northing iyo easting waa isku-xidhka sawirka laftiisa, oo ah feet, oo laga qaaday geeska bogga iyada oo la eegayo miisaankiisa. Masaafooyinka iyo mugga udhaxeeya barta waa sax, laakiin ma aha isku-xidhka sahanka goobtaada. Markaad u baahato, u wareeji isku-xidhka goobta CivilCraft.

:::note
Barta laga soo qaaday sawirro kala duwan ma wadaagaan isku-xidhka, sidaas darteed dhoofintu waxay qaadaa sawirka furan oo keliya. Dhererka waxa lagu kaydiyaa xisaabinta qadarka waxaana lagu wareejiyaa koobiyee iyo dhaji.
:::

## Jarista iyo buuxinta CivilCraft

Shaqada dhulka ee CivilCraft waxay ku soo noqotaa laba shay oo aad qiimayn karto:

1. CivilCraft, ku qiyaas padsyada iyo jidadka, kadibna dooro {{ui:U dir TakeoffCraft}} hoosta **Dhulka shaqada** ([Mugga dhulka shaqada](app:civilcraft/volumes)). Waxay kaydinaysaa fayl tirooyin (`.quantities.json`).
2. TakeoffCraft, ku fur {{ui:Fur xisaabinta}}, ama ku riix barnaamijka. Xisaabintaadu way furan tahay: faylku wuxuu ku daraa **Dhulka shaqada: jar** iyo **Dhulka shaqada: buuxin** sida [tirooyinka nooca loo qoray](topic:create-items#typed-quantities-no-drawing), oo ku qoran kuyuubka yaardka (CY) mashruuca feet-ka, ama mitir kuyuub (m³) mashruuca mitirka. Waa hal tallaabo: {{key:Mod+Z}} ayaa dib u celiya.
3. Magacyadooda beddel, dhigo qashinka, qiimayaasha iyo isku-dhisyada sidaad rabto.

Marka naqshadda isbedesho, mar kale ku dir CivilCraft oo fur faylka cusub: laba shay ee isku mid ah ayaa helaya tirooyinka cusub. Magacyadooda, qiimayaasha, qashinka iyo isku-dhisyada way sii ahaanayaan sidaad dejisay. Haddii unugga mashruuca isbedelay, xariiqda xaaladda ayaa sheegaysa: hubi qiimayaasha. Fayl ka yimid mashruuc kale oo CivilCraft ah wuxuu ku daraa laba shay oo uu leeyahay.

Tirooyinkan waa mugga dhulka dabiiciga ah sida CivilCraft u cabbiray (habka shabakadda): ma jiro yaraan ama kor u kac. Ku dar qashin, ama adigoo isticmaalaya qaacidda sida `Q * 1.25` mugga dhulka furan. Tafatiraha shayga wuxuu muujinayaa meesha ay ka yimaadeen iyo waqtigooda; tiirka fiiro-gaarka ah ee qiyaasta kharashka ayaa sidoo kale sheegaya.

:::note
Faylka tirooyinka waa JSON qoraal fudud (`"format": "cadcraft-quantities"`), markaa qoraal ama barnaamij kale ayaa qori kara mid: magac app, mashruuc, iyo shayo leh fure, magac, unug iyo tiro.
:::
