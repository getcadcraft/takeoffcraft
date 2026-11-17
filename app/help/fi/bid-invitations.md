---
title: Lähetä tarjouspaketti tarjouspyyntönä
summary: Lähetä tarjouspaketti sähköpostilla aliurakoitsijoille, anna heidän kirjoittaa hintansa sivulle, joka ei vaadi tiliä, pidä hinnat suljettuina avaamisajankohtaan asti ja hae ne tasaustaulukkoon.
keywords: lähetä tarjouspyyntö, kutsu, tarjouskutsu, tarjoaja, aliurakoitsija, kutsu, sähköposti, hintapyyntö, suljetut tarjoukset, tarjousten avaaminen, tarjouspäivä, myöhässä oleva tarjous, eräpäivä, muistutus, aliurakoitsijarekisteri, vakuutus, pätevyys, csv, yhdistä, arkit pdf
from: fb314b2c
---

{{ui:Vie}} › {{ui:Tarjouspaketit ja tasaus…}} › {{ui:Lähetä tarjouspyyntö…}} lähettää yhden paketin valitsemillesi henkilöille. Verkkosivusto lähettää kullekin sähköpostilla linkin; he avaavat sivun, näkevät laajuuden ja kirjoittavat hinnan jokaiselle riville. Näet hinnat tasaustaulukosta, valmiina vertailuun ([Tarjouspaketit ja tarjousten tasaus](topic:bid-leveling)).

:::note
Lähettäminen **ei ole vielä kaikille avoin.** Ominaisuuden testauksen ajan se toimii CadCraft-tiimin käyttöön ottamille tileille; jos sinun tilisi ei ole sellainen, valintaikkuna kertoo sen. Tarjoajan sivu toimii kaikille lähetetyille kutsuille.
:::

## Ennen lähettämistä

- Tarvitset CadCraft-tilin vahvistetulla sähköpostiosoitteella. TakeoffCraft selaimessa pyytää sinua **Yhdistämään**: avautuu välilehti getcadcraft.comiin, painat Yhdistä, ja se välilehti saa kirjautumisen, joka toimii 30 päivää vain tarjouspaketeille, kunnes suljet TakeoffCraft-välilehden. Voit poistaa sen milloin tahansa turvallisuussivultasi. Studio-ikkuna ei voi vielä lähettää.
- Anna jokaiselle nimikkeelle CSI-numero: paketti on yhden CSI-jaon nimikkeet ([Luo laskennan nimikkeet](topic:create-items)).
- Mittakaavoita arkit, joilla paketin merkinnät ovat, jotta tarjoajien näkemät määrät ovat mitattuja.

## Lähetä paketti

1. Valitse paketin alta {{ui:Lähetä tarjouspyyntö…}}.
2. Täytä nimi, projekti ja vapaaehtoinen viesti sekä **eräpäivä** omassa aikavyöhykkeessäsi.
3. Jätä **Pidä hinnat suljettuina** rastitettuna, jolloin kaikki hinnat ovat piilossa **avaamisajankohtaan** asti (ei ennen eräpäivää), tai poista rasti, jolloin näet hinnat heti, kun ne saapuvat.
4. Jätä arkki-ruutu rastitettuna, jolloin lähetetään PDF paketin merkintöjä sisältävistä arkeista, merkinnät piirrettynä. Omat hintasi eivät koskaan ole lähetettävässä: vain nimikkeiden nimet, CSI-numerot, määrät, yksiköt ja arkkien nimet.
5. Kirjoita kutsuttavat, yksi per rivi muodossa `Nimi <nimi@yritys.fi>` tai pelkkä osoite, tai rastita henkilöitä aliurakoitsijarekistereistäsi. Enintään 60 kerrallaan, 100 per paketti.
6. Valitse {{ui:Lähetä kutsut}}. Jokainen saa yhden tavallisen sähköpostin nimelläsi ja sähköpostiosoitteellasi, eräpäivän ja linkin; vastaukset menevät sinulle.

Valintaikkuna kertoo, kuinka monelle lähetettiin, ja nimeää ohitetut: jo tähän pakettiin kutsutut, ne, jotka ovat pyytäneet olemaan saamatta tarjouskutsuja, virheellinen osoite tai lähetysrajan ylitys.

