---
title: Paketi za struke
summary: Dodajte besplatne sklopove za struku u biblioteku cena, uklonite ih u jednom koraku i podelite sopstvenu biblioteku kao paket.
keywords: paket za struku, paket, sklopovi, šabloni, početne stavke, elektroinstalacije, gips-karton, konstrukcija, moleraj, beton, podovi, zidarski radovi, krovopokrivanje, fasadna obloga, stolarija, vodoinstalacije, hvac, izolacija, uređenje terena, terase, generalni izvođač, csi, masterformat, cc0, dodaj, ukloni, podeli
from: d3c036be
---

**Paket za struku** je skup gotovih stavki za jednu struku: svaka sa svojom jedinicom, visinom ili dubinom, otpadom i svojim **sklopom**, delovima i formulama koje pretvaraju izmereni tok, površinu ili brojanje u materijal. Montažni zid od gips-kartona, na primer, donosi svoje šine, stubove, ploče, vijke, traku i glet.

Paketi se dodaju u vašu [biblioteku cena](topic:price-library), a odatle dodajete njihove stavke u bilo koji predmer.

## Dodajte paket

1. Otvorite {{ui:Biblioteka}} na vrhu panela {{ui:Stavke}}, zatim {{ui:Paketi za struku…}}.
2. Izaberite {{ui:Jedinice}}: imperijalne (LF, SF), metričke (m, m²) ili oba. Svaki sklop dolazi u oba sistema.
3. Izaberite {{ui:Dodaj}} pored paketa.

Stavke paketa se pojavljuju u biblioteci, označene nazivom paketa. Da biste ih koristili, označite ih u biblioteci i izaberite {{ui:Dodaj u predmer}}.

:::note
**Paket ne donosi cene.** Njegove stavke u biblioteci pokazuju „postavite svoju cenu“. Cene su vaše: unesite ih u biblioteci ili u uređivaču stavke, ili uvezite svoj cenovnik kao CSV i koristite {{ui:Ažuriraj cene}}.
:::

Ako već imate stavku istog naziva i tipa u biblioteci, paket ostavlja vašu kakva je. Ponovno dodavanje paketa zamenjuje njegove stavke novom verzijom.

## Uklonite paket

U {{ui:Paketi za struku…}} izaberite {{ui:Ukloni}} pored paketa koji ste dodali, pa još jednom za potvrdu. Svaka stavka koja je iz njega potekla napušta biblioteku u jednom koraku. Stavke koje ste već dodali u predmer ostaju u tom predmeru.

## Šta je u paketu

Izaberite {{ui:Izvori i pojedinosti}} ispod paketa da vidite iz čega je svaki sklop napisan: građevinski propisi, standardi i uputstva za ugradnju udruženja struke. U biblioteci, zadržite pokazivač iznad stavke da pročitate njene izvore i pretpostavke, poput razmaka stubova ili potrošnje boje. Proverite ih prema vašem poslu i tehničkim listovima vaših proizvoda, i promenite formule gde se razlikuju (vidi [Sklopovi i formule](topic:assemblies)).

Svaki paket je označen **Početni: procenitelj ga još nije pregledao** dok ga ne pregledaju iskusni procenitelji.

Svaka stavka takođe nosi svoj CSI MasterFormat broj, kao `09 21 16`.

## Podelite svoju biblioteku kao paket

{{ui:Izvezi kao paket…}} u biblioteci čuva je kao datoteku paketa (`.ccpack.json`) koju svako može dodati uz {{ui:Otvori datoteku paketa…}}. Podrazumevano izostavlja stavke koje su potekle iz paketa koje ste dodali i ne nosi cene. Označite {{ui:Uključi moje cene kao primere cena}} da pošaljete i svoje cene: idu označene regionom i datumom koji navedete, a onaj ko doda paket bira da li će ih koristiti.

Datoteke paketa su obični podaci, nikada programi. TakeoffCraft proverava svaki deo pre upotrebe i izostavlja sve što ne može da pročita.
