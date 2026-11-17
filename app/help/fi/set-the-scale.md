---
title: Aseta mittakaava
summary: Anna jokaiselle arkille mittakaava esiasetuksella tai kalibroimalla tunnetulla mitalla, tarkista se, ja ymmärrä, miksi arkit ilman mittakaavaa jätetään summien ulkopuolelle.
keywords: tunnista mittakaava, lue mittakaava, mittakaava tekstistä, kaikki arkit, mittakaava, kalibroi, esiasetus, tarkista mittakaava, varmista, tunnettu mitta, ilman mittakaavaa, ei mittakaavaa, suhde, aseta mittakaava
from: 8f0148e6
---

Jokaisella arkilla on oma mittakaavansa. Asetat sen itse tai annat TakeoffCraftin lukea sen arkkien tekstistä (alla), ja tarkistat sen. Ennen kuin arkilla on mittakaava, {{ui:Linear}}, {{ui:Area}}, {{ui:Circle}} ja {{ui:Cut-out}} eivät mittaa sillä. {{ui:Count}} ja {{ui:Auto count}} toimivat ilman mittakaavaa.

Arkkiluettelo näyttää jokaisen arkin mittakaavan tai **Ei mittakaavaa**. Avoimen arkin alla oleva palkki kertoo saman.

## Käytä esiasetusta (kun PDF on tulostettu täysikokoisena)

1. Avaa arkki.
2. Avaa {{ui:Preset}}-luettelo ryhmässä {{ui:Scale}}.
3. Valitse piirustukseen painettu mittakaava, esimerkiksi `1/8" = 1'-0"` kohdasta Arkkitehtuuri.
   Tilarivillä lukee "Mittakaava tälle arkille: 1/8" = 1'-0"."
4. Tarkista se (alla).

Esiasetus olettaa, että PDF on sen paperikoko, jolle piirustus tehtiin. Jos PDF on tehty "sovita sivulle" -asetuksella tai se on puolikokoinen sarja, esiasetus on väärä. Kalibroi silloin.

Täydellinen luettelo: [Mittakaavan esiasetukset](topic:scale-presets).

## Lue mittakaavat arkkien tekstistä

Useimmat piirustukset kertovat mittakaavansa: `SCALE: 1/4" = 1'-0"` piirustusotsikossa, `1:100` näkymän alla. TakeoffCraft voi lukea sen ja asettaa jokaisen arkin kerralla.

