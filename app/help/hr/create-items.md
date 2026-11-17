---
title: Izrada stavki predmjera
summary: Izradite linearne, površinske i brojane stavke te postavite njihovu jedinicu, visinu ili dubinu, gubitak te cijene materijala i rada.
keywords: ekipa, stopa proizvodnje, veličina ekipe, plaća, sati, čovjek-sati, radnik-sati, ekipa-dani, radni sati, stavka, nova stavka, uvjet, više uvjeta, također mjeri, više vrsta, prostorija, linearno, površina, broji, jedinica, visina, dubina, gubitak, materijal, rad, cijena, boja, trošak
from: 7fa5effc
---

**Stavka** je jedna stvar koju mjerite i cijenite: vrsta zida, završni sloj poda, strop, vrata, svjetiljka. Svaka oznaka koju nacrtate pripada nekoj stavci. Drugi programi to zovu uvjetima.

Svaka stavka ima vrstu (i može primati i druge vrste oznaka, vidi [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks)):

| Upis | Crtate | Prikazuje | Jedinice |
|---|---|---|---|
| Linearno | Nizove povezanih točaka | Duljinu, broj nizova i površinu zida kad ima visinu | LF ili m |
| Površina | Zatvorene obrise, s izrezima | Površinu, opseg, broj površina | SF, SY, SQ, ac, ha ili m² |
| Broji | Jedan klik po jednoj stvari | Koliko ih ima | EA |
| Upisana količina | Ništa: upisujete količinu | Upisani broj (ili onaj preuzet iz CivilCrafta) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ili m² |

## Upisane količine (bez crteža)

Neke stvari u predmjeru nikad se ne crtaju: mobilizacija, dozvole, rezerva, paušalni podugovor, iskop i nasip koje je izračunao CivilCraft. Napravite ih kao **upisanu količinu**:

1. Odaberite {{ui:Nova stavka}}, upišite naziv, odaberite {{ui:Upisana količina (bez crteža)}} i odaberite {{ui:Dodaj}}.
2. U uređivaču stavke odaberite {{ui:Jedinica}} (LS za paušal) i upišite {{ui:Količina}}: `1`, `2.5` ili `1,250`.
3. Postavite gubitak i cijene kao za bilo koju drugu stavku. Formule sklopa koriste `Q`, količinu, npr. `ceil(Q / 12)` tovara kamiona.

