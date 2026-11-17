---
title: Mesura àrees amb talls
summary: Delimiteu terres, sostres i lloses, traieu-hi forats, afegiu-hi vores corbes, cercles i talls circulars, i llegiu l'àrea i el perímetre.
keywords: omplir sala, omplir per flux, galleda de pintura, clic dins d'una sala, àrea automàtica, back-out, backout, descompte, columna, pou, deduir de diversos elements, àrea, polígon, contorn, peus quadrats, sf, tall, forat, deduir, cercle, rodó, arc, perímetre, terra, sostre, llosa
from: 34648db7
---

Un element d'àrea mesura l'àrea tancada. Cada contorn pot tenir forats tallats (un pou, una columna, una jardinera), i les seves vores poden ser rectes o corbes.

Abans de començar: el full necessita una escala ([Estableix l'escala](topic:set-the-scale)) i cal un element d'àrea ([Crea elements d'amidament](topic:create-items)).

## Delimita una àrea

1. Feu clic a l'element d'àrea sota {{ui:Elements}}.
2. Trieu {{ui:Àrea}} a la barra d'eines, o premeu {{key:A}}.
3. Feu clic a cada cantonada de la sala o de la llosa, per ordre. Mantingueu {{key:Shift}} per a les vores de 0°, 45° i 90°.
   Des del tercer punt, el contorn s'omple i la barra d'estat mostra "Àrea" i "perímetre". Apareix un petit anell al voltant del primer punt.
4. Tanqueu el contorn: feu clic al primer punt (dins del seu anell), premeu {{key:Enter}}, feu doble clic o feu clic dret.
   L'àrea s'omple lleugerament del color de l'element, s'etiqueta amb els seus peus quadrats i esdevé la marca seleccionada.

{{key:Backspace}} elimina l'última cantonada; {{key:Esc}} descarta el contorn.

Un contorn que es creua amb ell mateix es rebutja: "El contorn es creua amb ell mateix, de manera que la seva àrea seria incorrecta. Torneu a dibuixar-lo sense creuar-lo." Dibuixeu una figura de vuit com a dues àrees.

## Vores corbes

Mentre delimiteu, activeu el mode d'arc ({{ui:Arc}} o {{key:R}}). Després d'una cantonada, feu clic en un punt de la corba i després on acaba la corba. Per tancar el contorn amb una corba, feu l'últim clic sobre el primer punt. L'àrea i el perímetre fan servir la corba exacta. Premeu {{key:R}} de nou per a les vores rectes. Per canviar una corba després, seleccioneu l'àrea i arrossegueu la nansa rodona del mig de l'arc. Vegeu [Mesura trams lineals](topic:measure-linear#arcs-and-curved-walls).

## Un cercle

1. Amb un element d'àrea, trieu {{ui:Cercle}} o premeu {{key:O}}.
2. Feu clic al centre.
3. Feu clic a qualsevol punt de la vora.
   Mentre us moveu, la barra d'estat mostra el radi i l'àrea. El cercle s'afegeix com una marca d'àrea amb àrea i perímetre exactes.

## Omple una sala amb un clic

Quan les sales estan dibuixades com a murs tancats, {{ui:Sala}} ({{key:B}}) treu un terra amb un sol clic:

1. Trieu un element d'àrea (un acabat de terra, per exemple) i doneu escala al full.
2. Trieu {{ui:Sala}} al grup {{ui:Amidament}}, o premeu {{key:B}}.
3. Feu clic dins d'una sala, a terra lliure (no sobre una línia o una etiqueta).

TakeoffCraft llegeix les línies del full, troba l'espai al voltant del clic i en delimita el contorn seguint les cares interiors dels murs, com una àrea de l'element actual. Les obertures de porta de fins a **4'-0"** es consideren tancades, de manera que el contorn passa recte per la porta. **Configuració › TakeoffCraft › Omple sala tanca obertures fins a** canvia aquesta amplada (de 3'-0" a 8'-0"). Els noms de les sales, els mobles i els accessoris dins de la sala no fan forats.

Es rebutja i en diu el motiu quan:

- el clic és sobre una línia ("Això és sobre una línia");
- l'espai no és tancat: una obertura més ampla que la configuració deixa que s'escapi fins a la vora del full. Augmenteu la configuració, o delimiteu aquella sala a mà amb {{ui:Àrea}};
- l'espai és petit (un símbol, no una sala).

Quan una porta és més ampla que la configuració, l'omplert entra a la sala següent i en delimita totes dues juntes: desfeu ({{key:Mod+Z}}), augmenteu la configuració i torneu a fer clic. Comproveu el contorn com qualsevol àrea: arrossegueu-ne les cantonades per corregir-lo. Un full escanejat funciona igual, però les seves línies han de ser prou fosques; el traç gris clar pot impedir que l'omplert s'aturi.

## Talla un forat en una àrea

1. Trieu {{ui:Selecciona}} ({{key:V}}) i feu clic a l'àrea. Mostra nanses quadrades a les cantonades.
2. Trieu {{ui:Tall}} a la barra d'eines (o premeu {{key:X}}), o {{ui:Afegeix un buit}} sota **Marca seleccionada**.
3. Feu clic a les cantonades del forat, dins de l'àrea. El mode d'arc també funciona aquí.
4. Tanqueu-lo com una àrea: feu clic al primer punt, premeu {{key:Enter}}, feu doble clic o feu clic dret.
   El forat queda sense omplir, i la barra d'estat diu "S'ha afegit un tall. Dibuixeu-ne un altre, o premeu Esc."
5. Dibuixeu més forats a la mateixa àrea, o premeu {{key:Esc}}.

Per a un forat rodó, trieu {{ui:Afegeix un buit circular}} sota **Marca seleccionada**, feu clic al seu centre i després en un punt de la seva vora.

Un tall ha d'estar totalment dins de l'àrea i no pot solapar-se amb un altre tall. Si no, TakeoffCraft el rebutja: "Un tall ha d'estar totalment dins de l'àrea." o "Els talls no es poden solapar entre ells."

Per treure'n l'últim forat, trieu {{ui:Elimina l'últim buit}}.

## Descomptes: columnes, pous i obertures treses de diversos elements

Un tall pertany a una sola marca d'àrea. Un **descompte** es dibuixa una vegada i es treu de cada àrea que solapa, per als elements que trieu: dibuixeu les columnes una vegada, i se'n treuen alhora l'acabat de terra, el sostre i la llosa.

1. Feu-ne un element d'àrea, com "Columnes".
2. A la configuració de l'element, marqueu **Descompte: les seves marques treuen la seva àrea d'altres elements**. Apareix una llista dels vostres altres elements d'àrea, tots marcats: desmarqueu els que els descomptes no han de tocar (la pintura de les parets, per exemple).
3. Mesureu les columnes amb {{ui:Àrea}} o {{ui:Cercle}}, com de costum. Cadascuna es dibuixa amb línies discontínues.

Cada marca d'àrea d'un element marcat del mateix full perd la part que cobreix un descompte: tot el descompte quan queda dins, només la part solapada quan creua la vora, i res dins d'un tall. El panell de l'àrea seleccionada mostra **Descomptes** i l'àrea que queda. La quantitat de l'element, les seves fórmules dels conjunts, els costos, la vista de comprovació 3D i l'exportació fan servir l'àrea que queda; les notes del pressupost indiquen quant han tret els descomptes. L'element de descompte en si mateix compta la seva pròpia àrea (deixeu-ne els costos a zero si no el valoreu).

Un descompte ha de ser **convex**: un rectangle, un cercle o qualsevol contorn sense cantonada cap a dins. TakeoffCraft rebutja dibuixar-ne un que no ho sigui; dibuixeu un pou en forma de L com a dos descomptes. Els descomptes no poden tenir talls, i dos descomptes que es solapen entre ells compten tots dos.

El perímetre (`P`) no canvia: els descomptes només treuen àrea.

## Llegeix l'àrea

Seleccioneu l'àrea. **Marca seleccionada** mostra:

| Línia | Significat |
|---|---|
| Àrea | L'àrea neta: contorn menys talls. Això és el que compta l'element. |
| Contorn | L'àrea bruta dins del contorn (es mostra quan hi ha talls). |
| Talls | Quants forats hi ha, i la seva àrea total. |
| Perímetre | La longitud de la vora del contorn, **més** les vores de cada tall ("amb talls"). |

El perímetre inclou intencionadament les vores dels talls, per exemple per a encofrats de vora o base que també van al voltant d'un forat. Si només necessiteu la vora exterior, deixeu els forats fora d'aquest element o mesureu la vora exterior com a tram lineal.

La {{ui:Unitat}} de l'element decideix com s'informa el total: SF, SY o m². El panell **Marca seleccionada** i la barra d'estat sempre mostren peus quadrats.

## Corregeix una àrea

- **Mou una cantonada**: seleccioneu l'àrea i arrossegueu una nansa de cantonada (els forats també en tenen). Si la nova forma es creuaria amb ella mateixa o empenyeria un forat fora, la cantonada es torna a posar al seu lloc: "El punt s'ha tornat a posar."
- **Mou a un altre element**: trieu un altre element d'àrea a la llista **Element** sota **Marca seleccionada**.
- **Suprimeix**: {{key:Delete}}, {{ui:Suprimeix}} a la barra d'eines dins del menú {{ui:Més}}, o {{ui:Suprimeix la marca}}.

## Profunditat per a volums

Doneu a l'element d'àrea una {{ui:Profunditat}} (per exemple `0'-4"` per a una llosa) i feu servir `A * H / 27` en un component de conjunt per obtenir iardes cúbiques. Vegeu [Conjunts i fórmules](topic:assemblies).
