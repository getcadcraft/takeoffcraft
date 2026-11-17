---
title: Mesura trams lineals
summary: Mesureu murs, canonades, cornises i altres longituds com a trams, amb segments rectes, arcs i l'ajust de 45 graus amb Shift.
keywords: lineal, longitud, tram, polilínia, murs, lf, peus lineals, arc, corba, 45 graus, orto, ajust, segments, polylength, deduir, obertura, porta, buit, entrada, coordenades, distància, distància directa, polar
from: c669deff
---

Un element lineal mesura una longitud. Cada tram és una cadena de punts: segments rectes, i arcs quan activeu el mode d'arc. Un element pot tenir qualsevol nombre de trams en qualsevol nombre de fulls.

Abans de començar: el full necessita una escala ([Estableix l'escala](topic:set-the-scale)) i cal un element lineal ([Crea elements d'amidament](topic:create-items)).

En un PDF vectorial, els clics s'ajusten a les pròpies línies del dibuix: extrems, punts mitjans i encreuaments ([Ajusta a les línies del dibuix](topic:snap-to-the-drawing); {{key:F3}} ho desactiva).

## Dibuixa un tram

1. Feu clic a l'element lineal sota {{ui:Elements}}.
2. Trieu {{ui:Lineal}} a la barra d'eines, o premeu {{key:L}}.
3. Feu clic a l'inici del tram.
4. Feu clic a cada cantonada al llarg del tram.
   La barra d'estat mostra "Longitud" (el tram fins ara, fins al punter) i "segment" (el segment que dibuixeu), en peus i polzades.
5. Acabeu el tram: feu doble clic a l'últim punt, premeu {{key:Enter}}, o feu clic dret.
   El tram es dibuixa del color de l'element i esdevé la marca seleccionada. La longitud de l'element a la llista {{ui:Elements}} i a la taula {{ui:Quantitats}} puja.

L'eina es queda a {{ui:Lineal}}, així podeu començar el següent tram de seguida. Premeu {{key:Esc}} per tornar a {{ui:Selecciona}}.

Mentre dibuixeu:

- {{key:Backspace}} (o {{key:Delete}}) elimina l'últim punt.
- {{key:Esc}} descarta el tram sense acabar.
- Arrossegar desplaça el full i la roda fa zoom, sense afegir punts.

:::mac
Al panell tàctil d'un Mac, el clic dret és un clic amb dos dits (activeu el clic secundari a Configuració del sistema, dins de Trackpad). TakeoffCraft només llegeix el botó secundari, de manera que un clic amb Control pot comptar com un clic simple i afegir un punt. Doble clic o {{key:Enter}} sempre acaben.
:::

:::touch
En una pantalla tàctil, toqueu per col·locar punts, arrossegueu amb un dit per desplaçar i pinceu amb dos per fer zoom. Acabeu amb una pressió llarga, un doble toc, o {{ui:Acaba}} a la barra sota el full ({{ui:Posterior}} retira l'últim punt). Vegeu [Resolució de problemes](topic:troubleshooting#touch-screens).
:::

## Línies rectes a passos de 45°

Mantingueu {{key:Shift}} mentre col·loqueu un punt. El segment des de l'últim punt s'ajusta a la direcció de 0°, 45°, 90° o 135° més propera, mantenint la longitud que heu arrossegat. La barra d'estat ho recorda: "Shift ajusta a 45°".

En mode d'arc s'aplica al lloc on acaba un arc: la corda de l'arc va a passos de 45° des del lloc on comença. El punt que feu clic sobre la corba mai no s'ajusta.

## Arcs i murs corbes

1. Mentre dibuixeu un tram, col·loqueu el punt on comença la corba.
2. Activeu el mode d'arc: trieu {{ui:Arc}} a la barra d'eines o premeu {{key:R}}. El botó es queda premut.
3. Feu clic en qualsevol punt de la corba, a la part del mig.
   La barra d'estat afegeix "(arc: feu clic on acaba)" i la vista prèvia es doblega passant pel vostre punt.
4. Feu clic on acaba la corba.
   S'afegeix l'arc. La seva longitud és la longitud exacta de l'arc, no una successió de cordes curtes.
5. Feu clic en un altre punt de la corba següent i en el seu final per continuar dibuixant arcs, o premeu {{key:R}} de nou per tornar als segments rectes.

{{key:Backspace}} o {{key:Esc}} primer descarten el punt pendent de la corba; premeu de nou per eliminar punts com de costum.

## Escriu longituds i coordenades

Després del primer punt, podeu escriure on va el següent en lloc de fer clic. Escriviu un dígit, `@` o `#`: s'obre un quadre {{ui:Entrada}} a la barra d'estat amb el que heu escrit. Premeu {{key:Enter}} per col·locar el punt; el quadre queda obert per al següent.

| Entrada | El punt següent va |
|---|---|
| `12'6"` | 12'-6" des de l'últim punt, cap al punter (assenyaleu la direcció i després escriviu la longitud) |
| `12'6"<45` | 12'-6" a 45°, comptat en sentit antihorari des de la dreta de la pantalla (`<90` és amunt, `<-90` avall) |
| `@6',-4'` | 6' a la dreta i 4' avall des de l'últim punt |
| `6',4'` (o `#6',4'`) | 6' a la dreta i 4' amunt des del primer punt d'aquest tram |

Les longituds s'escriuen com a tot arreu a TakeoffCraft ([Formats d'entrada](topic:entry-formats)): `12'-6 1/2"`, `12.5` (peus), `30"`, `3.2 m`. "Dreta" i "amunt" són tal com veieu el full, també quan la pàgina PDF està girada.