## Mitä tarjoaja näkee

Sivu pitkän yksityisen linkin takana, ilman kirjautumista. Se näyttää, kuka kutsui, eräpäivän, onko hinnat suljettu, viestisi ja arkki-PDF:n, sitten jokaisen rivin määrineen. Kullekin riville tarjoaja kirjoittaa hinnan tai rastittaa **Ei sisälly**, ja voi lisätä huomautuksen. Huomautuksia voi lisätä koko paketille ja enintään 3 tiedostoa (tarjous, laajuuskirje, todistus). Tarjoaja voi tallentaa uudelleen ja muuttaa hintojaan avaamisajankohtaan asti, tai **kieltäytyä**, ja ruudulla hän voi pyytää, että CadCraft ei lähetä hänelle enää tarjouskutsuja.

## Suljetut tarjoukset ja avaaminen

Ennen avaamisaikaa **kukaan** ei näe hintaa, huomautusta tai tiedostoa: ei sinä, ei TakeoffCraftissa, ei Tarjouspaketit-sivulla. Näet, ketä kutsuttiin ja vastasiko hän. Avaamisajankohtana kaikki tarjoukset näkyvät kerralla. Eräpäivän jälkeen tallennettu tarjous hyväksytään ja merkitään **myöhässä**; tasaus listaa sen edelleen, ja myöhästyminen on merkintä, ei päätös. Avaamisen jälkeen tarjoaja ei voi muuttaa hintaa. Ilman sulkemista tarjous on lopullinen, kun eräpäivä on ohi.

## Hae hinnat

{{ui:Hae hinnat}} pyytää sivustolta ja lisää jokaisen vastauksen pakettiin tarjouksena, merkittynä **web**. TakeoffCraft kysyy myös hiljaa joka kerta, kun avaat valintaikkunan ollessaan yhdistettynä. Tarjous, jonka tarjoaja on tallentanut uuden version, päivittyy paikallaan. Tarjous, jota muokkasit, pysyy niin kuin jätit, kunnes he lähettävät uuden version. Jokainen haku on yksi vaihe, jonka {{key:Mod+Z}} kumoaa. Poisjätetyt rivit tulevat mukaan laajuutena, jonka tarjous jättää pois, joten tasaus täyttää ne omalla kustannuksellasi.

## Verkkosivustolla

Tilillä on kaksi sivua lisää, kun voit lähettää. **Tarjouspaketit** listaa lähettämäsi, vastaajat, myöhässä olevat tarjoukset ja tiedostot, ja antaa lähettää muistutuksen (uusi linkki; vanha lakkaa toimimasta), sulkea, avata uudelleen tai peruuttaa paketin. **Aliurakoitsijat** pitää tietueen kustakin yrityksestä: yhteystiedot, alat, pätevyysvastaukset (toimintavuodet, takausvaranto, EMR, turvallisuustiedot, liitto- tai avoin työpaikka, referenssit), lisenssien ja vakuutusten päättymispäivät, merkittynä, kun ne ovat menneet tai alle 30 päivää jäljellä, sekä aiemmat tarjoukset. Tuo ja vie tietueet CSV-muodossa: yksi rivi per yhteyshenkilö, vientiin näkyvillä sarakkeilla. Yritys, joka on jo olemassa, päivittyy eikä toistu.

## Kuka näkee mitä ja kuinka kauan

Tarjoajan hinnat, huomautukset ja tiedostot menevät sinulle ja CadCraft-tiimille, joka ylläpitää sivua. Niitä säilytetään 24 kuukautta eräpäivästä, tiedostoja 180 päivää; sen jälkeen ne poistetaan. Tarjoajan sähköpostiosoite on se, jonka syötit; sitä käytetään vain kutsun ja sen muistutuksen lähettämiseen. Yksi osoite saa enintään 3 kutsua päivässä kaikilta yhteensä, ja sinä voit lähettää jopa 200 päivässä.

## Ei vielä toteutettu

Lisäsopimukset (addenda), hankintapäätökset, tarjoajakohtainen allekirjoitettu laajuuslomake ja automaattiset muistutukset ennen vakuutuksen päättymispäivää eivät ole toteutettuja. Katso [Ei vielä toteutettu](topic:not-built-yet).
