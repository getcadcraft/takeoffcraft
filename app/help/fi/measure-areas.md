---
title: Mittaa pinta-alat aukkoineen
summary: Rajaa lattiat, katot ja laatat, leikkaa niistä aukkoja, lisää kaarevia reunoja, ympyröitä ja pyöreitä aukkoja sekä lue pinta-ala ja piiri.
keywords: huoneen täyttö, tulvatäyttö, maalikaato, napsautus huoneen sisään, automaattinen pinta-ala, takaisinvähennys, back-out, pilari, kuilu, vähennys useasta nimikkeestä, pinta-ala, ääriviiva, neliöjalka, sf, aukko, reikä, vähennä, ympyrä, pyöreä, kaari, piiri, lattia, katto, laatta
from: 34648db7
---

Pinta-alanimike mittaa suljetun alueen pinta-alan. Jokaisesta ääriviivasta voi leikata reikiä (kuilu, pilari, istutusallas), ja sen reunat voivat olla suoria tai kaarevia.

Ennen aloittamista: arkille tarvitaan mittakaava ([Aseta mittakaava](topic:set-the-scale)) ja sinulla on oltava pinta-alanimike ([Luo määrälaskennan nimikkeitä](topic:create-items)).

## Rajaa pinta-ala

1. Napsauta pinta-alanimikettä kohdassa {{ui:Items}}.
2. Valitse työkalurivistä {{ui:Area}} tai paina {{key:A}}.
3. Napsauta huoneen tai laatan kulmia yksi kerrallaan. Pidä {{key:Shift}} pohjassa 0°, 45° ja 90° reunoille.
   Kolmannesta pisteestä alkaen ääriviiva täyttyy, ja tilarivillä näkyvät "Pinta-ala" ja "piiri". Ensimmäisen pisteen ympärille ilmestyy pieni rengas.
4. Sulje ääriviiva: napsauta ensimmäistä pistettä (sen renkaan sisällä), paina {{key:Enter}}, kaksoisnapsauta tai napsauta hiiren oikealla painikkeella.
   Alue täytetään kevyesti nimikkeen värillä, siihen merkitään sen neliöjalkamäärä, ja siitä tulee valittu merkintä.

{{key:Backspace}} poistaa viimeisen kulman; {{key:Esc}} hylkää ääriviivan.

Ääriviiva, joka leikkaa itsensä, hylätään: "The outline crosses itself..." on suomeksi "Ääriviiva leikkaa itsensä, joten sen pinta-ala olisi väärä. Piirrä se uudelleen niin, ettei se leikkaa itseään." Piirrä kahdeksikon muotoinen alue kahtena pinta-alana.

## Kaarevat reunat

Kun rajaat ääriviivaa, kytke kaaritila päälle ({{ui:Arc}} tai {{key:R}}). Kulman jälkeen napsauta pistettä käyrää pitkin ja sitten kohtaa, jossa käyrä päättyy. Jos haluat sulkea ääriviivan kaarella, tee viimeinen napsautus ensimmäiseen pisteeseen. Pinta-ala ja piiri käyttävät tarkkaa käyrää. Paina {{key:R}} uudelleen palataksesi suoriin reunoihin. Käyrän muuttamiseksi myöhemmin valitse alue ja vedä kaaren keskellä olevaa pyöreää kahvaa. Katso [Mittaa viivaketjut](topic:measure-linear#arcs-and-curved-walls).

## Ympyrä

1. Valitse pinta-alanimike ja valitse {{ui:Circle}} tai paina {{key:O}}.
2. Napsauta keskipistettä.
3. Napsauta mitä tahansa reunapistettä.
   Liikuttaessa tilarivi näyttää säteen ja pinta-alan. Ympyrä lisätään pinta-alamerkintänä, jolla on tarkka pinta-ala ja piiri.

## Täytä huone yhdellä napsautuksella

Kun huoneet on piirretty suljettuina seinina, {{ui:Room}} ({{key:B}}) ottaa lattian yhdellä napsautuksella:

1. Valitse pinta-alanimike (esimerkiksi lattiapinnoite) ja anna arkille mittakaava.
2. Valitse {{ui:Room}} ryhmästä {{ui:Takeoff}} tai paina {{key:B}}.
3. Napsauta huoneen sisällä, avoimella lattialla (ei viivan tai tekstin päällä).

TakeoffCraft lukee arkin viivat, etsii napsautuksen ympäriltä tilan ja rajaa sen seinien sisäpintoja pitkin alueeksi nykyiselle nimikkeelle. Oviaukot, jotka ovat enintään **4'-0"** leveitä, käsitellään suljettuina, joten ääriviiva kulkee suoraan oviaukon yli. **Asetukset › TakeoffCraft › Huoneen täyttö sulkee aukot enintään** muuttaa tätä leveyttä (3'-0" – 8'-0"). Huoneen sisällä olevat nimet, huonekalut ja kalusteet eivät tee reikiä.

