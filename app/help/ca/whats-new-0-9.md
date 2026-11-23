---
title: Novetats de la 0.9 (anteriors)
summary: Llegeix les longituds en metres, centímetres o mil·límetres, les àrees mètriques en m2 amb àrea de paret, els predefinits d'escala 1:75 i 1:150, les unitats de pes i de temperatura, Arc amb deu mètodes, i els cursors en directe, Segueix i una llista de persones.
keywords: novetats 0.9, versió anterior, novetats, notes de la versió, registre de canvis, 0.9, mostra les longituds com a, metres, centímetres, mil·límetres, mètric, segueix global, unitats, unitats de visualització, m2, metres quadrats, àrea de paret, predefinits d'escala, 1:75, 1:150, pes, quilograms, kg, tona, t, lb, temperatura, celsius, fahrenheit, arc, mètodes d'arc, arc de 3 punts, radi, en directe, cursors, segueix, llista de persones, classe, consells emergents, disposició, novetats, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, compta-ho tot, llegenda, llegenda de símbols, joc complet, memòria de preus, treballs anteriors, darrer treball, preu típic, proveïdor, estoc, termini de lliurament, comanda pendent, llista de comanda, falta, tauler de problemes, assistent, idiomes, dispositius d'entrada, files de la barra d'eines, DWG
from: f4322ba2
---

Això és el que ha canviat a TakeoffCraft 0.9, respecte de la 0.8.1. És una versió petita per a aquesta aplicació: les longituds es poden llegir ara en metres, centímetres o mil·límetres, les àrees i les escales segueixen bé el treball mètric, i Arc té deu maneres de dibuixar. Les sessions en directe també mostren qui és on.

## Novetats

### Llegeix les longituds en metres, centímetres o mil·límetres

- **Mostra les longituds com a.** {{ui:Settings}} › {{ui:TakeoffCraft}} té {{ui:Show lengths as}} amb {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm i mm. {{ui:Follow Global}} fa servir la unitat de longitud mètrica que heu marcat amb una estrella a {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}, i peus i polzades quan no n'hi ha cap de marcada. Canvia com es llegeixen les longituds al plànol, a la barra d'estat i als taulers, incloses les alçades, la profunditat, el gruix i els nivells. Un número sense unitat escrit en un camp d'alçada es llegeix en la unitat que es mostra.
- **Només visualització.** Les quantitats, els costos i les exportacions es calculen a partir de les longituds exactes. L'opció de 1/16, 1/8 i 1/4 de polzada només apareix per a peus i polzades. Vegeu [Mostra les longituds en metres](topic:show-lengths-in-meters).
- **Unitats de pes.** Un element de {{ui:Typed quantity (no drawing)}} ara pot ser en lb, TON, kg o t, i pot tenir preu per unitat.
- **Temperatura.** Cada element té un camp opcional {{ui:Temperature}} a l'editor d'elements, escrit en graus C o F. {{ui:Show temperatures as}} a {{ui:Settings}} › {{ui:TakeoffCraft}} ofereix {{ui:Follow Global}}, °C o °F.

### Àrees i escales per al treball mètric

- **Àrees en m2 al plànol.** Una àrea mesurada amb un element mètric diu ara m2 a l'etiqueta del plànol i al tauler de marques, i també a la taula, en lloc de SF. La regla és m2 quan l'element té preu en mètric o les longituds es mostren en m, cm o mm, i SF en cas contrari.
- **Àrea de paret.** Un element lineal amb alçada també mostra la seva àrea de paret (longitud per alçada) a la llista d'Elements i com a fila de nota sota la taula de quantitats per element.
- **Predefinits d'escala 1:75 i 1:150.** Són a la llista {{ui:Preset}} del grup {{ui:Scale}}, que ara té 32 escales. Vegeu [Predefinits d'escala](topic:scale-presets).

### Arc amb deu mètodes

