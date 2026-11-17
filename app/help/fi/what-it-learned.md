---
title: Mitä se oppi määrälaskennoistasi
summary: TakeoffCraft säilyttää symbolit, jotka vahvistit Automaattilaskennalla, ehtojoukkosi, eniten käyttämäsi yhdistelmät ja joka sivulla toistuvat merkinnät, kaikki määrälaskennan omassa tiedostossa. Katso, käytä, poista.
keywords: oppiminen, opittu, oppii, avustaja, muista, symbolit, mallipohjat, kuten edellinen työ, edellinen työ, ehtojoukko, ehdot, uudelleenkäyttö, yhdistelmät, eniten käytetyt, ehdotukset, toista jokaisella sivulla, jokainen sivu, piirustusotsikko, kaava, tyhjennä kaikki, unohda, yksityisyys
from: 54d99e99
---

TakeoffCraft nopeutuu, mitä enemmän määrälaskentoja sillä tehdään. Se oppii **vain siitä, minkä hyväksyt**:

- symbolit, jotka rajasit [Automaattilaskennalla](topic:auto-count) ja sitten lisäsit,
- ehtojoukot, jotka tallennat,
- yhdistelmät, joita käytät (kerran per työ),
- merkintöjen kaavat, joita toistat joka sivulla.

Kyse on yksinkertaisesta vastaavuuden etsimisestä omilla arkeillasi, sama haku, jota Automaattilaskenta käyttää. Kyse ei ole koulutetusta mallista. Kaikki opittu säilytetään **tämän määrälaskennan tiedostossa** (`.takeoff.json`), eikä mitään lähetetä minnekään. Seuraavaan työhön siirtämiseen käytetään [Kuten edellinen työ](topic:what-it-learned#same-as-last-job) -toimintoa.

Valitse {{ui:Opittu}} työkalurivillä (lamppu, {{ui:Automaattilaskenta}}n vieressä) nähdäksesi kaiken.

## Symbolit

Kun rajaat symbolin {{ui:Automaattilaskenta}}lla ja valitset {{ui:Lisää}}, rajattu symboli tallennetaan hyväksymäsi vastaavuustason kanssa.

- {{ui:Opittu}}-ikkunassa valitse {{ui:Etsi tältä arkilta}} tai {{ui:Etsi kaikilta arkeilta}}. Tavallinen Automaattilaskennan tarkistus avautuu: napsauta ruutua jättääksesi sen pois, siirrä liukusäädintä ja lisää sitten. Mitään ei lisätä, ennen kuin niin tehdään.
- Kun avaat arkin, jolta opittua symbolia ei vielä löydy, palkki ylhäällä tarjoaa {{ui:Etsi …}}-toimintoa sille. {{ui:Ei nyt}} piilottaa sen kyseiseltä arkilta.
- Jos määrälaskennassa ei ole kyseisen nimistä nimikettä, merkintöjen lisääminen lisää myös nimikkeen (yksi kumoamisvaihe).
- Saman nimikkeen symbolin lisääminen uudelleen lasketaan sen tunnetun symbolin osaksi; eri näköinen symboli tallennetaan toisena.
- Kuten Automaattilaskenta, se löytää symbolin kohtisuorissa kulmissa ja arkeilta, joiden mittakaava on eri.

## Ehtojoukot

Joukko tallentaa määrälaskennan ehdot (nimikkeet yksikköineen, yksikköhintoineen, hukkineen ja yhdistelmineen) ilman merkintöjä.

1. {{ui:Opittu}}-ikkunassa valitse {{ui:Tallenna tämän määrälaskennan ehdot joukoksi…}} ja anna sille nimi. Saman nimen joukko korvataan.
2. Määrälaskennassa, jossa joukko on, {{ui:Lisää}} lisää ehdot, joita siinä ei vielä ole. Samannimiset ja -tyyppiset ehdot jätetään rauhaan. Se on yksi kumoamisvaihe.

## Kuten edellinen työ

Edellisen työn tiedosto sisältää sen oppimat asiat. Uuden työn aloittamiseksi siitä:

1. Avaa uudet piirustukset ja valitse {{ui:Opittu}} › {{ui:Kuten edellinen työ…}}.
2. Valitse edellisen työn `.takeoff.json`.
3. Rastita, mitä tuodaan: sen ehdot (vain ne, joita tässä määrälaskennassa ei vielä ole) ja mitä se oppi (symbolit, joukot, yhdistelmät, kaavat). Valitse sitten {{ui:Tuo ne}}.

Sen ehdot tallennetaan myös joukkona, joka on nimetty kyseisen työn mukaan. Sen merkinnät ja määrät pysyvät omassa tiedostossaan. Koko toiminto on yksi kumoamisvaihe.

## Eniten käyttämäsi yhdistelmät

Nimike, jolla on yhdistelmä, lasketaan käytetyksi kerran per työ, kun sillä on määrä ja tallennat määrälaskennan. Työ on joukko piirustustiedostoja, joista se lasketaan, joten saman määrälaskennan tallentaminen uudelleen ei laske sitä kahdesti. Luettelo kohdassa {{ui:Eniten käyttämäsi yhdistelmät}} asettaa eniten käyttämäsi ensimmäiseksi. Siinä ei ole ne, jotka tässä määrälaskennassa on jo. {{ui:Lisää}} lisää yhden sellaisena kuin viimeksi käytit sitä, kaikkine osineen.

## Toista jokaisella sivulla

Merkinnöille, jotka ovat samat joka sivulla joukossa, kuten piirustusotsikon laskenta tai tyypillinen detalji:

1. Valitse merkinnät yhdeltä arkilta ([Valitse merkinnät](topic:copy-paste#select-the-marks)).
2. {{ui:Opittu}}-ikkunassa valitse {{ui:Toista valitut merkinnät joka sivulla…}}, anna kaavalle nimi ja vahvista.

Merkinnät menevät jokaiselle muulle avoimelle sivulle, **samankokoisena**, samaan kohtaan, yhtenä kumoamisvaiheena. Pituudet ja pinta-alat menevät vain sivuille, joilla on sama mittakaava; lukumäärät menevät mille tahansa saman kokoiselle sivulle. Sivu, jolla niitä jo on, ohitetaan. Kaava säilytetään, joten myöhemmin avattavat sivut saavat tarjouksen palkissa, tai voit käyttää {{ui:Toista jokaisella sivulla}} -toimintoa luettelosta.

## Näe, poista

Kaikki opittu on listattu {{ui:Opittu}}-ikkunassa. Roskakorin painike poistaa yhden asian. {{ui:Tyhjennä kaikki}} poistaa kaiken opitun ja jättää nimikkeet ja merkinnät ennalleen. Molemmat voi kumota, kunnes suljet määrälaskennan, ja molemmat tallennetaan määrälaskennan mukana.

Oppimisen lopettamiseksi yhdessä määrälaskennassa poista rasti kohdasta {{ui:Opi tästä määrälaskennasta}}. Mitään uutta ei opita, ja listattu säilyy, kunnes poistat sen.

## Hyvä tietää

- Vanhemmat TakeoffCraft-versiot avaavat tiedoston, jossa on opittua, normaalisti. Ne jättävät sen huomiotta ja pudottavat sen, jos tallentavat tiedoston uudelleen.
- Opittu symboli on pieni kuva rajatusta kohteesta, joka säilytetään tiedostossa (muutama kilotavu kukin).
- Opittuja symboleja haetaan kuten Automaattilaskennassa, joten samat rajoitukset pätevät: [Symbolin automaattilaskenta](topic:auto-count).
