---
title: Uvezite raspored oznaka kao količine
summary: Raspored oznaka izvezen iz modela zgrade (CSV) postaje tipizirane količine u predmeru, po jedna za svaku oznaku, pa se brojevi i površine modela nalaze uz ono što ste izmerili.
keywords: oznake, raspored oznaka, model zgrade, bimcraft, ifc, količine, csv, raspored, uvoz, tipizirana količina
from: a60c19b6
---

{{ui:Oznake}} na traci sa alatkama uvozi raspored oznaka koji je BimCraft sačuvao kao CSV datoteku. Svaka različita oznaka postaje tipizirana količina, iste vrste kakve postaju iskop i nasip u CivilCraft-u.

1. U BimCraft-u napravite raspored oznaka koji želite i sačuvajte ga kao CSV.
2. Izaberite {{ui:Oznake}} i izaberite datoteku.
3. Navedite koja kolona imenuje stavku ({{ui:Imenuj stavku prema}}, obično oznaka) i koja sadrži broj ({{ui:Količina iz}}). Uz {{ui:Prebroj redove}}, svaki red se broji kao jedan.
4. Izaberite jedinicu. Dužina u milimetrima postaje metri uz {{ui:Pomnoži sa}} 0.001.
5. {{ui:Dodaj količine}}.

Redovi sa istom oznakom se sabiraju. Ćelija koja nije broj se izostavlja i broji se u sažetku. Ponovni uvoz istog rasporeda ažurira količine koje već imate umesto da dodaje nove; njihovi nazivi, cene i otpad ostaju vaši.

## Dobro je znati

Tipizirana količina se ne meri na listu, pa nema oznaka. Ništa se nigde ne šalje; datoteka se čita ovde.
