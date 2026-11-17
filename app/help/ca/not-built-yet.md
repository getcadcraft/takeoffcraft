---
title: Què encara no està implementat
summary: Funcions d'amidament que aquesta versió no té, i què fer avui en lloc seu.
keywords: límits, que falta, encara no, full de ruta, previst, alternativa, per recorregut, núvol, escriptori
from: 94ff90d0
---

TakeoffCraft està en desenvolupament. Aquesta llista és el que la versió actual no fa, i com fer igualment la feina.

## Mesurament

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Inserir un punt al mig d'un recorregut o d'un contorn | Esborreu la marca i torneu-la a dibuixar. |
| Selecció per finestra (caixa) | {{key:Shift}} + clic a cada marca, o {{key:Mod+A}} per a totes les marques del full. Vegeu [Copia, enganxa i duplica marques](topic:copy-paste). |
| Girar, simetritzar o reescalar una còpia enganxada | Enganxeu-la en un full a la mateixa escala i amb la mateixa orientació; dibuixeu la resta a mà. |
| Llegir l'escala d'un full escanejat, o d'una barra d'escala gràfica | Trieu la predefinida, o calibreu segons la longitud de la barra. |
| Més d'una escala per full (àrees de detall, plantes ampliades) | Mesureu la part a l'escala del full, i amideu el detall al seu propi full ampliat si el joc en té un. |

## Elements i preus

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Fórmules de preu descompost que fan servir els altres tipus de marques d'un element (les portes d'un element de sala a les fórmules de la seva planta) | Les fórmules fan servir els totals del tipus principal; preueu els altres tipus a les seves pròpies files. |
| Fórmules de preu descompost calculades recorregut a recorregut | Les fórmules fan servir els totals de l'element; useu `N` per als extres per recorregut. |
| Fórmules que fan servir les quantitats d'un altre element | Repetiu el mesurament en aquest element, o calculeu-ho al full de càlcul exportat. |
| Equips als components d'un preu descompost, o una jornada diferent de 8 hores | Assigneu l'equip a l'element; per a una jornada d'una altra durada, llegiu les dies-equip com a hores-equip ÷ la vostra jornada. |
| Marques que no siguin notes, núvols ni ressaltats (fletxes, cotes, segells), o respostes a una nota | Escriviu-ho al text de la nota; canvieu-ne l'estat a mesura que es resol. |
| Una biblioteca de preus compartida per un equip, o guardada al vostre compte | La biblioteca es guarda en aquest navegador: exporteu-la com a CSV i importeu-la a l'altre ordinador. |
| Paquets d'oficis revisats per pressupostadors en actiu | Cada paquet és un punt de partida: comproveu-ne les hipòtesis amb la vostra obra i els vostres productes abans de preuar-hi. Vegeu [Paquets d'oficis](topic:trade-packs). |
| Preus als paquets d'oficis | Els paquets només porten preus descomposts: definiu les vostres tarifes, o importeu la vostra llista de preus com a CSV. |
| Canviar el nom de l'amidament | El nom surt del primer PDF; canvieu el nom dels fitxers baixats. |
| Posar nom als fulls a mà | Els fulls reben el nom de les etiquetes de pàgina del PDF; cerqueu-los pel nom del fitxer i la pàgina. |

