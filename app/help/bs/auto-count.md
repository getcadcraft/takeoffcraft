---
title: Auto brojanje simbola
summary: Obuhvati jedan simbol, pusti TakeoffCraft da pronađe ostale na ovom listu ili na svim otvorenim listovima, pregledaj podudaranja klizačem i dodaj ih u jednom koraku.
keywords: bilo koji ugao, rotirano, okrenuto, druga razmjera, drugačija razmjera, auto brojanje, automatsko brojanje, pretraga simbola, pronađi simbole, uzorak, šablon, podudaranje, otkrij, alat za brojanje
from: fa68a6c1
---

{{ui:Auto count}} pronalazi svaku kopiju simbola nakon što obuhvatite jedan. Zatim pregledate podudaranja na listu i dodajete ona koja prihvatite kao oznake brojanja. To je pomoćno sredstvo, a ne garancija: uvijek pregledajte prije dodavanja.

## Pronađi simbole

1. Napravi ili klikni stavku brojanja u panelu {{ui:Items}}.
2. Otvori list na kojem se simbol pojavljuje.
3. Odaberi {{ui:Auto count}} na traci ili pritisni {{key:S}}.
   Na vrhu lista pojavljuje se traka: "Prevuci okvir oko jednog simbola na ovom listu."
4. Da pretražite sve otvorene listove, a ne samo ovaj, označi {{ui:Search all open sheets}}.
5. Uvećaj tako da simbol bude lako vidljiv, zatim prevuci okvir čvrsto oko jedne kopije. Uključi cijeli simbol; prazan papir oko njega se odsijeca.
   Traka prikazuje "Pretraga…" sa trakom napretka i dugmetom {{ui:Cancel}}. Stranica ostaje responzivna: možete zumirati, pomjerati pogled i prelaziti između listova. Odabir drugog alata ili {{key:Esc}} otkazuje pretragu.
6. Kada završi, podudaranja se pojavljuju na listu kao okviri u boji stavke, a traka prikazuje sažetak, npr. "22 podudaranja, 19 za dodavanje (3 već brojana). Klikni okvir da ga odbaciš ili vratiš."

U {{ui:Auto count}}, prevlačenje po listu crta okvir umjesto pomjeranja pogleda. Za pomjeranje pogleda drži {{key:Space}} i prevuci, ili prevuci srednjim dugmetom.

## Pregledaj podudaranja

- **Klikni okvir** da ga odbaciš. Odbačen okvir je isprekidan i precrtan. Klikni ponovo da ga vratiš.
- **Pomjeri klizač {{ui:Match}}** (od 50% do 95%, počinje na 75%). Više vrijednosti prikazuju samo bliska podudaranja; niže prikazuju labavija. Klizač samo filtrira ono što je pronađeno; ne pretražuje ponovo.
- **Već brojano**: podudaranja na mjestu koje već ima oznaku brojanja ove stavke počinju kao odbačena, pa ništa ne brojite dvaput.
- **Drugi listovi**: kada ste pretraživali sve otvorene listove, prelazite s liste listova ili pomoću {{key:PageDown}} i pregledajte svaki. Sažetak kaže koliko listova ima podudaranja.

## Dodaj ih

Odaberi {{ui:Add}}. Dugme kaže koliko, na primjer "Dodaj 19 oznaka".
Oznake brojanja se dodaju u središte svakog prihvaćenog okvira: "Dodato je 19 oznaka brojanja u "Duplex receptacle". Ctrl+Z ih uklanja sve."

Cijela serija je jedan korak poništavanja, pa jedno {{key:Mod+Z}} uklanja sve.

Da odbacite pregled bez dodavanja, odaberi {{ui:Discard}} ili pritisni {{key:Esc}}. Odabir drugog alata također ga odbacuje.

## Šta pronalazi, a šta propušta

TakeoffCraft upoređuje crtež, kao piksele, sa simbolom koji ste obuhvatili.

- Pronalazi simbol okrenut za 0°, 90°, 180° i 270°. Označi {{ui:Any angle (slower)}} na traci auto brojanja prije crtanja okvira da pronađe i simbol pod bilo kojim uglom: pretražuje svakih 15°, zatim fino podešava svaki pronalazak na stepen i pola. To traje otprilike šest puta duže. Ne pronalazi ogledalski simbol (osim ako simbol izgleda isto i u ogledalu).
- Sa označenim {{ui:Search all open sheets}}, list u drugoj razmjeri pretražuje se u veličini koju simbol ima na njemu: armatura nacrtana u razmjeri na planu 1/8" je upola manja nego na planu 1/4", i i dalje se pronalazi. Takav list se također pretražuje u veličini samog okvira, za oznake i simbole štampane u jednoj veličini na svim listovima. Ovo zahtijeva razmjeru na oba lista; list bez razmjere pretražuje se samo u veličini okvira.
- Vrlo slični simboli mogu se međusobno podudarati: dupleks i četverostruka utičnica, ili dvije oznake armature koje se razlikuju za jedno slovo. Podigni klizač dok ne ostanu samo pravi, a ostale odbaci ručno.
- Simbol presječen drugim linijama, šrafurom ili tekstom dobija nižu ocjenu i možda treba niža postavka klizača.
- Vrlo mali okviri se odbijaju: "Taj okvir je premali. Nacrtaj ga oko cijelog simbola." Prazan okvir se također odbija: "Taj okvir je gotovo prazan. Nacrtaj ga oko simbola."
- List koji bi bio vrlo velik u veličini potrebnoj za ovaj simbol se preskače, a sažetak kaže "1 list je bio prevelik za pretragu u ovoj veličini simbola." Obuhvati veći simbol ili taj list prebroj ručno.

Ako ništa nije pronađeno, statusna traka kaže "Nema podudaranja. Snizi klizač podudaranja ili obuhvati simbol tješnje."

## Brzina i pregledači

Pretraga se izvodi u pozadinskom procesu, pa stranica ostaje responzivna i možete je otkazati u bilo kojem trenutku. Svaki list se prvo iscrtava u radnoj veličini na samoj stranici, što može uzrokovati kratko zastajkivanje vrlo velikog lista. Radi u aktuelnim verzijama Chrome, Edge, Firefox i Safari. Pretraga više listova traje duže; traka napretka se pomjera list po list. Van mreže, auto brojanje radi kada traka aplikacije prikazuje {{ui:Offline ready}}: {{ui:Save for offline}} čuva i pozadinski proces. Vidi [Rad van mreže](common:offline).
