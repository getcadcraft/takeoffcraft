---
title: Tartunta piirustuksen viivoihin
summary: Pisteet hyppäävät PDF-tiedoston omille viivoille, kun mittaat tai kalibroit: päihin, keskikohtiin, risteyksiin tai mihin tahansa kohtaan viivalla, ja merkki kertoo, mikä kohta on kyseessä.
keywords: tartunta, kohteen tartunta, päätepiste, keskikohta, leikkauspiste, lähin, vektori, viivat, tarkka, f3, magneetti, kulma
from: 41d29e9b
---

Useimmat piirustussarjat ovat vektori-PDF-tiedostoja: seinät ja reunat ovat oikeita viivoja, eivät pikseleitä. Mittauksen aikana TakeoffCraft tarttuu napsautuksiisi näihin viivoihin, joten viiva alkaa täsmälleen seinän kulmasta ja kalibrointi lukee piirtäjän piirtämän mitan eikä sitä pikseliä, johon osuit.

Tartunta on päällä, kun aloitat. Kytke se päälle ja pois {{ui:Tartunta}}-kohdalla tilarivillä tai {{key:F3}}-näppäimellä; asetus tallentuu tähän selaimeen (se löytyy myös kohdasta [Asetukset](topic:settings)).

## Mihin se tarttuu

Kun osoitin on noin 10 näyttöpikselin päässä viivasta, merkki näyttää, mihin napsautus osuu, ja sen nimen:

| Merkki | Nimi | Missä |
|---|---|---|
| Neliö | **Päätepiste** | Viivan pää tai kulma, jossa viivat kohtaavat. Kaaren kaksi päätä lasketaan; sen varrella olevat pisteet eivät. |
| Kolmio | **Keskikohta** | Suoran viivan keskikohta. |
| Rasti | **Leikkauspiste** | Kohta, jossa kaksi viivaa leikkaa, tai jossa yksi päättyy toiseen. |
| Tiimalasi | **Viivalla** | Viivan lähin piste, kun mikään päätepiste, keskikohta tai leikkauspiste ei ole lähellä. |

Lähin päätepiste, keskikohta tai leikkauspiste voittaa. Piste asettuu viivalle itselleen vain silloin, kun mikään niistä ei ole lähellä. Zoomaa lähemmäs, jos haluat valita toisiinsa lähellä olevien pisteiden välillä: 10 pikseliä ovat näytön pikseleitä, joten suuremmassa zoomissa ne kattavat piirustuksesta vähemmän.

## Missä se toimii

Tartunta toimii kohdissa {{ui:Viiva}}, {{ui:Pinta-ala}}, {{ui:Ympyrä}}, {{ui:Aukko}}, {{ui:Kalibroi}} ja {{ui:Tarkista}}, sekä kun vedät valitun merkinnän kulmaa. Se sijoittaa myös kaarien pisteet. {{ui:Lukumäärä}}, {{ui:Automaattilaskenta}} ja liittäminen eivät tartu.

Tartuntapiste voittaa {{key:Shift}}-näppäimen 45 asteen tartunnan. Jos haluat piirtää 45 asteen kulmassa irti viivoista, kytke ensin tartunta pois {{key:F3}}-näppäimellä.

:::tip
Kalibroi tartunta päällä. Napsauta lähellä tuntemasi mitoitusviivan tai seinän kahta päätä: molemmat pisteet osuvat täsmälleen piirustukseen, ja mittakaava on tarkka (tilarivi nimeää sitten vastaavan esiasetuksen).
:::

## Arkit, joihin ei voi tarttua

- **Skannatut arkit** ovat kuvia, joissa ei ole viivoja, joihin tarttua. Tilarivillä lukee ”Tällä arkilla ei ole viivoja, joihin tarttua (skannattu sivu on kuva).” ja pisteet menevät sinne, mihin napsautat.
- **Hyvin suuret piirustukset**: tartunta lukee arkilta enintään 400 000 viivasegmenttiä. Jos arkilla on niitä enemmän, se ilmoittaa siitä ja tarttuu vain ensimmäisiin.
- **Teksti** ei tartu, ellei PDF piirrä kirjaimiaan viivoina (jotkin piirturit tekevät niin).

Arkin viivat luetaan ensimmäisen avauksen yhteydessä taustalla. Suuri arkki voi vaatia sekunnin, ennen kuin merkit näkyvät.