Upisana količina ne prima oznake i nikad ne čini predmjer nepotpunim. Kad predmjer ima područja ponude, uređivač ima i {{ui:Područje ponude}}: količina tada ulazi u to područje, njegove alternative i njegove ukupne iznose, kao i oznaka tamo. Količine preuzete iz druge aplikacije navode odakle potječu, vidi [Zemljani radovi i visinske kote](topic:earthwork#cut-and-fill-from-civilcraft).

## Izrada stavke

1. U panelu {{ui:Stavke}} s desne strane odaberite {{ui:Nova stavka}}.
2. Upišite naziv, npr. `Unutarnji zid tip A` ili `Podna obloga`.
3. Odaberite vrstu: {{ui:Linearno (duljina)}}, {{ui:Površina}} ili {{ui:Broji}}.
4. Odaberite {{ui:Dodaj}} (ili pritisnite {{key:Enter}}).
   Stavka se pojavljuje na popisu sa svojom bojom, postaje stavka kojom crtate, a njezin uređivač otvara se ispod popisa. Statusna traka kaže koji alat odabrati sljedeće.

Pritisnite {{key:Esc}} u obrascu da ga zatvorite bez dodavanja stavke.

:::tip
Ako prvo odaberete alat za mjerenje, TakeoffCraft koristi zadnju stavku odgovarajuće vrste ili otvara obrazac {{ui:Nova stavka}} s već odabranom tom vrstom.
:::

## Odaberite stavku kojom crtate

Kliknite stavku na popisu. Ona postaje stavka kojoj idu nove oznake, a njezine oznake označene su na svakom listu dok se ostale stišavaju. Ako otvoreni list nema nijedne njezine oznake, TakeoffCraft skače na list koji ih ima. Kliknite stavku ponovo da prestane označavanje; ona ostaje stavka kojom crtate.

Klikom na oznaku alatom {{ui:Odaberi}} također se njezina stavka postavlja kao trenutna.

## Postavite stavku

Uređivač stavke (**Stavka: (naziv)**) ima ova polja. Svako se sprema kad napustite polje ili pritisnete {{key:Enter}}, a svaka se promjena može poništiti.

| Polje | Što radi |
|---|---|
| {{ui:Naziv}} | Prikazuje se na popisu, u tablicama i izvozima. |
| {{ui:Upis}} | Linearno, Površina ili Broji. Zaključano je čim stavka ima oznake („Stavka s oznakama zadržava svoj upis“). |
| {{ui:Boja}} | Boja njezinih oznaka na ekranu i u označenom PDF-u. |
| {{ui:Jedinica}} | U kojoj se jedinici prijavljuje količina: LF ili m za linearne; SF, SY, SQ, ac, ha ili m² za površinske; EA za brojane. |
| {{ui:Mjeri i}} | Ostale vrste oznaka koje stavka prima, svaka sa svojom jedinicom. Pogledajte dolje. |
| {{ui:Visina}} (linearno) | Visina zida. Stavka tada prijavljuje i površinu zida (duljina × visina). Nizovi koji potječu iz modela BimCraft nose svoja vrata i prozore: ona se oduzimaju jednom, a stavka navodi bruto površinu, otvore i neto. Predmjer iz projekta BimCraft koji je odabrao način mjerenja ovdje se mjeri tim načinom (bilješka ga navodi, s izvorom, i kaže da ga količinski inženjer nije provjerio); način se ne može promijeniti u TakeoffCraftu. Opeke ili blokovi i mort iz tipa zida dolaze kao dvije komponente: jedinice za naručiti i volumen morta. |
| {{ui:Dubina}} (površina) | Dubina ili debljina, koristi se u formulama sklopa (npr. volumen betona). |
| {{ui:Gubitak %}} | Dodaje se količini prije određivanja cijene: 10 znači količina × 1.10. |
| {{ui:Materijal $/LF}} | Trošak materijala po jedinici. Oznaka slijedi jedinicu: $/SF, $/EA i tako dalje. |
| {{ui:Rad $/LF}} | Trošak rada po jedinici. |
| {{ui:CSI broj}} | CSI MasterFormat broj, kao `09 21 16` (ili samo odjeljak, `09`). Radni list „Po odjeljku“ prema njemu grupira troškove. Stavke iz [paketa za struke](topic:trade-packs) već ga imaju. |

Visina i dubina prihvaćaju stope i palce (`9'-0"`, `8' 6"`) ili decimalne stope (`9`) za imperijalne jedinice, a metre (`2.7`, `2700 mm`) za metričke jedinice. Jedinične cijene prihvaćaju iznose kao `12.50` ili `$1,250`, do četiri decimale. Pogledajte [Unos duljine, cijene i postotka](topic:entry-formats).

Ispod polja, **Izmjereno** prikazuje zbrojeve koje formule stavke mogu koristiti, s njihovim oznakama: Duljina (L), Broj nizova (N), Površina zida (A) za linearne; Površina (A), Opseg (P), Broj površina (N) za površinske; Broji (N) za brojane.

## Jedna stavka, više vrsta oznaka

Neke se stvari mjere na više načina: soba ima pod (površinu), podnu lajsnu duž zidova (duljinu) i vrata (broj). Umjesto tri stavke, napravite jednu:

1. Napravite stavku s njezinom glavnom vrstom, kao površinsku stavku `Soba 101`.
2. U njezinom uređivaču, pod {{ui:Mjeri i}}, označite {{ui:Linearno}}, {{ui:Broji}} ili oboje. Svaka dobiva jedinicu pokraj sebe.
3. Crtajte bilo kojim alatom čija vrsta stavka prima: uz `Soba 101` trenutnom, {{ui:Površina}} crta njezin pod, {{ui:Linearno}} njezinu podnu lajsnu, a {{ui:Broji}} njezina vrata. TakeoffCraft ne traži drugu stavku.

Popis stavki prikazuje svaku količinu (`50.00 SF + 2 EA`). U tablici količina redak stavke ima glavnu količinu, a svaka druga vrsta dobiva svoj redak ispod, kao **Soba 101 (broji)**, sa svojim gubitkom te cijenama materijala i rada. Izvozi, tablica po listu i legenda označenog PDF-a navode ih na isti način.

Glavna polja vrste ostaju njezina vlastita: visina ili dubina, nagib, odbici i 3D oblik primjenjuju se samo na njezine oznake. Osnovni niz nacrtan za površinsku stavku mjeri se običnim putem po tlocrtu i u 3D prikazu je ravan. Formule sklopa koriste zbrojeve glavne vrste.

Vrsta se može isključiti samo dok stavka nema njezinih oznaka; izbrišite ih ili ih prije premjestite na drugu stavku pod **Odabrana oznaka**. Oznake se mogu premjestiti na bilo koju stavku koja prima njihovu vrstu.

Dalje je {{ui:Sklop}}: komponente poput štapova ili ploča, svaka sa svojom formulom i cijenama. Pogledajte [Sklopovi i formule](topic:assemblies).

Na dnu: {{ui:Pomakni gore}} i {{ui:Pomakni dolje}} mijenjaju mjesto stavke na popisu i u izvozima, a {{ui:Izbriši stavku}} uklanja je sa svim njezinim oznakama (nakon potvrde; možete je poništiti).

Površinske stavke imaju još **Nagib** (ravnine krova mjerene po kosini: [Krovovi i nagibi](topic:roofs-and-slopes)) i **Odbitak** (njihove oznake oduzimaju se od površina drugih stavki: [Mjerenje površina](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linearne stavke imaju **Nagib** (Ravno, Zabat, Kosnica ili Dolina) i, za zabate i kosnice, **Nagib**.

## Cijene u tablici

Gubitak te cijene materijala i rada možete upisati i izravno u tablicu {{ui:Količine}} na dnu ({{ui:Po stavci}}). To je ista postavka kao u uređivaču.

## Kako funkcionira određivanje cijene

Za svaku stavku i svaku komponentu sklopa:

1. **S gubitkom** = količina × (1 + gubitak %).
2. **Materijal** = s gubitkom × materijal po jedinici, zaokruženo na cent.
3. **Rad** = s gubitkom × rad po jedinici, zaokruženo na cent.
4. **Ukupno** = materijal + rad.

{{ui:Ukupno za posao}} zbraja svaku stavku i svaku komponentu. Stavka može imati vlastite cijene i sklop istodobno; računaju se oba, pa zato ostavite cijene stavke na 0 kad komponente nose trošak.

## Rad po ekipi

Umjesto cijene rada po jedinici, rad stavke može dolaziti iz ekipe: koliko ekipa obavi po satu, koliko ima ljudi i koliko zarađuje svaki. Pod {{ui:Rad po ekipi}} u uređivaču stavke označite {{ui:Cijena rada prema ekipi}} i ispunite:

| Polje | Primjer |
|---|---|
| {{ui:Proizvodnja}} | `20` LF po satu (u jedinici stavke) za cijelu ekipu |
| {{ui:Veličina ekipe}} | `2` osobe |
| {{ui:Satnica $/sat po osobi}} | `45` |

TakeoffCraft izračunava iz količine s gubitkom:

- **sati ekipe** = količina ÷ proizvodnja (110 LF ÷ 20 = 5.5),
- **sati radnika** = sati ekipe × veličina ekipe (11),
- **dani ekipe** = sati ekipe ÷ 8 (0.69),
- **rad** = sati radnika × satnica ($495.00).

Uređivač prikazuje rezultat i cijenu koja iz njega proizlazi ($4.50/LF). Vlastita jedinična cijena rada stavke tada je samo za čitanje, u uređivaču i u tablici. Zaglavlje tablice {{ui:Količine}} dodaje sate radnika i dane ekipe cijelog posla. Izvozi navode sate svake ekipe, a u radnoj knjizi ćelija rada je formula nad ekipom (`ROUND(F2/20*2*45,2)`). Odznačite okvir da se vratite na cijenu po jedinici.

## Metričke stavke

Odaberite m (linearno) ili m² (površinski) kao jedinicu. Količine, visine i vrijednosti formula tada su u metrima. Mjerilo lista može biti bilo koja unaprijed zadana vrijednost ili kalibracija; jedinice i mjerila su neovisni.

## Dalje

- [Mjerenje linearnih nizova](topic:measure-linear)
- [Mjerenje površina s izrezima](topic:measure-areas)
- [Ručno brojanje](topic:count-by-hand)
