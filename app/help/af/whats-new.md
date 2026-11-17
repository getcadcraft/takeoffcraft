---
title: Wat is nuut in 0.9
summary: Lees lengtes in meter, sentimeter of millimeter, metriese oppervlaktes in m2 met muuroppervlakte, 1:75- en 1:150-skaalvoorinstellings, gewig- en temperatuureenhede, Boog met tien metodes, en lewende wysers, Volg en 'n lys van mense.
keywords: wat is nuut, what's new, vrystellingsnotas, veranderingslog, 0.9, wys lengtes as, meter, sentimeter, millimeter, metries, volg globaal, eenhede, vertooneenhede, m2, vierkante meter, muuroppervlakte, skaalvoorinstellings, 1:75, 1:150, gewig, kilogram, kg, ton, lb, temperatuur, celsius, fahrenheit, boog, boogmetodes, 3-punt-boog, radius, lewe, wysers, volg, lys van mense, klas, gereedskapwenke, uitleg, wat is nuut, what's new, vrystellingsnotas, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, tel alles, legende, simbool-legende, hele stel, prysgeheue, vorige werk, laaste werk, tipiese prys, verskaffer, voorraad, lewertyd, agterstand, bestellys, tekort, probleempaneel, assistent, tale, invoertoestelle, werkbalkrye, dwg
from: 6182b998
---

Dit is wat in TakeoffCraft 0.9 verander het, vergeleke met 0.8.1. Dit is 'n klein vrystelling vir hierdie program: lengtes kan nou in meter, sentimeter of millimeter gelees word, oppervlaktes en skale volg metriese werk behoorlik, en Boog het tien maniere om te teken. Lewe-sessies wys ook wie waar is.

## Nuut

### Lees lengtes in meter, sentimeter of millimeter

- **Wys lengtes as.** {{ui:Settings}} › {{ui:TakeoffCraft}} het {{ui:Show lengths as}} met {{ui:Follow Global}}, {{ui:Feet-inches}}, m, cm en mm. {{ui:Follow Global}} gebruik die metriese lengte-eenheid wat jy in {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} gemerk het, en voet-duim as niks gemerk is nie. Dit verander hoe lengtes op die blad, in die statusbalk en in die paneel lees, insluitend hoogtes, diepte, dikte en die vlakke. 'n Kaal getal wat in 'n hoogteveld getik word, word in die getoonde eenheid gelees.
- **Slegs vertoning.** Hoeveelhede, koste en uitvoere word uit die presiese lengtes bereken. Die keuse van 1/16, 1/8 en 1/4 duim verskyn slegs vir voet-duim. Sien [Wys lengtes in meter](topic:show-lengths-in-meters).
- **Gewigseenhede.** 'n Item van {{ui:Typed quantity (no drawing)}} kan nou in lb, TON, kg of t wees, en per eenheid geprys word.
- **Temperatuur.** Elke item het 'n opsionele {{ui:Temperature}}-veld in die itemredigeerder, getik in grade C of F. {{ui:Show temperatures as}} in {{ui:Settings}} › {{ui:TakeoffCraft}} bied {{ui:Follow Global}}, °C of °F.

### Oppervlaktes en skale vir metriese werk

- **Oppervlaktes in m2 op die tekening.** 'n Oppervlakte wat met 'n metriese item gemeet word, sê nou m2 op die tekeningmerker en die merkpaneel sowel as in die tabel, in plaas van SF. Die reël is m2 wanneer die item metries geprys word of lengtes in m, cm of mm gewys word, en SF andersins.
- **Muuroppervlakte.** 'n Lineêre item met 'n hoogte wys ook sy muuroppervlakte (lengte maal hoogte) in die Items-lys en as 'n notarybel onder die tabel van hoeveelhede per item.
- **Skaalvoorinstellings 1:75 en 1:150.** Hulle is in die lys {{ui:Preset}} in die groep {{ui:Scale}}, wat nou 32 skale het. Sien [Skaalvoorinstellings](topic:scale-presets).

### Boog met tien metodes

