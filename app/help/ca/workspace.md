---
title: La pantalla de TakeoffCraft
summary: Un recorregut per la finestra segons el nom en pantalla: la barra d'eines, la llista de fulls, el full, el panell d'Elements, la taula de Quantitats i la barra d'estat.
keywords: pantalla, disposició, cinta, navegador de projecte, caixa d'eines, quadre d'informació, barra d'eines, llista de fulls, panell d'elements, quantitats, barra d'estat, recorregut, interfície
from: ab1115e0
---

TakeoffCraft omple la finestra del navegador sota la barra d'aplicació de CadCraft. De dalt a baix i d'esquerra a dreta:

| Part | On | Per a què serveix |
|---|---|---|
| Barra d'aplicació | A dalt de tot | El nom de l'aplicació, la versió, {{ui:About TakeoffCraft}}, {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), el botó {{ui:Full screen}} i el commutador de tema {{ui:Paper}} / {{ui:Model}}. |
| Barra d'eines | Sota la barra d'aplicació | Totes les ordres, en grups: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Fulls | Esquerra | Cada pàgina de cada PDF obert, amb una miniatura, la seva escala i el nombre de marques. |
| El full | Al mig | La pàgina oberta. Aquí mesures. |
| Elements | Dreta | Els teus elements d'amidament, la configuració de l'element seleccionat i la marca seleccionada. |
| Quantitats | A baix | Quantitats i costos per element o per full, i el total de l'obra. |
| Barra d'estat | A baix de tot | El mesurament en directe, els missatges, la pista de 45° i el zoom. |

## La barra d'eines

Passa el ratolí sobre qualsevol botó per veure què fa i quina tecla té.

