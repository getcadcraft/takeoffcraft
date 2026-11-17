---
title: Indlejret kulstof og en 5D-prisliste
summary: Kulstof lægger den indlejrede CO2e for mængdeudtrækket sammen ud fra hver posts mængde og en åben faktortabel og sender mængdeudtrækkets satser til BimCraft som en prisliste til 5D-omkostninger.
keywords: kulstof, indlejret kulstof, kgCO2e, co2, faktorer, A1-A3, transport, spild, 5d, prisliste, omkostning, bimcraft, epd
from: f4bff3b8
---

{{ui:Kulstof}} på værktøjslinjen lægger den indlejrede kulstof sammen for det, du har målt, og gør dine satser til en prisliste, som bygningsmodellen kan bruge. Det er et skøn, ikke en vurdering.

## Indlejret kulstof

Hver posts mængde, med dets spild, ganges med en række i faktortabellen. En række matches efter ordene i postens navn (»betonplade« finder en række med nøgleordet beton). Tabellen er den samme åbne tabel, BimCraft bruger, så en fil, du indlæser her, virker dér også. **Rækkerne, der følger med programmet, er startværdier: generiske, ikke kontrollerede og ikke fra nogen database.** Dialogen siger det ved siden af tallene; erstat dem med din egen kilde, før du stoler på et tal.

1. Vælg {{ui:Kulstof}}. De talte poster vises med deres kilogram CO2e; totalen står ovenfor.
2. Markér {{ui:A4 transport}} eller {{ui:A5 spild på byggepladsen}} for at tælle disse stadier med også, for de rækker, der giver et tal for dem. Produktstadiet tælles altid med.
3. For at bruge en anden række for en post, eller ingen, brug listen på dens linje.
4. {{ui:Faktorer fra en fil…}} indlæser en faktortabel (JSON eller CSV), der er lavet ud fra din egen kilde; dens rækker erstatter startrækkerne med samme id. {{ui:Faktorer (JSON)}} gemmer din.

En faktor er pr. meter, kvadratmeter, kubikmeter, post eller kilogram. En linje målt i fod eller kvadratfod omregnes. En kilogramfaktor kræver et volumen (cubic yards eller kubikmeter) og rækkens densitet. En post, hvis faktor kræver en mængde, den ikke måler, listes under {{ui:Udeladt}} med årsagen, aldrig gættet. Den løbende total i statuslinjen viser det samme tal.

Dine faktorrækker, dine valg og de stadier, du tæller med, gemmes i mængdeudtrækkets fil.

## En prisliste til 5D-omkostninger

{{ui:5D-priser (JSON)}} og {{ui:5D-priser (CSV)}} gemmer mængdeudtrækkets satser som en prisliste: én række pr. prissat post med dens materiale- og lønsats pr. enhed og dens spild. Indlæs den i BimCraft's omkostningspanel (Indlejret kulstof og 5D-omkostninger) for at prissætte bygningsmodellens opgaver med de samme satser, der lå til grund for tilbuddet. Poster målt i en enhed, tabellen ikke har, og poster uden sats udelades.

## Med din assistent

Hvis du tillader assistenter i {{ui:Indstillinger}}, kan de læse kulstoffet (carbon_check). Indlæsning af faktorer er din opgave.

## Godt at vide

Intet sendes nogen steder hen. Tallene er kun så gode som de faktorer, du indlæser.
