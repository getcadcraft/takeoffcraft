---
title: Näppäimistö ja hiiri
summary: Jokainen näppäin-, hiiri-, kosketuslevy- ja kosketustoiminto TakeoffCraftissa ryhmiteltynä, alustakohtaisine eroineen.
keywords: näppäimet, pikanäppäimet, pikanäppäin, näppäimistö, hiiri, kosketuslevy, kosketus, panoroi, zoomaa, rulla, oikea napsautus, kaksoisnapsautus, välilyönti, shift, kopioi, liitä, leikkaa, monista, valitse kaikki
from: 6f2c441d
---

Kirjainnäppäimet toimivat, kun osoitin on missä tahansa sivun kohdalla etkä kirjoita kenttään. Kun valintaikkuna on auki, sen omat näppäimet ovat käytössä. Kirjaimet toimivat {{key:Shift}}-näppäimen kanssa tai ilman.

## Työkalut

| Näppäin | Työkalu |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:L}} | {{ui:Linear}} |
| {{key:A}} | {{ui:Area}} |
| {{key:O}} | {{ui:Circle}} |
| {{key:B}} | {{ui:Room}} (täytä huone yhdellä napsautuksella) |
| {{key:R}} | {{ui:Arc}} päälle tai pois (viivaketjussa, pinta-alassa ja aukossa) |
| {{key:E}} | {{ui:Deduct}} päälle tai pois: viivaketjun seuraavat jänteet piirretään, mutta niitä ei lasketa |
| Numero, `@` tai `#` piirtäessä | Avaa {{ui:Type}}-ruutu: kirjoita pituus tai koordinaatit, {{key:Enter}} asettaa pisteen ([Mittaa viivaketjut](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Cut-out}} (valitse ensin alue) |
| {{key:C}} | {{ui:Count}} |
| {{key:S}} | {{ui:Auto count}} |
| {{key:K}} | {{ui:Calibrate}} |
| {{key:D}} | {{ui:Check}} mittakaava |

## Piirtäessä

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Napsautus | Asettaa pisteen (pisteen, jossa on Lukumäärä). |
| {{key:P}} | Polku: valitse PDF-viivan koko yhtenäinen polku tai napsautuksen ympärillä oleva ääriviiva ([Valitse PDF:n viivat](topic:pick-the-lines)). |
| {{key:F3}} | Tartunta piirustuksen viivoihin päälle tai pois ([Tartunta piirustuksen viivoihin](topic:snap-to-the-drawing)). |
| {{key:Shift}} pohjassa napsautettaessa | Tartuttaa jänteen 0°, 45°, 90° tai 135° kulmaan edellisestä pisteestä. Ei kaaripisteille eikä ympyröille. |
| Kaksoisnapsautus | Viimeistelee viivaketjun tai sulkee alueen tai aukon. |
| {{key:Enter}} | Viimeistelee viivaketjun tai sulkee alueen tai aukon. |
| Hiiren oikea painike (ilman liikettä) | Viimeistelee viivaketjun tai sulkee alueen tai aukon. |
| Ensimmäisen pisteen napsautus | Sulkee alueen tai aukon (kolmannesta pisteestä alkaen). |
| {{key:Backspace}} tai {{key:Delete}} | Poistaa viimeisen pisteen (ensin odottavan kaaripisteen). |
| {{key:Esc}} | Hylkää odottavan kaaripisteen; sitten peruu keskeneräisen merkinnän; sitten palaa {{ui:Select}}-työkaluun. |

## Valitseminen ja muokkaaminen

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Merkinnän napsautus ({{ui:Select}}-työkalu) | Valitsee sen ja tekee sen nimikkeestä nykyisen. |
| {{key:Shift}} + merkinnän napsautus | Lisää merkinnän valintaan tai poistaa sen valinnasta. |
| {{key:Mod+A}} | Valitsee kaikki merkinnät avoimella arkilla. |
| Kulmakahvan vetäminen | Siirtää pistettä ({{key:Shift}} tartuttaa 45°:een). Toimii, kun yksi merkintä on valittu. |
| {{key:Delete}} tai {{key:Backspace}} | Poistaa valitut merkinnät (kun et piirrä). |
| {{key:Esc}} | Poista valinta: tyhjentää valinnan ja tarkistusviivan. |
| {{key:Mod+Z}} | Kumoa. |
| {{key:Mod+Y}} tai {{key:Mod+Shift+Z}} | Tee uudelleen. |

