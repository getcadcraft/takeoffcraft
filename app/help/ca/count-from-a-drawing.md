---
title: Recompte a partir d'un dibuix
summary: Compteu blocs, objectes d'una capa o text directament d'un DWG o DXF: exacte, amb blocs imbricats, variants de blocs dinàmics i matrius de blocs tractades, en un sol pas per desfer.
keywords: recompte a partir del dibuix, recompte CAD, recompte de blocs, comptar blocs, inserir, nom de bloc, blocs imbricats, bloc dinàmic, variant, minsert, matriu, capa, tipus d'entitat, cercles, text, atribut, etiqueta, capes ocultes, recompte exacte, com, portes, accessoris
from: 5060e24e
---

{{ui:Recompte CAD}} a la barra del full (l'ordre **Recompte a partir del dibuix** en els altres estils de menú) compta el que un DWG o DXF diu que hi ha. Mentre {{ui:Recompte automàtic}} busca una imatge d'un símbol i pot perdre'n un o trobar-ne un de fals, això compta els objectes: cada inserció d'un bloc anomenat `DOOR-36` és una porta. Obriu primer el dibuix: [Obriu un dibuix DWG o DXF](topic:open-a-drawing).

## Compta un bloc

1. Obriu un full del dibuix. {{ui:Recompte CAD}} és a la barra del full.
2. Trieu-lo. La finestra llista els blocs amb quants n'hi ha de cada. Cerqueu per nom, i després trieu-ne un.
3. Comproveu la línia sota la llista: "22 trobats, 22 per afegir."
4. Sota {{ui:Afegeix a}}, trieu un element de recompte, o deixeu {{ui:Un element nou de recompte}} i doneu-li un nom.
5. Trieu el botó d'afegir, que n'indica el nombre: {{ui:Afegeix 22 marques}}. Les marques apareixen als punts d'inserció del bloc, i la quantitat de l'element és el recompte.

És un sol pas per desfer: {{key:Mod+Z}} treu les marques (i un element nou) alhora. El pressupost, el full de càlcul i el PDF marcat tracten l'element com qualsevol altre element de recompte.

### Què compta

- **Cada inserció del nom del bloc**, sigui quina sigui la seva escala i angle, a l'espai model o a l'espai de paper. Els noms de bloc no distingeixen majúscules i minúscules.
- **Matrius de blocs** (MINSERT): cada còpia de la matriu és una.
- **Blocs imbricats.** Un bloc col·locat dins d'un altre bloc es compta a cada profunditat. La llista diu "6 dins d'altres blocs"; desmarqueu {{ui:Compta també els blocs dins d'altres blocs}} per comptar només les insercions col·locades directament al dibuix.
- **Blocs dinàmics.** Un bloc dinàmic es compta amb el seu propi nom, no amb les còpies anònimes (`*U12`) que guarda el fitxer. Els seus estats es llisten a part ("Simple 12, Doble 4"): trieu un estat per comptar només aquests, o {{ui:Totes les variants}}. Quan un fitxer no indica quin estat mostra una còpia, aquestes es llisten com a "(estat desconegut)".
- **Filtre de capa.** Un bloc en diverses capes: trieu-ne una sota {{ui:A la capa}}.

### Què no

- **Capes ocultes.** Un objecte en una capa apagada o congelada al fitxer (o que heu amagat a {{ui:Capes}}) queda exclòs, i la línia en diu quants: "3 en capes ocultes excloses". Marqueu {{ui:Compta'ls també}} per incloure'ls.
- **Dibuixos enllaçats que no estan oberts** no es compten; la finestra ho indica.
- **Objectes apilats exactament sobre un altre del mateix tipus** es compten com a dos (són dos objectes) i la finestra ho indica: normalment és un descuit de dibuix que val la pena mirar.

## Aquest full, o tot el dibuix

- **Què mostra aquest full** compta els objectes que mostra el full: en una presentació, els objectes del model dins de les seves finestres gràfiques (una capa congelada en una finestra gràfica no es compta allà) més els propis de la presentació.
- **Tot el dibuix, cada objecte una vegada** compta l'espai model una vegada, amb les marques al full Model, i no compta el que diverses presentacions tornen a mostrar.

Comptar el que mostra una presentació i comptar el que mostra el Model donen el mateix nombre per als mateixos objectes; no sumeu tots dos a un mateix element.

## Torna a comptar

Tornar a comptar el mateix bloc amb el mateix element només afegeix el que és nou: "22 ja comptats." Cada marca representa un objecte.

## Per capa i tipus

A {{ui:Per capa i tipus}} trieu una capa i un tipus d'objecte (cercles, polilínies, trames…): "tots els cercles a E-LITE". Marqueu {{ui:Compta també els objectes dins de blocs}} per incloure els que hi ha dins de les definicions de bloc, a cada lloc on el bloc és inserit.

## Per text

A {{ui:Per text}} escriviu el text, com `A3`, i indiqueu si és exactament aquest, si el conté, o si el té com a paraula sencera. Els objectes de text, el text de línia de crida múltiple i els valors dels atributs de bloc es compten tots (un atribut d'etiqueta `ITEM = A3` es troba); trieu {{ui:A l'atribut}} per comptar només un atribut. Els textos més habituals es llisten per fer-hi clic.

## Quan cal usar el recompte automàtic

Useu {{ui:Recompte automàtic}} per als PDF i per als símbols d'un dibuix que no són blocs (dibuixats solts, o descomposts). Dibuixats com a blocs, compteu-los aquí.
