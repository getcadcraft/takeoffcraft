---
title: Usa TakeoffCraft amb un assistent d'IA
summary: Permeteu que el vostre propi assistent d'IA o script llegeixi les quantitats i el pressupost de l'amidament, afegeixi elements i marques, compti i mesuri en un DWG o DXF, i exporti: permisos, connexió a través de CadCraft Studio i el registre d'activitat.
keywords: ia, assistent, agent, mcp, model context protocol, script, automatització, quantitats, pressupost, permisos, desconnecta, activitat
from: 7fa62ec6
---

## Què aprendreu

Com permetre que un assistent d'IA (o un script que hàgiu escrit) treballi amb TakeoffCraft, i com decidir què pot tocar.

TakeoffCraft **no té IA pròpia** i no envia res enlloc. Hi poseu l'assistent: qualsevol programa que parli el Model Context Protocol (MCP). TakeoffCraft només li dona eines, i vosaltres en trieu quines.

## Activació

1. Obriu {{ui:Configuració}} (l'engranatge de la barra de l'aplicació, o {{key:Mod+,}}) i aneu a la pestanya {{ui:TakeoffCraft}}.
2. Sota {{ui:Assistents}}, marqueu **Permet que els assistents d'IA i els scripts utilitzin TakeoffCraft**. Està desactivat fins que ho feu.
3. Trieu què pot fer: **Lectura** ve marcada per defecte; marqueu **Edició**, **Desa** o **Exporta** només quan les necessiteu.

Les eines fora dels permisos que heu marcat no s'ofereixen a l'assistent, i si n'hi demana una igualment, TakeoffCraft la rebutja i ho escriu al registre d'activitat. Desactivar l'interruptor acaba totes les connexions alhora; {{ui:Restableix la configuració de TakeoffCraft}} també l'apaga.

## Connexió de l'assistent

Els assistents es connecten a través de **CadCraft Studio** al vostre ordinador: Studio executa un petit servidor que només aquest ordinador pot arribar-hi, protegit per un token que genera cada cop que s'inicia. A Studio, trieu {{ui:Connecta un assistent}} i copieu l'adreça i el token a l'assistent (Studio mostra la configuració exacta que cal enganxar). Mai no compartiu el token.

:::note
Una pestanya del navegador no pot obrir una connexió per a un assistent: a les aplicacions del navegador l'interruptor no té efecte fins que no useu CadCraft Studio al vostre ordinador.
:::

## El control segueix essent vostre

- **Cada canvi és un sol pas de desfer**, etiquetat amb el nom de l'assistent (per exemple "Assistant: …"). {{key:Mod+Z}} desfà l'últim canvi de l'assistent en el seu conjunt.
- **Sabreu quan n'hi ha un de connectat.** Un botó a la barra de l'aplicació indica l'assistent mentre està connectat; feu-hi clic per veure què pot fer, o per **Desconnecta**.
- **Activitat.** {{ui:Configuració}} › {{ui:TakeoffCraft}} › {{ui:Assistents}} › {{ui:Activitat}} llista cada crida: quan, quina eina, feta o rebutjada. {{ui:Desa el registre}} en guarda una còpia.

## Què pot demanar un assistent

| Eina | Permís | Què fa |
|---|---|---|
| `app_info`, `sheets_list` | Lectura | L'amidament obert, els seus PDF i fulls, l'escala de cada full i les seves marques |
| `items_list` | Lectura | Els elements amb les seves unitats, tarifes i fórmules de muntatge |
| `takeoff_quantities` | Lectura | Quantitats per element o per full; les marques en fulls sense escala es llisten, mai es compten com a zero |
| `takeoff_estimate` | Lectura | El pressupost amb preu tal com el calcula TakeoffCraft, amb els seus totals |
| `takeoff_export` | Exporta | L'exportació CSV o XLSX pròpia de TakeoffCraft |
| `items_add` | Edició | Afegeix elements amb les seves unitats, tarifes i pèrdues |
| `marks_add` | Edició | Mesura recorreguts, àrees i recomptes en un full. Longituds i àrees només en un full amb escala, mai en un sense escala |
| `cad_sheets`, `cad_catalog`, `cad_count` | Lectura | En un DWG o DXF que heu obert: els seus fulls i les seves escales, què es pot comptar (blocs, capes i tipus, textos), i recomptes exactes, tal com els fa {{ui:Recompte CAD}} ([Compta des d'un dibuix](topic:count-from-a-drawing)) |
| `cad_count_add` | Edició | Compta al dibuix i posa una marca de recompte a cada objecte trobat, en un sol pas; tornar a comptar només afegeix el que és nou |
| `cad_measure` | Edició | Mesura un element lineal o d'àrea a partir de les línies, arcs, polilínies i trames del propi dibuix, tal com ho fa {{ui:Mesura del dibuix}} ([Mesura des d'un dibuix](topic:measure-from-a-drawing)); només en un full amb escala |
| `usd_export` | Exporta | Els recorreguts, àrees i recomptes mesurats d'un full amb escala com a model de revisió 3D en USD (`.usdz`, `.usda` o `.usdc`), tal com ho escriu {{ui:Paquet USD (.usdz)}} a la vista de revisió 3D ([Exporta la vista de revisió 3D com a USD](topic:usd)) |

Amb **Edició** marcada, un assistent afegeix elements i marques (cada crida és un sol pas de desfer); no pot moure, canviar ni suprimir les marques que ja hi són.

El mateix amidament i pressupost estan disponibles sense obrir TakeoffCraft: el servidor MCP de CadCraft obre un fitxer `.takeoff.json` en una carpeta que indiqueu (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), i `cadcraft info Job.takeoff.json` els mostra a la línia d'ordres. També obre un DWG o DXF com a amidament nou sobre els seus fulls (escalats a partir del dibuix tal com ho fa TakeoffCraft), compta i mesura sobre ell amb les mateixes eines `cad_*`, afegeix elements i desa l'amidament (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` compta des de la línia d'ordres.

## Si alguna cosa no funciona

- **L'assistent no veu les eines de TakeoffCraft:** comproveu que l'interruptor estigui activat en aquesta finestra, i que la finestra estigui oberta a Studio.
- **"needs the export permission":** marqueu **Exporta** sota {{ui:Assistents}} i després torneu a demanar-ho.
- **Errors "401" o "token":** el token ha canviat (Studio s'ha reiniciat, o {{ui:Nou token}}). Copieu el nou a la configuració de l'assistent.

## Vegeu també

- [Receptes per a assistents d'IA](common:assistants-recipes): exemples resolts, cadascun amb les eines que crida.
