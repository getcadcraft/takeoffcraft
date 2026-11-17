---
title: Tarjousalueet
summary: Merkitse merkinnät rakennuksen, kerroksen tai vaiheen mukaan, laske määrät yksi alue kerrallaan ja lue jokaisen alueen määrät ja kustannukset.
keywords: lisävaihtoehto, vähennysvaihtoehto, perustarjous, vaihtoehdot, tarjousalue, alue, rakennus, kerros, taso, vaihe, vyöhyke, vaihtoehto, erittely, jako, tyypillinen kerros, välisumma, alueittain
from: 64f3d41c
---

Tarjousalue on työn osa, jonka hinnoittelet erikseen: rakennus, kerros, vaihe tai siipi. Jokainen merkintä voi kuulua yhteen tarjousalueeseen. Määrät ja arvio voidaan lukea sitten kullekin alueelle omana välisummanaan, ja työn kokonaissumma pysyy kaikkien yhteissummana.

## Luo tarjousalue

1. Avaa {{ui:Nimikkeet}}-paneelin yläosassa {{ui:Tarjousalue}}-luettelo.
2. Valitse **Uusi tarjousalue…**, kirjoita nimi, esimerkiksi ”Rakennus A” tai ”Kerros 2”, ja valitse **Luo**.
   Uudesta alueesta tulee nykyinen. Tilarivillä lukee: ”Uudet merkinnät menevät alueelle (nimi). Muiden tarjousalueiden merkinnät himmennetään.”

## Laske määrät alueelle

Kun tarjousalue on valittu luettelossa, jokainen uusi merkintä menee siihen: viivat, pinnat, ympyrät, lukumäärät, {{ui:Automaattilaskenta}}-lisäämät merkinnät ja liitettävät. Muiden tarjousalueiden merkinnät ja alueettomat merkinnät himmennetään arkilla, jotta näet, mikä kuuluu minnekin.

Valitse **Ei tarjousaluetta** luettelosta, jos laskenta tehdään ilman aluetta; silloin mitään ei himmennetä.

:::tip
Tyypilliset kerrokset: laske kerros 2, valitse sen merkinnät ({{key:Mod+A}} arkilla), kopioi ne, valitse luettelosta Kerros 3 ja liitä. Kopiot menevät kerrokseen 3. Kun kerrokset ovat samanlaisia etkä tarvitse niitä erillään, [tyypillinen ryhmä](topic:typical-groups) laskee yhden kerroksen useita kertoja.
:::

## Siirrä merkintöjä toiselle alueelle

Valitse yksi merkintä tai useita ({{key:Shift}} + napsautus tai {{key:Mod+A}}). Kohdassa **Valittu merkintä** (tai **Valitut merkinnät**) valitse alue kentästä {{ui:Tarjousalue}}. Tilarivillä lukee: ”3 merkintää siirrettiin kerrokseen 2.” Se on yksi kumoamisvaihe.

## Nimeä uudelleen, järjestä tai poista

Valitse luettelosta **Hallitse tarjousalueita…**. Kirjoita nimen päälle nimetäksesi se uudelleen, käytä nuolia järjestyksen muuttamiseen (taulukot ja työkirja seuraavat sitä) tai poista alue roskakorilla. Alueen poistaminen säilyttää sen merkinnät: ne jäävät silloin ilman tarjousaluetta. {{key:Mod+Z}} kumoaa jokaisen muutoksen.

## Lue määrät alueittain

{{ui:Määrät}}-taulukossa valitse {{ui:Alueittain}} (se näkyy, kun laskennalla on tarjousalue). Jokainen alue listaa siihen kuuluvat nimikkeet määrineen, yksikköineen ja summineen, sen jälkeen välisummarivin. Alueettomat merkinnät ovat viimeisenä nimellä **Ei tarjousaluetta**. Napsauta nimikerivin kohdalla korostaaksesi nimikkeen ja tehdäksesi kyseisestä alueesta nykyisen.

Yhdistelmät lasketaan jokaiselle alueelle sen omista summista. Kaava, joka pyöristää ylöspäin, kuten `ceil(L / 4)`, voi antaa alueet yhteensä hieman enemmän kuin koko työlle, samoin kuin tarjouksessa, joka hinnoitellaan alue kerrallaan.

## Vaihtoehdot: perustarjous sekä lisäykset ja vähennykset

Tarjousalue voi olla **vaihtoehto**: työ, jonka omistaja voi lisätä tarjoukseen tai poistaa siitä. Kohdassa **Hallitse tarjousalueita…** kullakin alueella on nimensä vieressä luettelo:

| Valinta | Mitä se tekee |
|---|---|
| {{ui:Perustarjous}} | Tarjouksessa tavalliseen tapaan. |
| {{ui:Lisävaihtoehto}} | Hinnoitellaan erikseen ja **jätetään perustarjouksen ulkopuolelle**: mattopäivitys, ylimääräinen katos. |
| {{ui:Vähennysvaihtoehto}} | Perustarjouksessa, ja tarjotaan vähennyksenä: ”poista katos”. |

Laske vaihtoehdon työ sen tarjousalueelle kuten muille alueille. Kun laskennassa on vaihtoehto:

- {{ui:Määrät}}-taulukon otsikossa lukee **Perustarjous** eikä Työn kokonaissumma: koko laskenta ilman lisävaihtoehtoja.
- {{ui:Alueittain}} päättyy perustarjoukseen ja yhteen riviin per vaihtoehto: **+$300.00** lisäykselle, **−$1,050.00** vähennykselle.
- Vaihtoehto hinnoittelee vain ne nimikkeet, joilla on merkintöjä siinä, yhdistelmineen, joten toisen nimikkeen yhdistelmän osat eivät pääse mukaan.

Vientitiedostoissa CSV päättyy perustarjoukseen ja vaihtoehtoihin, ja työkirjaan tulee **Vaihtoehdot**-taulukko: perustarjous, kunkin vaihtoehdon nimikkeet ja muutos sekä perustarjous ilman kaikkia lisävaihtoehtoja.

## Viennissä

{{ui:XLSX}} lisää **Tarjousalueittain**-taulukon: jokaisen alueen nimikkeet ja komponentit määrineen, hukallisine määrineen, materiaali, työ ja summa, välisumma per alue (`SUM`-kaava) ja lopussa **Kaikki tarjousalueet**. **Merkinnät**-taulukkoon tulee **Tarjousalue**-sarake. Laskenta ilman tarjousalueita viedään kuten ennen. Katso [Vientisarakkeet](topic:export-columns).

Tarjousalueet tallennetaan projektitiedostoon merkintöjen mukana.
