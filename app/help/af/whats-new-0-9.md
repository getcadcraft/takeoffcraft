---
title: Wat is nuut in 0.9 (vroeër)
summary: Lees lengtes in meter, sentimeter of millimeter, metriese oppervlaktes in m2 met muuroppervlakte, skaalvoorinstellings 1:75 en 1:150, gewig- en temperatuureenhede, Boog met tien metodes, en lewendige wysers, Volg en 'n lys van mense.
keywords: wat is nuut 0.9, vroeëre vrystelling, wat is nuut, vrystellingsnotas, veranderinglys, 0.9, wys lengtes as, meter, sentimeter, millimeter, metries, volg globaal, eenhede, vertooneenhede, m2, vierkante meter, muuroppervlakte, skaalvoorinstellings, 1:75, 1:150, gewig, kilogram, kg, tonne, ton, lb, temperatuur, celsius, fahrenheit, boog, boogmetodes, 3-punt-boog, radius, lewendig, wysers, volg, lys van mense, klas, nutswenke, uitleg, wat is nuut, vrystellingsnotas, veranderinglys, 0.8, 0.8.1, weergawe, nuwe funksies, tel alles, legende, simbooldlegende, hele stel, prysgeheue, vorige werk, laaste werk, tipiese prys, verskaffer, voorraad, lewertyd, agterstand, bestellys, tekort, probleempaneel, assistent, tale, invoertoestelle, werkbalkrye, dwg
from: f4322ba2
---

Dit is wat in TakeoffCraft 0.9 verander het, vergeleke met 0.8.1. Dit is 'n klein vrystelling vir hierdie program: lengtes kan nou in meter, sentimeter of millimeter gelees word, oppervlaktes en skale volg metriese werk behoorlik, en Boog het tien maniere om te teken. Lewendige sessies wys ook wie waar is.

## Nuut

### Lees lengtes in meter, sentimeter of millimeter

- **Wys lengtes as.** {{ui:Instellings}} › {{ui:TakeoffCraft}} het {{ui:Wys lengtes as}} met {{ui:Volg Globaal}}, {{ui:Voet-duim}}, m, cm en mm. {{ui:Volg Globaal}} gebruik die metriese lengte-eenheid wat jy in {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Eenhede}} gemerk het, en voet-duim as niks gemerk is nie. Dit verander hoe lengtes op die blad, in die statusbalk en in die paneel gelees word, insluitend hoogtes, diepte, dikte en die vlakke. 'n Kaal getal wat in 'n hoogteveld getik word, word gelees in die eenheid wat gewys word.
- **Net vertoning.** Hoeveelhede, koste en uitvoere word uit die presiese lengtes bereken. Die keuse van 1/16, 1/8 en 1/4 duim verskyn slegs vir voet-duim. Sien [Wys lengtes in meter](topic:show-lengths-in-meters).
- **Gewigseenhede.** 'n Item {{ui:Getikte hoeveelheid (geen tekening nie)}} kan nou in lb, TON, kg of t wees, en per eenheid geprys word.
- **Temperatuur.** Elke item het 'n opsionele {{ui:Temperatuur}}-veld in die itemredigeerder, getik in grade C of F. {{ui:Wys temperature as}} in {{ui:Instellings}} › {{ui:TakeoffCraft}} bied {{ui:Volg Globaal}}, °C of °F.

### Oppervlaktes en skale vir metriese werk

- **Oppervlaktes in m2 op die tekening.** 'n Oppervlakte wat met 'n metriese item gemeet is, sê nou m2 op die tekeningmerker en in die merkerpaneel, sowel as in die tabel, in plaas van SF. Die reël is m2 wanneer die item metries geprys word of lengtes in m, cm of mm gewys word, en SF andersins.
- **Muuroppervlakte.** 'n Lineêre item met 'n hoogte wys ook sy muuroppervlakte (lengte maal hoogte) in die Items-lys en as 'n notarywe onder die tabel van hoeveelhede per item.
- **Skaalvoorinstellings 1:75 en 1:150.** Hulle is in die {{ui:Voorinstelling}}-lys in die {{ui:Skaal}}-groep, wat nou 32 skale het. Sien [Skaalvoorinstellings](topic:scale-presets).

