---
title: Mjerenje površina s otvorima
summary: Ocrtajte podove, stropove i ploče, izrežite iz njih rupe, dodajte zakrivljene rubove, kružnice i okrugle otvore te očitajte površinu i opseg.
keywords: ispuna prostorije, ispuna poplavom, kanta s bojom, klik unutar prostorije, automatska površina, povratni odbitak, stup, šaht, odbitak iz više stavki, površina, poligon, obris, kvadratne stope, sf, otvor, rupa, odbitak, kružnica, okruglo, luk, opseg, pod, strop, ploča
from: 34648db7
---

Stavka površine mjeri zatvorenu površinu. Svaki obris može imati izrezane rupe (šaht, stup, gredicu), a rubovi mogu biti ravni ili zakrivljeni.

Prije početka: list treba mjerilo ([Postavljanje mjerila](topic:set-the-scale)), a potrebna vam je stavka površine ([Stvaranje stavki predmjera](topic:create-items)).

## Ocrtajte površinu

1. Kliknite stavku površine pod {{ui:Stavke}}.
2. Odaberite {{ui:Površina}} na traci alata ili pritisnite {{key:A}}.
3. Kliknite svaki kut prostorije ili ploče redom. Držite {{key:Shift}} za rubove od 0°, 45° i 90°.
   Od treće točke nadalje obris se popunjava, a statusna traka prikazuje „Površina“ i „opseg“. Oko prve točke pojavljuje se mali prsten.
4. Zatvorite obris: kliknite prvu točku (unutar njezina prstena), pritisnite {{key:Enter}}, dvaput kliknite ili desno kliknite.
   Površina se lagano ispuni bojom stavke, označi se kvadratnim stopama i postaje odabrana oznaka.

{{key:Backspace}} uklanja zadnji kut; {{key:Esc}} odbacuje obris.

Obris koji se sam sječe se odbija: „Obris se sam siječe, pa bi njegova površina bila netočna. Nacrtajte ga ponovno bez presijecanja.“ Lik u obliku osmice nacrtajte kao dvije površine.

## Zakrivljeni rubovi

Dok ocrtavate, uključite način luka ({{ui:Luk}} ili {{key:R}}). Nakon kuta kliknite točku duž krivulje, pa zatim mjesto gdje krivulja završava. Za zatvaranje obrisa krivuljom, zadnji klik neka bude na prvoj točki. Površina i opseg koriste točnu krivulju. Ponovno pritisnite {{key:R}} za ravne rubove. Za promjenu krivulje kasnije odaberite površinu i povucite okruglu ručku u sredini luka. Pogledajte [Mjerenje linearnih dionica](topic:measure-linear#arcs-and-curved-walls).

## Kružnica

1. Uz stavku površine odaberite {{ui:Kružnica}} ili pritisnite {{key:O}}.
2. Kliknite središte.
3. Kliknite bilo koju točku na rubu.

Dok pomičete, statusna traka prikazuje polumjer i površinu. Kružnica se dodaje kao oznaka površine s točnom površinom i opsegom.

## Ispunite prostoriju jednim klikom

Kad su prostorije nacrtane kao zatvoreni zidovi, {{ui:Prostorija}} ({{key:B}}) uzima pod jednim klikom:

1. Odaberite stavku površine (npr. završnu obradu poda) i dajte listu mjerilo.
2. Odaberite {{ui:Prostorija}} u grupi {{ui:Predmjer}} ili pritisnite {{key:B}}.
3. Kliknite unutar prostorije, u otvorenom podu (ne na liniji ni na oznaci).

TakeoffCraft čita linije lista, pronalazi prostor oko klika i ocrtava ga uz unutarnja lica zidova, kao površinu trenutne stavke. Otvori vrata do **4'-0"** smatraju se zatvorenima, pa obris ide ravno preko otvora; **Postavke › TakeoffCraft › Ispuna prostorije zatvara otvore do** mijenja tu širinu (3'-0" do 8'-0"). Nazivi prostorija, namještaj i oprema unutar prostorije ne čine rupe.

Odbija se, uz objašnjenje, kad:

- je klik na liniji („To je na liniji“);
- prostor nije zatvoren: otvor širi od postavke pušta ispunu do ruba lista. Povećajte postavku ili ocrtajte tu prostoriju ručno alatom {{ui:Površina}};
- je prostor premalen (simbol, a ne prostorija).

Kad je vrata šira od postavke, ispuna prelazi u sljedeću prostoriju i ocrtava obje zajedno: poništite ({{key:Mod+Z}}), povećajte postavku i kliknite ponovno. Provjerite obris kao i svaku površinu: povucite njegove kutove da ga popravite. Skenirani list radi isto, ali njegove linije moraju biti dovoljno tamne; svijetlosiva linija možda neće zaustaviti ispunu.

## Izrežite rupu iz površine

