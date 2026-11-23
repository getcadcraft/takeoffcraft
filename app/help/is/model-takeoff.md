---
title: Taka magn af byggingarlíkani
summary: Opnaðu IFC-líkan arkitektsins, skoðaðu það í þrívídd, veldu veggi, gólf, hurðir og annað eftir gerð, efni, lagi eða stærð, og færðu fjölda, lengdir, flatarmál og rúmmál inn í magntökuna. Nýrra eintak af líkaninu uppfærir sömu magntölur.
keywords: líkan, magntaka líkans, þrívíddarsýn, smelltu á hlut, finndu röðina, efni, lag, veggjalög, gipsplata, einangrun, hurðastærðir, gluggastærðir, yfirlit op, csv, 3d, bim, ifc, rvt, byggingarlíkan, magn, veggir, gólf, hurðir, gluggar, súlur, rými, eftir gerð, eftir kóta, uppfærsla, nýrra líkan, hönnunarþróun
from: 8c4c12c9
---

Þú þarft ekki að bíða eftir næsta teikningasetti. Þegar arkitektinn sendir byggingarlíkanið skaltu opna það hér og taka magntölurnar beint úr því. Líkanið er lesið á tölvunni þinni; ekkert er sent neitt.

## Skref

1. Veldu {{ui:Model}} á verkfærastikunni og veldu `.ifc`-skrá líkansins, eða opnaðu hana með {{ui:Open plans}} eins og aðrar skrár.
2. {{ui:Model takeoff}} opnast með einni línu fyrir hvern flokk og gerð: veggir eftir veggtegund, gólf eftir gólfgerð, hurðir eftir hurðargerð, og svo framvegis. Hver lína sýnir fjölda sinn og það sem flokkurinn er mældur í.
3. Stilltu {{ui:Group by}} á {{ui:Category}} fyrir fljótlega heildartölu, eða á {{ui:Category, type and level}} til að skipta hverri gerð eftir hæð.
4. Taktu úr hakinu þær línur sem þú vilt ekki. {{ui:Find}} þrengir listann. Ef þú tekur línu úr hakinu felur það einnig hluti hennar í þrívíddarmyndinni.
5. Gefðu líkaninu {{ui:Model name}} sem þú heldur fyrir allt verkið, til dæmis heiti verkefnisins.
6. Veldu {{ui:Add to the takeoff}}. Hver magntala verður að tilgreindu magni í atriðalistanum. Nefndu hana, verðlegðu hana og tengdu samsetningar eins og við hvert annað atriði.

## Skoða líkanið í þrívídd

{{ui:Show the model in 3D}} teiknar líkanið fyrir ofan töfluna, með einum lit fyrir hverja línu (litreiturinn við hlið heiti línunnar). Dragðu til að snúa, haltu {{key:Shift}} niðri og dragðu til að færa, notaðu hjólið til að zooma, og veldu {{ui:Fit}} eða {{ui:Reset}} til að komast til baka.

- **Smelltu á hlut** í myndinni og lína hans er valin í töflunni, með öllum hlutum línunnar lýstum og hinum daufum. Smelltu aftur á sama hlut og, ef hann er í mörgum línum (veggur í sínum lögum), er næsta lína valin.
- **Smelltu á línu** í töflunni til að lýsa hlutum hennar. Smelltu aftur, eða smelltu á tóman flöt í myndinni, til að hreinsa.
- Herbergi eru ekki teiknuð, því rúmmál herbergis myndi hylja bygginguna.
- Mjög stórt líkan geymir aðeins kassa fyrir suma hluti svo að það komist í minnið; spjaldið segir hversu margir. Tölurnar breytast ekki.

Ef þessi tölva getur ekki teiknað í þrívídd virkar taflan eins og áður.

## Flokka eftir efni, lagi eða stærð

{{ui:Group by}} hefur þrjá valkosti í viðbót:

