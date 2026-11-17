---
title: Paketi za struku
summary: Dodajte besplatne sklopove za struku u biblioteku cijena, uklonite ih u jednom koraku i podijelite vlastitu biblioteku kao paket.
keywords: paket za struku, paket, sklopovi, šabloni, početne stavke, električni, gips-karton, konstrukcija, bojenje, beton, podovi, zidarski, krovni radovi, fasadna obloga, stolarija, vodoinstalacije, grijanje i ventilacija, izolacija, uređenje okoliša, terasa, glavni izvođač, csi, masterformat, cc0, dodaj, ukloni, podijeli
from: d3c036be
---

**Paket za struku** je skup gotovih stavki za jednu struku: svaka sa svojom jedinicom, visinom ili dubinom, otpadom i svojim **sklopom**, dijelovima i formulama koje pretvaraju izmjerenu dionicu, površinu ili broj u materijale. Gips-karton pregrada, na primjer, donosi svoje vodilice, podužnice, ploče, vijke, traku i masu za glet.

Paketi se dodaju u vašu [cjenovnu biblioteku](topic:price-library), a odatle dodajete njihove stavke u bilo koji predmjer.

## Dodaj paket

1. Otvorite {{ui:Biblioteka}} na vrhu panela {{ui:Stavke}}, zatim {{ui:Paketi za struku…}}.
2. Izaberite {{ui:Jedinice}}: imperijalne (LF, SF), metričke (m, m²) ili obje. Svaki sklop dolazi u oba sistema.
3. Izaberite {{ui:Dodaj}} pored paketa.

Stavke paketa se pojavljuju u biblioteci, označene nazivom paketa. Za korištenje označite ih u biblioteci i izaberite {{ui:Dodaj u predmjer}}.

:::note
**Paket ne donosi cijene.** Njegove stavke u biblioteci pokazuju „postavite svoju cijenu“. Cijene su vaše: upišite ih u biblioteci ili u uređivaču stavke, ili uvezite svoj cjenovnik kao CSV i koristite {{ui:Ažuriraj cijene}}.
:::

Ako već imate stavku istog naziva i tipa u biblioteci, paket ostavlja vašu nepromijenjenu. Ponovno dodavanje paketa zamjenjuje njegove stavke novom verzijom.

## Ukloni paket

U {{ui:Paketi za struku…}} izaberite {{ui:Ukloni}} pored paketa koji ste dodali, zatim još jednom za potvrdu. Svaka stavka koja je došla iz njega napušta biblioteku u jednom koraku. Stavke koje ste već dodali u predmjer ostaju u tom predmjeru.

## Šta je u paketu

Izaberite {{ui:Izvori i detalji}} ispod paketa da vidite iz čega je svaki sklop napisan: građevinski propisi, standardi i uputstva za ugradnju strukovnih udruženja. U biblioteci zadržite pokazivač na stavci da pročitate njene izvore i pretpostavke, kao što su razmak profila ili potrošnja boje. Provjerite ih u odnosu na vaš posao i tehničke listove vaših proizvoda, i promijenite formule gdje se razlikuju (vidi [Sklopovi i formule](topic:assemblies)).

Svaki paket je označen sa **Početni: još nije pregledao procjenitelj** dok ga radni procjenitelji ne pregledaju.

Svaka stavka također nosi svoj broj CSI MasterFormat, kao što je `09 21 16`.

## Podijelite svoju biblioteku kao paket

{{ui:Izvezi kao paket…}} u biblioteci čuva je kao datoteku paketa (`.ccpack.json`) koju svako može dodati sa {{ui:Otvori datoteku paketa…}}. Podrazumijevano izostavlja stavke koje su došle iz paketa koje ste dodali, i ne nosi cijene. Označite {{ui:Uključi moje stope kao primjerne stope}} da pošaljete i svoje cijene: one idu označene regijom i datumom koje navedete, a onaj ko doda paket bira hoće li ih koristiti.

Datoteke paketa su običan podatak, nikada programi. TakeoffCraft provjerava svaki dio prije upotrebe i izostavlja sve što ne može pročitati.
