---
title: Uitvoerkolomme
summary: Elke werkblad en kolom van die XLSX-uitvoer en die CSV, met die formules wat die Beraming-werkblad dra.
keywords: uitvoer, kolomme, xlsx, csv, werkblad, beramingsblad, per blad, merke, skale, formules, velde
from: fed07851
---

## Beraming (XLSX-werkblad en CSV)

Een ry per item, gevolg deur 'n ry per komponent van sy samestelling (ingespring). Dan 'n leë ry en die projektotaal.

| Kolom | Inhoud | In die XLSX |
|---|---|---|
| A Item | Itemnaam (vet) of komponentnaam (ingespring) | Teks |
| B Tipe | Lineêr, Oppervlakte, Tel of Komponent | Teks |
| C Eenheid | LF, m, SF, SY, m², EA, of die komponent se eenheid | Teks |
| D Hoeveelheid | Gemete totaal, of die formuleresultaat | Getal |
| E Afval % | Afval | Persentasie (0.10 = 10%) |
| F Hoev. met afval | Hoeveelheid × (1 + afval) | Formule `D*(1+E)` |
| G Materiaal per eenheid | Materiaaltarief | Getal |
| H Arbeid per eenheid | Arbeidstarief | Getal |
| I Materiaal | Uitgebreide materiaal | Formule `ROUND(F*G,2)` |
| J Arbeid | Uitgebreide arbeid | Formule `ROUND(F*H,2)` |
| K Totaal | Materiaal + arbeid | Formule `I+J` |
| L Notas | Gebruikte formule, formulefout, merke op blaaie sonder skaal, muuroppervlakte, omtrek | Teks |

Projektotaalry: `SUM` van kolomme I, J en K oor elke ry hierbo, en "Onvolledig: sien die notas hierbo" in Notas wanneer iets weggelaat is.

'n Ry met 'n formulefout het geen hoeveelheid of bedrae nie; die nota gee die fout. Die kopry is vasgepen.

In die CSV hou dieselfde kolomme gewone waardes, Afval % is 'n getal van persent (10 vir 10%), en geld is in dollar met twee desimale. Teks wat 'n sigblad vir 'n formule kan aanvaar (begin met `=`, `+`, `-` of `@`), kry 'n voorste `'` sodat dit teks bly.

## Per blad (slegs XLSX)

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam (met die PDF-naam wanneer dit nie oop is nie) |
| Item | Itemnaam |
| Hoeveelheid | Daardie item se hoeveelheid op daardie blad, in sy eenheid |
| Eenheid | Die item se eenheid |
| Merke | Aantal merke |

## Merke (slegs XLSX)

Een ry per merk.

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam |
| Item | Itemnaam |
| Tipe | Lineêr, Oppervlakte of Tel |
| Hoeveelheid | Lengte, netto-oppervlakte, of 1 |
| Eenheid | LF of m; SF, SY of m²; EA |
| Detail | Lineêr: die segmentlengtes, afgetrekte segmente gemerk "(aftrek)", en "trek (lengte) af van (lengte) getekend". Oppervlakte: bruto- en uitsneeoppervlaktes wanneer daar uitsnedes is, en die omtrek. "Blad het geen skaal" vir ongeskaalde merke. |
| Tenderarea | Slegs wanneer die hoeveelheidsopname tenderareas het: die merk se oppervlakte, of "Geen tenderarea" |

## Per tenderarea (slegs XLSX, wanneer die hoeveelheidsopname tenderareas het)

| Kolom | Wat |
|---|---|
| Tenderarea | Die area se naam, of "Geen tenderarea" |
| Item | Die item, of 'n ingespring komponent daaronder |
| Eenheid | Die item se of komponent se eenheid |
| Hoeveelheid | Gemeet in daardie area (komponente: die formule op die area se totale) |
| Hoev. met afval | Hoeveelheid × (1 + afval) |
| Materiaal, Arbeid, Totaal | Uitgebreid tot die sent, soos op Beraming |
| Notas | Formule, foute en ongeskaalde merke, soos op Beraming |

Elke area eindig met 'n "(naam) subtotaal"-ry waarvan die koste `SUM`-formules oor sy rye is; die laaste ry, **Alle tenderareas**, tel die subtotale bymekaar. Die **Merke**-werkblad het dan 'n sewende kolom, **Tenderarea**.

## Skale (slegs XLSX)

Een ry per blad wat 'n skaal of merke het.

| Kolom | Inhoud |
|---|---|
| Blad | Bladnaam |
| Skaal | Die voorinstelling se naam, of die gekalibreerde skaal, of "Geen skaal" |
| Hoe | "Voorinstelling", of "Gekalibreer op (die afstand wat jy getik het)" |
| Voet per PDF-eenheid | Die presiese skaalfaktor wat TakeoffCraft gebruik |

## Lêernaamme

- `(name).xlsx` en `(name).csv`, waar die naam kom van die eerste PDF wat in die hoeveelheidsopname oopgemaak is.
- Die CSV is UTF-8 met 'n bytevolgorde-merker en Windows-reëleindes, wat sigbladprogramme op elke platform lees.
