---
title: Novetats de la 0.7
summary: Els dibuixos DWG i DXF s'obren com a fulls amb la seva pròpia escala, recomptes i longituds exactes del mateix dibuix, l'oferta de subcontractista escollida com a preu d'un paquet, invitacions a ofertes amb preus segellats, eines d'assistent per a dibuixos, i USD des de la vista de revisió 3D.
keywords: novetats, notes de la versió, registre de canvis, canvis, 0.7, versió, funcions noves, dwg, dxf, dibuix, disposicions, espai model, escala del dibuix, recompte des d'un dibuix, recompte CAD, blocs, blocs dinàmics, atributs, capes, xref, dibuix enllaçat, mesura del dibuix, polilínia, trama, PDF marcat, oferta escollida, usa una oferta, envia per a ofertes, invitació a oferta, ofertes segellades, obertura d'ofertes, tardana, registres de subcontractistes, csv, assistent, mcp, usd, usdz, unitats, llistes d'unitats, compacta, panells, diàlegs, portuguès
from: ad4f0df1
---

Aquests són els canvis de TakeoffCraft 0.7, respecte de la 0.6. Ara els dibuixos s'obren tal com són, sense haver de traçar-los abans a PDF, i un paquet d'ofertes pot anar als subcontractistes i tornar amb preus.

## Novetats

### Dibuixos DWG i DXF

