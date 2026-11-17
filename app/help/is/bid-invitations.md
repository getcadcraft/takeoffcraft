---
title: Senda pakka í tilboð
summary: Sendu tilboðspakka með tölvupósti til undirverktaka, leyfðu þeim að skrifa verð á síðu sem þarf ekki aðgang, haltu verðum lokuðum þar til opnunartíminn er kominn, og sæktu þau inn í jöfnunarblaðið.
keywords: senda í tilboð, tilboðsboð, boðsbréf, tilboðsgjafi, undirverktaki, bjóða, tölvupóstur, verðbeiðni, lokuð tilboð, opnun tilboða, tilboðsdagur, seint tilboð, skiladagur, áminning, skrár undirverktaka, tryggingar, hæfi, csv, tengja, pdf blöð
from: fb314b2c
---

{{ui:Flytja út}} › {{ui:Tilboðspakkar og jöfnun…}} › {{ui:Senda til tilboðsgjafa…}} sendir einn pakka til þeirra sem þú velur. Vefurinn sendir hverjum þeirra tölvupóst með tengli; þeir opna síðu, sjá umfangið og skrifa verð fyrir hverja línu. Þú sérð verðin í jöfnunarblaðinu, tilbúin til samanburðar ([Tilboðspakkar og tilboðsjöfnun](topic:bid-leveling)).

:::note
Sending er **ekki opin öllum enn.** Meðan eiginleikinn er í prófun virkar hann fyrir aðganga sem CadCraft-teymið hefur virkjað; ef þinn er ekki þannig segir glugginn það. Síða tilboðsgjafans virkar fyrir öll boð sem hafa verið send.
:::

## Áður en þú sendir

- Þú þarft CadCraft-aðgang með staðfest netfang. TakeoffCraft í vafra biður þig um að **Tengja**: flipi opnast á getcadcraft.com, þú ýtir á Tengja, og sá flipi fær innskráningu sem gildir í 30 daga, aðeins fyrir tilboðspakka, þar til þú lokar TakeoffCraft-flipanum. Þú getur fjarlægt hana hvenær sem er á öryggissíðunni þinni. Studio-gluggi getur ekki sent enn.
- Gefðu hverjum lið CSI-númer: pakki eru liðir einnar CSI-deildar ([Búa til magnliði](topic:create-items)).
- Settu mælikvarða á blöðin sem merkingar pakkans eru á, svo magntölurnar sem tilboðsgjafarnir sjá séu mældar.

## Senda pakka

1. Veldu {{ui:Senda til tilboðsgjafa…}} undir pakkanum.
2. Fylltu út titil, verk og valfrjáls skilaboð, og **skiladagsetninguna** í þínu eigin tímabelti.
3. Hafðu **Halda verðum lokuðum** hakað til að fela öll verð þar til **opnunartíminn** er kominn (ekki fyrr en skiladagsetningin er liðin), eða taktu hakið af til að sjá verð þegar þau berast.
4. Hafðu reitinn fyrir blöðin hakaðan til að senda PDF af blöðunum sem halda merkingum pakkans, með merkingunum teiknuðum inn. Verð þín fara aldrei með í sendinguna: aðeins liðaheiti, CSI-númer, magntölur, einingar og heiti blaða.
5. Skrifaðu inn þá sem þú vilt bjóða, einn á línu, sem `Name <name@company.com>` eða bara netfangið, eða veldu fólk úr skrám undirverktaka. Allt að 60 í einu, 100 í hverjum pakka.
6. Veldu {{ui:Senda boðsbréf}}. Hver fær einn venjulegan tölvupóst með nafni þínu og netfangi, skiladagsetningunni og tenglinum; svör fara til þín.

Glugginn segir þér hversu mörg voru send og nefnir alla sem var sleppt: þegar boðnir í þennan pakka, báðu um að fá ekki tilboðsboð, ógilt netfang, eða yfir sendingarmörkum.