1. Avaa {{ui:Preset}}-luettelo ja valitse {{ui:From the sheets' text…}} (ylhäältä).
2. Luettelo näyttää jokaisen arkin: sen nykyisen mittakaavan ja sen, mitä sen teksti sanoo — **Sanoo 1/4" = 1'-0"**, **Tekstissä ei mittakaavaa** tai **Sanoo: ei mittakaavassa** (NTS).
3. Arkit ilman mittakaavaa, joilla tekstissä on sellainen, ovat rastitettuina. Rastita tai poista rasti mistä tahansa ja valitse {{ui:Set the ticked scales}}. Yksi {{key:Mod+Z}} kumoaa ne kaikki.
4. Tarkista yksi mitta jokaisella arkilla työkalulla {{ui:Check}} (alla): esiasetus on oikea vain, jos PDF on tulostettu täysikokoisena.

Se lukee arkkitehtuuri- (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), insinööri- (`1" = 20'`) ja metriset (`1:50`) merkintätavat, jotka vastaavat [esiasetusta](topic:scale-presets). Kun arkissa on useampi kuin yksi mittakaava (kuva, jossa on suurennettuja yksityiskohtia), se ottaa useimmin mainitun, ja sen, joka on kirjoitettu sanan MITTAKAAVA jälkeen, lasketaan kahdesti. Muut näytetään punaisella, jotta voit tarkistaa ne. Skannatulla arkilla ei ole tekstiä: aseta sen mittakaava käsin.

## Kalibroi tunnetulla mitalla

Käytä tätä, kun ei ole painettua mittakaavaa, johon voit luottaa, arkkia on muutettu kokoon tai arkilla lukee "ei mittakaavassa", mutta siinä on mittoja.

1. Avaa arkki ja zoomaa pitkään mittaan, jonka tiedät, kuten akselivälin tai koko rakennuksen mittaan. Mitä pidempi, sitä tarkempi.
2. Valitse {{ui:Calibrate}} ryhmästä {{ui:Scale}}, tai paina {{key:K}}.
3. Napsauta mitan toista päätä. Zoomaa kumpaankin päähän tarkkuuden vuoksi; voit zoomata ja siirtää näkymää napsautusten välillä.
4. Napsauta toista päätä. Pidä {{key:Shift}} pohjassa pitääksesi viivan 0°, 45° tai 90° kulmassa.
   Valintaikkuna **Kalibroi tämä arkki** avautuu.
5. Kirjoita todellinen etäisyys kenttään **Todellinen etäisyys**, esimerkiksi `24'-6 1/2"`, `24.5` (desimaalijalkoina), `30"` tai `7.5 m`. Katso [Pituuden, hinnan ja prosentin syöttö](topic:entry-formats).
6. Valitse {{ui:Set the scale}}.
   Tilarivi näyttää mittakaavan muodossa "1" = (n)'". Kun se on 0.5 %:n sisällä esiasetuksesta, se kertoo, mikä, esimerkiksi "mikä vastaa 1/4" = 1'-0" (valitse tuo esiasetus tarkan mittakaavan saamiseksi)".
   TakeoffCraft palaa {{ui:Select}}-työkaluun.

Kun kalibrointi vastaa esiasetusta, sen valitseminen antaa tarkan mittakaavan sen sijaan, että se riippuisi siitä, mihin napsautit.

## Tarkista mittakaava

Tarkista aina uusi mittakaava toisella mitalla.

1. Valitse {{ui:Check}} ryhmästä {{ui:Scale}}, tai paina {{key:D}}.
2. Napsauta piirustukseen painetun mitan molempia päitä.
   Tilarivillä lukee "Tarkista: 12'-6"", saman pituuden desimaalijalkoina ja metreinä, ja tarkistusviiva jää arkille pituutensa kanssa.
3. Vertaa sitä painettuun mittaan. Jos se ei täsmää, kalibroi pidemmällä mitalla.

Paina {{key:Esc}} poistaaksesi tarkistusviivan.

## Muuta mittakaavaa

Valitse toinen esiasetus tai kalibroi uudelleen. Jos arkilla on jo mittauksia, TakeoffCraft kysyy **Muutetaanko tämän arkin mittakaava?** ja kertoo, montako mittausta mitataan uudelleen. Valitse {{ui:Change the scale}}. Jokainen juoksu ja alue arkilla mitataan uudelleen uudella mittakaavalla. Voit kumota sen painamalla {{key:Mod+Z}}.

## Miksi arkkeja ilman mittakaavaa ei lasketa nollaksi

Merkinnällä arkilla ilman mittakaavaa ei ole todellista pituutta eikä pinta-alaa. TakeoffCraft ei koskaan laske sitä nollaksi, koska se hiljaa tekisi kustannusarviostasi liian pienen. Sen sijaan se:

- jättää nämä merkinnät summien ulkopuolelle,
- näyttää "+(n) ilman mittakaavaa" nimikkeen vieressä kohdassa {{ui:Quantities}},
- näyttää "Keskeneräinen: (n) merkintää arkeilla ilman mittakaavaa (ei mukana summissa)" taulukon otsikossa,
- kirjoittaa määrän viennin taulukon huomautussarakkeeseen.

Tämä voi tapahtua, kun avaat projektin, jonka mittakaavoja ei koskaan asetettu. Anna arkille mittakaava, niin merkinnät lasketaan heti. Lukumäärämerkinnät lasketaan aina; ne eivät tarvitse mittakaavaa.

## Vinkkejä

- Aseta mittakaava jokaiselle arkille, jota aiot mitata, ennen kuin aloitat. Etsi arkkiluettelosta **Ei mittakaavaa** löytääksesi jäljellä olevat. (Hakukenttä katsoo arkkien nimiä, ei mittakaavoja.)
- Yksityiskohdat ja suurennetut kuvat samalla arkilla käyttävät usein toista mittakaavaa. TakeoffCraftissa on yksi mittakaava arkkia kohden; katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).
- Metriset piirustukset: valitse metrinen esiasetus, kuten `1:100`, tai kalibroi metrisellä etäisyydellä, kuten `6000 mm`.
