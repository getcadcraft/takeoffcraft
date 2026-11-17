---
title: Provjera izvedbe u 3D
summary: Pogledajte zidove, ploče i brojanja otvorenog lista kako stoje na crtežu, kružite oko njih i kliknite jedno da odaberete njegovu oznaku.
keywords: png, slika, fotografija, snimka zaslona, složi, etaže, razine, kota, glb, gltf, izvoz 3D, debljina zida, visina podnožja, otvor, gornja kota vrata, 3d, tri d, provjera, prikaz, zidovi, visina zida, ploča, dubina, volumen, kruženje, model, odabir, izometrija, perspektiva
from: fb16b4f7
---

3D prikaz je provjera, a ne drugi crtež: postavlja izvedbu lista na ekran, uspravno na sam list, pa se nedostajući zid, udvostručena ploča ili lutajuće brojanje vide na prvi pogled.

Prije početka: list treba mjerilo ([Postavljanje mjerila](topic:set-the-scale)). Visine i dubine trebaju prave stope, pa na listu bez mjerila {{ui:3D}} to kaže i ostaje na ravnom listu.

## Otvaranje 3D prikaza

1. Prikažite list koji želite provjeriti.
2. Odaberite {{ui:3D}} na traci koja prikazuje naziv lista i mjerilo, ili pritisnite {{key:3}}.
   Prvi put 3D prikaz treba trenutak da se učita. List je nacrtan na tlu, a izvedba stoji na njemu u boji svake stavke.
3. Za povratak odaberite {{ui:3D}} ponovno, {{ui:Natrag na list}} ili pritisnite {{key:3}}. Odabir alata za crtanje (Linearno, Površina, Brojanje i tako dalje) također vraća, jer se oznake crtaju na ravnom listu.

Prikazuje list na ekranu. Mijenjajte listove na popisu listova ili pomoću {{key:PageDown}} i {{key:PageUp}}, a 3D prikaz slijedi. Da vidite više etaža odjednom, složite ih (u nastavku).

## Što vidite

| Oznaka | U 3D |
|---|---|
| Linearna dionica, stavka s visinom | Zid te visine duž dionice. Zakrivljene dionice slijede krivulju. |
| Linearna dionica, stavka bez visine | Linija na listu. Dajte stavki visinu pod **Stavka** da je uspravite. |
| Površina, stavka s dubinom | Ploča te dubine, s otvorenim izrezima. |
| Površina, stavka bez dubine | Tanka 2" ploča, da se i dalje vidi. |
| Brojanje | Mali stup na svakoj točki brojanja. |

Visina je polje {{ui:Visina}} linearne stavke, a dubina polje {{ui:Dubina}} stavke površine, pod **Stavka** (vidi [Stvaranje stavki izvedbe](topic:create-items)). Promijenite je i 3D prikaz se odmah ažurira. Bilješka ispod naziva lista govori što list sadrži, npr. „Ovaj list u 3D: 2 zida, 1 ploča, 3 brojanja“, te koliko dionica ili površina nema visinu ili dubinu. Klikovi prolaze kroz nju do prikaza.

Brojke se u 3D ne mijenjaju: površina zida je njegova točna duljina puta visina, a volumen ploče je njezina neto površina (obris minus izrezi, krivulje točno) puta dubina. Krivulje se na ekranu crtaju samo kao kratki ravni dijelovi.

## Gledanje oko

| Radnja | Što čini |
|---|---|
| Povlačenje, ili povlačenje srednjom tipkom | Kruži oko izvedbe. |
| {{key:Shift}} + povlačenje, ili povlačenje desnom tipkom | Pomicanje prikaza. |
| Kotačić miša | Uvećava i smanjuje na pokazivaču. |
| Pomicanje dvama prstima na trackpadu | Kruženje ({{key:Shift}} pomiče). Stiskanje zumira. |
| {{ui:Izo}}, {{ui:Gore}}, {{ui:Naprijed}}, {{ui:Straga}}, {{ui:Lijevo}}, {{ui:Desno}}, {{ui:Dolje}} | Standardni pogledi, uokvireni na izvedbu. 3D prikaz se otvara u {{ui:Izo}}. |
| {{ui:Perspektiva}} | Perspektiva uključena ili isključena (paralelna kad je isključena). |
| {{ui:Zumiraj opseg}} ili {{key:F}} | Cijeli list. |
| {{ui:List}} | Prikazuje ili skriva crtež na tlu. |
| Kocka pogleda, gore desno | Kliknite stranu, rub ili kut za gledanje odande; povucite je za kruženje; povucite njen prsten kompasa za okretanje; gumb kućice vraća na {{ui:Izo}}. |

