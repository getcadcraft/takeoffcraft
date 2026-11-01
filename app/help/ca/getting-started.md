---
title: Primers passos amb TakeoffCraft
summary: Què fa TakeoffCraft, on funciona i el teu primer element mesurat i amb preu a partir d'un conjunt de plànols en PDF.
keywords: inici, primer amidament, inici ràpid, introducció, pressupost, amidament de quantitats, conjunt de plànols, pdf
from: 3b9da1fb
---

TakeoffCraft mesura conjunts de plànols, PDF i dibuixos DWG o DXF, i converteix els mesuraments en un pressupost amb preus. Obres els fitxers (un dibuix compta directament pels seus blocs: consulta [Obre un dibuix DWG o DXF](topic:open-a-drawing)), dones una escala a cada full (un dibuix porta la seva pròpia), fas **elements** (un tipus de paret, un acabat de terra, un accessori) i fas clic sobre els fulls per prendre'n els mesuraments. Les quantitats, els costos i el total de l'obra s'actualitzen a mesura que avances. Pots exportar el pressupost com a full de càlcul i com a còpia dels PDF amb l'amidament dibuixat a sobre.

Si ja has fet amidaments en altres programes, llegeix després [Des d'altres programes d'amidament](topic:coming-from). Algunes coses funcionen de manera diferent aquí.

## On funciona

TakeoffCraft funciona al teu navegador web. Obre TakeoffCraft i la pantalla és a punt a l'instant; no cal instal·lar res.

- **Els teus PDF es queden al teu ordinador.** El navegador els obre i mai no es pugen. Desar és una baixada.
- Funciona als navegadors Chrome, Edge, Firefox i Safari actuals. Consulta [Navegadors i ordinadors](common:browsers).
- Funciona sense connexió a internet una vegada tries {{ui:Save for offline}} a la barra d'aplicació i diu {{ui:Offline ready}}. Consulta [Treballar sense connexió](common:offline).
- El desament al núvol encara no està disponible. Per a un programa d'escriptori, TakeoffCraft arriba dins de CadCraft Studio, amb les altres set aplicacions.

## El teu primer amidament en deu passos

Aquest recorregut mesura un tipus de paret i el posa preu. Triga pocs minuts amb qualsevol plànol que tinguis.

1. Tria {{ui:Open plans}} al grup {{ui:File}} de la barra d'eines (o prem {{key:Mod+O}}), tria un o més PDF i tria Obre. També pots arrossegar els PDF a qualsevol lloc de la pàgina.
   Els fulls apareixen a l'esquerra i el primer full s'obre al mig.
2. Busca l'escala impresa del full al seu caixetí o sota el títol d'un dibuix.
3. Obre la llista {{ui:Preset}} del grup {{ui:Scale}} i tria aquesta escala, per exemple `1/4" = 1'-0"`.
   La barra de sota del full ara diu "Scale 1/4" = 1'-0"".
4. Tria {{ui:Check}} (o prem {{key:D}}) i fes clic als dos extrems d'una cota impresa al dibuix.
   La lectura de la barra d'estat, a baix a l'esquerra, ha de coincidir amb la cota impresa. Si no coincideix, consulta [Defineix l'escala](topic:set-the-scale).
5. Al panell {{ui:Items}} de la dreta, tria {{ui:New item}}, escriu un nom com `Interior wall type A`, deixa el tipus a {{ui:Linear (length)}} i tria {{ui:Add}}.
6. Tria {{ui:Linear}} a la barra d'eines (o prem {{key:L}}).
7. Fes clic al començament d'una paret i després a cada cantonada al llarg d'ella. Fes doble clic, prem {{key:Enter}} o fes clic dret per acabar el tram.
   El tram es dibuixa del color de l'element i la seva longitud apareix al costat de l'element.
8. Al editor d'elements sota {{ui:Items}}, escriu `9'-0"` a {{ui:Height}}, `0.85` a {{ui:Material $/LF}} i `1.20` a {{ui:Labor $/LF}}.
   La taula {{ui:Quantities}} de sota mostra la longitud, el material i la mà d'obra estesos per a l'element, i el {{ui:Job total}}.
9. Tria {{ui:Save takeoff}} (o prem {{key:Mod+S}}).
   El navegador baixa un fitxer `.takeoff.json`. Conté els teus elements, escales i marques, i es torna a obrir sobre els mateixos PDF.
10. Obre el menú {{ui:Export}} de la barra d'eines i tria {{ui:XLSX}} per baixar el pressupost com a full de càlcul.

:::tip
Prem {{key:Esc}} per aturar el que estàs fent i tornar a l'eina {{ui:Select}}. {{key:Mod+Z}} desfà qualsevol canvi.
:::

## Què llegir després

- [La pantalla de TakeoffCraft](topic:workspace) descriu cada part de la finestra.
- [Inicia un amidament i obre un conjunt de plànols](topic:open-plan-set) explica diversos PDF i la llista de fulls.
- [Crea elements d'amidament](topic:create-items) explica tipus, unitats, pèrdua i tarifes.
- [Muntatges i fórmules](topic:assemblies) converteix un mesurament en muntants, plaques i més.
- [Teclat i ratolí](topic:keyboard) enumera totes les tecles.
