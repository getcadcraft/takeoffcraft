---
title: Què hi ha de nou a la versió 0.9
summary: Lectura de les longituds en metres, centímetres o mil·límetres, àrees mètriques en m2 amb àrea de mur, predefinits d'escala 1:75 i 1:150, unitats de pes i temperatura, Arc amb deu mètodes, i cursors en directe, Segueix i una llista de persones.
keywords: novetats, què hi ha de nou, notes de la versió, registre de canvis, 0.9, mostra les longituds com a, metres, centímetres, mil·límetres, mètric, segueix global, unitats, unitats de visualització, m2, metres quadrats, àrea de mur, predefinits d'escala, 1:75, 1:150, pes, quilograms, kg, tona, lb, temperatura, celsius, fahrenheit, arc, mètodes d'arc, arc de 3 punts, radi, en directe, cursors, segueix, llista de persones, classe, ajudes emergents, disposició, canvis, 0.8, 0.8.1, versió, noves funcions, compta-ho tot, llegenda, llegenda de símbols, conjunt sencer, memòria de preus, feines anteriors, última feina, preu típic, proveïdor, estoc, termini de lliurament, comanda pendent, escassetat, panell de problemes, assistent, idiomes, dispositius d'entrada, files de la barra d'eines, DWG
from: 6182b998
---

Això és el que ha canviat a TakeoffCraft 0.9, en comparació amb la 0.8.1. És una versió petita per a aquesta aplicació: les longituds es poden llegir ara en metres, centímetres o mil·límetres, les àrees i les escales segueixen bé el treball mètric, i l'Arc té deu maneres de dibuixar. Les sessions en directe també mostren qui és on.

## Novetats

### Lectura de longituds en metres, centímetres o mil·límetres

- **Mostrar les longituds com a.** {{ui:Configuració}} › {{ui:TakeoffCraft}} té {{ui:Mostra les longituds com a}} amb {{ui:Segueix Global}}, {{ui:Peus i polzades}}, m, cm i mm. {{ui:Segueix Global}} usa la unitat de longitud mètrica que heu marcat amb una estrella a {{ui:Configuració}} › {{ui:Global}} › {{ui:Unitats}}, i peus i polzades quan no n'hi ha cap marcada. Canvia com es llegeixen les longituds al full, a la barra d'estat i als panells, inclosos alçades, profunditat, gruix i els nivells. Un número escrit sol en un camp d'alçada es llegeix en la unitat que es mostra.
- **Només visualització.** Les quantitats, els costos i les exportacions es calculen a partir de les longituds exactes. L'elecció de 1/16, 1/8 i 1/4 de polzada només apareix per a peus i polzades. Vegeu [Mostra les longituds en metres](topic:show-lengths-in-meters).
- **Unitats de pes.** Un element {{ui:Quantitat introduïda (sense dibuix)}} ara pot estar en lb, TON, kg o t, i tenir preu per unitat.
- **Temperatura.** Cada element té un camp {{ui:Temperatura}} opcional a l'editor d'elements, escrit en graus C o F. {{ui:Mostra les temperatures com a}} a {{ui:Configuració}} › {{ui:TakeoffCraft}} ofereix {{ui:Segueix Global}}, °C o °F.

### Àrees i escales per al treball mètric

- **Àrees en m2 al dibuix.** Una àrea mesurada amb un element mètric ara diu m2 a l'etiqueta del dibuix i al panell de marques, així com a la taula, en lloc de SF. La regla és m2 quan l'element té preu en mètric o les longituds es mostren en m, cm o mm, i SF en cas contrari.
- **Àrea de mur.** Un element lineal amb alçada també mostra la seva àrea de mur (longitud per alçada) a la llista d'Elements i com a fila de nota sota la taula de quantitats per element.
- **Predefinits d'escala 1:75 i 1:150.** Són a la llista {{ui:Predefinida}} del grup {{ui:Escala}}, que ara té 32 escales. Vegeu [Predefinits d'escala](topic:scale-presets).

### Arc amb deu mètodes

