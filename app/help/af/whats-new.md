---
title: Wat is nuut in 0.8 en 0.8.1
summary: Tel 'n hele simboolsleutel oor elke oop blad in een keer, pryse items uit die tariewe van jou vorige werke, kontroleer die hoeveelheidsopname teen 'n verskaffer se voorraad en lewertye, en nuwe assistent-gereedskap vir al drie, plus die gedeelde 0.8-veranderinge en die 0.8.1-regstelling vir DWG-lêers.
keywords: wat is nuut, vrystellingsnotas, veranderingslog, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, tel alles, legende, simboolsleutel, hele stel, prysgeheue, vorige werke, laaste werk, tipiese prys, verskaffer, voorraad, lewertyd, agterstand, bestellys, tekort, probleempaneel, assistent, tale, invoerapparate, werkbalkrye, dwg
from: a04adef6
---

Dit is wat in TakeoffCraft 0.8 (vrygestel 2026-11-01) en 0.8.1 (2026-11-02) verander het, vergeleke met 0.7. 'n Simboolsleutel kan nou oor die hele stel in een keer getel word, 'n nuwe hoeveelheidsopname kan begin uit die pryse van jou vorige werke, en die hoeveelheidsopname kan teen 'n verskaffer se voorraad gekontroleer word. 0.8.1 is 'n regstellingsvrystelling.

## Nuut

### Tel alles in die stel

- **Omlyn die legende een keer.** {{ui:Tel alles}} op die werkbalk lees 'n simboolsleutel: sleep 'n boks om die simbole en die name wat langs hulle gedruk is. Elke simbool word gelys met sy prentjie en naam, en die naam word die item se naam. Ontmerk wat jy nie wil hê nie, en kies dan {{ui:Tel op N blaaie}}. 'n Balk wys die blad wat deursoek word, {{ui:Kanselleer}} stop die lopie, en die bladsy bly bruikbaar.
- **Elke blad in een lopie.** Elke simbool word op elke oop blad getel. 'n Blad wat op 'n ander skaal geteken is, word teen daardie skaal deursoek, en simbole word gevind wat in enige regte hoek gedraai is. Die legende se eie simbole word nie op sy blad getel nie.
- **Hersien voordat iets bygevoeg word.** Elke totaal het 'n skakel per blad ("E-103: 4") wat na daardie blad gaan. Klik 'n boks op 'n vonds om dit uit te laat, en klik weer om dit terug te bring. Die passingsvlak (50% tot 100%) filtreer net wat gevind is; niks word weer gesoek nie.
- **Een ontdoenstap.** {{ui:Voeg N merkers by}} maak 'n telitem per simbool met 'n merker op elke vonds. 'n Naam wat reeds 'n telitem van jou is, word hergebruik. {{key:Ctrl+Z}} neem elke item en merker terug. Wat jy aanvaar, voed ook {{ui:Geleer}}.
- **Simbole op enige hoek.** Merk {{ui:Simbole op enige hoek}} voordat jy tel, om ook simbole te vind wat gedraai is deur 'n hoek wat nie 'n regte hoek is nie. Die soektog draai dan elke simbool elke 15 grade, en 'n simbool wat nie rond is nie, kan tot ses keer so lank neem.
- **Wat dit is.** Gewone simboolpassing op jou eie blaaie, sonder 'n opgeleide model, en niks verlaat jou rekenaar nie. Op 'n versinde stel van 200 blaaie het dit 9.4 sekondes van begin tot einde in Chrome op 'n vinnige lessenaar geneem; werklike plan-stelle sal stadiger wees. Sien [Tel alles in die stel](topic:count-everything).

### Prysgeheue uit jou eie werke

- **TakeoffCraft onthou jou tariewe.** Wanneer jy 'n hoeveelheidsopname stoor, word elke geprysde item wat gebruik word, onthou volgens naam en tipe: materiaaltarief, arbeidstarief, afval en eenheid. Die laaste 12 werke word vir elke naam behou. Dit word op hierdie rekenaar langs die prys-Biblioteek gehou, nooit binne 'n hoeveelheidslêer nie, en niks word iewers gestuur nie.
- **Begin 'n nuwe hoeveelheidsopname daaruit.** {{ui:Pryse}} op die werkbalk wys, vir elke item, die laaste werk se tariewe, die tipiese tariewe en die reeks. {{ui:Gebruik laaste}} of {{ui:Gebruik tipies}} prys een item, en {{ui:Prys N items sonder pryse uit geheue}} vul elke item wat nog geen prys het nie. Elke gebruik is een ontdoenstap.
- **Ouer werk.** {{ui:Leer uit ’n vorige hoeveelhedeopname…}} onthou die geprysde items van 'n gestoorde hoeveelheidsopname (.json).
- **Sien dit, verander dit, vergeet dit.** {{ui:Alles wat onthou word}} lys elke naam; die asblik-knoppie vergeet een, en {{ui:Verwyder alle pryse}} vergeet almal. Skakel {{ui:Onthou my pryse wanneer ek ’n hoeveelhedeopname stoor}} af om te stop. 'n Prys per stuk word nooit op 'n item per voet geplaas nie. Sien [Prysgeheue uit jou vorige werke](topic:price-memory).

### Verskaffervoorraad en lewertye

