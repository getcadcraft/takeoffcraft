---
title: Oorskakeling vanaf ander hoeveelheidsopname-sagteware
summary: Hoe die gewoontes van toegewyde hoeveelheidsopnameprogramme en PDF-merkinstrumente op TakeoffCraft pas, en die verskille wat mense laat struikel.
keywords: oorskakel, migreer, voorwaardes, onderdele, meetinstrumente, opmerkingslys, hoeveelheidskakel, hoeveelheidsopname-gewoontes, verskille, vergelyk
from: 12004ce5
---

As jy hoeveelheidsopname in PlanSwift gedoen het of met die meetinstrumente in Bluebeam Revu, sal die meeste van TakeoffCraft vertroud voel: 'n planstel, 'n skaal per blad, dinge wat jy meet, en 'n geprysde totaal. Die manier waarop die dele saam pas, verskil op sommige plekke, en daardie plekke is hieronder.

As jy PlanSwift of On-Screen Takeoff ken, kies die menustyl {{ui:Hoeveelheidsopname-lessenaar}} in {{ui:Instellings}} › {{ui:TakeoffCraft}} › {{ui:Kieslyste, sleutels en muis}}: 'n kieslysbalk met Lêer, {{ui:Wysig}}, {{ui:Aansig}}, {{ui:Skaal}}, Hoeveelheidsopname, {{ui:Items}}, {{ui:Opmerkings}} en {{ui:Uitvoer}} bo 'n ry van die hoeveelheidsopnamegereedskap, met die skaalvoorinstellings op die bladbalk. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).

## Gewoontes gekoppel

| Jy is gewoond aan | In TakeoffCraft |
|---|---|
| Oopmaak van 'n werk of projek wat die planne stoor (PlanSwift) | Maak die PDF's en die `.takeoff.json`-projek langs mekaar oop. Die projek stoor net die hoeveelheidsopname; die PDF's bly jou eie lêers. |
| 'n Lys opmerkings met notas, wolke en uitligte (Bluebeam) | {{ui:Opmerkings}} op die bladbalk: notas, wolke en uitligte met 'n status (Oop, Beantwoord, Gesluit), gelys onder **Opmerkings**, en geteken in die gemerkte PDF. Sien [Notas, wolke en uitligte](topic:markups). |
| Metings wat as opmerkings binne die PDF gestoor word (Bluebeam) | Die hoeveelheidsopname leef in die `.takeoff.json`-lêer. {{ui:Gemerkte PDF}} skryf 'n kopie met die hoeveelheidsopname getekend in, vir deling; {{ui:PDF met die hoeveelheidsopname binne}} skryf 'n kopie wat die hoeveelheidsopname dra, om weer in TakeoffCraft oop te maak. |
| Hoeveelheidsopname-items (PlanSwift), pasgemaakte meetinstrumente in die Gereedskapkis (Bluebeam) | **Items** onder {{ui:Items}}: naam, tipe, kleur, eenheid, hoogte of diepte, afval, tariewe. |
| Onderdele en samestellings met formules (PlanSwift) | Die item se {{ui:Samestelling}}: komponente met 'n formule wat `L H A N P` gebruik. |
| Die bladskaal stel, of kalibreer (albei) | 'n {{ui:Voorinstelling}}-lys of {{ui:Kalibreer}} in die {{ui:Skaal}}-groep, per blad. {{ui:Kontroleer}} meet 'n bekende maat. |
| Een skaal op 'n reeks bladsye toepas | Nog nie: stel elke blad. |
| Aansigvensters met verskillende skale op een blad (Bluebeam) | Nog nie: een skaal per blad. |
| Polilengte- en oppervlaktegereedskap (Bluebeam), lineêre en oppervlakte-hoeveelheidsopname (PlanSwift) | {{ui:Lineêr}} ({{key:L}}) en {{ui:Oppervlakte}} ({{key:A}}). |
| Shift vashou vir reguit lyne | {{key:Shift}} vang op 45°-stappe, dieselfde idee. |
| Vasvang aan die tekening se lyne | Standaard aan: eindpunte, middelpunte, snypunte en die naaste punt op 'n lyn, met {{key:F3}} om dit af te skakel, soos in CAD-programme. |
| Telinstrument (albei) | {{ui:Tel}} ({{key:C}}). |
| Visuele soektog na simbole (Bluebeam) | {{ui:Outo-tel}} ({{key:S}}): boks een simbool, hersien, voeg by. |
| Uitsnydings of aftrekkings in oppervlaktes | {{ui:Uitsnyding}} ({{key:X}}) op 'n gekose oppervlakte, en ronde uitsnydings. |
| Aftrekkings op lineêre lope | Trek die loop reguit deur en druk {{key:E}} ({{ui:Aftrek}}) vir die opening. Sien [Meet lineêre lope](topic:measure-linear). |
| Boogsegmente in 'n polilyn | {{ui:Boog}} ({{key:R}}): klik 'n punt op die kromme, en dan die einde daarvan. |
| Die opmerkingslys met hoeveelheidskolomme (Bluebeam) | Die {{ui:Hoeveelhede}}-tabel, {{ui:Per item}} of {{ui:Per blad}}. |
| Beramingsrooster met pryse (PlanSwift) | Dieselfde tabel: afval, materiaal en arbeid per eenheid, uitgebreide totale, {{ui:Projektotaal}}. |
| Uitvoer na Excel | {{ui:XLSX}} met lewendige formules, of {{ui:CSV}}. |
| Escape om 'n instrument te stop | {{key:Esc}} kanselleer en keer terug na {{ui:Kies}}. |
| Regsklik om klaar te maak | Regsklik maak ook hier 'n lope klaar of sluit 'n oppervlakte. Daar is geen regsklikkieslys nie. |

