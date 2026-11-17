---
title: Merenje površina sa izrezima
summary: Obeležite podove, plafone i ploče, izrežite rupe iz njih, dodajte krive ivice, krugove i okrugle izreze i očitajte površinu i obim.
keywords: popunjavanje prostorije, popunjavanje, kanta za boju, klik unutar prostorije, automatska površina, oduzimanje unazad, backout, kolona, okno, odbitak iz više stavki, površina, poligon, obris, kvadratne stope, sf, izrez, rupa, odbitak, krug, okrugao, luk, obim, pod, plafon, ploča
from: 34648db7
---

Stavka površine meri zatvorenu površinu. Svaki obris može imati izrezane rupe (okno, kolonu, saksiju), a njegove ivice mogu biti prave ili krive.

Pre početka: list treba da ima razmeru ([Postavljanje razmere](topic:set-the-scale)), i potrebna vam je stavka površine ([Pravljenje stavki predmera](topic:create-items)).

## Obrisivanje površine

1. Kliknite stavku površine pod {{ui:Stavke}}.
2. Izaberite {{ui:Površina}} na traci alata ili pritisnite {{key:A}}.
3. Kliknite svaki ugao sobe ili ploče redom. Držite {{key:Shift}} za ivice pod 0°, 45° i 90°.
   Od treće tačke nadalje obris se popunjava, a statusna traka prikazuje „Površina“ i „obim“. Mali prsten se pojavljuje oko prve tačke.
4. Zatvorite obris: kliknite prvu tačku (unutar njenog prstena), pritisnite {{key:Enter}}, dvaput kliknite ili desno kliknite.
   Površina se lagano popunjava bojom stavke, označava se kvadratnim stopama i postaje izabrana oznaka.

{{key:Backspace}} uklanja poslednji ugao; {{key:Esc}} odbacuje obris.

Obris koji seče sam sebe se odbija: „Obris seče sam sebe, pa bi njegova površina bila pogrešna. Nacrtajte ga ponovo bez preseka.“ Oblik u obliku osmice nacrtajte kao dve površine.

## Krive ivice

Dok obrisujete, uključite režim luka ({{ui:Luk}} ili {{key:R}}). Posle ugla kliknite tačku duž krive, pa mesto gde kriva završava. Da zatvorite obris krivom, taj poslednji klik napravite na prvoj tački. Površina i obim koriste tačnu krivu. Pritisnite {{key:R}} ponovo za prave ivice. Da promenite krivu kasnije, izaberite površinu i prevucite okrugle ručice na sredini luka. Pogledajte [Merenje linijskih deonica](topic:measure-linear#arcs-and-curved-walls).

## Krug

1. Sa stavkom površine izaberite {{ui:Krug}} ili pritisnite {{key:O}}.
2. Kliknite centar.
3. Kliknite bilo koju tačku na ivici.
   Dok pomerate, statusna traka prikazuje poluprečnik i površinu. Krug se dodaje kao oznaka površine sa tačnom površinom i obimom.

## Popunjavanje prostorije jednim klikom

Kada su prostorije nacrtane kao zatvoreni zidovi, {{ui:Prostorija}} ({{key:B}}) uzima pod jednim klikom:

1. Izaberite stavku površine (na primer završni pod) i zadajte listu razmeru.
2. Izaberite {{ui:Prostorija}} u grupi {{ui:Predmer}}, ili pritisnite {{key:B}}.
3. Kliknite unutar prostorije, na otvorenom podu (ne na liniji ili oznaci).

TakeoffCraft čita linije lista, nalazi prostor oko klika i ocrtava ga duž unutrašnjih strana zidova, kao površinu tekuće stavke. Otvori vrata do **4'-0"** tretiraju se kao zatvoreni, pa obris prelazi preko otvora pravo. **Podešavanja › TakeoffCraft › Popunjavanje prostorije zatvara otvore do** menja tu širinu (od 3'-0" do 8'-0"). Nazivi prostorija, nameštaj i instalacije unutar prostorije ne prave rupe.

Odbija se, uz objašnjenje zašto, kada:

- klik je na liniji („To je na liniji“);
- prostor nije zatvoren: otvor je širi od podešavanja, pa se prostor pruža do ivice lista. Povećajte podešavanje ili obrišite tu prostoriju ručno alatkom {{ui:Površina}};
- prostor je sitan (simbol, a ne prostorija).

Kada je vrata šira od podešavanja, popunjavanje prelazi u sledeću prostoriju i ocrtava obe zajedno: opozovite ({{key:Mod+Z}}), povećajte podešavanje i kliknite ponovo. Proverite obris kao svaku površinu: prevucite njegove uglove da ga ispravite. Skenirani list radi isto, ali linije moraju biti dovoljno tamne; svetlo siva linija možda neće zaustaviti popunjavanje.

## Izrez rupe iz površine

