---
title: Configuració de TakeoffCraft
summary: Mostrar les polzades fins a 1/16, 1/8 o 1/4, començar les noves partides amb un percentatge de pèrdua, triar on comença el lliscador del recompte automàtic, ajustar-se a les línies del dibuix o a 45° sense mantenir Shift, definir quina amplada de porta tanca l'ompliment de sala, i triar l'indicador de cantonada de la vista 3D.
keywords: configuració, preferències, opcions, precisió, fraccions, polzades, arrodoniment, pèrdua, pèrdua per defecte, recompte automàtic, llindar, coincidència, lliscador, pas, referència, 45, angle, shift, cub de vista, icona d'eixos, indicador de cantonada, 3d
from: bca3f0ed
---

Obriu {{ui:Configuració}} amb la roda dentada de la barra de l'aplicació o amb {{key:Mod+,}}. La primera pestanya, {{ui:TakeoffCraft}}, conté la configuració pròpia d'aquesta aplicació; {{ui:General}} conté la que comparteixen totes les aplicacions de CadCraft (tema, taulers, barra d'eines). La configuració de TakeoffCraft només existeix dins de l'aplicació: la canvieu aquí, i aquest navegador la recorda. {{ui:Restableix la configuració de TakeoffCraft}} la torna al punt de partida.

## Peus i polzades

Mostreu les longituds fins a l'**1/16"** (el valor inicial), **1/8"** o **1/4"**. Això canvia com es llegeixen les longituds al full, als panells, a les quantitats i a la barra d'estat.

Només s'arrodoneix la visualització. Les quantitats, els costos i les exportacions es calculen a partir de les longituds exactes, i les exportacions sempre mostren 1/16".

## Pèrdua inicial

El percentatge de pèrdua amb què comença cada partida nova: 0% (el valor inicial), 2%, 3%, 5%, 7.5%, 10%, 15% o 20%. Encara podeu escriure una altra pèrdua per a cada partida, a l'editor de partides o directament a la taula de quantitats. Les partides que ja teniu conserven la seva pròpia pèrdua.

## Recompte automàtic: on comença el lliscador de coincidència

On és el lliscador {{ui:Coincidència}} quan acaba una cerca de [Recompte automàtic](topic:auto-count), del 50% al 95%; el 75% és el valor inicial. Com més baix, més semblants us ofereix per rebutjar; com més alt, n'ofereix menys. Podeu moure el lliscador durant cada revisió.

## Ajustar-se a les línies pròpies del dibuix

Activat en iniciar. Quan mesureu o calibreu, un punt a prop d'una línia del PDF salta al seu extrem, al seu punt mitjà, a una intersecció o al punt més proper. {{key:F3}} i {{ui:Pas}} a la barra d'estat també l'activen i desactiven. Més informació: [Ajustar-se a les línies del dibuix](topic:snap-to-the-drawing).

## Ompliment de sala: quina obertura tanca

{{ui:Omple una sala tancant les obertures fins a}} defineix quina amplada d'obertura de porta o d'espai l'eina {{ui:Sala}} considera tancada: de 3'-0" a 8'-0", 4'-0" al començament. Més ample que la porta més ampla fa que una sala s'estengui fins a la següent; més estret que una porta deixa la sala oberta. Consulteu [Omplir una sala amb un clic](topic:measure-areas#fill-a-room-with-one-click).

## Ajustar a 45° sense mantenir Shift

Desactivat en iniciar. Quan està activat, els recorreguts, els contorns, els talls i les cantonades arrossegades van a 0°, 45°, 90° o 135° des de l'últim punt sense mantenir {{key:Shift}}; mantingueu {{key:Shift}} per fer clic a qualsevol angle. La barra d'estat llavors diu "S'ajusta a 45°; Shift allibera l'angle". El punt on feu clic a la corba d'un arc i els cercles mai no s'ajusten; el final d'un arc sí.

## Mida del marcador de recompte

Com de grans són els punts de recompte: {{ui:Extra petita}}, {{ui:Petita}}, {{ui:Mitjana}} (el valor inicial: la mida que sempre han tingut els punts) o {{ui:Gran}}. La mida es manté a la pantalla a qualsevol zoom, i el PDF marcat dibuixa cada punt a la mateixa mida sobre el paper, sigui quina sigui la mida del full, de manera que el PDF al 100% es veu com la pantalla. Més informació: [Recompte manual](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indicador de cantonada

Només per a la [vista de comprovació 3D](topic:check-in-3d): {{ui:Cub de vista}} (el valor inicial: un cub a dalt a la dreta per fer clic, arrossegar i girar), {{ui:Icona d'eixos}} (un petit marcador X, Y, Z a baix a la dreta) o {{ui:Cap}}. Canvia de seguida i es guarda en aquest navegador. El full pla mai no en mostra cap.

## Eina de camí: el buit més gran per unir

{{ui:Eina de camí: el buit més gran per unir}} és la distància màxima entre dos extrems de línia perquè encara comptin com un sol camí, en punts de PDF (de 0.05 a 60; 1.5 al començament). Les línies d'un dibuix sovint s'aturen una mica abans de tocar-se. Un valor més gran en uneix més; un de més petit les manté separades. {{key:[}} i {{key:]}} el canvien mentre escolliu, i aquest camp se n'actualitza. Consulteu [Triar les línies](topic:pick-the-lines).