- {{ui:Category and material}}: veggur, gólf eða þak byggt úr lögum fær sérlínu fyrir efni hvers lags, þannig að gipsplata, grindarbitar og einangrun er hægt að verðleggja sér. Hluti byggingarinnar með einu efni fær línu þess efnis, og hluti án efnis er geymdur í línu sem heitir „No material named“.
- {{ui:Category and layer}}: það sama, með þykkt lagsins í línunni („Insulation, 100 mm“).
- {{ui:Category, type and door or window size}}: hurðir og gluggar eru skiptir eftir breidd og hæð (til dæmis 3'-0" × 6'-8" eða 914 × 2.032 mm).

Fyrir lag er flatarmálið sjálft flötur veggsins (eða grunnflötur eða yfirborð gólfs eða þaks) og rúmmálið er þetta flatarmál sinnum þykkt lagsins. Athugasemd línunnar segir hversu margar tölur komu úr lagi. Lögin í einum vegg leggjast saman í það rúmmál sem líkanið gefur honum.

## Vista raðirnar eða opin sem CSV

{{ui:Save rows as CSV}} vistar þær línur sem þú hefur merkt, með einingum í hverri fyrirsögn, fyrir töflureikni. {{ui:Save openings schedule as CSV}} (aðeins þegar líkanið hefur hurðir eða glugga) vistar hverja hurð og glugga eftir gerð, hæð og stærð með fjölda sínum.

## Hvað er mælt

| Flokkur | Magn |
|---|---|
| Veggir | fjöldi, lengd, veggflötur (ein hlið, op dregin frá), rúmmál |
| Gólf, plötur, loft og önnur yfirborð | fjöldi, grunnflötur, rúmmál |
| Þök | fjöldi, grunnflötur, þakflötur, rúmmál |
| Undirstöður | fjöldi, grunnflötur, rúmmál |
| Súlur, bitar og aðrir burðarhlutar | fjöldi, lengd eftir hlutanum, rúmmál |
| Handrið, pípur, loftstokkar og kapalleiðir | fjöldi, lengd |
| Stigar | fjöldi, rúmmál |
| Herbergi | fjöldi, gólfflötur, rúmmál |
| Hurðir, gluggar og allt annað | fjöldi |

Þegar höfundur líkansins gaf magn upp í skránni er sú tala notuð. Annars er talan mæld út frá lögun hlutarins. Hver magntala geymir athugasemd sem segir hvort var, og hversu margir hlutir gáfu tölu.

:::note
Lengd veggs sem er mæld út frá lögun hans nær endanna á milli, þannig að tveir veggir sem skarast á horni telja bæði hornið með. Rúmmál krefst lokaðrar lögunar: hlutur sem hefur ekki lokaða lögun er talinn en gefur ekkert rúmmál. Bogadreginn eða hornóttur veggur er mældur sem helmingur allra lóðréttra flata hans, og athugasemdin segir það.
:::

## Þegar nýrra líkan berst

Opnaðu nýrri skrána og skrifaðu sama {{ui:Model name}}. Áður en þú bætir nokkru við segir spjaldið hversu margar magntölur eru nýjar, hversu margar hafa breyst og úr hverju í hvað, og hvaða magntölur úr fyrra eintakinu eru ekki lengur í líkaninu. Veldu {{ui:Add to the takeoff}}: breyttu magntölurnar taka nýju tölurnar, en nöfnin þín, verð, sóun og samsetningar haldast. Magntölur sem eru horfnar úr líkaninu halda gömlu tölunum sínum; fjarlægðu þær sjálfur ef hönnunin felldi þær niður.

Gerð- og hæðaheiti ráða því hvernig magntala er þekkt. Ef arkitektinn endurnefnir veggtegund kemur hún sem ný magntala og hin gamla er skráð sem horfin.

## Skrár sem lesnar eru

IFC-skrár (IFC2x3, IFC4 og IFC4.3). IFC-skrá með vegum, teinum eða brúm færir enn inn innviðamagntölur sínar beint, eins og áður.

TakeoffCraft les ekki `.rvt`-skrár í þessari útgáfu. Ef arkitektinn vinnur í Revit skaltu biðja um IFC-útflutning á líkaninu (File, Export, IFC) og opna hann.

Eitt líkan getur fært inn allt að 500 magntölur í einu. Ef þær eru fleiri skaltu taka línur úr hakinu eða flokka eftir flokki.
