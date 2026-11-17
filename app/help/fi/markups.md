---
title: Huomautukset, pilvet ja korostukset
summary: Merkitse kysymykset ja muutokset arkeille huomautuksilla, revisiopilvillä ja korostuksilla, seuraa kutakin tilassa Avoin, Vastattu tai Suljettu ja lähetä ne merkityssä PDF-tiedostossa.
keywords: merkintä, merkinnät, huomautus, kommentti, kysymys, rfi, pilvi, revisiopilvi, korostus, tila, avoin, vastattu, suljettu, tarkistus, merkintälista
from: 2b395c13
---

Merkinnät on tarkoitettu asioille, jotka on muistettava tai kysyttävä määrälaskennan aikana: "vahvista perustyyppi", revisiopilvi muuttuneen seinän ympärillä tai korostettu huomautus pohjapiirustuksessa. Ne ovat arkilla tilansa kanssa, ne luetellaan yhdessä paikassa ja ne tulostuvat merkityssä PDF-tiedostossa. Niitä **ei koskaan lasketa**: ei määrää eikä kustannusta.

## Lisää merkintä

Avaa {{ui:Markup}} arkin yläpuolella olevasta palkista ja valitse:

| Merkintä | Miten |
|---|---|
| {{ui:Note}} | Napsauta kohtaa, johon se menee, kirjoita huomautus ja valitse {{ui:Add}}. Se näkyy pyöreänä neulana, jonka vieressä on sen ensimmäinen rivi. |
| {{ui:Cloud}} | Napsauta yhtä kulmaa, sitten vastakkaista kulmaa, ja kirjoita huomautus (tai jätä se tyhjäksi). Laatikon ympärille tulee kaarevareunainen revisiopilvi. |
| {{ui:Highlight}} | Napsauta kahta kulmaa: syntyy läpinäkyvä keltainen laatikko, johon voit halutessasi lisätä huomautuksen. |

{{key:Esc}} ensimmäisen kulman jälkeen peruu. Työkalu pysyy päällä seuraavaa varten; {{key:V}} palauttaa {{ui:Select}}-työkaluun.

## Tila ja muokkaus

Napsauta merkintää {{ui:Select}}-työkalulla valitaksesi sen. Oikea paneeli näyttää **Merkinnän**: sen tyypin ja arkin, sen **Tilan** (Avoin, Vastattu tai Suljettu) ja sen tekstin, jota voi muuttaa. {{key:Delete}} (tai {{ui:Delete}}) poistaa sen; {{key:Mod+Z}} palauttaa sen.

Huomautuksen neula on oranssi, kun se on avoin, sininen, kun siihen on vastattu, ja harmaa, kun se on suljettu; suljettu pilvi muuttuu harmaaksi.

## Luettelo

**Merkinnät** oikeassa paneelissa luettelee kaikki määrälaskennan merkinnät tilansa kanssa ja kertoo, montako on yhä avoinna. Valitse ruutu **Vain avoimet**, jos haluat nähdä, mitä on vielä selvitettävänä. Napsauta riviä siirtyäksesi sen arkille ja valitaksesi sen.

## Jaa ne

- {{ui:Marked PDF}} piirtää ne sivuille: korostukset, pilvet ja neulat, kukin laatikossa, joka näyttää tilan isoin kirjaimin (AVOIN, VASTATTU, SULJETTU) ja tekstin. Sivu, jolla on merkintöjä mutta ei määrälaskennan merkintöjä, sisällytetään myös.
- {{ui:XLSX}} lisää **Merkinnät**-taulukon: arkki, tyyppi, tila ja teksti, yksi rivi kutakin merkintää kohti.
- Ne tallennetaan `.takeoff.json`-tiedostoon ja [PDF-tiedostoon, jonka sisällä on määrälaskenta](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
