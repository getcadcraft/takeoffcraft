---
title: Kies die PDF se lyne
summary: Klik op 'n lyn van 'n vektor-PDF om sy hele verbonde pad te meet, of klik binne 'n geslote omtrek vir sy oppervlakte, met die gaptoleransie gewys en een ongedaan-maak per segment.
keywords: pad, kies, lyntekening, lyne, verbonde, hele lopie, opspoor, omtrek, gaping, toleransie, brug, segmente, tab, vektor, oppervlakte uit lyne, p
from: c22526ae
---

Op 'n vektor-PDF is die mure en rande werklike lyne. {{ui:Pad}} ({{key:P}}) neem hulle soos hulle geteken is: een klik op 'n lyn meet alles wat daarmee verbind is, van end tot end, sodat jy nie 'n muur hoef te volg deur sy hoeke aan te klik nie. Die blad het 'n skaal nodig. 'n Ingeskandeerde bladsy het geen lyne om te kies nie; gebruik [Lineêr](topic:measure-linear) of [Oppervlakte](topic:measure-areas) daar.

## Kies 'n pad of 'n omtrek

1. Kies {{ui:Pad}}. Die lyn onder die wyser word omlyn, met die ander paaie wat dit dalk kan wees, dun geteken.
2. Klik op 'n lyn: die hele verbonde pad word gekies. Die balk onder die nutsbalk gee sy segmente, lengte, die gaptoleransie en hoeveel gapings oorbrug is. 'n Pad wat terugkeer na sy begin is geslote en rapporteer ook sy omtrek.
3. Of klik binne 'n geslote omtrek, weg van enige lyn: die omtrek om daardie punt word as 'n oppervlakte gekies. Die kleinste een kom eerste; {{key:Tab}} probeer die volgende groter een.
4. Druk {{key:Enter}} (of regsklik, of dubbelklik) om die merke by te voeg. 'n Gekose pad word 'n merk van 'n **lineêre** item, 'n omtrek 'n merk van 'n **oppervlakte**-item: die aktiewe item as dit daardie soort het, anders die nuutste een van daardie soort. Met geen een nie, open die nuwe-item-vorm en niks word bygevoeg totdat jy weer {{key:Enter}} druk nie. Alles wat gekies is, word in een ongedaan-maak-stap bygevoeg.

## Die gaptoleransie

Tekenaars laat klein gaatjies waar lyne moet ontmoet. Twee lyne voeg saam wanneer hul punte nader as die **gaptoleransie** is. Dit begin by 1,5 punte op die blad (gewys in voet en duim op die blad se skaal), en 'n stippelring so wyd volg die wyser en sit op elke punt van die pad daaronder. Elke gaatjie wat oorbrug is, word in oranje omring op 'n gekose pad, en die balk tel hulle.

{{key:]}} maak die toleransie wyer, {{key:[}} kleiner. 'n Gekose pad word dadelik weer saamgevoeg by die nuwe toleransie. By 'n kruising gaan die pad reguit voort, op die manier wat die minste buig, en laat die tak los.

## Sleutels

| Sleutel of handeling | Wat dit doen |
|---|---|
| Klik | Kies die pad onder die wyser, of die omtrek daaromheen. |
| {{key:Shift}} + klik | Voeg 'n ander pad of omtrek by wat gekies is. |
| {{key:Tab}} | Probeer die volgende pad onder die wyser, of die volgende groter omtrek. |
| {{key:Backspace}} of {{key:Mod+Z}} | Haal die laaste segment van die laaste gekose pad af, een segment op 'n slag. 'n Pad sonder segmente oor verdwyn. Met niks gekies nie, is {{key:Mod+Z}} die gewone ongedaan-maak. |
| {{key:[}} en {{key:]}} | Smaller en wyer gaptoleransie. |
| {{key:Enter}} | Voeg die merke by. |
| {{key:Esc}} | Maak wat gekies is leeg. |

## Goed om te weet

- 'n Kromme in die tekening is 'n ketting van kort reguit stukkies, so sy lengte is 'n haarbreedte onder die ware boog. Vir 'n presiese boog, meet 'n tekening se eie lêer ([Meet vanaf 'n tekening](topic:measure-from-a-drawing)).
- 'n Oorbrugde gaping tel as 'n reguit sprong daaroor, so die omtrek van 'n geslote omtrek sluit dit in.
- Slegs lyne en vulsels in die bladsy se eie paaie is lyne. Teks wat as letters geteken is, en prente, is nie.
