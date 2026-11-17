---
title: Laske käsin
summary: Napsauta jokaista ovea, laitetta tai kalustetta laskeaksesi sen, tarkista laskentasi ja korjaa virheet.
keywords: laskenta, kappale, ea, kalusteet, ovet, laitteet, symbolit, napsautuslaskenta, käsin laskenta, lukumäärä
from: 594f2980
---

Lukumäärännimike laskee asioita: ovia, valaisimia, pistorasioita, saniteettilaitteita. Jokainen napsautus arkilla lisää yhden laskentamerkinnän. Laskeminen ei tarvitse mittakaavaa.

## Laskenta

1. Luo tai napsauta lukumäärännimike kohdassa {{ui:Nimikkeet}} ({{ui:Lukumäärä}}-tyyppi).
2. Valitse työkalurivistä {{ui:Lukumäärä}} tai paina {{key:C}}.
3. Napsauta jokaista arkilla olevaa.
   Jokainen napsautus asettaa pisteen nimikkeen väriin, ja nimikkeen lukumäärä kasvaa yhdellä.
4. Siirry seuraavalle arkille ({{key:PageDown}}) ja jatka laskemista. Työkalu pysyy tilassa {{ui:Lukumäärä}}.
5. Paina {{key:Esc}}, kun olet valmis. TakeoffCraft palaa tilaan {{ui:Valitse}}.

Vetäminen panoroi ja rulla zoomaa edelleen laskennan aikana, joten voit liikkua arkilla lisäämättä pisteitä.

:::tip
Napsauta lukumäärännimikettä, niin sen pisteet korostuvat jokaisella arkilla. Arkkiluettelo näyttää silloin, kuinka monta pistettä on kullakin arkilla, mikä auttaa löytämään arkit, joita et ole vielä laskenut.
:::

## Korjaa laskenta

- **Poista piste**: valitse {{ui:Valitse}} ({{key:V}}), napsauta pistettä ja paina {{key:Delete}} tai valitse {{ui:Poista merkintä}}. Tai paina {{key:Mod+Z}} heti väärän napsautuksen jälkeen.
- **Siirrä piste**: valitse se ja vedä.
- **Laskettu väärään nimikkeeseen**: valitse piste ja valitse oikea lukumäärännimike **Nimike**-luettelosta kohdassa **Valittu merkintä**.

## Pisteen koko näytöllä ja PDF:ssä

Pisteet säilyttävät saman koon näytöllä, zoomasi mukaan. Muuttaaksesi sitä, avaa {{ui:Asetukset}}, TakeoffCraft-välilehti, ja valitse **Laskentamerkin koko**: Erittäin pieni, Pieni, Keskikokoinen (oletus) tai Suuri.

PDF-vienti ({{ui:Vie}} › merkitty PDF) piirtää jokaisen pisteen samankokoisena paperilla, arkin koosta riippumatta: PDF:n katselija 100 %:n zoomilla näyttää pisteet yhtä suurina kuin ne ovat näytöllä. Jos arkin pisteet koskisivat toisiinsa, vienti pienentää arkin pisteitä, jotta kukin voidaan lukea.

## Monta samanlaista symbolia

Symbolille, joka toistuu monta kertaa arkilla, kokeile [Automaattilaskenta](topic:auto-count): rajaa yksi, tarkista, mitä se löytää, ja lisää ne kaikki yhdellä askeleella.

## Lukumäärien käyttö kaavoissa

Lukumäärännimikkeen määrä on **N**. Yhdistelmän komponentit voivat käyttää sitä, esimerkiksi saranat `N * 3` ovia kohden. Katso [Yhdistelmät ja kaavat](topic:assemblies).