{{key:Enter}} en un quadre buit acaba el tram, com {{key:Enter}} al full; {{key:Esc}} tanca el quadre i manté el tram en curs. Els punts escrits segueixen les mateixes regles que els clics: deduccions, arcs i tancament d'àrees funcionen tots. El mateix quadre funciona a {{ui:Àrea}} i {{ui:Tall}}; després del centre d'un cercle agafa el radi.

## Deduïu una part d'un tram

Un tram de mur que passa per una porta o un aparador es pot dibuixar recte i només compta el mur: els segments a través de l'obertura són **deduccions**. Es dibuixen amb línies discontínues i fines, i no es compten.

Mentre dibuixeu:

1. Col·loqueu el punt on comença l'obertura.
2. Trieu {{ui:Dedueix}} a la barra d'eines o premeu {{key:E}}. El botó es queda premut i la barra d'estat indica que els segments següents són deduccions.
3. Feu clic on acaba l'obertura. El segment es dibuixa discontinu; "Longitud" a la barra d'estat no l'inclou.
4. Premeu {{key:E}} de nou i continueu al llarg del mur.

Després de dibuixar: seleccioneu el tram. Sota **Marca seleccionada**, cada segment té una casella {{ui:Dedueix}}: marqueu-la per deduir aquest segment, desmarqueu-la per tornar-lo a comptar. Cada canvi és un pas de desfer.

Un tram sempre manté almenys un segment que compta. El panell mostra llavors **Deduccions** (la longitud deduïda) i **Dibuixat** (tot el tram); **Longitud**, la quantitat de l'element, l'àrea del mur i els costos fan servir la longitud sense les deduccions. La vista de comprovació 3D deixa un espai al mur, el PDF marcat dibuixa les deduccions discontínues, i el full **Marques** exportat les enumera.

Moure una cantonada manté les deduccions. Afegir o treure punts (tornant a dibuixar el tram) comença sense elles.

## Mireu els detalls d'un tram

Trieu {{ui:Selecciona}} ({{key:V}}) i feu clic al tram. **Marca seleccionada** a la dreta mostra:

- l'element al qual pertany (trieu un altre element lineal a la llista per moure-hi el tram),
- el full,
- **Longitud** en peus i polzades i en LF,
- el nombre de **Segments**, i l'**Àrea del mur** quan l'element té alçada,
- la longitud de cada segment, amb "(arc)" després dels arcs, i la seva casella {{ui:Dedueix}}.

Al full, cada segment del tram seleccionat porta etiquetada la seva longitud.

## Corregeix un tram

- **Mou un punt**: seleccioneu el tram i arrossegueu una de les seves nanses quadrades de cantonada. Mantingueu {{key:Shift}} per ajustar el segment mogut a passos de 45°. Un arc conserva la seva curvatura.
- **Doblegueu un arc**: un tram seleccionat mostra una nansa rodona al mig de cada arc. Arrossegueu-la: l'arc passa pel lloc on la deixeu anar, de manera que es doblega més, menys o a l'altre costat. Si l'arrossegueu sobre la línia recta entre els seus extrems, esdevé un segment recte. {{key:Mod+Z}} ho desfà ("Dobla l'arc").
- **Suprimeix un tram**: seleccioneu-lo i premeu {{key:Delete}}, trieu {{ui:Suprimeix}} a la barra d'eines dins del menú {{ui:Més}}, o {{ui:Suprimeix la marca}} al panell.
- **Desfés**: {{key:Mod+Z}}; refer amb {{key:Mod+Y}}.

Encara no podeu inserir un punt al mig d'un tram. Suprimiu el tram i torneu-lo a dibuixar.

## Àrea del mur

Doneu a l'element lineal una {{ui:Alçada}} (per exemple `9'-0"`). Llavors informa de l'**Àrea del mur (A)** = longitud × alçada, en SF (o m² per a un element mètric), i l'àrea del mur va a la columna de notes de l'exportació del full de càlcul. Utilitzeu-la en conjunts per a fusta, pintura o aïllament: vegeu [Conjunts i fórmules](topic:assemblies).