## Verskille wat mense laat struikel

**Die hoeveelheidsopname is nie binne jou PDF nie.** Niks wat jy doen, verander jou PDF's nie. Stoor die `.takeoff.json`-lêer en hou dit by die tekeninge. As jy iemand die gemerkte PDF stuur, stuur jy nie 'n wysigbare hoeveelheidsopname nie: stuur die projeklêer en die oorspronklike PDF's, of 'n [PDF met die hoeveelheidsopname binne](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).

**PDF's word volgens inhoud gepaar, nie volgens naam nie.** 'n Hersiene blad wat oor die ou lêernaam gestoor word, is vir TakeoffCraft 'n nuwe lêer, sonder skaal en sonder merke. Jou ou merke bly op die ou weergawe en tel steeds. Sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen#when-a-pdf-has-changed).

**Merke sonder skaal word uitgelaat, nie as nul getel nie.** As 'n blad geen skaal het nie, tel sy lope en oppervlaktes nie, en die tabel sê "Onvolledig". In baie programme sou jy net 0 sien. Sien [Stel die skaal](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

**Daar is geen raaiwerk oor bladgrootte nie.** Voorinstellings neem aan dat die PDF op volle grootte gedruk is. 'n PDF op halwe grootte of "pas by bladsy" het {{ui:Kalibreer}} nodig. Gebruik altyd {{ui:Kontroleer}}.

**Een item, een hoofdtipe, meer as jy vra.** 'n Item is lineêr, oppervlakte of tel, en sy tipe sluit sodra dit merke het. 'n Voorwaarde wat jou sowel 'n oppervlakte as sy omtrek gee, is 'n oppervlakte-item: sy omtrek is die `P`-veranderlike. 'n Muur met beide lengte en oppervlakte is 'n lineêre item met 'n hoogte. Vir 'n item met meerdere voorwaardes, soos 'n kamer met 'n vloer, 'n basis en deure, merk die ander soorte onder **Meet ook** aan: elkeen word op sy eie ry geprys. Sien [Een item, verskeie soorte merke](topic:create-items#one-item-several-kinds-of-marks).

**Formules werk op totale.** Samestellingsformules gebruik die item se totale oor elke blad, nie elke lope afsonderlik nie. `N` (die aantal lope of oppervlaktes) is daar vir ekstras per lope, soos een ekstra stud per muur.

**Omtrek sluit uitsnydings in.** 'n Oppervlakte se `P` voeg die rande van sy gate by. Sien [Meet oppervlaktes met uitsnydings](topic:measure-areas#read-the-area).

**Sleep beweeg die blad.** 'n Sleep met die linkerknoppie op die blad beweeg, in elke instrument behalwe {{ui:Outo-tel}}. Jy hoef nooit na 'n beweeginstrument oor te skakel nie. Die wiel zoem; dit rol nie.

**'n Herstelkopie, nie 'n wolk nie.** TakeoffCraft hou 'n kopie van jou werk in hierdie blaaier en bied dit weer aan ná 'n ineenstorting ([As die oortjie of die blaaier stop](topic:save-and-reopen#if-the-tab-or-the-browser-stops)), maar die hoeveelheidsopname is joune om te stoor: {{key:Mod+S}}. Wolkstoring is nog nie beskikbaar nie.

**Alles is in die blaaier.** Daar is niks om te installeer nie, en die planne word nooit opgelaai nie. Vir 'n lessenaarprogram kom TakeoffCraft in CadCraft Studio, saam met die ander sewe programme.

## Nog nie hier nie

Streke met skaal per blad is nog nie gebou nie. Sien [Wat nog nie gebou is nie](topic:not-built-yet) vir die volledige lys en wat jy eerder moet doen.
