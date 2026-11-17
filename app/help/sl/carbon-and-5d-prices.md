---
title: Vgrajeni ogljik in cenik za 5D
summary: Ogljik sešteje vgrajeni ogljik predizmere iz količine vsake postavke in odprte tabele faktorjev ter pošlje stopnje predizmere v BimCraft kot cenik za stroške 5D.
keywords: ogljik, vgrajeni ogljik, kgco2e, co2, faktorji, a1-a3, prevoz, odpadek, 5d, cenik, strošek, bimcraft, epd
from: f4bff3b8
---

{{ui:Ogljik}} na orodni vrstici sešteje vgrajeni ogljik tega, kar ste izmerili, in vaše stopnje spremeni v cenik, ki ga model stavbe lahko uporabi. Gre za oceno, ne za presojo.

## Vgrajeni ogljik

Količina vsake postavke, z njenim odpadkom, se pomnoži z vrstico tabele faktorjev. Vrstica se ujema z besedami imena postavke („betonska plošča“ najde vrstico s ključno besedo beton). Tabela je ista odprta tabela, ki jo uporablja BimCraft, zato datoteka, ki jo tu naložite, deluje tudi tam. **Vrstice, ki pridejo s programom, so začetne vrednosti: splošne, nepreverjene in ne iz nobene baze podatkov.** Pogovorno okno to pove ob številkah; zamenjajte jih z lastnim virom, preden se zanesete na katero koli številko.

1. Izberite {{ui:Ogljik}}. Našteti so šteti elementi s svojimi kilogrami CO2e; skupni znesek je zgoraj.
2. Označite {{ui:A4 prevoz}} ali {{ui:A5 odpadek na gradbišču}}, da štejete tudi te faze, za vrstice, ki zanje navajajo vrednost. Faza izdelave se vedno šteje.
3. Za drugo vrstico za postavko ali nobeno uporabite seznam v njeni vrstici.
4. {{ui:Faktorji iz datoteke…}} naloži tabelo faktorjev (JSON ali CSV), narejeno iz vašega lastnega vira; njene vrstice nadomestijo začetne vrstice z enakim id. {{ui:Faktorji (JSON)}} shrani vaše.

Faktor je na meter, kvadratni meter, kubični meter, kos ali kilogram. Vrstica, izmerjena v ft ali ft², se pretvori. Faktor v kilogramih potrebuje prostornino (kubične jarde ali metre) in gostoto vrstice. Postavka, katere faktor potrebuje količino, ki je ne meri, je navedena pod {{ui:Izpuščeno}} z razlogom in nikoli ni ugibana. Tekoči seštevek v vrstici stanja kaže isto številko.

Vaše vrstice faktorjev, vaše izbire in faze, ki jih štejete, so shranjene v datoteki predizmere.

## Cenik za stroške 5D

{{ui:Cene 5D (JSON)}} in {{ui:Cene 5D (CSV)}} shranita stopnje predizmere kot cenik: ena vrstica na postavko s ceno materiala in dela na enoto ter njenim odpadkom. Naložite ga v podokno stroškov BimCraft (Vgrajeni ogljik in stroški 5D), da cenite naloge modela stavbe z istimi stopnjami, ki so ustvarile ponudbo. Postavke, izmerjene v enoti, ki je cenik nima, in postavke brez stopnje so izpuščene.

## Z vašim pomočnikom

Če v {{ui:Nastavitve}} dovolite pomočnike, lahko berejo ogljik (carbon_check). Nalaganje faktorjev je vaša naloga.

## Dobro je vedeti

Nič ni poslano nikamor. Številke so le toliko dobre, kolikor so faktorji, ki jih naložite.
