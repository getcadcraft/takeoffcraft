---
title: Copieu, enganxeu i dupliqueu marques
summary: Copieu marques amb els seus elements, enganxeu-les on cliqueu o al mateix lloc en un altre full, dupliqueu-les, retalleu, suprimiu i seleccioneu-ho tot, cadascuna en un sol pas per desfer.
keywords: copiar, enganxar, retallar, duplicar, enganxar al mateix lloc, porta-retalls, seleccionar-ho tot, netejar la selecció, marques múltiples, planta típica, repetir, mateix plànol, un altre full, copiar element, duplicar element
from: e20e9024
---

El grup {{ui:Edita}} de la barra d'eines conté {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}} i {{ui:Enganxa}}. El seu menú {{ui:Més}} té la resta, cadascuna amb la seva tecla: {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}} i {{ui:Neteja la selecció}}. Cadascuna d'elles es desfà en un sol pas amb {{key:Mod+Z}}.

## Selecciona les marques

1. Trieu {{ui:Selecciona}} ({{key:V}}) i feu clic en una marca.
2. Mantingueu {{key:Shift}} i feu clic en més marques per afegir-les. {{key:Shift}} + clic sobre una marca seleccionada la treu de la selecció.
3. O premeu {{key:Mod+A}} ({{ui:Selecciona-ho tot}}) per agafar totes les marques del full obert.

Amb diverses marques seleccionades, el tauler de la dreta mostra **Marques seleccionades**: quantes n'hi ha de cada element, amb {{ui:Copia}}, {{ui:Duplica}}, {{ui:Retalla}} i {{ui:Suprimeix les marques}}. Els punts de control de les cantonades només apareixen quan hi ha una marca seleccionada. {{key:Esc}} ({{ui:Neteja la selecció}}) buida la selecció.

## Copia i enganxa on cliqueu

1. Seleccioneu les marques i premeu {{key:Mod+C}} ({{ui:Copia}}). Les marques es copien amb els seus elements, incloent el preu descompost, la pèrdua i els costos de cada element.
2. Aneu al full on les voleu (pot ser el mateix full).
3. Premeu {{key:Mod+V}} ({{ui:Enganxa}}). Una còpia de línies discontínues segueix el punter.
4. Cliqueu on ha d'anar. El centre de les marques copiades cau al punter.

{{key:Esc}} cancel·la i no afegeix res. Les marques enganxades queden seleccionades després, així que {{key:Delete}} o {{key:Mod+Z}} les treu de nou.

Dins del mateix amidament, les marques enganxades van als mateixos elements, així que les seves quantitats se sumen a aquells elements. En un altre amidament (una altra pestanya, o després de {{ui:Nou}}), s'usa un element amb el mateix nom i tipus; altrament, l'element s'afegeix amb el seu preu descompost. Si el nom ja és d'un element d'un altre tipus, l'element afegit es diu "(nom) (còpia)".

Les marques enganxades van a l'{{ui:Àrea de pressupost}} escollida a la part superior del panell {{ui:Elements}} (o a cap). Vegeu [Àrees de pressupost](topic:bid-areas).

## Enganxa al mateix lloc

{{key:Mod+Shift+V}} ({{ui:Enganxa al mateix lloc}}) posa la còpia exactament al mateix lloc del full obert, segons la seva posició a la pàgina. Useu-la per a una planta típica: amidiu el nivell 2, copieu, obriu el nivell 3 i enganxeu al mateix lloc.

Enganxar al mateix lloc necessita un full de la **mateixa mida** que aquell del qual heu copiat. En un full d'una altra mida, TakeoffCraft ho diu i no enganxa res; useu {{ui:Enganxa}} i cliqueu. Sobre el full del qual heu copiat, la còpia cau damunt dels originals.

## L'escala ha de coincidir

Les longituds i les àrees depenen de l'escala del full. Un recorregut que mesura 10' a 1/4" = 1'-0" mesuraria 20' en un full a 1/8" = 1'-0". Per això TakeoffCraft enganxa recorreguts i àrees només en un full amb la **mateixa escala** que el full d'origen, i ho diu clarament quan no és així:

- El full obert encara no té escala: doneu-li'n una primer ([Estableix l'escala](topic:set-the-scale)), i després enganxeu.
- El full obert té una altra escala: el missatge en diu les dues escales. Enganxeu en un full de la mateixa escala.
- Els recomptes no necessiten escala: els recomptes copiats s'enganxen a qualsevol lloc.

## Duplica

{{key:Mod+D}} ({{ui:Duplica}}) copia les marques seleccionades i posa la còpia al punter de seguida; cliqueu on ha d'anar. No s'afegeix res fins que cliqueu, i {{key:Esc}} no deixa res. Duplicar no canvia el que {{ui:Enganxa}} enganxa.

## Retalla i suprimeix

- {{key:Mod+X}} ({{ui:Retalla}}) copia les marques seleccionades i les suprimeix. Enganxeu-les on pertoquen, o desfeu el retall.
- {{key:Delete}} o {{key:Backspace}} ({{ui:Suprimeix}}) suprimeix les marques seleccionades sense copiar-les.

## Copia un element

L'editor d'elements (sota **Elements**) acaba amb:

- {{ui:Copia la partida}}: copia l'element amb el seu preu descompost, la pèrdua i els costos, sense marques. {{ui:Enganxa}} després hi afegeix una còpia, en aquest amidament o en un altre.
- {{ui:Duplica la partida}}: afegeix una còpia de seguida, anomenada "(nom) (còpia)".

:::tip
La còpia es queda en aquest ordinador: es guarda en aquesta pestanya i a l'emmagatzematge del navegador, de manera que una altra pestanya de TakeoffCraft la pot enganxar. No es puja res, i no s'usa el porta-retalls del sistema, així que no podeu enganxar marques en altres programes.
:::

:::note
Una còpia prové d'un full alhora. Les marques s'enganxen tal com són: encara no hi ha manera de girar ni de fer la simetria d'una còpia.
:::
