---
title: Kreiranje stavki predmera
summary: Napravite linijske, površinske i stavke brojanja, i podesite njihovu jedinicu, visinu ili dubinu, otpad, te stope za materijal i rad.
keywords: ekipa, stopa učinka, veličina ekipe, plata, sati, čovek-sati, sati radnika, dani ekipe, radni sati, stavka, nova stavka, uslov, više uslova, takođe meri, više vrsta, prostorija, linijski, površina, brojanje, jedinica, visina, dubina, otpad, materijal, rad, stopa, boja, trošak
from: 7fa5effc
---

**Stavka** je jedna stvar koju merite i određujete joj cenu: tip zida, završna obrada poda, plafon, vrata, svetiljka. Svaka oznaka koju nacrtate pripada nekoj stavki. Drugi programi ovo nazivaju uslovima.

Svaka stavka ima tip (i može uzeti i druge vrste oznaka, pogledajte [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks)):

| Unos | Crtate | Prikazuje | Jedinice |
|---|---|---|---|
| Linijski | Nizove povezanih tačaka | Dužinu, broj nizova i površinu zida kada ima visinu | LF ili m |
| Površina | Zatvorene konture, sa izrezima | Površinu, obim, broj površina | SF, SY, SQ, ac, ha ili m² |
| Brojanje | Jedan klik za jednu stvar | Koliko ih ima | EA |
| Unesena količina | Ništa: vi unosite količinu | Broj koji ste uneli (ili onaj uvezen iz CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ili m² |

## Unesene količine (bez crteža)

Neke stvari u predmeru se nikada ne crtaju: mobilizacija, dozvole, rezerva, paušalni podugovor, iskop i nasip koje je izračunao CivilCraft. Napravite ih kao **Unesenu količinu**:

1. Izaberite {{ui:Nova stavka}}, unesite naziv, izaberite {{ui:Unesena količina (bez crteža)}} i izaberite {{ui:Dodaj}}.
2. U uređivaču stavke izaberite {{ui:Jedinica}} (LS za paušal) i unesite {{ui:Količina}}: `1`, `2.5` ili `1,250`.
3. Postavite otpad i stope kao za bilo koju drugu stavku. Formule sklopa koriste `Q`, količinu, na primer `ceil(Q / 12)` za broj kamionskih tovara.

Unesena količina ne zahteva oznake i nikada ne čini predmer nepotpunim. Kada predmer ima oblasti ponude, uređivač takođe ima {{ui:Oblast ponude}}: količina se tada računa u toj oblasti, njenim alternativama i njenim ukupnim iznosima, kao da bi tu bila oznaka. Količine uvezene iz drugih aplikacija navode odakle potiču; pogledajte [Iskop i kote tačaka](topic:earthwork#cut-and-fill-from-civilcraft).

## Napravite stavku

1. U panelu {{ui:Stavke}} s desne strane izaberite {{ui:Nova stavka}}.
2. Unesite naziv, na primer `Unutrašnji zid tip A` ili `Pločice tepiha`.
3. Izaberite tip: {{ui:Linijski (dužina)}}, {{ui:Površina}} ili {{ui:Brojanje}}.
4. Izaberite {{ui:Dodaj}} (ili pritisnite {{key:Enter}}).
   Stavka se pojavljuje na listi sa sopstvenom bojom, postaje stavka kojom crtate, a njen uređivač se otvara ispod liste. Statusna traka kaže koji alat da izaberete sledeći.

Pritisnite {{key:Esc}} u obrascu da ga zatvorite bez dodavanja stavke.

:::tip
Ako prvo izaberete alat za merenje, TakeoffCraft koristi poslednju stavku odgovarajućeg tipa, ili otvara obrazac {{ui:Nova stavka}} sa već izabranim tipom.
:::

## Izaberite stavku kojom crtate

Kliknite stavku na listi. Ona postaje stavka kojoj pripadaju nove oznake, a njene oznake se ističu na svakom listu dok su ostale zatamnjene. Ako otvoreni list nema nijednu njenu oznaku, TakeoffCraft prelazi na list koji je ima. Ponovo kliknite stavku da prestanete s isticanjem; ona ostaje stavka kojom crtate.

Klik na oznaku alatom {{ui:Izaberi}} takođe čini njenu stavku trenutnom.

## Podesite stavku

Uređivač stavke (**Stavka: (naziv)**) ima ova polja. Svako se čuva kada napustite polje ili pritisnete {{key:Enter}}, a svaka izmena može se opozvati.

| Polje | Šta radi |
|---|---|
| {{ui:Naziv}} | Prikazuje se na listi, u tabelama i izvozima. |
| {{ui:Unos}} | Linijski, Površina ili Brojanje. Zaključano je kada stavka ima oznake („Stavka sa oznakama zadržava svoj tip“). |
| {{ui:Boja}} | Boja njenih oznaka na ekranu i u označenom PDF-u. |
| {{ui:Jedinica}} | U čemu se količina prikazuje: LF ili m za linijske; SF, SY, SQ, ac, ha ili m² za površine; EA za brojanje. |
| {{ui:Izmeri i}} | Ostale vrste oznaka koje stavka prihvata, svaka sa sopstvenom jedinicom. Pogledajte dole. |
| {{ui:Visina}} (linijski) | Visina zida. Stavka tada takođe prikazuje površinu zida (dužina × visina). Nizovi nastali iz BimCraft modela nose svoja vrata i prozore: oni se oduzimaju jednom, a stavka navodi bruto površinu, otvore i neto. Predmer iz BimCraft projekta koji je izabrao metodu merenja meri se ovde tom istom metodom (napomena je navodi, sa izvorom, i kaže da je nije proverio ovlašćeni procenjivač količina); metoda se ne može menjati u TakeoffCraft. Opeka ili blokovi i malter iz tipa zida stižu kao dve komponente: jedinice za naručivanje i zapremina maltera. |
| {{ui:Dubina}} (površina) | Dubina ili debljina, koristi se u formulama sklopa (na primer zapremina betona). |
| {{ui:Otpad %}} | Dodaje se količini pre određivanja cene: 10 znači količina × 1.10. |
| {{ui:Materijal $/LF}} | Trošak materijala po jedinici. Oznaka prati jedinicu: $/SF, $/EA i tako dalje. |
| {{ui:Rad $/LF}} | Trošak rada po jedinici. |
| {{ui:CSI broj}} | Njegov CSI MasterFormat broj, kao `09 21 16` (ili samo odeljak, `09`). Radni list „Po odeljku“ grupiše troškove po njemu. Stavke iz [paketa radova](topic:trade-packs) ga već imaju. |

Visina i dubina prihvataju stope i inče (`9'-0"`, `8' 6"`) ili decimalne stope (`9`) za imperijalne jedinice, a metre (`2.7`, `2700 mm`) za metričke jedinice. Stope prihvataju iznose kao `12.50` ili `$1,250`, do četiri decimale. Pogledajte [Unos dužine, stope i procenta](topic:entry-formats).

Ispod polja, **Izmereno** prikazuje zbirove koje formule stavke mogu koristiti, sa njihovim slovima: Dužina (L), Nizovi (N), Površina zida (A) za linijske; Površina (A), Obim (P), Površine (N) za površinske; Brojanje (N) za brojanje.

## Jedna stavka, više vrsta oznaka

Neke stvari se mere na više načina: soba ima pod (površinu), podnu letvu uz zidove (dužinu) i vrata (brojanje). Umesto tri stavke, napravite jednu:

1. Napravite stavku sa njenim glavnim tipom, kao površinsku stavku `Soba 101`.
2. U njenom uređivaču, ispod {{ui:Izmeri i}}, označite {{ui:Linijski}}, {{ui:Brojanje}} ili oba. Uz svaki se pojavljuje jedinica.
3. Crtajte bilo kojim alatom čiju vrstu stavka prihvata: sa `Soba 101` kao trenutnom, {{ui:Površina}} crta njen pod, {{ui:Linijski}} njenu podnu letvu, a {{ui:Brojanje}} njena vrata. TakeoffCraft ne traži drugu stavku.

Lista stavki prikazuje svaku količinu (`50.00 SF + 2 EA`). U tabeli količina red stavke ima glavnu količinu, a svaka druga vrsta dobija sopstveni red ispod, na primer **Soba 101 (brojanje)**, sa sopstvenim stopama za otpad, materijal i rad. Izvozi, tabela po listu i legenda označenog PDF-a navode ih na isti način.

Polja glavnog tipa ostaju samo njegova: visina ili dubina, nagib, odbitci i 3D oblik važe samo za njegove oznake. Niz podnih letvi nacrtan za površinsku stavku meri se jednostavno duž osnove i u 3D prikazu se vidi ravno. Formule sklopa koriste ukupne zbirove glavnog tipa.

Vrsta se može isključiti samo dok stavka nema njenih oznaka; obrišite ih ili ih prvo premestite na drugu stavku pod **Izabrana oznaka**. Oznake se mogu premestiti na bilo koju stavku koja prihvata njihovu vrstu.

Dalje je {{ui:Sklop}}: komponente, kao što su profili ili daske, svaka sa sopstvenom formulom i stopama. Pogledajte [Sklopovi i formule](topic:assemblies).

Na kraju: {{ui:Pomeri gore}} i {{ui:Pomeri dole}} menjaju mesto stavke na listi i u izvozima, a {{ui:Izbriši stavku}} uklanja je zajedno sa svim njenim oznakama (nakon potvrde; može se opozvati).

Površinske stavke takođe imaju **Nagib** (ravni krova mere se po nagibu: [Krovovi i nagibi](topic:roofs-and-slopes)) i **Odbitak** (njihove oznake se oduzimaju od površina drugih stavki: [Merenje površina](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linijske stavke imaju **Nagib** (Nivo, Zabat ili Kosnik/Slivnik) i, za zabate i kosnike, **Nagib**.

## Stope u tabeli

Takođe možete uneti {{ui:Otpad %}}, materijal i stope rada direktno u tabelu {{ui:Količine}} na dnu ({{ui:Po stavci}}). To je isto podešavanje kao u uređivaču.

## Kako funkcioniše određivanje cene

Za svaku stavku i svaku komponentu sklopa:

1. **Sa otpadom** = količina × (1 + otpad %).
2. **Materijal** = sa otpadom × materijal po jedinici, zaokruženo na cent.
3. **Rad** = sa otpadom × rad po jedinici, zaokruženo na cent.
4. **Ukupno** = materijal + rad.

{{ui:Ukupno za posao}} zbraja svaku stavku i svaku komponentu. Stavka može imati sopstvene stope i sklop u isto vreme; oba se računaju, pa ostavite stope stavke na 0 kada komponente nose trošak.

## Rad po ekipi

Umesto stope rada po jedinici, rad stavke može doći iz ekipe: koliko ona učini po satu, koliko ljudi i koliko svaki zarađuje. Ispod {{ui:Rad po ekipi}} u uređivaču stavke označite {{ui:Obračunaj rad po ekipi}} i popunite:

| Polje | Primer |
|---|---|
| {{ui:Učinak}} | `20` LF na sat (u jedinici stavke) za celu ekipu |
| {{ui:Veličina ekipe}} | `2` osobe |
| {{ui:Plata $/sat, po osobi}} | `45` |

TakeoffCraft računa, iz količine sa otpadom:

- **sati ekipe** = količina ÷ učinak (110 LF ÷ 20 = 5.5),
- **sati radnika** = sati ekipe × veličina ekipe (11),
- **dani ekipe** = sati ekipe ÷ 8 (0.69),
- **rad** = sati radnika × plata ($495.00).

Uređivač prikazuje rezultat i stopu koju on daje ($4.50/LF). Stopa rada same stavke tada je samo za čitanje, u uređivaču i u tabeli. Zaglavlje tabele {{ui:Količine}} dodaje sate radnika i dane ekipe za posao. Izvozi navode sate svake ekipe, a u radnoj svesci je ćelija rada formula za ekipu (`ROUND(F2/20*2*45,2)`). Isključite polje da se vratite na stopu po jedinici.

## Metričke stavke

Izaberite m (linijski) ili m² (površina) kao jedinicu. Količine, visine i vrednosti formula tada su u metrima. Razmera lista može biti bilo koja unapred određena ili kalibrisana; jedinice i razmere su nezavisne.

## Dalje

- [Merenje linijskih dužina](topic:measure-linear)
- [Merenje površina sa izrezima](topic:measure-areas)
- [Brojanje ručno](topic:count-by-hand)
