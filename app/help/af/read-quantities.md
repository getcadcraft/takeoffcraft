---
title: Lees hoeveelhede en die beraming
summary: Gebruik die Hoeveelhede-tabel per item en per blad, die werkstotaal, uitlig en die Onvolledig-waarskuwing.
keywords: hoeveelhede, totale, per item, per blad, werkstotaal, beraming, opsomming, verslag, uitlig, onvolledig, kostes
from: 069d41f1
---

Die {{ui:Quantities}}-tabel onder aan die venster is jou lewendige beraming. Dit verander die oomblik as jy teken, skrap, die skaal verander of 'n tarief wysig. Hoeveelhede word nooit gestoor nie; hulle word elke keer weer uit die merke gemeet, so hulle kan nie verouderd raak nie.

## Per item

Kies {{ui:By item}} (die verstek). Elke item het 'n ry, en elk van sy samestellingskomponente het 'n ry daaronder.

| Kolom | Betekenis |
|---|---|
| Item | Naam, met die item se kleur. "+(n) unscaled" beteken sommige merke is op bladsye sonder skaal. |
| Quantity | Die gemete totaal in die item se eenheid (komponente: die formuleresultaat). |
| Unit | LF, m, SF, SY, m², EA, of die komponent se eenheid. |
| Waste % | Hier of in die item-redigeerder getik. |
| With waste | Hoeveelheid × (1 + verspilling). |
| Material/unit, Labor/unit | Tariewe; jy kan hulle hier tik. |
| Material, Labor | Met verspilling × tarief, afgerond tot die sent. |
| Total | Materiaal + arbeid. |

Die laaste ry, **Job total**, tel die materiaal-, arbeid- en totaalkolomme bymekaar. Dieselfde totaal verskyn regs in die tabel se kop.

Tik in 'n verspillings- of tariefsel en druk {{key:Enter}} of klik weg om dit toe te pas. 'n Waarde wat TakeoffCraft nie kan lees nie, word rooi omlyn en die statusbalk sê waarom, byvoorbeeld "Type an amount like 12.50."

Klik op 'n item se ry om sy merke op elke blad uit te lig en na 'n blad te spring wat hulle het (dieselfde as om daarop te klik onder {{ui:Items}}).

## Per blad

Kies {{ui:By sheet}} om elke item se hoeveelheid op elke blad te sien, met die aantal merke. Klik op 'n ry om daardie blad oop te maak met die item uitgelig. Gebruik dit om te kontroleer dat elke blad afgeneem is, of om hoeveelhede per verdieping of werkgebied te verdeel.

## Per tenderarea

As die hoeveelheidsopname tenderareas het, lys {{ui:By area}} elke area se items en 'n subtotaal. Sien [Tenderareas](topic:bid-areas).

## Die Onvolledig-waarskuwing

Wanneer iets uit die totale gelaat word, wys die kop 'n waarskuwing, byvoorbeeld:

"Onvolledig: 1 formulefout, 6 merke op bladsye sonder skaal (nie in die totale nie)"

- **Formulefoute**: 'n samestellingskomponent se formule kan nie uitgewerk word nie. Sy ry sê "Formula error: …". Sien [Samestellings en formules](topic:assemblies#when-a-formula-is-wrong).
- **Merke op bladsye sonder skaal**: gee daardie bladsye 'n skaal. Sien [Stel die skaal](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Dieselfde notas gaan in die uitgevoerde sigblad, sodat 'n onvolledige beraming nooit volledig lyk nie.

## Lig 'n item uit

Klik op 'n item onder {{ui:Items}} of in die tabel. Sy merke bly op volle sterkte op elke blad en die res vervaag. Die bladlys wys "(n) highlighted" op elke blad met sy merke. Klik weer op die item om die uitlig te stop.

## Itemtotale in die sypaneel

Elke item in die {{ui:Items}}-lys wys ook sy hoeveelheid. Die item-redigeerder se **Measured**-blok wys die waardes wat sy formules gebruik: lengte, lynmetings en muuroppervlakte; oppervlakte, omtrek en aantal areas; of telling.

## Merke op PDF's wat nie oop is nie

'n Hoeveelheidsopname kan merke insluit op PDF's wat jy nie hierdie keer oopgemaak het nie. Hulle tel steeds in elke totaal; die bladlys noem daardie PDF's. Sien [Stoor en heropen 'n hoeveelheidsopname](topic:save-and-reopen).

## Meer ruimte

Die pylknop regs van die {{ui:Quantities}}-kop verberg die tabel sodat die blad meer ruimte kry. Kies dit weer om die tabel terug te bring.
