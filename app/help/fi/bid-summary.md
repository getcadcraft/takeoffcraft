---
title: Tarjouksen yhteenveto ja tarjous
summary: Lisää työnantajan sivukulut, myyntivero, yleiskulut, voitto ja takaus arvioon, kirjoita sisältyvät ja jätetyt pois -kohdat ja lataa tarjous-PDF lähetettäväksi.
keywords: tarjous, työnantajan sivukulut, sivukulut, palkka, tarjouslaskelma, yleiskulut, voitto, katteen lisä, marginaali, myyntivero, takaus, sisältyy, ei sisälly, ehdot, allekirjoitus, asiakas, hinta
from: 3208a561
---

Arvio hinnoittelee sen, minkä laskit. **Tarjouksen yhteenveto** muuttaa sen hinnaksi: se lisää myyntiveron, yleiskulut, voiton ja takauksen sekä tekee **tarjous-PDF:n**, jossa on sisältyvät ja jätetyt pois -kohdat.

Avaa se kohdasta {{ui:Vie}} › {{ui:Tarjouksen yhteenveto ja tarjous…}}. Kaikki siinä on tallennettu laskennan mukana, ja jokainen muutos voidaan kumota.

## Katteet

Kirjoita prosentti johonkin viidestä (jätä muut arvoon 0). Ne lasketaan tässä järjestyksessä, kukin sitä edeltävän päälle:

| Rivi | Lasketaan |
|---|---|
| Materiaali, Työ | Arvion summat (perustarjous, kun laskennassa on [vaihtoehtoja](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts)). |
| Työnantajan sivukulut | Sivukulu-% × työ: palkkaverot, vakuutukset ja etuudet työntekijöidesi palkoista. |
| **Kustannus** | Materiaali + työ + työnantajan sivukulut. |
| Myyntivero materiaalista | Vero-% × materiaali. |
| Yleiskulut | Yleiskulu-% × (kustannus + vero). |
| Voitto | Voitto-% × (kustannus + vero + yleiskulut). |
| Takaus | Takaus-% × kaikki yllä oleva. |
| **Tarjous** | Rivien summa. |

Jokainen rivi pyöristetään sentille. Työkirja näyttää samat rivit Arvio-taulukon yhteissumman alla live-kaavoilla. Yhteenveto päivittyy kirjoittaessasi: {{key:Enter}} vahvistaa prosentin. Jokainen vaihtoehto näytetään samoilla katteilla omalla kustannuksellaan, jotta omistaja näkee, mitä sen valitseminen oikeasti muuttaa.

## Tarjous

Täytä, mitä tarjouksen pitäisi sanoa:

- **Projekti** (laskennan nimi, jos tyhjä), **Kenelle** (asiakas) ja **Keneltä** (oma yrityksesi).
- **Sisältyy** ja **Ei sisälly**: yksi per rivi; alussa oleva väliviiva tai luetelmamerkki sopii.
- **Ehdot**: vapaa teksti, esimerkiksi ”Voimassa 30 päivää.”
- **Luettele nimikkeet ja määrät**: laajuus nimike kerrallaan, määrineen ja ilman hintoja. Poista rasti kiinteähintaiselle tarjoukselle.

Valitse {{ui:Tarjous-PDF}}. PDF (`<takeoff> - proposal.pdf`) sisältää päivämäärän, hintalohkon jokaisen katteen ja tarjouksen kanssa, vaihtoehdot, laajuuden, sisältyvät ja jätetyt pois -kohdat, ehdot sekä rivit allekirjoitukseen ja päivämäärään. Jos joitakin määriä ei voitu mitata (arkki ilman mittakaavaa), se sanoo sen hinnan alla.

## Viennissä

Kun laskennassa on tarjouksen yhteenveto, CSV päättyy siihen, ja työkirjaan tulee **Tarjouksen yhteenveto** -taulukko, jossa on jokainen rivi, sen prosentti ja summa. Katso [Vie arvio](topic:export-estimate).