- Terwyl {{ui:Arc}} aan is (werkbalkknoppie of {{key:R}}), verskyn 'n {{ui:Arc method}}-kassie in die bladbalk: 3-punt, Begin, Middel, Einde, Begin, Middel, Hoek, Begin, Middel, Lengte, Begin, Einde, Hoek, Begin, Einde, Rigting, Begin, Einde, Radius, Middel, Begin, Einde, Middel, Begin, Hoek en Middel, Begin, Lengte. Hoek, lengte, radius en rigting kan geklik of getik word. Dit werk in lineêre reekse, oppervlaktes en uitsnitte. Lêers wat voor 0.9 gestoor is, maak dieselfde oop. Sien [Teken bope met tien metodes](topic:draw-arcs-ten-methods).

### Saamwerk

- **Sien mekaar se wysers.** In 'n Lewe-sessie wys elke persoon se wyser op die blad met hul naam en kleur, met 'n stippellyn-kassie rondom die merke wat hulle gekies het. Mense op 'n ander blad word met daardie blad se naam gelys. Sien [Werk lewend saam met ander](topic:work-live).
- **Volg 'n persoon, en die lys van mense.** Die knoppie {{ui:People}} in 'n Lewe-sessie lys elke persoon met die gereedskap wat hulle gebruik, die blad waarop hulle is en wanneer hulle laas gewysig het. {{ui:Follow}} skuif jou aansig saam met hulle, en die gasheer kan {{ui:Ask everyone to follow me}} gebruik. Sien [Volg 'n spanmaat in 'n Lewe-sessie](topic:follow-a-teammate).

## In elke program

- **Gereedskapwenke en die beginwenk.** Sweefteks is 'n Bootstrap-gereedskapwenk, en die beginwenk kan toegemaak word.
- **Rollende oortjiebalke.** 'n Paneel se oortjiebalk wat nie pas nie, rol in plaas daarvan om en word nie afgesny nie.
- **Oortjietitels.** Die blaaieroortjie lees `<document> - TakeoffCraft | CadCraft`.
- **Uitleg.** Die uitlegslys in {{ui:Settings}} is 'n aftreklys wat die gekose uitleg wys.
- **Taal.** Die taal wat jy kies, bereik nou die woorde wat die bladsy self druk, soos New, Open en Save. Tale behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het.

## Eerlike perke

- Lengtevertoning, gewig- en temperatuureenhede en die nuwe voorinstellings is deur toetse en op die bladsy nagegaan. Elke paneel by elke eenheid is nie met die hand nagegaan nie.
- Die lys van mense is nog nie met 'n werklike klas van onderwysers en leerders met die hand nagegaan nie.
- Tale behalwe Engels is masjienkonsepte.
- Windows-installeerders is nie kode-geteken nie (Meer inligting, dan Run anyway). Die macOS-skyfbeeld is nie genotariseer nie (regsklik, dan Open).

## Vroeër: 0.8 en 0.8.1

