---
title: Teclat i ratolí
summary: Totes les tecles i accions amb ratolí, panell tàctil i tàctil a TakeoffCraft, agrupades, amb les diferències entre plataformes.
keywords: tecles, dreceres, tecles de drecera, teclat, ratolí, panell tàctil, tàctil, desplaça, zoom, roda, clic dret, doble clic, espai, shift, copia, enganxa, retalla, duplica, selecciona-ho tot
from: 6f2c441d
---

Les tecles de lletra funcionen quan el punter és a qualsevol part de la pàgina i no esteu escrivint en un camp. Mentre hi ha un diàleg obert, s'apliquen les seves pròpies tecles. Les lletres funcionen amb o sense {{key:Shift}}.

## Eines

| Tecla | Eina |
|---|---|
| {{key:V}} | {{ui:Selecciona}} |
| {{key:L}} | {{ui:Lineal}} |
| {{key:A}} | {{ui:Àrea}} |
| {{key:O}} | {{ui:Cercle}} |
| {{key:B}} | {{ui:Sala}} (omple una sala amb un clic) |
| {{key:R}} | {{ui:Arc}} activat o desactivat (a Lineal, Àrea i Tall) |
| {{key:E}} | {{ui:Dedueix}} activat o desactivat: els segments següents d'un tram es dibuixen però no es compten |
| Un dígit, `@` o `#` mentre dibuixeu | Obre el quadre {{ui:Entrada}}: escriviu una longitud o coordenades, {{key:Enter}} col·loca el punt ([Mesura trams lineals](topic:measure-linear#type-lengths-and-coordinates)) |
| {{key:X}} | {{ui:Tall}} (selecciona primer una àrea) |
| {{key:C}} | {{ui:Recompte}} |
| {{key:S}} | {{ui:Recompte automàtic}} |
| {{key:K}} | {{ui:Calibra}} |
| {{key:D}} | {{ui:Comprova}} l'escala |

## Mentre dibuixeu

| Tecla o acció | Què fa |
|---|---|
| Clic | Col·loca un punt (un punt, amb Recompte). |
| {{key:P}} | Camí: selecciona tot el camí connectat d'una línia del PDF, o el contorn al voltant d'un clic ([Selecciona les línies del PDF](topic:pick-the-lines)). |
| {{key:F3}} | Ajusta a les línies del dibuix activat o desactivat ([Ajusta a les línies del dibuix](topic:snap-to-the-drawing)). |
| {{key:Shift}} mantingut mentre feu clic | Ajusta el segment a 0°, 45°, 90° o 135° des de l'últim punt. No per als punts d'arc ni per als cercles. |
| Doble clic | Acaba un tram, o tanca una àrea o un tall. |
| {{key:Enter}} | Acaba un tram, o tanca una àrea o un tall. |
| Clic dret (sense moure) | Acaba un tram, o tanca una àrea o un tall. |
| Clic al primer punt | Tanca una àrea o un tall (a partir del tercer punt). |
| {{key:Backspace}} o {{key:Delete}} | Suprimeix l'últim punt (primer el punt d'arc pendent). |
| {{key:Esc}} | Descarta el punt d'arc pendent; després cancel·la la marca sense acabar; després torna a {{ui:Selecciona}}. |

## Selecció i edició

| Tecla o acció | Què fa |
|---|---|
| Clic en una marca (eina Selecciona) | La selecciona i fa actual el seu element. |
| {{key:Shift}} + clic en una marca | L'afegeix a la selecció, o la treu. |
| {{key:Mod+A}} | Selecciona totes les marques del full obert. |
| Arrossega una nansa de cantonada | Mou aquell punt ({{key:Shift}} ajusta a 45°). Funciona quan hi ha una marca seleccionada. |
| {{key:Delete}} o {{key:Backspace}} | Suprimeix les marques seleccionades (quan no esteu dibuixant). |
| {{key:Esc}} | No selecciona res: neteja la selecció i la línia de comprovació. |
| {{key:Mod+Z}} | Desfés. |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refés. |

## Copia i enganxa

| Tecla | Què fa |
|---|---|
| {{key:Mod+C}} | Copia les marques seleccionades, amb els seus elements. |
| {{key:Mod+X}} | Retalla: copia les marques seleccionades i després les suprimeix. |
| {{key:Mod+V}} | Enganxa: la còpia segueix el punter; feu clic on ha d'anar. |
| {{key:Mod+Shift+V}} | Enganxa al mateix lloc: el mateix punt del full obert. |
| {{key:Mod+D}} | Duplica les marques seleccionades: la còpia segueix el punter; feu clic on ha d'anar. |
| {{key:Esc}} | No deixa res: cancel·la l'enganxament o la duplicació que és al punter. |

Les lletres soles encara trien eines ({{key:C}} és {{ui:Recompte}}, {{key:D}} és {{ui:Comprova}}, {{key:X}} és {{ui:Tall}}, {{key:V}} és {{ui:Selecciona}}, {{key:A}} és {{ui:Àrea}}); només {{key:Mod}} amb elles copia i enganxa. En un camp de text, aquestes tecles copien i enganxen text com de costum. Vegeu [Copia, enganxa i duplica marques](topic:copy-paste).

:::warning
{{key:Backspace}} suprimeix la marca seleccionada quan no esteu dibuixant. Si passa per accident, {{key:Mod+Z}} la recupera.
:::

## Fitxers

| Tecla | Què fa |
|---|---|
| {{key:Mod+O}} | {{ui:Obre plànols}} |
| {{key:Mod+S}} | {{ui:Desa l'amidament}} |

Aquestes dues funcionen fins i tot mentre escriviu en un camp.

## Vista i fulls

| Tecla o acció | Què fa |
|---|---|
| Roda del ratolí | Zoom endavant i endarrere sota el punter. |
| Arrossega (botó esquerre, central o dret) | Desplaça. A {{ui:Recompte automàtic}}, arrossegar amb el botó esquerre dibuixa el quadre de cerca. |
| {{key:Space}} mantingut + arrossega | Desplaça, en qualsevol eina. |
| {{key:F}} | {{ui:Ajusta la pàgina}} |
| {{key:W}} | {{ui:Ajusta l'amplada}} |
| {{key:Plus}} o {{key:=}} | Zoom endavant al centre de la vista. |
| {{key:Minus}} | Zoom endarrere al centre de la vista. |
| {{key:PageDown}} / {{key:PageUp}} | Full següent o anterior a la llista de fulls. |
| {{key:Ctrl+Shift+F}} | Canvia entre els modes de pantalla completa (Control a totes les plataformes, també al Mac). |
| {{key:F1}} | Obre o tanca aquesta ajuda, un tauler al costat. |
| {{key:3}} | La vista de comprovació 3D del full, activada o desactivada. |

## Vista 3D

| Tecla o acció | Què fa |
|---|---|
| Arrossega, o arrossega amb el botó central | Orbita. |
| {{key:Shift}} + arrossega, o arrossega amb el botó dret | Desplaça. |
| Roda del ratolí | Zoom sota el punter. Al panell tàctil, un lliscament de dos dits orbita i un pinçament fa zoom. |
| Clic | Selecciona la marca sota el punter ({{key:Shift}} + clic n'afegeix o n'treu). |
| {{key:F}} o {{key:W}} | Zoom a les extensions. |
| {{key:3}} | Torna al full pla. |

Vegeu [Comprova l'amidament en 3D](topic:check-in-3d).

## Recompte automàtic

| Tecla o acció | Què fa |
|---|---|
| Arrossega un quadre | Engloba el símbol a cercar (inicia la cerca). |
| Clic en un quadre de coincidència | El rebutja, o el restaura. |
| {{key:Esc}} | Cancel·la una cerca en curs, o descarta la revisió. |

## Ajuda

| Tecla | Què fa |
|---|---|
| {{key:F1}} | Obre o tanca el panell d'ajuda (també el botó {{ui:Ajuda}} de la barra de l'aplicació). Funciona a totes les eines, fins i tot mentre escriviu en un camp. |
| {{key:Esc}} | Tanca el panell d'ajuda. Al seu quadre de cerca, el primer Esc esborra la cerca. Mentre el panell és obert, un Esc premut després de fer clic al full tanca primer el panell; premeu-lo de nou per cancel·lar a TakeoffCraft. |

:::mac
A molts teclats de Mac, la fila superior controla la brillantor i el so. Premeu fn amb F1, o activeu "Usa les tecles F1, F2, etc. com a tecles de funció estàndard" a Configuració del sistema, dins de Teclat.
:::

## Diàlegs i camps

| Tecla | Què fa |
|---|---|
| {{key:Enter}} | En un camp: aplica el valor. Al diàleg de calibratge: {{ui:Estableix l'escala}}. |
| {{key:Esc}} | Tanca un diàleg (com {{ui:Cancel·la}}); tanca el formulari {{ui:Element nou}}. |
| {{key:Tab}} | Va al camp següent. |

## Notes de plataforma

:::mac
- {{key:Mod}} és la tecla Command: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}. Pantalla completa n'és l'excepció: Control+Shift+F.
- El clic dret és un clic amb dos dits al panell tàctil, quan el clic secundari està activat a Configuració del sistema, dins de Trackpad. TakeoffCraft només llegeix el botó secundari; un clic amb Control pot comptar com un clic simple i afegir un punt.
- Els dos dits que llisquen al panell tàctil fan zoom al full (no el desplacen). Per desplaçar-lo, premeu i arrossegueu, o mantingueu Espai i arrossegueu.
- Page Up i Page Down són fn amb les fletxes amunt i avall, als teclats que no les tenen.
- Backspace és la tecla que diu delete.
:::

:::windows
- {{key:Mod}} és Ctrl: {{key:Mod+Z}}, {{key:Mod+S}}, {{key:Mod+O}}.
- Al panell tàctil d'un portàtil, un lliscament de dos dits fa zoom al full. Per desplaçar-lo, premeu i arrossegueu.
:::

:::linux
- {{key:Mod}} és Ctrl. Alguns escriptoris fan servir dreceres pròpies amb Ctrl+Alt o Super; TakeoffCraft no n'utilitza cap.
- Al panell tàctil, un lliscament de dos dits fa zoom al full. Per desplaçar-lo, premeu i arrossegueu.
:::

:::touch
TakeoffCraft llegeix el tàctil com un únic punter:

- Un toc col·loca un punt, selecciona una marca o afegeix un punt de recompte.
- Arrossegar amb un dit desplaça el full (a {{ui:Recompte automàtic}} dibuixa el quadre de cerca).
- El pinçament per fer zoom encara no és compatible. Utilitzeu {{ui:Ajusta la pàgina}} i {{ui:Ajusta l'amplada}}, o {{key:Plus}} i {{key:Minus}} en un teclat.
- Per tancar una àrea, toqueu el seu primer punt. Per acabar un tram, feu un doble toc on el navegador el converteix en un doble clic, o premeu {{key:Enter}} en un teclat.
- No hi ha lectura de longitud en directe fins que toqueu, perquè no hi ha punter que passi per sobre.

Avui, un teclat i un ratolí o panell tàctil són la millor manera de fer amidaments.
:::

## Tecles que reserva el navegador

Els navegadors reserven algunes dreceres per a ells mateixos, i una pàgina no les pot fer servir: tancar la pestanya ({{key:Mod+W}}), pestanya o finestra nova ({{key:Mod+T}}, {{key:Mod+N}}) i el zoom del navegador ({{key:Mod+Plus}}, {{key:Mod+Minus}}). Per això TakeoffCraft fa zoom al full amb la roda i amb les tecles {{key:Plus}} i {{key:Minus}} sense modificadors. Si premeu {{key:Mod+Plus}} per error, tota la pàgina creix; {{key:Mod+0}} la torna a la mida. Vegeu [Tecles, ratolins i panells tàctils](common:keys).

## On és Mou

No hi ha cap ordre Mou: seleccioneu un punt de recompte i arrossegueu-lo, o seleccioneu una àrea o una línia i arrossegueu-ne les nanses de cantonada.
