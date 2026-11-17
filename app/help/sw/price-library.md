---
title: Maktaba ya bei
summary: Weka vipengee, viwango na mikusanyiko yako kwenye maktaba, ingiza kutoka CSV au makadirio ya zamani, ongeza vipengee kutoka kwake kwenye ukadiriaji wowote, na usasishe bei za ukadiriaji kutoka kwake.
keywords: maktaba, vifurushi vya biashara, orodha ya bei, kitabu cha bei, hifadhidata ya gharama, ingiza csv, viwango, mikusanyiko, matumizi upya, vipengee vya kiolezo, sasisha bei, bei upya
from: 37356c68
---

**Maktaba ya bei** inashikilia vipengee unavyotumia kazi baada ya kazi: aina yake, kitengo, urefu, upotevu, viwango vya nyenzo na kazi, na mkusanyiko wake. Huhifadhiwa kwenye kivinjari hiki, tofauti na ukadiriaji wowote, kwa hivyo kila ukadiriaji unaoufungua hapa unaweza kuitumia.

Ifungue kwa {{ui:Library}} juu ya paneli ya {{ui:Items}}.

## Jaza maktaba

- {{ui:Import CSV…}} husoma lahajedwali iliyohifadhiwa kama CSV (angalia safu hapa chini). Vipengee ambavyo jina na aina yake tayari viko kwenye maktaba vinabadilishwa; vingine vinaongezwa. Safu zisizoweza kusomwa zinaruka, na inasema zipi na kwa nini.
- {{ui:Add this takeoff's items}} hunakili kila kipengee cha ukadiriaji ulio wazi kwenye maktaba, pamoja na viwango vyake na mkusanyiko wake (si alama zake).
- Makadirio ya CSV ambayo TakeoffCraft inahamisha ([Hamisha makadirio](topic:export-estimate)) huingizwa kama yalivyo: bei za kazi iliyopita huwa mwanzo wa kazi inayofuata.

- {{ui:Trade packs…}} huongeza mikusanyiko ya bure kwa biashara, kama drywall, umeme au zege, bila bei. Angalia [Vifurushi vya biashara](topic:trade-packs).

{{ui:Export CSV}} huhifadhi maktaba kama CSV, ili kuweka nakala, kuihariri kwenye lahajedwali au kumpa mwenzako. {{ui:Clear}} huifuta yote (bofya mara mbili).

:::note
Maktaba iko kwenye hifadhi ya kivinjari hiki. Kivinjari kingine, kompyuta nyingine au dirisha la faragha lina yake (au hakuna). Ihamishe ili kuisogeza.
:::

## Itumie kwenye ukadiriaji

- Chagua vipengee (andika kwenye {{ui:Find in the library}} kupunguza orodha) kisha chagua {{ui:Add to takeoff}}. Vinaongezwa pamoja na mikusanyiko yao kwa hatua moja ambayo {{key:Mod+Z}} huirudisha. Jina ambalo tayari liko kwenye ukadiriaji hupewa namba, kama `Zulia (2)`.
- {{ui:Update prices}} huwapa vipengee vya ukadiriaji upotevu na viwango vya maktaba, kwa kila kipengee chenye jina na aina inayolingana na kipengee cha maktaba, na vivyo hivyo kwa vipengele vya mkusanyiko vyenye jina sawa. Urefu, vitengo na fomula zinabaki kama zilivyo. {{key:Mod+Z}} moja inarudisha bei zote za zamani.

## Safu za CSV

Safu ya kwanza hutaja safu, kwa mpangilio wowote; safu nyingine hazitumiki.

| Safu | Kinachowekwa ndani yake |
|---|---|
| Item (au Name) | Jina la kipengee. Lazima. |
| Type | Linear, Area au Count (LF, SF na EA pia zinafanya kazi). Ikiwa tupu, kitengo ndicho huamua. |
| Unit | LF au m; SF, SY au m²; EA. Tupu: kitengo cha kawaida cha aina hiyo. |
| Waste % | `10` au `10%`. |
| Material per unit, Labor per unit | Viwango kama `2.10` au `$1,250`. |
| Height (au Depth) | `9'-0"`, `9`, au `2.7` kwa vitengo vya metriki. |
| Component, Formula | Safu yenye jina la Component (au aina `Component`) ni sehemu ya mkusanyiko wa kipengee kilicho juu yake. Kitengo chake, upotevu na viwango ni vyake; fomula yake hutumia herufi za kipengee, angalia [Mikusanyiko na fomula](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Kizigio aina A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Vijiti 16 in. o.c.,ceil(L / 1.333) + N
Sakafu ya VCT,Area,SF,5,1.85,1.10,,,
Soketi za duplex,Count,EA,,3.50,45,,,
```

Koma, nukta-koma au tab kati ya safu zote hufanya kazi.
