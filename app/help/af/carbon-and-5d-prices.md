---
title: Ingebedde koolstof en 'n 5D-prystabel
summary: Koolstof tel die ingebedde koolstof van die hoeveelheidsopname op uit elke item se hoeveelheid en 'n oop faktortabel, en stuur die hoeveelheidsopname se tariewe na BimCraft as 'n prystabel vir 5D-koste.
keywords: koolstof, ingebedde koolstof, kgco2e, co2, faktore, a1-a3, vervoer, afval, 5d, prystabel, koste, bimcraft, epd
from: f4bff3b8
---

{{ui:Koolstof}} op die nutsbalk tel die ingebedde koolstof op van wat jy gemeet het, en verander jou tariewe in 'n prystabel wat die boumodel kan gebruik. Dit is 'n skatting, nie 'n assessering nie.

## Ingebedde koolstof

Elke item se hoeveelheid, met sy afval, word vermenigvuldig met 'n ry in die faktortabel. 'n Ry word gepas deur die woorde van die item se naam ("betonplaat" vind 'n ry met die sleutelwoord beton). Die tabel is dieselfde oop tabel wat BimCraft gebruik, so 'n lêer wat jy hier laai, werk daar. **Die rye wat by die program kom, is beginwaardes: generies, ongekontroleer en nie uit enige databasis nie.** Die dialoog sê dit langs die syfers; vervang hulle met jou eie bron voordat jy op 'n getal staatmaak.

1. Kies {{ui:Koolstof}}. Die getelde items word gelys met hul kilogram CO2e; die totaal is bo.
2. Merk {{ui:A4-vervoer}} of {{ui:A5-bouwerfafval}} om daardie fases ook te tel, vir die rye wat 'n syfer daarvoor gee. Die produkfase word altyd getel.
3. Om 'n ander ry vir 'n item te gebruik, of geen, gebruik die lys op sy lyn.
4. {{ui:Faktore uit 'n lêer…}} laai 'n faktortabel (JSON of CSV) wat uit jou eie bron gemaak is; sy rye vervang die beginrye met dieselfde id. {{ui:Faktore (JSON)}} stoor joune.

'n Faktor is per meter, vierkante meter, kubieke meter, item of kilogram. 'n Lyn wat in voet of vierkante voet gemeet is, word omgeskakel. 'n Kilogramfaktor het 'n volume (kubieke yards of meter) en die ry se digtheid nodig. 'n Item waarvan die faktor 'n hoeveelheid nodig het wat dit nie meet nie, word onder {{ui:Uitgelate}} gelys met die rede, nooit geraai nie. Die lopende totaal in die statusbalk wys dieselfde syfer.

Jou faktorrye, jou keuses en die fases wat jy tel, word in die hoeveelheidsopname se lêer gestoor.

## 'n Prystabel vir 5D-koste

{{ui:5D-pryse (JSON)}} en {{ui:5D-pryse (CSV)}} stoor die hoeveelheidsopname se tariewe as 'n prystabel: een ry per geprysde item met sy materiaal- en arbeidstarief per eenheid en sy afval. Laai dit in BimCraft se kostepaneel (Ingebedde koolstof en 5D-koste) om die boumodel se take met dieselfde tariewe te prys wat die tender gemaak het. Items wat in 'n eenheid gemeet is wat die tabel nie het nie, en items sonder 'n tarief, word uitgelaat.

## Met jou assistent

As jy assistente in Instellings toelaat, kan hulle die koolstof lees (carbon_check). Die laai van faktore is joune om te doen.

## Goed om te weet

Niks word enige plek gestuur nie. Die syfers is net so goed as die faktore wat jy laai.
