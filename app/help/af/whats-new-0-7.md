---
title: Wat is nuut in 0.7 (vroeër)
summary: DWG- en DXF-tekeninge open as blaaie met hul eie skaal, presiese tellings en lengtes uit die tekening self, die gekose onderaannemer-tender as 'n pakket se prys, tenderuitnodigings met verseëlde pryse, assistent-gereedskap vir tekeninge, en USD uit die 3D-nagaansig.
keywords: wat is nuut 0.7, vroeër vrystelling, vrystellingsnotas, veranderinge, changelog, 0.7, weergawe, nuwe kenmerke, dwg, dxf, tekening, uitlegte, modelruimte, tekeningskaal, tel vanuit tekening, cad-telling, blokke, dinamiese blokke, kenmerke, lae, xref, gekoppelde tekening, meet tekening, polilyn, arsering, gemerkte pdf, gekose tender, gebruik 'n tender, stuur vir tenders, tenderuitnodiging, verseëlde tenders, tenderopening, laat tender, onderaannemer-rekords, csv, assistent, mcp, usd, usdz, eenhede, eenheidslyste, kompak, paneele, dialoë, portugees
from: 0e3a424f
---

Dit is wat in TakeoffCraft 0.7 verander het, vergeleke met 0.6. Tekeninge open nou soos hulle is, sonder om eers na PDF te plot, en 'n tenderpakket kan na onderaannemers gaan en pryse terugkry.

## Nuut

### DWG- en DXF-tekeninge