- Mentre {{ui:Arc}} està activat (botó de la barra d'eines o {{key:R}}), apareix una caixa {{ui:Arc method}} a la barra del full amb els mètodes: 3 punts; Inici, Centre, Final; Inici, Centre, Angle; Inici, Centre, Longitud; Inici, Final, Angle; Inici, Final, Direcció; Inici, Final, Radi; Centre, Inici, Final; Centre, Inici, Angle i Centre, Inici, Longitud. Es poden fer clic o escriure l'angle, la longitud, el radi i la direcció. Funciona en recorreguts lineals, àrees i buits. Els fitxers desats abans de la 0.9 s'obren igual. Vegeu [Dibuixa arcs amb deu mètodes](topic:draw-arcs-ten-methods).

### Treballar junts

- **Veure els cursors dels altres.** En una sessió en directe, el punter de cada persona es mostra al plànol amb el seu nom i color, amb un quadre de línies discontínues al voltant de les marques que ha seleccionat. Les persones que són en un altre full es llisten amb el nom d'aquell full. Vegeu [Treballa en directe amb altres](topic:work-live).
- **Segueix una persona, i la llista de persones.** El botó {{ui:Persones}} en una sessió en directe llista cada persona amb l'eina que fa servir, el full on és i quan va editar per darrera vegada. {{ui:Segueix}} mou la vostra vista amb la seva, i l'amfitrió pot fer servir {{ui:Demana a tothom que em segueixi}}. Vegeu [Segueix un company en una sessió en directe](topic:follow-a-teammate).

## En totes les aplicacions

- **Consells emergents i consell d'inici.** El text que apareix en passar el punter és un consell emergent de Bootstrap, i el consell d'inici es pot tancar.
- **Pestanyes amb desplaçament.** La franja de pestanyes d'un tauler que no hi cap es desplaça en lloc de quedar tallada.
- **Títols de pestanya.** La pestanya del navegador mostra `<document> - TakeoffCraft | CadCraft`.
- **Disposició.** La llista de disposicions a {{ui:Settings}} és un desplegable que mostra la disposició escollida.
- **Idioma.** L'idioma que escolliu ara arriba a les paraules que la pàgina mateixa imprimeix, com ara Nou, Obre i Desa. Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els hagi llegit.

## Límits reconeguts

- La visualització de longituds, les unitats de pes i de temperatura i els predefinits nous s'han comprovat amb proves i a la pàgina. No s'ha comprovat a mà cada tauler amb cada unitat.
- La llista de persones no s'ha revisat a mà amb una classe real de professor i alumnes.
- Els idiomes diferents de l'anglès són esborranys automàtics.
- Els instal·ladors de Windows no estan signats digitalment (Més informació, després Executa-ho igualment). La imatge de disc de macOS no està notaritzada (clic dret, després Obre).

## Anteriors: 0.8 i 0.8.1

Això és el que ha canviat a TakeoffCraft 0.8 (publicada el 2026-11-01) i 0.8.1 (2026-11-02), respecte de la 0.7. Ara es pot comptar una llegenda de símbols a tot el joc de cop, un amidament nou pot començar amb els preus dels treballs anteriors, i l'amidament es pot comprovar amb l'estoc d'un proveïdor. La 0.8.1 és una versió de correccions.

### Novetats

**Compta-ho tot al joc**

- **Marqueu la llegenda una vegada.** {{ui:Count everything}} a la barra d'eines llegeix una llegenda de símbols: arrossegueu un quadre al voltant dels símbols i dels noms escrits al costat. Cada símbol apareix amb la seva imatge i el seu nom, i el nom passa a ser el nom de l'element. Desmarqueu el que no vulgueu i després trieu {{ui:Compta en N fulls}}. Una barra mostra el full que es cerca, {{ui:Cancel·la}} atura l'execució, i la pàgina segueix utilitzable.
- **Tots els fulls en una sola execució.** Cada símbol es compta a cada full obert. Un full dibuixat a una altra escala es cerca a aquesta escala, i els símbols es troben girats en qualsevol angle recte. Els propis símbols de la llegenda no es compten al seu full.
- **Reviseu abans que s'afegeixi res.** Cada total té un enllaç per full ("E-103: 4") que porta a aquell full. Feu clic en un quadre d'una troballa per deixar-la fora, i feu-hi clic de nou per tornar-la. El nivell de coincidència (del 50 % al 100 %) només filtra el que s'ha trobat; no es torna a cercar res.
- **Un sol pas per desfer.** {{ui:Afegeix N marques}} crea un element de recompte per símbol amb una marca a cada troballa. Un nom que ja és un element de recompte vostre es reutilitza. {{key:Ctrl+Z}} desfà tots els elements i marques. Allò que accepteu també alimenta {{ui:Après}}.
- **Símbols a qualsevol angle.** Marqueu {{ui:Symbols at any angle}} abans de comptar per trobar també els símbols girats amb un angle que no és recte. La cerca llavors gira cada símbol cada 15 graus, i un símbol que no és rodó pot trigar fins a sis vegades més.
- **Què és.** Coincidència simple de símbols als vostres propis fulls, sense model entrenat, i res no surt del vostre ordinador. En un joc inventat de 200 fulls va trigar 9,4 segons de principi a fi a Chrome en un escriptori ràpid; els jocs de plànols reals seran més lents. Vegeu [Compta-ho tot al joc](topic:count-everything).

**Memòria de preus dels vostres treballs**

- **TakeoffCraft recorda les vostres tarifes.** En desar un amidament, cada element amb preu que s'ha fet servir es recorda pel nom i el tipus: tarifa de material, tarifa de mà d'obra, pèrdua i unitat. Es guarden els 12 darrers treballs per cada nom. Es guarda en aquest ordinador al costat de la biblioteca de preus, mai dins d'un fitxer d'amidament, i no s'envia enlloc.
- **Comenceu un amidament nou a partir d'aquests preus.** {{ui:Prices}} a la barra d'eines mostra, per a cada element, les tarifes de l'últim treball, les tarifes habituals i el rang. {{ui:Use last}} o {{ui:Use typical}} posa preu a un element, i {{ui:Posa preu a N elements sense preu des de la memòria}} omple cada element que encara no té preu. Cada ús és un pas per desfer.
- **Treballs anteriors.** {{ui:Learn from a past takeoff…}} recorda els elements amb preu d'un amidament desat (.json).
- **Veure-ho, canviar-ho, oblidar-ho.** {{ui:Everything remembered}} llista cada nom; el botó de la paperera n'oblida un, i {{ui:Clear all prices}} n'oblida tots. Desactiveu {{ui:Remember my prices when I save a takeoff}} per aturar-ho. Un preu «per unitat» mai no es posa en un element «per peu». Vegeu [Memòria de preus dels vostres treballs anteriors](topic:price-memory).

**Estoc i terminis de lliurament del proveïdor**

- **Comproveu amb la llista d'un proveïdor.** {{ui:Supply}} a la barra d'eines pren la llista d'estoc d'un proveïdor ({{ui:Add a supplier file…}}), un CSV o un full de càlcul, i comprova el que necessita l'amidament, amb la pèrdua, contra aquesta llista. Es guarden fins a cinc fitxers. No s'envia res i ningú no pregunta a un proveïdor: porteu el fitxer vosaltres.
- **Què diu.** Els elements amb falta surten primers: "Falten 120 EA", "Termini de lliurament 21 dies", "En comanda pendent", "Unitat diferent", "Sense xifra d'estoc" o "En estoc". {{ui:Termini màxim desitjat (dies)}} comença a 14.
- **Llista de comanda.** {{ui:Llista de comanda (CSV)}} baixa els elements amb falta, amb la quantitat que falta, el proveïdor i el termini de lliurament.
- **Preus a la biblioteca.** Si el fitxer té preus, {{ui:Preus a la biblioteca}} posa el preu del material de cada entrada de la biblioteca amb el mateix nom i unitat. Torneu a posar preu des de la biblioteca per portar-los a l'amidament.
- **Al tauler de Problemes.** Una falta és un avís i un termini llarg és una nota, sota «Estoc del proveïdor». Podeu acceptar-ne una amb un motiu, i el motiu es desa a l'amidament. Vegeu [Comproveu l'estoc del proveïdor i els terminis de lliurament](topic:supplier-stock).

