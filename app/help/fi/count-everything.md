---
title: Laske kaikki sarjasta
summary: Rajaa symbolien selite kerran, ja TakeoffCraft laskee jokaisen siinä olevan symbolin jokaiselta avoimelta arkilta yhdellä ajolla. Jokainen laskenta on linkki arkkiinsa, ja tarkistat ennen kuin mitään lisätään.
keywords: laske kaikki, selite, symbolien selite, koko sarja, jokainen arkki, kaikki arkit, jokainen ovi, jokainen kaluste, laitteet, luettelo, symbolit, automaattilaskenta, laske kaikki, piirustussarja, 200 arkkia, vastaavuustaso, samannäköinen
from: adc99744
---

{{ui:Laske kaikki}} lukee symbolien selitteen ja laskee sitten jokaisen siinä olevan symbolin jokaiselta avoimelta arkilta. Se on {{ui:Automaattilaskenta}} koko selitteelle kerralla. Kyseessä on pelkkä symbolien vastaavuushaku omilla arkeillasi, ei koulutettu malli, eikä mikään poistu tietokoneeltasi. Tarkista laskennat ennen kuin lisäät ne: se on apuväline, ei takuu.

## Laske selite

1. Avaa piirustukset. Selite millä tahansa arkilla kelpaa: symbolit ja niiden nimet vierellä.
2. Valitse työkalurivistä {{ui:Laske kaikki}}.
3. Vedä laatikko selitteen ympäri: symbolit ja nimet mukaan. Otsikko, jonka vieressä ei ole symbolia (SYMBOL LEGEND), jätetään pois itsestään.
   Paneeli listaa jokaisen symbolin kuvan ja sen vieressä painetun nimen kanssa. Nimestä tulee nimikkeen nimi, joten nimeä se tässä uudelleen, jos haluat.
4. Poista rasti symboleista, joita et halua laskea. Symboli, jota ei voi hakea (liian pieni tai tyhjä), kertoo syyn.
5. Valitse {{ui:Laske N arkilta}}. Palkki näyttää haettavan arkin; {{ui:Peruuta}} pysäyttää ajon. Sivu pysyy käytettävissä.

Selitteen omia symboleja ei lasketa sen arkilla. Arkki, joka on piirretty toisella mittakaavalla, haetaan sen mittakaavassa, ja symbolit löydetään käännettyinä mihin tahansa suorakulmaan.

## Tarkista laskennat

- Jokaisella symbolilla on kokonaissumma, ja sen alla linkki jokaiseen arkkiin, jolla niitä on ("E-103: 4"). Napsauta linkkiä mennäksesi arkille. Löydökset rajataan nimikkeen värillä.
- **Napsauta laatikkoa** jättääksesi löydöksen pois. Se muuttuu katkoviivaksi ja yliviivataan; napsauta uudelleen palauttaaksesi sen.
- **Siirrä vastaavuustasoa** (50 %:sta 100 %:iin, alkaen asetustesi tasosta). Korkeampi pitää vain tarkat osumat. Liukusäädin ainoastaan suodattaa löydetyt; mitään ei haeta uudelleen.
- Kaksi symbolia, jotka näyttävät samalta (kaksoispistorasia ja nelinkertainen pistorasia), voivat osua samaan kohtaan. Parempi osuma vie sen, ja paneeli kertoo, kuinka monessa kohdassa näin tapahtui, jotta voit tarkistaa ne.
- Arkki, joka on liian suuri haettavaksi symbolin koossa, ohitetaan, ja paneeli kertoo siitä.

## Lisää ne

Valitse {{ui:Lisää N merkintää}}. Jokainen symboli muuttuu lukumäärännimikkeeksi, jonka jokaisessa löydöksessä on merkintä. Nimi, joka on jo omasi lukumäärännimike, käytetään uudelleen, joten mitään ei tuplata siinä, minkä olet jo merkinnyt käsin. Koko ajo on yksi askel: {{key:Ctrl+Z}} poistaa kaikki nimikkeet ja merkinnät.

Hyväksymäsi asiat syöttävät myös {{ui:Opittu}}-luetteloon: symbolit muistetaan määrälaskennan tiedostoon seuraavaa kertaa varten.

## Avustajan kanssa

Jos sallit avustajat asetuksissa, ne voivat lukea selitteen (legend_open), käynnistää laskennan taustalla (legend_count_start, sitten legend_count_status), lukea laskennat (legend_count_result) ja lisätä ne (legend_count_add, joka voi ensin esikatsella, mitä se lisäisi). Se on sama ajo, jonka näet paneelissa.

## Symbolit missä tahansa kulmassa

Valitse {{ui:Symbolit missä tahansa kulmassa}} ennen laskentaa, jotta löydät myös symbolit, jotka on piirretty muussa kuin suorassa kulmassa (vinoon seinäpistokkeeseen, kalusteeseen, joka on käännetty seuraamaan kattoa). Haku kääntää silloin jokaista symbolia 15 asteen välein; pyöreä symboli tarvitsee yhden haun, ja muu kuin pyöreä symboli voi kestää kuusinkertaisen ajan. Jätä se pois suorakulmaisesti piirretyille piirustuksille.

## Hyvä tietää

- Tarvitaan symbolit, jotka on piirretty samoin kuin selitteessä. Selite, joka on piirretty eri kokoiseksi kuin arkit, käy, kun arkkien mittakaavat on asetettu; ilman mittakaavoja symbolit haetaan selitteen koossa.
- Symboli, jonka läpi kulkee seinä tai pitkä viiva, voidaan jättää huomaamatta, koska se ei enää näytä selitteen kuvalta. Tarkista löydökset ensimmäiseltä arkilta ennen kuin luotat muuhun.
- Skannaus ilman tekstiä toimii yhä: symbolit löydetään niiden rivien perusteella, ja nimet kirjoitat itse.
