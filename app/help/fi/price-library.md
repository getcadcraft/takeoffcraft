---
title: Hintakirjasto
summary: Pidä nimikkeesi, hintasi ja yhdistelmäsi kirjastossa, tuo ne CSV-tiedostosta tai aiemmasta arviosta, lisää nimikkeitä kirjastosta mihin tahansa määrälaskentaan ja päivitä määrälaskennan hinnat siitä.
keywords: kirjasto, hintakirjasto, ammattipaketit, hinnasto, kustannustietokanta, tuo csv, hinnat, yhdistelmät, uudelleenkäyttö, mallinimikkeet, päivitä hinnat, hinnoittele uudelleen
from: 37356c68
---

**Hintakirjasto** pitää nimikkeet, joita käytät työstä toiseen: niiden tyypin, yksikön, korkeuden, hukan, materiaali- ja työhinnat sekä yhdistelmän. Se säilytetään tässä selaimessa, erillään määrälaskennoista, joten jokaista tässä avattua määrälaskentaa voi käyttää.

Avaa se {{ui:Kirjasto}}-painikkeella {{ui:Nimikkeet}}-paneelin yläreunassa.

## Täytä kirjasto

- {{ui:Tuo CSV…}} lukee CSV-muodossa tallennetun taulukon (katso alla olevat sarakkeet). Nimikkeet, joiden nimi ja tyyppi ovat jo kirjastossa, korvataan; loput lisätään. Rivit, joita se ei voi lukea, ohitetaan, ja se kertoo, mitkä ja miksi.
- {{ui:Lisää tämän määrälaskennan nimikkeet}} kopioi jokaisen avoimen määrälaskennan nimikkeen kirjastoon hintoineen ja yhdistelmineen (ei sen merkkejä).
- TakeoffCraftin viemä arvion CSV ([Vie arvio](topic:export-estimate)) tuodaan sellaisenaan: viimeisen työn hinnat ovat lähtökohtana seuraavalle.

- {{ui:Ammattipaketit…}} lisää ilmaisia yhdistelmiä ammatille, kuten kipsilevytykselle, sähkötöille tai betonityölle, ilman hintoja. Katso [Ammattipaketit](topic:trade-packs).

{{ui:Vie CSV}} tallentaa kirjaston CSV-tiedostoksi: säilyttääksesi kopion, muokataksesi sitä taulukkolaskennassa tai antaaksesi sen kollegalle. {{ui:Tyhjennä}} tyhjentää sen (napsauta kahdesti).

:::note
Kirjasto on tämän selaimen tallennustilassa. Toisella selaimella, toisella tietokoneella tai yksityisessä ikkunassa on oma kirjasto (tai ei lainkaan). Vie se siirtääksesi sen.
:::

## Käytä määrälaskennassa

- Valitse nimikkeitä rastilla (kirjoita kohtaan {{ui:Hae kirjastosta}} rajataksesi luetteloa) ja valitse {{ui:Lisää määrälaskentaan}}. Ne lisätään yhdistelmineen yhdellä askeleella, jonka {{key:Mod+Z}} kumoaa. Nimi, joka on jo määrälaskennassa, saa numeron, kuten `Carpet (2)`.
- {{ui:Päivitä hinnat}} antaa määrälaskennan nimikkeille kirjaston hukan ja hinnat jokaiselle nimikkeelle, jonka nimi ja tyyppi vastaavat kirjaston nimikettä, ja samoin yhdistelmien osille, joilla on sama nimi. Korkeudet, yksiköt ja kaavat säilyvät ennallaan. Yksi {{key:Mod+Z}} palauttaa kaikki vanhat hinnat.

## CSV-sarakkeet

Ensimmäinen rivi nimeää sarakkeet, missä järjestyksessä tahansa; muut sarakkeet jätetään huomiotta.

| Sarake | Mitä siihen kirjoitetaan |
|---|---|
| Item (tai Name) | Nimikkeen nimi. Pakollinen. |
| Type | Linear, Area tai Count (LF, SF ja EA käyvät myös). Jos tyhjä, yksikkö ratkaisee. |
| Unit | LF tai m; SF, SY tai m²; EA. Tyhjä: tyypin tavallinen yksikkö. |
| Waste % | `10` tai `10%`. |
| Material per unit, Labor per unit | Hinnat kuten `2.10` tai `$1,250`. |
| Height (tai Depth) | `9'-0"`, `9`, tai `2.7` metrisille yksiköille. |
| Component, Formula | Rivi, jolla on Component-nimi (tai tyyppi `Component`), on yllä olevan nimikkeen yhdistelmän osa. Sen yksikkö, hukka ja hinnat ovat omia; sen Formula käyttää nimikkeen kirjaimia, katso [Yhdistelmät ja kaavat](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Pilkut, puolipisteet tai sarkainmerkit sarakkeiden välillä toimivat kaikki.