Täyttö kieltäytyy kertoen syyn, kun:

- napsautus on viivalla ("That is on a line" on suomeksi "Tuo on viivalla");
- tila ei ole suljettu: aukko on asetusta leveämpi, joten tila valuu arkin reunaan asti. Nosta asetusta tai rajaa tämä huone käsin {{ui:Area}}-työkalulla;
- tila on pieni (symboli, ei huone).

Kun ovi on asetusta leveämpi, täyttö jatkuu seuraavaan huoneeseen ja rajaa molemmat yhdessä: kumoa ({{key:Mod+Z}}), nosta asetusta ja napsauta uudelleen. Tarkista ääriviiva kuten mikä tahansa alue: korjaa sitä vetämällä kulmia. Skannattu arkki toimii samoin, mutta sen viivojen on oltava riittävän tummia; vaaleanharmaat viivat eivät ehkä pysäytä täyttöä.

## Leikkaa aukko alueeseen

1. Valitse {{ui:Select}} ({{key:V}}) ja napsauta aluetta. Sen kulmissa näkyy neliönmuotoisia kahvoja.
2. Valitse työkalurivistä {{ui:Cut-out}} (tai paina {{key:X}}), tai valitse **Valittu merkintä** -kohdasta {{ui:Add a cut-out}}.
3. Napsauta reiän kulmia alueen sisällä. Kaaritila toimii tässäkin.
4. Sulje reikä kuten alue: napsauta ensimmäistä pistettä, paina {{key:Enter}}, kaksoisnapsauta tai napsauta hiiren oikealla painikkeella.
   Reikä jää täyttämättä, ja tilarivillä lukee "Aukko lisätty. Piirrä toinen tai paina Esc."
5. Piirrä lisää reikiä samaan alueeseen tai paina {{key:Esc}}.

Pyöreää reikää varten valitse **Valittu merkintä** -kohdasta {{ui:Add a round cut-out}}, napsauta sen keskipistettä ja sitten reunapistettä.

Aukon on oltava kokonaan alueen sisällä, eikä se saa mennä päällekkäin toisen aukon kanssa. Muuten TakeoffCraft hylkää sen: "A cut-out has to sit fully inside the area." on suomeksi "Aukon on oltava kokonaan alueen sisällä.", ja "Cut-outs cannot overlap each other." on suomeksi "Aukot eivät voi mennä päällekkäin."

Poistaaksesi viimeisen reiän valitse {{ui:Remove last cut-out}}.

## Takaisinvähennykset: pilarit, kuilut ja aukot, jotka vähennetään useista nimikkeistä

Aukko kuuluu yhteen pinta-alamerkintään. **Takaisinvähennys** piirretään kerran, ja se vähennetään jokaisesta alueesta, johon se osuu, valituista nimikkeistä: piirrä pilarit kerran, ja ne vähennetään lattiapinnoitteesta, katosta ja laatasta yhdessä.