- Mentre {{ui:Arc}} està activat (botó de la barra d'eines o {{key:R}}), apareix un quadre {{ui:Mètode de l'arc}} a la barra del full. Els mètodes són: 3 punts; Inici, Centre, Final; Inici, Centre, Angle; Inici, Centre, Longitud; Inici, Final, Angle; Inici, Final, Direcció; Inici, Final, Radi; Centre, Inici, Final; Centre, Inici, Angle; i Centre, Inici, Longitud.

Angle, longitud, radi i direcció es poden fer clic o escriure. Funciona en recorreguts lineals, àrees i retalls. Els fitxers desats abans de la 0.9 s'obren igual. Vegeu [Dibuixa arcs amb deu mètodes](topic:draw-arcs-ten-methods).

### Treball conjunt

- **Veure els cursors dels altres.** En una sessió en directe, el punter de cada persona es mostra al full amb el seu nom i color, amb un quadre de línies discontínues al voltant de les marques que ha seleccionat. Les persones que són en un altre full es llisten amb el nom d'aquell full. Vegeu [Treballa en directe amb altres](topic:work-live).
- **Seguir una persona, i la llista de persones.** El botó {{ui:Persones}} en una sessió en directe llista cada persona amb l'eina que usa, el full on és i quan va editar per última vegada. {{ui:Segueix}} mou la vostra vista amb la seva, i l'amfitrió pot usar {{ui:Demana a tothom que em segueixi}}. Vegeu [Segueix un company en una sessió en directe](topic:follow-a-teammate).

## A totes les aplicacions

- **Ajudes emergents i consell d'inici.** El text en passar el punter és una ajuda emergent de Bootstrap, i el consell d'inici es pot tancar.
- **Barres de pestanyes amb desplaçament.** La barra de pestanyes d'un panell que no hi cap es desplaça en lloc de tallar-se.
- **Títols de pestanya.** La pestanya del navegador mostra `<document> - TakeoffCraft | CadCraft`.
- **Disposició.** La llista de disposicions a {{ui:Configuració}} és un desplegable que mostra la disposició triada.
- **Idioma.** L'idioma que trieu ara arriba a les paraules que la pàgina imprimeix per si mateixa, com Nou, Obre i Desa. Els idiomes que no són l'anglès són esborranys automàtics fins que un parlant natiu els hagi llegit.

## Límits sincers

- La visualització de les longituds, les unitats de pes i temperatura i els nous predefinits s'han revisat amb proves i a la pàgina. No s'ha revisat a mà cada panell amb cada unitat.
- La llista de persones no ha tingut una revisió manual amb una classe real de professorat i alumnat.
- Els idiomes que no són l'anglès són esborranys automàtics.
- Els instal·ladors de Windows no estan signats digitalment (Més informació, i després Executa igualment). La imatge de disc de macOS no està notaritzada (clic dret, i després {{ui:Obert}}).

## Anterior: 0.8 i 0.8.1

Això és el que ha canviat a TakeoffCraft 0.8 (publicada el 2026-11-01) i 0.8.1 (2026-11-02), en comparació amb la 0.7. Ara una llegenda de símbols es pot comptar a tot el conjunt de cop, una feina nova pot començar amb els preus de les vostres feines anteriors, i l'amidament es pot comprovar amb l'estoc d'un proveïdor. La 0.8.1 és una versió de correcció.

### Novetats

**Compta-ho tot del conjunt**

