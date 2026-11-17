---
title: Upotettu hiili ja 5D-hintataulukko
summary: Hiili laskee laskennan upotetun hiilen kunkin nimikkeen määrästä ja avoimesta kerroinpöydästä ja lähettää laskennan hinnat BimCraftille hintataulukkona 5D-kustannuksia varten.
keywords: hiili, upotettu hiili, kgCO2e, co2, kertoimet, A1-A3, kuljetus, hukka, 5D, hintataulukko, kustannus, BimCraft, EPD
from: f4bff3b8
---

{{ui:Hiili}} työkalupalkissa laskee yhteen mitatun upotetun hiilen ja muuttaa hintasi rakennusmallin käyttämäksi hintataulukoksi. Se on arvio, ei arviointi.

## Upotettu hiili

Kunkin nimikkeen määrä hukkineen kerrotaan kerroinpöydän rivillä. Rivi valitaan nimikkeen nimen sanoilla (”betonilaatta” löytää rivin, jonka avainsana on betoni). Pöytä on sama avoin pöytä, jota BimCraft käyttää, joten täällä ladattu tiedosto toimii siellä myös. **Ohjelman mukana tulevat rivit ovat alustavia arvoja: yleisiä, tarkistamattomia eikä mistään tietokannasta.** Valintaikkuna sanoo tämän lukujen vieressä; korvaa ne omalla lähteelläsi ennen kuin luotat lukuun.

1. Valitse {{ui:Hiili}}. Lasketut nimikkeet luetellaan kilogrammoina CO2e; kokonaissumma on yllä.
2. Rastita {{ui:A4 kuljetus}} tai {{ui:A5 työmaahukka}}, jotta nämä vaiheet lasketaan mukaan niille riveille, jotka antavat niistä luvun. Tuotevaihe lasketaan aina.
3. Käytä toista riviä valitaksesi nimikkeelle, tai ei yhtään, rivin luettelosta.
4. {{ui:Kertoimet tiedostosta…}} lataa kerroinpöydän (JSON tai CSV), joka on tehty omasta lähteestäsi; sen rivit korvaavat alkuperäiset rivit samalla tunnuksella. {{ui:Kertoimet (JSON)}} tallentaa omasi.

Kerroin on per metri, neliömetri, kuutiometri, nimike tai kilogramma. Jalkoina tai neliöjalkoina mitattu rivi muunnetaan. Kilogrammakerroin tarvitsee tilavuuden (cubic yards tai kuutiometrit) ja rivin tiheyden. Nimike, jonka kerroin tarvitsee määrää, jota se ei mittaa, luetellaan kohdassa {{ui:Pois jätetty}} syineen, eikä sitä arvata. Tilarivin juokseva summa näyttää saman luvun.

Tallennat kertoimesi, valintasi ja laskettavat vaiheet laskennan tiedostoon.

## Hintataulukko 5D-kustannuksiin

{{ui:5D-hinnat (JSON)}} ja {{ui:5D-hinnat (CSV)}} tallentavat laskennan hinnat hintataulukkona: yksi rivi per hinnoiteltu nimike, sen materiaali- ja työhinta per yksikkö sekä hukka. Lataa se BimCraftin kustannuspaneeliin (Upotettu hiili ja 5D-kustannukset), jotta rakennusmallin tehtävät hinnoitellaan samoilla hinnoilla, jotka tekivät tarjouksen. Nimikkeet, jotka on mitattu yksikössä, jota taulukossa ei ole, sekä nimikkeet ilman hintaa jätetään pois.

## Avustajasi kanssa

Jos sallit avustajat Asetuksissa, he voivat lukea hiilen (carbon_check). Kertoimien lataaminen on sinun tehtäväsi.

## Hyvä tietää

Mitään ei lähetetä minnekään. Luvut ovat vain niin hyviä kuin lataamasi kertoimet.