1. Tee niille pinta-alanimike, esimerkiksi "Pilarit".
2. Ruksaa sen nimikeasetuksissa **Takaisinvähennys: sen merkinnät vähentävät pinta-alansa muista nimikkeistä**. Luettelo muista pinta-alanimikkeistäsi tulee näkyviin, kaikki ruksattuina: poista ruksi niistä, joihin takaisinvähennykset eivät saa koskea (esimerkiksi seinien maali).
3. Mittaa pilarit kuten tavallisesti {{ui:Area}}- tai {{ui:Circle}}-työkalulla. Jokainen piirtyy katkoviivalla.

Jokainen ruksatun nimikkeen pinta-alamerkintä samalla arkilla menettää sen osan, jonka takaisinvähennys peittää: kokonaan, kun se on sisällä, vain päällekkäisen osan, kun se ylittää reunan, eikä mitään aukon sisällä. Valitun alueen paneelissa näkyvät **Takaisinvähennykset** ja jäljelle jäävä pinta-ala. Nimikkeen määrä, sen yhdistelmien kaavat, kustannukset, 3D-tarkastusnäkymä ja vienti käyttävät jäljelle jäävää pinta-alaa; arvion huomautukset kertovat, kuinka paljon takaisinvähennykset vähensivät. Itse takaisinvähennysnimike laskee oman pinta-alansa (jätä sen kustannukset nollaan, jos et hinnoittele sitä).

Takaisinvähennyksen on oltava **kupera**: suorakulmio, ympyrä tai ääriviiva ilman sisäänpäin menevää kulmaa. TakeoffCraft kieltäytyy piirtämästä muuta; piirrä L-muotoinen kuilu kahtena takaisinvähennyksenä. Takaisinvähennyksissä ei voi olla aukkoja, ja kaksi toisiaan osuvaa takaisinvähennystä lasketaan molemmat.

Piiri (`P`) ei muutu: takaisinvähennykset vähentävät vain pinta-alaa.

## Lue pinta-ala

Valitse alue. **Valittu merkintä** näyttää:

| Rivi | Merkitys |
|---|---|
| Pinta-ala | Nettopinta-ala: ääriviiva miinus aukot. Tämän nimike laskee. |
| Ääriviiva | Bruttopinta-ala ääriviivan sisällä (näkyy, kun aukkoja on). |
| Aukot | Reikien määrä ja niiden yhteispinta-ala. |
| Piiri | Ääriviivan reunan pituus **plus** jokaisen aukon reunat ("aukkojen kanssa"). |

Piiri sisältää aukkojen reunat tarkoituksella, esimerkiksi reunamuotteja tai pohjatyötä varten, jotka kiertävät myös reiän. Jos tarvitset vain ulkoreunan, pidä reiät poissa tuosta nimikkeestä tai mittaa ulkoreuna viivaketjuna.

Nimikkeen {{ui:Unit}} määrää, miten kokonaissumma ilmoitetaan: SF, SY tai m². **Valittu merkintä** -paneeli ja tilarivi näyttävät aina neliöjalat.

## Korjaa alue

- **Siirrä kulmaa**: valitse alue ja vedä kulmakahvaa (myös aukoilla on kahvat). Jos uusi muoto leikkaisi itsensä tai työntäisi aukon ulos, kulma palautetaan: "The point was put back." on suomeksi "Piste palautettiin paikalleen."
- **Siirrä toiseen nimikkeeseen**: valitse toinen pinta-alanimike **Valittu merkintä** -kohdan **Nimike**-luettelosta.
- **Poista**: {{key:Delete}}, {{ui:Delete}} työkalurivin {{ui:More}}-valikosta tai {{ui:Delete mark}}.

## Syvyys tilavuuksille

Anna pinta-alanimikkeelle {{ui:Depth}} (esimerkiksi `0'-4"` laatalle) ja käytä yhdistelmän komponentissa kaavaa `A * H / 27` kuutiojaardien saamiseksi. Katso [Yhdistelmät ja kaavat](topic:assemblies).