Dit is wat in TakeoffCraft 0.8 (vrygestel 2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. 'n Simbool-legende kan nou in die hele stel op een slag getel word, 'n nuwe hoeveelheidsopname kan begin vanaf die pryse van jou vorige werk, en die hoeveelheidsopname kan teen 'n verskaffer se voorraad nagegaan word. 0.8.1 is 'n regstelling-vrystelling.

### Nuut

**Tel alles in die stel**

- **Omlyn die legende een keer.** {{ui:Count everything}} in die werkbalk lees 'n simbool-legende: sleep 'n kassie om die simbole en die name wat langs hulle gedruk is. Elke simbool word met sy prent en naam gelys, en die naam word die item se naam. Ontmerk wat jy nie wil hê nie, kies dan {{ui:Count on N sheets}}. 'n Balk wys die blad wat deursoek word, {{ui:Cancel}} stop die lopie, en die bladsy bly bruikbaar.
- **Elke blad in een lopie.** Elke simbool word op elke oop blad getel. 'n Blad wat op 'n ander skaal geteken is, word op daardie skaal deursoek, en simbole word gevind wanneer hulle in enige regte hoek gedraai is. Die legende se eie simbole word nie op sy eie blad getel nie.
- **Hersien voordat iets bygevoeg word.** Elke totaal het 'n skakel per blad ("E-103: 4") wat na daardie blad gaan. Klik op 'n kassie by 'n vondst om dit uit te laat, en klik weer om dit terug te bring. Die passingsvlak (50% tot 100%) filtreer net wat gevind is; niks word weer gesoek nie.
- **Een ontdoen-stap.** {{ui:Add N marks}} maak 'n telitem per simbool met 'n merk op elke vondst. 'n Naam wat reeds 'n telitem van jou is, word hergebruik. {{key:Ctrl+Z}} neem elke item en merk terug. Wat jy aanvaar, voed ook {{ui:Learned}}.
- **Simbole in enige hoek.** Merk {{ui:Symbols at any angle}} aan voordat jy tel om ook simbole te vind wat deur 'n hoek gedraai is wat nie 'n regte hoek is nie. Die soektog draai dan elke simbool elke 15 grade, en 'n simbool wat nie rond is nie, kan tot ses keer so lank neem.
- **Wat dit is.** Gewone simboolpassing op jou eie blaaie, sonder 'n opgeleide model, en niks verlaat jou rekenaar nie. Op 'n versinde stel van 200 blaaie het dit 9,4 sekondes van begin tot end in Chrome op 'n vinnige lessenaar geneem; werklike plan-stelle sal stadiger wees. Sien [Tel alles in die stel](topic:count-everything).

**Prysgeheue uit jou eie werk**

- **TakeoffCraft onthou jou tariewe.** Wanneer jy 'n hoeveelheidsopname stoor, word elke geprysde item wat gebruik word, onthou volgens naam en tipe: materiaaltarief, arbeidstarief, afval en eenheid. Die laaste 12 werke word vir elke naam bewaar. Dit word op hierdie rekenaar langs die pryslys-biblioteek bewaar, nooit binne 'n hoeveelheidslêer nie, en niks word iewers gestuur nie.
- **Begin 'n nuwe hoeveelheidsopname daaruit.** {{ui:Prices}} op die werkbalk wys, vir elke item, die laaste werk se tariewe, die tipiese tariewe en die reeks. {{ui:Use last}} of {{ui:Use typical}} prys een item, en {{ui:Price N unpriced items from memory}} vul elke item wat nog geen prys het nie. Elke gebruik is een ontdoen-stap.
- **Ouer werk.** {{ui:Learn from a past takeoff…}} onthou die geprysde items van 'n gestoorde hoeveelheidsopname (.json).
- **Sien dit, verander dit, vergeet dit.** {{ui:Everything remembered}} lys elke naam; die asblikknoppie vergeet een, en {{ui:Clear all prices}} vergeet almal. Skakel {{ui:Remember my prices when I save a takeoff}} af om te stop. 'n Prys per stuk word nooit op 'n item per voet gesit nie. Sien [Prysgeheue uit jou vorige werk](topic:price-memory).

**Voorraad van verskaffers en lewertye**

- **Nagaan teen 'n verskaffer se lys.** {{ui:Supply}} op die werkbalk neem 'n verskaffer se voorraadlys ({{ui:Add a supplier file…}}), 'n CSV of 'n sigblad, en kontroleer wat die hoeveelheidsopname benodig, met afval, daarteen. Tot vyf lêers word bewaar. Niks word gestuur nie en niks vra 'n verskaffer nie: jy bring die lêer.
- **Wat dit sê.** Kort items kom eerste: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" of "In stock". {{ui:Longest wait wanted (days)}} begin by 14.
- **Bestellys.** {{ui:Order list (CSV)}} laai die kort items af met die hoeveelheid wat ontbreek, die verskaffer en die lewertyd.
- **Pryse in die biblioteek.** As die lêer pryse het, stel {{ui:Prices into the Library}} die materiaalprys van elke biblioteekinskrywing met dieselfde naam en eenheid. Herprys vanaf die biblioteek om dit in die hoeveelheidsopname te bring.
- **In die Probleempaneel.** 'n Tekort is 'n waarskuwing en 'n lang wag is 'n notas, onder "Supplier stock". Jy kan een met 'n rede aanvaar, en die rede word in die hoeveelheidsopname gestoor. Sien [Gaan verskaffer se voorraad en lewertye na](topic:supplier-stock).

**KI-assistente**

- **Gereedskap vir al drie.** Met assistente toegelaat in {{ui:Settings}}, kan 'n assistent 'n legende lees (`legend_open`), die telling laat loop (`legend_count_start`, dan `legend_count_status` en `legend_count_result`) en dit byvoeg (`legend_count_add`, wat eers kan voorskou). Dit kan die onthoude pryse lees (`prices_list`) en items daaruit prys (`prices_apply`, wat eers kan voorskou), en die verskaffernagaan lees (`supply_check`). Om 'n verskafferlêer by te voeg, bly joune om te doen. Sien [Gebruik TakeoffCraft met KI-assistente](topic:use-with-ai-assistants).

**In elke program**

- **Tale.** Vier-en-vyftig tale in totaal; tien is nuut (Litaus, Letties, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipino, Swahili en Oesbekies). Tale behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het.
- **Invoertoestelle.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} stel wat 'n raakpaneel, 'n muis se syknoppies, 'n pen, 'n 3D-muis, 'n speelbeheerder of 'n MIDI-beheerder doen, vir elke program of vir een. Sien [Gebruik 'n raakpaneel, 3D-muis of beheerder](common:input-devices).
- **Werkbalkrye.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bied {{ui:Wrap}} (die begin), {{ui:2 rows}} en {{ui:1 row}}; groepe wat nie pas nie, rol sywaarts. Sien [Rangskik die panele](common:arrange-panels).
- **Probleempaneel.** Die gedeelde paneel van waarskuwings en notas dra nou die verskaffer-voorraadnagaan hierbo, langs die ander nagaan.
- **Byvoegings.** Byvoegings volg jou rekeninglys. Sien [Byvoegings en jou rekeninglys](common:addons-basics).
- **Koppel jou KI.** CadCraft Studio is die middelpunt: koppel jou assistent een keer vir al agt die programme. Studio het geen KI van sy eie nie.

### Reggestel in 0.8.1

- **DWG-klasseafdeling.** Die klasseafdeling van 'n DWG-lêer is as die verkeerde tipe gelees. Dit is in TakeoffCraft reggestel, en in vier ander programme.
- **Studio kan taal verander terwyl dit loop.** Voorheen was Studio en sy verpakte uitgawes net in Engels. Dit is nie op elke platform in die lessenaarbou getoets nie; sê vir ons as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Windows kan waarsku, en op 'n Mac regsklik jy en kies {{ui:Open}} die eerste keer. Die winkelbouings (Microsoft Store, Google Play, App Store) is op hou, en die iPad- en iPhone-bou is nie vir 0.8.1 herbou nie.
- **Studio-opdaterings.** Die Windows-installeerder en die Linux-pakkies gaan een keer per dag na en vra eers. Die draagbare zip sê net vir jou, en macOS en die APK werk nie self by nie. Die 0.8 macOS .dmg volg die vrystelling.
- **Koppel jou KI.** Een-klik-koppeling binne Studio, die gehuisveste koppelaar vir KI in die blaaier, jou eie API-sleutel binne Studio en 'n gepubliseerde MCP-pakket word nie in hierdie weergawe belowe nie.
- **Tel alles.** Dit benodig simbole wat op dieselfde manier as in die legende geteken is, en 'n simbool met 'n muur of lang lyn daardeur kan gemis word. Gespieëlde simbole word nie gevind nie, en 'n blad sonder skaal wat op 'n ander grootte geteken is, word op die legende se grootte deursoek. Gaan die vondste op die eerste blad na voordat jy die res vertrou.
- **Voorraad van verskaffers.** Voorraadsyfers is net so current as die lêer wat jy byvoeg. Die nagaan vra nooit 'n verskaffer nie.
- **Tale.** Tamil se programbalk loop oor.

Alles anders is in [Nog nie gebou nie](topic:not-built-yet). Vir die vrystelling voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
