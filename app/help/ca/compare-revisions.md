---
title: Compareu un full revisat i moveu l'amidament
summary: Poseu el full antic sobre la seva revisió, alineeu-los, vegeu què ha canviat i moveu l'amidament al full nou amb les marques a revisar marcades.
keywords: revisió, revisat, comparar, superposició, antic, nou, canvis, addenda, butlletí, reemissió, moure amidament, traslladar, reportar, alinear, marcat, revisar
from: 3a1d9fe0
---

Quan es torna a emetre un full, no cal tornar a amidar-lo. Obriu el PDF antic i el nou, compareu els dos fulls i traslladeu l'amidament. TakeoffCraft marca cada marca on el dibuix ha canviat, així que les reviseu i conserveu la resta.

## Compara

1. Obriu els dos PDF: el joc antic i el revisat ({{ui:Obre plànols}}; poden estar en un sol fitxer o en diversos).
2. Mostreu el full **nou**.
3. Trieu {{ui:Compara}} a la barra del full, sota el dibuix.
4. Trieu el full antic a la llista. TakeoffCraft suggereix el full amb el mateix número de l'altre PDF, o la mateixa pàgina. Trieu **Compara**.

El dibuix antic ara queda sobre el nou, en vermell. On els dos coincideixen, les línies vermelles cauen sobre les negres; on difereixen, veieu només línies vermelles (suprimides) i només línies negres (afegides). Una barra a la part inferior del full conté els passos següents; {{key:Esc}} o {{ui:Tanca}} acaben la comparació.

## Alineeu-los

Els fulls revisats sovint es tracen una mica desplaçats: moguts a la pàgina, o a una mida lleugerament diferent. Si el dibuix vermell no cau sobre el negre, trieu **Alinea per dos punts** i feu clic quatre vegades:

1. un punt del dibuix antic (vermell), com el centre d'un pilar o una cantonada de l'edifici,
2. el mateix punt del dibuix nou (negre),
3. un segon punt del dibuix vermell, lluny del primer,
4. el mateix punt del dibuix negre.

El dibuix vermell es mou, gira i s'escala sobre el negre. La barra d'estat indica quant més gran és el dibuix nou ("mida × 1.000" quan és la mateixa). Feu zoom per als punts: com més a prop feu clic, millor encaix.

## Trobeu què ha canviat

Trieu **Cerca canvis**. TakeoffCraft compara els traços dels dos dibuixos: els traços només del full antic es tornen vermells, els traços només del full nou es tornen blaus, i la barra d'estat els compta. Les línies que s'han mogut un pèl (una retraçada) no es compten com a canvis.

També revisa cada marca del full antic i compta les que són on el dibuix ha canviat:

- un recorregut o una àrea quan el dibuix ha canviat en un dels seus extrems o cantonades, o al llarg de almenys una sisena part aproximadament de la seva longitud;
- un recompte quan qualsevol cosa ha canviat just al costat.

## Mou l'amidament

Trieu **Mou l'amidament aquí**. Cada marca del full antic es mou al nou, a través de l'alineació, en un sol pas per desfer. Les que són al costat d'un canvi es marquen: es dibuixen amb un halo taronja, i la barra del full mostra "(n) per revisar".

Si el full nou no tenia escala, pren l'escala del full antic (ajustada quan els dibuixos han hagut d'escalar-se per alinear-se). Si ja en tenia una de diferent, TakeoffCraft pregunta primer: les marques mogudes es mesuren a l'escala del full nou.

## Reviseu les marques marcades

1. Trieu "(n) per revisar" a la barra del full. Fa zoom a la següent marca marcada i la selecciona; el seu tauler diu per què està marcada.
2. Arregleu la marca si el dibuix ha canviat sota seu (arrossegueu-ne les cantonades, afegiu o suprimiu marques, o torneu-la a amidar).
3. Trieu **Comprovat** al seu tauler. La marca desapareix i el recompte de la barra del full baixa.

Les marques es desen amb l'amidament, així que les podeu revisar més tard.

:::note
Comparar funciona igual amb PDF vectorials i amb escanejos, perquè compara el que està dibuixat. Un escaneig torçat o estirat pot alinear-se només aproximadament amb dos punts; en aquest cas, reviseu més marques a ull.
:::
