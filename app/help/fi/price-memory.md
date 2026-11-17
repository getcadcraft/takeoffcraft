---
title: Hintamuisti aiemmista töistä
summary: TakeoffCraft muistaa aiemmissa määrälaskennoissa käyttämäsi hinnat, vain tässä tietokoneessa, jotta uusi määrälaskenta voi alkaa siitä, mitä maksoit viimeksi. Näe, käytä ja unohda ne.
keywords: hintamuisti, hinnat, muista hinnat, viimeinen työ, aiemmat työt, tyypillinen hinta, mediaani, yksikköhinnat, hinnoittelematon, hinnoittele uudelleen, opi aiemmasta määrälaskennasta, unohda, kirjasto
from: 7279f1a1
---

{{ui:Hinnat}} työkalurivillä (dollarimerkki) avaa luettelon siitä, mitä TakeoffCraft muistaa käyttämistäsi hinnoista. Se on yksinkertainen luettelo: jokaiselle nimikkeen nimelle viimeisten töidesi hinnat. Se säilytetään tässä selaimessa (Studiossa omassa web-näkymässään) hintakirjaston rinnalla, ei koskaan määrälaskentatiedoston sisällä, eikä mitään lähetetä minnekään. Se ei ole koulutettu malli.

## Mitä muistetaan

Kun tallennat määrälaskennan, jokainen hinnoiteltu ja käytetty nimike (sillä on merkki tai kirjoitettu määrä yli nollan) muistetaan nimensä ja tyyppinsä mukaan: materiaalihinta, työhinta, hukka ja yksikkö. Työ on ne piirustustiedostot, joista määrälaskenta on tehty, joten saman määrälaskennan tallentaminen uudelleen korvaa sen omat hinnat sen sijaan, että lisäisi toisen työn. Viimeiset 12 työtä säilytetään kullekin nimelle.

Aloittaaksesi vanhemmasta työstäsi, valitse {{ui:Opi aiemmasta määrälaskennasta…}} ja valitse tallennettu määrälaskenta (.json). Sen hinnoitellut ja käytetyt nimikkeet muistetaan samalla tavalla.

Nimet täsmäävät, kun niiden sanat täsmäävät, kirjainkoosta tai välimerkeistä riippumatta (”2x4 Stud, 8 ft” ja ”2x4 stud 8 FT” ovat samat). Samat sanat toisen tyyppiselle nimikkeelle (pituusnimike ja lukumäärännimike) eivät ole sama hinta.

## Käytä uudessa määrälaskennassa

1. Tee uuden määrälaskennan nimikkeet.
2. Valitse {{ui:Hinnat}}. Kohdassa {{ui:Tämä määrälaskenta}} näet jokaisen nimikkeen, jolla on muistettu hinta: mitä sillä on nyt, viimeisen työn hinnat, tyypilliset hinnat (muistettujen töiden keskikohta) ja vaihteluvälin.
3. Valitse {{ui:Käytä viimeisintä}} tai {{ui:Käytä tyypillistä}} yhdelle nimikkeelle, tai {{ui:Hinnoittele N hinnatonta nimikettä muistista}} täyttääksesi jokaisen nimikkeen, jolla ei vielä ole hintaa, viimeisen työn hinnalla.

Jokainen käyttö on yksi askel: {{key:Ctrl+Z}} kumoaa sen. Nimike, jolla on vain samankaltainen nimi (toinen nimi toisen sisällä), kertoo sen, ja painikkeet käyttävät samankaltaisen nimen hintoja. Kappalehintaa ei koskaan aseteta nimikkeelle, jonka yksikkö on per jalka: valintaikkuna kertoo yksiköiden eroavan ja jättää sen rauhaan.

## Näe, muuta, unohda

{{ui:Kaikki muistettu}} luettelee jokaisen nimen hintoineen ja töiden määrän. Roskakori-painike unohtaa yhden nimen; {{ui:Tyhjennä kaikki hinnat}} unohtaa ne kaikki. Poista käytöstä {{ui:Muista hintani, kun tallennan määrälaskennan}} lopettaaksesi muistamisen; jo tallennettu säilyy, kunnes unohdat sen. Määrälaskentojasi ja hintakirjastoa ei koskaan kosketa.

## Avustajan kanssa

Jos sallit avustajat asetuksissa, ne voivat lukea, mitä on muistettu määrälaskennan nimikkeille (prices_list), ja hinnoitella nimikkeitä siitä (prices_apply, joka voi esikatsella ensin). Se on sama luettelo kuin valintaikkunassa.
