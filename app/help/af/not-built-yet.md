---
title: Wat nog nie gebou is nie
summary: Hoeveelheidsopname-funksies wat hierdie bou nie het nie, en wat jy vandag in plaas daarvan doen.
keywords: beperkings, ontbrekend, nog nie, padkaart, beplan, tydelike uitweg, per lopie, wolk, rekenaar
from: 94ff90d0
---

TakeoffCraft is in ontwikkeling. Hierdie lys is wat die huidige bou nie doen nie, en hoe om die werk tog gedoen te kry.

## Meet

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Om 'n punt in die middel van 'n lopie of omtrek in te voeg | Skrap die merk en teken dit weer. |
| Boks- (venster-) keuse | {{key:Shift}} + klik op elke merk, of {{key:Mod+A}} vir elke merk op die blad. Sien [Kopieer, plak en dupliseer merke](topic:copy-paste). |
| Draai, spieël of herskaal 'n geplakte kopie | Plak op 'n blad op dieselfde skaal en in dieselfde oriëntasie; teken die res met die hand. |
| 'n Skaal lees van 'n ingeskandeerde blad, of van 'n grafiese skaalbalk | Kies die voorinstelling, of kalibreer op die balk se lengte. |
| Meer as een skaal per blad (detailgebiede, vergrote planne) | Meet die deel op die blad se skaal, en neem die detail af op sy eie vergrote blad as die stel een het. |

## Items en prysstelling

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Samestellingsformules wat ander soorte merke van 'n item gebruik (die deure van 'n vertrekitem in sy vloer se formules) | Formules gebruik die hoofsoort se totale; prys die ander soorte op hul eie rye. |
| Samestellingsformules wat lopie vir lopie bereken word | Formules gebruik die item se totale; gebruik `N` vir ekstras per lopie. |
| Formules wat 'n ander item se hoeveelhede gebruik | Herhaal die meting in daardie item, of werk dit uit in die sigblad-uitvoer. |
| Spanne op samestellingskomponente, of 'n werksdag anders as 8 uur | Ken die span aan die item toe; lees span-dae vir 'n ander dagduur as span-ure ÷ jou dag. |
| Merkings behalwe notas, wolke en uitligtings (pyltjies, afmetings, stempels), of antwoorde op 'n nota | Skryf dit in die nota se teks; verander die status daarvan soos dit afgehandel word. |
| 'n Prysbiblioteek wat deur 'n span gedeel word, of by jou rekening gehou word | Die biblioteek word in hierdie blaaier gehou: voer dit uit as 'n CSV en voer dit in op die ander rekenaar. |
| Handelspakkette wat deur werkende skatters nagesien is | Elke pakket is 'n beginpunt: kontroleer sy aannames teen jou werk en jou produkte voordat jy daarmee prys. Sien [Handelspakkette](topic:trade-packs). |
| Pryse in handelspakkette | Pakkette bring net samestellings: stel jou eie tariewe, of voer jou pryslys as 'n CSV in. |
| Die hoeveelheidsopname hernoem | Die naam kom van die eerste PDF; hernoem die afgelaaide lêers. |
| Blaaie met die hand benoem | Blaaie word benoem volgens die PDF se bladsyetikette; soek volgens lêernaam en bladsy. |

## Tekeninge (DWG en DXF)

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Plotstyltabelle, pen-toekennings en CTB-lêers op 'n tekening se blaaie | 'n Tekening word swart geteken, of in sy kleure donkerder gemaak vir papier; lynwydtes kom uit die tekening. |
| Oopmaak van 'n binêre DXF, of 'n DWG ouer as AutoCAD 2000 | Stoor dit as 'n ASCII DXF of 'n nuwer DWG. |
| 'n Gekoppelde tekening (xref) vind volgens die vouer waarin dit is | Maak die gekoppelde tekening se lêer ook oop, saam met die gasheer: dit word volgens lêernaam onder die oop lêers gevind. |
| 3D-polilyne, nette, soliede voorwerpe en streke meet | Tel hulle volgens laag en soort, of meet die grondplan met die Lineêr- en Oppervlakte-gereedskap. |
| Teks in 'n gemerkte PDF van 'n tekening in ander skrifte as Latyns | Karakters waarvoor Helvetica geen glyf het, druk as "?" in die gemerkte PDF; die tekening op die skerm word nie geraak nie. |
| 'n Oorhandiging van 'n tekening aan 'n ander toepassing vanaf die bladbalk | Maak dieselfde lêer in daardie toepassing oop. |
| 'n Tekening wat die hoeveelheidsopname binne-in dra, soos {{ui:PDF met die hoeveelheidsopname binne}} vir PDF's doen | {{ui:Stoor hoeveelheidsopname}}: die `.takeoff.json` maak weer oop op dieselfde tekening, gevind volgens sy inhoud. |
| PDF-onderlaes, beelde en OLE-voorwerpe wat in 'n tekening geplaas is, teken of tel | Beelde wys net as 'n raam. Maak die onderlaag-PDF self as 'n blad oop. |

