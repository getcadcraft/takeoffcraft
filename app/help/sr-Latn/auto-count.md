---
title: Automatsko brojanje simbola
summary: Označite jedan simbol, pa TakeoffCraft pronalazi ostale na ovom listu ili na svim otvorenim listovima, pregledajte podudaranja klizačem i dodajte ih u jednom koraku.
keywords: bilo koji ugao, rotirano, okrenuto, druga razmera, drugačija razmera, automatsko brojanje, automatsko brojanje simbola, pretraga simbola, pronađi simbole, šablon, obrazac, podudaranje, detektuj, alat za brojanje
from: fa68a6c1
---

{{ui:Automatsko brojanje}} pronalazi svaku kopiju simbola nakon što označite jedan. Zatim pregledate podudaranja na listu i dodajete ona koja prihvatite kao oznake brojanja. To je pomoćno sredstvo, a ne garancija: uvek pregledajte pre dodavanja.

## Pronađite simbole

1. Napravite ili izaberite stavku brojanja ispod {{ui:Stavke}}.
2. Otvorite list na kom se simbol pojavljuje.
3. Izaberite {{ui:Automatsko brojanje}} na traci sa alatkama ili pritisnite {{key:S}}.
   Pri vrhu lista pojavljuje se traka: „Prevucite okvir oko jednog simbola na ovom listu.“
4. Da pretražite sve otvorene listove, a ne samo ovaj, označite {{ui:Pretraži sve otvorene listove}}.
5. Zumirajte da simbol bude lako vidljiv, pa prevucite okvir čvrsto oko jedne kopije. Uključite ceo simbol; prazan prostor oko njega se odseca.
   Traka prikazuje „Pretraga…“ sa trakom napretka i dugmetom {{ui:Otkaži}}. Stranica ostaje otvorena: možete zumirati, pomerati pogled i prelaziti između listova. Izbor drugog alata ili {{key:Esc}} otkazuje pretragu.
6. Kada se završi, podudaranja se pojavljuju na listu kao okviri u boji stavke, a traka prikazuje sažetak, npr. „22 podudaranja, 19 za dodavanje (3 već brojana). Kliknite okvir da ga odbacite ili vratite.“

U {{ui:Automatsko brojanje}}, prevlačenje po listu crta okvir umesto pomeranja pogleda. Za pomeranje držite {{key:Space}} i prevucite, ili prevucite srednjim dugmetom miša.

## Pregledajte podudaranja

- **Kliknite okvir** da ga odbacite. Odbačeni okvir je isprekidan i precrtan. Kliknite ponovo da ga vratite.
- **Pomerite klizač {{ui:Podudaranje}}** (50% do 95%, počinje od 75%). Veća vrednost prikazuje samo bliska podudaranja; manja prikazuje labavija. Klizač samo filtrira ono što je pronađeno; ne pretražuje ponovo.
- **Već brojano**: podudaranja na mestu koje već ima oznaku brojanja ove stavke počinju kao odbačena, pa ništa ne brojite dvaput.
- **Drugi listovi**: kada ste pretraživali sve otvorene listove, prelazite između listova preko liste listova ili {{key:PageDown}} i pregledajte svaki. Sažetak kaže koliko listova ima podudaranja.

## Dodajte ih

Izaberite {{ui:Dodaj}}. Dugme kaže koliko, na primer „Dodaj 19 oznaka“.
Oznake brojanja se dodaju u centar svakog prihvaćenog okvira: „Dodato 19 oznaka brojanja u „Dupleks utičnica“. Ctrl+Z ih uklanja sve.“

Ceo niz je jedan korak poništavanja, pa jedno {{key:Mod+Z}} sve uklanja.

Da odbacite pregled bez dodavanja ičega, izaberite {{ui:Odbaci}} ili pritisnite {{key:Esc}}. Izbor drugog alata takođe ga odbacuje.

## Šta pronalazi, a šta propušta

TakeoffCraft poredi crtež, piksel po piksel, sa simbolom koji ste označili.

- Pronalazi simbol okrenut za 0°, 90°, 180° i 270°. Označite {{ui:Bilo koji ugao (sporije)}} na traci automatskog brojanja pre crtanja okvira da ga pronađe i pod bilo kojim uglom: proverava na svakih 15°, zatim fino podešava svaki nalaz na stepen i po. To traje oko šest puta duže. Ne pronalazi ogledalski simbol (osim ako simbol izgleda isto i u ogledalu).
- Sa označenim {{ui:Pretraži sve otvorene listove}}, list druge razmere se pretražuje u veličini koju simbol ima na njemu: instalacija nacrtana u razmeri na osnovi 1/8" je upola manja nego na osnovi 1/4", i ipak se pronalazi. Takav list se takođe pretražuje u veličini samog okvira, za oznake i simbole štampane u jednoj veličini na svakom listu. Ovo zahteva razmeru na oba lista; list bez razmere se pretražuje samo u veličini okvira.
- Veoma slični simboli mogu se podudarati jedan s drugim: dupleks i kvadro utičnica, ili dve oznake instalacija koje se razlikuju za jedno slovo. Podignite klizač dok ne ostanu samo pravi, a ostale odbacite ručno.
- Simbol ukršten drugim linijama, šrafurom ili tekstom dobija nižu ocenu i možda treba niža vrednost klizača.
- Veoma male okvire program odbija: „Taj okvir je premali. Nacrtajte ga oko celog simbola.“ Prazan okvir takođe se odbija: „Taj okvir je skoro prazan. Nacrtajte ga oko simbola.“
- List koji bi bio veoma velik u veličini potrebnoj za ovaj simbol se preskače, a sažetak kaže „1 list je prevelik za pretragu u ovoj veličini simbola.“ Označite veći simbol ili taj list brojite ručno.

Ako ništa nije pronađeno, statusna traka kaže: „Nema podudaranja. Spustite klizač podudaranja ili preciznije označite simbol.“

## Brzina i pregledači

Pretraga radi u pozadinskom procesu, pa stranica ostaje otvorena i možete je otkazati u bilo kom trenutku. Svaki list se prvo iscrtava u radnoj veličini na samoj stranici, što može na trenutak zaustaviti veoma velik list. Radi u najnovijim verzijama Chrome, Edge, Firefox i Safari. Pretraga mnogo listova traje duže; traka napretka se pomera list po list. Van mreže, automatsko brojanje radi kada traka aplikacije prikazuje {{ui:Spremno za rad van mreže}}: {{ui:Sačuvaj za rad van mreže}} čuva i proces. Pogledajte [Rad van mreže](common:offline).
