---
title: Memòria de preus dels vostres treballs anteriors
summary: TakeoffCraft recorda les tarifes que heu usat en amidaments anteriors, només en aquest ordinador, perquè un amidament nou pugui començar amb el que vau pagar la darrera vegada. Veieu-les, useu-les i oblideu-les.
keywords: memòria de preus, preus, recorda preus, darrera obra, obres anteriors, preu típic, mediana, tarifes, sense preu, torna a preuar, aprendre d'un amidament anterior, oblida, biblioteca
from: 7279f1a1
---

{{ui:Preus}} a la barra d'eines (el signe de dòlar) obre el que TakeoffCraft recorda sobre els preus que heu usat. És una llista simple: per a cada nom d'element, les tarifes de les vostres darreres obres. Es guarda en aquest navegador (a Studio, en la seva pròpia vista web), al costat de la biblioteca de preus, mai dins d'un fitxer d'amidament, i no s'envia enlloc. No és un model entrenat.

## Què es recorda

En desar un amidament, cada element que té preu i que s'usa (té una marca, o una quantitat escrita superior a zero) es recorda pel seu nom i tipus: tarifa de material, tarifa de mà d'obra, pèrdua i unitat. Una obra són els fitxers de plànols dels quals s'ha pres l'amidament, de manera que tornar a desar el mateix amidament reemplaça els seus propis preus en lloc d'afegir-ne una altra obra. Es guarden les darreres 12 obres per a cada nom.

Per començar amb el vostre treball anterior, trieu {{ui:Aprendre d'un amidament anterior…}} i escolliu un amidament desat (.json). Els seus elements amb preu i usats es recorden de la mateixa manera.

Els noms coincideixen quan coincideixen les seves paraules, sigui quina sigui la majúscula o la puntuació ("2x4 Stud, 8 ft" i "2x4 stud 8 FT" són el mateix). Les mateixes paraules per a un altre tipus d'element (un element lineal i un element de recompte) no són el mateix preu.

## Usar-la en un amidament nou

1. Feu els elements de l'amidament nou.
2. Trieu {{ui:Preus}}. Sota {{ui:Aquest amidament}} veieu cada element que té un preu recordat, què hi teniu ara, les tarifes de la darrera obra, les tarifes típiques (el mig de les obres recordades) i el rang.
3. Trieu {{ui:Feu servir l'últim}} o {{ui:Feu servir l'habitual}} en un element, o Posa preu a N elements sense preu des de la memòria per omplir cada element que encara no té preu amb la darrera obra.

Cada ús és un pas: {{key:Ctrl+Z}} el desfà. Un element que només té un nom semblant (un nom dins de l'altre) ho indica, i els botons fan servir les tarifes del nom semblant. Un preu recordat per cadascun mai no es posa a un element per peu: el diàleg indica que les unitats difereixen i no el toca.

## Veure-la, canviar-la, oblidar-la

{{ui:Tot el que s'ha recordat}} llista cada nom amb les seves tarifes i el nombre d'obres. El botó de paperera oblida un nom; {{ui:Buidar tots els preus}} els oblida tots. Desactiveu {{ui:Recorda els preus en desar un amidament}} per deixar de recordar-los; el que ja hi és es queda fins que l'oblideu. Els vostres amidaments i la biblioteca de preus no es toquen mai.

## Amb el vostre assistent

Si permeteu els assistents a Configuració, poden llegir el que es recorda per als elements de l'amidament (prices_list) i preuar-hi elements a partir d'això (prices_apply, que pot mostrar una vista prèvia primer). És la mateixa llista que el diàleg.
