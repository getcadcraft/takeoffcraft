---
title: Autobrojanje simbola
summary: Obuhvatite jedan simbol, neka TakeoffCraft pronađe ostale na ovom listu ili na svim otvorenim listovima, provjerite podudaranja kliznikom i dodajte ih u jednom koraku.
keywords: bilo koji kut, zakrenut, okrenut, drugo mjerilo, različito mjerilo, autobrojanje, automatsko brojanje, pretraživanje simbola, pronađi simbole, uzorak, predložak, podudaranje, detekcija, alat za brojanje
from: fa68a6c1
---

{{ui:Autobrojanje}} pronalazi svaki primjerak simbola nakon što obuhvatite jedan. Zatim pregledate podudaranja na listu i dodajete ona koja prihvaćate kao oznake brojanja. Riječ je o pomoćnom alatu, a ne o jamstvu: uvijek pregledajte prije dodavanja.

## Pronađi simbole

1. Napravite ili kliknite stavku za brojanje pod {{ui:Stavke}}.
2. Otvorite list na kojem se simbol pojavljuje.
3. Odaberite {{ui:Autobrojanje}} na alatnoj traci ili pritisnite {{key:S}}.
   Pri vrhu lista pojavljuje se traka: „Povucite okvir oko jednog simbola na ovom listu.“
4. Da pretražite sve otvorene listove, a ne samo ovaj, označite {{ui:Pretraži sve otvorene listove}}.
5. Uvećajte prikaz da simbol bude lako vidljiv, zatim povucite okvir čvrsto oko jednog njegovog primjerka. Obuhvatite cijeli simbol; prazni papir oko njega bit će odrezan.
   Traka prikazuje „Pretraživanje…“ s trakom napretka i gumbom {{ui:Odustani}}. Stranica ostaje odzivna: možete uvećavati, pomicati prikaz i prelaziti između listova. Odabir drugog alata ili {{key:Esc}} prekida pretraživanje.
6. Kad završi, podudaranja se pojavljuju na listu kao okviri u boji stavke, a traka prikazuje sažetak, npr. „22 podudaranja, 19 za dodavanje (3 već brojano). Kliknite okvir da ga odbacite ili vratite.“

U {{ui:Autobrojanju}} povlačenje po listu crta okvir umjesto pomicanja prikaza. Za pomicanje držite {{key:Space}} i povucite ili povucite srednjim gumbom miša.

## Pregledajte podudaranja

- **Kliknite okvir** da ga odbijete. Odbijeni okvir je isprekidan i precrtan. Kliknite ga ponovo da ga vratite.
- **Pomaknite klizač {{ui:Podudaranje}}** (od 50 % do 95 %, početno 75 %). Veća vrijednost prikazuje samo bliska podudaranja; manja prikazuje labavija. Klizač samo filtrira ono što je pronađeno; ne pretražuje ponovo.
- **Već brojano**: podudaranja na mjestu koje već ima oznaku brojanja ove stavke na početku su odbijena, pa ništa ne brojite dvaput.
- **Drugi listovi**: kad ste pretraživali sve otvorene listove, prelazite između listova pomoću popisa listova ili {{key:PageDown}} i pregledajte svaki. Sažetak navodi na koliko listova ima podudaranja.

## Dodajte ih

Odaberite {{ui:Dodaj}}. Gumb kaže koliko će ih biti, npr. „Dodaj 19 oznaka“.
Oznake brojanja dodaju se u središte svakog prihvaćenog okvira: „Dodano je 19 oznaka brojanja u ‚Duplex receptacle‘. Ctrl+Z ih uklanja sve.“

Cijela serija je jedan korak poništavanja, pa jedan {{key:Mod+Z}} uklanja sve.

Da odbacite pregled bez dodavanja ičega, odaberite {{ui:Odbaci}} ili pritisnite {{key:Esc}}. Odabir drugog alata također ga odbacuje.

## Što pronalazi, a što ne

TakeoffCraft uspoređuje crtež, piksel po piksel, sa simbolom koji ste obuhvatili.

- Pronalazi simbol okrenut za 0°, 90°, 180° i 270°. Označite {{ui:Bilo koji kut (sporije)}} na traci autobrojanja prije nego što nacrtate okvir da ga pronađe i pod bilo kojim kutom: pretražuje svakih 15°, zatim svaki pronalazak dotjeruje na stupanj i pol. To traje otprilike šest puta dulje. Ne pronalazi zrcaljeni simbol (osim ako simbol zrcaljen izgleda isto).
- Uz označeno {{ui:Pretraži sve otvorene listove}}, list drugog mjerila pretražuje se u veličini koju simbol ima na tom listu: svjetiljka nacrtana u mjerilu na tlocrtu 1/8" dvostruko je manja nego na tlocrtu 1/4" i dalje se pronalazi. Takav list pretražuje se i u veličini samog okvira, za oznake i simbole otisnute jednakom veličinom na svim listovima. Ovo zahtijeva mjerilo na oba lista; list bez mjerila pretražuje se samo u veličini okvira.
- Vrlo slični simboli mogu se međusobno podudarati: duplex utičnica i četverostruka utičnica ili dvije oznake svjetiljki koje se razlikuju za jedno slovo. Podignite klizač dok ne ostanu samo pravi, a ostale odbijte ručno.
- Simbol koji presijecaju druge linije, šrafure ili tekst dobiva nižu ocjenu i možda treba nižu postavku klizača.
- Vrlo mali okviri se odbijaju: „Taj okvir je premali. Nacrtajte ga oko cijelog simbola.“ Prazan okvir također se odbija: „Taj okvir je gotovo prazan. Nacrtajte ga oko simbola.“
- List koji bi bio vrlo velik u veličini potrebnoj za ovaj simbol preskače se, a sažetak kaže „1 list je prevelik za pretraživanje ove veličine simbola.“ Obuhvatite veći simbol ili taj list brojite ručno.

Ako ništa nije pronađeno, statusna traka kaže: „Nema podudaranja. Snizite klizač podudaranja ili obuhvatite simbol tješnje.“

## Brzina i preglednici

Pretraživanje se izvodi u pozadinskom procesu, pa stranica ostaje odzivna i pretraživanje možete prekinuti u bilo kojem trenutku. Svaki list najprije se crta u radnoj veličini na samoj stranici, što može na vrlo velikom listu uzrokovati kratki zastoj. Radi u aktualnim verzijama preglednika Chrome, Edge, Firefox i Safari. Pretraživanje mnogo listova traje dulje; traka napretka pomiče se list po list. Izvan mreže autobrojanje radi kad traka aplikacije prikazuje {{ui:Spremno za offline}}: {{ui:Spremi za offline}} zadržava i pozadinski proces. Pogledajte [Rad offline](common:offline).
