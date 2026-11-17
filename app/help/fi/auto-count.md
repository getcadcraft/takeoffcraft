---
title: Symbolin automaattilaskenta
summary: Rajaa yksi symboli laatikolla, anna TakeoffCraftin etsiä muut tältä arkilta tai kaikilta avoimilta arkeilta, tarkista osumat liukusäätimellä ja lisää ne yhdellä kertaa.
keywords: mikä tahansa kulma, kierretty, käännetty, muu mittakaava, eri mittakaava, automaattilaskenta, automaattinen laskenta, symbolihaku, symbolien etsintä, kuvio, sapluuna, vastaavuus, tunnistus, laskentatyökalu
from: fa68a6c1
---

{{ui:Auto count}} löytää jokaisen symbolin kopion, kun olet rajannut yhden. Sen jälkeen tarkistat arkin osumat ja lisäät hyväksymäsi laskentamerkinnöiksi. Se on apuväline, ei takuu: tarkista aina ennen lisäämistä.

## Etsi symbolit

1. Tee tai valitse laskentanimike kohdasta {{ui:Items}}.
2. Avaa arkki, jolla symboli esiintyy.
3. Valitse työkalurivistä {{ui:Auto count}} tai paina {{key:S}}.
   Arkin yläreunaan ilmestyy palkki: ”Vedä laatikko yhden symbolin ympärille tällä arkilla.”
4. Jos haluat etsiä kaikilta avoimilta arkeilta eikä vain tältä, valitse {{ui:Search all open sheets}}.
5. Zoomaa lähemmäs, jotta symboli näkyy selvästi, ja vedä laatikko tiiviisti yhden kopion ympärille. Sisällytä koko symboli; sen ympärillä oleva tyhjä paperi leikataan pois.
   Palkissa lukee ”Haetaan…” edistymispalkin ja painikkeen {{ui:Cancel}} kanssa. Sivu pysyy käyttökelpoisena: voit zoomata, panoroida ja siirtyä arkkien välillä. Toisen työkalun valinta tai {{key:Esc}} peruuttaa haun.
6. Kun haku on valmis, osumat näkyvät arkilla laatikoina nimikkeen värisinä, ja palkissa on yhteenveto, esimerkiksi ”22 osumaa, 19 lisättäväksi (3 on jo laskettu). Napsauta laatikkoa hylätäksesi sen tai palauttaaksesi sen.”

Kohdassa {{ui:Auto count}} vetäminen arkilla piirtää laatikon eikä panoroi. Panoroi pitämällä {{key:Space}} pohjassa ja vetämällä tai vetämällä keskipainikkeella.

## Tarkista osumat

- **Napsauta laatikkoa** hylätäksesi sen. Hylätty laatikko on katkoviivainen ja yliviivattu. Napsauta uudelleen palauttaaksesi sen.
- **Siirrä liukusäädintä {{ui:Match}}** (50–95 %, alussa 75 %). Korkeampi arvo näyttää vain tarkat osumat, matalampi löysemmät. Liukusäädin ainoastaan suodattaa löydetyt osumat; se ei hae uudelleen.
- **Jo laskettu**: osumat paikoissa, joissa on jo tämän nimikkeen laskentamerkintä, alkavat hylättyinä, jotta mitään ei lasketa kahdesti.
- **Muut arkit**: kun etsit kaikilta avoimilta arkeilta, siirry arkkien välillä arkkiluettelon tai {{key:PageDown}}-näppäimen avulla ja tarkista jokainen. Yhteenvedossa kerrotaan, montako arkkia sisältää osumia.

## Lisää ne

Valitse {{ui:Add}}. Painike kertoo määrän, esimerkiksi ”Lisää 19 merkintää”.
Laskentamerkinnät lisätään jokaisen hyväksytyn laatikon keskelle: ”Lisättiin 19 laskentamerkintää kohteeseen ”Kaksoispistorasia”. Ctrl+Z poistaa ne kaikki.”

Koko erä on yksi kumoamisvaihe, joten yksi {{key:Mod+Z}} poistaa sen.

Jos haluat hylätä tarkistuksen lisäämättä mitään, valitse {{ui:Discard}} tai paina {{key:Esc}}. Toisen työkalun valinta hylkää sen myös.

## Mitä se löytää ja mitä se jättää väliin

TakeoffCraft vertaa piirustusta pikseleinä piirtämääsi symboliin.

- Se löytää symbolin, joka on käännetty 0°, 90°, 180° ja 270°. Jos haluat löytää sen myös mistä tahansa kulmasta, valitse automaattilaskennan palkissa {{ui:Any angle (slower)}} ennen laatikon piirtämistä: se kokeilee 15 asteen välein ja hienosäätää jokaisen löydön asteen ja puolen tarkkuuteen. Tämä kestää noin kuusi kertaa kauemmin. Peilattua symbolia se ei löydä (ellei symboli näytä peilattunakin samalta).
- Kun {{ui:Search all open sheets}} on valittuna, toisessa mittakaavassa olevaa arkkia haetaan siinä olevan symbolin kokoisena: 1/8"-pohjapiirrokseen mittakaavassa piirretty laite on puolet kokoaan 1/4"-pohjapiirroksessa, ja se löydetään silti. Tällaista arkkia haetaan myös laatikon omalla koolla merkeille ja symboleille, jotka on tulostettu samankokoisina joka arkille. Tämä vaatii mittakaavan molemmilla arkeilla; arkki ilman mittakaavaa haetaan vain laatikon koolla.
- Hyvin samankaltaiset symbolit voivat osua toisiinsa: kaksois- ja nelinkertainen pistorasia tai kaksi merkintää, jotka eroavat yhdellä kirjaimella. Nosta liukusäädintä, kunnes jäljellä ovat vain oikeat, ja hylkää loput käsin.
- Symboli, jonka läpi kulkee muita viivoja, viivoitusta tai tekstiä, saa alhaisemman pistemäärän ja saattaa vaatia matalamman liukusäätimen asetuksen.
- Hyvin pienet laatikot hylätään: ”Laatikko on liian pieni. Piirrä se koko symbolin ympärille.” Tyhjä laatikko hylätään myös: ”Laatikko on lähes tyhjä. Piirrä se symbolin ympärille.”
- Arkki, joka olisi tämän symbolin kokoon nähden hyvin suuri, ohitetaan ja yhteenvedossa lukee ”1 arkkia oli liian suuri haettavaksi tällä symbolin koolla.” Rajaa suurempi symboli tai laske se arkki käsin.

Jos mitään ei löydy, tilarivillä lukee ”Ei osumia. Laske vastaavuusliukusäädintä tai rajaa symboli tiukemmin.”

## Nopeus ja selaimet

Haku toimii taustatyöntekijässä, joten sivu pysyy käyttökelpoisena ja haun voi peruuttaa milloin tahansa. Jokainen arkki piirretään ensin työkokoon itse sivulle, mikä voi pysäyttää hetkeksi hyvin suuren arkin. Toiminto toimii uusimmilla Chrome-, Edge-, Firefox- ja Safari-selaimilla. Monen arkin haku vie kauemmin; edistymispalkki etenee arkki kerrallaan. Offline-tilassa automaattilaskenta toimii, kun sovelluspalkissa näkyy {{ui:Offline ready}}. {{ui:Save for offline}} säilyttää myös työntekijän. Katso [Työskentely offline-tilassa](common:offline).