- **Kontroleer teen 'n verskaffer se lys.** {{ui:Voorraad}} op die werkbalk neem 'n verskaffer se voorraadlys ({{ui:Voeg 'n verskafferlêer by…}}), 'n CSV of 'n sigblad, en kontroleer wat die hoeveelheidsopname benodig, met afval, daarteen. Tot vyf lêers word behou. Niks word gestuur nie en niks vra 'n verskaffer nie: jy bring die lêer.
- **Wat dit sê.** Kort items kom eerste: "Tekort van 120 EA", "Lewertyd 21 dae", "Op agterstand", "Eenheid verskil", "Geen voorraadsyfer nie" of "Op voorraad". {{ui:Langste wag wat gewens word (dae)}} begin by 14.
- **Bestellys.** {{ui:Bestellys (CSV)}} laai die kort items af met die hoeveelheid tekort, die verskaffer en die lewertyd.
- **Pryse na die Biblioteek.** As die lêer pryse het, stel {{ui:Pryse in die biblioteek}} die materiaalprys van elke Biblioteek-inskrywing met dieselfde naam en eenheid. Herprys vanaf die Biblioteek om hulle in die hoeveelheidsopname te bring.
- **In die Probleme-paneel.** 'n Tekort is 'n waarskuwing en 'n lang wag is 'n nota, onder "Verskaffervoorraad". Jy kan een met 'n rede aanvaar, en die rede word in die hoeveelheidsopname gestoor. Sien [Kontroleer verskaffervoorraad en lewertye](topic:supplier-stock).

### KI-assistente

- **Gereedskap vir al drie.** Met assistente wat in {{ui:Instellings}} toegelaat is, kan 'n assistent 'n legende lees (`legend_open`), die telling uitvoer (`legend_count_start`, dan `legend_count_status` en `legend_count_result`) en dit byvoeg (`legend_count_add`, wat eers 'n voorskou kan wys). Dit kan die onthoude pryse lees (`prices_list`) en items daaruit prys (`prices_apply`, wat eers 'n voorskou kan wys), en die verskaffer se kontrole lees (`supply_check`). Die byvoeg van 'n verskafferlêer bly jou taak. Sien [Gebruik TakeoffCraft met KI-assistente](topic:use-with-ai-assistants).

### In elke program

- **Tale.** Vier-en-vyftig tale altesaam; tien is nuut (Litaus, Lettels, Bosnies, Marathi, Telugu, Albanees, Afrikaans, Filipino, Swahili en Oesbeeks). Tale anders as Engels is masjienkonsepte totdat 'n moedertaalspreker dit gelees het.
- **Invoerapparate.** {{ui:Instellings}} › {{ui:Globaal}} › {{ui:Invoerapparate}} stel wat 'n raakblad, 'n muis se syknoppies, 'n pen, 'n 3D-muis, 'n speelbeheerder of 'n MIDI-beheerder doen, vir elke program of vir een. Sien [Gebruik 'n raakblad, 3D-muis of beheerder](common:input-devices).
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} bied {{ui:Omvou}} (die begin), {{ui:2 rye}} en {{ui:1 ry}}; groepe wat nie pas nie, rol sywaarts. Sien [Rangskik die paneele](common:arrange-panels).
- **Probleme-paneel.** Die gedeelde paneel van waarskuwings en notas dra nou die verskaffervoorraadkontrole hierbo, langs die ander kontroles.
- **Byvoegings.** Byvoegings volg jou rekeninglys. Sien [Byvoegings en jou rekeninglys](common:addons-basics).
- **Koppel jou KI.** CadCraft Studio is die middelpunt: koppel jou assistent een keer vir al agt die programme. Studio het nie sy eie KI nie.

## Reggestel in 0.8.1

- **DWG-klasse-afdeling.** Die klasse-afdeling van 'n DWG-lêer is as die verkeerde tipe gelees. Dit is in TakeoffCraft reggestel, en in vier ander programme.
- **Studio kan taal verander terwyl dit loop.** Voorheen was Studio en sy verpakte uitgawes net in Engels. Dit is nie op elke platform in die lessenaarweergawe getoets nie; sê vir ons as die taal nie verander nie.

## Nog nie in hierdie weergawe nie

- **Nie kode-geteken nie.** Windows kan waarsku, en op 'n Mac regsklik jy en kies {{ui:Oop}} die eerste keer. Die winkelweergawes (Microsoft Store, Google Play, App Store) is op aanhou, en die iPad- en iPhone-weergawe is nie vir 0.8.1 herbou nie.
- **Studio-opdaterings.** Die Windows-installeerder en die Linux-pakkette gaan een keer per dag na en vra eers. Die draagbare zip sê net vir jou, en macOS en die APK werk hulself nie by nie. Die 0.8 macOS .dmg volg die vrystelling.
- **Koppel jou KI.** Een-klik-koppeling binne Studio, die gehuisveste koppelaar vir KI in die blaai, jou eie API-sleutel binne Studio en 'n gepubliseerde MCP-pakket word nie in hierdie weergawe belowe nie.
- **Tel alles.** Dit benodig simbole wat op dieselfde manier geteken is as in die legende, en 'n simbool met 'n muur of lang lyn daardeur kan gemis word. Gespieëlde simbole word nie gevind nie, en 'n blad sonder skaal wat op 'n ander grootte geteken is, word teen die legende se grootte deursoek. Kontroleer die vondste op die eerste blad voordat jy die res vertrou.
- **Verskaffervoorraad.** Voorraadsyfers is net so aktueel as die lêer wat jy byvoeg. Die kontrole vra nooit 'n verskaffer nie.
- **Tale.** Tamil se programbalk loop oor.

Al die ander is in [Nog nie gebou nie](topic:not-built-yet). Vir die vrystelling voor hierdie een, sien [Wat is nuut in 0.7](topic:whats-new-0-7).