Kut prikazuje kocku pogleda, malu ikonu osi X, Y, Z ili ništa: odaberite u {{ui:Postavke}}, na kartici TakeoffCraft, pod **Pokazivač kuta** ([Postavke TakeoffCraft-a](topic:settings)). Ravni list nema pokazivač kuta.

:::touch
Jedan prst kruži; dva prsta stišću za zumiranje i pomiču za pomicanje prikaza. Dodir odabire.
:::

## Zidovi s debljinom, podnožjem i otvorima

Linearna stavka s visinom stoji kao tanka traka. Da je vidite kao pravi zid, dajte stavki njezin oblik pod **U 3D** u njezinim postavkama:

- **Debljina zida** (8", 0.2 m): zid postaje tijelo, centrirano na liniji koju ste nacrtali, s kosim spojevima kutova.
- **Visina podnožja**: zid počinje toliko iznad poda (podhodnik, gornji ormarići). Stavke površine također je imaju: strop na 9'-0".
- **Gornja kota otvora**: oduzeti segment (vrata, [Oduzimanje dijela dionice](topic:measure-linear#deduct-a-part-of-a-run)) zadržava zid iznad te visine, pa se vrata vide kao vrata. Bez nje oduzeti segment ostavlja prazninu do vrha.

Ovo samo oblikuje 3D prikaz: količine (duljina, površina zida, troškovi) ostaju kakve jesu.

## Slaganje etaža

1. Otvorite PDF-ove svake etaže.
2. U 3D prikazu odaberite {{ui:Razine…}} i upišite kotu svake etaže, poput `0` za prizemlje i `12'` za sljedeću. Prazno izostavlja list.
3. Odaberite {{ui:Složi}}. Svaki list s razinom prikazuje svoju izvedbu na svojoj visini; list na ekranu leži pod svojom etažom, a ostali su obrubljeni. Bilješka kaže koliko je etaža složeno.

Listovi se poravnavaju prema svom mjestu na stranici, pa to radi za tlocrte iscrtane jednako (ista veličina i položaj lista). List s razinom, ali bez mjerila, izostavlja se, a bilješka to kaže. Odaberite {{ui:Složi}} ponovno za jedan list u isto vrijeme. Razine se spremaju s izvedbom.

## Spremanje 3D prikaza kao slike

Odaberite {{ui:PNG}} na 3D traci za sliku prikaza kakav je na ekranu (`… 3D.png`). {{key:Shift}} + klik na {{ui:PNG}} čini je dvostruko većom (`… 3D@2x.png`), za ispis.

## Spremanje 3D prikaza kao modela

Odaberite {{ui:GLB}} na 3D traci. Dobivate datoteku `.glb` (glTF, binarna) onoga što prikaz prikazuje, bilo etažu na ekranu ili sve složene etaže, koju druge 3D aplikacije mogu otvoriti: jedan objekt po oznaci, nazvan po njezinoj stavki, u boji stavke, u metrima s Y osi prema gore. List sam i obrisi u njoj nisu.

## Odabir oznake iz 3D prikaza

Kliknite zid, ploču, tanku ploču ili stup. Njegova oznaka postaje odabrana oznaka, točno kao da ste je kliknuli na listu: prikazuje se pod **Odabrana oznaka**, njezina stavka postaje trenutačna, a statusna traka daje njezinu duljinu i visinu, ili površinu, dubinu i kubne jardi. {{key:Shift}} + klik dodaje oznake odabiru ili ih uklanja. {{key:Delete}} briše odabrane oznake, a {{key:Mod+Z}} ih vraća; {{key:Esc}} ne odabire ništa. Natrag na listu iste oznake ostaju odabrane.

:::tip
Crtež prati temu: u Modelu list na tlu potamni kao i ravni prikaz.
:::