## Það sem tilboðsgjafinn sér

Síða á löngum einkatengli, án innskráningar. Hún sýnir hver bauð þeim, skiladagsetninguna, hvort verðin eru lokuð, skilaboðin þín og PDF-blöðin, síðan hverja línu með magni. Fyrir hverja línu skrifa þeir verð eða haka við **Ekki innifalið**, og mega bæta við athugasemd. Þeir skrifa athugasemdir fyrir allan pakkann og allt að 3 skrár (tilboð, umfangsbréf, vottorð). Þeir geta vistað aftur og breytt verðum sínum þar til opnun er, eða **hafnað**, með reit til að biðja CadCraft um að senda sér ekki tilboðsboð framar.

## Lokuð tilboð og opnunin

Fyrir opnunartímann sér **enginn** verð, athugasemd eða skrá: hvorki þú, í TakeoffCraft, né á síðunni Tilboðspakkar þínir. Þú sérð hverjir voru boðnir og hvort þeir svöruðu. Við opnunartímann birtast öll tilboð í einu. Tilboð sem vistað er eftir skiladagsetningu er tekið gilt og merkt **seint**; jöfnunin tekur það samt með, og seinleiki er merki, ekki úrskurður. Eftir opnun getur tilboðsgjafi ekki breytt verði. Án lokunar er tilboð endanlegt þegar skiladagur er kominn.

## Sækja verðin

{{ui:Sækja verð}} spyr vefinn og bætir hverju svari við pakkann sem tilboð, merkt **vefur**. TakeoffCraft spyr líka hljóðlega í hvert skipti sem þú opnar gluggann á meðan hann er tengdur. Tilboð sem tilboðsgjafinn vistaði nýja útgáfu af uppfærist á sínum stað; tilboð sem þú breyttir helst eins og þú skildir við það þar til þeir senda nýja útgáfu. Hver sótt er eitt skref sem {{key:Mod+Z}} afturkallar. Línur sem voru skildar eftir berast sem umfangið sem tilboðið skilur eftir, þannig að jöfnunin fyllir þær á þinn eigin kostnað.

## Á vefnum

Aðgangurinn þinn hefur tvær síður til viðbótar þegar þú getur sent: **Tilboðspakkar** sýnir það sem þú sendir, hverjir svöruðu, seint tilboð og skrárnar, og leyfir þér að senda áminningu (nýjan tengil; sá gamli hættir að virka), loka, opna aftur eða hætta við pakka. **Undirverktakar** heldur skrá yfir hvert fyrirtæki: tengiliði, iðngreinar, hæfnissvör (ár í rekstri, ábyrgðargetu, EMR, öryggisskrá, stéttarfélag eða opinn vinnustaður, meðmæli), gildistíma leyfa og trygginga, merkt þegar þeir eru liðnir eða innan 30 daga, og fyrri tilboð þeirra. Þú flytur inn og út skrárnar sem CSV: ein röð fyrir hvern tengilið, með dálkunum sem útflutningurinn sýnir. Fyrirtæki sem þú átt nú þegar er uppfært, aldrei endurtekið.

## Hver sér hvað, og hversu lengi

Verð, athugasemdir og skrár tilboðsgjafa fara til þín og til CadCraft-teymisins, sem rekur síðuna. Þau eru geymd í 24 mánuði eftir skiladagsetningu, skrárnar í 180 daga; síðan eru þau eydd. Netfang tilboðsgjafans er það sem þú slóst inn; það er aðeins notað til að senda boðið og áminningu við það. Eitt netfang fær mest 3 boð á dag frá öllum samanlagt, og þú getur sent allt að 200 á dag.

## Ekki smíðað enn

Viðbætur, tilkynningar um val tilboðs, undirritað umfangsblað fyrir hvern tilboðsgjafa og sjálfvirkar áminningar áður en trygging rennur út eru ekki smíðuð. Sjá [Ekki smíðað enn](topic:not-built-yet).
