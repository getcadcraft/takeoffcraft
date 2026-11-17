---
title: Resolució de problemes
summary: Símptomes, causes i solucions dels missatges i les sorpreses que pots trobar a TakeoffCraft, citats tal com els mostra l'aplicació.
keywords: problemes, errors, no funciona, solució, ajuda, rebutjat, no mesura, sense escala, marques que falten, exportació fallida, sense connexió, tàctil
from: cd319c9b
---

TakeoffCraft explica la majoria de rebutjos a la barra d'estat de la part inferior de la finestra. Busca el missatge a continuació.

## Obrir fitxers

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| The PDF reader could not load. Reload the page to try again. | El lector de PDF de l'aplicació no s'ha carregat, normalment perquè no tens connexió i mai no s'ha desat per usar sense connexió. | Torna a connectar-te i carrega de nou. Després tria {{ui:Desa per fer-lo servir sense connexió}} i espera {{ui:Disponible sense connexió}}; vegeu [Treballar sense connexió](common:offline). |
| (name) is password-protected. Open an unprotected copy. | El PDF necessita una contrasenya per obrir-se. | Demana una còpia sense protecció, o treu la contrasenya amb un programa de PDF de confiança. |
| (name) could not be read as a PDF (…) | El fitxer està malmès o no és realment un PDF. | Baixa'l de nou, o torna'l a desar des del programa que el va fer. |
| (name) is already open. | El mateix PDF (mateix contingut) ja és obert. | No cal fer res. |
| TakeoffCraft opens PDFs and .takeoff.json projects. Skipped: … | S'han descartat altres tipus de fitxer. | Converteix primer els dibuixos a PDF. |
| Nothing happens when I drop files | Els fitxers s'han deixat anar fora de la finestra del navegador, o el navegador ha obert el PDF en una pestanya nova. | Deixa'ls anar sobre la mateixa pàgina de TakeoffCraft; el marc "Drop PDFs or a .takeoff.json" indica quan funcionarà. |
| Opening a big set takes a while | Cada PDF es llegeix sencer per generar-ne una empremta. | Espera que desaparegui el missatge "Opening (name)…". Les miniatures s'omplen en desplaçar-te. |

## Mesurar

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Open a PDF first. | No hi ha cap full obert. | Obre un PDF. |
| This sheet has no scale yet, so it can't be measured. Pick a preset scale or calibrate first (counts work without one). | Les eines lineal, àrea, cercle i tall necessiten una escala. | [Defineix l'escala](topic:set-the-scale). |
| Crea primer un element lineal (dona-li nom a Elements) i després fes clic al full. | No hi ha cap element d'aquest tipus. | Omple el formulari {{ui:Element nou}} que s'ha obert i tria {{ui:Afegeix}}. |
| Tria primer un element per amidar (tauler Elements). | L'element actual s'ha suprimit. | Fes clic a un element sota {{ui:Elements}}. |
| Un recorregut necessita almenys dos punts. | Has acabat després d'un sol clic. | Fes clic en almenys dos punts. |
| Una àrea necessita almenys tres punts. | Hi ha massa poques cantonades. | Fes clic en almenys tres cantonades. |
| El contorn es creua amb si mateix, de manera que la seva àrea seria errònia. Dibuixa'l de nou sense creuar-lo. | Una forma de vuit. | Dibuixa'l com a dues àrees, o recorre la vora en ordre. |
| Aquests punts no tanquen cap àrea. | Tots els punts són en una mateixa línia. | Fes clic en cantonades que tanquin un espai. |
| Selecciona primer una marca d'àrea (eina Selecciona), després tria Tall i dibuixa el forat a dins. | {{ui:Tall}} necessita una àrea seleccionada. | Prem {{key:V}}, fes clic a l'àrea i després {{key:X}}. |
| Un tall ha d'estar completament dins de l'àrea. | El forat creua el contorn o en surt. | Dibuixa el forat dins de l'àrea. |
| Els talls no es poden solapar entre ells. | Dos forats se solapen. | Dibuixa un forat que els inclogui tots dos, o mantén-los separats. |
| … The point was put back. | Una cantonada arrossegada faria que el contorn es creués amb si mateix o que un forat quedés fora. | Arrossega a un lloc que mantingui la forma vàlida. |
| Fes clic en un punt de la vora del cercle, lluny del centre. | El segon clic era massa a prop del centre. | Fes clic més enfora. |
| Els clics desplacen el full en lloc d'afegir punts | El punter s'ha mogut més d'uns quants píxels mentre el botó estava premut; això compta com un arrossegament. | Fes clic sense moure't, sobretot amb el panell tàctil. |
| Shift no ajusta | Estàs col·locant un punt en un arc, o dibuixant un cercle. | L'ajust de 45° només s'aplica als segments rectes. |
| Els punts salten a una línia propera | El pas a les línies del dibuix està activat. | Amplia la vista per fer clic entre línies, o prem {{key:F3}} per desactivar el pas. |
| No apareix cap marcador d'ajust | El pas està desactivat, el full és un escaneig, o l'eina no ajusta (Recompte, Recompte automàtic, enganxar). | Prem {{key:F3}}; en un escaneig no hi ha línies a les quals ajustar-se. |
| La longitud és incorrecta | L'escala és incorrecta (sovint un PDF redimensionat amb una predefinida). | Usa {{ui:Comprova}} sobre una cota coneguda i després {{ui:Calibra}}. |

