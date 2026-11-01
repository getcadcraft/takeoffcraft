---
title: Fitxers que obre i desa TakeoffCraft
summary: PDF d'entrada, fitxer de projecte d'amidament, fulls de càlcul i PDF marcats de sortida: què conté cadascun, on va i què canvia en línia, sense connexió i entre navegadors.
keywords: fitxers, formats, pdf, takeoff.json, fitxer de projecte, xlsx, csv, pdf marcat, baixa, desa, obre, sense connexió
from: 1bf9be65
---

## Què obre

| Fitxer | Com | Notes |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}}, o arrossega'l a la pàgina | Diversos a la vegada. Cada pàgina es converteix en un full. |
| Projecte d'amidament (`.takeoff.json`) | {{ui:Open takeoff}}, o arrossega'l a la pàgina | Els teus elements, escales i marques. El pots arrossegar juntament amb els seus PDF. |

Els altres fitxers que arrossegues a la pàgina s'ignoren, i la barra d'estat n'indica els noms.

- **Els PDF protegits amb contrasenya** no s'obren: "(name) està protegit amb contrasenya. Obre'n una còpia sense protecció."
- **El mateix PDF dues vegades** s'obre només una vegada: "(name) ja està obert." TakeoffCraft reconeix els fitxers pel seu contingut, no pel seu nom.
- **Els PDF escanejats** s'obren i es mesuren com qualsevol altre; TakeoffCraft no necessita el text del PDF.
- **Conjunts de plànols grans**: cada PDF es llegeix sencer en obrir-se (per calcular-ne l'empremta), així que un fitxer molt gran triga una estona. Les miniatures es dibuixen una a una a mesura que desplaces la llista.

## Què desa

Cada desament és una baixada. Mai no s'escriu res dins dels teus PDF.

| Tu tries | Obtens | Què hi ha |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Elements, muntatges, tarifes, escales dels fulls i cada marca, vinculades a cada PDF pel seu contingut. Cap pàgina de PDF. |
| {{ui:XLSX}} | `(name).xlsx` | Quatre fulls de càlcul: Pressupost (amb fórmules en directe), Per full, Marques, Escales. |
| {{ui:CSV}} | `(name).csv` | El pressupost com a valors simples, una fila per element i component. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Una còpia de cada PDF obert que té marques, amb l'amidament dibuixat a les pàgines i una llegenda. Un fitxer per cada PDF. |

El nom es pren del primer PDF que has obert en aquest amidament. Encara no hi ha cap camp per canviar-lo: si en vols un altre, canvia el nom del fitxer baixat.

Consulta [Exporta el pressupost i un PDF marcat](topic:export-estimate) i [Columnes d'exportació](topic:export-columns).

## On van les baixades

El navegador les desa on desa totes les baixades, normalment a la carpeta Descàrregues. Troba-la a {{pick:mac=Finder|windows=Explorador de fitxers|linux=el gestor de fitxers}}. Si el navegador està configurat per preguntar on desar cada fitxer, ho preguntarà.

:::chromium
{{ui:Marked PDF}} amb diversos PDF marcats baixa diversos fitxers a la vegada. Chrome i Edge poden preguntar una vegada si aquest lloc pot baixar diversos fitxers. Tria Permet.
:::

:::safari
Safari desa a Descàrregues tret que hagis canviat la ubicació de les baixades a Configuració de Safari, dins de General.
:::

## Per què el fitxer de projecte i els PDF són separats

El fitxer `.takeoff.json` només conté el teu amidament. Torna a trobar els seus PDF pel seu contingut (una empremta de cada fitxer), així que:

- Canviar el nom o moure un PDF no importa.
- Un PDF que un altre programa hagi canviat o tornat a desar compta com un fitxer diferent, fins i tot amb el mateix nom.
- Les marques dels PDF que no són oberts continuen comptant en els totals.

Consulta [Desa i torna a obrir un amidament](topic:save-and-reopen).

## En línia i sense connexió

Els teus PDF i amidaments mai no surten del teu ordinador, ni en línia ni sense connexió. La connexió només importa per carregar el mateix TakeoffCraft.

Per treballar sense connexió, desa primer l'aplicació, mentre estàs en línia:

1. Tria {{ui:Save for offline}} a la barra d'aplicació de dalt.
   El botó va comptant, "Desant 12 de 40", mentre desa.
2. Espera a {{ui:Offline ready}}.

Desar TakeoffCraft guarda al navegador l'aplicació, aquesta ajuda, el lector de PDF, l'escriptor de PDF que fa servir {{ui:Marked PDF}} i el treballador de {{ui:Auto count}}, uns 6 MB. Quan diu {{ui:Offline ready}}, tot funciona sense connexió: obrir PDF, mesurar, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} i {{ui:Marked PDF}}.

| El botó diu | Significat |
|---|---|
| {{ui:Save for offline}} | Encara no és desat en aquest navegador. Tria'l per desar-lo. |
| Desant (n) de (m) | Desant ara mateix. |
| {{ui:Offline ready}} | Desat. Tria'l per a {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | Alguns fitxers no s'han baixat. Comprova la connexió i torna a triar-lo. |
| {{ui:Offline not available}} | Aquesta finestra del navegador no pot guardar una còpia sense connexió (les finestres privades i alguns ordinadors gestionats ho bloquegen). |

Més, incloent quant de temps dura una còpia desada en cada navegador: [Treballar sense connexió](common:offline).

:::offline
Ets sense connexió. Si la barra d'aplicació mostra {{ui:Offline ready}}, tot funciona. Si no, les parts que TakeoffCraft encara no ha carregat en aquesta pestanya (l'escriptor de PDF per a {{ui:Marked PDF}} i el treballador de {{ui:Auto count}}) no es poden carregar ara, i {{ui:Marked PDF}} s'atura amb "No s'ha pogut escriure el PDF marcat". El teu amidament està segur en tots dos casos: {{ui:Save takeoff}}, {{ui:XLSX}} i {{ui:CSV}} no necessiten connexió. No tornis a carregar la pestanya fins que tornis a estar en línia.
:::

:::online
Ets en línia. Abans d'una visita a obra o d'un vol, tria {{ui:Save for offline}} i espera a {{ui:Offline ready}}.
:::

## Fulls de càlcul

El XLSX manté fórmules en directe, així que un programa de fulls de càlcul recalcula el pressupost quan obre el fitxer i el manté correcte quan hi canvies una tarifa o una pèrdua. El llibre s'ha comprovat a LibreOffice Calc, que ha recalculat cada total fins al mateix cèntim. Encara no s'ha obert a Excel.

El CSV són valors simples amb una marca d'ordre de bytes, així que els programes de fulls de càlcul llegeixen bé caràcters com m².

## Escriptori i núvol

:::desktop
Des de la versió 0.5, l'aplicació d'escriptori és CadCraft Studio: TakeoffCraft i les altres set aplicacions en una sola instal·lació. No hi ha cap instal·lador separat de TakeoffCraft.
:::

El desament al núvol encara no està disponible. Guarda els fitxers `.takeoff.json` amb els PDF del projecte i fes-ne còpies de seguretat com qualsevol altre fitxer. Consulta [On van els teus fitxers](common:your-files).
