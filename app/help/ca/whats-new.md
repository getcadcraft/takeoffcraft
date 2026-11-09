---
title: Novetats de la versió 0.8 i 0.8.1
summary: Compta una llegenda de símbols completa a tots els fulls oberts en una sola passada, posa preu a les partides amb les tarifes dels teus treballs anteriors, comprova l'amidament amb l'estoc i els terminis de lliurament d'un proveïdor, i noves eines per a l'assistent per a les tres funcions, a més dels canvis comuns de la 0.8 i la correcció de la 0.8.1 per als fitxers DWG.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, compta-ho tot, llegenda, llegenda de símbols, conjunt complet, memòria de preus, treballs anteriors, darrer treball, preu típic, proveïdor, estoc, termini de lliurament, comanda pendent, llista de comanda, falta, tauler de problemes, assistent, idiomes, dispositius d'entrada, files de la barra d'eines, DWG
from: a04adef6
---

Aquests són els canvis de TakeoffCraft 0.8 (publicada el 2026-11-01) i 0.8.1 (2026-11-02), en comparació amb la 0.7. Ara es pot comptar una llegenda de símbols a tot el conjunt de cop, un amidament nou pot començar amb els preus dels teus treballs anteriors, i l'amidament es pot comprovar amb l'estoc d'un proveïdor. La 0.8.1 és una versió de correcció.

## Novetats

### Compta-ho tot al conjunt

- **Marca la llegenda una vegada.** {{ui:Compta-ho tot}} a la barra d'eines llegeix una llegenda de símbols: arrossega un quadre al voltant dels símbols i dels noms impresos al costat. Cada símbol apareix a la llista amb el seu dibuix i el seu nom, i el nom passa a ser el nom de la partida. Desmarqueu el que no vulgueu i després trieu {{ui:Compta en N fulls}}. Una barra indica el full que s'està cercant, {{ui:Cancel·la}} atura l'execució, i la pàgina continua sent utilitzable.
- **Tot el conjunt en una sola passada.** Cada símbol es compta a cada full obert. Un full dibuixat a una altra escala es cerca a aquesta escala, i els símbols es troben girats en qualsevol angle recte. Els símbols de la pròpia llegenda no es compten al seu full.
- **Revisa-ho abans d'afegir res.** Cada total té un enllaç per full ("E-103: 4") que et porta a aquest full. Fes clic en un quadre d'una troballa per deixar-la fora, i fes-hi clic de nou per tornar-la a incloure. El nivell de coincidència (del 50% al 100%) només filtra el que s'ha trobat; no es torna a cercar res.
- **Un sol pas per desfer.** {{ui:Afegeix N marques}} crea una partida de recompte per símbol, amb una marca a cada troballa. Si un nom ja és una partida de recompte teva, es reutilitza. {{key:Ctrl+Z}} desfà totes les partides i marques. Tot el que acceptes també alimenta {{ui:Après}}.
- **Símbols a qualsevol angle.** Marca {{ui:Símbols a qualsevol angle}} abans de comptar per trobar també els símbols girats per un angle que no sigui recte. La cerca aleshores gira cada símbol cada 15 graus, i un símbol que no sigui rodó pot trigar fins a sis vegades més.
- **Què és.** Coincidència simple de símbols als teus propis fulls, sense cap model entrenat, i res no surt del teu ordinador. En un conjunt inventat de 200 fulls va trigar 9.4 segons de principi a fi a Chrome en un escriptori ràpid; els conjunts de plànols reals seran més lents. Vegeu [Compta-ho tot al conjunt](topic:count-everything).

### Memòria de preus dels teus treballs