**Assistents d'IA**

- **Eines per als tres.** Amb els assistents permesos a {{ui:Settings}}, un assistent pot llegir una llegenda (`legend_open`), executar el recompte (`legend_count_start`, després `legend_count_status` i `legend_count_result`) i afegir-lo (`legend_count_add`, que pot previsualitzar primer). Pot llegir els preus recordats (`prices_list`) i posar preu als elements amb ells (`prices_apply`, que pot previsualitzar primer), i llegir la comprovació amb el proveïdor (`supply_check`). Afegir un fitxer de proveïdor continua essent cosa vostra. Vegeu [Feu servir TakeoffCraft amb assistents d'IA](topic:use-with-ai-assistants).

**En totes les aplicacions**

- **Idiomes.** Cinquanta-quatre idiomes en total; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, swahili i uzbek). Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els hagi llegit.
- **Dispositius d'entrada.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} defineix què fa un trackpad, els botons laterals d'un ratolí, un llapis, un ratolí 3D, un comandament de videojoc o un controlador MIDI, per a totes les aplicacions o per a una sola. Vegeu [Feu servir un trackpad, un ratolí 3D o un comandament](common:input-devices).
- **Files de la barra d'eines.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ofereix {{ui:Ajusta}} (l'inici), {{ui:2 files}} i {{ui:1 fila}}; els grups que no hi caben es desplacen de costat. Vegeu [Organitzeu els taulers](common:arrange-panels).
- **Tauler de Problemes.** El tauler compartit d'avisos i notes ara inclou la comprovació d'estoc del proveïdor de dalt, al costat de les altres comprovacions.
- **Complements.** Els complements segueixen la vostra llista de compte. Vegeu [Complements i la llista del vostre compte](common:addons-basics).
- **Connecteu la vostra IA.** CadCraft Studio és el centre: connecteu el vostre assistent una vegada per a les vuit aplicacions. Studio no té IA pròpia.