1. Izaberite {{ui:Izaberi}} ({{key:V}}) i kliknite površinu. Pokazuje kvadratne ručice na uglovima.
2. Izaberite {{ui:Izrez}} na traci alata (ili pritisnite {{key:X}}), ili {{ui:Dodaj izrez}} pod **Izabrana oznaka**.
3. Kliknite uglove rupe, unutar površine. Režim luka radi i ovde.
4. Zatvorite je kao površinu: kliknite njenu prvu tačku, pritisnite {{key:Enter}}, dvaput kliknite ili desno kliknite.
   Rupa ostaje nepopunjena, a statusna traka kaže: „Izrez je dodat. Nacrtajte još jedan ili pritisnite Esc.“
5. Nacrtajte još rupa u istoj površini, ili pritisnite {{key:Esc}}.

Za okruglu rupu izaberite {{ui:Dodaj okrugli izrez}} pod **Izabrana oznaka**, kliknite njen centar, pa tačku na ivici.

Izrez mora biti potpuno unutar površine i ne sme se preklapati sa drugim izrezom. Inače ga TakeoffCraft odbija: „Izrez mora da bude potpuno unutar površine.“ ili „Izrezi ne mogu da se preklapaju.“

Da uklonite poslednju rupu, izaberite {{ui:Ukloni poslednji izrez}}.

## Oduzimanje unazad: kolone, okna i otvori izvučeni iz više stavki

Izrez pripada jednoj oznaci površine. **Oduzimanje unazad** se crta jednom i oduzima se od svake površine koju preseca, za stavke koje izaberete: nacrtajte kolone jednom, i one se oduzimaju od završnog poda, plafona i ploče zajedno.

1. Napravite stavku površine za njih, na primer „Kolone“.
2. U podešavanjima stavke štiklirajte **Oduzimanje unazad: njegove oznake uzimaju svoju površinu iz drugih stavki**. Pojavljuje se spisak vaših drugih stavki površine, sve štiklirane: odštiklirajte one na koje oduzimanja ne treba da utiču (na primer boju na zidovima).
3. Izmerite kolone alatkom {{ui:Površina}} ili {{ui:Krug}}, kao obično. Svaka se crta isprekidano.

Svaka oznaka površine štiklirane stavke na istom listu gubi deo koji pokriva oduzimanje unazad: celo oduzimanje kada leži unutra, samo preklopljeni deo kada seče ivicu, a ništa unutar izreza. Panel izabrane površine prikazuje **Oduzimanja unazad** i preostalu površinu. Količina stavke, njene formule sklopa, troškovi, 3D provera i izvoz koriste preostalu površinu; napomene predračuna kažu koliko su oduzimanja unazad uzela. Sama stavka oduzimanja broji svoju površinu (ostavite njene troškove na nuli ako je ne cenite).

Oduzimanje unazad mora biti **konveksno**: pravougaonik, krug ili bilo koji obris bez unutrašnjeg ugla. TakeoffCraft odbija da ga nacrta ako nije; okno u obliku slova L nacrtajte kao dva oduzimanja unazad. Oduzimanja unazad ne mogu imati izreze, a dva oduzimanja unazad koja se preklapaju računaju se oba.

Obim (`P`) se ne menja: oduzimanja unazad uzimaju samo površinu.

## Očitavanje površine

Izaberite površinu. **Izabrana oznaka** prikazuje:

| Red | Značenje |
|---|---|
| Površina | Neto površina: obris minus izrezi. Ovo stavka broji. |
| Obris | Bruto površina unutar obrisa (prikazuje se kada postoje izrezi). |
| Izrezi | Koliko ima rupa i njihova ukupna površina. |
| Obim | Dužina ivice obrisa, **plus** ivice svakog izreza („sa izrezima“). |

Obim uključuje ivice izreza namerno, na primer za oplatu ivica ili podlogu koja ide i oko rupe. Ako vam treba samo spoljna ivica, držite rupe van te stavke ili izmerite spoljnu ivicu kao linijsku deonicu.

{{ui:Jedinica}} stavke određuje kako se ukupan zbir prijavljuje: SF, SY ili m². Panel **Izabrana oznaka** i statusna traka uvek prikazuju kvadratne stope.

## Ispravka površine

- **Pomeranje ugla**: izaberite površinu i prevucite ugaonu ručicu (rupe takođe imaju ručice). Ako bi novi oblik seko sam sebe ili gurnuo rupu van, ugao se vraća: „Tačka je vraćena na mesto.“
- **Premeštanje u drugu stavku**: izaberite drugu stavku površine u listi **Stavka** pod **Izabrana oznaka**.
- **Brisanje**: {{key:Delete}}, {{ui:Izbriši}} u meniju {{ui:Više}} trake alata, ili {{ui:Obriši oznaku}}.

## Dubina za zapremine

Dajte stavki površine {{ui:Dubina}} (na primer `0'-4"` za ploču) i upotrebite `A * H / 27` u komponenti sklopa da dobijete kubne jarde. Pogledajte [Sklopovi i formule](topic:assemblies).
