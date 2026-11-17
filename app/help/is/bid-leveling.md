---
title: Tilboðspakkar og tilboðsjöfnun
summary: Skiptu kostnaðaráætluninni í pakka eftir iðngrein, sendu umfang hvers pakka til undirverktaka, berðu saman tilboðin sem berast á sama umfangi, og notaðu valið tilboð sem verð pakkans.
keywords: tilboðsjöfnun, jöfnun, tilboðspakki, undirverktaki, undirtilboð, umfang, tappi, iðngrein, CSI-deild, bera saman tilboð, lægsta tilboð, tilboðstafla, tilboðsgjafi, val, valið tilboð, nota tilboð, verð undirverktaka
from: 856b3088
---

Aðalverktaki sendir umfang hverrar iðngreinar til undirverktaka og ber saman það sem berst til baka. TakeoffCraft gerir hvort tveggja út frá magntökunni: opnaðu {{ui:Flytja út}} › {{ui:Tilboðspakkar og jöfnun…}}.

## Pakkar

Það er einn pakki fyrir hverja CSI-deild sem liðirnir þínir nota (fyrstu tveir tölustafirnir í {{ui:CSI-númer}} liðar, sjá [Búa til magnliði](topic:create-items)). Liðir án númers fá sinn eigin pakka. Hver pakki sýnir liðina sína, hversu mörg blöð merkingar þeirra eru á, og eigin kostnað okkar af honum (efni og vinnu fyrir álagningu, úr grunntilboðinu).

Veldu {{ui:Umfang CSV}} til að sækja það sem á að senda undirverktaka: hvern lið með CSI-númeri, magni, einingu og blöðunum sem hann er á. Það hefur engin verð. Fyrir efnissala hefur vinnubók verðbeiðninnar lista yfir hluti (sjá [Flytja út kostnaðaráætlun](topic:export-estimate)).

## Skrá tilboðin

1. Í tóma röð undir pakkanum skrifarðu nafn tilboðsgjafans og upphæð tilboðsins, og velur {{ui:Bæta við tilboði}}.
2. Ef tilboð skilur hluta umfangsins eftir, opnaðu listann {{ui:Utan tilboðs}} þess og hakaðu við þá liði.
3. Til að leiðrétta nafn eða upphæð skrifarðu yfir það í töflunni; ×-hnappurinn fjarlægir tilboð.

Hver breyting er eitt skref sem {{key:Mod+Z}} tekur til baka, og tilboðin eru vistuð með magntökunni.

## Hvernig tilboðin eru jöfnuð

Tilboð ná sjaldan yfir sama umfang. Jöfnun fyllir hvern lið sem er utan tilboðs með **tappa** á okkar eigin kostnaði, svo hvert tilboð er borið saman á öllum pakkanum:

**Jafnað = tilboðið + tapparnir**

Lægsta jafnaða tilboðið er merkt **Lægst**; ef jafnt er, þá það sem var slegið inn fyrst. **Á móti kostnaði okkar** er jafnaða tilboðið mínus eigin kostnaður okkar af pakkanum: neikvætt þýðir undir honum. Tilboð sem virðist lægst getur tapað þegar vantandi umfang er talið með.

Vinnubókin fær vinnublaðið **Tilboðsjöfnun** með öllum pökkum sem hafa tilboð: áætlun okkar, hvert tilboð, tappa þess, jafnaða heildarsummu og mismuninn, sem lifandi formúlur, og hvað hvert tilboð skildi eftir.

## Nota tilboð sem verð pakkans

Veldu {{ui:Nota}} á tilboði og það verður verð alls pakkans í áætluninni þinni: eigin verðlagning pakkans (liðirnir, aukaskilyrði þeirra og samsetningarhlutar) fellur út úr heildarverði verksins, liðirnir haldast sem magntölur með eigin töxtum þínum til viðmiðunar, og ein lína, **Valið tilboð**, ber upphæð tilboðsins. Liðir sem tilboðið skilur eftir haldast á þínum eigin kostnaði, sem jöfnunin þegar taldi sem tappann. Veldu annað tilboð, eða veldu sama aftur til að taka það til baka; hvert er eitt skref sem {{key:Mod+Z}} afturkallar.

Í tilboðsyfirlitinu eru undirtilboðin ein lína innan kostnaðarins: yfirhöfn, hagnaður og trygging bætast ofan á þau eins og annar kostnaður; söluskattur (aðeins á efni) og launaálag (á vinnu) gera það ekki. Vinnubók áætlunarinnar hefur valda tilboðið sem sína eigin röð og álagningarkaflinn leggur það saman, með lifandi formúlum. Efnislistinn sleppir efni úthlutaðs pakka, því undirverktakinn leggur það til.

Pakki innan tilboðssvæðis valkostar er ekki endurverðlagður: valkostir og millisummur tilboðssvæða nota enn þín eigin verð.

## Tilboð sem berast með tölvupósti

Þú þarft ekki að skrá tilboðin inn handvirkt. {{ui:Senda til tilboðsgjafa…}} undir pakka sendir hverjum undirverktaka tengil á síðu þar sem hann skrifar verð fyrir hverja línu; {{ui:Sækja verð}} sækir það sem þeir sendu inn í þessa töflu. Sjá [Senda pakka í tilboð](topic:bid-invitations).

:::note
Að skrá tilboð handvirkt virkar enn, og handskráð tilboð og tilboð af vefnum standa hlið við hlið. Tilboð sem bárust af vefnum eru merkt **vefur** (eða **vefur, seint** ef þau bárust eftir skiladagsetningu). Verð þeirra breytist aðeins þegar tilboðsgjafinn sendir nýja útgáfu, þannig að þínar eigin breytingar á þeim haldast þar til þá.
:::