1. Odaberite {{ui:Odaberi}} ({{key:V}}) i kliknite površinu. Ona pokazuje kvadratne ručke na kutovima.
2. Odaberite {{ui:Otvor}} na traci alata (ili pritisnite {{key:X}}), ili {{ui:Dodaj otvor}} pod **Odabrana oznaka**.
3. Kliknite kutove rupe, unutar površine. Način luka radi i ovdje.
4. Zatvorite je kao površinu: kliknite njezinu prvu točku, pritisnite {{key:Enter}}, dvaput kliknite ili desno kliknite. Rupa ostaje nepopunjena, a statusna traka kaže „Otvor je dodan. Nacrtajte još jedan ili pritisnite Esc.“
5. Nacrtajte još rupa u istoj površini ili pritisnite {{key:Esc}}.

Za okruglu rupu odaberite {{ui:Dodaj okrugli otvor}} pod **Odabrana oznaka**, kliknite njezino središte, pa točku na njezinu rubu.

Otvor mora u potpunosti ležati unutar površine i ne smije se preklapati s drugim otvorom. Inače ga TakeoffCraft odbija: „Otvor mora u potpunosti ležati unutar površine.“ ili „Otvori se ne mogu preklapati.“

Za uklanjanje zadnje rupe odaberite {{ui:Ukloni zadnji otvor}}.

## Povratni odbici: stupovi, šahtovi i otvori oduzeti od više stavki

Otvor pripada jednoj oznaci površine. **Povratni odbitak** se crta jednom i izlazi iz svake površine koju preklapa, za stavke koje odaberete: nacrtajte stupove jednom, i oni se skidaju s završne obrade poda, stropa i ploče zajedno.

1. Napravite stavku površine za njih, npr. „Stupovi“.
2. U postavkama stavke označite **Povratni odbitak: njegove oznake uzimaju svoju površinu iz drugih stavki**. Pojavljuje se popis vaših drugih stavki površine, sve označene: odznačite one koje povratni odbici ne bi trebali dirati (npr. boju na zidovima).
3. Predmjerite stupove alatom {{ui:Površina}} ili {{ui:Kružnica}}, kao i obično. Svaki je nacrtan crtkano.

Svaka oznaka površine označene stavke na istom listu gubi dio koji pokriva povratni odbitak: cijeli odbitak kad je unutra, samo preklapajući dio kad prelazi rub, i ništa unutar otvora. Ploča odabrane površine prikazuje **Povratni odbici** i preostalu površinu. Količina stavke, njezine formule sklopa, troškovi, 3D pregled provjere i izvoz koriste preostalu površinu; bilješke predračuna kažu koliko su povratni odbici oduzeli. Sama stavka povratnog odbitka broji vlastitu površinu (ostavite njezine troškove na nuli ako je ne cijenite).

Povratni odbitak mora biti **konveksan**: pravokutnik, kružnica ili bilo koji obris bez unutarnjeg kuta. TakeoffCraft odbija crtanje onoga što nije; L-oblik šahta nacrtajte kao dva povratna odbitka. Povratni odbici ne mogu imati otvore, a dva povratna odbitka koja se preklapaju broje se oba.

Opseg (`P`) se ne mijenja: povratni odbici oduzimaju samo površinu.

## Čitanje površine

Odaberite površinu. **Odabrana oznaka** prikazuje:

| Redak | Značenje |
|---|---|
| Površina | Neto površina: obris minus otvori. To broji stavka. |
| Obris | Bruto površina unutar obrisa (prikazuje se kad ima otvora). |
| Otvori | Koliko je rupa i njihova ukupna površina. |
| Opseg | Duljina ruba obrisa, **plus** rubovi svakog otvora („s otvorima“). |

Opseg uključuje rubove otvora namjerno, za stvari poput oplate ili podloge koja ide i oko rupe. Ako vam treba samo vanjski rub, držite rupe izvan te stavke ili izmjerite vanjski rub kao linearnu dionicu.

{{ui:Jedinica}} stavke određuje kako se ukupno prijavljuje: SF, SY ili m². Ploča **Odabrana oznaka** i statusna traka uvijek prikazuju kvadratne stope.

## Popravak površine

- **Pomaknite kut**: odaberite površinu i povucite ručku kuta (rupe također imaju ručke). Ako bi novi oblik presjekao sam sebe ili gurnuo rupu van, kut se vraća: „Točka je vraćena na mjesto.“
- **Premjestite u drugu stavku**: odaberite drugu stavku površine u popisu **Stavka** pod **Odabrana oznaka**.
- **Izbrišite**: {{key:Delete}}, {{ui:Delete}} u izborniku {{ui:Više}} na traci alata ili {{ui:Izbriši oznaku}}.

## Dubina za volumene

Dajte stavci površine {{ui:Dubina}} (npr. `0'-4"` za ploču) i u komponenti sklopa upotrijebite `A * H / 27` za kubične jarde. Pogledajte [Sklopovi i formule](topic:assemblies).
