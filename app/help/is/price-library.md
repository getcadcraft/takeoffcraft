---
title: Verðsafn
summary: Geymdu liði, taxta og samsetningar í safni, fluttu það inn úr CSV eða fyrra mati, bættu liðum úr því við hvaða magntöku sem er og uppfærðu verð magntöku úr því.
keywords: safn, fagpakkar, verðlisti, verðbók, kostnaðargrunnur, flytja inn csv, taxtar, samsetningar, endurnýta, sniðmátsliðir, uppfæra verð, endurverðleggja
from: 37356c68
---

**Verðsafnið** geymir liði sem þú notar verk eftir verk: gerð þeirra, einingu, hæð, sóun, efnis- og vinnutaxta og samsetningu þeirra. Það er geymt í þessum vafra, aðskilið frá hverri magntöku, svo hvaða magntöku sem þú opnar hér getur notað það.

Opnaðu það með {{ui:Safn}} efst á {{ui:Liðir}}-spjaldinu.

## Fylltu safnið

- {{ui:Flytja inn CSV…}} les töflureikni vistaðan sem CSV (sjá dálkana hér að neðan). Liðir sem eru þegar í safninu með sama nafni og gerð eru skiptir út; hinir bætast við. Línur sem það getur ekki lesið eru sleppt, og það segir hvaða línur og af hverju.
- {{ui:Bæta við liðum þessarar magntöku}} afritar alla liði opinnar magntöku í safnið, með taxtum sínum og samsetningu (ekki merkjunum).
- Matið sem TakeoffCraft flytur út sem CSV ([Flyttu matið út](topic:export-estimate)) flyst inn eins og það er: verð síðasta verks gefa upphafið að því næsta.

- {{ui:Fagpakkar…}} bætir ókeypis samsetningum fyrir iðngrein við, svo sem gipsveggi, rafmagn eða steinsteypu, án verða. Sjá [Fagpakkar](topic:trade-packs).

{{ui:Flytja út CSV}} vistar safnið sem CSV, til að geyma afrit, breyta því í töflureikni eða gefa samstarfsmanni. {{ui:Hreinsa}} tæmir það (smelltu tvisvar).

:::note
Safnið er í geymslu þessa vafra. Annar vafri, önnur tölva eða einkagluggi hefur sitt eigið safn (eða ekkert). Flyttu það út til að færa það.
:::

## Notaðu það í magntöku

- Merktu liði (skrifaðu í {{ui:Leita í safninu}} til að þrengja listann) og veldu {{ui:Bæta við magntöku}}. Þeir bætast við ásamt samsetningum sínum í einu skrefi sem {{key:Mod+Z}} tekur til baka. Nafn sem er þegar í magntökunni fær númer, eins og `Teppi (2)`.
- {{ui:Uppfæra verð}} gefur liðum magntökunnar sóun og taxta safnsins, fyrir hvern lið sem nafn og gerð passa við lið í safninu, og það sama fyrir íhluti samsetninga með sama nafni. Hæðir, einingar og formúlur haldast óbreyttar. Eitt {{key:Mod+Z}} setur öll gömlu verðin aftur.

## Dálkar CSV

Fyrsta línan nefnir dálkana, í hvaða röð sem er; aðrir dálkar eru hunsaðir.

| Dálkur | Hvað fer í hann |
|---|---|
| Item (eða Name) | Nafn liðarins. Krafist. |
| Type | `Linear`, `Area` eða `Count` (LF, SF og EA virka líka). Ef autt, ræður einingin. |
| Unit | LF eða m; SF, SY eða m²; EA. Autt: venjuleg eining gerðarinnar. |
| Waste % | `10` eða `10%`. |
| Material per unit, Labor per unit | Taxtar eins og `2.10` eða `$1,250`. |
| Height (eða Depth) | `9'-0"`, `9`, eða `2.7` fyrir metrakerfi. |
| Component, Formula | Lína með nafni íhlutar (eða gerðinni `Component`) er hluti af samsetningu liðarins fyrir ofan hana. Eining hennar, sóun og taxtar eru hennar eigin; formúlan hennar notar bókstafi liðarins, sjá [Samsetningar og formúlur](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kommur, semíkommur eða tabbar milli dálka virka allt.
