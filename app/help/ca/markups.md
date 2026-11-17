---
title: Notes, núvols i ressaltats
summary: Marqueu preguntes i canvis als fulls amb notes, núvols de revisió i ressaltats, feu el seguiment de cadascun com a obert, respost o tancat, i envieu-los al PDF marcat.
keywords: marca, marques, nota, comentari, pregunta, rfi, núvol, núvol de revisió, ressalt, estat, obert, respost, tancat, revisió, llista de marques
from: 2b395c13
---

Les marques serveixen per al que heu de recordar o demanar mentre feu l'amidament: "confirmeu el tipus de base", un núvol de revisió al voltant d'un mur canviat, una nota ressaltada al plànol. Són sobre el full amb un estat, es llisten en un sol lloc i s'imprimeixen al PDF marcat. **Mai es compten**: no tenen quantitat ni cost.

## Afegeix-ne una

Obriu {{ui:Marques}} a la barra de sobre del full i trieu:

| Marca | Com |
|---|---|
| {{ui:Nota}} | Feu clic on ha d'anar, escriviu la nota i trieu {{ui:Afegeix}}. Es mostra com un pin rodó amb la seva primera línia al costat. |
| {{ui:Núvol}} | Feu clic en una cantonada, després a l'oposada, i escriviu una nota (o deixeu-la buida). Un núvol de revisió amb arcs envolta el quadre. |
| {{ui:Ressalta}} | Feu clic en dues cantonades: un quadre groc transparent, amb una nota si voleu. |

{{key:Esc}} després de la primera cantonada cancel·la. L'eina es queda activa per a la següent; {{key:V}} torna a {{ui:Selecciona}}.

## Estat i edició

Feu clic en una marca amb {{ui:Selecciona}} per seleccionar-la. El panell de la dreta mostra **Marca**: el seu tipus i full, el seu **Estat** (Obert, Respost o Tancat) i el seu text, que podeu canviar. {{key:Delete}} (o {{ui:Suprimeix}}) l'elimina; {{key:Mod+Z}} la recupera.

El pin d'una nota és taronja mentre està obert, blau quan s'ha respost i gris quan es tanca; un núvol tancat es torna gris.

## La llista

**Marques** al panell de la dreta llista totes les marques de l'amidament amb el seu estat, i indica quantes encara estan obertes. Marqueu **Només obertes** per veure què queda per resoldre. Feu clic en una fila per anar al seu full i seleccionar-la.

## Compartiu-les

- {{ui:PDF marcat}} les dibuixa a les pàgines: ressaltats, núvols i pins, cadascun amb un quadre que indica el seu estat en majúscules (OBERT, RESPOST, TANCAT) i el seu text. Una pàgina amb marques però sense marques d'amidament també s'hi inclou.
- {{ui:XLSX}} afegeix un full **Marques**: full, tipus, estat i text, una fila per cadascuna.
- Es desen al fitxer `.takeoff.json` i en un [PDF amb l'amidament a dins](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