### Boog met tien metodes

- Terwyl {{ui:Boog}} aan is (werkbalkknoppie of {{key:R}}), verskyn 'n {{ui:Boogmetode}}-boks in die bladbalk: 3-Point, Start, Center, End, Start, Center, Angle, Start, Center, Length, Start, End, Angle, Start, End, Direction, Start, End, Radius, Center, Start, End, Center, Start, Angle en Center, Start, Length. Hoek, lengte, radius en rigting kan geklik of getik word. Dit werk in lineêre reekse, oppervlaktes en uitsnedes. Lêers wat voor 0.9 gestoor is, maak dieselfde oop. Sien [Teken bôë met tien metodes](topic:draw-arcs-ten-methods).

### Saam werk

- **Sien mekaar se wysers.** In 'n Lewendige sessie wys elke persoon se aanwyser op die blad met hul naam en kleur, met 'n stippellyn-boks rondom die merkers wat hulle gekies het. Mense op 'n ander blad word gelys met daardie blad se naam. Sien [Werk lewendig saam met ander](topic:work-live).
- **Volg 'n persoon, en die lys van mense.** Die {{ui:Mense}}-knoppie in 'n Lewendige sessie lys elke persoon met die stut wat hulle gebruik, die blad waarop hulle is en wanneer hulle laas geredigeer het. {{ui:Volg}} skuif jou aansig saam met hulle s'n, en die gasheer kan {{ui:Vra almal om my te volg}} gebruik. Sien [Volg 'n spanmaat in 'n Lewendige sessie](topic:follow-a-teammate).

## In elke program

- **Nutswenke en die beginwenk.** Sweefteks is 'n Bootstrap-nutswenk, en die beginwenk kan gesluit word.
- **Rollende oortjiesrye.** 'n Paneel se oortjiesry wat nie pas nie, rol in plaas daarvan om af te word.
- **Oortjietitels.** Die blad-oortjie in die blaaier lees `<document> - TakeoffCraft | CadCraft`.
- **Uitleg.** Die uitlegslys in {{ui:Instellings}} is 'n aftreklys wat die gekose uitleg wys.
- **Taal.** Die taal wat jy kies, bereik nou die woorde wat die bladsy self druk, soos Nuut, Maak oop en Stoor. Ander tale as Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het.

## Eerlike perke

- Lengtevertoning, gewig- en temperatuureenhede en die nuwe voorinstellings is met toetse en op die bladsy nagegaan. Elke paneel by elke eenheid is nie met die hand nagegaan nie.
- Die lys van mense is nog nie met 'n werklike klas van onderwyser en leerders met die hand nagegaan nie.
- Ander tale as Engels is masjienkonsepte.
- Windows-installeerders is nie kode-geteken nie (Meer inligting, dan Hardloop tog). Die macOS-skyfbeeld is nie genotariseer nie (regsklik, dan Maak oop).

## Vroeër: 0.8 en 0.8.1