- **TakeoffCraft recorda les teves tarifes.** En desar un amidament, cada partida amb preu que s'utilitza es recorda pel nom i el tipus: tarifa de material, tarifa de mà d'obra, pèrdua i unitat. Es guarden els 12 darrers treballs de cada nom. Es guarda en aquest ordinador, al costat de la biblioteca de preus, mai dins d'un fitxer d'amidament, i no s'envia enlloc.
- **Comença un amidament nou a partir d'això.** {{ui:Preus}} a la barra d'eines mostra, per a cada partida, les tarifes de l'últim treball, les tarifes habituals i el rang. {{ui:Feu servir l'últim}} o {{ui:Feu servir l'habitual}} posa preu a una partida, i {{ui:Posa preu a N partides sense preu des de la memòria}} omple totes les partides que encara no tenen preu. Cada ús és un pas de desfer.
- **Treballs anteriors.** {{ui:Aprendre d'un amidament anterior…}} recorda les partides amb preu d'un amidament desat (.json).
- **Veure-ho, canviar-ho, oblidar-ho.** {{ui:Tot el que s'ha recordat}} llista tots els noms; el botó de la paperera oblida un nom, i {{ui:Buidar tots els preus}} els oblida tots. Desactiva {{ui:Recorda els preus en desar un amidament}} per aturar-ho. Un preu per EA mai no es posa en una partida per peu (ft). Vegeu [Memòria de preus dels treballs anteriors](topic:price-memory).

### Estoc i terminis de lliurament del proveïdor

- **Comprova-ho amb la llista d'un proveïdor.** {{ui:Proveïment}} a la barra d'eines pren la llista d'estoc d'un proveïdor ({{ui:Afegeix un fitxer de proveïdor…}}), un CSV o una fulla de càlcul, i compara amb ella el que necessita l'amidament, amb la pèrdua inclosa. Es guarden fins a cinc fitxers. No s'envia res i no es consulta cap proveïdor: el fitxer l'aportes tu.
- **Què indica.** Primer surten les partides curtes: "Falten 120 EA", "Termini de lliurament 21 dies", "En comanda pendent", "La unitat és diferent", "Sense xifra d'estoc" o "En estoc". {{ui:Termini màxim desitjat (dies)}} comença a 14.
- **Llista de comanda.** {{ui:Llista de comanda (CSV)}} baixa les partides curtes amb la quantitat que falta, el proveïdor i el termini de lliurament.
- **Preus a la biblioteca.** Si el fitxer té preus, {{ui:Preus a la biblioteca}} fixa el preu del material de cada entrada de la biblioteca amb el mateix nom i unitat. Torna a posar preu des de la biblioteca per portar-los a l'amidament.
- **Al tauler de Problemes.** Una falta és un avís i un termini llarg és una nota, sota "Estoc del proveïdor". Pots acceptar-ne una amb un motiu, i el motiu es desa a l'amidament. Vegeu [Comprova l'estoc i els terminis de lliurament del proveïdor](topic:supplier-stock).

### Assistents d'IA

- **Eines per als tres.** Amb els assistents permesos a {{ui:Configuració}}, un assistent pot llegir una llegenda (`legend_open`), executar el recompte (`legend_count_start`, i després `legend_count_status` i `legend_count_result`) i afegir-lo (`legend_count_add`, que pot previsualitzar primer). Pot llegir els preus recordats (`prices_list`) i posar preu a les partides a partir d'ells (`prices_apply`, que pot previsualitzar primer), i llegir la comprovació del proveïdor (`supply_check`). Afegir un fitxer de proveïdor continua sent cosa teva. Vegeu [Utilitza TakeoffCraft amb assistents d'IA](topic:use-with-ai-assistants).

### En totes les aplicacions

- **Idiomes.** Cinquanta-quatre idiomes en total; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek). Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els hagi revisat.
- **Dispositius d'entrada.** {{ui:Configuració}} › {{ui:Global}} › {{ui:Dispositius d'entrada}} defineix què fa un trackpad, els botons laterals d'un ratolí, un llapis, un ratolí 3D, un comandament de joc o un controlador MIDI, per a totes les aplicacions o només per a una. Vegeu [Utilitza un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix {{ui:Ajusta}} (l'inici), {{ui:2 files}} i {{ui:1 fila}}; els grups que no hi caben es desplacen lateralment. Vegeu [Organitza els taulers](common:arrange-panels).
- **Tauler de Problemes.** El tauler compartit d'avisos i notes ara inclou la comprovació d'estoc del proveïdor de dalt, al costat de les altres comprovacions.
- **Complements.** Els complements segueixen la llista del teu compte. Vegeu [Complements i la llista del teu compte](common:addons-basics).
- **Connecta la teva IA.** CadCraft Studio és el centre: connecta el teu assistent una sola vegada per a les vuit aplicacions. Studio no té IA pròpia.

## Corregit a la 0.8.1

- **Secció de classes DWG.** La secció de classes d'un fitxer DWG es llegia com un tipus incorrecte. Això s'ha corregit a TakeoffCraft i a quatre aplicacions més.
- **Studio pot canviar d'idioma mentre s'executa.** Abans, Studio i les seves edicions empaquetades eren només en anglès. Això no s'ha provat a la versió d'escriptori a totes les plataformes; digues-nos si l'idioma no canvia.

## Encara no és en aquesta versió

- **Sense signatura de codi.** Windows pot avisar, i en un Mac cal fer clic amb el botó dret i triar {{ui:Obert}} la primera vegada. Les versions per a botigues (Microsoft Store, Google Play, App Store) estan en espera, i la versió per a iPad i iPhone no s'ha reconstruït per a la 0.8.1.
- **Actualitzacions de Studio.** L'instal·lador de Windows i els paquets de Linux comproven una vegada al dia i pregunten abans. El zip portable només avisa, i macOS i l'APK no s'actualitzen sols. El .dmg de macOS de la 0.8 segueix la publicació.
- **Connecta la teva IA.** La connexió amb un clic dins de Studio, el connector allotjat per a IA al navegador, la teva pròpia clau d'API dins de Studio i un paquet MCP publicat no estan garantits en aquesta versió.
- **Compta-ho tot.** Necessita símbols dibuixats de la mateixa manera que a la llegenda, i un símbol amb una paret o una línia llarga que el travessa es pot perdre. Els símbols reflectits no es troben, i un full sense escala dibuixat a una altra mida es cerca a la mida de la llegenda. Revisa les troballes del primer full abans de confiar en la resta.
- **Estoc del proveïdor.** Les xifres d'estoc només són tan actuals com el fitxer que afegeixes. La comprovació mai no consulta un proveïdor.
- **Idiomes.** La barra d'aplicació del tàmil es desborda.

Tot la resta és a [Encara no implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la versió 0.7](topic:whats-new-0-7).