## Kopiointi ja liittäminen

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Mod+C}} | Kopioi valitut merkinnät nimikkeineen. |
| {{key:Mod+X}} | Leikkaa: kopioi valitut merkinnät ja poista ne. |
| {{key:Mod+V}} | Liitä: kopio seuraa osoitinta; napsauta, mihin se asetetaan. |
| {{key:Mod+Shift+V}} | Liitä samaan paikkaan: sama kohta avoimella arkilla. |
| {{key:Mod+D}} | Monista valitut merkinnät: kopio seuraa osoitinta; napsauta, mihin se asetetaan. |
| {{key:Esc}} | Ei aseta mitään: peruu liitön tai monistuksen, joka on osoittimessa. |

Kirjaimet valitsevat yksinään yhä työkaluja ({{key:C}} on {{ui:Count}}, {{key:D}} on {{ui:Check}}, {{key:X}} on {{ui:Cut-out}}, {{key:V}} on {{ui:Select}}, {{key:A}} on {{ui:Area}}); vain {{key:Mod}} niiden kanssa kopioi ja liittää. Tekstikentässä nämä näppäimet kopioivat ja liittävät tekstiä normaalisti. Katso [Kopioi, liitä ja monista merkinnät](topic:copy-paste).

:::warning
{{key:Backspace}} poistaa valitun merkinnän, kun et piirrä. Jos näin käy vahingossa, {{key:Mod+Z}} palauttaa sen.
:::

## Tiedostot

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Mod+O}} | {{ui:Open plans}} |
| {{key:Mod+S}} | {{ui:Save takeoff}} |

Nämä kaksi toimivat, vaikka kirjoitat kenttään.

## Näkymä ja arkit

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Hiiren rulla | Zoomaa sisään ja ulos osoittimen kohdalla. |
| Vedä (vasen, keski- tai oikea painike) | Panoroi. {{ui:Auto count}}-tilassa vasemmalla vetäminen piirtää hakuruudun. |
| {{key:Space}} pohjassa + vedä | Panoroi missä tahansa työkalussa. |
| {{key:F}} | {{ui:Fit page}} |
| {{key:W}} | {{ui:Fit width}} |
| {{key:Plus}} tai {{key:=}} | Zoomaa sisään näkymän keskeltä. |
| {{key:Minus}} | Zoomaa ulos näkymän keskeltä. |
| {{key:PageDown}} / {{key:PageUp}} | Seuraava tai edellinen arkki arkkiluettelossa. |
| {{key:Ctrl+Shift+F}} | Vaihtele koko näytön tiloja (Control kaikilla alustoilla, myös Macilla). |
| {{key:F1}} | Avaa tai sulje tämä ohje, sivupaneeli. |
| {{key:3}} | Arkin 3D-tarkastusnäkymä päälle tai pois. |

## 3D-näkymä

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Vedä tai vedä keskipainikkeella | Kiertää. |
| {{key:Shift}} + vedä tai vedä oikealla painikkeella | Panoroi. |
| Hiiren rulla | Zoomaa osoittimen kohdalla. Kosketuslevyllä kahden sormen pyyhkäisy kiertää ja nipistys zoomaa. |
| Napsautus | Valitsee osoittimen alla olevan merkinnän ({{key:Shift}} + napsautus lisää tai poistaa). |
| {{key:F}} tai {{key:W}} | Zoomaa laajuuteen. |
| {{key:3}} | Takaisin tasaiseen arkkiin. |

Katso [Tarkista määrälaskenta 3D:ssä](topic:check-in-3d).

## Automaattilaskenta

| Näppäin tai toiminto | Mitä se tekee |
|---|---|
| Vedä laatikko | Rajaa haettavan symbolin laatikolla (käynnistää haun). |
| Napsauta osumalaatikkoa | Hylkää sen tai palauttaa sen. |
| {{key:Esc}} | Peruu käynnissä olevan haun tai hylkää tarkistuksen. |

## Ohje

| Näppäin | Mitä se tekee |
|---|---|
| {{key:F1}} | Avaa tai sulje ohjepaneeli (myös {{ui:Help}}-painike sovelluspalkissa). Se toimii kaikissa työkaluissa, myös kun kirjoitat kenttään. |
| {{key:Esc}} | Sulje ohjepaneeli. Sen hakukentässä ensimmäinen Esc tyhjentää haun. Kun paneeli on auki, Esc, jonka painat napsautettuasi arkkia, sulkee ensin paneelin; paina uudelleen, jos haluat peruuttaa TakeoffCraftissa. |