- **Marcar la llegenda una vegada.** {{ui:Compta-ho tot}} a la barra d'eines llegeix una llegenda de símbols: arrossegueu un quadre al voltant dels símbols i dels noms escrits al costat. Cada símbol es llista amb la seva imatge i nom, i el nom passa a ser el nom de l'element. Desmarqueu el que no vulgueu, i després trieu {{ui:Compta a N fulls}}. Una barra mostra el full que es cerca, {{ui:Cancel·la}} atura l'execució, i la pàgina segueix utilitzable.
- **Tots els fulls en una sola execució.** Cada símbol es compta a cada full obert. Un full dibuixat a una altra escala es cerca a aquella escala, i els símbols es troben girats en qualsevol angle recte. Els símbols propis de la llegenda no es compten al seu full.
- **Revisió abans que s'afegeixi res.** Cada total té un enllaç per full ("E-103: 4") que va a aquest full. Feu clic en un quadre d'una troballa per deixar-la fora, i torneu a fer-hi clic per tornar-la. El nivell de coincidència (del 50 % al 100 %) només filtra el que s'ha trobat; no es torna a cercar res.
- **Un sol pas de desfer.** {{ui:Afegeix N marques}} crea un element de recompte per símbol amb una marca a cada troballa. Un nom que ja és un element de recompte vostre es reutilitza. {{key:Ctrl+Z}} desfà tots els elements i marques. El que accepteu també alimenta {{ui:Après}}.
- **Símbols en qualsevol angle.** Marqueu {{ui:Símbols a qualsevol angle}} abans de comptar per trobar també els símbols girats en un angle que no és recte. La cerca gira cada símbol cada 15 graus, i un símbol que no és rodó pot trigar fins a sis vegades més.
- **Què és.** Simple coincidència de símbols als vostres propis fulls, sense model entrenat, i res no surt del vostre ordinador. En un conjunt inventat de 200 fulls va trigar 9.4 segons de principi a fi a Chrome en un escriptori ràpid; els conjunts de plànols reals seran més lents. Vegeu [Compta-ho tot del conjunt](topic:count-everything).

**Memòria de preus de les vostres feines**

- **TakeoffCraft recorda les vostres tarifes.** Quan desen un amidament, cada element amb preu que s'usa es recorda pel nom i el tipus: tarifa de material, tarifa de mà d'obra, pèrdua i unitat. Es guarden les últimes 12 feines per a cada nom. Es guarda en aquest ordinador al costat del preu de la Biblioteca, mai dins d'un fitxer d'amidament, i no s'envia res enlloc.
- **Començar un amidament nou a partir d'ell.** {{ui:Preus}} a la barra d'eines mostra, per a cada element, les tarifes de l'última feina, les tarifes típiques i el rang. {{ui:Feu servir l'últim}} o {{ui:Feu servir l'habitual}} posa preu a un element, i {{ui:Posa preu a N elements sense preu des de la memòria}} omple cada element que encara no té preu. Cada ús és un sol pas de desfer.
- **Feines anteriors.** {{ui:Aprendre d'un amidament anterior…}} recorda els elements amb preu d'un amidament desat (.json).
- **Veure-ho, canviar-ho, oblidar-ho.** {{ui:Tot el que s'ha recordat}} llista cada nom; el botó de paperera oblida un; i {{ui:Buidar tots els preus}} oblida tots. Desactiveu {{ui:Recorda els preus en desar un amidament}} per aturar-ho. Un preu per unitat mai es posa a un element per peu. Vegeu [Memòria de preus de les feines anteriors](topic:price-memory).

**Estoc i terminis del proveïdor**

- **Comprovar amb la llista d'un proveïdor.** {{ui:Proveïment}} a la barra d'eines pren la llista d'estoc d'un proveïdor ({{ui:Afegeix un fitxer de proveïdor…}}), un CSV o un full de càlcul, i comprova el que necessita l'amidament, amb la pèrdua, contra ella. Es guarden fins a cinc fitxers. No s'envia res i no es pregunta res a cap proveïdor: vosaltres porteu el fitxer.
- **Què diu.** Els elements amb manca surten primers: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" o "In stock". {{ui:Termini màxim desitjat (dies)}} comença a 14.
- **Llista de comanda.** {{ui:Llista de comanda (CSV)}} baixa els elements amb manca amb la quantitat que falta, el proveïdor i el termini de lliurament.
- **Preus a la Biblioteca.** Si el fitxer té preus, {{ui:Preus a la biblioteca}} posa el preu de material de cada entrada de la Biblioteca amb el mateix nom i unitat. Torneu a fixar preus des de la Biblioteca per portar-los a l'amidament.
- **Al panell de Problemes.** Una manca és un avís i una espera llarga és una nota, sota "Estoc del proveïdor". Podeu acceptar-ne una amb un motiu, i el motiu es desa a l'amidament. Vegeu [Comprova l'estoc del proveïdor i els terminis](topic:supplier-stock).

**Assistents d'IA**

- **Eines per als tres.** Amb els assistents permesos a {{ui:Configuració}}, un assistent pot llegir una llegenda (`legend_open`), executar el recompte (`legend_count_start`, després `legend_count_status` i `legend_count_result`) i afegir-lo (`legend_count_add`, que pot mostrar una vista prèvia primer). Pot llegir els preus recordats (`prices_list`) i posar preu als elements a partir d'ells (`prices_apply`, que pot mostrar una vista prèvia primer), i llegir la comprovació del proveïdor (`supply_check`). Afegir un fitxer de proveïdor continua essent cosa vostra. Vegeu [Usa TakeoffCraft amb assistents d'IA](topic:use-with-ai-assistants).

**A totes les aplicacions**

- **Idiomes.** Cinquanta-quatre idiomes en total; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili i uzbek). Els idiomes que no són l'anglès són esborranys automàtics fins que un parlant natiu els hagi llegit.
- **Dispositius d'entrada.** {{ui:Configuració}} › {{ui:Global}} › {{ui:Dispositius d'entrada}} defineix què fa un trackpad, els botons laterals d'un ratolí, un llapis, un ratolí 3D, un comandament de videojoc o un controlador MIDI, per a totes les aplicacions o per a una. Vegeu [Usa un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix {{ui:Ajusta}} (l'inici), {{ui:2 files}} i {{ui:1 fila}}; els grups que no hi caben es desplacen lateralment. Vegeu [Organitza els panells](common:arrange-panels).
- **Panell de problemes.** El panell compartit d'avisos i notes ara inclou la comprovació d'estoc del proveïdor de dalt, al costat de les altres comprovacions.
- **Complements.** Els complements segueixen la llista del vostre compte. Vegeu [Complements i la llista del vostre compte](common:addons-basics).
- **Connecteu la vostra IA.** CadCraft Studio és el centre: connecteu el vostre assistent una vegada per a les vuit aplicacions. Studio no té cap IA pròpia.

