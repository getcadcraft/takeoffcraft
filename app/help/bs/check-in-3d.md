---
title: Provjera predmjera u 3D
summary: Pogledajte zidove, ploče i brojanja otvorenog lista kako stoje na crtežu, okrećite se oko njih i kliknite jedan da izaberete njegovu oznaku.
keywords: png, slika, fotografija, snimak ekrana, slaganje, spratovi, nivoi, izgled, glb, gltf, izvoz 3D, debljina zida, visina baze, otvor, gornja ivica vrata, 3d, tri d, provjera, pogled, zidovi, visina zida, ploča, dubina, zapremina, orbita, model, odabir, izometrija, perspektiva
from: fb16b4f7
---

Pogled 3D je provjera, a ne drugi crtež: predmjer lista na ekranu podiže na samom listu, pa nedostajući zid, dvostruka ploča ili slučajno brojanje odmah se vidi.

Prije početka: list treba razmjeru ([Postavljanje razmjere](topic:set-the-scale)). Visine i dubine trebaju stvarne feet, pa na listu bez razmjere {{ui:3D}} to kaže i ostaje na ravnom listu.

## Otvorite pogled 3D

1. Prikažite list koji želite provjeriti.
2. Izaberite {{ui:3D}} na traci koja prikazuje naziv i razmjeru lista, ili pritisnite {{key:3}}.
   Prvi put pogled 3D treba trenutak da se učita. List se crta na podlozi, a predmjer stoji na njemu u boji svake stavke.
3. Da se vratite, izaberite ponovo {{ui:3D}}, {{ui:Nazad na list}} ili pritisnite {{key:3}}. Izbor alata za crtanje (Linijski, Površinski, Brojanje i tako dalje) također vraća, jer se oznake crtaju na ravnom listu.

Prikazuje list na ekranu; mijenjajte listove u spisku listova, ili s {{key:PageDown}} i {{key:PageUp}}, a pogled 3D prati. Da vidite više spratova odjednom, složite ih (ispod).

## Šta vidite

| Oznaka | U 3D |
|---|---|
| Linijska trasa, stavka s visinom | Zid te visine duž trase. Zakrivljene trase prate krivu. |
| Linijska trasa, stavka bez visine | Linija na listu. Dajte stavki visinu pod **Stavka** da je podignete. |
| Površina, stavka s dubinom | Ploča te dubine, s otvorenim izrezima. |
| Površina, stavka bez dubine | Tanka ploča od 2" da se i dalje vidi. |
| Brojanje | Mali stub na svakoj brojanoj tački. |

Visina je polje {{ui:Visina}} linijske stavke, a dubina polje {{ui:Dubina}} površinske stavke, pod **Stavka** (pogledajte [Kreiranje stavki predmjera](topic:create-items)). Promijenite je i pogled 3D se odmah ažurira. Napomena ispod naziva lista kaže šta list sadrži, na primjer "Ovaj list u 3D: 2 zida, 1 ploča, 3 brojanja", i koliko trasa ili površina nema visinu ili dubinu. Klikovi prolaze kroz nju do pogleda.

Brojke se ne mijenjaju u 3D: površina zida je njegova tačna dužina puta visina, a zapremina ploče je njena neto površina (kontura minus izrezi, krive tačne) puta dubina. Krive se crtaju kao kratki ravni dijelovi samo na ekranu.

## Pogledajte okolo

| Radnja | Šta radi |
|---|---|
| Prevlačenje, ili prevlačenje srednjim dugmetom | Okreće oko predmjera. |
| {{key:Shift}} + prevlačenje, ili prevlačenje desnim dugmetom | Pomjera pogled. |
| Točkić miša | Uvećava i smanjuje na pokazivaču. |
| Prevlačenje s dva prsta na tačpedu | Okreće ({{key:Shift}} pomjera). Štipanje uvećava. |
| {{ui:Iso}}, {{ui:Gore}}, {{ui:Sprijeda}}, {{ui:Straga}}, {{ui:Lijevo}}, {{ui:Desno}}, {{ui:Dolje}} | Standardni pogledi, uokvireni na predmjer. Pogled 3D se otvara u {{ui:Iso}}. |
| {{ui:Perspektiva}} | Perspektiva uključena ili isključena (paralelna kad je isključena). |
| {{ui:Zumiraj na sve}} ili {{key:F}} | Cijeli list. |
| {{ui:List}} | Prikazuje ili skriva crtež na podlozi. |
| Kocka pogleda, gore desno | Kliknite stranu, ivicu ili ugao da gledate odatle; prevucite je da se okrećete; prevucite njen prsten kompasa da okrenete; dugme kuće vraća na {{ui:Iso}}. |