| Grup | Botons |
|---|---|
| {{ui:File}} | {{ui:New}} (amidament buit), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (un projecte `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Un menú: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}), i la llista {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, un interruptor on/off), {{ui:Deduct}} ({{key:E}}, un interruptor on/off), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), i {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

L'eina que fas servir es mostra premuda. Els botons {{ui:Arc}} i {{ui:Deduct}} es queden premuts mentre estiguin activats.

## Fulls (esquerra)

- **Cerca fulls** filtra la llista pel nom del full, el nom del fitxer o l'etiqueta de la pàgina.
- Cada full mostra una miniatura (dibuixada a mesura que desplaces la llista), el seu nom i la seva escala o **Sense escala**.
- A la dreta de cada fila es mostra quantes marques té el full. Mentre un element està ressaltat, mostra quantes marques d'aquell element hi ha al full.
- Fes clic en un full per obrir-lo. {{key:PageDown}} i {{key:PageUp}} van al full següent i a l'anterior de la llista.
- Quan un amidament cobreix PDF que no són oberts, una nota sota la llista els anomena. Consulta [Desa i torna a obrir un amidament](topic:save-and-reopen).

Els noms dels fulls vénen del PDF: una etiqueta de pàgina com `A-101` esdevé el nom del full. Una pàgina sense etiqueta es nomena segons el seu fitxer i el seu número de pàgina, com "Plànols, pàgina 3". Amb diversos PDF oberts, els fulls amb etiqueta també mostren el nom del fitxer.

## El full (al mig)

- La barra sota el full mostra el nom del full i la seva escala, o "No hi ha escala encara: tria una predefinició o calibra". Els seus botons són: {{ui:MarkupCraft}} (quan aquesta aplicació pot rebre el PDF; consulta [Inicia un amidament i obre un conjunt de plànols](topic:open-plan-set)), {{ui:Compare}} (una versió anterior del full sobre aquest: [Compara un full revisat](topic:compare-revisions)), "(n) per revisar" (marques marcades, quan n'hi ha) i {{ui:3D}} (la [vista de revisió 3D](topic:check-in-3d)).
- Abans que s'obri cap PDF, al mig es mostra una guia curta de cinc passos.
- La roda del ratolí fa zoom sobre el punter. Arrossega per desplaçar. Consulta [Teclat i ratolí](topic:keyboard).
- Mentre fas servir {{ui:Auto count}}, apareix a la part superior del full una barra amb els seus controls.

## Elements (dreta)

A dalt, la llista {{ui:Bid area}}: l'edifici, la planta o la fase on van les noves marques ([Àrees de pressupost](topic:bid-areas)).

- {{ui:New item}} obre un formulari petit: un nom, un tipus ({{ui:Linear (length)}}, {{ui:Area}} o {{ui:Count}}) i {{ui:Add}}.
- La llista mostra el color de cada element, la icona del tipus, el nom i la quantitat. Fes clic en un element per dibuixar-hi i ressaltar les seves marques a cada full. Torna a fer-hi clic per deixar de ressaltar-lo.
- Sota la llista, **Element: (name)** és l'editor d'elements: nom, tipus, color, unitat, alçada o profunditat, pèrdua, tarifes de material i de mà d'obra, els valors mesurats i el {{ui:Assembly}}. Consulta [Crea elements d'amidament](topic:create-items).
- **Marca seleccionada** apareix quan selecciones una marca: a quin element pertany, el seu full, els seus mesuraments i botons com {{ui:Add a cut-out}} i {{ui:Delete mark}}. Amb diverses marques seleccionades es converteix en **Marques seleccionades**: quants de cada element hi ha, i {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} i {{ui:Delete marks}}.
- L'editor d'elements acaba amb {{ui:Copy item}} i {{ui:Duplicate item}}: un element amb el seu muntatge i costos, però sense marques. Consulta [Copia, enganxa i duplica marques](topic:copy-paste).

## Quantitats (a baix)

- {{ui:By item}} llista cada element i els seus components de muntatge amb quantitat, pèrdua, tarifes i costos estesos. Pots escriure directament a la taula la pèrdua i les tarifes.
- {{ui:By sheet}} llista la quantitat de cada element a cada full.
- Apareix un avís que comença per **Incomplet:** quan alguna cosa queda fora dels totals.
- {{ui:Job total}} és a la dreta de la capçalera.
- La fletxa de l'extrem dret amaga o mostra la taula per donar més espai al full.

Consulta [Llegeix les quantitats i el pressupost](topic:read-quantities).

## Barra d'estat (a baix)

D'esquerra a dreta: el mesurament en directe mentre dibuixes (longitud, àrea, radi o un resultat de comprovació), la caixa {{ui:Type}} quan escrius una longitud, els missatges de TakeoffCraft, el recordatori "Shift ajusta a 45°" (o "Ajusta a 45°; Shift allibera l'angle" quan això està activat a [Configuració](topic:settings)), el botó {{ui:Snap}} (ajust a les línies del dibuix, actiu quan està ressaltat; {{key:F3}}) i el percentatge de zoom.

:::tip
Mira la barra d'estat quan alguna cosa no passa. TakeoffCraft hi explica per què ha rebutjat un clic, per exemple "Aquest full encara no té escala".
:::

## Altres disposicions

Tot l'anterior és la disposició {{ui:CadCraft classic}}, la d'inici. {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} ofereix dues més; les mateixes eines i tecles funcionen en les tres, i si tries de nou {{ui:CadCraft classic}} torna a posar cada control al seu lloc.

| Disposició | A TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | La {{ui:Takeoff ribbon}} a dalt ([Menús, tecles i ratolí](topic:menus-keys-and-mouse)), una barra per a l'eina en ús, una pestanya per a cada full que obres (el Model i les disposicions d'un dibuix també són fulls) amb les predefinicions d'escala i {{ui:Fit page}} sota el full. El panell esquerre conté {{ui:Properties}} (l'element, la nota o la marca seleccionats) sobre el {{ui:Takeoff browser}}: {{ui:Sheets}} (fes clic en un per obrir-lo en una pestanya), {{ui:Conditions}} (fes clic en un per dibuixar-hi) i {{ui:Estimate}} (el total de cada element i el total de l'obra); les miniatures són la seva segona pestanya. |
| {{ui:Toolbox and info box}} | La barra d'eines sobre el full, un quadre d'informació amb {{ui:Bid area}}, l'eina en ús o la selecció i la barra del full, una columna de les eines d'amidament a l'esquerra, una pestanya per a cada full, i {{ui:Snap}} i el zoom sota el full. |

Mentre la [vista de revisió 3D](topic:check-in-3d) és oberta, les pestanyes dels fulls i la barra sota el full es retiren; tanca la vista 3D per tornar a mesurar. En un telèfon sempre s'usa la disposició de telèfon.

## Pantalla completa i temes

El botó {{ui:Full screen}} de la barra d'aplicació, o {{key:Ctrl+Shift+F}} (Control en totes les plataformes, també en un Mac), passa per les modes normal, pantalla completa i pantalla completa amb les barres amagades. Amb les barres amagades, mou el punter a la vora superior per tornar-les a mostrar.

{{ui:Paper}} és el tema clar i {{ui:Model}} el fosc. En {{ui:Model}} el dibuix es mostra invertit (línies clares sobre fons fosc) només a la pantalla; les exportacions mai no es canvien.
