---
title: Comença un amidament i obre un joc de plànols
summary: Obriu un o diversos PDF com a joc de plànols, trobeu els fulls i desplaceu-vos entre ells.
keywords: obre, joc de plànols, diversos pdf, fitxers múltiples, fulls, dibuixos, etiquetes de pàgina, llista de fulls, navega, arrossega, lliurament, obre en una altra aplicació, marques
from: ed434468
---

Un joc de plànols sovint són diversos PDF: arquitectònic, estructural, mecànic. TakeoffCraft els obre un al costat de l'altre com una sola llista de fulls, i un sol amidament pot cobrir-los tots.

## Obrir els PDF

1. Trieu {{ui:Obre plànols}} al grup {{ui:Fitxer}}, o premeu {{key:Mod+O}}. (Els altres estils de menú l'anomenen {{ui:Obre PDF…}}.)
2. Al diàleg de fitxers, seleccioneu tots els PDF del joc. Mantingueu premut {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} per triar-ne diversos, o {{key:Shift}} per triar un interval.
3. Trieu Obre.
   Mentre es llegeix cada fitxer es mostra un missatge "S'obre (nom)…". Després, cada pàgina apareix sota {{ui:Fulls}} i s'obre la primera pàgina del primer PDF nou.

També podeu arrossegar els PDF des de {{pick:mac=Finder|windows=Explorador de fitxers|linux=el vostre gestor de fitxers}} i deixar-los anar en qualsevol lloc de TakeoffCraft. Mentre els arrossegueu, apareix un marc "Deixeu anar PDF, dibuixos DWG o DXF, o un .takeoff.json".

Per afegir més PDF més endavant, feu el mateix de nou. Els PDF que ja són oberts s'ometen.

La pantalla inicial també llista els PDF i els amidaments que heu obert recentment, en navegadors que deixen que una pàgina torni a obrir un fitxer (Chrome i Edge). Cliqueu-ne un per obrir-lo; el navegador pot demanar-ne permís primer. Vegeu [Els vostres fitxers](common:your-files).

:::note
Res no es puja. El navegador llegeix els PDF al vostre ordinador, i en desapareixen de TakeoffCraft quan tanqueu la pestanya o trieu {{ui:Nou}}.
:::

## Dibuixos al costat dels PDF

{{ui:Obre plànols}} també accepta dibuixos DWG i DXF, sols o junts amb PDF: l'espai model i les presentacions de cada dibuix es converteixen en fulls a la mateixa llista. Vegeu [Obre un dibuix DWG o DXF](topic:open-a-drawing), i després [Compta des d'un dibuix](topic:count-from-a-drawing).

## Un PDF lliurat des d'una altra aplicació

Una altra aplicació de la família pot lliurar-vos el PDF que té obert: obre TakeoffCraft en una pestanya nova, i el PDF s'obre allà com si l'haguéssiu arrossegat. La barra d'estat diu "S'ha obert (nom), lliurat des de (aplicació). El fitxer original no ha canviat." No es puja res; el fitxer passa per l'emmagatzematge propi d'aquest navegador i en desapareix quan s'obre.

Si la barra d'estat diu que el PDF "no ha arribat", la pestanya ha esperat massa o el PDF ja era obert en una altra pestanya: obriu-lo amb {{ui:Obre plànols}}.

A l'inrevés, quan MarkupCraft s'executa on sou i pot rebre un fitxer, la barra de fulls sota el dibuix té un botó {{ui:MarkupCraft}}: obre el PDF del full a la pantalla a MarkupCraft, en una pestanya nova, per revisar-lo i afegir-hi marques.

## Trobar un full

- Desplaceu la llista {{ui:Fulls}} a l'esquerra i cliqueu un full.
- Escriviu a **Cerca fulls** a la part superior de la llista per filtrar per número de full, nom de fitxer o etiqueta de pàgina. El recompte al costat de {{ui:Fulls}} mostra "3 de 40" mentre hi ha un filtre actiu.
- Premeu {{key:PageDown}} per al full següent i {{key:PageUp}} per a l'anterior. Segueixen la llista tal com està filtrada.

:::mac
En un teclat de Mac sense les tecles Page Up i Page Down, premeu fn amb la fletxa amunt o avall.
:::

## Com es nomenen els fulls

- Una pàgina que el PDF etiqueta, com `A-101`, es nomena per aquesta etiqueta.
- Una pàgina sense etiqueta (o amb una etiqueta que és només el seu número de pàgina) es diu "(nom del fitxer), pàgina (n)".
- Amb diversos PDF oberts, els fulls etiquetats també porten el nom del fitxer: "A-101 — Arquitectònic".

Els noms dels fulls encara no es poden escriure a mà.

## Mirar un full

- Gireu la roda del ratolí per fer zoom al punt del cursor.
- Arrossegueu amb el botó esquerre o el del mig per desplaçar. Amb {{ui:Recompte automàtic}}, o quan comenceu sobre la cantonada d'una marca, mantingueu premut {{key:Space}} mentre arrossegueu, o arrossegueu amb el botó del mig.
- Premeu {{key:F}} o trieu {{ui:Ajusta la pàgina}} per veure tot el full; {{key:W}} o {{ui:Ajusta l'amplada}} n'ajusta l'amplada.
- Premeu {{key:Plus}} o {{key:=}} per fer zoom endavant, i {{key:Minus}} per fer-lo enrere, al voltant del centre de la vista.

Cada full recorda el seu propi zoom i la seva posició mentre està obert.

## Següent

Abans de poder mesurar un full, cal que tingui una escala: [Defineix l'escala](topic:set-the-scale).
