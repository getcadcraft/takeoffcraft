---
title: Comprova l'estoc del proveïdor i els terminis de lliurament
summary: Afegeix la llista d'estoc d'un proveïdor (CSV o full de càlcul) i TakeoffCraft hi comprova el que necessita l'amidament, amb la pèrdua inclosa: n'hi ha prou en estoc i quant triga. Les mancances i les esperes llargues es mostren al tauler de Problemes.
keywords: proveïdor, estoc, en estoc, termini de lliurament, disponibilitat, mancança, comanda pendent, llista de comanda, csv, SKU, venedor, materials, subministrament, problemes
from: f11160fb
---

{{ui:Proveïment}} a la barra d'eines (el camió) comprova el que necessita el teu amidament amb la llista d'estoc d'un proveïdor. Les files del proveïdor que importen es guarden al fitxer del mateix amidament. No s'envia res enlloc i no es consulta cap proveïdor: tu portes el fitxer.

## El fitxer

Un fitxer CSV amb una fila de capçalera. Necessita una columna de nom o de SKU i una columna d'estoc o de termini de lliurament. Es reconeixen aquestes capçaleres (en qualsevol ordre i amb qualsevol majúscula): Item, Name, Description o Product; SKU, Part o Item #; In stock, On hand, Available o Quantity; Lead time o Delivery days; Unit o UOM; Price o Cost; Supplier o Vendor.

- L'estoc pot ser un nombre (1,200), "In stock" o "Out of stock".
- Un termini de lliurament pot ser "5 days", "2 weeks", "2-3 weeks" (s'usa el més llarg), "3 months", "same day" o "backorder". Un nombre sol està en la unitat de la capçalera (dies, tret que la capçalera digui weeks o months).
- No es llegeixen els fitxers d'Excel: desa primer el full com a CSV.

## Comprova l'amidament

1. Tria {{ui:Proveïment}}, després {{ui:Afegeix un fitxer de proveïdor…}} i selecciona el CSV. Pots afegir-ne més d'un: fins a cinc fitxers, amb 2,000 files conservades en total, primer les que coincideixen amb els teus elements.
2. Cada element, segona condició i part d'un muntatge amb una quantitat s'associa a una fila pel nom, o pel SKU que hi hagi al nom. Si no hi ha cap nom exacte, s'usa un nom semblant (un dins de l'altre), i ho indica.
3. Sota {{ui:El que necessita l'amidament}}, primer surten els que falten: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". La necessitat inclou la pèrdua. Una unitat del proveïdor que no és la de l'amidament (una tona contra un peu) s'indica i mai no es compara. Cada fila té {{ui:Seleccionar l'element}}, que salta a l'element.
4. Defineix {{ui:Termini màxim desitjat (dies)}} (per defecte 14). Un element que no és en estoc i que espera més que això es marca, i el resum indica l'espera més llarga que compta.
5. {{ui:Llista de comanda (CSV)}} baixa els elements que falten, amb la quantitat que falta, el proveïdor i el termini de lliurament. {{ui:Deixar fora}} treu una necessitat de la comprovació (és un pas que es pot desfer).

## Fitxers de full de càlcul i la biblioteca de preus

La llista d'un proveïdor pot ser un llibre d'Excel (.xlsx) a més d'un CSV: es llegeix el primer full, amb els mateixos noms de columna. Mai no s'executen les fórmules; es llegeix el valor que conté el fitxer.

Quan s'ha afegit un fitxer amb preus, {{ui:Preus a la biblioteca}} del diàleg fixa el preu de material de cada entrada de la [Biblioteca](topic:price-library) a què el fitxer li assigna preu: el mateix nom i una unitat que sigui la mateixa (o que no s'hagi indicat). La mà d'obra, la pèrdua, l'alçada i els muntatges es mantenen tal com estan, i la nota de l'entrada indica de quin fitxer ve el preu. Una entrada en metres no es preu a partir d'una llista en peus, i una sense cap nom coincident es deixa en pau; la línia d'estat indica quantes se n'han saltat per la unitat. Torna a calcular els preus des de la Biblioteca per portar els preus nous a aquest amidament.

## Al tauler de Problemes

Una mancança és un avís i una espera llarga és una nota, al tauler de Problemes compartit ("Supplier stock"), de manera que queden juntes amb totes les altres comprovacions. Pots acceptar-ne una amb un motiu, i l'acceptació es desa a l'amidament.

## Amb el teu assistent

Si permets els assistents a Configuració, poden llegir la comprovació (supply_check). Afegir un fitxer de proveïdor ho has de fer tu.

## Bon a saber

Les xifres d'estoc només són tan actuals com el fitxer que afegeixes. Afegeix el fitxer de nou per actualitzar-lo: un fitxer amb el mateix nom substitueix l'anterior.