- **Obre un dibuix com a fulls.** {{ui:Open plans}} del grup {{ui:File}} ({{key:Mod+O}}, o arrossega els fitxers) accepta dibuixos DWG i DXF al costat dels PDF. L'espai model i cada disposició es converteixen en fulls a la llista {{ui:Sheets}}, i un amidament pot cobrir dibuixos i PDF alhora. No es puja res. Consulta [Obre un dibuix DWG o DXF](topic:open-a-drawing).
- **L'escala ve del dibuix.** Una disposició comença a l'escala de la seva finestra gràfica més gran, amb el nom de la predefinició quan ho és, com 1/2" = 1'-0". El Model comença en les unitats del dibuix. Un dibuix sense unitats mostra "Sense escala" fins que el calibres. {{ui:Calibrate}}, {{ui:Check}} i {{ui:Preset}} encara tenen prioritat. Consulta [L'escala](topic:open-a-drawing#the-scale).
- **Capes i dibuixos enllaçats.** {{ui:Layers}} a la barra del full mostra o amaga les capes del dibuix. Les capes que el fitxer ha desactivat o congelat comencen amagades i no es compten tret que les triïs. Un dibuix enllaçat (xref) obert al costat del seu dibuix contenidor es dibuixa i es compta on està inserit; fins que no és obert, la barra d'estat diu què falta. Consulta [Capes](topic:open-a-drawing#layers).
- **El PDF marcat funciona des d'un dibuix.** {{ui:Export}} › {{ui:Marked PDF}} dibuixa primer com a PDF els fulls marcats d'un dibuix, perquè la còpia mostri les teves marques i la llegenda sense cap pas d'impressió. Es dibuixa en negre o en els colors del dibuix, sense taules d'estil de traçat. Consulta [Un PDF marcat](topic:export-estimate#a-marked-pdf).

### Recomptes i longituds exactes d'un dibuix

- **Compta el que el dibuix diu que hi ha.** {{ui:CAD count}} a la barra del full compta un bloc pel nom (inclosos els blocs imbricats, els estats de blocs dinàmics i les matrius de blocs), tot d'un tipus en una capa, o un valor de text o d'atribut. Compta el que mostra el full o tot el dibuix, una vegada. Afegir les marques és un sol pas per desfer, i tornar a comptar només afegeix el que és nou. {{ui:Auto count}} es manté per als PDF i per als símbols que no són blocs. Consulta [Recompte des d'un dibuix](topic:count-from-a-drawing).
- **Mesura des de les línies pròpies del dibuix.** {{ui:Measure drawing}} pren les línies, els arcs, les polilínies, els cercles, les trames i els sòlids que cliquis o que triïs amb una finestra, com a marques d'un element lineal o d'àrea. Els arcs, els bulges i els forats d'una trama surten exactes; les el·lipses i les splines es mesuren en cordes fines, i la barra ho indica. Consulta [Mesura des d'un dibuix](topic:measure-from-a-drawing).

### Ofertes

- **Usa l'oferta d'un subcontractista com a preu del paquet.** A {{ui:Export}} › {{ui:Bid packages and leveling…}}, tria {{ui:Use}} en una oferta. Els elements del paquet es mantenen com a quantitats, una línia **Oferta escollida** porta el preu, els elements que l'oferta deixa fora es queden amb el teu propi cost, i les despeses generals, el benefici i la fiança s'hi apliquen. Canviar d'oferta és un sol pas per desfer; el llibre de càlcul i el resum d'ofertes ho porten. Consulta [Usa una oferta com a preu del paquet](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Envia un paquet a ofertes.** {{ui:Send for bids…}} sota un paquet envia per correu a cada subcontractista un enllaç a una pàgina que no requereix compte: veuen l'abast i els fulls en PDF, escriuen un preu a cada línia o la marquen com a no inclosa, afegeixen notes i fins a tres fitxers, o declinen. {{ui:Get prices}} recull el que ha tornat i ho posa al full de nivellació, marcat **web**. L'enviament només està obert als comptes que l'equip de CadCraft hagi habilitat mentre es prova (vegeu més avall). Consulta [Envia un paquet a ofertes](topic:bid-invitations).
- **Segellades fins a l'obertura.** Els preus poden quedar segellats fins a una hora d'obertura que tu fixes: fins llavors ningú no veu cap preu, tu inclòs. A l'obertura apareix cada oferta de cop, i una oferta que arriba després de la data límit es marca com a tardana. Consulta [Ofertes segellades i l'obertura](topic:bid-invitations#sealed-bids-and-the-opening).
- **Registres de subcontractistes.** El teu compte a getcadcraft.com guarda els contactes, els oficis, les respostes de qualificació i les dates d'assegurança i de llicència de cada empresa (marcades una vegada passades o si venen en menys de 30 dies), amb les seves ofertes anteriors. Importa'ls i exporta'ls en CSV, i tria'ls quan envies un paquet. Consulta [Al web](topic:bid-invitations#on-the-website).

### Assistents d'IA

- **Els assistents poden afegir a l'amidament.** Amb **Edita** marcat, el teu propi assistent pot afegir elements (`items_add`) i mesurar trams, àrees i recomptes en un full (`marks_add`; només longituds i àrees en un full amb escala), i cada crida és un sol pas per desfer.
- **Eines d'assistent per a dibuixos.** En un DWG o DXF obert, un assistent pot llistar els seus fulls i el que es pot comptar, comptar amb exactitud, afegir les marques de recompte i mesurar des de la geometria del dibuix. Sense TakeoffCraft obert, el servidor MCP de CadCraft obre un dibuix com a amidament nou i el desa, i `cadcraft count` compta des de la línia d'ordres. Consulta [Què pot demanar un assistent](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **La vista de revisió 3D com a USD.** {{ui:USD package (.usdz)}} al costat de {{ui:GLB}} a la vista de revisió 3D escriu cada paret, forjat, placa, poste de recompte i tram com un objecte propi, amb el nom del seu element i la seva quantitat, en metres. Un assistent també la pot exportar (`usd_export`). Consulta [Exporta la vista de revisió 3D com a USD](topic:usd).

## A totes les aplicacions

- **Unitats.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} té una llista per a la longitud, l'àrea, el volum, l'angle i la pendent, amb les mides exactes que donen les definicions de les unitats (el peu d'agrimensura dels EUA és una unitat pròpia). Desactiva les unitats que no fas servir i desapareixen de les llistes; marca'n una com a preferida i el treball nou començarà amb ella. Un fitxer sempre conserva la seva pròpia unitat. A TakeoffCraft, les llistes {{ui:Unit}} d'un element segueixen els interruptors, un element nou comença amb la longitud o l'àrea marcada com a preferida, els quadres de coberta (SQ), les acres i les hectàrees són unitats d'àrea noves, i una caixa de longitud accepta el símbol de qualsevol unitat, com `3 yd`. Consulta [Unitats, valors escrits i les llistes d'unitats](common:unit-lists).
- **Disposició més densa i panells que es recullen.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada panell lateral té una barra de títol prima: arrossega-la per acoblar o deixar flotant el panell, deixa-la sobre la barra d'un altre panell per compartir un marc amb pestanyes, fixa'l perquè es reculli fins a la vora, o amaga'l i recupera'l des de la vora. Consulta [Organitza els panells](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossega un diàleg per la seva barra de títol perquè no tapi el dibuix; tornarà on l'havies deixat. Fes doble clic a la barra de títol per tornar-lo a centrar. Consulta [Mou un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per a assistents d'IA.** Deu peticions d'exemple per al teu propi assistent (ordenar un dibuix, traçar un conjunt, comprovar dibuixos, fer preguntes a un model, sumar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna verificada pels nostres tests. Les aplicacions no contenen IA. Consulta [Receptes per a assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les aplicacions, com a esborranys que encara no ha revisat un parlant natiu. Els temes d'ajuda són en anglès.
- **CadCraft Studio** diu per què una comprovació d'actualització ha fallat (encara no hi ha fitxer per al teu sistema, no hi ha xarxa, una signatura incorrecta) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que has tancat fins que hi hagi una versió més nova.

## Encara no en aquesta versió

- **La 0.7 no està signada amb codi.** La signatura i el paquet de la Microsoft Store passen a la 0.8, perquè la validació del certificat encara no ha arribat. Comprova el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, tria {{ui:More info}} i després {{ui:Run anyway}}. En un Mac, la primera vegada, fes clic dret a CadCraft Studio i tria Obre. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha cap versió per a iPad ni per a iPhone.
- Les llistes d'angle i de pendent de {{ui:Units}} es desen, però cap camp encara les llegeix.
- **Les invitacions a ofertes estan desactivades per a la majoria de comptes.** Mentre la funció es prova, el correu als licitadors externs només surt des de comptes que l'equip de CadCraft hagi habilitat. Les pàgines dels licitadors funcionen per a totes les invitacions ja enviades. Per a la resta: baixa el {{ui:Scope CSV}}, envia'l tu mateix per correu i escriu les ofertes.
- Una finestra de CadCraft Studio encara no pot enviar invitacions a ofertes: diu que facis servir TakeoffCraft al navegador. Obrir un amidament amb sol·licituds enviades, la nivellació i triar una oferta funcionen a Studio.
- Les addenda, les cartes d'adjudicació, un full d'abast que signa cada licitador i els recordatoris automàtics abans que caduqui una data d'assegurança no estan fets. Una oferta escollida no recalcula l'àrea de pressupost d'una alternativa.
- Dibuixos: les taules d'estil de traçat i els fitxers CTB no s'apliquen, un DXF binari es rebutja (desa'l com a DXF ASCII o DWG), els dibuixos enllaçats només es troben entre els fitxers oberts pel nom del fitxer, i els PDF de fons, les imatges i els objectes OLE d'un dibuix no es dibuixen ni es compten. Els recomptes i les escales s'han comprovat amb dibuixos de mostra, encara no amb dibuixos d'una obra real oberts al programa que els va fer.
- Un assistent pot afegir elements i marques, però no pot moure, canviar ni esborrar marques que ja hi són.

Tot el que falta és a [Encara no implementat](topic:not-built-yet).
