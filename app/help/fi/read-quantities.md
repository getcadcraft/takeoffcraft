---
title: Määrien lukeminen ja kustannusarvio
summary: Käytä Määrät-taulukkoa nimikkeittäin ja arkeittain, työn kokonaissummaa, korostusta ja Keskeneräinen-varoitusta.
keywords: määrät, summat, nimikkeittäin, arkeittain, työn kokonaissumma, kustannusarvio, yhteenveto, raportti, korostus, keskeneräinen, kustannukset
from: 069d41f1
---

{{ui:Quantities}}-taulukko ikkunan alareunassa on elävä kustannusarviosi. Se muuttuu heti, kun piirrät, poistat, muutat mittakaavaa tai muokkaat yksikköhintaa. Määriä ei tallenneta; ne mitataan merkinnöistä uudelleen aina, joten ne eivät voi vanhentua.

## Nimikkeittäin

Valitse {{ui:By item}} (oletus). Jokaisella nimikkeellä on oma rivi, ja sen yhdistelmän osilla on rivi sen alla.

| Sarake | Merkitys |
|---|---|
| Nimike | Nimi nimikkeen värillä. "+(n) ilman mittakaavaa" tarkoittaa, että osa merkinnöistä on arkeilla, joilla ei ole mittakaavaa. |
| Määrä | Mitattu kokonaismäärä nimikkeen yksikössä (osilla: kaavan tulos). |
| Yksikkö | LF, m, SF, SY, m², EA tai osan yksikkö. |
| Hukka % | Kirjoitetaan tähän tai nimikkeen muokkausikkunaan. |
| Hukan kanssa | Määrä × (1 + hukka). |
| Materiaali/yksikkö, Työ/yksikkö | Yksikköhinnat; voit kirjoittaa ne tähän. |
| Materiaali, Työ | Hukan kanssa × hinta, pyöristetty sentin tarkkuuteen. |
| Yhteensä | Materiaali + työ. |

Viimeinen rivi, **Työn kokonaissumma**, laskee yhteen materiaali-, työ- ja yhteensä-sarakkeet. Sama kokonaissumma näkyy taulukon otsikon oikealla puolella.

Kirjoita hukka- tai hintasoluun ja paina {{key:Enter}} tai napsauta muualle, jolloin arvo otetaan käyttöön. Arvo, jota TakeoffCraft ei osaa lukea, saa punaisen reunuksen, ja tilarivi kertoo syyn, esimerkiksi "Kirjoita määrä, esim. 12.50."

Napsauta nimikkeen riviä, niin sen merkinnät korostuvat jokaisella arkilla ja siirryt arkille, jolla niitä on. Tämä tekee saman kuin napsauttaminen kohdassa {{ui:Items}}.

## Arkeittain

Valitse {{ui:By sheet}} nähdäksesi kunkin nimikkeen määrän kullakin arkilla sekä merkintöjen määrän. Napsauta riviä, niin arkki avautuu nimike korostettuna. Käytä sitä tarkistaaksesi, että jokainen arkki on mitattu, tai jaa määrät kerroksittain tai työalueittain.

## Alueittain

Kun määrälaskennassa on tarjousalueita, {{ui:By area}} listaa kunkin alueen nimikkeet ja välisumman. Katso [Tarjousalueet](topic:bid-areas).

## Keskeneräinen-varoitus

Kun jokin jää pois summista, taulukon otsikossa näkyy varoitus, esimerkiksi:

"Keskeneräinen: 1 kaavavirhe, 6 merkintää arkeilla ilman mittakaavaa (ei mukana summissa)"

- **Kaavavirheet**: yhdistelmän osan kaavaa ei voi laskea. Sen rivillä lukee "Kaavavirhe: …". Katso [Yhdistelmät ja kaavat](topic:assemblies#when-a-formula-is-wrong).
- **Merkinnät arkeilla ilman mittakaavaa**: anna näille arkeille mittakaava. Katso [Aseta mittakaava](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Samat huomautukset menevät myös vietyyn taulukkoon, joten keskeneräinen kustannusarvio ei koskaan näytä valmiilta.

## Korosta nimike

Napsauta nimikettä kohdassa {{ui:Items}} tai taulukossa. Sen merkinnät säilyvät täydellä voimakkuudella jokaisella arkilla, ja muut himmenevät. Arkkiluettelossa jokaisen merkinnät sisältävän arkin kohdalla lukee "(n) korostettu". Napsauta nimikettä uudelleen lopettaaksesi korostuksen.

## Nimikkeiden summat sivupaneelissa

Myös jokaisen {{ui:Items}}-luettelon nimikkeen määrä näkyy. Nimikkeen muokkausikkunan **Mitattu**-osio näyttää arvot, joita sen kaavat käyttävät: pituus, osuudet ja seinäpinta-ala; pinta-ala, piiri ja alueiden määrä; tai lukumäärä.

## Merkinnät PDF-tiedostoissa, joita ei ole avattu

Määrälaskennassa voi olla merkintöjä PDF-tiedostoista, joita et ole avannut tällä kertaa. Ne lasketaan silti kaikkiin summiin; arkkiluettelo nimeää nämä PDF-tiedostot. Katso [Tallenna määrälaskenta ja avaa se uudelleen](topic:save-and-reopen).

## Lisää tilaa

Nuolipainike {{ui:Quantities}}-otsikon oikealla puolella piilottaa taulukon, jotta arkille jää enemmän tilaa. Napsauta sitä uudelleen tuodaksesi taulukon takaisin.
