---
title: Fur naqshad DWG ama DXF
summary: Fur faylka naqshadda sida xaashiyo (model space iyo layout kasta), ka bilow miisaanka ay naqshaddu siiso, muuji ama qari lakabyadeeda, oo soo geli naqshadaha xiriirsan.
keywords: dwg, dxf, cad, naqshad, fur naqshad, layouts, model space, paper space, xaashiyo, unitsyo, insunits, miisaanka viewport, xref, naqshad xiriirsan, lakabyo, qarsan, ma jiro pdf, plot, la'aan plotting
from: d8c3f504
---

TakeoffCraft wuxuu furaa naqshad DWG ama DXF sida uu PDF u furo: uma baahnid inaad mar hore PDF ugu plot-garayso. Tirinta naqshadda laftiisa way saxan tahay, sababtoo ah naqshaddu waxay ogtahay walax kasta waa maxay. Eeg [Ka tir naqshadda](topic:count-from-a-drawing).

## Fur naqshadda

1. Dooro {{ui:Fur qorshayaasha}} kooxda {{ui:Fayl}}, ama riix {{key:Mod+O}}.
2. Dooro faylka DWG ama DXF. Waad dooran kartaa dhowr, iyo PDF-yada la socda.
3. Dooro Fur.

Waxa kale oo aad ku ridi kartaa faylasha naqshadda TakeoffCraft, sida PDF-yada. Wax lama soo dejiyo: browser-ku wuxuu faylka ka akhriyaa kombiyuutarkaaga.

TakeoffCraft wuxuu akhriyaa DWG ka AutoCAD 2000 ilaa 2018 iyo ASCII DXF ka R12 ilaa 2018. Wuxuu diidaa DXF binary (kaydi ASCII, ama DWG) iyo fayl aan midkoodna ahayn, wuuna sababta sheegaa. Fayl dhaawac ah wuxuu furmaa wixii la akhrin karay, fariin ayaa taas sheegta; tirooyinkeeda way dhammaysan karaan.

## Xaashiyada

- **Model** waa model space-ka naqshadda.
- **Layout kasta** (tab-ka paper space) waa xaashi, magacyada tab-kiisa, tabaha kala horreeya. Layout-ku wuxuu muujiyaa modelka viewport-keeda, sida uu u plot-garayo.

Weynee, guuri muuqaal, ku dhejinta khadadka naqshadda, calaamadaha, qoraallada, {{ui:Hagaaji}} iyo kuwa kale waxay u shaqeeyaan sida PDF-ka. Xaashiyada naqshadda waxaa lagu kaydiyaa xisaabinta magaca faylka iyo farta-farta xogteeda, sida PDF-ka: mar kale faylka fur, calaamadahu xaashiyadooda ayey ku jiraan.

## Miisaanka

Xaashi kasta wuxuu ka bilaabaa miisaanka uu naqshaddu siiso:

- **Layout** wuxuu qaadaa miisaanka viewport-kiisa ugu weyn. Miisaan sida 1/2" = 1'-0" waxaa loo magacaabaa diyaarka uu yahay; miisaan kasta oo kale waxaa lagu muujiyaa "Viewport-ka naqshadda: 1" = 2.5'". Haddii layout-ku leeyahay viewports miisaanno kale, midka ugu weyn ayaa xaashida miisaankeeda dejiya: hubi kuwa kale adigoo isticmaalaya {{ui:Hubi}}.
- **Model** wuxuu qaadaa unitsyada naqshadda (inches, millimeters, feet…) sida miisaan, "Unitsyada naqshadda (inches)".
- **Naqshad aan unit lahayn** (naqshaddu weligeed ma sheegin inta unit-ka inch ama millimeter tahay) ma leh miisaan: xaashidu waxay leedahay "Miisaan ma jiro", cabbirkuna waa la diidaa, sida PDF aan miisaan lahayn. Tirintu miisaan uma baahna. Siiso mid adigoo isticmaalaya {{ui:Hagaaji}}.

{{ui:Hagaaji}}, {{ui:Hubi}} iyo liiska {{ui:Diyaar}} waxay beddelaan miisaanka wakhti kasta, waxayna ka guuleystaan kan naqshadda. Liiska diyaarka ma shaqeeyo Model-ka, sababtoo ah ma leh cabbirka warqadda.

## Lakabyada

{{ui:Lakabyada}} xaashi-barka ayaa liistaa lakabyada naqshadda iyo inta walax ah ee lakab kasta ku leeyahay xaashidan. Lakabyada faylku damiyay ama qabatay waxay ku bilaabmaan qarsan. Ka saar calaamadda lakab si aad u qariso, ama calaamadi lakab qarsan si aad u muujiso: xaashidu mar kale way sawirtaa, wixii qarsan waxaa laga reebaa tirinta iyo walxaha {{ui:Measure drawing}}, ilaa aad codsato inaad tirto lakabyada qarsan sidoo kale. {{ui:Muuji dhammaan}} wuxuu muujiyaa lakab kasta; {{ui:Ku noqo lakabyada faylka}} wuxuu dib u celiyaa wixii aad beddeshay. Doorashooyinka lakabyadu waxay ku jiraan kalfadhigan, ma aha faylka xisaabinta.

## Naqshadaha xiriirsan (xrefs)

Naqshad xiriirsiinaysa naqshado kale waxay muujisaa iyaga meelaha lagu geliyay. TakeoffCraft wuxuu naqshad xiriirsan ka helaa **faylasha furan** dhexdooda, magaciisa fayl: fur naqshadda martida iyo naqshadda xiriirsan wada, ama mid kale ka dib. Ilaa markaas status bar-ku wuxuu sheegaa inta naqshad xiriirsan aan la helin, wixii ay sawiraan ayaa maqan, tirooyinkuna way sheegaan.

## Xaddidaadyada

- Walxaha TakeoffCraft aan akhrin ama dhigi karin (proxy objects, fasallo aan la aqoon) waxaa lagu liiskaa daaqadda tirinta sida nooca; weligood lama tuurayo iyada oo aan wax la odhan.
- Naqshadaha aad u waaweyn qayb ayaa la sawiraa, tirintuna waxay joogsataa xadka, iyada oo sheegta. Fur PDF plot ah oo naqshaddaas ah oo bedelkeeda.
- Naqshad waxaa lagu sawiraa madow iyo midabkeeda, si loo dhumuqsiiyo warqadda cad. Miisaska qaabka plot-ka iyo qoridda qalinka lama dabaqo.
