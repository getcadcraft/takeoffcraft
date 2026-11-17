---
title: Proverite predmer u 3D
summary: Pogledajte zidove, ploče i brojanja otvorenog lista kako stoje na crtežu, obrnite se oko njih i kliknite jedan da izaberete njegovu oznaku.
keywords: png, slika, fotografija, snimak ekrana, slaganje, spratovi, nivoi, izgled, glb, gltf, izvoz 3D, debljina zida, visina baze, otvor, nadvratnik, 3d, tri d, provera, pregled, zidovi, visina zida, ploča, dubina, zapremina, orbita, model, izbor, izometrija, perspektiva
from: fb16b4f7
---

Pogled 3D je provera, a ne drugi crtež: postavlja predmer lista na ekranu uspravno na sam list, pa se nedostajući zid, udvostručena ploča ili zalutalo brojanje vide na prvi pogled.

Pre početka: list treba razmeru ([Podesite razmeru](topic:set-the-scale)). Visine i dubine traže prave stope, pa na listu bez razmere {{ui:3D}} to kaže i ostaje na ravnom listu.

## Otvorite pogled 3D

1. Prikažite list koji želite da proverite.
2. Izaberite {{ui:3D}} na traci koja prikazuje naziv i razmeru lista, ili pritisnite {{key:3}}.
   Prvi put se pogled 3D učitava malo. List je nacrtan na podlozi, a predmer stoji na njemu u boji svake stavke.
3. Da se vratite, izaberite {{ui:3D}} ponovo, {{ui:Nazad na list}}, ili pritisnite {{key:3}}. Izbor alata za crtanje (Linearno, Površina, Brojanje i tako dalje) takođe vraća, jer se oznake crtaju na ravnom listu.

Prikazuje list na ekranu; promenite listove u spisku listova, ili sa {{key:PageDown}} i {{key:PageUp}}, a pogled 3D prati. Da vidite više spratova odjednom, slažite ih (dole).

## Šta vidite

| Oznaka | U 3D |
|---|---|
| Linearna deonica, stavka sa visinom | Zid te visine duž deonice. Krive deonice prate krivu. |
| Linearna deonica, stavka bez visine | Linija na listu. Dajte stavki visinu pod **Stavka** da je uspravite. |
| Površina, stavka sa dubinom | Ploča te dubine, sa otvorenim isečcima. |
| Površina, stavka bez dubine | Tanka ploča od 2" da bi se i dalje videla. |
| Brojanje | Mali stub na svakoj prebrojanoj tački. |

Visina je polje {{ui:Visina}} linearne stavke, a dubina polje {{ui:Dubina}} stavke površine, pod **Stavka** (pogledajte [Kreirajte stavke predmera](topic:create-items)). Promenite ga i pogled 3D se odmah ažurira. Napomena ispod naziva lista kaže šta list sadrži, na primer „Ovaj list u 3D: 2 zida, 1 ploča, 3 brojanja“, i koliko deonica ili površina nema visinu ili dubinu. Klikovi prolaze kroz nju do pogleda.

Brojke se ne menjaju u 3D: površina zida je njena tačna dužina puta visina, a zapremina ploče je njena neto površina (kontura minus isečci, krive tačne) puta dubina. Krive se crtaju kao kratki pravi delovi samo na ekranu.

## Pogledajte okolo

| Radnja | Šta radi |
|---|---|
| Prevlačenje, ili prevlačenje srednjim dugmetom | Orbita oko predmera. |
| {{key:Shift}} + prevlačenje, ili prevlačenje desnim dugmetom | Pomeranje. |
| Točkić miša | Uvećavanje i umanjivanje na mestu pokazivača. |
| Dvoprsto prevlačenje na trackpadu | Orbita ({{key:Shift}} pomera). Štipanje uvećava. |
| {{ui:Izometrija}}, {{ui:Gore}}, {{ui:Ispred}}, {{ui:Iza}}, {{ui:Levo}}, {{ui:Desno}}, {{ui:Dole}} | Standardni pogledi, uokvireni na predmer. Pogled 3D se otvara u {{ui:Izometrija}}. |
| {{ui:Perspektiva}} | Perspektiva uključena ili isključena (paralelna kad je isključena). |
| {{ui:Uklopi sve}} ili {{key:F}} | Ceo list. |
| {{ui:List}} | Prikazuje ili skriva crtež na podlozi. |
| Kocka pregleda, gore desno | Kliknite stranu, ivicu ili ugao da gledate odatle; prevucite je za orbitu; prevucite njen prsten kompasa da okrenete; dugme kućice vraća na {{ui:Izometrija}}. |

