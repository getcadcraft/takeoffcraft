---
title: Selecciona les línies del PDF
summary: Cliqueu una línia d'un PDF vectorial per mesurar tot el camí connectat, o cliqueu dins d'un contorn tancat per la seva àrea, amb la tolerància de buit visible i un desfer per segment.
keywords: camí, selecciona, línies, connectades, recorregut sencer, traça, contorn, perímetre, buit, tolerància, pont, segments, tab, vectorial, àrea des de línies, p
from: c22526ae
---

En un PDF vectorial els murs i les vores són línies reals. {{ui:Camí}} ({{key:P}}) les pren tal com estan dibuixades: un clic sobre una línia mesura tot el que hi està unit, d'extrem a extrem, de manera que no cal traçar un mur cliquant-ne les cantonades. El full necessita una escala. Una pàgina escanejada no té línies per seleccionar; hi useu [Lineal](topic:measure-linear) o [Àrea](topic:measure-areas).

## Seleccionar un camí o un contorn

1. Trieu {{ui:Camí}}. La línia sota el punter es ressegueix, amb els altres camins que hi podrien ser, en línia fina.
2. Cliqueu una línia: se selecciona tot el camí connectat. La barra sota la barra d'eines indica els seus segments, la longitud, la tolerància de buit i quants buits s'han salvat. Un camí que torna al seu inici és tancat, i també informa del seu perímetre.
3. O cliqueu dins d'un contorn tancat, lluny de qualsevol línia: el contorn que hi ha al voltant d'aquell punt se selecciona com a àrea. Primer surt el més petit; {{key:Tab}} prova el següent més gran.
4. Premeu {{key:Enter}} (o feu clic dret, o doble clic) per afegir les marques. Un camí seleccionat esdevé una marca d'un element **lineal**, i un contorn una marca d'un element d'**àrea**: l'element actiu si és d'aquest tipus, si no el més nou d'aquest tipus. Sense cap, s'obre el formulari de nou element i no s'afegeix res fins que premeu {{key:Enter}} de nou. Tot el que s'ha seleccionat s'afegeix en un sol pas de desfer.

## La tolerància de buit

Els delineants deixen petits forats on les línies haurien de trobar-se. Dues línies s'uneixen quan els seus extrems són més a prop que la **tolerància de buit**. Comença a 1.5 punts sobre el full (es mostra en peus i polzades a l'escala del full), i un anell discontinu d'aquesta amplada segueix el punter i se situa a cada extrem del camí que hi ha sota. Cada forat salvat es marca en taronja en un camí seleccionat, i la barra els compta.

{{key:]}} amplia la tolerància, {{key:[}} la redueix. Un camí seleccionat es torna a unir de seguida amb la nova tolerància. En una unió, el camí continua recte, pel gir que menys es doblega, i deixa la branca.

## Tecles

| Tecla o acció | Què fa |
|---|---|
| Clic | Selecciona el camí sota el punter, o el contorn que hi ha al voltant. |
| {{key:Shift}} + clic | Afegeix un altre camí o contorn al que ja és seleccionat. |
| {{key:Tab}} | Prova el següent camí sota el punter, o el següent contorn més gran. |
| {{key:Backspace}} o {{key:Mod+Z}} | Treu l'últim segment de l'últim camí seleccionat, un segment cada vegada. Un camí sense segments es treu. Sense res seleccionat, {{key:Mod+Z}} és el desfer ordinari. |
| {{key:[}} i {{key:]}} | Tolerància de buit més estreta i més amplia. |
| {{key:Enter}} | Afegeix les marques. |
| {{key:Esc}} | Neteja el que és seleccionat. |

## Bon a saber

- Una corba del dibuix és una cadena de trossos rectes curts, de manera que la seva longitud és una mica més curta que la de l'arc real. Per a un arc exacte, mesureu el fitxer propi del dibuix ([Mesura des d'un dibuix](topic:measure-from-a-drawing)).
- Un buit salvat compta com un salt recte a través, de manera que el perímetre d'un contorn tancat l'inclou.
- Només els traços i els farciments dels camins de la pàgina són línies. El text dibuixat com a lletres, i les imatges, no ho són.