## Outo-tel

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Simbole vind op 'n blad sonder 'n skaal wat op 'n ander grootte geteken is | Gee die blad sy skaal, of soek daarin met 'n boks wat daar geteken is. |
| Spieëlbeeld-simbole vind | Tel dié met die hand, of soek weer met 'n boks om 'n spieëlbeeld-simbool. |

## Lêers en deel

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Een PDF wat die merke wys en die hoeveelheidsopname dra | {{ui:Gemerkte PDF}} vir mense om die merke te sien; {{ui:PDF met die hoeveelheidsopname binne}} om in TakeoffCraft weer oop te maak. |
| 'n CSV van hoeveelhede per blad, of van die merke | Gebruik {{ui:XLSX}}: die werkblaaie By sheet en Marks het dit. |
| Wolkberging | Nog nie beskikbaar nie. Stoor projeklêers op jou rekenaar en maak rugsteun daarvan. |
| 'n Afsonderlike TakeoffCraft-rekenaartoepassing | Vanaf 0.5 is die rekenaartoepassing CadCraft Studio, met al agt toepassings in een installasie. TakeoffCraft loop ook in die blaaier. |

## Skerm en invoer

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| 'n Regsklik- (of lang-druk-) kieslys | Gebruik die nutsbalk, die paneels en die sleutels. 'n Lang druk voltooi 'n lopie of 'n omtrek. |
| Die aansig draai | Bladsye wat in die PDF gedraai is, wys reeds regop. |

## 3D-aansig

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Merke in 3D teken of wysig | Gaan terug na die blad ({{key:3}}) om te teken; kies en skrap werk in 3D. |
| Verdiepings wat op verskillende plekke op hul bladsye geplot is, in lyn bring | Stapel verdiepings wat eenders geplot is; kontroleer die ander een blad op 'n slag. |
| Pale tel wat van dieselfde grootte is as die getelde voorwerp | Elke paal op 'n blad is dieselfde grootte; dit merk waar 'n telling is, nie wat dit is nie. |

## Tenders

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Addenda by 'n pakket wat reeds gestuur is, toekenningsbriewe, 'n omvangblad wat elke tenderaar onderteken | Stuur 'n nuwe pakket, en skryf die toekenning self. [Stuur 'n pakket vir tenders](topic:bid-invitations) dek wat gebou is. |
| Tenderuitnodigings vanaf enige rekening: solank dit getoets word, is pos aan buitelandse tenderaars afgeskakel, behalwe vir rekeninge wat die CadCraft-span aangeskakel het | Laai die {{ui:Omvang-CSV}} af, stuur dit self per e-pos en tik die tenders in. |
| Tenderpakkette stuur vanaf 'n Studio-venster | Stuur vanaf TakeoffCraft in die blaaier. |
| Die tenderarea van 'n alternatief herprys met 'n gekose tender | Alternatiewe en tenderarea-subtotale gebruik jou eie pryse; pas die alternatief met die hand aan. |
| Outomatiese herinneringe voordat 'n onderaannemer se versekerings- of lisensiedatum verstryk | Die datum word op die Onderaannemers-bladsy gemerk sodra dit verstryk het of binne 30 dae is; kontroleer dit wanneer jy uitnooi. |

## Paneels

| Nog nie gebou nie | In plaas daarvan, vandag |
|---|---|
| Die {{ui:Hoeveelhede}}-tabel skuif | Slegs die {{ui:Blaaie}}- en {{ui:Items}}-paneels skuif. Sien [Rangskik die paneels](common:arrange-panels). |

## Sigblaaie

Die XLSX-werkboek is in LibreOffice Calc nagegaan, wat elke totaal tot op dieselfde sent as TakeoffCraft herbereken het. Dit is nog nie in Excel oopgemaak nie. As 'n sigbladprogram iets onverwags wys, bevat die CSV-uitvoer dieselfde skatting as gewone waardes.
