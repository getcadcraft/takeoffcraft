---
title: Probleemoplossing
summary: Simptome, oorsake en oplossings vir die boodskappe en verrassings wat jy in TakeoffCraft kan teëkom, aangehaal soos die app dit wys.
keywords: probleme, foute, werk nie, oplossing, hulp, geweier, meet nie, geen skaal, ontbrekende merkers, uitvoer misluk, vanlyn, aanraak
from: cd319c9b
---

TakeoffCraft verduidelik die meeste weigerings in die statusbalk onderaan die venster. Soek die boodskap hieronder.

## Lêers oopmaak

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Die PDF-leser kon nie laai nie. Herlaai die bladsy om weer te probeer. | Die app se PDF-leser het nie gelaai nie, gewoonlik omdat jy vanlyn is en die app nooit vir vanlyn gebruik gestoor is nie. | Koppel weer aan en herlaai. Kies dan {{ui:Stoor vir vanlyn}} en wag vir {{ui:Vanlyn gereed}}; sien [Werk vanlyn](common:offline). |
| (name) is met 'n wagwoord beskerm. Maak 'n onbeskermde kopie oop. | Die PDF benodig 'n wagwoord om oop te maak. | Vra vir 'n onbeskermde kopie, of verwyder die wagwoord in 'n PDF-program wat jy vertrou. |
| (name) kon nie as 'n PDF gelees word nie (…) | Die lêer is beskadig of is nie werklik 'n PDF nie. | Laai dit weer af, of stoor dit weer vanaf die program wat dit gemaak het. |
| (name) is reeds oop. | Dieselfde PDF (dieselfde inhoud) is oop. | Niks om te doen nie. |
| TakeoffCraft maak PDF's en .takeoff.json-projekte oop. Oorgeslaan: … | Ander lêersoorte is laat val. | Skakel tekeninge eers om na PDF. |
| Niks gebeur wanneer ek lêers los nie | Die lêers is buite die blaaiervenster losgelaat, of die blaaier het die PDF in 'n nuwe oortjie oopgemaak. | Los hulle op die TakeoffCraft-bladsy self; die raam "Los PDF's of 'n .takeoff.json" wys wanneer dit sal werk. |
| Om 'n groot stel oop te maak neem 'n rukkie | Elke PDF word volledig gelees om dit te identifiseer. | Wag totdat die "Maak (name) oop…"-boodskap verdwyn. Miniatuurbeelde vul in soos jy rol. |