- **Maak 'n tekening as blaaie oop.** {{ui:Maak planne oop}} in die {{ui:Lêer}}-groep ({{key:Mod+O}}, of sleep die lêers) neem DWG- en DXF-tekeninge saam met PDF's. Modelruimte en elke uitleg word blaaie in die {{ui:Blaaie}}-lys, en 'n hoeveelheidsopname kan tekeninge en PDF's saam dek. Niks word opgelaai nie. Sien [Maak 'n DWG- of DXF-tekening oop](topic:open-a-drawing).
- **Die skaal kom uit die tekening.** 'n Uitleg begin by die skaal van sy grootste viewport, benoem as 'n voorinstelling wanneer dit een is, soos 1/2" = 1'-0". Model begin in die tekening se eenhede. 'n Tekening sonder eenhede sê "Geen skaal" totdat jy dit kalibreer. {{ui:Kalibreer}}, {{ui:Kontroleer}} en {{ui:Voorinstelling}} wen steeds. Sien [Die skaal](topic:open-a-drawing#the-scale).
- **Lae en gekoppelde tekeninge.** {{ui:Lae}} op die bladbalk wys of verberg die tekening se lae. Lae wat die lêer afgeskakel of gevries het, begin versteek en word nie getel nie tensy jy kies. 'n Gekoppelde tekening (xref) wat langs sy gasheer oopgemaak is, word getekend en getel waar dit ingevoeg is; totdat dit oop is, sê die statusbalk wat ontbreek. Sien [Lae](topic:open-a-drawing#layers).
- **Die gemerkte PDF werk vanuit 'n tekening.** {{ui:Uitvoer}} › {{ui:Gemerkte PDF}} teken eers 'n tekening se gemerkte blaaie as 'n PDF, sodat die afskrif jou merke en legenda wys sonder 'n plotstap. Dit word in swart of die tekening se kleure geteken, sonder plotstyltabelle. Sien ['n Gemerkte PDF](topic:export-estimate#a-marked-pdf).

### Presiese tellings en lengtes uit 'n tekening

- **Tel wat die tekening sê daar is.** {{ui:CAD-telling}} op die bladbalk tel 'n blok volgens naam (ingenestelde blokke, dinamiese bloktoestande en blokreekse ingesluit), alles van een tipe op 'n laag, of 'n teks- of kenmerkwaarde. Dit tel wat die blad wys, of die hele tekening een keer. Die merke byvoeg is een ontdoen-stap, en weer tel voeg net wat nuut is by. {{ui:Outo-tel}} bly vir PDF's en vir simbole wat nie blokke is nie. Sien [Tel vanuit 'n tekening](topic:count-from-a-drawing).
- **Meet uit die tekening se eie lyne.** {{ui:Meet tekening}} neem die lyne, boë, polilyne, sirkels, arserings en soliede dele wat jy klik of met 'n venster kies, as merke van 'n lineêre of oppervlakte-item. Boë, bolle en 'n arsering se gate kom presies uit; ellipse en splines word in fyn koorde gemeet, en die balk sê so. Sien [Meet vanuit 'n tekening](topic:measure-from-a-drawing).

### Tenders

- **Gebruik 'n onderaannemer se tender as die pakket se prys.** In {{ui:Uitvoer}} › {{ui:Tenderpakkette en egalisering…}}, kies {{ui:Gebruik}} by 'n tender. Die pakket se items bly as hoeveelhede, een **Gekose tender**-reël dra die prys, items wat die tender uitlaat, bly teen jou eie koste, en oorhead, wins en borg geld daarop. Om tenders te wissel is een ontdoen-stap; die werkboek en die tenderopsomming dra dit. Sien [Gebruik 'n tender as die pakket se prys](topic:bid-leveling#use-a-bid-as-the-packages-price).
- **Stuur 'n pakket vir tenders.** {{ui:Stuur vir tenders…}} onder 'n pakket e-pos elke onderaannemer 'n skakel na 'n bladsy wat geen rekening nodig het nie: hulle sien die omvang en die blaaie as 'n PDF, tik 'n prys op elke reël of merk dit as nie ingesluit nie, voeg notas en tot drie lêers by, of weier. {{ui:Kry pryse}} trek wat teruggekom het in die egalisasieblad, gemerk **web**. Stuur is net oop vir rekeninge wat die CadCraft-span aangeskakel het terwyl dit getoets word (sien hieronder). Sien [Stuur 'n pakket vir tenders](topic:bid-invitations).
- **Verseël tot die opening.** Pryse kan verseëld bly tot 'n openingstyd wat jy stel: tot dan sien niemand 'n prys nie, jy ingesluit. By die opening wys elke tender terselfdertyd, en 'n tender wat na die sluitingstyd gekom het, word as laat gemerk. Sien [Verseëlde tenders en die opening](topic:bid-invitations#sealed-bids-and-the-opening).
- **Onderaannemer-rekords.** Jou rekening op getcadcraft.com hou elke maatskappy se kontakte, vakgebiede, kwalifikasie-antwoorde, en versekerings- en lisensiedatums bymekaar (gemerk as dit een keer verby is of binne 30 dae), met hul vorige tenders. Voer hulle in en uit as CSV, en kies hulle wanneer jy 'n pakket stuur. Sien [Op die webwerf](topic:bid-invitations#on-the-website).

### KI-assistente

- **Assistente kan by die hoeveelheidsopname voeg.** Met **Wysig** gemerk, kan jou eie assistent items (`items_add`) byvoeg en lope, oppervlaktes en tellings op 'n blad meet (`marks_add`; lengtes en oppervlaktes net op 'n geskaleerde blad), elke oproep een ontdoen-stap.
- **Assistent-gereedskap vir tekeninge.** Op 'n oop DWG of DXF kan 'n assistent sy blaaie en wat getel kan word lys, presies tel, die telmerke byvoeg, en uit die tekening se geometrie meet. Sonder dat TakeoffCraft oop is, maak die CadCraft MCP-bediener 'n tekening oop as 'n nuwe hoeveelheidsopname en stoor dit, en `cadcraft count` tel vanaf die opdragreël. Sien [Wat 'n assistent kan vra](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

### USD

- **Die 3D-nagaansig as USD.** {{ui:USD-pakket (.usdz)}} langs {{ui:GLB}} in die 3D-nagaansig skryf elke muur, blad, plaat, telpunt en loop as sy eie voorwerp, benoem na sy item en dra sy hoeveelheid, in meter. 'n Assistent kan dit ook uitvoer (`usd_export`). Sien [Voer die 3D-nagaansig uit as USD](topic:usd).

## In elke program

- **Eenhede.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Eenhede}} het een lys elk vir lengte, oppervlakte, volume, hoek en helling, met die presiese groottes wat die eenhede se definisies gee (die US-opmetingsvoet is sy eie eenheid). Skakel die eenhede wat jy nooit gebruik af, en hulle verlaat die eenheidslyste; merk een met 'n ster, en nuwe werk begin daarin. 'n Lêer hou altyd sy eie eenheid. In TakeoffCraft volg 'n item se {{ui:Eenheid}}-lyste die skakelaars, 'n nuwe item begin in die gemerkte lengte- of oppervlakte-eenheid, dakvierkante (SQ), akker en hektaar is nuwe oppervlakte-eenhede, en 'n lengtekassie neem enige eenheid se merk, soos `3 yd`. Sien [Eenhede, getikte waardes en die eenheidslyste](common:unit-lists).
- **'n Digter uitleg en paneele wat netjies wegraak.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Uitlegdigtheid}} › {{ui:Kompak}} pas meer op die skerm (raakskerms en fone hou hul groot knoppies). Elke syspaneel het 'n slanke titelbalk: sleep dit om die paneel te heg of los te maak, laat dit op 'n ander paneel se balk val om een raam as oortjies te deel, pen dit vas sodat dit na die rand wegskuif, of versteek dit en haal dit van die rand af terug. Sien [Rangskik die paneele](common:arrange-panels#make-the-layout-denser).
- **Dialoë beweeg.** Sleep 'n dialoog aan sy titelbalk uit die pad van die tekening; dit kom terug waar jy dit gelaat het. Dubbelklik op die titelbalk om dit weer te sentreer. Sien [Skuif 'n dialoog](common:arrange-panels#move-a-dialog).
- **Resepte vir KI-assistente.** Tien uitgewerkte versoeke vir jou eie assistent (maak 'n tekening skoon, plot 'n stel, kontroleer tekeninge, vra 'n model vrae, tel 'n hoeveelheidsopname op, probeer 'n onderdeelvariant…), elk met die gereedskap wat dit gebruik en die toestemmings wat dit nodig het, en elk deur ons toetse herspeel. Die programme bevat geen KI nie. Sien [Resepte vir KI-assistente](common:assistants-recipes).
- **Tale.** **Português (Portugal)** is nuut in {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Taal}}. Dit, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** het nou elke woord van die programme, as konsepte wat nog nie deur 'n moedertaalspreker nagesien is nie. Hulponderwerpe is in Engels.
- **CadCraft Studio** sê waarom 'n opdateringskontrole misluk het (nog geen lêer vir jou stelsel, geen netwerk, 'n slegte handtekening nie) in plaas van net "Klaar", en hou op om 'n Wat's new-kaart terug te bring wat jy toegemaak het, totdat daar 'n nuwer vrystelling is.

## Nog nie in hierdie weergawe nie

- **0.7 is nie kode-geteken nie.** Teken, en die Microsoft Store-pakket, het na 0.8 verskuif omdat die sertifikaatvalidering nog nie deurgekom het nie. Kyk die SHA-256 langs elke lêer op getcadcraft.com/download. Op Windows, as SmartScreen die installeerder stop, kies {{ui:Meer inligting}}, en dan {{ui:Hardloop tog}}. Op 'n Mac, die eerste keer, regsklik CadCraft Studio en kies {{ui:Oop}}. CadCraft Studio is nog nie in 'n programwinkel nie, en daar is nog geen iPad- of iPhone-bou nie.
- Die hoek- en helling-lyste in {{ui:Eenhede}} word gestoor, maar geen blokkie lees hulle nog nie.
- **Tenderuitnodigings is vir die meeste rekeninge afgeskakel.** Terwyl die kenmerk getoets word, gaan pos na buitelandse tenderaars net uit vanaf rekeninge wat die CadCraft-span aangeskakel het. Tenderaars se bladsye werk vir elke uitnodiging wat reeds gestuur is. Almal anders: laai die {{ui:Omvang-CSV}} af, e-pos dit self, en tik die tenders in.
- 'n CadCraft Studio-venster kan nog nie tenderuitnodigings stuur nie: dit sê om TakeoffCraft in die blaaier te gebruik. 'n Hoeveelheidsopname met gestuurde versoeke oopmaak, egalisering en 'n tender kies, werk in Studio.
- Aanvullings, toekenningsbriewe, 'n omvangblad wat elke tenderaar teken, en outomatiese herinnerings voor 'n versekeringsdatum verval, is nie gebou nie. 'n Gekose tender herprys nie 'n alternatiewe tender se gebied nie.
- Tekeninge: plotstyltabelle en CTB-lêers word nie toegepas nie, 'n binêre DXF word geweier (stoor dit as ASCII DXF of DWG), gekoppelde tekeninge word net gevind onder die oop lêers volgens lêernaam, en PDF-onderlae, beelde en OLE-voorwerpe in 'n tekening word nie geteken of getel nie. Die tellings en skale is op monstertekeninge nagegaan, nog nie op tekeninge van 'n regte werk wat oopgemaak is in die program wat hulle gemaak het nie.
- 'n Assistent kan items en merke byvoeg, maar kan merke wat reeds daar is nie skuif, verander of skrap nie.

Alles anders is in [Nog nie gebou nie](topic:not-built-yet).