## Dibuixos (DWG i DXF)

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Taules d'estils de traçat, assignacions de plomes i fitxers CTB als fulls d'un dibuix | Un dibuix es dibuixa en negre, o amb els seus colors enfosquits per al paper; els gruixos de línia vénen del dibuix. |
| Obrir un DXF binari, o un DWG anterior a AutoCAD 2000 | Deseu-lo com a DXF ASCII o com a DWG més nou. |
| Trobar un dibuix enllaçat (xref) per la carpeta on és | Obriu també el fitxer del dibuix enllaçat, amb el dibuix principal: es troba pel nom del fitxer entre els fitxers oberts. |
| Mesurar polilínies 3D, malles, sòlids i regions | Compteu-los per capa i tipus, o mesureu la vista en planta amb les eines {{ui:Lineal}} i {{ui:Àrea}}. |
| Text en un PDF marcat d'un dibuix en escriptures que no són llatines | Els caràcters que Helvetica no té es mostren com a "?" al PDF marcat; el dibuix a la pantalla no es veu afectat. |
| Passar un dibuix a una altra aplicació des de la barra de fulls | Obriu el mateix fitxer en aquella aplicació. |
| Un dibuix que porta l'amidament a dins, com fa {{ui:PDF amb l'amidament a dins}} per als PDF | {{ui:Desa l'amidament}}: el `.takeoff.json` es torna a obrir sobre el mateix dibuix, trobat pel seu contingut. |
| Dibuixar o comptar fons PDF, imatges i objectes OLE col·locats en un dibuix | Les imatges es mostren només com un marc. Obriu el mateix PDF de fons com a full. |

## Recompte automàtic

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Trobar símbols en un full on l'escala no coincideix amb la mida a què estan dibuixats | Doneu-li l'escala al full, o cerqueu-lo amb una caixa dibuixada allà. |
| Trobar símbols simètrics | Compteu-los a mà, o torneu a cercar amb una caixa al voltant d'un de simètric. |

## Fitxers i compartició

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Un sol PDF que mostra les marques i porta l'amidament | {{ui:PDF marcat}} perquè la gent vegi les marques; {{ui:PDF amb l'amidament a dins}} per tornar-lo a obrir a TakeoffCraft. |
| Un CSV de quantitats per full o de les marques | Useu {{ui:XLSX}}: els seus fulls Per full i Marques en tenen. |
| Desat al núvol | Encara no està disponible. Deseu els fitxers del projecte al vostre ordinador i feu-ne còpia de seguretat. |
| Una aplicació d'escriptori de TakeoffCraft per separat | Des de la 0.5, l'aplicació d'escriptori és CadCraft Studio, amb les vuit aplicacions en una sola instal·lació. TakeoffCraft també funciona al navegador. |

## Pantalla i entrada

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Un menú amb clic dret (o premuda llarga) | Useu la barra d'eines, els taulers i les tecles. Una premuda llarga acaba un recorregut o un contorn. |
| Girar la vista | Les pàgines girades al PDF ja es mostren dretes. |

## Vista 3D

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Dibuixar o editar marques en 3D | Torneu al full ({{key:3}}) per dibuixar; la selecció i la supressió sí que funcionen en 3D. |
| Alinear plantes apilades traçades en llocs diferents de les seves pàgines | Apileu plantes traçades de la mateixa manera; reviseu les altres un full cada vegada. |
| Comptar postes amb la mida de l'objecte comptat | Totes les postes d'un full tenen la mateixa mida; marquen on hi ha un recompte, no què és. |

## Licitació

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Addenda a un paquet ja enviat, cartes d'adjudicació, un full d'abast que signa cada licitador | Envieu un paquet nou i redacteu vosaltres l'adjudicació. [Envia un paquet per a ofertes](topic:bid-invitations) explica el que sí que està implementat. |
| Enviar invitacions a ofertes des de qualsevol compte: mentre es prova, el correu als licitadors externs està desactivat excepte per als comptes que l'equip de CadCraft ha activat | Baixeu el {{ui:Abast CSV}}, envieu-lo per correu vosaltres mateixos i escriviu-hi les ofertes. |
| Enviar paquets d'ofertes des d'una finestra de Studio | Envieu-los des de TakeoffCraft al navegador. |
| Tornar a preuar l'àrea d'oferta d'una variant amb una oferta triada | Les variants i els subtotals de les àrees d'oferta fan servir els vostres preus; ajusteu la variant a mà. |
| Recordatoris automàtics abans que caduqui la data d'assegurança o de llicència d'un subcontractista | La data queda marcada a la pàgina de Subcontractistes quan ja ha passat o falten menys de 30 dies; comproveu-la quan convideu. |

## Taulers

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Moure la taula de {{ui:Quantitats}} | Només es mouen els taulers {{ui:Fulls}} i {{ui:Elements}}. Vegeu [Organitza els taulers](common:arrange-panels). |

## Fulls de càlcul

El llibre XLSX s'ha comprovat amb LibreOffice Calc, que ha recalculat cada total fins al mateix cèntim que TakeoffCraft. Encara no s'ha obert a Excel. Si un programa de full de càlcul mostra alguna cosa inesperada, l'exportació CSV conté el mateix pressupost com a valors simples.