## Meet

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Maak eers 'n PDF oop. | Geen blad is oop nie. | Maak 'n PDF oop. |
| Hierdie blad het nog geen skaal nie, so dit kan nie gemeet word nie. Kies 'n voorafingestelde skaal of kalibreer eers (tellings werk sonder een). | Lineêr-, oppervlakte-, sirkel- en uitsnyding-gereedskap benodig 'n skaal. | [Stel die skaal](topic:set-the-scale). |
| Maak eers 'n lineêre item (noem dit onder Items), en klik dan op die blad. | Daar is geen item van daardie soort nie. | Vul die {{ui:Nuwe item}}-vorm in wat oopgemaak het, en kies {{ui:Voeg by}}. |
| Kies eers 'n item om op te meet (Items-paneel). | Die huidige item is geskrap. | Klik op 'n item onder {{ui:Items}}. |
| 'n Lopie benodig ten minste twee punte. | Jy het na een klik klaar gemaak. | Klik ten minste twee punte. |
| 'n Oppervlakte benodig ten minste drie punte. | Te min hoeke. | Klik ten minste drie hoeke. |
| Die omtrek kruis homself, so die oppervlakte sou verkeerd wees. Teken dit weer sonder om te kruis. | 'n Agtvormige figuur. | Teken dit as twee oppervlaktes, of loop die rand in volgorde rond. |
| Daardie punte omsluit geen oppervlakte nie. | Al die punte is op een lyn. | Klik hoeke wat 'n ruimte omsluit. |
| Kies eers 'n oppervlaktemerker ({{ui:Kies}}-gereedskap), kies dan Uitsnyding en teken die gat binne dit. | {{ui:Uitsnyding}} benodig 'n gekose oppervlakte. | Druk {{key:V}}, klik die oppervlakte, en dan {{key:X}}. |
| 'n Uitsnyding moet heeltemal binne die oppervlakte lê. | Die gat kruis of verlaat die omtrek. | Teken die gat binne die oppervlakte. |
| Uitsnydings kan nie mekaar oorvleuel nie. | Twee gate oorvleuel. | Teken een gat rondom albei, of hou hulle uitmekaar. |
| … Die punt is teruggesit. | 'n Gesleepte hoek sou die omtrek laat kruis of 'n gat buite druk. | Sleep na 'n plek wat die vorm geldig hou. |
| Klik 'n punt op die sirkel se rand, weg van sy middelpunt. | Die tweede klik was te na aan die middelpunt. | Klik verder uit. |
| Kliks beweeg die blad in plaas van om punte by te voeg | Die wyser het meer as 'n paar pixels beweeg terwyl die knoppie ingedruk was; dit tel as 'n sleep. | Klik sonder om te beweeg, veral op 'n raakpaneel. |
| Shift vang nie vas nie | Jy plaas 'n punt op 'n boog, of teken 'n sirkel. | Die 45°-vasvang geld slegs vir reguit segmente. |
| Punte spring na 'n naby lyn | Vasvang aan die tekening se lyne is aan. | Zoem in om tussen lyne te klik, of druk {{key:F3}} om Vasvang af te skakel. |
| Geen vasvangmerker verskyn nie | Vasvang is af, die blad is 'n geskandeerde blad, of die gereedskap vang nie vas nie (Tel, Outo-tel, plak). | Druk {{key:F3}}; op 'n geskandeerde blad is daar geen lyne om aan vas te vang nie. |
| Die lengte is verkeerd | Die skaal is verkeerd (dikwels 'n PDF wat met 'n voorinstelling vergroot of verklein is). | Gebruik {{ui:Kontroleer}} op 'n bekende maat, en dan {{ui:Kalibreer}}. |

## Skaal

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Kies twee punte verder uitmekaar. | Die kalibrasiepunte lê byna op mekaar. | Kalibreer op 'n langer maat. |
| 'n Boodskap in die kalibreer-dialoog, soos "Daardie afstand kon nie gelees word nie" | Die afstand is in 'n vorm wat TakeoffCraft nie kan lees nie. | Sien [Invoer van lengte, tarief en persentasie](topic:entry-formats). |
| Hierdie blad het nog geen skaal nie, so daar is niks om te kontroleer nie. Kalibreer dit, of kies 'n voorinstelling. | {{ui:Kontroleer}} op 'n blad sonder skaal. | Stel eers 'n skaal. |
| Die lys {{ui:Voorinstelling}} is grys | Geen blad is oop nie. | Maak 'n PDF oop. |

