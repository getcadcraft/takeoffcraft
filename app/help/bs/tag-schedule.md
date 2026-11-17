---
title: Uvezi specifikaciju oznaka kao količine
summary: Specifikacija oznaka izvezena iz modela zgrade (CSV) postaje tipizirane količine u predmjeru, jedna po oznaci, pa se brojevi i površine iz modela nalaze uz ono što ste izmjerili.
keywords: oznake, specifikacija oznaka, model zgrade, bimcraft, ifc, količine, csv, specifikacija, uvoz, tipizirana količina
from: a60c19b6
---

{{ui:Oznake}} na alatnoj traci uvozi specifikaciju oznaka koju je BimCraft sačuvao kao CSV datoteku. Svaka različita oznaka postaje tipizirana količina, iste vrste kakve postaju iskop i nasip iz CivilCraft.

1. U BimCraft napravite specifikaciju oznaka koju želite i spasite je kao CSV.
2. Izaberite {{ui:Oznake}} i izaberite datoteku.
3. Navedite koja kolona imenuje red ({{ui:Imenuj red prema}}, obično oznaka) i koja sadrži broj ({{ui:Količina iz}}). Sa {{ui:Broji redove}} svaki red se računa kao jedan.
4. Izaberite jedinicu. Dužina u milimetrima postaje metri sa {{ui:Pomnoži sa}} 0.001.
5. {{ui:Dodaj količine}}.

Redovi sa istom oznakom se zbrajaju. Ćelija koja nije broj se izostavlja i broji se u sažetku. Ponovni uvoz iste specifikacije ažurira količine koje već imate umjesto da dodaje nove; njihovi nazivi, jedinične cijene i otpad ostaju vaši.

## Dobro je znati

Tipizirana količina se ne mjeri na listu, pa nema oznaka. Ništa se ne šalje nigdje; datoteka se čita ovdje.