### Corregit a la 0.8.1

- **Secció de classes d'un fitxer DWG.** La secció de classes d'un fitxer DWG es llegia com un tipus incorrecte. Això està corregit a TakeoffCraft, i a quatre altres aplicacions.
- **Studio pot canviar d'idioma mentre s'executa.** Abans, Studio i les seves edicions empaquetades eren només en anglès. Això no s'ha provat a la versió d'escriptori a totes les plataformes; digueu-nos si l'idioma no canvia.

### Encara no en aquesta versió

- **Sense signatura de codi.** Windows pot avisar, i en un Mac feu clic dret i trieu {{ui:Obert}} la primera vegada. Les versions per a botigues (Microsoft Store, Google Play, App Store) estan en espera, i la versió per a iPad i iPhone no es va recompilar per a la 0.8.1.
- **Actualitzacions de Studio.** L'instal·lador de Windows i els paquets de Linux comproven una vegada al dia i pregunten primer. El zip portable només us ho diu, i macOS i l'APK no s'actualitzen sols. El .dmg de macOS de la 0.8 seguirà la versió.
- **Connecteu la vostra IA.** La connexió d'un clic dins de Studio, el connector allotjat per a la IA al navegador, la vostra pròpia clau d'API dins de Studio i un paquet MCP publicat no es prometen en aquesta versió.
- **Compta-ho tot.** Necessita símbols dibuixats de la mateixa manera que a la llegenda, i un símbol amb un mur o una línia llarga que el travessa es pot perdre. No es troben els símbols simètrics, i un full sense escala dibuixat a una altra mida es cerca a la mida de la llegenda. Reviseu les troballes del primer full abans de confiar en la resta.
- **Estoc del proveïdor.** Les xifres d'estoc són tan actuals com el fitxer que afegiu. La comprovació mai no pregunta a un proveïdor.
- **Idiomes.** La barra d'aplicació en tàmil es desborda.

Tota la resta és a [Encara no implementat](topic:not-built-yet). Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