## Hoeveelhede en formules

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Onvolledig: … (nie in die totale nie) | 'n Formulefout, of merkers op blaaie sonder skaal. | Sien [Lees hoeveelhede en die beraming](topic:read-quantities#the-incomplete-warning). |
| +(n) sonder skaal langs 'n item | Sommige van sy merkers is op blaaie sonder skaal. | Gee daardie blaaie 'n skaal. |
| Formulefout: … | Die formule kan nie uitgewerk word nie. | Sien [Formuletaal](topic:formulas#errors). |
| Hierdie item het merkers, so sy soort kan nie verander nie. | Die soort is gesluit sodra daar merkers is. | Maak 'n nuwe item van die ander soort en teken die merkers opnuut daarmee. |
| 'n Item benodig 'n naam. | Die naamveld is leeggemaak. | Tik 'n naam. |
| Tik 'n bedrag soos 12.50. / Tik 'n persentasie soos 10 of 7.5. | 'n Tarief of afval kon nie gelees word nie. | Sien [Invoer van lengte, tarief en persentasie](topic:entry-formats). |
| 'n Totaal lyk verdubbel | Die item het sy eie tariewe en komponente wat dieselfde koste dra. | Stel die item se eie tariewe op 0 wanneer sy komponente die koste dra. |
| Hierdie item se merkers is op PDF's wat nie oop is nie. | Jy het op 'n item geklik wie se merkers almal op PDF's is wat jy nog nie oopgemaak het nie. | Maak daardie PDF's oop; hul name word onder {{ui:Blaaie}} gelys. |

## Outo-tel

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Daardie kassie is te klein. Trek dit om die hele simbool. | Die kassie is klein. | Zoem in en omlyn die hele simbool. |
| Daardie kassie is byna leeg. Trek dit om 'n simbool. | Die kassie hou net papier. | Omlyn die simbool self. |
| Geen passings. Verlaag die passingskuiwer, of omlyn die simbool nouer. | Niks het hoog genoeg gekwalifiseer nie. | Omlyn die simbool nou, of sleep die {{ui:Passing}}-kuiwer laer. |
| Te veel passings, insluitend verkeerde simbole | Soortgelyke simbole kwalifiseer naby die regte een. | Verhoog die {{ui:Passing}}-kuiwer en klik verkeerde kassies om hulle te verwerp. |
| Passings ontbreek op ander blaaie | Daardie blaaie teken die simbool op 'n ander grootte, of teen 'n hoek wat nie 'n 90°-stap is nie. | Soek daardie blaaie met 'n kassie daar getrek, of tel met die hand. |
| (n) blaaie was te groot om by hierdie simboolgrootte te soek. | Die blad sou by die werkgrootte te groot wees. | Omlyn 'n groter simbool, of tel daardie blad met die hand. |
| Die soektog het misluk: … | Die agtergrondsoektog het gestop. | Probeer weer; herlaai die bladsy as dit herhaal (stoor eers). Vanlyn werk dit slegs wanneer die app-balk {{ui:Vanlyn gereed}} wys. |
| Sleep trek 'n kassie in plaas van om te pan | So werk {{ui:Outo-tel}}. | Hou {{key:Space}} vas en sleep, of sleep met die middelknoppie. |

## Stoor en uitvoer

| Boodskap of simptoom | Oorsaak | Oplossing |
|---|---|---|
| Niks om uit te voer nie: maak 'n item en meet dit op. | Daar is geen items nie. | Maak eers 'n item. |
| Nog geen merkers op die oop PDF's nie. | {{ui:Gemerkte PDF}} het niks om op die oop PDF's te teken nie. | Maak die PDF's wat merkers het oop. |
| Hierdie PDF is met 'n wagwoord beskerm of geënkripteer, so 'n gemerkte kopie kan nie geskryf word nie. … | Die PDF is geënkripteer. | Voer eerder {{ui:XLSX}} uit, of gebruik 'n onge-enkripteerde kopie van die PDF (dit benodig dan sy eie hoeveelheidsopname, omdat dit 'n ander lêer is). |
| Die gemerkte PDF kon nie geskryf word nie: … | Dikwels: vanlyn, en die app is nie vir vanlyn gebruik gestoor nie, so die PDF-skrywer ontbreek. | Gaan aanlyn en kies weer {{ui:Gemerkte PDF}}. Om dit te vermy, kies {{ui:Stoor vir vanlyn}} en wag vir {{ui:Vanlyn gereed}}. |
| Slegs een gemerkte PDF is afgelaai | Die blaaier het verskeie aflaaie terselfdertyd geblokkeer. | Laat meervoudige aflaaie vir hierdie webwerf toe, en voer weer uit. |
| (file) is nie 'n TakeoffCraft-projek nie (dit is nie geldige JSON nie). / Hierdie is nie 'n TakeoffCraft-projeklêer nie. | Verkeerde lêer, of 'n beskadigde een. | Kies die `.takeoff.json`-lêer. |
| Hierdie projek is deur 'n nuwer TakeoffCraft gestoor. Maak dit daar oop. | Die lêer kom uit 'n nuwer bou. | Maak dit in die nuwer bou oop. |
| (n) merkers was beskadig en is uitgelaat. | 'n Deel van die lêer is beskadig of met die hand geredigeer. | Die res het oopgemaak. Teken die ontbrekende merkers opnuut, of maak 'n ouer kopie oop. |
| Merkers ontbreek ná heroopening | Die PDF's is nie oop nie, of een van hulle het verander. | Sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen#when-a-pdf-has-changed). |
| Die blaaier vra "Verlaat webwerf?" | Daar is ongestoorde veranderinge. | Bly, en stoor met {{key:Mod+S}}. |

