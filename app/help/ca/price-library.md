---
title: Biblioteca de preus
summary: Guardeu els vostres elements, tarifes i preus descomposts en una biblioteca, importeu-la des d'un CSV o un pressupost anterior, afegiu-hi elements de la biblioteca a qualsevol amidament i actualitzeu-hi els preus d'un amidament.
keywords: biblioteca, paquets d'oficis, llista de preus, llibre de preus, base de dades de costos, importa csv, tarifes, preus descomposts, reutilitza, elements de plantilla, actualitza preus, torna a preuar
from: 37356c68
---

La **biblioteca de preus** guarda els elements que useu obra rere obra: el seu tipus, unitat, alçada, pèrdua, tarifes de material i de mà d'obra, i el seu preu descompost. Es guarda en aquest navegador, a part de cada amidament, de manera que qualsevol amidament que obriu aquí pot fer-la servir.

Obriu-la amb {{ui:Biblioteca}} a la part superior del tauler {{ui:Elements}}.

## Omplir la biblioteca

- {{ui:Importa CSV…}} llegeix un full de càlcul desat com a CSV (vegeu les columnes més avall). Els elements el nom i tipus dels quals ja són a la biblioteca es reemplacen; la resta s'afegeix. Les files que no pot llegir s'ometen, i indica quines i per què.
- {{ui:Afegeix els elements d'aquest amidament}} copia cada element de l'amidament obert a la biblioteca, amb les seves tarifes i el seu preu descompost (no les seves marques).
- El pressupost en CSV que exporta TakeoffCraft ([Exporta el pressupost](topic:export-estimate)) s'importa tal com és: els preus de l'obra anterior alimenten la següent.

- {{ui:Paquets d'oficis…}} afegeix preus descomposts gratuïts per a un ofici, com ara placa de guix, elèctric o formigó, sense preus. Vegeu [Paquets d'oficis](topic:trade-packs).

{{ui:Exporta CSV}} desa la biblioteca com a CSV, per guardar-ne una còpia, editar-la en un full de càlcul o donar-la a un company. {{ui:Buida}} la buida (cliqueu dos cops).

:::note
La biblioteca viu a l'emmagatzematge d'aquest navegador. Un altre navegador, un altre ordinador o una finestra privada en tenen una de pròpia (o cap). Exporteu-la per moure-la.
:::

## Usar-la en un amidament

- Marqueu elements (escriviu a {{ui:Cerca a la biblioteca}} per reduir la llista) i trieu {{ui:Afegeix a l'amidament}}. S'afegeixen amb els seus preus descomposts en un sol pas que {{key:Mod+Z}} desfà. Un nom que ja hi ha a l'amidament rep un número, com `Moqueta (2)`.
- {{ui:Actualitza els preus}} dona als elements de l'amidament la pèrdua i les tarifes de la biblioteca, per a cada element el nom i tipus del qual coincideixen amb un de la biblioteca, i el mateix per als components de preu descompost amb el mateix nom. Les alçades, unitats i fórmules es queden tal com són. Un {{key:Mod+Z}} torna tots els preus antics.

## Les columnes del CSV

La primera fila anomena les columnes, en qualsevol ordre; les altres columnes s'ignoren.

| Columna | Què hi va |
|---|---|
| Item (or Name) | El nom de l'element. Obligatori. |
| Type | Linear, Area o Count (LF, SF i EA també funcionen). Si queda buida, la unitat decideix. |
| Unit | LF o m; SF, SY o m²; EA. Buida: la unitat habitual del tipus. |
| Waste % | `10` o `10%`. |
| Material per unit, Labor per unit | Tarifes com `2.10` o `$1,250`. |
| Height (or Depth) | `9'-0"`, `9`, o `2.7` per a unitats mètriques. |
| Component, Formula | Una fila amb un nom de Component (o el Type `Component`) forma part del preu descompost de l'element de dalt. La seva Unit, Waste % i tarifes són les seves pròpies; la seva Formula fa servir les lletres de l'element, vegeu [Preus descomposts i fórmules](topic:assemblies). |

```
Item,Type,Unit,Waste %,Material per unit,Labor per unit,Height,Component,Formula
Partition type A,Linear,LF,10,2.10,3.33,9'-0",,
,Component,EA,,4.25,,,Studs 16 in. o.c.,ceil(L / 1.333) + N
VCT flooring,Area,SF,5,1.85,1.10,,,
Duplex outlets,Count,EA,,3.50,45,,,
```

Les comes, els punts i coma o els tabuladors entre columnes funcionen tots.