## Escala

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Tria dos punts més separats. | Els punts de calibratge són gairebé l'un sobre l'altre. | Calibra sobre una cota més llarga. |
| Un missatge al diàleg de calibratge, com ara "That distance could not be read" | La distància està en un format que TakeoffCraft no pot llegir. | Vegeu [Introducció de longituds, tarifes i percentatges](topic:entry-formats). |
| Aquest full encara no té escala, així que no hi ha res a comprovar. Calibra'l o tria una predefinida. | {{ui:Comprova}} en un full sense escala. | Defineix primer una escala. |
| La llista {{ui:Predefinida}} està en gris | No hi ha cap full obert. | Obre un PDF. |

## Quantitats i fórmules

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Incomplet: … (no inclòs als totals) | Un error de fórmula, o marques en fulls sense escala. | Vegeu [Llegir quantitats i el pressupost](topic:read-quantities#the-incomplete-warning). |
| +(n) sense escala al costat d'un element | Algunes de les seves marques són en fulls sense escala. | Dona una escala a aquells fulls. |
| Error de fórmula: … | La fórmula no es pot calcular. | Vegeu [Llenguatge de fórmules](topic:formulas#errors). |
| Aquest element té marques, així que el seu tipus no es pot canviar. | El tipus queda bloquejat quan hi ha marques. | Crea un element nou de l'altre tipus i torna a dibuixar les marques amb ell. |
| Un element necessita un nom. | El camp del nom s'ha buidat. | Escriu un nom. |
| Escriu un import com 12.50. / Escriu un percentatge com 10 o 7.5. | No s'ha pogut llegir una tarifa o una pèrdua. | Vegeu [Introducció de longituds, tarifes i percentatges](topic:entry-formats). |
| Un total sembla duplicat | L'element té tarifes pròpies i components que porten el mateix cost. | Posa les tarifes pròpies de l'element a 0 quan els seus components porten el cost. |
| Les marques d'aquest element són en PDF que no estan oberts. | Has fet clic en un element les marques del qual són totes en PDF que no has obert. | Obre aquests PDF; els seus noms apareixen sota {{ui:Fulls}}. |

## Recompte automàtic

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Aquest rectangle és massa petit. Dibuixa'l al voltant de tot el símbol. | El rectangle és minúscul. | Amplia la vista i enquadra tot el símbol. |
| Aquest rectangle és gairebé buit. Dibuixa'l al voltant d'un símbol. | El rectangle només conté paper. | Enquadra el símbol mateix. |
| Cap coincidència. Baixa el control lliscant de coincidència, o enquadra el símbol més ajustadament. | Cap símbol no ha puntuat prou. | Enquadra el símbol més ajustadament, o arrossega el control {{ui:Coincidència}} més avall. |
| Massa coincidències, incloent-hi símbols erronis | Símbols semblants puntuen a prop del real. | Puja el control {{ui:Coincidència}} i fes clic als rectangles erronis per rebutjar-los. |
| Falten coincidències en altres fulls | Aquests fulls dibuixen el símbol a una altra mida, o a un angle que no és un pas de 90°. | Cerca en aquests fulls amb un rectangle dibuixat allà, o compta a mà. |
| (n) fulls eren massa grans per cercar-hi a aquesta mida de símbol. | El full seria massa gran a la mida de treball. | Enquadra un símbol més gran, o compta aquell full a mà. |
| La cerca ha fallat: … | La cerca en segon pla s'ha aturat. | Torna-ho a provar; carrega de nou la pàgina si es repeteix (desa primer). Sense connexió, només funciona quan la barra de l'aplicació mostra {{ui:Disponible sense connexió}}. |
| Arrossegar dibuixa un rectangle en lloc de desplaçar | Així funciona {{ui:Recompte automàtic}}. | Mantén {{key:Space}} i arrossega, o arrossega amb el botó central. |

## Desar i exportar

| Missatge o símptoma | Causa | Solució |
|---|---|---|
| Encara no hi ha res per exportar: crea un element i amida'l. | No hi ha cap element. | Crea primer un element. |
| Encara no hi ha marques als PDF oberts. | {{ui:PDF marcat}} no té res on dibuixar als PDF oberts. | Obre els PDF que tinguin marques. |
| Aquest PDF està protegit amb contrasenya o xifrat, així que no es pot escriure una còpia marcada. … | El PDF està xifrat. | Exporta {{ui:XLSX}} en lloc d'això, o fes servir una còpia sense xifrar del PDF (llavors necessita el seu propi amidament, ja que és un fitxer diferent). |
| No s'ha pogut escriure el PDF marcat: … | Sovint: sense connexió, i l'aplicació no es va desar per usar sense connexió, de manera que falta l'escriptor de PDF. | Connecta't i tria de nou {{ui:PDF marcat}}. Per evitar-ho, tria {{ui:Desa per fer-lo servir sense connexió}} i espera {{ui:Disponible sense connexió}}. |
| Només s'ha baixat un PDF marcat | El navegador ha bloquejat diverses baixades alhora. | Permet diverses baixades per a aquest lloc i torna a exportar. |
| (fitxer) no és un projecte de TakeoffCraft (no és un JSON vàlid). / Aquest no és un fitxer de projecte de TakeoffCraft. | Fitxer equivocat, o un de malmès. | Selecciona el fitxer `.takeoff.json`. |
| Aquest projecte s'ha desat amb un TakeoffCraft més nou. Obre'l allà. | El fitxer ve d'una versió més nova. | Obre'l en la versió més nova. |
| (n) marques s'han malmès i s'han deixat fora. | Part del fitxer s'ha malmès o s'ha editat a mà. | La resta s'ha obert. Torna a dibuixar les marques que falten, o obre una còpia més antiga. |
| Falten marques en tornar a obrir | Els PDF no estan oberts, o un d'ells ha canviat. | Vegeu [Desar i tornar a obrir un amidament](topic:save-and-reopen#when-a-pdf-has-changed). |
| El navegador pregunta "Leave site?" | Hi ha canvis sense desar. | Queda't aquí i desa amb {{key:Mod+S}}. |

## Tecles i ratolí

| Símptoma | Causa | Solució |
|---|---|---|
| Les tecles de lletres no fan res | El cursor és en un camp (cerca, editor d'elements, taula). | Fes clic al full, o prem {{key:Tab}} per sortir del camp. |
| La roda fa zoom en lloc de desplaçar | La roda sempre fa zoom al full. | Arrossega per desplaçar. |
| Tota la pàgina s'ha fet més gran o més petita | Zoom del navegador ({{key:Mod+Plus}} o {{key:Mod+Minus}}). | Prem {{key:Mod+0}}. Fes zoom al full amb la roda o amb {{key:Plus}} i {{key:Minus}} sols. |
| Una marca ha desaparegut en prémer Backspace | Backspace suprimeix la marca seleccionada quan no dibuixes. | {{key:Mod+Z}} la torna a posar. |
| El clic dret no acaba en un Mac | El clic amb Control arriba com a clic normal. | Fes servir un clic amb dos dits amb el clic secundari activat, o prem {{key:Enter}}. |

## Pantalles tàctils

En una pantalla tàctil:

- **Un toc** col·loca un punt (o selecciona una marca amb {{ui:Selecciona}}). Un dit que arrossega desplaça la vista.
- **Dos dits** pessiguen per fer zoom sobre el punt que hi ha entre tots dos, i desplacen quan es mouen junts. Posar un segon dit cancel·la el que havia començat el primer, de manera que un pessic mai no deixa un punt.
- **Acaba** un recorregut o un contorn amb una **pulsació llarga** (el clic dret), un **doble toc**, o {{ui:Acaba}} a la barra de la part inferior del full. La mateixa barra té {{ui:Posterior}} (torna enrere l'últim punt) i {{ui:Cancel·la}}. Les àrees també es tanquen tocant el primer punt.
- Els dits tenen àrees de toc més grans: els punts s'ajusten, es tanquen i se seleccionen des de més lluny, i les nanses de les cantonades són més grans.

Escriure longituds necessita un teclat; el teclat en pantalla funciona quan el camp {{ui:Entrada}} està seleccionat.

En una tauleta, un teclat i un ratolí o un panell tàctil faciliten molt l'amidament.

## Treballar sense connexió

| Botó o símptoma | Causa | Solució |
|---|---|---|
| {{ui:Could not save}} | Alguns fitxers de l'aplicació no s'han baixat en desar per usar sense connexió. | Comprova la connexió i tria de nou el botó. |
| {{ui:Offline not available}} | Les finestres privades i alguns ordinadors gestionats bloquegen les còpies sense connexió. | Fes servir una finestra normal, o un altre navegador. |
| "Saving…" never starts | No tens connexió; desar necessita una connexió. | Desa mentre tinguis connexió. |
| L'aplicació és antiga després d'una actualització | La còpia sense connexió és d'un dia anterior. | En línia, tria {{ui:Disponible sense connexió}} i després {{ui:Torna a desar (obté la versió més recent)}}. |
| Vols recuperar l'espai | La còpia sense connexió ocupa uns 6 MB. | Tria {{ui:Disponible sense connexió}} i després {{ui:Elimina la còpia sense connexió}}. |

Vegeu [Treballar sense connexió](common:offline).

## Encara no funciona

Carrega de nou la pàgina si l'aplicació deixa de respondre. L'amidament es perd en carregar de nou si no l'has desat, així que, si pots, desa primer amb {{key:Mod+S}}. Per a preguntes sobre el navegador, vegeu [Navegadors i ordinadors](common:browsers).
