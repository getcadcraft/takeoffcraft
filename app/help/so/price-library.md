---
title: Maktabadda qiimaha
summary: Ku hay alaabtaada, qiimahaaga iyo isku-dhisyadaada maktabad, ka soo geli CSV ama qiyaas hore, ku dar walxaha xisaabinta kasta, oo cusboonaysii qiimaha xisaabintaada ka.
keywords: maktabad, xirmooyinka shaqada, liiska qiimaha, buug qiimaha, kaydka kharashka, soo geli csv, qiimaha, isku-dhisyo, dib-u-isticmaal, walxaha tusaalaha, cusboonaysii qiimaha, dib-u-qiimee
from: 37356c68
---

**Maktabadda qiimaha** waxay hayaa walxaha aad shaqo kasta isticmaasho: nooceeda, unit-kiisa, dhererkiisa, qashinkiisa, qiimaha alaabta iyo shaqaalaha, iyo isku-dhiskiisa. Waxaa lagu hayaa browser-kan, kana madax-banaan xisaabinta kasta, si xisaabin kasta oo aad ka furto halkan ay uga faa'iidaysato.

Ku fur {{ui:Maktabad}} sare ee {{ui:Walxaha}} daaqadda.

## Buuxi maktabadda

- {{ui:Ka soo geli CSV…}} wuxuu akhriyaa xaashi la kaydiyay sida CSV (eeg tiirarka hoose). Walxaha magaciisa iyo nooceeda horay ugu jira maktabadda waa la beddelaa; kuwa kale waa la daraa. Safafka aan la akhrin karin waa la dhaafaa, wuxuuna sheegaa kuwa iyo sababta.
- {{ui:Ku dar walxaha xisaabintan}} wuxuu nuqul ka sameeyaa walx kasta oo xisaabinta furan, qiimahooda iyo isku-dhiskooda (ma aha calaamadahooda).
- Qiyaasta CSV ee TakeoffCraft dhoofiyo ([Dhoofi qiyaasta](topic:export-estimate)) wuxuu si toos ah u soo galaa: qiimaha shaqada hore wuxuu bilaabaa kan xiga.
- {{ui:Xirmooyinka shaqada…}} wuxuu ku daraa isku-dhisyo bilaasho shaqo, sida drywall, korontada ama kontaraakhtarka, iyadoo aan qiimo lahayn. Eeg [Xirmooyinka shaqada](topic:trade-packs).

{{ui:Dhoofi CSV}} wuxuu maktabadda ku kaydiyaa CSV, si aad nuqul u hayso, spreadsheet-ka uga tafatirto ama saaxiibkaaga siiso. {{ui:Nadiifi}} wuu madhiyaa (riix laba jeer).

:::note
Maktabaddu waxay ku nooshahay kaydka browser-kan. Browser kale, kombiyuutar kale ama daaqad gaar ah waxay leedahay mid kaloon (ama mid aan lahayn). Dhoofi si aad u guuriso.
:::

## Ku isticmaal xisaabinta

- Calaamadee walxaha (ku qor {{ui:Ka raadi maktabadda}} si aad liiska u yareyso) kadibna dooro {{ui:Ku dar xisaabinta}}. Waa lagu daraa isku-dhisyadooda hal tallaabo, taas oo {{key:Mod+Z}} ka noqdiyaa. Magac horay uga jira xisaabinta wuxuu helaa lambar, sida `Carpet (2)`.
- {{ui:Cusboonaysii qiimaha}} wuxuu walxaha xisaabinta siiyaa qashinka iyo qiimaha maktabadda, walax kasta oo magaciisa iyo nooceedu isku mid yihiin walxa maktabadda, iyo sidoo kale qaybaha isku-dhiska ee magac isku mid ah. Dhererka, unitsyada iyo qaacidooyinka way joogaan sida ay yihiin. Hal {{key:Mod+Z}} wuxuu dib u celiyaa dhammaan qiimihii hore.

## Tiirarka CSV

Safka koowaad wuxuu magacaabaa tiirarka, siday kasta u jiraan; tiirarka kale waa la dhaafaa.

| Tiir | Waxa ku jira |
|---|---|
| Item (ama Name) | Magaca walxa. Waa loo baahan yahay. |
| Type | Linear, Area ama Count (LF, SF iyo EA sidoo kale way shaqeeyaan). Haddii madhan la reebo, unit-ku go'aamiyaa. |
| Unit | LF ama m; SF, SY ama m²; EA. Madhan: unit-ka caadiga ah ee nooca. |
| Waste % | `10` ama `10%`. |
| Material per unit, Labor per unit | Qiimo sida `2.10` ama `$1,250`. |
| Height (ama Depth) | `9'-0"`, `9`, ama `2.7` unitsyada metric-ka. |
| Component, Formula | Safka leh magac Component (ama Type `Component`) waa qayb isku-dhiska walxa ka sare. Unit, Waste iyo qiimihiisu gaarka u yihiin; Formula-ku wuxuu isticmaalaa xarfaha walxa, eeg [Isku-dhisyada iyo qaacidooyinka](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Kala-soocidda tiirarka ee commas, semicolons ama tabs dhammaantood way shaqeeyaan.
