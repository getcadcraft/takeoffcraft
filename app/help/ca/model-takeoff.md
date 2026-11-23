---
title: Pren quantitats d'un model d'edifici
summary: Obriu el model IFC de l'arquitecte, veieu-lo en 3D, trieu murs, forjats, portes i la resta per tipus, material, capa o mida, i porteu-ne els recomptes, longituds, àrees i volums a l'amidament. Una còpia més nova del model actualitza les mateixes quantitats.
keywords: model, amidament de model, vista 3D, fes clic a una peça, troba la fila, material, capa, capes de paret, plafó de cartró-guix, aïllament, mides de portes, mides de finestres, llista de portes i finestres, csv, 3d, bim, ifc, rvt, model d'edifici, quantitats, murs, forjats, portes, finestres, pilars, sales, per tipus, per nivell, actualitza, model més nou, disseny de desenvolupament
from: 8c4c12c9
---

No cal que espereu el següent joc de plànols. Quan l'arquitecte envia el model de l'edifici, obriu-lo aquí i preneu les quantitats directament d'ell. El model es llegeix al vostre ordinador; no s'envia enlloc.

## Passos

1. Trieu {{ui:Model}} a la barra d'eines i seleccioneu el fitxer `.ifc` del model, o obriu-lo amb {{ui:Obre plànols}} com qualsevol altre fitxer.
2. {{ui:Amidament de model}} s'obre amb una fila per categoria i tipus: murs per tipus de mur, forjats per tipus de forjat, portes per tipus de porta, i així successivament. Cada fila mostra el seu recompte i en quina unitat es mesura aquella categoria.
3. Poseu {{ui:Agrupa per}} a {{ui:Categoria}} per a un total ràpid, o a {{ui:Categoria, tipus i nivell}} per dividir cada tipus per planta.
4. Desmarqueu les files que no vulgueu. {{ui:Cerca}} redueix la llista. Desmarcar una fila també amaga les seves peces a la imatge 3D.
5. Poseu al model un {{ui:Nom del model}} que mantindreu durant tota la feina, per exemple el nom del projecte.
6. Trieu {{ui:Afegeix a l'amidament}}. Cada quantitat es converteix en una quantitat tipificada a la llista d'elements. Poseu-li nom, preu i afegiu-hi preus descomposts com amb qualsevol altre element.

## Mostra el model en 3D

{{ui:Mostra el model en 3D}} dibuixa el model sobre la taula, amb un color per a cada fila (la mostra de color al costat del nom de la fila). Arrossegueu per girar-lo, mantingueu {{key:Shift}} i arrossegueu per moure'l, feu servir la roda per fer zoom, i trieu {{ui:Ajusta}} o {{ui:Restableix}} per tornar.

- **Feu clic a una peça** de la imatge i la seva fila se selecciona a la taula, amb totes les peces d'aquella fila il·luminades i la resta esvaïdes. Feu clic de nou a la mateixa peça i, si és en diverses files (un mur amb les seves capes), se selecciona la fila següent.
- **Feu clic a una fila** de la taula per il·luminar les seves peces. Torneu-hi a fer clic, o feu clic a l'espai buit de la imatge, per netejar-ho.
- Les sales no es dibuixen, perquè el volum d'una sala amagaria l'edifici.
- Un model molt gran només manté una caixa per a algunes peces perquè càpiga a la memòria; el tauler diu quantes. Els números no canvien.

Si aquest ordinador no pot dibuixar en 3D, la taula funciona com abans.

## Agrupa per material, capa o mida

{{ui:Agrupa per}} té tres opcions més:

- {{ui:Categoria i material}}: un mur, forjat o coberta fet de capes dona a cada material de capa la seva pròpia fila, de manera que el plafó de cartró-guix, els muntants i l'aïllament es poden preu per separat. Una part de l'edifici amb un sol material té la fila d'aquest material, i una part sense cap es manté en una fila anomenada "Sense material indicat".
- {{ui:Categoria i capa}}: el mateix, amb el gruix de la capa a la fila ("Aïllament, 100 mm").
- {{ui:Categoria, tipus i mida de porta o finestra}}: les portes i finestres es divideixen per amplada i alçada (per exemple 3'-0" × 6'-8" o 914 × 2,032 mm).

Per a una capa, l'àrea és la cara pròpia del mur (o l'àrea en planta o de superfície del forjat o de la coberta), i el volum és aquesta àrea pel gruix de la capa. La nota de la fila diu quants números han sortit d'una capa. Les capes d'un mur sumen el volum que el model indica per a ell.

## Desa les files o les obertures com a CSV

{{ui:Desa les files com a CSV}} desa les files que heu marcat, amb les unitats a cada encapçalament, per a un full de càlcul. {{ui:Desa la llista de portes i finestres com a CSV}} (només quan el model té portes o finestres) desa cada porta i finestra per tipus, nivell i mida, amb el seu recompte.

## Què es mesura

| Categoria | Quantitats |
|---|---|
| Murs | recompte, longitud, àrea de paret (una cara, buits descomptats), volum |
| Forjats, lloses, sostres i altres revestiments | recompte, àrea en planta, volum |
| Cobertes | recompte, àrea en planta, superfície de coberta, volum |
| Fonamentacions | recompte, àrea en planta, volum |
| Pilars, bigues i barres | recompte, longitud al llarg de la barra, volum |
| Baranes, canonades, conductes i recorreguts de cable | recompte, longitud |
| Escales | recompte, volum |
| Sales | recompte, àrea de planta, volum |
| Portes, finestres i tota la resta | recompte |

Quan l'autor del model ha indicat una quantitat al fitxer, es fa servir aquell número. Si no, el número es mesura a partir de la forma de l'element. Cada quantitat té una nota que diu quin dels dos casos és, i quants elements han donat un número.

:::note
La longitud d'un mur mesurada a partir de la seva forma va d'extrem a extrem, de manera que dos murs que se solapen en una cantonada inclouen tots dos la cantonada. Un volum necessita una forma tancada: un element amb una forma no tancada es compta però no dona volum. Un element de mur corb o amb cantonades es mesura com la meitat de totes les seves cares verticals, i la seva nota ho diu.
:::

## Quan arriba un model més nou

Obriu el fitxer més nou i escriviu el mateix {{ui:Nom del model}}. Abans d'afegir res, el tauler diu quantes quantitats són noves, quantes han canviat i de què a què, i quines quantitats de la còpia anterior ja no són al model. Trieu {{ui:Afegeix a l'amidament}}: les quantitats canviades prenen els seus números nous, i els vostres noms, tarifes, pèrdues i preus descomposts es mantenen. Les quantitats que ja no són al model mantenen els seus números antics; suprimiu-les vosaltres si el disseny les va treure.

Els noms de tipus i de nivell són la manera com es reconeix una quantitat. Si l'arquitecte reanomena un tipus de mur, arriba com una quantitat nova i l'antiga apareix com a desapareguda.

## Fitxers que això llegeix

Fitxers IFC (IFC2x3, IFC4 i IFC4.3). Un fitxer IFC amb carreteres, vies o ponts encara porta directament les seves quantitats d'infraestructura, com abans.

TakeoffCraft no llegeix fitxers `.rvt` en aquesta versió. Si l'arquitecte treballa a Revit, demaneu una exportació IFC del model (Fitxer, Exporta, IFC) i obriu-la.

Un model pot portar fins a 500 quantitats cada vegada. Si n'hi ha més, desmarqueu files o agrupeu per categoria.
