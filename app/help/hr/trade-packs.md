---
title: Paketi struka
summary: Dodajte besplatne sklopove za struku u svoju cjenovnu knjižnicu, uklonite ih u jednom koraku i podijelite vlastitu knjižnicu kao paket.
keywords: paket struke, paket, sklopovi, predlošci, početne stavke, električni, suhomontaža, drvena konstrukcija, bojanje, beton, podovi, zidarski radovi, krovište, obloge, stolarija, vodoinstalacije, hvac, izolacija, krajobraz, terase, glavni izvođač, csi, masterformat, cc0, dodaj, ukloni, podijeli
from: d3c036be
---

**Paket struke** je skup gotovih stavki za jednu struku: svaka s vlastitom jedinicom, visinom ili dubinom, gubitkom i svojim **sklopom**, dijelovima i formulama koje izmjereni dio, površinu ili broj pretvaraju u materijale. Suhomontažna pregrada, na primjer, donosi svoje tračnice, stupove, ploče, vijke, traku i kit.

Paketi se dodaju u vašu [cjenovnu knjižnicu](topic:price-library), a odatle dodajete njihove stavke u bilo koji predmjer.

## Dodavanje paketa

1. Otvorite {{ui:Knjižnica}} na vrhu ploče {{ui:Stavke}}, zatim {{ui:Paketi struke…}}.
2. Odaberite {{ui:Jedinice}}: imperijalne (LF, SF), metričke (m, m²) ili obje. Svaki sklop dolazi u oba sustava.
3. Odaberite {{ui:Dodaj}} pored paketa.

Stavke paketa pojavljuju se u knjižnici, označene nazivom paketa. Da biste ih koristili, označite ih u knjižnici i odaberite {{ui:Dodaj u predmjer}}.

:::note
**Paket ne donosi cijene.** Njegove stavke u knjižnici pokazuju „postavite svoju cijenu“. Cijene su vaše: upišite ih u knjižnicu ili u uređivač stavki, ili uvezite svoj cjenik kao CSV i upotrijebite {{ui:Ažuriraj cijene}}.
:::

Ako već imate stavku istog naziva i vrste u knjižnici, paket vašu ostavlja kakva jest. Ponovno dodavanje paketa zamjenjuje njegove vlastite stavke novom verzijom.

## Uklanjanje paketa

U {{ui:Paketi struke…}} odaberite {{ui:Ukloni}} pored paketa koji ste dodali, pa još jednom za potvrdu. Svaka stavka koja je došla iz njega napušta knjižnicu u jednom koraku. Stavke koje ste već dodali u predmjer ostaju u tom predmjeru.

## Što je u paketu

Odaberite {{ui:Izvori i detalji}} pod paketom da vidite iz čega je svaki sklop napisan: građevinski propisi, norme i vodiči za ugradnju udruga iz struke. U knjižnici zadržite pokazivač nad stavkom da pročitate njezine izvore i pretpostavke, poput razmaka profila ili potrošnje boje. Provjerite ih prema svom poslu i tehničkim listovima vaših proizvoda te promijenite formule gdje se razlikuju (vidi [Sklopovi i formule](topic:assemblies)).

Svaki paket je označen kao **Početni: još ga nije pregledao procjenitelj** dok ga radni procjenitelji ne pregledaju.

Svaka stavka nosi i svoj broj CSI MasterFormat, poput `09 21 16`.

## Podijelite svoju knjižnicu kao paket

{{ui:Izvezi kao paket…}} u knjižnici sprema je kao datoteku paketa (`.ccpack.json`) koju svatko može dodati pomoću {{ui:Otvori datoteku paketa…}}. Prema zadanom izostavlja stavke koje su došle iz paketa koje ste dodali i ne nosi cijene. Označite {{ui:Uključi moje cijene kao primjere cijena}} da pošaljete i svoje cijene: idu označene regijom i datumom koje unesete, a onaj tko doda paket odlučuje hoće li ih koristiti.

Datoteke paketa su obični podaci, nikad programi. TakeoffCraft provjerava svaki dio prije uporabe i izostavlja ono što ne može pročitati.