:::mac
Monissa Mac-näppäimistöissä ylärivi säätää kirkkautta ja ääntä. Paina fn + F1, tai ota käyttöön "Use F1, F2, etc. keys as standard function keys" macOS:n Järjestelmäasetuksissa kohdassa Näppäimistö.
:::

## Kentät ja valintaikkunat

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Enter}} | Kentässä: ottaa arvon käyttöön. Kalibroi-valintaikkunassa: {{ui:Set the scale}}. |
| {{key:Esc}} | Sulkee valintaikkunan ({{ui:Cancel}}-painikkeen tavoin); sulkee {{ui:New item}}-lomakkeen. |
| {{key:Tab}} | Siirtyy seuraavaan kenttään. |

## Alustakohtaiset huomautukset

:::mac
- {{key:Mod}} on Command-näppäin: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Koko näyttö on poikkeus: Control+Shift+F.
- Oikea napsautus on kaksisormennapsautus kosketuslevyllä, kun toissijainen napsautus on käytössä macOS:n Järjestelmäasetuksissa kohdassa Kosketuslevy. TakeoffCraft lukee vain toissijaisen painikkeen; Control-napsautus voidaan tulkita tavalliseksi napsautukseksi ja lisätä piste.
- Kahden sormen vieritys kosketuslevyllä zoomaa arkkia (ei vieritä sitä). Panoroi painamalla ja vetämällä tai pitämällä {{key:Space}} pohjassa ja vetämällä.
- Page Up ja Page Down ovat fn-näppäin yhdessä ylä- ja alanuolen kanssa näppäimistöissä, joissa niitä ei ole.
- {{key:Backspace}} on näppäin, jossa lukee delete.
:::

:::windows
- {{key:Mod}} on Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Kannettavan kosketuslevyn kahden sormen vieritys zoomaa arkkia. Panoroi painamalla ja vetämällä.
:::

:::linux
- {{key:Mod}} on Ctrl. Osalla työpöydistä on omat Ctrl+Alt- tai Super-pikanäppäimensä; TakeoffCraft ei käytä niistä yhtäkään.
- Kosketuslevyllä kahden sormen vieritys zoomaa arkkia. Panoroi painamalla ja vetämällä.
:::

:::touch
TakeoffCraft lukee kosketuksen yhtenä osoittimena:

- Napautus asettaa pisteen, valitsee merkinnän tai lisää lukumäärän pisteen.
- Yhdellä sormella vetäminen panoroi arkkia ({{ui:Auto count}}-tilassa se piirtää hakuruudun).
- Nipistys-zoomaus ei ole vielä tuettu. Käytä {{ui:Fit page}}- ja {{ui:Fit width}}-toimintoja tai näppäimistön {{key:Plus}}- ja {{key:Minus}}-näppäimiä.
- Alueen sulkemiseksi napauta sen ensimmäistä pistettä. Viivaketjun viimeistelemiseksi kaksoisnapauta siellä, missä selain muuttaa kaksoisnapautuksen kaksoisnapsautukseksi, tai paina näppäimistöllä {{key:Enter}}.
- Pituuden lukema ei näy ennen kuin napautat, koska osoitinta ei ole.

Näppäimistö ja hiiri tai kosketuslevy ovat tällä hetkellä parempi tapa tehdä määrälaskentaa.
:::

## Näppäimet, jotka selain pitää

Selaimet pitävät joitakin pikanäppäimiä itsellään, eikä sivu voi käyttää niitä: välilehden sulkeminen ({{key:Mod+W}}), uusi välilehti tai ikkuna ({{key:Mod+T}}, {{key:Mod+N}}) ja selaimen zoomaus ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Siksi TakeoffCraft zoomaa arkkia rullalla ja pelkillä {{key:Plus}}- ja {{key:Minus}}-näppäimillä. Jos painat {{key:Mod+Plus}} vahingossa, koko sivu suurenee; {{key:Mod+0}} palauttaa sen. Katso [Näppäimet, hiiret ja kosketuslevyt](common:keys).

## Missä Siirrä on

Siirrä-komentoa ei ole: valitse laskuripiste ja vedä se, tai valitse alue tai viiva ja vedä sen kulmakahvoja.