Ugao prikazuje kocku pogleda, malu ikonu osa X, Y, Z ili ništa: izaberite u {{ui:Postavke}}, na kartici TakeoffCraft, pod **Indikator ugla** ([Postavke TakeoffCraft](topic:settings)). Ravni list nema indikator ugla.

:::touch
Jedan prst okreće; dva prsta štipaju za uvećavanje i pomjeraju za pomjeranje. Dodir bira.
:::

## Zidovi s debljinom, podlogom i otvorima

Linijska stavka s visinom stoji kao tanka traka. Da je vidite kao pravi zid, dajte stavki njen oblik pod **U 3D** u njenim postavkama:

- **Debljina zida** (8", 0.2 m): zid postaje čvrsto tijelo, centrirano na liniju koju ste nacrtali, sa spojenim uglovima.
- **Visina baze**: zid počinje toliko iznad poda (podgled, red gornjih ormarića). I površinske stavke je imaju: plafon na 9'-0".
- **Gornja ivica otvora**: oduzeti segment (vrata, [Oduzimanje dijela trase](topic:measure-linear#deduct-a-part-of-a-run)) zadržava zid iznad te visine, pa se vrata vide kao vrata. Bez nje, oduzeti segment ostavlja prazninu do vrha.

Ovi podaci samo oblikuju pogled 3D: količine (dužina, površina zida, troškovi) ostaju kakve su bile.

## Složite spratove

1. Otvorite PDF-ove svakog sprata.
2. U pogledu 3D izaberite {{ui:Nivoi…}} i upišite kotu svakog sprata, npr. `0` za prizemlje i `12'` za sljedeći. Prazno izostavlja list.
3. Izaberite {{ui:Slaži}}. Svaki list s nivoom prikazuje svoj predmjer na svojoj visini; list na ekranu leži pod vlastitim spratom, a ostali su obrisani. Napomena kaže koliko je spratova složeno.

Listovi se poravnavaju po svom položaju na stranici, pa ovo radi za osnove spratova iscrtane na isti način (ista veličina i položaj lista). List s nivoom bez razmjere se izostavlja, a napomena to kaže. Izaberite {{ui:Slaži}} ponovo za jedan list u isto vrijeme. Nivoi se čuvaju uz predmjer.

## Sačuvajte pogled 3D kao sliku

Izaberite {{ui:PNG}} na traci 3D za sliku pogleda kakav je na ekranu (`… 3D.png`); {{key:Shift}} + klik na {{ui:PNG}} ga pravi dvostruko većim (`… 3D@2x.png`), za štampu.

## Sačuvajte pogled 3D kao model

Izaberite {{ui:GLB}} na traci 3D. Dobijate datoteku `.glb` (glTF, binarna) onoga što pogled prikazuje — sprat na ekranu ili svaki složeni sprat — koju otvaraju drugi 3D programi: jedan objekat po oznaci, nazvan po njenoj stavki, u boji stavke, u metrima s Y prema gore. Sam list i obrisi nisu u njoj.

## Odaberite oznaku iz 3D

Kliknite zid, ploču, lim ili stub. Njegova oznaka postaje odabrana oznaka, kao da ste je kliknuli na listu: prikazuje se pod **Odabrana oznaka**, njena stavka postaje trenutna, a statusna traka daje njenu dužinu i visinu, ili površinu, dubinu i cubic yards. {{key:Shift}} + klik dodaje oznake u izbor ili ih izbacuje iz njega. {{key:Delete}} briše odabrane oznake, a {{key:Mod+Z}} ih vraća; {{key:Esc}} ne bira ništa. Na listu, iste oznake ostaju odabrane.

:::tip
Crtež prati temu: u temi Model list na podlozi postaje taman, kao i ravni prikaz.
:::
