---
title: Què ha après dels vostres amidaments
summary: TakeoffCraft guarda els símbols que vau confirmar amb el Recompte automàtic, els vostres conjunts de condicions, els muntatges que més useu i els patrons que repetiu a totes les pàgines, tot dins del propi fitxer de l'amidament. Veure-ho, utilitzar-ho, esborrar-ho.
keywords: aprendre, après, aprenentatge, assistent, recordar, símbols, plantilles, igual que l'última feina, última feina, conjunt de condicions, condicions, reutilitzar, muntatges, més usats, suggeriments, repeteix a totes les pàgines, cada pàgina, caixetí, patró, esborra-ho tot, oblidar, privacitat
from: 54d99e99
---

TakeoffCraft va sent més ràpid com més amidaments hi feu. Aprèn **només del que accepteu**:

- els símbols que heu marcat amb [Recompte automàtic](topic:auto-count) i després heu afegit,
- els conjunts de condicions que deseu,
- els muntatges que useu (una vegada per feina),
- els patrons de marques que repetiu a totes les pàgines.

És una simple coincidència sobre els vostres propis fulls, la mateixa cerca que fa el Recompte automàtic. No és un model entrenat. Tot el que aprèn es guarda **al fitxer d'aquest amidament** (`.takeoff.json`), i no s'envia enlloc. Per portar-ho a la propera feina, useu [Igual que l'última feina](topic:what-it-learned#same-as-last-job).

Trieu {{ui:Après}} a la barra d'eines (la bombeta, al costat de {{ui:Recompte automàtic}}) per veure-ho tot.

## Símbols

Quan marqueu un símbol amb {{ui:Recompte automàtic}} i trieu {{ui:Afegeix}}, es guarda el símbol que heu marcat, amb el nivell de coincidència que heu acceptat.

- A {{ui:Après}}, trieu {{ui:Troba en aquest full}} o {{ui:Troba en tots els fulls}}. S'obre la revisió habitual del Recompte automàtic: feu clic a un quadre per deixar-lo fora, moveu el control lliscant, i després afegiu-los. No s'afegeix res fins que no ho feu.
- Quan obriu un full que encara no té cap dels símbols apresos, una barra a la part superior ofereix {{ui:Troba …}} per a aquell símbol. {{ui:Ara no}} l'amaga per a aquell full.
- Si l'amidament no té cap element amb aquell nom, afegir les marques també afegeix l'element (un sol pas de desfer).
- Tornar a afegir el símbol del mateix element el compta amb el que ja coneix; un símbol que es veu diferent es guarda com a segon.
- Com el Recompte automàtic, troba el símbol girat en angle recte i en fulls a una altra escala.

## Conjunts de condicions

Un conjunt guarda les condicions d'un amidament (elements amb les seves unitats, tarifes, pèrdues i muntatges), sense marques.

1. A {{ui:Après}}, trieu {{ui:Desa les condicions d'aquest amidament com a conjunt…}} i poseu-li un nom. Un conjunt amb el mateix nom se substitueix.
2. En un amidament que té el conjunt, {{ui:Afegeix}} posa les condicions que encara no té. Les condicions amb el mateix nom i tipus es deixen com són. És un sol pas de desfer.

## Igual que l'última feina

El fitxer de l'última feina conté el que va aprendre. Per començar una feina nova a partir d'ell:

1. Obriu els plànols nous i trieu {{ui:Après}} › {{ui:Igual que l'última feina…}}.
2. Trieu el `.takeoff.json` de l'última feina.
3. Marqueu què cal portar: les seves condicions (només les que aquest amidament no té) i el que va aprendre (símbols, conjunts, muntatges, patrons). Després {{ui:Porta-les}}.

Les seves condicions es guarden també com a conjunt amb el nom de la feina. Les seves marques i quantitats es queden al seu propi fitxer. Tot el procés és un sol pas de desfer.

## Muntatges que més useu

Un element que té un muntatge compta com a usat una vegada per feina quan té una quantitat i desen l'amidament. Una feina és el conjunt de fitxers de plànols de què es fa l'amidament, així que desar el mateix amidament de nou no compta dues vegades. La llista sota {{ui:Muntatges més utilitzats}} posa primer els que més useu. Deixa fora els que aquest amidament ja té. {{ui:Afegeix}} n'hi posa un tal com l'havíeu usat per última vegada, amb totes les seves parts.

## Repeteix a totes les pàgines

Per a marques que són iguals a totes les pàgines d'un conjunt, com un recompte de caixetí o un detall típic:

1. Seleccioneu les marques d'un full ([Selecciona les marques](topic:copy-paste#select-the-marks)).
2. A {{ui:Après}}, trieu {{ui:Repeteix les marques seleccionades a totes les pàgines…}}, poseu un nom al patró i confirmeu.

Van a totes les altres pàgines obertes **de la mateixa mida**, al mateix lloc, en un sol pas de desfer. Les longituds i àrees només van a pàgines de la mateixa escala; els recomptes van a qualsevol pàgina d'aquella mida. Una pàgina que ja les té es salta. El patró es guarda, així que les pàgines que obriu més tard reben la proposta a la barra, o podeu usar {{ui:Repeteix a totes les pàgines}} de la llista.

## Veure-ho, esborrar-ho

Tot el que s'ha après es llista a {{ui:Après}}. La paperera n'esborra una cosa. {{ui:Esborra-ho tot}} esborra tot el après i deixa intactes els vostres elements i marques. Ambdues accions es poden desfer fins que tanqueu l'amidament, i ambdues es desen amb l'amidament.

Per deixar d'aprendre en un amidament, desmarqueu {{ui:Aprèn d'aquest amidament}}. No s'aprèn res de nou, i el que hi ha llistat es queda fins que l'esborreu.

## Bon de saber

- Les versions anteriors de TakeoffCraft obren un fitxer amb coses apreses amb normalitat. Ignoren aquesta part, i l'eliminen si tornen a desar el fitxer.
- Un símbol après és una petita imatge del que vau marcar, guardada al fitxer (uns quants kilobytes cadascuna).
- Els símbols apresos es cerquen com les cerques del Recompte automàtic, així que s'apliquen els mateixos límits: [Recompte automàtic d'un símbol](topic:auto-count).
