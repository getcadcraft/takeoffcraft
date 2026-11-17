---
title: Recompte automàtic d'un símbol
summary: Dibuixa un quadre al voltant d'un símbol, deixa que TakeoffCraft trobi els altres en aquest full o en tots els fulls oberts, revisa les coincidències amb el lliscador i afegeix-les en un sol pas.
keywords: qualsevol angle, girat, rotat, altra escala, escala diferent, recompte automàtic, recompte automatic, cerca de símbols, trobar símbols, patró, plantilla, coincidència, detectar, eina de recompte
from: fa68a6c1
---

{{ui:Recompte automàtic}} troba totes les còpies d'un símbol després que dibuixeu un quadre al voltant d'un. Després reviseu les coincidències al full i afegiu les que accepteu com a marques de recompte. És una ajuda, no una garantia: reviseu-les sempre abans d'afegir-les.

## Troba els símbols

1. Creeu o feu clic en un element de recompte sota {{ui:Elements}}.
2. Obriu un full on aparegui el símbol.
3. Trieu {{ui:Recompte automàtic}} a la barra d'eines, o premeu {{key:S}}.
   Apareix una barra a la part superior del full: "Dibuixa un quadre al voltant d'un símbol en aquest full."
4. Per cercar en tots els fulls oberts, no només en aquest, marqueu {{ui:Cerca en tots els fulls oberts}}.
5. Amplieu la imatge perquè el símbol es vegi bé i, després, dibuixeu un quadre ben ajustat al voltant d'una còpia. Incloeu tot el símbol; el paper en blanc al voltant es retalla.
   La barra mostra "Cercant…" amb una barra de progrés i un botó {{ui:Cancel·la}}. La pàgina segueix responent: podeu fer zoom, desplaçar-vos i moure-us entre fulls. Triar una altra eina, o {{key:Esc}}, cancel·la la cerca.
6. Quan acaba, les coincidències apareixen al full com a quadres amb el color de l'element, i la barra mostra un resum com "22 coincidències, 19 per afegir (3 ja comptades). Feu clic en un quadre per rebutjar-lo o restaurar-lo."

Dins de {{ui:Recompte automàtic}}, arrossegar sobre el full dibuixa un quadre en lloc de desplaçar. Per desplaçar, mantingueu premuda {{key:Space}} i arrossegueu, o arrossegueu amb el botó central.

## Revisa les coincidències

- **Feu clic en un quadre** per rebutjar-lo. Un quadre rebutjat és de traç discontinu i està ratllat. Torneu a fer-hi clic per restaurar-lo.
- **Moveu el lliscador de {{ui:Coincidència}}** (del 50% al 95%, començant al 75%). Un valor més alt mostra només les coincidències properes; un valor més baix en mostra de més llunyanes. El lliscador només filtra el que s'ha trobat; no torna a cercar.
- **Ja comptades**: les coincidències en un lloc que ja té una marca de recompte d'aquest element comencen rebutjades, perquè no compteu res dues vegades.
- **Altres fulls**: quan heu cercat en tots els fulls oberts, moveu-vos entre fulls amb la llista de fulls o amb {{key:PageDown}} i reviseu cadascun. El resum indica en quants fulls hi ha coincidències.

## Afegeix-les

Trieu {{ui:Afegeix}}. El botó indica quantes, per exemple "Afegeix 19 marques".
Les marques de recompte s'afegeixen al centre de cada quadre acceptat: "S'han afegit 19 marques de recompte a "Duplex receptacle". Ctrl+Z les suprimeix totes."

Tot el lot és un sol pas de desfer, així que un sol {{key:Mod+Z}} l'elimina.

Per descartar la revisió sense afegir res, trieu {{ui:Descarta}} o premeu {{key:Esc}}. Triar una altra eina també la descarta.

## Què troba i què no troba

TakeoffCraft compara el dibuix, en píxels, amb el símbol que heu emmarcat.

- Troba el símbol girat 0°, 90°, 180° i 270°. Marqueu {{ui:Qualsevol angle (més lent)}} a la barra de recompte automàtic abans de dibuixar el quadre per trobar-lo també a qualsevol angle: prova cada 15°, i després ajusta cada troballa amb precisió de grau i mig. Triga unes sis vegades més. No troba un símbol reflectit (tret que el símbol es vegi igual reflectit).
- Amb {{ui:Cerca en tots els fulls oberts}} marcat, un full a una altra escala es cerca a la mida que hi té el símbol: un accessori dibuixat a escala en un plànol 1/8" té la meitat de la mida que en un plànol 1/4", i encara es troba. Aquest full també es cerca a la mida del propi quadre, per a etiquetes i símbols impresos a una sola mida en tots els fulls. Calen escales a tots dos fulls; un full sense escala es cerca només a la mida del quadre.
- Símbols molt semblants poden coincidir entre ells: un endoll doble i un endoll quàdruple, o dues etiquetes d'accessori que es diferencien en una lletra. Apugeu el lliscador fins que només quedin les correctes, i rebutgeu la resta a mà.
- Un símbol travessat per altres línies, trama o text puntua més baix i pot necessitar un valor més baix del lliscador.
- Els quadres molt petits es rebutgen: "El quadre és massa petit. Dibuixeu-lo al voltant de tot el símbol." També es rebutja un quadre buit: "El quadre és gairebé buit. Dibuixeu-lo al voltant d'un símbol."
- Un full que seria molt gran a la mida necessària per a aquest símbol s'omet, i el resum diu "1 full era massa gran per cercar amb aquesta mida de símbol." Dibuixeu un quadre al voltant d'un símbol més gran, o compteu aquell full a mà.

Si no es troba res, la barra d'estat diu "No hi ha coincidències. Abaixeu el lliscador de coincidència o dibuixeu el quadre més ajustat al símbol."

## Velocitat i navegadors

La cerca s'executa en un procés en segon pla, així que la pàgina segueix responent i podeu cancel·lar-la en qualsevol moment. Cada full es dibuixa primer a la mida de treball a la mateixa pàgina, cosa que pot fer que un full molt gran s'aturi un moment. Funciona als navegadors Chrome, Edge, Firefox i Safari actuals. Cercar molts fulls triga més; la barra de progrés avança full a full. Sense connexió, el recompte automàtic funciona quan la barra de l'aplicació mostra {{ui:Disponible sense connexió}}: {{ui:Desa per fer-lo servir sense connexió}} manté també el procés en segon pla. Vegeu [Treballar sense connexió](common:offline).
