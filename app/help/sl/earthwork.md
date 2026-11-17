---
title: Zemeljska dela in višinske kote točk
summary: Označite višinske kote točk na situacijskem načrtu, jih prenesite v CivilCraft za površje ter izkop in nasip, tu pa izmerite preproste izkope.
keywords: zemeljska dela, izkop, nasip, izkop in nasip, planiranje, višinska kota, kote, topo, površje, triangulacija, civilcraft, točke, pnezd, jarek
from: a898e508
---

TakeoffCraft meri to, kar je narisano na listu. Zemeljska dela potrebujejo površje terena, zato jih delimo s CivilCraft, ki iz točk zgradi površja, jih planira ter izračuna izkop, nasip in odvoz.

## Preprosti izkopi tukaj

Za tloris, izkopan na eno globino, zadostuje postavka površine z **globino**: prostornina je površina × globina. Splošni [paket izvajalca gradbenih del](topic:trade-packs) ima postavko grobega izkopa (prostornina v naravnem stanju, prostornina v rahlem stanju in število tovorkov tovornjakov) ter postavko jarka za komunalne vode (izkop, posteljica in zasip po dolžini in globini).

## Višinske kote točk za CivilCraft

1. Nastavite merilo situacijskega lista.
2. Ustvarite postavko **Štetje**, na primer „Obstoječi teren“, in kliknite vsako višinsko koto točke na listu.
3. Izberite oznako in v podoknu Izbrana oznaka vpišite njeno {{ui:Višinska kota}}: `102.5`, `102'-6"` ali `31.24 m`. Negativne in ničelne kote so dovoljene.
4. Odprite meni {{ui:Izvoz}} in izberite {{ui:Višinske kote točk}}. Dobite datoteko točk (`.csv`) s stolpci Point, Northing, Easting, Elevation in Description, po eno vrstico za vsako označeno točko odprtega lista.
5. Odprite to datoteko v CivilCraft (glejte [Uvoz točk](app:civilcraft/import-points)). Iz točk zgradi površje ([Zgradi površje](app:civilcraft/build-surface)); od tu naprej primerja površja in izračuna izkop in nasip ([Prostornine](app:civilcraft/volumes)).

Northing in Easting sta lastni koordinati lista v čevljih, merjeni od kota strani pri njegovem merilu. Razdalje in prostornine med točkami so pravilne, vendar to niso geodetske koordinate vašega zemljišča. Ko jih potrebujete, jih v CivilCraft prenesite na koordinate lokacije.

:::note
Točke z različnih listov nimajo skupnih koordinat, zato izvoz zajame samo odprti list. Kote se shranijo skupaj s predizmero in se prenesejo s kopiranjem in lepljenjem.
:::

## Izkop in nasip iz CivilCraft

Zemeljska dela iz CivilCraft se vrnejo kot dve postavki, ki ju lahko vrednotite:

1. V CivilCraft oblikujte svoje temelje in koridorje, nato pod **Zemeljska dela** izberite {{ui:Pošlji v TakeoffCraft}} ([Prostornine zemeljskih del](app:civilcraft/volumes)). Shrani se datoteka količin (`.quantities.json`).
2. V TakeoffCraft jo odprite z {{ui:Odpri predizmere}} ali jo spustite na aplikacijo. Predizmera ostane odprta: datoteka doda **Zemeljska dela: izkop** in **Zemeljska dela: nasip** kot [vnesene količine](topic:create-items#typed-quantities-no-drawing) v kubičnih jardih (CY) za projekt v čevljih oziroma v kubičnih metrih (m³) za projekt v metrih. Gre za en korak: {{key:Mod+Z}} ga razveljavi.
3. Preimenujte ju, nastavite odpadek, cene in sestave, kakor želite.

Ob spremembi zasnove ponovno pošljite iz CivilCraft in odprite novo datoteko: isti dve postavki dobita nove količine. Njuna imena, cene, odpadek in sestavi ostanejo taki, kot ste jih nastavili. Če se je enota projekta spremenila, to pove vrstica stanja: preverite cene. Datoteka iz drugega projekta CivilCraft doda svoji dve postavki.

Količine so prostornine v naravnem stanju, kot jih je izmeril CivilCraft (metoda mreže): brez krčenja in napihovanja. Dodajte to kot odpadek ali s formulo, na primer `Q * 1.25`, za prostornino v rahlem stanju. Urejevalnik postavk pokaže, od kod in kdaj prihaja vsaka; enako pove stolpec opomb v predračunu.

:::note
Datoteka količin je navaden JSON (`"format": "cadcraft-quantities"`), zato jo lahko napiše tudi skript ali drug program: ime aplikacije, projekt ter postavke s ključem, imenom, enoto in količino.
:::
