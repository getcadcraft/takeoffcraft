---
title: Luo määrälaskennan nimikkeet
summary: Tee viiva-, pinta-ala- ja lukumäärännimikkeitä ja aseta niiden yksikkö, korkeus tai syvyys, hukka sekä materiaali- ja työhinnat.
keywords: kolonna, tuotantonopeus, kolonnan koko, palkka, tunnit, miestunnit, työntekijätunnit, kolonnapäivät, työtunnit, nimike, uusi nimike, ehto, monen ehdon, myös mitattava, useita tyyppejä, huone, viiva, pinta-ala, lukumäärä, yksikkö, korkeus, syvyys, hukka, materiaali, työ, hinta, väri, kustannus
from: 7fa5effc
---

**Nimike** on yksi mitattava ja hinnoiteltava asia: seinätyyppi, lattiapinnoite, alakatto, ovi tai valaisin. Jokainen piirtämäsi merkintä kuuluu nimikkeeseen. Muut ohjelmat kutsuvat näitä ehdoiksi.

Jokaisella nimikkeellä on tyyppi (ja se voi ottaa myös muunlaisia merkintöjä, katso [Yksi nimike, useita merkintätyyppejä](topic:create-items#one-item-several-kinds-of-marks)):

| Tyyppi | Piirrät | Se raportoi | Yksiköt |
|---|---|---|---|
| Viiva | Yhteen liittyvät pistejonot | Pituus, osuuksien määrä ja seinäpinta-ala, kun siinä on korkeus | LF tai m |
| Pinta-ala | Suljetut ääriviivat, aukkoineen | Pinta-ala, piiri, alueiden määrä | SF, SY, SQ, ac, ha tai m² |
| Lukumäärä | Yksi napsautus per kohde | Montako | EA |
| Kirjoitettu määrä | Ei mitään: kirjoitat määrän | Kirjoittamasi luku (tai CivilCraftista tuotu) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha tai m² |

## Kirjoitetut määrät (ei piirustusta)

Joitakin kustannusarvion asioita ei koskaan piirretä: työmaan perustaminen, luvat, varaus, kokonaishintainen aliurakka sekä CivilCraftin laskema leikkaus ja täyttö. Tee niistä **kirjoitettu määrä**:

1. Valitse {{ui:New item}}, kirjoita nimi, valitse {{ui:Typed quantity (no drawing)}} ja valitse {{ui:Add}}.
2. Valitse nimikkeen editorissa {{ui:Unit}} (LS kokonaishinnalle) ja kirjoita {{ui:Quantity}}: `1`, `2.5` tai `1,250`.
3. Aseta hukka ja hinnat kuten millä tahansa muulla nimikkeellä. Yhdistelmän kaavat käyttävät kirjainta `Q`, eli määrää, esimerkiksi `ceil(Q / 12)` kuorma-autokuormaa.

Kirjoitettu määrä ei saa merkintöjä, eikä se tee kustannusarviota koskaan keskeneräiseksi. Kun määrälaskennassa on tarjousalueita, editorissa on myös {{ui:Bid area}}: määrä lasketaan silloin siihen alueeseen, sen vaihtoehtoihin ja summiin, aivan kuten siihen tehty merkintä laskettaisiin. Muusta sovelluksesta tuodut määrät kertovat lähteensä, katso [Maansiirto ja korkeuspisteet](topic:earthwork#cut-and-fill-from-civilcraft).

## Luo nimike

1. Valitse oikeanpuoleisesta paneelista {{ui:Items}} painike {{ui:New item}}.
2. Kirjoita nimi, esimerkiksi `Interior wall type A` tai `Carpet tile`.
3. Valitse tyyppi: {{ui:Linear (length)}}, {{ui:Area}} tai {{ui:Count}}.
4. Valitse {{ui:Add}} (tai paina {{key:Enter}}). Nimike näkyy listassa omalla värillään, siitä tulee nimike, jolla piirrät, ja sen editori aukeaa listan alapuolelle. Tilarivi kertoo, mikä työkalu valitaan seuraavaksi.

Sulje lomake lisäämättä nimikettä painamalla {{key:Esc}}.

:::tip
Jos valitset ensin mittaustyökalun, TakeoffCraft käyttää viimeistä oikean tyyppistä nimikettä tai avaa lomakkeen {{ui:New item}} jo valitulla tyypillä.
:::

## Valitse nimike, jolla piirrät

Napsauta nimikettä listassa. Siitä tulee nimike, johon uudet merkinnät menevät, ja sen merkinnät korostuvat jokaisella arkilla, kun muut himmenevät. Jos avoimella arkilla ei ole sen merkintöjä, TakeoffCraft siirtyy arkille, jolla niitä on. Napsauta nimikettä uudelleen lopettaaksesi korostuksen; se pysyy nimikkeenä, jolla piirrät.

Merkinnän napsauttaminen työkalulla {{ui:Select}} tekee myös sen nimikkeestä nykyisen.

## Määritä nimike

Nimikkeen editorissa (**Nimike: (nimi)**) on nämä kentät. Kukin tallentuu, kun poistut kentästä tai painat {{key:Enter}}, ja jokainen muutos voidaan kumota.

| Kenttä | Mitä se tekee |
|---|---|
| {{ui:Name}} | Näkyy listassa, taulukoissa ja vienneissä. |
| {{ui:Type}} | Viiva, Pinta-ala tai Lukumäärä. Se lukitaan, kun nimikkeellä on merkintöjä (”Merkintöjä sisältävä nimike säilyttää tyyppinsä”). |
| {{ui:Color}} | Merkintöjen väri näytöllä ja merkityssä PDF-tiedostossa. |
| {{ui:Unit}} | Yksikkö, jolla määrä ilmoitetaan: LF tai m viivoille; SF, SY, SQ, ac, ha tai m² pinta-aloille; EA lukumäärälle. |
| {{ui:Also measure}} | Muut merkintätyypit, joita nimike ottaa, kukin omalla yksiköllään. Katso alla. |
| {{ui:Height}} (viiva) | Seinän korkeus. Nimike raportoi silloin myös seinäpinta-alan (pituus × korkeus). Ajot, jotka tulevat BimCraft-mallista, kantavat ovensa ja ikkunansa: ne vähennetään kerran, ja nimike ilmoittaa bruttopinta-alan, aukot ja nettopinta-alan. BimCraft-projektin määrälaskenta, jossa on valittu mittausmenetelmä, mitataan tässä myös sillä menetelmällä (huomautus nimeää sen lähteineen ja kertoo, ettei määrälaskija ole tarkistanut sitä); menetelmää ei voi vaihtaa TakeoffCraftissa. Seinätyypin tiilet tai harkot ja laasti tulevat kahtena komponenttina: tilattavat yksiköt ja laastin tilavuus. |
| {{ui:Depth}} (pinta-ala) | Syvyys tai paksuus, jota käytetään yhdistelmien kaavoissa (esimerkiksi betonin tilavuus). |
| {{ui:Waste %}} | Lisätään määrään ennen hinnoittelua: 10 tarkoittaa määrä × 1.10. |
| {{ui:Material $/LF}} | Materiaalikustannus yksikköä kohti. Nimike seuraa yksikköä: $/SF, $/EA ja niin edelleen. |
| {{ui:Labor $/LF}} | Työkustannus yksikköä kohti. |
| {{ui:CSI number}} | CSI MasterFormat -numero, kuten `09 21 16` (tai pelkkä jakso, `09`). Työkirjan Jakson mukaan -taulukko ryhmittelee kustannukset sen mukaan. Nimikkeissä [ammattialapaketeista](topic:trade-packs) sellainen on jo valmiina. |

Korkeus ja syvyys hyväksyvät jalat ja tuumat (`9'-0"`, `8' 6"`) tai desimaalijalat (`9`) imperiaalisille yksiköille sekä metrit (`2.7`, `2700 mm`) metrijärjestelmän yksiköille. Hinnat hyväksyvät arvoja kuten `12.50` tai `$1,250`, enintään neljällä desimaalilla. Katso [Pituuden, hinnan ja prosentin syöttö](topic:entry-formats).

Alla oleva **Mitattu** näyttää summat, joita nimikkeen kaavat voivat käyttää, kirjaimineen: Pituus (L), Osuudet (N), Seinäpinta-ala (A) viivoille; Pinta-ala (A), Piiri (P), Alueet (N) pinta-aloille; Lukumäärä (N) lukumäärille.

## Yksi nimike, useita merkintätyyppejä

Joitakin asioita mitataan useammalla tavalla: huoneella on lattia (pinta-ala), seinien varrella lattialista (pituus) ja ovet (lukumäärä). Kolmen nimikkeen sijaan tee yksi:

1. Tee nimike sen pääasiallisella tyypillä, kuten pinta-alanimike `Room 101`.
2. Kohdassa {{ui:Also measure}} sen editorissa valitse {{ui:Linear}}, {{ui:Count}} tai molemmat. Kummallekin tulee yksikkö viereen.
3. Piirrä millä tahansa työkalulla, jonka tyyppi nimike ottaa: kun `Room 101` on nykyinen, {{ui:Area}} piirtää sen lattian, {{ui:Linear}} lattialistan ja {{ui:Count}} ovet. TakeoffCraft ei pyydä toista nimikettä.

Nimikeluettelo näyttää jokaisen määrän (`50.00 SF + 2 EA`). Määrätaulukossa nimikkeen rivillä on sen pääasiallinen määrä, ja jokainen muu tyyppi saa oman rivin sen alle, kuten **Room 101 (lukumäärä)**, omine hukka-, materiaali- ja työhintoineen. Viennit, arkkikohtainen taulukko ja merkityn PDF:n selite listaavat ne samalla tavalla.

Pääasiallisen tyypin kentät pysyvät sen omina: korkeus tai syvyys, kaltevuus, vähennykset ja 3D-muoto koskevat vain sen merkintöjä. Pinta-alanimikkeelle piirretty lattialista mitataan suoraan pohjapiirroksella ja näkyy 3D:ssä tasaisena. Yhdistelmien kaavat käyttävät pääasiallisen tyypin summia.

Lajin voi poistaa valinnasta vain, kun nimikkeellä ei ole siihen kuuluvia merkintöjä; poista ne tai siirrä ne ensin toiselle nimikkeelle kohdassa **Valittu merkintä**. Merkinnät voi siirtää millä tahansa nimikkeellä, joka ottaa niiden tyypin.

Alempana on {{ui:Assembly}}: komponentit, kuten runko-osat tai levyt, kukin omalla kaavallaan ja hinnoillaan. Katso [Yhdistelmät ja kaavat](topic:assemblies).

Alareunassa {{ui:Move up}} ja {{ui:Move down}} muuttavat nimikkeen paikkaa listassa ja vienneissä, ja {{ui:Delete item}} poistaa sen kaikkine merkintöineen (kysymyksen jälkeen; poiston voi kumota).

Pinta-alanimikkeillä on myös **Kaltevuus** (kattotasot mitataan rinteessä: [Katot ja kaltevuudet](topic:roofs-and-slopes)) ja **Vähennys** (niiden merkinnät vähennetään muiden nimikkeiden pinta-aloista: [Mittaa pinta-alat](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Viivanimikkeillä on **Kallistus** (Level, Rake, Hip tai valley) ja kattojen sivu- ja harjakaltevuuksille **Kaltevuus**.

## Hinnat taulukossa

Voit kirjoittaa myös {{ui:Waste %}}-, materiaali- ja työhinnat suoraan alareunan {{ui:Quantities}}-taulukkoon ({{ui:By item}}). Asetus on sama kuin editorissa.

## Miten hinnoittelu toimii

Jokaiselle nimikkeelle ja jokaiselle yhdistelmän komponentille:

1. **Hukalla** = määrä × (1 + hukka %).
2. **Materiaali** = hukalla × materiaali per yksikkö, pyöristettynä sentille.
3. **Työ** = hukalla × työ per yksikkö, pyöristettynä sentille.
4. **Yhteensä** = materiaali + työ.

{{ui:Job total}} laskee yhteen jokaisen nimikkeen ja jokaisen komponentin. Nimikkeellä voi olla omat hinnat ja yhdistelmä samaan aikaan; molemmat lasketaan, joten jätä nimikkeen hinnat nollaan, kun sen komponentit kantavat kustannuksen.

## Työ kolonnittain

Yksikkökohtaisen työhinnan sijaan nimikkeen työ voi tulla kolonnalta: kuinka paljon se tekee tunnissa, kuinka monta henkeä ja mitä kukin ansaitsee. Valitse nimikkeen editorissa kohdassa {{ui:Labor by crew}} valintaruutu {{ui:Price labor from a crew}} ja täytä:

| Kenttä | Esimerkki |
|---|---|
| {{ui:Production}} | `20` LF tunnissa (nimikkeen yksikössä) koko kolonnalle |
| {{ui:Crew size}} | `2` henkeä |
| {{ui:Wage $/hour each}} | `45` |

TakeoffCraft laskee hukalla korotetusta määrästä:

- **kolonnatunnit** = määrä ÷ tuotanto (110 LF ÷ 20 = 5.5),
- **työntekijätunnit** = kolonnatunnit × kolonnan koko (11),
- **kolonnapäivät** = kolonnatunnit ÷ 8 (0.69),
- **työ** = työntekijätunnit × palkka ($495.00).

Editori näyttää tuloksen ja siitä saatavan hinnan ($4.50/LF). Nimikkeen oma työhinta on silloin vain luettavissa sekä editorissa että taulukossa. {{ui:Quantities}}-taulukon otsikko lisää työntekijätunnit ja kolonnapäivät koko työlle. Viennit mainitsevat kunkin kolonnan tunnit, ja työkirjassa työkustannussolu on kolonnaan perustuva kaava (`ROUND(F2/20*2*45,2)`). Palaa yksikkökohtaiseen hintaan poistamalla valintaruudun valinta.

## Metriset nimikkeet

Valitse yksiköksi m (viiva) tai m² (pinta-ala). Määrät, korkeudet ja kaavojen arvot ovat silloin metreinä. Arkin mittakaava voi olla mikä tahansa esiasetus tai kalibrointi; yksiköt ja mittakaavat ovat toisistaan riippumattomia.

## Seuraavaksi

- [Mittaa viivat](topic:measure-linear)
- [Mittaa aukolliset pinta-alat](topic:measure-areas)
- [Laske käsin](topic:count-by-hand)
