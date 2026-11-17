---
title: Kreiraj stavke predmjera
summary: Napravi linijske, površinske i brojne stavke i postavi njihovu jedinicu, visinu ili dubinu, otpad te stope za materijal i rad.
keywords: ekipa, stopa učinka, veličina ekipe, plata, sati, sati radnika, dani ekipe, radni sati, stavka, nova stavka, uslov, višestruki uslov, također izmjeri, više tipova, prostorija, linijski, površina, brojanje, jedinica, visina, dubina, otpad, materijal, rad, stopa, boja, cijena
from: 7fa5effc
---

**Stavka** je jedna stvar koju mjerite i cijenite: tip zida, završna obrada poda, plafon, vrata, svjetiljka. Svaka oznaka koju nacrtate pripada stavki. Drugi programi to nazivaju uvjetima.

Svaka stavka ima tip (i može primiti i druge vrste oznaka, vidi [Jedna stavka, više vrsta oznaka](topic:create-items#one-item-several-kinds-of-marks)):

| Unos | Crtate | Izvještava | Jedinice |
|---|---|---|---|
| Linijski | Nizove povezanih tačaka | Dužinu, broj nizova i površinu zida kada ima visinu | LF ili m |
| Površina | Zatvorene konture, sa izrezima | Površinu, obim, broj površina | SF, SY, SQ, ac, ha ili m² |
| Brojanje | Jedan klik za svaku stvar | Koliko ih ima | EA |
| Upisana količina (bez crteža) | Ništa: upisujete količinu | Broj koji ste upisali (ili onaj preuzet iz CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha ili m² |

## Upisane količine (bez crteža)

Neke stvari u procjeni se nikada ne crtaju: mobilizacija, dozvole, rezerva, paušalni podugovor, iskop i nasip koje je izračunao CivilCraft. Napravite ih kao **Upisana količina**:

1. Odaberi {{ui:New item}}, upiši naziv, odaberi {{ui:Typed quantity (no drawing)}} i odaberi {{ui:Add}}.
2. U uređivaču stavke odaberi {{ui:Unit}} (LS za paušalni iznos) i upiši {{ui:Quantity}}: `1`, `2.5` ili `1,250`.
3. Postavi otpad i stope kao i za svaku drugu stavku. Formule sklopa koriste `Q`, količinu, na primjer `ceil(Q / 12)` utovari kamiona.

Upisana količina ne zauzima oznake i nikada ne čini procjenu nepotpunom. Kada predmjer ima ponudne cjeline, uređivač također ima {{ui:Bid area}}: količina se tada računa u toj cjelini, njenim alternativama i njenim ukupnim iznosima, baš kao i oznaka tamo. Količine preuzete iz druge aplikacije navode odakle potiču; vidi [Zemljani radovi i kote](topic:earthwork#cut-and-fill-from-civilcraft).

## Napravi stavku

1. U panelu {{ui:Items}} s desne strane odaberi {{ui:New item}}.
2. Upiši naziv, na primjer `Unutrašnji zid tip A` ili `Tepih u pločicama`.
3. Odaberi tip: {{ui:Linearno (dužina)}}, {{ui:Area}} ili {{ui:Count}}.
4. Odaberi {{ui:Add}} (ili pritisni {{key:Enter}}).
   Stavka se pojavljuje na listi sa svojom bojom, postaje stavka kojom crtate, a njen uređivač se otvara ispod liste. Statusna traka kaže koji alat da odaberete sljedeći.

Pritisni {{key:Esc}} u obrascu da ga zatvoriš bez dodavanja stavke.

:::tip
Ako prvo odaberete alat za mjerenje, TakeoffCraft koristi posljednju stavku odgovarajućeg tipa ili otvara obrazac {{ui:New item}} sa tim tipom već odabranim.
:::

## Odaberi stavku kojom crtaš

Klikni stavku na listi. Ona postaje stavka kojoj idu nove oznake, a njene oznake se ističu na svakom listu dok ostale blijede. Ako otvoreni list nema nijednu njenu oznaku, TakeoffCraft skače na list koji ih ima. Klikni stavku ponovo da prestane isticanje; ona ostaje stavka kojom crtate.

Klik na oznaku alatom {{ui:Select}} također čini njenu stavku trenutnom.

## Podesi stavku

Uređivač stavke (**Stavka: (naziv)**) ima ova polja. Svako se sprema kada napustite polje ili pritisnete {{key:Enter}}, a svaka promjena se može poništiti.

| Polje | Šta radi |
|---|---|
| {{ui:Name}} | Prikazuje se na listi, u tabelama i izvozima. |
| {{ui:Type}} | Linijski, Površina ili Brojanje. Zaključano je kada stavka ima oznake ("Stavka s oznakama zadržava svoj tip"). |
| {{ui:Color}} | Boja njenih oznaka na ekranu i u označenom PDF-u. |
| {{ui:Unit}} | U čemu se količina izvještava: LF ili m za linijski; SF, SY, SQ, ac, ha ili m² za površinu; EA za brojanje. |
| {{ui:Also measure}} | Ostale vrste oznaka koje stavka prima, svaka sa svojom jedinicom. Vidi dolje. |
| {{ui:Height}} (linear) | Visina zida. Stavka tada također izvještava površinu zida (dužina × visina). Nizovi koji potiču iz BimCraft modela nose svoja vrata i prozore: ona se oduzimaju jednom, a stavka navodi bruto površinu, otvore i neto. Predmjer iz BimCraft projekta koji je odabrao metodu mjerenja mjeri se tom metodom i ovdje (napomena je navodi, s izvorom, i kaže da je neprovjerena od strane ovlaštenog procjenitelja količina); u TakeoffCraft nije moguće mijenjati metodu. Cigle ili blokovi i malter iz tipa zida dolaze kao dvije komponente: jedinice za naručivanje i zapremina maltera. |
| {{ui:Depth}} (area) | Dubina ili debljina, koristi se u formulama sklopa (na primjer zapremina betona). |
| {{ui:Waste %}} | Dodaje se količini prije obračuna cijene: 10 znači količina × 1.10. |
| Materijal $/LF | Trošak materijala po jedinici. Oznaka prati jedinicu: $/SF, $/EA itd. |
| Rad $/LF | Trošak rada po jedinici. |
| {{ui:CSI number}} | CSI MasterFormat broj, kao `09 21 16` (ili samo divizija, `09`). Radni list Po diviziji iz radne knjige grupiše troškove prema njemu. Stavke iz [paketa radova](topic:trade-packs) već ga imaju. |

Visina i dubina primaju stope i inče (`9'-0"`, `8' 6"`) ili decimalne stope (`9`) za imperijalne jedinice, te metre (`2.7`, `2700 mm`) za metričke jedinice. Stope primaju iznose poput `12.50` ili `$1,250`, do četiri decimale. Vidi [Unos dužine, stope i procenta](topic:entry-formats).

Ispod polja, **Izmjereno** prikazuje zbirove koje formule stavke mogu koristiti, uz njihova slova: Dužina (L), Nizovi (N), Površina zida (A) za linijski; Površina (A), Obim (P), Površine (N) za površinu; Brojanje (N) za brojanje.

## Jedna stavka, više vrsta oznaka

Neke stvari se mjere na više načina: prostorija ima pod (površinu), podnožnu letvu uz zidove (dužinu) i vrata (brojanje). Umjesto tri stavke, napravite jednu:

1. Napravi stavku sa njenim glavnim tipom, na primjer površinska stavka `Prostorija 101`.
2. Pod {{ui:Also measure}} u njenom uređivaču označi {{ui:Linearno (dužina)}}, {{ui:Count}} ili oboje. Uz svaku se dodaje jedinica.
3. Crtaj bilo kojim alatom čija vrsta stavka prima: uz trenutnu stavku `Prostorija 101`, {{ui:Area}} crta njen pod, {{ui:Linear}} njenu podnožnu letvu, a {{ui:Count}} njena vrata. TakeoffCraft ne traži drugu stavku.

Lista stavki prikazuje svaku količinu (`50.00 SF + 2 EA`). U tabeli količina red stavke ima njenu glavnu količinu, a svaka druga vrsta dobija svoj red ispod, na primjer **Prostorija 101 (brojanje)**, sa vlastitim otpadom te stopama za materijal i rad. Izvozi, tabela po listu i legenda označenog PDF-a navode ih na isti način.

Polja glavnog tipa ostaju njegova vlastita: visina ili dubina, nagib, odbici i 3D oblik važe samo za njegove oznake. Niz podnožne letve nacrtan za površinsku stavku mjeri se jednostavno duž plana i u 3D prikazuje se ravno. Formule sklopa koriste zbirove glavnog tipa.

Vrsta se može odznačiti samo dok stavka nema njenih oznaka; prvo ih izbriši ili premjesti u drugu stavku pod **Odabrana oznaka**. Oznake se mogu premjestiti u bilo koju stavku koja prima njihovu vrstu.

Dalje dolje je {{ui:Assembly}}: komponente poput stubova ili greda, svaka sa svojom formulom i stopama. Vidi [Sklopovi i formule](topic:assemblies).

Na dnu: {{ui:Move up}} i {{ui:Move down}} mijenjaju mjesto stavke na listi i u izvozima, a {{ui:Delete item}} je uklanja sa svim njenim oznakama (nakon potvrde; možete poništiti).

Površinske stavke također imaju **Nagib** (ravni krova mjere se po kosini: [Krovovi i nagibi](topic:roofs-and-slopes)) i **Odbitak** (njihove oznake se oduzimaju od površina drugih stavki: [Mjerenje površina](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Linijske stavke imaju **Pad** (Ravno, Zabat, Ugao ili Žlijeb) i, za zabate i uglove, **Nagib**.

## Stope u tabeli

Takođe možete upisati {{ui:Waste %}} i stope za materijal i rad direktno u tabelu {{ui:Quantities}} na dnu ({{ui:By item}}). To je ista postavka kao u uređivaču.

## Kako funkcioniše obračun cijene

Za svaku stavku i svaku komponentu sklopa:

1. **Sa otpadom** = količina × (1 + Otpad %).
2. **Materijal** = sa otpadom × materijal po jedinici, zaokruženo na cent.
3. **Rad** = sa otpadom × rad po jedinici, zaokruženo na cent.
4. **Ukupno** = materijal + rad.

{{ui:Job total}} zbraja svaku stavku i svaku komponentu. Stavka može imati vlastite stope i sklop istovremeno; računaju se oba, zato ostavite stope stavke na 0 kada komponente nose trošak.

## Rad po ekipi

Umjesto stope rada po jedinici, rad stavke može dolaziti iz ekipe: koliko ona uradi po satu, koliko ljudi i koliko zarađuje svaki. Pod {{ui:Labor by crew}} u uređivaču stavke označi {{ui:Obračunaj rad prema ekipi}} i popuni:

| Polje | Primjer |
|---|---|
| Učinak | `20` LF na sat (u jedinici stavke) za cijelu ekipu |
| {{ui:Crew size}} | `2` osobe |
| Plata $/sat po osobi | `45` |

TakeoffCraft računa, iz količine sa otpadom:

- **sati ekipe** = količina ÷ učinak (110 LF ÷ 20 = 5.5),
- **sati radnika** = sati ekipe × veličina ekipe (11),
- **dani ekipe** = sati ekipe ÷ 8 (0.69),
- **rad** = sati radnika × plata ($495.00).

Uređivač prikazuje rezultat i stopu koja iz njega proizlazi ($4.50/LF). Vlastita stopa rada stavke tada je samo za čitanje, u uređivaču i u tabeli. Zaglavlje tabele {{ui:Quantities}} dodaje sate radnika i dane ekipe posla. Izvozi navode sate svake ekipe, a u radnoj knjizi ćelija rada je formula nad ekipom (`ROUND(F2/20*2*45,2)`). Odznači polje da se vratiš na stopu po jedinici.

## Metričke stavke

Odaberi m (linijski) ili m² (površina) kao jedinicu. Količine, visine i vrijednosti formula su tada u metrima. Razmjera lista može biti bilo koja unaprijed zadata ili kalibrisana; jedinice i razmjere su nezavisne.

## Dalje

- [Mjerenje linijskih nizova](topic:measure-linear)
- [Mjerenje površina sa izrezima](topic:measure-areas)
- [Brojanje ručno](topic:count-by-hand)
