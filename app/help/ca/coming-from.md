---
title: Vinguda d'altres programes d'amidament
summary: Com els hàbits dels programes d'amidament especialitzats i de les eines de marcatge de PDF es corresponen amb TakeoffCraft, i les diferències que fan tropessar la gent.
keywords: canvi, migrar, condicions, peces, eines de mesura, llista de marques, enllaç de quantitat, hàbits d'amidament, diferències, comparar
from: 12004ce5
---

Si heu fet amidaments amb PlanSwift o amb les eines de mesura de Bluebeam Revu, la major part de TakeoffCraft us semblarà familiar: un joc de plànols, una escala per full, les coses que mesureu i un total valorat. La manera com encaixen les peces és diferent en alguns punts, i aquests punts són a continuació.

Si coneixeu PlanSwift o On-Screen Takeoff, trieu l'estil de menú {{ui:Taula d'amidament}} a {{ui:Configuració}} › {{ui:TakeoffCraft}} › {{ui:Menus, tecles i ratolí}}: una barra de menús amb Fitxer, {{ui:Edita}}, Visualitza, {{ui:Escala}}, Amidament, {{ui:Elements}}, {{ui:Marques}} i {{ui:Exporta}} sobre una fila de les eines d'amidament, amb les predefinides d'escala a la barra del full. Vegeu [Menus, tecles i ratolí](topic:menus-keys-and-mouse).

## Hàbits equivalents

| Esteu acostumats a | A TakeoffCraft |
|---|---|
| Obrir una obra o un projecte que guarda els plànols (PlanSwift) | Obriu els PDF i el fitxer `.takeoff.json` del projecte un al costat de l'altre. El projecte guarda només l'amidament; els PDF continuen sent els vostres fitxers. |
| Una llista de marques amb notes, núvols i ressaltats (Bluebeam) | {{ui:Marques}} a la barra del full: notes, núvols i ressaltats amb un estat (Obert, Contestat, Tancat), llistats sota **Marques** i dibuixats al PDF marcat. Vegeu [Notes, núvols i ressaltats](topic:markups). |
| Mesures desades com a marques dins del PDF (Bluebeam) | L'amidament viu al fitxer `.takeoff.json`. {{ui:PDF marcat}} escriu una còpia amb l'amidament dibuixat, per compartir; {{ui:PDF amb l'amidament a dins}} escriu una còpia que porta l'amidament, per reobrir-la a TakeoffCraft. |
| Elements d'amidament (PlanSwift), eines de mesura personalitzades desades a la Tool Chest (Bluebeam) | **Elements** sota {{ui:Elements}}: nom, tipus, {{ui:Color}}, {{ui:Unitat}}, {{ui:Alçada}} o {{ui:Profunditat}}, {{ui:Pèrdua %}}, tarifes. |
| Peces i conjunts amb fórmules (PlanSwift) | El {{ui:Preu descompost}} de l'element: components amb una fórmula que usa `L H A N P`. |
| Establir l'escala de la pàgina, o calibrar-la (totes dues) | Llista de {{ui:Predefinida}} o {{ui:Calibra}} al grup {{ui:Escala}}, per full. {{ui:Comprova}} mesura una dimensió coneguda. |
| Aplicar una escala a un interval de pàgines | Encara no: establiu cada full. |
| Finestres gràfiques amb escales diferents en un mateix full (Bluebeam) | Encara no: una escala per full. |
| Eines de longitud de polilínia i àrea (Bluebeam), amidament lineal i d'àrea (PlanSwift) | {{ui:Lineal}} ({{key:L}}) i {{ui:Àrea}} ({{key:A}}). |
| Mantenir {{key:Shift}} per a les línies rectes | {{key:Shift}} s'ajusta a passos de 45°, la mateixa idea. |
| Ajustar-se a les línies del dibuix | Activat per defecte: extrems, punts mitjans, interseccions i el punt més proper d'una línia, amb {{key:F3}} per desactivar-ho, com en els programes de CAD. |
| Eina de recompte (totes dues) | {{ui:Recompte}} ({{key:C}}). |
| Cerca visual de símbols (Bluebeam) | {{ui:Recompte automàtic}} ({{key:S}}): envoleu un símbol, reviseu i afegiu. |
| Talls o deduccions en àrees | {{ui:Tall}} ({{key:X}}) sobre una àrea seleccionada, i talls rodons. |
| Deduccions en recorreguts lineals | Dibuixeu el recorregut recte, sense interrupció, i premeu {{key:E}} ({{ui:Dedueix}}) per a l'obertura. Vegeu [Mesura recorreguts lineals](topic:measure-linear). |
| Segments d'arc en una polilínia | {{ui:Arc}} ({{key:R}}): feu clic en un punt de la corba i després en el seu extrem. |
| La llista de Marques amb columnes de quantitat (Bluebeam) | La taula {{ui:Quantitats}}, {{ui:Per element}} o {{ui:Per full}}. |
| Graella de pressupost amb preus (PlanSwift) | La mateixa taula: pèrdua, material i mà d'obra per unitat, totals desenvolupats i {{ui:Total de l'obra}}. |
| Exportar a Excel | {{ui:XLSX}} amb fórmules vives, o {{ui:CSV}}. |
| Escape per aturar una eina | {{key:Esc}} cancel·la i torna a {{ui:Selecciona}}. |
| Clic dret per acabar | Aquí també, el clic dret acaba un recorregut o tanca una àrea. No hi ha menú del clic dret. |

