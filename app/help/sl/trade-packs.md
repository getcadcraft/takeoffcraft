---
title: Paketi po strokah
summary: Dodajte brezplačne sestave za stroko v svojo knjižnico cen, jih odstranite v enem koraku in svojo knjižnico delite kot paket.
keywords: paket po stroki, paket, sestavi, predloge, začetni elementi, elektrika, suhomontaža, ogrodje, pleskanje, beton, talne obloge, zidarska dela, kritina, oblaganje fasade, tesarska dela, vodovod, hvac, izolacija, krajinska ureditev, lesene terase, splošni izvajalec, csi, masterformat, cc0, dodaj, odstrani, deli
from: d3c036be
---

**Paket po stroki** je nabor pripravljenih elementov za eno stroko: vsak z enoto, višino ali globino, odpadkom in svojim **sestavom**, to je deli in formulami, ki izmerjeni potek, površino ali število spremenijo v materiale. Suhomontažna pregrada na primer prinese svoje vodilne profile, stojine, plošče, vijake, trak in maso za gletanje.

Paketi se dodajo v vašo [knjižnico cen](topic:price-library), od tam pa njihove elemente dodate v katerokoli predizmero.

## Dodajanje paketa

1. Odprite {{ui:Knjižnica}} na vrhu podokna {{ui:Postavke}}, nato {{ui:Paketi po strokah …}}.
2. Izberite {{ui:Enota}}: angleške (LF, SF), metrične (m, m²) ali obe. Vsak sestav pride v obeh sistemih.
3. Izberite {{ui:Dodaj}} ob paketu.

Elementi paketa se pojavijo v knjižnici, označeni z imenom paketa. Če jih želite uporabiti, jih označite v knjižnici in izberite {{ui:Dodaj v predizmere}}.

:::note
**Paket ne prinese cen.** Njegovi elementi v knjižnici kažejo "set your rate". Cene so vaše: vpišite jih v knjižnico ali urejevalnik elementa ali uvozite svoj cenik kot CSV in uporabite {{ui:Posodobi cene}}.
:::

Če v knjižnici že imate element z istim imenom in vrsto, paket pusti vašega pri miru. Ponovno dodajanje paketa nadomesti njegove elemente z novo različico.

## Odstranitev paketa

V {{ui:Paketi po strokah …}} izberite {{ui:Odstrani}} ob paketu, ki ste ga dodali, nato še enkrat za potrditev. Vsak element, ki je prišel iz njega, izgine iz knjižnice v enem koraku. Elementi, ki ste jih že dodali v predizmero, ostanejo v tej predizmeri.

## Kaj je v paketu

Pod paketom izberite {{ui:Viri in podrobnosti}}, da vidite, iz česa je bil vsak sestav napisan: gradbeni predpisi, standardi in navodila za vgradnjo trgovinskih združenj. V knjižnici se za vire in predpostavke elementa, na primer razmak stojin ali porabo barve, ustavite s kazalcem nad elementom. Preverite jih glede na svoje delo in tehnične liste izdelkov ter spremenite formule, kjer se razlikujejo (glejte [Sestavi in formule](topic:assemblies)).

Vsak paket je označen **Začetni paket: še ga ni pregledal ocenjevalec**, dokler ga ne pregledajo delujoči ocenjevalci.

Vsak element nosi tudi številko CSI MasterFormat, na primer `09 21 16`.

## Delite svojo knjižnico kot paket

{{ui:Izvozi kot paket …}} v knjižnici shrani njo kot datoteko paketa (`.ccpack.json`), ki jo lahko kdorkoli doda z {{ui:Odpri datoteko paketa …}}. Privzeto izpusti elemente, ki so prišli iz paketov, ki ste jih dodali, in ne nosi cen. Označite {{ui:Vključi moje cene kot vzorčne cene}}, da pošljete tudi svoje cene: označene so z regijo in datumom, ki ju navedete, kdor doda paket, pa se odloči, ali jih bo uporabil.

Datoteke paketov so navadni podatki, nikoli programi. TakeoffCraft vsak del datoteke preveri, preden ga uporabi, in izpusti vse, česar ne zna prebrati.
