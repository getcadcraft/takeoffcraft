---
title: Compta-ho tot del joc
summary: Envolteu una vegada la llegenda de símbols i TakeoffCraft compta cada símbol que hi ha en cada full obert en una sola execució. Cada recompte és un enllaç al seu full, i reviseu abans d'afegir res.
keywords: comptar-ho tot, llegenda, llegenda de símbols, joc complet, cada full, tots els fulls, cada porta, cada accessori, dispositius, quadre, símbols, recompte automàtic, comptar tot, joc de plànols, 200 fulls, nivell de coincidència, semblants
from: adc99744
---

{{ui:Compta-ho tot}} llegeix una llegenda de símbols i després compta cada símbol que hi ha en cada full obert. És {{ui:Recompte automàtic}} per a una llegenda sencera d'una vegada. És una simple coincidència de símbols sobre els vostres propis fulls, no un model entrenat, i res no surt del vostre ordinador. Reviseu els recomptes abans d'afegir-los: és un ajut, no una garantia.

## Compteu una llegenda

1. Obriu els plànols. Serveix una llegenda en qualsevol full: els símbols amb els seus noms al costat.
2. Trieu {{ui:Compta-ho tot}} a la barra d'eines.
3. Arrossegueu un quadre al voltant de la llegenda, els símbols i els noms. Un títol sense símbol al costat (LLEGENDA DE SÍMBOLS) queda exclòs per si sol.
   El tauler llista cada símbol amb la seva imatge i el nom imprès al costat. El nom passa a ser el nom de l'element, així que canvieu-lo aquí si voleu.
4. Desmarqueu els símbols que no vulgueu comptar. Un símbol que no es pot cercar (massa petit, o en blanc) ho indica.
5. Trieu {{ui:Compta en N fulls}}. Una barra mostra el full que es cerca; {{ui:Cancel·la}} atura l'execució. La pàgina continua disponible.

Els símbols de la mateixa llegenda no es compten al seu full. Un full dibuixat a una altra escala es cerca a aquesta escala, i els símbols es troben girats en qualsevol angle recte.

## Revisa els recomptes

- Cada símbol mostra el seu total i, a sota, un enllaç per cada full que en té ("E-103: 4"). Cliqueu-ne un per anar a aquell full. Les troballes es marquen amb un quadre del color de l'element.
- **Cliqueu un quadre** per deixar fora aquella troballa. Es mostra en línia discontínua i tatxada; torneu a fer-hi clic per recuperar-la.
- **Moveu el nivell de coincidència** (del 50% al 100%, començant pel nivell de la vostra {{ui:Configuració}}). Un valor més alt només manté les coincidències properes. El control només filtra el que s'ha trobat; no es torna a cercar res.
- Dos símbols que s'assemblen (un endoll doble i un de quàdruple) poden coincidir en el mateix lloc. La millor coincidència se'l queda, i el tauler indica en quants llocs ha passat, perquè pugueu revisar-los.
- Un full massa gran per cercar-hi el símbol a la seva mida es salta, i el tauler ho diu.

## Afegiu-los

Trieu {{ui:Afegeix N marques}}. Cada símbol es converteix en un element de recompte amb una marca a cada troballa. Un nom que ja és un element de recompte vostre es reutilitza (no es duplica res allà on ja heu marcat a mà). Tota l'execució és un sol pas: {{key:Ctrl+Z}} treu de nou tots els elements i marques.

Allò que accepteu també alimenta {{ui:Après}}: els símbols es recorden al fitxer de l'amidament per a la propera vegada.

## Amb el vostre assistent

Si permeteu assistents a {{ui:Configuració}}, poden llegir una llegenda (legend_open), executar el recompte en segon pla (legend_count_start, i després legend_count_status), llegir els recomptes (legend_count_result) i afegir-los (legend_count_add, que primer pot previsualitzar què afegiria). És la mateixa execució que veieu al tauler.

## Símbols a qualsevol angle

Marqueu {{ui:Símbols a qualsevol angle}} abans de comptar per trobar també símbols dibuixats en un angle que no sigui recte (un tac de paret en diagonal, un accessori girat per seguir una teulada). La cerca llavors gira cada símbol cada 15 graus; un símbol rodó encara necessita una sola cerca, i un símbol que no és rodó pot trigar fins a sis vegades més. Deixeu-ho desactivat per als plànols dibuixats ortogonalment.

## Bon de saber

- Necessita símbols dibuixats de la mateixa manera que a la llegenda. Una llegenda dibuixada a una mida diferent dels fulls està bé quan les escales dels fulls s'han definit; sense escales, els símbols es cerquen a la mida de la llegenda.
- Un símbol amb una paret o una línia llarga dibuixada just a través seu es pot passar per alt, perquè ja no s'assembla al dibuix de la llegenda. Reviseu les troballes del primer full abans de confiar en la resta.
- Un escaneig sense text també funciona: els símbols es troben per les seves files, i vosaltres escriviu els noms.