## Sleutels en muis

| Simptoom | Oorsaak | Oplossing |
|---|---|---|
| Letterknoppies doen niks nie | Die kursor is in 'n veld (soek, item-redigeerder, tabel). | Klik op die blad, of druk {{key:Tab}} uit die veld. |
| Die wieletjie zoem in plaas van om te rol | Die wieletjie zoem altyd die blad. | Sleep om te pan. |
| Die hele bladsy het groter of kleiner geword | Blaaierzoem ({{key:Mod+Plus}} of {{key:Mod+Minus}}). | Druk {{key:Mod+0}}. Zoem die blad met die wieletjie of die blote {{key:Plus}} en {{key:Minus}}. |
| 'n Merker het verdwyn toe ek Backspace gedruk het | Backspace skrap die gekose merker wanneer jy nie teken nie. | {{key:Mod+Z}} bring dit terug. |
| Regsklik voltooi nie op 'n Mac nie | Control-klik kom as 'n gewone klik aan. | Gebruik 'n tweevingerklik met sekondêre klik aangeskakel, of druk {{key:Enter}}. |

## Aanraakskerms

Op 'n aanraakskerm:

- **Tik** plaas 'n punt (of kies 'n merker met {{ui:Kies}}). Een vinger wat sleep, pan.
- **Twee vingers** knyp om rondom die punt tussen hulle te zoem, en pan wanneer hulle saam beweeg. Om 'n tweede vinger neer te sit, kanselleer wat die eerste een begin het, so 'n knyp laat nooit 'n punt agter nie.
- **Voltooi** 'n lopie of omtrek met 'n **lang druk** (die regsklik), 'n **dubbeltik**, of {{ui:Voltooi}} in die balk onderaan die blad. Dieselfde balk het {{ui:Agter}} (neem die laaste punt terug) en {{ui:Kanselleer}}. Oppervlaktes sluit ook deur op die eerste punt te tik.
- Vingers kry groter teikens: punte vang vas, sluit en kies van verder af, en hoekhandvatsels is groter.

Lengtes intik benodig 'n sleutelbord; die skermsleutelbord werk wanneer die {{ui:Tik}}-kassie gefokus is.

Op 'n tablet maak 'n sleutelbord en 'n muis of raakpaneel die opmeting baie makliker.

## Werk vanlyn

| Knoppie of simptoom | Oorsaak | Oplossing |
|---|---|---|
| {{ui:Kon nie stoor nie}} | Sommige van die app se lêers het nie afgelaai terwyl dit vir vanlyn gebruik gestoor is nie. | Kontroleer jou verbinding en kies die knoppie weer. |
| {{ui:Vanlyn nie beskikbaar nie}} | Privaatvensters en sommige bestuurde rekenaars blokkeer vanlynkopieë. | Gebruik 'n normale venster, of 'n ander blaaier. |
| "Stoor…" begin nooit nie | Jy is vanlyn; stoor benodig 'n verbinding. | Stoor terwyl jy aanlyn is. |
| Die app is oud ná 'n opdatering | Die vanlynkopie is van 'n vroeëre dag. | Aanlyn, kies {{ui:Vanlyn gereed}}, en dan {{ui:Stoor weer (kry die nuutste weergawe)}}. |
| Jy wil die spasie terughê | Die vanlynkopie is ongeveer 6 MB. | Kies {{ui:Vanlyn gereed}}, en dan {{ui:Verwyder die vanlyn-kopie}}. |

Sien [Werk vanlyn](common:offline).

## Steeds vas

Herlaai die bladsy as die app ophou reageer. Jou hoeveelheidsopname gaan verlore by herlaai tensy jy dit gestoor het, so stoor eers met {{key:Mod+S}} as jy kan. Vir blaaiervrae sien [Blaaiers en rekenaars](common:browsers).
