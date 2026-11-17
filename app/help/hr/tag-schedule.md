---
title: Uvoz popisa oznaka kao količina
summary: Popis oznaka izvezen iz modela zgrade (CSV) postaje tipizirane količine u predmjeru, jedna po oznaci, pa se brojevi i površine modela nalaze uz ono što ste izmjerili.
keywords: oznake, popis oznaka, model zgrade, bimcraft, ifc, količine, csv, popis, uvoz, tipizirana količina
from: a60c19b6
---

{{ui:Oznake}} na alatnoj traci uvozi popis oznaka koji je BimCraft spremio kao CSV datoteku. Svaka različita oznaka postaje tipizirana količina, iste vrste kakve postaju iskop i nasip u CivilCraftu.

1. U BimCraftu izradite željeni popis oznaka i spremite ga kao CSV.
2. Odaberite {{ui:Oznake}} i izaberite datoteku.
3. Recite koji stupac imenuje liniju ({{ui:Imenuj liniju prema}}, obično oznaka) i koji sadrži broj ({{ui:Količina iz}}). S {{ui:Broji retke}} svaki redak se broji kao jedan.
4. Odaberite jedinicu. Duljina u milimetrima postaje metre uz {{ui:Pomnoži s}} 0.001.
5. {{ui:Dodaj količine}}.

Retci s istom oznakom zbrajaju se. Ćelija koja nije broj ispušta se i broji se u sažetku. Ponovni uvoz istog popisa ažurira količine koje već imate, umjesto da dodaje nove; njihovi nazivi, cijene i gubitak ostaju vaši.

## Dobro je znati

Tipizirana količina ne mjeri se na listu, pa nema oznaka. Ništa se ne šalje nikamo; datoteka se čita ovdje.