Dit is wat in TakeoffCraft 0.8 (vrygestel 2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. 'n Simbooldlegende kan nou in die hele stel op een slag getel word, 'n nuwe hoeveelheidsopname kan begin met die pryse van jou vorige werk, en die hoeveelheidsopname kan teen 'n verskaffer se voorraad nagegaan word. 0.8.1 is 'n regstellingsvrystelling.

### Nuut

**Tel alles in die stel**

- **Omraam die legende een keer.** {{ui:Tel alles}} in die werkbalk lees 'n simbooldlegende: sleep 'n boks om die simbole en die name wat daarnaas gedruk is. Elke simbool word gelys met sy prent en naam, en die naam word die item se naam. Ontmerk wat jy nie wil hê nie, kies dan {{ui:Tel op N blaaie}}. 'n Balk wys die blad wat deursoek word, {{ui:Kanselleer}} stop die lopie, en die bladsy bly bruikbaar.
- **Elke blad in een lopie.** Elke simbool word op elke oop blad getel. 'n Blad wat op 'n ander skaal geteken is, word op daardie skaal deursoek, en simbole word gevind wanneer hulle met enige regte hoek gedraai is. Die legende se eie simbole word nie op sy eie blad getel nie.
- **Hersien voordat iets bygevoeg word.** Elke totaal het 'n skakel per blad ("E-103: 4") wat na daardie blad gaan. Klik op 'n boks by 'n vonds om dit uit te laat, en klik weer om dit terug te bring. Die passingsvlak (50% tot 100%) filtreer net wat gevind is; niks word weer deursoek nie.
- **Een ontdoen-stap.** {{ui:Voeg N merkers by}} maak 'n telitem per simbool met 'n merker op elke vonds. 'n Naam wat reeds 'n telitem van jou is, word hergebruik. {{key:Ctrl+Z}} neem elke item en merker terug. Wat jy aanvaar, voed ook {{ui:Geleer}}.
- **Simbole op enige hoek.** Merk {{ui:Simbole op enige hoek}} aan voordat jy tel, om ook simbole te vind wat met 'n hoek gedraai is wat nie 'n regte hoek is nie. Die soektog draai dan elke simbool elke 15 grade, en 'n simbool wat nie rond is nie, kan tot ses keer so lank neem.
- **Wat dit is.** Gewone simboolpassing op jou eie blaaie, sonder 'n opgeleide model, en niks verlaat jou rekenaar nie. Op 'n verdigte stel van 200 blaaie het dit 9.4 sekondes van begin tot einde in Chrome op 'n vinnige rekenaar geneem; werklike plan-stelle sal stadiger wees. Sien [Tel alles in die stel](topic:count-everything).

**Prysgeheue uit jou eie werk**

- **TakeoffCraft onthou jou tariewe.** Wanneer jy 'n hoeveelheidsopname stoor, word elke geprysde item wat gebruik word, onthou volgens naam en tipe: materiaaltarief, arbeidstarief, afval en eenheid. Die laaste 12 werke word vir elke naam behou. Dit word op hierdie rekenaar langs die pryslys-biblioteek bewaar, nooit binne 'n hoeveelheidslêer nie, en niks word iewers gestuur nie.
- **Begin 'n nuwe hoeveelheidsopname daaruit.** {{ui:Pryse}} op die werkbalk wys, vir elke item, die laaste werk se tariewe, die tipiese tariewe en die reeks. {{ui:Gebruik laaste}} of {{ui:Gebruik tipies}} prys een item, en {{ui:Prys N onpryse items uit geheue}} vul elke item wat nog geen prys het nie. Elke gebruik is een ontdoen-stap.
- **Ouer werk.** {{ui:Leer uit 'n vorige hoeveelhedeopname…}} onthou die geprysde items van 'n gestoorde hoeveelheidsopname (.json).
- **Sien dit, verander dit, vergeet dit.** {{ui:Alles wat onthou word}} lys elke naam; die asblikknoppie vergeet een, en {{ui:Verwyder alle pryse}} vergeet alles. Skakel {{ui:Onthou my pryse wanneer ek 'n hoeveelhedeopname stoor}} af om te stop. 'n Prys per stuk word nooit op 'n item per voet geplaas nie. Sien [Prysgeheue uit jou vorige werk](topic:price-memory).

**Verskaffer se voorraad en lewertye**

- **Nagaan teen 'n verskaffer se lys.** {{ui:Voorraad}} op die werkbalk neem 'n verskaffer se voorraadlys ({{ui:Voeg 'n verskafferlêer by…}}), 'n CSV of 'n sigblad, en kyk wat die hoeveelheidsopname nodig het, met afval, daarteen na. Tot vyf lêers word behou. Niks word gestuur nie en niks vra 'n verskaffer iets nie: jy bring die lêer.
- **Wat dit sê.** Kort items kom eerste: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" of "In stock". {{ui:Langste wag wat gewens word (dae)}} begin by 14.
- **Bestellys.** {{ui:Bestellys (CSV)}} laai die kort items af, met die hoeveelheid wat ontbreek, die verskaffer en die lewertyd.
- **Pryse in die biblioteek.** As die lêer pryse het, stel {{ui:Pryse in die biblioteek}} die materiaalprys van elke biblioteekinskrywing met dieselfde naam en eenheid. Herprys uit die biblioteek om dit in die hoeveelheidsopname te bring.
- **In die probleempaneel.** 'n Tekort is 'n waarskuwing en 'n lang wag is 'n notas, onder "Supplier stock". Jy kan een met 'n rede aanvaar, en die rede word in die hoeveelheidsopname gestoor. Sien [Kontroleer verskaffer se voorraad en lewertye](topic:supplier-stock).

**KI-assistente**

- **Gereedskap vir al drie.** Met assistente wat in {{ui:Instellings}} toegelaat word, kan 'n assistent 'n legende lees (`legend_open`), die telling uitvoer (`legend_count_start`, dan `legend_count_status` en `legend_count_result`) en dit byvoeg (`legend_count_add`, wat eers 'n voorskou kan wys). Dit kan die onthoude pryse lees (`prices_list`) en items daaruit prys (`prices_apply`, wat eers 'n voorskou kan wys), en die verskaffernagaan lees (`supply_check`). Om 'n verskafferlêer by te voeg, bly joune om te doen. Sien [Gebruik TakeoffCraft met KI-assistente](topic:use-with-ai-assistants).

**In elke program**

- **Tale.** Vier-en-vyftig tale in totaal; tien is nuut (Litaus, Lettisies, Bosnies, Marathi, Teloegoe, Albanees, Afrikaans, Filipyns, Swahili en Oesbeeks). Ander tale as Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het.
- **Invoertoestelle.** {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Invoertoestelle}} stel wat 'n raakpaneel, 'n muis se syknoppies, 'n pen, 'n 3D-muis, 'n speelbeheerder of 'n MIDI-beheerder doen, vir elke program of vir een. Sien [Gebruik 'n raakpaneel, 3D-muis of beheerder](common:input-devices).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} bied {{ui:Omvou}} (die begin), {{ui:2 rye}} en {{ui:1 ry}}; groepe wat nie pas nie, rol sywaarts. Sien [Rangskik die panele](common:arrange-panels).
- **Probleempaneel.** Die gedeelde paneel van waarskuwings en notas dra nou die verskaffer se voorraadnagaan hierbo, langs die ander nagaan.
- **Byvoegings.** Byvoegings volg jou rekeningslys. Sien [Byvoegings en jou rekeningslys](common:addons-basics).
- **Koppel jou KI.** CadCraft Studio is die middelpunt: koppel jou assistent een keer vir al agt programme. Studio het geen eie KI nie.

### Reggestel in 0.8.1

- **DWG-klasseafdeling.** Die klasseafdeling van 'n DWG-lêer is as die verkeerde tipe gelees. Dit is in TakeoffCraft reggestel, en in vier ander programme.
- **Studio kan taal verander terwyl dit loop.** Vroeër was Studio en sy gepakte uitgawes slegs in Engels. Dit is nie op elke platform in die lessenaarbou getoets nie; sê vir ons as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Windows kan waarsku, en op 'n Mac regsklik jy en kies {{ui:Maak oop}} die eerste keer. Die winkelbouwerke (Microsoft Store, Google Play, App Store) is op aanhou, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Studio-opdaterings.** Die Windows-installeerder en die Linux-pakkette kyk een keer per dag en vra eers. Die draagbare zip sê net dit vir jou, en macOS en die APK werk nie self op nie. Die 0.8 macOS .dmg volg die vrystelling.
- **Koppel jou KI.** Een-klik-koppeling binne Studio, die gehuisveste koppelaar vir KI in die blaaier, jou eie API-sleutel binne Studio en 'n gepubliseerde MCP-pakket word nie in hierdie weergawe belowe nie.
- **Tel alles.** Dit benodig simbole wat soos in die legende geteken is, en 'n simbool met 'n muur of lang lyn daardeur kan gemis word. Gespieëlde simbole word nie gevind nie, en 'n blad sonder skaal wat op 'n ander grootte geteken is, word op die legende se grootte deursoek. Kontroleer die vondste op die eerste blad voordat jy die res vertrou.
- **Voorraad van verskaffers.** Voorraadsyfers is net so aktueel as die lêer wat jy byvoeg. Die nagaan vra nooit 'n verskaffer nie.
- **Tale.** Tamil se programbalk loop oor.

Alles anders is in [Nog nie gebou nie](topic:not-built-yet). Vir die vrystelling voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
