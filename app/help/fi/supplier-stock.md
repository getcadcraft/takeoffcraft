---
title: Tarkista toimittajan varasto ja toimitusajat
summary: Lisää toimittajan varastoluettelo (CSV tai taulukko), ja TakeoffCraft tarkistaa, mitä määrälaskenta tarvitsee hukka mukaan lukien, sitä vasten: onko varastossa riittävästi ja kuinka pitkä odotus on. Puutteet ja pitkät odotukset näkyvät Ongelmat-paneelissa.
keywords: toimittaja, varasto, varastossa, toimitusaika, saatavuus, puute, jälkitilaus, tilauslista, csv, sku, myyjä, materiaalit, toimitus, ongelmat
from: f11160fb
---

{{ui:Toimitus}} työkalurivillä (kuorma-auto) tarkistaa, mitä määrälaskenta tarvitsee, toimittajan varastoluetteloa vasten. Toimittajan tarpeelliset rivit säilytetään määrälaskennan omassa tiedostossa. Mitään ei lähetetä minnekään, eikä toimittajalta kysytä mitään: tuot tiedoston itse.

## Tiedosto

CSV-tiedosto, jossa on otsikkorivi. Siinä täytyy olla nimi- tai SKU-sarake sekä varasto- tai toimitusaikasarake. Nämä otsikot tunnistetaan (missä tahansa järjestyksessä, kirjainkoolla ei ole väliä): Item, Name, Description tai Product; SKU, Part tai Item #; In stock, On hand, Available tai Quantity; Lead time tai Delivery days; Unit tai UOM; Price tai Cost; Supplier tai Vendor.

- Varasto voi olla luku (1,200), "In stock" tai "Out of stock".
- Toimitusaika voi olla "5 days", "2 weeks", "2-3 weeks" (käytetään pidempää), "3 months", "same day" tai "backorder". Pelkkä luku on otsikon yksikössä (päivinä, ellei otsikko sano viikkoja tai kuukausia).
- Excel-tiedostoja ei lueta: tallenna taulukko ensin CSV-muotoon.

## Tarkista määrälaskenta

1. Valitse {{ui:Toimitus}}, sitten {{ui:Lisää toimittajan tiedosto…}} ja valitse CSV-tiedosto. Lisää useampi: enintään viisi tiedostoa, yhteensä 2 000 riviä säilytetään, ja ne, jotka vastaavat nimikkeitäsi, ensin.
2. Jokainen nimike, toinen ehto ja kokoonpanon osa, jolla on määrä, täsmätään riviin nimen tai nimessä olevan SKU:n perusteella. Samankaltaista nimeä (toinen sisältyy toiseen) käytetään, kun tarkkaa ei ole, ja tämä mainitaan.
3. Kohdassa {{ui:Mitä määrälaskenta tarvitsee}} lyhyet tulevat ensin: "Puutteessa 120 EA", "Toimitusaika 21 päivää", "Jälkitilauksessa", "Yksikkö eroaa", "Ei varastomäärää" tai "Varastossa". Tarve sisältää hukan. Toimittajan yksikkö, joka ei ole arvion yksikkö (tonni jalkaa vastaan), ilmoitetaan eikä sitä koskaan verrata. Jokaisella rivillä on {{ui:Valitse nimike}}, joka siirtää nimikkeeseen.
4. Aseta {{ui:Pisin hyväksyttävä odotus (päivää)}} (oletus 14). Nimike, jota ei ole varastossa ja jonka odotus on tätä pidempi, merkitään, ja yhteenveto nimeää tärkeimmän pisimmän odotuksen.
5. {{ui:Tilauslista (CSV)}} lataa lyhyet nimikkeet puuttuvine määrineen, toimittajineen ja toimitusaikoineen. {{ui:Jätä pois}} poistaa tarpeen tarkistuksesta; sen voi kumota.

## Taulukkotiedostot ja hintakirjasto

Toimittajan luettelo voi olla Excel-työkirja (.xlsx) CSV-tiedoston lisäksi: ensimmäinen taulukko luetaan samoilla sarakenimillä. Kaavoja ei koskaan lasketa; luetaan tiedoston sisältämä arvo.

Kun hintoja sisältävä tiedosto on lisätty, dialogin {{ui:Hinnat kirjastoon}} asettaa kunkin [Kirjasto](topic:price-library)-merkinnän materiaalihinnaksi tiedoston hinnan, jos nimi on sama ja yksikkö on sama (tai ei ole ilmoitettu). Työ, hukka, korkeus ja kokoonpanot pysyvät ennallaan, ja merkinnän huomautus kertoo, mistä tiedostosta hinta tuli. Metreissä oleva merkintä ei saa hintaa jalkoina olevasta luettelosta, ja ilman vastaavaa nimeä oleva merkintä jätetään rauhaan. Tilarivi kertoo, kuinka monta ohitettiin yksikön takia. Hinnoittele uudelleen kirjastosta, jos haluat tuoda uudet hinnat tähän määrälaskentaan.

## Ongelmat-paneelissa

Puute on varoitus ja pitkä odotus huomautus, ja ne näkyvät yhteisessä Ongelmat-paneelissa (”Toimittajan varasto”), joten ne ovat muiden tarkistusten joukossa. Voit hyväksyä yhden syyn kanssa, ja hyväksyntä tallentuu määrälaskentaan.

## Avustajan kanssa

Jos avustajat on sallittu kohdassa {{ui:Asetukset}}, ne voivat lukea tarkistuksen (supply_check). Toimittajan tiedoston lisääminen tehdään käyttäjän toimesta.

## Hyvä tietää

Varastoluvut ovat vain niin ajantasaisia kuin lisäämäsi tiedosto. Lisää tiedosto uudelleen päivittääksesi sen: saman niminen tiedosto korvaa aiemman.