### Corregit a la 0.8.1

- **Secció de classes del DWG.** La secció de classes d'un fitxer DWG es llegia com un tipus incorrecte. Això s'ha corregit a TakeoffCraft, i a altres quatre aplicacions.
- **Studio pot canviar d'idioma mentre s'executa.** Abans, Studio i les seves edicions empaquetades eren només en anglès. Això no s'ha provat a la versió d'escriptori a totes les plataformes; digueu-nos si l'idioma no canvia.

### Encara no en aquesta versió

- **No signat digitalment.** Windows pot avisar, i en un Mac feu clic dret i trieu {{ui:Obert}} la primera vegada. Les versions per a botigues (Microsoft Store, Google Play, App Store) estan en espera, i la versió per a iPad i iPhone no es va recompilar per a la 0.8.1.
- **Actualitzacions de Studio.** L'instal·lador de Windows i els paquets de Linux comproven una vegada al dia i pregunten primer. El zip portable només ho indica, i macOS i l'APK no s'actualitzen sols. El .dmg de macOS 0.8 segueix la versió.
- **Connecteu la vostra IA.** La connexió d'un clic dins de Studio, el connector allotjat per a la IA al navegador, la vostra pròpia clau d'API dins de Studio i un paquet MCP publicat no es prometen en aquesta versió.
- **Compta-ho tot.** Necessita símbols dibuixats de la mateixa manera que a la llegenda, i un símbol amb un mur o una línia llarga que hi passi per sobre es pot perdre. Els símbols reflectits no es troben, i un full sense escala dibuixat a una altra mida es cerca a la mida de la llegenda. Reviseu les troballes del primer full abans de confiar en la resta.
- **Estoc del proveïdor.** Les xifres d'estoc només són tan actuals com el fitxer que afegiu. La comprovació mai no pregunta a un proveïdor.
- **Idiomes.** La barra d'aplicacions del tàmil es desborda.

La resta és a [Encara no implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Què hi ha de nou a la versió 0.7](topic:whats-new-0-7).
