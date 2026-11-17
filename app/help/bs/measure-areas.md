---
title: Mjerenje površina sa izrezima
summary: Ocrtajte podove, plafone i ploče, izrežite rupe iz njih, dodajte zakrivljene ivice, krugove i okrugle izreze i očitajte površinu i obim.
keywords: popunjavanje prostorije, flood fill, kanta za boju, klik unutar prostorije, auto površina, povratni odbitak, backout, stub, okno, odbitak iz više stavki, površina, poligon, obris, kvadratne stope, sf, izrez, rupa, odbitak, krug, okrugli, luk, obim, pod, plafon, ploča
from: 34648db7
---

Stavka površine mjeri zatvorenu površinu. Iz svakog obrisa mogu se izrezati rupe (okno, stub, saksija), a njegove ivice mogu biti ravne ili zakrivljene.

Prije početka: list treba razmjeru ([Postavi razmjeru](topic:set-the-scale)), a potrebna vam je stavka površine ([Kreiranje stavki predmjera](topic:create-items)).

## Ocrtavanje površine

1. Kliknite stavku površine ispod {{ui:Stavke}}.
2. Odaberite {{ui:Površina}} na traci alata, ili pritisnite {{key:A}}.
3. Kliknite svaki ugao prostorije ili ploče redom. Držite {{key:Shift}} za ivice pod 0°, 45° i 90°.
   Od treće tačke nadalje, obris se popunjava, a statusna traka prikazuje „Površina“ i „obim“. Mali prsten se pojavljuje oko prve tačke.
4. Zatvorite obris: kliknite prvu tačku (unutar njenog prstena), pritisnite {{key:Enter}}, dvaput kliknite ili kliknite desnim dugmetom.
   Površina se lagano popunjava bojom stavke, označena je svojim kvadratnim stopama i postaje odabrana oznaka.

{{key:Backspace}} uklanja posljednji ugao; {{key:Esc}} odbacuje obris.

Obris koji se ukršta sam sa sobom se odbija: „Obris se ukršta sam sa sobom, pa bi njegova površina bila pogrešna. Nacrtajte ga ponovo bez ukrštanja.“ Oblik u obliku osmice nacrtajte kao dvije površine.

## Zakrivljene ivice

Dok ocrtavate, uključite režim luka ({{ui:Luk}} ili {{key:R}}). Nakon ugla kliknite tačku duž krive, zatim mjesto gdje kriva završava. Da zatvorite obris krivom, učinite taj posljednji klik na prvu tačku. Površina i obim koriste tačnu krivu. Pritisnite {{key:R}} ponovo za ravne ivice. Da kasnije promijenite krivu, odaberite površinu i prevucite okruglu ručicu u sredini luka. Pogledajte [Mjerenje linijskih dionica](topic:measure-linear#arcs-and-curved-walls).

## Krug

1. Sa stavkom površine odaberite {{ui:Krug}} ili pritisnite {{key:O}}.
2. Kliknite centar.
3. Kliknite bilo koju tačku na ivici.
   Dok pomjerate, statusna traka prikazuje poluprečnik i površinu. Krug se dodaje kao oznaka površine sa tačnom površinom i obimom.

## Popunjavanje prostorije jednim klikom

Kada su prostorije nacrtane kao zatvoreni zidovi, {{ui:Prostorija}} ({{key:B}}) uzima pod jednim klikom:

1. Odaberite stavku površine (na primjer završni pod) i dajte listu razmjeru.
2. Odaberite {{ui:Prostorija}} u grupi {{ui:Predmjer}}, ili pritisnite {{key:B}}.
3. Kliknite unutar prostorije, na otvorenom podu (ne na liniji ili oznaci).

TakeoffCraft čita linije lista, nalazi prostor oko klika i ocrtava ga duž unutrašnjih strana zidova, kao površinu tekuće stavke. Otvori vrata do **4'-0"** tretiraju se kao zatvoreni, pa obris ide ravno preko otvora; **Postavke › TakeoffCraft › Popunjavanje prostorije zatvara otvore do** mijenja tu širinu (od 3'-0" do 8'-0"). Nazivi prostorija, namještaj i pribor unutar prostorije ne prave rupe.

Odbija, uz objašnjenje zašto, kada:

- klik je na liniji („To je na liniji“);
- prostor nije zatvoren: otvor širi od postavke pušta da prostor izađe do ivice lista. Povećajte postavku ili ocrtajte tu prostoriju ručno sa {{ui:Površina}};
- prostor je mali (simbol, a ne prostorija).

Kada je vrata šira od postavke, popunjavanje ulazi u sljedeću prostoriju i ocrtava obje zajedno: poništite ({{key:Mod+Z}}), povećajte postavku i kliknite ponovo. Provjerite obris kao i svaku površinu: prevucite njegove uglove da ga ispravite. Skenirani list radi isto, ali njegove linije moraju biti dovoljno tamne; svijetlo siva linija možda neće zaustaviti popunjavanje.

## Izrezivanje rupe iz površine

1. Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite površinu. Na njenim uglovima prikazuju se kvadratne ručice.
2. Odaberite {{ui:Izrez}} na traci alata (ili pritisnite {{key:X}}), ili {{ui:Dodaj izrez}} ispod **Odabrana oznaka**.
3. Kliknite uglove rupe, unutar površine. I režim luka radi ovdje.
4. Zatvorite je kao površinu: kliknite njenu prvu tačku, pritisnite {{key:Enter}}, dvaput kliknite ili kliknite desnim dugmetom.
   Rupa ostaje nepopunjena, a statusna traka kaže „Izrez je dodan. Nacrtajte još jedan ili pritisnite Esc.“
5. Nacrtajte još rupa u istoj površini, ili pritisnite {{key:Esc}}.

Za okruglu rupu odaberite {{ui:Dodaj okrugli izrez}} ispod **Odabrana oznaka**, kliknite njen centar, zatim tačku na njenoj ivici.

Izrez mora biti potpuno unutar površine i ne smije se preklapati sa drugim izrezom. Inače ga TakeoffCraft odbija: „Izrez mora biti potpuno unutar površine.“ ili „Izrezi se ne mogu preklapati.“

Da ponovo uklonite posljednju rupu, odaberite {{ui:Ukloni posljednji izrez}}.

## Povratni odbici: stubovi, okna i otvori oduzeti iz više stavki

Izrez pripada jednoj oznaci površine. **Povratni odbitak** se crta jednom i oduzima se od svake površine koju preklapa, za stavke koje odaberete: nacrtajte stubove jednom, i oni se istovremeno oduzimaju od završnog poda, plafona i ploče.

1. Napravite stavku površine za njih, na primjer „Stubovi“.
2. U njenim postavkama stavke označite **Povratni odbitak: njene oznake oduzimaju svoju površinu od drugih stavki**. Pojavljuje se spisak vaših drugih stavki površine, sve označene: odznačite one koje povratni odbici ne bi smjeli dirati (na primjer boju na zidovima).
3. Izmjerite stubove sa {{ui:Površina}} ili {{ui:Krug}}, kao i obično. Svaki se crta isprekidano.

Svaka oznaka površine označene stavke na istom listu gubi dio koji pokriva povratni odbitak: cijeli povratni odbitak kada je unutra, samo preklapajući dio kada prelazi ivicu, a ništa unutar izreza. Panel odabrane površine prikazuje **Povratni odbici** i preostalu površinu. Količina stavke, njene formule sklopa, troškovi, 3D prikaz provjere i izvoz svi koriste preostalu površinu; bilješke predračuna kažu koliko su povratni odbici oduzeli. Sama stavka povratnog odbitka broji svoju površinu (ostavite njene troškove na nuli ako je ne cijenite).

Povratni odbitak mora biti **konveksan**: pravougaonik, krug ili bilo koji obris bez unutrašnjeg ugla. TakeoffCraft odbija da nacrta onaj koji nije; okno u obliku slova L nacrtajte kao dva povratna odbitka. Povratni odbici ne mogu imati izreze, a dva povratna odbitka koja se preklapaju računaju se oba.

Obim (`P`) se ne mijenja: povratni odbici oduzimaju samo površinu.

## Očitavanje površine

Odaberite površinu. **Odabrana oznaka** prikazuje:

| Red | Značenje |
|---|---|
| Površina | Neto površina: obris minus izrezi. Ovo je ono što stavka broji. |
| Obris | Bruto površina unutar obrisa (prikazuje se kada postoje izrezi). |
| Izrezi | Koliko ima rupa i njihova ukupna površina. |
| Obim | Dužina ivice obrisa, **plus** ivice svakog izreza („sa izrezima“). |

Obim namjerno uključuje ivice izreza, za stvari poput oplate ivica ili podloge koja ide i oko rupe. Ako vam treba samo vanjska ivica, držite rupe van te stavke ili izmjerite vanjsku ivicu kao linijsku dionicu.

{{ui:Jedinica}} stavke određuje kako se ukupno prijavljuje: SF, SY ili m². Panel **Odabrana oznaka** i statusna traka uvijek prikazuju kvadratne stope.

## Ispravka površine

- **Pomjerite ugao**: odaberite površinu i prevucite ručicu ugla (i rupe imaju ručice). Ako bi novi oblik ukrstio sam sebe ili gurnuo rupu van, ugao se vraća: „Tačka je vraćena.“
- **Premjestite u drugu stavku**: odaberite drugu stavku površine na listi **Stavka** ispod **Odabrana oznaka**.
- **Izbriši**: {{key:Delete}}, {{ui:Izbriši}} u meniju {{ui:Više}} na traci alata, ili {{ui:Izbriši oznaku}}.

## Dubina za zapremine

Dajte stavki površine {{ui:Dubina}} (na primjer `0'-4"` za ploču) i koristite `A * H / 27` u komponenti sklopa da dobijete kubne jarde. Pogledajte [Sklopovi i formule](topic:assemblies).