## Diferències que fan tropessar

**L'amidament no és dins del PDF.** Res del que feu no canvia els PDF. Deseu el fitxer `.takeoff.json` i guardeu-lo amb els plànols. Enviar a algú el PDF marcat no li envia un amidament editable: envieu el fitxer del projecte i els PDF originals, o un [PDF amb l'amidament a dins](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**Els PDF s'associen pel contingut, no pel nom.** Un full revisat desat sobre el nom de fitxer antic és un fitxer nou per a TakeoffCraft, sense escala i sense marques. Les marques antigues es queden a la versió antiga i continuen comptant. Vegeu [Deseu i reobriu un amidament](topic:save-and-reopen#when-a-pdf-has-changed).

**Les marques sense escala s'exclouen, no es compten com a zero.** Si un full no té escala, els seus recorreguts i àrees no compten, i la taula diu "Incomplet". En molts programes només veuríeu 0. Vegeu [Estableix l'escala](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**No hi ha endevinació de la mida de la pàgina.** Les predefinides suposen que el PDF s'imprimeix a mida completa. Un PDF a mitja mida o "ajustat a la pàgina" necessita {{ui:Calibra}}. Useu sempre {{ui:Comprova}}.

**Un element, un tipus principal, més si ho demaneu.** Un element és lineal, d'àrea o de recompte, i el seu tipus es bloqueja quan té marques. Una condició que us dóna tant àrea com el seu perímetre és un element d'àrea: el seu perímetre és la variable `P`. Una paret amb longitud i àrea és un element lineal amb una alçada. Per a un element de diverses condicions, com una habitació amb un terra, una base i portes, marqueu els altres tipus a {{ui:Mesura també}}: cadascun té la seva pròpia fila de preu. Vegeu [Un element, diversos tipus de marques](topic:create-items#one-item-several-kinds-of-marks).

**Les fórmules s'apliquen sobre els totals.** Les fórmules dels conjunts usen els totals de l'element a tots els fulls, no cada recorregut per separat. `N` (el nombre de recorreguts o àrees) hi és per a extres per recorregut, com un muntant extra per paret.

**El perímetre inclou els talls.** La `P` d'una àrea afegeix les vores dels seus forats. Vegeu [Mesura àrees amb talls](topic:measure-areas#read-the-area).

**Arrossegar desplaça.** Un arrossegament amb el botó esquerre sobre el full desplaça, en totes les eines excepte {{ui:Recompte automàtic}}. No cal canviar mai a una eina de desplaçament. La roda fa zoom; no desplaça.

**Una còpia de recuperació, no un núvol.** TakeoffCraft guarda una còpia del vostre treball en aquest navegador i us la ofereix després d'una fallada ([Si la pestanya o el navegador s'aturen](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), però l'amidament el heu de desar vosaltres: {{key:Mod+S}}. El desament al núvol encara no està disponible.

**Tot és al navegador.** No cal instal·lar res, i els plànols mai no es pugen. Per a una aplicació d'escriptori, TakeoffCraft forma part de CadCraft Studio, amb les altres set aplicacions.

## Encara no hi és

Les regions d'escala per full encara no estan implementades. Vegeu [Què encara no està implementat](topic:not-built-yet) per a la llista completa i què fer en lloc d'això.