Ugao prikazuje kocku pregleda, mali indikator osa X, Y, Z, ili ništa. Birate u {{ui:Podešavanja}}, na kartici TakeoffCraft, pod **Indikator ugla** ([Podešavanja TakeoffCraft](topic:settings)). Ravni list nema indikator ugla.

:::touch
Jedan prst orbitira; dva prsta štipaju za uvećavanje i prelaze za pomeranje. Dodir bira.
:::

## Zidovi sa debljinom, bazom i otvorima

Linearna stavka sa visinom stoji kao tanka traka. Da je vidite kao pravi zid, dajte joj oblik pod **U 3D** u njenim podešavanjima:

- **Debljina zida** (8", 0.2 m): zid postaje čvrst, centriran na liniju koju ste nacrtali, sa kosim uglovima.
- **Visina baze**: zid počinje toliko iznad poda (podgled, gornji elementi kuhinje). Stavke površina takođe je imaju: plafon na 9'-0".
- **Visina nadvratnika**: odbijen segment (vrata, [Odbijanje dela deonice](topic:measure-linear#deduct-a-part-of-a-run)) zadržava zid iznad te visine, pa se vrata vide kao vrata. Bez toga, odbijen segment ostavlja prazninu do vrha.

Ovo samo oblikuje pogled 3D: količine (dužina, površina zida, troškovi) ostaju kakve su bile.

## Slažite spratove

1. Otvorite PDF-ove svih spratova.
2. U pogledu 3D izaberite {{ui:Nivoi…}} i upišite visinu svakog sprata, na primer `0` za prizemlje i `12'` za sledeći. Prazno izostavlja list.
3. Izaberite {{ui:Slaganje}}. Svaki list sa nivoom prikazuje svoj predmer na svojoj visini. List na ekranu leži pod svojim spratom, a ostali su ocrtani. Napomena kaže koliko je spratova složeno.

Listovi se poklapaju po mestu na stranici, pa ovo radi za planove spratova iscrtane na isti način (ista veličina i položaj lista). List sa nivoom ali bez razmere se izostavlja, a napomena to kaže. Izaberite {{ui:Slaganje}} ponovo za jedan list po jedan. Nivoi se čuvaju uz predmer.

## Sačuvajte pogled 3D kao sliku

Izaberite {{ui:PNG}} na traci 3D za sliku pogleda kakav je na ekranu (`… 3D.png`). {{key:Shift}} + klik na {{ui:PNG}} pravi je dvostruko veću (`… 3D@2x.png`), za štampu.

## Sačuvajte pogled 3D kao model

Izaberite {{ui:GLB}} na traci 3D. Dobijate datoteku `.glb` (glTF, binarno) onoga što pogled prikazuje, bilo list na ekranu ili svaki složeni sprat. Drugi 3D programi je otvaraju: jedan objekat po oznaci, nazvan po njenoj stavci, u boji stavke, u metrima sa Y osom na gore. Sam list i ocrtavanja nisu u njoj.

## Izaberite oznaku iz 3D

Kliknite zid, ploču, ploču ili stub. Njegova oznaka postaje izabrana oznaka, tačno kao da ste je kliknuli na listu: prikazuje se pod **Izabrana oznaka**, njena stavka postaje tekuća, a statusna traka daje njenu dužinu i visinu, ili površinu, dubinu i kubne jarde. {{key:Shift}} + klik dodaje oznake u izbor ili ih vadi. {{key:Delete}} briše izabrane oznake, a {{key:Mod+Z}} ih vraća; {{key:Esc}} ne bira ništa. Vraćene na list, iste oznake ostaju izabrane.

:::tip
Crtež prati temu: u temi Model, list na podlozi postaje taman kao ravni prikaz.
:::
